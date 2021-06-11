import React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

  
  const Typewriter = ({size, speed, bg, children}) => {

    const stylesParent = {"--bg-color": bg};

    const stylesBody = {
                    "--bg-color": bg,
                    "--fontSize": size + "px",
                    "--typewriterSpeed": speed + "s",
                    "--typewriterCharacters": children.length
                    }

  
    return (

        <Wrapper style={stylesParent}>
        <TypewriterBody style={stylesBody}>{children}</TypewriterBody>
        </Wrapper>

    )
    

  };

  const TypeWriterAnim = keyframes`
        to {
            left: 100%;
        }

  `;

  const BlinkAnim = keyframes`
  to {
    background: transparent;
  }
  `;

  
  const Wrapper= styled.div`
  background-color:var(--bg-color);
  `;
  
  const TypewriterBody = styled.div`
    font-size: var(--fontSize);
    font-family: "Roboto", sans-serif;
    background-color:var(--bg-color);
    //font-size: clamp(1rem, 3vw + 1rem, 4rem);
    position: relative;
    font-family: "Source Code Pro", monospace;
    position: relative;
    width: max-content;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }

    &::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }

    &::before {
        background: var(--bg-color);
        animation: ${TypeWriterAnim} var(--typewriterSpeed)
          steps(var(--typewriterCharacters)) 1s forwards;
      }

    &::after {
            width: 0.125em;
            background: black;
            animation: ${TypeWriterAnim} var(--typewriterSpeed)
              steps(var(--typewriterCharacters)) 1s forwards,
              ${BlinkAnim} 750ms steps(var(--typewriterCharacters)) infinite;
    }
  
  `;
  


export default Typewriter;


