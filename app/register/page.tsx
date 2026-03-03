"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"

export default function RegisterPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  return (
    <main className="min-h-[80vh] flex items-center justify-center bg-black text-white">
      <div className="w-full max-w-md rounded-2xl bg-white/5 p-8 shadow-lg">
        <h1 className="text-2xl font-bold">Create your account</h1>
        <p className="mt-2 text-sm text-gray-300">Start organizing events with Colab — free for early registrants.</p>

        <form
          onSubmit={async (e) => {
            e.preventDefault()
            setLoading(true)
            const fd = new FormData(e.currentTarget as HTMLFormElement)
            await fetch("/api/register", { method: "POST", body: fd })
            setLoading(false)
            router.push("/event")
          }}
          className="mt-6 grid gap-4"
        >
          <input name="firstName" placeholder="First name" className="w-full rounded-md bg-black/60 border border-white/6 px-3 py-2 text-white" />
          <input name="lastName" placeholder="Last name" className="w-full rounded-md bg-black/60 border border-white/6 px-3 py-2 text-white" />
          <input name="email" type="email" placeholder="Email" className="w-full rounded-md bg-black/60 border border-white/6 px-3 py-2 text-white" />
          <button type="submit" disabled={loading} className="w-full rounded-full bg-lime-400 text-black px-4 py-2">
            {loading ? "Registering…" : "Create account"}
          </button>
        </form>

        <div className="mt-4 text-center text-sm text-gray-400">
          Already have an account? <a href="/login" className="text-lime-300 underline">Sign in</a>
        </div>
      </div>
    </main>
  )
}
