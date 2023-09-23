import { GetQueryInterface } from 'interfaces';

export interface PayrollInformationInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface PayrollInformationGetQueryInterface extends GetQueryInterface {
  id?: string;
}
