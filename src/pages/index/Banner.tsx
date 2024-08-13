import Link from 'next/link';

import { Button } from '../../button/Button';
import { CTABanner } from '../../cta/CTABanner';
import { Section } from '../../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="TRIOE:Tinkering Resources for Internet of Everything."
      subtitle="Start your programming journey."
      button={
        <Link href="http://atlas.batstate-u.edu.ph:3000" target="_blank" rel="noopener noreferrer">
          <Button>Community</Button>
        </Link>
      }
    />
  </Section>
);

export default Banner;
