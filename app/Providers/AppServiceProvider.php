<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use LINEBot\HTTPClient\CurlHTTPClient;
use Illuminate\Support\Facades\Schema;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind('line-bot', function($app, array $parameters) {
            return new LINEbot(
                new CurlHTTPClient(env('LINE_ACCESS_TOKEN')), ['channelSecret' => env('LINE_CHANNEL_SECRET')]
            );
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultStringLength(191);
    }
}
