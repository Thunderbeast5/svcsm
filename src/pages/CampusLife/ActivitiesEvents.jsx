import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

// Data: Each event has a 'thumbnail' and an array of 'gallery' images
const eventsData = [
  {
    id: 1,
    title: "Annual Cultural Fest 'Utsav 2025'",
    date: "Jan 15, 2025",
    desc: "A vibrant celebration of dance, drama, and music.",
    thumbnail: "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=1974&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    id: 2,
    title: "Inter-College Sports Tournament",
    date: "Dec 10, 2024",
    desc: "Our cricket and football teams brought home the trophy!",
    thumbnail: "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1935&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1993&auto=format&fit=crop"
    ]
  },
  {
    id: 3,
    title: "Science Exhibition",
    date: "Nov 28, 2024",
    desc: "Innovative models presented by our 11th grade students.",
    thumbnail: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=2574&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    id: 4,
    title: "Tree Plantation Drive",
    date: "Oct 02, 2024",
    desc: "Green Campus initiative by the NSS unit.",
    thumbnail: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=2070&auto=format&fit=crop"
    ]
  }
];

const ActivitiesEvents = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openGallery = (event) => {
    setSelectedEvent(event);
    setCurrentImageIndex(0);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === selectedEvent.gallery.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? selectedEvent.gallery.length - 1 : prev - 1));
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      
      {/* Header */}
      <section className="bg-sv-blue py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-4">Activities & Events</h1>
          <p className="text-xl text-white/80">Celebrating creativity, sportsmanship, and innovation.</p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData.map((event) => (
            <motion.div
              key={event.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer group border border-gray-100"
              onClick={() => openGallery(event)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={event.thumbnail} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <span className="text-white font-bold border border-white px-4 py-2 rounded-full flex items-center gap-2">
                     <ImageIcon size={18} /> View Gallery
                   </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sv-gold text-sm font-bold mb-2">
                  <Calendar size={16} /> {event.date}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-sv-maroon transition-colors">{event.title}</h3>
                <p className="text-gray-600 text-sm">{event.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedEvent(null)}
          >
            {/* Close Button */}
            <button className="absolute top-6 right-6 text-white/70 hover:text-white p-2">
              <X size={32} />
            </button>

            <div className="w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
              
              {/* Main Image Container */}
              <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-2xl mb-4">
                <motion.img 
                  key={currentImageIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  src={selectedEvent.gallery[currentImageIndex]} 
                  alt="Gallery" 
                  className="w-full h-full object-contain"
                />
                
                {/* Navigation Buttons */}
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white text-white hover:text-black p-3 rounded-full backdrop-blur transition-all"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white text-white hover:text-black p-3 rounded-full backdrop-blur transition-all"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Bottom Details */}
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-2">{selectedEvent.title}</h3>
                <p className="text-white/60 text-sm">
                  Image {currentImageIndex + 1} of {selectedEvent.gallery.length}
                </p>
                {/* Thumbnails Row */}
                <div className="flex justify-center gap-2 mt-4">
                  {selectedEvent.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                        idx === currentImageIndex ? 'border-sv-gold scale-110' : 'border-transparent opacity-50 hover:opacity-100'
                      }`}
                    >
                      <img src={img} className="w-full h-full object-cover" alt="thumbnail" />
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default ActivitiesEvents;