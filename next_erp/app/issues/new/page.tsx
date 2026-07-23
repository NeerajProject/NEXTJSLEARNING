"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const NewIssuePage = () => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch("/api/issues", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    });

    setLoading(false);

    if (response.ok) {
      router.push("/issues");
    } else {
      alert("Failed to create issue");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Create New Issue</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-2 font-medium">
            Title
          </label>
          <input
            type="text"
            className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Issue title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Description
          </label>
          <textarea
            rows={6}
            className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Describe the issue..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Creating..." : "Create Issue"}
        </button>
      </form>
    </div>
  );
};

export default NewIssuePage;