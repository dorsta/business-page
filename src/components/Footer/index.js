import './styles.scss';

const Footer = () => {
  return (
    <footer className="footer content-wrapper">
      <div className="footer__content">
        <div className="footer__links">
          <h4 className="footer__title">ENGAGE</h4>
          <a className="footer__link" href="#demo-link">
            Privacy Policy
          </a>
          <a className="footer__link" href="#demo-link">
            Terms of Service
          </a>
        </div>
        <p className="footer__copyright">Copyright © 2020 NordPass.com </p>
      </div>
    </footer>
  );
};

export default Footer;
