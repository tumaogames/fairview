<?php

namespace App\Controllers;
use App\Controllers\MaintenanceMode;

class Home extends BaseController
{
    public function index()
    {
        return view('welcome_message');
    }
}
