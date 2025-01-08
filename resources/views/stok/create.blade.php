@extends('layouts.main')

@section('content')
<h4>Detail Pegawai</h4>
<form action="{{ route('pegawai.store')}}" method="post">
    @csrf

    Jumlah
    @error('jumlah')
        <span class="text-danger">({{ $message }})</span>
    @enderror
    <input type="numer" name="jumlah" id="" class="form-control mb-2">

    Tanggal Masuk
    @error('tgl_masuk')
        <span class="text-danger">({{ $message }})</span>
    @enderror
    <input type="date" name="tgl_masuk" id="" class="form-control mb-2">
    
    Tanggal Expired 
    @error('tgl_expired')
        <span class="text-danger">({{ $message }})</span>
    @enderror
    <input type="date" name="tgl_expired" id="" class="form-control mb-2">
    
    Keterangan
    @error('keterangan')
        <span class="text-danger">({{ $message }})</span>
    @enderror 
    <input type="text" name="keterangan" id="" class="form-control mb-2">

    barang
    @error('barang_id ')
        <span class="text-danger">({{ $message }})</span>
    @enderror 
    <select name="barang_id" class="form-control">
        @foreach ($barang as $item)
            <option value="{{ $item['id'] }}"> {{ $item['nama_barang'] }} </option>
        @endforeach
    </select>


    <button type="submit" class="btn btn-primary">Simpan</button>
</form>

@endsection