import { useState } from 'react';
import styled from 'styled-components';

import FormView from './views/FormView';
import CompletedView from './views/CompletedView';

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleChange = (value) => {
    setIsCompleted(value);
  };

  return <Wrapper>{isCompleted ? <CompletedView onChange={handleChange} /> : <FormView onChange={handleChange} />}</Wrapper>;
};

export default App;
