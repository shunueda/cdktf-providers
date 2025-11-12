// https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SourceSftpBulkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Used during spec; allows the developer to configure the cloud provider specific options
  * that are needed when users configure a file-based source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#configuration SourceSftpBulk#configuration}
  */
  readonly configuration: SourceSftpBulkConfiguration;
  /**
  * The UUID of the connector definition. One of configuration.sourceType or definitionId must be provided. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#definition_id SourceSftpBulk#definition_id}
  */
  readonly definitionId?: string;
  /**
  * Name of the source e.g. dev-mysql-instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#name SourceSftpBulk#name}
  */
  readonly name: string;
  /**
  * Optional secretID obtained through the public API OAuth redirect flow. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#secret_id SourceSftpBulk#secret_id}
  */
  readonly secretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#workspace_id SourceSftpBulk#workspace_id}
  */
  readonly workspaceId: string;
}
export interface SourceSftpBulkConfigurationCredentialsAuthenticateViaPassword {
  /**
  * Password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#password SourceSftpBulk#password}
  */
  readonly password: string;
}

export function sourceSftpBulkConfigurationCredentialsAuthenticateViaPasswordToTerraform(struct?: SourceSftpBulkConfigurationCredentialsAuthenticateViaPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
  }
}


export function sourceSftpBulkConfigurationCredentialsAuthenticateViaPasswordToHclTerraform(struct?: SourceSftpBulkConfigurationCredentialsAuthenticateViaPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceSftpBulkConfigurationCredentialsAuthenticateViaPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceSftpBulkConfigurationCredentialsAuthenticateViaPassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceSftpBulkConfigurationCredentialsAuthenticateViaPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }
}
export interface SourceSftpBulkConfigurationCredentialsAuthenticateViaPrivateKey {
  /**
  * The Private key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#private_key SourceSftpBulk#private_key}
  */
  readonly privateKey: string;
}

export function sourceSftpBulkConfigurationCredentialsAuthenticateViaPrivateKeyToTerraform(struct?: SourceSftpBulkConfigurationCredentialsAuthenticateViaPrivateKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    private_key: cdktf.stringToTerraform(struct!.privateKey),
  }
}


export function sourceSftpBulkConfigurationCredentialsAuthenticateViaPrivateKeyToHclTerraform(struct?: SourceSftpBulkConfigurationCredentialsAuthenticateViaPrivateKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceSftpBulkConfigurationCredentialsAuthenticateViaPrivateKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceSftpBulkConfigurationCredentialsAuthenticateViaPrivateKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceSftpBulkConfigurationCredentialsAuthenticateViaPrivateKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._privateKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._privateKey = value.privateKey;
    }
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }
}
export interface SourceSftpBulkConfigurationCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#authenticate_via_password SourceSftpBulk#authenticate_via_password}
  */
  readonly authenticateViaPassword?: SourceSftpBulkConfigurationCredentialsAuthenticateViaPassword;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#authenticate_via_private_key SourceSftpBulk#authenticate_via_private_key}
  */
  readonly authenticateViaPrivateKey?: SourceSftpBulkConfigurationCredentialsAuthenticateViaPrivateKey;
}

export function sourceSftpBulkConfigurationCredentialsToTerraform(struct?: SourceSftpBulkConfigurationCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authenticate_via_password: sourceSftpBulkConfigurationCredentialsAuthenticateViaPasswordToTerraform(struct!.authenticateViaPassword),
    authenticate_via_private_key: sourceSftpBulkConfigurationCredentialsAuthenticateViaPrivateKeyToTerraform(struct!.authenticateViaPrivateKey),
  }
}


export function sourceSftpBulkConfigurationCredentialsToHclTerraform(struct?: SourceSftpBulkConfigurationCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authenticate_via_password: {
      value: sourceSftpBulkConfigurationCredentialsAuthenticateViaPasswordToHclTerraform(struct!.authenticateViaPassword),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceSftpBulkConfigurationCredentialsAuthenticateViaPassword",
    },
    authenticate_via_private_key: {
      value: sourceSftpBulkConfigurationCredentialsAuthenticateViaPrivateKeyToHclTerraform(struct!.authenticateViaPrivateKey),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceSftpBulkConfigurationCredentialsAuthenticateViaPrivateKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceSftpBulkConfigurationCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceSftpBulkConfigurationCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticateViaPassword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticateViaPassword = this._authenticateViaPassword?.internalValue;
    }
    if (this._authenticateViaPrivateKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticateViaPrivateKey = this._authenticateViaPrivateKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceSftpBulkConfigurationCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticateViaPassword.internalValue = undefined;
      this._authenticateViaPrivateKey.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticateViaPassword.internalValue = value.authenticateViaPassword;
      this._authenticateViaPrivateKey.internalValue = value.authenticateViaPrivateKey;
    }
  }

  // authenticate_via_password - computed: false, optional: true, required: false
  private _authenticateViaPassword = new SourceSftpBulkConfigurationCredentialsAuthenticateViaPasswordOutputReference(this, "authenticate_via_password");
  public get authenticateViaPassword() {
    return this._authenticateViaPassword;
  }
  public putAuthenticateViaPassword(value: SourceSftpBulkConfigurationCredentialsAuthenticateViaPassword) {
    this._authenticateViaPassword.internalValue = value;
  }
  public resetAuthenticateViaPassword() {
    this._authenticateViaPassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticateViaPasswordInput() {
    return this._authenticateViaPassword.internalValue;
  }

  // authenticate_via_private_key - computed: false, optional: true, required: false
  private _authenticateViaPrivateKey = new SourceSftpBulkConfigurationCredentialsAuthenticateViaPrivateKeyOutputReference(this, "authenticate_via_private_key");
  public get authenticateViaPrivateKey() {
    return this._authenticateViaPrivateKey;
  }
  public putAuthenticateViaPrivateKey(value: SourceSftpBulkConfigurationCredentialsAuthenticateViaPrivateKey) {
    this._authenticateViaPrivateKey.internalValue = value;
  }
  public resetAuthenticateViaPrivateKey() {
    this._authenticateViaPrivateKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticateViaPrivateKeyInput() {
    return this._authenticateViaPrivateKey.internalValue;
  }
}
export interface SourceSftpBulkConfigurationDeliveryMethodCopyRawFiles {
  /**
  * If enabled, sends subdirectory folder structure along with source file names to the destination. Otherwise, files will be synced by their names only. This option is ignored when file-based replication is not enabled. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#preserve_directory_structure SourceSftpBulk#preserve_directory_structure}
  */
  readonly preserveDirectoryStructure?: boolean | cdktf.IResolvable;
}

export function sourceSftpBulkConfigurationDeliveryMethodCopyRawFilesToTerraform(struct?: SourceSftpBulkConfigurationDeliveryMethodCopyRawFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preserve_directory_structure: cdktf.booleanToTerraform(struct!.preserveDirectoryStructure),
  }
}


