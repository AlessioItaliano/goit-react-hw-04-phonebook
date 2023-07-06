import styled from '@emotion/styled';

export const ContactListUl = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  padding: 12px;
  border-radius: 4px;
  background-color: skyblue;
  border: 1px solid blue;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const ContactDeleteButton = styled.button`
  padding: 5px 20px;
  margin-left: 20px;
  font-size: 14px;
  border-radius: 10px;
  border: 1px solid;
  :hover {
    background-color: yellow;
  }
`;
