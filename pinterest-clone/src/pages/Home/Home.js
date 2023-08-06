import React from "react";
import { PinCard } from "../../components/PinCard/PinCard";
import ModalSavePin from "../../containers/ModalSavePin/ModalSavePin";
import ModalCreateFolder from "../../containers/ModalCreateFolder/ModalCreateFolder";
import Alert from "../../components/Alert/Alert";
export const Home = () => {
 return (
  <>
   <ModalCreateFolder isOpen={false}></ModalCreateFolder>
   <PinCard title="title" total={9} image="bhb" />
   <Alert message="pasta criada com sucesso" />
  </>
 );
};

export default Home;
