import type { CodeLang } from "@/components/CodeBlock";

export type Snippet = {
  slug: string;
  title: string;
  description: string;
  language: string;
  section: string;
  step: number;
  lang: CodeLang;
  code: string;
  tags: string[];
};

export const SNIPPET_LANGUAGES = [
  "All",
  "Python",
  "SQL",
  "Laravel",
  "JavaScript",
  "PHP",
  "R",
  "HTML",
  "CSS",
  "Git",
  "Linux",
];

export const LANGUAGE_ORDER = [
  "Python",
  "SQL",
  "Laravel",
  "JavaScript",
  "PHP",
  "R",
  "HTML",
  "CSS",
  "Git",
  "Linux",
];

export const snippets: Snippet[] = [
  /* ───────────────────────── Python ───────────────────────── */
  {
    slug: "py-basic-syntax",
    title: "Basic Syntax",
    description: "Program pertama: komentar dan menampilkan output.",
    language: "Python",
    section: "",
    step: 1,
    lang: "python",
    code: `# Komentar satu baris
print("Hello, World!")
print("Belajar Python")`,
    tags: ["print", "comment", "basic"],
  },
  {
    slug: "py-variables",
    title: "Variables",
    description: "Menyimpan data ke variabel. Python tidak perlu deklarasi tipe.",
    language: "Python",
    section: "",
    step: 2,
    lang: "python",
    code: `nama = "Satria"
umur = 20
tinggi = 170.5
is_student = True

print(nama)
print(umur, tinggi, is_student)`,
    tags: ["variable", "assignment", "basic"],
  },
  {
    slug: "py-data-types",
    title: "Data Types",
    description: "Tipe data dasar di Python dan cara mengeceknya dengan type().",
    language: "Python",
    section: "",
    step: 3,
    lang: "python",
    code: `text = "Halo"        # str
angka = 42           # int
desimal = 3.14       # float
sudah = True         # bool
daftar = [1, 2, 3]   # list
kamus = {"a": 1}     # dict

print(type(text))
print(type(angka))
print(type(daftar))`,
    tags: ["type", "str", "int", "list", "dict"],
  },
  {
    slug: "py-conditions",
    title: "Conditions",
    description: "Percabangan dengan if, elif, dan else.",
    language: "Python",
    section: "",
    step: 4,
    lang: "python",
    code: `nilai = 85

if nilai >= 90:
    print("A")
elif nilai >= 75:
    print("B")
else:
    print("C")`,
    tags: ["if", "elif", "else", "condition"],
  },
  {
    slug: "py-loops",
    title: "Loops",
    description: "Perulangan menggunakan for dan while.",
    language: "Python",
    section: "",
    step: 5,
    lang: "python",
    code: `# For dengan range
for i in range(1, 6):
    print(i)

# While
count = 0
while count < 3:
    print(count)
    count += 1`,
    tags: ["for", "while", "range", "loop"],
  },
  {
    slug: "py-functions",
    title: "Functions",
    description: "Membuat fungsi dengan def dan mengembalikan nilai dengan return.",
    language: "Python",
    section: "",
    step: 6,
    lang: "python",
    code: `def sapa(nama):
    return f"Halo, {nama}!"

def tambah(a, b):
    return a + b

print(sapa("Satria"))
print(tambah(3, 5))`,
    tags: ["def", "return", "function"],
  },
  {
    slug: "py-list-dict",
    title: "List & Dictionary",
    description: "Menambah, mengakses, dan mengubah data di list dan dictionary.",
    language: "Python",
    section: "",
    step: 7,
    lang: "python",
    code: `buah = ["apel", "mangga", "jeruk"]
buah.append("pisang")
print(buah[0], len(buah))

data = {"nama": "Satria", "umur": 20}
print(data["nama"])
data["kota"] = "Semarang"
print(data)`,
    tags: ["list", "dict", "append", "index"],
  },
  {
    slug: "py-file-handling",
    title: "File Handling",
    description: "Menulis dan membaca file teks dengan open().",
    language: "Python",
    section: "",
    step: 8,
    lang: "python",
    code: `# Tulis file
with open("data.txt", "w") as f:
    f.write("Halo Python\\n")

# Baca file
with open("data.txt", "r") as f:
    isi = f.read()
    print(isi)`,
    tags: ["open", "file", "read", "write"],
  },
  {
    slug: "py-numpy",
    title: "NumPy Basics",
    description: "Array numerik dan perhitungan dasar dengan NumPy.",
    language: "Python",
    section: "",
    step: 9,
    lang: "python",
    code: `import numpy as np

arr = np.array([1, 2, 3, 4, 5])
print(arr.mean())
print(arr.max())

matrix = np.zeros((2, 3))
print(matrix)`,
    tags: ["numpy", "array", "mean"],
  },
  {
    slug: "py-pandas",
    title: "Pandas Basics",
    description: "Membaca CSV, melihat data, dan filter dasar dengan Pandas.",
    language: "Python",
    section: "",
    step: 10,
    lang: "python",
    code: `import pandas as pd

df = pd.read_csv("data.csv")
print(df.head())

print(df["kolom"].mean())
print(df[df["kolom"] > 10])`,
    tags: ["pandas", "dataframe", "csv"],
  },
  {
    slug: "py-matplotlib",
    title: "Matplotlib Basics",
    description: "Membuat grafik garis sederhana dengan Matplotlib.",
    language: "Python",
    section: "",
    step: 11,
    lang: "python",
    code: `import matplotlib.pyplot as plt

x = [1, 2, 3, 4]
y = [10, 20, 25, 40]

plt.plot(x, y)
plt.xlabel("X")
plt.ylabel("Y")
plt.title("Grafik Sederhana")
plt.show()`,
    tags: ["matplotlib", "plot", "chart"],
  },

  /* ───────────────────────── SQL ───────────────────────── */
  {
    slug: "sql-connection",
    title: "Database Connection / Basic Setup",
    description: "Masuk ke MySQL dari terminal dan memilih database.",
    language: "SQL",
    section: "",
    step: 1,
    lang: "bash",
    code: `# Masuk ke MySQL
mysql -u root -p

-- Pada MySQL shell
SHOW DATABASES;
USE nama_database;
SHOW TABLES;`,
    tags: ["mysql", "connect", "setup"],
  },
  {
    slug: "sql-select",
    title: "SELECT",
    description: "Mengambil data dari tabel.",
    language: "SQL",
    section: "",
    step: 2,
    lang: "sql",
    code: `SELECT * FROM users;

SELECT nama, email FROM users;`,
    tags: ["select", "query", "basic"],
  },
  {
    slug: "sql-where",
    title: "WHERE",
    description: "Menyaring data dengan kondisi.",
    language: "SQL",
    section: "",
    step: 3,
    lang: "sql",
    code: `SELECT nama, umur
FROM users
WHERE umur >= 18
  AND kota = 'Jakarta';`,
    tags: ["where", "filter", "condition"],
  },
  {
    slug: "sql-order-by",
    title: "ORDER BY",
    description: "Mengurutkan hasil query.",
    language: "SQL",
    section: "",
    step: 4,
    lang: "sql",
    code: `SELECT nama, nilai
FROM students
ORDER BY nilai DESC;

-- ASC untuk naik, DESC untuk turun
ORDER BY nama ASC;`,
    tags: ["order", "sort", "asc", "desc"],
  },
  {
    slug: "sql-group-by",
    title: "GROUP BY",
    description: "Mengelompokkan data berdasarkan kolom.",
    language: "SQL",
    section: "",
    step: 5,
    lang: "sql",
    code: `SELECT kota, COUNT(*) AS jumlah
FROM users
GROUP BY kota;`,
    tags: ["group", "aggregate"],
  },
  {
    slug: "sql-aggregate",
    title: "Aggregate Functions",
    description: "COUNT, AVG, MIN, MAX untuk menghitung data.",
    language: "SQL",
    section: "",
    step: 6,
    lang: "sql",
    code: `SELECT COUNT(*) AS total,
       AVG(nilai) AS rata_rata,
       MIN(nilai) AS minimal,
       MAX(nilai) AS maksimal
FROM students;`,
    tags: ["count", "avg", "min", "max"],
  },
  {
    slug: "sql-join",
    title: "JOIN",
    description: "Menggabungkan data dari dua tabel.",
    language: "SQL",
    section: "",
    step: 7,
    lang: "sql",
    code: `SELECT orders.id, customers.nama, orders.total
FROM orders
INNER JOIN customers ON customers.id = orders.customer_id;`,
    tags: ["join", "inner", "relation"],
  },
  {
    slug: "sql-insert",
    title: "INSERT",
    description: "Menambahkan data baru ke tabel.",
    language: "SQL",
    section: "",
    step: 8,
    lang: "sql",
    code: `INSERT INTO users (nama, email)
VALUES ('Satria', 'satria@example.com');`,
    tags: ["insert", "create"],
  },
  {
    slug: "sql-update",
    title: "UPDATE",
    description: "Mengubah data yang sudah ada.",
    language: "SQL",
    section: "",
    step: 9,
    lang: "sql",
    code: `UPDATE users
SET kota = 'Bandung'
WHERE id = 1;`,
    tags: ["update", "edit"],
  },
  {
    slug: "sql-delete",
    title: "DELETE",
    description: "Menghapus data dari tabel.",
    language: "SQL",
    section: "",
    step: 10,
    lang: "sql",
    code: `DELETE FROM users
WHERE id = 1;`,
    tags: ["delete", "remove"],
  },

  /* ───────────────────────── Laravel ───────────────────────── */
  {
    slug: "laravel-check-php",
    title: "Check PHP",
    description: "Pastikan PHP sudah terinstall dan cek versinya.",
    language: "Laravel",
    section: "01. Environment",
    step: 1,
    lang: "bash",
    code: `php -v`,
    tags: ["php", "environment", "version"],
  },
  {
    slug: "laravel-check-composer",
    title: "Check Composer",
    description: "Pastikan Composer (package manager PHP) sudah terinstall.",
    language: "Laravel",
    section: "01. Environment",
    step: 2,
    lang: "bash",
    code: `composer -V`,
    tags: ["composer", "environment"],
  },
  {
    slug: "laravel-check-node",
    title: "Check Node.js",
    description: "Pastikan Node.js sudah terinstall.",
    language: "Laravel",
    section: "01. Environment",
    step: 3,
    lang: "bash",
    code: `node -v`,
    tags: ["node", "environment"],
  },
  {
    slug: "laravel-check-npm",
    title: "Check NPM",
    description: "Pastikan NPM (package manager Node.js) sudah terinstall.",
    language: "Laravel",
    section: "01. Environment",
    step: 4,
    lang: "bash",
    code: `npm -v`,
    tags: ["npm", "environment"],
  },
  {
    slug: "laravel-create-project",
    title: "Create Laravel Project",
    description: "Membuat project Laravel baru dengan Composer.",
    language: "Laravel",
    section: "02. Project Setup",
    step: 5,
    lang: "bash",
    code: `composer create-project laravel/laravel nama-project`,
    tags: ["create", "project", "composer"],
  },
  {
    slug: "laravel-enter-project",
    title: "Enter Project",
    description: "Masuk ke folder project Laravel.",
    language: "Laravel",
    section: "02. Project Setup",
    step: 6,
    lang: "bash",
    code: `cd nama-project`,
    tags: ["cd", "folder"],
  },
  {
    slug: "laravel-install-npm",
    title: "Install NPM Dependencies",
    description: "Install dependency frontend (Vite, Tailwind, dsb) dari package.json.",
    language: "Laravel",
    section: "02. Project Setup",
    step: 7,
    lang: "bash",
    code: `npm install`,
    tags: ["npm", "install", "dependencies"],
  },
  {
    slug: "laravel-serve",
    title: "Run Development Server",
    description: "Menjalankan server development Laravel.",
    language: "Laravel",
    section: "02. Project Setup",
    step: 8,
    lang: "bash",
    code: `php artisan serve

# Buka http://localhost:8000`,
    tags: ["serve", "server", "artisan"],
  },
  {
    slug: "laravel-run-vite",
    title: "Run Vite",
    description: "Menjalankan Vite untuk compile asset frontend (CSS/JS).",
    language: "Laravel",
    section: "02. Project Setup",
    step: 9,
    lang: "bash",
    code: `npm run dev`,
    tags: ["vite", "npm", "asset"],
  },
  {
    slug: "laravel-artisan-list",
    title: "Artisan List",
    description: "Menampilkan semua perintah Artisan yang tersedia.",
    language: "Laravel",
    section: "03. Artisan Basics",
    step: 10,
    lang: "bash",
    code: `php artisan list`,
    tags: ["artisan", "list", "command"],
  },
  {
    slug: "laravel-about",
    title: "Laravel About",
    description: "Menampilkan info environment Laravel (versi, PHP, config).",
    language: "Laravel",
    section: "03. Artisan Basics",
    step: 11,
    lang: "bash",
    code: `php artisan about`,
    tags: ["about", "info", "environment"],
  },
  {
    slug: "laravel-route-list",
    title: "Route List",
    description: "Menampilkan semua route yang terdaftar.",
    language: "Laravel",
    section: "03. Artisan Basics",
    step: 12,
    lang: "bash",
    code: `php artisan route:list`,
    tags: ["route", "list"],
  },
  {
    slug: "laravel-migrate",
    title: "Migration",
    description: "Menjalankan migration (membuat tabel database).",
    language: "Laravel",
    section: "03. Artisan Basics",
    step: 13,
    lang: "bash",
    code: `php artisan migrate`,
    tags: ["migration", "database"],
  },
  {
    slug: "laravel-migrate-fresh",
    title: "Fresh Migration",
    description: "Menghapus semua tabel lalu menjalankan migration dari awal.",
    language: "Laravel",
    section: "03. Artisan Basics",
    step: 14,
    lang: "bash",
    code: `php artisan migrate:fresh`,
    tags: ["fresh", "migration", "reset"],
  },
  {
    slug: "laravel-db-seed",
    title: "Database Seeder",
    description: "Menjalankan seeder untuk mengisi data awal database.",
    language: "Laravel",
    section: "03. Artisan Basics",
    step: 15,
    lang: "bash",
    code: `php artisan db:seed`,
    tags: ["seed", "database", "dummy data"],
  },
  {
    slug: "laravel-storage-link",
    title: "Storage Link",
    description: "Membuat symbolic link dari public/storage ke storage/app/public.",
    language: "Laravel",
    section: "03. Artisan Basics",
    step: 16,
    lang: "bash",
    code: `php artisan storage:link`,
    tags: ["storage", "link", "upload"],
  },
  {
    slug: "laravel-make-controller",
    title: "Create Controller",
    description: "Membuat controller baru.",
    language: "Laravel",
    section: "04. Create Laravel Files",
    step: 17,
    lang: "bash",
    code: `php artisan make:controller UserController`,
    tags: ["controller", "make"],
  },
  {
    slug: "laravel-make-model",
    title: "Create Model",
    description: "Membuat model baru.",
    language: "Laravel",
    section: "04. Create Laravel Files",
    step: 18,
    lang: "bash",
    code: `php artisan make:model User`,
    tags: ["model", "make"],
  },
  {
    slug: "laravel-make-model-migration",
    title: "Create Model + Migration",
    description: "Membuat model sekaligus migration-nya dalam satu perintah.",
    language: "Laravel",
    section: "04. Create Laravel Files",
    step: 19,
    lang: "bash",
    code: `php artisan make:model User -m`,
    tags: ["model", "migration", "make"],
  },
  {
    slug: "laravel-make-migration",
    title: "Create Migration",
    description: "Membuat file migration baru.",
    language: "Laravel",
    section: "04. Create Laravel Files",
    step: 20,
    lang: "bash",
    code: `php artisan make:migration create_users_table`,
    tags: ["migration", "make"],
  },
  {
    slug: "laravel-make-seeder",
    title: "Create Seeder",
    description: "Membuat seeder untuk data dummy.",
    language: "Laravel",
    section: "04. Create Laravel Files",
    step: 21,
    lang: "bash",
    code: `php artisan make:seeder UserSeeder`,
    tags: ["seeder", "make"],
  },
  {
    slug: "laravel-make-middleware",
    title: "Create Middleware",
    description: "Membuat middleware baru.",
    language: "Laravel",
    section: "04. Create Laravel Files",
    step: 22,
    lang: "bash",
    code: `php artisan make:middleware CheckAge`,
    tags: ["middleware", "make"],
  },
  {
    slug: "laravel-make-request",
    title: "Create Request",
    description: "Membuat Form Request untuk validasi input.",
    language: "Laravel",
    section: "04. Create Laravel Files",
    step: 23,
    lang: "bash",
    code: `php artisan make:request StoreUserRequest`,
    tags: ["request", "validation", "make"],
  },
  {
    slug: "laravel-make-resource",
    title: "Create Resource",
    description: "Membuat API Resource untuk format response JSON.",
    language: "Laravel",
    section: "04. Create Laravel Files",
    step: 24,
    lang: "bash",
    code: `php artisan make:resource UserResource`,
    tags: ["resource", "api", "make"],
  },
  {
    slug: "laravel-make-command",
    title: "Create Command",
    description: "Membuat command Artisan baru.",
    language: "Laravel",
    section: "04. Create Laravel Files",
    step: 25,
    lang: "bash",
    code: `php artisan make:command SendReport`,
    tags: ["command", "make"],
  },
  {
    slug: "laravel-migration-file",
    title: "Migration File Structure",
    description: "Struktur dasar file migration: mendefinisikan kolom tabel.",
    language: "Laravel",
    section: "05. Database Basics",
    step: 26,
    lang: "php",
    code: `Schema::create('users', function (Blueprint $table) {
    $table->id();
    $table->string('name');
    $table->string('email')->unique();
    $table->timestamps();
});`,
    tags: ["schema", "table", "column"],
  },
  {
    slug: "laravel-model-fillable",
    title: "Model with $fillable",
    description: "Model dasar dengan atribut yang boleh diisi (mass assignable).",
    language: "Laravel",
    section: "05. Database Basics",
    step: 27,
    lang: "php",
    code: `class User extends Model
{
    protected $fillable = ['name', 'email'];
}`,
    tags: ["model", "fillable", "eloquent"],
  },
  {
    slug: "laravel-seeder-code",
    title: "Seeder Example",
    description: "Isi seeder untuk menambahkan data awal ke database.",
    language: "Laravel",
    section: "05. Database Basics",
    step: 28,
    lang: "php",
    code: `User::create([
    'name' => 'Satria',
    'email' => 'satria@example.com',
]);`,
    tags: ["seeder", "create", "data"],
  },
  {
    slug: "laravel-db-connection",
    title: "Database Connection",
    description: "Konfigurasi koneksi database di file .env.",
    language: "Laravel",
    section: "05. Database Basics",
    step: 29,
    lang: "bash",
    code: `DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=nama_database
DB_USERNAME=root
DB_PASSWORD=`,
    tags: ["env", "database", "config"],
  },
  {
    slug: "laravel-clear-cache",
    title: "Clear Cache",
    description: "Menghapus cache aplikasi.",
    language: "Laravel",
    section: "06. Common Commands",
    step: 30,
    lang: "bash",
    code: `php artisan cache:clear`,
    tags: ["cache", "clear"],
  },
  {
    slug: "laravel-clear-config",
    title: "Clear Config",
    description: "Membaca ulang file konfigurasi.",
    language: "Laravel",
    section: "06. Common Commands",
    step: 31,
    lang: "bash",
    code: `php artisan config:clear`,
    tags: ["config", "clear"],
  },
  {
    slug: "laravel-clear-route",
    title: "Clear Route",
    description: "Menghapus cache route.",
    language: "Laravel",
    section: "06. Common Commands",
    step: 32,
    lang: "bash",
    code: `php artisan route:clear`,
    tags: ["route", "clear"],
  },
  {
    slug: "laravel-clear-view",
    title: "Clear View",
    description: "Menghapus cache blade/view.",
    language: "Laravel",
    section: "06. Common Commands",
    step: 33,
    lang: "bash",
    code: `php artisan view:clear`,
    tags: ["view", "blade", "clear"],
  },

  /* ───────────────────────── JavaScript ───────────────────────── */
  {
    slug: "js-basic-syntax",
    title: "Basic Syntax",
    description: "Komentar dan output pertama di JavaScript.",
    language: "JavaScript",
    section: "",
    step: 1,
    lang: "javascript",
    code: `// Komentar satu baris
/* Komentar
   multi baris */
console.log("Hello, World!");`,
    tags: ["console", "comment", "basic"],
  },
  {
    slug: "js-variables",
    title: "Variables",
    description: "Deklarasi variabel dengan const, let, dan var.",
    language: "JavaScript",
    section: "",
    step: 2,
    lang: "javascript",
    code: `const nama = "Satria";
let umur = 20;
var lama = true;

umur = 21;
console.log(nama, umur);`,
    tags: ["const", "let", "var"],
  },
  {
    slug: "js-data-types",
    title: "Data Types",
    description: "Tipe data dasar di JavaScript.",
    language: "JavaScript",
    section: "",
    step: 3,
    lang: "javascript",
    code: `const text = "Halo";      // string
const angka = 42;          // number
const sudah = true;        // boolean
const kosong = null;       // object
const tidakDikenal = undefined;

console.log(typeof text);
console.log(typeof angka);`,
    tags: ["type", "string", "number", "boolean"],
  },
  {
    slug: "js-conditions",
    title: "Conditions",
    description: "Percabangan dengan if, else if, dan else.",
    language: "JavaScript",
    section: "",
    step: 4,
    lang: "javascript",
    code: `const nilai = 85;

if (nilai >= 90) {
  console.log("A");
} else if (nilai >= 75) {
  console.log("B");
} else {
  console.log("C");
}`,
    tags: ["if", "else", "condition"],
  },
  {
    slug: "js-loops",
    title: "Loops",
    description: "Perulangan dengan for dan while.",
    language: "JavaScript",
    section: "",
    step: 5,
    lang: "javascript",
    code: `for (let i = 1; i <= 5; i++) {
  console.log(i);
}

let count = 0;
while (count < 3) {
  console.log(count);
  count++;
}`,
    tags: ["for", "while", "loop"],
  },
  {
    slug: "js-functions",
    title: "Functions",
    description: "Fungsi biasa dan arrow function.",
    language: "JavaScript",
    section: "",
    step: 6,
    lang: "javascript",
    code: `function sapa(nama) {
  return "Halo, " + nama + "!";
}

const tambah = (a, b) => a + b;

console.log(sapa("Satria"));
console.log(tambah(3, 5));`,
    tags: ["function", "arrow", "return"],
  },
  {
    slug: "js-array-object",
    title: "Array & Object",
    description: "Struktur data dasar: array dan object.",
    language: "JavaScript",
    section: "",
    step: 7,
    lang: "javascript",
    code: `const buah = ["apel", "mangga"];
buah.push("jeruk");
console.log(buah[0], buah.length);

const orang = { nama: "Satria", umur: 20 };
console.log(orang.nama);
orang.kota = "Semarang";`,
    tags: ["array", "object", "push"],
  },
  {
    slug: "js-dom",
    title: "DOM Basic",
    description: "Mengambil elemen dan menambahkan event di halaman web.",
    language: "JavaScript",
    section: "",
    step: 8,
    lang: "javascript",
    code: `const tombol = document.getElementById("tombol");

tombol.addEventListener("click", () => {
  alert("Halo dari JavaScript!");
});`,
    tags: ["dom", "element", "event"],
  },

  /* ───────────────────────── PHP ───────────────────────── */
  {
    slug: "php-basic-syntax",
    title: "Basic Syntax",
    description: "Struktur dasar file PHP: tag, komentar, dan output.",
    language: "PHP",
    section: "",
    step: 1,
    lang: "php",
    code: `<?php
// Komentar satu baris
/* Komentar multi baris */
echo "Hello, World!";
?>`,
    tags: ["echo", "comment", "basic"],
  },
  {
    slug: "php-variables",
    title: "Variables",
    description: "Variabel di PHP selalu diawali tanda $.",
    language: "PHP",
    section: "",
    step: 2,
    lang: "php",
    code: `<?php
$nama = "Satria";
$umur = 20;
$tinggi = 170.5;
$is_student = true;

echo $nama . " - " . $umur;
?>`,
    tags: ["variable", "concat"],
  },
  {
    slug: "php-conditions",
    title: "Conditions",
    description: "Percabangan dengan if, elseif, dan else.",
    language: "PHP",
    section: "",
    step: 3,
    lang: "php",
    code: `<?php
$nilai = 85;

if ($nilai >= 90) {
    echo "A";
} elseif ($nilai >= 75) {
    echo "B";
} else {
    echo "C";
}
?>`,
    tags: ["if", "elseif", "condition"],
  },
  {
    slug: "php-loops",
    title: "Loops",
    description: "Perulangan dengan foreach dan while.",
    language: "PHP",
    section: "",
    step: 4,
    lang: "php",
    code: `<?php
$buah = ["apel", "mangga", "jeruk"];

foreach ($buah as $item) {
    echo $item . "<br>";
}

$i = 0;
while ($i < 3) {
    echo $i . "<br>";
    $i++;
}
?>`,
    tags: ["foreach", "while", "loop"],
  },
  {
    slug: "php-functions",
    title: "Functions",
    description: "Membuat fungsi di PHP.",
    language: "PHP",
    section: "",
    step: 5,
    lang: "php",
    code: `<?php
function sapa($nama) {
    return "Halo, " . $nama . "!";
}

function tambah($a, $b) {
    return $a + $b;
}

echo sapa("Satria");
echo tambah(3, 5);
?>`,
    tags: ["function", "return"],
  },
  {
    slug: "php-arrays",
    title: "Arrays",
    description: "Array numerik dan asosiatif di PHP.",
    language: "PHP",
    section: "",
    step: 6,
    lang: "php",
    code: `<?php
$buah = ["apel", "mangga", "jeruk"];
echo $buah[0];

$orang = ["nama" => "Satria", "umur" => 20];
echo $orang["nama"];
?>`,
    tags: ["array", "associative"],
  },
  {
    slug: "php-form-post",
    title: "Form (GET/POST)",
    description: "Mengambil data dari form HTML dengan $_POST.",
    language: "PHP",
    section: "",
    step: 7,
    lang: "php",
    code: `<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nama = $_POST["nama"] ?? "";
    echo "Halo, " . $nama;
}
?>`,
    tags: ["form", "post", "request"],
  },

  /* ───────────────────────── R ───────────────────────── */
  {
    slug: "r-basic-syntax",
    title: "Basic Syntax",
    description: "Komentar dan output pertama di R.",
    language: "R",
    section: "",
    step: 1,
    lang: "r",
    code: `# Komentar satu baris
print("Hello, World!")
cat("Belajar R\\n")`,
    tags: ["print", "comment", "basic"],
  },
  {
    slug: "r-variables",
    title: "Variables & Vectors",
    description: "Variabel dan vektor (struktur data utama di R).",
    language: "R",
    section: "",
    step: 2,
    lang: "r",
    code: `nama <- "Satria"
umur <- 20
angka <- c(1, 2, 3, 4, 5)

print(nama)
print(mean(angka))`,
    tags: ["vector", "c()", "mean"],
  },
  {
    slug: "r-conditions",
    title: "Conditions",
    description: "Percabangan dengan if dan else.",
    language: "R",
    section: "",
    step: 3,
    lang: "r",
    code: `nilai <- 85

if (nilai >= 90) {
  print("A")
} else if (nilai >= 75) {
  print("B")
} else {
  print("C")
}`,
    tags: ["if", "else", "condition"],
  },
  {
    slug: "r-loops-functions",
    title: "Loops & Functions",
    description: "Perulangan for dan pembuatan fungsi.",
    language: "R",
    section: "",
    step: 4,
    lang: "r",
    code: `for (i in 1:5) {
  print(i)
}

sapa <- function(nama) {
  return(paste("Halo,", nama))
}

print(sapa("Satria"))`,
    tags: ["for", "function", "return"],
  },
  {
    slug: "r-dataframe",
    title: "Data Frame",
    description: "Membuat data frame dan membaca CSV di R.",
    language: "R",
    section: "",
    step: 5,
    lang: "r",
    code: `df <- data.frame(
  nama = c("Andi", "Budi"),
  nilai = c(80, 90)
)

df2 <- read.csv("data.csv")
print(head(df2))`,
    tags: ["dataframe", "csv", "read.csv"],
  },
  {
    slug: "r-plot",
    title: "Basic Plot",
    description: "Membuat grafik garis sederhana.",
    language: "R",
    section: "",
    step: 6,
    lang: "r",
    code: `x <- c(1, 2, 3, 4)
y <- c(10, 20, 25, 40)

plot(x, y, type = "b", main = "Grafik Sederhana",
     xlab = "X", ylab = "Y")`,
    tags: ["plot", "chart"],
  },

  /* ───────────────────────── HTML ───────────────────────── */
  {
    slug: "html-structure",
    title: "Document Structure",
    description: "Struktur dasar halaman HTML.",
    language: "HTML",
    section: "",
    step: 1,
    lang: "html",
    code: `<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <title>Halaman Pertama</title>
  </head>
  <body>
    <h1>Halo, Dunia!</h1>
  </body>
</html>`,
    tags: ["structure", "doctype", "basic"],
  },
  {
    slug: "html-headings",
    title: "Headings & Paragraph",
    description: "Judul h1–h6 dan paragraf.",
    language: "HTML",
    section: "",
    step: 2,
    lang: "html",
    code: `<h1>Judul Utama</h1>
<h2>Sub Judul</h2>
<p>Ini adalah paragraf biasa.</p>
<p>Paragraf <strong>tebal</strong> dan <em>miring</em>.</p>`,
    tags: ["heading", "paragraph", "text"],
  },
  {
    slug: "html-links-images",
    title: "Links & Images",
    description: "Link ke halaman lain dan menampilkan gambar.",
    language: "HTML",
    section: "",
    step: 3,
    lang: "html",
    code: `<a href="https://satrialfata.id">Kunjungi website</a>

<img src="/img/profile.jpeg" alt="Foto profil" width="200" />`,
    tags: ["link", "image", "anchor"],
  },
  {
    slug: "html-lists",
    title: "Lists",
    description: "List berurutan dan tidak berurutan.",
    language: "HTML",
    section: "",
    step: 4,
    lang: "html",
    code: `<ol>
  <li>Langkah pertama</li>
  <li>Langkah kedua</li>
</ol>

<ul>
  <li>Item A</li>
  <li>Item B</li>
</ul>`,
    tags: ["ol", "ul", "list"],
  },
  {
    slug: "html-table",
    title: "Table",
    description: "Tabel dasar dengan header dan baris data.",
    language: "HTML",
    section: "",
    step: 5,
    lang: "html",
    code: `<table>
  <thead>
    <tr>
      <th>Nama</th>
      <th>Nilai</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Andi</td>
      <td>90</td>
    </tr>
  </tbody>
</table>`,
    tags: ["table", "row", "cell"],
  },
  {
    slug: "html-form",
    title: "Form",
    description: "Form dasar untuk input data.",
    language: "HTML",
    section: "",
    step: 6,
    lang: "html",
    code: `<form action="/submit" method="POST">
  <label for="nama">Nama</label>
  <input type="text" id="nama" name="nama" required />

  <label for="email">Email</label>
  <input type="email" id="email" name="email" />

  <button type="submit">Kirim</button>
</form>`,
    tags: ["form", "input", "button"],
  },

  /* ───────────────────────── CSS ───────────────────────── */
  {
    slug: "css-selectors",
    title: "Selectors & Colors",
    description: "Selector dasar dan mengubah warna teks/background.",
    language: "CSS",
    section: "",
    step: 1,
    lang: "css",
    code: `h1 {
  color: #333;
}

.judul {
  color: #0f172a;
  background-color: #f1f5f9;
}

#header {
  color: white;
}`,
    tags: ["selector", "color", "basic"],
  },
  {
    slug: "css-box-model",
    title: "Box Model",
    description: "margin, padding, border: fondasi tata letak CSS.",
    language: "CSS",
    section: "",
    step: 2,
    lang: "css",
    code: `.kartu {
  width: 300px;
  padding: 16px;
  border: 1px solid #ddd;
  margin: 8px 0;
  border-radius: 8px;
}`,
    tags: ["margin", "padding", "border"],
  },
  {
    slug: "css-flexbox",
    title: "Flexbox",
    description: "Menyusun elemen secara horizontal/vertikal dengan flex.",
    language: "CSS",
    section: "",
    step: 3,
    lang: "css",
    code: `.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}`,
    tags: ["flex", "layout", "align"],
  },
  {
    slug: "css-grid",
    title: "Grid",
    description: "Membuat grid responsif untuk kartu/kolom.",
    language: "CSS",
    section: "",
    step: 4,
    lang: "css",
    code: `.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}`,
    tags: ["grid", "columns", "layout"],
  },
  {
    slug: "css-responsive",
    title: "Responsive (Media Query)",
    description: "Menyesuaikan tampilan untuk layar kecil.",
    language: "CSS",
    section: "",
    step: 5,
    lang: "css",
    code: `.grid {
  grid-template-columns: repeat(3, 1fr);
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}`,
    tags: ["media", "responsive", "mobile"],
  },

  /* ───────────────────────── Git ───────────────────────── */
  {
    slug: "git-init",
    title: "Init / Clone",
    description: "Membuat repository baru atau mengambil repository yang sudah ada.",
    language: "Git",
    section: "",
    step: 1,
    lang: "bash",
    code: `# Repository baru
git init

# Ambil repository yang sudah ada
git clone https://github.com/username/repo.git`,
    tags: ["init", "clone", "basic"],
  },
  {
    slug: "git-status",
    title: "Status & Log",
    description: "Melihat status file dan riwayat commit.",
    language: "Git",
    section: "",
    step: 2,
    lang: "bash",
    code: `git status
git log --oneline -10`,
    tags: ["status", "log", "history"],
  },
  {
    slug: "git-commit",
    title: "Add & Commit",
    description: "Menyimpan perubahan ke repository.",
    language: "Git",
    section: "",
    step: 3,
    lang: "bash",
    code: `git add .
git commit -m "feat: tambah fitur baru"`,
    tags: ["add", "commit", "stage"],
  },
  {
    slug: "git-remote",
    title: "Push & Pull",
    description: "Mengirim dan mengambil perubahan dari remote.",
    language: "Git",
    section: "",
    step: 4,
    lang: "bash",
    code: `git remote add origin https://github.com/username/repo.git
git push -u origin main
git pull origin main`,
    tags: ["push", "pull", "remote"],
  },
  {
    slug: "git-branch",
    title: "Branch",
    description: "Membuat, berpindah, dan melihat branch.",
    language: "Git",
    section: "",
    step: 5,
    lang: "bash",
    code: `git branch fitur-baru
git checkout fitur-baru
git branch`,
    tags: ["branch", "checkout"],
  },
  {
    slug: "git-merge",
    title: "Merge",
    description: "Menggabungkan branch ke branch aktif.",
    language: "Git",
    section: "",
    step: 6,
    lang: "bash",
    code: `git checkout main
git merge fitur-baru`,
    tags: ["merge", "combine"],
  },
  {
    slug: "git-undo",
    title: "Batalkan Perubahan",
    description: "Membatalkan perubahan file yang belum di-commit.",
    language: "Git",
    section: "",
    step: 7,
    lang: "bash",
    code: `# Batalkan satu file
git restore nama-file.py

# Batalkan semua perubahan
git restore .`,
    tags: ["restore", "undo"],
  },

  /* ───────────────────────── Linux ───────────────────────── */
  {
    slug: "linux-navigate",
    title: "Navigasi Direktori",
    description: "Melihat lokasi dan isi direktori, lalu berpindah.",
    language: "Linux",
    section: "",
    step: 1,
    lang: "bash",
    code: `pwd              # lokasi saat ini
ls -la           # daftar file (termasuk hidden)
cd nama-folder   # pindah direktori
cd ..            # kembali ke induk`,
    tags: ["pwd", "ls", "cd", "basic"],
  },
  {
    slug: "linux-create-delete",
    title: "Buat & Hapus",
    description: "Membuat folder/file dan menghapusnya.",
    language: "Linux",
    section: "",
    step: 2,
    lang: "bash",
    code: `mkdir project       # buat folder
touch catatan.txt    # buat file kosong
rm catatan.txt       # hapus file
rm -r project        # hapus folder`,
    tags: ["mkdir", "touch", "rm"],
  },
  {
    slug: "linux-copy-move",
    title: "Salin & Pindah",
    description: "Menyalin dan memindahkan file.",
    language: "Linux",
    section: "",
    step: 3,
    lang: "bash",
    code: `cp catatan.txt backup.txt     # salin
mv draft.txt final.txt        # pindah / rename
mv file.txt /home/user/       # pindah ke folder lain`,
    tags: ["cp", "mv", "copy"],
  },
  {
    slug: "linux-read-file",
    title: "Baca File",
    description: "Melihat isi file dari terminal.",
    language: "Linux",
    section: "",
    step: 4,
    lang: "bash",
    code: `cat catatan.txt        # seluruh isi file
head -n 5 catatan.txt  # 5 baris pertama
tail -n 5 catatan.txt  # 5 baris terakhir`,
    tags: ["cat", "head", "tail"],
  },
  {
    slug: "linux-search",
    title: "Cari File & Teks",
    description: "Mencari file dan teks di dalam file.",
    language: "Linux",
    section: "",
    step: 5,
    lang: "bash",
    code: `find . -name "*.py"              # cari file
grep "kata" catatan.txt          # cari teks
grep -r "kata" folder/           # cari teks di folder`,
    tags: ["find", "grep", "search"],
  },
  {
    slug: "linux-permissions",
    title: "Permission (chmod)",
    description: "Mengatur izin file dan folder.",
    language: "Linux",
    section: "",
    step: 6,
    lang: "bash",
    code: `chmod +x script.sh     # beri izin eksekusi
chmod 644 config.php    # rw-r--r--
chmod -R 755 folder/    # rekursif`,
    tags: ["chmod", "permission", "security"],
  },
];
