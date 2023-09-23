import axios from 'axios';
import queryString from 'query-string';
import { JobApplicationsInterface, JobApplicationsGetQueryInterface } from 'interfaces/job-applications';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getJobApplications = async (
  query?: JobApplicationsGetQueryInterface,
): Promise<PaginatedInterface<JobApplicationsInterface>> => {
  const response = await axios.get('/api/job-applications', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createJobApplications = async (jobApplications: JobApplicationsInterface) => {
  const response = await axios.post('/api/job-applications', jobApplications);
  return response.data;
};

export const updateJobApplicationsById = async (id: string, jobApplications: JobApplicationsInterface) => {
  const response = await axios.put(`/api/job-applications/${id}`, jobApplications);
  return response.data;
};

export const getJobApplicationsById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/job-applications/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteJobApplicationsById = async (id: string) => {
  const response = await axios.delete(`/api/job-applications/${id}`);
  return response.data;
};
