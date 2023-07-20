interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Trading Bot Manager'],
  customerRoles: [],
  tenantRoles: ['Trading Bot Manager'],
  tenantName: 'Organization',
  applicationName: 'botifi.io',
  addOns: ['chat'],
};
