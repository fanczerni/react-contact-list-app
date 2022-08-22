import React from 'react';
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

const Thic = styled.div`
  width: 15px;
  height: 5px;
  border-bottom: 3px solid #7dc436;
  border-left: 3px solid #7dc436;
  transform: rotate(-45deg);
  margin-bottom: 2px;
`;

export const ContactItem: React.FC<{ isChecked?: boolean }> = ({ isChecked }) => {
  return (
    <Wrapper>
      <Avatar>MŻ</Avatar>
      <div>
        <Name>Michał Żurawski</Name>
        <Email>test@test.com</Email>
      </div>
      <Checkbox>{isChecked && <Thic />}</Checkbox>
    </Wrapper>
  );
};
