// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthMethodConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access expiration date in Unix timestamp (select 0 for access without expiry date)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method#access_expires AuthMethod#access_expires}
  */
  readonly accessExpires?: number;
  /**
  * A CIDR whitelist with the IPs that the access is restricted to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method#bound_ips AuthMethod#bound_ips}
  */
  readonly boundIps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method#id AuthMethod#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The path where the Auth Method will be stored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method#path AuthMethod#path}
  */
  readonly path: string;
  /**
  * api_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method#api_key AuthMethod#api_key}
  */
  readonly apiKey?: AuthMethodApiKey[] | cdktf.IResolvable;
  /**
  * aws_iam block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method#aws_iam AuthMethod#aws_iam}
  */
  readonly awsIam?: AuthMethodAwsIam[] | cdktf.IResolvable;
  /**
  * azure_ad block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method#azure_ad AuthMethod#azure_ad}
  */
  readonly azureAd?: AuthMethodAzureAd[] | cdktf.IResolvable;
  /**
  * gcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method#gcp AuthMethod#gcp}
  */
  readonly gcp?: AuthMethodGcp[] | cdktf.IResolvable;
  /**
  * saml block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method#saml AuthMethod#saml}
  */
  readonly saml?: AuthMethodSaml[] | cdktf.IResolvable;
}
export interface AuthMethodApiKey {
}

export function authMethodApiKeyToTerraform(struct?: AuthMethodApiKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function authMethodApiKeyToHclTerraform(struct?: AuthMethodApiKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AuthMethodApiKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuthMethodApiKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthMethodApiKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class AuthMethodApiKeyList extends cdktf.ComplexList {
  public internalValue? : AuthMethodApiKey[] | cdktf.IResolvable

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
  public get(index: number): AuthMethodApiKeyOutputReference {
    return new AuthMethodApiKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuthMethodAwsIam {
  /**
  * A list of full arns that the access is restricted to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method#bound_arn AuthMethod#bound_arn}
  */
  readonly boundArn?: string[];
  /**
  * A list of AWS account-IDs that the access is restricted to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method#bound_aws_account_id AuthMethod#bound_aws_account_id}
  */
  readonly boundAwsAccountId: string[];
  /**
  * A list of full resource ids that the access is restricted to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method#bound_resource_id AuthMethod#bound_resource_id}
  */
  readonly boundResourceId?: string[];
  /**
  * A list of full role ids that the access is restricted to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method#bound_role_id AuthMethod#bound_role_id}
  */
  readonly boundRoleId?: string[];
  /**
  * A list of full role-name that the access is restricted to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method#bound_role_name AuthMethod#bound_role_name}
  */
  readonly boundRoleName?: string[];
  /**
  * A list of full user ids that the access is restricted to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method#bound_user_id AuthMethod#bound_user_id}
  */
  readonly boundUserId?: string[];
  /**
  * A list of full user-name that the access is restricted to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method#bound_user_name AuthMethod#bound_user_name}
  */
  readonly boundUserName?: string[];
  /**
  * STS URL (default: https://sts.amazonaws.com)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method#sts_url AuthMethod#sts_url}
  */
  readonly stsUrl?: string;
}

export function authMethodAwsIamToTerraform(struct?: AuthMethodAwsIam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bound_arn: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.boundArn),
    bound_aws_account_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.boundAwsAccountId),
    bound_resource_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.boundResourceId),
    bound_role_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.boundRoleId),
    bound_role_name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.boundRoleName),
    bound_user_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.boundUserId),
    bound_user_name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.boundUserName),
    sts_url: cdktf.stringToTerraform(struct!.stsUrl),
  }
}


