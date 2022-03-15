import React from 'react'
import Earth from "./Earth"
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import TopSection from "./TopSection";
import { YoutubeEmbed } from './Youtube';


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
              {/* <div style={{ display: 'flex', justifyContent: 'center', marginTop: '6rem'}}>
                  <YoutubeEmbed embedId="SSo_EIwHSd4" />
              </div> */}
        </CanvasContainer>
        
    
   
    
  )
}

export default LandingPage;