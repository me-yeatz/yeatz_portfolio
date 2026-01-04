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

// Software database with logo URLs from CDN (Simple Icons)
export const softwareList = [
  {
    name: "AutoCAD",
    iconUrl: "https://cdn.simpleicons.org/autodesk/0696D7",
  },
  {
    name: "ZWCAD",
    iconUrl: "https://cdn.simpleicons.org/autocad/E51937",
  },
  {
    name: "NanoCAD",
    fallbackText: "NC",
  },
  {
    name: "ArchiCAD",
    iconUrl: "https://cdn.simpleicons.org/graphisoft/0078D7",
  },
  {
    name: "SketchUp",
    iconUrl: "https://cdn.simpleicons.org/sketchup/005F9E",
  },
  {
    name: "Photoshop",
    iconUrl: "https://cdn.simpleicons.org/adobephotoshop/31A8FF",
  },
  {
    name: "Illustrator",
    iconUrl: "https://cdn.simpleicons.org/adobeillustrator/FF9A00",
  },
  {
    name: "V-Ray",
    iconUrl: "https://cdn.simpleicons.org/chaos/E4002B",
  },
  {
    name: "Enscape",
    fallbackText: "EN",
  },
  {
    name: "Lumion",
    fallbackText: "LU",
  },
  {
    name: "Antigravity",
    fallbackText: "AG",
  },
  {
    name: "Primavera",
    iconUrl: "https://cdn.simpleicons.org/oracle/F80000",
  },
  {
    name: "MS Office",
    iconUrl: "https://cdn.simpleicons.org/microsoftoffice/D83B01",
  },
  {
    name: "PowerPoint",
    iconUrl: "https://cdn.simpleicons.org/microsoftpowerpoint/B7472A",
  },
  {
    name: "Figma",
    iconUrl: "https://cdn.simpleicons.org/figma/F24E1E",
  },
  {
    name: "Canva",
    iconUrl: "https://cdn.simpleicons.org/canva/00C4CC",
  },
  {
    name: "VS Code",
    iconUrl: "https://cdn.simpleicons.org/visualstudiocode/007ACC",
  },
  {
    name: "VS Codium",
    iconUrl: "https://cdn.simpleicons.org/vscodium/2F80ED",
  },
  {
    name: "CLI Tools",
    iconUrl: "https://cdn.simpleicons.org/gnubash/4EAA25",
  },
];
