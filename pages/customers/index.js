import Link from "next/link";

export default function () {
    return (
      <div>
        <h1>Customers Page</h1>
        <ul>
            <li> <Link href="customers/ishaq" > Ishaq Bhojani</Link> </li><br />
            <li> <Link href="customers/nadir" > Nadir Bashir</Link> </li><br />
            <li> <Link href="customers/asif" > Asif Ahmed</Link> </li>
        </ul>
      </div>
    )
  }