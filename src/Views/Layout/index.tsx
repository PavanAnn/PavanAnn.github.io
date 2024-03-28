import React from 'react';
import { Outlet } from 'react-router-dom';
import { MainLayoutContainer, Container, ContentWrapper } from './styles';


const MainLayout = () => {


    return (
        <MainLayoutContainer>
            <Container>
                <ContentWrapper>
                <Outlet />
                </ContentWrapper>
            </Container>
      </MainLayoutContainer>
  );
};

export default MainLayout;
