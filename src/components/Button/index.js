import './styles.scss';

const Button = ({callToAction, onClick, children}) => {
  return (
    <button
      className={`button${callToAction ? ' button--cta' : ''}`}
      onClick={() => {
        if (onClick) onClick();
      }}
    >
      {callToAction ? 'Get started' : children}
    </button>
  );
};

export default Button;
