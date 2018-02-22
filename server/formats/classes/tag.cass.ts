import { ITag } from "../interfaces/tag.interface";
import { IFilm } from "../interfaces/film.interface";

export class Tag implements ITag {
    name: string;
    taggedFilms: IFilm[];
}