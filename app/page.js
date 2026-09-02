import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>🏏 Sports Page</h1>

      <Link href="/teams">
        View Teams
      </Link>

      <br />

      <Link href="/matches">
        View Matches
      </Link>
    </main>
  );
}