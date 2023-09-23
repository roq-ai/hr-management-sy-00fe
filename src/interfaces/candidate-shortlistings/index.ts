import { GetQueryInterface } from 'interfaces';

export interface CandidateShortlistingsInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface CandidateShortlistingsGetQueryInterface extends GetQueryInterface {
  id?: string;
}
