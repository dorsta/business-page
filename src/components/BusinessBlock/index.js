import {useState} from 'react';

import * as Yup from 'yup';
import {Formik, Form} from 'formik';

import FormImage from '../../assets/images/np-form-image.png';
import InputField from '../InputField';
import Button from '../Button';
import './styles.scss';

const FormSchema = Yup.object().shape({
  name: Yup.string().required('Name cannot be empty'),
  email: Yup.string().required('Email cannot be empty').email('Email must be valid'),
  note: Yup.string().required('Please add a note'),
});

const initialFormState = [
  {
    id: 'name',
    placeholder: 'Name',
    isActive: false,
    isTextArea: false,
  },
  {
    id: 'email',
    placeholder: 'Email',
    isActive: false,
    isTextArea: false,
  },
  {
    id: 'note',
    placeholder: 'Note',
    isActive: false,
    isTextArea: true,
  },
];

const BusinessBlock = () => {
  const [formState, setFormState] = useState(initialFormState);

  const focusChangeHandler = (fieldIndex) => {
    const newState = [...formState];
    newState[fieldIndex] = {
      ...newState[fieldIndex],
      isActive: !newState[fieldIndex].isActive,
    };
    setFormState(newState);
  };

  return (
    <div className="business-block page-block">
      <h2 className="business-block__title">Get NordPass for business</h2>
      <div className="business-block__content">
        <img className="business-block__image" alt="business product demo" src={FormImage} />
        <Formik
          initialValues={{
            name: '',
            email: '',
            note: '',
          }}
          validationSchema={FormSchema}
        >
          {({errors, values, touched, handleBlur, handleChange}) => (
            <Form className="business-block__form">
              <p className="business-block__description">
                Fill out your details, and we will get back to you shortly:
              </p>
              {formState.map((formField, index) => (
                <InputField
                  value={values[formField.id]}
                  error={errors[formField.id]}
                  isTouched={touched[formField.id]}
                  isActive={formField.isActive}
                  isTextArea={formField.isTextArea}
                  onChange={handleChange}
                  onBlur={(event) => {
                    handleBlur(event);
                    focusChangeHandler(index);
                  }}
                  onFocus={() => focusChangeHandler(index)}
                  placeholder={formField.placeholder}
                  id={formField.id}
                  key={formField.id}
                />
              ))}
              <p className="business-block__conditions">
                This information will be used by NordPass to respond to your inquiry as provided in
                our{' '}
                <a className="business-block__policy" href="#demo-link">
                  Privacy Policy.
                </a>
              </p>
              <Button callToAction />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default BusinessBlock;
