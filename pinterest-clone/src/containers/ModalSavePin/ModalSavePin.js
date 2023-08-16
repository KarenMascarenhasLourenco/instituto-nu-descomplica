import { useEffect, useState } from 'react'
import Modal from '../../components/Modal/Modal'
import { useAppContext } from '../../store/AppContext'
import { 
  fetchFoldersAction, 
  closeModalsAction, 
  openModalCreateFolderAction,
  savePinInFolderAction

} from '../../store/Action'
import Button from '../../components/Button/Button'
import './ModalSavePin.css'

const ModalSavePin = ({ isOpen }) => {
  const { state,  dispatch } = useAppContext()
  const [ itensLoading, setItensLoading ] = useState({})
  const handleClose = () =>{
    dispatch(closeModalsAction())
  }

  const handleClickCreateFolder= ()=>{
    dispatch(openModalCreateFolderAction())
  }

  const handleClick = async (folderId)=>{

    setItensLoading((prevState)=>{
      return {
       ...prevState,
       [folderId]: true,
      };
    })

    await savePinInFolderAction(dispatch, state.activePinId, folderId)
    
   setItensLoading((prevState) => {
    return {
     ...prevState,
     [folderId]: false,
    };
   });
  }
  const foldersNormalized = state.folders.map( folder => {
    return({
      ...folder,
      saved: folder.pins.includes(state.activePinId)
    })
  })

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
     {foldersNormalized.map((folder, folderIndex) => (
    
       <li key={folderIndex}>
        {folder.name}
        <Button
         label={folder.saved === false ? 'Salvar' : 'Salvo'}
         loadinglabel="Salvando"
         onClick={() => handleClick(folder.id)}
         disabled={folder.saved}
         loading={itensLoading[folder.id]}
        />
       </li>
     ))}
    </ul>
   </Modal>
  );
}
export default ModalSavePin
