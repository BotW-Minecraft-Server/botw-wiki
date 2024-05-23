import React from 'react';

import clsx from 'clsx';

import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function Block({ title, children }) {
  return (
    <div className={clsx("col", styles.card)}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export default function Index() {
  const ctx = useDocusaurusContext();

  return (
    <Layout description={ctx.siteConfig.tagline}>
      <Head>
        <html className={clsx("container-botw-background")} id={styles.page} />
      </Head>
      <header className={styles.heroBanner}>
        <div className="container">
          <h2 className="hero__title" title="Current decompilation progress">
            <Link to="/about">
              Persists Realms
            </Link>
          </h2>
          <div className="row">
            <Block title="这是什么？">
              <p><i>持续领域 (Persists Realms) 是一个公益性质的正版 Minecraft 服务器，我们还为开源社区产出优质的多人游戏模组。</i></p>

              <Link
                className="button button--secondary"
                to="/about">
                关于我们
              </Link>
            </Block>

            <Block title="我需要帮助...">
              <p><i>这里是持续领域服务器和模组的维基百科主页，与此同时我们还在运行一个 Maven 镜像源。</i></p>

              <Link
                className="button button--secondary"
                to="/contribute">
                维基百科
              </Link>
            </Block>
          </div>
        </div>
      </header>
    </Layout>
  );
}
