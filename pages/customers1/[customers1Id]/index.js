import Link from "next/link";
import { useRouter } from "next/router"

export default function () {
  const router1 = useRouter();
  const {customers1Id} = router1.query;
    return (
      <div>
        <h1> My Customers {customers1Id} Detail Page </h1>
        <h2> Projects </h2>
        <Link href={`/customers1/${customers1Id}/project1`}> Go To My Customer {customers1Id} Projects List </Link>
      </div>
    )
  }