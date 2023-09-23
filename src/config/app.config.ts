interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['HR Manager'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'HR Manager', 'Job Candidate', 'Employee', 'Team Lead'],
  tenantName: 'Organization',
  applicationName: 'HR Management System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read job applications',
    'Read offer letters',
    'Read job postings',
    'Read organization information',
  ],
  ownerAbilities: [
    'Manage job applications',
    'Manage offer letters',
    'Manage tests',
    'Manage interviews',
    'Manage candidate shortlistings',
    'Manage job postings',
    'Manage performance evaluations',
    'Manage payroll information',
    'Manage vacation management',
    'Manage employee data',
    'Manage user',
    'Manage organization',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/6a5e12e9-f36c-40be-9547-8800fd499b6a',
};
