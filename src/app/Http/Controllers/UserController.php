<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    // POST /api/register
    public function apiRegister(Request $request)
    {
        $validated = $request->validate([
            'name'                  => 'required|string|max:255',
            'email'                 => 'required|email|unique:users,email',
            'password'              => 'required|string|min:8|confirmed',
        ]);

        $user = User::create([
            'name'     => $validated['name'],
            'email'    => $validated['email'],
            'password' => Hash::make($validated['password']),
        ]);

        // No token anymore
        return response()->json([
            'message' => 'User created successfully.',
            'user'    => $user,
        ], 201);
    }

    // POST /api/login
    public function apiLogin(Request $request)
    {
        $credentials = $request->validate([
            'email'    => 'required|email',
            'password' => 'required|string',
        ]);

        $user = User::where('email', $credentials['email'])->first();

        if (! $user || ! Hash::check($credentials['password'], $user->password)) {
            return response()->json([
                'message' => 'Invalid credentials.',
            ], 422);
        }

        // No token anymore
        return response()->json([
            'message' => 'Login successful.',
            'user'    => $user,
        ]);
    }

    // POST /api/logout
    public function apiLogout(Request $request)
    {
        // Nothing to revoke now; keep for compatibility
        return response()->json([
            'message' => 'Logged out.',
        ]);
    }
}
