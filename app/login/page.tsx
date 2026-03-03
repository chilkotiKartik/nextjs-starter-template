"use client"

import React from "react"
import Link from "next/link"

export default function LoginPage() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center bg-black text-white">
      <div className="w-full max-w-md rounded-2xl bg-white/5 p-8 shadow-lg">
        <h1 className="text-2xl font-bold">Welcome back</h1>
        <p className="mt-2 text-sm text-gray-300">Log in to your Colab account to manage events and teams.</p>

        <form className="mt-6 grid gap-4">
          <input name="email" type="email" placeholder="Email" className="w-full rounded-md bg-black/60 border border-white/6 px-3 py-2 text-white" />
          <input name="password" type="password" placeholder="Password" className="w-full rounded-md bg-black/60 border border-white/6 px-3 py-2 text-white" />
          <button type="submit" className="w-full rounded-full bg-lime-400 text-black px-4 py-2">Sign in</button>
        </form>

        <div className="mt-4 text-center text-sm text-gray-400">
          Don't have an account? <Link href="/register" className="text-lime-300 underline">Create one</Link>
        </div>
      </div>
    </main>
  )
}
