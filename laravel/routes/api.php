<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


// GET /api/welcome
Route::get('/welcome', function () {
    return \Response::json(['message' => 'Dah tengok DUNE2 dalam IMAX ?']);
});

// POST /api/answer
Route::post('/answer', function (Request $request) {
    \Log::info($request);
    return \Response::json(['message' => 'Jawapan diterima']);
});