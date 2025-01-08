@extends('layouts.main')

@section('content')
    <h4>Stok</h4>
    <a href="{{route('stok.create')}}" class="btn btn-primary">TAMBAH</a>
    <table id="example" class="display nowrap" style="width:100%">
        <thead>
            <tr>
                <th>Id</th>
                <th>Jumlah</th>
                <th>Tanggal Masuk</th>
                <th>Tanggal Expired </th>
                <th>Keterangan</th>
                <th>barang</th>
                <th>#</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($stok as $row)
            <tr>
                <td>{{ $row['id']}}</td>
                <td>{{ $row['jumlah']}}</td>
                <td>{{ $row['tgl_masuk']}}</td>
                <td>{{ $row['tgl_expired']}}</td>
                <td>{{ $row['keterangan']}}</td>
                <td>{{ $row['barang']['nama_barang']}}</td>
                <td><a href="{{ route('stok.edit', $row ['id'])}}" class="btn btn-xs btn-warning">UBAH</a>
                {{-- untuk membuat btn hapus --}}
                    <form action="{{ route('stok.destroy', $row['id'])}}" method="post" style="display:inline"> 
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