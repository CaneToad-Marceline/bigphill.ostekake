
bigphill.ostekake.id/
├── public/
│   ├── favicon.svg
│   ├── logos/
│   │   ├── gofood.svg
│   │   ├── grabfood.svg
│   │   ├── shopeefood.svg
│   │   └── whatsapp.svg
│   └── images/
│       ├── main-hero-bg.webp       # Visual utama splash/remahan biskuit
│       ├── original.webp           # Masuk dalam Signature Series
│       ├── cathy.webp              # Signature Series
│       ├── fiona.webp              # Signature Series
│       ├── hana.webp               # Signature Series
│       ├── helena.webp             # Premium Series
│       └── victoria.webp           # Premium Series
├── src/
│   ├── components/
│   │   ├── Navbar.astro            # Sticky/Fixed (Home, Products, Partnership, Updates, Reviews + CTA Shop Now)
│   │   ├── MainAbout.astro         # Section Utama: Cerita brand, headline, & visual estetik
│   │   ├── WhereToFindUs.astro     # Section Ojol Redirects (GoFood, dll), Alamat Fisik, & WA Catalog Link
│   │   ├── ProductMenu.jsx         # UI Tab Interaktif (React): Tab Signature (4 produk) & Premium (2 produk)
│   │   ├── ResellerB2B.astro       # Section Partnership: Aksi khusus untuk Consignor & Consignee
│   │   ├── InstagramFeed.astro     # Section Updates: Menampilkan grid 4 postingan IG terakhir
│   │   ├── GoogleReviews.astro     # Section Testimoni: Grid 4 ulasan Google Maps statis (aman kuota API)
│   │   ├── FAQ.astro               # Section QnA: Komponen accordion tanya-jawab
│   │   └── Footer.astro            # End Page: Logo, tagline, hak cipta, & grid link 4 kolom
│   ├── layouts/
│   │   └── Layout.astro            # Master HTML Wrapper (SEO metadata, fluid container, Google Fonts)
│   └── pages/
│       ├── index.astro             # Beranda utama yang menumpuk seluruh komponen sesuai struktur plan
│       └── products/
│           └── [slug].astro        # Dynamic Route untuk 6 halaman detail produk individual
├── astro.config.mjs                 # Konfigurasi Astro (Output: 'static', integrasi react & tailwind)
├── package.json                     # dependensi proyek (Astro, React, Tailwind, Embla Carousel)
└── tailwind.config.mjs              # Sistem desain, warna tema (Amber/Cream), & fluid typography