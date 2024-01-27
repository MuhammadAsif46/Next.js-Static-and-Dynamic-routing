import Link from "next/link";
import { useRouter } from "next/router";

export default function () {
    const router = useRouter();
    const {customersId} = router.query;
    return (
      <div>
        <h1>Customer {customersId}  Detail Page</h1>
        <h2>Project</h2>
        <Link href={`/customers/${customersId}/projects`}>Go To Customer Projects List</Link>
      </div>
    )
  }