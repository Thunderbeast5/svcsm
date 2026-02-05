import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, X, ChevronLeft, ChevronRight, Image as ImageIcon, Grid } from 'lucide-react';

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import SEO from '../../components/SEO';

void motion;

const eventsData = [
  {
    id: 1,
    title: "Annual Cultural Fest 'Utsav 2025'",
    date: "Jan 15, 2025",
    thumbnail: "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=1974&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=1974&auto=format&fit=crop", // Include thumbnail in gallery if needed
      "https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1920&auto=format&fit=crop"
    ]
  },
  {
    id: 2,
    title: "Inter-College Sports Tournament",
    date: "Dec 10, 2024",
    thumbnail: "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1935&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1993&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    id: 3,
    title: "Science Exhibition",
    date: "Nov 28, 2024",
    thumbnail: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=2574&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=2574&auto=format&fit=crop"
    ]
  },
  {
    id: 4,
    title: "Tree Plantation Drive",
    date: "Oct 02, 2024",
    thumbnail: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop"
    ]
  }
];

const ActivitiesEvents = () => {
  const eventsCol = useMemo(() => collection(db, 'activitiesEvents'), []);

  const [eventRows, setEventRows] = useState(eventsData);
  const [selectedEvent, setSelectedEvent] = useState(null); // Controls the Grid Modal
  const [fullScreenImageIndex, setFullScreenImageIndex] = useState(null); // Controls the Lightbox

  useEffect(() => {
    let ignore = false;

    const load = async () => {
      try {
        const snap = await getDocs(eventsCol);
        if (ignore) return;

        const rows = snap.docs
          .map((d) => {
            const data = d.data() || {};
            return {
              id: d.id,
              title: data.title,
              date: data.date,
              thumbnail: data.thumbnailUrl || data.thumbnail,
              gallery: Array.isArray(data.gallery) ? data.gallery : [],
              order: data.order,
              active: data.active,
              createdAt: data.createdAt,
            };
          })
          .filter((r) => r.active === true);

        const toMillis = (v) => {
          if (!v) return 0;
          if (typeof v?.toMillis === 'function') return v.toMillis();
          if (typeof v?.toDate === 'function') return v.toDate().getTime();
          const dt = new Date(v);
          if (Number.isNaN(dt.getTime())) return 0;
          return dt.getTime();
        };

        rows.sort((a, b) => {
          const orderA = Number.isFinite(a?.order) ? a.order : 0;
          const orderB = Number.isFinite(b?.order) ? b.order : 0;
          if (orderA !== orderB) return orderA - orderB;
          return toMillis(b?.createdAt) - toMillis(a?.createdAt);
        });

        const normalized = rows.map((r) => {
          const gallery = Array.isArray(r.gallery) ? r.gallery.filter(Boolean) : [];
          const thumb = String(r.thumbnail || '').trim();
          if (thumb && !gallery.includes(thumb)) gallery.unshift(thumb);
          return { ...r, gallery };
        });

        if (normalized.length > 0) setEventRows(normalized);
      } catch {
        if (ignore) return;
      }
    };

    void load();

    return () => {
      ignore = true;
    };
  }, [eventsCol]);

  // Open the Grid View
  const openEventGallery = (event) => {
    setSelectedEvent(event);
    setFullScreenImageIndex(null);
  };

  // Open the Full Screen Slider
  const openLightbox = (index) => {
    setFullScreenImageIndex(index);
  };

  // Close everything
  const closeAll = () => {
    setSelectedEvent(null);
    setFullScreenImageIndex(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setFullScreenImageIndex((prev) => (prev === selectedEvent.gallery.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setFullScreenImageIndex((prev) => (prev === 0 ? selectedEvent.gallery.length - 1 : prev - 1));
  };

  return (
    <div className="pt-5 min-h-screen bg-gray-50">
      <SEO 
        title="Activities & Events" 
        description="Explore the vibrant campus life, cultural fests, and sports events at SVICSM."
        keywords="events, cultural fest, sports, activities, campus life"
        url="/campus-life/activities-events"
      />
      {/* Header */}
      <section className="bg-sv-blue py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-4">Activities & Events</h1>
          <p className="text-xl text-white/80">Moments that define our campus life.</p>
        </div>
      </section>

      {/* Main Events List - Thumbnail View */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventRows.map((event) => (
            <motion.div
              key={event.id}
              whileHover={{ y: -8 }}
              className="relative group h-80 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              onClick={() => openEventGallery(event)}
            >
              {/* Full Background Image */}
              <img 
                src={event.thumbnail} 
                alt={event.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 text-sv-gold text-sm font-bold mb-2">
                    <Calendar size={16} /> {event.date}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{event.title}</h3>
                  
                  {/* View Gallery Indicator */}
                  <div className="flex items-center gap-2 text-white/80 text-sm font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                    <Grid size={16} /> View {event.gallery.length} Photos
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MODAL 1: Gallery Grid (Shows all images for selected event) */}
      <AnimatePresence>
        {selectedEvent && fullScreenImageIndex === null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-60 bg-white/95 backdrop-blur-xl flex flex-col p-4 md:p-8 overflow-y-auto"
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-8 container mx-auto max-w-6xl">
              <div>
                <h2 className="text-3xl font-bold text-sv-blue">{selectedEvent.title}</h2>
                <p className="text-gray-500">{selectedEvent.date}</p>
              </div>
              <button onClick={closeAll} className="p-2 bg-gray-100 rounded-full hover:bg-red-50 hover:text-red-600 transition-colors">
                <X size={32} />
              </button>
            </div>

            {/* Grid of Images */}
            <div className="container mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {selectedEvent.gallery.map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="aspect-square rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all group relative"
                  onClick={() => openLightbox(idx)}
                >
                  <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ImageIcon className="text-white" size={32} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MODAL 2: Full Screen Lightbox (Slider) */}
      <AnimatePresence>
        {fullScreenImageIndex !== null && selectedEvent && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-70 bg-black flex items-center justify-center"
          >
            {/* Close Lightbox (Back to Grid) */}
            <button 
              onClick={() => setFullScreenImageIndex(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2 z-50 bg-white/10 rounded-full"
            >
              <X size={24} />
            </button>

            {/* Main Image */}
            <motion.img 
              key={fullScreenImageIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              src={selectedEvent.gallery[fullScreenImageIndex]} 
              className="max-h-screen max-w-full object-contain p-4"
              alt="Full Screen"
            />

            {/* Prev Button */}
            <button onClick={prevImage} className="absolute left-4 p-4 text-white hover:bg-white/10 rounded-full">
              <ChevronLeft size={40} />
            </button>
            
            {/* Next Button */}
            <button onClick={nextImage} className="absolute right-4 p-4 text-white hover:bg-white/10 rounded-full">
              <ChevronRight size={40} />
            </button>
            
            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 bg-black/50 px-4 py-2 rounded-full text-sm">
              {fullScreenImageIndex + 1} / {selectedEvent.gallery.length}
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default ActivitiesEvents;