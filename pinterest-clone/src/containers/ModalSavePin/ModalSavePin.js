import { useEffect } from 'react'
import Modal from '../../components/Modal/Modal'
import { useAppContext } from '../../store/AppContext'
import { fetchFoldersAction, closeModalsAction, openModalCreateFolderAction } from '../../store/Action'
import Button from '../../components/Button/Button'
import './ModalSavePin.css'

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
    <ul className="folderList">
     {state.folders.map((folder, folderIndex) => (
      <>
       <li key={folderIndex}>
        {folder.name}
        <Button label="Salvar" loadinglabel="Salvando" loading={false} />
       </li>
       <hr/>
      </>
     ))}
    </ul>
   </Modal>
  );
}
export default ModalSavePin
