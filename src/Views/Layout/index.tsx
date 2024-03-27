import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { MainLayoutContainer, Container, Footer, Sidebar, ContentWrapper } from './styles';
import Navbar from '../Navbar';


const MainLayout = () => {

    const location = useLocation()

    return (
        <MainLayoutContainer>
            
            <Navbar />
            <Container>
                {location.pathname != '/' && 
                    <Sidebar>
                        aaa
                    </Sidebar>
                }
                <ContentWrapper>
                <Outlet />
                </ContentWrapper>
            </Container>
            <Footer>
                <p>&copy; 2023 Your Website</p>
            </Footer>
      </MainLayoutContainer>
  );
};

export default MainLayout;
