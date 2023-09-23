import { GetQueryInterface } from 'interfaces';

export interface JobApplicationsInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface JobApplicationsGetQueryInterface extends GetQueryInterface {
  id?: string;
}
