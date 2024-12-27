<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class stok extends Model
{
    use HasFactory, HasUlids;

    protected $fillable = ['jumlah', 'tgl_masuk', 'tgl_expired', 'keterangan', 'barang_id'];

    public function barang()
    {
        return $this->belongsTo(barang::class,'barang_id','id');
    }
}
