<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Todo;

class TodoController extends Controller
{
    public function create(Request $request) {
        $todo = new Todo;
        $todo->title = $request->title;
        $result = $todo->save();
        $todo = $todo::all();
        return $todo;
    }
}
