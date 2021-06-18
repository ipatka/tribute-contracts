import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--lg"
            to="/docs/intro/overview-and-benefits"
            style={{ marginRight: 5 }}
          >
            Get Started
          </Link>

          <Link
            className="button button--secondary button--lg"
            to="/docs/tutorial/nft-dao/installation"
          >
            Launch a NFT DAO Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}
{
  /* <iframe
  className={styles.indexCtasGitHubButton}
  src="https://ghbtns.com/github-btn.html?user=facebook&amp;repo=docusaurus&amp;type=star&amp;count=true&amp;size=large"
  width={160}
  height={30}
  title="GitHub Stars"
/>; */
}
export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description=" - A new modular DAO framework, inspired by the Moloch smart contracts."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
