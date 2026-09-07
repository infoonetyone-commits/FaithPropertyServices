"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "success" | "error";

const serviceOptions = [
  "Commercial Cleaning",
  "Steam Cleaning",
  "High Pressure Cleaning",
  "Window Cleaning",
  "After Builders Cleaning",
  "Strip & Seal Services",
  "Graffiti Removal Services",
];

export default function ContactQuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          address: data.get("address"),
          service: data.get("service"),
          message: `Contact Service Name: ${data.get("contactServiceName") || "Not provided"}\n\n${data.get("message")}`,
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <p className="rounded-lg bg-cyan/10 p-4 font-body text-navy">
        Thanks for reaching out — we&apos;ll be in touch with your quote shortly.
      </p>
    );
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="form-label">Name</label>
        <input name="name" type="text" required placeholder="Enter full name" className="form-input" />
      </div>
      <div>
        <label className="form-label">Email</label>
        <input name="email" type="email" required placeholder="Enter email address" className="form-input" />
      </div>
      <div>
        <label className="form-label">Contact Service Name</label>
        <input name="contactServiceName" type="text" className="form-input" />
      </div>
      <div>
        <label className="form-label">Service Address</label>
        <input name="address" type="text" className="form-input" />
      </div>
      <div>
        <label className="form-label">Service</label>
        <select name="service" className="form-input" defaultValue="">
          <option value="" disabled>--- Select Choice ---</option>
          {serviceOptions.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="form-label">Message</label>
        <textarea name="message" rows={3} required placeholder="Enter your message" className="form-input resize-none" />
      </div>
      {status === "error" && (
        <p className="text-sm text-red-600">{errorMessage}</p>
      )}
      <button type="submit" disabled={status === "sending"} className="btn-primary w-full disabled:opacity-60">
        {status === "sending" ? "Sending..." : "Submit"}
      </button>
    </form>
  );
}
