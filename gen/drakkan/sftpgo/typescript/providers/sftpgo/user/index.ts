// https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Free form text field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#additional_info User#additional_info}
  */
  readonly additionalInfo?: string;
  /**
  * Optional description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#description User#description}
  */
  readonly description?: string;
  /**
  * Maximum download bandwidth as KB/s. Not set means unlimited. This is the default if no per-source limit match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#download_bandwidth User#download_bandwidth}
  */
  readonly downloadBandwidth?: number;
  /**
  * Maximum data transfer allowed for downloads as MB. Not set means no limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#download_data_transfer User#download_data_transfer}
  */
  readonly downloadDataTransfer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#email User#email}
  */
  readonly email?: string;
  /**
  * Account expiration date as unix timestamp in milliseconds. An expired account cannot login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#expiration_date User#expiration_date}
  */
  readonly expirationDate?: number;
  /**
  * Filesystem configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#filesystem User#filesystem}
  */
  readonly filesystem: UserFilesystem;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#filters User#filters}
  */
  readonly filters?: UserFilters;
  /**
  * If SFTPGo runs as root system user then the created files and directories will be assigned to this system GID. Default not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#gid User#gid}
  */
  readonly gid?: number;
  /**
  * Groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#groups User#groups}
  */
  readonly groups?: UserGroups[] | cdktf.IResolvable;
  /**
  * The user cannot upload or download files outside this directory. Must be an absolute path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#home_dir User#home_dir}
  */
  readonly homeDir: string;
  /**
  * Maximum concurrent sessions. Not set means no limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#max_sessions User#max_sessions}
  */
  readonly maxSessions?: number;
  /**
  * Plain text password or hash format supported by SFTPGo. Set to empty to remove the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#password User#password}
  */
  readonly password?: string;
  /**
  * Comma separated, per-directory, permissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#permissions User#permissions}
  */
  readonly permissions: { [key: string]: string };
  /**
  * List of public keys in OpenSSH format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#public_keys User#public_keys}
  */
  readonly publicKeys?: string[];
  /**
  * Maximum number of files allowed. Not set means no limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#quota_files User#quota_files}
  */
  readonly quotaFiles?: number;
  /**
  * Maximum size allowed as bytes. Not set means no limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#quota_size User#quota_size}
  */
  readonly quotaSize?: number;
  /**
  * Role name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#role User#role}
  */
  readonly role?: string;
  /**
  * 1 enabled, 0 disabled (login is not allowed).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#status User#status}
  */
  readonly status: number;
  /**
  * Maximum total data transfer as MB. Not set means unlimited. You can set a total data transfer instead of the individual values for uploads and downloads.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#total_data_transfer User#total_data_transfer}
  */
  readonly totalDataTransfer?: number;
  /**
  * If SFTPGo runs as root system user then the created files and directories will be assigned to this system UID. Default not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#uid User#uid}
  */
  readonly uid?: number;
  /**
  * Maximum upload bandwidth as KB/s. Not set means unlimited. This is the default if no per-source limit match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#upload_bandwidth User#upload_bandwidth}
  */
  readonly uploadBandwidth?: number;
  /**
  * Maximum data transfer allowed for uploads as MB. Not set means no limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#upload_data_transfer User#upload_data_transfer}
  */
  readonly uploadDataTransfer?: number;
  /**
  * Unique username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#username User#username}
  */
  readonly username: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#virtual_folders User#virtual_folders}
  */
  readonly virtualFolders?: UserVirtualFolders[] | cdktf.IResolvable;
}
export interface UserFilesystemAzblobconfig {
  /**
  * Blob Access Tier. Not set means the container default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#access_tier User#access_tier}
  */
  readonly accessTier?: string;
  /**
  * Plain text account key. If you set a string in SFTPGo secret format, SFTPGo will keep the current secret on updates while the Terraform plan will save your value. Don't do this unless you are sure the values match (e.g because you imported an existing resource).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#account_key User#account_key}
  */
  readonly accountKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#account_name User#account_name}
  */
  readonly accountName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#container User#container}
  */
  readonly container?: string;
  /**
  * How many parts are downloaded in parallel. Default: 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#download_concurrency User#download_concurrency}
  */
  readonly downloadConcurrency?: number;
  /**
  * The buffer size (in MB) to use for multipart downloads. If this value is not set, the default value (5MB) will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#download_part_size User#download_part_size}
  */
  readonly downloadPartSize?: number;
  /**
  * Optional endpoint. Default is "blob.core.windows.net". If you use the emulator the endpoint must include the protocol, for example "http://127.0.0.1:10000".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#endpoint User#endpoint}
  */
  readonly endpoint?: string;
  /**
  * If specified then the SFTPGo user will be restricted to objects starting with the specified prefix. The prefix must not start with "/" and must end with "/"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#key_prefix User#key_prefix}
  */
  readonly keyPrefix?: string;
  /**
  * Plain text SAS URL. If you set a string in SFTPGo secret format, SFTPGo will keep the current secret on updates while the Terraform plan will save your value. Don't do this unless you are sure the values match (e.g because you imported an existing resource).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#sas_url User#sas_url}
  */
  readonly sasUrl?: string;
  /**
  * How many parts are uploaded in parallel. Default: 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#upload_concurrency User#upload_concurrency}
  */
  readonly uploadConcurrency?: number;
  /**
  * The buffer size (in MB) to use for multipart uploads. If this value is not set, the default value (5MB) will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#upload_part_size User#upload_part_size}
  */
  readonly uploadPartSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#use_emulator User#use_emulator}
  */
  readonly useEmulator?: boolean | cdktf.IResolvable;
}

export function userFilesystemAzblobconfigToTerraform(struct?: UserFilesystemAzblobconfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_tier: cdktf.stringToTerraform(struct!.accessTier),
    account_key: cdktf.stringToTerraform(struct!.accountKey),
    account_name: cdktf.stringToTerraform(struct!.accountName),
    container: cdktf.stringToTerraform(struct!.container),
    download_concurrency: cdktf.numberToTerraform(struct!.downloadConcurrency),
    download_part_size: cdktf.numberToTerraform(struct!.downloadPartSize),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    key_prefix: cdktf.stringToTerraform(struct!.keyPrefix),
    sas_url: cdktf.stringToTerraform(struct!.sasUrl),
    upload_concurrency: cdktf.numberToTerraform(struct!.uploadConcurrency),
    upload_part_size: cdktf.numberToTerraform(struct!.uploadPartSize),
    use_emulator: cdktf.booleanToTerraform(struct!.useEmulator),
  }
}


