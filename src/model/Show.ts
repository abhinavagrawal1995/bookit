import { Movie } from "./Movie";
import { User } from "./User";

export interface Show {
    imdbID?: String;
    theatreName?: String;
    date?: String;
    time?: String;
    price?: String;
    id?: String;
    movie?: Movie;
    vendor?: User;
}
