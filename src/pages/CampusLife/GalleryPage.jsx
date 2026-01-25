// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const images = [
//   { id: 1, src: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1986&auto=format&fit=crop", cat: "Campus" },
//   { id: 2, src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop", cat: "Cultural" },
//   { id: 3, src: "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=2070&auto=format&fit=crop", cat: "Sports" },
//   { id: 4, src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2069&auto=format&fit=crop", cat: "Students" },
//   { id: 5, src: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2070&auto=format&fit=crop", cat: "Campus" },
//   { id: 6, src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop", cat: "Cultural" },
//   { id: 7, src: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=2070&auto=format&fit=crop", cat: "Sports" },
//   { id: 8, src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop", cat: "Students" },
// ];

// const categories = ["All", "Campus", "Sports", "Cultural", "Students"];

// const GalleryPage = () => {
//   const [filter, setFilter] = useState("All");

//   const filteredImages = filter === "All" 
//     ? images 
//     : images.filter(img => img.cat === filter);

//   return (
//     <div className="pt-20 min-h-screen bg-white">
//       <section className="bg-white py-12 text-center border-b border-gray-100">
//         <h1 className="text-4xl font-bold text-sv-blue mb-2">Photo Gallery</h1>
//         <p className="text-gray-500">A glimpse into life at SVCMS</p>
//       </section>

//       <section className="container mx-auto px-4 py-12">
//         {/* Filter Buttons */}
//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setFilter(cat)}
//               className={`px-6 py-2 rounded-full font-medium transition-all ${
//                 filter === cat 
//                   ? 'bg-sv-maroon text-white shadow-md' 
//                   : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Masonry Grid */}
//         <motion.div layout className="columns-1 md:columns-3 lg:columns-4 gap-4 space-y-4">
//           <AnimatePresence>
//             {filteredImages.map((img) => (
//               <motion.div
//                 layout
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.8 }}
//                 transition={{ duration: 0.3 }}
//                 key={img.id}
//                 className="break-inside-avoid relative group rounded-xl overflow-hidden"
//               >
//                 <img src={img.src} alt={img.cat} className="w-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
//                 <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
//                   <span className="bg-white text-xs font-bold px-2 py-1 rounded text-black">{img.cat}</span>
//                 </div>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </motion.div>
//       </section>
//     </div>
//   );
// };

// export default GalleryPage;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn, Filter } from 'lucide-react';

// Expanded Image Data
const images = [
  { id: 1, src: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1986&auto=format&fit=crop", cat: "Campus", title: "Main Building" },
  { id: 2, src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop", cat: "Cultural", title: "Dance Performance" },
  { id: 3, src: "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=2070&auto=format&fit=crop", cat: "Sports", title: "Football Team" },
  { id: 4, src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2069&auto=format&fit=crop", cat: "Students", title: "Study Group" },
  { id: 5, src: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2070&auto=format&fit=crop", cat: "Campus", title: "Library Reading Hall" },
  { id: 6, src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop", cat: "Cultural", title: "Music Fest" },
  { id: 7, src: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=2070&auto=format&fit=crop", cat: "Sports", title: "Athletics Meet" },
  { id: 8, src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop", cat: "Students", title: "Graduation Day" },
  { id: 9, src: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=2574&auto=format&fit=crop", cat: "Campus", title: "Science Labs" },
];

const categories = ["All", "Campus", "Sports", "Cultural", "Students"];

const GalleryPage = () => {
  const [filter, setFilter] = useState("All");
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  // Filter Logic
  const filteredImages = filter === "All" 
    ? images 
    : images.filter(img => img.cat === filter);

  // Lightbox Handlers
  const openLightbox = (index) => setSelectedImageIndex(index);
  const closeLightbox = () => setSelectedImageIndex(null);
  
  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      
      {/* Page Header */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <span className="text-sv-gold font-bold uppercase tracking-widest text-xs mb-2 block">Our Memories</span>
          <h1 className="text-4xl font-bold text-sv-blue mb-2">Photo Gallery</h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Explore the vibrant life at SVCMS, from academic milestones to cultural celebrations.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-all flex items-center gap-2 ${
                filter === cat 
                  ? 'bg-sv-maroon text-white shadow-lg scale-105' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {filter === cat && <Filter size={14} />}
              {cat}
            </button>
          ))}
        </div>

        {/* The Grid (Replaced Masonry with Grid for Stability) */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={img.id}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl bg-gray-200"
                onClick={() => openLightbox(index)}
              >
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  loading="lazy"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-sv-gold text-xs font-bold uppercase tracking-wider mb-1">
                    {img.cat}
                  </span>
                  <h3 className="text-white font-bold text-lg flex items-center gap-2">
                    {img.title} <ZoomIn size={16} className="text-white/70" />
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <p>No photos found in this category.</p>
          </div>
        )}

      </section>

      {/* Full Screen Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button className="absolute top-6 right-6 text-white/60 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all">
              <X size={28} />
            </button>

            {/* Main Image */}
            <motion.img 
              key={selectedImageIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              src={filteredImages[selectedImageIndex].src} 
              alt="Full Screen"
              className="max-h-[85vh] max-w-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent close when clicking image
            />

            {/* Navigation Arrows */}
            <button 
              onClick={prevImage}
              className="absolute left-4 p-4 text-white hover:bg-white/10 rounded-full transition-colors hidden md:block"
            >
              <ChevronLeft size={40} />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-4 p-4 text-white hover:bg-white/10 rounded-full transition-colors hidden md:block"
            >
              <ChevronRight size={40} />
            </button>

            {/* Bottom Caption */}
            <div className="absolute bottom-6 text-center w-full pointer-events-none">
              <div className="inline-block bg-black/50 backdrop-blur px-6 py-3 rounded-full">
                <h3 className="text-white font-bold text-lg">{filteredImages[selectedImageIndex].title}</h3>
                <p className="text-white/60 text-sm">
                  {selectedImageIndex + 1} / {filteredImages.length}
                </p>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;