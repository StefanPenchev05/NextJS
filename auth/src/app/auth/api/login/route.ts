import { NextRequest, NextResponse } from "next/server";
import { loginSchema } from "services/app/_lib/validationSchema";
import prisma from "services/app/_lib/db";

export async function POST(req: NextRequest){
    const data = await req.formData();

    const email = data.get("email") as string;
    const password = data.get("password") as string;
    const rememberMe = data.get("rememberMe") as string;

    const validation = loginSchema.safeParse({email, password, rememberMe});
    if(!validation.success){
        const errorMessage = validation.error.message;
        console.log(errorMessage);
        return NextResponse.json({errorMessage}, {status: 400})
    }

    const record = await prisma.user.findFirst({where: {email}});
    if(!record){
        return NextResponse.json({status: 404});
    }

    if(record.password !== password){
        return NextResponse.json({error: "Incorrect password"}, {status: 401});
    }

    return NextResponse.json({user: {email, password}}, {status: 200});
}