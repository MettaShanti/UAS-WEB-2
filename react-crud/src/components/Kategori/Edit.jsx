/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";  // Mengimpor React, useState, dan useEffect dari library React
import { useParams, useNavigate } from "react-router-dom";  // Mengimpor useParams dan useNavigate dari react-router-dom untuk menangani parameter dan navigasi
import axios from "axios";  // Mengimpor axios untuk melakukan request HTTP

export default function Edit() {
  const { id } = useParams();  // Mengambil parameter "id" dari URL menggunakan useParams
  const navigate = useNavigate();  // Menggunakan useNavigate untuk navigasi setelah proses selesai
  const [kodeBarang, setKodeBarang] = useState("");
  const [namaBarang, setNamaBarang] = useState("");
  const [hargaJual, setHargaJual] = useState("");
  const [hargaPokok, setHargaPokok] = useState("");
  const [kategoriId, setKategoriId] = useState("");

  const [error, setError] = useState(null);  // Menginisialisasi state 'error' untuk menyimpan pesan error jika ada

  // Mengambil data fakultas berdasarkan id ketika komponen pertama kali dimuat
  useEffect(() => {
    axios
      .get(`/${id}`) // Mengirimkan request GET untuk mendapatkan data fakultas berdasarkan ID
      .then((response) => {
        setKodeBarang(response.data.result.kodeBarang);
        setNamaBarang(response.data.result.namaBarang);
        setHargaJual(response.data.result.hargaJual);  // Jika sukses, mengisi state 'nama' dengan nama fakultas dari 
        setHargaPokok(response.data.result.hargaPokok);  // Jika sukses, mengisi state 'nama' dengan nama fakultas dari response
        setKategoriId(response.data.result.kategoriId);  // Jika sukses, mengisi state 'nama' dengan nama fakultas dari response

      })
      .catch((error) => {
        console.error("Error fetching data:", error);  // Menampilkan pesan error di console jika request gagal
        setError("Data tidak ditemukan");  // Menampilkan pesan error jika data tidak ditemukan
      });
  }, [id]);  // useEffect akan dijalankan ulang setiap kali 'id' berubah

  // Menghandle perubahan input saat pengguna mengetik di form
  const handleChange = (e) => {
    setKodeBarang(e.target.value);  // Mengubah state 'nama' sesuai dengan nilai input yang diisi pengguna

  };
  const handleChangeNama = (e) => {
    setNamaBarang(e.target.value);  // Mengubah state 'nama' sesuai dengan nilai input yang diisi pengguna

  };
  const handleChangeHargaJual = (e) => {
    setHargaJual(e.target.value);  // Mengubah state 'nama' sesuai dengan nilai input yang diisi pengguna

  };
  const handleChangeHargaPokok = (e) => {
    setHargaPokok(e.target.value);  // Mengubah state 'nama' sesuai dengan nilai input yang diisi pengguna

  };
  const handleChangeKategoriId = (e) => {
    setKategoriId(e.target.value);  // Mengubah state 'nama' sesuai dengan nilai input yang diisi pengguna

  };

  // Menghandle submit form untuk mengedit data fakultas
  const handleSubmit = (e) => {
    e.preventDefault();  // Mencegah reload halaman saat form disubmit
    axios
      .put(`/${id}`, { kodeBarang, namaBarang, hargaJual, hargaPokok, kategoriId })  // Mengirimkan request PATCH untuk mengupdate data fakultas berdasarkan ID
      .then((response) => {
        navigate("/barang");  // Jika update berhasil, navigasi kembali ke halaman list fakultas
      })
      .catch((error) => {
        console.error("Error updating data:", error);  // Menampilkan error di console jika ada kesalahan
        setError("Gagal mengupdate data");  // Mengubah state 'error' jika terjadi kesalahan dalam proses update
      });
  };

  return (
    <div>
      <h2>Edit Barang</h2>  {/* Menampilkan judul halaman */}
      {error && <p className="text-danger">{error}</p>}  {/* Menampilkan pesan error jika ada */}
      <form onSubmit={handleSubmit}>  {/* Form untuk mengedit nama fakultas */}
      <div className="mb-3">
          <label htmlFor="KodeBarang" className="form-label">Kode Barang</label>  {/* Label untuk input nama */}
          <input
            type="text"
            className="form-control"
            id="KodeBarang"
            value={KodeBarang}  // Mengisi nilai input dengan state 'nama'
            onChange={handleChange}  // Mengubah nilai input saat ada perubahan (user mengetik)
            required  // Input wajib diisi
          />
        </div>
        <div className="mb-3">
          <label htmlFor="namaBarang" className="form-label">Nama Barang</label>  {/* Label untuk input nama */}
          <input
            type="text"
            className="form-control"
            id="namaBarang"
            value={namaBarang}  // Mengisi nilai input dengan state 'nama'
            onChange={handleChangeNama}  // Mengubah nilai input saat ada perubahan (user mengetik)
            required  // Input wajib diisi
          />
        </div>
        <div className="mb-3">
          <label htmlFor="hargaJual" className="form-label">Harga Jual</label>  {/* Label untuk input nama */}
          <input
            type="text"
            className="form-control"
            id="hargaJual"
            value={hargaJual}  // Mengisi nilai input dengan state 'nama'
            onChange={handleChangeHargaJual}  // Mengubah nilai input saat ada perubahan (user mengetik)
            required  // Input wajib diisi
          />
        </div>
        <div className="mb-3">
          <label htmlFor="hargaPokok" className="form-label">Harga Pokok</label>  {/* Label untuk input nama */}
          <input
            type="text"
            className="form-control"
            id="hargaPokok"
            value={hargaPokok}  // Mengisi nilai input dengan state 'nama'
            onChange={handleChangeHargaPokok}  // Mengubah nilai input saat ada perubahan (user mengetik)
            required  // Input wajib diisi
          />
        </div>
        <div className="mb-3">
          <label htmlFor="kategoriId" className="form-label">Kategori Id</label>  {/* Label untuk input nama */}
          <input
            type="text"
            className="form-control"
            id="kategoriId"
            value={kategoriId}  // Mengisi nilai input dengan state 'nama'
            onChange={handleChangeKategoriId}  // Mengubah nilai input saat ada perubahan (user mengetik)
            required  // Input wajib diisi
          />
        </div>
        <button type="submit" className="btn btn-primary">Save</button>  {/* Tombol untuk submit form */}
      </form>
    </div>
  );
}