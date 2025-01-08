/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react"; // Mengimpor React, useState, dan useEffect dari library React
import { useParams, useNavigate } from "react-router-dom"; // Mengimpor useParams dan useNavigate dari react-router-dom
import axios from "axios"; // Mengimpor axios untuk melakukan request HTTP

export default function Edit() {
  const { id } = useParams(); // Mengambil parameter "id" dari URL menggunakan useParams
  const navigate = useNavigate(); // Menggunakan useNavigate untuk navigasi setelah proses selesai
   const [kodeBarang, setKodeBarang] = useState("");
  // Inisialisasi state untuk menyimpan ID fakultas yang dipilih
  const [namaBarang, setNamaBarang] = useState("");
  const [hargaJual, setHargaJual] = useState("");
  const [hargaPokok, setHargaPokok] = useState("");
  const [kategori, setKategori] = useState("");
  const [kategoriId, setKategoriId] = useState("");
  // Inisialisasi state untuk menyimpan daftar fakultas
  const [KategoriList, setKategoriList] = useState([]);
  const [error, setError] = useState(null); // Menginisialisasi state 'error' untuk menyimpan pesan error jika ada

  // Mengambil data prodi berdasarkan id ketika komponen pertama kali dimuat
  useEffect(() => {
    // Mengambil data prodi berdasarkan ID
    axios
      .get(`/${id}`)
      .then((response) => {
        setKodeBarang(response.data.result.kodeBarang); // Menyimpan nama prodi ke dalam state 'nama'
        setNamaBarang(response.data.result.namaBarang);
        setHargaJual(response.data.result.hargaJual);
        setHargaPokok(response.data.result.hargaPokok);
        setKategori(response.data.result.kategori.id); // Menyimpan ID fakultas ke dalam state 'fakultas'
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Menangani error jika request gagal
        setError("Data tidak ditemukan"); // Menampilkan pesan error jika data tidak ditemukan
      });

    // Mengambil data fakultas untuk dropdown
    axios
      .get("") // Request ke API fakultas
      .then((response) => {
        setKategoriList(response.data.data); // Menyimpan daftar fakultas ke dalam state 'listFakultas'// resut
      })
      .catch((error) => {
        console.error("Error fetching kategori data:", error); // Menangani error jika request gagal
      });
  }, [id]); // useEffect akan dijalankan ulang setiap kali 'id' berubah

  // Menghandle perubahan input saat pengguna mengetik di form
  const handleChange = (e) => {
    setKodeBarang(e.target.value); // Mengubah state 'nama' sesuai dengan nilai input yang diisi pengguna
  };
  const handleChangeNamaBarang = (e) => {
    setKaprodi(e.target.value); // Mengubah state 'nama' sesuai dengan nilai input yang diisi pengguna
  };
  const handleChangeHargaJual = (e) => {
    setSingkatan(e.target.value); // Mengubah state 'nama' sesuai dengan nilai input yang diisi pengguna
  };
  const handleChangeHargaPokok = (e) => {
    setSingkatan(e.target.value); // Mengubah state 'nama' sesuai dengan nilai input yang diisi pengguna
  };
  // Menghandle perubahan dropdown fakultas
  const handleKategoriChange = (e) => {
    setKategori(e.target.value); // Mengubah state 'fakultas' sesuai dengan pilihan yang dipilih pengguna di dropdown
  };

  // Menghandle submit form untuk mengedit data prodi
  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah reload halaman saat form disubmit
    axios
      .patch(`/${id}`, {kodeBarang, namaBarang, hargaJual, hargaPokok, kategori_id: kategori}) // Mengirimkan request PATCH untuk mengupdate data prodi berdasarkan ID
      .then((response) => {
        navigate("/barang"); // Jika update berhasil, navigasi kembali ke halaman list prodi
      })
      .catch((error) => {
        console.error("Error updating data:", error); // Menampilkan error di console jika ada kesalahan
        setError("Gagal mengupdate data"); // Mengubah state 'error' jika terjadi kesalahan dalam proses update
      });
  };

  return (
    <div>
      <h2>Edit Barang</h2> {/* Menampilkan judul halaman */}
      {error && <p className="text-danger">{error}</p>} {/* Menampilkan pesan error jika ada */}
      <form onSubmit={handleSubmit}> {/* Form untuk mengedit nama prodi */}
        <div className="mb-3">
          <label htmlFor="kodeBarang" className="form-label">
            Kode Barang
          </label> {/* Label untuk input nama prodi */}
          <input
            type="text" className="form-control" id="kodeBarang" value={kodeBarang} // Mengisi nilai input dengan state 'nama'
            onChange={handleChange} // Mengubah nilai input saat ada perubahan (user mengetik)
            required // Input wajib diisi
          />
        </div>
        <div className="mb-3">
          <label htmlFor="namaBarang" className="form-label">
            Nama Barang
          </label> {/* Label untuk input nama prodi */}
          <input
            type="text" className="form-control" id="namaBarang" value={namaBarang} // Mengisi nilai input dengan state 'nama'
            onChange={handleChangeNamaBarang} // Mengubah nilai input saat ada perubahan (user mengetik)
            required // Input wajib diisi
          />
        </div>
        <div className="mb-3">
          <label htmlFor="hargaJual" className="form-label">
            Harga Jual
          </label> {/* Label untuk input nama prodi */}
          <input
            type="text" className="form-control" id="hargaJual" value={hargaJual} // Mengisi nilai input dengan state 'nama'
            onChange={handleChangeHargaJual} // Mengubah nilai input saat ada perubahan (user mengetik)
            required // Input wajib diisi
          />
        </div>
        <div className="mb-3">
          <label htmlFor="hargaPokok" className="form-label">
            Harga Pokok
          </label> {/* Label untuk input nama prodi */}
          <input
            type="text" className="form-control" id="hargaPokok" value={hargaPokok} // Mengisi nilai input dengan state 'nama'
            onChange={handleChangeHargaPokok} // Mengubah nilai input saat ada perubahan (user mengetik)
            required // Input wajib diisi
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Ketegori" className="form-label">
            Nama Kategori
          </label> {/* Label untuk dropdown fakultas */}
          <select
            className="form-select" id="Ketegori" value={Ketegori} // Mengisi nilai dropdown dengan state 'fakultas'
            onChange={handleKategoriChange} // Mengubah nilai dropdown saat pengguna memilih fakultas
            required // Dropdown wajib dipilih
          >
            <option value="">Pilih Kategori</option> {/* Default option untuk dropdown */}
            {KategoriList.map(
              // Melakukan mapping dari daftar fakultas untuk menampilkan setiap fakultas sebagai opsi
              (data) => (
                <option key={data.id} value={data.id}>
                  {data.nama} {/* Menampilkan nama fakultas */}
                </option>
              )
            )}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>{" "}
        {/* Tombol untuk submit form */}
      </form>
    </div>
  );
}