export function authMethodAwsIamToHclTerraform(struct?: AuthMethodAwsIam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bound_arn: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.boundArn),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    bound_aws_account_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.boundAwsAccountId),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    bound_resource_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.boundResourceId),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    bound_role_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.boundRoleId),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    bound_role_name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.boundRoleName),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    bound_user_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.boundUserId),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    bound_user_name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.boundUserName),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    sts_url: {
      value: cdktf.stringToHclTerraform(struct!.stsUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthMethodAwsIamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuthMethodAwsIam | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._boundArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.boundArn = this._boundArn;
    }
    if (this._boundAwsAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.boundAwsAccountId = this._boundAwsAccountId;
    }
    if (this._boundResourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.boundResourceId = this._boundResourceId;
    }
    if (this._boundRoleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.boundRoleId = this._boundRoleId;
    }
    if (this._boundRoleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.boundRoleName = this._boundRoleName;
    }
    if (this._boundUserId !== undefined) {
      hasAnyValues = true;
      internalValueResult.boundUserId = this._boundUserId;
    }
    if (this._boundUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.boundUserName = this._boundUserName;
    }
    if (this._stsUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.stsUrl = this._stsUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthMethodAwsIam | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._boundArn = undefined;
      this._boundAwsAccountId = undefined;
      this._boundResourceId = undefined;
      this._boundRoleId = undefined;
      this._boundRoleName = undefined;
      this._boundUserId = undefined;
      this._boundUserName = undefined;
      this._stsUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._boundArn = value.boundArn;
      this._boundAwsAccountId = value.boundAwsAccountId;
      this._boundResourceId = value.boundResourceId;
      this._boundRoleId = value.boundRoleId;
      this._boundRoleName = value.boundRoleName;
      this._boundUserId = value.boundUserId;
      this._boundUserName = value.boundUserName;
      this._stsUrl = value.stsUrl;
    }
  }

  // bound_arn - computed: false, optional: true, required: false
  private _boundArn?: string[]; 
  public get boundArn() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_arn'));
  }
  public set boundArn(value: string[]) {
    this._boundArn = value;
  }
  public resetBoundArn() {
    this._boundArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundArnInput() {
    return this._boundArn;
  }

  // bound_aws_account_id - computed: false, optional: false, required: true
  private _boundAwsAccountId?: string[]; 
  public get boundAwsAccountId() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_aws_account_id'));
  }
  public set boundAwsAccountId(value: string[]) {
    this._boundAwsAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get boundAwsAccountIdInput() {
    return this._boundAwsAccountId;
  }

  // bound_resource_id - computed: false, optional: true, required: false
  private _boundResourceId?: string[]; 
  public get boundResourceId() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_resource_id'));
  }
  public set boundResourceId(value: string[]) {
    this._boundResourceId = value;
  }
  public resetBoundResourceId() {
    this._boundResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundResourceIdInput() {
    return this._boundResourceId;
  }

  // bound_role_id - computed: false, optional: true, required: false
  private _boundRoleId?: string[]; 
  public get boundRoleId() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_role_id'));
  }
  public set boundRoleId(value: string[]) {
    this._boundRoleId = value;
  }
  public resetBoundRoleId() {
    this._boundRoleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundRoleIdInput() {
    return this._boundRoleId;
  }

  // bound_role_name - computed: false, optional: true, required: false
  private _boundRoleName?: string[]; 
  public get boundRoleName() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_role_name'));
  }
  public set boundRoleName(value: string[]) {
    this._boundRoleName = value;
  }
  public resetBoundRoleName() {
    this._boundRoleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundRoleNameInput() {
    return this._boundRoleName;
  }

  // bound_user_id - computed: false, optional: true, required: false
  private _boundUserId?: string[]; 
  public get boundUserId() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_user_id'));
  }
  public set boundUserId(value: string[]) {
    this._boundUserId = value;
  }
  public resetBoundUserId() {
    this._boundUserId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundUserIdInput() {
    return this._boundUserId;
  }

  // bound_user_name - computed: false, optional: true, required: false
  private _boundUserName?: string[]; 
  public get boundUserName() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_user_name'));
  }
  public set boundUserName(value: string[]) {
    this._boundUserName = value;
  }
  public resetBoundUserName() {
    this._boundUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundUserNameInput() {
    return this._boundUserName;
  }

  // sts_url - computed: false, optional: true, required: false
  private _stsUrl?: string; 
  public get stsUrl() {
    return this.getStringAttribute('sts_url');
  }
  public set stsUrl(value: string) {
    this._stsUrl = value;
  }
  public resetStsUrl() {
    this._stsUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stsUrlInput() {
    return this._stsUrl;
  }
}

export class AuthMethodAwsIamList extends cdktf.ComplexList {
  public internalValue? : AuthMethodAwsIam[] | cdktf.IResolvable

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
  public get(index: number): AuthMethodAwsIamOutputReference {
    return new AuthMethodAwsIamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuthMethodAzureAd {
  /**
  * A list of group ids that the access is restricted to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method#bound_group_id AuthMethod#bound_group_id}
  */
  readonly boundGroupId?: string[];
  /**
  * A list of resource providers that the access is restricted to (e.g, Microsoft.Compute, Microsoft.ManagedIdentity, etc)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method#bound_providers AuthMethod#bound_providers}
  */
  readonly boundProviders?: string[];
  /**
  * A list of full resource ids that the access is restricted to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method#bound_resource_id AuthMethod#bound_resource_id}
  */
  readonly boundResourceId?: string[];
  /**
  * A list of resource names that the access is restricted to (e.g, a virtual machine name, scale set name, etc)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method#bound_resource_names AuthMethod#bound_resource_names}
  */
  readonly boundResourceNames?: string[];
  /**
  * A list of resource types that the access is restricted to (e.g, virtualMachines, userAssignedIdentities, etc)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method#bound_resource_types AuthMethod#bound_resource_types}
  */
  readonly boundResourceTypes?: string[];
  /**
  * A list of resource groups that the access is restricted to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method#bound_rg_id AuthMethod#bound_rg_id}
  */
  readonly boundRgId?: string[];
  /**
  * A list of service principal IDs that the access is restricted to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method#bound_spid AuthMethod#bound_spid}
  */
  readonly boundSpid?: string[];
  /**
  * A list of subscription ids that the access is restricted to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method#bound_sub_id AuthMethod#bound_sub_id}
  */
  readonly boundSubId?: string[];
  /**
  * The Azure tenant id that the access is restricted to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method#bound_tenant_id AuthMethod#bound_tenant_id}
  */
  readonly boundTenantId: string;
  /**
  * The audience in the JWT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method#custom_audience AuthMethod#custom_audience}
  */
  readonly customAudience?: string;
  /**
  * Issuer URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method#custom_issuer AuthMethod#custom_issuer}
  */
  readonly customIssuer?: string;
  /**
  * The URL to the JSON Web Key Set (JWKS) that containing the public keys that should be used to verify any JSON Web Token (JWT) issued by the authorization server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method#jwks_uri AuthMethod#jwks_uri}
  */
  readonly jwksUri?: string;
}

export function authMethodAzureAdToTerraform(struct?: AuthMethodAzureAd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bound_group_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.boundGroupId),
    bound_providers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.boundProviders),
    bound_resource_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.boundResourceId),
    bound_resource_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.boundResourceNames),
    bound_resource_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.boundResourceTypes),
    bound_rg_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.boundRgId),
    bound_spid: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.boundSpid),
    bound_sub_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.boundSubId),
    bound_tenant_id: cdktf.stringToTerraform(struct!.boundTenantId),
    custom_audience: cdktf.stringToTerraform(struct!.customAudience),
    custom_issuer: cdktf.stringToTerraform(struct!.customIssuer),
    jwks_uri: cdktf.stringToTerraform(struct!.jwksUri),
  }
}


