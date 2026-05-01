import { readFile } from "node:fs/promises"
import path from "node:path"

export const runtime = "nodejs"

export async function GET() {
  const logoPath = path.join(process.cwd(), "public", "TST logo", "TST white.png")
  const fileBuffer = await readFile(logoPath)

  return new Response(fileBuffer, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  })
}

