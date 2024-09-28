import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen text-center p-4">
      <h1 className="text-4xl font-bold text-foreground">Welcome to Morsedojo</h1>
      <p className="text-lg text-gray-400 max-w-lg mt-4">
        Master Morse code with interactive lessons and practice sessions. 
        Get started now and track your progress as you become a Morse code expert.
      </p>
      <Link href="/dashboard">
        <button className="btn btn-primary mt-6">
          Get Started
        </button>
      </Link>
    </main>
  );
}
