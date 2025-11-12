// https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_awskms
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformConnectorAwskmsConfig extends cdktf.TerraformMetaArguments {
  /**
  * A reference to the Harness secret containing the ARN of the AWS KMS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_awskms#arn_plaintext PlatformConnectorAwskms#arn_plaintext}
  */
  readonly arnPlaintext?: string;
  /**
  * A reference to the Harness secret containing the ARN of the AWS KMS. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_awskms#arn_ref PlatformConnectorAwskms#arn_ref}
  */
  readonly arnRef?: string;
  /**
  * Set this connector as the default for all the services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_awskms#default PlatformConnectorAwskms#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * Tags to filter delegates for connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_awskms#delegate_selectors PlatformConnectorAwskms#delegate_selectors}
  */
  readonly delegateSelectors?: string[];
  /**
  * Description of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_awskms#description PlatformConnectorAwskms#description}
  */
  readonly description?: string;
  /**
  * Execute the command on the delegate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_awskms#execute_on_delegate PlatformConnectorAwskms#execute_on_delegate}
  */
  readonly executeOnDelegate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_awskms#id PlatformConnectorAwskms#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique identifier of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_awskms#identifier PlatformConnectorAwskms#identifier}
  */
  readonly identifier: string;
  /**
  * Name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_awskms#name PlatformConnectorAwskms#name}
  */
  readonly name: string;
  /**
  * Unique identifier of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_awskms#org_id PlatformConnectorAwskms#org_id}
  */
  readonly orgId?: string;
  /**
  * Unique identifier of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_awskms#project_id PlatformConnectorAwskms#project_id}
  */
  readonly projectId?: string;
  /**
  * The AWS region where the AWS Secret Manager is.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_awskms#region PlatformConnectorAwskms#region}
  */
  readonly region: string;
  /**
  * Tags to associate with the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_awskms#tags PlatformConnectorAwskms#tags}
  */
  readonly tags?: string[];
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_awskms#credentials PlatformConnectorAwskms#credentials}
  */
  readonly credentials: PlatformConnectorAwskmsCredentials;
}
export interface PlatformConnectorAwskmsCredentialsAssumeRole {
  /**
  * The duration, in seconds, of the role session. The value can range from 900 seconds (15 minutes) to 3600 seconds (1 hour). By default, the value is set to 3600 seconds. An expiration can also be specified in the client request body. The minimum value is 1 hour.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_awskms#duration PlatformConnectorAwskms#duration}
  */
  readonly duration: number;
  /**
  * If the administrator of the account to which the role belongs provided you with an external ID, then enter that value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_awskms#external_id PlatformConnectorAwskms#external_id}
  */
  readonly externalId?: string;
  /**
  * The ARN of the role to assume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_awskms#role_arn PlatformConnectorAwskms#role_arn}
  */
  readonly roleArn: string;
}

