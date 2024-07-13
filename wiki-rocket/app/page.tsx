import Image from "next/image";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center text-center gap-5 p-24'>
      <h1 className='text-4xl font-bold'>
        Welcome to <span className='text-blue-500'>Wiki Rocket!</span>
      </h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium
        nisi deserunt, voluptas quis non illo aspernatur minus nulla inventore
        recusandae.
      </p>
    </main>
  );
}
