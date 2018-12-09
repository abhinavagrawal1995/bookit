import { Show } from './Show';
import { User } from './User';

export interface Booking {
    showId: String;
    personId: String;
    seats: String;
    amountPaid: String;
    show: Show;
    user: User;
    _id: String;
}
