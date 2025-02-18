<?php

use App\Http\Controllers\BarangController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\KategoriController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StokController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    
    return view('auth.loginnew');
});

Route::get('/dashboard',[DashboardController::class, 'index'])->name('dashboard');//->middleware(['auth', 'verified']);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
Route::resource('barang', BarangController::class);//->middleware(['auth', 'verified']);
Route::resource('kategori', KategoriController::class);//->middleware(['auth', 'verified']);
Route::resource('stok', StokController::class);//->middleware(['auth', 'verified']);

require __DIR__.'/auth.php';
