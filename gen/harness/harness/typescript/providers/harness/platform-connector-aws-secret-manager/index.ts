// https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_aws_secret_manager
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformConnectorAwsSecretManagerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Use as Default Secrets Manager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_aws_secret_manager#default PlatformConnectorAwsSecretManager#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * Tags to filter delegates for connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_aws_secret_manager#delegate_selectors PlatformConnectorAwsSecretManager#delegate_selectors}
  */
  readonly delegateSelectors?: string[];
  /**
  * Description of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_aws_secret_manager#description PlatformConnectorAwsSecretManager#description}
  */
  readonly description?: string;
  /**
  * Run the operation on the delegate or harness platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_aws_secret_manager#execute_on_delegate PlatformConnectorAwsSecretManager#execute_on_delegate}
  */
  readonly executeOnDelegate?: boolean | cdktf.IResolvable;
  /**
  * Whether to force delete secret value or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_aws_secret_manager#force_delete_without_recovery PlatformConnectorAwsSecretManager#force_delete_without_recovery}
  */
  readonly forceDeleteWithoutRecovery?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_aws_secret_manager#id PlatformConnectorAwsSecretManager#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique identifier of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_aws_secret_manager#identifier PlatformConnectorAwsSecretManager#identifier}
  */
  readonly identifier: string;
  /**
  * Name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_aws_secret_manager#name PlatformConnectorAwsSecretManager#name}
  */
  readonly name: string;
  /**
  * Unique identifier of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_aws_secret_manager#org_id PlatformConnectorAwsSecretManager#org_id}
  */
  readonly orgId?: string;
  /**
  * Unique identifier of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_aws_secret_manager#project_id PlatformConnectorAwsSecretManager#project_id}
  */
  readonly projectId?: string;
  /**
  * Recovery duration in days in AWS Secrets Manager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_aws_secret_manager#recovery_window_in_days PlatformConnectorAwsSecretManager#recovery_window_in_days}
  */
  readonly recoveryWindowInDays?: number;
  /**
  * The AWS region where the AWS Secret Manager is.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_aws_secret_manager#region PlatformConnectorAwsSecretManager#region}
  */
  readonly region: string;
  /**
  * A prefix to be added to all secrets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_aws_secret_manager#secret_name_prefix PlatformConnectorAwsSecretManager#secret_name_prefix}
  */
  readonly secretNamePrefix?: string;
  /**
  * Tags to associate with the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_aws_secret_manager#tags PlatformConnectorAwsSecretManager#tags}
  */
  readonly tags?: string[];
  /**
  * Whether to update secret value using putSecretValue action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_aws_secret_manager#use_put_secret PlatformConnectorAwsSecretManager#use_put_secret}
  */
  readonly usePutSecret?: boolean | cdktf.IResolvable;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_aws_secret_manager#credentials PlatformConnectorAwsSecretManager#credentials}
  */
  readonly credentials: PlatformConnectorAwsSecretManagerCredentials;
}
export interface PlatformConnectorAwsSecretManagerCredentialsAssumeRole {
  /**
  * The duration, in seconds, of the role session. The value can range from 900 seconds (15 minutes) to 3600 seconds (1 hour). By default, the value is set to 3600 seconds. An expiration can also be specified in the client request body. The minimum value is 1 hour.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_aws_secret_manager#duration PlatformConnectorAwsSecretManager#duration}
  */
  readonly duration: number;
  /**
  * If the administrator of the account to which the role belongs provided you with an external ID, then enter that value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_aws_secret_manager#external_id PlatformConnectorAwsSecretManager#external_id}
  */
  readonly externalId?: string;
  /**
  * The ARN of the role to assume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_aws_secret_manager#role_arn PlatformConnectorAwsSecretManager#role_arn}
  */
  readonly roleArn: string;
}

export function platformConnectorAwsSecretManagerCredentialsAssumeRoleToTerraform(struct?: PlatformConnectorAwsSecretManagerCredentialsAssumeRoleOutputReference | PlatformConnectorAwsSecretManagerCredentialsAssumeRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    external_id: cdktf.stringToTerraform(struct!.externalId),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}