export function sourceSftpBulkConfigurationDeliveryMethodCopyRawFilesToHclTerraform(struct?: SourceSftpBulkConfigurationDeliveryMethodCopyRawFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preserve_directory_structure: {
      value: cdktf.booleanToHclTerraform(struct!.preserveDirectoryStructure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceSftpBulkConfigurationDeliveryMethodCopyRawFilesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceSftpBulkConfigurationDeliveryMethodCopyRawFiles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preserveDirectoryStructure !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveDirectoryStructure = this._preserveDirectoryStructure;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceSftpBulkConfigurationDeliveryMethodCopyRawFiles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preserveDirectoryStructure = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preserveDirectoryStructure = value.preserveDirectoryStructure;
    }
  }

  // preserve_directory_structure - computed: true, optional: true, required: false
  private _preserveDirectoryStructure?: boolean | cdktf.IResolvable; 
  public get preserveDirectoryStructure() {
    return this.getBooleanAttribute('preserve_directory_structure');
  }
  public set preserveDirectoryStructure(value: boolean | cdktf.IResolvable) {
    this._preserveDirectoryStructure = value;
  }
  public resetPreserveDirectoryStructure() {
    this._preserveDirectoryStructure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveDirectoryStructureInput() {
    return this._preserveDirectoryStructure;
  }
}
export interface SourceSftpBulkConfigurationDeliveryMethodReplicateRecords {
}

export function sourceSftpBulkConfigurationDeliveryMethodReplicateRecordsToTerraform(struct?: SourceSftpBulkConfigurationDeliveryMethodReplicateRecords | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceSftpBulkConfigurationDeliveryMethodReplicateRecordsToHclTerraform(struct?: SourceSftpBulkConfigurationDeliveryMethodReplicateRecords | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceSftpBulkConfigurationDeliveryMethodReplicateRecordsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceSftpBulkConfigurationDeliveryMethodReplicateRecords | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceSftpBulkConfigurationDeliveryMethodReplicateRecords | cdktf.IResolvable | undefined) {
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
export interface SourceSftpBulkConfigurationDeliveryMethod {
  /**
  * Copy raw files without parsing their contents. Bits are copied into the destination exactly as they appeared in the source. Recommended for use with unstructured text data, non-text and compressed files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#copy_raw_files SourceSftpBulk#copy_raw_files}
  */
  readonly copyRawFiles?: SourceSftpBulkConfigurationDeliveryMethodCopyRawFiles;
  /**
  * Recommended - Extract and load structured records into your destination of choice. This is the classic method of moving data in Airbyte. It allows for blocking and hashing individual fields or files from a structured schema. Data can be flattened, typed and deduped depending on the destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#replicate_records SourceSftpBulk#replicate_records}
  */
  readonly replicateRecords?: SourceSftpBulkConfigurationDeliveryMethodReplicateRecords;
}

export function sourceSftpBulkConfigurationDeliveryMethodToTerraform(struct?: SourceSftpBulkConfigurationDeliveryMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    copy_raw_files: sourceSftpBulkConfigurationDeliveryMethodCopyRawFilesToTerraform(struct!.copyRawFiles),
    replicate_records: sourceSftpBulkConfigurationDeliveryMethodReplicateRecordsToTerraform(struct!.replicateRecords),
  }
}


export function sourceSftpBulkConfigurationDeliveryMethodToHclTerraform(struct?: SourceSftpBulkConfigurationDeliveryMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    copy_raw_files: {
      value: sourceSftpBulkConfigurationDeliveryMethodCopyRawFilesToHclTerraform(struct!.copyRawFiles),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceSftpBulkConfigurationDeliveryMethodCopyRawFiles",
    },
    replicate_records: {
      value: sourceSftpBulkConfigurationDeliveryMethodReplicateRecordsToHclTerraform(struct!.replicateRecords),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceSftpBulkConfigurationDeliveryMethodReplicateRecords",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceSftpBulkConfigurationDeliveryMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceSftpBulkConfigurationDeliveryMethod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._copyRawFiles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyRawFiles = this._copyRawFiles?.internalValue;
    }
    if (this._replicateRecords?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicateRecords = this._replicateRecords?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceSftpBulkConfigurationDeliveryMethod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._copyRawFiles.internalValue = undefined;
      this._replicateRecords.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._copyRawFiles.internalValue = value.copyRawFiles;
      this._replicateRecords.internalValue = value.replicateRecords;
    }
  }

  // copy_raw_files - computed: false, optional: true, required: false
  private _copyRawFiles = new SourceSftpBulkConfigurationDeliveryMethodCopyRawFilesOutputReference(this, "copy_raw_files");
  public get copyRawFiles() {
    return this._copyRawFiles;
  }
  public putCopyRawFiles(value: SourceSftpBulkConfigurationDeliveryMethodCopyRawFiles) {
    this._copyRawFiles.internalValue = value;
  }
  public resetCopyRawFiles() {
    this._copyRawFiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyRawFilesInput() {
    return this._copyRawFiles.internalValue;
  }

  // replicate_records - computed: false, optional: true, required: false
  private _replicateRecords = new SourceSftpBulkConfigurationDeliveryMethodReplicateRecordsOutputReference(this, "replicate_records");
  public get replicateRecords() {
    return this._replicateRecords;
  }
  public putReplicateRecords(value: SourceSftpBulkConfigurationDeliveryMethodReplicateRecords) {
    this._replicateRecords.internalValue = value;
  }
  public resetReplicateRecords() {
    this._replicateRecords.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicateRecordsInput() {
    return this._replicateRecords.internalValue;
  }
}
export interface SourceSftpBulkConfigurationStreamsFormatAvroFormat {
  /**
  * Whether to convert double fields to strings. This is recommended if you have decimal numbers with a high degree of precision because there can be a loss precision when handling floating point numbers. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#double_as_string SourceSftpBulk#double_as_string}
  */
  readonly doubleAsString?: boolean | cdktf.IResolvable;
}

export function sourceSftpBulkConfigurationStreamsFormatAvroFormatToTerraform(struct?: SourceSftpBulkConfigurationStreamsFormatAvroFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    double_as_string: cdktf.booleanToTerraform(struct!.doubleAsString),
  }
}


export function sourceSftpBulkConfigurationStreamsFormatAvroFormatToHclTerraform(struct?: SourceSftpBulkConfigurationStreamsFormatAvroFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    double_as_string: {
      value: cdktf.booleanToHclTerraform(struct!.doubleAsString),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceSftpBulkConfigurationStreamsFormatAvroFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceSftpBulkConfigurationStreamsFormatAvroFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._doubleAsString !== undefined) {
      hasAnyValues = true;
      internalValueResult.doubleAsString = this._doubleAsString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceSftpBulkConfigurationStreamsFormatAvroFormat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._doubleAsString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._doubleAsString = value.doubleAsString;
    }
  }

  // double_as_string - computed: true, optional: true, required: false
  private _doubleAsString?: boolean | cdktf.IResolvable; 
  public get doubleAsString() {
    return this.getBooleanAttribute('double_as_string');
  }
  public set doubleAsString(value: boolean | cdktf.IResolvable) {
    this._doubleAsString = value;
  }
  public resetDoubleAsString() {
    this._doubleAsString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doubleAsStringInput() {
    return this._doubleAsString;
  }
}
export interface SourceSftpBulkConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogenerated {
}

export function sourceSftpBulkConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogeneratedToTerraform(struct?: SourceSftpBulkConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogenerated | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceSftpBulkConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogeneratedToHclTerraform(struct?: SourceSftpBulkConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogenerated | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceSftpBulkConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogeneratedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceSftpBulkConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogenerated | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceSftpBulkConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogenerated | cdktf.IResolvable | undefined) {
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
export interface SourceSftpBulkConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsv {
}

export function sourceSftpBulkConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsvToTerraform(struct?: SourceSftpBulkConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceSftpBulkConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsvToHclTerraform(struct?: SourceSftpBulkConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceSftpBulkConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsvOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceSftpBulkConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsv | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceSftpBulkConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsv | cdktf.IResolvable | undefined) {
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
export interface SourceSftpBulkConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvided {
  /**
  * The column names that will be used while emitting the CSV records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#column_names SourceSftpBulk#column_names}
  */
  readonly columnNames: string[];
}

export function sourceSftpBulkConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvidedToTerraform(struct?: SourceSftpBulkConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvided | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columnNames),
  }
}


export function sourceSftpBulkConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvidedToHclTerraform(struct?: SourceSftpBulkConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvided | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.columnNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceSftpBulkConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvidedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceSftpBulkConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvided | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnNames = this._columnNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceSftpBulkConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvided | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columnNames = value.columnNames;
    }
  }

  // column_names - computed: false, optional: false, required: true
  private _columnNames?: string[]; 
  public get columnNames() {
    return this.getListAttribute('column_names');
  }
  public set columnNames(value: string[]) {
    this._columnNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNamesInput() {
    return this._columnNames;
  }
}
export interface SourceSftpBulkConfigurationStreamsFormatCsvFormatHeaderDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#autogenerated SourceSftpBulk#autogenerated}
  */
  readonly autogenerated?: SourceSftpBulkConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogenerated;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#from_csv SourceSftpBulk#from_csv}
  */
  readonly fromCsv?: SourceSftpBulkConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsv;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#user_provided SourceSftpBulk#user_provided}
  */
  readonly userProvided?: SourceSftpBulkConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvided;
}

export function sourceSftpBulkConfigurationStreamsFormatCsvFormatHeaderDefinitionToTerraform(struct?: SourceSftpBulkConfigurationStreamsFormatCsvFormatHeaderDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autogenerated: sourceSftpBulkConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogeneratedToTerraform(struct!.autogenerated),
    from_csv: sourceSftpBulkConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsvToTerraform(struct!.fromCsv),
    user_provided: sourceSftpBulkConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvidedToTerraform(struct!.userProvided),
  }
}


export function sourceSftpBulkConfigurationStreamsFormatCsvFormatHeaderDefinitionToHclTerraform(struct?: SourceSftpBulkConfigurationStreamsFormatCsvFormatHeaderDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autogenerated: {
      value: sourceSftpBulkConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogeneratedToHclTerraform(struct!.autogenerated),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceSftpBulkConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogenerated",
    },
    from_csv: {
      value: sourceSftpBulkConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsvToHclTerraform(struct!.fromCsv),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceSftpBulkConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsv",
    },
    user_provided: {
      value: sourceSftpBulkConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvidedToHclTerraform(struct!.userProvided),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceSftpBulkConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvided",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceSftpBulkConfigurationStreamsFormatCsvFormatHeaderDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceSftpBulkConfigurationStreamsFormatCsvFormatHeaderDefinition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autogenerated?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autogenerated = this._autogenerated?.internalValue;
    }
    if (this._fromCsv?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromCsv = this._fromCsv?.internalValue;
    }
    if (this._userProvided?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userProvided = this._userProvided?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceSftpBulkConfigurationStreamsFormatCsvFormatHeaderDefinition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autogenerated.internalValue = undefined;
      this._fromCsv.internalValue = undefined;
      this._userProvided.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autogenerated.internalValue = value.autogenerated;
      this._fromCsv.internalValue = value.fromCsv;
      this._userProvided.internalValue = value.userProvided;
    }
  }

  // autogenerated - computed: false, optional: true, required: false
  private _autogenerated = new SourceSftpBulkConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogeneratedOutputReference(this, "autogenerated");
  public get autogenerated() {
    return this._autogenerated;
  }
  public putAutogenerated(value: SourceSftpBulkConfigurationStreamsFormatCsvFormatHeaderDefinitionAutogenerated) {
    this._autogenerated.internalValue = value;
  }
  public resetAutogenerated() {
    this._autogenerated.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autogeneratedInput() {
    return this._autogenerated.internalValue;
  }

  // from_csv - computed: false, optional: true, required: false
  private _fromCsv = new SourceSftpBulkConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsvOutputReference(this, "from_csv");
  public get fromCsv() {
    return this._fromCsv;
  }
  public putFromCsv(value: SourceSftpBulkConfigurationStreamsFormatCsvFormatHeaderDefinitionFromCsv) {
    this._fromCsv.internalValue = value;
  }
  public resetFromCsv() {
    this._fromCsv.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromCsvInput() {
    return this._fromCsv.internalValue;
  }

  // user_provided - computed: false, optional: true, required: false
  private _userProvided = new SourceSftpBulkConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvidedOutputReference(this, "user_provided");
  public get userProvided() {
    return this._userProvided;
  }
  public putUserProvided(value: SourceSftpBulkConfigurationStreamsFormatCsvFormatHeaderDefinitionUserProvided) {
    this._userProvided.internalValue = value;
  }
  public resetUserProvided() {
    this._userProvided.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userProvidedInput() {
    return this._userProvided.internalValue;
  }
}
export interface SourceSftpBulkConfigurationStreamsFormatCsvFormat {
  /**
  * The character delimiting individual cells in the CSV data. This may only be a 1-character string. For tab-delimited data enter '\t'. Default: ","
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#delimiter SourceSftpBulk#delimiter}
  */
  readonly delimiter?: string;
  /**
  * Whether two quotes in a quoted CSV value denote a single quote in the data. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#double_quote SourceSftpBulk#double_quote}
  */
  readonly doubleQuote?: boolean | cdktf.IResolvable;
  /**
  * The character encoding of the CSV data. Leave blank to default to <strong>UTF8</strong>. See <a href="https://docs.python.org/3/library/codecs.html#standard-encodings" target="_blank">list of python encodings</a> for allowable options. Default: "utf8"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#encoding SourceSftpBulk#encoding}
  */
  readonly encoding?: string;
  /**
  * The character used for escaping special characters. To disallow escaping, leave this field blank.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#escape_char SourceSftpBulk#escape_char}
  */
  readonly escapeChar?: string;
  /**
  * A set of case-sensitive strings that should be interpreted as false values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#false_values SourceSftpBulk#false_values}
  */
  readonly falseValues?: string[];
  /**
  * How headers will be defined. `User Provided` assumes the CSV does not have a header row and uses the headers provided and `Autogenerated` assumes the CSV does not have a header row and the CDK will generate headers using for `f{i}` where `i` is the index starting from 0. Else, the default behavior is to use the header from the CSV file. If a user wants to autogenerate or provide column names for a CSV having headers, they can skip rows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#header_definition SourceSftpBulk#header_definition}
  */
  readonly headerDefinition?: SourceSftpBulkConfigurationStreamsFormatCsvFormatHeaderDefinition;
  /**
  * Whether to ignore errors that occur when the number of fields in the CSV does not match the number of columns in the schema. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#ignore_errors_on_fields_mismatch SourceSftpBulk#ignore_errors_on_fields_mismatch}
  */
  readonly ignoreErrorsOnFieldsMismatch?: boolean | cdktf.IResolvable;
  /**
  * A set of case-sensitive strings that should be interpreted as null values. For example, if the value 'NA' should be interpreted as null, enter 'NA' in this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#null_values SourceSftpBulk#null_values}
  */
  readonly nullValues?: string[];
  /**
  * The character used for quoting CSV values. To disallow quoting, make this field blank. Default: "\""
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#quote_char SourceSftpBulk#quote_char}
  */
  readonly quoteChar?: string;
  /**
  * The number of rows to skip after the header row. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#skip_rows_after_header SourceSftpBulk#skip_rows_after_header}
  */
  readonly skipRowsAfterHeader?: number;
  /**
  * The number of rows to skip before the header row. For example, if the header row is on the 3rd row, enter 2 in this field. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#skip_rows_before_header SourceSftpBulk#skip_rows_before_header}
  */
  readonly skipRowsBeforeHeader?: number;
  /**
  * Whether strings can be interpreted as null values. If true, strings that match the null_values set will be interpreted as null. If false, strings that match the null_values set will be interpreted as the string itself. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#strings_can_be_null SourceSftpBulk#strings_can_be_null}
  */
  readonly stringsCanBeNull?: boolean | cdktf.IResolvable;
  /**
  * A set of case-sensitive strings that should be interpreted as true values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#true_values SourceSftpBulk#true_values}
  */
  readonly trueValues?: string[];
}

export function sourceSftpBulkConfigurationStreamsFormatCsvFormatToTerraform(struct?: SourceSftpBulkConfigurationStreamsFormatCsvFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delimiter: cdktf.stringToTerraform(struct!.delimiter),
    double_quote: cdktf.booleanToTerraform(struct!.doubleQuote),
    encoding: cdktf.stringToTerraform(struct!.encoding),
    escape_char: cdktf.stringToTerraform(struct!.escapeChar),
    false_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.falseValues),
    header_definition: sourceSftpBulkConfigurationStreamsFormatCsvFormatHeaderDefinitionToTerraform(struct!.headerDefinition),
    ignore_errors_on_fields_mismatch: cdktf.booleanToTerraform(struct!.ignoreErrorsOnFieldsMismatch),
    null_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nullValues),
    quote_char: cdktf.stringToTerraform(struct!.quoteChar),
    skip_rows_after_header: cdktf.numberToTerraform(struct!.skipRowsAfterHeader),
    skip_rows_before_header: cdktf.numberToTerraform(struct!.skipRowsBeforeHeader),
    strings_can_be_null: cdktf.booleanToTerraform(struct!.stringsCanBeNull),
    true_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.trueValues),
  }
}


