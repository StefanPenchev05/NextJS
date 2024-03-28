import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const users = prisma.user.count();
    return res.status(200).json({ test: true });
  } catch (err) {
    return res.status(500).json({ test: false, errMessage: err });
  }
}
