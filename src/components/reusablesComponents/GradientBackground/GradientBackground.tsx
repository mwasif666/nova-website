
"use client";
import React from "react";
import Image from "next/image";

interface GradientBackgroundProps {
  imageSrc?: string;
  alt?: string;
  className?: string;
  children?: React.ReactNode;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({
  imageSrc,
  alt = "Foreground image",
  className = "w-full h-[300px]",
  children,
}) => {
  return (
    <div
      className={`p-5 md:p-0 relative overflow-hidden rounded-3xl border border-[#ececec] flex items-center justify-center shadow-md backdrop-blur-2xl md:bg-[radial-gradient(circle_at_center,_rgba(180,180,235,0.95)_0%,_rgba(245,245,245,0.8)_40%,_rgba(235,235,235,0.5)_100%)] ${className}`}
    >
      {/* Soft glowing overlay */}
      <div className="absolute inset-0 bg-white/50 blur-3xl animate-pulse-slow pointer-events-none" />

      {/* Optional image */}
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={alt}
          width={500}
          height={300}
          className="object-contain relative z-10 drop-shadow-lg"
        />
      )}

      {/* Children (icons, text, etc.) */}
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
};

export default GradientBackground;
