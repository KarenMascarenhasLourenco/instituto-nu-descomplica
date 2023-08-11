import React, { useState } from 'react'
import Modal from '../../components/Modal/Modal'
import './ModalCreateFolder.css'

const ModalCreateFolder = ({ isOpen }) => {
  const [folderName, setFolderName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('criando...', folderName)
  }
  const handleChange = (e) => {
    setFolderName(e.target.value)
  }
  return (
    <Modal
      title='Criar e Salvar'
      isOpen={isOpen}
      controls={[
        {
          label: 'Criar e salvar',
          loadinglabel: 'salvando...',
          type: 'submit',
          form: 'form-criar-pasta'
        }
      ]}
    >
      <form onSubmit={handleSubmit} id='form-criar-pasta'>
        <label>Nome da pasta</label>
        <input type='text' placeholder='ex.: matemática' value={folderName} onChange={handleChange} />
      </form>
    </Modal>
  )
}
export default ModalCreateFolder
