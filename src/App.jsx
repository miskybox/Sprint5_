import React from 'react';
import Card from './Card';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './assets/time_managment.svg';
import img2 from './assets/programming.svg';
import img3 from './assets/meditation.svg';

const tutorialData = [
  {
    title: 'Dedica moltes hores',
    description: 'Un mínim de 30 hores. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament.',
    bgColor: '#E0F6A1',
    image: img1,
  },
  {
    title: 'Programa projectes propis',
    description: "Més val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.",
    bgColor: '#A1B7F6',
    image: img2,
  },
  {
    title: 'Procura descansar',
    description: "Descansar bé i desconnectar són vitals. D'aquesta maneraresduiràs l'estrès i l'ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge.",
    bgColor: '#F6A1E9',
    image: img3,
  },
];

const App = () => {
  const [step, setStep] = useState(0);
  const currentCardData = tutorialData[step];

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Card
        title={currentCardData.title}
        description={currentCardData.description}
        image={currentCardData.image}
        nextStep={nextStep}
        prevStep={prevStep}
        step={step}
        totalSteps={tutorialData.length}
        setStep={setStep}
        currentCardData={currentCardData}
      />
    </div>
  );
};

export default App;