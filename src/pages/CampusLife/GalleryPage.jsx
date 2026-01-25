import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  { id: 1, src: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1986&auto=format&fit=crop", cat: "Campus" },
  { id: 2, src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop", cat: "Cultural" },
  { id: 3, src: "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=2070&auto=format&fit=crop", cat: "Sports" },
  { id: 4, src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2069&auto=format&fit=crop", cat: "Students" },
  { id: 5, src: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2070&auto=format&fit=crop", cat: "Campus" },
  { id: 6, src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop", cat: "Cultural" },
  { id: 7, src: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=2070&auto=format&fit=crop", cat: "Sports" },
  { id: 8, src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop", cat: "Students" },
];

const categories = ["All", "Campus", "Sports", "Cultural", "Students"];

const GalleryPage = () => {
  const [filter, setFilter] = useState("All");

  const filteredImages = filter === "All" 
    ? images 
    : images.filter(img => img.cat === filter);

  return (
    <div className="pt-20 min-h-screen bg-white">
      <section className="bg-white py-12 text-center border-b border-gray-100">
        <h1 className="text-4xl font-bold text-sv-blue mb-2">Photo Gallery</h1>
        <p className="text-gray-500">A glimpse into life at SVCMS</p>
      </section>

      <section className="container mx-auto px-4 py-12">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === cat 
                  ? 'bg-sv-maroon text-white shadow-md' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div layout className="columns-1 md:columns-3 lg:columns-4 gap-4 space-y-4">
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                key={img.id}
                className="break-inside-avoid relative group rounded-xl overflow-hidden"
              >
                <img src={img.src} alt={img.cat} className="w-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="bg-white text-xs font-bold px-2 py-1 rounded text-black">{img.cat}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
};

export default GalleryPage;