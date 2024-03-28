import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container flex flex-col items-center">
        <p>
          Hello, my name is 
          <span className="font-bold italic text-orange-500">Stefan Penchev</span> a
          <span className="">Full-Stack Web Developer</span>
        </p>
        <p>I thougth giving a chance to NextJS</p>
        <p>
          This is a project for training Auth Pages with NextJS, feel free for
          using it
        </p>
      </div>
    </main>
  );
}
