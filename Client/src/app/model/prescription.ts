import { Medicine } from './medicine';
import { AppUser } from './user';

export interface Prescription {
id: string;
to: Array<AppUser>;
content: Array<Medicine>;
}
