@extends('layouts.main')

@section('content')
<h4>Detail Pegawai</h4>
<form action="{{ route('kategori.store')}}" method="post">
    @csrf

    nama kategori
    @error('nama_kategori')
        <span class="text-danger">({{ $message }})</span>
    @enderror
    <input type="text" name="nama_kategori" id="" class="form-control mb-2">

    jenis
    @error('jenis')
        <span class="text-danger">({{ $message }})</span>
    @enderror
    <input type="text" name="jenis" id="" class="form-control mb-2">
    
    deskripsi 
    @error('deskripsi')
        <span class="text-danger">({{ $message }})</span>
    @enderror
    <input type="text" name="deskripsi" id="" class="form-control mb-2">
    
    status
    @error('status')
        <span class="text-danger">({{ $message }})</span>
    @enderror 
    <input type="text" name="status" id="" class="form-control mb-2">

    <button type="submit" class="btn btn-primary">Simpan</button>
</form>

@endsection