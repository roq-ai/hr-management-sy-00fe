import axios from 'axios';
import queryString from 'query-string';
import {
  CandidateShortlistingsInterface,
  CandidateShortlistingsGetQueryInterface,
} from 'interfaces/candidate-shortlistings';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getCandidateShortlistings = async (
  query?: CandidateShortlistingsGetQueryInterface,
): Promise<PaginatedInterface<CandidateShortlistingsInterface>> => {
  const response = await axios.get('/api/candidate-shortlistings', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createCandidateShortlistings = async (candidateShortlistings: CandidateShortlistingsInterface) => {
  const response = await axios.post('/api/candidate-shortlistings', candidateShortlistings);
  return response.data;
};

export const updateCandidateShortlistingsById = async (
  id: string,
  candidateShortlistings: CandidateShortlistingsInterface,
) => {
  const response = await axios.put(`/api/candidate-shortlistings/${id}`, candidateShortlistings);
  return response.data;
};

export const getCandidateShortlistingsById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(
    `/api/candidate-shortlistings/${id}${query ? `?${queryString.stringify(query)}` : ''}`,
  );
  return response.data;
};

export const deleteCandidateShortlistingsById = async (id: string) => {
  const response = await axios.delete(`/api/candidate-shortlistings/${id}`);
  return response.data;
};
