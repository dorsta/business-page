import {useState} from 'react';

import NordPassLogo from '../../assets/images/nord-pass-logo.svg';
import Button from '../Button';
import SideDrawer from '../SideDrawer';
import './styles.scss';

const Header = () => {
  const [isSidebarOpen, setIstSidebarOpen] = useState(false);

  const closeSideDrawerHandler = () => {
    setIstSidebarOpen(false);
  };

  return (
    <header className="header">
      {isSidebarOpen && <SideDrawer closeSideDrawer={closeSideDrawerHandler} />}
      <div className="header__content content-wrapper">
        <img className="header__logo" alt="Nord Pass logo" src={NordPassLogo} />
        <nav className="header__navigation">
          <ul className="header__list">
            <li className="header__list-item">Features</li>
            <li className="header__list-item">Pricing</li>
            <li className="header__list-item">Apps</li>
            <li className="header__list-item">Blog</li>
            <li className="header__list-item">Help</li>
            <li className="header__list-item">My Account</li>
            <li className="header__list-item">
              <Button>Open Vault</Button>
            </li>
          </ul>
        </nav>
        <button className="header__burger-button" onClick={() => setIstSidebarOpen(!isSidebarOpen)}>
          <svg className="header__burger" viewBox="0 0 100 75">
            <rect width="100" height="15"></rect>
            <rect y="30" width="100" height="15"></rect>
            <rect y="60" width="100" height="15"></rect>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
