import Link from "next/link";
import { prisma } from "../lib/prisma";

export default async function IssuesPage() {
  const issues = await prisma.issue.findMany({
    orderBy: {
      id: "desc",
    },
  });

  return (
    <div className="space-y-4">
      {issues.map((issue) => (
        <Link
          key={issue.id}
          href={`/issues/${issue.id}`}
        >
          <div className="border rounded-lg p-4 hover:bg-gray-100 cursor-pointer">
            <h2 className="text-xl font-semibold">{issue.title}</h2>
            <p>{issue.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}