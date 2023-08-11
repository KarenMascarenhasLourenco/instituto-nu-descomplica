import React from 'react'
import Modal from '../../components/Modal/Modal'
import { useAppContext } from '../../store/AppContext'

const ModalSavePin = ({ isOpen }) => {
  const { dispatch } = useAppContext()
  const handleClose = () =>{
    console.log('to fecahndooooooo')
    dispatch({
      type:'close modals'
    })
  }

  return (
    <Modal
      title='Salvar Pin'
      isOpen={isOpen}
      className='modal-content'
      overlayClassName='modal-overlay'
      handleClose={handleClose}
      controls={[
        {
          label: 'Criar pastas',
          onClick: () => {
            console.log('criou pasta')
          },
          loading: false,
          loadinglabel: 'Salvando pin',
          disable: 'disable'
        }
      ]}
    />
  )
}
export default ModalSavePin
