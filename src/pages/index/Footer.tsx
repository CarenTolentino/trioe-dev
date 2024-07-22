import { Background } from '../../background/Background';
import { CenteredFooter } from '../../footer/CenteredFooter';
import { Section } from '../../layout/Section';
import Logo from './Logo';

const Footer = () => (
  <Background color="bg-gray-100 ">
    <Section>
      <CenteredFooter
        logo={<Logo />}
        iconList={<>{/* Add your icons here */}</>}
      >
        {/* Add any footer content here if needed */}
        {/* <p className="text-sm text-gray-600">&copy; 2024 Your Company</p> */}
      </CenteredFooter>
    </Section>
  </Background>
);

export default Footer;
