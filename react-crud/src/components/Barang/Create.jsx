/* eslint-disable no-unused-vars */
// src/components/Barang/Create.jsx
import React, { useState } from "react"; // Import React dan useState untuk menggunakan state hooks
import axios from "axios"; // Import axios untuk melakukan HTTP request

export default function CreateBarang() {
  // Inisialisasi state untuk menyimpan nama barang
  const [kodeBarang, setKodeBarang] = useState("");
  const [namaBarang, setNamaBarang] = useState("");
  const [hargaJual, setHargaJual] = useState("");
  const [hargaPokok, setHargaPokok] = useState("");
  const [kategoriId, setKategoriId] = useState([]);

  // Inisialisasi state untuk menyimpan pesan error
  const [error, setError] = useState("");
  // Inisialisasi state untuk menyimpan pesan sukses
  const [success, setSuccess] = useState("");

  // Mengambil daftar kategori dari API saat komponen dimuat
    useEffect(() => {
      const fetchKategori = async () => {
        try {
          const response = await axios.get(
            ""
          );
          setKategoriId(response.data.data); // Simpan data fakultas ke dalam state
        } catch (error) {
          setError("Failed to fetch Kategori data");
        }
      };
  
      fetchKategori(); // Panggil fungsi untuk mengambil data fakultas
    }, []); // Kosongkan array dependensi agar hanya dijalankan sekali saat komponen dimuat
  
  // Fungsi yang akan dijalankan saat form disubmit
  const handleSubmit = async (e) => {
    e.preventDefault(); // Mencegah reload halaman setelah form disubmit
    setError(""); // Reset pesan error sebelum proses
    setSuccess(""); // Reset pesan sukses sebelum proses

    // Validasi input: jika namaBarang kosong, set pesan error
    if (kodeBarang.trim() === "") {
      setError("Kode Barang is required"); // Set pesan error jika input kosong
      return; // Stop eksekusi fungsi jika input tidak valid
    }
    // Validasi input: jika namaBarang kosong, set pesan error
    if (namaBarang.trim() === "") {
      setError("Nama Barang is required"); // Set pesan error jika input kosong
      return; // Stop eksekusi fungsi jika input tidak valid
    }
    // Validasi input: jika namaBarang kosong, set pesan error
    if (hargaJual.trim() === "") {
      setError("Harga Jual is required"); // Set pesan error jika input kosong
      return; // Stop eksekusi fungsi jika input tidak valid
    }
    // Validasi input: jika namaBarang kosong, set pesan error
    if (hargaPokok.trim() === "") {
      setError("Harga Pokok is required"); // Set pesan error jika input kosong
      return; // Stop eksekusi fungsi jika input tidak valid
    }
    if (kategoriId.trim() === "") {
      setError("Kategori Id is required"); // Set pesan error jika input kosong
      return; // Stop eksekusi fungsi jika input tidak valid
    }

    try {
      // Melakukan HTTP POST request untuk menyimpan data Barang
      const response = await axios.post(
        "", // Endpoint API yang dituju
        {
          kodeBarang: kodeBarang,
          namaBarang: namaBarang,
          hargaJual: hargaJual, // Data yang dikirim berupa objek JSON dengan properti 'nama'
          hargaPokok: hargaPokok,
          kategoriId: kategoriId
        }
      );

      // Jika response HTTP status 201 (Created), berarti berhasil
      if (response.status === 201) {
        // Tampilkan pesan sukses jika fakultas berhasil dibuat
        setSuccess("Barang created successfully!");
        setNamaBarang(""); // Kosongkan input form setelah sukses submit
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
      {/* Form untuk mengisi nama fakultas */}
      <form onSubmit={handleSubmit}>
        {/* Tangani event submit dengan handleSubmit */}
        <div className="mb-3">
          <label className="form-label">
            Kode Barang
          </label>
          {/* Input untuk nama fakultas dengan class bootstrap */}
          <input
            type="text" className="form-control" id="kode"
            value={kodeBarang} // Nilai input disimpan di state namaFakultas
            onChange={(e) => setKodeBarang(e.target.value)} // Update state saat input berubah
            placeholder="Enter Kode Barang Name" // Placeholder teks untuk input
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Nama Barang
          </label>
          {/* Input untuk nama fakultas dengan class bootstrap */}
          <input
            type="text" className="form-control" id="nama"
            value={namaBarang} // Nilai input disimpan di state namaFakultas
            onChange={(e) => setNamaBarang(e.target.value)} // Update state saat input berubah
            placeholder="Enter Barang Name" // Placeholder teks untuk input
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Harga Jual
          </label>
          {/* Input untuk nama nama dekan dengan class bootstrap */}
          <input
            type="text" className="form-control" id="hargaJual"
            value={hargaJual} // Nilai input disimpan di state namaFakultas
            onChange={(e) => setHargaJual(e.target.value)} // Update state saat input berubah
            placeholder="Enter Harga Jual Name" // Placeholder teks untuk input
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Harga Pokok
          </label>
          {/* Input untuk nama fakultas dengan class bootstrap */}
          <input
            type="text" className="form-control" id="hargaPokok"
            value={hargaPokok} // Nilai input disimpan di state namaFakultas
            onChange={(e) => setHargaPokok(e.target.value)} // Update state saat input berubah
            placeholder="Enter Harga Pokok Name" // Placeholder teks untuk input
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Kategori Id
          </label>
          {/* Input untuk nama fakultas dengan class bootstrap */}
          <input
            type="text" className="form-control" id="kategoriId"
            value={kategoriId} // Nilai input disimpan di state namaFakultas
            onChange={(e) => setKategoriId(e.target.value)} // Update state saat input berubah
            placeholder="Enter Kategori Id Name" // Placeholder teks untuk input
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </form>
    </div>
  );
  }
