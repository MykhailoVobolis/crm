import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
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
