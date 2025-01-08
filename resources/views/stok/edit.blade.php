@extends('layouts.main')

@section('content')
<h4>Detail Pegawai</h4>
<form action="{{ route('stok.update', $stok['id'])}}" method="post">
    @csrf
    @method('PUT') 

    Jumlah
    @error('jumlah')
        <span class="text-danger">({{ $message }})</span>
    @enderror
    <input type="numer" name="jumlah" id="" class="form-control mb-2" value="{{ $stok['jumlah']}}">

    Tanggal Masuk
    @error('tgl_masuk')
        <span class="text-danger">({{ $message }})</span>
    @enderror
    <input type="date" name="tgl_masuk" id="" class="form-control mb-2" value="{{ $stok['tgl_masuk']}}">
    
    Tanggal Expired 
    @error('tgl_expired')
        <span class="text-danger">({{ $message }})</span>
    @enderror
    <input type="date" name="tgl_expired" id="" class="form-control mb-2" value="{{ $stok['tgl_expired']}}">
    
    Keterangan
    @error('keterangan')
        <span class="text-danger">({{ $message }})</span>
    @enderror 
    <input type="text" name="keterangan" id="" class="form-control mb-2" value="{{ $stok['keterangan']}}">

    Barang
    @error('barang_id ')
        <span class="text-danger">({{ $message }})</span>
    @enderror 
    <select name="barang_id" class="form-control" value="{{ $stok['barang_id']}}">
        @foreach ($barang as $item)
            <option value="{{ $item['id'] }}" {{$item['id'] == $kategori['barang_id'] ? "selected":null}} > {{ $item['nama_barang'] }} </option>
        @endforeach
    </select>

    <button type="submit" class="btn btn-primary">Simpan</button>
</form>

@endsection