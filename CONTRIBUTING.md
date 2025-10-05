# Panduan Kontribusi untuk Wisudara

Terima kasih atas minat Anda untuk berkontribusi pada proyek Wisudara! Baik Anda melaporkan bug, meminta fitur baru, atau ingin menyumbangkan kode, panduan ini akan membantu Anda.

## 💬 Melaporkan Masalah (Reporting Issues)

Jika Anda menemukan bug atau masalah lain, silakan buat *issue* baru di repositori GitHub. Sertakan langkah-langkah untuk mereproduksi masalah tersebut, versi browser atau lingkungan Anda, dan screenshot jika memungkinkan. Ini akan sangat membantu dalam proses debugging.

## ✨ Mengajukan Fitur (Feature Requests)

Kami terbuka untuk ide-ide baru! Jika Anda memiliki saran untuk fitur baru atau perbaikan, silakan buat *issue* dengan label `enhancement`. Jelaskan ide Anda sejelas mungkin: apa masalah yang ingin Anda selesaikan dan bagaimana solusi yang Anda usulkan dapat membantu.

## 🛠️ Berkontribusi Kode (Code Contributions)

Jika Anda ingin langsung berkontribusi dengan kode, ikuti langkah-langkah berikut:

1.  **Fork Repositori**: Buat salinan (fork) dari repositori ini ke akun GitHub Anda.
2.  **Clone Fork**: Clone repositori yang sudah Anda fork ke mesin lokal Anda.
    ```bash
    git clone https://github.com/NAMA_PENGGUNA_ANDA/NAMA_REPOSITORI_ANDA.git
    ```
3.  **Buat Branch Baru**: Buat branch baru untuk mengerjakan perubahan Anda. Gunakan nama branch yang deskriptif.
    ```bash
    git checkout -b fitur/tambah-animasi-keren
    ```
4.  **Lakukan Perubahan**: Buat perubahan kode Anda. Pastikan untuk mengikuti gaya kode dan konvensi yang sudah ada.
5.  **Commit Perubahan**: Lakukan commit pada perubahan Anda dengan pesan yang jelas dan deskriptif. Kami merekomendasikan format *Conventional Commits*.
    *   `feat`: Untuk penambahan fitur baru.
    *   `fix`: Untuk perbaikan bug.
    *   `docs`: Untuk perubahan dokumentasi.
    *   `style`: Untuk perubahan format atau gaya kode.
    *   `refactor`: Untuk refactoring kode tanpa mengubah fungsionalitas.
    *   `chore`: Untuk tugas-tugas pemeliharaan.
    ```bash
    git commit -m "feat: Menambahkan animasi fade-in pada bagian portofolio"
    ```
6.  **Push ke Branch Anda**: Push perubahan ke branch Anda di repositori fork.
    ```bash
    git push origin fitur/tambah-animasi-keren
    ```
7.  **Buat Pull Request**: Buka repositori utama di GitHub dan buat *Pull Request* (PR) dari branch Anda. Berikan judul dan deskripsi yang jelas tentang apa yang Anda ubah.

## 🎨 Standar Gaya Kode (Code Style)

-   Gunakan `pnpm` untuk manajemen dependensi.
-   Format kode Anda menggunakan Prettier (jika sudah dikonfigurasi).
-   Jaga agar kode tetap bersih, mudah dibaca, dan berikan komentar jika diperlukan untuk logika yang kompleks.

Terima kasih telah membantu membuat proyek ini menjadi lebih baik!
