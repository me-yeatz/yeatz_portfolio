"use client";
import React from 'react';
import Image from 'next/image';

interface SoftwareItemProps {
  name: string;
  iconUrl?: string;
  fallbackText?: string;
}

export const SoftwareItem: React.FC<SoftwareItemProps> = ({ name, iconUrl, fallbackText }) => {
  return (
    <div className="p-4 flex flex-col items-center gap-2">
      {iconUrl ? (
        <div className="w-12 h-12 relative flex items-center justify-center">
          <img
            src={iconUrl}
            alt={`${name} logo`}
            className="w-full h-full object-contain brightness-90 hover:brightness-110 transition-all"
            onError={(e) => {
              // Fallback to text if image fails
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.innerHTML = `<div class="text-zinc-400 text-2xl font-bold">${fallbackText || name.substring(0, 2)}</div>`;
            }}
          />
        </div>
      ) : (
        <div className="w-12 h-12 flex items-center justify-center text-zinc-400 text-2xl font-bold">
          {fallbackText || name.substring(0, 2)}
        </div>
      )}
      <p className="text-zinc-300 text-sm text-center">{name}</p>
    </div>
  );
};
