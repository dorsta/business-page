import {useState} from 'react';

import {ReactComponent as ExpandArrow} from '../../assets/images/expand-arrow.svg';
import './styles.scss';

const initialAccordionState = [
  {
    question: 'Why should you use a password manager for business?',
    answer:
      'Running a business comes with managing a lot of different devices and accounts. The ' +
      'easiest way to keep track of their login credentials is to use a password manager.\n\n' +
      'With a password manager, your employees can store all their logins in one place, share' +
      'them with coworkers, and access them on multiple devices with one password only. No ' +
      'excuse for forgetting passwords after a long vacation or for sharing passwords via email!',
    isOpen: false,
  },
  {
    question: 'How to choose the best password manager for business?',
    answer:
      'Running a business comes with managing a lot of different devices and accounts. The ' +
      'easiest way to keep track of their login credentials is to use a password manager.\n\n' +
      'With a password manager, your employees can store all their logins in one place, share' +
      'them with coworkers, and access them on multiple devices with one password only. No ' +
      'excuse for forgetting passwords after a long vacation or for sharing passwords via email!',
    isOpen: false,
  },
  {
    question: 'How can I get a business password manager?',
    answer:
      'Running a business comes with managing a lot of different devices and accounts. The ' +
      'easiest way to keep track of their login credentials is to use a password manager.\n\n' +
      'With a password manager, your employees can store all their logins in one place, share' +
      'them with coworkers, and access them on multiple devices with one password only. No ' +
      'excuse for forgetting passwords after a long vacation or for sharing passwords via email!',
    isOpen: false,
  },
];

const FAQ = () => {
  const [accordionState, setAccordionState] = useState(initialAccordionState);

  const accordionClickHandler = (cardIndex) => {
    setAccordionState(
      accordionState.map((question, index) => ({
        ...question,
        isOpen: cardIndex === index && !question.isOpen,
      }))
    );
  };

  return (
    <div className="f-a-q page-block">
      <h2 className="f-a-q__title">Frequently asked questions</h2>
      {accordionState.map((card, index) => (
        <div
          className="f-a-q__card"
          onClick={() => accordionClickHandler(index)}
          key={card.question}
        >
          <div className="f-a-q__card-header">
            <h3 className="f-a-q__question">{card.question}</h3>
            <ExpandArrow
              className={`f-a-q__card-arrow${card.isOpen && ' f-a-q__card-arrow--open'}`}
            />
          </div>
          {card.isOpen && <p className="f-a-q__answer">{card.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
