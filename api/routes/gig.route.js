import express from 'express';
import { createGig,deleteGig,getGig,getGigs } from '../controller/gig.controller.js';
import {verifyToken} from '../middleware/jwt.js'
const router = express.Router();

router.post("/create",verifyToken ,createGig)
router.delete("/gig/:id", verifyToken,deleteGig)
router.get("/single/:id",getGig)   
router.get("/allgigs",getGigs)   


export default router;
