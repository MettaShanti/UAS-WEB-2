@extends('layouts.main')

@section('content')
<h4>Detail Pegawai</h4>
<form action="{{ route('kategori.update', $kategori['id'])}}" method="post">
    @csrf
    @method('PUT') 

    nama kategori
    @error('nama_kategori')
        <span class="text-danger">({{ $message }})</span>
    @enderror
    <input type="numer" name="nama_kategori" id="" class="form-control mb-2" value="{{ $kategori['nama_kategori']}}">

    jenis
    @error('jenis')
        <span class="text-danger">({{ $message }})</span>
    @enderror
    <input type="date" name="jenis" id="" class="form-control mb-2" value="{{ $kategori['jenis']}}">
    
    deskripsi 
    @error('deskripsi')
        <span class="text-danger">({{ $message }})</span>
    @enderror
    <input type="date" name="deskripsi" id="" class="form-control mb-2" value="{{ $kategori['deskripsi']}}">
    
    status
    @error('status')
        <span class="text-danger">({{ $message }})</span>
    @enderror 
    <input type="text" name="status" id="" class="form-control mb-2" value="{{ $kategori['status']}}">

    <button type="submit" class="btn btn-primary">Simpan</button>
</form>

@endsection