import React, { useState } from 'react'
import Modal from 'react-modal';
import Rat from './Rat';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');


const Addmovies = ({add}) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [posterURL, setPosterURL] = useState('')
    const [description, setDescription] = useState('')
    const [rating, setRating] = useState(1)
    function openModal() {
        setIsOpen(true);
      }
      function closeModal() {
        setIsOpen(false);
      }
      const handleRating=(x)=>setRating(x)
      const reset=()=>{
        setTitle('');
        setDate('');
        setDescription('');
        setPosterURL('');
        setRating(1)
      }
      const handleSubmit =(e)=>{
        e.preventDefault();
        const newMovie={
          id:Math.random(),
          title,
          date,
          posterURL,
          description,
          rating,
        }
        add(newMovie);
        reset();
        closeModal();
      }
    
    return (
    <div> <button className="btn add-movie-btn" onClick={openModal}>Add movie</button>
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
        <form onSubmit={handleSubmit} action=''> 
        <label htmlFor=''> Movie title </label>
        <input required type='text' value={title} onChange={(e)=>setTitle(e.target.value)}/> 
        <label htmlFor=''> Release date </label>
        <input required type='date'value={date}onChange={(e)=>setDate(e.target.value)}/> 
        <label htmlFor=''>Rating</label>
        <Rat rating={rating} handleRating={handleRating}/>
        <label htmlFor=''> Movie poster </label>
        <input required type='url'value={posterURL}onChange={(e)=>setPosterURL(e.target.value)}/> 
        <button className="btn btn-primary" type="submit" > confirm</button>
        <button className="btn btn-danger" onClick={closeModal}> concel </button>
    </form>
    </Modal>
   
    </div>
  )
}

export default Addmovies