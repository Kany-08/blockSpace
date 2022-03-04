import React from 'react'
import Earth from "./Earth"
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Navbar, Footer} from "./"

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const LandingPage = () => {
  return (
    
       <CanvasContainer className="gradient-bg-welcome">
              {/* <Navbar style={{height: 150}}/> */}
              <Canvas style={{height: 433}}>
                <Suspense fallback={null}>
                  
                  <Earth />
                  
                </Suspense>
              </Canvas>
              {/* carousel component */}
              {/* <Footer style={{height: 150}}/> */}
            </CanvasContainer>
    
   
    
  )
}

export default LandingPage;