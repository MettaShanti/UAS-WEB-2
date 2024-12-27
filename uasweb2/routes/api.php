<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BarangController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {return $request->user();})->middleware('auth:sanctum');

// barang
Route::get("barang", [BarangController::class, 'getBarang']);//->middleware('auth:sanctum', 'ability:read');
Route::post("barang", [BarangController::class, 'storeBarang']);//->middleware('auth:sanctum','ability:create');
Route::delete("barang/{id}",[BarangController::class, 'destroyBarang']);//->middleware('auth:sanctum', 'ability:delete');
Route::put("barang/{id}",[BarangController::class, 'destroyBarang']);//->middleware('auth:sanctum', 'ability:delete');

// kategori
Route::get("kategori", [BarangController::class, 'getKategori']);//->middleware('auth:sanctum', 'ability:read');
Route::post("kategori", [BarangController::class, 'storeKategori']);//->middleware('auth:sanctum','ability:create');
Route::delete("kategori/{id}",[BarangController::class, 'destroyKategori']);//->middleware('auth:sanctum', 'ability:delete');
Route::put("kategori/{id}",[BarangController::class, 'destroyKategori']);//->middleware('auth:sanctum', 'ability:delete');

//stok 
Route::get("stok", [BarangController::class, 'getStok']);//->middleware('auth:sanctum', 'ability:read');
Route::post("stok", [BarangController::class, 'storeStok']);//->middleware('auth:sanctum','ability:create');
Route::delete("stok/{id}",[BarangController::class, 'destroyStok']);//->middleware('auth:sanctum', 'ability:delete');
Route::put("stok/{id}",[BarangController::class, 'destroyStok']);//->middleware('auth:sanctum', 'ability:delete');

//login
Route::post('login', [AuthController::class, 'login']);