import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-100 to-blue-100">
      <main className="text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">
          Welcome to your CookNook Recipe Class
        </h1>
        <Link 
          href="/Recipes" 
          className="inline-block px-6 py-3 text-lg font-semibold text-white bg-pink-500 rounded-full hover:bg-pink-600 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Explore our own recipes
        </Link>
      </main>
    </div>
  );
}

