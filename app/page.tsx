import styles from "@/styles/index.module.css";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <main>
     {/* <Navigation/>*/}
        <div className={styles.center}>
          <h1 className="text-4xl font-bold mb-8">Soy Felipe, </h1>
          <h2>TI03SM-22</h2>
        </div>
    </main>
  );
}
