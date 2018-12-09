import { Vendor } from './Vendor';

export interface User {
    username?: String;
    password?: String;
    firstName?: String;
    lastName?: String;
    role?: String;
    vendor?: Vendor;
}
