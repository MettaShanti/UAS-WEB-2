@extends('layouts.main')

@section('content')
<h4>Detail Pegawai</h4>
<form action="{{ route('pegawai.store')}}" method="post">
    @csrf

    Kode Barang
    @error('kode_barang')
        <span class="text-danger">({{ $message }})</span>
    @enderror
    <input type="text" name="kode_barang" id="" class="form-control mb-2">

    nama barang
    @error('nama_barang')
        <span class="text-danger">({{ $message }})</span>
    @enderror
    <input type="text" name="nama_barang" id="" class="form-control mb-2">
    
    harga jual 
    @error('harga_jual')
        <span class="text-danger">({{ $message }})</span>
    @enderror
    <input type="text" name="harga_jual" id="" class="form-control mb-2">
    
    harga pokok
    @error('harga_pokok')
        <span class="text-danger">({{ $message }})</span>
    @enderror 
    <input type="text" name="harga_pokok" id="" class="form-control mb-2">

    kategori
    @error('kategori_id ')
        <span class="text-danger">({{ $message }})</span>
    @enderror 
    <select name="kategori_id" class="form-control">
        @foreach ($kategori as $item)
            <option value="{{ $item['id'] }}"> {{ $item['nama_kategori'] }} </option>
        @endforeach
    </select>


    <button type="submit" class="btn btn-primary">Simpan</button>
</form>

@endsection