export function authMethodAzureAdToHclTerraform(struct?: AuthMethodAzureAd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bound_group_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.boundGroupId),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    bound_providers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.boundProviders),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    bound_resource_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.boundResourceId),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    bound_resource_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.boundResourceNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    bound_resource_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.boundResourceTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    bound_rg_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.boundRgId),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    bound_spid: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.boundSpid),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    bound_sub_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.boundSubId),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    bound_tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.boundTenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_audience: {
      value: cdktf.stringToHclTerraform(struct!.customAudience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_issuer: {
      value: cdktf.stringToHclTerraform(struct!.customIssuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwks_uri: {
      value: cdktf.stringToHclTerraform(struct!.jwksUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthMethodAzureAdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuthMethodAzureAd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._boundGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.boundGroupId = this._boundGroupId;
    }
    if (this._boundProviders !== undefined) {
      hasAnyValues = true;
      internalValueResult.boundProviders = this._boundProviders;
    }
    if (this._boundResourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.boundResourceId = this._boundResourceId;
    }
    if (this._boundResourceNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.boundResourceNames = this._boundResourceNames;
    }
    if (this._boundResourceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.boundResourceTypes = this._boundResourceTypes;
    }
    if (this._boundRgId !== undefined) {
      hasAnyValues = true;
      internalValueResult.boundRgId = this._boundRgId;
    }
    if (this._boundSpid !== undefined) {
      hasAnyValues = true;
      internalValueResult.boundSpid = this._boundSpid;
    }
    if (this._boundSubId !== undefined) {
      hasAnyValues = true;
      internalValueResult.boundSubId = this._boundSubId;
    }
    if (this._boundTenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.boundTenantId = this._boundTenantId;
    }
    if (this._customAudience !== undefined) {
      hasAnyValues = true;
      internalValueResult.customAudience = this._customAudience;
    }
    if (this._customIssuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.customIssuer = this._customIssuer;
    }
    if (this._jwksUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwksUri = this._jwksUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthMethodAzureAd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._boundGroupId = undefined;
      this._boundProviders = undefined;
      this._boundResourceId = undefined;
      this._boundResourceNames = undefined;
      this._boundResourceTypes = undefined;
      this._boundRgId = undefined;
      this._boundSpid = undefined;
      this._boundSubId = undefined;
      this._boundTenantId = undefined;
      this._customAudience = undefined;
      this._customIssuer = undefined;
      this._jwksUri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._boundGroupId = value.boundGroupId;
      this._boundProviders = value.boundProviders;
      this._boundResourceId = value.boundResourceId;
      this._boundResourceNames = value.boundResourceNames;
      this._boundResourceTypes = value.boundResourceTypes;
      this._boundRgId = value.boundRgId;
      this._boundSpid = value.boundSpid;
      this._boundSubId = value.boundSubId;
      this._boundTenantId = value.boundTenantId;
      this._customAudience = value.customAudience;
      this._customIssuer = value.customIssuer;
      this._jwksUri = value.jwksUri;
    }
  }

  // bound_group_id - computed: false, optional: true, required: false
  private _boundGroupId?: string[]; 
  public get boundGroupId() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_group_id'));
  }
  public set boundGroupId(value: string[]) {
    this._boundGroupId = value;
  }
  public resetBoundGroupId() {
    this._boundGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundGroupIdInput() {
    return this._boundGroupId;
  }

  // bound_providers - computed: false, optional: true, required: false
  private _boundProviders?: string[]; 
  public get boundProviders() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_providers'));
  }
  public set boundProviders(value: string[]) {
    this._boundProviders = value;
  }
  public resetBoundProviders() {
    this._boundProviders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundProvidersInput() {
    return this._boundProviders;
  }

  // bound_resource_id - computed: false, optional: true, required: false
  private _boundResourceId?: string[]; 
  public get boundResourceId() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_resource_id'));
  }
  public set boundResourceId(value: string[]) {
    this._boundResourceId = value;
  }
  public resetBoundResourceId() {
    this._boundResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundResourceIdInput() {
    return this._boundResourceId;
  }

  // bound_resource_names - computed: false, optional: true, required: false
  private _boundResourceNames?: string[]; 
  public get boundResourceNames() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_resource_names'));
  }
  public set boundResourceNames(value: string[]) {
    this._boundResourceNames = value;
  }
  public resetBoundResourceNames() {
    this._boundResourceNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundResourceNamesInput() {
    return this._boundResourceNames;
  }

  // bound_resource_types - computed: false, optional: true, required: false
  private _boundResourceTypes?: string[]; 
  public get boundResourceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_resource_types'));
  }
  public set boundResourceTypes(value: string[]) {
    this._boundResourceTypes = value;
  }
  public resetBoundResourceTypes() {
    this._boundResourceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundResourceTypesInput() {
    return this._boundResourceTypes;
  }

  // bound_rg_id - computed: false, optional: true, required: false
  private _boundRgId?: string[]; 
  public get boundRgId() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_rg_id'));
  }
  public set boundRgId(value: string[]) {
    this._boundRgId = value;
  }
  public resetBoundRgId() {
    this._boundRgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundRgIdInput() {
    return this._boundRgId;
  }

  // bound_spid - computed: false, optional: true, required: false
  private _boundSpid?: string[]; 
  public get boundSpid() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_spid'));
  }
  public set boundSpid(value: string[]) {
    this._boundSpid = value;
  }
  public resetBoundSpid() {
    this._boundSpid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundSpidInput() {
    return this._boundSpid;
  }

  // bound_sub_id - computed: false, optional: true, required: false
  private _boundSubId?: string[]; 
  public get boundSubId() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_sub_id'));
  }
  public set boundSubId(value: string[]) {
    this._boundSubId = value;
  }
  public resetBoundSubId() {
    this._boundSubId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundSubIdInput() {
    return this._boundSubId;
  }

  // bound_tenant_id - computed: false, optional: false, required: true
  private _boundTenantId?: string; 
  public get boundTenantId() {
    return this.getStringAttribute('bound_tenant_id');
  }
  public set boundTenantId(value: string) {
    this._boundTenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get boundTenantIdInput() {
    return this._boundTenantId;
  }

  // custom_audience - computed: false, optional: true, required: false
  private _customAudience?: string; 
  public get customAudience() {
    return this.getStringAttribute('custom_audience');
  }
  public set customAudience(value: string) {
    this._customAudience = value;
  }
  public resetCustomAudience() {
    this._customAudience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAudienceInput() {
    return this._customAudience;
  }

  // custom_issuer - computed: false, optional: true, required: false
  private _customIssuer?: string; 
  public get customIssuer() {
    return this.getStringAttribute('custom_issuer');
  }
  public set customIssuer(value: string) {
    this._customIssuer = value;
  }
  public resetCustomIssuer() {
    this._customIssuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customIssuerInput() {
    return this._customIssuer;
  }

  // jwks_uri - computed: false, optional: true, required: false
  private _jwksUri?: string; 
  public get jwksUri() {
    return this.getStringAttribute('jwks_uri');
  }
  public set jwksUri(value: string) {
    this._jwksUri = value;
  }
  public resetJwksUri() {
    this._jwksUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksUriInput() {
    return this._jwksUri;
  }
}

export class AuthMethodAzureAdList extends cdktf.ComplexList {
  public internalValue? : AuthMethodAzureAd[] | cdktf.IResolvable

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
  public get(index: number): AuthMethodAzureAdOutputReference {
    return new AuthMethodAzureAdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuthMethodGcpGce {
  /**
  * GCE only. A list of GCP labels formatted as "key:value" pairs that must be set on instances in order to authenticate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method#bound_labels AuthMethod#bound_labels}
  */
  readonly boundLabels?: string[];
  /**
  * GCE only. A list of regions. GCE instances must belong to any of the provided regions in order to authenticate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method#bound_regions AuthMethod#bound_regions}
  */
  readonly boundRegions?: string[];
  /**
  * GCE only. A list of zones. GCE instances must belong to any of the provided zones in order to authenticate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method#bound_zones AuthMethod#bound_zones}
  */
  readonly boundZones?: string[];
}

export function authMethodGcpGceToTerraform(struct?: AuthMethodGcpGce | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bound_labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.boundLabels),
    bound_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.boundRegions),
    bound_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.boundZones),
  }
}


export function authMethodGcpGceToHclTerraform(struct?: AuthMethodGcpGce | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bound_labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.boundLabels),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    bound_regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.boundRegions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    bound_zones: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.boundZones),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthMethodGcpGceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuthMethodGcpGce | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._boundLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.boundLabels = this._boundLabels;
    }
    if (this._boundRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.boundRegions = this._boundRegions;
    }
    if (this._boundZones !== undefined) {
      hasAnyValues = true;
      internalValueResult.boundZones = this._boundZones;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthMethodGcpGce | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._boundLabels = undefined;
      this._boundRegions = undefined;
      this._boundZones = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._boundLabels = value.boundLabels;
      this._boundRegions = value.boundRegions;
      this._boundZones = value.boundZones;
    }
  }

  // bound_labels - computed: false, optional: true, required: false
  private _boundLabels?: string[]; 
  public get boundLabels() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_labels'));
  }
  public set boundLabels(value: string[]) {
    this._boundLabels = value;
  }
  public resetBoundLabels() {
    this._boundLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundLabelsInput() {
    return this._boundLabels;
  }

  // bound_regions - computed: false, optional: true, required: false
  private _boundRegions?: string[]; 
  public get boundRegions() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_regions'));
  }
  public set boundRegions(value: string[]) {
    this._boundRegions = value;
  }
  public resetBoundRegions() {
    this._boundRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundRegionsInput() {
    return this._boundRegions;
  }

  // bound_zones - computed: false, optional: true, required: false
  private _boundZones?: string[]; 
  public get boundZones() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_zones'));
  }
  public set boundZones(value: string[]) {
    this._boundZones = value;
  }
  public resetBoundZones() {
    this._boundZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundZonesInput() {
    return this._boundZones;
  }
}

export class AuthMethodGcpGceList extends cdktf.ComplexList {
  public internalValue? : AuthMethodGcpGce[] | cdktf.IResolvable

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
  public get(index: number): AuthMethodGcpGceOutputReference {
    return new AuthMethodGcpGceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuthMethodGcpIam {
  /**
  * IAM only. A list of Service Accounts. Clients must belong to any of the provided service accounts in order to authenticate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method#bound_service_accounts AuthMethod#bound_service_accounts}
  */
  readonly boundServiceAccounts?: string[];
}

export function authMethodGcpIamToTerraform(struct?: AuthMethodGcpIam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bound_service_accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.boundServiceAccounts),
  }
}


export function authMethodGcpIamToHclTerraform(struct?: AuthMethodGcpIam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bound_service_accounts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.boundServiceAccounts),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthMethodGcpIamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuthMethodGcpIam | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._boundServiceAccounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.boundServiceAccounts = this._boundServiceAccounts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthMethodGcpIam | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._boundServiceAccounts = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._boundServiceAccounts = value.boundServiceAccounts;
    }
  }

  // bound_service_accounts - computed: false, optional: true, required: false
  private _boundServiceAccounts?: string[]; 
  public get boundServiceAccounts() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_service_accounts'));
  }
  public set boundServiceAccounts(value: string[]) {
    this._boundServiceAccounts = value;
  }
  public resetBoundServiceAccounts() {
    this._boundServiceAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundServiceAccountsInput() {
    return this._boundServiceAccounts;
  }
}

