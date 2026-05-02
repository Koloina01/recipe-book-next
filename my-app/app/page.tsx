import Image from "next/image";

import Link from "next/link";

  export default function Home() {
    return (
      <main className="p-10 text-center">
        <h1 className="text-3xl font-bold">Bienvenue 👋</h1>

        <Link href="/recipes" className="text-blue-500 underline">
          Voir les recettes
        </Link>
      </main>
    );
  }

