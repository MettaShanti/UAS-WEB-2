@extends('layouts.main')

@section('content')
<h4>Detail Pegawai</h4>
<form action="{{ route('barang.update', $barang['id'])}}" method="post">
    @csrf
    @method('PUT') 

    Kode Barang
    @error('kode_barang')
        <span class="text-danger">({{ $message }})</span>
    @enderror
    <input type="numer" name="kode_barang" id="" class="form-control mb-2" value="{{ $barang['kode_barang']}}">

    nama barang
    @error('nama_barang')
        <span class="text-danger">({{ $message }})</span>
    @enderror
    <input type="numer" name="nama_barang" id="" class="form-control mb-2" value="{{ $barang['nama_barang']}}">
    
    harga jual 
    @error('harga_jual')
        <span class="text-danger">({{ $message }})</span>
    @enderror
    <input type="text" name="harga_jual" id="" class="form-control mb-2" value="{{ $barang['harga_jual']}}">
    
    harga pokok
    @error('harga_pokok')
        <span class="text-danger">({{ $message }})</span>
    @enderror 
    <input type="text" name="harga_pokok" id="" class="form-control mb-2" value="{{ $barang['harga_pokok']}}">

    kategori
    @error('kategori_id ')
        <span class="text-danger">({{ $message }})</span>
    @enderror 
    <select name="kategori_id" class="form-control" value="{{ $barang['kategori_id']}}">
        @foreach ($kategori as $item)
            <option value="{{ $item['id'] }}" {{$item['id'] == $kategori['kategori_id'] ? "selected":null}} > {{ $item['nama_kategori'] }} </option>
        @endforeach
    </select>

    <button type="submit" class="btn btn-primary">Simpan</button>
</form>

@endsection