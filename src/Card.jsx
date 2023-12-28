import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Indicator from './Indicator';

const MyCard = ({ title, description, image, nextStep, prevStep, step, totalSteps, currentCardData, setStep }) => {
 const handleDotClick = (index) => {
   if (index !== step) {
     setStep(index);
   }
 };

 return (
   <Card style={{ width: '18rem', margin: 'auto' }}>
     <div style={{ backgroundColor: currentCardData.bgColor, position: 'relative', height: '300px' }}>
       <Card.Img variant="top" src={image} alt={`Image ${step + 1}`} style={{ position: 'absolute', top: '0', left: '0' }} />
     </div>
     <Card.Body>
       <Card.Title>{title}</Card.Title>
       <Card.Text style={{ backgroundColor: '#F1DEF9' }}>{description}</Card.Text>
     </Card.Body>
     <Card.Footer style={{ display: 'flex', justifyContent: 'space-between' }}>
       <Indicator totalSteps={totalSteps} currentStep={step} onDotClick={handleDotClick} />
       <div>
         <Button variant="primary" onClick={prevStep} disabled={step === 0}>
           {"<<"}
         </Button>
         <Button variant="primary" onClick={nextStep} disabled={step === totalSteps - 1}>
           {">>"}
         </Button>
       </div>
     </Card.Footer>
   </Card>
 );
};
export default MyCard;


