import { IFilm } from "../interfaces/film.interface";
import { IRating } from "../interfaces/rating.interface";
import { IUser } from "../interfaces/user.interface";
import { ITag } from "../interfaces/tag.interface";

export class Film implements IFilm {
    rates: IRating[];
    url: string;
    views: number;
    likedBy: IUser[];
    favoritedBy: IUser[];
    submitter: IUser;
    desc: string;
    title: string;
    rating: number;
    tags: ITag[];
}