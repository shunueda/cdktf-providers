// https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/data-sources/clients
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAuth0ClientsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter clients by application types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/data-sources/clients#app_types DataAuth0Clients#app_types}
  */
  readonly appTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/data-sources/clients#id DataAuth0Clients#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Filter clients by first party status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/data-sources/clients#is_first_party DataAuth0Clients#is_first_party}
  */
  readonly isFirstParty?: boolean | cdktf.IResolvable;
  /**
  * Filter clients by name (partial matches supported).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/data-sources/clients#name_filter DataAuth0Clients#name_filter}
  */
  readonly nameFilter?: string;
}
export interface DataAuth0ClientsClientsExpressConfigurationLinkedClients {
}

export function dataAuth0ClientsClientsExpressConfigurationLinkedClientsToTerraform(struct?: DataAuth0ClientsClientsExpressConfigurationLinkedClients): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuth0ClientsClientsExpressConfigurationLinkedClientsToHclTerraform(struct?: DataAuth0ClientsClientsExpressConfigurationLinkedClients): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuth0ClientsClientsExpressConfigurationLinkedClientsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAuth0ClientsClientsExpressConfigurationLinkedClients | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuth0ClientsClientsExpressConfigurationLinkedClients | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
}

export class DataAuth0ClientsClientsExpressConfigurationLinkedClientsList extends cdktf.ComplexList {

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
  public get(index: number): DataAuth0ClientsClientsExpressConfigurationLinkedClientsOutputReference {
    return new DataAuth0ClientsClientsExpressConfigurationLinkedClientsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAuth0ClientsClientsExpressConfiguration {
}

export function dataAuth0ClientsClientsExpressConfigurationToTerraform(struct?: DataAuth0ClientsClientsExpressConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuth0ClientsClientsExpressConfigurationToHclTerraform(struct?: DataAuth0ClientsClientsExpressConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuth0ClientsClientsExpressConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAuth0ClientsClientsExpressConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuth0ClientsClientsExpressConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_login_domain - computed: true, optional: false, required: false
  public get adminLoginDomain() {
    return this.getStringAttribute('admin_login_domain');
  }

  // connection_profile_id - computed: true, optional: false, required: false
  public get connectionProfileId() {
    return this.getStringAttribute('connection_profile_id');
  }

  // enable_client - computed: true, optional: false, required: false
  public get enableClient() {
    return this.getBooleanAttribute('enable_client');
  }

  // enable_organization - computed: true, optional: false, required: false
  public get enableOrganization() {
    return this.getBooleanAttribute('enable_organization');
  }

  // initiate_login_uri_template - computed: true, optional: false, required: false
  public get initiateLoginUriTemplate() {
    return this.getStringAttribute('initiate_login_uri_template');
  }

  // linked_clients - computed: true, optional: false, required: false
  private _linkedClients = new DataAuth0ClientsClientsExpressConfigurationLinkedClientsList(this, "linked_clients", false);
  public get linkedClients() {
    return this._linkedClients;
  }

  // oin_submission_id - computed: true, optional: false, required: false
  public get oinSubmissionId() {
    return this.getStringAttribute('oin_submission_id');
  }

  // okta_oin_client_id - computed: true, optional: false, required: false
  public get oktaOinClientId() {
    return this.getStringAttribute('okta_oin_client_id');
  }

  // user_attribute_profile_id - computed: true, optional: false, required: false
  public get userAttributeProfileId() {
    return this.getStringAttribute('user_attribute_profile_id');
  }
}

export class DataAuth0ClientsClientsExpressConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAuth0ClientsClientsExpressConfigurationOutputReference {
    return new DataAuth0ClientsClientsExpressConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAuth0ClientsClientsOidcLogoutBackchannelLogoutInitiators {
}

export function dataAuth0ClientsClientsOidcLogoutBackchannelLogoutInitiatorsToTerraform(struct?: DataAuth0ClientsClientsOidcLogoutBackchannelLogoutInitiators): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuth0ClientsClientsOidcLogoutBackchannelLogoutInitiatorsToHclTerraform(struct?: DataAuth0ClientsClientsOidcLogoutBackchannelLogoutInitiators): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuth0ClientsClientsOidcLogoutBackchannelLogoutInitiatorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAuth0ClientsClientsOidcLogoutBackchannelLogoutInitiators | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuth0ClientsClientsOidcLogoutBackchannelLogoutInitiators | undefined) {
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

  // selected_initiators - computed: true, optional: false, required: false
  public get selectedInitiators() {
    return cdktf.Fn.tolist(this.getListAttribute('selected_initiators'));
  }
}

export class DataAuth0ClientsClientsOidcLogoutBackchannelLogoutInitiatorsList extends cdktf.ComplexList {

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
  public get(index: number): DataAuth0ClientsClientsOidcLogoutBackchannelLogoutInitiatorsOutputReference {
    return new DataAuth0ClientsClientsOidcLogoutBackchannelLogoutInitiatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAuth0ClientsClientsOidcLogout {
}

export function dataAuth0ClientsClientsOidcLogoutToTerraform(struct?: DataAuth0ClientsClientsOidcLogout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuth0ClientsClientsOidcLogoutToHclTerraform(struct?: DataAuth0ClientsClientsOidcLogout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuth0ClientsClientsOidcLogoutOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAuth0ClientsClientsOidcLogout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuth0ClientsClientsOidcLogout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backchannel_logout_initiators - computed: true, optional: false, required: false
  private _backchannelLogoutInitiators = new DataAuth0ClientsClientsOidcLogoutBackchannelLogoutInitiatorsList(this, "backchannel_logout_initiators", false);
  public get backchannelLogoutInitiators() {
    return this._backchannelLogoutInitiators;
  }

  // backchannel_logout_urls - computed: true, optional: false, required: false
  public get backchannelLogoutUrls() {
    return cdktf.Fn.tolist(this.getListAttribute('backchannel_logout_urls'));
  }
}

export class DataAuth0ClientsClientsOidcLogoutList extends cdktf.ComplexList {

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
  public get(index: number): DataAuth0ClientsClientsOidcLogoutOutputReference {
    return new DataAuth0ClientsClientsOidcLogoutOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAuth0ClientsClientsSessionTransfer {
}

export function dataAuth0ClientsClientsSessionTransferToTerraform(struct?: DataAuth0ClientsClientsSessionTransfer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuth0ClientsClientsSessionTransferToHclTerraform(struct?: DataAuth0ClientsClientsSessionTransfer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuth0ClientsClientsSessionTransferOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAuth0ClientsClientsSessionTransfer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuth0ClientsClientsSessionTransfer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_refresh_token - computed: true, optional: false, required: false
  public get allowRefreshToken() {
    return this.getBooleanAttribute('allow_refresh_token');
  }

  // allowed_authentication_methods - computed: true, optional: false, required: false
  public get allowedAuthenticationMethods() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_authentication_methods'));
  }

  // can_create_session_transfer_token - computed: true, optional: false, required: false
  public get canCreateSessionTransferToken() {
    return this.getBooleanAttribute('can_create_session_transfer_token');
  }

  // enforce_cascade_revocation - computed: true, optional: false, required: false
  public get enforceCascadeRevocation() {
    return this.getBooleanAttribute('enforce_cascade_revocation');
  }

  // enforce_device_binding - computed: true, optional: false, required: false
  public get enforceDeviceBinding() {
    return this.getStringAttribute('enforce_device_binding');
  }

  // enforce_online_refresh_tokens - computed: true, optional: false, required: false
  public get enforceOnlineRefreshTokens() {
    return this.getBooleanAttribute('enforce_online_refresh_tokens');
  }
}

export class DataAuth0ClientsClientsSessionTransferList extends cdktf.ComplexList {

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
  public get(index: number): DataAuth0ClientsClientsSessionTransferOutputReference {
    return new DataAuth0ClientsClientsSessionTransferOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAuth0ClientsClientsTokenExchange {
}

export function dataAuth0ClientsClientsTokenExchangeToTerraform(struct?: DataAuth0ClientsClientsTokenExchange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuth0ClientsClientsTokenExchangeToHclTerraform(struct?: DataAuth0ClientsClientsTokenExchange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuth0ClientsClientsTokenExchangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAuth0ClientsClientsTokenExchange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuth0ClientsClientsTokenExchange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_any_profile_of_type - computed: true, optional: false, required: false
  public get allowAnyProfileOfType() {
    return this.getListAttribute('allow_any_profile_of_type');
  }
}

export class DataAuth0ClientsClientsTokenExchangeList extends cdktf.ComplexList {

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
  public get(index: number): DataAuth0ClientsClientsTokenExchangeOutputReference {
    return new DataAuth0ClientsClientsTokenExchangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAuth0ClientsClientsTokenQuotaClientCredentials {
}

export function dataAuth0ClientsClientsTokenQuotaClientCredentialsToTerraform(struct?: DataAuth0ClientsClientsTokenQuotaClientCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuth0ClientsClientsTokenQuotaClientCredentialsToHclTerraform(struct?: DataAuth0ClientsClientsTokenQuotaClientCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuth0ClientsClientsTokenQuotaClientCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAuth0ClientsClientsTokenQuotaClientCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuth0ClientsClientsTokenQuotaClientCredentials | undefined) {
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

export class DataAuth0ClientsClientsTokenQuotaClientCredentialsList extends cdktf.ComplexList {

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
  public get(index: number): DataAuth0ClientsClientsTokenQuotaClientCredentialsOutputReference {
    return new DataAuth0ClientsClientsTokenQuotaClientCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAuth0ClientsClientsTokenQuota {
}

export function dataAuth0ClientsClientsTokenQuotaToTerraform(struct?: DataAuth0ClientsClientsTokenQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuth0ClientsClientsTokenQuotaToHclTerraform(struct?: DataAuth0ClientsClientsTokenQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuth0ClientsClientsTokenQuotaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAuth0ClientsClientsTokenQuota | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuth0ClientsClientsTokenQuota | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_credentials - computed: true, optional: false, required: false
  private _clientCredentials = new DataAuth0ClientsClientsTokenQuotaClientCredentialsList(this, "client_credentials", false);
  public get clientCredentials() {
    return this._clientCredentials;
  }
}

export class DataAuth0ClientsClientsTokenQuotaList extends cdktf.ComplexList {

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
  public get(index: number): DataAuth0ClientsClientsTokenQuotaOutputReference {
    return new DataAuth0ClientsClientsTokenQuotaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAuth0ClientsClients {
}

export function dataAuth0ClientsClientsToTerraform(struct?: DataAuth0ClientsClients): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAuth0ClientsClientsToHclTerraform(struct?: DataAuth0ClientsClients): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAuth0ClientsClientsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAuth0ClientsClients | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAuth0ClientsClients | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_clients - computed: true, optional: false, required: false
  public get allowedClients() {
    return this.getListAttribute('allowed_clients');
  }

  // allowed_logout_urls - computed: true, optional: false, required: false
  public get allowedLogoutUrls() {
    return this.getListAttribute('allowed_logout_urls');
  }

  // allowed_origins - computed: true, optional: false, required: false
  public get allowedOrigins() {
    return this.getListAttribute('allowed_origins');
  }

  // app_type - computed: true, optional: false, required: false
  public get appType() {
    return this.getStringAttribute('app_type');
  }

  // async_approval_notification_channels - computed: true, optional: false, required: false
  public get asyncApprovalNotificationChannels() {
    return this.getListAttribute('async_approval_notification_channels');
  }

  // callbacks - computed: true, optional: false, required: false
  public get callbacks() {
    return this.getListAttribute('callbacks');
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_metadata - computed: true, optional: false, required: false
  private _clientMetadata = new cdktf.StringMap(this, "client_metadata");
  public get clientMetadata() {
    return this._clientMetadata;
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // express_configuration - computed: true, optional: false, required: false
  private _expressConfiguration = new DataAuth0ClientsClientsExpressConfigurationList(this, "express_configuration", false);
  public get expressConfiguration() {
    return this._expressConfiguration;
  }

  // grant_types - computed: true, optional: false, required: false
  public get grantTypes() {
    return this.getListAttribute('grant_types');
  }

  // is_first_party - computed: true, optional: false, required: false
  public get isFirstParty() {
    return this.getBooleanAttribute('is_first_party');
  }

  // is_token_endpoint_ip_header_trusted - computed: true, optional: false, required: false
  public get isTokenEndpointIpHeaderTrusted() {
    return this.getBooleanAttribute('is_token_endpoint_ip_header_trusted');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // oidc_logout - computed: true, optional: false, required: false
  private _oidcLogout = new DataAuth0ClientsClientsOidcLogoutList(this, "oidc_logout", false);
  public get oidcLogout() {
    return this._oidcLogout;
  }

  // organization_discovery_methods - computed: true, optional: false, required: false
  public get organizationDiscoveryMethods() {
    return this.getListAttribute('organization_discovery_methods');
  }

  // resource_server_identifier - computed: true, optional: false, required: false
  public get resourceServerIdentifier() {
    return this.getStringAttribute('resource_server_identifier');
  }

  // session_transfer - computed: true, optional: false, required: false
  private _sessionTransfer = new DataAuth0ClientsClientsSessionTransferList(this, "session_transfer", false);
  public get sessionTransfer() {
    return this._sessionTransfer;
  }

  // skip_non_verifiable_callback_uri_confirmation_prompt - computed: true, optional: false, required: false
  public get skipNonVerifiableCallbackUriConfirmationPrompt() {
    return this.getStringAttribute('skip_non_verifiable_callback_uri_confirmation_prompt');
  }

  // token_exchange - computed: true, optional: false, required: false
  private _tokenExchange = new DataAuth0ClientsClientsTokenExchangeList(this, "token_exchange", false);
  public get tokenExchange() {
    return this._tokenExchange;
  }

  // token_quota - computed: true, optional: false, required: false
  private _tokenQuota = new DataAuth0ClientsClientsTokenQuotaList(this, "token_quota", false);
  public get tokenQuota() {
    return this._tokenQuota;
  }

  // web_origins - computed: true, optional: false, required: false
  public get webOrigins() {
    return this.getListAttribute('web_origins');
  }
}

export class DataAuth0ClientsClientsList extends cdktf.ComplexList {

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
  public get(index: number): DataAuth0ClientsClientsOutputReference {
    return new DataAuth0ClientsClientsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/data-sources/clients auth0_clients}
*/
export class DataAuth0Clients extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "auth0_clients";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAuth0Clients resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAuth0Clients to import
  * @param importFromId The id of the existing DataAuth0Clients that should be imported. Refer to the {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/data-sources/clients#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAuth0Clients to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "auth0_clients", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/auth0/auth0/1.37.0/docs/data-sources/clients auth0_clients} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAuth0ClientsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAuth0ClientsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'auth0_clients',
      terraformGeneratorMetadata: {
        providerName: 'auth0',
        providerVersion: '1.37.0',
        providerVersionConstraint: '1.37.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appTypes = config.appTypes;
    this._id = config.id;
    this._isFirstParty = config.isFirstParty;
    this._nameFilter = config.nameFilter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_types - computed: false, optional: true, required: false
  private _appTypes?: string[]; 
  public get appTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('app_types'));
  }
  public set appTypes(value: string[]) {
    this._appTypes = value;
  }
  public resetAppTypes() {
    this._appTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appTypesInput() {
    return this._appTypes;
  }

  // clients - computed: true, optional: false, required: false
  private _clients = new DataAuth0ClientsClientsList(this, "clients", false);
  public get clients() {
    return this._clients;
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

  // is_first_party - computed: false, optional: true, required: false
  private _isFirstParty?: boolean | cdktf.IResolvable; 
  public get isFirstParty() {
    return this.getBooleanAttribute('is_first_party');
  }
  public set isFirstParty(value: boolean | cdktf.IResolvable) {
    this._isFirstParty = value;
  }
  public resetIsFirstParty() {
    this._isFirstParty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFirstPartyInput() {
    return this._isFirstParty;
  }

  // name_filter - computed: false, optional: true, required: false
  private _nameFilter?: string; 
  public get nameFilter() {
    return this.getStringAttribute('name_filter');
  }
  public set nameFilter(value: string) {
    this._nameFilter = value;
  }
  public resetNameFilter() {
    this._nameFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameFilterInput() {
    return this._nameFilter;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._appTypes),
      id: cdktf.stringToTerraform(this._id),
      is_first_party: cdktf.booleanToTerraform(this._isFirstParty),
      name_filter: cdktf.stringToTerraform(this._nameFilter),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._appTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_first_party: {
        value: cdktf.booleanToHclTerraform(this._isFirstParty),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name_filter: {
        value: cdktf.stringToHclTerraform(this._nameFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
