<?php

namespace App\Http\Controllers;

use App\Models\barang;
use App\Models\kategori;
use Illuminate\Http\Request;

class BarangController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //panggil model barang
        $result = barang::all();
        //dd($result); //untuk menampilkan data db

        // kirim data $result ke view barang/index.blade.php
        return view('barang.index')->with('barang', $result);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('barang.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //dd($request);

        //validasi input nama imput disamakan dengan tabel kolom
        $input = $request->validate([
            "kode_barang" =>"required|unique:barangs",
            "nama_barang" => "required",
            "harga_jual"  => "required",
            "harga_pokok"  => "required",
            "kategori_id"  => "required"
        ]);

        //simpan
        barang::create($input);

        //redirect beserta pesan sukses
        return redirect()->route('barang.index')->with('success', $request->nama_barang.' Berhasil Disimpan');
    }

    /**
     * Display the specified resource.
     */
    public function show(barang $barang)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        // edit data
        $barang = barang::find($id);
        $kategori = kategori::all(); //ditambah ini
        //dd($barang);
        return view('barang.edit')->with('barang', $barang)->with('kategori', $kategori);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $barang = barang::find($id);
        //dd(vars: $barang);

        //validasi input nama imput disamakan dengan tabel kolom
        $input = $request->validate([
            "kode_barang" =>"required",
            "nama_barang" =>"required",
            "harga_jual"  =>"required",
            "harga_pokok" =>"required",
            "kategori_id" =>"required"
        ]);

        //update data
        $barang->update($input);

        //redirect beserta pesan sukses
        return redirect()->route('barang.index')->with('success', $request->nama_barang.' Berhasil Diubah');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        // cari data di table barang berdasarkan "id" barang
        $barang = barang::find($id);
        //dd($barang);
        $barang->delete();
        return redirect()->route('barang.index')->with('succes','Data barang Berhasil di Hapus');
    }

    public function getBarang(){
        //$response['data'] = kategori::with('kategori')->get();
         $response['data'] = barang::with('kategori')->get();
         $response['message'] = 'List data Barang';
         $response['success'] = true;
 
         return response()->json($response, 200);
     }
    public function storeBarang(Request $request){
        $input = $request->validate([
            "kode_barang" =>"required|unique:barangs",
            "nama_barang" => "required",
            "harga_jual"  => "required",
            "harga_pokok"  => "required",
            "kategori_id"  => "required"
        ]);

        //simpan
        $hasil = barang::create($input);
        if($hasil){// jika berhasil disimpan
            $response['success'] = true;
            $response['message'] = $request->nama_barang. " Berhasil Disimpan";
            return response()->json($response, 201); // 201 create atau sudah berhasil disimpan
        }else{
            $response['success'] = false;
            $response['message'] = $request->nama_barang. " Gagal Disimpan";
            return response()->json($response, 400); //400 bad request
        }
    }

    public function destroyBarang($id)
    {
        // cari data di table barang berdasarkan "id" barang
        $barang = barang::find($id);
        //dd($barang);
        $hasil = $barang->delete();
        if($hasil){// jika berhasil disimpan
            $response['success'] = true;
            $response['message'] =" Barang Berhasil Dihapus";
            return response()->json($response, 201); // 201 create atau sudah berhasil disimpan
        }else{
            $response['success'] = false;
            $response['message'] =  "Barang gagal dihapus";
            return response()->json($response, 400); //400 bad request
        }
    }

    public function updateBarang(Request $request,$id)
    {
        $barang = barang::find($id);
        //validasi input nama imput disamakan dengan tabel kolom
        $input = $request->validate([
            "kode_barang" =>"required",
            "nama_barang" =>"required",
            "harga_jual"  =>"required",
            "harga_pokok" =>"required",
            "kategori_id" =>"required"
        ]);

        //update data
        $hasil = $barang->update($input);

        if($hasil){// jika berhasil disimpan
            $response['success'] = true;
            $response['message'] ="Barang Berhasil Diubah";
            return response()->json($response, 201); // 201 create atau sudah berhasil disimpan
        }else{
            $response['success'] = false;
            $response['message'] =  "Barang gagal diubah";
            return response()->json($response, 400); //400 bad request
        }
    }
}
