import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center content-center pt-72 gap-2 h-lvh bg-violet-100">
      <p className="text-2xl font-semibold">404 | Sorry, nothing found</p>
      <Link href="/" className="text-blue-500">
        Back to Home
      </Link>
    </div>
  );
}
