import { Medicine } from './medicine';
import { User } from './user';

export interface Prescription {
id: string;
to: Array<User>;
content: Array<Medicine>;
}
