const mapping: Record<string, string> = {
  'candidate-shortlistings': 'candidate_shortlistings',
  'employee-data': 'employee_data',
  interviews: 'interviews',
  'job-applications': 'job_applications',
  'job-postings': 'job_postings',
  'offer-letters': 'offer_letters',
  organizations: 'organization',
  'payroll-informations': 'payroll_information',
  'performance-evaluations': 'performance_evaluation',
  tests: 'tests',
  users: 'user',
  'vacation-managements': 'vacation_management',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
