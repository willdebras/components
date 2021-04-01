import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    borderThick: 1,
    height:24,
    paddingLeft:24

  },
  large: {
    fontSize: 18,
    iconSize: 24,
    borderThick: 2,
    height:36,
    paddingLeft:36

  }
}

const IconInput = ({
  label,
  icon,
  width = 150,
  size,
  ...delegated
}) => {

  const styles = STYLES[size];

  return (
    <Wrapper>
      <VisuallyHidden>
        {label}
      </VisuallyHidden>
      <IconWrap style={{'--size': styles.iconSize + 'px'}}>
      <Icon id={icon} size={styles.iconSize}/>
      </IconWrap>
      <InputComp {...delegated} 
      style={{
        '--width': width + 'px',
        '--height': styles.height + 'px',
        '--border-thickness': styles.borderThick + 'px',
        '--font-size':styles.fontSize + 'px',
        '--padding': styles.paddingLeft + 'px'
        }} 
        />
    </Wrapper>

  )
  
  
};

const Wrapper = styled.label`
display:block;
position:relative;
color:${COLORS.gray700};
font-weight:700;

&:hover {
  color:${COLORS.black};

}

`

const IconWrap = styled.div`
position:absolute;
top:0;
bottom:0;
margin:auto 0;
height: var(--size);

`

const InputComp = styled.input`
width:var(--width);
height:var(--height);
font-size:var(--font-size);
border:none;
border-bottom: var(--border-thickness) solid ${COLORS.black};
padding-left:var(--padding);
color:inherit;
outline-offset:2px;
font-weight:inherit;

&::placeholder {
  color:${COLORS.gray500};
  font-weight:400;
}

`

export default IconInput;
