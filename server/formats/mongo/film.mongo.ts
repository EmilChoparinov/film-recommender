import { IFilm } from "../interfaces/film.interface";
import { Document } from "mongoose";

export interface IFilmModel extends IFilm, Document {
}