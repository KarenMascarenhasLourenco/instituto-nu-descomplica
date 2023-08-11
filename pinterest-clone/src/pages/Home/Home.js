import React from 'react'
import { PinCard } from '../../components/PinCard/PinCard'
import ModalCreateFolder from '../../containers/ModalCreateFolder/ModalCreateFolder'
import Alert from '../../components/Alert/Alert'
import { useAppContext } from '../../store/AppContext'
export const Home = () => {
  const value = useAppContext()
  return (
    <>
      <ModalCreateFolder isOpen={false} />
      <PinCard title='title' total={9} image='bhb' />
      <Alert message='pasta criada com sucesso' />
    </>
  )
}

export default Home
