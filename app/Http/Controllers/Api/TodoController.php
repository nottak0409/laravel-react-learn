<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TodoController extends Controller
{
    public function create(Request $request) {
        $todo = new Todo;
        $todo->title = $request->title;
        $todo->save();

        $todo = $todo::all();
        return $todo;
    }
}
