"use client";

import { useState } from "react";

type MediaItem = {
  type: string;
  title: string;
  publisher?: string;
  date: string;
  description?: string;
};

type MediaArchiveProps = {
  items: MediaItem[];
  title?: string; // optional section title
};

export default function MediaArchive({ items, title = "Media & Publications" }: MediaArchiveProps) {
  if (!items || items.length === 0) return null;

  return (
    <section id="media" className="py-12 sm:py-16 md:py-20 bg-[#f4f6f2]">
      {/* Section header with background, padding, border, and rounded corners */}
      {title && (
        <h2 className="inline-block bg-white px-6 py-3 rounded-lg border border-[#556b2f] font-serif text-2xl sm:text-3xl md:text-4xl text-[#2f4f2f] mb-8 text-center">
          {title}
        </h2>
      )}

      {/* Media grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
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
    <div className="p-4 border border-[#556b2f] rounded-lg hover:shadow-lg transition bg-white">
      <p className="text-[#556b2f] font-semibold text-sm sm:text-base">{item.date}</p>
      <h3 className="text-[#2f4f2f] font-bold text-lg sm:text-xl md:text-2xl mt-1">{item.title}</h3>
      {item.publisher && (
        <p className="text-[#556b2f] text-sm sm:text-base mt-1">{item.publisher}</p>
      )}
      {item.description && (
        <>
          {open ? (
            <p className="text-[#556b2f] text-sm sm:text-base mt-1">{item.description}</p>
          ) : (
            <button
              className="mt-2 text-[#6b8b3d] underline font-semibold"
              onClick={() => setOpen(true)}
            >
              Read more
            </button>
          )}
        </>
      )}
    </div>
  );
}
