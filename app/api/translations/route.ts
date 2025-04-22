import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {
  try {
    // Read the language.json file from the file system
    const filePath = path.join(process.cwd(), "public", "locales", "language.json")
    const fileContents = fs.readFileSync(filePath, "utf8")

    // Parse the JSON data
    const data = JSON.parse(fileContents)

    // Return the data as JSON
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error reading translations:", error)
    return NextResponse.json({ error: "Failed to load translations" }, { status: 500 })
  }
}
