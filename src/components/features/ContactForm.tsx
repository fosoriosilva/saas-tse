"use client";

import { useState, SubmitEvent, ChangeEvent } from "react";
import Button from "@/components/ui/Button";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all fields.");
      return;
    }

    setStatus("Message sent successfully! (Demo only)");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <form
      className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
      onSubmit={handleSubmit}
    >
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-slate-800"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-300 px-4 py-3 transition outline-none focus:border-blue-500"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-slate-800"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-300 px-4 py-3 transition outline-none focus:border-blue-500"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-slate-800"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-300 px-4 py-3 transition outline-none focus:border-blue-500"
        />
      </div>

      <Button type="submit">Send Message</Button>

      {status ? <p className="text-sm text-slate-600">{status}</p> : null}
    </form>
  );
};

export default ContactForm;
