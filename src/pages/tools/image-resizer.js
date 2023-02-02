import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from '../index.module.css';
import clsx from "clsx";
import React, { useState, createContext, useEffect } from "react";
import UploadLayout from './image-resizer/upload'

function HomepageHeader() {
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">Image Resizer</h1>
                <p className="hero__subtitle">Optimized for Telegram Stickers</p>

            </div>
        </header>
    );
}



export default function Home() {
  return (
      <Layout>
        <main>
        <HomepageHeader />
        <div style={{ width: '50vw', margin: '5em auto' }}>
        <UploadLayout />
        </div>
        </main>
      </Layout>
  );
}
