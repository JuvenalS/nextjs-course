import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";

export default function BlogPage() {
  return (
    <main className={styles.container}>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
    </main>
  );
}
