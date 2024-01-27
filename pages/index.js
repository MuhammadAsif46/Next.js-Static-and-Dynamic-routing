import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <h2>Our Customers</h2>
      <ul>
        <li>
          <Link href="/customers">Go To Customers</Link>
        </li>
      </ul>
    </div>
  );
}
