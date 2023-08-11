import * as types from './Types';
import * as pinService from '../services/PinService';

export const openModalSavePinAction = () => ({
  type:types.openModalSavePinType
})

export const closeModalsAction = () => ({
  type:types.closeModalsType
})

export const openModalCreateFolderAction = () => ({
  type:types.openModalCreateFolderType
})


export const fetchFolderInitAction = () => ({
  type: types.fetchFoldersInitType
})

export const fetchFolderSucessAction = (folders) => ({
  type: types.fetchFoldersSucessType,
  payload: folders
})

export const fetchFoldersAction = async (dispatch) =>{
  dispatch(fetchFolderInitAction)
  const folders = await pinService.getFolders()
  dispatch(fetchFolderSucessAction(folders))
  return{
    type:types.fetchFoldersType
  }
}