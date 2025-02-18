<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BarangController;
use App\Http\Controllers\KategoriController;
use App\Http\Controllers\StokController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {return $request->user();})->middleware('auth:sanctum');

// barang
Route::get("barang", [BarangController::class, 'getBarang']);//->middleware('auth:sanctum', 'ability:read');
Route::post("barang", [BarangController::class, 'storeBarang']);//->middleware('auth:sanctum','ability:create');
Route::delete("barang/{id}",[BarangController::class, 'destroyBarang']);//->middleware('auth:sanctum', 'ability:delete');
Route::patch("barang/{id}",[BarangController::class, 'updateBarang']);//->middleware('auth:sanctum', 'ability:delete');
Route::get('/barang/{id}', [BarangController::class, 'show']);

// kategori
Route::get("kategori", [KategoriController::class, 'getKategori']);//->middleware('auth:sanctum', 'ability:read');
Route::post("kategori", [KategoriController::class, 'storeKategori']);//->middleware('auth:sanctum','ability:create');
Route::delete("kategori/{id}",[KategoriController::class, 'destroyKategori']);//->middleware('auth:sanctum', 'ability:delete');
Route::patch("kategori/{id}",[KategoriController::class, 'updateKategori']);//->middleware('auth:sanctum', 'ability:delete');
Route::get('/kategori/{id}', [KategoriController::class, 'show']);

//stok 
Route::get("stok", [StokController::class, 'getStok']);//->middleware('auth:sanctum', 'ability:read');
Route::post("stok", [StokController::class, 'storeStok']);//->middleware('auth:sanctum','ability:create');
Route::delete("stok/{id}",[StokController::class, 'destroyStok']);//->middleware('auth:sanctum', 'ability:delete');
Route::patch("stok/{id}",[StokController::class, 'updateStok']);//->middleware('auth:sanctum', 'ability:delete');
Route::get('/stok/{id}', [StokController::class, 'show']);

//login
Route::post('login', [AuthController::class, 'login']);