// export function setupCounter(element) {
//   let counter = 0
//   const setCounter = (count) => {
//     counter = count
//     element.innerHTML = `count is ${counter}`
//   }
//   element.addEventListener('click', () => setCounter(++counter))
//   setCounter(0)
// }
import React from 'react';
import './index.css';
import RegisterForm from './components/RegisterForm';

const App = () => {
  return (
    <div>
      <h1>Boda Emergency & Tracking App</h1>
      <RegisterForm />
    </div>
  );
};

export default App;