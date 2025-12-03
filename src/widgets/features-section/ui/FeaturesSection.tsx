// Types
import type { ReactNode } from 'react';

// Utils
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';

// UI
import Heading from '@theme/Heading';

// Styles
import styles from './FeaturesSection.module.css';

export interface FeatureItem {
  id: string;
  icon: string;
}


const FEATURES_ITEMS: FeatureItem[] = [
  {
    id: 'easyIntegration',
    icon: '🔌',
  },
  {
    id: 'typeSafe',
    icon: '🛡️',
  },
  {
    id: 'extensible',
    icon: '🧩',
  },
]

function FeatureCard({ id, icon }: FeatureItem): ReactNode {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <span className={styles.featureIcon} role="img">
          {icon}
        </span>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">
          <Translate id={`homepage.features.${id}.title`} />
        </Heading>
        <p>
          <Translate id={`homepage.features.${id}.description`} />
        </p>
      </div>
    </div>
  );
}

export function FeaturesSection(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FEATURES_ITEMS.map((feature) => (
            <FeatureCard key={feature.id} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
