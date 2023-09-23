import { GetQueryInterface } from 'interfaces';

export interface TestsInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface TestsGetQueryInterface extends GetQueryInterface {
  id?: string;
}
