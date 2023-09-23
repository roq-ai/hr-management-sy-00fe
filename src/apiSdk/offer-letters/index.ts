import axios from 'axios';
import queryString from 'query-string';
import { OfferLettersInterface, OfferLettersGetQueryInterface } from 'interfaces/offer-letters';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getOfferLetters = async (
  query?: OfferLettersGetQueryInterface,
): Promise<PaginatedInterface<OfferLettersInterface>> => {
  const response = await axios.get('/api/offer-letters', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createOfferLetters = async (offerLetters: OfferLettersInterface) => {
  const response = await axios.post('/api/offer-letters', offerLetters);
  return response.data;
};

export const updateOfferLettersById = async (id: string, offerLetters: OfferLettersInterface) => {
  const response = await axios.put(`/api/offer-letters/${id}`, offerLetters);
  return response.data;
};

export const getOfferLettersById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/offer-letters/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteOfferLettersById = async (id: string) => {
  const response = await axios.delete(`/api/offer-letters/${id}`);
  return response.data;
};
