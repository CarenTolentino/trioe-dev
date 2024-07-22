import { Section } from '@/layout/Section';

const TrioeKits = () => (
  <Section>
    <h1 className="mb-8 flex items-center justify-center text-3xl font-bold text-blue-900 ">
      TRIOE KITS
    </h1>
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
      {[
        {
          title: 'STEM Learning Kit',
          kitName: 'MU Kit',
          description:
            'A comprehensive learning tools & kit designed to enhance STEM students understanding of programming through hands-on experiences.',
          image: '/assets/images/kit/image-product-1.jpg',
          imageAlt: 'Learning Modules',
          href: '/mu_kit/', // Add the href here
        },
        {
          title: 'Advanced Learning Kit',
          kitName: 'Lambda Kit',
          description:
            'A comprehensive learning tools & kit designed for advanced knowledge expertise required for DIY projects where users are working with various frequencies of technology and exploring diverse wavelengths of innovation.',
          image: '/assets/images/kit/image-product-1.jpg',
          imageAlt: 'Learning Modules',
          href: '/stem_module/', // Add the href here
        },
      ].map((module, i) => (
        <a
          href={module.href}
          className="overflow-hidden rounded-lg bg-white p-0 shadow hover:bg-gray-100 dark:hover:bg-gray-800"
          key={i}
        >
          {module.image && (
            <img
              className="mb-2 h-64 w-full object-cover"
              src={module.image}
              alt={module.imageAlt || ''}
            />
          )}
          <div className="p-4">
            <h4 className="text-lg font-extrabold text-blue-900">
              {module.title}
            </h4>
            <h3 className="text-4xl font-extrabold text-green-600">
              {module.kitName}
            </h3>
            <p className="mt-2 text-gray-600">{module.description}</p>
          </div>
        </a>
      ))}
    </div>
  </Section>
);

export default TrioeKits;
