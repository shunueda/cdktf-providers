// https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/data-sources/tenant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAuth0TenantConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/data-sources/tenant#id DataAuth0Tenant#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataAuth0TenantDefaultTokenQuotaClientsClientCredentials {
}

export function dataAuth0TenantDefaultTokenQuotaClientsClientCredentialsToTerraform(struct?: DataAuth0TenantDefaultTokenQuotaClientsClientCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuth0TenantDefaultTokenQuotaClientsClientCredentialsToHclTerraform(struct?: DataAuth0TenantDefaultTokenQuotaClientsClientCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuth0TenantDefaultTokenQuotaClientsClientCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAuth0TenantDefaultTokenQuotaClientsClientCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuth0TenantDefaultTokenQuotaClientsClientCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enforce - computed: true, optional: false, required: false
  public get enforce() {
    return this.getBooleanAttribute('enforce');
  }

  // per_day - computed: true, optional: false, required: false
  public get perDay() {
    return this.getNumberAttribute('per_day');
  }

  // per_hour - computed: true, optional: false, required: false
  public get perHour() {
    return this.getNumberAttribute('per_hour');
  }
}

export class DataAuth0TenantDefaultTokenQuotaClientsClientCredentialsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAuth0TenantDefaultTokenQuotaClientsClientCredentialsOutputReference {
    return new DataAuth0TenantDefaultTokenQuotaClientsClientCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAuth0TenantDefaultTokenQuotaClients {
}

export function dataAuth0TenantDefaultTokenQuotaClientsToTerraform(struct?: DataAuth0TenantDefaultTokenQuotaClients): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuth0TenantDefaultTokenQuotaClientsToHclTerraform(struct?: DataAuth0TenantDefaultTokenQuotaClients): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuth0TenantDefaultTokenQuotaClientsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAuth0TenantDefaultTokenQuotaClients | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuth0TenantDefaultTokenQuotaClients | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_credentials - computed: true, optional: false, required: false
  private _clientCredentials = new DataAuth0TenantDefaultTokenQuotaClientsClientCredentialsList(this, "client_credentials", false);
  public get clientCredentials() {
    return this._clientCredentials;
  }
}

export class DataAuth0TenantDefaultTokenQuotaClientsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAuth0TenantDefaultTokenQuotaClientsOutputReference {
    return new DataAuth0TenantDefaultTokenQuotaClientsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAuth0TenantDefaultTokenQuotaOrganizationsClientCredentials {
}

export function dataAuth0TenantDefaultTokenQuotaOrganizationsClientCredentialsToTerraform(struct?: DataAuth0TenantDefaultTokenQuotaOrganizationsClientCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuth0TenantDefaultTokenQuotaOrganizationsClientCredentialsToHclTerraform(struct?: DataAuth0TenantDefaultTokenQuotaOrganizationsClientCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuth0TenantDefaultTokenQuotaOrganizationsClientCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAuth0TenantDefaultTokenQuotaOrganizationsClientCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuth0TenantDefaultTokenQuotaOrganizationsClientCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enforce - computed: true, optional: false, required: false
  public get enforce() {
    return this.getBooleanAttribute('enforce');
  }

  // per_day - computed: true, optional: false, required: false
  public get perDay() {
    return this.getNumberAttribute('per_day');
  }

  // per_hour - computed: true, optional: false, required: false
  public get perHour() {
    return this.getNumberAttribute('per_hour');
  }
}

export class DataAuth0TenantDefaultTokenQuotaOrganizationsClientCredentialsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAuth0TenantDefaultTokenQuotaOrganizationsClientCredentialsOutputReference {
    return new DataAuth0TenantDefaultTokenQuotaOrganizationsClientCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAuth0TenantDefaultTokenQuotaOrganizations {
}

export function dataAuth0TenantDefaultTokenQuotaOrganizationsToTerraform(struct?: DataAuth0TenantDefaultTokenQuotaOrganizations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuth0TenantDefaultTokenQuotaOrganizationsToHclTerraform(struct?: DataAuth0TenantDefaultTokenQuotaOrganizations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuth0TenantDefaultTokenQuotaOrganizationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAuth0TenantDefaultTokenQuotaOrganizations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuth0TenantDefaultTokenQuotaOrganizations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_credentials - computed: true, optional: false, required: false
  private _clientCredentials = new DataAuth0TenantDefaultTokenQuotaOrganizationsClientCredentialsList(this, "client_credentials", false);
  public get clientCredentials() {
    return this._clientCredentials;
  }
}

export class DataAuth0TenantDefaultTokenQuotaOrganizationsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAuth0TenantDefaultTokenQuotaOrganizationsOutputReference {
    return new DataAuth0TenantDefaultTokenQuotaOrganizationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAuth0TenantDefaultTokenQuota {
}

export function dataAuth0TenantDefaultTokenQuotaToTerraform(struct?: DataAuth0TenantDefaultTokenQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuth0TenantDefaultTokenQuotaToHclTerraform(struct?: DataAuth0TenantDefaultTokenQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuth0TenantDefaultTokenQuotaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAuth0TenantDefaultTokenQuota | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuth0TenantDefaultTokenQuota | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clients - computed: true, optional: false, required: false
  private _clients = new DataAuth0TenantDefaultTokenQuotaClientsList(this, "clients", false);
  public get clients() {
    return this._clients;
  }

  // organizations - computed: true, optional: false, required: false
  private _organizations = new DataAuth0TenantDefaultTokenQuotaOrganizationsList(this, "organizations", false);
  public get organizations() {
    return this._organizations;
  }
}

export class DataAuth0TenantDefaultTokenQuotaList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAuth0TenantDefaultTokenQuotaOutputReference {
    return new DataAuth0TenantDefaultTokenQuotaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAuth0TenantErrorPage {
}

export function dataAuth0TenantErrorPageToTerraform(struct?: DataAuth0TenantErrorPage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuth0TenantErrorPageToHclTerraform(struct?: DataAuth0TenantErrorPage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuth0TenantErrorPageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAuth0TenantErrorPage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuth0TenantErrorPage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // html - computed: true, optional: false, required: false
  public get html() {
    return this.getStringAttribute('html');
  }

  // show_log_link - computed: true, optional: false, required: false
  public get showLogLink() {
    return this.getBooleanAttribute('show_log_link');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataAuth0TenantErrorPageList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAuth0TenantErrorPageOutputReference {
    return new DataAuth0TenantErrorPageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAuth0TenantFlags {
}

export function dataAuth0TenantFlagsToTerraform(struct?: DataAuth0TenantFlags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuth0TenantFlagsToHclTerraform(struct?: DataAuth0TenantFlags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuth0TenantFlagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAuth0TenantFlags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuth0TenantFlags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_legacy_delegation_grant_types - computed: true, optional: false, required: false
  public get allowLegacyDelegationGrantTypes() {
    return this.getBooleanAttribute('allow_legacy_delegation_grant_types');
  }

  // allow_legacy_ro_grant_types - computed: true, optional: false, required: false
  public get allowLegacyRoGrantTypes() {
    return this.getBooleanAttribute('allow_legacy_ro_grant_types');
  }

  // allow_legacy_tokeninfo_endpoint - computed: true, optional: false, required: false
  public get allowLegacyTokeninfoEndpoint() {
    return this.getBooleanAttribute('allow_legacy_tokeninfo_endpoint');
  }

  // dashboard_insights_view - computed: true, optional: false, required: false
  public get dashboardInsightsView() {
    return this.getBooleanAttribute('dashboard_insights_view');
  }

  // dashboard_log_streams_next - computed: true, optional: false, required: false
  public get dashboardLogStreamsNext() {
    return this.getBooleanAttribute('dashboard_log_streams_next');
  }

  // disable_clickjack_protection_headers - computed: true, optional: false, required: false
  public get disableClickjackProtectionHeaders() {
    return this.getBooleanAttribute('disable_clickjack_protection_headers');
  }

  // disable_fields_map_fix - computed: true, optional: false, required: false
  public get disableFieldsMapFix() {
    return this.getBooleanAttribute('disable_fields_map_fix');
  }

  // disable_management_api_sms_obfuscation - computed: true, optional: false, required: false
  public get disableManagementApiSmsObfuscation() {
    return this.getBooleanAttribute('disable_management_api_sms_obfuscation');
  }

  // enable_adfs_waad_email_verification - computed: true, optional: false, required: false
  public get enableAdfsWaadEmailVerification() {
    return this.getBooleanAttribute('enable_adfs_waad_email_verification');
  }

  // enable_apis_section - computed: true, optional: false, required: false
  public get enableApisSection() {
    return this.getBooleanAttribute('enable_apis_section');
  }

  // enable_client_connections - computed: true, optional: false, required: false
  public get enableClientConnections() {
    return this.getBooleanAttribute('enable_client_connections');
  }

  // enable_custom_domain_in_emails - computed: true, optional: false, required: false
  public get enableCustomDomainInEmails() {
    return this.getBooleanAttribute('enable_custom_domain_in_emails');
  }

  // enable_dynamic_client_registration - computed: true, optional: false, required: false
  public get enableDynamicClientRegistration() {
    return this.getBooleanAttribute('enable_dynamic_client_registration');
  }

  // enable_idtoken_api2 - computed: true, optional: false, required: false
  public get enableIdtokenApi2() {
    return this.getBooleanAttribute('enable_idtoken_api2');
  }

  // enable_legacy_logs_search_v2 - computed: true, optional: false, required: false
  public get enableLegacyLogsSearchV2() {
    return this.getBooleanAttribute('enable_legacy_logs_search_v2');
  }

  // enable_legacy_profile - computed: true, optional: false, required: false
  public get enableLegacyProfile() {
    return this.getBooleanAttribute('enable_legacy_profile');
  }

  // enable_pipeline2 - computed: true, optional: false, required: false
  public get enablePipeline2() {
    return this.getBooleanAttribute('enable_pipeline2');
  }

  // enable_public_signup_user_exists_error - computed: true, optional: false, required: false
  public get enablePublicSignupUserExistsError() {
    return this.getBooleanAttribute('enable_public_signup_user_exists_error');
  }

  // enable_sso - computed: true, optional: false, required: false
  public get enableSso() {
    return this.getBooleanAttribute('enable_sso');
  }

  // mfa_show_factor_list_on_enrollment - computed: true, optional: false, required: false
  public get mfaShowFactorListOnEnrollment() {
    return this.getBooleanAttribute('mfa_show_factor_list_on_enrollment');
  }

  // no_disclose_enterprise_connections - computed: true, optional: false, required: false
  public get noDiscloseEnterpriseConnections() {
    return this.getBooleanAttribute('no_disclose_enterprise_connections');
  }

  // remove_alg_from_jwks - computed: true, optional: false, required: false
  public get removeAlgFromJwks() {
    return this.getBooleanAttribute('remove_alg_from_jwks');
  }

  // require_pushed_authorization_requests - computed: true, optional: false, required: false
  public get requirePushedAuthorizationRequests() {
    return this.getBooleanAttribute('require_pushed_authorization_requests');
  }

  // revoke_refresh_token_grant - computed: true, optional: false, required: false
  public get revokeRefreshTokenGrant() {
    return this.getBooleanAttribute('revoke_refresh_token_grant');
  }

  // use_scope_descriptions_for_consent - computed: true, optional: false, required: false
  public get useScopeDescriptionsForConsent() {
    return this.getBooleanAttribute('use_scope_descriptions_for_consent');
  }
}

export class DataAuth0TenantFlagsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAuth0TenantFlagsOutputReference {
    return new DataAuth0TenantFlagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAuth0TenantMtls {
}

export function dataAuth0TenantMtlsToTerraform(struct?: DataAuth0TenantMtls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuth0TenantMtlsToHclTerraform(struct?: DataAuth0TenantMtls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuth0TenantMtlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAuth0TenantMtls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuth0TenantMtls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disable - computed: true, optional: false, required: false
  public get disable() {
    return this.getBooleanAttribute('disable');
  }

  // enable_endpoint_aliases - computed: true, optional: false, required: false
  public get enableEndpointAliases() {
    return this.getBooleanAttribute('enable_endpoint_aliases');
  }
}

export class DataAuth0TenantMtlsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAuth0TenantMtlsOutputReference {
    return new DataAuth0TenantMtlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAuth0TenantOidcLogout {
}

export function dataAuth0TenantOidcLogoutToTerraform(struct?: DataAuth0TenantOidcLogout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuth0TenantOidcLogoutToHclTerraform(struct?: DataAuth0TenantOidcLogout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuth0TenantOidcLogoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAuth0TenantOidcLogout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuth0TenantOidcLogout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rp_logout_end_session_endpoint_discovery - computed: true, optional: false, required: false
  public get rpLogoutEndSessionEndpointDiscovery() {
    return this.getBooleanAttribute('rp_logout_end_session_endpoint_discovery');
  }
}

export class DataAuth0TenantOidcLogoutList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAuth0TenantOidcLogoutOutputReference {
    return new DataAuth0TenantOidcLogoutOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAuth0TenantSessionCookie {
}

export function dataAuth0TenantSessionCookieToTerraform(struct?: DataAuth0TenantSessionCookie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuth0TenantSessionCookieToHclTerraform(struct?: DataAuth0TenantSessionCookie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuth0TenantSessionCookieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAuth0TenantSessionCookie | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuth0TenantSessionCookie | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }
}

export class DataAuth0TenantSessionCookieList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAuth0TenantSessionCookieOutputReference {
    return new DataAuth0TenantSessionCookieOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAuth0TenantSessions {
}

export function dataAuth0TenantSessionsToTerraform(struct?: DataAuth0TenantSessions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuth0TenantSessionsToHclTerraform(struct?: DataAuth0TenantSessions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuth0TenantSessionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAuth0TenantSessions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuth0TenantSessions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // oidc_logout_prompt_enabled - computed: true, optional: false, required: false
  public get oidcLogoutPromptEnabled() {
    return this.getBooleanAttribute('oidc_logout_prompt_enabled');
  }
}

export class DataAuth0TenantSessionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAuth0TenantSessionsOutputReference {
    return new DataAuth0TenantSessionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/data-sources/tenant auth0_tenant}
*/
export class DataAuth0Tenant extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "auth0_tenant";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAuth0Tenant resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAuth0Tenant to import
  * @param importFromId The id of the existing DataAuth0Tenant that should be imported. Refer to the {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/data-sources/tenant#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAuth0Tenant to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "auth0_tenant", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/auth0/auth0/1.34.0/docs/data-sources/tenant auth0_tenant} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAuth0TenantConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAuth0TenantConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'auth0_tenant',
      terraformGeneratorMetadata: {
        providerName: 'auth0',
        providerVersion: '1.34.0',
        providerVersionConstraint: '1.34.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acr_values_supported - computed: true, optional: false, required: false
  public get acrValuesSupported() {
    return cdktf.Fn.tolist(this.getListAttribute('acr_values_supported'));
  }

  // allow_organization_name_in_authentication_api - computed: true, optional: false, required: false
  public get allowOrganizationNameInAuthenticationApi() {
    return this.getBooleanAttribute('allow_organization_name_in_authentication_api');
  }

  // allowed_logout_urls - computed: true, optional: false, required: false
  public get allowedLogoutUrls() {
    return this.getListAttribute('allowed_logout_urls');
  }

  // customize_mfa_in_postlogin_action - computed: true, optional: false, required: false
  public get customizeMfaInPostloginAction() {
    return this.getBooleanAttribute('customize_mfa_in_postlogin_action');
  }

  // default_audience - computed: true, optional: false, required: false
  public get defaultAudience() {
    return this.getStringAttribute('default_audience');
  }

  // default_directory - computed: true, optional: false, required: false
  public get defaultDirectory() {
    return this.getStringAttribute('default_directory');
  }

  // default_redirection_uri - computed: true, optional: false, required: false
  public get defaultRedirectionUri() {
    return this.getStringAttribute('default_redirection_uri');
  }

  // default_token_quota - computed: true, optional: false, required: false
  private _defaultTokenQuota = new DataAuth0TenantDefaultTokenQuotaList(this, "default_token_quota", false);
  public get defaultTokenQuota() {
    return this._defaultTokenQuota;
  }

  // disable_acr_values_supported - computed: true, optional: false, required: false
  public get disableAcrValuesSupported() {
    return this.getBooleanAttribute('disable_acr_values_supported');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // enabled_locales - computed: true, optional: false, required: false
  public get enabledLocales() {
    return this.getListAttribute('enabled_locales');
  }

  // error_page - computed: true, optional: false, required: false
  private _errorPage = new DataAuth0TenantErrorPageList(this, "error_page", false);
  public get errorPage() {
    return this._errorPage;
  }

  // flags - computed: true, optional: false, required: false
  private _flags = new DataAuth0TenantFlagsList(this, "flags", false);
  public get flags() {
    return this._flags;
  }

  // friendly_name - computed: true, optional: false, required: false
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // idle_session_lifetime - computed: true, optional: false, required: false
  public get idleSessionLifetime() {
    return this.getNumberAttribute('idle_session_lifetime');
  }

  // management_api_identifier - computed: true, optional: false, required: false
  public get managementApiIdentifier() {
    return this.getStringAttribute('management_api_identifier');
  }

  // mtls - computed: true, optional: false, required: false
  private _mtls = new DataAuth0TenantMtlsList(this, "mtls", false);
  public get mtls() {
    return this._mtls;
  }

  // oidc_logout - computed: true, optional: false, required: false
  private _oidcLogout = new DataAuth0TenantOidcLogoutList(this, "oidc_logout", false);
  public get oidcLogout() {
    return this._oidcLogout;
  }

  // picture_url - computed: true, optional: false, required: false
  public get pictureUrl() {
    return this.getStringAttribute('picture_url');
  }

  // pushed_authorization_requests_supported - computed: true, optional: false, required: false
  public get pushedAuthorizationRequestsSupported() {
    return this.getBooleanAttribute('pushed_authorization_requests_supported');
  }

  // sandbox_version - computed: true, optional: false, required: false
  public get sandboxVersion() {
    return this.getStringAttribute('sandbox_version');
  }

  // session_cookie - computed: true, optional: false, required: false
  private _sessionCookie = new DataAuth0TenantSessionCookieList(this, "session_cookie", false);
  public get sessionCookie() {
    return this._sessionCookie;
  }

  // session_lifetime - computed: true, optional: false, required: false
  public get sessionLifetime() {
    return this.getNumberAttribute('session_lifetime');
  }

  // sessions - computed: true, optional: false, required: false
  private _sessions = new DataAuth0TenantSessionsList(this, "sessions", false);
  public get sessions() {
    return this._sessions;
  }

  // skip_non_verifiable_callback_uri_confirmation_prompt - computed: true, optional: false, required: false
  public get skipNonVerifiableCallbackUriConfirmationPrompt() {
    return this.getStringAttribute('skip_non_verifiable_callback_uri_confirmation_prompt');
  }

  // support_email - computed: true, optional: false, required: false
  public get supportEmail() {
    return this.getStringAttribute('support_email');
  }

  // support_url - computed: true, optional: false, required: false
  public get supportUrl() {
    return this.getStringAttribute('support_url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
