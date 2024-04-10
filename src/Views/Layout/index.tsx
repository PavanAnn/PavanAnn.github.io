import React from 'react';
import { Outlet } from 'react-router-dom';
import { MouseTrail, StarField } from 'retro-react';


const MainLayout = () => {


    return (
        <div style={{ position: 'relative', minHeight: '100vh' }}>
            <StarField
                style={{ height: '100vh' }}
                numStars={100}
                size={2}
                speed={1}
                starColor="white"
            />
            <MouseTrail
    offset={{
      x: 0,
      y: 0
    }}
    particleColor="rainbow"
    particleSize={10}
  />
                <Outlet />
      </div>
  );
};

export default MainLayout;
