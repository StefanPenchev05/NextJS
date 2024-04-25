"use client";
import Link from "next/link";
import prisma from "./_lib/db";

export default function Home() {
  async function testPrismaConnection() {
    try {
      const res = await fetch("/api/testPrisma");
      alert("Connection is Ok");
    } catch (err) {
      alert("Sorry but the connection is not establish. Error: " + err);
    }
  }

  return (
    <div className="container flex flex-col items-center justify-center space-y-40">
      <p className="text-5xl">🔥Auth Project🔥</p>
      <div className="flex flex-col items-center justify-center space-y-12">
        <img
          src="/StefanPenchevImg.jpg"
          alt="Avatar"
          className=" w-40 h-40 rounded-full object-cover"
        />
        <div className="text-center">
          <p className="text-4xl">
            <span className="font-bold italic text-orange-500 mx-1">
              {" "}
              Stefan Penchev{" "}
            </span>{" "}
            a
            <span className="ml-2 underline italic">
              Full-Stack Web Developer
            </span>
          </p>
          <p className="text-gray-400">
            This is a project for training Auth Pages with NextJS, feel free for
            using it
          </p>
        </div>
      </div>
      <div className="flex space-x-40">
        <div className="p-6 space-y-6 bg-gray-800 rounded-lg shadow-lg">
          <div className="flex items-center space-x-4">
            <p className="text-white text-4xl bg-gray-700 p-2 rounded-lg">
              Next Auth
            </p>
            <p className="text-orange-400 text-2xl pb-2 border-b-2 border-orange-300">
              <Link
                href="auth/next/login"
                className="hover:text-orange-500 transition duration-200"
              >
                Login
              </Link>
            </p>
            <p className="text-orange-400 text-2xl pb-2 border-b-2 border-orange-300">
              <Link
                href="auth/next/register"
                className="hover:text-orange-500 transition duration-200"
              >
                Register
              </Link>
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-white text-4xl bg-gray-700 p-2 rounded-lg">
              Customized Auth
            </p>
            <p className="text-orange-400 text-2xl pb-2 border-b-2 border-orange-300">
              <Link
                href="auth/custom/login"
                className="hover:text-orange-500 transition duration-200"
              >
                Login
              </Link>
            </p>
            <p className="text-orange-400 text-2xl pb-2 border-b-2 border-orange-300">
              <Link
                href="auth/custom/register"
                className="hover:text-orange-500 transition duration-200"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <button
            onClick={testPrismaConnection}
            className="text-orange-400 text-4xl pb-2 border-b border-orange-300"
          >
            Test Prisma Connection
          </button>
        </div>
      </div>
    </div>
  );
}
