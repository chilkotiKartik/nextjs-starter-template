import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const form = await request.formData()
    const firstName = form.get("firstName")
    const lastName = form.get("lastName")
    const email = form.get("email")

    // For now, just log to server console (or you can wire to a DB / mailing list)
    console.log("New registration:", { firstName, lastName, email })

    return NextResponse.json({ ok: true, message: "Registered" })
  } catch (err) {
    return NextResponse.json({ ok: false, message: "Error" }, { status: 500 })
  }
}
