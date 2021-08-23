import styled from 'styled-components';

export const CustomerForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 650px;
  height: 630px;
  border: 9px;
  border-color: red;
`;
export const CustomerFormItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 630px;
  align-content: space-around;
`;

export const FormLabelItem = styled.label`
  width: 250;
  font-size: 18px;
`;

export const FormInputItem = styled.input`
  width: 250;
  font-size: 18px;
`;
