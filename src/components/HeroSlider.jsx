import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const products = [
  { src: "/images/product-signature-original.png", name: "Original", cat: "Signature" },
  { src: "/images/product-signature-cathy.png", name: "Cathy", cat: "Signature" },
  { src: "/images/product-signature-fiona.png", name: "Fiona", cat: "Signature" },
  { src: "/images/product-signature-hana.png", name: "Hana", cat: "Signature" },
  { src: "/images/product-premium-helena.png", name: "Helena", cat: "Premium" },
  { src: "/images/product-premium-victoria.png", name: "Victoria", cat: "Premium" },
];

export default function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    dragFree: true,
    containScroll: "trimSnaps" 
  }, [
    Autoplay({ delay: 3000, stopOnInteraction: false })
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Smooth scroll to the products menu and select the exact product
  const scrollToMenu = (e, product) => {
    // Dispatch event to ProductMenu.jsx first so state updates
    window.dispatchEvent(new CustomEvent('selectProduct', { 
      detail: { category: product.cat, id: product.name }
    }));

    const menuSection = document.getElementById('menu');
    if (menuSection) {
      e.preventDefault();
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full flex flex-col items-center mt-8 md:mt-0 h-[350px] md:h-[550px] order-first md:order-last group">
      
      {/* Light instruction text */}
      <div className="absolute top-0 z-30 flex items-center gap-2 text-amber-500/80 font-zain font-bold text-lg md:text-xl animate-bounce">
        <svg xmlns="http://www.w3.org/0000.svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
        </svg>
        swipe and tap me!
      </div>

      {/* Embla Viewport */}
      <div className="overflow-hidden w-full h-full" ref={emblaRef}>
        {/* Carousel Track */}
        <div className="flex touch-pan-y h-full items-center cursor-grab active:cursor-grabbing">
          {products.map((product, index) => (
            <div key={index} className="flex-[0_0_260px] md:flex-[0_0_380px] min-w-0 flex justify-center px-4 md:px-8">
              <a 
                href="#menu" 
                onClick={(e) => scrollToMenu(e, product)}
                className="block w-full cursor-pointer group/item relative"
              >
                <img 
                  src={product.src} 
                  alt={product.name} 
                  className="w-full h-auto object-contain drop-shadow-2xl group-hover/item:scale-110 group-hover/item:-translate-y-4 transition-all duration-500 ease-out select-none relative z-10"
                  loading={index < 2 ? "eager" : "lazy"}
                  draggable="false"
                />
                
                {/* Pop-up Tooltip */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover/item:opacity-100 group-hover/item:-translate-y-6 transition-all duration-500 ease-out pointer-events-none z-20">
                  <div className="bg-white/90 backdrop-blur-sm text-gray-900 font-bold text-sm px-4 py-1.5 rounded-full shadow-lg border border-white/50 whitespace-nowrap">
                    {product.name}
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Soft edge masks for blending */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#FDF6E2] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#FDF6E2] to-transparent z-10 pointer-events-none"></div>

      {/* Modern Transparent Navigation Arrows */}
      <button 
        onClick={scrollPrev}
        className="absolute top-1/2 -translate-y-1/2 left-2 md:left-6 z-20 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-gray-800 shadow-[0_4px_20px_rgba(0,0,0,0.08)] opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300 hover:bg-white/50 hover:scale-110"
        aria-label="Previous Slide"
      >
        <svg xmlns="http://www.w3.org/0000.svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <button 
        onClick={scrollNext}
        className="absolute top-1/2 -translate-y-1/2 right-2 md:right-6 z-20 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-gray-800 shadow-[0_4px_20px_rgba(0,0,0,0.08)] opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300 hover:bg-white/50 hover:scale-110"
        aria-label="Next Slide"
      >
        <svg xmlns="http://www.w3.org/0000.svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

    </div>
  );
}
