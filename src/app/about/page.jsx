import Image from "next/image";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <main>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="" fill />
      </div>
    </main>
  );
}
