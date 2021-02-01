import React, { useState } from 'react';

import { Button } from '../../components';
import { Display } from '../../components';
import { NumberGrid } from '../../components';

export const Calculator = () => {
  const [inputNumber, setInputNumber] = useState('');
  const [sumNumber, setSumNumber] = useState(0)

  const onClickNumber = number => setInputNumber(inputNumber + number);

  const onClickSign = (sign) => {
    const result = sumNumber + parseFloat(inputNumber);
    
    setSumNumber(result);
    setInputNumber(result);

    if (sign === '+') setInputNumber('');
  }

  return (
    <div style={styles.calculator}>
      <Display>{inputNumber}</Display>
      <NumberGrid onClick={onClickNumber} />
      <Button onClick={onClickSign}>+</Button>
      <Button onClick={onClickSign}>=</Button>
    </div>
  );
}


const styles = {
  calculator: {
    backgroundColor: '#eee',
    height: '100%',
    width: '50%',
    margin: '50px 25% 50px 25%',
  }
};
