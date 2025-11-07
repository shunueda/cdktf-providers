// https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cloud_creds
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudCredsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Flag for bulk upload, set it to true if want to bulk onboard accounts: defaults to false 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cloud_creds#bulk_onboard CloudCreds#bulk_onboard}
  */
  readonly bulkOnboard?: boolean | cdktf.IResolvable;
  /**
  * Select Cloud Service Provider, e.g: AWS, AZURE, GCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cloud_creds#cloud_type CloudCreds#cloud_type}
  */
  readonly cloudType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cloud_creds#id CloudCreds#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Nickname of the cloud credential
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cloud_creds#nickname CloudCreds#nickname}
  */
  readonly nickname: string;
  /**
  * aws block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cloud_creds#aws CloudCreds#aws}
  */
  readonly aws?: CloudCredsAws;
  /**
  * azure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cloud_creds#azure CloudCreds#azure}
  */
  readonly azure?: CloudCredsAzure;
  /**
  * bulk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cloud_creds#bulk CloudCreds#bulk}
  */
  readonly bulk?: CloudCredsBulk;
  /**
  * gcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cloud_creds#gcp CloudCreds#gcp}
  */
  readonly gcp?: CloudCredsGcp;
}
export interface CloudCredsAwsAccessKeys {
  /**
  * Acces Key ID, ref: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cloud_creds#access_key_id CloudCreds#access_key_id}
  */
  readonly accessKeyId: string;
  /**
  * Secret Key ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cloud_creds#secret_key_id CloudCreds#secret_key_id}
  */
  readonly secretKeyId: string;
}

export function cloudCredsAwsAccessKeysToTerraform(struct?: CloudCredsAwsAccessKeysOutputReference | CloudCredsAwsAccessKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    secret_key_id: cdktf.stringToTerraform(struct!.secretKeyId),
  }
}


export function cloudCredsAwsAccessKeysToHclTerraform(struct?: CloudCredsAwsAccessKeysOutputReference | CloudCredsAwsAccessKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.accessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key_id: {
      value: cdktf.stringToHclTerraform(struct!.secretKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudCredsAwsAccessKeysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudCredsAwsAccessKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._secretKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyId = this._secretKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudCredsAwsAccessKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKeyId = undefined;
      this._secretKeyId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKeyId = value.accessKeyId;
      this._secretKeyId = value.secretKeyId;
    }
  }

  // access_key_id - computed: false, optional: false, required: true
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // secret_key_id - computed: false, optional: false, required: true
  private _secretKeyId?: string; 
  public get secretKeyId() {
    return this.getStringAttribute('secret_key_id');
  }
  public set secretKeyId(value: string) {
    this._secretKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyIdInput() {
    return this._secretKeyId;
  }
}
export interface CloudCredsAwsIamRole {
  /**
  *  External ID, ref: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user_externalid.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cloud_creds#external_id CloudCreds#external_id}
  */
  readonly externalId: string;
  /**
  * Role ARN, ref: https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cloud_creds#role_arn CloudCreds#role_arn}
  */
  readonly roleArn: string;
}

export function cloudCredsAwsIamRoleToTerraform(struct?: CloudCredsAwsIamRoleOutputReference | CloudCredsAwsIamRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_id: cdktf.stringToTerraform(struct!.externalId),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}


export function cloudCredsAwsIamRoleToHclTerraform(struct?: CloudCredsAwsIamRoleOutputReference | CloudCredsAwsIamRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudCredsAwsIamRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudCredsAwsIamRole | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudCredsAwsIamRole | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._externalId = undefined;
      this._roleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._externalId = value.externalId;
      this._roleArn = value.roleArn;
    }
  }

  // external_id - computed: false, optional: false, required: true
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}
export interface CloudCredsAws {
  /**
  * Select preferred Authorization option, e.g: IAM Role, Access Keys
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cloud_creds#preferred_auth CloudCreds#preferred_auth}
  */
  readonly preferredAuth: string;
  /**
  * access_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cloud_creds#access_keys CloudCreds#access_keys}
  */
  readonly accessKeys?: CloudCredsAwsAccessKeys;
  /**
  * iam_role block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cloud_creds#iam_role CloudCreds#iam_role}
  */
  readonly iamRole?: CloudCredsAwsIamRole;
}

