import styles from "@/styles/index.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <a href="#">Home</a>
          <a href="#">Acerca</a>
        </nav>
        <body>
          <div style={{ textAlign: 'center' }}>
            <title style={{ display: 'block' }}>Hola Soy Felipe</title>
          </div>
        </body>
      </div>
    </main>
  );
}
