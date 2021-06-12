<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Todo;

class TodoController extends Controller
{
    //新規作成のメソッド
    public function create(Request $request) {
        $todo = new Todo;
        $todo->title = $request->title;
        $result = $todo->save();
        $todo = $todo::all();
        return $todo;
    }

    //削除のメソッド
    public function delete(Request $request) {
        //axiosで送られてきたdeleteするidを取得する
        $id = $request->id;

        //該当するIDのレコードを削除
        $todo = new Todo;
        $todo->destroy($id);

        //todo一覧を取得
        $todo = $todo::all();
        return $todo;
    }
}