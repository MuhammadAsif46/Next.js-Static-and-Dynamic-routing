import Link from "next/link";
import { useRouter } from "next/router"

export default function () {
    const router = useRouter();
    const {customersId} = router.query
    return (
      <div>
        <h1>Customers {customersId} projects List Page</h1>
        <h2>Project</h2>
        <ul>
            <li> 
              <Link href={`/customers/${customersId}/projects/ABC`}>ABC</Link> 
            </li>
            <li> 
              <Link href={`/customers/${customersId}/projects/XYZ`}>XYZ</Link>
            </li>
        </ul>
      </div>
    )
  }