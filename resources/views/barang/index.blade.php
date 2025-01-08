@extends('layouts.main')

@section('content')
    <h4>Barang</h4>
    <a href="{{route('barang.create')}}" class="btn btn-primary">TAMBAH</a>
    <table id="example" class="display nowrap" style="width:100%">
        <thead>
            <tr>
                <th>Id</th>
                <th>kode barang</th>
                <th>nama barang</th>
                <th>harga jual</th>
                <th>harga pokok</th>
                <th>kategori</th>
                <th>#</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($barang as $row)
            <tr>
                <td>{{ $row['id']}}</td>
                <td>{{ $row['kode_barang']}}</td>
                <td>{{ $row['nama_barang']}}</td>
                <td>{{ $row['harga_jual']}}</td>
                <td>{{ $row['harga_pokok']}}</td>
                <td>{{ $row['kategori']['nama_kategori']}}</td>
                <td><a href="{{ route('barang.edit', $row ['id'])}}" class="btn btn-xs btn-warning">UBAH</a>
                {{-- untuk membuat btn hapus --}}
                    <form action="{{ route('barang.destroy', $row['id'])}}" method="post" style="display:inline"> 
                        @method('DELETE')
                        @csrf
                        <button class="btn btn-xs btn-danger">HAPUS</button>
                    </form>
                    {{-- style="display:inline" untuk memindahkan btn ke samping --}}</td>
            </tr>
            @endforeach
            </tbody>
        </table>
@endsection