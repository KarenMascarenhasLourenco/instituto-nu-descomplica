import React from 'react'
import './Modal.css'
import ReactModal from 'react-modal'
import Button from '../Button/Button'

ReactModal.setAppElement('#root')
export const Modal = ({ isOpen,  title, children, controls = [], handleClose }) => {
  return (
   <ReactModal
    isOpen={isOpen}
    className="modal-content"
    overlayClassName="modal-overlay"
    onRequestClose={handleClose}
   >
    <section>
     <div className="modal-header">
      <h2>{title}</h2>
      <button className="button" onClick={handleClose}>
       X
      </button>
     </div>
     <hr />
     {children}
     {controls.map((control, controlIndex) => (
      <Button key={controlIndex} {...control} />
     ))}
    </section>
   </ReactModal>
  );
}

export default Modal
