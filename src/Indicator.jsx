import React from 'react';
import styled from 'styled-components';

const IndicatorWrapper = styled.div`
 display: flex;
 justify-content: flex-start;
 margin-top: 16px;
`;

const Dot = styled.span`
 margin: 0 4px;
 width: 12px;
 height: 12px;
 border-radius: 50%;
 background-color: ${(props) => (props.active ? '#ff00ff' : '#ccc')};
 cursor: pointer;
`;

const Indicator = ({ totalSteps, currentStep, onDotClick }) => {
 return (
   <IndicatorWrapper>
     {Array.from({ length: totalSteps }).map((_, index) => (
       <Dot key={index} active={index === currentStep} onClick={() => onDotClick(index)} />
     ))}
   </IndicatorWrapper>
 );
};

export default Indicator;
