// https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/data-sources/application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDavinciApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the application to retrieve.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/data-sources/application#application_id DataDavinciApplication#application_id}
  */
  readonly applicationId?: string;
  /**
  * The ID of the PingOne environment to create the DaVinci application. Must be a valid PingOne resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/data-sources/application#environment_id DataDavinciApplication#environment_id}
  */
  readonly environmentId: string;
  /**
  * The ID of the application.  Use of this parameter to fetch the application data is deprecated, use the `application_id` parameter instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/data-sources/application#id DataDavinciApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataDavinciApplicationOauthValues {
}

export function dataDavinciApplicationOauthValuesToTerraform(struct?: DataDavinciApplicationOauthValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDavinciApplicationOauthValuesToHclTerraform(struct?: DataDavinciApplicationOauthValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDavinciApplicationOauthValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDavinciApplicationOauthValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDavinciApplicationOauthValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_grants - computed: true, optional: false, required: false
  public get allowedGrants() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_grants'));
  }

  // allowed_scopes - computed: true, optional: false, required: false
  public get allowedScopes() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_scopes'));
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // enforce_signed_request_openid - computed: true, optional: false, required: false
  public get enforceSignedRequestOpenid() {
    return this.getBooleanAttribute('enforce_signed_request_openid');
  }

  // logout_uris - computed: true, optional: false, required: false
  public get logoutUris() {
    return cdktf.Fn.tolist(this.getListAttribute('logout_uris'));
  }

  // redirect_uris - computed: true, optional: false, required: false
  public get redirectUris() {
    return cdktf.Fn.tolist(this.getListAttribute('redirect_uris'));
  }

  // sp_jwks_openid - computed: true, optional: false, required: false
  public get spJwksOpenid() {
    return this.getStringAttribute('sp_jwks_openid');
  }

  // sp_jwks_url - computed: true, optional: false, required: false
  public get spJwksUrl() {
    return this.getStringAttribute('sp_jwks_url');
  }
}

export class DataDavinciApplicationOauthValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataDavinciApplicationOauthValuesOutputReference {
    return new DataDavinciApplicationOauthValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDavinciApplicationOauth {
}

export function dataDavinciApplicationOauthToTerraform(struct?: DataDavinciApplicationOauth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDavinciApplicationOauthToHclTerraform(struct?: DataDavinciApplicationOauth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDavinciApplicationOauthOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDavinciApplicationOauth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDavinciApplicationOauth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // values - computed: true, optional: false, required: false
  private _values = new DataDavinciApplicationOauthValuesList(this, "values", true);
  public get values() {
    return this._values;
  }
}

export class DataDavinciApplicationOauthList extends cdktf.ComplexList {

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
  public get(index: number): DataDavinciApplicationOauthOutputReference {
    return new DataDavinciApplicationOauthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDavinciApplicationPolicyPolicyFlow {
}

export function dataDavinciApplicationPolicyPolicyFlowToTerraform(struct?: DataDavinciApplicationPolicyPolicyFlow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDavinciApplicationPolicyPolicyFlowToHclTerraform(struct?: DataDavinciApplicationPolicyPolicyFlow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDavinciApplicationPolicyPolicyFlowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDavinciApplicationPolicyPolicyFlow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDavinciApplicationPolicyPolicyFlow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // flow_id - computed: true, optional: false, required: false
  public get flowId() {
    return this.getStringAttribute('flow_id');
  }

  // success_nodes - computed: true, optional: false, required: false
  public get successNodes() {
    return this.getListAttribute('success_nodes');
  }

  // version_id - computed: true, optional: false, required: false
  public get versionId() {
    return this.getNumberAttribute('version_id');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}

export class DataDavinciApplicationPolicyPolicyFlowList extends cdktf.ComplexList {

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
  public get(index: number): DataDavinciApplicationPolicyPolicyFlowOutputReference {
    return new DataDavinciApplicationPolicyPolicyFlowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDavinciApplicationPolicy {
}

export function dataDavinciApplicationPolicyToTerraform(struct?: DataDavinciApplicationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDavinciApplicationPolicyToHclTerraform(struct?: DataDavinciApplicationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDavinciApplicationPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDavinciApplicationPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDavinciApplicationPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getNumberAttribute('created_date');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // policy_flow - computed: true, optional: false, required: false
  private _policyFlow = new DataDavinciApplicationPolicyPolicyFlowList(this, "policy_flow", true);
  public get policyFlow() {
    return this._policyFlow;
  }

  // policy_id - computed: true, optional: false, required: false
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataDavinciApplicationPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataDavinciApplicationPolicyOutputReference {
    return new DataDavinciApplicationPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDavinciApplicationSamlValues {
}

export function dataDavinciApplicationSamlValuesToTerraform(struct?: DataDavinciApplicationSamlValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDavinciApplicationSamlValuesToHclTerraform(struct?: DataDavinciApplicationSamlValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDavinciApplicationSamlValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDavinciApplicationSamlValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDavinciApplicationSamlValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audience - computed: true, optional: false, required: false
  public get audience() {
    return this.getStringAttribute('audience');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // enforce_signed_request - computed: true, optional: false, required: false
  public get enforceSignedRequest() {
    return this.getBooleanAttribute('enforce_signed_request');
  }

  // redirect_uri - computed: true, optional: false, required: false
  public get redirectUri() {
    return this.getStringAttribute('redirect_uri');
  }

  // sp_cert - computed: true, optional: false, required: false
  public get spCert() {
    return this.getStringAttribute('sp_cert');
  }
}

export class DataDavinciApplicationSamlValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataDavinciApplicationSamlValuesOutputReference {
    return new DataDavinciApplicationSamlValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDavinciApplicationSaml {
}

export function dataDavinciApplicationSamlToTerraform(struct?: DataDavinciApplicationSaml): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDavinciApplicationSamlToHclTerraform(struct?: DataDavinciApplicationSaml): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDavinciApplicationSamlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDavinciApplicationSaml | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDavinciApplicationSaml | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // values - computed: true, optional: false, required: false
  private _values = new DataDavinciApplicationSamlValuesList(this, "values", true);
  public get values() {
    return this._values;
  }
}

export class DataDavinciApplicationSamlList extends cdktf.ComplexList {

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
  public get(index: number): DataDavinciApplicationSamlOutputReference {
    return new DataDavinciApplicationSamlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDavinciApplicationUserPortal {
}

export function dataDavinciApplicationUserPortalToTerraform(struct?: DataDavinciApplicationUserPortal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDavinciApplicationUserPortalToHclTerraform(struct?: DataDavinciApplicationUserPortal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDavinciApplicationUserPortalOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDavinciApplicationUserPortal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDavinciApplicationUserPortal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // add_auth_method_title - computed: true, optional: false, required: false
  public get addAuthMethodTitle() {
    return this.getStringAttribute('add_auth_method_title');
  }

  // cred_page_subtitle - computed: true, optional: false, required: false
  public get credPageSubtitle() {
    return this.getStringAttribute('cred_page_subtitle');
  }

  // cred_page_title - computed: true, optional: false, required: false
  public get credPageTitle() {
    return this.getStringAttribute('cred_page_title');
  }

  // flow_timeout_seconds - computed: true, optional: false, required: false
  public get flowTimeoutSeconds() {
    return this.getNumberAttribute('flow_timeout_seconds');
  }

  // name_auth_method_title - computed: true, optional: false, required: false
  public get nameAuthMethodTitle() {
    return this.getStringAttribute('name_auth_method_title');
  }

  // name_confirm_btn_text - computed: true, optional: false, required: false
  public get nameConfirmBtnText() {
    return this.getStringAttribute('name_confirm_btn_text');
  }

  // remove_auth_method_title - computed: true, optional: false, required: false
  public get removeAuthMethodTitle() {
    return this.getStringAttribute('remove_auth_method_title');
  }

  // remove_body_message - computed: true, optional: false, required: false
  public get removeBodyMessage() {
    return this.getStringAttribute('remove_body_message');
  }

  // remove_cancel_btn_text - computed: true, optional: false, required: false
  public get removeCancelBtnText() {
    return this.getStringAttribute('remove_cancel_btn_text');
  }

  // remove_confirm_btn_text - computed: true, optional: false, required: false
  public get removeConfirmBtnText() {
    return this.getStringAttribute('remove_confirm_btn_text');
  }

  // remove_message - computed: true, optional: false, required: false
  public get removeMessage() {
    return this.getStringAttribute('remove_message');
  }

  // show_logout_button - computed: true, optional: false, required: false
  public get showLogoutButton() {
    return this.getBooleanAttribute('show_logout_button');
  }

  // show_mfa_button - computed: true, optional: false, required: false
  public get showMfaButton() {
    return this.getBooleanAttribute('show_mfa_button');
  }

  // show_user_info - computed: true, optional: false, required: false
  public get showUserInfo() {
    return this.getBooleanAttribute('show_user_info');
  }

  // show_variables - computed: true, optional: false, required: false
  public get showVariables() {
    return this.getBooleanAttribute('show_variables');
  }

  // up_title - computed: true, optional: false, required: false
  public get upTitle() {
    return this.getStringAttribute('up_title');
  }

  // update_body_message - computed: true, optional: false, required: false
  public get updateBodyMessage() {
    return this.getStringAttribute('update_body_message');
  }

  // update_message - computed: true, optional: false, required: false
  public get updateMessage() {
    return this.getStringAttribute('update_message');
  }
}

export class DataDavinciApplicationUserPortalList extends cdktf.ComplexList {

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
  public get(index: number): DataDavinciApplicationUserPortalOutputReference {
    return new DataDavinciApplicationUserPortalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/data-sources/application davinci_application}
*/
export class DataDavinciApplication extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "davinci_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDavinciApplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDavinciApplication to import
  * @param importFromId The id of the existing DataDavinciApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/data-sources/application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDavinciApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "davinci_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/data-sources/application davinci_application} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDavinciApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: DataDavinciApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'davinci_application',
      terraformGeneratorMetadata: {
        providerName: 'davinci',
        providerVersion: '0.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationId = config.applicationId;
    this._environmentId = config.environmentId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key_enabled - computed: true, optional: false, required: false
  public get apiKeyEnabled() {
    return this.getBooleanAttribute('api_key_enabled');
  }

  // api_keys - computed: true, optional: false, required: false
  private _apiKeys = new cdktf.StringMap(this, "api_keys");
  public get apiKeys() {
    return this._apiKeys;
  }

  // application_id - computed: true, optional: true, required: false
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  public resetApplicationId() {
    this._applicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getNumberAttribute('created_date');
  }

  // customer_id - computed: true, optional: false, required: false
  public get customerId() {
    return this.getStringAttribute('customer_id');
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
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

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktf.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // oauth - computed: true, optional: false, required: false
  private _oauth = new DataDavinciApplicationOauthList(this, "oauth", true);
  public get oauth() {
    return this._oauth;
  }

  // policy - computed: true, optional: false, required: false
  private _policy = new DataDavinciApplicationPolicyList(this, "policy", true);
  public get policy() {
    return this._policy;
  }

  // saml - computed: true, optional: false, required: false
  private _saml = new DataDavinciApplicationSamlList(this, "saml", true);
  public get saml() {
    return this._saml;
  }

  // user_pools - computed: true, optional: false, required: false
  private _userPools = new cdktf.StringMap(this, "user_pools");
  public get userPools() {
    return this._userPools;
  }

  // user_portal - computed: true, optional: false, required: false
  private _userPortal = new DataDavinciApplicationUserPortalList(this, "user_portal", true);
  public get userPortal() {
    return this._userPortal;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
