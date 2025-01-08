import React, {useEffect, useState} from "react"
import axios from "axios"
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2"; // Import SweetAlert2

export default function List(){
    //state Stok
    const [stok, setStok] = useState([]);
    //useeffect

    useEffect( () => {
        axios
        .get("")
        .then( response => {
            console. log(response);
            setStok(response.data.data)//disesuaikan dari inspect
        })
    }, [] )

// Fungsi untuk menghapus fakultas berdasarkan ID dengan konfirmasi SweetAlert2
const handleDelete = (id, jumlah) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You won't be able to revert this! Stok: ${jumlah}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Lakukan penghapusan jika dikonfirmasi
        axios
          .delete(`/${id}`)
          .then((response) => {
            // Hapus fakultas dari state setelah sukses dihapus dari server
            setStok(stok.filter((data) => data.id !== id));
            // Tampilkan notifikasi sukses
            Swal.fire("Deleted!", "Your data has been deleted.", "success");
          })
          .catch((error) => {
            console.error("Error deleting data:", error); // Menangani error
            Swal.fire(
              "Error",
              "There was an issue deleting the data.",
              "error"
            );
          });
      }
    });
  };
    return (
        <>
        <h2>List Stok</h2>
         <NavLink to="/stok/create" className="btn btn-primary mb-3">Create</NavLink>
        <table className="table">
            <thead>
                <tr>
                    <th>Jumlah</th>
                    <th>Tanggal Masuk</th>
                    <th>Tanggal Expited</th>
                    <th>Keterangan</th>
                    <th>Id Barang</th>
                </tr>
            </thead>
            <tbody>
                {stok.map( (data) => (
                <tr key={data.id}>
                    <td>{data.jumlah}</td>
                    <td>{data.tgl_masuk}</td>
                    <td>{data.tgl_expired}</td>
                    <td>{data.keterangan}</td>
                    <td>{data.barang.nama_barang}</td>
                    <td>
                    <NavLink to={`/stok/edit/${data.id}`}
                                className="btn btn-warning">Edit</NavLink>
                    <button onClick={() => handleDelete(data.id, data.nama_barang)}
                                className="btn btn-danger"> Delete</button>
                  </td>
                </tr>
                ) )}
            </tbody>
        </table>
        </>
    )
}