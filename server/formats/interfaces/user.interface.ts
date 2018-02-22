import { IFilm } from "./film.interface";
import { IRating } from "./rating.interface";

export interface IUser {
    level: number;
    submissions: Array<IFilm>
    viewedFilms: Array<IFilm>;
    username: string;
    password: string;
    email: string;
    likedFilms: Array<IFilm>;
    favoritedFilms: Array<IFilm>;
    ratedFilms: Array<IFilm>;
    ratingsDone: Array<IRating>;
}