
import CardDisplay from './CardDisplay';
import CardForm from './CardForm';
import Completed from './Completed';
import Attribution from './Attribution';
import { useState } from 'react';

function App() {

  const [submitted, setSubmitted] = useState(false);
  const [cardInfo, setCardInfo] = useState({ name: 'Jane Appleseed', number: '1234 5678 9123 0000', expM: 'MM', expY: 'YY', cvv: '123' });
  const handleChange = (e) => {
    const changedField = e.target.name;
    const newVal = e.target.value;
    setCardInfo((c) => {
      return {
        ...c,
        [changedField]: newVal,
      }
    })
  }
  return (
    <>
      <CardDisplay cardInfo={cardInfo} />

      {!submitted ? <CardForm func={() => setSubmitted((s) => !s)} cardInfo={cardInfo} setCardInfo = {setCardInfo} /> : <Completed func={() => setSubmitted((s) => !s)} />}


      <Attribution />
    </>
  )
}

export default App
