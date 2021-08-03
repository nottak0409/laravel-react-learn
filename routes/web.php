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
    Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home')->where('any', '.*');
    Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('top');

    Route::fallback(function() {
        return redirect(route('home'));
    });
});

Auth::routes();

Route::get('/get', [App\Http\Controllers\TodoController::class, 'getTodos'])->name('gettodos');
Route::post('/search', [App\Http\Controllers\Api\TodoController::class, 'search'])->name('search');
Route::post('/show', [App\Http\Controllers\Api\TodoController::class, 'show'])->name('show');
Route::post('/add', [App\Http\Controllers\Api\TodoController::class, 'create'])->name('add');
Route::post('/edit', [App\Http\Controllers\Api\TodoController::class, 'edit'])->name('edit');
Route::post('/delete', [App\Http\Controllers\Api\TodoController::class, 'delete'])->name('delete');
