Nama    : Fitria Meliyana

NIM     : 2341727002

Kelas   : TI-4J

# Praktikum 1: Membuat Variasi Ukuran Teks Heading dengan Context

1. Langkah 1: Buat project baru dan repo baru di GitHub

![img](/08-belajar-context/img/prak%201%20langkah%201.PNG)

2. Langkah 2: Buat struktur folder dengan prinsip atomic design

![img](/08-belajar-context/img/prak%201%20langkah%202.PNG)

3. Langkah 3: Buat komponen atom baru

Buat file baru di src/components/atoms/heading.tsx berisi kode sebagai berikut.

![img](/08-belajar-context/img/prak%201%20langkah%203%20heading.PNG)

Kemudian buat file baru di src\components\atoms\section.tsx berisi kode berikut.

![img](/08-belajar-context/img/prak%201%20langkah%203%20section.PNG)

Lalu bagian MainPage buat file baru di src\components\templates\main_page.tsx berisi kode sebagai berikut.

![img](/08-belajar-context/img/prak%201%20langkah%203%20main_page.PNG)

 4. Langkah 4: Ubah isi kode page.tsx dan run

Ubahlah kode di src\app\page.tsx seperti berikut. Lalu run dan lihat hasilnya di browser Anda.

![img](/08-belajar-context/img/prak%201%20langkah%204.PNG)

Soal 1

Capture hasilnya dan buatlah laporan di README.md. Jelaskan apa yang telah Anda pelajari dan bagaimana tampilannya saat ini?

![img](/08-belajar-context/img/prak%201%20hasil%20soal%201.PNG)

5. Langkah 5.1: Buat Context

Buatlah file baru di src\utilities\context\mycontext.tsx yang berisi kode sebagai berikut:

![img](/08-belajar-context/img/prak%201%20langkah%205.1.PNG)

6. Langkah 5.2: Gunakan context

Ubahlah isi kode komponen Heading dengan Impor useContext Hook dari React dan context Anda:

![img](/08-belajar-context/img/PRAK%201%20LANGKAH%205.2.PNG)

Sekarang komponen Heading tidak membutuhkan sebuah prop level, Anda tidak perlu mengoper level prop ke Heading di JSX Anda. Sebagai gantinya Perbarui JSX sehingga Section yang dapat menerimanya:

![img](/08-belajar-context/img/prak%201%20langkah%205.2%20main%20page.PNG)

7. Langkah 5.3: Sediakan context

Komponen Section saat ini merenders anaknya, bungkus mereka semua dengan sebuah context provider untuk menyediakan LevelContext kepada mereka seperti kode berikut:

![img](/08-belajar-context/img/prak%201%20langkah%205.3.PNG)

Soal 2

Capture hasilnya dan buatlah laporan di README.md. Jelaskan apa yang telah Anda pelajari dan bagaimana tampilannya saat ini?

![img](/08-belajar-context/img/prak%201%20hasil%20soal%20no%202%20error.PNG)

Jika terjadi error, silakan perbaiki, Mengapa hal itu bisa terjadi? Jelaskan!

![img](/08-belajar-context/img/prak%201%20hasil%20soal%20no%202%20perbaikan%20error.PNG)

Hasilnya :

![img](/08-belajar-context/img/prak%201%20hasil%20soal%20no%202%20perbaikan%20error%20kedua.PNG)

8. Langkah 6: Menggunakan dan menyediakan context dari komponen yang sama

Berikut adalah bagaimana Anda dapat melakukannya dengan mengubah sedikit kode pada komponen Section:

![img](/08-belajar-context/img/prak%201%20langkah%206%20section.PNG)

Dengan perubahan ini, Anda tidak perlu mengoper prop level baik ke < Section > atau ke < Heading >:

![img](/08-belajar-context/img/prak%201%20langkah%206%20main%20page.PNG)

![img](/08-belajar-context/img/prak%201%20langkah%206%20heading.PNG)

Soal 3
Capture hasilnya dan buatlah laporan di README.md. Jelaskan apa yang telah Anda pelajari dan bagaimana tampilannya saat ini?

![img](/08-belajar-context/img/prak%201%20hasil%20soal%20no%203.PNG)






