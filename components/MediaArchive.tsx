"use client";

import Image from "next/image";
import { useState } from "react";

type MediaItem = {
  type: string;
  title: string;
  publisher?: string;
  date: string;
  description?: string;
  image?: string;
};

type MediaArchiveProps = {
  items: MediaItem[];
  title?: string; // optional section title
};

export default function MediaArchive({ items, title = "Work Archive" }: MediaArchiveProps) {
  if (!items || items.length === 0) return null;

  return (
    <section id="work-archive" className="py-16 sm:py-20 md:py-24 bg-[#050706] px-4 sm:px-6 lg:px-8">
      {title && (
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-[#b99d5b]">
            Evidence
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#f6f1df] mb-8">
            {title}
          </h2>
        </div>
      )}

      <div className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
        {items.map((item, idx) => (
          <MediaCard key={idx} item={item} />
        ))}
      </div>
    </section>
  );
}

function MediaCard({ item }: { item: MediaItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] transition hover:border-[#7ef0b0]/35">
      {item.image && (
        <div className="aspect-[16/10] border-b border-white/10 bg-[#050706]">
          <Image
            src={item.image}
            alt={`${item.title} visual evidence`}
            width={800}
            height={500}
            className="h-full w-full object-cover"
          />
        </div>
      )}
      <div className="p-5">
      <p className="text-[#b99d5b] font-semibold text-sm sm:text-base">{item.date}</p>
      <h3 className="text-[#f6f1df] font-bold text-lg sm:text-xl md:text-2xl mt-1">{item.title}</h3>
      {item.publisher && (
        <p className="text-[#7ef0b0] text-sm sm:text-base mt-1">{item.publisher}</p>
      )}
      {item.description && (
        <>
          {open ? (
            <p className="text-[#c9d2c4] text-sm sm:text-base mt-2 leading-7">{item.description}</p>
          ) : (
            <button
              className="mt-2 text-[#7ef0b0] underline font-semibold"
              onClick={() => setOpen(true)}
            >
              Read more
            </button>
          )}
        </>
      )}
      </div>
    </div>
  );
}
