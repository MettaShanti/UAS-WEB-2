/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";  // Mengimpor React, useState, dan useEffect dari library React
import { useParams, useNavigate } from "react-router-dom";  // Mengimpor useParams dan useNavigate dari react-router-dom untuk menangani parameter dan navigasi
import axios from "axios";  // Mengimpor axios untuk melakukan request HTTP

export default function Edit() {
  const { id } = useParams();  // Mengambil parameter "id" dari URL menggunakan useParams
  const navigate = useNavigate();  // Menggunakan useNavigate untuk navigasi setelah proses selesai
  const [namaKategori, setNamaKategori] = useState("");
  const [jenis, setJenis] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [status, setStatus] = useState("");

  const [error, setError] = useState(null);  // Menginisialisasi state 'error' untuk menyimpan pesan error jika ada

  // Mengambil data fakultas berdasarkan id ketika komponen pertama kali dimuat
  useEffect(() => {
    axios
      .get(`https://uas-web-2-git-main-metta-shantis-projects.vercel.app/api/api/kategori/${id}`) // Mengirimkan request GET untuk mendapatkan data fakultas berdasarkan ID
      .then((response) => {
        setNamaKategori(response.data.result.nama_ketegori);  // Jika sukses, mengisi state 'nama' dengan nama fakultas dari 
        setJenis(response.data.result.jenis);  // Jika sukses, mengisi state 'nama' dengan nama fakultas dari response
        setDeskripsi(response.data.result.deskripsi);  // Jika sukses, mengisi state 'nama' dengan nama fakultas dari response
        setStatus(response.data.result.status);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);  // Menampilkan pesan error di console jika request gagal
        setError("Data tidak ditemukan");  // Menampilkan pesan error jika data tidak ditemukan
      });
  }, [id]);  // useEffect akan dijalankan ulang setiap kali 'id' berubah

  // Menghandle perubahan input saat pengguna mengetik di form
  const handleChange = (e) => {
    setNamaKategori(e.target.value);  // Mengubah state 'nama' sesuai dengan nilai input yang diisi pengguna

  };
  const handleChangeJenis = (e) => {
    setJenis(e.target.value);  // Mengubah state 'nama' sesuai dengan nilai input yang diisi pengguna

  };
  const handleChangeDeskripsi = (e) => {
    setDeskripsi(e.target.value);  // Mengubah state 'nama' sesuai dengan nilai input yang diisi pengguna

  };
  const handleChangeStatus = (e) => {
    setStatus(e.target.value);  // Mengubah state 'nama' sesuai dengan nilai input yang diisi pengguna

  };

  // Menghandle submit form untuk mengedit data fakultas
  const handleSubmit = (e) => {
    e.preventDefault();  // Mencegah reload halaman saat form disubmit
    axios
      .put(`https://uas-web-2-git-main-metta-shantis-projects.vercel.app/api/api/kategori/${id}`, { nama_ketegori, jenis, deskripsi, status })  // Mengirimkan request PATCH untuk mengupdate data fakultas berdasarkan ID
      .then((response) => {
        navigate("/kategori");  // Jika update berhasil, navigasi kembali ke halaman list fakultas
      })
      .catch((error) => {
        console.error("Error updating data:", error);  // Menampilkan error di console jika ada kesalahan
        setError("Gagal mengupdate data");  // Mengubah state 'error' jika terjadi kesalahan dalam proses update
      });
  };

  return (
    <div>
      <h2>Edit Kategori</h2>  {/* Menampilkan judul halaman */}
      {error && <p className="text-danger">{error}</p>}  {/* Menampilkan pesan error jika ada */}
      <form onSubmit={handleSubmit}>  {/* Form untuk mengedit nama fakultas */}
        <div className="mb-3">
          <label htmlFor="namaKategori" className="form-label">Nama Kategori</label>  {/* Label untuk input nama */}
          <input
            type="text"
            className="form-control"
            id="namaKategori"
            value={namaKategori}  // Mengisi nilai input dengan state 'nama'
            onChange={handleChange}  // Mengubah nilai input saat ada perubahan (user mengetik)
            required  // Input wajib diisi
          />
        </div>
        <div className="mb-3">
          <label htmlFor="jenis" className="form-label">Jenis</label>  {/* Label untuk input nama */}
          <input
            type="text"
            className="form-control"
            id="jenis"
            value={jenis}  // Mengisi nilai input dengan state 'nama'
            onChange={handleChangeJenis}  // Mengubah nilai input saat ada perubahan (user mengetik)
            required  // Input wajib diisi
          />
        </div>
        <div className="mb-3">
          <label htmlFor="deskripsi" className="form-label">Deskripsi</label>  {/* Label untuk input nama */}
          <input
            type="text"
            className="form-control"
            id="deskripsi"
            value={deskripsi}  // Mengisi nilai input dengan state 'nama'
            onChange={handleChangeDeskripsi}  // Mengubah nilai input saat ada perubahan (user mengetik)
            required  // Input wajib diisi
          />
        </div>
        <div className="mb-3">
          <label htmlFor="status" className="form-label">Status</label>  {/* Label untuk input nama */}
          <input
            type="text"
            className="form-control"
            id="status"
            value={status}  // Mengisi nilai input dengan state 'nama'
            onChange={handleChangeStatus}  // Mengubah nilai input saat ada perubahan (user mengetik)
            required  // Input wajib diisi
          />
        </div>
        <button type="submit" className="btn btn-primary">Save</button>  {/* Tombol untuk submit form */}
      </form>
    </div>
  );
}