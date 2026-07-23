import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "../../lib/prisma";

const CreateIssueSchema = z.object({
  title: z.string().min(1).max(100),
  description: z.string().min(1).max(200),
});


export async function GET() {
  try {
    const issues = await prisma.issue.findMany({
      orderBy: {
        id: "desc",
      },
    });

    return NextResponse.json(issues);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}


export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const parsedData = CreateIssueSchema.safeParse(body);

    if (!parsedData.success) {
      return NextResponse.json(
        {
          message: "Invalid data",
          errors: parsedData.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const issue = await prisma.issue.create({
      data: {
        title: parsedData.data.title,
        description: parsedData.data.description,
      },
    });

    return NextResponse.json(issue, { status: 201 });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}