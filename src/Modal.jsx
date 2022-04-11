
export default function Modal({duckPhoto, duckFact, setShowModal}) {
  return (
    <div className="modalBox">
    <div className="duckModal">
      <img src = {`https://random-d.uk/api/v2/${duckPhoto}`} alt="modal duck fact"/>
      <div>
        <h3>{duckFact.title}</h3>
          <p>{duckFact.description}</p>
          <span onClick = {() => setShowModal(false)}class="close">&times;</span>
      </div>
    </div>
   </div>
  )
}
