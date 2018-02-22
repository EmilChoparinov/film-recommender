import { IFilm } from "./film.interface";
import { IUser } from "./user.interface";

export interface IRating {
    rater: IUser;
    ratedFilm: IFilm;
    ratedValue: number
}