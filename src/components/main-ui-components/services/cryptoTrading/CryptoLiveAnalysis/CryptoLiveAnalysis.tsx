"use client";

import React, { useEffect, useState, useRef } from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";
import Image from "next/image";

const generateChartData = (direction: "down" | "up" = "down") => {
  const points = 40;
  const trend = direction === "down" ? -0.5 : 0.5;
  const base = direction === "down" ? 100 : 90;

  return Array.from({ length: points }, (_, i) => {
    const progress = i / points;
    const curve = Math.sin(progress * Math.PI * 2) * 2;
    const bias = trend * i;
    const noise = (Math.random() - 0.5) * 1.5;
    return { time: i, value: base + bias + curve + noise };
  });
};

type Coin = {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  binanceSymbol?: string;
};

const CryptoLiveAnalysis = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [chartData, setChartData] = useState(generateChartData());
  const [loading, setLoading] = useState(true);
  const lastPrice = useRef<number | null>(null);

  // Fetch top 7 coins (CoinGecko)
  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=7&page=1&sparkline=false",
        );
        const data = await res.json();

        const updated = data.slice(0, 7).map((coin: Coin) => ({
          ...coin,
          binanceSymbol:
            coin.symbol.toUpperCase() === "BTC"
              ? "BTCUSDT"
              : coin.symbol.toUpperCase() === "ETH"
                ? "ETHUSDT"
                : coin.symbol.toUpperCase() === "BNB"
                  ? "BNBUSDT"
                  : coin.symbol.toUpperCase() === "SOL"
                    ? "SOLUSDT"
                    : coin.symbol.toUpperCase() === "XRP"
                      ? "XRPUSDT"
                      : coin.symbol.toUpperCase() === "ADA"
                        ? "ADAUSDT"
                        : coin.symbol.toUpperCase() === "DOGE"
                          ? "DOGEUSDT"
                          : `${coin.symbol.toUpperCase()}USDT`,
        }));

        setCoins(updated);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchCoins();
  }, []);

  // Live updates via Binance WebSocket
  useEffect(() => {
    if (!coins.length) return;

    const streams = coins.map(
      (c) => `${c.binanceSymbol!.toLowerCase()}@ticker`,
    );
    const ws = new WebSocket(
      `wss://stream.binance.com:9443/stream?streams=${streams.join("/")}`,
    );

    ws.onmessage = (event) => {
      const parsed = JSON.parse(event.data);
      const ticker = parsed.data;
      const price = parseFloat(ticker.c);

      setCoins((prev) =>
        prev.map((coin) =>
          coin.binanceSymbol?.toLowerCase() === ticker.s.toLowerCase()
            ? {
                ...coin,
                current_price: price,
                price_change_percentage_24h: parseFloat(ticker.P),
              }
            : coin,
        ),
      );

      // update main chart smoothly according to trend
      if (lastPrice.current !== null) {
        const diff = price - lastPrice.current;
        const trend = diff > 0 ? 1 : diff < 0 ? -1 : 0;

        setChartData((prev) => {
          const newData = [...prev.slice(1)];
          const last = prev[prev.length - 1];
          const newValue =
            last.value +
            (Math.random() - 0.5) * 2 +
            trend * (Math.random() * 1.5);
          newData.push({ time: last.time + 1, value: newValue });
          return newData;
        });
      }

      lastPrice.current = price;
    };

    return () => ws.close();
  }, [coins]);

  if (loading) {
    return (
      <section className="bg-[#f5f5f7] text-black py-20 text-center">
        <p className="text-xl font-semibold text-gray-500 animate-pulse">
          Fetching live market data...
        </p>
      </section>
    );
  }

  const mainCoin = coins[0];
  const otherCoins = coins.slice(1);

  return (
    <section
      className="text-white py-16 px-4 md:px-10"
      style={{
        backgroundImage: `
          radial-gradient(1200px 700px at 22% 18%, rgba(41, 106, 146, 0.35), transparent 58%),
          radial-gradient(900px 520px at 78% 36%, rgba(41, 106, 146, 0.18), transparent 60%),
          radial-gradient(900px 700px at 50% 115%, rgba(0,0,0,0.55), transparent 60%),
          linear-gradient(135deg, #0a1630 0%, #08162b 45%, #07101f 100%)
        `,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-white main-heading"
          >
            Nova Live Markets
          </motion.h2>
          <p className="text-gray-100 mt-3 text-sm md:text-base">
            Stay ahead with real-time price movements and intelligent trading
            insights.
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Main Coin Chart (GLASS) */}
          <div className="relative overflow-hidden p-6 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl shadow-[0_25px_70px_rgba(0,0,0,0.35)]">
            {/* glass highlight */}
            <div className="absolute inset-0 pointer-events-none rounded-2xl bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.10),transparent_55%)]" />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Image
                    src={mainCoin.image}
                    alt={mainCoin.name}
                    width={50}
                    height={40}
                  />
                  <h3 className="text-lg md:text-xl font-semibold text-white">
                    {mainCoin.name} ({mainCoin.symbol.toUpperCase()})
                  </h3>
                </div>

                <div className="text-right">
                  <motion.p
                    key={mainCoin.current_price}
                    initial={{ opacity: 0.6, y: -2 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="text-xl md:text-2xl font-bold text-white"
                  >
                    $
                    {mainCoin.current_price.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 6,
                    })}
                  </motion.p>

                  <motion.p
                    key={mainCoin.price_change_percentage_24h}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      scale: [1, 1.15, 1],
                      color:
                        mainCoin.price_change_percentage_24h >= 0
                          ? "#16a34a"
                          : "#dc2626",
                    }}
                    transition={{ duration: 0.4 }}
                    className="text-sm font-semibold"
                  >
                    {mainCoin.price_change_percentage_24h.toFixed(2)}%
                  </motion.p>
                </div>
              </div>

              <ResponsiveContainer width="100%" height={280}>
                <LineChart data={chartData}>
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#1e597c"
                    strokeWidth={2.5}
                    dot={false}
                    animationDuration={800}
                    animationEasing="ease-in-out"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* 6 Other Coins (GLASS) */}
          <div className="grid grid-cols-3 gap-4">
            {otherCoins.map((coin, i) => (
              <motion.div
                key={coin.id ?? i}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="relative overflow-hidden rounded-2xl p-4 flex flex-col items-center justify-center text-center
                  border border-white/15 bg-white/10 backdrop-blur-xl
                  shadow-[0_18px_45px_rgba(0,0,0,0.30)]
                  hover:bg-white/15 hover:shadow-[0_22px_55px_rgba(0,0,0,0.38)]
                  transition"
              >
                {/* glass highlight */}
                <div className="absolute inset-0 pointer-events-none rounded-2xl bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.10),transparent_55%)]" />
                <div className="relative z-10 flex flex-col items-center">
                  <Image
                    src={coin.image}
                    alt={coin.name}
                    width={40}
                    height={40}
                    className="mb-2"
                  />
                  <p className="text-sm md:text-base font-semibold text-white">
                    {coin.name}
                  </p>

                  <motion.p
                    key={coin.current_price}
                    initial={{ opacity: 0.4 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="text-white text-sm font-semibold"
                  >
                    $
                    {coin.current_price.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 6,
                    })}
                  </motion.p>

                  <motion.p
                    key={coin.price_change_percentage_24h}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      scale: [1, 1.05, 1],
                      color:
                        coin.price_change_percentage_24h >= 0
                          ? "#16a34a"
                          : "#dc2626",
                    }}
                    transition={{ duration: 0.4 }}
                    className="text-xs font-medium"
                  >
                    {coin.price_change_percentage_24h > 0 ? "+" : ""}
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptoLiveAnalysis;
