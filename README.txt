# 🍰 BIGPHILL.OSTEKAKE.ID — Premium FnB Landing Page

Website *landing page* interaktif berkinerja tinggi yang dibangun untuk **Big Phil Ostekake** (Pelopor Kue Ostekake Norwegia Pertama di Indonesia). Proyek ini dirancang menggunakan arsitektur modern **Astro Framework** untuk menghasilkan website statis murni yang super cepat, responsif dari layar HP hingga Desktop, serta dihosting secara efisien di Vercel Hobby gratis.

## 🚀 Fitur Utama Website

*   **Responsive Desktop-to-Mobile Layout**: Antarmuka fluid menggunakan Tailwind CSS. Grid horizontal 2-4 kolom di layar komputer otomatis bertransformasi menjadi tumpukan vertikal ramah sentuhan (*touch-friendly style*) di layar ponsel.
*   **Sticky Dynamic Navigation Bar**: Menu atas tetap berada di posisi atas saat di-scroll, lengkap dengan tombol CTA penarik konversi pembelian dan sistem menu *hamburger icon* di HP.
*   **Where to Find Us (Ojol & Maps Links)**: Integrasi tombol aksi ke GoFood, GrabFood, ShopeeFood, WhatsApp Catalog, serta pencarian alamat instan terintegrasi dengan Google Maps Pin API Link.
*   **Interactive Product Tab Menu**: Modul berbasis React (`.jsx`) dengan sistem tab terinspirasi dari antarmuka Kopi Tuku. Menampilkan visual produk dinamis, detail bahan baku otomatis, serta pemisahan klasifikasi antara *Signature Series* dan *Premium Series*.
*   **Automated Live Instagram Feed**: Integrasi API JSON via Behold.so yang mengambil 4 postingan Instagram terbaru secara *real-time*, lengkap dengan sistem *fallback handler* otomatis untuk mengatasi kendala *thumbnail* video/reels yang kosong.
*   **Static Google Reviews Layout**: Menampilkan 4 ulasan bintang 5 terbaik secara statis guna menghemat kuota *Serverless Request* Vercel dan mempercepat waktu muat halaman.
*   **FAQ Accordion Area**: Ruang tanya-jawab ringkas menggunakan elemen drop-down yang rapi untuk menjawab pertanyaan umum pelanggan FnB.

---

## 📁 Struktur Dokumen dan Direktori Proyek

```text
bigphill-ostekake/
├── public/
│   ├── favicon.svg
│   ├── logos/
│   │   ├── gofood.svg
│   │   ├── grabfood.svg
│   │   ├── shopeefood.svg
│   │   └── whatsapp.svg
│   └── images/
│       ├── main-hero-bg.webp       # Visual utama splash remahan biskuit terbang
│       ├── original.webp           # Bagian dari Signature Series
│       ├── cathy.webp              # Signature Series
│       ├── fiona.webp              # Signature Series
│       ├── hana.webp               # Signature Series
│       ├── helena.webp             # Premium Series
│       └── victoria.webp           # Premium Series
├── src/
│   ├── components/
│   │   ├── Navbar.astro            # Navigasi sticky (Home, Products, Partnership, dll)
│   │   ├── MainAbout.astro         # Section Hero: Value proposition, headline, & visual estetik
│   │   ├── WhereToFindUs.astro     # Section tautan aplikasi pesan antar makanan & alamat toko
│   │   ├── ProductMenu.jsx         # UI Tab Interaktif (React State): Signature vs Premium
│   │   ├── ResellerB2B.astro       # Section Partnership: Kemitraan Consignor & Consignee
│   │   ├── InstagramFeed.astro     # Section Updates: Grid 4 postingan IG (Build-time Fetch)
│   │   ├── GoogleReviews.astro     # Section Testimoni: Grid 4 ulasan Google Maps statis
│   │   ├── FAQ.astro               # Section QnA: Komponen accordion murni HTML/Astro
│   │   └── Footer.astro            # End Page: Hak cipta, jam operasional, & grid navigasi 4 kolom
│   ├── layouts/
│   │   └── Layout.astro            # Master HTML Wrapper (SEO Metadata, Google Fonts, Fluid Container)
│   └── pages/
│       ├── index.astro             # Halaman beranda utama tempat perakitan semua seksi
│       └── products/
│           └── [slug].astro        # Dynamic Route untuk 6 halaman rincian produk secara mandiri
├── astro.config.mjs                 # Konfigurasi integrasi Tailwind CSS, React, dan Static Export Mode
├── package.json                     # Daftar pustaka dependensi proyek
└── tailwind.config.mjs              # Token desain, skala tipografi fluida, & variabel warna tema
```

---

## 🛠️ Langkah Menjalankan Proyek Secara Lokal

Pastikan komputer Anda sudah terinstal **Node.js** (versi 18 ke atas direkomendasikan).

1. **Kloning Repositori**
   ```bash
   git clone https://github.com
   cd bigphill-ostekake
   ```

2. **Instalasi Dependensi**
   ```bash
   npm install
   ```

3. **Jalankan Server Pengembangan (Local Development)**
   ```bash
   npm run dev
   ```
   Buka browser Anda dan akses tautan lokal di `http://localhost:4321` untuk melihat website.

4. **Kompilasi ke Mode Produksi (Build for Deployment)**
   ```bash
   npm run build
   ```
   Perintah ini akan memproses fungsi kompilasi statis murni (*Static Site Generation*) ke dalam folder `dist/` yang siap diunggah langsung ke Vercel atau penyedia hosting lainnya.

---

## ⚙️ Spesifikasi Teknis Pembuatan

*   **Zero JS by Default**: Astro mengonversi semua komponen menjadi HTML murni saat proses *build*. JavaScript seberat beberapa KB dari React hanya akan dimuat dan diaktifkan di sisi browser pengunjung ketika komponen interaktif `ProductMenu.jsx` mulai terlihat di layar ponsel (*hydration on visible*).
*   **Media Optimization**: Semua aset visual menu kue menggunakan ekstensi masa kini `.webp` dengan resolusi terkontrol untuk memangkas konsumsi kapasitas *bandwidth* bulanan gratisan Vercel hingga di bawah 100 GB.
*   **API Security & Performance**: Pengambilan data *feed* Instagram ditarik di balik layar ketika Vercel melakukan proses kompilasi (*build-time fetching*). Ini melindungi website dari pembengkakan panggilan API dinamis, memblokir *CORS Error*, serta menyembunyikan token internal dari pihak luar.

---

## 📝 Catatan Hak Cipta
Seluruh aset desain visual, logo, dan kekayaan intelektual menu produk di dalam repositori ini sepenuhnya dimiliki oleh **Big Phil Ostekake**. Kode arsitektur web dikembangkan oleh tim *freelance developer*.
