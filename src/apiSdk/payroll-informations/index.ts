import axios from 'axios';
import queryString from 'query-string';
import { PayrollInformationInterface, PayrollInformationGetQueryInterface } from 'interfaces/payroll-information';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getPayrollInformations = async (
  query?: PayrollInformationGetQueryInterface,
): Promise<PaginatedInterface<PayrollInformationInterface>> => {
  const response = await axios.get('/api/payroll-informations', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createPayrollInformation = async (payrollInformation: PayrollInformationInterface) => {
  const response = await axios.post('/api/payroll-informations', payrollInformation);
  return response.data;
};

export const updatePayrollInformationById = async (id: string, payrollInformation: PayrollInformationInterface) => {
  const response = await axios.put(`/api/payroll-informations/${id}`, payrollInformation);
  return response.data;
};

export const getPayrollInformationById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/payroll-informations/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deletePayrollInformationById = async (id: string) => {
  const response = await axios.delete(`/api/payroll-informations/${id}`);
  return response.data;
};
