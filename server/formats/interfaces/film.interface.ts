import { IUser } from "./user.interface";
import { ITag } from "./tag.interface";
import { IRating } from "./rating.interface";

export interface IFilm {
    url: string;
    views: number;
    likedBy: Array<IUser>;
    favoritedBy: Array<IUser>;
    submitter: IUser;
    desc: string;
    title: string;
    rating: number;
    rates: Array<IRating>;
    tags: Array<ITag>;
}