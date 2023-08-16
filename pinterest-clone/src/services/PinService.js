const generateId = () => {
 return `${Math.floor(Math.random() * 100_000).toString(16)}-${Math.floor(
  Math.random() * 100_000
 ).toString(16)}`;
};
export const getFolders = async () => {
 return JSON.parse(localStorage.getItem("folders")) || [];
};

const saveFolders = async (folders) => {
 localStorage.setItem("folders", JSON.stringify(folders));
};

export const saveFolder = async (folderName) => {
 const folders = await getFolders();

 const newFolder = {
  id: generateId(),
  name: folderName,
  pins: [],
 };
 
 folders.push(newFolder);

 await saveFolders(folders);

 return newFolder;
};

export const savePin = async (folderId, pinId) => {
 const folders = await getFolders();

 const folderIndex = folders.findIndex((f) => f.id === folderId);
 folderIndex !== -1
  ? folders[folderIndex].pins.push(pinId)
  : console.log("pasta não encontrada");

 localStorage.setItem("folders", JSON.stringify(folders));
 return { ...folders[folderIndex] };
};
