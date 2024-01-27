// import Link from "next/link";
// import { useRouter } from "next/router";

// function Home() {
//   const router = useRouter();

//   const gotoAboutPage = () => {
//     // router.push('/about');
//     router.push({
//       pathname: "/about",
//     });
//   };

//   return (
//     <>
//       <h1>Home Page</h1>
//       <ul>
//         <li>
//           <Link href="/car">car</Link>
//         </li>
//         <li>
//           <Link href="/mobile">mobile</Link>
//         </li>
//         <li>
//           <button onClick={gotoAboutPage}>go to about page</button>
//         </li>
//       </ul>
//     </>
//   );
// }
// export default Home;

import Link from "next/link";

export default function Home () {
  return (
    <div>
      <h1>Home Page</h1>
      <h2>Our Customers</h2>
      <Link href="/customers">Go To Customers</Link>
    </div>
  )
}


// import Link from "next/link";

// export default function home1 () {
//   return (
//     <div>
//       <h1> Home Page 01 </h1>
//       <h2> My Customers </h2>
//       <Link href="/customers1"> Go To My Customers </Link>
//     </div>
//   )
// }