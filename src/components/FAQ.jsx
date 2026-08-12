import React, { useState } from 'react';

const FAQ_DATA = {
  Produk: [
    {
      q: "Apa itu Ostekake?",
      a: "Ostekake adalah kue keju (cheesecake) autentik khas Norwegia. Teksturnya jauh lebih lembut, ringan, dan mengombinasikan rasa gurih keju premium dengan manis yang pas tanpa bikin enek."
    },
    {
      q: "Apakah produk Big Phil Ostekake Halal?",
      a: "Ya, semua produk Big Phil Ostekake dibuat menggunakan bahan-bahan pilihan yang 100% premium, higienis, serta bebas dari alkohol maupun gelatin non-halal."
    },
    {
      q: "Bagaimana cara terbaik menikmati dan menyimpan Ostekake?",
      a: "Ostekake paling nikmat disantap dingin. Simpan di dalam lemari es (chiller) dengan jar tertutup. Kue dapat bertahan segar hingga 7 hari. Dapat bertahan up to 3 bulan dalam kondisi beku di dalam Freezer"
    }
  ],
  Pengiriman: [
    {
      q: "Apakah bisa kirim ke luar kota?",
      a: "Untuk menjaga kualitas tekstur kue tetap sempurna dan segar, saat ini kami hanya melayani pengiriman instan/sameday untuk wilayah JABODETABEK melalui GoSend, GrabExpress, atau platform Pengiriman lain nya."
    }
  ],
  Kemitraan: [
    {
      q: "Bagaimana cara bergabung menjadi Reseller Big Phil Ostekake?",
      a: "Sangat mudah! Anda cukup menekan tombol 'Contact WhatsApp' di bagian Partnership pada website ini untuk mendapatkan proposal harga khusus reseller dan minimal jumlah pemesanan (MOQ)."
    },
    {
      q: "Bagaimana sistem dan cara pengajuan Konsinyasi (Consignment)?",
      a: "Kami membuka peluang kerja sama titip jual untuk pemilik kafe, resto, atau coffee shop. Hubungi WhatsApp atau Email kami untuk menjadwalkan pengiriman sampel produk gratis serta diskusi pembagian profit."
    }
  ]
};

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('Produk');
  const [activeAccordionIndex, setActiveAccordionIndex] = useState(null);

  const categories = Object.keys(FAQ_DATA);
  const currentFaqs = FAQ_DATA[activeCategory];

  const handleCategoryClick = (cat) => {
    setActiveCategory(cat);
    // Reset accordion when switching categories
    setActiveAccordionIndex(null);
  };

  const toggleAccordion = (index) => {
    setActiveAccordionIndex(activeAccordionIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-[#FDF6E2] font-sans py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight text-center mb-8">
          Frequently asked Question
        </h2>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`px-6 md:px-8 py-2.5 rounded-full font-bold text-sm md:text-base transition-all duration-300 ease-in-out border-2 
                ${activeCategory === cat
                  ? 'bg-gray-900 border-gray-900 text-white shadow-md -translate-y-0.5'
                  : 'bg-white border-gray-200 text-gray-700 hover:border-gray-900 hover:text-gray-900 hover:-translate-y-0.5'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Main FAQ Dashboard Card */}
        <div className="bg-[#FFEAA7] rounded-[2rem] p-6 md:p-10 lg:p-12 shadow-sm transition-all duration-500 min-h-[400px]">
          <div className="max-w-4xl mx-auto flex flex-col gap-4">
            {currentFaqs.map((item, index) => {
              const isActive = activeAccordionIndex === index;

              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.04)] overflow-hidden border border-gray-50 transition-all duration-300 ${isActive ? 'shadow-md' : 'hover:shadow-md'}`}
                >
                  <div
                    onClick={() => toggleAccordion(index)}
                    className="flex justify-between items-center cursor-pointer p-5 md:p-6 select-none group"
                  >
                    <h3 className="font-extrabold text-gray-900 text-sm md:text-base lg:text-lg pr-4 leading-snug group-hover:text-[#FFB84D] transition-colors duration-300">
                      {item.q}
                    </h3>

                    {/* Action Indicator Icon */}
                    <div
                      className={`w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300
                        ${isActive ? 'bg-[#FFB84D]' : 'bg-[#FFB84D]'}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/0000.svg"
                        className={`w-5 h-5 md:w-6 md:h-6 text-gray-900 transition-transform duration-400 ease-[cubic-bezier(0.87,0,0.13,1)] ${isActive ? 'rotate-90' : ''}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </div>
                  </div>

                  {/* Expandable Answer Area */}
                  <div
                    className={`grid transition-all duration-400 ease-[cubic-bezier(0.87,0,0.13,1)] ${isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                  >
                    <div className="overflow-hidden">
                      <p className="p-5 md:p-6 pt-0 md:pt-0 text-gray-600 font-medium text-sm md:text-base leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
