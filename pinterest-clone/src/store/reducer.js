import * as types from './Types';

export function reducer(state, action) {
 switch (action.type) {
  case types.openModalSavePinType:
   return {
    ...state,
    type:types.openModalSavePinType,
    mode: "savePin",
    activePinId: action.payload,
   };
  case types.openModalCreateFolderType:
   return {
    ...state,
    type: types.openModalCreateFolderType,
    mode: "createFolder",
   };
  case types.closeModalsType:
   return {
    ...state,
    type: types.closeModalsType,
    mode: null,
   };
  //----------
  case types.fetchFoldersSucessType:
   return {
    ...state,
    type: types.fetchFoldersSucessType,
    folders: action.payload,
   };
  case types.fetchFoldersInitType:
   return {
    ...state,
    type: types.fetchFoldersInitType,
   };
  case types.saveFolderSucessType:
   return {
    ...state,
    type: types.saveFolderSucessType,
    folders: [...state.folders, action.payload],
   };
  default:
   return {
    ...state,
    type:action.type
   };
 }
}
