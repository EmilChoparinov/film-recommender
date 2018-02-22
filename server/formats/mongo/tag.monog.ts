import { Document } from "mongoose";
import { ITag } from "../interfaces/tag.interface";

export interface ITagModel extends ITag, Document {

}