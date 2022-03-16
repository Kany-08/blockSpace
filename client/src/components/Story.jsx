import React from 'react';
import { YoutubeEmbed } from '../components/Youtube';
import styled from 'styled-components';

const StoryContainer = styled.div`
  width: 80%;
  height: 100%;
  margin: 10px auto;
  display: flex;
  justify-items: center;
`;

const H1 = styled.h1 `
        margin-top: .5rem;
        margin-bottom: 1rem;
        font-family:  -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        font-weight: 500;
        line-height: 1.2;
        font-size: 2.5rem;
       ` 

const Story = () => {
  return (
    <StoryContainer>
    <div className='text-white' >
        <div style={{ textAlign: 'center' , marginTop: '5rem' , marginBottom: '5rem'}}>
            <H1>What is a Blockchain?</H1>
                <YoutubeEmbed embedId="SSo_EIwHSd4"  />
        </div>
        <div style={{ textAlign: 'center', marginTop: '5rem' , marginBottom: '5rem'}}>
            <H1>What solutions does Blockchain solve?</H1>
                <YoutubeEmbed embedId="aQWflNQuP_o"  />
        </div>
        <div style={{ textAlign: 'center', marginTop: '5rem' , marginBottom: '5rem'}}>
            <H1>What is a Smart Contract?</H1>
                <YoutubeEmbed embedId="ZE2HxTmxfrI"  />
        </div>
        <div style={{ textAlign: 'center', marginTop: '5rem' , marginBottom: '5rem'}}>
            <H1>What is a Token?</H1>
                <YoutubeEmbed embedId="cqZhNzZoMh8"  />
        </div>
        <div style={{ textAlign: 'center', marginTop: '5rem' , marginBottom: '5rem'}}>
            <H1>What is an NFT?</H1>
                <YoutubeEmbed embedId="FkUn86bH34M"  />
        </div>
        <div style={{ textAlign: 'center', marginTop: '5rem' , marginBottom: '5rem'}}>
            <H1>What is Metamask?</H1>
                <YoutubeEmbed embedId="byWul4xOBx0"  />
        </div>
        <div style={{ textAlign: 'center', marginTop: '5rem' , marginBottom: '5rem'}}>
            <H1>How to install and setup Metamask?</H1>
                <YoutubeEmbed embedId="ZIGUC9JAAw8"  />
        </div>
      
    </div>
    </StoryContainer>
  )
}

export default Story