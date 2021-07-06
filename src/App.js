import styled from 'styled-components';
import Input from './components/Input/Input';
import inputTypes from './components/Input/InputTypes';
import colors from './utils/colors';

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${colors.background};
`;

const App = () => {
  return (
    <Wrapper>
      <Input name="Input test" type={inputTypes.text}>
        Hello test
      </Input>
    </Wrapper>
  );
};

export default App;
