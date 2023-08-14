import { useEffect } from 'react'
import Modal from '../../components/Modal/Modal'
import { useAppContext } from '../../store/AppContext'
import { fetchFoldersAction, closeModalsAction, openModalCreateFolderAction } from '../../store/Action'
import Button from '../../components/Button/Button'

const ModalSavePin = ({ isOpen }) => {
  const { state,  dispatch } = useAppContext()

  const handleClose = () =>{
    dispatch(closeModalsAction())
  }

  const handleClickCreateFolder= ()=>{
    dispatch(openModalCreateFolderAction())
  }

  useEffect(() => {
    fetchFoldersAction(dispatch)
  },[])

  return (
   <Modal
    title="Salvar Pin"
    isOpen={isOpen}
    className="modal-content"
    overlayClassName="modal-overlay"
    handleClose={handleClose}
    controls={[
     {
      label: "Criar pastas",
      onClick: handleClickCreateFolder,
      loading: false,
      loadinglabel: "criando",
      disable: "disable",
     },
    ]}
   >
    <select>
     {state.folders.map((folder, folderIndex) => (
      <>
       <option key={folderIndex}>{folder.name}</option>
       <Button></Button>
      </>
     ))}
    </select>
   </Modal>
  );
}
export default ModalSavePin
