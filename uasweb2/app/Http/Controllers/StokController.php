<?php

namespace App\Http\Controllers;

use App\Models\barang;
use App\Models\stok;
use Illuminate\Http\Request;

class StokController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //panggil model stok
        $result = stok::all();
        //dd($result); untuk menampilkan data db

        // kirim data $result ke view stok/index.blade.php
        return view('stok.index')->with('stok', $result);
        //key itu nama pada controller pada stok Stok
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $stok = stok::all();
        return view('stok.create')->with('stok', $stok);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //dd($request);

        //validasi input nama imput disamakan dengan tabel kolom
        $input = $request->validate([
            "jumlah"        =>"required|unique:kategoris",
            "tgl_masuk"     =>"required",
            "tgl_expired"   =>"required",
            "keterangan"    =>"required",
            "barang_id"     =>"required"
        ]);

        //simpan
        stok::create($input);

        //redirect beserta pesan sukses
        return redirect()->route('stok.index')->with('success', $request->nama.' Berhasil Disimpan');
    }

    /**
     * Display the specified resource.
     */
    public function show(stok $stok)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        // edit data
        $stok = stok::find($id);
        $barang = barang::all(); //ditambah ini
        return view('stok.edit')->with('stok', $stok)->with('barang', $barang); //ditambah ini
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $stok = stok::find($id);
        //dd(vars: $stok);

        //validasi input nama imput disamakan dengan tabel kolom
        $input = $request->validate([
            "jumlah"        =>"required",
            "tgl_masuk"     =>"required",
            "tgl_expired"   =>"required",
            "keterangan"    =>"required",
            "barang_id"     =>"required"
        ]);

        //update data
        $stok->update($input);

        //redirect beserta pesan sukses
        return redirect()->route('stok.index')->with('success', $request->nama.' Berhasil Diubah');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        // cari data di table mahasiswa berdasarkan "id" mahasiswa
        $stok = stok::find($id);
        $stok->delete();
        return redirect()->route('stok.index')->with('succes','Data stok Berhasil di Hapus');
    }

    public function storeStok(Request $request){
        $input = $request->validate([
            "jumlah"        =>"required|unique:kategoris",
            "tgl_masuk"     =>"required",
            "tgl_expired"   =>"required",
            "keterangan"    =>"required",
            "barang_id"     =>"required"
        ]);

        //simpan
        $hasil = stok::create($input);
        if($hasil){// jika berhasil disimpan
            $response['success'] = true;
            $response['message'] = $request-> barang_id." Berhasil Disimpan";
            return response()->json($response, 201); // 201 create atau sudah berhasil disimpan
        }else{
            $response['success'] = false;
            $response['message'] = $request->barang_id. " Gagal Disimpan";
            return response()->json($response, 400); //400 bad request
        }
    }

    public function destroyStok($id)
    {
        // cari data di table stok berdasarkan "id" stok
        $stok = stok::find($id);
        //dd($stok);
        $hasil = $stok->delete();
        if($hasil){// jika berhasil disimpan
            $response['success'] = true;
            $response['message'] =" stok Berhasil Dihapus";
            return response()->json($response, 201); // 201 create atau sudah berhasil disimpan
        }else{
            $response['success'] = false;
            $response['message'] =  "stok gagal dihapus";
            return response()->json($response, 400); //400 bad request
        }
    }

    public function updateStok(Request $request,$id)
    {
        $stok = stok::find($id);
        //validasi input nama imput disamakan dengan tabel kolom
        $input = $request->validate([
            "jumlah"        =>"required",
            "tgl_masuk"     =>"required",
            "tgl_expired"   =>"required",
            "keterangan"    =>"required",
            "barang_id"     =>"required"
        ]);

        //update data
        $hasil = $stok->update($input);

        if($hasil){// jika berhasil disimpan
            $response['success'] = true;
            $response['message'] ="stok Berhasil Diubah";
            return response()->json($response, 201); // 201 create atau sudah berhasil disimpan
        }else{
            $response['success'] = false;
            $response['message'] =  "stok gagal diubah";
            return response()->json($response, 400); //400 bad request
        }
    }

}
