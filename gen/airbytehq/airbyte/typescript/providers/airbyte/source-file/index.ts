// https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_file
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SourceFileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_file#configuration SourceFile#configuration}
  */
  readonly configuration: SourceFileConfiguration;
  /**
  * The UUID of the connector definition. One of configuration.sourceType or definitionId must be provided. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_file#definition_id SourceFile#definition_id}
  */
  readonly definitionId?: string;
  /**
  * Name of the source e.g. dev-mysql-instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_file#name SourceFile#name}
  */
  readonly name: string;
  /**
  * Optional secretID obtained through the public API OAuth redirect flow. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_file#secret_id SourceFile#secret_id}
  */
  readonly secretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_file#workspace_id SourceFile#workspace_id}
  */
  readonly workspaceId: string;
}
export interface SourceFileConfigurationProviderAzBlobAzureBlobStorage {
  /**
  * To access Azure Blob Storage, this connector would need credentials with the proper permissions. One option is a SAS (Shared Access Signature) token. If accessing publicly available data, this field is not necessary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_file#sas_token SourceFile#sas_token}
  */
  readonly sasToken?: string;
  /**
  * To access Azure Blob Storage, this connector would need credentials with the proper permissions. One option is a storage account shared key (aka account key or access key). If accessing publicly available data, this field is not necessary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_file#shared_key SourceFile#shared_key}
  */
  readonly sharedKey?: string;
  /**
  * The globally unique name of the storage account that the desired blob sits within. See <a href="https://docs.microsoft.com/en-us/azure/storage/common/storage-account-overview" target="_blank">here</a> for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_file#storage_account SourceFile#storage_account}
  */
  readonly storageAccount: string;
}

export function sourceFileConfigurationProviderAzBlobAzureBlobStorageToTerraform(struct?: SourceFileConfigurationProviderAzBlobAzureBlobStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sas_token: cdktf.stringToTerraform(struct!.sasToken),
    shared_key: cdktf.stringToTerraform(struct!.sharedKey),
    storage_account: cdktf.stringToTerraform(struct!.storageAccount),
  }
}


