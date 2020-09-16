<?php

namespace App\Policies;

use App\Model\Question;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class QuestionPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\User  $user
     * @param  \App\Model\Question  $question
     * @return mixed
     */
    public function update(User $user, Question $question)
    {
        return $user->id == $question->user->id;
    }
}
