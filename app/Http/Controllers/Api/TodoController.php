<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Todo;
use Illuminate\Support\Facades\Auth;

class TodoController extends Controller
{
    //新規作成のメソッド
    public function create(Request $request) {
        // 現在認証しているユーザーを取得
        $user_id = Auth::user()->id;

        $todo = new Todo;
        $todo->title = $request->title;
        $todo->user_id = $user_id;
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

    //詳細画面のメソッド
    public function show(Request $request) {
        $id = $request->id;
        $todo = Todo::where('id', $id)->where('user_id', $user_id)->get();
        return $todo;
    }

    //編集時のメソッド
    public function edit(Request $request) {
        $id = $request->id;
        $title = $request->title;
        $todo = Todo::where('id', $id)->update(['title' => $title]);
        $todo = Todo::find($id);
        return $todo;
    }
}
