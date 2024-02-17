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
          <h1 className="text-4xl font-bold mb-8">Soy Felipe </h1>
          <h2>TI03SM-22</h2>
        </div>
      </div>
    </main>
  );
}
