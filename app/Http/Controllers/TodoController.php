<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Todo;

class TodoController extends Controller
{
    public function getTodos(){
        $todos = Todo::all();
        return $todos;
    }
}
