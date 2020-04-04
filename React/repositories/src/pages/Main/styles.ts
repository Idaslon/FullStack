import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 80px auto;
  padding: 30px;
  background: #FFF;

  h1 {
    display: flex;
    align-items: center;
  }

  svg {
    margin-right: 10px;
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;

  input {
    flex: 1;
    padding: 10px 15px;
    border: 1px solid #eee;
    border-radius: 4px;
    font-size: 16px;
  }
`;

export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  padding: 0 6px 0 15px;
  margin-left: 15px;

  display: flex;
  align-items: center;
  /* justify-content: center; */

  border: 0;
  border-radius: 4px;
  background: #7f2ed0;
`;
