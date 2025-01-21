import React, { useState } from "react";

export default function UserProfile() {
  const [name, setName] = useState("John Nguyen");
  const [email, setEmail] = useState("user@example.com");
  const [phone, setPhone] = useState("0123456789");

  const handleSave = () => {
    alert("Profile updated (giả lập).");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Your Profile</h2>
      <form className="max-w-sm space-y-4">
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full border px-3 py-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Phone</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <button
          type="button"
          onClick={handleSave}
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded"
        >
          Save Profile
        </button>
      </form>
    </div>
  );
}
