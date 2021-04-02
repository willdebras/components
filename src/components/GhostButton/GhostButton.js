import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants';

const SIZES = {
    small: {
      "--borderRadius": 4 + "px",
      "--fontSize": 16 / 16 + "rem",
      "--padding": "4px 12px",
      "--shadow-spread-x":"5px",
      "--shadow-spread-y":"6px"  
    },
    medium: {
      "--borderRadius": 6 + "px",
      "--fontSize": 18 / 16 + "rem",
      "--padding": "12px 20px",
      "--shadow-spread-x":"11px",
      "--shadow-spread-y":"12px"  
    },
    large: {
      "--borderRadius": 8 + "px",
      "--fontSize": 21 / 16 + "rem",
      "--padding": "16px 32px",
      "--shadow-spread-x":"13px",
      "--shadow-spread-y":"14px"  
    }
  };
  
  const GhostButton = ({size, children}) => {
    const styles = SIZES[size];
  

  
    return (

        <Wrapper>
        <ButtonElem style={styles}>{children}</ButtonElem>
        </Wrapper>

    )
    

  };
  
  const Wrapper= styled.div`
  `
  
  const ButtonElem = styled.button`
    font-size: var(--fontSize);
    font-family: "Roboto", sans-serif;
    padding: var(--padding);
    border-radius: var(--borderRadius);
    border: 2px solid ${COLORS.primaryNewline}; 
    color: ${COLORS.textNewline};
    background-color: white;
    box-shadow: var(--shadow-spread-x) var(--shadow-spread-y) 0px 0px ${COLORS.secondaryNewline}; 
  
    &:focus {
      outline-color:-webkit-focus-ring-color;
      outline-offset:2px;
      box-shadow: calc(var(--shadow-spread-x)/2) calc(var(--shadow-spread-y)/2) 0px 0px ${COLORS.secondaryNewline}; 
    }
    
    &:hover {
    background-color: ${COLORS.hoverNewline}; 
    }
  
  `;
  


export default GhostButton;


