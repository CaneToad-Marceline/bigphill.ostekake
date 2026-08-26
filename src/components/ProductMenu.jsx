import React, { useState, useEffect } from 'react';

const MENU_DATA = {
  Signature: {
    title: "The Signature Ostekake Series",
    bgColor: "bg-[#FDF6E2]",
    products: [
      {
        id: "Original",
        name: "Original",
        image: "/images/product-signature-original.png",
        ingredients: ["Neufchâtel cream cheese", "Milk Biscuit", "Non-Diary Whip Cream", "", " ", " "]
      },
      {
        id: "Cathy",
        name: "Cathy",
        image: "/images/product-signature-cathy.png",
        ingredients: ["Neufchâtel cream cheese", "Oreo Biscuit", "Non-Diary Whip Cream", "Oreo Crumbs", "", ""]
      },
      {
        id: "Fiona",
        name: "Fiona",
        image: "/images/product-signature-fiona.png",
        ingredients: ["Neufchâtel cream cheese", "Milk Biscuit Crumbs", "Blueberry Compote", "Non-Diary Whip Cream", "Snicker Bar", ""]
      },
      {
        id: "Hana",
        name: "Hana",
        image: "/images/product-signature-hana.png",
        ingredients: ["Neufchâtel cream cheese", "Milk Biscuit Crumbs", "Strawberry Compote", "Non-Diary Whip Cream", "Strawberry Yogurt Silverqueen", ""]
      }
    ]
  },
  Premium: {
    title: "The Premium Ostekake Series",
    bgColor: "bg-[#F3EDE4]",
    products: [
      {
        id: "Helena",
        name: "Helena",
        image: "/images/product-premium-helena.png",
        previewImage: "/images/premium-helena-thumb.png",
        ingredients: ["Neufchâtel cream cheese", "Lotus Biscoff Crumbs", "Lotus Biscoff biscuit", "Lotus Biscoff Spread", "", ""]
      },
      {
        id: "Victoria",
        name: "Victoria",
        image: "/images/product-premium-victoria.png",
        previewImage: "/images/premium-victoria-thumb.png",
        ingredients: ["Neufchâtel cream cheese", "Hazelnut Chocolate Spread", "Ferrero Rocher", "", "", ""]
      }
    ]
  }
};

