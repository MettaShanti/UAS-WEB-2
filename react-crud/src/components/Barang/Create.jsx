/* eslint-disable no-unused-vars */
// src/components/Stok/Create.jsx
import React, { useState, useEffect } from "react"; // Import React dan hooks
import axios from "axios"; // Import axios untuk melakukan HTTP request

export default function CreateStok() {
  // Inisialisasi state untuk menyimpan nama prodi
  const [kodeBarang, setKodeBarang] = useState("");
  // Inisialisasi state untuk menyimpan ID fakultas yang dipilih
  const [namaBarang, setNamaBarang] = useState("");
  const [hargaJual, setHargaJual] = useState("");
  const [hargaPokok, setHargaPokok] = useState("");
  const [kategoriId, setKategoriId] = useState("");
  // Inisialisasi state untuk menyimpan daftar fakultas
  const [ListKategori, setListKategori] = useState([]);
  // Inisialisasi state untuk menyimpan pesan error
  const [error, setError] = useState("");
  // Inisialisasi state untuk menyimpan pesan sukses
  const [success, setSuccess] = useState("");

  // Mengambil daftar fakultas dari API saat komponen dimuat
  useEffect(() => {
    const fetchKategori = async () => {
      try {
        const response = await axios.get(
          ""
        );
        setListKategori(response.data.data); // Simpan data fakultas ke dalam state
      } catch (error) {
        setError("Failed to fetch kategori data");
      }
    };

    fetchKategori(); // Panggil fungsi untuk mengambil data fakultas
  }, []); // Kosongkan array dependensi agar hanya dijalankan sekali saat komponen dimuat

  // Fungsi yang akan dijalankan saat form disubmit
  const handleSubmit = async (e) => {
    e.preventDefault(); // Mencegah reload halaman setelah form disubmit
    setError(""); // Reset pesan error sebelum proses
    setSuccess(""); // Reset pesan sukses sebelum proses

    // Validasi input: jika namaProdi atau fakultasId kosong, set pesan error
    if (kodeBarang.trim() === "" || kategoriId.trim() === "") {
      setError("Kode Barang and Id Kategori are required"); // Set pesan error jika input kosong
      return; // Stop eksekusi fungsi jika input tidak valid
    }
    if (namaBarang.trim() === "") {
      setError("Nama Barang are required"); // Set pesan error jika input kosong
      return; // Stop eksekusi fungsi jika input tidak valid
    }
    if (hargaJual.trim() === "") {
      setError("Harga Jual Expired are required"); // Set pesan error jika input kosong
      return; // Stop eksekusi fungsi jika input tidak valid
    }
    if (hargaPokok.trim() === "") {
      setError("Harga Pokok Expired are required"); // Set pesan error jika input kosong
      return; // Stop eksekusi fungsi jika input tidak valid
    }
    try {
      // Melakukan HTTP POST request untuk menyimpan data prodi
      const response = await axios.post(
        "", // Endpoint API yang dituju
        {
          kode_barang: kodeBarang, // Data nama prodi
          nama_barang: namaBarang,
          harga_jual: hargaJual,
          harga_pokok: hargaPokok,
          kategori_id: kategoriId // Data ID fakultas yang dipilih
        }
      );

      // Jika response HTTP status 201 (Created), berarti berhasil
      if (response.status === 201) {
        // Tampilkan pesan sukses jika prodi berhasil dibuat
        setSuccess("Barang created successfully!");
        setKodeBarang(""); // Kosongkan input form setelah sukses submit
        setNamaBarang("");
        setHargaJual("");
        setHargaPokok("");
        setKategoriId(""); // Kosongkan dropdown setelah sukses submit
      } else {
        // Jika tidak berhasil, tampilkan pesan error
        setError("Failed to create Barang");
      }
    } catch (error) {
      // Jika terjadi error (misal masalah jaringan), tampilkan pesan error
      setError("An error occurred while creating Barang");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Create Barang</h2>
      {/* Jika ada pesan error, tampilkan dalam alert bootstrap */}
      {error && <div className="alert alert-danger">{error}</div>}
      {/* Jika ada pesan sukses, tampilkan dalam alert bootstrap */}
      {success && <div className="alert alert-success">{success}</div>}

      <form onSubmit={handleSubmit}>
        {/* Tangani event submit dengan handleSubmit */}
        <div className="mb-3">
          <label className="form-label">Kode Barang</label>
          {/* Input untuk nama prodi dengan class bootstrap */}
          <input
            type="text"
            className="form-control"
            id="kodeBarang"
            value={jumlah} // Nilai input disimpan di state jumlah
            onChange={(e) => setKodeBarang(e.target.value)} // Update state saat input berubah
            placeholder="Enter Kode Barang" // Placeholder teks untuk input
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Nama Barang</label>
          {/* Input untuk nama prodi dengan class bootstrap */}
          <input
            type="date"
            className="form-control"
            id="namaBarang"
            value={namaBarang} // Nilai input disimpan di state namaProdi
            onChange={(e) => setNamaBarang(e.target.value)} // Update state saat input berubah
            placeholder="Enter Nama Barang" // Placeholder teks untuk input
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Harga Jual</label>
          {/* Input untuk nama prodi dengan class bootstrap */}
          <input
            type="number"
            className="form-control"
            id="hargaJual"
            value={hargaJual} // Nilai input disimpan di state namaProdi
            onChange={(e) => setHargaJual(e.target.value)} // Update state saat input berubah
            placeholder="Enter Harga Jual" // Placeholder teks untuk input
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Harga Pokok</label>
          {/* Input untuk nama prodi dengan class bootstrap */}
          <input
            type="number"
            className="form-control"
            id="hargaPokok"
            value={hargaPokok} // Nilai input disimpan di state namaProdi
            onChange={(e) => setHargaPokok(e.target.value)} // Update state saat input berubah
            placeholder="Enter hargaPokok" // Placeholder teks untuk input
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Kategori</label>
          {/* Dropdown untuk memilih fakultas */}
          <select
            className="form-select"
            id="kategoriId"
            value={kategoriId} // Nilai dropdown disimpan di state fakultasId
            onChange={(e) => set(e.target.value)} // Update state saat pilihan berubah
          >
            <option value="">Select Kategori</option>
            {ListKategori.map((kategori) => (
              <option key={kategori.id} value={kategori.id}>
                {/* Set key dan value untuk masing-masing fakultas */}
                {kategori.nama_kategori} {/* Nama fakultas sebagai teks di dropdown */}
              </option>
            ))}
          </select>
        </div>
        {/* Tombol submit dengan class bootstrap */}
        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </form>
    </div>
  );
}
