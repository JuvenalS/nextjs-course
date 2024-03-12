//"use client"
import Image from "next/image";
import styles from "./contact.module.css";
//import HydrationTest from "@/components/hydrationTest";
//import dynamic from "next/dynamic";

//const HydrationTestNoSSR = dynamic(() => import("@/components/hydrationTest"), {ssr: false});

export const metadata = {
  title: "Contact Page",
  description: "Contact description",
};

export default function ContactPage() {
  //const a = Math.random()

    //console.log(a);

  return (
    <main className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        {/*<HydrationTestNoSSR />*/}
        {/*<div suppressHydrationWarning>{a}</div>*/}
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="email" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea name="" id="" cols={30} rows={10} placeholder="Message"></textarea>
          <button>Send</button>
        </form>
      </div>
    </main>
  );
}
