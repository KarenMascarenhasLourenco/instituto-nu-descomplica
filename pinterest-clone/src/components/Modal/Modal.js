import React from 'react'
import './Modal.css'

export const Modal = () => {
  return (
    <section>
      <div>
        <h2>Título do modal</h2>
        <button>X</button>
        <hr />
        <select>
          <option value='opção1'>Opção 1</option>
          <option value='opção1'>Opção 1</option>
          <option value='opção1'>Opção 1</option>
        </select>
        <form>
          <input type='text' />
          <button type='button'>Criar pasta</button>
        </form>
      </div>
    </section>
  )
}

export default Modal
