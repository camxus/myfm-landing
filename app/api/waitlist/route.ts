import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const payload = {
      ...data,
      SpreadsheetId: process.env.NEXT_PUBLIC_SHEETID,
      SheetName: process.env.NEXT_PUBLIC_GID,
    };
    const response = await fetch(
      process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_WEBAPP_URL!,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );
    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Google Script error: ${text}`);
    }
    let result;
    try { result = await response.json(); }
    catch { result = await response.text(); }
    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error("Waitlist error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit", details: (error as Error).message },
      { status: 500 }
    );
  }
}
