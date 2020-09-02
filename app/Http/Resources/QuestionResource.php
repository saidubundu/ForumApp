<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class QuestionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'title' => $this->title,
            'slug' => $this->slug,
            'path' => $this->path,
            'replies' => ReplyResource::collection( $this->replies),
            'body' => $this->body,
            'created' => $this->created_at->diffForHumans(),
            'user' => $this->user->name,
            'user_id' => $this->user_id,
            'category' => $this->category->name,
            'category_id' => $this->category_id
        ];
    }
}
