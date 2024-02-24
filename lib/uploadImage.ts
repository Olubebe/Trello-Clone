import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
  if (!file) return;

  const fileUploaded = await storage.createFile(
    "65ced552cc526fcc49ee",
    ID.unique(),
    file
  );
  return fileUploaded;
};

export default uploadImage;
