// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_api_client
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamApiClientConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enables the API client to manage more than one account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_api_client#allow_account_switch IamApiClient#allow_account_switch}
  */
  readonly allowAccountSwitch?: boolean | cdktf.IResolvable;
  /**
  * The APIs the API client can access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_api_client#api_access IamApiClient#api_access}
  */
  readonly apiAccess: IamApiClientApiAccess;
  /**
  * The API client's valid users. When the 'client_type' is either 'CLIENT' or 'USER_CLIENT', you need to specify a single username in an array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_api_client#authorized_users IamApiClient#authorized_users}
  */
  readonly authorizedUsers: string[];
  /**
  * Whether the API client can create a credential for a new API client. The default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_api_client#can_auto_create_credential IamApiClient#can_auto_create_credential}
  */
  readonly canAutoCreateCredential?: boolean | cdktf.IResolvable;
  /**
  * A human-readable description of the API client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_api_client#client_description IamApiClient#client_description}
  */
  readonly clientDescription?: string;
  /**
  * A human-readable name for the API client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_api_client#client_name IamApiClient#client_name}
  */
  readonly clientName: string;
  /**
  * Specifies the API client's ownership and credential management. 'CLIENT' indicates the creator owns and manages the credentials. 'USER_CLIENT' indicates another user owns the client and manages the credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_api_client#client_type IamApiClient#client_type}
  */
  readonly clientType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_api_client#credential IamApiClient#credential}
  */
  readonly credential: IamApiClientCredential;
  /**
  * Specifies the API client's group access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_api_client#group_access IamApiClient#group_access}
  */
  readonly groupAccess: IamApiClientGroupAccess;
  /**
  * Specifies the API client's IP list restriction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_api_client#ip_acl IamApiClient#ip_acl}
  */
  readonly ipAcl?: IamApiClientIpAcl;
  /**
  * Whether to lock or unlock the API client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_api_client#lock IamApiClient#lock}
  */
  readonly lock?: boolean | cdktf.IResolvable;
  /**
  * Email addresses to notify users when credentials expire.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_api_client#notification_emails IamApiClient#notification_emails}
  */
  readonly notificationEmails?: string[];
  /**
  * Configures the API client to access the Fast Purge API. Provide it only if the `apis` attribute includes an `api_name` of `CCU API`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_api_client#purge_options IamApiClient#purge_options}
  */
  readonly purgeOptions?: IamApiClientPurgeOptions;
}
export interface IamApiClientActions {
}

export function iamApiClientActionsToTerraform(struct?: IamApiClientActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function iamApiClientActionsToHclTerraform(struct?: IamApiClientActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IamApiClientActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IamApiClientActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamApiClientActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deactivate_all - computed: true, optional: false, required: false
  public get deactivateAll() {
    return this.getBooleanAttribute('deactivate_all');
  }

  // delete - computed: true, optional: false, required: false
  public get delete() {
    return this.getBooleanAttribute('delete');
  }

  // edit - computed: true, optional: false, required: false
  public get edit() {
    return this.getBooleanAttribute('edit');
  }

  // edit_apis - computed: true, optional: false, required: false
  public get editApis() {
    return this.getBooleanAttribute('edit_apis');
  }

  // edit_auth - computed: true, optional: false, required: false
  public get editAuth() {
    return this.getBooleanAttribute('edit_auth');
  }

  // edit_groups - computed: true, optional: false, required: false
  public get editGroups() {
    return this.getBooleanAttribute('edit_groups');
  }

  // edit_ip_acl - computed: true, optional: false, required: false
  public get editIpAcl() {
    return this.getBooleanAttribute('edit_ip_acl');
  }

  // edit_switch_account - computed: true, optional: false, required: false
  public get editSwitchAccount() {
    return this.getBooleanAttribute('edit_switch_account');
  }

  // lock - computed: true, optional: false, required: false
  public get lock() {
    return this.getBooleanAttribute('lock');
  }

  // transfer - computed: true, optional: false, required: false
  public get transfer() {
    return this.getBooleanAttribute('transfer');
  }

  // unlock - computed: true, optional: false, required: false
  public get unlock() {
    return this.getBooleanAttribute('unlock');
  }
}
export interface IamApiClientApiAccessApis {
  /**
  * The API client's access level on an API basis, either 'READ-ONLY', 'READ-WRITE', 'CREDENTIAL-READ-ONLY', or 'CREDENTIAL-READ-WRITE'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_api_client#access_level IamApiClient#access_level}
  */
  readonly accessLevel: string;
  /**
  * A unique identifier of the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_api_client#api_id IamApiClient#api_id}
  */
  readonly apiId: number;
}

export function iamApiClientApiAccessApisToTerraform(struct?: IamApiClientApiAccessApis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_level: cdktf.stringToTerraform(struct!.accessLevel),
    api_id: cdktf.numberToTerraform(struct!.apiId),
  }
}


