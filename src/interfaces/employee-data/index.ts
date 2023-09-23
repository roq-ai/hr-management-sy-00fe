import { GetQueryInterface } from 'interfaces';

export interface EmployeeDataInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface EmployeeDataGetQueryInterface extends GetQueryInterface {
  id?: string;
}
