import React,{useEffect, useState} from "react"
import axios from "axios"
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2"; // Import SweetAlert2

export default function List(){
    //state barang
    const [barang, setBarang] = useState([]);

    //akses api
    useEffect( () => {
        axios
        .get("")
        .then( (response)=> {
            console.log(response);
            setBarang(response.data.data)// reault diganti(disesuaikan inspect)
        })
    }, [])
    
// Fungsi untuk menghapus barang berdasarkan ID dengan konfirmasi SweetAlert2
const handleDelete = (id, nama_barang) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You won't be able to revert this! Barang: ${nama_barang}`,
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
            // Hapus barang dari state setelah sukses dihapus dari server
            setBarang(barang.filter((data) => data.id !== id));
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
    return(
        <>
            <h2>List Barang</h2>
            <NavLink to="/barang/create" className="btn btn-primary mb-3">Create</NavLink>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nama Barang</th>
                        <th>Kode Barang</th>
                        <th>Harga Jual</th>
                        <th>Harga Pokok</th>
                        <th>ID Kategori</th>
                    </tr>
                </thead>
                <tbody>
                    {barang.map( (data) => (
                        <tr key={data.id}>
                            <td>{data.kode_barang}</td>
                            <td>{data.nama_barang}</td>
                            <td>{data.harga_jual}</td>
                            <td>{data.harga_pokok}</td>
                            <td>{data.kategori.nama_kategori}</td>
                            <td>
                            <NavLink to={`/barang/edit/${data.id}`}
                                className="btn btn-warning">Edit
                            </NavLink>
                            <button onClick={() => handleDelete(data.id, data.nama_barang)}
                            className="btn btn-danger"> Delete
                            </button>
                            </td>
                        </tr>
                    ) )}
                </tbody>
            </table>
        </>
    )
}