export function userFilesystemAzblobconfigToHclTerraform(struct?: UserFilesystemAzblobconfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_tier: {
      value: cdktf.stringToHclTerraform(struct!.accessTier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_key: {
      value: cdktf.stringToHclTerraform(struct!.accountKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_name: {
      value: cdktf.stringToHclTerraform(struct!.accountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container: {
      value: cdktf.stringToHclTerraform(struct!.container),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    download_concurrency: {
      value: cdktf.numberToHclTerraform(struct!.downloadConcurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    download_part_size: {
      value: cdktf.numberToHclTerraform(struct!.downloadPartSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_prefix: {
      value: cdktf.stringToHclTerraform(struct!.keyPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sas_url: {
      value: cdktf.stringToHclTerraform(struct!.sasUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upload_concurrency: {
      value: cdktf.numberToHclTerraform(struct!.uploadConcurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    upload_part_size: {
      value: cdktf.numberToHclTerraform(struct!.uploadPartSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_emulator: {
      value: cdktf.booleanToHclTerraform(struct!.useEmulator),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserFilesystemAzblobconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UserFilesystemAzblobconfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTier = this._accessTier;
    }
    if (this._accountKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountKey = this._accountKey;
    }
    if (this._accountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountName = this._accountName;
    }
    if (this._container !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container;
    }
    if (this._downloadConcurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.downloadConcurrency = this._downloadConcurrency;
    }
    if (this._downloadPartSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.downloadPartSize = this._downloadPartSize;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._keyPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPrefix = this._keyPrefix;
    }
    if (this._sasUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.sasUrl = this._sasUrl;
    }
    if (this._uploadConcurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.uploadConcurrency = this._uploadConcurrency;
    }
    if (this._uploadPartSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.uploadPartSize = this._uploadPartSize;
    }
    if (this._useEmulator !== undefined) {
      hasAnyValues = true;
      internalValueResult.useEmulator = this._useEmulator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserFilesystemAzblobconfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessTier = undefined;
      this._accountKey = undefined;
      this._accountName = undefined;
      this._container = undefined;
      this._downloadConcurrency = undefined;
      this._downloadPartSize = undefined;
      this._endpoint = undefined;
      this._keyPrefix = undefined;
      this._sasUrl = undefined;
      this._uploadConcurrency = undefined;
      this._uploadPartSize = undefined;
      this._useEmulator = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessTier = value.accessTier;
      this._accountKey = value.accountKey;
      this._accountName = value.accountName;
      this._container = value.container;
      this._downloadConcurrency = value.downloadConcurrency;
      this._downloadPartSize = value.downloadPartSize;
      this._endpoint = value.endpoint;
      this._keyPrefix = value.keyPrefix;
      this._sasUrl = value.sasUrl;
      this._uploadConcurrency = value.uploadConcurrency;
      this._uploadPartSize = value.uploadPartSize;
      this._useEmulator = value.useEmulator;
    }
  }

  // access_tier - computed: false, optional: true, required: false
  private _accessTier?: string; 
  public get accessTier() {
    return this.getStringAttribute('access_tier');
  }
  public set accessTier(value: string) {
    this._accessTier = value;
  }
  public resetAccessTier() {
    this._accessTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTierInput() {
    return this._accessTier;
  }

  // account_key - computed: false, optional: true, required: false
  private _accountKey?: string; 
  public get accountKey() {
    return this.getStringAttribute('account_key');
  }
  public set accountKey(value: string) {
    this._accountKey = value;
  }
  public resetAccountKey() {
    this._accountKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountKeyInput() {
    return this._accountKey;
  }

  // account_name - computed: false, optional: true, required: false
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  public resetAccountName() {
    this._accountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // container - computed: false, optional: true, required: false
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  public resetContainer() {
    this._container = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
  }

  // download_concurrency - computed: false, optional: true, required: false
  private _downloadConcurrency?: number; 
  public get downloadConcurrency() {
    return this.getNumberAttribute('download_concurrency');
  }
  public set downloadConcurrency(value: number) {
    this._downloadConcurrency = value;
  }
  public resetDownloadConcurrency() {
    this._downloadConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadConcurrencyInput() {
    return this._downloadConcurrency;
  }

  // download_part_size - computed: false, optional: true, required: false
  private _downloadPartSize?: number; 
  public get downloadPartSize() {
    return this.getNumberAttribute('download_part_size');
  }
  public set downloadPartSize(value: number) {
    this._downloadPartSize = value;
  }
  public resetDownloadPartSize() {
    this._downloadPartSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadPartSizeInput() {
    return this._downloadPartSize;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // key_prefix - computed: false, optional: true, required: false
  private _keyPrefix?: string; 
  public get keyPrefix() {
    return this.getStringAttribute('key_prefix');
  }
  public set keyPrefix(value: string) {
    this._keyPrefix = value;
  }
  public resetKeyPrefix() {
    this._keyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPrefixInput() {
    return this._keyPrefix;
  }

  // sas_url - computed: false, optional: true, required: false
  private _sasUrl?: string; 
  public get sasUrl() {
    return this.getStringAttribute('sas_url');
  }
  public set sasUrl(value: string) {
    this._sasUrl = value;
  }
  public resetSasUrl() {
    this._sasUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sasUrlInput() {
    return this._sasUrl;
  }

  // upload_concurrency - computed: false, optional: true, required: false
  private _uploadConcurrency?: number; 
  public get uploadConcurrency() {
    return this.getNumberAttribute('upload_concurrency');
  }
  public set uploadConcurrency(value: number) {
    this._uploadConcurrency = value;
  }
  public resetUploadConcurrency() {
    this._uploadConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadConcurrencyInput() {
    return this._uploadConcurrency;
  }

  // upload_part_size - computed: false, optional: true, required: false
  private _uploadPartSize?: number; 
  public get uploadPartSize() {
    return this.getNumberAttribute('upload_part_size');
  }
  public set uploadPartSize(value: number) {
    this._uploadPartSize = value;
  }
  public resetUploadPartSize() {
    this._uploadPartSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadPartSizeInput() {
    return this._uploadPartSize;
  }

  // use_emulator - computed: false, optional: true, required: false
  private _useEmulator?: boolean | cdktf.IResolvable; 
  public get useEmulator() {
    return this.getBooleanAttribute('use_emulator');
  }
  public set useEmulator(value: boolean | cdktf.IResolvable) {
    this._useEmulator = value;
  }
  public resetUseEmulator() {
    this._useEmulator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useEmulatorInput() {
    return this._useEmulator;
  }
}
export interface UserFilesystemCryptconfig {
  /**
  * Plain text passphrase. If you set a string in SFTPGo secret format, SFTPGo will keep the current secret on updates while the Terraform plan will save your value. Don't do this unless you are sure the values match (e.g because you imported an existing resource).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#passphrase User#passphrase}
  */
  readonly passphrase?: string;
  /**
  * Optional read buffer size, as MB, to use for downloads. Omit to disable buffering, that's fine in most use cases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#read_buffer_size User#read_buffer_size}
  */
  readonly readBufferSize?: number;
  /**
  * Optional write buffer size, as MB, to use for uploads. Omit to disable buffering, that's fine in most use cases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#write_buffer_size User#write_buffer_size}
  */
  readonly writeBufferSize?: number;
}

export function userFilesystemCryptconfigToTerraform(struct?: UserFilesystemCryptconfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    passphrase: cdktf.stringToTerraform(struct!.passphrase),
    read_buffer_size: cdktf.numberToTerraform(struct!.readBufferSize),
    write_buffer_size: cdktf.numberToTerraform(struct!.writeBufferSize),
  }
}


export function userFilesystemCryptconfigToHclTerraform(struct?: UserFilesystemCryptconfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    passphrase: {
      value: cdktf.stringToHclTerraform(struct!.passphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_buffer_size: {
      value: cdktf.numberToHclTerraform(struct!.readBufferSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    write_buffer_size: {
      value: cdktf.numberToHclTerraform(struct!.writeBufferSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserFilesystemCryptconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UserFilesystemCryptconfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._passphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.passphrase = this._passphrase;
    }
    if (this._readBufferSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.readBufferSize = this._readBufferSize;
    }
    if (this._writeBufferSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeBufferSize = this._writeBufferSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserFilesystemCryptconfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._passphrase = undefined;
      this._readBufferSize = undefined;
      this._writeBufferSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._passphrase = value.passphrase;
      this._readBufferSize = value.readBufferSize;
      this._writeBufferSize = value.writeBufferSize;
    }
  }

  // passphrase - computed: false, optional: true, required: false
  private _passphrase?: string; 
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }
  public set passphrase(value: string) {
    this._passphrase = value;
  }
  public resetPassphrase() {
    this._passphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseInput() {
    return this._passphrase;
  }

  // read_buffer_size - computed: false, optional: true, required: false
  private _readBufferSize?: number; 
  public get readBufferSize() {
    return this.getNumberAttribute('read_buffer_size');
  }
  public set readBufferSize(value: number) {
    this._readBufferSize = value;
  }
  public resetReadBufferSize() {
    this._readBufferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readBufferSizeInput() {
    return this._readBufferSize;
  }

  // write_buffer_size - computed: false, optional: true, required: false
  private _writeBufferSize?: number; 
  public get writeBufferSize() {
    return this.getNumberAttribute('write_buffer_size');
  }
  public set writeBufferSize(value: number) {
    this._writeBufferSize = value;
  }
  public resetWriteBufferSize() {
    this._writeBufferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeBufferSizeInput() {
    return this._writeBufferSize;
  }
}
export interface UserFilesystemFtpconfig {
  /**
  * FTP endpoint as host:port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#endpoint User#endpoint}
  */
  readonly endpoint: string;
  /**
  * Plain text password. If you set a string in SFTPGo secret format, SFTPGo will keep the current secret on updates while the Terraform plan will save your value. Don't do this unless you are sure the values match (e.g because you imported an existing resource).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#password User#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#skip_tls_verify User#skip_tls_verify}
  */
  readonly skipTlsVerify?: boolean | cdktf.IResolvable;
  /**
  * 0 disabled, 1 Explicit, 2 Implicit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#tls_mode User#tls_mode}
  */
  readonly tlsMode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#username User#username}
  */
  readonly username: string;
}

export function userFilesystemFtpconfigToTerraform(struct?: UserFilesystemFtpconfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    password: cdktf.stringToTerraform(struct!.password),
    skip_tls_verify: cdktf.booleanToTerraform(struct!.skipTlsVerify),
    tls_mode: cdktf.numberToTerraform(struct!.tlsMode),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function userFilesystemFtpconfigToHclTerraform(struct?: UserFilesystemFtpconfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
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
    skip_tls_verify: {
      value: cdktf.booleanToHclTerraform(struct!.skipTlsVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_mode: {
      value: cdktf.numberToHclTerraform(struct!.tlsMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class UserFilesystemFtpconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UserFilesystemFtpconfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._skipTlsVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipTlsVerify = this._skipTlsVerify;
    }
    if (this._tlsMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsMode = this._tlsMode;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserFilesystemFtpconfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoint = undefined;
      this._password = undefined;
      this._skipTlsVerify = undefined;
      this._tlsMode = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoint = value.endpoint;
      this._password = value.password;
      this._skipTlsVerify = value.skipTlsVerify;
      this._tlsMode = value.tlsMode;
      this._username = value.username;
    }
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
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

  // skip_tls_verify - computed: false, optional: true, required: false
  private _skipTlsVerify?: boolean | cdktf.IResolvable; 
  public get skipTlsVerify() {
    return this.getBooleanAttribute('skip_tls_verify');
  }
  public set skipTlsVerify(value: boolean | cdktf.IResolvable) {
    this._skipTlsVerify = value;
  }
  public resetSkipTlsVerify() {
    this._skipTlsVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipTlsVerifyInput() {
    return this._skipTlsVerify;
  }

  // tls_mode - computed: false, optional: true, required: false
  private _tlsMode?: number; 
  public get tlsMode() {
    return this.getNumberAttribute('tls_mode');
  }
  public set tlsMode(value: number) {
    this._tlsMode = value;
  }
  public resetTlsMode() {
    this._tlsMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsModeInput() {
    return this._tlsMode;
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
export interface UserFilesystemGcsconfig {
  /**
  * The ACL to apply to uploaded objects. Not set means the bucket default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#acl User#acl}
  */
  readonly acl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#automatic_credentials User#automatic_credentials}
  */
  readonly automaticCredentials?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#bucket User#bucket}
  */
  readonly bucket: string;
  /**
  * Plain text credentials. If you set a string in SFTPGo secret format, SFTPGo will keep the current secret on updates while the Terraform plan will save your value. Don't do this unless you are sure the values match (e.g because you imported an existing resource).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#credentials User#credentials}
  */
  readonly credentials?: string;
  /**
  * Set to 1 if Hierarchical namespace is enabled for the bucket. Available in the Enterprise edition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#hns User#hns}
  */
  readonly hns?: number;
  /**
  * If specified then the SFTPGo user will be restricted to objects starting with the specified prefix. The prefix must not start with "/" and must end with "/"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#key_prefix User#key_prefix}
  */
  readonly keyPrefix?: string;
  /**
  * The storage class to use when storing objects. Leave not set for default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#storage_class User#storage_class}
  */
  readonly storageClass?: string;
  /**
  * The maximum time allowed, in seconds, to upload a single chunk. The default value is 32. Not set means use the default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#upload_part_max_time User#upload_part_max_time}
  */
  readonly uploadPartMaxTime?: number;
  /**
  * The buffer size (in MB) to use for multipart uploads. The default value is 16MB. Not set means use the default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#upload_part_size User#upload_part_size}
  */
  readonly uploadPartSize?: number;
}

export function userFilesystemGcsconfigToTerraform(struct?: UserFilesystemGcsconfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl: cdktf.stringToTerraform(struct!.acl),
    automatic_credentials: cdktf.numberToTerraform(struct!.automaticCredentials),
    bucket: cdktf.stringToTerraform(struct!.bucket),
    credentials: cdktf.stringToTerraform(struct!.credentials),
    hns: cdktf.numberToTerraform(struct!.hns),
    key_prefix: cdktf.stringToTerraform(struct!.keyPrefix),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
    upload_part_max_time: cdktf.numberToTerraform(struct!.uploadPartMaxTime),
    upload_part_size: cdktf.numberToTerraform(struct!.uploadPartSize),
  }
}


export function userFilesystemGcsconfigToHclTerraform(struct?: UserFilesystemGcsconfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl: {
      value: cdktf.stringToHclTerraform(struct!.acl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    automatic_credentials: {
      value: cdktf.numberToHclTerraform(struct!.automaticCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials: {
      value: cdktf.stringToHclTerraform(struct!.credentials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hns: {
      value: cdktf.numberToHclTerraform(struct!.hns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key_prefix: {
      value: cdktf.stringToHclTerraform(struct!.keyPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_class: {
      value: cdktf.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upload_part_max_time: {
      value: cdktf.numberToHclTerraform(struct!.uploadPartMaxTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    upload_part_size: {
      value: cdktf.numberToHclTerraform(struct!.uploadPartSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserFilesystemGcsconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UserFilesystemGcsconfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acl !== undefined) {
      hasAnyValues = true;
      internalValueResult.acl = this._acl;
    }
    if (this._automaticCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticCredentials = this._automaticCredentials;
    }
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._credentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials;
    }
    if (this._hns !== undefined) {
      hasAnyValues = true;
      internalValueResult.hns = this._hns;
    }
    if (this._keyPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPrefix = this._keyPrefix;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    if (this._uploadPartMaxTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.uploadPartMaxTime = this._uploadPartMaxTime;
    }
    if (this._uploadPartSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.uploadPartSize = this._uploadPartSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserFilesystemGcsconfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acl = undefined;
      this._automaticCredentials = undefined;
      this._bucket = undefined;
      this._credentials = undefined;
      this._hns = undefined;
      this._keyPrefix = undefined;
      this._storageClass = undefined;
      this._uploadPartMaxTime = undefined;
      this._uploadPartSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acl = value.acl;
      this._automaticCredentials = value.automaticCredentials;
      this._bucket = value.bucket;
      this._credentials = value.credentials;
      this._hns = value.hns;
      this._keyPrefix = value.keyPrefix;
      this._storageClass = value.storageClass;
      this._uploadPartMaxTime = value.uploadPartMaxTime;
      this._uploadPartSize = value.uploadPartSize;
    }
  }

  // acl - computed: false, optional: true, required: false
  private _acl?: string; 
  public get acl() {
    return this.getStringAttribute('acl');
  }
  public set acl(value: string) {
    this._acl = value;
  }
  public resetAcl() {
    this._acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl;
  }

  // automatic_credentials - computed: false, optional: true, required: false
  private _automaticCredentials?: number; 
  public get automaticCredentials() {
    return this.getNumberAttribute('automatic_credentials');
  }
  public set automaticCredentials(value: number) {
    this._automaticCredentials = value;
  }
  public resetAutomaticCredentials() {
    this._automaticCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticCredentialsInput() {
    return this._automaticCredentials;
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials?: string; 
  public get credentials() {
    return this.getStringAttribute('credentials');
  }
  public set credentials(value: string) {
    this._credentials = value;
  }
  public resetCredentials() {
    this._credentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }

  // hns - computed: false, optional: true, required: false
  private _hns?: number; 
  public get hns() {
    return this.getNumberAttribute('hns');
  }
  public set hns(value: number) {
    this._hns = value;
  }
  public resetHns() {
    this._hns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hnsInput() {
    return this._hns;
  }

  // key_prefix - computed: false, optional: true, required: false
  private _keyPrefix?: string; 
  public get keyPrefix() {
    return this.getStringAttribute('key_prefix');
  }
  public set keyPrefix(value: string) {
    this._keyPrefix = value;
  }
  public resetKeyPrefix() {
    this._keyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPrefixInput() {
    return this._keyPrefix;
  }

  // storage_class - computed: false, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }

  // upload_part_max_time - computed: false, optional: true, required: false
  private _uploadPartMaxTime?: number; 
  public get uploadPartMaxTime() {
    return this.getNumberAttribute('upload_part_max_time');
  }
  public set uploadPartMaxTime(value: number) {
    this._uploadPartMaxTime = value;
  }
  public resetUploadPartMaxTime() {
    this._uploadPartMaxTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadPartMaxTimeInput() {
    return this._uploadPartMaxTime;
  }

  // upload_part_size - computed: false, optional: true, required: false
  private _uploadPartSize?: number; 
  public get uploadPartSize() {
    return this.getNumberAttribute('upload_part_size');
  }
  public set uploadPartSize(value: number) {
    this._uploadPartSize = value;
  }
  public resetUploadPartSize() {
    this._uploadPartSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadPartSizeInput() {
    return this._uploadPartSize;
  }
}
export interface UserFilesystemHttpconfig {
  /**
  * Plain text API key. If you set a string in SFTPGo secret format, SFTPGo will keep the current secret on updates while the Terraform plan will save your value. Don't do this unless you are sure the values match (e.g because you imported an existing resource).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#api_key User#api_key}
  */
  readonly apiKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#endpoint User#endpoint}
  */
  readonly endpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#equality_check_mode User#equality_check_mode}
  */
  readonly equalityCheckMode?: number;
  /**
  * Plain text password. If you set a string in SFTPGo secret format, SFTPGo will keep the current secret on updates while the Terraform plan will save your value. Don't do this unless you are sure the values match (e.g because you imported an existing resource).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#password User#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#skip_tls_verify User#skip_tls_verify}
  */
  readonly skipTlsVerify?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#username User#username}
  */
  readonly username?: string;
}

export function userFilesystemHttpconfigToTerraform(struct?: UserFilesystemHttpconfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    equality_check_mode: cdktf.numberToTerraform(struct!.equalityCheckMode),
    password: cdktf.stringToTerraform(struct!.password),
    skip_tls_verify: cdktf.booleanToTerraform(struct!.skipTlsVerify),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function userFilesystemHttpconfigToHclTerraform(struct?: UserFilesystemHttpconfig | cdktf.IResolvable): any {
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
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    equality_check_mode: {
      value: cdktf.numberToHclTerraform(struct!.equalityCheckMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_tls_verify: {
      value: cdktf.booleanToHclTerraform(struct!.skipTlsVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class UserFilesystemHttpconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UserFilesystemHttpconfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._equalityCheckMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.equalityCheckMode = this._equalityCheckMode;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._skipTlsVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipTlsVerify = this._skipTlsVerify;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserFilesystemHttpconfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey = undefined;
      this._endpoint = undefined;
      this._equalityCheckMode = undefined;
      this._password = undefined;
      this._skipTlsVerify = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey = value.apiKey;
      this._endpoint = value.endpoint;
      this._equalityCheckMode = value.equalityCheckMode;
      this._password = value.password;
      this._skipTlsVerify = value.skipTlsVerify;
      this._username = value.username;
    }
  }

  // api_key - computed: false, optional: true, required: false
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

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // equality_check_mode - computed: false, optional: true, required: false
  private _equalityCheckMode?: number; 
  public get equalityCheckMode() {
    return this.getNumberAttribute('equality_check_mode');
  }
  public set equalityCheckMode(value: number) {
    this._equalityCheckMode = value;
  }
  public resetEqualityCheckMode() {
    this._equalityCheckMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get equalityCheckModeInput() {
    return this._equalityCheckMode;
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

  // skip_tls_verify - computed: false, optional: true, required: false
  private _skipTlsVerify?: boolean | cdktf.IResolvable; 
  public get skipTlsVerify() {
    return this.getBooleanAttribute('skip_tls_verify');
  }
  public set skipTlsVerify(value: boolean | cdktf.IResolvable) {
    this._skipTlsVerify = value;
  }
  public resetSkipTlsVerify() {
    this._skipTlsVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipTlsVerifyInput() {
    return this._skipTlsVerify;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface UserFilesystemOsconfig {
  /**
  * Optional read buffer size, as MB, to use for downloads. Omit to disable buffering, that's fine in most use cases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#read_buffer_size User#read_buffer_size}
  */
  readonly readBufferSize?: number;
  /**
  * Optional write buffer size, as MB, to use for uploads. Omit to disable no buffering, that's fine in most use cases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#write_buffer_size User#write_buffer_size}
  */
  readonly writeBufferSize?: number;
}

export function userFilesystemOsconfigToTerraform(struct?: UserFilesystemOsconfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read_buffer_size: cdktf.numberToTerraform(struct!.readBufferSize),
    write_buffer_size: cdktf.numberToTerraform(struct!.writeBufferSize),
  }
}


export function userFilesystemOsconfigToHclTerraform(struct?: UserFilesystemOsconfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read_buffer_size: {
      value: cdktf.numberToHclTerraform(struct!.readBufferSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    write_buffer_size: {
      value: cdktf.numberToHclTerraform(struct!.writeBufferSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserFilesystemOsconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UserFilesystemOsconfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._readBufferSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.readBufferSize = this._readBufferSize;
    }
    if (this._writeBufferSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeBufferSize = this._writeBufferSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserFilesystemOsconfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._readBufferSize = undefined;
      this._writeBufferSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._readBufferSize = value.readBufferSize;
      this._writeBufferSize = value.writeBufferSize;
    }
  }

  // read_buffer_size - computed: false, optional: true, required: false
  private _readBufferSize?: number; 
  public get readBufferSize() {
    return this.getNumberAttribute('read_buffer_size');
  }
  public set readBufferSize(value: number) {
    this._readBufferSize = value;
  }
  public resetReadBufferSize() {
    this._readBufferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readBufferSizeInput() {
    return this._readBufferSize;
  }

  // write_buffer_size - computed: false, optional: true, required: false
  private _writeBufferSize?: number; 
  public get writeBufferSize() {
    return this.getNumberAttribute('write_buffer_size');
  }
  public set writeBufferSize(value: number) {
    this._writeBufferSize = value;
  }
  public resetWriteBufferSize() {
    this._writeBufferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeBufferSizeInput() {
    return this._writeBufferSize;
  }
}
export interface UserFilesystemS3Config {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#access_key User#access_key}
  */
  readonly accessKey?: string;
  /**
  * Plain text access secret. If you set a string in SFTPGo secret format, SFTPGo will keep the current secret on updates while the Terraform plan will save your value. Don't do this unless you are sure the values match (e.g because you imported an existing resource).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#access_secret User#access_secret}
  */
  readonly accessSecret?: string;
  /**
  * The canned ACL to apply to uploaded objects. Not set means the bucket default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#acl User#acl}
  */
  readonly acl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#bucket User#bucket}
  */
  readonly bucket: string;
  /**
  * How many parts are downloaded in parallel. Not set means the default (5). Ignored for partial downloads.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#download_concurrency User#download_concurrency}
  */
  readonly downloadConcurrency?: number;
  /**
  * The maximum time allowed, in seconds, to download a single chunk. Not set means no timeout. Ignored for partial downloads.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#download_part_max_time User#download_part_max_time}
  */
  readonly downloadPartMaxTime?: number;
  /**
  * The buffer size (in MB) to use for multipart downloads. If this value is not set, the default value (5MB) will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#download_part_size User#download_part_size}
  */
  readonly downloadPartSize?: number;
  /**
  * The endpoint is generally required for S3 compatible backends. For AWS S3, leave not set to use the default endpoint for the specified region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#endpoint User#endpoint}
  */
  readonly endpoint?: string;
  /**
  * If set path-style addressing is used, i.e. http://s3.amazonaws.com/BUCKET/KEY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#force_path_style User#force_path_style}
  */
  readonly forcePathStyle?: boolean | cdktf.IResolvable;
  /**
  * If specified then the SFTPGo user will be restricted to objects starting with the specified prefix. The prefix must not start with "/" and must end with "/"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#key_prefix User#key_prefix}
  */
  readonly keyPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#region User#region}
  */
  readonly region?: string;
  /**
  * Optional IAM Role ARN to assume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#role_arn User#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Optional Session token that is a part of temporary security credentials provisioned by AWS STS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#session_token User#session_token}
  */
  readonly sessionToken?: string;
  /**
  * If set the S3 client accepts any TLS certificate presented by the server and any host name in that certificate. In this mode, TLS is susceptible to man-in-the-middle attacks. This should be used only for testing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#skip_tls_verify User#skip_tls_verify}
  */
  readonly skipTlsVerify?: boolean | cdktf.IResolvable;
  /**
  * Plain text Server-Side encryption key. If you set a string in SFTPGo secret format, SFTPGo will keep the current secret on updates while the Terraform plan will save your value. Don't do this unless you are sure the values match (e.g because you imported an existing resource).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#sse_customer_key User#sse_customer_key}
  */
  readonly sseCustomerKey?: string;
  /**
  * The storage class to use when storing objects. Leave not set for default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#storage_class User#storage_class}
  */
  readonly storageClass?: string;
  /**
  * How many parts are uploaded in parallel. Not set means the default (5).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#upload_concurrency User#upload_concurrency}
  */
  readonly uploadConcurrency?: number;
  /**
  * The maximum time allowed, in seconds, to upload a single chunk. Not set means no timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#upload_part_max_time User#upload_part_max_time}
  */
  readonly uploadPartMaxTime?: number;
  /**
  * The buffer size (in MB) to use for multipart uploads. If this value is not set, the default value (5MB) will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#upload_part_size User#upload_part_size}
  */
  readonly uploadPartSize?: number;
}

export function userFilesystemS3ConfigToTerraform(struct?: UserFilesystemS3Config | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    access_secret: cdktf.stringToTerraform(struct!.accessSecret),
    acl: cdktf.stringToTerraform(struct!.acl),
    bucket: cdktf.stringToTerraform(struct!.bucket),
    download_concurrency: cdktf.numberToTerraform(struct!.downloadConcurrency),
    download_part_max_time: cdktf.numberToTerraform(struct!.downloadPartMaxTime),
    download_part_size: cdktf.numberToTerraform(struct!.downloadPartSize),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    force_path_style: cdktf.booleanToTerraform(struct!.forcePathStyle),
    key_prefix: cdktf.stringToTerraform(struct!.keyPrefix),
    region: cdktf.stringToTerraform(struct!.region),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    session_token: cdktf.stringToTerraform(struct!.sessionToken),
    skip_tls_verify: cdktf.booleanToTerraform(struct!.skipTlsVerify),
    sse_customer_key: cdktf.stringToTerraform(struct!.sseCustomerKey),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
    upload_concurrency: cdktf.numberToTerraform(struct!.uploadConcurrency),
    upload_part_max_time: cdktf.numberToTerraform(struct!.uploadPartMaxTime),
    upload_part_size: cdktf.numberToTerraform(struct!.uploadPartSize),
  }
}


export function userFilesystemS3ConfigToHclTerraform(struct?: UserFilesystemS3Config | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key: {
      value: cdktf.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_secret: {
      value: cdktf.stringToHclTerraform(struct!.accessSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acl: {
      value: cdktf.stringToHclTerraform(struct!.acl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    download_concurrency: {
      value: cdktf.numberToHclTerraform(struct!.downloadConcurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    download_part_max_time: {
      value: cdktf.numberToHclTerraform(struct!.downloadPartMaxTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    download_part_size: {
      value: cdktf.numberToHclTerraform(struct!.downloadPartSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    force_path_style: {
      value: cdktf.booleanToHclTerraform(struct!.forcePathStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_prefix: {
      value: cdktf.stringToHclTerraform(struct!.keyPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
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
    session_token: {
      value: cdktf.stringToHclTerraform(struct!.sessionToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_tls_verify: {
      value: cdktf.booleanToHclTerraform(struct!.skipTlsVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sse_customer_key: {
      value: cdktf.stringToHclTerraform(struct!.sseCustomerKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_class: {
      value: cdktf.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upload_concurrency: {
      value: cdktf.numberToHclTerraform(struct!.uploadConcurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    upload_part_max_time: {
      value: cdktf.numberToHclTerraform(struct!.uploadPartMaxTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    upload_part_size: {
      value: cdktf.numberToHclTerraform(struct!.uploadPartSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserFilesystemS3ConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UserFilesystemS3Config | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._accessSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessSecret = this._accessSecret;
    }
    if (this._acl !== undefined) {
      hasAnyValues = true;
      internalValueResult.acl = this._acl;
    }
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._downloadConcurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.downloadConcurrency = this._downloadConcurrency;
    }
    if (this._downloadPartMaxTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.downloadPartMaxTime = this._downloadPartMaxTime;
    }
    if (this._downloadPartSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.downloadPartSize = this._downloadPartSize;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._forcePathStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.forcePathStyle = this._forcePathStyle;
    }
    if (this._keyPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPrefix = this._keyPrefix;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._sessionToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionToken = this._sessionToken;
    }
    if (this._skipTlsVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipTlsVerify = this._skipTlsVerify;
    }
    if (this._sseCustomerKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sseCustomerKey = this._sseCustomerKey;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    if (this._uploadConcurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.uploadConcurrency = this._uploadConcurrency;
    }
    if (this._uploadPartMaxTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.uploadPartMaxTime = this._uploadPartMaxTime;
    }
    if (this._uploadPartSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.uploadPartSize = this._uploadPartSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserFilesystemS3Config | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKey = undefined;
      this._accessSecret = undefined;
      this._acl = undefined;
      this._bucket = undefined;
      this._downloadConcurrency = undefined;
      this._downloadPartMaxTime = undefined;
      this._downloadPartSize = undefined;
      this._endpoint = undefined;
      this._forcePathStyle = undefined;
      this._keyPrefix = undefined;
      this._region = undefined;
      this._roleArn = undefined;
      this._sessionToken = undefined;
      this._skipTlsVerify = undefined;
      this._sseCustomerKey = undefined;
      this._storageClass = undefined;
      this._uploadConcurrency = undefined;
      this._uploadPartMaxTime = undefined;
      this._uploadPartSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessKey = value.accessKey;
      this._accessSecret = value.accessSecret;
      this._acl = value.acl;
      this._bucket = value.bucket;
      this._downloadConcurrency = value.downloadConcurrency;
      this._downloadPartMaxTime = value.downloadPartMaxTime;
      this._downloadPartSize = value.downloadPartSize;
      this._endpoint = value.endpoint;
      this._forcePathStyle = value.forcePathStyle;
      this._keyPrefix = value.keyPrefix;
      this._region = value.region;
      this._roleArn = value.roleArn;
      this._sessionToken = value.sessionToken;
      this._skipTlsVerify = value.skipTlsVerify;
      this._sseCustomerKey = value.sseCustomerKey;
      this._storageClass = value.storageClass;
      this._uploadConcurrency = value.uploadConcurrency;
      this._uploadPartMaxTime = value.uploadPartMaxTime;
      this._uploadPartSize = value.uploadPartSize;
    }
  }

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // access_secret - computed: false, optional: true, required: false
  private _accessSecret?: string; 
  public get accessSecret() {
    return this.getStringAttribute('access_secret');
  }
  public set accessSecret(value: string) {
    this._accessSecret = value;
  }
  public resetAccessSecret() {
    this._accessSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessSecretInput() {
    return this._accessSecret;
  }

  // acl - computed: false, optional: true, required: false
  private _acl?: string; 
  public get acl() {
    return this.getStringAttribute('acl');
  }
  public set acl(value: string) {
    this._acl = value;
  }
  public resetAcl() {
    this._acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl;
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // download_concurrency - computed: false, optional: true, required: false
  private _downloadConcurrency?: number; 
  public get downloadConcurrency() {
    return this.getNumberAttribute('download_concurrency');
  }
  public set downloadConcurrency(value: number) {
    this._downloadConcurrency = value;
  }
  public resetDownloadConcurrency() {
    this._downloadConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadConcurrencyInput() {
    return this._downloadConcurrency;
  }

  // download_part_max_time - computed: false, optional: true, required: false
  private _downloadPartMaxTime?: number; 
  public get downloadPartMaxTime() {
    return this.getNumberAttribute('download_part_max_time');
  }
  public set downloadPartMaxTime(value: number) {
    this._downloadPartMaxTime = value;
  }
  public resetDownloadPartMaxTime() {
    this._downloadPartMaxTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadPartMaxTimeInput() {
    return this._downloadPartMaxTime;
  }

  // download_part_size - computed: false, optional: true, required: false
  private _downloadPartSize?: number; 
  public get downloadPartSize() {
    return this.getNumberAttribute('download_part_size');
  }
  public set downloadPartSize(value: number) {
    this._downloadPartSize = value;
  }
  public resetDownloadPartSize() {
    this._downloadPartSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadPartSizeInput() {
    return this._downloadPartSize;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // force_path_style - computed: false, optional: true, required: false
  private _forcePathStyle?: boolean | cdktf.IResolvable; 
  public get forcePathStyle() {
    return this.getBooleanAttribute('force_path_style');
  }
  public set forcePathStyle(value: boolean | cdktf.IResolvable) {
    this._forcePathStyle = value;
  }
  public resetForcePathStyle() {
    this._forcePathStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forcePathStyleInput() {
    return this._forcePathStyle;
  }

  // key_prefix - computed: false, optional: true, required: false
  private _keyPrefix?: string; 
  public get keyPrefix() {
    return this.getStringAttribute('key_prefix');
  }
  public set keyPrefix(value: string) {
    this._keyPrefix = value;
  }
  public resetKeyPrefix() {
    this._keyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPrefixInput() {
    return this._keyPrefix;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // session_token - computed: false, optional: true, required: false
  private _sessionToken?: string; 
  public get sessionToken() {
    return this.getStringAttribute('session_token');
  }
  public set sessionToken(value: string) {
    this._sessionToken = value;
  }
  public resetSessionToken() {
    this._sessionToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTokenInput() {
    return this._sessionToken;
  }

  // skip_tls_verify - computed: false, optional: true, required: false
  private _skipTlsVerify?: boolean | cdktf.IResolvable; 
  public get skipTlsVerify() {
    return this.getBooleanAttribute('skip_tls_verify');
  }
  public set skipTlsVerify(value: boolean | cdktf.IResolvable) {
    this._skipTlsVerify = value;
  }
  public resetSkipTlsVerify() {
    this._skipTlsVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipTlsVerifyInput() {
    return this._skipTlsVerify;
  }

  // sse_customer_key - computed: false, optional: true, required: false
  private _sseCustomerKey?: string; 
  public get sseCustomerKey() {
    return this.getStringAttribute('sse_customer_key');
  }
  public set sseCustomerKey(value: string) {
    this._sseCustomerKey = value;
  }
  public resetSseCustomerKey() {
    this._sseCustomerKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sseCustomerKeyInput() {
    return this._sseCustomerKey;
  }

  // storage_class - computed: false, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }

  // upload_concurrency - computed: false, optional: true, required: false
  private _uploadConcurrency?: number; 
  public get uploadConcurrency() {
    return this.getNumberAttribute('upload_concurrency');
  }
  public set uploadConcurrency(value: number) {
    this._uploadConcurrency = value;
  }
  public resetUploadConcurrency() {
    this._uploadConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadConcurrencyInput() {
    return this._uploadConcurrency;
  }

  // upload_part_max_time - computed: false, optional: true, required: false
  private _uploadPartMaxTime?: number; 
  public get uploadPartMaxTime() {
    return this.getNumberAttribute('upload_part_max_time');
  }
  public set uploadPartMaxTime(value: number) {
    this._uploadPartMaxTime = value;
  }
  public resetUploadPartMaxTime() {
    this._uploadPartMaxTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadPartMaxTimeInput() {
    return this._uploadPartMaxTime;
  }

  // upload_part_size - computed: false, optional: true, required: false
  private _uploadPartSize?: number; 
  public get uploadPartSize() {
    return this.getNumberAttribute('upload_part_size');
  }
  public set uploadPartSize(value: number) {
    this._uploadPartSize = value;
  }
  public resetUploadPartSize() {
    this._uploadPartSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadPartSizeInput() {
    return this._uploadPartSize;
  }
}
export interface UserFilesystemSftpconfig {
  /**
  * The buffer size (in MB) to use for uploads/downloads. Buffering could improve performance for high latency networks. With buffering enabled upload resume is not supported and a file cannot be opened for both reading and writing at the same time. Not set means disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#buffer_size User#buffer_size}
  */
  readonly bufferSize?: number;
  /**
  * Concurrent reads are safe to use and disabling them will degrade performance so they are enabled by default. Some servers automatically delete files once they are downloaded. Using concurrent reads is problematic with such servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#disable_concurrent_reads User#disable_concurrent_reads}
  */
  readonly disableConcurrentReads?: boolean | cdktf.IResolvable;
  /**
  * SFTP endpoint as host:port. Port is always required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#endpoint User#endpoint}
  */
  readonly endpoint: string;
  /**
  * Defines how to check if this config points to the same server as another config. By default both the endpoint and the username must match. 1 means that only the endpoint must match. If different configs point to the same server the renaming between the fs configs is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#equality_check_mode User#equality_check_mode}
  */
  readonly equalityCheckMode?: number;
  /**
  * SHA256 fingerprints to validate when connecting to the external SFTP server. If not set any host key will be accepted: this is a security risk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#fingerprints User#fingerprints}
  */
  readonly fingerprints?: string[];
  /**
  * Plain text passphrase for the private key. If you set a string in SFTPGo secret format, SFTPGo will keep the current secret on updates while the Terraform plan will save your value. Don't do this unless you are sure the values match (e.g because you imported an existing resource).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#key_passphrase User#key_passphrase}
  */
  readonly keyPassphrase?: string;
  /**
  * Plain text password. If you set a string in SFTPGo secret format, SFTPGo will keep the current secret on updates while the Terraform plan will save your value. Don't do this unless you are sure the values match (e.g because you imported an existing resource).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#password User#password}
  */
  readonly password?: string;
  /**
  * Similar to a chroot for local filesystem. Example: "/somedir/subdir".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#prefix User#prefix}
  */
  readonly prefix: string;
  /**
  * Plain text private key. If you set a string in SFTPGo secret format, SFTPGo will keep the current secret on updates while the Terraform plan will save your value. Don't do this unless you are sure the values match (e.g because you imported an existing resource).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#private_key User#private_key}
  */
  readonly privateKey?: string;
  /**
  * Plain text SOCKS password. If you set a string in SFTPGo secret format, SFTPGo will keep the current secret on updates while the Terraform plan will save your value. Don't do this unless you are sure the values match (e.g because you imported an existing resource). Available in the Enterprise edition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#socks_password User#socks_password}
  */
  readonly socksPassword?: string;
  /**
  * The address of the SOCKS proxy server, including schema, host, and port. Examples: socks5://127.0.0.1:1080, socks4://127.0.0.1:1080, socks4a://127.0.0.1:1080. Available in the Enterprise edition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#socks_proxy User#socks_proxy}
  */
  readonly socksProxy?: string;
  /**
  * The optional SOCKS username. Available in the Enterprise edition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#socks_username User#socks_username}
  */
  readonly socksUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#username User#username}
  */
  readonly username: string;
}

export function userFilesystemSftpconfigToTerraform(struct?: UserFilesystemSftpconfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffer_size: cdktf.numberToTerraform(struct!.bufferSize),
    disable_concurrent_reads: cdktf.booleanToTerraform(struct!.disableConcurrentReads),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    equality_check_mode: cdktf.numberToTerraform(struct!.equalityCheckMode),
    fingerprints: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fingerprints),
    key_passphrase: cdktf.stringToTerraform(struct!.keyPassphrase),
    password: cdktf.stringToTerraform(struct!.password),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    socks_password: cdktf.stringToTerraform(struct!.socksPassword),
    socks_proxy: cdktf.stringToTerraform(struct!.socksProxy),
    socks_username: cdktf.stringToTerraform(struct!.socksUsername),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function userFilesystemSftpconfigToHclTerraform(struct?: UserFilesystemSftpconfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buffer_size: {
      value: cdktf.numberToHclTerraform(struct!.bufferSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable_concurrent_reads: {
      value: cdktf.booleanToHclTerraform(struct!.disableConcurrentReads),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    equality_check_mode: {
      value: cdktf.numberToHclTerraform(struct!.equalityCheckMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fingerprints: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fingerprints),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    key_passphrase: {
      value: cdktf.stringToHclTerraform(struct!.keyPassphrase),
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
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    socks_password: {
      value: cdktf.stringToHclTerraform(struct!.socksPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    socks_proxy: {
      value: cdktf.stringToHclTerraform(struct!.socksProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    socks_username: {
      value: cdktf.stringToHclTerraform(struct!.socksUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class UserFilesystemSftpconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UserFilesystemSftpconfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bufferSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferSize = this._bufferSize;
    }
    if (this._disableConcurrentReads !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableConcurrentReads = this._disableConcurrentReads;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._equalityCheckMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.equalityCheckMode = this._equalityCheckMode;
    }
    if (this._fingerprints !== undefined) {
      hasAnyValues = true;
      internalValueResult.fingerprints = this._fingerprints;
    }
    if (this._keyPassphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPassphrase = this._keyPassphrase;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._socksPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.socksPassword = this._socksPassword;
    }
    if (this._socksProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.socksProxy = this._socksProxy;
    }
    if (this._socksUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.socksUsername = this._socksUsername;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserFilesystemSftpconfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bufferSize = undefined;
      this._disableConcurrentReads = undefined;
      this._endpoint = undefined;
      this._equalityCheckMode = undefined;
      this._fingerprints = undefined;
      this._keyPassphrase = undefined;
      this._password = undefined;
      this._prefix = undefined;
      this._privateKey = undefined;
      this._socksPassword = undefined;
      this._socksProxy = undefined;
      this._socksUsername = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bufferSize = value.bufferSize;
      this._disableConcurrentReads = value.disableConcurrentReads;
      this._endpoint = value.endpoint;
      this._equalityCheckMode = value.equalityCheckMode;
      this._fingerprints = value.fingerprints;
      this._keyPassphrase = value.keyPassphrase;
      this._password = value.password;
      this._prefix = value.prefix;
      this._privateKey = value.privateKey;
      this._socksPassword = value.socksPassword;
      this._socksProxy = value.socksProxy;
      this._socksUsername = value.socksUsername;
      this._username = value.username;
    }
  }

  // buffer_size - computed: false, optional: true, required: false
  private _bufferSize?: number; 
  public get bufferSize() {
    return this.getNumberAttribute('buffer_size');
  }
  public set bufferSize(value: number) {
    this._bufferSize = value;
  }
  public resetBufferSize() {
    this._bufferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferSizeInput() {
    return this._bufferSize;
  }

  // disable_concurrent_reads - computed: false, optional: true, required: false
  private _disableConcurrentReads?: boolean | cdktf.IResolvable; 
  public get disableConcurrentReads() {
    return this.getBooleanAttribute('disable_concurrent_reads');
  }
  public set disableConcurrentReads(value: boolean | cdktf.IResolvable) {
    this._disableConcurrentReads = value;
  }
  public resetDisableConcurrentReads() {
    this._disableConcurrentReads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableConcurrentReadsInput() {
    return this._disableConcurrentReads;
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // equality_check_mode - computed: false, optional: true, required: false
  private _equalityCheckMode?: number; 
  public get equalityCheckMode() {
    return this.getNumberAttribute('equality_check_mode');
  }
  public set equalityCheckMode(value: number) {
    this._equalityCheckMode = value;
  }
  public resetEqualityCheckMode() {
    this._equalityCheckMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get equalityCheckModeInput() {
    return this._equalityCheckMode;
  }

  // fingerprints - computed: false, optional: true, required: false
  private _fingerprints?: string[]; 
  public get fingerprints() {
    return this.getListAttribute('fingerprints');
  }
  public set fingerprints(value: string[]) {
    this._fingerprints = value;
  }
  public resetFingerprints() {
    this._fingerprints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fingerprintsInput() {
    return this._fingerprints;
  }

  // key_passphrase - computed: false, optional: true, required: false
  private _keyPassphrase?: string; 
  public get keyPassphrase() {
    return this.getStringAttribute('key_passphrase');
  }
  public set keyPassphrase(value: string) {
    this._keyPassphrase = value;
  }
  public resetKeyPassphrase() {
    this._keyPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPassphraseInput() {
    return this._keyPassphrase;
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

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // socks_password - computed: false, optional: true, required: false
  private _socksPassword?: string; 
  public get socksPassword() {
    return this.getStringAttribute('socks_password');
  }
  public set socksPassword(value: string) {
    this._socksPassword = value;
  }
  public resetSocksPassword() {
    this._socksPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socksPasswordInput() {
    return this._socksPassword;
  }

  // socks_proxy - computed: false, optional: true, required: false
  private _socksProxy?: string; 
  public get socksProxy() {
    return this.getStringAttribute('socks_proxy');
  }
  public set socksProxy(value: string) {
    this._socksProxy = value;
  }
  public resetSocksProxy() {
    this._socksProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socksProxyInput() {
    return this._socksProxy;
  }

  // socks_username - computed: false, optional: true, required: false
  private _socksUsername?: string; 
  public get socksUsername() {
    return this.getStringAttribute('socks_username');
  }
  public set socksUsername(value: string) {
    this._socksUsername = value;
  }
  public resetSocksUsername() {
    this._socksUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socksUsernameInput() {
    return this._socksUsername;
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
export interface UserFilesystem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#azblobconfig User#azblobconfig}
  */
  readonly azblobconfig?: UserFilesystemAzblobconfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#cryptconfig User#cryptconfig}
  */
  readonly cryptconfig?: UserFilesystemCryptconfig;
  /**
  * Available in the Enterprise edition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#ftpconfig User#ftpconfig}
  */
  readonly ftpconfig?: UserFilesystemFtpconfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#gcsconfig User#gcsconfig}
  */
  readonly gcsconfig?: UserFilesystemGcsconfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#httpconfig User#httpconfig}
  */
  readonly httpconfig?: UserFilesystemHttpconfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#osconfig User#osconfig}
  */
  readonly osconfig?: UserFilesystemOsconfig;
  /**
  * Provider. 0 = local filesystem, 1 = S3 Compatible, 2 = Google Cloud, 3 = Azure Blob, 4 = Local encrypted, 5 = SFTP, 6 = HTTP, 7 = FTP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#provider User#provider}
  */
  readonly provider: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#s3config User#s3config}
  */
  readonly s3Config?: UserFilesystemS3Config;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#sftpconfig User#sftpconfig}
  */
  readonly sftpconfig?: UserFilesystemSftpconfig;
}

export function userFilesystemToTerraform(struct?: UserFilesystem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azblobconfig: userFilesystemAzblobconfigToTerraform(struct!.azblobconfig),
    cryptconfig: userFilesystemCryptconfigToTerraform(struct!.cryptconfig),
    ftpconfig: userFilesystemFtpconfigToTerraform(struct!.ftpconfig),
    gcsconfig: userFilesystemGcsconfigToTerraform(struct!.gcsconfig),
    httpconfig: userFilesystemHttpconfigToTerraform(struct!.httpconfig),
    osconfig: userFilesystemOsconfigToTerraform(struct!.osconfig),
    provider: cdktf.numberToTerraform(struct!.provider),
    s3config: userFilesystemS3ConfigToTerraform(struct!.s3Config),
    sftpconfig: userFilesystemSftpconfigToTerraform(struct!.sftpconfig),
  }
}


export function userFilesystemToHclTerraform(struct?: UserFilesystem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azblobconfig: {
      value: userFilesystemAzblobconfigToHclTerraform(struct!.azblobconfig),
      isBlock: true,
      type: "struct",
      storageClassType: "UserFilesystemAzblobconfig",
    },
    cryptconfig: {
      value: userFilesystemCryptconfigToHclTerraform(struct!.cryptconfig),
      isBlock: true,
      type: "struct",
      storageClassType: "UserFilesystemCryptconfig",
    },
    ftpconfig: {
      value: userFilesystemFtpconfigToHclTerraform(struct!.ftpconfig),
      isBlock: true,
      type: "struct",
      storageClassType: "UserFilesystemFtpconfig",
    },
    gcsconfig: {
      value: userFilesystemGcsconfigToHclTerraform(struct!.gcsconfig),
      isBlock: true,
      type: "struct",
      storageClassType: "UserFilesystemGcsconfig",
    },
    httpconfig: {
      value: userFilesystemHttpconfigToHclTerraform(struct!.httpconfig),
      isBlock: true,
      type: "struct",
      storageClassType: "UserFilesystemHttpconfig",
    },
    osconfig: {
      value: userFilesystemOsconfigToHclTerraform(struct!.osconfig),
      isBlock: true,
      type: "struct",
      storageClassType: "UserFilesystemOsconfig",
    },
    provider: {
      value: cdktf.numberToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    s3config: {
      value: userFilesystemS3ConfigToHclTerraform(struct!.s3Config),
      isBlock: true,
      type: "struct",
      storageClassType: "UserFilesystemS3Config",
    },
    sftpconfig: {
      value: userFilesystemSftpconfigToHclTerraform(struct!.sftpconfig),
      isBlock: true,
      type: "struct",
      storageClassType: "UserFilesystemSftpconfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserFilesystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UserFilesystem | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azblobconfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azblobconfig = this._azblobconfig?.internalValue;
    }
    if (this._cryptconfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptconfig = this._cryptconfig?.internalValue;
    }
    if (this._ftpconfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ftpconfig = this._ftpconfig?.internalValue;
    }
    if (this._gcsconfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsconfig = this._gcsconfig?.internalValue;
    }
    if (this._httpconfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpconfig = this._httpconfig?.internalValue;
    }
    if (this._osconfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.osconfig = this._osconfig?.internalValue;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._s3Config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Config = this._s3Config?.internalValue;
    }
    if (this._sftpconfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sftpconfig = this._sftpconfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserFilesystem | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._azblobconfig.internalValue = undefined;
      this._cryptconfig.internalValue = undefined;
      this._ftpconfig.internalValue = undefined;
      this._gcsconfig.internalValue = undefined;
      this._httpconfig.internalValue = undefined;
      this._osconfig.internalValue = undefined;
      this._provider = undefined;
      this._s3Config.internalValue = undefined;
      this._sftpconfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._azblobconfig.internalValue = value.azblobconfig;
      this._cryptconfig.internalValue = value.cryptconfig;
      this._ftpconfig.internalValue = value.ftpconfig;
      this._gcsconfig.internalValue = value.gcsconfig;
      this._httpconfig.internalValue = value.httpconfig;
      this._osconfig.internalValue = value.osconfig;
      this._provider = value.provider;
      this._s3Config.internalValue = value.s3Config;
      this._sftpconfig.internalValue = value.sftpconfig;
    }
  }

  // azblobconfig - computed: false, optional: true, required: false
  private _azblobconfig = new UserFilesystemAzblobconfigOutputReference(this, "azblobconfig");
  public get azblobconfig() {
    return this._azblobconfig;
  }
  public putAzblobconfig(value: UserFilesystemAzblobconfig) {
    this._azblobconfig.internalValue = value;
  }
  public resetAzblobconfig() {
    this._azblobconfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azblobconfigInput() {
    return this._azblobconfig.internalValue;
  }

  // cryptconfig - computed: false, optional: true, required: false
  private _cryptconfig = new UserFilesystemCryptconfigOutputReference(this, "cryptconfig");
  public get cryptconfig() {
    return this._cryptconfig;
  }
  public putCryptconfig(value: UserFilesystemCryptconfig) {
    this._cryptconfig.internalValue = value;
  }
  public resetCryptconfig() {
    this._cryptconfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptconfigInput() {
    return this._cryptconfig.internalValue;
  }

  // ftpconfig - computed: false, optional: true, required: false
  private _ftpconfig = new UserFilesystemFtpconfigOutputReference(this, "ftpconfig");
  public get ftpconfig() {
    return this._ftpconfig;
  }
  public putFtpconfig(value: UserFilesystemFtpconfig) {
    this._ftpconfig.internalValue = value;
  }
  public resetFtpconfig() {
    this._ftpconfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpconfigInput() {
    return this._ftpconfig.internalValue;
  }

  // gcsconfig - computed: false, optional: true, required: false
  private _gcsconfig = new UserFilesystemGcsconfigOutputReference(this, "gcsconfig");
  public get gcsconfig() {
    return this._gcsconfig;
  }
  public putGcsconfig(value: UserFilesystemGcsconfig) {
    this._gcsconfig.internalValue = value;
  }
  public resetGcsconfig() {
    this._gcsconfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsconfigInput() {
    return this._gcsconfig.internalValue;
  }

  // httpconfig - computed: false, optional: true, required: false
  private _httpconfig = new UserFilesystemHttpconfigOutputReference(this, "httpconfig");
  public get httpconfig() {
    return this._httpconfig;
  }
  public putHttpconfig(value: UserFilesystemHttpconfig) {
    this._httpconfig.internalValue = value;
  }
  public resetHttpconfig() {
    this._httpconfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpconfigInput() {
    return this._httpconfig.internalValue;
  }

  // osconfig - computed: false, optional: true, required: false
  private _osconfig = new UserFilesystemOsconfigOutputReference(this, "osconfig");
  public get osconfig() {
    return this._osconfig;
  }
  public putOsconfig(value: UserFilesystemOsconfig) {
    this._osconfig.internalValue = value;
  }
  public resetOsconfig() {
    this._osconfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osconfigInput() {
    return this._osconfig.internalValue;
  }

  // provider - computed: false, optional: false, required: true
  private _provider?: number; 
  public get provider() {
    return this.getNumberAttribute('provider');
  }
  public set provider(value: number) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // s3config - computed: false, optional: true, required: false
  private _s3Config = new UserFilesystemS3ConfigOutputReference(this, "s3config");
  public get s3Config() {
    return this._s3Config;
  }
  public putS3Config(value: UserFilesystemS3Config) {
    this._s3Config.internalValue = value;
  }
  public resetS3Config() {
    this._s3Config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ConfigInput() {
    return this._s3Config.internalValue;
  }

  // sftpconfig - computed: false, optional: true, required: false
  private _sftpconfig = new UserFilesystemSftpconfigOutputReference(this, "sftpconfig");
  public get sftpconfig() {
    return this._sftpconfig;
  }
  public putSftpconfig(value: UserFilesystemSftpconfig) {
    this._sftpconfig.internalValue = value;
  }
  public resetSftpconfig() {
    this._sftpconfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sftpconfigInput() {
    return this._sftpconfig.internalValue;
  }
}
export interface UserFiltersAccessTime {
  /**
  * Day of week, 0 Sunday, 6 Saturday
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#day_of_week User#day_of_week}
  */
  readonly dayOfWeek: number;
  /**
  * Start time in HH:MM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#from User#from}
  */
  readonly from: string;
  /**
  * End time in HH:MM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#to User#to}
  */
  readonly to: string;
}

export function userFiltersAccessTimeToTerraform(struct?: UserFiltersAccessTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_week: cdktf.numberToTerraform(struct!.dayOfWeek),
    from: cdktf.stringToTerraform(struct!.from),
    to: cdktf.stringToTerraform(struct!.to),
  }
}


export function userFiltersAccessTimeToHclTerraform(struct?: UserFiltersAccessTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_week: {
      value: cdktf.numberToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to: {
      value: cdktf.stringToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserFiltersAccessTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserFiltersAccessTime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserFiltersAccessTime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dayOfWeek = undefined;
      this._from = undefined;
      this._to = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dayOfWeek = value.dayOfWeek;
      this._from = value.from;
      this._to = value.to;
    }
  }

  // day_of_week - computed: true, optional: false, required: true
  private _dayOfWeek?: number; 
  public get dayOfWeek() {
    return this.getNumberAttribute('day_of_week');
  }
  public set dayOfWeek(value: number) {
    this._dayOfWeek = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // from - computed: true, optional: false, required: true
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // to - computed: true, optional: false, required: true
  private _to?: string; 
  public get to() {
    return this.getStringAttribute('to');
  }
  public set to(value: string) {
    this._to = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}

export class UserFiltersAccessTimeList extends cdktf.ComplexList {
  public internalValue? : UserFiltersAccessTime[] | cdktf.IResolvable

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
  public get(index: number): UserFiltersAccessTimeOutputReference {
    return new UserFiltersAccessTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserFiltersBandwidthLimits {
  /**
  * Maximum download bandwidth as KB/s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#download_bandwidth User#download_bandwidth}
  */
  readonly downloadBandwidth?: number;
  /**
  * Source networks in CIDR notation as defined in RFC 4632 and RFC 4291 for example "192.0.2.0/24" or "2001:db8::/32". The limit applies if the defined networks contain the client IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#sources User#sources}
  */
  readonly sources: string[];
  /**
  * Maximum upload bandwidth as KB/s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#upload_bandwidth User#upload_bandwidth}
  */
  readonly uploadBandwidth?: number;
}

export function userFiltersBandwidthLimitsToTerraform(struct?: UserFiltersBandwidthLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    download_bandwidth: cdktf.numberToTerraform(struct!.downloadBandwidth),
    sources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sources),
    upload_bandwidth: cdktf.numberToTerraform(struct!.uploadBandwidth),
  }
}


export function userFiltersBandwidthLimitsToHclTerraform(struct?: UserFiltersBandwidthLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    download_bandwidth: {
      value: cdktf.numberToHclTerraform(struct!.downloadBandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    upload_bandwidth: {
      value: cdktf.numberToHclTerraform(struct!.uploadBandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserFiltersBandwidthLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserFiltersBandwidthLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._downloadBandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.downloadBandwidth = this._downloadBandwidth;
    }
    if (this._sources !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources;
    }
    if (this._uploadBandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.uploadBandwidth = this._uploadBandwidth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserFiltersBandwidthLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._downloadBandwidth = undefined;
      this._sources = undefined;
      this._uploadBandwidth = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._downloadBandwidth = value.downloadBandwidth;
      this._sources = value.sources;
      this._uploadBandwidth = value.uploadBandwidth;
    }
  }

  // download_bandwidth - computed: true, optional: true, required: false
  private _downloadBandwidth?: number; 
  public get downloadBandwidth() {
    return this.getNumberAttribute('download_bandwidth');
  }
  public set downloadBandwidth(value: number) {
    this._downloadBandwidth = value;
  }
  public resetDownloadBandwidth() {
    this._downloadBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadBandwidthInput() {
    return this._downloadBandwidth;
  }

  // sources - computed: true, optional: false, required: true
  private _sources?: string[]; 
  public get sources() {
    return this.getListAttribute('sources');
  }
  public set sources(value: string[]) {
    this._sources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources;
  }

  // upload_bandwidth - computed: true, optional: true, required: false
  private _uploadBandwidth?: number; 
  public get uploadBandwidth() {
    return this.getNumberAttribute('upload_bandwidth');
  }
  public set uploadBandwidth(value: number) {
    this._uploadBandwidth = value;
  }
  public resetUploadBandwidth() {
    this._uploadBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadBandwidthInput() {
    return this._uploadBandwidth;
  }
}

export class UserFiltersBandwidthLimitsList extends cdktf.ComplexList {
  public internalValue? : UserFiltersBandwidthLimits[] | cdktf.IResolvable

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
  public get(index: number): UserFiltersBandwidthLimitsOutputReference {
    return new UserFiltersBandwidthLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserFiltersFilePatterns {
  /**
  * Files/directories with these, case insensitive, patterns are allowed. Allowed file patterns are evaluated before the denied ones.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#allowed_patterns User#allowed_patterns}
  */
  readonly allowedPatterns?: string[];
  /**
  * Files/directories with these, case insensitive, patterns are not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#denied_patterns User#denied_patterns}
  */
  readonly deniedPatterns?: string[];
  /**
  * Set to 1 to hide denied files/directories in directory listing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#deny_policy User#deny_policy}
  */
  readonly denyPolicy?: number;
  /**
  * Virtual path, if no other specific filter is defined, the filter applies for sub directories too.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#path User#path}
  */
  readonly path: string;
}

export function userFiltersFilePatternsToTerraform(struct?: UserFiltersFilePatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedPatterns),
    denied_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deniedPatterns),
    deny_policy: cdktf.numberToTerraform(struct!.denyPolicy),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function userFiltersFilePatternsToHclTerraform(struct?: UserFiltersFilePatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedPatterns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    denied_patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.deniedPatterns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    deny_policy: {
      value: cdktf.numberToHclTerraform(struct!.denyPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserFiltersFilePatternsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserFiltersFilePatterns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedPatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedPatterns = this._allowedPatterns;
    }
    if (this._deniedPatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.deniedPatterns = this._deniedPatterns;
    }
    if (this._denyPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyPolicy = this._denyPolicy;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserFiltersFilePatterns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedPatterns = undefined;
      this._deniedPatterns = undefined;
      this._denyPolicy = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedPatterns = value.allowedPatterns;
      this._deniedPatterns = value.deniedPatterns;
      this._denyPolicy = value.denyPolicy;
      this._path = value.path;
    }
  }

  // allowed_patterns - computed: true, optional: true, required: false
  private _allowedPatterns?: string[]; 
  public get allowedPatterns() {
    return this.getListAttribute('allowed_patterns');
  }
  public set allowedPatterns(value: string[]) {
    this._allowedPatterns = value;
  }
  public resetAllowedPatterns() {
    this._allowedPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedPatternsInput() {
    return this._allowedPatterns;
  }

  // denied_patterns - computed: true, optional: true, required: false
  private _deniedPatterns?: string[]; 
  public get deniedPatterns() {
    return this.getListAttribute('denied_patterns');
  }
  public set deniedPatterns(value: string[]) {
    this._deniedPatterns = value;
  }
  public resetDeniedPatterns() {
    this._deniedPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deniedPatternsInput() {
    return this._deniedPatterns;
  }

  // deny_policy - computed: true, optional: true, required: false
  private _denyPolicy?: number; 
  public get denyPolicy() {
    return this.getNumberAttribute('deny_policy');
  }
  public set denyPolicy(value: number) {
    this._denyPolicy = value;
  }
  public resetDenyPolicy() {
    this._denyPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyPolicyInput() {
    return this._denyPolicy;
  }

  // path - computed: true, optional: false, required: true
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
}

export class UserFiltersFilePatternsList extends cdktf.ComplexList {
  public internalValue? : UserFiltersFilePatterns[] | cdktf.IResolvable

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
  public get(index: number): UserFiltersFilePatternsOutputReference {
    return new UserFiltersFilePatternsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserFiltersPasswordPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#digits User#digits}
  */
  readonly digits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#length User#length}
  */
  readonly length?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#lowers User#lowers}
  */
  readonly lowers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#specials User#specials}
  */
  readonly specials?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#uppers User#uppers}
  */
  readonly uppers?: number;
}

export function userFiltersPasswordPolicyToTerraform(struct?: UserFiltersPasswordPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    digits: cdktf.numberToTerraform(struct!.digits),
    length: cdktf.numberToTerraform(struct!.length),
    lowers: cdktf.numberToTerraform(struct!.lowers),
    specials: cdktf.numberToTerraform(struct!.specials),
    uppers: cdktf.numberToTerraform(struct!.uppers),
  }
}


export function userFiltersPasswordPolicyToHclTerraform(struct?: UserFiltersPasswordPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    digits: {
      value: cdktf.numberToHclTerraform(struct!.digits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lowers: {
      value: cdktf.numberToHclTerraform(struct!.lowers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    specials: {
      value: cdktf.numberToHclTerraform(struct!.specials),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uppers: {
      value: cdktf.numberToHclTerraform(struct!.uppers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserFiltersPasswordPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UserFiltersPasswordPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._digits !== undefined) {
      hasAnyValues = true;
      internalValueResult.digits = this._digits;
    }
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    if (this._lowers !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowers = this._lowers;
    }
    if (this._specials !== undefined) {
      hasAnyValues = true;
      internalValueResult.specials = this._specials;
    }
    if (this._uppers !== undefined) {
      hasAnyValues = true;
      internalValueResult.uppers = this._uppers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserFiltersPasswordPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._digits = undefined;
      this._length = undefined;
      this._lowers = undefined;
      this._specials = undefined;
      this._uppers = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._digits = value.digits;
      this._length = value.length;
      this._lowers = value.lowers;
      this._specials = value.specials;
      this._uppers = value.uppers;
    }
  }

  // digits - computed: true, optional: true, required: false
  private _digits?: number; 
  public get digits() {
    return this.getNumberAttribute('digits');
  }
  public set digits(value: number) {
    this._digits = value;
  }
  public resetDigits() {
    this._digits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digitsInput() {
    return this._digits;
  }

  // length - computed: true, optional: true, required: false
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  public resetLength() {
    this._length = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }

  // lowers - computed: true, optional: true, required: false
  private _lowers?: number; 
  public get lowers() {
    return this.getNumberAttribute('lowers');
  }
  public set lowers(value: number) {
    this._lowers = value;
  }
  public resetLowers() {
    this._lowers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowersInput() {
    return this._lowers;
  }

  // specials - computed: true, optional: true, required: false
  private _specials?: number; 
  public get specials() {
    return this.getNumberAttribute('specials');
  }
  public set specials(value: number) {
    this._specials = value;
  }
  public resetSpecials() {
    this._specials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specialsInput() {
    return this._specials;
  }

  // uppers - computed: true, optional: true, required: false
  private _uppers?: number; 
  public get uppers() {
    return this.getNumberAttribute('uppers');
  }
  public set uppers(value: number) {
    this._uppers = value;
  }
  public resetUppers() {
    this._uppers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uppersInput() {
    return this._uppers;
  }
}
export interface UserFilters {
  /**
  * Time periods in which access is allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#access_time User#access_time}
  */
  readonly accessTime?: UserFiltersAccessTime[] | cdktf.IResolvable;
  /**
  * Additional email addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#additional_emails User#additional_emails}
  */
  readonly additionalEmails?: string[];
  /**
  * If set, API Key authentication is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#allow_api_key_auth User#allow_api_key_auth}
  */
  readonly allowApiKeyAuth?: boolean | cdktf.IResolvable;
  /**
  * Only connections from these IP/Mask are allowed. IP/Mask must be in CIDR notation as defined in RFC 4632 and RFC 4291 for example "192.0.2.0/24" or "2001:db8::/32"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#allowed_ip User#allowed_ip}
  */
  readonly allowedIp?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#bandwidth_limits User#bandwidth_limits}
  */
  readonly bandwidthLimits?: UserFiltersBandwidthLimits[] | cdktf.IResolvable;
  /**
  * If set, check password hook will not be executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#check_password_disabled User#check_password_disabled}
  */
  readonly checkPasswordDisabled?: boolean | cdktf.IResolvable;
  /**
  * An extra placeholder value available for use in group configurations. It can be referenced as %custom1%. Available in the Enterprise edition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#custom1 User#custom1}
  */
  readonly custom1?: string;
  /**
  * Default expiration for newly created shares as number of days. Not set means no default expiration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#default_shares_expiration User#default_shares_expiration}
  */
  readonly defaultSharesExpiration?: number;
  /**
  * Connections from these IP/Mask are allowed. Denied rules will be evaluated before allowed ones.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#denied_ip User#denied_ip}
  */
  readonly deniedIp?: string[];
  /**
  * Disabled login methods. Valid values: "publickey", "password", "password-over-SSH", "keyboard-interactive", "publickey+password", "publickey+keyboard-interactive", "TLSCertificate", "TLSCertificate+password"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#denied_login_methods User#denied_login_methods}
  */
  readonly deniedLoginMethods?: string[];
  /**
  * Disabled protocols. Valid values: SSH, FTP, DAV, HTTP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#denied_protocols User#denied_protocols}
  */
  readonly deniedProtocols?: string[];
  /**
  * Disable checks for existence and automatic creation of home directory and virtual folders after user login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#disable_fs_checks User#disable_fs_checks}
  */
  readonly disableFsChecks?: boolean | cdktf.IResolvable;
  /**
  * If enabled, only secure algorithms are allowed. This setting is currently enforced for SSH/SFTP. Available in the Enterprise edition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#enforce_secure_algorithms User#enforce_secure_algorithms}
  */
  readonly enforceSecureAlgorithms?: boolean | cdktf.IResolvable;
  /**
  * Defines the cache time, in seconds, for users authenticated using an external auth hook. Not set means no cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#external_auth_cache_time User#external_auth_cache_time}
  */
  readonly externalAuthCacheTime?: number;
  /**
  * If set, external auth hook will not be executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#external_auth_disabled User#external_auth_disabled}
  */
  readonly externalAuthDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#file_patterns User#file_patterns}
  */
  readonly filePatterns?: UserFiltersFilePatterns[] | cdktf.IResolvable;
  /**
  * FTP security mode. Set to 1 to require TLS for both data and control connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#ftp_security User#ftp_security}
  */
  readonly ftpSecurity?: number;
  /**
  * If enabled the user can login with any password or no password at all. Anonymous users are supported for FTP and WebDAV protocols and permissions will be automatically set to "list" and "download" (read only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#is_anonymous User#is_anonymous}
  */
  readonly isAnonymous?: boolean | cdktf.IResolvable;
  /**
  * Maximum allowed expiration, as a number of days, when a user creates or updates a share. Not set means that non-expiring shares are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#max_shares_expiration User#max_shares_expiration}
  */
  readonly maxSharesExpiration?: number;
  /**
  * Max size allowed for a single upload. Unset means no limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#max_upload_file_size User#max_upload_file_size}
  */
  readonly maxUploadFileSize?: number;
  /**
  * The password expires after the defined number of days. Not set means no expiration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#password_expiration User#password_expiration}
  */
  readonly passwordExpiration?: number;
  /**
  * Static password complexity requirements. Whenever possible, prefer using the entropy-based approach provided by password_strength. Available in the Enterprise edition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#password_policy User#password_policy}
  */
  readonly passwordPolicy?: UserFiltersPasswordPolicy;
  /**
  * Minimum password strength. Not set means disabled, any password will be accepted. Values in the 50-70 range are suggested for common use cases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#password_strength User#password_strength}
  */
  readonly passwordStrength?: number;
  /**
  * If set, external pre-login hook will not be executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#pre_login_disabled User#pre_login_disabled}
  */
  readonly preLoginDisabled?: boolean | cdktf.IResolvable;
  /**
  * If set, user must change their password from WebClient/REST API at next login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#require_password_change User#require_password_change}
  */
  readonly requirePasswordChange?: boolean | cdktf.IResolvable;
  /**
  * Alternate starting directory. If not set, the default is "/". This option is supported for SFTP/SCP, FTP and HTTP (WebClient/REST API) protocols. Relative paths will use this directory as base.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#start_directory User#start_directory}
  */
  readonly startDirectory?: string;
  /**
  * TLS certificates for mutual authentication. If provided will be checked before TLS username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#tls_certs User#tls_certs}
  */
  readonly tlsCerts?: string[];
  /**
  * TLS certificate attribute to use as username. For FTP clients it must match the name provided using the "USER" command. For WebDAV, if no username is provided, the CN will be used as username. For WebDAV clients it must match the implicit or provided username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#tls_username User#tls_username}
  */
  readonly tlsUsername?: string;
  /**
  * Defines protocols that require two factor authentication. Valid values: SSH, FTP, HTTP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#two_factor_protocols User#two_factor_protocols}
  */
  readonly twoFactorProtocols?: string[];
  /**
  * Hint for authentication plugins. Valid values: LDAPUser, OSUser
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#user_type User#user_type}
  */
  readonly userType?: string;
  /**
  * Web Client/user REST API restrictions. Valid values: write-disabled, password-change-disabled, password-reset-disabled, publickey-change-disabled, tls-cert-change-disabled, mfa-disabled, api-key-auth-change-disabled, info-change-disabled, shares-disabled, shares-without-password-disabled, shares-require-email-auth, wopi-disabled, rest-api-disabled. Only available in the Enterprise version: shares-require-email-auth, wopi-disabled, rest-api-disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#web_client User#web_client}
  */
  readonly webClient?: string[];
}

export function userFiltersToTerraform(struct?: UserFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_time: cdktf.listMapper(userFiltersAccessTimeToTerraform, false)(struct!.accessTime),
    additional_emails: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalEmails),
    allow_api_key_auth: cdktf.booleanToTerraform(struct!.allowApiKeyAuth),
    allowed_ip: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedIp),
    bandwidth_limits: cdktf.listMapper(userFiltersBandwidthLimitsToTerraform, false)(struct!.bandwidthLimits),
    check_password_disabled: cdktf.booleanToTerraform(struct!.checkPasswordDisabled),
    custom1: cdktf.stringToTerraform(struct!.custom1),
    default_shares_expiration: cdktf.numberToTerraform(struct!.defaultSharesExpiration),
    denied_ip: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deniedIp),
    denied_login_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deniedLoginMethods),
    denied_protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deniedProtocols),
    disable_fs_checks: cdktf.booleanToTerraform(struct!.disableFsChecks),
    enforce_secure_algorithms: cdktf.booleanToTerraform(struct!.enforceSecureAlgorithms),
    external_auth_cache_time: cdktf.numberToTerraform(struct!.externalAuthCacheTime),
    external_auth_disabled: cdktf.booleanToTerraform(struct!.externalAuthDisabled),
    file_patterns: cdktf.listMapper(userFiltersFilePatternsToTerraform, false)(struct!.filePatterns),
    ftp_security: cdktf.numberToTerraform(struct!.ftpSecurity),
    is_anonymous: cdktf.booleanToTerraform(struct!.isAnonymous),
    max_shares_expiration: cdktf.numberToTerraform(struct!.maxSharesExpiration),
    max_upload_file_size: cdktf.numberToTerraform(struct!.maxUploadFileSize),
    password_expiration: cdktf.numberToTerraform(struct!.passwordExpiration),
    password_policy: userFiltersPasswordPolicyToTerraform(struct!.passwordPolicy),
    password_strength: cdktf.numberToTerraform(struct!.passwordStrength),
    pre_login_disabled: cdktf.booleanToTerraform(struct!.preLoginDisabled),
    require_password_change: cdktf.booleanToTerraform(struct!.requirePasswordChange),
    start_directory: cdktf.stringToTerraform(struct!.startDirectory),
    tls_certs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tlsCerts),
    tls_username: cdktf.stringToTerraform(struct!.tlsUsername),
    two_factor_protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.twoFactorProtocols),
    user_type: cdktf.stringToTerraform(struct!.userType),
    web_client: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.webClient),
  }
}


export function userFiltersToHclTerraform(struct?: UserFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_time: {
      value: cdktf.listMapperHcl(userFiltersAccessTimeToHclTerraform, false)(struct!.accessTime),
      isBlock: true,
      type: "list",
      storageClassType: "UserFiltersAccessTimeList",
    },
    additional_emails: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalEmails),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allow_api_key_auth: {
      value: cdktf.booleanToHclTerraform(struct!.allowApiKeyAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allowed_ip: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedIp),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    bandwidth_limits: {
      value: cdktf.listMapperHcl(userFiltersBandwidthLimitsToHclTerraform, false)(struct!.bandwidthLimits),
      isBlock: true,
      type: "list",
      storageClassType: "UserFiltersBandwidthLimitsList",
    },
    check_password_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.checkPasswordDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom1: {
      value: cdktf.stringToHclTerraform(struct!.custom1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_shares_expiration: {
      value: cdktf.numberToHclTerraform(struct!.defaultSharesExpiration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    denied_ip: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.deniedIp),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    denied_login_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.deniedLoginMethods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    denied_protocols: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.deniedProtocols),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    disable_fs_checks: {
      value: cdktf.booleanToHclTerraform(struct!.disableFsChecks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enforce_secure_algorithms: {
      value: cdktf.booleanToHclTerraform(struct!.enforceSecureAlgorithms),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    external_auth_cache_time: {
      value: cdktf.numberToHclTerraform(struct!.externalAuthCacheTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    external_auth_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.externalAuthDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    file_patterns: {
      value: cdktf.listMapperHcl(userFiltersFilePatternsToHclTerraform, false)(struct!.filePatterns),
      isBlock: true,
      type: "list",
      storageClassType: "UserFiltersFilePatternsList",
    },
    ftp_security: {
      value: cdktf.numberToHclTerraform(struct!.ftpSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_anonymous: {
      value: cdktf.booleanToHclTerraform(struct!.isAnonymous),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_shares_expiration: {
      value: cdktf.numberToHclTerraform(struct!.maxSharesExpiration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_upload_file_size: {
      value: cdktf.numberToHclTerraform(struct!.maxUploadFileSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password_expiration: {
      value: cdktf.numberToHclTerraform(struct!.passwordExpiration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password_policy: {
      value: userFiltersPasswordPolicyToHclTerraform(struct!.passwordPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "UserFiltersPasswordPolicy",
    },
    password_strength: {
      value: cdktf.numberToHclTerraform(struct!.passwordStrength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pre_login_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.preLoginDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_password_change: {
      value: cdktf.booleanToHclTerraform(struct!.requirePasswordChange),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    start_directory: {
      value: cdktf.stringToHclTerraform(struct!.startDirectory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_certs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tlsCerts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tls_username: {
      value: cdktf.stringToHclTerraform(struct!.tlsUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    two_factor_protocols: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.twoFactorProtocols),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    user_type: {
      value: cdktf.stringToHclTerraform(struct!.userType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_client: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.webClient),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UserFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTime = this._accessTime?.internalValue;
    }
    if (this._additionalEmails !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalEmails = this._additionalEmails;
    }
    if (this._allowApiKeyAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowApiKeyAuth = this._allowApiKeyAuth;
    }
    if (this._allowedIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedIp = this._allowedIp;
    }
    if (this._bandwidthLimits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthLimits = this._bandwidthLimits?.internalValue;
    }
    if (this._checkPasswordDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPasswordDisabled = this._checkPasswordDisabled;
    }
    if (this._custom1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom1 = this._custom1;
    }
    if (this._defaultSharesExpiration !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSharesExpiration = this._defaultSharesExpiration;
    }
    if (this._deniedIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.deniedIp = this._deniedIp;
    }
    if (this._deniedLoginMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.deniedLoginMethods = this._deniedLoginMethods;
    }
    if (this._deniedProtocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.deniedProtocols = this._deniedProtocols;
    }
    if (this._disableFsChecks !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableFsChecks = this._disableFsChecks;
    }
    if (this._enforceSecureAlgorithms !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceSecureAlgorithms = this._enforceSecureAlgorithms;
    }
    if (this._externalAuthCacheTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalAuthCacheTime = this._externalAuthCacheTime;
    }
    if (this._externalAuthDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalAuthDisabled = this._externalAuthDisabled;
    }
    if (this._filePatterns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filePatterns = this._filePatterns?.internalValue;
    }
    if (this._ftpSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.ftpSecurity = this._ftpSecurity;
    }
    if (this._isAnonymous !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAnonymous = this._isAnonymous;
    }
    if (this._maxSharesExpiration !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSharesExpiration = this._maxSharesExpiration;
    }
    if (this._maxUploadFileSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUploadFileSize = this._maxUploadFileSize;
    }
    if (this._passwordExpiration !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordExpiration = this._passwordExpiration;
    }
    if (this._passwordPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordPolicy = this._passwordPolicy?.internalValue;
    }
    if (this._passwordStrength !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordStrength = this._passwordStrength;
    }
    if (this._preLoginDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.preLoginDisabled = this._preLoginDisabled;
    }
    if (this._requirePasswordChange !== undefined) {
      hasAnyValues = true;
      internalValueResult.requirePasswordChange = this._requirePasswordChange;
    }
    if (this._startDirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDirectory = this._startDirectory;
    }
    if (this._tlsCerts !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCerts = this._tlsCerts;
    }
    if (this._tlsUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsUsername = this._tlsUsername;
    }
    if (this._twoFactorProtocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.twoFactorProtocols = this._twoFactorProtocols;
    }
    if (this._userType !== undefined) {
      hasAnyValues = true;
      internalValueResult.userType = this._userType;
    }
    if (this._webClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.webClient = this._webClient;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessTime.internalValue = undefined;
      this._additionalEmails = undefined;
      this._allowApiKeyAuth = undefined;
      this._allowedIp = undefined;
      this._bandwidthLimits.internalValue = undefined;
      this._checkPasswordDisabled = undefined;
      this._custom1 = undefined;
      this._defaultSharesExpiration = undefined;
      this._deniedIp = undefined;
      this._deniedLoginMethods = undefined;
      this._deniedProtocols = undefined;
      this._disableFsChecks = undefined;
      this._enforceSecureAlgorithms = undefined;
      this._externalAuthCacheTime = undefined;
      this._externalAuthDisabled = undefined;
      this._filePatterns.internalValue = undefined;
      this._ftpSecurity = undefined;
      this._isAnonymous = undefined;
      this._maxSharesExpiration = undefined;
      this._maxUploadFileSize = undefined;
      this._passwordExpiration = undefined;
      this._passwordPolicy.internalValue = undefined;
      this._passwordStrength = undefined;
      this._preLoginDisabled = undefined;
      this._requirePasswordChange = undefined;
      this._startDirectory = undefined;
      this._tlsCerts = undefined;
      this._tlsUsername = undefined;
      this._twoFactorProtocols = undefined;
      this._userType = undefined;
      this._webClient = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessTime.internalValue = value.accessTime;
      this._additionalEmails = value.additionalEmails;
      this._allowApiKeyAuth = value.allowApiKeyAuth;
      this._allowedIp = value.allowedIp;
      this._bandwidthLimits.internalValue = value.bandwidthLimits;
      this._checkPasswordDisabled = value.checkPasswordDisabled;
      this._custom1 = value.custom1;
      this._defaultSharesExpiration = value.defaultSharesExpiration;
      this._deniedIp = value.deniedIp;
      this._deniedLoginMethods = value.deniedLoginMethods;
      this._deniedProtocols = value.deniedProtocols;
      this._disableFsChecks = value.disableFsChecks;
      this._enforceSecureAlgorithms = value.enforceSecureAlgorithms;
      this._externalAuthCacheTime = value.externalAuthCacheTime;
      this._externalAuthDisabled = value.externalAuthDisabled;
      this._filePatterns.internalValue = value.filePatterns;
      this._ftpSecurity = value.ftpSecurity;
      this._isAnonymous = value.isAnonymous;
      this._maxSharesExpiration = value.maxSharesExpiration;
      this._maxUploadFileSize = value.maxUploadFileSize;
      this._passwordExpiration = value.passwordExpiration;
      this._passwordPolicy.internalValue = value.passwordPolicy;
      this._passwordStrength = value.passwordStrength;
      this._preLoginDisabled = value.preLoginDisabled;
      this._requirePasswordChange = value.requirePasswordChange;
      this._startDirectory = value.startDirectory;
      this._tlsCerts = value.tlsCerts;
      this._tlsUsername = value.tlsUsername;
      this._twoFactorProtocols = value.twoFactorProtocols;
      this._userType = value.userType;
      this._webClient = value.webClient;
    }
  }

  // access_time - computed: true, optional: true, required: false
  private _accessTime = new UserFiltersAccessTimeList(this, "access_time", false);
  public get accessTime() {
    return this._accessTime;
  }
  public putAccessTime(value: UserFiltersAccessTime[] | cdktf.IResolvable) {
    this._accessTime.internalValue = value;
  }
  public resetAccessTime() {
    this._accessTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTimeInput() {
    return this._accessTime.internalValue;
  }

  // additional_emails - computed: true, optional: true, required: false
  private _additionalEmails?: string[]; 
  public get additionalEmails() {
    return this.getListAttribute('additional_emails');
  }
  public set additionalEmails(value: string[]) {
    this._additionalEmails = value;
  }
  public resetAdditionalEmails() {
    this._additionalEmails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalEmailsInput() {
    return this._additionalEmails;
  }

  // allow_api_key_auth - computed: true, optional: true, required: false
  private _allowApiKeyAuth?: boolean | cdktf.IResolvable; 
  public get allowApiKeyAuth() {
    return this.getBooleanAttribute('allow_api_key_auth');
  }
  public set allowApiKeyAuth(value: boolean | cdktf.IResolvable) {
    this._allowApiKeyAuth = value;
  }
  public resetAllowApiKeyAuth() {
    this._allowApiKeyAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowApiKeyAuthInput() {
    return this._allowApiKeyAuth;
  }

  // allowed_ip - computed: true, optional: true, required: false
  private _allowedIp?: string[]; 
  public get allowedIp() {
    return this.getListAttribute('allowed_ip');
  }
  public set allowedIp(value: string[]) {
    this._allowedIp = value;
  }
  public resetAllowedIp() {
    this._allowedIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedIpInput() {
    return this._allowedIp;
  }

  // bandwidth_limits - computed: true, optional: true, required: false
  private _bandwidthLimits = new UserFiltersBandwidthLimitsList(this, "bandwidth_limits", false);
  public get bandwidthLimits() {
    return this._bandwidthLimits;
  }
  public putBandwidthLimits(value: UserFiltersBandwidthLimits[] | cdktf.IResolvable) {
    this._bandwidthLimits.internalValue = value;
  }
  public resetBandwidthLimits() {
    this._bandwidthLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthLimitsInput() {
    return this._bandwidthLimits.internalValue;
  }

  // check_password_disabled - computed: true, optional: true, required: false
  private _checkPasswordDisabled?: boolean | cdktf.IResolvable; 
  public get checkPasswordDisabled() {
    return this.getBooleanAttribute('check_password_disabled');
  }
  public set checkPasswordDisabled(value: boolean | cdktf.IResolvable) {
    this._checkPasswordDisabled = value;
  }
  public resetCheckPasswordDisabled() {
    this._checkPasswordDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPasswordDisabledInput() {
    return this._checkPasswordDisabled;
  }

  // custom1 - computed: true, optional: true, required: false
  private _custom1?: string; 
  public get custom1() {
    return this.getStringAttribute('custom1');
  }
  public set custom1(value: string) {
    this._custom1 = value;
  }
  public resetCustom1() {
    this._custom1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get custom1Input() {
    return this._custom1;
  }

  // default_shares_expiration - computed: true, optional: true, required: false
  private _defaultSharesExpiration?: number; 
  public get defaultSharesExpiration() {
    return this.getNumberAttribute('default_shares_expiration');
  }
  public set defaultSharesExpiration(value: number) {
    this._defaultSharesExpiration = value;
  }
  public resetDefaultSharesExpiration() {
    this._defaultSharesExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSharesExpirationInput() {
    return this._defaultSharesExpiration;
  }

  // denied_ip - computed: true, optional: true, required: false
  private _deniedIp?: string[]; 
  public get deniedIp() {
    return this.getListAttribute('denied_ip');
  }
  public set deniedIp(value: string[]) {
    this._deniedIp = value;
  }
  public resetDeniedIp() {
    this._deniedIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deniedIpInput() {
    return this._deniedIp;
  }

  // denied_login_methods - computed: true, optional: true, required: false
  private _deniedLoginMethods?: string[]; 
  public get deniedLoginMethods() {
    return this.getListAttribute('denied_login_methods');
  }
  public set deniedLoginMethods(value: string[]) {
    this._deniedLoginMethods = value;
  }
  public resetDeniedLoginMethods() {
    this._deniedLoginMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deniedLoginMethodsInput() {
    return this._deniedLoginMethods;
  }

  // denied_protocols - computed: true, optional: true, required: false
  private _deniedProtocols?: string[]; 
  public get deniedProtocols() {
    return this.getListAttribute('denied_protocols');
  }
  public set deniedProtocols(value: string[]) {
    this._deniedProtocols = value;
  }
  public resetDeniedProtocols() {
    this._deniedProtocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deniedProtocolsInput() {
    return this._deniedProtocols;
  }

  // disable_fs_checks - computed: true, optional: true, required: false
  private _disableFsChecks?: boolean | cdktf.IResolvable; 
  public get disableFsChecks() {
    return this.getBooleanAttribute('disable_fs_checks');
  }
  public set disableFsChecks(value: boolean | cdktf.IResolvable) {
    this._disableFsChecks = value;
  }
  public resetDisableFsChecks() {
    this._disableFsChecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableFsChecksInput() {
    return this._disableFsChecks;
  }

  // enforce_secure_algorithms - computed: true, optional: true, required: false
  private _enforceSecureAlgorithms?: boolean | cdktf.IResolvable; 
  public get enforceSecureAlgorithms() {
    return this.getBooleanAttribute('enforce_secure_algorithms');
  }
  public set enforceSecureAlgorithms(value: boolean | cdktf.IResolvable) {
    this._enforceSecureAlgorithms = value;
  }
  public resetEnforceSecureAlgorithms() {
    this._enforceSecureAlgorithms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceSecureAlgorithmsInput() {
    return this._enforceSecureAlgorithms;
  }

  // external_auth_cache_time - computed: true, optional: true, required: false
  private _externalAuthCacheTime?: number; 
  public get externalAuthCacheTime() {
    return this.getNumberAttribute('external_auth_cache_time');
  }
  public set externalAuthCacheTime(value: number) {
    this._externalAuthCacheTime = value;
  }
  public resetExternalAuthCacheTime() {
    this._externalAuthCacheTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalAuthCacheTimeInput() {
    return this._externalAuthCacheTime;
  }

  // external_auth_disabled - computed: true, optional: true, required: false
  private _externalAuthDisabled?: boolean | cdktf.IResolvable; 
  public get externalAuthDisabled() {
    return this.getBooleanAttribute('external_auth_disabled');
  }
  public set externalAuthDisabled(value: boolean | cdktf.IResolvable) {
    this._externalAuthDisabled = value;
  }
  public resetExternalAuthDisabled() {
    this._externalAuthDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalAuthDisabledInput() {
    return this._externalAuthDisabled;
  }

  // file_patterns - computed: true, optional: true, required: false
  private _filePatterns = new UserFiltersFilePatternsList(this, "file_patterns", false);
  public get filePatterns() {
    return this._filePatterns;
  }
  public putFilePatterns(value: UserFiltersFilePatterns[] | cdktf.IResolvable) {
    this._filePatterns.internalValue = value;
  }
  public resetFilePatterns() {
    this._filePatterns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filePatternsInput() {
    return this._filePatterns.internalValue;
  }

  // ftp_security - computed: true, optional: true, required: false
  private _ftpSecurity?: number; 
  public get ftpSecurity() {
    return this.getNumberAttribute('ftp_security');
  }
  public set ftpSecurity(value: number) {
    this._ftpSecurity = value;
  }
  public resetFtpSecurity() {
    this._ftpSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpSecurityInput() {
    return this._ftpSecurity;
  }

  // is_anonymous - computed: true, optional: true, required: false
  private _isAnonymous?: boolean | cdktf.IResolvable; 
  public get isAnonymous() {
    return this.getBooleanAttribute('is_anonymous');
  }
  public set isAnonymous(value: boolean | cdktf.IResolvable) {
    this._isAnonymous = value;
  }
  public resetIsAnonymous() {
    this._isAnonymous = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAnonymousInput() {
    return this._isAnonymous;
  }

  // max_shares_expiration - computed: true, optional: true, required: false
  private _maxSharesExpiration?: number; 
  public get maxSharesExpiration() {
    return this.getNumberAttribute('max_shares_expiration');
  }
  public set maxSharesExpiration(value: number) {
    this._maxSharesExpiration = value;
  }
  public resetMaxSharesExpiration() {
    this._maxSharesExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSharesExpirationInput() {
    return this._maxSharesExpiration;
  }

  // max_upload_file_size - computed: true, optional: true, required: false
  private _maxUploadFileSize?: number; 
  public get maxUploadFileSize() {
    return this.getNumberAttribute('max_upload_file_size');
  }
  public set maxUploadFileSize(value: number) {
    this._maxUploadFileSize = value;
  }
  public resetMaxUploadFileSize() {
    this._maxUploadFileSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUploadFileSizeInput() {
    return this._maxUploadFileSize;
  }

  // password_expiration - computed: true, optional: true, required: false
  private _passwordExpiration?: number; 
  public get passwordExpiration() {
    return this.getNumberAttribute('password_expiration');
  }
  public set passwordExpiration(value: number) {
    this._passwordExpiration = value;
  }
  public resetPasswordExpiration() {
    this._passwordExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordExpirationInput() {
    return this._passwordExpiration;
  }

  // password_policy - computed: true, optional: true, required: false
  private _passwordPolicy = new UserFiltersPasswordPolicyOutputReference(this, "password_policy");
  public get passwordPolicy() {
    return this._passwordPolicy;
  }
  public putPasswordPolicy(value: UserFiltersPasswordPolicy) {
    this._passwordPolicy.internalValue = value;
  }
  public resetPasswordPolicy() {
    this._passwordPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordPolicyInput() {
    return this._passwordPolicy.internalValue;
  }

  // password_strength - computed: true, optional: true, required: false
  private _passwordStrength?: number; 
  public get passwordStrength() {
    return this.getNumberAttribute('password_strength');
  }
  public set passwordStrength(value: number) {
    this._passwordStrength = value;
  }
  public resetPasswordStrength() {
    this._passwordStrength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordStrengthInput() {
    return this._passwordStrength;
  }

  // pre_login_disabled - computed: true, optional: true, required: false
  private _preLoginDisabled?: boolean | cdktf.IResolvable; 
  public get preLoginDisabled() {
    return this.getBooleanAttribute('pre_login_disabled');
  }
  public set preLoginDisabled(value: boolean | cdktf.IResolvable) {
    this._preLoginDisabled = value;
  }
  public resetPreLoginDisabled() {
    this._preLoginDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preLoginDisabledInput() {
    return this._preLoginDisabled;
  }

  // require_password_change - computed: true, optional: true, required: false
  private _requirePasswordChange?: boolean | cdktf.IResolvable; 
  public get requirePasswordChange() {
    return this.getBooleanAttribute('require_password_change');
  }
  public set requirePasswordChange(value: boolean | cdktf.IResolvable) {
    this._requirePasswordChange = value;
  }
  public resetRequirePasswordChange() {
    this._requirePasswordChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirePasswordChangeInput() {
    return this._requirePasswordChange;
  }

  // start_directory - computed: true, optional: true, required: false
  private _startDirectory?: string; 
  public get startDirectory() {
    return this.getStringAttribute('start_directory');
  }
  public set startDirectory(value: string) {
    this._startDirectory = value;
  }
  public resetStartDirectory() {
    this._startDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDirectoryInput() {
    return this._startDirectory;
  }

  // tls_certs - computed: true, optional: true, required: false
  private _tlsCerts?: string[]; 
  public get tlsCerts() {
    return this.getListAttribute('tls_certs');
  }
  public set tlsCerts(value: string[]) {
    this._tlsCerts = value;
  }
  public resetTlsCerts() {
    this._tlsCerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertsInput() {
    return this._tlsCerts;
  }

  // tls_username - computed: true, optional: true, required: false
  private _tlsUsername?: string; 
  public get tlsUsername() {
    return this.getStringAttribute('tls_username');
  }
  public set tlsUsername(value: string) {
    this._tlsUsername = value;
  }
  public resetTlsUsername() {
    this._tlsUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsUsernameInput() {
    return this._tlsUsername;
  }

  // two_factor_protocols - computed: true, optional: true, required: false
  private _twoFactorProtocols?: string[]; 
  public get twoFactorProtocols() {
    return this.getListAttribute('two_factor_protocols');
  }
  public set twoFactorProtocols(value: string[]) {
    this._twoFactorProtocols = value;
  }
  public resetTwoFactorProtocols() {
    this._twoFactorProtocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoFactorProtocolsInput() {
    return this._twoFactorProtocols;
  }

  // user_type - computed: true, optional: true, required: false
  private _userType?: string; 
  public get userType() {
    return this.getStringAttribute('user_type');
  }
  public set userType(value: string) {
    this._userType = value;
  }
  public resetUserType() {
    this._userType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTypeInput() {
    return this._userType;
  }

  // web_client - computed: true, optional: true, required: false
  private _webClient?: string[]; 
  public get webClient() {
    return this.getListAttribute('web_client');
  }
  public set webClient(value: string[]) {
    this._webClient = value;
  }
  public resetWebClient() {
    this._webClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webClientInput() {
    return this._webClient;
  }
}
export interface UserGroups {
  /**
  * Group name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#name User#name}
  */
  readonly name: string;
  /**
  * Group type. 1 = Primary, 2 = Secondary, 3 = Membership only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#type User#type}
  */
  readonly type: number;
}

export function userGroupsToTerraform(struct?: UserGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.numberToTerraform(struct!.type),
  }
}


export function userGroupsToHclTerraform(struct?: UserGroups | cdktf.IResolvable): any {
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
    type: {
      value: cdktf.numberToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
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

  // type - computed: false, optional: false, required: true
  private _type?: number; 
  public get type() {
    return this.getNumberAttribute('type');
  }
  public set type(value: number) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class UserGroupsList extends cdktf.ComplexList {
  public internalValue? : UserGroups[] | cdktf.IResolvable

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
  public get(index: number): UserGroupsOutputReference {
    return new UserGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserVirtualFoldersFilesystemAzblobconfig {
}

export function userVirtualFoldersFilesystemAzblobconfigToTerraform(struct?: UserVirtualFoldersFilesystemAzblobconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userVirtualFoldersFilesystemAzblobconfigToHclTerraform(struct?: UserVirtualFoldersFilesystemAzblobconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserVirtualFoldersFilesystemAzblobconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UserVirtualFoldersFilesystemAzblobconfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserVirtualFoldersFilesystemAzblobconfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_tier - computed: true, optional: false, required: false
  public get accessTier() {
    return this.getStringAttribute('access_tier');
  }

  // account_key - computed: true, optional: false, required: false
  public get accountKey() {
    return this.getStringAttribute('account_key');
  }

  // account_name - computed: true, optional: false, required: false
  public get accountName() {
    return this.getStringAttribute('account_name');
  }

  // container - computed: true, optional: false, required: false
  public get container() {
    return this.getStringAttribute('container');
  }

  // download_concurrency - computed: true, optional: false, required: false
  public get downloadConcurrency() {
    return this.getNumberAttribute('download_concurrency');
  }

  // download_part_size - computed: true, optional: false, required: false
  public get downloadPartSize() {
    return this.getNumberAttribute('download_part_size');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // key_prefix - computed: true, optional: false, required: false
  public get keyPrefix() {
    return this.getStringAttribute('key_prefix');
  }

  // sas_url - computed: true, optional: false, required: false
  public get sasUrl() {
    return this.getStringAttribute('sas_url');
  }

  // upload_concurrency - computed: true, optional: false, required: false
  public get uploadConcurrency() {
    return this.getNumberAttribute('upload_concurrency');
  }

  // upload_part_size - computed: true, optional: false, required: false
  public get uploadPartSize() {
    return this.getNumberAttribute('upload_part_size');
  }

  // use_emulator - computed: true, optional: false, required: false
  public get useEmulator() {
    return this.getBooleanAttribute('use_emulator');
  }
}
export interface UserVirtualFoldersFilesystemCryptconfig {
}

export function userVirtualFoldersFilesystemCryptconfigToTerraform(struct?: UserVirtualFoldersFilesystemCryptconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userVirtualFoldersFilesystemCryptconfigToHclTerraform(struct?: UserVirtualFoldersFilesystemCryptconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserVirtualFoldersFilesystemCryptconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UserVirtualFoldersFilesystemCryptconfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserVirtualFoldersFilesystemCryptconfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // passphrase - computed: true, optional: false, required: false
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }

  // read_buffer_size - computed: true, optional: false, required: false
  public get readBufferSize() {
    return this.getNumberAttribute('read_buffer_size');
  }

  // write_buffer_size - computed: true, optional: false, required: false
  public get writeBufferSize() {
    return this.getNumberAttribute('write_buffer_size');
  }
}
export interface UserVirtualFoldersFilesystemFtpconfig {
}

export function userVirtualFoldersFilesystemFtpconfigToTerraform(struct?: UserVirtualFoldersFilesystemFtpconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userVirtualFoldersFilesystemFtpconfigToHclTerraform(struct?: UserVirtualFoldersFilesystemFtpconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserVirtualFoldersFilesystemFtpconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UserVirtualFoldersFilesystemFtpconfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserVirtualFoldersFilesystemFtpconfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // skip_tls_verify - computed: true, optional: false, required: false
  public get skipTlsVerify() {
    return this.getBooleanAttribute('skip_tls_verify');
  }

  // tls_mode - computed: true, optional: false, required: false
  public get tlsMode() {
    return this.getNumberAttribute('tls_mode');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface UserVirtualFoldersFilesystemGcsconfig {
}

export function userVirtualFoldersFilesystemGcsconfigToTerraform(struct?: UserVirtualFoldersFilesystemGcsconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userVirtualFoldersFilesystemGcsconfigToHclTerraform(struct?: UserVirtualFoldersFilesystemGcsconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserVirtualFoldersFilesystemGcsconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UserVirtualFoldersFilesystemGcsconfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserVirtualFoldersFilesystemGcsconfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acl - computed: true, optional: false, required: false
  public get acl() {
    return this.getStringAttribute('acl');
  }

  // automatic_credentials - computed: true, optional: false, required: false
  public get automaticCredentials() {
    return this.getNumberAttribute('automatic_credentials');
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // credentials - computed: true, optional: false, required: false
  public get credentials() {
    return this.getStringAttribute('credentials');
  }

  // hns - computed: true, optional: false, required: false
  public get hns() {
    return this.getNumberAttribute('hns');
  }

  // key_prefix - computed: true, optional: false, required: false
  public get keyPrefix() {
    return this.getStringAttribute('key_prefix');
  }

  // storage_class - computed: true, optional: false, required: false
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }

  // upload_part_max_time - computed: true, optional: false, required: false
  public get uploadPartMaxTime() {
    return this.getNumberAttribute('upload_part_max_time');
  }

  // upload_part_size - computed: true, optional: false, required: false
  public get uploadPartSize() {
    return this.getNumberAttribute('upload_part_size');
  }
}
export interface UserVirtualFoldersFilesystemHttpconfig {
}

export function userVirtualFoldersFilesystemHttpconfigToTerraform(struct?: UserVirtualFoldersFilesystemHttpconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userVirtualFoldersFilesystemHttpconfigToHclTerraform(struct?: UserVirtualFoldersFilesystemHttpconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserVirtualFoldersFilesystemHttpconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UserVirtualFoldersFilesystemHttpconfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserVirtualFoldersFilesystemHttpconfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key - computed: true, optional: false, required: false
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // equality_check_mode - computed: true, optional: false, required: false
  public get equalityCheckMode() {
    return this.getNumberAttribute('equality_check_mode');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // skip_tls_verify - computed: true, optional: false, required: false
  public get skipTlsVerify() {
    return this.getBooleanAttribute('skip_tls_verify');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface UserVirtualFoldersFilesystemOsconfig {
}

export function userVirtualFoldersFilesystemOsconfigToTerraform(struct?: UserVirtualFoldersFilesystemOsconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userVirtualFoldersFilesystemOsconfigToHclTerraform(struct?: UserVirtualFoldersFilesystemOsconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserVirtualFoldersFilesystemOsconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UserVirtualFoldersFilesystemOsconfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserVirtualFoldersFilesystemOsconfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // read_buffer_size - computed: true, optional: false, required: false
  public get readBufferSize() {
    return this.getNumberAttribute('read_buffer_size');
  }

  // write_buffer_size - computed: true, optional: false, required: false
  public get writeBufferSize() {
    return this.getNumberAttribute('write_buffer_size');
  }
}
export interface UserVirtualFoldersFilesystemS3Config {
}

export function userVirtualFoldersFilesystemS3ConfigToTerraform(struct?: UserVirtualFoldersFilesystemS3Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userVirtualFoldersFilesystemS3ConfigToHclTerraform(struct?: UserVirtualFoldersFilesystemS3Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserVirtualFoldersFilesystemS3ConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UserVirtualFoldersFilesystemS3Config | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserVirtualFoldersFilesystemS3Config | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_key - computed: true, optional: false, required: false
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }

  // access_secret - computed: true, optional: false, required: false
  public get accessSecret() {
    return this.getStringAttribute('access_secret');
  }

  // acl - computed: true, optional: false, required: false
  public get acl() {
    return this.getStringAttribute('acl');
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // download_concurrency - computed: true, optional: false, required: false
  public get downloadConcurrency() {
    return this.getNumberAttribute('download_concurrency');
  }

  // download_part_max_time - computed: true, optional: false, required: false
  public get downloadPartMaxTime() {
    return this.getNumberAttribute('download_part_max_time');
  }

  // download_part_size - computed: true, optional: false, required: false
  public get downloadPartSize() {
    return this.getNumberAttribute('download_part_size');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // force_path_style - computed: true, optional: false, required: false
  public get forcePathStyle() {
    return this.getBooleanAttribute('force_path_style');
  }

  // key_prefix - computed: true, optional: false, required: false
  public get keyPrefix() {
    return this.getStringAttribute('key_prefix');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // session_token - computed: true, optional: false, required: false
  public get sessionToken() {
    return this.getStringAttribute('session_token');
  }

  // skip_tls_verify - computed: true, optional: false, required: false
  public get skipTlsVerify() {
    return this.getBooleanAttribute('skip_tls_verify');
  }

  // sse_customer_key - computed: true, optional: false, required: false
  public get sseCustomerKey() {
    return this.getStringAttribute('sse_customer_key');
  }

  // storage_class - computed: true, optional: false, required: false
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }

  // upload_concurrency - computed: true, optional: false, required: false
  public get uploadConcurrency() {
    return this.getNumberAttribute('upload_concurrency');
  }

  // upload_part_max_time - computed: true, optional: false, required: false
  public get uploadPartMaxTime() {
    return this.getNumberAttribute('upload_part_max_time');
  }

  // upload_part_size - computed: true, optional: false, required: false
  public get uploadPartSize() {
    return this.getNumberAttribute('upload_part_size');
  }
}
export interface UserVirtualFoldersFilesystemSftpconfig {
}

export function userVirtualFoldersFilesystemSftpconfigToTerraform(struct?: UserVirtualFoldersFilesystemSftpconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userVirtualFoldersFilesystemSftpconfigToHclTerraform(struct?: UserVirtualFoldersFilesystemSftpconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserVirtualFoldersFilesystemSftpconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UserVirtualFoldersFilesystemSftpconfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserVirtualFoldersFilesystemSftpconfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // buffer_size - computed: true, optional: false, required: false
  public get bufferSize() {
    return this.getNumberAttribute('buffer_size');
  }

  // disable_concurrent_reads - computed: true, optional: false, required: false
  public get disableConcurrentReads() {
    return this.getBooleanAttribute('disable_concurrent_reads');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // equality_check_mode - computed: true, optional: false, required: false
  public get equalityCheckMode() {
    return this.getNumberAttribute('equality_check_mode');
  }

  // fingerprints - computed: true, optional: false, required: false
  public get fingerprints() {
    return this.getListAttribute('fingerprints');
  }

  // key_passphrase - computed: true, optional: false, required: false
  public get keyPassphrase() {
    return this.getStringAttribute('key_passphrase');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // private_key - computed: true, optional: false, required: false
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }

  // socks_password - computed: true, optional: false, required: false
  public get socksPassword() {
    return this.getStringAttribute('socks_password');
  }

  // socks_proxy - computed: true, optional: false, required: false
  public get socksProxy() {
    return this.getStringAttribute('socks_proxy');
  }

  // socks_username - computed: true, optional: false, required: false
  public get socksUsername() {
    return this.getStringAttribute('socks_username');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface UserVirtualFoldersFilesystem {
}

export function userVirtualFoldersFilesystemToTerraform(struct?: UserVirtualFoldersFilesystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userVirtualFoldersFilesystemToHclTerraform(struct?: UserVirtualFoldersFilesystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserVirtualFoldersFilesystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UserVirtualFoldersFilesystem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserVirtualFoldersFilesystem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // azblobconfig - computed: true, optional: false, required: false
  private _azblobconfig = new UserVirtualFoldersFilesystemAzblobconfigOutputReference(this, "azblobconfig");
  public get azblobconfig() {
    return this._azblobconfig;
  }

  // cryptconfig - computed: true, optional: false, required: false
  private _cryptconfig = new UserVirtualFoldersFilesystemCryptconfigOutputReference(this, "cryptconfig");
  public get cryptconfig() {
    return this._cryptconfig;
  }

  // ftpconfig - computed: true, optional: false, required: false
  private _ftpconfig = new UserVirtualFoldersFilesystemFtpconfigOutputReference(this, "ftpconfig");
  public get ftpconfig() {
    return this._ftpconfig;
  }

  // gcsconfig - computed: true, optional: false, required: false
  private _gcsconfig = new UserVirtualFoldersFilesystemGcsconfigOutputReference(this, "gcsconfig");
  public get gcsconfig() {
    return this._gcsconfig;
  }

  // httpconfig - computed: true, optional: false, required: false
  private _httpconfig = new UserVirtualFoldersFilesystemHttpconfigOutputReference(this, "httpconfig");
  public get httpconfig() {
    return this._httpconfig;
  }

  // osconfig - computed: true, optional: false, required: false
  private _osconfig = new UserVirtualFoldersFilesystemOsconfigOutputReference(this, "osconfig");
  public get osconfig() {
    return this._osconfig;
  }

  // provider - computed: true, optional: false, required: false
  public get provider() {
    return this.getNumberAttribute('provider');
  }

  // s3config - computed: true, optional: false, required: false
  private _s3Config = new UserVirtualFoldersFilesystemS3ConfigOutputReference(this, "s3config");
  public get s3Config() {
    return this._s3Config;
  }

  // sftpconfig - computed: true, optional: false, required: false
  private _sftpconfig = new UserVirtualFoldersFilesystemSftpconfigOutputReference(this, "sftpconfig");
  public get sftpconfig() {
    return this._sftpconfig;
  }
}
export interface UserVirtualFolders {
  /**
  * Optional description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#description User#description}
  */
  readonly description?: string;
  /**
  * Last quota update as unix timestamp in milliseconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#last_quota_update User#last_quota_update}
  */
  readonly lastQuotaUpdate?: number;
  /**
  * Absolute path to a local directory. This is the folder root path for local storage provider. For non-local filesystems it will store temporary files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#mapped_path User#mapped_path}
  */
  readonly mappedPath?: string;
  /**
  * Unique folder name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#name User#name}
  */
  readonly name: string;
  /**
  * Maximum number of files allowed. Not set means unlimited, -1 included in user quota
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#quota_files User#quota_files}
  */
  readonly quotaFiles: number;
  /**
  * Maximum size allowed as bytes. Not set means unlimited, -1 included in user quota
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#quota_size User#quota_size}
  */
  readonly quotaSize: number;
  /**
  * Used quota as number of files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#used_quota_files User#used_quota_files}
  */
  readonly usedQuotaFiles?: number;
  /**
  * Used quota as bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#used_quota_size User#used_quota_size}
  */
  readonly usedQuotaSize?: number;
  /**
  * The folder will be available on this path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#virtual_path User#virtual_path}
  */
  readonly virtualPath: string;
}

export function userVirtualFoldersToTerraform(struct?: UserVirtualFolders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    last_quota_update: cdktf.numberToTerraform(struct!.lastQuotaUpdate),
    mapped_path: cdktf.stringToTerraform(struct!.mappedPath),
    name: cdktf.stringToTerraform(struct!.name),
    quota_files: cdktf.numberToTerraform(struct!.quotaFiles),
    quota_size: cdktf.numberToTerraform(struct!.quotaSize),
    used_quota_files: cdktf.numberToTerraform(struct!.usedQuotaFiles),
    used_quota_size: cdktf.numberToTerraform(struct!.usedQuotaSize),
    virtual_path: cdktf.stringToTerraform(struct!.virtualPath),
  }
}


export function userVirtualFoldersToHclTerraform(struct?: UserVirtualFolders | cdktf.IResolvable): any {
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
    last_quota_update: {
      value: cdktf.numberToHclTerraform(struct!.lastQuotaUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mapped_path: {
      value: cdktf.stringToHclTerraform(struct!.mappedPath),
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
    quota_files: {
      value: cdktf.numberToHclTerraform(struct!.quotaFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    quota_size: {
      value: cdktf.numberToHclTerraform(struct!.quotaSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    used_quota_files: {
      value: cdktf.numberToHclTerraform(struct!.usedQuotaFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    used_quota_size: {
      value: cdktf.numberToHclTerraform(struct!.usedQuotaSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    virtual_path: {
      value: cdktf.stringToHclTerraform(struct!.virtualPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserVirtualFoldersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserVirtualFolders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._lastQuotaUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastQuotaUpdate = this._lastQuotaUpdate;
    }
    if (this._mappedPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappedPath = this._mappedPath;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._quotaFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.quotaFiles = this._quotaFiles;
    }
    if (this._quotaSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.quotaSize = this._quotaSize;
    }
    if (this._usedQuotaFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.usedQuotaFiles = this._usedQuotaFiles;
    }
    if (this._usedQuotaSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.usedQuotaSize = this._usedQuotaSize;
    }
    if (this._virtualPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualPath = this._virtualPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserVirtualFolders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._lastQuotaUpdate = undefined;
      this._mappedPath = undefined;
      this._name = undefined;
      this._quotaFiles = undefined;
      this._quotaSize = undefined;
      this._usedQuotaFiles = undefined;
      this._usedQuotaSize = undefined;
      this._virtualPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._lastQuotaUpdate = value.lastQuotaUpdate;
      this._mappedPath = value.mappedPath;
      this._name = value.name;
      this._quotaFiles = value.quotaFiles;
      this._quotaSize = value.quotaSize;
      this._usedQuotaFiles = value.usedQuotaFiles;
      this._usedQuotaSize = value.usedQuotaSize;
      this._virtualPath = value.virtualPath;
    }
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

  // filesystem - computed: true, optional: false, required: false
  private _filesystem = new UserVirtualFoldersFilesystemOutputReference(this, "filesystem");
  public get filesystem() {
    return this._filesystem;
  }

  // last_quota_update - computed: true, optional: true, required: false
  private _lastQuotaUpdate?: number; 
  public get lastQuotaUpdate() {
    return this.getNumberAttribute('last_quota_update');
  }
  public set lastQuotaUpdate(value: number) {
    this._lastQuotaUpdate = value;
  }
  public resetLastQuotaUpdate() {
    this._lastQuotaUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastQuotaUpdateInput() {
    return this._lastQuotaUpdate;
  }

  // mapped_path - computed: true, optional: true, required: false
  private _mappedPath?: string; 
  public get mappedPath() {
    return this.getStringAttribute('mapped_path');
  }
  public set mappedPath(value: string) {
    this._mappedPath = value;
  }
  public resetMappedPath() {
    this._mappedPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappedPathInput() {
    return this._mappedPath;
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

  // quota_files - computed: false, optional: false, required: true
  private _quotaFiles?: number; 
  public get quotaFiles() {
    return this.getNumberAttribute('quota_files');
  }
  public set quotaFiles(value: number) {
    this._quotaFiles = value;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaFilesInput() {
    return this._quotaFiles;
  }

  // quota_size - computed: false, optional: false, required: true
  private _quotaSize?: number; 
  public get quotaSize() {
    return this.getNumberAttribute('quota_size');
  }
  public set quotaSize(value: number) {
    this._quotaSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaSizeInput() {
    return this._quotaSize;
  }

  // used_quota_files - computed: true, optional: true, required: false
  private _usedQuotaFiles?: number; 
  public get usedQuotaFiles() {
    return this.getNumberAttribute('used_quota_files');
  }
  public set usedQuotaFiles(value: number) {
    this._usedQuotaFiles = value;
  }
  public resetUsedQuotaFiles() {
    this._usedQuotaFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usedQuotaFilesInput() {
    return this._usedQuotaFiles;
  }

  // used_quota_size - computed: true, optional: true, required: false
  private _usedQuotaSize?: number; 
  public get usedQuotaSize() {
    return this.getNumberAttribute('used_quota_size');
  }
  public set usedQuotaSize(value: number) {
    this._usedQuotaSize = value;
  }
  public resetUsedQuotaSize() {
    this._usedQuotaSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usedQuotaSizeInput() {
    return this._usedQuotaSize;
  }

  // virtual_path - computed: false, optional: false, required: true
  private _virtualPath?: string; 
  public get virtualPath() {
    return this.getStringAttribute('virtual_path');
  }
  public set virtualPath(value: string) {
    this._virtualPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualPathInput() {
    return this._virtualPath;
  }
}

export class UserVirtualFoldersList extends cdktf.ComplexList {
  public internalValue? : UserVirtualFolders[] | cdktf.IResolvable

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
  public get(index: number): UserVirtualFoldersOutputReference {
    return new UserVirtualFoldersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user sftpgo_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sftpgo_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the User to import
  * @param importFromId The id of the existing User that should be imported. Refer to the {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the User to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sftpgo_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/user sftpgo_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig
  */
  public constructor(scope: Construct, id: string, config: UserConfig) {
    super(scope, id, {
      terraformResourceType: 'sftpgo_user',
      terraformGeneratorMetadata: {
        providerName: 'sftpgo',
        providerVersion: '0.0.19',
        providerVersionConstraint: '0.0.19'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additionalInfo = config.additionalInfo;
    this._description = config.description;
    this._downloadBandwidth = config.downloadBandwidth;
    this._downloadDataTransfer = config.downloadDataTransfer;
    this._email = config.email;
    this._expirationDate = config.expirationDate;
    this._filesystem.internalValue = config.filesystem;
    this._filters.internalValue = config.filters;
    this._gid = config.gid;
    this._groups.internalValue = config.groups;
    this._homeDir = config.homeDir;
    this._maxSessions = config.maxSessions;
    this._password = config.password;
    this._permissions = config.permissions;
    this._publicKeys = config.publicKeys;
    this._quotaFiles = config.quotaFiles;
    this._quotaSize = config.quotaSize;
    this._role = config.role;
    this._status = config.status;
    this._totalDataTransfer = config.totalDataTransfer;
    this._uid = config.uid;
    this._uploadBandwidth = config.uploadBandwidth;
    this._uploadDataTransfer = config.uploadDataTransfer;
    this._username = config.username;
    this._virtualFolders.internalValue = config.virtualFolders;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_info - computed: false, optional: true, required: false
  private _additionalInfo?: string; 
  public get additionalInfo() {
    return this.getStringAttribute('additional_info');
  }
  public set additionalInfo(value: string) {
    this._additionalInfo = value;
  }
  public resetAdditionalInfo() {
    this._additionalInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalInfoInput() {
    return this._additionalInfo;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getNumberAttribute('created_at');
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

  // download_bandwidth - computed: false, optional: true, required: false
  private _downloadBandwidth?: number; 
  public get downloadBandwidth() {
    return this.getNumberAttribute('download_bandwidth');
  }
  public set downloadBandwidth(value: number) {
    this._downloadBandwidth = value;
  }
  public resetDownloadBandwidth() {
    this._downloadBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadBandwidthInput() {
    return this._downloadBandwidth;
  }

  // download_data_transfer - computed: false, optional: true, required: false
  private _downloadDataTransfer?: number; 
  public get downloadDataTransfer() {
    return this.getNumberAttribute('download_data_transfer');
  }
  public set downloadDataTransfer(value: number) {
    this._downloadDataTransfer = value;
  }
  public resetDownloadDataTransfer() {
    this._downloadDataTransfer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadDataTransferInput() {
    return this._downloadDataTransfer;
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // expiration_date - computed: false, optional: true, required: false
  private _expirationDate?: number; 
  public get expirationDate() {
    return this.getNumberAttribute('expiration_date');
  }
  public set expirationDate(value: number) {
    this._expirationDate = value;
  }
  public resetExpirationDate() {
    this._expirationDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationDateInput() {
    return this._expirationDate;
  }

  // filesystem - computed: false, optional: false, required: true
  private _filesystem = new UserFilesystemOutputReference(this, "filesystem");
  public get filesystem() {
    return this._filesystem;
  }
  public putFilesystem(value: UserFilesystem) {
    this._filesystem.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filesystemInput() {
    return this._filesystem.internalValue;
  }

  // filters - computed: true, optional: true, required: false
  private _filters = new UserFiltersOutputReference(this, "filters");
  public get filters() {
    return this._filters;
  }
  public putFilters(value: UserFilters) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // first_download - computed: true, optional: false, required: false
  public get firstDownload() {
    return this.getNumberAttribute('first_download');
  }

  // first_upload - computed: true, optional: false, required: false
  public get firstUpload() {
    return this.getNumberAttribute('first_upload');
  }

  // gid - computed: false, optional: true, required: false
  private _gid?: number; 
  public get gid() {
    return this.getNumberAttribute('gid');
  }
  public set gid(value: number) {
    this._gid = value;
  }
  public resetGid() {
    this._gid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gidInput() {
    return this._gid;
  }

  // groups - computed: false, optional: true, required: false
  private _groups = new UserGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
  public putGroups(value: UserGroups[] | cdktf.IResolvable) {
    this._groups.internalValue = value;
  }
  public resetGroups() {
    this._groups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups.internalValue;
  }

  // home_dir - computed: false, optional: false, required: true
  private _homeDir?: string; 
  public get homeDir() {
    return this.getStringAttribute('home_dir');
  }
  public set homeDir(value: string) {
    this._homeDir = value;
  }
  // Temporarily expose input value. Use with caution.
  public get homeDirInput() {
    return this._homeDir;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_login - computed: true, optional: false, required: false
  public get lastLogin() {
    return this.getNumberAttribute('last_login');
  }

  // last_password_change - computed: true, optional: false, required: false
  public get lastPasswordChange() {
    return this.getNumberAttribute('last_password_change');
  }

  // last_quota_update - computed: true, optional: false, required: false
  public get lastQuotaUpdate() {
    return this.getNumberAttribute('last_quota_update');
  }

  // max_sessions - computed: false, optional: true, required: false
  private _maxSessions?: number; 
  public get maxSessions() {
    return this.getNumberAttribute('max_sessions');
  }
  public set maxSessions(value: number) {
    this._maxSessions = value;
  }
  public resetMaxSessions() {
    this._maxSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSessionsInput() {
    return this._maxSessions;
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

  // permissions - computed: false, optional: false, required: true
  private _permissions?: { [key: string]: string }; 
  public get permissions() {
    return this.getStringMapAttribute('permissions');
  }
  public set permissions(value: { [key: string]: string }) {
    this._permissions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // public_keys - computed: false, optional: true, required: false
  private _publicKeys?: string[]; 
  public get publicKeys() {
    return this.getListAttribute('public_keys');
  }
  public set publicKeys(value: string[]) {
    this._publicKeys = value;
  }
  public resetPublicKeys() {
    this._publicKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeysInput() {
    return this._publicKeys;
  }

  // quota_files - computed: false, optional: true, required: false
  private _quotaFiles?: number; 
  public get quotaFiles() {
    return this.getNumberAttribute('quota_files');
  }
  public set quotaFiles(value: number) {
    this._quotaFiles = value;
  }
  public resetQuotaFiles() {
    this._quotaFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaFilesInput() {
    return this._quotaFiles;
  }

  // quota_size - computed: false, optional: true, required: false
  private _quotaSize?: number; 
  public get quotaSize() {
    return this.getNumberAttribute('quota_size');
  }
  public set quotaSize(value: number) {
    this._quotaSize = value;
  }
  public resetQuotaSize() {
    this._quotaSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaSizeInput() {
    return this._quotaSize;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // status - computed: false, optional: false, required: true
  private _status?: number; 
  public get status() {
    return this.getNumberAttribute('status');
  }
  public set status(value: number) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // total_data_transfer - computed: false, optional: true, required: false
  private _totalDataTransfer?: number; 
  public get totalDataTransfer() {
    return this.getNumberAttribute('total_data_transfer');
  }
  public set totalDataTransfer(value: number) {
    this._totalDataTransfer = value;
  }
  public resetTotalDataTransfer() {
    this._totalDataTransfer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalDataTransferInput() {
    return this._totalDataTransfer;
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: number; 
  public get uid() {
    return this.getNumberAttribute('uid');
  }
  public set uid(value: number) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getNumberAttribute('updated_at');
  }

  // upload_bandwidth - computed: false, optional: true, required: false
  private _uploadBandwidth?: number; 
  public get uploadBandwidth() {
    return this.getNumberAttribute('upload_bandwidth');
  }
  public set uploadBandwidth(value: number) {
    this._uploadBandwidth = value;
  }
  public resetUploadBandwidth() {
    this._uploadBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadBandwidthInput() {
    return this._uploadBandwidth;
  }

  // upload_data_transfer - computed: false, optional: true, required: false
  private _uploadDataTransfer?: number; 
  public get uploadDataTransfer() {
    return this.getNumberAttribute('upload_data_transfer');
  }
  public set uploadDataTransfer(value: number) {
    this._uploadDataTransfer = value;
  }
  public resetUploadDataTransfer() {
    this._uploadDataTransfer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadDataTransferInput() {
    return this._uploadDataTransfer;
  }

  // used_download_data_transfer - computed: true, optional: false, required: false
  public get usedDownloadDataTransfer() {
    return this.getNumberAttribute('used_download_data_transfer');
  }

  // used_quota_files - computed: true, optional: false, required: false
  public get usedQuotaFiles() {
    return this.getNumberAttribute('used_quota_files');
  }

  // used_quota_size - computed: true, optional: false, required: false
  public get usedQuotaSize() {
    return this.getNumberAttribute('used_quota_size');
  }

  // used_upload_data_transfer - computed: true, optional: false, required: false
  public get usedUploadDataTransfer() {
    return this.getNumberAttribute('used_upload_data_transfer');
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

  // virtual_folders - computed: false, optional: true, required: false
  private _virtualFolders = new UserVirtualFoldersList(this, "virtual_folders", false);
  public get virtualFolders() {
    return this._virtualFolders;
  }
  public putVirtualFolders(value: UserVirtualFolders[] | cdktf.IResolvable) {
    this._virtualFolders.internalValue = value;
  }
  public resetVirtualFolders() {
    this._virtualFolders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualFoldersInput() {
    return this._virtualFolders.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_info: cdktf.stringToTerraform(this._additionalInfo),
      description: cdktf.stringToTerraform(this._description),
      download_bandwidth: cdktf.numberToTerraform(this._downloadBandwidth),
      download_data_transfer: cdktf.numberToTerraform(this._downloadDataTransfer),
      email: cdktf.stringToTerraform(this._email),
      expiration_date: cdktf.numberToTerraform(this._expirationDate),
      filesystem: userFilesystemToTerraform(this._filesystem.internalValue),
      filters: userFiltersToTerraform(this._filters.internalValue),
      gid: cdktf.numberToTerraform(this._gid),
      groups: cdktf.listMapper(userGroupsToTerraform, false)(this._groups.internalValue),
      home_dir: cdktf.stringToTerraform(this._homeDir),
      max_sessions: cdktf.numberToTerraform(this._maxSessions),
      password: cdktf.stringToTerraform(this._password),
      permissions: cdktf.hashMapper(cdktf.stringToTerraform)(this._permissions),
      public_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._publicKeys),
      quota_files: cdktf.numberToTerraform(this._quotaFiles),
      quota_size: cdktf.numberToTerraform(this._quotaSize),
      role: cdktf.stringToTerraform(this._role),
      status: cdktf.numberToTerraform(this._status),
      total_data_transfer: cdktf.numberToTerraform(this._totalDataTransfer),
      uid: cdktf.numberToTerraform(this._uid),
      upload_bandwidth: cdktf.numberToTerraform(this._uploadBandwidth),
      upload_data_transfer: cdktf.numberToTerraform(this._uploadDataTransfer),
      username: cdktf.stringToTerraform(this._username),
      virtual_folders: cdktf.listMapper(userVirtualFoldersToTerraform, false)(this._virtualFolders.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_info: {
        value: cdktf.stringToHclTerraform(this._additionalInfo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      download_bandwidth: {
        value: cdktf.numberToHclTerraform(this._downloadBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      download_data_transfer: {
        value: cdktf.numberToHclTerraform(this._downloadDataTransfer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expiration_date: {
        value: cdktf.numberToHclTerraform(this._expirationDate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      filesystem: {
        value: userFilesystemToHclTerraform(this._filesystem.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "UserFilesystem",
      },
      filters: {
        value: userFiltersToHclTerraform(this._filters.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "UserFilters",
      },
      gid: {
        value: cdktf.numberToHclTerraform(this._gid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      groups: {
        value: cdktf.listMapperHcl(userGroupsToHclTerraform, false)(this._groups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserGroupsList",
      },
      home_dir: {
        value: cdktf.stringToHclTerraform(this._homeDir),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_sessions: {
        value: cdktf.numberToHclTerraform(this._maxSessions),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permissions: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._permissions),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      public_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._publicKeys),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      quota_files: {
        value: cdktf.numberToHclTerraform(this._quotaFiles),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      quota_size: {
        value: cdktf.numberToHclTerraform(this._quotaSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.numberToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      total_data_transfer: {
        value: cdktf.numberToHclTerraform(this._totalDataTransfer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uid: {
        value: cdktf.numberToHclTerraform(this._uid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      upload_bandwidth: {
        value: cdktf.numberToHclTerraform(this._uploadBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      upload_data_transfer: {
        value: cdktf.numberToHclTerraform(this._uploadDataTransfer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_folders: {
        value: cdktf.listMapperHcl(userVirtualFoldersToHclTerraform, false)(this._virtualFolders.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserVirtualFoldersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
