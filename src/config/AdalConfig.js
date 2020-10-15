// src/config/AdalConfig.js
export default {
  clientId: '12b1f90b-92a0-4736-9a1e-bd8546bf5588',
  endpoints: {
    api: "onehavi-DWH Logistics-fc190f45-14bd-449e-a137-b4f8f5b8b9ba" // Necessary for CORS requests, for more info see https://github.com/AzureAD/azure-activedirectory-library-for-js/wiki/CORS-usage
  },
  // 'tenant' is the Azure AD instance.
  tenant: '585bda71-88ce-428b-9832-95eaa3dce989',
  // 'cacheLocation' is set to 'sessionStorage' by default (see https://github.com/AzureAD/azure-activedirectory-library-for-js/wiki/Config-authentication-context#configurable-options.
  // We change it to'localStorage' because 'sessionStorage' does not work when our app is served on 'localhost' in development.
  cacheLocation: 'localStorage'
}