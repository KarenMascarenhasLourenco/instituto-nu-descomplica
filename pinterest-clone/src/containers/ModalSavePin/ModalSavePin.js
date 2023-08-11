import React from 'react'
import Modal from '../../components/Modal/Modal'

const ModalSavePin = ({ isOpen }) => {
  return (
    <Modal
      title='Salvar Pin'
      isOpen={isOpen}
      className='modal-content'
      overlayClassName='modal-overlay'
      controls={[
        {
          label: 'Criar pastas',
          onClick: () => {
            console.log('criou pasta')
          },
          loading: true,
          loadinglabel: 'Salvando pin',
          disable: false
        }
      ]}
    />
  )
}
export default ModalSavePin
