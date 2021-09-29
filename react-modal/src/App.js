import { useState } from 'react';
import Modal from './components/Modal';
function App() {
  const [showModal, setshowModal] = useState(false)

  const toggleModal = () => setshowModal(prev => !prev);
  return (
    <div>
      <button onClick={toggleModal}> Click Me </button>
      {showModal && <Modal showModal={showModal} toggleModal={toggleModal} />}
    </div>
  );
}

export default App;
