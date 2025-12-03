import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Translate, { translate } from '@docusaurus/Translate';

import { FeaturesSection } from '@site/src/widgets';
import styles from './HomePage.module.css';

function HeroSection(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          <Translate
            id="homepage.tagline"
            description="The tagline on the homepage"
          >
            Documentation for Ayunis Core
          </Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/getting-started"
          >
            <Translate
              id="homepage.getStarted"
              description="The get started button label"
            >
              Get Started
            </Translate>
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/concepts"
            style={{ marginLeft: '1rem' }}
          >
            <Translate
              id="homepage.learnConcepts"
              description="The learn concepts button label"
            >
              Learn Concepts
            </Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export function HomePage(): ReactNode {
  return (
    <Layout
      title={translate({
        id: 'homepage.title',
        message: 'Documentation',
        description: 'The homepage title',
      })}
      description={translate({
        id: 'homepage.description',
        message: 'Official documentation for Ayunis Core',
        description: 'The homepage meta description',
      })}
    >
      <HeroSection />
      <main>
        <FeaturesSection />
      </main>
    </Layout>
  );
}

export default HomePage;

