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
        <Link href="https://creativedesignsguru.com/category/nextjs/">
          <Button>Community</Button>
        </Link>
      }
    />
  </Section>
);

export default Banner;
