import express from "express"
// import express framework
import { addFood, listFood, removeFood} from "../controllers/foodController.js"
//-----------------------------Imports three functions
import multer from "multer"
//--------------Imports  multer middleware for handling file uploads

const foodRouter = express.Router();
//Creates an Express router instance for handling routes related to food items.

const storage = multer.diskStorage({
    destination:"uploads",
    filename: (req,file,callback)=>{
      return callback(null,`${Date.now}()${file.originalname}`)
    }
})
//---------------------- image Storage Engine
const upload = multer({storage:storage})

foodRouter.post("/add",upload.single("image"),addFood)
//-----------route that listens for POST requests
foodRouter.get("/list",listFood)
//--------------route that listens for GET requests
foodRouter.post("/remove",removeFood);
//--------------route that listens for remove requests

export default foodRouter;