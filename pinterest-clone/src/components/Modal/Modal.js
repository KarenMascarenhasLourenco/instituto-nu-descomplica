import React from 'react'
import './Modal.css'
import ReactModal from 'react-modal'
import ButtonAction from '../ButtonAction/ButtonAction'

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
        <select>
          <option value='opção1'>Opção 1</option>
          <option value='opção1'>Opção 1</option>
          <option value='opção1'>Opção 1</option>
        </select>
        {controls.map((control, controlIndex) => (
          <ButtonAction key={controlIndex} onClick={control.onClick.bind(control)}>
            {control.label}
          </ButtonAction>
        ))}
        <form className='create-folder'>
          <input type='text' />
          <button className='button' onClick={onClose} type='button'>
            Criar pasta
          </button>
        </form>
      </section>
    </ReactModal>
  )
}

export default Modal
