import styles from "@/styles/index.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <a href="#">Home</a>
          <a href="#">Acerca</a>
        </nav>
        <div className={styles.center}>
          <h1 className="text-4xl font-bold">Soy Felipe</h1>
        </div>
      </div>
    </main>
  );
}
