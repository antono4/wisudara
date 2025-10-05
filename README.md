# Wisudara - Landing Page Fotografi

![Pratinjau Situs Wisudara](/public/hero-image.jpg)

Selamat datang di repositori proyek **Wisudara**, sebuah landing page modern dan elegan yang dirancang untuk studio fotografi momen spesial di Padang, Sumatera Barat. Proyek ini dibangun untuk menampilkan portofolio, paket layanan, dan informasi kontak secara profesional.

**[✨ Lihat Demo Langsung (Coming Soon)](#)**

---

## 🚀 Tumpukan Teknologi (Tech Stack)

Proyek ini dibangun menggunakan ekosistem modern yang berfokus pada kinerja, pengalaman pengembang, dan kualitas UI.

| Teknologi | Deskripsi |
| :--- | :--- |
| **[Next.js](https://nextjs.org/)** | Framework React untuk aplikasi web siap produksi. Menggunakan App Router untuk routing, Server Components, dan optimisasi gambar. |
| **[React](https://reactjs.org/)** | Pustaka JavaScript untuk membangun antarmuka pengguna yang interaktif. |
| **[TypeScript](https://www.typescriptlang.org/)** | Menambahkan tipe statis pada JavaScript untuk meningkatkan skalabilitas dan maintainabilitas proyek. |
| **[Tailwind CSS](https://tailwindcss.com/)** | Framework CSS utility-first untuk desain yang cepat dan responsif tanpa meninggalkan HTML. |
| **[Shadcn/UI](https://ui.shadcn.com/)** | Kumpulan komponen UI yang dapat digunakan kembali, dibangun di atas Radix UI dan Tailwind CSS untuk aksesibilitas dan kustomisasi. |
| **[Framer Motion](https://www.framer.com/motion/)** | Pustaka animasi untuk React yang membuat antarmuka terasa lebih hidup dan dinamis. (Digunakan untuk `ScrollAnimation`) |
| **[Lucide React](https://lucide.dev/)** | Pustaka ikon yang simpel, indah, dan konsisten. |

## 📂 Struktur Proyek

Struktur folder dirancang agar intuitif dan mudah dikelola seiring pertumbuhan proyek.

```
.
├── public/               # Aset statis (gambar, ikon)
├── src/
│   ├── app/              # Halaman dan tata letak utama (Next.js App Router)
│   │   ├── globals.css   # File CSS Global dan variabel tema
│   │   ├── layout.tsx    # Tata letak root aplikasi
│   │   └── page.tsx      # Halaman utama (landing page)
│   │
│   ├── components/       # Komponen React
│   │   ├── layout/       # Komponen tata letak (Header, Footer)
│   │   ├── sections/     # Komponen bagian per bagian (Hero, About, Portfolio, dll.)
│   │   ├── ui/           # Komponen UI dari Shadcn (Button, Card, dll.)
│   │   └── *.tsx         # Komponen lain yang dapat digunakan kembali (Logo, ThemeToggle)
│   │
│   ├── hooks/            # Custom React Hooks (misal: use-scrollspy)
│   │
│   └── lib/              # Fungsi utilitas, konstanta, dan data
│       ├── constants.ts  # Konstanta global (nomor WhatsApp, link Instagram)
│       └── utils.ts      # Fungsi pembantu (misal: cn untuk classname)
│
├── .gitignore            # File & folder yang diabaikan oleh Git
├── next.config.ts        # Konfigurasi Next.js
├── package.json          # Dependensi dan skrip proyek
├── tailwind.config.ts    # Konfigurasi Tailwind CSS
└── tsconfig.json         # Konfigurasi TypeScript
```

---

## 🛠️ Instalasi dan Menjalankan Proyek Secara Lokal

Ikuti langkah-langkah di bawah ini untuk menjalankan salinan proyek ini di mesin lokal Anda.

### Prasyarat

- [Node.js](https://nodejs.org/en/) (v18.x atau lebih baru)
- [pnpm](https://pnpm.io/installation) (opsional, direkomendasikan) atau npm/yarn

### 1. Clone Repositori

```bash
git clone https://github.com/NAMA_PENGGUNA_ANDA/NAMA_REPOSITORI_ANDA.git
cd NAMA_REPOSITORI_ANDA
```

### 2. Instal Dependensi

Disarankan menggunakan `pnpm` untuk instalasi yang lebih cepat.

```bash
pnpm install
```
Atau, jika Anda menggunakan `npm`:
```bash
npm install
```

### 3. Konfigurasi Variabel Lingkungan

Salin file `.env.example` (jika ada) menjadi `.env` dan isi variabel yang diperlukan. Untuk proyek ini, saat ini tidak ada variabel lingkungan yang wajib.

```bash
# Tidak ada variabel yang wajib saat ini.
# File .env bisa dibiarkan kosong.
```

### 4. Jalankan Server Pengembangan

```bash
pnpm dev
```
Atau, jika Anda menggunakan `npm`:
```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihat hasilnya.

---

## 📜 Lisensi

Proyek ini dilisensikan di bawah **Lisensi MIT**. Lihat file `LICENSE` untuk detail lebih lanjut.

---

Dibuat dengan ❤️ oleh **Randa**.
