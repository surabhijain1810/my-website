"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    problem: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      setSuccess("Message sent successfully!");
      setForm({
        name: "",
        email: "",
        problem: "",
      });
    } else {
      setSuccess("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="contact-form"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
        className="skill-tag-input"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        required
        className="skill-tag-input"
      />

      <textarea
        name="problem"
        placeholder="Describe your problem or project..."
        value={form.problem}
        onChange={handleChange}
        required
        rows={6}
        className="skill-tag-input"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {success && (
        <p className="text-sm text-gray-300">
          {success}
        </p>
      )}
    </form>
  );
}