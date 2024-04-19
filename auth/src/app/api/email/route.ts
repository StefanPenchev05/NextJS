import { NextResponse } from "next/server";
import { validationError } from "services/app/_lib/errors";

import prisma from "services/app/_lib/db";

function isValidEmail(email: string | undefined) {
  if (!email) {
    throw new validationError("Email is required");
  } else if (email.length <= 12) {
    throw new validationError("Email is required");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new validationError("Invalid Email");
  }

  return true;
}

export async function POST(request: Request) {
  const { email } = (await request.json()) as { email: string | undefined };

  try {
    isValidEmail(email);

    const record = await prisma.user.findFirst({
      where: { email },
    });

    if(!record){
        return NextResponse.json({ message: "No User found" }, { status: 400 });
    }

    return NextResponse.json({}, {status: 200});
  } catch (error: any) {
    console.log(error.constructor.name);
    if (error instanceof validationError) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
