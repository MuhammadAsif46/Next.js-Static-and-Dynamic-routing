import Link from "next/link"

export default function () {
    return (
      <div>
        <h1> My Customers Page </h1>
        <ul>
          <li> <Link href="customers1/Iphone"> Iphone </Link> </li>
          <li> <Link href="customers1/Honda"> Honda </Link> </li>
          <li> <Link href="customers1/Dell"> Dell </Link> </li>
        </ul>
      </div>
    )
  }