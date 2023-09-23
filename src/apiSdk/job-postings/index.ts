import axios from 'axios';
import queryString from 'query-string';
import { JobPostingsInterface, JobPostingsGetQueryInterface } from 'interfaces/job-postings';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getJobPostings = async (
  query?: JobPostingsGetQueryInterface,
): Promise<PaginatedInterface<JobPostingsInterface>> => {
  const response = await axios.get('/api/job-postings', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createJobPostings = async (jobPostings: JobPostingsInterface) => {
  const response = await axios.post('/api/job-postings', jobPostings);
  return response.data;
};

export const updateJobPostingsById = async (id: string, jobPostings: JobPostingsInterface) => {
  const response = await axios.put(`/api/job-postings/${id}`, jobPostings);
  return response.data;
};

export const getJobPostingsById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/job-postings/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteJobPostingsById = async (id: string) => {
  const response = await axios.delete(`/api/job-postings/${id}`);
  return response.data;
};