export class AuthMethodGcpIamList extends cdktf.ComplexList {
  public internalValue? : AuthMethodGcpIam[] | cdktf.IResolvable

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
  public get(index: number): AuthMethodGcpIamOutputReference {
    return new AuthMethodGcpIamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuthMethodGcp {
  /**
  * The audience to verify in the JWT received by the client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method#audience AuthMethod#audience}
  */
  readonly audience?: string;
  /**
  * Service Account creds data, base64 encoded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method#service_account_creds_data AuthMethod#service_account_creds_data}
  */
  readonly serviceAccountCredsData: string;
  /**
  * gce block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method#gce AuthMethod#gce}
  */
  readonly gce?: AuthMethodGcpGce[] | cdktf.IResolvable;
  /**
  * iam block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method#iam AuthMethod#iam}
  */
  readonly iam?: AuthMethodGcpIam[] | cdktf.IResolvable;
}

export function authMethodGcpToTerraform(struct?: AuthMethodGcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    service_account_creds_data: cdktf.stringToTerraform(struct!.serviceAccountCredsData),
    gce: cdktf.listMapper(authMethodGcpGceToTerraform, true)(struct!.gce),
    iam: cdktf.listMapper(authMethodGcpIamToTerraform, true)(struct!.iam),
  }
}


export function authMethodGcpToHclTerraform(struct?: AuthMethodGcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audience: {
      value: cdktf.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_creds_data: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountCredsData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gce: {
      value: cdktf.listMapperHcl(authMethodGcpGceToHclTerraform, true)(struct!.gce),
      isBlock: true,
      type: "list",
      storageClassType: "AuthMethodGcpGceList",
    },
    iam: {
      value: cdktf.listMapperHcl(authMethodGcpIamToHclTerraform, true)(struct!.iam),
      isBlock: true,
      type: "list",
      storageClassType: "AuthMethodGcpIamList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthMethodGcpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuthMethodGcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._serviceAccountCredsData !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountCredsData = this._serviceAccountCredsData;
    }
    if (this._gce?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gce = this._gce?.internalValue;
    }
    if (this._iam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iam = this._iam?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthMethodGcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audience = undefined;
      this._serviceAccountCredsData = undefined;
      this._gce.internalValue = undefined;
      this._iam.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audience = value.audience;
      this._serviceAccountCredsData = value.serviceAccountCredsData;
      this._gce.internalValue = value.gce;
      this._iam.internalValue = value.iam;
    }
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // service_account_creds_data - computed: false, optional: false, required: true
  private _serviceAccountCredsData?: string; 
  public get serviceAccountCredsData() {
    return this.getStringAttribute('service_account_creds_data');
  }
  public set serviceAccountCredsData(value: string) {
    this._serviceAccountCredsData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountCredsDataInput() {
    return this._serviceAccountCredsData;
  }

  // gce - computed: false, optional: true, required: false
  private _gce = new AuthMethodGcpGceList(this, "gce", false);
  public get gce() {
    return this._gce;
  }
  public putGce(value: AuthMethodGcpGce[] | cdktf.IResolvable) {
    this._gce.internalValue = value;
  }
  public resetGce() {
    this._gce.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gceInput() {
    return this._gce.internalValue;
  }

  // iam - computed: false, optional: true, required: false
  private _iam = new AuthMethodGcpIamList(this, "iam", false);
  public get iam() {
    return this._iam;
  }
  public putIam(value: AuthMethodGcpIam[] | cdktf.IResolvable) {
    this._iam.internalValue = value;
  }
  public resetIam() {
    this._iam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamInput() {
    return this._iam.internalValue;
  }
}

export class AuthMethodGcpList extends cdktf.ComplexList {
  public internalValue? : AuthMethodGcp[] | cdktf.IResolvable

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
  public get(index: number): AuthMethodGcpOutputReference {
    return new AuthMethodGcpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuthMethodSaml {
  /**
  * IDP metadata url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method#idp_metadata_url AuthMethod#idp_metadata_url}
  */
  readonly idpMetadataUrl?: string;
  /**
  * IDP metadata xml data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method#idp_metadata_xml_data AuthMethod#idp_metadata_xml_data}
  */
  readonly idpMetadataXmlData?: string;
  /**
  * A unique identifier (ID) value should be configured for OAuth2, LDAP and SAML authentication method types and is usually a value such as the email, username, or upn for example
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method#unique_identifier AuthMethod#unique_identifier}
  */
  readonly uniqueIdentifier: string;
}

export function authMethodSamlToTerraform(struct?: AuthMethodSaml | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idp_metadata_url: cdktf.stringToTerraform(struct!.idpMetadataUrl),
    idp_metadata_xml_data: cdktf.stringToTerraform(struct!.idpMetadataXmlData),
    unique_identifier: cdktf.stringToTerraform(struct!.uniqueIdentifier),
  }
}


export function authMethodSamlToHclTerraform(struct?: AuthMethodSaml | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    idp_metadata_url: {
      value: cdktf.stringToHclTerraform(struct!.idpMetadataUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idp_metadata_xml_data: {
      value: cdktf.stringToHclTerraform(struct!.idpMetadataXmlData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unique_identifier: {
      value: cdktf.stringToHclTerraform(struct!.uniqueIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthMethodSamlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuthMethodSaml | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idpMetadataUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpMetadataUrl = this._idpMetadataUrl;
    }
    if (this._idpMetadataXmlData !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpMetadataXmlData = this._idpMetadataXmlData;
    }
    if (this._uniqueIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqueIdentifier = this._uniqueIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthMethodSaml | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._idpMetadataUrl = undefined;
      this._idpMetadataXmlData = undefined;
      this._uniqueIdentifier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._idpMetadataUrl = value.idpMetadataUrl;
      this._idpMetadataXmlData = value.idpMetadataXmlData;
      this._uniqueIdentifier = value.uniqueIdentifier;
    }
  }

  // idp_metadata_url - computed: false, optional: true, required: false
  private _idpMetadataUrl?: string; 
  public get idpMetadataUrl() {
    return this.getStringAttribute('idp_metadata_url');
  }
  public set idpMetadataUrl(value: string) {
    this._idpMetadataUrl = value;
  }
  public resetIdpMetadataUrl() {
    this._idpMetadataUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpMetadataUrlInput() {
    return this._idpMetadataUrl;
  }

  // idp_metadata_xml_data - computed: false, optional: true, required: false
  private _idpMetadataXmlData?: string; 
  public get idpMetadataXmlData() {
    return this.getStringAttribute('idp_metadata_xml_data');
  }
  public set idpMetadataXmlData(value: string) {
    this._idpMetadataXmlData = value;
  }
  public resetIdpMetadataXmlData() {
    this._idpMetadataXmlData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpMetadataXmlDataInput() {
    return this._idpMetadataXmlData;
  }

  // unique_identifier - computed: false, optional: false, required: true
  private _uniqueIdentifier?: string; 
  public get uniqueIdentifier() {
    return this.getStringAttribute('unique_identifier');
  }
  public set uniqueIdentifier(value: string) {
    this._uniqueIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueIdentifierInput() {
    return this._uniqueIdentifier;
  }
}

export class AuthMethodSamlList extends cdktf.ComplexList {
  public internalValue? : AuthMethodSaml[] | cdktf.IResolvable

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
  public get(index: number): AuthMethodSamlOutputReference {
    return new AuthMethodSamlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method akeyless_auth_method}
*/
export class AuthMethod extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_auth_method";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthMethod resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthMethod to import
  * @param importFromId The id of the existing AuthMethod that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthMethod to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_auth_method", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method akeyless_auth_method} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthMethodConfig
  */
  public constructor(scope: Construct, id: string, config: AuthMethodConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_auth_method',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessExpires = config.accessExpires;
    this._boundIps = config.boundIps;
    this._id = config.id;
    this._path = config.path;
    this._apiKey.internalValue = config.apiKey;
    this._awsIam.internalValue = config.awsIam;
    this._azureAd.internalValue = config.azureAd;
    this._gcp.internalValue = config.gcp;
    this._saml.internalValue = config.saml;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_expires - computed: false, optional: true, required: false
  private _accessExpires?: number; 
  public get accessExpires() {
    return this.getNumberAttribute('access_expires');
  }
  public set accessExpires(value: number) {
    this._accessExpires = value;
  }
  public resetAccessExpires() {
    this._accessExpires = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessExpiresInput() {
    return this._accessExpires;
  }

  // access_id - computed: true, optional: false, required: false
  public get accessId() {
    return this.getStringAttribute('access_id');
  }

  // access_key - computed: true, optional: false, required: false
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }

  // bound_ips - computed: false, optional: true, required: false
  private _boundIps?: string; 
  public get boundIps() {
    return this.getStringAttribute('bound_ips');
  }
  public set boundIps(value: string) {
    this._boundIps = value;
  }
  public resetBoundIps() {
    this._boundIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundIpsInput() {
    return this._boundIps;
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey = new AuthMethodApiKeyList(this, "api_key", false);
  public get apiKey() {
    return this._apiKey;
  }
  public putApiKey(value: AuthMethodApiKey[] | cdktf.IResolvable) {
    this._apiKey.internalValue = value;
  }
  public resetApiKey() {
    this._apiKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey.internalValue;
  }

  // aws_iam - computed: false, optional: true, required: false
  private _awsIam = new AuthMethodAwsIamList(this, "aws_iam", false);
  public get awsIam() {
    return this._awsIam;
  }
  public putAwsIam(value: AuthMethodAwsIam[] | cdktf.IResolvable) {
    this._awsIam.internalValue = value;
  }
  public resetAwsIam() {
    this._awsIam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsIamInput() {
    return this._awsIam.internalValue;
  }

  // azure_ad - computed: false, optional: true, required: false
  private _azureAd = new AuthMethodAzureAdList(this, "azure_ad", false);
  public get azureAd() {
    return this._azureAd;
  }
  public putAzureAd(value: AuthMethodAzureAd[] | cdktf.IResolvable) {
    this._azureAd.internalValue = value;
  }
  public resetAzureAd() {
    this._azureAd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureAdInput() {
    return this._azureAd.internalValue;
  }

  // gcp - computed: false, optional: true, required: false
  private _gcp = new AuthMethodGcpList(this, "gcp", false);
  public get gcp() {
    return this._gcp;
  }
  public putGcp(value: AuthMethodGcp[] | cdktf.IResolvable) {
    this._gcp.internalValue = value;
  }
  public resetGcp() {
    this._gcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpInput() {
    return this._gcp.internalValue;
  }

  // saml - computed: false, optional: true, required: false
  private _saml = new AuthMethodSamlList(this, "saml", false);
  public get saml() {
    return this._saml;
  }
  public putSaml(value: AuthMethodSaml[] | cdktf.IResolvable) {
    this._saml.internalValue = value;
  }
  public resetSaml() {
    this._saml.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlInput() {
    return this._saml.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_expires: cdktf.numberToTerraform(this._accessExpires),
      bound_ips: cdktf.stringToTerraform(this._boundIps),
      id: cdktf.stringToTerraform(this._id),
      path: cdktf.stringToTerraform(this._path),
      api_key: cdktf.listMapper(authMethodApiKeyToTerraform, true)(this._apiKey.internalValue),
      aws_iam: cdktf.listMapper(authMethodAwsIamToTerraform, true)(this._awsIam.internalValue),
      azure_ad: cdktf.listMapper(authMethodAzureAdToTerraform, true)(this._azureAd.internalValue),
      gcp: cdktf.listMapper(authMethodGcpToTerraform, true)(this._gcp.internalValue),
      saml: cdktf.listMapper(authMethodSamlToTerraform, true)(this._saml.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_expires: {
        value: cdktf.numberToHclTerraform(this._accessExpires),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bound_ips: {
        value: cdktf.stringToHclTerraform(this._boundIps),
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
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_key: {
        value: cdktf.listMapperHcl(authMethodApiKeyToHclTerraform, true)(this._apiKey.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AuthMethodApiKeyList",
      },
      aws_iam: {
        value: cdktf.listMapperHcl(authMethodAwsIamToHclTerraform, true)(this._awsIam.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AuthMethodAwsIamList",
      },
      azure_ad: {
        value: cdktf.listMapperHcl(authMethodAzureAdToHclTerraform, true)(this._azureAd.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AuthMethodAzureAdList",
      },
      gcp: {
        value: cdktf.listMapperHcl(authMethodGcpToHclTerraform, true)(this._gcp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AuthMethodGcpList",
      },
      saml: {
        value: cdktf.listMapperHcl(authMethodSamlToHclTerraform, true)(this._saml.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AuthMethodSamlList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
