import React from 'react'
import './Modal.css'
import ReactModal from 'react-modal'
import Button from '../Button/Button'

ReactModal.setAppElement('#root')
export const Modal = ({ isOpen, onClose, title, children, controls = [] }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className='modal-content'
      overlayClassName='modal-overlay'
    >
      <section>
        <div className='modal-header'>
          <h2>{title}</h2>
          <button className='button'>X</button>
        </div>
        <hr />
        {children}
        {controls.map((control, controlIndex) => (
          <Button
            key={controlIndex}
            {...control}
          />
        ))}
      </section>
    </ReactModal>
  )
}

export default Modal
