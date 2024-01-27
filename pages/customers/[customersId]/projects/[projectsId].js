import { useRouter } from "next/router"

export default function () {
    const router = useRouter();
    const {customersId , projectsId} = router.query
    return (
      <div>
        <h1>Customers {customersId} project detail Page</h1>
        <h2>Project ({projectsId}) </h2>  
      </div>
    )
  }