# 📖 Dongeng Anak Nusantara - Aplikasi Web Interaktif

Aplikasi web interaktif **Dongeng Anak Nusantara** dirancang khusus untuk anak-anak agar membaca cerita rakyat menjadi lebih menyenangkan, interaktif, dan mendidik. Dilengkapi dengan antarmuka bertema pastel yang ramah anak, ilustrasi kartun berkualitas tinggi (gaya Pixar 3D), serta fitur suara pembaca otomatis (Text-to-Speech).

---

## ✨ Fitur Utama
1. **🎨 Desain Menarik & Ramah Anak**: Menggunakan palet warna pastel yang lembut, font ramah anak (Fredoka & Quicksand), serta animasi gelembung latar belakang yang interaktif.
2. **🔊 Suara Pembaca Otomatis (Text-to-Speech)**: Anak-anak dapat mendengarkan dongeng dibacakan menggunakan suara bahasa Indonesia asli dengan tombol putar/jeda/berhenti, serta pengaturan kecepatan suara.
3. **📖 Navigasi Halaman Buku**: Membaca terasa seperti membuka lembaran buku cerita halaman demi halaman, bukan gulir (scroll) panjang ke bawah.
4. **💡 Nilai Moral & Kategori**: Cerita dikelompokkan berdasarkan kategori (Fabel, Legenda, Nilai Moral) dengan bar pencarian dan filter tombol.
5. **🏆 Perayaan Selesai Membaca**: Efek animasi konfeti warna-warni yang meriah ketika selesai membaca seluruh cerita sebagai apresiasi untuk anak-anak.
6. **🖼️ Ilustrasi 3D Premium**: Dilengkapi dengan gambar kover cerita bertema kartun 3D yang dihasilkan oleh generator gambar AI untuk memvisualisasikan cerita.

---

## 📂 Struktur Folder Proyek
```text
dongenganak/
├── index.html          # Struktur utama halaman web aplikasi
├── style.css           # Desain visual, animasi, dan layout responsif
├── app.js              # Database cerita dan logika interaksi aplikasi (TTS, pencarian, konfeti)
├── README.md           # Dokumentasi petunjuk aplikasi (file ini)
└── assets/             # Folder aset gambar ilustrasi cerita
    ├── kancil_buaya.jpg
    ├── keong_mas.jpg
    ├── malin_kundang.jpg
    └── semut_belalang.jpg
```

---

## 🚀 Cara Menjalankan Aplikasi di Termux

Anda dapat dengan mudah menjalankan aplikasi ini sebagai server web lokal di HP Anda melalui Termux dengan beberapa pilihan metode berikut:

### Metode 1: Menggunakan Server HTTP Python (Sangat Direkomendasikan)
Jika Anda sudah menginstal Python di Termux, jalankan perintah berikut:

1. Pastikan Anda berada di direktori proyek:
   ```bash
   cd ~/downloads/dongenganak
   ```
2. Jalankan server lokal:
   ```bash
   python -m http.server 8080
   ```
3. Buka browser di HP Anda (Chrome, Kiwi Browser, dll.) dan ketik alamat:
   ```text
   http://localhost:8080
   ```

---

### Metode 2: Menggunakan Server HTTP PHP
Jika HP Anda memiliki PHP di Termux:
```bash
cd ~/downloads/dongenganak
php -S localhost:8080
```
Lalu buka `http://localhost:8080` di browser HP Anda.

---

### Metode 3: Buka File Secara Langsung
Jika Anda menggunakan File Manager yang mendukung pembukaan file HTML (seperti Mi File Manager atau Solid Explorer), cukup cari folder `Download/dongenganak` di penyimpanan internal HP Anda, lalu ketuk berkas **`index.html`** dan pilih untuk dibuka menggunakan browser (seperti Google Chrome).

---

## 📝 Cerita Rakyat yang Tersedia saat Ini:
*   🦊 **Kancil dan Buaya** (Kategori: Fabel) - Mengajarkan kecerdikan dalam menghadapi masalah.
*   🐌 **Keong Mas** (Kategori: Legenda) - Mengajarkan kesabaran, kebaikan hati, dan keteguhan iman.
*   🪨 **Malin Kundang** (Kategori: Legenda/Moral) - Mengajarkan pentingnya berbakti kepada orang tua.
*   🐜 **Semut dan Belalang** (Kategori: Moral) - Mengajarkan pentingnya bekerja keras mempersiapkan masa depan.
