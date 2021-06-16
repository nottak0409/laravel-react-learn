<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LineFriend extends Model
{
    use HasFactory;
    protected $fillable = ['line_id', 'display_name'];
}