export default function ProductMenu() {
  const [activeCategory, setActiveCategory] = useState('Signature');
  const [activeProduct, setActiveProduct] = useState(MENU_DATA['Signature'].products[0].id);

  const handleCategoryChange = (cat) => {
    if (cat === activeCategory) return;
    setActiveCategory(cat);
    setActiveProduct(MENU_DATA[cat].products[0].id);
  };

  useEffect(() => {
    const handleSelectProduct = (e) => {
      const { category, id } = e.detail;
      if (MENU_DATA[category]) {
        setActiveCategory(category);
        setActiveProduct(id);
      }
    };
    window.addEventListener('selectProduct', handleSelectProduct);
    return () => window.removeEventListener('selectProduct', handleSelectProduct);
  }, []);

  const currentCategoryData = MENU_DATA[activeCategory];
  const currentProductData = currentCategoryData.products.find(p => p.id === activeProduct);

  return (
    <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-sans" id="menu">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 min-h-[600px] items-stretch">

        {/* Left Side: Visual Banner Column */}
        <div className={`relative rounded-[2.5rem] overflow-hidden flex items-center justify-center transition-colors duration-500 ease-in-out ${currentCategoryData.bgColor}`}>
          {/* Main Product Image (fills the container like Image 2) */}
          <img
            key={currentProductData.id}
            src={currentProductData.image}
            alt={currentProductData.name}
            className="w-full h-full object-cover z-10 transition-transform duration-700 ease-in-out animate-fade-in"
          />
        </div>

        {/* Right Side: Interactive Control Column */}
        <div className="flex flex-col justify-center py-4">

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-4 mb-12">
            {['Signature', 'Premium'].map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`
                   px-8 py-3 rounded-full font-extrabold text-lg transition-all duration-300 ease-in-out border-2 border-gray-900
                   ${activeCategory === cat
                    ? 'bg-[#FFB84D] text-gray-900 shadow-[4px_4px_0px_0px_rgba(17,24,39,1)] translate-y-[-2px]'
                    : 'bg-white text-gray-600 hover:bg-gray-50 hover:shadow-[2px_2px_0px_0px_rgba(17,24,39,0.3)]'}
                 `}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Item Selection Layout (Adaptive Architecture) */}
          <div className="mb-10 min-h-[160px] flex flex-col justify-center">
            {activeCategory === 'Signature' ? (
              <div className="grid grid-cols-2 gap-4 items-center">
                {/* Left Column: Original */}
                <div className="flex flex-col">
                  {(() => {
                    const p = currentCategoryData.products[0];
                    return (
                      <div
                        key={p.id}
                        onClick={() => setActiveProduct(p.id)}
                        className="flex items-center gap-4 cursor-pointer group"
                      >
                        <div className={`w-2 rounded-full transition-all duration-300 ease-in-out ${activeProduct === p.id ? 'h-12 bg-[#FFB84D]' : 'h-0 bg-transparent group-hover:h-8 group-hover:bg-gray-300'}`}></div>
                        <span className={`text-4xl md:text-5xl font-black tracking-tight transition-all duration-300 ${activeProduct === p.id ? 'text-gray-900 translate-x-2' : 'text-gray-400 group-hover:text-gray-600'}`}>
                          {p.name}
                        </span>
                      </div>
                    );
                  })()}
                </div>

                {/* Right Column: Other 3 */}
                <div className="flex flex-col gap-4">
                  {currentCategoryData.products.slice(1).map(p => (
                    <div
                      key={p.id}
                      onClick={() => setActiveProduct(p.id)}
                      className="flex items-center gap-4 cursor-pointer group"
                    >
                      <div className={`w-2 rounded-full transition-all duration-300 ease-in-out ${activeProduct === p.id ? 'h-8 bg-[#FFB84D]' : 'h-0 bg-transparent group-hover:h-5 group-hover:bg-gray-300'}`}></div>
                      <span className={`text-2xl md:text-3xl font-black tracking-tight transition-all duration-300 ${activeProduct === p.id ? 'text-gray-900 translate-x-2' : 'text-gray-400 group-hover:text-gray-600'}`}>
                        {p.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentCategoryData.products.map(p => (
                  <div
                    key={p.id}
                    onClick={() => setActiveProduct(p.id)}
                    className={`flex items-center gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 ease-in-out
                       ${activeProduct === p.id
                        ? 'border-gray-900 bg-white shadow-[4px_4px_0px_0px_rgba(17,24,39,1)] -translate-y-1'
                        : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'}`}
                  >
                    {/* Transparent Icon Container */}
                    <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center">
                      <img src={p.previewImage} alt={p.name} className="w-full h-full object-contain scale-[1.4] drop-shadow-sm" />
                    </div>
                    <span className={`font-black text-2xl md:text-3xl transition-colors ${activeProduct === p.id ? 'text-gray-900' : 'text-gray-500'}`}>
                      {p.name}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Adaptive Ingredient Table */}
          <div className="w-full animate-fade-in">
            <div className="flex flex-wrap border-l border-t border-gray-900/20">
              {currentProductData.ingredients
                .filter(ing => ing && ing.trim() !== "")
                .map((ing, i, arr) => {
                  const deskWidth = arr.length === 4 || arr.length === 2 ? 'md:w-1/2' : 'md:w-1/3';
                  const isLastRowOfFive = arr.length === 5 && i >= 3;
                  const widthClass = isLastRowOfFive ? 'w-1/2 md:w-1/2' : `w-1/2 ${deskWidth}`;

                  return (
                    <div
                      key={`${currentProductData.id}-ing-${i}`}
                      className={`flex-grow ${widthClass} border-r border-b border-gray-900/20 p-4 md:p-6 flex items-center justify-center text-center bg-white/30 backdrop-blur-sm hover:bg-white/60 transition-colors duration-300`}
                    >
                      <span className="text-gray-800 font-bold text-xs md:text-sm">{ing}</span>
                    </div>
                  );
                })}
            </div>
          </div>

          <a
            href={`https://wa.me/6281524321194?text=${encodeURIComponent(`haloo kak mau dong pesen ${currentProductData.name} nyaa`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-full py-3.5 bg-[#FFB84D] text-gray-900 font-bold tracking-wide text-center block active:scale-[0.98] transition-transform mt-8 mb-6"
          >
            Pesan Sekarang
          </a>

          {/* Footer Platform Row */}
          <div className="mt-auto pt-6 border-t-2 border-dashed border-gray-200 flex flex-col sm:flex-row sm:items-center gap-4">
            <span className="text-sm font-black text-gray-400 uppercase tracking-widest">Tersedia di :</span>
            <div className="flex flex-wrap gap-4 md:gap-6">
              {[
                { name: 'GoFood', url: 'https://gofood.link/a/TRdyr7L' },
                { name: 'ShopeeFood', url: 'https://shopee.co.id/universal-link/now-food/shop/23268075?deep_and_deferred=1&shareChannel=copy_link' },
                { name: 'GrabFood', url: 'https://r.grab.com/g/6-20260702_163655_EFB30F15F7C442C1947C0CFD5BA14BE3_MEXMPS-6-C8BDRRBUJAVHCA' },
                { name: 'WhatsApp Catalog', url: 'https://wa.me/c/6281524321194' }
              ].map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 font-extrabold hover:text-[#FFB84D] transition-colors text-sm border-b-2 border-transparent hover:border-[#FFB84D] pb-0.5"
                >
                  {platform.name}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Localized Component Styles for Animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(-12deg); }
          50% { transform: translateY(-20px) rotate(-5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(45deg); }
          50% { transform: translateY(-25px) rotate(55deg); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.4s ease-out forwards;
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
          opacity: 0;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 7s ease-in-out infinite 2s;
        }
      `}} />
    </section>
  );
}
