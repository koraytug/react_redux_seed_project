import styled from 'styled-components';

export const CustomerForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 650px;
  height: 130px;
  margin-left: 10px;
`;

export const CustomerFormColumn = styled.div`
  display: flex;
  flex-direction: row;
  width: 650px;
  height: 630px;
  margin-left: 10px;
`;

export const CustomerFormItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 500px;
  height: 40px;
  margin-left: 10px;
  align-items: center;
`;

export const FormLabelItem = styled.label`
  width: 130px;
  font-size: 18px;
  /* margin-top: 5px;
  margin-bottom: 5px; */
`;

export const FormInputItem = styled.input`
  width: 200px;
  height: 30px;
  font-size: 18px;
  /* margin-top: 5px;
  margin-bottom: 5px; */
`;

export const SaveButton = styled.button`
  width: 150px;
  height: 40px;
  font-size: 18px;
  margin-top: 50px;
  background-color: #1b7e16;
  color: #ffffff;
  font-weight: bold;
  line-height: 24px;
  border: 0px;
  margin-left: 20px;
  margin-right: 5px;
`;

export const CancelButton = styled.button`
  width: 150px;
  height: 40px;
  font-size: 18px;
  margin-top: 50px;
  background-color: #d33654;
  color: #ffffff;
  font-weight: bold;
  line-height: 24px;
  border: 0px;
`;

export const BirthDay = styled.input`
  width: 70px;
  height: 30px;
  font-size: 18px;
`;

export const BirthMonth = styled.input`
  width: 70px;
  height: 30px;
  font-size: 18px;
`;

export const BirthYear = styled.input`
  width: 70px;
  height: 30px;
  font-size: 18px;
`;

export const CustomerFormButtonRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CheckBoxItem = styled.input`
  height: 20px;
  width: 20px;
  font-size: 18px;
`;
