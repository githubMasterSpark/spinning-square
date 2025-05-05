import Link from "next/link";
import styles from './navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <h1>Spinning Square</h1>
            <Link href="./">Home</Link>
            <Link href="./about">About</Link>
            <Link href="./pineapple">Pineapple</Link>
        </nav>
    );
}
