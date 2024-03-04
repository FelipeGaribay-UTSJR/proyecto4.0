import styles from "@/styles/index.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.center}>
        <img src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2019/11/last-us-parte-ii-arte-conceptual_1.jpg?tf=1200x" alt="The last of us" />
        <h1 className="text-4xl font-bold mb-8">Soy Felipe</h1>
        <h2>TI03SM-22</h2>
        <p>Texto debajo de la imagen.</p>
      </div>
    </main>
  );
}
