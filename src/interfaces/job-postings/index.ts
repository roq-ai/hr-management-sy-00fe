import { GetQueryInterface } from 'interfaces';

export interface JobPostingsInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface JobPostingsGetQueryInterface extends GetQueryInterface {
  id?: string;
}
