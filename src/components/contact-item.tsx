import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.li`
  padding: 20px 0;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  flex: 0 0 50px;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.7);
  margin-right: 20px;
  overflow: hidden;
`;

const Name = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const Email = styled.div`
  color: rgba(0, 0, 0, 0.5);
`;

const Checkbox = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
`;

const Tick = styled.div`
  width: 15px;
  height: 5px;
  border-bottom: 3px solid #7dc436;
  border-left: 3px solid #7dc436;
  transform: rotate(-45deg);
  margin-bottom: 2px;
`;

export const ContactItem: React.FC<{
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  avatarUrl?: string;
  isChecked?: boolean;
  setSelectedIDs: any;
}> = ({ id, firstName, lastName, email, avatarUrl, setSelectedIDs }) => {
  const [isSelected, setSelected] = useState(false);

  return (
    <Wrapper
      onClick={() => {
        setSelected(!isSelected);

        if (!isSelected) {
          setSelectedIDs((prevState: number[]) => [...prevState, id]);
        } else {
          setSelectedIDs((prevState: number[]) => prevState.filter((e) => e !== id));
        }
      }}
    >
      <Avatar>
        {avatarUrl ? (
          <>
            <img src={avatarUrl} />
          </>
        ) : (
          <>
            {firstName.charAt(0)}
            {lastName.charAt(0)}
          </>
        )}
      </Avatar>
      <div>
        <Name>
          {firstName} {lastName}
        </Name>
        <Email>{email}</Email>
      </div>
      <Checkbox>{isSelected && <Tick />}</Checkbox>
    </Wrapper>
  );
};
