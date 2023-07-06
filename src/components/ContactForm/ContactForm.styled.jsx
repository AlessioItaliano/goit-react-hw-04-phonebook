import styled from '@emotion/styled';

export const AddContactForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  padding: 12px;
  background-color: skyblue;
  border: 1px solid blue;
  border-radius: 10px;
`;

export const AddContactFormLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  margin-bottom: 10px;
  color: black;
  font-size: 20px;
`;

export const AddContactFormInput = styled.input`
  padding: 8px 12px;
  cursor: pointer;
`;

export const AddContactFormBtn = styled.button`
  padding: 8px 12px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 10px;
  border: 1.5px solid blue;
  font-size: 21px;
  :hover {
    background-color: yellow;
  }
`;
