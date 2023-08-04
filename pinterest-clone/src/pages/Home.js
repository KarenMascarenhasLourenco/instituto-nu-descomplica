import React from 'react'
import { PinCard } from '../components/PinCard/PinCard'
import Modal from '../components/Modal/Modal'
export const Home = () => {
  return (
    <>
      <Modal
        isOpen
        title='Salvar Pin'
        controls={[
          {
            label: 'Criar Pasta',
            onClick: () => { console.log('clicou em salvar pasta') }
          },
          {
            label: 'Salvar Pin',
            onClick: () => { console.log('clicou em salvar pin') }
          }
        ]}
      >
        <p>Home</p>
      </Modal>
      <PinCard title='title' total={9} image='bhb' />
    </>
  )
}

export default Home
