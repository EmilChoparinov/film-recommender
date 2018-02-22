import { IFilm } from "./film.interface";

export interface ITag {
    name: string;
    taggedFilms: Array<IFilm>;
}