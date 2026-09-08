import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = "Info@faithpropertyservices.com.au";

export async function POST(request: Request) {
  const { name, email, phone, address, service, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set.");
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "Faith Property Services Website <noreply@faithpropertyservices.com.au>",
    to: TO_EMAIL,
    replyTo: email,
    subject: `New enquiry from ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      `Address: ${address || "Not provided"}`,
      `Service: ${service || "Not specified"}`,
      "",
      "Message:",
      message,
    ].join("\n"),
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}
