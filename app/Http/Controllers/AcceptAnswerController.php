<?php

namespace App\Http\Controllers;

use App\Events\BestReplyEvent;
use App\Model\Reply;
use Illuminate\Http\Request;

class AcceptAnswerController extends Controller
{
    //

    public function __invoke(Reply $reply)
    {
        $reply->question->acceptBestAnswer($reply);
        broadcast(new BestReplyEvent($reply->id, 1))->toOthers();
        if(request()->expectsJson()){
            return response()->json([
                'message' => "You've Marked this Answer as Best Answer"
            ]);
        }
        return back();
    }
}
