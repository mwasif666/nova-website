"use client"
import dynamic from "next/dynamic"

const CryptoChart = dynamic(() => import("@/components/main-ui-components/services/cryptoTrading/CryptoLiveAnalysis/CryptoLiveAnalysis"),{
     ssr:false})

export default function CryptoChartWrapper() {
    return(
   <CryptoChart/>
    )
}