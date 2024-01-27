import Link from "next/link"
import { useRouter } from "next/router"

export default function () {
  const router1 = useRouter();
  const {customers1Id} = router1.query;
    return (
      <div>
        <h1> My Customer {customers1Id} Projects List </h1>
        <ul>
            <li> <Link href={`/customers1/${customers1Id}/project1/Iphone12`}> Iphone 12 </Link> </li>
            <li> <Link href={`/customers1/${customers1Id}/project1/Iphone13`}> Iphone 13 </Link> </li>
            <li> <Link href={`/customers1/${customers1Id}/project1/Iphone14`}> Iphone 14 </Link> </li>
        </ul>
        
        {/* <ul>
            <li> <Link href={`/customers1/${customers1Id}/project1/Civic`}> Civic </Link> </li>
            <li> <Link href={`/customers1/${customers1Id}/project1/Revo`}> Revo </Link> </li>
            <li> <Link href={`/customers1/${customers1Id}/project1/Alto`}> Alto </Link> </li>
        </ul>
        
        <ul>
            <li> <Link href={`/customers1/${customers1Id}/project1/Dell i4 3rd Generation`}> Dell i4 3rd Generation </Link> </li>
            <li> <Link href={`/customers1/${customers1Id}/project1/Dell i5 4rd Generation`}> Dell i5 4rd Generation </Link> </li>
            <li> <Link href={`/customers1/${customers1Id}/project1/Dell i6 5rd Generation`}> Dell i6 5rd Generation </Link> </li>
        </ul>
           */}
      </div>    
    )
  }