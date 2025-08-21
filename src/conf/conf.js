const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_PROJECT_ID),
    appwriteDatabase_Id: String(import.meta.env.VITE_DATABASE_ID),
    appwriteCollection_Id: String(import.meta.env.VITE_COLLECTION_ID),
    appwriteBucket_Id: String(import.meta.env.VITE_BUCKET_ID),
}


export default conf;