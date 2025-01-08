@extends('layouts.main')

@section('content')
<h4>Detail Barang</h4>
<form action="{{ route('barang.store')}}" method="post">
    @csrf

    <!-- Kode Barang -->
    Kode Barang
    @error('kode_barang')
        <span class="text-danger">({{ $message }})</span>
    @enderror
    <input type="text" name="kode_barang" id="" class="form-control mb-2">

    <!-- Nama Barang -->
    Nama Barang
    @error('nama_barang')
        <span class="text-danger">({{ $message }})</span>
    @enderror
    <input type="text" name="nama_barang" id="" class="form-control mb-2">
    
    <!-- Harga Jual -->
    Harga Jual 
    @error('harga_jual')
        <span class="text-danger">({{ $message }})</span>
    @enderror
    <input type="number" name="harga_jual" id="" class="form-control mb-2">
    
    <!-- Harga Pokok -->
    Harga Pokok
    @error('harga_pokok')
        <span class="text-danger">({{ $message }})</span>
    @enderror 
    <input type="number" name="harga_pokok" id="" class="form-control mb-2">

    <!-- Kategori -->
    Kategori
    @error('kategori_id')
        <span class="text-danger">({{ $message }})</span>
    @enderror 
    <select name="kategori_id" class="form-control">
        @foreach ($kategori as $item)
            <option value="{{ $item->id }}"> {{ $item->nama_kategori }} </option>
        @endforeach
    </select>

    <!-- Tombol Submit -->
    <button type="submit" class="btn btn-primary mt-3">Simpan</button>
</form>
@endsection
