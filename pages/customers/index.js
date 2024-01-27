import Link from "next/link";

export default function () {
    return (
      <div>
        <h1>Customers Page</h1>
        <ul>
            <li> <Link href="customers/ishaq" > Ishaq </Link> </li>
            <li> <Link href="customers/nadir" > Nadir </Link> </li>
        </ul>
      </div>
    )
  }