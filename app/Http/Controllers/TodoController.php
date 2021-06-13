<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Todo;
use Illuminate\Support\Facades\Auth;

class TodoController extends Controller
{
    public function getTodos(){
        // 現在認証しているユーザーを取得
        $user_id = Auth::user()->id;
        $todos = Todo::where('user_id', $user_id)->get();
        return $todos;
    }
}
