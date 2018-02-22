import { IRating } from "../interfaces/rating.interface";
import { Document } from "mongoose";

export interface IRatingModel extends IRating, Document {

}