import express from "express"
//Import express framework
import { addToCart,removeFromCart,getCart } from "../controllers/cartController"
// import three functions

const cartRouter =express.Router();
//create new router to define routes to the shopping cart

cartRouter.post("/add", addToCart)
//add items to the shopping cart
cartRouter.post("/remove", removeFromCart)
//remove items from the shopping cart
cartRouter.post("/get", getCart)
//retrieve the current contents of the shopping cart

export default cartRouter;