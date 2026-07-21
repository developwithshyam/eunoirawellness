import { NextResponse } from "next/server";

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  intent?: string;
  message?: string;
  _gotcha?: string;
}

function trim(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

async function postToGoogleAppsScript(
  webAppUrl: string,
  params: URLSearchParams,
): Promise<Response> {
  return fetch(webAppUrl, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
    redirect: "follow",
  });
}

export async function POST(request: Request) {
  const webAppUrl = process.env.GOOGLE_SHEETS_WEBAPP_URL;

  if (!webAppUrl) {
    return NextResponse.json(
      { ok: false, error: "Contact form is not configured." },
      { status: 500 },
    );
  }

  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  if (trim(body._gotcha)) {
    return NextResponse.json({ ok: true });
  }

  const name = trim(body.name);
  const email = trim(body.email);
  const phone = trim(body.phone);
  const intent = trim(body.intent);
  const message = trim(body.message);

  if (!name || !email || !phone || !intent || !message) {
    return NextResponse.json(
      { ok: false, error: "Name, email, phone, intent, and message are required." },
      { status: 400 },
    );
  }

  const params = new URLSearchParams({
    Name: name,
    Email: email,
    Phone: phone,
    Intent: intent,
    Message: message,
  });

  try {
    const response = await postToGoogleAppsScript(webAppUrl, params);

    const text = await response.text();
    let result: { result?: string; message?: string };

    try {
      result = JSON.parse(text);
    } catch {
      return NextResponse.json(
        { ok: false, error: "Unexpected response from submission service." },
        { status: 502 },
      );
    }

    if (result.result !== "success") {
      return NextResponse.json(
        { ok: false, error: result.message ?? "Failed to save submission." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Failed to submit. Please try again later." },
      { status: 502 },
    );
  }
}
