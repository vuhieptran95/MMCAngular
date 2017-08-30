import { Grade } from './grade';
export class User{
    id: string;
    firstName: string;
    lastName: string;
    school: string;
    gradeAtSchool: string;
    grade: string;
    parent: string;
    grades:Grade[];
}