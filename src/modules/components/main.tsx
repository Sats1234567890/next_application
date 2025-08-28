"use client";
import { ReactNode } from "react";
import Image from "next/image";

interface InfoCardProps {
  icon?: ReactNode;
  imageSrc?: string;
  title: string;
  description: string;
  className?: string;
}

export default function InfoCard({ 
  icon, 
  imageSrc, 
  title, 
  description, 
  className = "" 
}: InfoCardProps) {
  return (
    <div className={`flex flex-col items-start gap-4 max-w-xs ${className}`}>
      {/* Icon or Image */}
      {icon && (
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
          <div className="text-green-600 text-xl">{icon}</div>
        </div>
      )}
      {imageSrc && (
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center p-2">
          <Image
            src={imageSrc}
            alt={title}
            width={32}
            height={32}
            className="object-contain"
          />
        </div>
      )}

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
    </div>
  );
}