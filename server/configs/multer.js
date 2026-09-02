import multer from "multer";
//Files ko disk/server storage par temporarily save karne ke liye storage configuration banata hai. {} ka matlab default settings.
const storage = multer.diskStorage({}); 
//Multer ko storage ke saath configure karke upload middleware banata hai.
export const upload = multer({storage})

// User file upload
//       ↓
//     Multer
//       ↓
// Temporary server storage
//       ↓
// Cloudinary / processing