<?php

namespace App\Listeners;

use App\Events\BestReplyEvent;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class BestReplyEventListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  BestReplyEvent  $event
     * @return void
     */
    public function handle(BestReplyEvent $event)
    {
        //
    }
}
