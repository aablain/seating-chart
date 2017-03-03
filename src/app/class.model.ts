import { Chart } from './chart.model';
import { Student } from './students.model';

export class Class {
  constructor (public name: string, public image: string, public period: string, public charts: Chart[], public students: Student[]) { }
}
