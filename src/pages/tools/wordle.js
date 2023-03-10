import Layout from "@theme/Layout";
import styles from "@site/src/pages/index.module.css";
import clsx from "clsx";
import React from "react";

function HomepageHeader() {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Wordle</h1>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout>
      <main>
        <HomepageHeader />
        <iframe src="https://reactle.pages.dev/" width="100%" height="700px" />
      </main>
    </Layout>
  );
}
