import { prisma }  from "../../lib/prisma";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function IssueDetailPage({ params }: Props) {
  const { id } = await params;

  const issue = await prisma.issue.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!issue) notFound();

  return (
    <div className="max-w-3xl mx-auto p-8">
      <div className="bg-white shadow rounded-lg border">
        <div className="border-b px-6 py-4">
          <h1 className="text-2xl font-bold">Issue Details</h1>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              ID
            </label>
            <input
              type="text"
              value={issue.id}
              readOnly
              className="w-full border rounded-md p-2 bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Title
            </label>
            <input
              type="text"
              value={issue.title}
              readOnly
              className="w-full border rounded-md p-2 bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Description
            </label>
            <textarea
              value={issue.description}
              readOnly
              rows={6}
              className="w-full border rounded-md p-2 bg-gray-100"
            />
          </div>

       
        </div>
      </div>
    </div>
  );
}