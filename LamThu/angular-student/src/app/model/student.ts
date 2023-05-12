import {Class} from './class';

export interface Student {
  id?: string
  name?:string
  dayOfBirth?: string
  class?: Class
  phone?: string
  address?:string;
}
