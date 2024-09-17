import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center content-center pt-72 gap-2 h-lvh bg-violet-100">
      <h1 className="text-3xl font-semibold">Home page</h1>
      <p>
        Go to{' '}
        <Link
          href="/dashboard"
          className="text-blue-700 no-underline hover:text-blue-300 hover:underline"
        >
          Dashboard
        </Link>
      </p>
    </main>
  );
}
