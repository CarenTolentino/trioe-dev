import { Popover } from '@headlessui/react';
import Link from 'next/link';

import { Section } from '@/layout/Section';

const LearningModules = ({
  title,
  description,
  image,
  imageAlt,
}: {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}) => (
  <Popover className="relative flex h-full flex-col">
    {/* Trigger */}
    <div className="flex size-full cursor-pointer flex-col items-center  overflow-hidden rounded-lg bg-white p-0 shadow hover:bg-gray-100 dark:hover:bg-gray-800">
      <div className="flex flex-col items-center justify-center ">
        {image && (
          <img
            className="mb-2 h-64 w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            src={image}
            alt={imageAlt || ''}
            style={{ maxHeight: '256px' }} // Adjust max height as per your design
          />
        )}
      </div>
      <div className="p-4">
        <h4 className="text-lg font-extrabold text-orange-400">{title}</h4>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>

    {/* Content */}
    <Popover.Panel className="absolute left-0 top-0 z-10 size-full rounded-lg bg-white p-4 shadow-lg dark:bg-gray-800">
      <div className="flex flex-col items-center justify-center ">
        {image && (
          <img
            className="mb-2 h-64 w-full object-contain"
            src={image}
            alt={imageAlt || ''}
            style={{ maxHeight: '256px' }} // Adjust max height as per your design
          />
        )}
        <h4 className="text-lg font-extrabold text-orange-400">{title}</h4>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </Popover.Panel>
  </Popover>
);

const Grid = ({ children }: { children: React.ReactNode }) => (
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
    {children}
  </div>
);

const LearningModulesGrid = () => (
  <Section>
    <h1 className="mb-8 flex items-center justify-center text-3xl font-bold text-blue-900">
      LEARNING MODULES
    </h1>
    <Grid>
      <Link href="/stem_module/" passHref>
        <LearningModules
          title="STEAM MODULE"
          description="A comprehensive learning tools & kit designed to enhance STEM students understanding of programming through hands-on experiences."
          image="/assets/images/kit/image-product-1.jpg"
          imageAlt="Learning Modules"
        />
      </Link>
      <LearningModules
        title="SMART BUILDING"
        description="A comprehensive learning tools & kit designed for advanced knowledge expertise required for DIY projects where users are working with various frequencies of technology and exploring diverse wavelengths of innovation."
        image="/assets/images/kit/image-product-2.jpg"
        imageAlt="Learning Modules"
      />
      <LearningModules
        title="AGRI-AQUA"
        description="A comprehensive learning tools & kit designed to enhance STEM students understanding of programming through hands-on experiences."
        image="/assets/images/kit/image-product-3.jpg"
        imageAlt="Learning Modules"
      />
      <LearningModules
        title="ROBOTICS"
        description="A comprehensive learning tools & kit designed for advanced knowledge expertise required for DIY projects where users are working with various frequencies of technology and exploring diverse wavelengths of innovation."
        image="/assets/images/kit/image-product-4.jpg"
        imageAlt="Learning Modules"
      />
    </Grid>
  </Section>
);

export default LearningModulesGrid;
