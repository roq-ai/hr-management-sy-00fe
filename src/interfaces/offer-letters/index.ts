import { GetQueryInterface } from 'interfaces';

export interface OfferLettersInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface OfferLettersGetQueryInterface extends GetQueryInterface {
  id?: string;
}
