import Head from "next/head";

import styles from "@/pages/index.module.css";
import { Calculator } from "./components/Calculator";

export default function CalculatorPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Roman Numeral Calculator</title>
      </Head>

      <main>
        <Calculator />
      </main>
    </div>
  );
}
