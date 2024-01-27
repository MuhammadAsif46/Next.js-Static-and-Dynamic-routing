import { useRouter } from "next/router"

export default function () {
    const router1 = useRouter();
    const {project1Id} = router1.query;
    const {customers1Id} = router1.query;
    return (
        <div>
            <h1> My Customer {customers1Id} projects List Page</h1>
            <h2>Project {project1Id}  </h2>
        </div>
    )
};