export function platformConnectorAwsSecretManagerCredentialsAssumeRoleToHclTerraform(struct?: PlatformConnectorAwsSecretManagerCredentialsAssumeRoleOutputReference | PlatformConnectorAwsSecretManagerCredentialsAssumeRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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

export class PlatformConnectorAwsSecretManagerCredentialsAssumeRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformConnectorAwsSecretManagerCredentialsAssumeRole | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
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

  public set internalValue(value: PlatformConnectorAwsSecretManagerCredentialsAssumeRole | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._externalId = undefined;
      this._roleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._externalId = value.externalId;
      this._roleArn = value.roleArn;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
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
export interface PlatformConnectorAwsSecretManagerCredentialsManual {
  /**
  * The plain text AWS access key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_aws_secret_manager#access_key_plain_text PlatformConnectorAwsSecretManager#access_key_plain_text}
  */
  readonly accessKeyPlainText?: string;
  /**
  * The reference to the Harness secret containing the AWS access key. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_aws_secret_manager#access_key_ref PlatformConnectorAwsSecretManager#access_key_ref}
  */
  readonly accessKeyRef?: string;
  /**
  * The reference to the Harness secret containing the AWS secret key. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_aws_secret_manager#secret_key_ref PlatformConnectorAwsSecretManager#secret_key_ref}
  */
  readonly secretKeyRef: string;
}

export function platformConnectorAwsSecretManagerCredentialsManualToTerraform(struct?: PlatformConnectorAwsSecretManagerCredentialsManualOutputReference | PlatformConnectorAwsSecretManagerCredentialsManual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_plain_text: cdktf.stringToTerraform(struct!.accessKeyPlainText),
    access_key_ref: cdktf.stringToTerraform(struct!.accessKeyRef),
    secret_key_ref: cdktf.stringToTerraform(struct!.secretKeyRef),
  }
}


export function platformConnectorAwsSecretManagerCredentialsManualToHclTerraform(struct?: PlatformConnectorAwsSecretManagerCredentialsManualOutputReference | PlatformConnectorAwsSecretManagerCredentialsManual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_plain_text: {
      value: cdktf.stringToHclTerraform(struct!.accessKeyPlainText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_key_ref: {
      value: cdktf.stringToHclTerraform(struct!.accessKeyRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key_ref: {
      value: cdktf.stringToHclTerraform(struct!.secretKeyRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformConnectorAwsSecretManagerCredentialsManualOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformConnectorAwsSecretManagerCredentialsManual | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyPlainText !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyPlainText = this._accessKeyPlainText;
    }
    if (this._accessKeyRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyRef = this._accessKeyRef;
    }
    if (this._secretKeyRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformConnectorAwsSecretManagerCredentialsManual | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKeyPlainText = undefined;
      this._accessKeyRef = undefined;
      this._secretKeyRef = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKeyPlainText = value.accessKeyPlainText;
      this._accessKeyRef = value.accessKeyRef;
      this._secretKeyRef = value.secretKeyRef;
    }
  }

  // access_key_plain_text - computed: false, optional: true, required: false
  private _accessKeyPlainText?: string; 
  public get accessKeyPlainText() {
    return this.getStringAttribute('access_key_plain_text');
  }
  public set accessKeyPlainText(value: string) {
    this._accessKeyPlainText = value;
  }
  public resetAccessKeyPlainText() {
    this._accessKeyPlainText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyPlainTextInput() {
    return this._accessKeyPlainText;
  }

  // access_key_ref - computed: false, optional: true, required: false
  private _accessKeyRef?: string; 
  public get accessKeyRef() {
    return this.getStringAttribute('access_key_ref');
  }
  public set accessKeyRef(value: string) {
    this._accessKeyRef = value;
  }
  public resetAccessKeyRef() {
    this._accessKeyRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyRefInput() {
    return this._accessKeyRef;
  }

  // secret_key_ref - computed: false, optional: false, required: true
  private _secretKeyRef?: string; 
  public get secretKeyRef() {
    return this.getStringAttribute('secret_key_ref');
  }
  public set secretKeyRef(value: string) {
    this._secretKeyRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef;
  }
}
export interface PlatformConnectorAwsSecretManagerCredentialsOidcAuthentication {
  /**
  * The IAM role ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_aws_secret_manager#iam_role_arn PlatformConnectorAwsSecretManager#iam_role_arn}
  */
  readonly iamRoleArn: string;
}

export function platformConnectorAwsSecretManagerCredentialsOidcAuthenticationToTerraform(struct?: PlatformConnectorAwsSecretManagerCredentialsOidcAuthenticationOutputReference | PlatformConnectorAwsSecretManagerCredentialsOidcAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iam_role_arn: cdktf.stringToTerraform(struct!.iamRoleArn),
  }
}


export function platformConnectorAwsSecretManagerCredentialsOidcAuthenticationToHclTerraform(struct?: PlatformConnectorAwsSecretManagerCredentialsOidcAuthenticationOutputReference | PlatformConnectorAwsSecretManagerCredentialsOidcAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iam_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.iamRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformConnectorAwsSecretManagerCredentialsOidcAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformConnectorAwsSecretManagerCredentialsOidcAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iamRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamRoleArn = this._iamRoleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformConnectorAwsSecretManagerCredentialsOidcAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._iamRoleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._iamRoleArn = value.iamRoleArn;
    }
  }

  // iam_role_arn - computed: false, optional: false, required: true
  private _iamRoleArn?: string; 
  public get iamRoleArn() {
    return this.getStringAttribute('iam_role_arn');
  }
  public set iamRoleArn(value: string) {
    this._iamRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleArnInput() {
    return this._iamRoleArn;
  }
}
export interface PlatformConnectorAwsSecretManagerCredentials {
  /**
  * Inherit the credentials from from the delegate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_aws_secret_manager#inherit_from_delegate PlatformConnectorAwsSecretManager#inherit_from_delegate}
  */
  readonly inheritFromDelegate?: boolean | cdktf.IResolvable;
  /**
  * assume_role block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_aws_secret_manager#assume_role PlatformConnectorAwsSecretManager#assume_role}
  */
  readonly assumeRole?: PlatformConnectorAwsSecretManagerCredentialsAssumeRole;
  /**
  * manual block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_aws_secret_manager#manual PlatformConnectorAwsSecretManager#manual}
  */
  readonly manual?: PlatformConnectorAwsSecretManagerCredentialsManual;
  /**
  * oidc_authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_aws_secret_manager#oidc_authentication PlatformConnectorAwsSecretManager#oidc_authentication}
  */
  readonly oidcAuthentication?: PlatformConnectorAwsSecretManagerCredentialsOidcAuthentication;
}

export function platformConnectorAwsSecretManagerCredentialsToTerraform(struct?: PlatformConnectorAwsSecretManagerCredentialsOutputReference | PlatformConnectorAwsSecretManagerCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inherit_from_delegate: cdktf.booleanToTerraform(struct!.inheritFromDelegate),
    assume_role: platformConnectorAwsSecretManagerCredentialsAssumeRoleToTerraform(struct!.assumeRole),
    manual: platformConnectorAwsSecretManagerCredentialsManualToTerraform(struct!.manual),
    oidc_authentication: platformConnectorAwsSecretManagerCredentialsOidcAuthenticationToTerraform(struct!.oidcAuthentication),
  }
}


export function platformConnectorAwsSecretManagerCredentialsToHclTerraform(struct?: PlatformConnectorAwsSecretManagerCredentialsOutputReference | PlatformConnectorAwsSecretManagerCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inherit_from_delegate: {
      value: cdktf.booleanToHclTerraform(struct!.inheritFromDelegate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    assume_role: {
      value: platformConnectorAwsSecretManagerCredentialsAssumeRoleToHclTerraform(struct!.assumeRole),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformConnectorAwsSecretManagerCredentialsAssumeRoleList",
    },
    manual: {
      value: platformConnectorAwsSecretManagerCredentialsManualToHclTerraform(struct!.manual),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformConnectorAwsSecretManagerCredentialsManualList",
    },
    oidc_authentication: {
      value: platformConnectorAwsSecretManagerCredentialsOidcAuthenticationToHclTerraform(struct!.oidcAuthentication),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformConnectorAwsSecretManagerCredentialsOidcAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformConnectorAwsSecretManagerCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformConnectorAwsSecretManagerCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inheritFromDelegate !== undefined) {
      hasAnyValues = true;
      internalValueResult.inheritFromDelegate = this._inheritFromDelegate;
    }
    if (this._assumeRole?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assumeRole = this._assumeRole?.internalValue;
    }
    if (this._manual?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manual = this._manual?.internalValue;
    }
    if (this._oidcAuthentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidcAuthentication = this._oidcAuthentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformConnectorAwsSecretManagerCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inheritFromDelegate = undefined;
      this._assumeRole.internalValue = undefined;
      this._manual.internalValue = undefined;
      this._oidcAuthentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inheritFromDelegate = value.inheritFromDelegate;
      this._assumeRole.internalValue = value.assumeRole;
      this._manual.internalValue = value.manual;
      this._oidcAuthentication.internalValue = value.oidcAuthentication;
    }
  }

  // inherit_from_delegate - computed: false, optional: true, required: false
  private _inheritFromDelegate?: boolean | cdktf.IResolvable; 
  public get inheritFromDelegate() {
    return this.getBooleanAttribute('inherit_from_delegate');
  }
  public set inheritFromDelegate(value: boolean | cdktf.IResolvable) {
    this._inheritFromDelegate = value;
  }
  public resetInheritFromDelegate() {
    this._inheritFromDelegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritFromDelegateInput() {
    return this._inheritFromDelegate;
  }

  // assume_role - computed: false, optional: true, required: false
  private _assumeRole = new PlatformConnectorAwsSecretManagerCredentialsAssumeRoleOutputReference(this, "assume_role");
  public get assumeRole() {
    return this._assumeRole;
  }
  public putAssumeRole(value: PlatformConnectorAwsSecretManagerCredentialsAssumeRole) {
    this._assumeRole.internalValue = value;
  }
  public resetAssumeRole() {
    this._assumeRole.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumeRoleInput() {
    return this._assumeRole.internalValue;
  }

  // manual - computed: false, optional: true, required: false
  private _manual = new PlatformConnectorAwsSecretManagerCredentialsManualOutputReference(this, "manual");
  public get manual() {
    return this._manual;
  }
  public putManual(value: PlatformConnectorAwsSecretManagerCredentialsManual) {
    this._manual.internalValue = value;
  }
  public resetManual() {
    this._manual.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualInput() {
    return this._manual.internalValue;
  }

  // oidc_authentication - computed: false, optional: true, required: false
  private _oidcAuthentication = new PlatformConnectorAwsSecretManagerCredentialsOidcAuthenticationOutputReference(this, "oidc_authentication");
  public get oidcAuthentication() {
    return this._oidcAuthentication;
  }
  public putOidcAuthentication(value: PlatformConnectorAwsSecretManagerCredentialsOidcAuthentication) {
    this._oidcAuthentication.internalValue = value;
  }
  public resetOidcAuthentication() {
    this._oidcAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcAuthenticationInput() {
    return this._oidcAuthentication.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_aws_secret_manager harness_platform_connector_aws_secret_manager}
*/
export class PlatformConnectorAwsSecretManager extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_connector_aws_secret_manager";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformConnectorAwsSecretManager resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformConnectorAwsSecretManager to import
  * @param importFromId The id of the existing PlatformConnectorAwsSecretManager that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_aws_secret_manager#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformConnectorAwsSecretManager to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_connector_aws_secret_manager", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_aws_secret_manager harness_platform_connector_aws_secret_manager} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformConnectorAwsSecretManagerConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformConnectorAwsSecretManagerConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_connector_aws_secret_manager',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._default = config.default;
    this._delegateSelectors = config.delegateSelectors;
    this._description = config.description;
    this._executeOnDelegate = config.executeOnDelegate;
    this._forceDeleteWithoutRecovery = config.forceDeleteWithoutRecovery;
    this._id = config.id;
    this._identifier = config.identifier;
    this._name = config.name;
    this._orgId = config.orgId;
    this._projectId = config.projectId;
    this._recoveryWindowInDays = config.recoveryWindowInDays;
    this._region = config.region;
    this._secretNamePrefix = config.secretNamePrefix;
    this._tags = config.tags;
    this._usePutSecret = config.usePutSecret;
    this._credentials.internalValue = config.credentials;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default - computed: false, optional: true, required: false
  private _default?: boolean | cdktf.IResolvable; 
  public get default() {
    return this.getBooleanAttribute('default');
  }
  public set default(value: boolean | cdktf.IResolvable) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // delegate_selectors - computed: false, optional: true, required: false
  private _delegateSelectors?: string[]; 
  public get delegateSelectors() {
    return cdktf.Fn.tolist(this.getListAttribute('delegate_selectors'));
  }
  public set delegateSelectors(value: string[]) {
    this._delegateSelectors = value;
  }
  public resetDelegateSelectors() {
    this._delegateSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegateSelectorsInput() {
    return this._delegateSelectors;
  }

  // description - computed: false, optional: true, required: false
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

  // execute_on_delegate - computed: false, optional: true, required: false
  private _executeOnDelegate?: boolean | cdktf.IResolvable; 
  public get executeOnDelegate() {
    return this.getBooleanAttribute('execute_on_delegate');
  }
  public set executeOnDelegate(value: boolean | cdktf.IResolvable) {
    this._executeOnDelegate = value;
  }
  public resetExecuteOnDelegate() {
    this._executeOnDelegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeOnDelegateInput() {
    return this._executeOnDelegate;
  }

  // force_delete_without_recovery - computed: false, optional: true, required: false
  private _forceDeleteWithoutRecovery?: boolean | cdktf.IResolvable; 
  public get forceDeleteWithoutRecovery() {
    return this.getBooleanAttribute('force_delete_without_recovery');
  }
  public set forceDeleteWithoutRecovery(value: boolean | cdktf.IResolvable) {
    this._forceDeleteWithoutRecovery = value;
  }
  public resetForceDeleteWithoutRecovery() {
    this._forceDeleteWithoutRecovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteWithoutRecoveryInput() {
    return this._forceDeleteWithoutRecovery;
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

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // recovery_window_in_days - computed: false, optional: true, required: false
  private _recoveryWindowInDays?: number; 
  public get recoveryWindowInDays() {
    return this.getNumberAttribute('recovery_window_in_days');
  }
  public set recoveryWindowInDays(value: number) {
    this._recoveryWindowInDays = value;
  }
  public resetRecoveryWindowInDays() {
    this._recoveryWindowInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryWindowInDaysInput() {
    return this._recoveryWindowInDays;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // secret_name_prefix - computed: false, optional: true, required: false
  private _secretNamePrefix?: string; 
  public get secretNamePrefix() {
    return this.getStringAttribute('secret_name_prefix');
  }
  public set secretNamePrefix(value: string) {
    this._secretNamePrefix = value;
  }
  public resetSecretNamePrefix() {
    this._secretNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNamePrefixInput() {
    return this._secretNamePrefix;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // use_put_secret - computed: false, optional: true, required: false
  private _usePutSecret?: boolean | cdktf.IResolvable; 
  public get usePutSecret() {
    return this.getBooleanAttribute('use_put_secret');
  }
  public set usePutSecret(value: boolean | cdktf.IResolvable) {
    this._usePutSecret = value;
  }
  public resetUsePutSecret() {
    this._usePutSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePutSecretInput() {
    return this._usePutSecret;
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials = new PlatformConnectorAwsSecretManagerCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: PlatformConnectorAwsSecretManagerCredentials) {
    this._credentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default: cdktf.booleanToTerraform(this._default),
      delegate_selectors: cdktf.listMapper(cdktf.stringToTerraform, false)(this._delegateSelectors),
      description: cdktf.stringToTerraform(this._description),
      execute_on_delegate: cdktf.booleanToTerraform(this._executeOnDelegate),
      force_delete_without_recovery: cdktf.booleanToTerraform(this._forceDeleteWithoutRecovery),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_id: cdktf.stringToTerraform(this._projectId),
      recovery_window_in_days: cdktf.numberToTerraform(this._recoveryWindowInDays),
      region: cdktf.stringToTerraform(this._region),
      secret_name_prefix: cdktf.stringToTerraform(this._secretNamePrefix),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      use_put_secret: cdktf.booleanToTerraform(this._usePutSecret),
      credentials: platformConnectorAwsSecretManagerCredentialsToTerraform(this._credentials.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default: {
        value: cdktf.booleanToHclTerraform(this._default),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delegate_selectors: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._delegateSelectors),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      execute_on_delegate: {
        value: cdktf.booleanToHclTerraform(this._executeOnDelegate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_delete_without_recovery: {
        value: cdktf.booleanToHclTerraform(this._forceDeleteWithoutRecovery),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recovery_window_in_days: {
        value: cdktf.numberToHclTerraform(this._recoveryWindowInDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_name_prefix: {
        value: cdktf.stringToHclTerraform(this._secretNamePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      use_put_secret: {
        value: cdktf.booleanToHclTerraform(this._usePutSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      credentials: {
        value: platformConnectorAwsSecretManagerCredentialsToHclTerraform(this._credentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformConnectorAwsSecretManagerCredentialsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
