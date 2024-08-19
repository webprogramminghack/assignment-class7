# Chainable Counter Object

## Objective

Create a `counter` object that keeps track of a count and allows you to increment, decrement, reset, and display the count. Modify the object methods to make them chainable, allowing multiple method calls in sequence.

## Instructions

### 1. Create the `counter` Object

Create an object called `counter` with the following properties and methods:

- **count**: A property that holds the current count (initialize it to 0).

- **increment**: A method that increments the `count` by 1.

- **decrement**: A method that decrements the `count` by 1.

- **reset**: A method that resets the `count` to 0.

- **showCount**: A method that displays the current count using `console.log`.

### 2. Modify the Methods for Chaining

Modify the methods `increment`, `decrement`, `reset`, and `showCount` so they can be chained together. For example:

```javascript
counter.increment().increment().decrement().showCount().reset().showCount();
```

The above code should display:

```
1
0
```

# Objek Penghitung yang Dapat Dirantai

## Tujuan

Buat objek `counter` yang melacak hitungan dan memungkinkan Anda menambah, mengurangi, mengatur ulang, dan menampilkan hitungan. Ubah metode objek agar dapat dirangkai, sehingga memungkinkan beberapa pemanggilan metode secara berurutan.

## Petunjuk

### 1. Buat Objek `counter`

Buat objek bernama `counter` dengan properti dan metode berikut:

- **count**: Properti yang menyimpan hitungan saat ini (inisialisasi ke 0).

- **peningkatan**: Metode yang menambah `hitungan` sebanyak 1.

- **pengurangan**: Metode yang mengurangi `hitungan` sebanyak 1.

- **reset**: Metode yang mereset `hitungan` ke 0.

- **showCount**: Metode yang menampilkan hitungan saat ini menggunakan `console.log`.

### 2. Memodifikasi Metode Chaining

Ubah metode `kenaikan`, `penurunan`, `reset`, dan `showCount` agar dapat dirangkai bersama. Misalnya:

```javascript
counter.peningkatan().peningkatan().penurunan().showCount().reset().showCount();
```

Kode di atas akan menampilkan:

```
1
0
```
