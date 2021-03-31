import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (

    <Wrapper>
    <NativeSelect value={value} onChange={onChange}>
      {children}
    </NativeSelect>

    <PresText>
      {displayedValue}
      <IconWrapper style={{'--size': 24 + 'px'}}>
      <Icon id="chevron-down" strokeWidth={1} size = {24}></Icon>
      </IconWrapper>
    </PresText>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position:relative;
  width:max-content;
  isolation:isolate;
`

const NativeSelect = styled.select`
  position:absolute;
  left:0;
  top:0;
  width:100%;
  height:100%;
  opacity:0;
  z-index:2;

  
`

const PresText = styled.div`
background-color:${COLORS.transparentGray15};
color:${COLORS.gray700};
z-index:1;
font-size: 1rem;
padding:12px 16px;
padding-right:52px;
border-radius:8px;
/*hack from Josh on setting the outline to the browser focus color*/
${NativeSelect}:focus + & {
 
  outline: 1px dotted #212121;
  outline:5px auto -webkit-focus-ring-color;
}

${NativeSelect}:hover + & {
  color:black;
}

`

const IconWrapper = styled.div`
position:absolute;
top:0;
right:10px;
bottom:0;
margin:auto;
height: var(--size);
width: var(--size);
/* could use pointer-events:none; so it cant be clicked on despite being in front*/
`

export default Select;
