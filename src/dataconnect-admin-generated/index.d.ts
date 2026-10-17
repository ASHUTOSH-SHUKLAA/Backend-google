import { ConnectorConfig, DataConnect, OperationOptions, ExecuteOperationResponse } from 'firebase-admin/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;


export interface Analytics_Key {
  id: UUIDString;
  __typename?: 'Analytics_Key';
}

export interface BusinessPlan_Key {
  id: UUIDString;
  __typename?: 'BusinessPlan_Key';
}

export interface Business_Key {
  id: UUIDString;
  __typename?: 'Business_Key';
}

export interface CreateBusinessData {
  business_insert: Business_Key;
}

export interface CreateBusinessPlanData {
  businessPlan_insert: BusinessPlan_Key;
}

export interface CreateBusinessPlanVariables {
  businessId: UUIDString;
  planType: string;
}

export interface CreateBusinessVariables {
  name: string;
  category: string;
  slug: string;
}

export interface CreateServiceData {
  service_insert: Service_Key;
}

export interface CreateServiceVariables {
  name: string;
  price: number;
  businessId: UUIDString;
}

export interface CreateWebsiteSettingData {
  websiteSetting_insert: WebsiteSetting_Key;
}

export interface CreateWebsiteSettingVariables {
  businessId: UUIDString;
  primaryColor?: string | null;
}

export interface DeleteAnalyticsData {
  analytics_delete?: Analytics_Key | null;
}

export interface DeleteAnalyticsVariables {
  id: UUIDString;
}

export interface DeleteBusinessData {
  business_delete?: Business_Key | null;
}

export interface DeleteBusinessPlanData {
  businessPlan_delete?: BusinessPlan_Key | null;
}

export interface DeleteBusinessPlanVariables {
  id: UUIDString;
}

export interface DeleteBusinessVariables {
  id: UUIDString;
}

export interface DeleteServiceData {
  service_delete?: Service_Key | null;
}

export interface DeleteServiceVariables {
  id: UUIDString;
}

export interface DeleteWebsiteSettingData {
  websiteSetting_delete?: WebsiteSetting_Key | null;
}

export interface DeleteWebsiteSettingVariables {
  id: UUIDString;
}

export interface GetAnalyticsData {
  analyticss: ({
    date: DateString;
    visitCount: number;
    uniqueVisitors?: number | null;
  })[];
}

export interface GetAnalyticsVariables {
  businessId: UUIDString;
}

export interface GetBusinessData {
  business?: {
    name: string;
    slug: string;
    description?: string | null;
    category: string;
  };
}

export interface GetBusinessPlanData {
  businessPlan?: {
    planType: string;
    isActive: boolean;
    expiryDate?: DateString | null;
  };
}

export interface GetBusinessPlanVariables {
  id: UUIDString;
}

export interface GetBusinessVariables {
  id: UUIDString;
}

export interface GetServiceData {
  service?: {
    name: string;
    price: number;
    description?: string | null;
    business: {
      name: string;
    };
  };
}

export interface GetServiceVariables {
  id: UUIDString;
}

export interface GetSingleAnalyticsData {
  analytics?: {
    visitCount: number;
    uniqueVisitors?: number | null;
  };
}

export interface GetSingleAnalyticsVariables {
  id: UUIDString;
}

export interface GetWebsiteSettingData {
  websiteSetting?: {
    primaryColor?: string | null;
    heroText?: string | null;
    customDomain?: string | null;
  };
}

export interface GetWebsiteSettingVariables {
  id: UUIDString;
}

export interface InsertAnalyticsData {
  analytics_insert: Analytics_Key;
}

export interface InsertAnalyticsVariables {
  businessId: UUIDString;
  date: DateString;
  visitCount: number;
}

export interface ListBusinessPlansData {
  businessPlans: ({
    id: UUIDString;
    planType: string;
    isActive: boolean;
  } & BusinessPlan_Key)[];
}

export interface ListBusinessesData {
  businesses: ({
    id: UUIDString;
    name: string;
    slug: string;
  } & Business_Key)[];
}

export interface ListServicesData {
  services: ({
    id: UUIDString;
    name: string;
    price: number;
  } & Service_Key)[];
}

export interface ListServicesVariables {
  businessId: UUIDString;
}

export interface ListWebsiteSettingsData {
  websiteSettings: ({
    id: UUIDString;
    customDomain?: string | null;
  } & WebsiteSetting_Key)[];
}

