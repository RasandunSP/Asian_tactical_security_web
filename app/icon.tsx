import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import path from "node:path"

export const runtime = "nodejs"

export const size = {
  width: 512,
  height: 512,
}

export const contentType = "image/png"

export default async function Icon() {
  const logoPath = path.join(process.cwd(), "public", "TST logo", "TST white.png")
  const fileBuffer = await readFile(logoPath)
  const base64 = fileBuffer.toString("base64")
  const dataUrl = `data:image/png;base64,${base64}`

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#000000",
        }}
      >
        <img
          src={dataUrl}
          alt="TST"
          width={420}
          height={420}
          style={{ objectFit: "contain" }}
        />
      </div>
    ),
    size
  )
}

