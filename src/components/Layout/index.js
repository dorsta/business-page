import Header from '../Header';
import Hero from '../HeroBlock';
import LeakedPasswords from '../WorstPasswordsBlock';
import FAQ from '../FAQBlock';
import BusinessForm from '../BusinessBlock';
import Footer from '../Footer';
import './styles.scss';

const Layout = ({children}) => {
  return (
    <div className="layout">
      <Header />
      <Hero />
      <LeakedPasswords />
      <FAQ />
      <BusinessForm />
      <Footer />
    </div>
  );
};

export default Layout;
