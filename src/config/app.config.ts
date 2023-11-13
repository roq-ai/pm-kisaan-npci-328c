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
  ownerRoles: ['Owner'],
  customerRoles: ['Applicant'],
  tenantRoles: ['Owner', 'HR Manager'],
  tenantName: 'Company',
  applicationName: 'PM KISAAN NPCI ',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Create user', 'Read company', 'Edit self-information', 'Manage application'],
  ownerAbilities: ['Manage employee data', 'Manage user data', 'Manage company data'],
  getQuoteUrl: 'https://app.roq.ai/proposal/a0b9747a-c081-4963-9302-d8adec9c4e39',
};
