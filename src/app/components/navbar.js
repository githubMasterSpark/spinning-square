import Link from "next/link";


export default function Navbar() {
    return (
        <nav>
            <h1>Spinning Square</h1>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/pineapple">Pineapple</Link>
        </nav>
    );
}
