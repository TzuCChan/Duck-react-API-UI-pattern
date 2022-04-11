import { useState } from 'react';
import  { duckFacts } from './duckfact.js';
import Modal from './Modal.jsx';

function Home({duckIds}) {
  const [ duckPhoto, setDuckPhoto ] = useState("")
  const [duckFact, setDuckFact] = useState("")
  const [ showModal, setShowModal ] = useState(false)

  const toggleModal = (duckInfo, duckFact,) => {
    setDuckPhoto(duckInfo);
    setDuckFact(duckFact);
    setShowModal(prev => !prev);
  }

  let displayDucks = () => {
    let results = []

    for (let i = 0; i < 10 ;i++){
      results.push(
        <div key={i}>
            <img onClick={() => toggleModal(duckIds[i], duckFacts[i])} className="duckpic" alt="duck facts" src={`https://random-d.uk/api/v2/${duckIds[i]}`}/>
        </div>
      )
    }

    return results
  }

  return (
    <div>
      <h1>View our beautiful duck 🐥</h1>
        <div className="duckContainer">
          {displayDucks()}
        </div>
         {showModal ? <Modal duckPhoto={duckPhoto} duckFact={duckFact} setShowModal={setShowModal}/> :null}
    </div>
  )
}

export default Home;