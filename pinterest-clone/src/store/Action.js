import * as types from './Types';
import * as pinService from '../services/PinService';

const sleep = (time) => 
  new Promise(resolve => {
    setTimeout(resolve, time)
  })


export const openModalSavePinAction = (pinId) => ({
  type:types.openModalSavePinType,
  payload:pinId,
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

export const fetchFoldersSucessAction = (folders) => ({
  type: types.fetchFoldersSucessType,
  payload: folders
})

export const fetchFoldersAction = async (dispatch) =>{
  dispatch(fetchFolderInitAction)
  const folders = await pinService.getFolders()
  dispatch(fetchFoldersSucessAction(folders))
}

//-------------

export const saveFolderInitAction = () => ({
 type: types.saveFolderInitType,
});

export const saveFolderSucessAction = (folder) => ({
 type: types.saveFolderSucessType,
 payload: folder,
});

export const savePinInFolder = (dispatch, folderId,pinId) => {
  console.log(pinId, folderId)
}

export const saveFolderAction = async (dispatch, folderName) => {
 dispatch(saveFolderInitAction());
 await sleep(1500);
 const newFolder = await pinService.saveFolder(folderName)
 dispatch(saveFolderSucessAction(newFolder))
};

//----------------------------------------------------------------
export const savePinInFolderInitAction = () => ({
 type: types.savePinInFolderInitType,
});

export const savePinInFolderSucessAction = () => ({
 type: types.savePinInFolderSucessType,

});
