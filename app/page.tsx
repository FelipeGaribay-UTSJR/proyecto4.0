import styles from "@/styles/index.module.css";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <nav className="bg-gray-800 text-white w-full p-4">
        <div className="flex justify-between items-center max-w-4xl mx-auto">
          <Link href="/">
            <a className="text-xl font-bold">Home</a>
          </Link>
          <Link href="/about">
            <a className="text-xl">Acerca</a>
          </Link>
        </div>
      </nav>
      <div className="mt-8">
        <h1 className="text-4xl font-bold text-center">Tu Nombre</h1>
      </div>
    </main>
  );
}
