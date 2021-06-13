<?php

use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::group(['middleware' => 'web'], function() {
    Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->where('any', '.*');
    Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

    Route::fallback(function() {
        return redirect(route('home'));
    });
});

Auth::routes();

Route::post('/show', [App\Http\Controllers\Api\TodoController::class, 'show'])->name('show');
Route::post('/add', [App\Http\Controllers\Api\TodoController::class, 'create'])->name('add');
Route::post('/edit', [App\Http\Controllers\Api\TodoController::class, 'edit'])->name('edit');
Route::post('/delete', [App\Http\Controllers\Api\TodoController::class, 'delete'])->name('delete');
