import { google } from "googleapis"
import { NextResponse } from "next/server"

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  },
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
})

const sheets = google.sheets({ version: "v4", auth })

export async function POST(req) {
  try {
    const body = await req.json()
    const { firstName, lastName, email, message } = body

    const date = new Date().toLocaleString()

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:E",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[date, firstName, lastName, email, message]],
      },
    })

    return NextResponse.json({ message: "Success" }, { status: 200 })
  } catch (error) {
    console.error("Error:", error)
    return NextResponse.json({ error: "Failed to submit form" }, { status: 500 })
  }
}
