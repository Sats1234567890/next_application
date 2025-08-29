"use client";
import Image from "next/image";

interface InfoCardProps {
  iconImage?: string;    
  mainImage?: string;     
  title: string;
  description: string;
  className?: string;
}

export default function InfoCard({ 
  iconImage, 
  mainImage, 
  title, 
  description, 
  className = "" 
}: InfoCardProps) {
  return (
    <div className={`flex flex-col items-start gap-3 max-w-xs ${className}`}>
      {iconImage && (
        <div className="w-12 h-12 rounded-full flex items-center justify-center  mx-auto mb-2">
          <Image
            src={iconImage}
            alt={`${title} icon`}
            width={32}
            height={32}
            className="object-contain"
          />
        </div>
      )}

      <div className="flex flex-row text-center w-auto gap-2">
        <div className="flex flex-col items-end flex-1">
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
        </div>
        {mainImage && (
          <div className="flex-shrink-0 ml-2">
            <Image
              src={mainImage}
              alt={title}
              width={50}
              height={50}
              className="object-contain opacity-90"
            />
          </div>
        )}
      </div>
    </div>
  );
}