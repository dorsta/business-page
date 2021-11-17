import {ReactComponent as WarningSign} from '../../assets/images/warning.svg';
import './styles.scss';

const InputField = ({error, isTouched, isActive, isTextArea, ...props}) => {
  return (
    <div className="input-field">
      <div
        className={`input-field__wrapper${
          isTouched && error
            ? ' input-field__wrapper--error'
            : isActive
            ? ' input-field__wrapper--active'
            : ''
        }`}
      >
        {isTextArea ? (
          <textarea className="input-field__input input-field__input--text-area" {...props} />
        ) : (
          <input className="input-field__input" type="text" {...props} />
        )}
      </div>
      {isTouched && error ? (
        <p className="input-field__error">
          <WarningSign className="input-field__warning" />
          {error}
        </p>
      ) : null}
    </div>
  );
};

export default InputField;
