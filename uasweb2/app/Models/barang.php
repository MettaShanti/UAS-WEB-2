<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class barang extends Model
{
    use HasFactory, HasUlids;

    protected $fillable = ['kode_barang', 'nama_barang', 'harga_jual', 'harga_pokok', 'kategori_id'];

    public function prodi()
    {
        return $this->belongsTo(kategori::class,'kategori_id','id');
    }
}
