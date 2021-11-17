import HeroImage from '../../assets/images/np-hero-image.png';
import Button from '../Button';
import './styles.scss';

const Hero = () => {
  return (
    <div className="hero-block page-block">
      <div className="hero-block__container content-wrapper">
        <div className="hero-block__greeting">
          <h2 className="hero-block__title">Get your passwords organized</h2>
          <Button callToAction />
        </div>
        <img className="hero-block__image" alt="Nord Pass product demo" src={HeroImage} />
      </div>
    </div>
  );
};

export default Hero;
