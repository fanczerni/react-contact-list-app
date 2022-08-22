import React from 'react';
import styled from 'styled-components';

const SiteWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header`
  padding: 50px;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  max-width: 600px;
  margin-bottom: 40px;
`;

export const PageLayout: React.FC<{ title: string; children: React.ReactNode }> = ({
  children,
  title,
}) => {
  return (
    <SiteWrapper>
      <Header>
        <h1>{title}</h1>
      </Header>
      <Main>{children}</Main>
    </SiteWrapper>
  );
};
