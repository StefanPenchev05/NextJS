import { NextRequest, NextResponse } from "next/server";
import { checkEmailSchema } from "services/app/_lib/validationSchema";
import prisma from "services/app/_lib/db";

export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.formData();
  const email = data.get("email") as string;

  const string = checkEmailSchema.safeParse(email);
  if (!string.success)
    return NextResponse.json({ success: false }, { status: 400 });

  try {
    const record = await prisma.user.findFirstOrThrow({ where: { email } });
    return NextResponse.json(
      { success: true, username: record.username },
      { status: 200 }
    );
  } catch (error) {
    let message = "Server error";
    let status = 500;
    if (Object.values(error as object).includes("NotFoundError")) {
      status = 404;
    }
    return NextResponse.json({ success: false }, { status: status });
  }
}