export function cloudCredsAwsToTerraform(struct?: CloudCredsAwsOutputReference | CloudCredsAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_auth: cdktf.stringToTerraform(struct!.preferredAuth),
    access_keys: cloudCredsAwsAccessKeysToTerraform(struct!.accessKeys),
    iam_role: cloudCredsAwsIamRoleToTerraform(struct!.iamRole),
  }
}


export function cloudCredsAwsToHclTerraform(struct?: CloudCredsAwsOutputReference | CloudCredsAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_auth: {
      value: cdktf.stringToHclTerraform(struct!.preferredAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_keys: {
      value: cloudCredsAwsAccessKeysToHclTerraform(struct!.accessKeys),
      isBlock: true,
      type: "list",
      storageClassType: "CloudCredsAwsAccessKeysList",
    },
    iam_role: {
      value: cloudCredsAwsIamRoleToHclTerraform(struct!.iamRole),
      isBlock: true,
      type: "list",
      storageClassType: "CloudCredsAwsIamRoleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudCredsAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudCredsAws | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredAuth = this._preferredAuth;
    }
    if (this._accessKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeys = this._accessKeys?.internalValue;
    }
    if (this._iamRole?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamRole = this._iamRole?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudCredsAws | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preferredAuth = undefined;
      this._accessKeys.internalValue = undefined;
      this._iamRole.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._preferredAuth = value.preferredAuth;
      this._accessKeys.internalValue = value.accessKeys;
      this._iamRole.internalValue = value.iamRole;
    }
  }

  // preferred_auth - computed: false, optional: false, required: true
  private _preferredAuth?: string; 
  public get preferredAuth() {
    return this.getStringAttribute('preferred_auth');
  }
  public set preferredAuth(value: string) {
    this._preferredAuth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredAuthInput() {
    return this._preferredAuth;
  }

  // access_keys - computed: false, optional: true, required: false
  private _accessKeys = new CloudCredsAwsAccessKeysOutputReference(this, "access_keys");
  public get accessKeys() {
    return this._accessKeys;
  }
  public putAccessKeys(value: CloudCredsAwsAccessKeys) {
    this._accessKeys.internalValue = value;
  }
  public resetAccessKeys() {
    this._accessKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeysInput() {
    return this._accessKeys.internalValue;
  }

  // iam_role - computed: false, optional: true, required: false
  private _iamRole = new CloudCredsAwsIamRoleOutputReference(this, "iam_role");
  public get iamRole() {
    return this._iamRole;
  }
  public putIamRole(value: CloudCredsAwsIamRole) {
    this._iamRole.internalValue = value;
  }
  public resetIamRole() {
    this._iamRole.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleInput() {
    return this._iamRole.internalValue;
  }
}
export interface CloudCredsAzure {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cloud_creds#client_id CloudCreds#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cloud_creds#secret_id CloudCreds#secret_id}
  */
  readonly secretId: string;
  /**
  * Subscription ID, ref: https://learn.microsoft.com/en-us/azure/azure-portal/get-subscription-tenant-id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cloud_creds#subscription_id CloudCreds#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * Tenant ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cloud_creds#tenant_id CloudCreds#tenant_id}
  */
  readonly tenantId: string;
}

export function cloudCredsAzureToTerraform(struct?: CloudCredsAzureOutputReference | CloudCredsAzure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    secret_id: cdktf.stringToTerraform(struct!.secretId),
    subscription_id: cdktf.stringToTerraform(struct!.subscriptionId),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function cloudCredsAzureToHclTerraform(struct?: CloudCredsAzureOutputReference | CloudCredsAzure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_id: {
      value: cdktf.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.subscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudCredsAzureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudCredsAzure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    if (this._subscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionId = this._subscriptionId;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudCredsAzure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._secretId = undefined;
      this._subscriptionId = undefined;
      this._tenantId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._secretId = value.secretId;
      this._subscriptionId = value.subscriptionId;
      this._tenantId = value.tenantId;
    }
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // subscription_id - computed: false, optional: false, required: true
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}
export interface CloudCredsBulk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cloud_creds#account_id CloudCreds#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cloud_creds#external_id CloudCreds#external_id}
  */
  readonly externalId: string;
  /**
  * Path of GCP credential file to upload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cloud_creds#file_path CloudCreds#file_path}
  */
  readonly filePath?: string;
  /**
  * Tenant ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cloud_creds#key_type CloudCreds#key_type}
  */
  readonly keyType?: string;
}

export function cloudCredsBulkToTerraform(struct?: CloudCredsBulkOutputReference | CloudCredsBulk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    external_id: cdktf.stringToTerraform(struct!.externalId),
    file_path: cdktf.stringToTerraform(struct!.filePath),
    key_type: cdktf.stringToTerraform(struct!.keyType),
  }
}


export function cloudCredsBulkToHclTerraform(struct?: CloudCredsBulkOutputReference | CloudCredsBulk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_path: {
      value: cdktf.stringToHclTerraform(struct!.filePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_type: {
      value: cdktf.stringToHclTerraform(struct!.keyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudCredsBulkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudCredsBulk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._filePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.filePath = this._filePath;
    }
    if (this._keyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyType = this._keyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudCredsBulk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountId = undefined;
      this._externalId = undefined;
      this._filePath = undefined;
      this._keyType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountId = value.accountId;
      this._externalId = value.externalId;
      this._filePath = value.filePath;
      this._keyType = value.keyType;
    }
  }

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // external_id - computed: false, optional: false, required: true
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // file_path - computed: false, optional: true, required: false
  private _filePath?: string; 
  public get filePath() {
    return this.getStringAttribute('file_path');
  }
  public set filePath(value: string) {
    this._filePath = value;
  }
  public resetFilePath() {
    this._filePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filePathInput() {
    return this._filePath;
  }

  // key_type - computed: false, optional: true, required: false
  private _keyType?: string; 
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
  public set keyType(value: string) {
    this._keyType = value;
  }
  public resetKeyType() {
    this._keyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeInput() {
    return this._keyType;
  }
}
export interface CloudCredsGcp {
  /**
  * Path of GCP credential file to upload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cloud_creds#file_path CloudCreds#file_path}
  */
  readonly filePath: string;
  /**
  * Type of Credential, e.g: Service Account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cloud_creds#type CloudCreds#type}
  */
  readonly type?: string;
}

export function cloudCredsGcpToTerraform(struct?: CloudCredsGcpOutputReference | CloudCredsGcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_path: cdktf.stringToTerraform(struct!.filePath),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function cloudCredsGcpToHclTerraform(struct?: CloudCredsGcpOutputReference | CloudCredsGcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_path: {
      value: cdktf.stringToHclTerraform(struct!.filePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudCredsGcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudCredsGcp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.filePath = this._filePath;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudCredsGcp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filePath = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filePath = value.filePath;
      this._type = value.type;
    }
  }

  // auth_provider_x509_cert_url - computed: true, optional: false, required: false
  public get authProviderX509CertUrl() {
    return this.getStringAttribute('auth_provider_x509_cert_url');
  }

  // auth_uri - computed: true, optional: false, required: false
  public get authUri() {
    return this.getStringAttribute('auth_uri');
  }

  // client_email - computed: true, optional: false, required: false
  public get clientEmail() {
    return this.getStringAttribute('client_email');
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_x509_cert_url - computed: true, optional: false, required: false
  public get clientX509CertUrl() {
    return this.getStringAttribute('client_x509_cert_url');
  }

  // file_path - computed: false, optional: false, required: true
  private _filePath?: string; 
  public get filePath() {
    return this.getStringAttribute('file_path');
  }
  public set filePath(value: string) {
    this._filePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filePathInput() {
    return this._filePath;
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // token_uri - computed: true, optional: false, required: false
  public get tokenUri() {
    return this.getStringAttribute('token_uri');
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cloud_creds prosimo_cloud_creds}
*/
export class CloudCreds extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prosimo_cloud_creds";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudCreds resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudCreds to import
  * @param importFromId The id of the existing CloudCreds that should be imported. Refer to the {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cloud_creds#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudCreds to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prosimo_cloud_creds", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/cloud_creds prosimo_cloud_creds} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudCredsConfig
  */
  public constructor(scope: Construct, id: string, config: CloudCredsConfig) {
    super(scope, id, {
      terraformResourceType: 'prosimo_cloud_creds',
      terraformGeneratorMetadata: {
        providerName: 'prosimo',
        providerVersion: '4.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bulkOnboard = config.bulkOnboard;
    this._cloudType = config.cloudType;
    this._id = config.id;
    this._nickname = config.nickname;
    this._aws.internalValue = config.aws;
    this._azure.internalValue = config.azure;
    this._bulk.internalValue = config.bulk;
    this._gcp.internalValue = config.gcp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bulk_onboard - computed: false, optional: true, required: false
  private _bulkOnboard?: boolean | cdktf.IResolvable; 
  public get bulkOnboard() {
    return this.getBooleanAttribute('bulk_onboard');
  }
  public set bulkOnboard(value: boolean | cdktf.IResolvable) {
    this._bulkOnboard = value;
  }
  public resetBulkOnboard() {
    this._bulkOnboard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bulkOnboardInput() {
    return this._bulkOnboard;
  }

  // cloud_type - computed: false, optional: false, required: true
  private _cloudType?: string; 
  public get cloudType() {
    return this.getStringAttribute('cloud_type');
  }
  public set cloudType(value: string) {
    this._cloudType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudTypeInput() {
    return this._cloudType;
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

  // nickname - computed: false, optional: false, required: true
  private _nickname?: string; 
  public get nickname() {
    return this.getStringAttribute('nickname');
  }
  public set nickname(value: string) {
    this._nickname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nicknameInput() {
    return this._nickname;
  }

  // aws - computed: false, optional: true, required: false
  private _aws = new CloudCredsAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }
  public putAws(value: CloudCredsAws) {
    this._aws.internalValue = value;
  }
  public resetAws() {
    this._aws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws.internalValue;
  }

  // azure - computed: false, optional: true, required: false
  private _azure = new CloudCredsAzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }
  public putAzure(value: CloudCredsAzure) {
    this._azure.internalValue = value;
  }
  public resetAzure() {
    this._azure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureInput() {
    return this._azure.internalValue;
  }

  // bulk - computed: false, optional: true, required: false
  private _bulk = new CloudCredsBulkOutputReference(this, "bulk");
  public get bulk() {
    return this._bulk;
  }
  public putBulk(value: CloudCredsBulk) {
    this._bulk.internalValue = value;
  }
  public resetBulk() {
    this._bulk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bulkInput() {
    return this._bulk.internalValue;
  }

  // gcp - computed: false, optional: true, required: false
  private _gcp = new CloudCredsGcpOutputReference(this, "gcp");
  public get gcp() {
    return this._gcp;
  }
  public putGcp(value: CloudCredsGcp) {
    this._gcp.internalValue = value;
  }
  public resetGcp() {
    this._gcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpInput() {
    return this._gcp.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bulk_onboard: cdktf.booleanToTerraform(this._bulkOnboard),
      cloud_type: cdktf.stringToTerraform(this._cloudType),
      id: cdktf.stringToTerraform(this._id),
      nickname: cdktf.stringToTerraform(this._nickname),
      aws: cloudCredsAwsToTerraform(this._aws.internalValue),
      azure: cloudCredsAzureToTerraform(this._azure.internalValue),
      bulk: cloudCredsBulkToTerraform(this._bulk.internalValue),
      gcp: cloudCredsGcpToTerraform(this._gcp.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bulk_onboard: {
        value: cdktf.booleanToHclTerraform(this._bulkOnboard),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cloud_type: {
        value: cdktf.stringToHclTerraform(this._cloudType),
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
      nickname: {
        value: cdktf.stringToHclTerraform(this._nickname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws: {
        value: cloudCredsAwsToHclTerraform(this._aws.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudCredsAwsList",
      },
      azure: {
        value: cloudCredsAzureToHclTerraform(this._azure.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudCredsAzureList",
      },
      bulk: {
        value: cloudCredsBulkToHclTerraform(this._bulk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudCredsBulkList",
      },
      gcp: {
        value: cloudCredsGcpToHclTerraform(this._gcp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudCredsGcpList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
