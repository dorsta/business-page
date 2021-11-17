import Button from '../Button';
import './styles.scss';

const SideDrawer = ({closeSideDrawer}) => {
  return (
    <div className="side-drawer">
      <nav className="side-drawer__content">
        <ul className="side-drawer__list">
          <li className="side-drawer__list-item">Features</li>
          <li className="side-drawer__list-item">Pricing</li>
          <li className="side-drawer__list-item">Apps</li>
          <li className="side-drawer__list-item">Blog</li>
          <li className="side-drawer__list-item">Help</li>
          <li className="side-drawer__list-item">My Account</li>
          <li className="side-drawer__list-item">
            <Button>Open Vault</Button>
          </li>
        </ul>
      </nav>
      <div className="side-drawer__backdrop" onClick={closeSideDrawer} />
    </div>
  );
};

export default SideDrawer;
