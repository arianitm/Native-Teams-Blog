import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm py-4 px-6 flex justify-around items-center">
      <Link href={`/`}>
        <img
          src="/default.png"
          alt="Native Teams Logo"
          className="h-8 w-auto"
        />
      </Link>

      <nav className="flex gap-4">
        <a href="#" className="text-blue-700 font-medium">
          Links Group 1
        </a>
        <a href="#" className="text-blue-700 font-medium">
          Links Group 2
        </a>
      </nav>
      <a href="#" className="bg-blue-700 text-white px-4 py-2 rounded-full">
        Get started
      </a>
    </header>
  );
}