export function sourceSftpBulkConfigurationStreamsFormatCsvFormatToHclTerraform(struct?: SourceSftpBulkConfigurationStreamsFormatCsvFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delimiter: {
      value: cdktf.stringToHclTerraform(struct!.delimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    double_quote: {
      value: cdktf.booleanToHclTerraform(struct!.doubleQuote),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encoding: {
      value: cdktf.stringToHclTerraform(struct!.encoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    escape_char: {
      value: cdktf.stringToHclTerraform(struct!.escapeChar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    false_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.falseValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    header_definition: {
      value: sourceSftpBulkConfigurationStreamsFormatCsvFormatHeaderDefinitionToHclTerraform(struct!.headerDefinition),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceSftpBulkConfigurationStreamsFormatCsvFormatHeaderDefinition",
    },
    ignore_errors_on_fields_mismatch: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreErrorsOnFieldsMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    null_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nullValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    quote_char: {
      value: cdktf.stringToHclTerraform(struct!.quoteChar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_rows_after_header: {
      value: cdktf.numberToHclTerraform(struct!.skipRowsAfterHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    skip_rows_before_header: {
      value: cdktf.numberToHclTerraform(struct!.skipRowsBeforeHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    strings_can_be_null: {
      value: cdktf.booleanToHclTerraform(struct!.stringsCanBeNull),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    true_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.trueValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceSftpBulkConfigurationStreamsFormatCsvFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceSftpBulkConfigurationStreamsFormatCsvFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiter = this._delimiter;
    }
    if (this._doubleQuote !== undefined) {
      hasAnyValues = true;
      internalValueResult.doubleQuote = this._doubleQuote;
    }
    if (this._encoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding;
    }
    if (this._escapeChar !== undefined) {
      hasAnyValues = true;
      internalValueResult.escapeChar = this._escapeChar;
    }
    if (this._falseValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.falseValues = this._falseValues;
    }
    if (this._headerDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerDefinition = this._headerDefinition?.internalValue;
    }
    if (this._ignoreErrorsOnFieldsMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreErrorsOnFieldsMismatch = this._ignoreErrorsOnFieldsMismatch;
    }
    if (this._nullValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullValues = this._nullValues;
    }
    if (this._quoteChar !== undefined) {
      hasAnyValues = true;
      internalValueResult.quoteChar = this._quoteChar;
    }
    if (this._skipRowsAfterHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipRowsAfterHeader = this._skipRowsAfterHeader;
    }
    if (this._skipRowsBeforeHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipRowsBeforeHeader = this._skipRowsBeforeHeader;
    }
    if (this._stringsCanBeNull !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringsCanBeNull = this._stringsCanBeNull;
    }
    if (this._trueValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.trueValues = this._trueValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceSftpBulkConfigurationStreamsFormatCsvFormat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delimiter = undefined;
      this._doubleQuote = undefined;
      this._encoding = undefined;
      this._escapeChar = undefined;
      this._falseValues = undefined;
      this._headerDefinition.internalValue = undefined;
      this._ignoreErrorsOnFieldsMismatch = undefined;
      this._nullValues = undefined;
      this._quoteChar = undefined;
      this._skipRowsAfterHeader = undefined;
      this._skipRowsBeforeHeader = undefined;
      this._stringsCanBeNull = undefined;
      this._trueValues = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delimiter = value.delimiter;
      this._doubleQuote = value.doubleQuote;
      this._encoding = value.encoding;
      this._escapeChar = value.escapeChar;
      this._falseValues = value.falseValues;
      this._headerDefinition.internalValue = value.headerDefinition;
      this._ignoreErrorsOnFieldsMismatch = value.ignoreErrorsOnFieldsMismatch;
      this._nullValues = value.nullValues;
      this._quoteChar = value.quoteChar;
      this._skipRowsAfterHeader = value.skipRowsAfterHeader;
      this._skipRowsBeforeHeader = value.skipRowsBeforeHeader;
      this._stringsCanBeNull = value.stringsCanBeNull;
      this._trueValues = value.trueValues;
    }
  }

  // delimiter - computed: true, optional: true, required: false
  private _delimiter?: string; 
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }
  public set delimiter(value: string) {
    this._delimiter = value;
  }
  public resetDelimiter() {
    this._delimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterInput() {
    return this._delimiter;
  }

  // double_quote - computed: true, optional: true, required: false
  private _doubleQuote?: boolean | cdktf.IResolvable; 
  public get doubleQuote() {
    return this.getBooleanAttribute('double_quote');
  }
  public set doubleQuote(value: boolean | cdktf.IResolvable) {
    this._doubleQuote = value;
  }
  public resetDoubleQuote() {
    this._doubleQuote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doubleQuoteInput() {
    return this._doubleQuote;
  }

  // encoding - computed: true, optional: true, required: false
  private _encoding?: string; 
  public get encoding() {
    return this.getStringAttribute('encoding');
  }
  public set encoding(value: string) {
    this._encoding = value;
  }
  public resetEncoding() {
    this._encoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding;
  }

  // escape_char - computed: false, optional: true, required: false
  private _escapeChar?: string; 
  public get escapeChar() {
    return this.getStringAttribute('escape_char');
  }
  public set escapeChar(value: string) {
    this._escapeChar = value;
  }
  public resetEscapeChar() {
    this._escapeChar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escapeCharInput() {
    return this._escapeChar;
  }

  // false_values - computed: false, optional: true, required: false
  private _falseValues?: string[]; 
  public get falseValues() {
    return this.getListAttribute('false_values');
  }
  public set falseValues(value: string[]) {
    this._falseValues = value;
  }
  public resetFalseValues() {
    this._falseValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get falseValuesInput() {
    return this._falseValues;
  }

  // header_definition - computed: false, optional: true, required: false
  private _headerDefinition = new SourceSftpBulkConfigurationStreamsFormatCsvFormatHeaderDefinitionOutputReference(this, "header_definition");
  public get headerDefinition() {
    return this._headerDefinition;
  }
  public putHeaderDefinition(value: SourceSftpBulkConfigurationStreamsFormatCsvFormatHeaderDefinition) {
    this._headerDefinition.internalValue = value;
  }
  public resetHeaderDefinition() {
    this._headerDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerDefinitionInput() {
    return this._headerDefinition.internalValue;
  }

  // ignore_errors_on_fields_mismatch - computed: true, optional: true, required: false
  private _ignoreErrorsOnFieldsMismatch?: boolean | cdktf.IResolvable; 
  public get ignoreErrorsOnFieldsMismatch() {
    return this.getBooleanAttribute('ignore_errors_on_fields_mismatch');
  }
  public set ignoreErrorsOnFieldsMismatch(value: boolean | cdktf.IResolvable) {
    this._ignoreErrorsOnFieldsMismatch = value;
  }
  public resetIgnoreErrorsOnFieldsMismatch() {
    this._ignoreErrorsOnFieldsMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorsOnFieldsMismatchInput() {
    return this._ignoreErrorsOnFieldsMismatch;
  }

  // null_values - computed: true, optional: true, required: false
  private _nullValues?: string[]; 
  public get nullValues() {
    return this.getListAttribute('null_values');
  }
  public set nullValues(value: string[]) {
    this._nullValues = value;
  }
  public resetNullValues() {
    this._nullValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullValuesInput() {
    return this._nullValues;
  }

  // quote_char - computed: true, optional: true, required: false
  private _quoteChar?: string; 
  public get quoteChar() {
    return this.getStringAttribute('quote_char');
  }
  public set quoteChar(value: string) {
    this._quoteChar = value;
  }
  public resetQuoteChar() {
    this._quoteChar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quoteCharInput() {
    return this._quoteChar;
  }

  // skip_rows_after_header - computed: true, optional: true, required: false
  private _skipRowsAfterHeader?: number; 
  public get skipRowsAfterHeader() {
    return this.getNumberAttribute('skip_rows_after_header');
  }
  public set skipRowsAfterHeader(value: number) {
    this._skipRowsAfterHeader = value;
  }
  public resetSkipRowsAfterHeader() {
    this._skipRowsAfterHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipRowsAfterHeaderInput() {
    return this._skipRowsAfterHeader;
  }

  // skip_rows_before_header - computed: true, optional: true, required: false
  private _skipRowsBeforeHeader?: number; 
  public get skipRowsBeforeHeader() {
    return this.getNumberAttribute('skip_rows_before_header');
  }
  public set skipRowsBeforeHeader(value: number) {
    this._skipRowsBeforeHeader = value;
  }
  public resetSkipRowsBeforeHeader() {
    this._skipRowsBeforeHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipRowsBeforeHeaderInput() {
    return this._skipRowsBeforeHeader;
  }

  // strings_can_be_null - computed: true, optional: true, required: false
  private _stringsCanBeNull?: boolean | cdktf.IResolvable; 
  public get stringsCanBeNull() {
    return this.getBooleanAttribute('strings_can_be_null');
  }
  public set stringsCanBeNull(value: boolean | cdktf.IResolvable) {
    this._stringsCanBeNull = value;
  }
  public resetStringsCanBeNull() {
    this._stringsCanBeNull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringsCanBeNullInput() {
    return this._stringsCanBeNull;
  }

  // true_values - computed: false, optional: true, required: false
  private _trueValues?: string[]; 
  public get trueValues() {
    return this.getListAttribute('true_values');
  }
  public set trueValues(value: string[]) {
    this._trueValues = value;
  }
  public resetTrueValues() {
    this._trueValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trueValuesInput() {
    return this._trueValues;
  }
}
export interface SourceSftpBulkConfigurationStreamsFormatExcelFormat {
}

export function sourceSftpBulkConfigurationStreamsFormatExcelFormatToTerraform(struct?: SourceSftpBulkConfigurationStreamsFormatExcelFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceSftpBulkConfigurationStreamsFormatExcelFormatToHclTerraform(struct?: SourceSftpBulkConfigurationStreamsFormatExcelFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceSftpBulkConfigurationStreamsFormatExcelFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceSftpBulkConfigurationStreamsFormatExcelFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceSftpBulkConfigurationStreamsFormatExcelFormat | cdktf.IResolvable | undefined) {
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
export interface SourceSftpBulkConfigurationStreamsFormatJsonlFormat {
}

export function sourceSftpBulkConfigurationStreamsFormatJsonlFormatToTerraform(struct?: SourceSftpBulkConfigurationStreamsFormatJsonlFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceSftpBulkConfigurationStreamsFormatJsonlFormatToHclTerraform(struct?: SourceSftpBulkConfigurationStreamsFormatJsonlFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceSftpBulkConfigurationStreamsFormatJsonlFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceSftpBulkConfigurationStreamsFormatJsonlFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceSftpBulkConfigurationStreamsFormatJsonlFormat | cdktf.IResolvable | undefined) {
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
export interface SourceSftpBulkConfigurationStreamsFormatParquetFormat {
  /**
  * Whether to convert decimal fields to floats. There is a loss of precision when converting decimals to floats, so this is not recommended. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#decimal_as_float SourceSftpBulk#decimal_as_float}
  */
  readonly decimalAsFloat?: boolean | cdktf.IResolvable;
}

export function sourceSftpBulkConfigurationStreamsFormatParquetFormatToTerraform(struct?: SourceSftpBulkConfigurationStreamsFormatParquetFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decimal_as_float: cdktf.booleanToTerraform(struct!.decimalAsFloat),
  }
}


export function sourceSftpBulkConfigurationStreamsFormatParquetFormatToHclTerraform(struct?: SourceSftpBulkConfigurationStreamsFormatParquetFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decimal_as_float: {
      value: cdktf.booleanToHclTerraform(struct!.decimalAsFloat),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceSftpBulkConfigurationStreamsFormatParquetFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceSftpBulkConfigurationStreamsFormatParquetFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decimalAsFloat !== undefined) {
      hasAnyValues = true;
      internalValueResult.decimalAsFloat = this._decimalAsFloat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceSftpBulkConfigurationStreamsFormatParquetFormat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._decimalAsFloat = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._decimalAsFloat = value.decimalAsFloat;
    }
  }

  // decimal_as_float - computed: true, optional: true, required: false
  private _decimalAsFloat?: boolean | cdktf.IResolvable; 
  public get decimalAsFloat() {
    return this.getBooleanAttribute('decimal_as_float');
  }
  public set decimalAsFloat(value: boolean | cdktf.IResolvable) {
    this._decimalAsFloat = value;
  }
  public resetDecimalAsFloat() {
    this._decimalAsFloat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decimalAsFloatInput() {
    return this._decimalAsFloat;
  }
}
export interface SourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocal {
}

export function sourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocalToTerraform(struct?: SourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocalToHclTerraform(struct?: SourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocal | cdktf.IResolvable | undefined) {
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
export interface SourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApiParameters {
  /**
  * The name of the unstructured API parameter to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#name SourceSftpBulk#name}
  */
  readonly name: string;
  /**
  * The value of the parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#value SourceSftpBulk#value}
  */
  readonly value: string;
}

export function sourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApiParametersToTerraform(struct?: SourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApiParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function sourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApiParametersToHclTerraform(struct?: SourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApiParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApiParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApiParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApiParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApiParametersList extends cdktf.ComplexList {
  public internalValue? : SourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApiParameters[] | cdktf.IResolvable

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
  public get(index: number): SourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApiParametersOutputReference {
    return new SourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApiParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApi {
  /**
  * The API key to use matching the environment. Default: ""
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#api_key SourceSftpBulk#api_key}
  */
  readonly apiKey?: string;
  /**
  * The URL of the unstructured API to use. Default: "https://api.unstructured.io"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#api_url SourceSftpBulk#api_url}
  */
  readonly apiUrl?: string;
  /**
  * List of parameters send to the API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#parameters SourceSftpBulk#parameters}
  */
  readonly parameters?: SourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApiParameters[] | cdktf.IResolvable;
}

export function sourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApiToTerraform(struct?: SourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    api_url: cdktf.stringToTerraform(struct!.apiUrl),
    parameters: cdktf.listMapper(sourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApiParametersToTerraform, false)(struct!.parameters),
  }
}


export function sourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApiToHclTerraform(struct?: SourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key: {
      value: cdktf.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_url: {
      value: cdktf.stringToHclTerraform(struct!.apiUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.listMapperHcl(sourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApiParametersToHclTerraform, false)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "SourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApiParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._apiUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiUrl = this._apiUrl;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey = undefined;
      this._apiUrl = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey = value.apiKey;
      this._apiUrl = value.apiUrl;
      this._parameters.internalValue = value.parameters;
    }
  }

  // api_key - computed: true, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // api_url - computed: true, optional: true, required: false
  private _apiUrl?: string; 
  public get apiUrl() {
    return this.getStringAttribute('api_url');
  }
  public set apiUrl(value: string) {
    this._apiUrl = value;
  }
  public resetApiUrl() {
    this._apiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUrlInput() {
    return this._apiUrl;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new SourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApiParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: SourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApiParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}
export interface SourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessing {
  /**
  * Process files locally, supporting `fast` and `ocr` modes. This is the default option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#local SourceSftpBulk#local}
  */
  readonly local?: SourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocal;
  /**
  * Process files via an API, using the `hi_res` mode. This option is useful for increased performance and accuracy, but requires an API key and a hosted instance of unstructured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#via_api SourceSftpBulk#via_api}
  */
  readonly viaApi?: SourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApi;
}

export function sourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessingToTerraform(struct?: SourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local: sourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocalToTerraform(struct!.local),
    via_api: sourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApiToTerraform(struct!.viaApi),
  }
}


export function sourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessingToHclTerraform(struct?: SourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local: {
      value: sourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocalToHclTerraform(struct!.local),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocal",
    },
    via_api: {
      value: sourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApiToHclTerraform(struct!.viaApi),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApi",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessing | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._local?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.local = this._local?.internalValue;
    }
    if (this._viaApi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.viaApi = this._viaApi?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessing | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._local.internalValue = undefined;
      this._viaApi.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._local.internalValue = value.local;
      this._viaApi.internalValue = value.viaApi;
    }
  }

  // local - computed: false, optional: true, required: false
  private _local = new SourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocalOutputReference(this, "local");
  public get local() {
    return this._local;
  }
  public putLocal(value: SourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessingLocal) {
    this._local.internalValue = value;
  }
  public resetLocal() {
    this._local.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localInput() {
    return this._local.internalValue;
  }

  // via_api - computed: false, optional: true, required: false
  private _viaApi = new SourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApiOutputReference(this, "via_api");
  public get viaApi() {
    return this._viaApi;
  }
  public putViaApi(value: SourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessingViaApi) {
    this._viaApi.internalValue = value;
  }
  public resetViaApi() {
    this._viaApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viaApiInput() {
    return this._viaApi.internalValue;
  }
}
export interface SourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormat {
  /**
  * Processing configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#processing SourceSftpBulk#processing}
  */
  readonly processing?: SourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessing;
  /**
  * If true, skip files that cannot be parsed and pass the error message along as the _ab_source_file_parse_error field. If false, fail the sync. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#skip_unprocessable_files SourceSftpBulk#skip_unprocessable_files}
  */
  readonly skipUnprocessableFiles?: boolean | cdktf.IResolvable;
  /**
  * The strategy used to parse documents. `fast` extracts text directly from the document which doesn't work for all files. `ocr_only` is more reliable, but slower. `hi_res` is the most reliable, but requires an API key and a hosted instance of unstructured and can't be used with local mode. See the unstructured.io documentation for more details: https://unstructured-io.github.io/unstructured/core/partition.html#partition-pdf. Default: "auto"; must be one of ["auto", "fast", "ocr_only", "hi_res"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#strategy SourceSftpBulk#strategy}
  */
  readonly strategy?: string;
}

export function sourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatToTerraform(struct?: SourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    processing: sourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessingToTerraform(struct!.processing),
    skip_unprocessable_files: cdktf.booleanToTerraform(struct!.skipUnprocessableFiles),
    strategy: cdktf.stringToTerraform(struct!.strategy),
  }
}


export function sourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatToHclTerraform(struct?: SourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    processing: {
      value: sourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessingToHclTerraform(struct!.processing),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessing",
    },
    skip_unprocessable_files: {
      value: cdktf.booleanToHclTerraform(struct!.skipUnprocessableFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processing = this._processing?.internalValue;
    }
    if (this._skipUnprocessableFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipUnprocessableFiles = this._skipUnprocessableFiles;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._processing.internalValue = undefined;
      this._skipUnprocessableFiles = undefined;
      this._strategy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._processing.internalValue = value.processing;
      this._skipUnprocessableFiles = value.skipUnprocessableFiles;
      this._strategy = value.strategy;
    }
  }

  // processing - computed: false, optional: true, required: false
  private _processing = new SourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessingOutputReference(this, "processing");
  public get processing() {
    return this._processing;
  }
  public putProcessing(value: SourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatProcessing) {
    this._processing.internalValue = value;
  }
  public resetProcessing() {
    this._processing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingInput() {
    return this._processing.internalValue;
  }

  // skip_unprocessable_files - computed: true, optional: true, required: false
  private _skipUnprocessableFiles?: boolean | cdktf.IResolvable; 
  public get skipUnprocessableFiles() {
    return this.getBooleanAttribute('skip_unprocessable_files');
  }
  public set skipUnprocessableFiles(value: boolean | cdktf.IResolvable) {
    this._skipUnprocessableFiles = value;
  }
  public resetSkipUnprocessableFiles() {
    this._skipUnprocessableFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipUnprocessableFilesInput() {
    return this._skipUnprocessableFiles;
  }

  // strategy - computed: true, optional: true, required: false
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  public resetStrategy() {
    this._strategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }
}
export interface SourceSftpBulkConfigurationStreamsFormat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#avro_format SourceSftpBulk#avro_format}
  */
  readonly avroFormat?: SourceSftpBulkConfigurationStreamsFormatAvroFormat;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#csv_format SourceSftpBulk#csv_format}
  */
  readonly csvFormat?: SourceSftpBulkConfigurationStreamsFormatCsvFormat;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#excel_format SourceSftpBulk#excel_format}
  */
  readonly excelFormat?: SourceSftpBulkConfigurationStreamsFormatExcelFormat;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#jsonl_format SourceSftpBulk#jsonl_format}
  */
  readonly jsonlFormat?: SourceSftpBulkConfigurationStreamsFormatJsonlFormat;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#parquet_format SourceSftpBulk#parquet_format}
  */
  readonly parquetFormat?: SourceSftpBulkConfigurationStreamsFormatParquetFormat;
  /**
  * Extract text from document formats (.pdf, .docx, .md, .pptx) and emit as one record per file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#unstructured_document_format SourceSftpBulk#unstructured_document_format}
  */
  readonly unstructuredDocumentFormat?: SourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormat;
}

export function sourceSftpBulkConfigurationStreamsFormatToTerraform(struct?: SourceSftpBulkConfigurationStreamsFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    avro_format: sourceSftpBulkConfigurationStreamsFormatAvroFormatToTerraform(struct!.avroFormat),
    csv_format: sourceSftpBulkConfigurationStreamsFormatCsvFormatToTerraform(struct!.csvFormat),
    excel_format: sourceSftpBulkConfigurationStreamsFormatExcelFormatToTerraform(struct!.excelFormat),
    jsonl_format: sourceSftpBulkConfigurationStreamsFormatJsonlFormatToTerraform(struct!.jsonlFormat),
    parquet_format: sourceSftpBulkConfigurationStreamsFormatParquetFormatToTerraform(struct!.parquetFormat),
    unstructured_document_format: sourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatToTerraform(struct!.unstructuredDocumentFormat),
  }
}


export function sourceSftpBulkConfigurationStreamsFormatToHclTerraform(struct?: SourceSftpBulkConfigurationStreamsFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    avro_format: {
      value: sourceSftpBulkConfigurationStreamsFormatAvroFormatToHclTerraform(struct!.avroFormat),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceSftpBulkConfigurationStreamsFormatAvroFormat",
    },
    csv_format: {
      value: sourceSftpBulkConfigurationStreamsFormatCsvFormatToHclTerraform(struct!.csvFormat),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceSftpBulkConfigurationStreamsFormatCsvFormat",
    },
    excel_format: {
      value: sourceSftpBulkConfigurationStreamsFormatExcelFormatToHclTerraform(struct!.excelFormat),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceSftpBulkConfigurationStreamsFormatExcelFormat",
    },
    jsonl_format: {
      value: sourceSftpBulkConfigurationStreamsFormatJsonlFormatToHclTerraform(struct!.jsonlFormat),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceSftpBulkConfigurationStreamsFormatJsonlFormat",
    },
    parquet_format: {
      value: sourceSftpBulkConfigurationStreamsFormatParquetFormatToHclTerraform(struct!.parquetFormat),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceSftpBulkConfigurationStreamsFormatParquetFormat",
    },
    unstructured_document_format: {
      value: sourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatToHclTerraform(struct!.unstructuredDocumentFormat),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormat",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceSftpBulkConfigurationStreamsFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceSftpBulkConfigurationStreamsFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._avroFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.avroFormat = this._avroFormat?.internalValue;
    }
    if (this._csvFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csvFormat = this._csvFormat?.internalValue;
    }
    if (this._excelFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excelFormat = this._excelFormat?.internalValue;
    }
    if (this._jsonlFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonlFormat = this._jsonlFormat?.internalValue;
    }
    if (this._parquetFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parquetFormat = this._parquetFormat?.internalValue;
    }
    if (this._unstructuredDocumentFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unstructuredDocumentFormat = this._unstructuredDocumentFormat?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceSftpBulkConfigurationStreamsFormat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._avroFormat.internalValue = undefined;
      this._csvFormat.internalValue = undefined;
      this._excelFormat.internalValue = undefined;
      this._jsonlFormat.internalValue = undefined;
      this._parquetFormat.internalValue = undefined;
      this._unstructuredDocumentFormat.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._avroFormat.internalValue = value.avroFormat;
      this._csvFormat.internalValue = value.csvFormat;
      this._excelFormat.internalValue = value.excelFormat;
      this._jsonlFormat.internalValue = value.jsonlFormat;
      this._parquetFormat.internalValue = value.parquetFormat;
      this._unstructuredDocumentFormat.internalValue = value.unstructuredDocumentFormat;
    }
  }

  // avro_format - computed: false, optional: true, required: false
  private _avroFormat = new SourceSftpBulkConfigurationStreamsFormatAvroFormatOutputReference(this, "avro_format");
  public get avroFormat() {
    return this._avroFormat;
  }
  public putAvroFormat(value: SourceSftpBulkConfigurationStreamsFormatAvroFormat) {
    this._avroFormat.internalValue = value;
  }
  public resetAvroFormat() {
    this._avroFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avroFormatInput() {
    return this._avroFormat.internalValue;
  }

  // csv_format - computed: false, optional: true, required: false
  private _csvFormat = new SourceSftpBulkConfigurationStreamsFormatCsvFormatOutputReference(this, "csv_format");
  public get csvFormat() {
    return this._csvFormat;
  }
  public putCsvFormat(value: SourceSftpBulkConfigurationStreamsFormatCsvFormat) {
    this._csvFormat.internalValue = value;
  }
  public resetCsvFormat() {
    this._csvFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvFormatInput() {
    return this._csvFormat.internalValue;
  }

  // excel_format - computed: false, optional: true, required: false
  private _excelFormat = new SourceSftpBulkConfigurationStreamsFormatExcelFormatOutputReference(this, "excel_format");
  public get excelFormat() {
    return this._excelFormat;
  }
  public putExcelFormat(value: SourceSftpBulkConfigurationStreamsFormatExcelFormat) {
    this._excelFormat.internalValue = value;
  }
  public resetExcelFormat() {
    this._excelFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excelFormatInput() {
    return this._excelFormat.internalValue;
  }

  // jsonl_format - computed: false, optional: true, required: false
  private _jsonlFormat = new SourceSftpBulkConfigurationStreamsFormatJsonlFormatOutputReference(this, "jsonl_format");
  public get jsonlFormat() {
    return this._jsonlFormat;
  }
  public putJsonlFormat(value: SourceSftpBulkConfigurationStreamsFormatJsonlFormat) {
    this._jsonlFormat.internalValue = value;
  }
  public resetJsonlFormat() {
    this._jsonlFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonlFormatInput() {
    return this._jsonlFormat.internalValue;
  }

  // parquet_format - computed: false, optional: true, required: false
  private _parquetFormat = new SourceSftpBulkConfigurationStreamsFormatParquetFormatOutputReference(this, "parquet_format");
  public get parquetFormat() {
    return this._parquetFormat;
  }
  public putParquetFormat(value: SourceSftpBulkConfigurationStreamsFormatParquetFormat) {
    this._parquetFormat.internalValue = value;
  }
  public resetParquetFormat() {
    this._parquetFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parquetFormatInput() {
    return this._parquetFormat.internalValue;
  }

  // unstructured_document_format - computed: false, optional: true, required: false
  private _unstructuredDocumentFormat = new SourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormatOutputReference(this, "unstructured_document_format");
  public get unstructuredDocumentFormat() {
    return this._unstructuredDocumentFormat;
  }
  public putUnstructuredDocumentFormat(value: SourceSftpBulkConfigurationStreamsFormatUnstructuredDocumentFormat) {
    this._unstructuredDocumentFormat.internalValue = value;
  }
  public resetUnstructuredDocumentFormat() {
    this._unstructuredDocumentFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unstructuredDocumentFormatInput() {
    return this._unstructuredDocumentFormat.internalValue;
  }
}
export interface SourceSftpBulkConfigurationStreams {
  /**
  * When the state history of the file store is full, syncs will only read files that were last modified in the provided day range. Default: 3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#days_to_sync_if_history_is_full SourceSftpBulk#days_to_sync_if_history_is_full}
  */
  readonly daysToSyncIfHistoryIsFull?: number;
  /**
  * The configuration options that are used to alter how to read incoming files that deviate from the standard formatting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#format SourceSftpBulk#format}
  */
  readonly format: SourceSftpBulkConfigurationStreamsFormat;
  /**
  * The pattern used to specify which files should be selected from the file system. For more information on glob pattern matching look <a href="https://en.wikipedia.org/wiki/Glob_(programming)">here</a>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#globs SourceSftpBulk#globs}
  */
  readonly globs?: string[];
  /**
  * The schema that will be used to validate records extracted from the file. This will override the stream schema that is auto-detected from incoming files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#input_schema SourceSftpBulk#input_schema}
  */
  readonly inputSchema?: string;
  /**
  * The name of the stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#name SourceSftpBulk#name}
  */
  readonly name: string;
  /**
  * The number of resent files which will be used to discover the schema for this stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#recent_n_files_to_read_for_schema_discovery SourceSftpBulk#recent_n_files_to_read_for_schema_discovery}
  */
  readonly recentNFilesToReadForSchemaDiscovery?: number;
  /**
  * When enabled, syncs will not validate or structure records against the stream's schema. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#schemaless SourceSftpBulk#schemaless}
  */
  readonly schemaless?: boolean | cdktf.IResolvable;
  /**
  * The name of the validation policy that dictates sync behavior when a record does not adhere to the stream schema. Default: "Emit Record"; must be one of ["Emit Record", "Skip Record", "Wait for Discover"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#validation_policy SourceSftpBulk#validation_policy}
  */
  readonly validationPolicy?: string;
}

export function sourceSftpBulkConfigurationStreamsToTerraform(struct?: SourceSftpBulkConfigurationStreams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days_to_sync_if_history_is_full: cdktf.numberToTerraform(struct!.daysToSyncIfHistoryIsFull),
    format: sourceSftpBulkConfigurationStreamsFormatToTerraform(struct!.format),
    globs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.globs),
    input_schema: cdktf.stringToTerraform(struct!.inputSchema),
    name: cdktf.stringToTerraform(struct!.name),
    recent_n_files_to_read_for_schema_discovery: cdktf.numberToTerraform(struct!.recentNFilesToReadForSchemaDiscovery),
    schemaless: cdktf.booleanToTerraform(struct!.schemaless),
    validation_policy: cdktf.stringToTerraform(struct!.validationPolicy),
  }
}


export function sourceSftpBulkConfigurationStreamsToHclTerraform(struct?: SourceSftpBulkConfigurationStreams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days_to_sync_if_history_is_full: {
      value: cdktf.numberToHclTerraform(struct!.daysToSyncIfHistoryIsFull),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    format: {
      value: sourceSftpBulkConfigurationStreamsFormatToHclTerraform(struct!.format),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceSftpBulkConfigurationStreamsFormat",
    },
    globs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.globs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    input_schema: {
      value: cdktf.stringToHclTerraform(struct!.inputSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recent_n_files_to_read_for_schema_discovery: {
      value: cdktf.numberToHclTerraform(struct!.recentNFilesToReadForSchemaDiscovery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    schemaless: {
      value: cdktf.booleanToHclTerraform(struct!.schemaless),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    validation_policy: {
      value: cdktf.stringToHclTerraform(struct!.validationPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceSftpBulkConfigurationStreamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SourceSftpBulkConfigurationStreams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daysToSyncIfHistoryIsFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysToSyncIfHistoryIsFull = this._daysToSyncIfHistoryIsFull;
    }
    if (this._format?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format?.internalValue;
    }
    if (this._globs !== undefined) {
      hasAnyValues = true;
      internalValueResult.globs = this._globs;
    }
    if (this._inputSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputSchema = this._inputSchema;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._recentNFilesToReadForSchemaDiscovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.recentNFilesToReadForSchemaDiscovery = this._recentNFilesToReadForSchemaDiscovery;
    }
    if (this._schemaless !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaless = this._schemaless;
    }
    if (this._validationPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationPolicy = this._validationPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceSftpBulkConfigurationStreams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._daysToSyncIfHistoryIsFull = undefined;
      this._format.internalValue = undefined;
      this._globs = undefined;
      this._inputSchema = undefined;
      this._name = undefined;
      this._recentNFilesToReadForSchemaDiscovery = undefined;
      this._schemaless = undefined;
      this._validationPolicy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._daysToSyncIfHistoryIsFull = value.daysToSyncIfHistoryIsFull;
      this._format.internalValue = value.format;
      this._globs = value.globs;
      this._inputSchema = value.inputSchema;
      this._name = value.name;
      this._recentNFilesToReadForSchemaDiscovery = value.recentNFilesToReadForSchemaDiscovery;
      this._schemaless = value.schemaless;
      this._validationPolicy = value.validationPolicy;
    }
  }

  // days_to_sync_if_history_is_full - computed: true, optional: true, required: false
  private _daysToSyncIfHistoryIsFull?: number; 
  public get daysToSyncIfHistoryIsFull() {
    return this.getNumberAttribute('days_to_sync_if_history_is_full');
  }
  public set daysToSyncIfHistoryIsFull(value: number) {
    this._daysToSyncIfHistoryIsFull = value;
  }
  public resetDaysToSyncIfHistoryIsFull() {
    this._daysToSyncIfHistoryIsFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysToSyncIfHistoryIsFullInput() {
    return this._daysToSyncIfHistoryIsFull;
  }

  // format - computed: false, optional: false, required: true
  private _format = new SourceSftpBulkConfigurationStreamsFormatOutputReference(this, "format");
  public get format() {
    return this._format;
  }
  public putFormat(value: SourceSftpBulkConfigurationStreamsFormat) {
    this._format.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format.internalValue;
  }

  // globs - computed: false, optional: true, required: false
  private _globs?: string[]; 
  public get globs() {
    return this.getListAttribute('globs');
  }
  public set globs(value: string[]) {
    this._globs = value;
  }
  public resetGlobs() {
    this._globs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globsInput() {
    return this._globs;
  }

  // input_schema - computed: false, optional: true, required: false
  private _inputSchema?: string; 
  public get inputSchema() {
    return this.getStringAttribute('input_schema');
  }
  public set inputSchema(value: string) {
    this._inputSchema = value;
  }
  public resetInputSchema() {
    this._inputSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputSchemaInput() {
    return this._inputSchema;
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

  // recent_n_files_to_read_for_schema_discovery - computed: false, optional: true, required: false
  private _recentNFilesToReadForSchemaDiscovery?: number; 
  public get recentNFilesToReadForSchemaDiscovery() {
    return this.getNumberAttribute('recent_n_files_to_read_for_schema_discovery');
  }
  public set recentNFilesToReadForSchemaDiscovery(value: number) {
    this._recentNFilesToReadForSchemaDiscovery = value;
  }
  public resetRecentNFilesToReadForSchemaDiscovery() {
    this._recentNFilesToReadForSchemaDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recentNFilesToReadForSchemaDiscoveryInput() {
    return this._recentNFilesToReadForSchemaDiscovery;
  }

  // schemaless - computed: true, optional: true, required: false
  private _schemaless?: boolean | cdktf.IResolvable; 
  public get schemaless() {
    return this.getBooleanAttribute('schemaless');
  }
  public set schemaless(value: boolean | cdktf.IResolvable) {
    this._schemaless = value;
  }
  public resetSchemaless() {
    this._schemaless = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemalessInput() {
    return this._schemaless;
  }

  // validation_policy - computed: true, optional: true, required: false
  private _validationPolicy?: string; 
  public get validationPolicy() {
    return this.getStringAttribute('validation_policy');
  }
  public set validationPolicy(value: string) {
    this._validationPolicy = value;
  }
  public resetValidationPolicy() {
    this._validationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationPolicyInput() {
    return this._validationPolicy;
  }
}

export class SourceSftpBulkConfigurationStreamsList extends cdktf.ComplexList {
  public internalValue? : SourceSftpBulkConfigurationStreams[] | cdktf.IResolvable

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
  public get(index: number): SourceSftpBulkConfigurationStreamsOutputReference {
    return new SourceSftpBulkConfigurationStreamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourceSftpBulkConfiguration {
  /**
  * Credentials for connecting to the SFTP Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#credentials SourceSftpBulk#credentials}
  */
  readonly credentials: SourceSftpBulkConfigurationCredentials;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#delivery_method SourceSftpBulk#delivery_method}
  */
  readonly deliveryMethod?: SourceSftpBulkConfigurationDeliveryMethod;
  /**
  * The directory to search files for sync. Default: "/"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#folder_path SourceSftpBulk#folder_path}
  */
  readonly folderPath?: string;
  /**
  * The server host address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#host SourceSftpBulk#host}
  */
  readonly host: string;
  /**
  * The server port. Default: 22
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#port SourceSftpBulk#port}
  */
  readonly port?: number;
  /**
  * UTC date and time in the format 2017-01-25T00:00:00.000000Z. Any file modified before this date will not be replicated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#start_date SourceSftpBulk#start_date}
  */
  readonly startDate?: string;
  /**
  * Each instance of this configuration defines a <a href="https://docs.airbyte.com/cloud/core-concepts#stream">stream</a>. Use this to define which files belong in the stream, their format, and how they should be parsed and validated. When sending data to warehouse destination such as Snowflake or BigQuery, each stream is a separate table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#streams SourceSftpBulk#streams}
  */
  readonly streams: SourceSftpBulkConfigurationStreams[] | cdktf.IResolvable;
  /**
  * The server user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#username SourceSftpBulk#username}
  */
  readonly username: string;
}

export function sourceSftpBulkConfigurationToTerraform(struct?: SourceSftpBulkConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials: sourceSftpBulkConfigurationCredentialsToTerraform(struct!.credentials),
    delivery_method: sourceSftpBulkConfigurationDeliveryMethodToTerraform(struct!.deliveryMethod),
    folder_path: cdktf.stringToTerraform(struct!.folderPath),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
    start_date: cdktf.stringToTerraform(struct!.startDate),
    streams: cdktf.listMapper(sourceSftpBulkConfigurationStreamsToTerraform, false)(struct!.streams),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function sourceSftpBulkConfigurationToHclTerraform(struct?: SourceSftpBulkConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials: {
      value: sourceSftpBulkConfigurationCredentialsToHclTerraform(struct!.credentials),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceSftpBulkConfigurationCredentials",
    },
    delivery_method: {
      value: sourceSftpBulkConfigurationDeliveryMethodToHclTerraform(struct!.deliveryMethod),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceSftpBulkConfigurationDeliveryMethod",
    },
    folder_path: {
      value: cdktf.stringToHclTerraform(struct!.folderPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_date: {
      value: cdktf.stringToHclTerraform(struct!.startDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    streams: {
      value: cdktf.listMapperHcl(sourceSftpBulkConfigurationStreamsToHclTerraform, false)(struct!.streams),
      isBlock: true,
      type: "list",
      storageClassType: "SourceSftpBulkConfigurationStreamsList",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceSftpBulkConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceSftpBulkConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    if (this._deliveryMethod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deliveryMethod = this._deliveryMethod?.internalValue;
    }
    if (this._folderPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.folderPath = this._folderPath;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._startDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDate = this._startDate;
    }
    if (this._streams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.streams = this._streams?.internalValue;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceSftpBulkConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentials.internalValue = undefined;
      this._deliveryMethod.internalValue = undefined;
      this._folderPath = undefined;
      this._host = undefined;
      this._port = undefined;
      this._startDate = undefined;
      this._streams.internalValue = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentials.internalValue = value.credentials;
      this._deliveryMethod.internalValue = value.deliveryMethod;
      this._folderPath = value.folderPath;
      this._host = value.host;
      this._port = value.port;
      this._startDate = value.startDate;
      this._streams.internalValue = value.streams;
      this._username = value.username;
    }
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials = new SourceSftpBulkConfigurationCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: SourceSftpBulkConfigurationCredentials) {
    this._credentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // delivery_method - computed: false, optional: true, required: false
  private _deliveryMethod = new SourceSftpBulkConfigurationDeliveryMethodOutputReference(this, "delivery_method");
  public get deliveryMethod() {
    return this._deliveryMethod;
  }
  public putDeliveryMethod(value: SourceSftpBulkConfigurationDeliveryMethod) {
    this._deliveryMethod.internalValue = value;
  }
  public resetDeliveryMethod() {
    this._deliveryMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryMethodInput() {
    return this._deliveryMethod.internalValue;
  }

  // folder_path - computed: true, optional: true, required: false
  private _folderPath?: string; 
  public get folderPath() {
    return this.getStringAttribute('folder_path');
  }
  public set folderPath(value: string) {
    this._folderPath = value;
  }
  public resetFolderPath() {
    this._folderPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderPathInput() {
    return this._folderPath;
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

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // start_date - computed: false, optional: true, required: false
  private _startDate?: string; 
  public get startDate() {
    return this.getStringAttribute('start_date');
  }
  public set startDate(value: string) {
    this._startDate = value;
  }
  public resetStartDate() {
    this._startDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateInput() {
    return this._startDate;
  }

  // streams - computed: false, optional: false, required: true
  private _streams = new SourceSftpBulkConfigurationStreamsList(this, "streams", false);
  public get streams() {
    return this._streams;
  }
  public putStreams(value: SourceSftpBulkConfigurationStreams[] | cdktf.IResolvable) {
    this._streams.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamsInput() {
    return this._streams.internalValue;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface SourceSftpBulkResourceAllocationDefault {
}

export function sourceSftpBulkResourceAllocationDefaultToTerraform(struct?: SourceSftpBulkResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceSftpBulkResourceAllocationDefaultToHclTerraform(struct?: SourceSftpBulkResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceSftpBulkResourceAllocationDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceSftpBulkResourceAllocationDefault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceSftpBulkResourceAllocationDefault | undefined) {
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
export interface SourceSftpBulkResourceAllocationJobSpecificResourceRequirements {
}

export function sourceSftpBulkResourceAllocationJobSpecificResourceRequirementsToTerraform(struct?: SourceSftpBulkResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceSftpBulkResourceAllocationJobSpecificResourceRequirementsToHclTerraform(struct?: SourceSftpBulkResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceSftpBulkResourceAllocationJobSpecificResourceRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceSftpBulkResourceAllocationJobSpecificResourceRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceSftpBulkResourceAllocationJobSpecificResourceRequirements | undefined) {
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
export interface SourceSftpBulkResourceAllocationJobSpecific {
}

export function sourceSftpBulkResourceAllocationJobSpecificToTerraform(struct?: SourceSftpBulkResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceSftpBulkResourceAllocationJobSpecificToHclTerraform(struct?: SourceSftpBulkResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceSftpBulkResourceAllocationJobSpecificOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SourceSftpBulkResourceAllocationJobSpecific | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceSftpBulkResourceAllocationJobSpecific | undefined) {
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
  private _resourceRequirements = new SourceSftpBulkResourceAllocationJobSpecificResourceRequirementsOutputReference(this, "resource_requirements");
  public get resourceRequirements() {
    return this._resourceRequirements;
  }
}

export class SourceSftpBulkResourceAllocationJobSpecificList extends cdktf.ComplexList {

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
  public get(index: number): SourceSftpBulkResourceAllocationJobSpecificOutputReference {
    return new SourceSftpBulkResourceAllocationJobSpecificOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourceSftpBulkResourceAllocation {
}

export function sourceSftpBulkResourceAllocationToTerraform(struct?: SourceSftpBulkResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceSftpBulkResourceAllocationToHclTerraform(struct?: SourceSftpBulkResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceSftpBulkResourceAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceSftpBulkResourceAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceSftpBulkResourceAllocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  private _default = new SourceSftpBulkResourceAllocationDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }

  // job_specific - computed: true, optional: false, required: false
  private _jobSpecific = new SourceSftpBulkResourceAllocationJobSpecificList(this, "job_specific", false);
  public get jobSpecific() {
    return this._jobSpecific;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk airbyte_source_sftp_bulk}
*/
export class SourceSftpBulk extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "airbyte_source_sftp_bulk";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SourceSftpBulk resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SourceSftpBulk to import
  * @param importFromId The id of the existing SourceSftpBulk that should be imported. Refer to the {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SourceSftpBulk to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "airbyte_source_sftp_bulk", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_sftp_bulk airbyte_source_sftp_bulk} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SourceSftpBulkConfig
  */
  public constructor(scope: Construct, id: string, config: SourceSftpBulkConfig) {
    super(scope, id, {
      terraformResourceType: 'airbyte_source_sftp_bulk',
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
  private _configuration = new SourceSftpBulkConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: SourceSftpBulkConfiguration) {
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
  private _resourceAllocation = new SourceSftpBulkResourceAllocationOutputReference(this, "resource_allocation");
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
      configuration: sourceSftpBulkConfigurationToTerraform(this._configuration.internalValue),
      definition_id: cdktf.stringToTerraform(this._definitionId),
      name: cdktf.stringToTerraform(this._name),
      secret_id: cdktf.stringToTerraform(this._secretId),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: sourceSftpBulkConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SourceSftpBulkConfiguration",
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
