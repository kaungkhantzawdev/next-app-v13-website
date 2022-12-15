import { useRouter } from "next/router";

const Blog = () => {
    const router = useRouter()
    const { slug } = router.query;
    return ( 
        <>
        <h1>HELLo Blog : { slug }</h1>
        </>
     );
}
 
export default Blog;