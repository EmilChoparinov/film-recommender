import { IRating } from "../interfaces/rating.interface";
import { IUser } from "../interfaces/user.interface";
import { IFilm } from "../interfaces/film.interface";

export class Rating implements IRating {
    rater: IUser;
    ratedFilm: IFilm;
    ratedValue: number;
}