export function sourceFileConfigurationProviderAzBlobAzureBlobStorageToHclTerraform(struct?: SourceFileConfigurationProviderAzBlobAzureBlobStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sas_token: {
      value: cdktf.stringToHclTerraform(struct!.sasToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared_key: {
      value: cdktf.stringToHclTerraform(struct!.sharedKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_account: {
      value: cdktf.stringToHclTerraform(struct!.storageAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceFileConfigurationProviderAzBlobAzureBlobStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceFileConfigurationProviderAzBlobAzureBlobStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sasToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.sasToken = this._sasToken;
    }
    if (this._sharedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedKey = this._sharedKey;
    }
    if (this._storageAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccount = this._storageAccount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceFileConfigurationProviderAzBlobAzureBlobStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sasToken = undefined;
      this._sharedKey = undefined;
      this._storageAccount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sasToken = value.sasToken;
      this._sharedKey = value.sharedKey;
      this._storageAccount = value.storageAccount;
    }
  }

  // sas_token - computed: false, optional: true, required: false
  private _sasToken?: string; 
  public get sasToken() {
    return this.getStringAttribute('sas_token');
  }
  public set sasToken(value: string) {
    this._sasToken = value;
  }
  public resetSasToken() {
    this._sasToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sasTokenInput() {
    return this._sasToken;
  }

  // shared_key - computed: false, optional: true, required: false
  private _sharedKey?: string; 
  public get sharedKey() {
    return this.getStringAttribute('shared_key');
  }
  public set sharedKey(value: string) {
    this._sharedKey = value;
  }
  public resetSharedKey() {
    this._sharedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedKeyInput() {
    return this._sharedKey;
  }

  // storage_account - computed: false, optional: false, required: true
  private _storageAccount?: string; 
  public get storageAccount() {
    return this.getStringAttribute('storage_account');
  }
  public set storageAccount(value: string) {
    this._storageAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountInput() {
    return this._storageAccount;
  }
}
export interface SourceFileConfigurationProviderGcsGoogleCloudStorage {
  /**
  * In order to access private Buckets stored on Google Cloud, this connector would need a service account json credentials with the proper permissions as described <a href="https://cloud.google.com/iam/docs/service-accounts" target="_blank">here</a>. Please generate the credentials.json file and copy/paste its content to this field (expecting JSON formats). If accessing publicly available data, this field is not necessary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_file#service_account_json SourceFile#service_account_json}
  */
  readonly serviceAccountJson?: string;
}

export function sourceFileConfigurationProviderGcsGoogleCloudStorageToTerraform(struct?: SourceFileConfigurationProviderGcsGoogleCloudStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_account_json: cdktf.stringToTerraform(struct!.serviceAccountJson),
  }
}


export function sourceFileConfigurationProviderGcsGoogleCloudStorageToHclTerraform(struct?: SourceFileConfigurationProviderGcsGoogleCloudStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_account_json: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceFileConfigurationProviderGcsGoogleCloudStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceFileConfigurationProviderGcsGoogleCloudStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceAccountJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountJson = this._serviceAccountJson;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceFileConfigurationProviderGcsGoogleCloudStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceAccountJson = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceAccountJson = value.serviceAccountJson;
    }
  }

  // service_account_json - computed: false, optional: true, required: false
  private _serviceAccountJson?: string; 
  public get serviceAccountJson() {
    return this.getStringAttribute('service_account_json');
  }
  public set serviceAccountJson(value: string) {
    this._serviceAccountJson = value;
  }
  public resetServiceAccountJson() {
    this._serviceAccountJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountJsonInput() {
    return this._serviceAccountJson;
  }
}
export interface SourceFileConfigurationProviderHttpsPublicWeb {
  /**
  * Add User-Agent to request. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_file#user_agent SourceFile#user_agent}
  */
  readonly userAgent?: boolean | cdktf.IResolvable;
}

export function sourceFileConfigurationProviderHttpsPublicWebToTerraform(struct?: SourceFileConfigurationProviderHttpsPublicWeb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_agent: cdktf.booleanToTerraform(struct!.userAgent),
  }
}


export function sourceFileConfigurationProviderHttpsPublicWebToHclTerraform(struct?: SourceFileConfigurationProviderHttpsPublicWeb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user_agent: {
      value: cdktf.booleanToHclTerraform(struct!.userAgent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceFileConfigurationProviderHttpsPublicWebOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceFileConfigurationProviderHttpsPublicWeb | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAgent = this._userAgent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceFileConfigurationProviderHttpsPublicWeb | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._userAgent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._userAgent = value.userAgent;
    }
  }

  // user_agent - computed: true, optional: true, required: false
  private _userAgent?: boolean | cdktf.IResolvable; 
  public get userAgent() {
    return this.getBooleanAttribute('user_agent');
  }
  public set userAgent(value: boolean | cdktf.IResolvable) {
    this._userAgent = value;
  }
  public resetUserAgent() {
    this._userAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAgentInput() {
    return this._userAgent;
  }
}
export interface SourceFileConfigurationProviderLocalFilesystemLimited {
}

export function sourceFileConfigurationProviderLocalFilesystemLimitedToTerraform(struct?: SourceFileConfigurationProviderLocalFilesystemLimited | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceFileConfigurationProviderLocalFilesystemLimitedToHclTerraform(struct?: SourceFileConfigurationProviderLocalFilesystemLimited | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceFileConfigurationProviderLocalFilesystemLimitedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceFileConfigurationProviderLocalFilesystemLimited | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceFileConfigurationProviderLocalFilesystemLimited | cdktf.IResolvable | undefined) {
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
export interface SourceFileConfigurationProviderS3AmazonWebServices {
  /**
  * In order to access private Buckets stored on AWS S3, this connector would need credentials with the proper permissions. If accessing publicly available data, this field is not necessary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_file#aws_access_key_id SourceFile#aws_access_key_id}
  */
  readonly awsAccessKeyId?: string;
  /**
  * In order to access private Buckets stored on AWS S3, this connector would need credentials with the proper permissions. If accessing publicly available data, this field is not necessary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_file#aws_secret_access_key SourceFile#aws_secret_access_key}
  */
  readonly awsSecretAccessKey?: string;
}

export function sourceFileConfigurationProviderS3AmazonWebServicesToTerraform(struct?: SourceFileConfigurationProviderS3AmazonWebServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_access_key_id: cdktf.stringToTerraform(struct!.awsAccessKeyId),
    aws_secret_access_key: cdktf.stringToTerraform(struct!.awsSecretAccessKey),
  }
}


export function sourceFileConfigurationProviderS3AmazonWebServicesToHclTerraform(struct?: SourceFileConfigurationProviderS3AmazonWebServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.awsAccessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.awsSecretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceFileConfigurationProviderS3AmazonWebServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceFileConfigurationProviderS3AmazonWebServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsAccessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAccessKeyId = this._awsAccessKeyId;
    }
    if (this._awsSecretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSecretAccessKey = this._awsSecretAccessKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceFileConfigurationProviderS3AmazonWebServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsAccessKeyId = undefined;
      this._awsSecretAccessKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsAccessKeyId = value.awsAccessKeyId;
      this._awsSecretAccessKey = value.awsSecretAccessKey;
    }
  }

  // aws_access_key_id - computed: false, optional: true, required: false
  private _awsAccessKeyId?: string; 
  public get awsAccessKeyId() {
    return this.getStringAttribute('aws_access_key_id');
  }
  public set awsAccessKeyId(value: string) {
    this._awsAccessKeyId = value;
  }
  public resetAwsAccessKeyId() {
    this._awsAccessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccessKeyIdInput() {
    return this._awsAccessKeyId;
  }

  // aws_secret_access_key - computed: false, optional: true, required: false
  private _awsSecretAccessKey?: string; 
  public get awsSecretAccessKey() {
    return this.getStringAttribute('aws_secret_access_key');
  }
  public set awsSecretAccessKey(value: string) {
    this._awsSecretAccessKey = value;
  }
  public resetAwsSecretAccessKey() {
    this._awsSecretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecretAccessKeyInput() {
    return this._awsSecretAccessKey;
  }
}
export interface SourceFileConfigurationProviderScpSecureCopyProtocol {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_file#host SourceFile#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_file#password SourceFile#password}
  */
  readonly password?: string;
  /**
  * Default: "22"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_file#port SourceFile#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_file#user SourceFile#user}
  */
  readonly user: string;
}

export function sourceFileConfigurationProviderScpSecureCopyProtocolToTerraform(struct?: SourceFileConfigurationProviderScpSecureCopyProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.stringToTerraform(struct!.port),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function sourceFileConfigurationProviderScpSecureCopyProtocolToHclTerraform(struct?: SourceFileConfigurationProviderScpSecureCopyProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceFileConfigurationProviderScpSecureCopyProtocolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceFileConfigurationProviderScpSecureCopyProtocol | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceFileConfigurationProviderScpSecureCopyProtocol | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._password = undefined;
      this._port = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._password = value.password;
      this._port = value.port;
      this._user = value.user;
    }
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface SourceFileConfigurationProviderSftpSecureFileTransferProtocol {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_file#host SourceFile#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_file#password SourceFile#password}
  */
  readonly password?: string;
  /**
  * Default: "22"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_file#port SourceFile#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_file#user SourceFile#user}
  */
  readonly user: string;
}

export function sourceFileConfigurationProviderSftpSecureFileTransferProtocolToTerraform(struct?: SourceFileConfigurationProviderSftpSecureFileTransferProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.stringToTerraform(struct!.port),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function sourceFileConfigurationProviderSftpSecureFileTransferProtocolToHclTerraform(struct?: SourceFileConfigurationProviderSftpSecureFileTransferProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceFileConfigurationProviderSftpSecureFileTransferProtocolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceFileConfigurationProviderSftpSecureFileTransferProtocol | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceFileConfigurationProviderSftpSecureFileTransferProtocol | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._password = undefined;
      this._port = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._password = value.password;
      this._port = value.port;
      this._user = value.user;
    }
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface SourceFileConfigurationProviderSshSecureShell {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_file#host SourceFile#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_file#password SourceFile#password}
  */
  readonly password?: string;
  /**
  * Default: "22"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_file#port SourceFile#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_file#user SourceFile#user}
  */
  readonly user: string;
}

export function sourceFileConfigurationProviderSshSecureShellToTerraform(struct?: SourceFileConfigurationProviderSshSecureShell | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.stringToTerraform(struct!.port),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function sourceFileConfigurationProviderSshSecureShellToHclTerraform(struct?: SourceFileConfigurationProviderSshSecureShell | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceFileConfigurationProviderSshSecureShellOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceFileConfigurationProviderSshSecureShell | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceFileConfigurationProviderSshSecureShell | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._password = undefined;
      this._port = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._password = value.password;
      this._port = value.port;
      this._user = value.user;
    }
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface SourceFileConfigurationProvider {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_file#az_blob_azure_blob_storage SourceFile#az_blob_azure_blob_storage}
  */
  readonly azBlobAzureBlobStorage?: SourceFileConfigurationProviderAzBlobAzureBlobStorage;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_file#gcs_google_cloud_storage SourceFile#gcs_google_cloud_storage}
  */
  readonly gcsGoogleCloudStorage?: SourceFileConfigurationProviderGcsGoogleCloudStorage;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_file#https_public_web SourceFile#https_public_web}
  */
  readonly httpsPublicWeb?: SourceFileConfigurationProviderHttpsPublicWeb;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_file#local_filesystem_limited SourceFile#local_filesystem_limited}
  */
  readonly localFilesystemLimited?: SourceFileConfigurationProviderLocalFilesystemLimited;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_file#s3_amazon_web_services SourceFile#s3_amazon_web_services}
  */
  readonly s3AmazonWebServices?: SourceFileConfigurationProviderS3AmazonWebServices;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_file#scp_secure_copy_protocol SourceFile#scp_secure_copy_protocol}
  */
  readonly scpSecureCopyProtocol?: SourceFileConfigurationProviderScpSecureCopyProtocol;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_file#sftp_secure_file_transfer_protocol SourceFile#sftp_secure_file_transfer_protocol}
  */
  readonly sftpSecureFileTransferProtocol?: SourceFileConfigurationProviderSftpSecureFileTransferProtocol;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_file#ssh_secure_shell SourceFile#ssh_secure_shell}
  */
  readonly sshSecureShell?: SourceFileConfigurationProviderSshSecureShell;
}

export function sourceFileConfigurationProviderToTerraform(struct?: SourceFileConfigurationProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    az_blob_azure_blob_storage: sourceFileConfigurationProviderAzBlobAzureBlobStorageToTerraform(struct!.azBlobAzureBlobStorage),
    gcs_google_cloud_storage: sourceFileConfigurationProviderGcsGoogleCloudStorageToTerraform(struct!.gcsGoogleCloudStorage),
    https_public_web: sourceFileConfigurationProviderHttpsPublicWebToTerraform(struct!.httpsPublicWeb),
    local_filesystem_limited: sourceFileConfigurationProviderLocalFilesystemLimitedToTerraform(struct!.localFilesystemLimited),
    s3_amazon_web_services: sourceFileConfigurationProviderS3AmazonWebServicesToTerraform(struct!.s3AmazonWebServices),
    scp_secure_copy_protocol: sourceFileConfigurationProviderScpSecureCopyProtocolToTerraform(struct!.scpSecureCopyProtocol),
    sftp_secure_file_transfer_protocol: sourceFileConfigurationProviderSftpSecureFileTransferProtocolToTerraform(struct!.sftpSecureFileTransferProtocol),
    ssh_secure_shell: sourceFileConfigurationProviderSshSecureShellToTerraform(struct!.sshSecureShell),
  }
}


export function sourceFileConfigurationProviderToHclTerraform(struct?: SourceFileConfigurationProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    az_blob_azure_blob_storage: {
      value: sourceFileConfigurationProviderAzBlobAzureBlobStorageToHclTerraform(struct!.azBlobAzureBlobStorage),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceFileConfigurationProviderAzBlobAzureBlobStorage",
    },
    gcs_google_cloud_storage: {
      value: sourceFileConfigurationProviderGcsGoogleCloudStorageToHclTerraform(struct!.gcsGoogleCloudStorage),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceFileConfigurationProviderGcsGoogleCloudStorage",
    },
    https_public_web: {
      value: sourceFileConfigurationProviderHttpsPublicWebToHclTerraform(struct!.httpsPublicWeb),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceFileConfigurationProviderHttpsPublicWeb",
    },
    local_filesystem_limited: {
      value: sourceFileConfigurationProviderLocalFilesystemLimitedToHclTerraform(struct!.localFilesystemLimited),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceFileConfigurationProviderLocalFilesystemLimited",
    },
    s3_amazon_web_services: {
      value: sourceFileConfigurationProviderS3AmazonWebServicesToHclTerraform(struct!.s3AmazonWebServices),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceFileConfigurationProviderS3AmazonWebServices",
    },
    scp_secure_copy_protocol: {
      value: sourceFileConfigurationProviderScpSecureCopyProtocolToHclTerraform(struct!.scpSecureCopyProtocol),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceFileConfigurationProviderScpSecureCopyProtocol",
    },
    sftp_secure_file_transfer_protocol: {
      value: sourceFileConfigurationProviderSftpSecureFileTransferProtocolToHclTerraform(struct!.sftpSecureFileTransferProtocol),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceFileConfigurationProviderSftpSecureFileTransferProtocol",
    },
    ssh_secure_shell: {
      value: sourceFileConfigurationProviderSshSecureShellToHclTerraform(struct!.sshSecureShell),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceFileConfigurationProviderSshSecureShell",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceFileConfigurationProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceFileConfigurationProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azBlobAzureBlobStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azBlobAzureBlobStorage = this._azBlobAzureBlobStorage?.internalValue;
    }
    if (this._gcsGoogleCloudStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsGoogleCloudStorage = this._gcsGoogleCloudStorage?.internalValue;
    }
    if (this._httpsPublicWeb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsPublicWeb = this._httpsPublicWeb?.internalValue;
    }
    if (this._localFilesystemLimited?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localFilesystemLimited = this._localFilesystemLimited?.internalValue;
    }
    if (this._s3AmazonWebServices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3AmazonWebServices = this._s3AmazonWebServices?.internalValue;
    }
    if (this._scpSecureCopyProtocol?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scpSecureCopyProtocol = this._scpSecureCopyProtocol?.internalValue;
    }
    if (this._sftpSecureFileTransferProtocol?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sftpSecureFileTransferProtocol = this._sftpSecureFileTransferProtocol?.internalValue;
    }
    if (this._sshSecureShell?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshSecureShell = this._sshSecureShell?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceFileConfigurationProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._azBlobAzureBlobStorage.internalValue = undefined;
      this._gcsGoogleCloudStorage.internalValue = undefined;
      this._httpsPublicWeb.internalValue = undefined;
      this._localFilesystemLimited.internalValue = undefined;
      this._s3AmazonWebServices.internalValue = undefined;
      this._scpSecureCopyProtocol.internalValue = undefined;
      this._sftpSecureFileTransferProtocol.internalValue = undefined;
      this._sshSecureShell.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._azBlobAzureBlobStorage.internalValue = value.azBlobAzureBlobStorage;
      this._gcsGoogleCloudStorage.internalValue = value.gcsGoogleCloudStorage;
      this._httpsPublicWeb.internalValue = value.httpsPublicWeb;
      this._localFilesystemLimited.internalValue = value.localFilesystemLimited;
      this._s3AmazonWebServices.internalValue = value.s3AmazonWebServices;
      this._scpSecureCopyProtocol.internalValue = value.scpSecureCopyProtocol;
      this._sftpSecureFileTransferProtocol.internalValue = value.sftpSecureFileTransferProtocol;
      this._sshSecureShell.internalValue = value.sshSecureShell;
    }
  }

  // az_blob_azure_blob_storage - computed: false, optional: true, required: false
  private _azBlobAzureBlobStorage = new SourceFileConfigurationProviderAzBlobAzureBlobStorageOutputReference(this, "az_blob_azure_blob_storage");
  public get azBlobAzureBlobStorage() {
    return this._azBlobAzureBlobStorage;
  }
  public putAzBlobAzureBlobStorage(value: SourceFileConfigurationProviderAzBlobAzureBlobStorage) {
    this._azBlobAzureBlobStorage.internalValue = value;
  }
  public resetAzBlobAzureBlobStorage() {
    this._azBlobAzureBlobStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azBlobAzureBlobStorageInput() {
    return this._azBlobAzureBlobStorage.internalValue;
  }

  // gcs_google_cloud_storage - computed: false, optional: true, required: false
  private _gcsGoogleCloudStorage = new SourceFileConfigurationProviderGcsGoogleCloudStorageOutputReference(this, "gcs_google_cloud_storage");
  public get gcsGoogleCloudStorage() {
    return this._gcsGoogleCloudStorage;
  }
  public putGcsGoogleCloudStorage(value: SourceFileConfigurationProviderGcsGoogleCloudStorage) {
    this._gcsGoogleCloudStorage.internalValue = value;
  }
  public resetGcsGoogleCloudStorage() {
    this._gcsGoogleCloudStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsGoogleCloudStorageInput() {
    return this._gcsGoogleCloudStorage.internalValue;
  }

  // https_public_web - computed: false, optional: true, required: false
  private _httpsPublicWeb = new SourceFileConfigurationProviderHttpsPublicWebOutputReference(this, "https_public_web");
  public get httpsPublicWeb() {
    return this._httpsPublicWeb;
  }
  public putHttpsPublicWeb(value: SourceFileConfigurationProviderHttpsPublicWeb) {
    this._httpsPublicWeb.internalValue = value;
  }
  public resetHttpsPublicWeb() {
    this._httpsPublicWeb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsPublicWebInput() {
    return this._httpsPublicWeb.internalValue;
  }

  // local_filesystem_limited - computed: false, optional: true, required: false
  private _localFilesystemLimited = new SourceFileConfigurationProviderLocalFilesystemLimitedOutputReference(this, "local_filesystem_limited");
  public get localFilesystemLimited() {
    return this._localFilesystemLimited;
  }
  public putLocalFilesystemLimited(value: SourceFileConfigurationProviderLocalFilesystemLimited) {
    this._localFilesystemLimited.internalValue = value;
  }
  public resetLocalFilesystemLimited() {
    this._localFilesystemLimited.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localFilesystemLimitedInput() {
    return this._localFilesystemLimited.internalValue;
  }

  // s3_amazon_web_services - computed: false, optional: true, required: false
  private _s3AmazonWebServices = new SourceFileConfigurationProviderS3AmazonWebServicesOutputReference(this, "s3_amazon_web_services");
  public get s3AmazonWebServices() {
    return this._s3AmazonWebServices;
  }
  public putS3AmazonWebServices(value: SourceFileConfigurationProviderS3AmazonWebServices) {
    this._s3AmazonWebServices.internalValue = value;
  }
  public resetS3AmazonWebServices() {
    this._s3AmazonWebServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3AmazonWebServicesInput() {
    return this._s3AmazonWebServices.internalValue;
  }

  // scp_secure_copy_protocol - computed: false, optional: true, required: false
  private _scpSecureCopyProtocol = new SourceFileConfigurationProviderScpSecureCopyProtocolOutputReference(this, "scp_secure_copy_protocol");
  public get scpSecureCopyProtocol() {
    return this._scpSecureCopyProtocol;
  }
  public putScpSecureCopyProtocol(value: SourceFileConfigurationProviderScpSecureCopyProtocol) {
    this._scpSecureCopyProtocol.internalValue = value;
  }
  public resetScpSecureCopyProtocol() {
    this._scpSecureCopyProtocol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scpSecureCopyProtocolInput() {
    return this._scpSecureCopyProtocol.internalValue;
  }

  // sftp_secure_file_transfer_protocol - computed: false, optional: true, required: false
  private _sftpSecureFileTransferProtocol = new SourceFileConfigurationProviderSftpSecureFileTransferProtocolOutputReference(this, "sftp_secure_file_transfer_protocol");
  public get sftpSecureFileTransferProtocol() {
    return this._sftpSecureFileTransferProtocol;
  }
  public putSftpSecureFileTransferProtocol(value: SourceFileConfigurationProviderSftpSecureFileTransferProtocol) {
    this._sftpSecureFileTransferProtocol.internalValue = value;
  }
  public resetSftpSecureFileTransferProtocol() {
    this._sftpSecureFileTransferProtocol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sftpSecureFileTransferProtocolInput() {
    return this._sftpSecureFileTransferProtocol.internalValue;
  }

  // ssh_secure_shell - computed: false, optional: true, required: false
  private _sshSecureShell = new SourceFileConfigurationProviderSshSecureShellOutputReference(this, "ssh_secure_shell");
  public get sshSecureShell() {
    return this._sshSecureShell;
  }
  public putSshSecureShell(value: SourceFileConfigurationProviderSshSecureShell) {
    this._sshSecureShell.internalValue = value;
  }
  public resetSshSecureShell() {
    this._sshSecureShell.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshSecureShellInput() {
    return this._sshSecureShell.internalValue;
  }
}
export interface SourceFileConfiguration {
  /**
  * The Name of the final table to replicate this file into (should include letters, numbers dash and underscores only).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_file#dataset_name SourceFile#dataset_name}
  */
  readonly datasetName: string;
  /**
  * The Format of the file which should be replicated (Warning: some formats may be experimental, please refer to the docs). Default: "csv"; must be one of ["csv", "json", "jsonl", "excel", "excel_binary", "fwf", "feather", "parquet", "yaml"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_file#format SourceFile#format}
  */
  readonly format?: string;
  /**
  * The storage Provider or Location of the file(s) which should be replicated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_file#provider SourceFile#provider}
  */
  readonly provider: SourceFileConfigurationProvider;
  /**
  * This should be a string in JSON format. It depends on the chosen file format to provide additional options and tune its behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_file#reader_options SourceFile#reader_options}
  */
  readonly readerOptions?: string;
  /**
  * The URL path to access the file which should be replicated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_file#url SourceFile#url}
  */
  readonly url: string;
}

export function sourceFileConfigurationToTerraform(struct?: SourceFileConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_name: cdktf.stringToTerraform(struct!.datasetName),
    format: cdktf.stringToTerraform(struct!.format),
    provider: sourceFileConfigurationProviderToTerraform(struct!.provider),
    reader_options: cdktf.stringToTerraform(struct!.readerOptions),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function sourceFileConfigurationToHclTerraform(struct?: SourceFileConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataset_name: {
      value: cdktf.stringToHclTerraform(struct!.datasetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: sourceFileConfigurationProviderToHclTerraform(struct!.provider),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceFileConfigurationProvider",
    },
    reader_options: {
      value: cdktf.stringToHclTerraform(struct!.readerOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceFileConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceFileConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetName = this._datasetName;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._provider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider?.internalValue;
    }
    if (this._readerOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.readerOptions = this._readerOptions;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceFileConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasetName = undefined;
      this._format = undefined;
      this._provider.internalValue = undefined;
      this._readerOptions = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasetName = value.datasetName;
      this._format = value.format;
      this._provider.internalValue = value.provider;
      this._readerOptions = value.readerOptions;
      this._url = value.url;
    }
  }

  // dataset_name - computed: false, optional: false, required: true
  private _datasetName?: string; 
  public get datasetName() {
    return this.getStringAttribute('dataset_name');
  }
  public set datasetName(value: string) {
    this._datasetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetNameInput() {
    return this._datasetName;
  }

  // format - computed: true, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // provider - computed: false, optional: false, required: true
  private _provider = new SourceFileConfigurationProviderOutputReference(this, "provider");
  public get provider() {
    return this._provider;
  }
  public putProvider(value: SourceFileConfigurationProvider) {
    this._provider.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider.internalValue;
  }

  // reader_options - computed: false, optional: true, required: false
  private _readerOptions?: string; 
  public get readerOptions() {
    return this.getStringAttribute('reader_options');
  }
  public set readerOptions(value: string) {
    this._readerOptions = value;
  }
  public resetReaderOptions() {
    this._readerOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readerOptionsInput() {
    return this._readerOptions;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface SourceFileResourceAllocationDefault {
}

export function sourceFileResourceAllocationDefaultToTerraform(struct?: SourceFileResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceFileResourceAllocationDefaultToHclTerraform(struct?: SourceFileResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceFileResourceAllocationDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceFileResourceAllocationDefault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceFileResourceAllocationDefault | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_limit - computed: true, optional: false, required: false
  public get cpuLimit() {
    return this.getStringAttribute('cpu_limit');
  }

  // cpu_request - computed: true, optional: false, required: false
  public get cpuRequest() {
    return this.getStringAttribute('cpu_request');
  }

  // ephemeral_storage_limit - computed: true, optional: false, required: false
  public get ephemeralStorageLimit() {
    return this.getStringAttribute('ephemeral_storage_limit');
  }

  // ephemeral_storage_request - computed: true, optional: false, required: false
  public get ephemeralStorageRequest() {
    return this.getStringAttribute('ephemeral_storage_request');
  }

  // memory_limit - computed: true, optional: false, required: false
  public get memoryLimit() {
    return this.getStringAttribute('memory_limit');
  }

  // memory_request - computed: true, optional: false, required: false
  public get memoryRequest() {
    return this.getStringAttribute('memory_request');
  }
}
export interface SourceFileResourceAllocationJobSpecificResourceRequirements {
}

export function sourceFileResourceAllocationJobSpecificResourceRequirementsToTerraform(struct?: SourceFileResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceFileResourceAllocationJobSpecificResourceRequirementsToHclTerraform(struct?: SourceFileResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceFileResourceAllocationJobSpecificResourceRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceFileResourceAllocationJobSpecificResourceRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceFileResourceAllocationJobSpecificResourceRequirements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_limit - computed: true, optional: false, required: false
  public get cpuLimit() {
    return this.getStringAttribute('cpu_limit');
  }

  // cpu_request - computed: true, optional: false, required: false
  public get cpuRequest() {
    return this.getStringAttribute('cpu_request');
  }

  // ephemeral_storage_limit - computed: true, optional: false, required: false
  public get ephemeralStorageLimit() {
    return this.getStringAttribute('ephemeral_storage_limit');
  }

  // ephemeral_storage_request - computed: true, optional: false, required: false
  public get ephemeralStorageRequest() {
    return this.getStringAttribute('ephemeral_storage_request');
  }

  // memory_limit - computed: true, optional: false, required: false
  public get memoryLimit() {
    return this.getStringAttribute('memory_limit');
  }

  // memory_request - computed: true, optional: false, required: false
  public get memoryRequest() {
    return this.getStringAttribute('memory_request');
  }
}
export interface SourceFileResourceAllocationJobSpecific {
}

export function sourceFileResourceAllocationJobSpecificToTerraform(struct?: SourceFileResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceFileResourceAllocationJobSpecificToHclTerraform(struct?: SourceFileResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceFileResourceAllocationJobSpecificOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SourceFileResourceAllocationJobSpecific | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceFileResourceAllocationJobSpecific | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // job_type - computed: true, optional: false, required: false
  public get jobType() {
    return this.getStringAttribute('job_type');
  }

  // resource_requirements - computed: true, optional: false, required: false
  private _resourceRequirements = new SourceFileResourceAllocationJobSpecificResourceRequirementsOutputReference(this, "resource_requirements");
  public get resourceRequirements() {
    return this._resourceRequirements;
  }
}

export class SourceFileResourceAllocationJobSpecificList extends cdktf.ComplexList {

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
  public get(index: number): SourceFileResourceAllocationJobSpecificOutputReference {
    return new SourceFileResourceAllocationJobSpecificOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourceFileResourceAllocation {
}

export function sourceFileResourceAllocationToTerraform(struct?: SourceFileResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceFileResourceAllocationToHclTerraform(struct?: SourceFileResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceFileResourceAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceFileResourceAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceFileResourceAllocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  private _default = new SourceFileResourceAllocationDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }

  // job_specific - computed: true, optional: false, required: false
  private _jobSpecific = new SourceFileResourceAllocationJobSpecificList(this, "job_specific", false);
  public get jobSpecific() {
    return this._jobSpecific;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_file airbyte_source_file}
*/
export class SourceFile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "airbyte_source_file";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SourceFile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SourceFile to import
  * @param importFromId The id of the existing SourceFile that should be imported. Refer to the {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_file#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SourceFile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "airbyte_source_file", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_file airbyte_source_file} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SourceFileConfig
  */
  public constructor(scope: Construct, id: string, config: SourceFileConfig) {
    super(scope, id, {
      terraformResourceType: 'airbyte_source_file',
      terraformGeneratorMetadata: {
        providerName: 'airbyte',
        providerVersion: '0.13.0',
        providerVersionConstraint: '0.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configuration.internalValue = config.configuration;
    this._definitionId = config.definitionId;
    this._name = config.name;
    this._secretId = config.secretId;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration - computed: false, optional: false, required: true
  private _configuration = new SourceFileConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: SourceFileConfiguration) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }

  // definition_id - computed: true, optional: true, required: false
  private _definitionId?: string; 
  public get definitionId() {
    return this.getStringAttribute('definition_id');
  }
  public set definitionId(value: string) {
    this._definitionId = value;
  }
  public resetDefinitionId() {
    this._definitionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionIdInput() {
    return this._definitionId;
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

  // resource_allocation - computed: true, optional: false, required: false
  private _resourceAllocation = new SourceFileResourceAllocationOutputReference(this, "resource_allocation");
  public get resourceAllocation() {
    return this._resourceAllocation;
  }

  // secret_id - computed: false, optional: true, required: false
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  public resetSecretId() {
    this._secretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // source_id - computed: true, optional: false, required: false
  public get sourceId() {
    return this.getStringAttribute('source_id');
  }

  // source_type - computed: true, optional: false, required: false
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration: sourceFileConfigurationToTerraform(this._configuration.internalValue),
      definition_id: cdktf.stringToTerraform(this._definitionId),
      name: cdktf.stringToTerraform(this._name),
      secret_id: cdktf.stringToTerraform(this._secretId),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: sourceFileConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SourceFileConfiguration",
      },
      definition_id: {
        value: cdktf.stringToHclTerraform(this._definitionId),
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
      secret_id: {
        value: cdktf.stringToHclTerraform(this._secretId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
