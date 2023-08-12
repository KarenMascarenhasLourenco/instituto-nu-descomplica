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
    mode: null,
   };
  //----------
  case types.fetchFoldersSucessType:
   return {
    ...state,
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
    folders: [...state.folders, action.payload],
   };
  default:
   return {
    ...state,
    type:action.type
   };
 }
}
