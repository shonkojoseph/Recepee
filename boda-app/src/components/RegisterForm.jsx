// Example: src/components/RegisterForm.jsx
import { useState } from "react";

export default function RegisterForm() {
  const [form, setForm] = useState({ name: "", email: "", password: "", phone: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (res.ok) setMessage("Registration successful!");
    else setMessage(data.error || "Registration failed.");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="name" placeholder="Name" onChange={handleChange} className="border p-2 rounded w-full" />
      <input name="email" placeholder="Email" onChange={handleChange} className="border p-2 rounded w-full" />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} className="border p-2 rounded w-full" />
      <input name="phone" placeholder="Phone" onChange={handleChange} className="border p-2 rounded w-full" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Register</button>
      {message && <div>{message}</div>}
    </form>
  );
}