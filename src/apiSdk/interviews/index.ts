import axios from 'axios';
import queryString from 'query-string';
import { InterviewsInterface, InterviewsGetQueryInterface } from 'interfaces/interviews';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getInterviews = async (
  query?: InterviewsGetQueryInterface,
): Promise<PaginatedInterface<InterviewsInterface>> => {
  const response = await axios.get('/api/interviews', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createInterviews = async (interviews: InterviewsInterface) => {
  const response = await axios.post('/api/interviews', interviews);
  return response.data;
};

export const updateInterviewsById = async (id: string, interviews: InterviewsInterface) => {
  const response = await axios.put(`/api/interviews/${id}`, interviews);
  return response.data;
};

export const getInterviewsById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/interviews/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteInterviewsById = async (id: string) => {
  const response = await axios.delete(`/api/interviews/${id}`);
  return response.data;
};
