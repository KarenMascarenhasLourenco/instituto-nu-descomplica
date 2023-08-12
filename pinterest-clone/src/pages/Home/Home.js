import { useState, useEffect } from 'react'
import ModalCreateFolder from '../../containers/ModalCreateFolder/ModalCreateFolder'
import Alert from '../../components/Alert/Alert'
import Card from '../../containers/CardContainer/Card'
import { useAppContext } from '../../store/AppContext'
import { saveFolderSucessType } from '../../store/Types'
import ModalSavePin from '../../containers/ModalSavePin/ModalSavePin'
export const Home = () => {
  const { state} = useAppContext()
  const [showFeedback, setShowFeedback]= useState('')
  
  useEffect(() => {
    if(state.type === saveFolderSucessType){
      setShowFeedback('')
    }
  },[state.type])

  return (
   <>
    {console.log(state.type === saveFolderSucessType, state.type)}
    <ModalCreateFolder isOpen={state.mode === "createFolder"} />
    <ModalSavePin isOpen={state.mode === "savePin"} />
    <Card pinId='123' title="title" total={9} image="bhb" />
    {state.type === saveFolderSucessType && (
     <Alert
      feedback={showFeedback}
      message="pasta criada com sucesso"
      onClose={() => setShowFeedback("lido")}
     />
    )}
   </>
  );
}

export default Home
