
import CardDisplay from './CardDisplay';
import CardForm from './CardForm';
import Completed from './Completed';
import Attribution from './Attribution';
import { useState } from 'react';

function App() {

  const [submitted, setSubmitted] = useState(false);
  const [cardInfo, setCardInfo] = useState({ name: '', number: '', expM: '', expY: '', cvv: '123' });

  return (
    <div className='App'>

      <CardDisplay cardInfo={cardInfo} />

      {!submitted ? <CardForm func={() => setSubmitted((s) => !s)} cardInfo={cardInfo} setCardInfo={setCardInfo} /> : <Completed func={() => setSubmitted((s) => !s)} />}


      {/* <Attribution /> */}
    </div>
  )
}

export default App
