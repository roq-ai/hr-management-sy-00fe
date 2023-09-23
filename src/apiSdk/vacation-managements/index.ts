import axios from 'axios';
import queryString from 'query-string';
import { VacationManagementInterface, VacationManagementGetQueryInterface } from 'interfaces/vacation-management';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getVacationManagements = async (
  query?: VacationManagementGetQueryInterface,
): Promise<PaginatedInterface<VacationManagementInterface>> => {
  const response = await axios.get('/api/vacation-managements', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createVacationManagement = async (vacationManagement: VacationManagementInterface) => {
  const response = await axios.post('/api/vacation-managements', vacationManagement);
  return response.data;
};

export const updateVacationManagementById = async (id: string, vacationManagement: VacationManagementInterface) => {
  const response = await axios.put(`/api/vacation-managements/${id}`, vacationManagement);
  return response.data;
};

export const getVacationManagementById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/vacation-managements/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteVacationManagementById = async (id: string) => {
  const response = await axios.delete(`/api/vacation-managements/${id}`);
  return response.data;
};
