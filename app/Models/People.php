<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class People extends Model
{
    use HasFactory;
    //
    protected $fillable = [
        'name',
        'phone_number',
        'picture'
    ];
    
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class,'user_id');
    }
    public function getRouteKeyName(): string
    {
        return 'id';
    }


}
