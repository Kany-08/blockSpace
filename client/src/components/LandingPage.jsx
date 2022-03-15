import React from 'react'
import Earth from "./Earth"
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import TopSection from "./TopSection";


const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const LandingPage = () => {
  return (
    
       <CanvasContainer className="gradient-bg-welcome">
              <TopSection />
              <Canvas style={{
              height: "56.5vh"
              }}>
                <Suspense fallback={null}>
                  
                  <Earth /> 
                  
                </Suspense>
              </Canvas>
        </CanvasContainer>
        
    
   
    
  )
}

export default LandingPage;