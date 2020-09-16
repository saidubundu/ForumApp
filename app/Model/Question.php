<?php

namespace App\Model;

use Alexusmai\LaravelPurifier\Purifier;
use App\User;
use Illuminate\Database\Eloquent\Model;
use Parsedown;
use Spatie\Searchable\Searchable;
use Spatie\Searchable\SearchResult;

class Question extends Model implements Searchable
{
    //
    protected $fillable = ['title', 'body', 'slug', 'category_id', 'user_id'];
    //protected $guarded = [];

    ///api when create question for slug
    public static function boot()
    {
        parent::boot();
        static::creating(function ($question){
            $question->slug = str_slug($question->title);
        });
    }

//    public function setBodyAttribute($value)
//    {
//        $this->attributes['body'] = purifier($value);
//    }

    public function getBodyHtmlAttribute()
    {
        return Purifier::clean($this->bodyHtml());
    }

    private function bodyHtml(){
        return Parsedown::instance()->text($this->body);
    }

    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function getPathAttribute()
    {
        return ("/question/$this->slug");
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function replies()
    {
        return $this->hasMany(Reply::class)->latest();
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function acceptBestAnswer(Reply $reply)
    {
        $this->best_reply_id = $reply->id;
        $this->save();
    }


    public function getSearchResult(): SearchResult
    {
        // TODO: Implement getSearchResult() method.
        $url = route('question.show', $this->slug);

        return new SearchResult(
            $this,
            $this->title,
            $this->path
        );
    }
}
