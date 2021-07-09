import styled from 'styled-components';
import colors from '../utils/colors';

import Button from '../components/Button';

const StyledHeader = styled.h1`
  font-size: 80px;
  letter-spacing: 10px;
  color: ${colors.primary};
`;

const StyledButton = styled(Button)`
  margin-top: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const CompletedView = ({ onChange }) => {
  return (
    <Wrapper>
      <StyledHeader>Completed!</StyledHeader>
      <StyledButton onClick={() => onChange(false)}>GO BACK</StyledButton>
    </Wrapper>
  );
};

export default CompletedView;
