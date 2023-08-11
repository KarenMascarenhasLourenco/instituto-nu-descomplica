import { useEffect } from 'react'
import Modal from '../../components/Modal/Modal'
import { useAppContext } from '../../store/AppContext'
import { fetchFoldersAction, closeModalsAction, openModalCreateFolderAction } from '../../store/Action'
const ModalSavePin = ({ isOpen }) => {
  const { state,  dispatch } = useAppContext()
  const handleClose = () =>{
    console.log('to fecahndooooooo')
    dispatch(closeModalsAction())
  }
  const handleClickCreateFolder= ()=>{
    console.log('criando pastaaaa')
    dispatch(openModalCreateFolderAction())
  }
  useEffect(()=>{
    fetchFoldersAction(dispatch)
  },[])
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
          onClick: handleClickCreateFolder,
          loading: false,
          loadinglabel: 'Salvando pin',
          disable: 'disable'
        }
      ]}
    >
      {console.log(state.folders)}
    </Modal>
  )
}
export default ModalSavePin
