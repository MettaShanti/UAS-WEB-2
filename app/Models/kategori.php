<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class kategori extends Model
{
    use HasFactory, HasUlids;

    protected $fillable = ['nama_kategori', 'jenis', 'deskripsi', 'status'];
}
