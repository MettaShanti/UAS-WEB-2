<?php

namespace App\Http\Controllers;

use App\Models\kategori;
use Illuminate\Http\Request;

class KategoriController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //panggil model kategori
        $result = kategori::all();
        //dd($result); //untuk menampilkan data db

        // kirim data $result ke view kategori/index.blade.php
        return view('kategori.index')->with('kategori', $result);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('kategori.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //dd($request);

        //validasi input nama imput disamakan dengan tabel kolom
        $input = $request->validate([
            "nama_kategori" =>"required|unique:kategoris",
            "jenis"         =>"required",
            "deskripsi"     =>"required",
            "status"        =>"required",
            //"kategori_id"   =>"required"
        ]);

        //simpan
        kategori::create($input);

        //redirect beserta pesan sukses
        return redirect()->route('kategori.index')->with('success', $request->nama_kategori.' Berhasil Disimpan');
    }

    /**
     * Display the specified resource.
     */
    public function show(kategori $kategori)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(kategori $id)
    {
        // edit data
        $kategori = kategori::find($id);
        //dd($kategori);
        return view('kategori.edit')->with('kategori', $kategori);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $kategori = kategori::find($id);
        //dd(vars: $kategori);

        //validasi input nama imput disamakan dengan tabel kolom
        $input = $request->validate([
            "nama_kategori" =>"required",
            "jenis"         =>"required",
            "deskripsi"     =>"required",
            "status"        =>"required",
        ]);

        //update data
        $kategori->update($input);

        //redirect beserta pesan sukses
        return redirect()->route('kategori.index')->with('success', $request->nama_kategori.' Berhasil Diubah');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        // cari data di table kategori berdasarkan "id" kategori
        $kategori = kategori::find($id);
        //dd($kategori);
        $kategori->delete();
        return redirect()->route('kategori.index')->with('succes','Data kategori Berhasil di Hapus');
    }
    public function storeKategori(Request $request){
        $input = $request->validate([
            "nama_kategori" =>"required|unique:kategoris",
            "jenis"         =>"required",
            "deskripsi"     =>"required",
            "status"        =>"required",
        ]);

        //simpan
        $hasil = kategori::create($input);
        if($hasil){// jika berhasil disimpan
            $response['success'] = true;
            $response['message'] = $request->nama_kategori. " Berhasil Disimpan";
            return response()->json($response, 201); // 201 create atau sudah berhasil disimpan
        }else{
            $response['success'] = false;
            $response['message'] = $request->nama_kategori. " Gagal Disimpan";
            return response()->json($response, 400); //400 bad request
        }
    }

    public function destroyKategori($id)
    {
        // cari data di table kategori berdasarkan "id" kategori
        $kategori = kategori::find($id);
        //dd($kategori);
        $hasil = $kategori->delete();
        if($hasil){// jika berhasil disimpan
            $response['success'] = true;
            $response['message'] =" kategori Berhasil Dihapus";
            return response()->json($response, 201); // 201 create atau sudah berhasil disimpan
        }else{
            $response['success'] = false;
            $response['message'] =  "kategori gagal dihapus";
            return response()->json($response, 400); //400 bad request
        }
    }

    public function updateKategori(Request $request,$id)
    {
        $kategori = kategori::find($id);
        //validasi input nama imput disamakan dengan tabel kolom
        $input = $request->validate([
            "nama_kategori" =>"required",
            "jenis"         =>"required",
            "deskripsi"     =>"required",
            "status"        =>"required",
        ]);

        //update data
        $hasil = $kategori->update($input);

        if($hasil){// jika berhasil disimpan
            $response['success'] = true;
            $response['message'] ="kategori Berhasil Diubah";
            return response()->json($response, 201); // 201 create atau sudah berhasil disimpan
        }else{
            $response['success'] = false;
            $response['message'] =  "kategori gagal diubah";
            return response()->json($response, 400); //400 bad request
        }
    }
}
