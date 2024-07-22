import { NextSeo } from 'next-seo';

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
};

const Meta = (props: IMetaProps) => (
  <NextSeo
    title={props.title}
    description={props.description}
    canonical={props.canonical}
  />
);

export { Meta };
