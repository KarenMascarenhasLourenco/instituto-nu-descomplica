import { useState, useEffect } from 'react'
import Modal from '../../components/Modal/Modal'
import './ModalCreateFolder.css'
import { useAppContext } from '../../store/AppContext'
import { closeModalsAction, saveFolderAction } from '../../store/Action'
import { saveFolderInitType, saveFolderSucessType } from '../../store/Types'
const ModalCreateFolder = ({ isOpen }) => {
  const { state, dispatch } = useAppContext()
  const [folderName, setFolderName] = useState('')

  const handleClose = () => {
   dispatch(closeModalsAction());
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    saveFolderAction(dispatch,folderName)
    
  }
  const handleChange = (e) => {
    setFolderName(e.target.value)
  }
  useEffect(() => {
   if (state.type === saveFolderSucessType) {
    handleClose()
   }
  }, [state.type]);

  return (
   <Modal
    title="Criar e Salvar"
    isOpen={isOpen}
    handleClose={handleClose}
    controls={[
     {
      label: "Criar e salvar",
      loadinglabel: "salvando...",
      type: "submit",
      form: "form-criar-pasta",
      loading: state.type === saveFolderInitType,
     },
    ]}
   >
    <form onSubmit={handleSubmit} id="form-criar-pasta">
     <label>Nome da pasta</label>
     <input
      type="text"
      placeholder="ex.: matemática"
      value={folderName}
      onChange={handleChange}
     />
    </form>
   </Modal>
  );
}
export default ModalCreateFolder
