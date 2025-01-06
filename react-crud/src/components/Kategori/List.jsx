import React,{useEffect, useState} from "react"
import axios from "axios"
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2"; // Import SweetAlert2

export default function List(){
    //state prodi
    const [mahasiswa, setMahasiswa] = useState([]);

    //akses api
    useEffect( () => {
        axios
        .get("https://academic-mi5a.vercel.app/api/api/mahasiswa")
        .then( (response)=> {
            console.log(response);
            setMahasiswa(response.data.data)// reault diganti(disesuaikan inspect)
        })
    }, [])
// Fungsi untuk menghapus fakultas berdasarkan ID dengan konfirmasi SweetAlert2
const handleDelete = (id, nama) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You won't be able to revert this! Mahasiswa: ${nama}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Lakukan penghapusan jika dikonfirmasi
        axios
          .delete(`https://academic-mi5a.vercel.app/api/api/mahasiswa/${id}`)
          .then((response) => {
            // Hapus fakultas dari state setelah sukses dihapus dari server
            setMahasiswa(mahasiswa.filter((data) => data.id !== id));
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
            <h2>List mahasiswa</h2>
            <NavLink to="/mahasiswa/create" className="btn btn-primary mb-3">Create</NavLink>
            <table className="table">
                <thead>
                    <tr>
                    <th>Nama</th>
                    <th>Npm</th>
                    <th>Tanggal Lahir</th>
                    <th>Tempat Lahir</th>
                    <th>No Hp</th>
                    <th>Alamat</th>     
                    <th>Prodi</th>
                    </tr>
                </thead>
                <tbody>
                    {mahasiswa.map( (data) => (
                        <tr key={data.id}>
                        <td>{data.nama}</td>
                        <td>{data.npm}</td>
                        <td>{data.tanggal_lahir}</td>
                        <td>{data.tempat_lahir}</td>
                        <td>{data.hp}</td>
                        <td>{data.alamat}</td>
                        <td>{data.prodi_id}</td>
                        <NavLink>
                            <button onClick={() => handleDelete(data.id, data.nama)}
                                className="btn btn-danger"> Delete
                            </button>
                        </NavLink>
                    </tr>
                    ) )}
                </tbody>
            </table>
        </>
    )
}