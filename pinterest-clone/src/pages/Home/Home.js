import React from 'react'
import ModalCreateFolder from '../../containers/ModalCreateFolder/ModalCreateFolder'
import Alert from '../../components/Alert/Alert'
import Card from '../../containers/CardContainer/Card'
import { useAppContext } from '../../store/AppContext'
import ModalSavePin from '../../containers/ModalSavePin/ModalSavePin'
export const Home = () => {
  const { state} = useAppContext()
  return (
    <>
      <ModalCreateFolder isOpen={state.mode ==='createFolder'}/>
      <ModalSavePin isOpen={state.mode ==='savePin'} />
      <Card title='title' total={9} image='bhb' />
      <Alert message='pasta criada com sucesso' />
    </>
  )
}

export default Home