export interface Service_Key {
  id: UUIDString;
  __typename?: 'Service_Key';
}

export interface UpdateAnalyticsData {
  analytics_update?: Analytics_Key | null;
}

export interface UpdateAnalyticsVariables {
  id: UUIDString;
  visitCount?: number | null;
}

export interface UpdateBusinessData {
  business_update?: Business_Key | null;
}

export interface UpdateBusinessPlanData {
  businessPlan_update?: BusinessPlan_Key | null;
}

export interface UpdateBusinessPlanVariables {
  id: UUIDString;
  isActive?: boolean | null;
}

export interface UpdateBusinessVariables {
  id: UUIDString;
  name?: string | null;
  description?: string | null;
}

export interface UpdateServiceData {
  service_update?: Service_Key | null;
}

export interface UpdateServiceVariables {
  id: UUIDString;
  price?: number | null;
}

export interface UpdateWebsiteSettingData {
  websiteSetting_update?: WebsiteSetting_Key | null;
}

export interface UpdateWebsiteSettingVariables {
  id: UUIDString;
  heroText?: string | null;
}

export interface WebsiteSetting_Key {
  id: UUIDString;
  __typename?: 'WebsiteSetting_Key';
}

/** Generated Node Admin SDK operation action function for the 'CreateBusiness' Mutation. Allow users to execute without passing in DataConnect. */
export function createBusiness(dc: DataConnect, vars: CreateBusinessVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateBusinessData>>;
/** Generated Node Admin SDK operation action function for the 'CreateBusiness' Mutation. Allow users to pass in custom DataConnect instances. */
export function createBusiness(vars: CreateBusinessVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateBusinessData>>;

/** Generated Node Admin SDK operation action function for the 'UpdateBusiness' Mutation. Allow users to execute without passing in DataConnect. */
export function updateBusiness(dc: DataConnect, vars: UpdateBusinessVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateBusinessData>>;
/** Generated Node Admin SDK operation action function for the 'UpdateBusiness' Mutation. Allow users to pass in custom DataConnect instances. */
export function updateBusiness(vars: UpdateBusinessVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateBusinessData>>;

/** Generated Node Admin SDK operation action function for the 'DeleteBusiness' Mutation. Allow users to execute without passing in DataConnect. */
export function deleteBusiness(dc: DataConnect, vars: DeleteBusinessVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeleteBusinessData>>;
/** Generated Node Admin SDK operation action function for the 'DeleteBusiness' Mutation. Allow users to pass in custom DataConnect instances. */
export function deleteBusiness(vars: DeleteBusinessVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeleteBusinessData>>;

/** Generated Node Admin SDK operation action function for the 'GetBusiness' Query. Allow users to execute without passing in DataConnect. */
export function getBusiness(dc: DataConnect, vars: GetBusinessVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetBusinessData>>;
/** Generated Node Admin SDK operation action function for the 'GetBusiness' Query. Allow users to pass in custom DataConnect instances. */
export function getBusiness(vars: GetBusinessVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetBusinessData>>;

/** Generated Node Admin SDK operation action function for the 'ListBusinesses' Query. Allow users to execute without passing in DataConnect. */
export function listBusinesses(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<ListBusinessesData>>;
/** Generated Node Admin SDK operation action function for the 'ListBusinesses' Query. Allow users to pass in custom DataConnect instances. */
export function listBusinesses(options?: OperationOptions): Promise<ExecuteOperationResponse<ListBusinessesData>>;

/** Generated Node Admin SDK operation action function for the 'CreateService' Mutation. Allow users to execute without passing in DataConnect. */
export function createService(dc: DataConnect, vars: CreateServiceVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateServiceData>>;
/** Generated Node Admin SDK operation action function for the 'CreateService' Mutation. Allow users to pass in custom DataConnect instances. */
export function createService(vars: CreateServiceVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateServiceData>>;

/** Generated Node Admin SDK operation action function for the 'UpdateService' Mutation. Allow users to execute without passing in DataConnect. */
export function updateService(dc: DataConnect, vars: UpdateServiceVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateServiceData>>;
/** Generated Node Admin SDK operation action function for the 'UpdateService' Mutation. Allow users to pass in custom DataConnect instances. */
export function updateService(vars: UpdateServiceVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateServiceData>>;

/** Generated Node Admin SDK operation action function for the 'DeleteService' Mutation. Allow users to execute without passing in DataConnect. */
export function deleteService(dc: DataConnect, vars: DeleteServiceVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeleteServiceData>>;
/** Generated Node Admin SDK operation action function for the 'DeleteService' Mutation. Allow users to pass in custom DataConnect instances. */
export function deleteService(vars: DeleteServiceVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeleteServiceData>>;

/** Generated Node Admin SDK operation action function for the 'GetService' Query. Allow users to execute without passing in DataConnect. */
export function getService(dc: DataConnect, vars: GetServiceVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetServiceData>>;
/** Generated Node Admin SDK operation action function for the 'GetService' Query. Allow users to pass in custom DataConnect instances. */
export function getService(vars: GetServiceVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetServiceData>>;

/** Generated Node Admin SDK operation action function for the 'ListServices' Query. Allow users to execute without passing in DataConnect. */
export function listServices(dc: DataConnect, vars: ListServicesVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<ListServicesData>>;
/** Generated Node Admin SDK operation action function for the 'ListServices' Query. Allow users to pass in custom DataConnect instances. */
export function listServices(vars: ListServicesVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<ListServicesData>>;

/** Generated Node Admin SDK operation action function for the 'CreateWebsiteSetting' Mutation. Allow users to execute without passing in DataConnect. */
export function createWebsiteSetting(dc: DataConnect, vars: CreateWebsiteSettingVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateWebsiteSettingData>>;
/** Generated Node Admin SDK operation action function for the 'CreateWebsiteSetting' Mutation. Allow users to pass in custom DataConnect instances. */
export function createWebsiteSetting(vars: CreateWebsiteSettingVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateWebsiteSettingData>>;

/** Generated Node Admin SDK operation action function for the 'UpdateWebsiteSetting' Mutation. Allow users to execute without passing in DataConnect. */
export function updateWebsiteSetting(dc: DataConnect, vars: UpdateWebsiteSettingVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateWebsiteSettingData>>;
/** Generated Node Admin SDK operation action function for the 'UpdateWebsiteSetting' Mutation. Allow users to pass in custom DataConnect instances. */
export function updateWebsiteSetting(vars: UpdateWebsiteSettingVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateWebsiteSettingData>>;

/** Generated Node Admin SDK operation action function for the 'DeleteWebsiteSetting' Mutation. Allow users to execute without passing in DataConnect. */
export function deleteWebsiteSetting(dc: DataConnect, vars: DeleteWebsiteSettingVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeleteWebsiteSettingData>>;
/** Generated Node Admin SDK operation action function for the 'DeleteWebsiteSetting' Mutation. Allow users to pass in custom DataConnect instances. */
export function deleteWebsiteSetting(vars: DeleteWebsiteSettingVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeleteWebsiteSettingData>>;

/** Generated Node Admin SDK operation action function for the 'GetWebsiteSetting' Query. Allow users to execute without passing in DataConnect. */
export function getWebsiteSetting(dc: DataConnect, vars: GetWebsiteSettingVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetWebsiteSettingData>>;
/** Generated Node Admin SDK operation action function for the 'GetWebsiteSetting' Query. Allow users to pass in custom DataConnect instances. */
export function getWebsiteSetting(vars: GetWebsiteSettingVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetWebsiteSettingData>>;

/** Generated Node Admin SDK operation action function for the 'ListWebsiteSettings' Query. Allow users to execute without passing in DataConnect. */
export function listWebsiteSettings(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<ListWebsiteSettingsData>>;
/** Generated Node Admin SDK operation action function for the 'ListWebsiteSettings' Query. Allow users to pass in custom DataConnect instances. */
export function listWebsiteSettings(options?: OperationOptions): Promise<ExecuteOperationResponse<ListWebsiteSettingsData>>;

/** Generated Node Admin SDK operation action function for the 'GetAnalytics' Query. Allow users to execute without passing in DataConnect. */
export function getAnalytics(dc: DataConnect, vars: GetAnalyticsVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetAnalyticsData>>;
/** Generated Node Admin SDK operation action function for the 'GetAnalytics' Query. Allow users to pass in custom DataConnect instances. */
export function getAnalytics(vars: GetAnalyticsVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetAnalyticsData>>;

/** Generated Node Admin SDK operation action function for the 'InsertAnalytics' Mutation. Allow users to execute without passing in DataConnect. */
export function insertAnalytics(dc: DataConnect, vars: InsertAnalyticsVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<InsertAnalyticsData>>;
/** Generated Node Admin SDK operation action function for the 'InsertAnalytics' Mutation. Allow users to pass in custom DataConnect instances. */
export function insertAnalytics(vars: InsertAnalyticsVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<InsertAnalyticsData>>;

/** Generated Node Admin SDK operation action function for the 'DeleteAnalytics' Mutation. Allow users to execute without passing in DataConnect. */
export function deleteAnalytics(dc: DataConnect, vars: DeleteAnalyticsVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeleteAnalyticsData>>;
/** Generated Node Admin SDK operation action function for the 'DeleteAnalytics' Mutation. Allow users to pass in custom DataConnect instances. */
export function deleteAnalytics(vars: DeleteAnalyticsVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeleteAnalyticsData>>;

/** Generated Node Admin SDK operation action function for the 'UpdateAnalytics' Mutation. Allow users to execute without passing in DataConnect. */
export function updateAnalytics(dc: DataConnect, vars: UpdateAnalyticsVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateAnalyticsData>>;
/** Generated Node Admin SDK operation action function for the 'UpdateAnalytics' Mutation. Allow users to pass in custom DataConnect instances. */
export function updateAnalytics(vars: UpdateAnalyticsVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateAnalyticsData>>;

/** Generated Node Admin SDK operation action function for the 'GetSingleAnalytics' Query. Allow users to execute without passing in DataConnect. */
export function getSingleAnalytics(dc: DataConnect, vars: GetSingleAnalyticsVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetSingleAnalyticsData>>;
/** Generated Node Admin SDK operation action function for the 'GetSingleAnalytics' Query. Allow users to pass in custom DataConnect instances. */
export function getSingleAnalytics(vars: GetSingleAnalyticsVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetSingleAnalyticsData>>;

/** Generated Node Admin SDK operation action function for the 'CreateBusinessPlan' Mutation. Allow users to execute without passing in DataConnect. */
export function createBusinessPlan(dc: DataConnect, vars: CreateBusinessPlanVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateBusinessPlanData>>;
/** Generated Node Admin SDK operation action function for the 'CreateBusinessPlan' Mutation. Allow users to pass in custom DataConnect instances. */
export function createBusinessPlan(vars: CreateBusinessPlanVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateBusinessPlanData>>;

/** Generated Node Admin SDK operation action function for the 'UpdateBusinessPlan' Mutation. Allow users to execute without passing in DataConnect. */
export function updateBusinessPlan(dc: DataConnect, vars: UpdateBusinessPlanVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateBusinessPlanData>>;
/** Generated Node Admin SDK operation action function for the 'UpdateBusinessPlan' Mutation. Allow users to pass in custom DataConnect instances. */
export function updateBusinessPlan(vars: UpdateBusinessPlanVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateBusinessPlanData>>;

/** Generated Node Admin SDK operation action function for the 'DeleteBusinessPlan' Mutation. Allow users to execute without passing in DataConnect. */
export function deleteBusinessPlan(dc: DataConnect, vars: DeleteBusinessPlanVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeleteBusinessPlanData>>;
/** Generated Node Admin SDK operation action function for the 'DeleteBusinessPlan' Mutation. Allow users to pass in custom DataConnect instances. */
export function deleteBusinessPlan(vars: DeleteBusinessPlanVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeleteBusinessPlanData>>;

/** Generated Node Admin SDK operation action function for the 'GetBusinessPlan' Query. Allow users to execute without passing in DataConnect. */
export function getBusinessPlan(dc: DataConnect, vars: GetBusinessPlanVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetBusinessPlanData>>;
/** Generated Node Admin SDK operation action function for the 'GetBusinessPlan' Query. Allow users to pass in custom DataConnect instances. */
export function getBusinessPlan(vars: GetBusinessPlanVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetBusinessPlanData>>;

/** Generated Node Admin SDK operation action function for the 'ListBusinessPlans' Query. Allow users to execute without passing in DataConnect. */
export function listBusinessPlans(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<ListBusinessPlansData>>;
/** Generated Node Admin SDK operation action function for the 'ListBusinessPlans' Query. Allow users to pass in custom DataConnect instances. */
export function listBusinessPlans(options?: OperationOptions): Promise<ExecuteOperationResponse<ListBusinessPlansData>>;

