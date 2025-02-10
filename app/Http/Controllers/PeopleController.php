<?php

namespace App\Http\Controllers;

use App\Models\People;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PeopleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        // dump(People::all()->toArray());
        return Inertia::render('People/Index',[
            // 'people'=>People::where('user_id',Auth::user()->id)->with('user:id,name,email')->get(),
            'people'=>People::where('user_id',2)->with('user:id,name,email')->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        sleep(rand(1,5));
        redirect(route('people.index'));    }

    /**
     * Display the specified resource.
     */
    public function show(People $people)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(People $people)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, People $people)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(People $people)
    {
        //
    }
}