export function platformConnectorAwskmsCredentialsAssumeRoleToTerraform(struct?: PlatformConnectorAwskmsCredentialsAssumeRoleOutputReference | PlatformConnectorAwskmsCredentialsAssumeRole): any {
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


export function platformConnectorAwskmsCredentialsAssumeRoleToHclTerraform(struct?: PlatformConnectorAwskmsCredentialsAssumeRoleOutputReference | PlatformConnectorAwskmsCredentialsAssumeRole): any {
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

export class PlatformConnectorAwskmsCredentialsAssumeRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformConnectorAwskmsCredentialsAssumeRole | undefined {
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

  public set internalValue(value: PlatformConnectorAwskmsCredentialsAssumeRole | undefined) {
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
export interface PlatformConnectorAwskmsCredentialsManual {
  /**
  * The reference to the Harness secret containing the AWS access key. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_awskms#access_key_ref PlatformConnectorAwskms#access_key_ref}
  */
  readonly accessKeyRef: string;
  /**
  * The reference to the Harness secret containing the AWS secret key. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_awskms#secret_key_ref PlatformConnectorAwskms#secret_key_ref}
  */
  readonly secretKeyRef: string;
}

export function platformConnectorAwskmsCredentialsManualToTerraform(struct?: PlatformConnectorAwskmsCredentialsManualOutputReference | PlatformConnectorAwskmsCredentialsManual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_ref: cdktf.stringToTerraform(struct!.accessKeyRef),
    secret_key_ref: cdktf.stringToTerraform(struct!.secretKeyRef),
  }
}


export function platformConnectorAwskmsCredentialsManualToHclTerraform(struct?: PlatformConnectorAwskmsCredentialsManualOutputReference | PlatformConnectorAwskmsCredentialsManual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class PlatformConnectorAwskmsCredentialsManualOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformConnectorAwskmsCredentialsManual | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: PlatformConnectorAwskmsCredentialsManual | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKeyRef = undefined;
      this._secretKeyRef = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKeyRef = value.accessKeyRef;
      this._secretKeyRef = value.secretKeyRef;
    }
  }

  // access_key_ref - computed: false, optional: false, required: true
  private _accessKeyRef?: string; 
  public get accessKeyRef() {
    return this.getStringAttribute('access_key_ref');
  }
  public set accessKeyRef(value: string) {
    this._accessKeyRef = value;
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
export interface PlatformConnectorAwskmsCredentialsOidcAuthentication {
  /**
  * The ARN of the IAM role to assume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_awskms#iam_role_arn PlatformConnectorAwskms#iam_role_arn}
  */
  readonly iamRoleArn: string;
}

export function platformConnectorAwskmsCredentialsOidcAuthenticationToTerraform(struct?: PlatformConnectorAwskmsCredentialsOidcAuthenticationOutputReference | PlatformConnectorAwskmsCredentialsOidcAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iam_role_arn: cdktf.stringToTerraform(struct!.iamRoleArn),
  }
}


export function platformConnectorAwskmsCredentialsOidcAuthenticationToHclTerraform(struct?: PlatformConnectorAwskmsCredentialsOidcAuthenticationOutputReference | PlatformConnectorAwskmsCredentialsOidcAuthentication): any {
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

export class PlatformConnectorAwskmsCredentialsOidcAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformConnectorAwskmsCredentialsOidcAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iamRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamRoleArn = this._iamRoleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformConnectorAwskmsCredentialsOidcAuthentication | undefined) {
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
export interface PlatformConnectorAwskmsCredentials {
  /**
  * Inherit the credentials from from the delegate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_awskms#inherit_from_delegate PlatformConnectorAwskms#inherit_from_delegate}
  */
  readonly inheritFromDelegate?: boolean | cdktf.IResolvable;
  /**
  * assume_role block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_awskms#assume_role PlatformConnectorAwskms#assume_role}
  */
  readonly assumeRole?: PlatformConnectorAwskmsCredentialsAssumeRole;
  /**
  * manual block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_awskms#manual PlatformConnectorAwskms#manual}
  */
  readonly manual?: PlatformConnectorAwskmsCredentialsManual;
  /**
  * oidc_authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_awskms#oidc_authentication PlatformConnectorAwskms#oidc_authentication}
  */
  readonly oidcAuthentication?: PlatformConnectorAwskmsCredentialsOidcAuthentication;
}

export function platformConnectorAwskmsCredentialsToTerraform(struct?: PlatformConnectorAwskmsCredentialsOutputReference | PlatformConnectorAwskmsCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inherit_from_delegate: cdktf.booleanToTerraform(struct!.inheritFromDelegate),
    assume_role: platformConnectorAwskmsCredentialsAssumeRoleToTerraform(struct!.assumeRole),
    manual: platformConnectorAwskmsCredentialsManualToTerraform(struct!.manual),
    oidc_authentication: platformConnectorAwskmsCredentialsOidcAuthenticationToTerraform(struct!.oidcAuthentication),
  }
}


export function platformConnectorAwskmsCredentialsToHclTerraform(struct?: PlatformConnectorAwskmsCredentialsOutputReference | PlatformConnectorAwskmsCredentials): any {
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
      value: platformConnectorAwskmsCredentialsAssumeRoleToHclTerraform(struct!.assumeRole),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformConnectorAwskmsCredentialsAssumeRoleList",
    },
    manual: {
      value: platformConnectorAwskmsCredentialsManualToHclTerraform(struct!.manual),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformConnectorAwskmsCredentialsManualList",
    },
    oidc_authentication: {
      value: platformConnectorAwskmsCredentialsOidcAuthenticationToHclTerraform(struct!.oidcAuthentication),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformConnectorAwskmsCredentialsOidcAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformConnectorAwskmsCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformConnectorAwskmsCredentials | undefined {
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

  public set internalValue(value: PlatformConnectorAwskmsCredentials | undefined) {
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
  private _assumeRole = new PlatformConnectorAwskmsCredentialsAssumeRoleOutputReference(this, "assume_role");
  public get assumeRole() {
    return this._assumeRole;
  }
  public putAssumeRole(value: PlatformConnectorAwskmsCredentialsAssumeRole) {
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
  private _manual = new PlatformConnectorAwskmsCredentialsManualOutputReference(this, "manual");
  public get manual() {
    return this._manual;
  }
  public putManual(value: PlatformConnectorAwskmsCredentialsManual) {
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
  private _oidcAuthentication = new PlatformConnectorAwskmsCredentialsOidcAuthenticationOutputReference(this, "oidc_authentication");
  public get oidcAuthentication() {
    return this._oidcAuthentication;
  }
  public putOidcAuthentication(value: PlatformConnectorAwskmsCredentialsOidcAuthentication) {
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
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_awskms harness_platform_connector_awskms}
*/
export class PlatformConnectorAwskms extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_connector_awskms";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformConnectorAwskms resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformConnectorAwskms to import
  * @param importFromId The id of the existing PlatformConnectorAwskms that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_awskms#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformConnectorAwskms to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_connector_awskms", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_connector_awskms harness_platform_connector_awskms} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformConnectorAwskmsConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformConnectorAwskmsConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_connector_awskms',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.0',
        providerVersionConstraint: '0.39.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._arnPlaintext = config.arnPlaintext;
    this._arnRef = config.arnRef;
    this._default = config.default;
    this._delegateSelectors = config.delegateSelectors;
    this._description = config.description;
    this._executeOnDelegate = config.executeOnDelegate;
    this._id = config.id;
    this._identifier = config.identifier;
    this._name = config.name;
    this._orgId = config.orgId;
    this._projectId = config.projectId;
    this._region = config.region;
    this._tags = config.tags;
    this._credentials.internalValue = config.credentials;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn_plaintext - computed: false, optional: true, required: false
  private _arnPlaintext?: string; 
  public get arnPlaintext() {
    return this.getStringAttribute('arn_plaintext');
  }
  public set arnPlaintext(value: string) {
    this._arnPlaintext = value;
  }
  public resetArnPlaintext() {
    this._arnPlaintext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnPlaintextInput() {
    return this._arnPlaintext;
  }

  // arn_ref - computed: false, optional: true, required: false
  private _arnRef?: string; 
  public get arnRef() {
    return this.getStringAttribute('arn_ref');
  }
  public set arnRef(value: string) {
    this._arnRef = value;
  }
  public resetArnRef() {
    this._arnRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnRefInput() {
    return this._arnRef;
  }

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

  // credentials - computed: false, optional: false, required: true
  private _credentials = new PlatformConnectorAwskmsCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: PlatformConnectorAwskmsCredentials) {
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
      arn_plaintext: cdktf.stringToTerraform(this._arnPlaintext),
      arn_ref: cdktf.stringToTerraform(this._arnRef),
      default: cdktf.booleanToTerraform(this._default),
      delegate_selectors: cdktf.listMapper(cdktf.stringToTerraform, false)(this._delegateSelectors),
      description: cdktf.stringToTerraform(this._description),
      execute_on_delegate: cdktf.booleanToTerraform(this._executeOnDelegate),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_id: cdktf.stringToTerraform(this._projectId),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      credentials: platformConnectorAwskmsCredentialsToTerraform(this._credentials.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      arn_plaintext: {
        value: cdktf.stringToHclTerraform(this._arnPlaintext),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arn_ref: {
        value: cdktf.stringToHclTerraform(this._arnRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
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
      credentials: {
        value: platformConnectorAwskmsCredentialsToHclTerraform(this._credentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformConnectorAwskmsCredentialsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
