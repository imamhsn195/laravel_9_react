<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $posts = Post::all();
        return Inertia::render('Post/Index', [
            'posts' => $posts->map(function($post){
                return [
                    'id' => $post->id,
                    'title' => $post->title,
                    'description' => $post->description,
                    'edit_url' => URL::route('posts.edit', $post->id)
                    ];
                }),
            'create_url' => URL::route('posts.create')
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Post/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePostRequest $request)
    {
        Post::create($request->validated());
        $posts = Post::all();
        return Inertia::render('Post/Index', [
            'posts' => $posts->map(function($post){
                return [
                    'id' => $post->id,
                    'title' => $post->title,
                    'description' => $post->description,
                    'edit_url' => URL::route('posts.edit', $post->id)
                ];
            }),
            'create_url' => URL::route('posts.create')
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post)
    {
        return Inertia::render('Post/Edit', [
            'post' => $post
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatePostRequest $request, Post $post)
    {
        $post->update($request->validated());
        $posts = Post::all();
        return Inertia::render('Post/Index', [
            'posts' => $posts->map(function($post){
                return [
                    'id' => $post->id,
                    'title' => $post->title,
                    'description' => $post->description,
                    'edit_url' => URL::route('posts.edit', $post->id)
                ];
            }),
            'create_url' => URL::route('posts.create')
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        $post->delete();
        $posts = Post::all();
        return Inertia::render('Post/Index', [
            'posts' => $posts->map(function($post){
                return [
                    'id' => $post->id,
                    'title' => $post->title,
                    'description' => $post->description,
                    'edit_url' => URL::route('posts.edit', $post->id)
                ];
            }),
            'create_url' => URL::route('posts.create')
        ]);
    }
}
