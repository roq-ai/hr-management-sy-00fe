import axios from 'axios';
import queryString from 'query-string';
import { TestsInterface, TestsGetQueryInterface } from 'interfaces/tests';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getTests = async (query?: TestsGetQueryInterface): Promise<PaginatedInterface<TestsInterface>> => {
  const response = await axios.get('/api/tests', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createTests = async (tests: TestsInterface) => {
  const response = await axios.post('/api/tests', tests);
  return response.data;
};

export const updateTestsById = async (id: string, tests: TestsInterface) => {
  const response = await axios.put(`/api/tests/${id}`, tests);
  return response.data;
};

export const getTestsById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/tests/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteTestsById = async (id: string) => {
  const response = await axios.delete(`/api/tests/${id}`);
  return response.data;
};
