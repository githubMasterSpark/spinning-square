import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 className={styles.main}>Home Page!</h1>
      <p>This is a home page. There is not much formatting.</p>  
      <p>The spinning square is not on the page, but is instead in your mind.</p>
    </div>
  );
}
