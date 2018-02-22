import { IUser } from "../interfaces/user.interface";
import { IFilm } from "../interfaces/film.interface";
import { IRating } from "../interfaces/rating.interface";

export class User implements IUser {
    ratedFilms: IFilm[];
    ratingsDone: IRating[];
    level: number;
    submissions: IFilm[];
    viewedFilms: IFilm[];
    username: string;
    password: string;
    email: string;
    likedFilms: IFilm[];
    favoritedFilms: IFilm[];
}