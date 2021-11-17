import {useEffect, useState} from 'react';

import Select, {components} from 'react-select';
import axios from 'axios';

import Button from '../Button';
import {ReactComponent as SelectArrow} from '../../assets/images/select-arrow.svg';
import './styles.scss';

const sortingChoices = [
  {value: 'count', label: 'Count'},
  {value: 'abc', label: 'ABC'},
];

const minPasswordsAmount = 10;
const maxPasswordsAmount = 50;

const DropdownIndicator = (props) => (
  <components.DropdownIndicator {...props}>
    <SelectArrow
      className={`react-select__arrow${
        props.selectProps.menuIsOpen ? ' react-select__arrow--arrow-up' : ''
      }`}
    />
  </components.DropdownIndicator>
);

const WorstPasswordsBlock = () => {
  const [passwords, setPasswords] = useState();
  const [displayablePasswordsAmount, setDisplayablePasswordsAmount] = useState(minPasswordsAmount);
  const [sortingCriterion, setSortingCriterion] = useState({value: 'count', label: 'Count'});

  useEffect(() => {
    axios
      .get('https://playground.nordsec.com/v2/worst-psw.json')
      .then((res) => {
        setPasswords(res.data.passwords);
      })
      .catch((error) => {
        setPasswords(false);
      });
  }, []);

  const changeDisplayablePasswordsAmountHandler = () => {
    if (displayablePasswordsAmount === minPasswordsAmount) {
      setDisplayablePasswordsAmount(maxPasswordsAmount);
    } else {
      setDisplayablePasswordsAmount(minPasswordsAmount);
    }
  };

  const sortByCount = (a, b) => {
    return b.count - a.count;
  };

  const sortByAlphabet = (a, b) => {
    return a.value.localeCompare(b.value);
  };

  const sortingFunctionPicker = () => {
    if (sortingCriterion.value === 'count') {
      return sortByCount;
    } else {
      return sortByAlphabet;
    }
  };

  const renderPasswordList = () => {
    return passwords ? (
      passwords
        .sort(sortingFunctionPicker())
        .slice(0, displayablePasswordsAmount)
        .map((password, index) => (
          <tr className="passwords-block__table-row" key={password.value}>
            <td className="passwords-block__cell passwords-block__cell--number-cell">
              {index + 1}.
            </td>
            <td className="passwords-block__cell">{password.value}</td>
            <td className="passwords-block__cell passwords-block__cell--count-cell">
              {password.count}
            </td>
          </tr>
        ))
    ) : (
      <tr>
        <td className="passwords-block__cell passwords-block__cell--error-cell">
          An error ocurred while loading the list of passwords.
        </td>
      </tr>
    );
  };

  return (
    <div className="passwords-block page-block content-wrapper">
      <h2 className="passwords-block__header">Top leaked passwords</h2>
      <table className="passwords-block__table">
        <thead className="passwords-block__table-header">
          <tr className="passwords-block__table-row">
            <th className="passwords-block__cell passwords-block__cell--header-cell" colSpan={2}>
              Password
            </th>
            <th className="passwords-block__cell passwords-block__cell--header-cell" align="right">
              <Select
                classNamePrefix="react-select"
                className="react-select__container"
                options={sortingChoices}
                components={{DropdownIndicator}}
                defaultValue={{value: 'count', label: 'Count'}}
                onChange={(value) => setSortingCriterion(value)}
              />
            </th>
          </tr>
        </thead>
        <tbody className="passwords-block__table-body">{renderPasswordList()}</tbody>
      </table>
      {passwords && (
        <Button onClick={changeDisplayablePasswordsAmountHandler}>
          {displayablePasswordsAmount === minPasswordsAmount ? 'Show all (50)' : 'Show less (10)'}
        </Button>
      )}
    </div>
  );
};

export default WorstPasswordsBlock;
