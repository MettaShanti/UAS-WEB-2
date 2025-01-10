<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{

    public function login(Request $request)
    {
        if(Auth::attempt([
            'email' => $request->email,
            'password' => $request->password
        ])) {
            $user = Auth::user(); // ambil data user dari table users sesuai dengan email  dan pass
    
            //untuk pemberian hak akses
            if($user->role == 'admin'){
                $success['token'] = $user->createToken('MDPApp',['create','read','update','delete'])->plainTextToken; // buat token
            }else{
                $success['token'] = $user->createToken('MDPApp',['read'])->plainTextToken; // buat token
            }
    
            $success['token'] = $user->createToken('MDPApp')->plainTextToken; // buat token
            $success['name'] = $user->name;// response nama user
            return response()->json($success, 201);
        } else {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    }
    }