export function iamApiClientApiAccessApisToHclTerraform(struct?: IamApiClientApiAccessApis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_level: {
      value: cdktf.stringToHclTerraform(struct!.accessLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_id: {
      value: cdktf.numberToHclTerraform(struct!.apiId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IamApiClientApiAccessApisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): IamApiClientApiAccessApis | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessLevel = this._accessLevel;
    }
    if (this._apiId !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiId = this._apiId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamApiClientApiAccessApis | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessLevel = undefined;
      this._apiId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessLevel = value.accessLevel;
      this._apiId = value.apiId;
    }
  }

  // access_level - computed: true, optional: false, required: true
  private _accessLevel?: string; 
  public get accessLevel() {
    return this.getStringAttribute('access_level');
  }
  public set accessLevel(value: string) {
    this._accessLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelInput() {
    return this._accessLevel;
  }

  // api_id - computed: true, optional: false, required: true
  private _apiId?: number; 
  public get apiId() {
    return this.getNumberAttribute('api_id');
  }
  public set apiId(value: number) {
    this._apiId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiIdInput() {
    return this._apiId;
  }

  // api_name - computed: true, optional: false, required: false
  public get apiName() {
    return this.getStringAttribute('api_name');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // documentation_url - computed: true, optional: false, required: false
  public get documentationUrl() {
    return this.getStringAttribute('documentation_url');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
}

export class IamApiClientApiAccessApisList extends cdktf.ComplexList {
  public internalValue? : IamApiClientApiAccessApis[] | cdktf.IResolvable

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
  public get(index: number): IamApiClientApiAccessApisOutputReference {
    return new IamApiClientApiAccessApisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IamApiClientApiAccess {
  /**
  * Enables the API client to access a full set of available APIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_api_client#all_accessible_apis IamApiClient#all_accessible_apis}
  */
  readonly allAccessibleApis: boolean | cdktf.IResolvable;
  /**
  * The set of APIs the API client can access when `all_accessible_apis` is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_api_client#apis IamApiClient#apis}
  */
  readonly apis?: IamApiClientApiAccessApis[] | cdktf.IResolvable;
}

export function iamApiClientApiAccessToTerraform(struct?: IamApiClientApiAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_accessible_apis: cdktf.booleanToTerraform(struct!.allAccessibleApis),
    apis: cdktf.listMapper(iamApiClientApiAccessApisToTerraform, false)(struct!.apis),
  }
}


export function iamApiClientApiAccessToHclTerraform(struct?: IamApiClientApiAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_accessible_apis: {
      value: cdktf.booleanToHclTerraform(struct!.allAccessibleApis),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    apis: {
      value: cdktf.listMapperHcl(iamApiClientApiAccessApisToHclTerraform, false)(struct!.apis),
      isBlock: true,
      type: "set",
      storageClassType: "IamApiClientApiAccessApisList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IamApiClientApiAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IamApiClientApiAccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allAccessibleApis !== undefined) {
      hasAnyValues = true;
      internalValueResult.allAccessibleApis = this._allAccessibleApis;
    }
    if (this._apis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apis = this._apis?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamApiClientApiAccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allAccessibleApis = undefined;
      this._apis.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allAccessibleApis = value.allAccessibleApis;
      this._apis.internalValue = value.apis;
    }
  }

  // all_accessible_apis - computed: false, optional: false, required: true
  private _allAccessibleApis?: boolean | cdktf.IResolvable; 
  public get allAccessibleApis() {
    return this.getBooleanAttribute('all_accessible_apis');
  }
  public set allAccessibleApis(value: boolean | cdktf.IResolvable) {
    this._allAccessibleApis = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allAccessibleApisInput() {
    return this._allAccessibleApis;
  }

  // apis - computed: true, optional: true, required: false
  private _apis = new IamApiClientApiAccessApisList(this, "apis", true);
  public get apis() {
    return this._apis;
  }
  public putApis(value: IamApiClientApiAccessApis[] | cdktf.IResolvable) {
    this._apis.internalValue = value;
  }
  public resetApis() {
    this._apis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apisInput() {
    return this._apis.internalValue;
  }
}
export interface IamApiClientCredentialActions {
}

export function iamApiClientCredentialActionsToTerraform(struct?: IamApiClientCredentialActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function iamApiClientCredentialActionsToHclTerraform(struct?: IamApiClientCredentialActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IamApiClientCredentialActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IamApiClientCredentialActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamApiClientCredentialActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // activate - computed: true, optional: false, required: false
  public get activate() {
    return this.getBooleanAttribute('activate');
  }

  // deactivate - computed: true, optional: false, required: false
  public get deactivate() {
    return this.getBooleanAttribute('deactivate');
  }

  // delete - computed: true, optional: false, required: false
  public get delete() {
    return this.getBooleanAttribute('delete');
  }

  // edit_description - computed: true, optional: false, required: false
  public get editDescription() {
    return this.getBooleanAttribute('edit_description');
  }

  // edit_expiration - computed: true, optional: false, required: false
  public get editExpiration() {
    return this.getBooleanAttribute('edit_expiration');
  }
}
export interface IamApiClientCredential {
  /**
  * A human-readable description for the credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_api_client#description IamApiClient#description}
  */
  readonly description?: string;
  /**
  * The ISO 8601 timestamp indicating when the credential expires. The default expiration date is two years from the creation date.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_api_client#expires_on IamApiClient#expires_on}
  */
  readonly expiresOn?: string;
  /**
  * Whether a credential is 'ACTIVE', 'INACTIVE', or 'DELETED'. Can be updated to 'ACTIVE' or 'INACTIVE' only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_api_client#status IamApiClient#status}
  */
  readonly status?: string;
}

export function iamApiClientCredentialToTerraform(struct?: IamApiClientCredential | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    expires_on: cdktf.stringToTerraform(struct!.expiresOn),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function iamApiClientCredentialToHclTerraform(struct?: IamApiClientCredential | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expires_on: {
      value: cdktf.stringToHclTerraform(struct!.expiresOn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IamApiClientCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IamApiClientCredential | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._expiresOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiresOn = this._expiresOn;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamApiClientCredential | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._expiresOn = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._expiresOn = value.expiresOn;
      this._status = value.status;
    }
  }

  // actions - computed: true, optional: false, required: false
  private _actions = new IamApiClientCredentialActionsOutputReference(this, "actions");
  public get actions() {
    return this._actions;
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // client_token - computed: true, optional: false, required: false
  public get clientToken() {
    return this.getStringAttribute('client_token');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // credential_id - computed: true, optional: false, required: false
  public get credentialId() {
    return this.getNumberAttribute('credential_id');
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // expires_on - computed: true, optional: true, required: false
  private _expiresOn?: string; 
  public get expiresOn() {
    return this.getStringAttribute('expires_on');
  }
  public set expiresOn(value: string) {
    this._expiresOn = value;
  }
  public resetExpiresOn() {
    this._expiresOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresOnInput() {
    return this._expiresOn;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface IamApiClientGroupAccessGroupsSubGroups {
  /**
  * A unique identifier for the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_api_client#group_id IamApiClient#group_id}
  */
  readonly groupId: number;
  /**
  * A unique identifier for the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_api_client#role_id IamApiClient#role_id}
  */
  readonly roleId: number;
  /**
  * Groups the API client can access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_api_client#sub_groups IamApiClient#sub_groups}
  */
  readonly subGroups?: IamApiClientGroupAccessGroupsSubGroups[] | cdktf.IResolvable;
}

export function iamApiClientGroupAccessGroupsSubGroupsToTerraform(struct?: IamApiClientGroupAccessGroupsSubGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_id: cdktf.numberToTerraform(struct!.groupId),
    role_id: cdktf.numberToTerraform(struct!.roleId),
    sub_groups: cdktf.listMapper(iamApiClientGroupAccessGroupsSubGroupsToTerraform, false)(struct!.subGroups),
  }
}


export function iamApiClientGroupAccessGroupsSubGroupsToHclTerraform(struct?: IamApiClientGroupAccessGroupsSubGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_id: {
      value: cdktf.numberToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    role_id: {
      value: cdktf.numberToHclTerraform(struct!.roleId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sub_groups: {
      value: cdktf.listMapperHcl(iamApiClientGroupAccessGroupsSubGroupsToHclTerraform, false)(struct!.subGroups),
      isBlock: true,
      type: "list",
      storageClassType: "IamApiClientGroupAccessGroupsSubGroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IamApiClientGroupAccessGroupsSubGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): IamApiClientGroupAccessGroupsSubGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._roleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleId = this._roleId;
    }
    if (this._subGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subGroups = this._subGroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamApiClientGroupAccessGroupsSubGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupId = undefined;
      this._roleId = undefined;
      this._subGroups.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupId = value.groupId;
      this._roleId = value.roleId;
      this._subGroups.internalValue = value.subGroups;
    }
  }

  // group_id - computed: true, optional: false, required: true
  private _groupId?: number; 
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }
  public set groupId(value: number) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // is_blocked - computed: true, optional: false, required: false
  public get isBlocked() {
    return this.getBooleanAttribute('is_blocked');
  }

  // parent_group_id - computed: true, optional: false, required: false
  public get parentGroupId() {
    return this.getNumberAttribute('parent_group_id');
  }

  // role_description - computed: true, optional: false, required: false
  public get roleDescription() {
    return this.getStringAttribute('role_description');
  }

  // role_id - computed: true, optional: false, required: true
  private _roleId?: number; 
  public get roleId() {
    return this.getNumberAttribute('role_id');
  }
  public set roleId(value: number) {
    this._roleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdInput() {
    return this._roleId;
  }

  // role_name - computed: true, optional: false, required: false
  public get roleName() {
    return this.getStringAttribute('role_name');
  }

  // sub_groups - computed: true, optional: true, required: false
  private _subGroups = new IamApiClientGroupAccessGroupsSubGroupsList(this, "sub_groups", false);
  public get subGroups() {
    return this._subGroups;
  }
  public putSubGroups(value: IamApiClientGroupAccessGroupsSubGroups[] | cdktf.IResolvable) {
    this._subGroups.internalValue = value;
  }
  public resetSubGroups() {
    this._subGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subGroupsInput() {
    return this._subGroups.internalValue;
  }
}

export class IamApiClientGroupAccessGroupsSubGroupsList extends cdktf.ComplexList {
  public internalValue? : IamApiClientGroupAccessGroupsSubGroups[] | cdktf.IResolvable

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
  public get(index: number): IamApiClientGroupAccessGroupsSubGroupsOutputReference {
    return new IamApiClientGroupAccessGroupsSubGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IamApiClientGroupAccessGroups {
  /**
  * A unique identifier for the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_api_client#group_id IamApiClient#group_id}
  */
  readonly groupId: number;
  /**
  * A unique identifier for the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_api_client#role_id IamApiClient#role_id}
  */
  readonly roleId: number;
  /**
  * Groups the API client can access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_api_client#sub_groups IamApiClient#sub_groups}
  */
  readonly subGroups?: IamApiClientGroupAccessGroupsSubGroups[] | cdktf.IResolvable;
}

export function iamApiClientGroupAccessGroupsToTerraform(struct?: IamApiClientGroupAccessGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_id: cdktf.numberToTerraform(struct!.groupId),
    role_id: cdktf.numberToTerraform(struct!.roleId),
    sub_groups: cdktf.listMapper(iamApiClientGroupAccessGroupsSubGroupsToTerraform, false)(struct!.subGroups),
  }
}


export function iamApiClientGroupAccessGroupsToHclTerraform(struct?: IamApiClientGroupAccessGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_id: {
      value: cdktf.numberToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    role_id: {
      value: cdktf.numberToHclTerraform(struct!.roleId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sub_groups: {
      value: cdktf.listMapperHcl(iamApiClientGroupAccessGroupsSubGroupsToHclTerraform, false)(struct!.subGroups),
      isBlock: true,
      type: "list",
      storageClassType: "IamApiClientGroupAccessGroupsSubGroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IamApiClientGroupAccessGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): IamApiClientGroupAccessGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._roleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleId = this._roleId;
    }
    if (this._subGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subGroups = this._subGroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamApiClientGroupAccessGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupId = undefined;
      this._roleId = undefined;
      this._subGroups.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupId = value.groupId;
      this._roleId = value.roleId;
      this._subGroups.internalValue = value.subGroups;
    }
  }

  // group_id - computed: true, optional: false, required: true
  private _groupId?: number; 
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }
  public set groupId(value: number) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // is_blocked - computed: true, optional: false, required: false
  public get isBlocked() {
    return this.getBooleanAttribute('is_blocked');
  }

  // parent_group_id - computed: true, optional: false, required: false
  public get parentGroupId() {
    return this.getNumberAttribute('parent_group_id');
  }

  // role_description - computed: true, optional: false, required: false
  public get roleDescription() {
    return this.getStringAttribute('role_description');
  }

  // role_id - computed: true, optional: false, required: true
  private _roleId?: number; 
  public get roleId() {
    return this.getNumberAttribute('role_id');
  }
  public set roleId(value: number) {
    this._roleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdInput() {
    return this._roleId;
  }

  // role_name - computed: true, optional: false, required: false
  public get roleName() {
    return this.getStringAttribute('role_name');
  }

  // sub_groups - computed: true, optional: true, required: false
  private _subGroups = new IamApiClientGroupAccessGroupsSubGroupsList(this, "sub_groups", false);
  public get subGroups() {
    return this._subGroups;
  }
  public putSubGroups(value: IamApiClientGroupAccessGroupsSubGroups[] | cdktf.IResolvable) {
    this._subGroups.internalValue = value;
  }
  public resetSubGroups() {
    this._subGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subGroupsInput() {
    return this._subGroups.internalValue;
  }
}

export class IamApiClientGroupAccessGroupsList extends cdktf.ComplexList {
  public internalValue? : IamApiClientGroupAccessGroups[] | cdktf.IResolvable

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
  public get(index: number): IamApiClientGroupAccessGroupsOutputReference {
    return new IamApiClientGroupAccessGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IamApiClientGroupAccess {
  /**
  * Sets the API client's group access the same as the authorized user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_api_client#clone_authorized_user_groups IamApiClient#clone_authorized_user_groups}
  */
  readonly cloneAuthorizedUserGroups: boolean | cdktf.IResolvable;
  /**
  * Groups the API client can access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_api_client#groups IamApiClient#groups}
  */
  readonly groups?: IamApiClientGroupAccessGroups[] | cdktf.IResolvable;
}

export function iamApiClientGroupAccessToTerraform(struct?: IamApiClientGroupAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clone_authorized_user_groups: cdktf.booleanToTerraform(struct!.cloneAuthorizedUserGroups),
    groups: cdktf.listMapper(iamApiClientGroupAccessGroupsToTerraform, false)(struct!.groups),
  }
}


export function iamApiClientGroupAccessToHclTerraform(struct?: IamApiClientGroupAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clone_authorized_user_groups: {
      value: cdktf.booleanToHclTerraform(struct!.cloneAuthorizedUserGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    groups: {
      value: cdktf.listMapperHcl(iamApiClientGroupAccessGroupsToHclTerraform, false)(struct!.groups),
      isBlock: true,
      type: "list",
      storageClassType: "IamApiClientGroupAccessGroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IamApiClientGroupAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IamApiClientGroupAccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloneAuthorizedUserGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloneAuthorizedUserGroups = this._cloneAuthorizedUserGroups;
    }
    if (this._groups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamApiClientGroupAccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloneAuthorizedUserGroups = undefined;
      this._groups.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloneAuthorizedUserGroups = value.cloneAuthorizedUserGroups;
      this._groups.internalValue = value.groups;
    }
  }

  // clone_authorized_user_groups - computed: false, optional: false, required: true
  private _cloneAuthorizedUserGroups?: boolean | cdktf.IResolvable; 
  public get cloneAuthorizedUserGroups() {
    return this.getBooleanAttribute('clone_authorized_user_groups');
  }
  public set cloneAuthorizedUserGroups(value: boolean | cdktf.IResolvable) {
    this._cloneAuthorizedUserGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloneAuthorizedUserGroupsInput() {
    return this._cloneAuthorizedUserGroups;
  }

  // groups - computed: true, optional: true, required: false
  private _groups = new IamApiClientGroupAccessGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
  public putGroups(value: IamApiClientGroupAccessGroups[] | cdktf.IResolvable) {
    this._groups.internalValue = value;
  }
  public resetGroups() {
    this._groups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups.internalValue;
  }
}
export interface IamApiClientIpAcl {
  /**
  * IP addresses or CIDR blocks the API client can access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_api_client#cidr IamApiClient#cidr}
  */
  readonly cidr?: string[];
  /**
  * Enables the API client to access the IP access control list (ACL).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_api_client#enable IamApiClient#enable}
  */
  readonly enable: boolean | cdktf.IResolvable;
}

export function iamApiClientIpAclToTerraform(struct?: IamApiClientIpAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cidr),
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}


export function iamApiClientIpAclToHclTerraform(struct?: IamApiClientIpAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cidr),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IamApiClientIpAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IamApiClientIpAcl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamApiClientIpAcl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
      this._enable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
      this._enable = value.enable;
    }
  }

  // cidr - computed: false, optional: true, required: false
  private _cidr?: string[]; 
  public get cidr() {
    return this.getListAttribute('cidr');
  }
  public set cidr(value: string[]) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // enable - computed: false, optional: false, required: true
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }
}
export interface IamApiClientPurgeOptionsCpCodeAccess {
  /**
  * Whether the API can purge content by all current and new CP codes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_api_client#all_current_and_new_cp_codes IamApiClient#all_current_and_new_cp_codes}
  */
  readonly allCurrentAndNewCpCodes: boolean | cdktf.IResolvable;
  /**
  * CP codes the API client can purge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_api_client#cp_codes IamApiClient#cp_codes}
  */
  readonly cpCodes?: number[];
}

export function iamApiClientPurgeOptionsCpCodeAccessToTerraform(struct?: IamApiClientPurgeOptionsCpCodeAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_current_and_new_cp_codes: cdktf.booleanToTerraform(struct!.allCurrentAndNewCpCodes),
    cp_codes: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.cpCodes),
  }
}


export function iamApiClientPurgeOptionsCpCodeAccessToHclTerraform(struct?: IamApiClientPurgeOptionsCpCodeAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_current_and_new_cp_codes: {
      value: cdktf.booleanToHclTerraform(struct!.allCurrentAndNewCpCodes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cp_codes: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.cpCodes),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IamApiClientPurgeOptionsCpCodeAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IamApiClientPurgeOptionsCpCodeAccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allCurrentAndNewCpCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allCurrentAndNewCpCodes = this._allCurrentAndNewCpCodes;
    }
    if (this._cpCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpCodes = this._cpCodes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamApiClientPurgeOptionsCpCodeAccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allCurrentAndNewCpCodes = undefined;
      this._cpCodes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allCurrentAndNewCpCodes = value.allCurrentAndNewCpCodes;
      this._cpCodes = value.cpCodes;
    }
  }

  // all_current_and_new_cp_codes - computed: false, optional: false, required: true
  private _allCurrentAndNewCpCodes?: boolean | cdktf.IResolvable; 
  public get allCurrentAndNewCpCodes() {
    return this.getBooleanAttribute('all_current_and_new_cp_codes');
  }
  public set allCurrentAndNewCpCodes(value: boolean | cdktf.IResolvable) {
    this._allCurrentAndNewCpCodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allCurrentAndNewCpCodesInput() {
    return this._allCurrentAndNewCpCodes;
  }

  // cp_codes - computed: true, optional: true, required: false
  private _cpCodes?: number[]; 
  public get cpCodes() {
    return this.getNumberListAttribute('cp_codes');
  }
  public set cpCodes(value: number[]) {
    this._cpCodes = value;
  }
  public resetCpCodes() {
    this._cpCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpCodesInput() {
    return this._cpCodes;
  }
}
export interface IamApiClientPurgeOptions {
  /**
  * Whether the API client can purge content by cache tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_api_client#can_purge_by_cache_tag IamApiClient#can_purge_by_cache_tag}
  */
  readonly canPurgeByCacheTag: boolean | cdktf.IResolvable;
  /**
  * Whether the API client can purge content by CP code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_api_client#can_purge_by_cp_code IamApiClient#can_purge_by_cp_code}
  */
  readonly canPurgeByCpCode: boolean | cdktf.IResolvable;
  /**
  * CP codes the API client can purge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_api_client#cp_code_access IamApiClient#cp_code_access}
  */
  readonly cpCodeAccess: IamApiClientPurgeOptionsCpCodeAccess;
}

export function iamApiClientPurgeOptionsToTerraform(struct?: IamApiClientPurgeOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    can_purge_by_cache_tag: cdktf.booleanToTerraform(struct!.canPurgeByCacheTag),
    can_purge_by_cp_code: cdktf.booleanToTerraform(struct!.canPurgeByCpCode),
    cp_code_access: iamApiClientPurgeOptionsCpCodeAccessToTerraform(struct!.cpCodeAccess),
  }
}


export function iamApiClientPurgeOptionsToHclTerraform(struct?: IamApiClientPurgeOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    can_purge_by_cache_tag: {
      value: cdktf.booleanToHclTerraform(struct!.canPurgeByCacheTag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    can_purge_by_cp_code: {
      value: cdktf.booleanToHclTerraform(struct!.canPurgeByCpCode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cp_code_access: {
      value: iamApiClientPurgeOptionsCpCodeAccessToHclTerraform(struct!.cpCodeAccess),
      isBlock: true,
      type: "struct",
      storageClassType: "IamApiClientPurgeOptionsCpCodeAccess",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IamApiClientPurgeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IamApiClientPurgeOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._canPurgeByCacheTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.canPurgeByCacheTag = this._canPurgeByCacheTag;
    }
    if (this._canPurgeByCpCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.canPurgeByCpCode = this._canPurgeByCpCode;
    }
    if (this._cpCodeAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpCodeAccess = this._cpCodeAccess?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamApiClientPurgeOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._canPurgeByCacheTag = undefined;
      this._canPurgeByCpCode = undefined;
      this._cpCodeAccess.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._canPurgeByCacheTag = value.canPurgeByCacheTag;
      this._canPurgeByCpCode = value.canPurgeByCpCode;
      this._cpCodeAccess.internalValue = value.cpCodeAccess;
    }
  }

  // can_purge_by_cache_tag - computed: false, optional: false, required: true
  private _canPurgeByCacheTag?: boolean | cdktf.IResolvable; 
  public get canPurgeByCacheTag() {
    return this.getBooleanAttribute('can_purge_by_cache_tag');
  }
  public set canPurgeByCacheTag(value: boolean | cdktf.IResolvable) {
    this._canPurgeByCacheTag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get canPurgeByCacheTagInput() {
    return this._canPurgeByCacheTag;
  }

  // can_purge_by_cp_code - computed: false, optional: false, required: true
  private _canPurgeByCpCode?: boolean | cdktf.IResolvable; 
  public get canPurgeByCpCode() {
    return this.getBooleanAttribute('can_purge_by_cp_code');
  }
  public set canPurgeByCpCode(value: boolean | cdktf.IResolvable) {
    this._canPurgeByCpCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get canPurgeByCpCodeInput() {
    return this._canPurgeByCpCode;
  }

  // cp_code_access - computed: false, optional: false, required: true
  private _cpCodeAccess = new IamApiClientPurgeOptionsCpCodeAccessOutputReference(this, "cp_code_access");
  public get cpCodeAccess() {
    return this._cpCodeAccess;
  }
  public putCpCodeAccess(value: IamApiClientPurgeOptionsCpCodeAccess) {
    this._cpCodeAccess.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpCodeAccessInput() {
    return this._cpCodeAccess.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_api_client akamai_iam_api_client}
*/
export class IamApiClient extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_iam_api_client";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IamApiClient resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IamApiClient to import
  * @param importFromId The id of the existing IamApiClient that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_api_client#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IamApiClient to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_iam_api_client", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/iam_api_client akamai_iam_api_client} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamApiClientConfig
  */
  public constructor(scope: Construct, id: string, config: IamApiClientConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_iam_api_client',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowAccountSwitch = config.allowAccountSwitch;
    this._apiAccess.internalValue = config.apiAccess;
    this._authorizedUsers = config.authorizedUsers;
    this._canAutoCreateCredential = config.canAutoCreateCredential;
    this._clientDescription = config.clientDescription;
    this._clientName = config.clientName;
    this._clientType = config.clientType;
    this._credential.internalValue = config.credential;
    this._groupAccess.internalValue = config.groupAccess;
    this._ipAcl.internalValue = config.ipAcl;
    this._lock = config.lock;
    this._notificationEmails = config.notificationEmails;
    this._purgeOptions.internalValue = config.purgeOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token - computed: true, optional: false, required: false
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }

  // actions - computed: true, optional: false, required: false
  private _actions = new IamApiClientActionsOutputReference(this, "actions");
  public get actions() {
    return this._actions;
  }

  // active_credential_count - computed: true, optional: false, required: false
  public get activeCredentialCount() {
    return this.getNumberAttribute('active_credential_count');
  }

  // allow_account_switch - computed: true, optional: true, required: false
  private _allowAccountSwitch?: boolean | cdktf.IResolvable; 
  public get allowAccountSwitch() {
    return this.getBooleanAttribute('allow_account_switch');
  }
  public set allowAccountSwitch(value: boolean | cdktf.IResolvable) {
    this._allowAccountSwitch = value;
  }
  public resetAllowAccountSwitch() {
    this._allowAccountSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAccountSwitchInput() {
    return this._allowAccountSwitch;
  }

  // api_access - computed: false, optional: false, required: true
  private _apiAccess = new IamApiClientApiAccessOutputReference(this, "api_access");
  public get apiAccess() {
    return this._apiAccess;
  }
  public putApiAccess(value: IamApiClientApiAccess) {
    this._apiAccess.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiAccessInput() {
    return this._apiAccess.internalValue;
  }

  // authorized_users - computed: false, optional: false, required: true
  private _authorizedUsers?: string[]; 
  public get authorizedUsers() {
    return this.getListAttribute('authorized_users');
  }
  public set authorizedUsers(value: string[]) {
    this._authorizedUsers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedUsersInput() {
    return this._authorizedUsers;
  }

  // base_url - computed: true, optional: false, required: false
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }

  // can_auto_create_credential - computed: true, optional: true, required: false
  private _canAutoCreateCredential?: boolean | cdktf.IResolvable; 
  public get canAutoCreateCredential() {
    return this.getBooleanAttribute('can_auto_create_credential');
  }
  public set canAutoCreateCredential(value: boolean | cdktf.IResolvable) {
    this._canAutoCreateCredential = value;
  }
  public resetCanAutoCreateCredential() {
    this._canAutoCreateCredential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canAutoCreateCredentialInput() {
    return this._canAutoCreateCredential;
  }

  // client_description - computed: true, optional: true, required: false
  private _clientDescription?: string; 
  public get clientDescription() {
    return this.getStringAttribute('client_description');
  }
  public set clientDescription(value: string) {
    this._clientDescription = value;
  }
  public resetClientDescription() {
    this._clientDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientDescriptionInput() {
    return this._clientDescription;
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_name - computed: false, optional: false, required: true
  private _clientName?: string; 
  public get clientName() {
    return this.getStringAttribute('client_name');
  }
  public set clientName(value: string) {
    this._clientName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientNameInput() {
    return this._clientName;
  }

  // client_type - computed: false, optional: false, required: true
  private _clientType?: string; 
  public get clientType() {
    return this.getStringAttribute('client_type');
  }
  public set clientType(value: string) {
    this._clientType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTypeInput() {
    return this._clientType;
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // credential - computed: false, optional: false, required: true
  private _credential = new IamApiClientCredentialOutputReference(this, "credential");
  public get credential() {
    return this._credential;
  }
  public putCredential(value: IamApiClientCredential) {
    this._credential.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialInput() {
    return this._credential.internalValue;
  }

  // group_access - computed: false, optional: false, required: true
  private _groupAccess = new IamApiClientGroupAccessOutputReference(this, "group_access");
  public get groupAccess() {
    return this._groupAccess;
  }
  public putGroupAccess(value: IamApiClientGroupAccess) {
    this._groupAccess.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupAccessInput() {
    return this._groupAccess.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_acl - computed: false, optional: true, required: false
  private _ipAcl = new IamApiClientIpAclOutputReference(this, "ip_acl");
  public get ipAcl() {
    return this._ipAcl;
  }
  public putIpAcl(value: IamApiClientIpAcl) {
    this._ipAcl.internalValue = value;
  }
  public resetIpAcl() {
    this._ipAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAclInput() {
    return this._ipAcl.internalValue;
  }

  // lock - computed: true, optional: true, required: false
  private _lock?: boolean | cdktf.IResolvable; 
  public get lock() {
    return this.getBooleanAttribute('lock');
  }
  public set lock(value: boolean | cdktf.IResolvable) {
    this._lock = value;
  }
  public resetLock() {
    this._lock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockInput() {
    return this._lock;
  }

  // notification_emails - computed: true, optional: true, required: false
  private _notificationEmails?: string[]; 
  public get notificationEmails() {
    return this.getListAttribute('notification_emails');
  }
  public set notificationEmails(value: string[]) {
    this._notificationEmails = value;
  }
  public resetNotificationEmails() {
    this._notificationEmails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationEmailsInput() {
    return this._notificationEmails;
  }

  // purge_options - computed: false, optional: true, required: false
  private _purgeOptions = new IamApiClientPurgeOptionsOutputReference(this, "purge_options");
  public get purgeOptions() {
    return this._purgeOptions;
  }
  public putPurgeOptions(value: IamApiClientPurgeOptions) {
    this._purgeOptions.internalValue = value;
  }
  public resetPurgeOptions() {
    this._purgeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purgeOptionsInput() {
    return this._purgeOptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_account_switch: cdktf.booleanToTerraform(this._allowAccountSwitch),
      api_access: iamApiClientApiAccessToTerraform(this._apiAccess.internalValue),
      authorized_users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authorizedUsers),
      can_auto_create_credential: cdktf.booleanToTerraform(this._canAutoCreateCredential),
      client_description: cdktf.stringToTerraform(this._clientDescription),
      client_name: cdktf.stringToTerraform(this._clientName),
      client_type: cdktf.stringToTerraform(this._clientType),
      credential: iamApiClientCredentialToTerraform(this._credential.internalValue),
      group_access: iamApiClientGroupAccessToTerraform(this._groupAccess.internalValue),
      ip_acl: iamApiClientIpAclToTerraform(this._ipAcl.internalValue),
      lock: cdktf.booleanToTerraform(this._lock),
      notification_emails: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notificationEmails),
      purge_options: iamApiClientPurgeOptionsToTerraform(this._purgeOptions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_account_switch: {
        value: cdktf.booleanToHclTerraform(this._allowAccountSwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      api_access: {
        value: iamApiClientApiAccessToHclTerraform(this._apiAccess.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IamApiClientApiAccess",
      },
      authorized_users: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authorizedUsers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      can_auto_create_credential: {
        value: cdktf.booleanToHclTerraform(this._canAutoCreateCredential),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_description: {
        value: cdktf.stringToHclTerraform(this._clientDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_name: {
        value: cdktf.stringToHclTerraform(this._clientName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_type: {
        value: cdktf.stringToHclTerraform(this._clientType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credential: {
        value: iamApiClientCredentialToHclTerraform(this._credential.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IamApiClientCredential",
      },
      group_access: {
        value: iamApiClientGroupAccessToHclTerraform(this._groupAccess.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IamApiClientGroupAccess",
      },
      ip_acl: {
        value: iamApiClientIpAclToHclTerraform(this._ipAcl.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IamApiClientIpAcl",
      },
      lock: {
        value: cdktf.booleanToHclTerraform(this._lock),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      notification_emails: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notificationEmails),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      purge_options: {
        value: iamApiClientPurgeOptionsToHclTerraform(this._purgeOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IamApiClientPurgeOptions",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
