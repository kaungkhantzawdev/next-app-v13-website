import Link from "next/link";
const Home = () => {
    return ( 
        <div>
            <h1 className="text-3xl font-bold underline">
                Home
                <Link href='/'>default</Link>
            </h1>
        </div>
     );
}
 
export default Home;