// https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#description Group#description}
  */
  readonly description?: string;
  /**
  * Unique name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Settings to apply to users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#user_settings Group#user_settings}
  */
  readonly userSettings?: GroupUserSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#virtual_folders Group#virtual_folders}
  */
  readonly virtualFolders?: GroupVirtualFolders[] | cdktf.IResolvable;
}
export interface GroupUserSettingsFilesystemAzblobconfig {
  /**
  * Blob Access Tier. Not set means the container default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#access_tier Group#access_tier}
  */
  readonly accessTier?: string;
  /**
  * Plain text account key. If you set a string in SFTPGo secret format, SFTPGo will keep the current secret on updates while the Terraform plan will save your value. Don't do this unless you are sure the values match (e.g because you imported an existing resource).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#account_key Group#account_key}
  */
  readonly accountKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#account_name Group#account_name}
  */
  readonly accountName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#container Group#container}
  */
  readonly container?: string;
  /**
  * How many parts are downloaded in parallel. Default: 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#download_concurrency Group#download_concurrency}
  */
  readonly downloadConcurrency?: number;
  /**
  * The buffer size (in MB) to use for multipart downloads. If this value is not set, the default value (5MB) will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#download_part_size Group#download_part_size}
  */
  readonly downloadPartSize?: number;
  /**
  * Optional endpoint. Default is "blob.core.windows.net". If you use the emulator the endpoint must include the protocol, for example "http://127.0.0.1:10000".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#endpoint Group#endpoint}
  */
  readonly endpoint?: string;
  /**
  * If specified then the SFTPGo user will be restricted to objects starting with the specified prefix. The prefix must not start with "/" and must end with "/"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#key_prefix Group#key_prefix}
  */
  readonly keyPrefix?: string;
  /**
  * Plain text SAS URL. If you set a string in SFTPGo secret format, SFTPGo will keep the current secret on updates while the Terraform plan will save your value. Don't do this unless you are sure the values match (e.g because you imported an existing resource).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#sas_url Group#sas_url}
  */
  readonly sasUrl?: string;
  /**
  * How many parts are uploaded in parallel. Default: 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#upload_concurrency Group#upload_concurrency}
  */
  readonly uploadConcurrency?: number;
  /**
  * The buffer size (in MB) to use for multipart uploads. If this value is not set, the default value (5MB) will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#upload_part_size Group#upload_part_size}
  */
  readonly uploadPartSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#use_emulator Group#use_emulator}
  */
  readonly useEmulator?: boolean | cdktf.IResolvable;
}

export function groupUserSettingsFilesystemAzblobconfigToTerraform(struct?: GroupUserSettingsFilesystemAzblobconfig | cdktf.IResolvable): any {
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


export function groupUserSettingsFilesystemAzblobconfigToHclTerraform(struct?: GroupUserSettingsFilesystemAzblobconfig | cdktf.IResolvable): any {
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

export class GroupUserSettingsFilesystemAzblobconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupUserSettingsFilesystemAzblobconfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GroupUserSettingsFilesystemAzblobconfig | cdktf.IResolvable | undefined) {
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

  // access_tier - computed: true, optional: true, required: false
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

  // account_key - computed: true, optional: true, required: false
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

  // account_name - computed: true, optional: true, required: false
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

  // container - computed: true, optional: true, required: false
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

  // download_concurrency - computed: true, optional: true, required: false
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

  // download_part_size - computed: true, optional: true, required: false
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

  // endpoint - computed: true, optional: true, required: false
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

  // key_prefix - computed: true, optional: true, required: false
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

  // sas_url - computed: true, optional: true, required: false
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

  // upload_concurrency - computed: true, optional: true, required: false
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

  // upload_part_size - computed: true, optional: true, required: false
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

  // use_emulator - computed: true, optional: true, required: false
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
export interface GroupUserSettingsFilesystemCryptconfig {
  /**
  * Plain text passphrase. If you set a string in SFTPGo secret format, SFTPGo will keep the current secret on updates while the Terraform plan will save your value. Don't do this unless you are sure the values match (e.g because you imported an existing resource).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#passphrase Group#passphrase}
  */
  readonly passphrase?: string;
  /**
  * Optional read buffer size, as MB, to use for downloads. Omit to disable buffering, that's fine in most use cases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#read_buffer_size Group#read_buffer_size}
  */
  readonly readBufferSize?: number;
  /**
  * Optional write buffer size, as MB, to use for uploads. Omit to disable buffering, that's fine in most use cases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#write_buffer_size Group#write_buffer_size}
  */
  readonly writeBufferSize?: number;
}

export function groupUserSettingsFilesystemCryptconfigToTerraform(struct?: GroupUserSettingsFilesystemCryptconfig | cdktf.IResolvable): any {
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


export function groupUserSettingsFilesystemCryptconfigToHclTerraform(struct?: GroupUserSettingsFilesystemCryptconfig | cdktf.IResolvable): any {
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

export class GroupUserSettingsFilesystemCryptconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupUserSettingsFilesystemCryptconfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GroupUserSettingsFilesystemCryptconfig | cdktf.IResolvable | undefined) {
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

  // passphrase - computed: true, optional: true, required: false
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

  // read_buffer_size - computed: true, optional: true, required: false
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

  // write_buffer_size - computed: true, optional: true, required: false
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
export interface GroupUserSettingsFilesystemGcsconfig {
  /**
  * The ACL to apply to uploaded objects. Not set means the bucket default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#acl Group#acl}
  */
  readonly acl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#automatic_credentials Group#automatic_credentials}
  */
  readonly automaticCredentials?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#bucket Group#bucket}
  */
  readonly bucket: string;
  /**
  * Plain text credentials. If you set a string in SFTPGo secret format, SFTPGo will keep the current secret on updates while the Terraform plan will save your value. Don't do this unless you are sure the values match (e.g because you imported an existing resource).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#credentials Group#credentials}
  */
  readonly credentials?: string;
  /**
  * Set to 1 if Hierarchical namespace is enabled for the bucket. Available in the Enterprise edition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#hns Group#hns}
  */
  readonly hns?: number;
  /**
  * If specified then the SFTPGo user will be restricted to objects starting with the specified prefix. The prefix must not start with "/" and must end with "/"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#key_prefix Group#key_prefix}
  */
  readonly keyPrefix?: string;
  /**
  * The storage class to use when storing objects. Leave not set for default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#storage_class Group#storage_class}
  */
  readonly storageClass?: string;
  /**
  * The maximum time allowed, in seconds, to upload a single chunk. The default value is 32. Not set means use the default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#upload_part_max_time Group#upload_part_max_time}
  */
  readonly uploadPartMaxTime?: number;
  /**
  * The buffer size (in MB) to use for multipart uploads. The default value is 16MB. Not set means use the default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#upload_part_size Group#upload_part_size}
  */
  readonly uploadPartSize?: number;
}

export function groupUserSettingsFilesystemGcsconfigToTerraform(struct?: GroupUserSettingsFilesystemGcsconfig | cdktf.IResolvable): any {
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


export function groupUserSettingsFilesystemGcsconfigToHclTerraform(struct?: GroupUserSettingsFilesystemGcsconfig | cdktf.IResolvable): any {
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

export class GroupUserSettingsFilesystemGcsconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupUserSettingsFilesystemGcsconfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GroupUserSettingsFilesystemGcsconfig | cdktf.IResolvable | undefined) {
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

  // acl - computed: true, optional: true, required: false
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

  // automatic_credentials - computed: true, optional: true, required: false
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

  // bucket - computed: true, optional: false, required: true
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

  // credentials - computed: true, optional: true, required: false
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

  // hns - computed: true, optional: true, required: false
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

  // key_prefix - computed: true, optional: true, required: false
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

  // storage_class - computed: true, optional: true, required: false
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

  // upload_part_max_time - computed: true, optional: true, required: false
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

  // upload_part_size - computed: true, optional: true, required: false
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
export interface GroupUserSettingsFilesystemHttpconfig {
  /**
  * Plain text API key. If you set a string in SFTPGo secret format, SFTPGo will keep the current secret on updates while the Terraform plan will save your value. Don't do this unless you are sure the values match (e.g because you imported an existing resource).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#api_key Group#api_key}
  */
  readonly apiKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#endpoint Group#endpoint}
  */
  readonly endpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#equality_check_mode Group#equality_check_mode}
  */
  readonly equalityCheckMode?: number;
  /**
  * Plain text password. If you set a string in SFTPGo secret format, SFTPGo will keep the current secret on updates while the Terraform plan will save your value. Don't do this unless you are sure the values match (e.g because you imported an existing resource).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#password Group#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#skip_tls_verify Group#skip_tls_verify}
  */
  readonly skipTlsVerify?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#username Group#username}
  */
  readonly username?: string;
}

export function groupUserSettingsFilesystemHttpconfigToTerraform(struct?: GroupUserSettingsFilesystemHttpconfig | cdktf.IResolvable): any {
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


export function groupUserSettingsFilesystemHttpconfigToHclTerraform(struct?: GroupUserSettingsFilesystemHttpconfig | cdktf.IResolvable): any {
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

export class GroupUserSettingsFilesystemHttpconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupUserSettingsFilesystemHttpconfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GroupUserSettingsFilesystemHttpconfig | cdktf.IResolvable | undefined) {
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

  // endpoint - computed: true, optional: false, required: true
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

  // equality_check_mode - computed: true, optional: true, required: false
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

  // password - computed: true, optional: true, required: false
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

  // skip_tls_verify - computed: true, optional: true, required: false
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

  // username - computed: true, optional: true, required: false
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
export interface GroupUserSettingsFilesystemOsconfig {
  /**
  * Optional read buffer size, as MB, to use for downloads. Omit to disable buffering, that's fine in most use cases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#read_buffer_size Group#read_buffer_size}
  */
  readonly readBufferSize?: number;
  /**
  * Optional write buffer size, as MB, to use for uploads. Omit to disable no buffering, that's fine in most use cases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#write_buffer_size Group#write_buffer_size}
  */
  readonly writeBufferSize?: number;
}

export function groupUserSettingsFilesystemOsconfigToTerraform(struct?: GroupUserSettingsFilesystemOsconfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read_buffer_size: cdktf.numberToTerraform(struct!.readBufferSize),
    write_buffer_size: cdktf.numberToTerraform(struct!.writeBufferSize),
  }
}


export function groupUserSettingsFilesystemOsconfigToHclTerraform(struct?: GroupUserSettingsFilesystemOsconfig | cdktf.IResolvable): any {
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

export class GroupUserSettingsFilesystemOsconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupUserSettingsFilesystemOsconfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GroupUserSettingsFilesystemOsconfig | cdktf.IResolvable | undefined) {
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

  // read_buffer_size - computed: true, optional: true, required: false
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

  // write_buffer_size - computed: true, optional: true, required: false
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
export interface GroupUserSettingsFilesystemS3Config {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#access_key Group#access_key}
  */
  readonly accessKey?: string;
  /**
  * Plain text access secret. If you set a string in SFTPGo secret format, SFTPGo will keep the current secret on updates while the Terraform plan will save your value. Don't do this unless you are sure the values match (e.g because you imported an existing resource).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#access_secret Group#access_secret}
  */
  readonly accessSecret?: string;
  /**
  * The canned ACL to apply to uploaded objects. Not set means the bucket default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#acl Group#acl}
  */
  readonly acl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#bucket Group#bucket}
  */
  readonly bucket: string;
  /**
  * How many parts are downloaded in parallel. Not set means the default (5). Ignored for partial downloads.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#download_concurrency Group#download_concurrency}
  */
  readonly downloadConcurrency?: number;
  /**
  * The maximum time allowed, in seconds, to download a single chunk. Not set means no timeout. Ignored for partial downloads.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#download_part_max_time Group#download_part_max_time}
  */
  readonly downloadPartMaxTime?: number;
  /**
  * The buffer size (in MB) to use for multipart downloads. If this value is not set, the default value (5MB) will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#download_part_size Group#download_part_size}
  */
  readonly downloadPartSize?: number;
  /**
  * The endpoint is generally required for S3 compatible backends. For AWS S3, leave not set to use the default endpoint for the specified region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#endpoint Group#endpoint}
  */
  readonly endpoint?: string;
  /**
  * If set path-style addressing is used, i.e. http://s3.amazonaws.com/BUCKET/KEY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#force_path_style Group#force_path_style}
  */
  readonly forcePathStyle?: boolean | cdktf.IResolvable;
  /**
  * If specified then the SFTPGo user will be restricted to objects starting with the specified prefix. The prefix must not start with "/" and must end with "/"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#key_prefix Group#key_prefix}
  */
  readonly keyPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#region Group#region}
  */
  readonly region?: string;
  /**
  * Optional IAM Role ARN to assume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#role_arn Group#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Optional Session token that is a part of temporary security credentials provisioned by AWS STS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#session_token Group#session_token}
  */
  readonly sessionToken?: string;
  /**
  * If set the S3 client accepts any TLS certificate presented by the server and any host name in that certificate. In this mode, TLS is susceptible to man-in-the-middle attacks. This should be used only for testing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#skip_tls_verify Group#skip_tls_verify}
  */
  readonly skipTlsVerify?: boolean | cdktf.IResolvable;
  /**
  * Plain text Server-Side encryption key. If you set a string in SFTPGo secret format, SFTPGo will keep the current secret on updates while the Terraform plan will save your value. Don't do this unless you are sure the values match (e.g because you imported an existing resource).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#sse_customer_key Group#sse_customer_key}
  */
  readonly sseCustomerKey?: string;
  /**
  * The storage class to use when storing objects. Leave not set for default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#storage_class Group#storage_class}
  */
  readonly storageClass?: string;
  /**
  * How many parts are uploaded in parallel. Not set means the default (5).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#upload_concurrency Group#upload_concurrency}
  */
  readonly uploadConcurrency?: number;
  /**
  * The maximum time allowed, in seconds, to upload a single chunk. Not set means no timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#upload_part_max_time Group#upload_part_max_time}
  */
  readonly uploadPartMaxTime?: number;
  /**
  * The buffer size (in MB) to use for multipart uploads. If this value is not set, the default value (5MB) will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#upload_part_size Group#upload_part_size}
  */
  readonly uploadPartSize?: number;
}

export function groupUserSettingsFilesystemS3ConfigToTerraform(struct?: GroupUserSettingsFilesystemS3Config | cdktf.IResolvable): any {
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


export function groupUserSettingsFilesystemS3ConfigToHclTerraform(struct?: GroupUserSettingsFilesystemS3Config | cdktf.IResolvable): any {
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

export class GroupUserSettingsFilesystemS3ConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupUserSettingsFilesystemS3Config | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GroupUserSettingsFilesystemS3Config | cdktf.IResolvable | undefined) {
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

  // access_key - computed: true, optional: true, required: false
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

  // access_secret - computed: true, optional: true, required: false
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

  // acl - computed: true, optional: true, required: false
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

  // bucket - computed: true, optional: false, required: true
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

  // download_concurrency - computed: true, optional: true, required: false
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

  // download_part_max_time - computed: true, optional: true, required: false
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

  // download_part_size - computed: true, optional: true, required: false
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

  // endpoint - computed: true, optional: true, required: false
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

  // force_path_style - computed: true, optional: true, required: false
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

  // key_prefix - computed: true, optional: true, required: false
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

  // region - computed: true, optional: true, required: false
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

  // role_arn - computed: true, optional: true, required: false
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

  // session_token - computed: true, optional: true, required: false
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

  // skip_tls_verify - computed: true, optional: true, required: false
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

  // sse_customer_key - computed: true, optional: true, required: false
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

  // storage_class - computed: true, optional: true, required: false
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

  // upload_concurrency - computed: true, optional: true, required: false
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

  // upload_part_max_time - computed: true, optional: true, required: false
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

  // upload_part_size - computed: true, optional: true, required: false
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
export interface GroupUserSettingsFilesystemSftpconfig {
  /**
  * The buffer size (in MB) to use for uploads/downloads. Buffering could improve performance for high latency networks. With buffering enabled upload resume is not supported and a file cannot be opened for both reading and writing at the same time. Not set means disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#buffer_size Group#buffer_size}
  */
  readonly bufferSize?: number;
  /**
  * Concurrent reads are safe to use and disabling them will degrade performance so they are enabled by default. Some servers automatically delete files once they are downloaded. Using concurrent reads is problematic with such servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#disable_concurrent_reads Group#disable_concurrent_reads}
  */
  readonly disableConcurrentReads?: boolean | cdktf.IResolvable;
  /**
  * SFTP endpoint as host:port. Port is always required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#endpoint Group#endpoint}
  */
  readonly endpoint: string;
  /**
  * Defines how to check if this config points to the same server as another config. By default both the endpoint and the username must match. 1 means that only the endpoint must match. If different configs point to the same server the renaming between the fs configs is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#equality_check_mode Group#equality_check_mode}
  */
  readonly equalityCheckMode?: number;
  /**
  * SHA256 fingerprints to validate when connecting to the external SFTP server. If not set any host key will be accepted: this is a security risk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#fingerprints Group#fingerprints}
  */
  readonly fingerprints?: string[];
  /**
  * Plain text passphrase for the private key. If you set a string in SFTPGo secret format, SFTPGo will keep the current secret on updates while the Terraform plan will save your value. Don't do this unless you are sure the values match (e.g because you imported an existing resource).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#key_passphrase Group#key_passphrase}
  */
  readonly keyPassphrase?: string;
  /**
  * Plain text password. If you set a string in SFTPGo secret format, SFTPGo will keep the current secret on updates while the Terraform plan will save your value. Don't do this unless you are sure the values match (e.g because you imported an existing resource).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#password Group#password}
  */
  readonly password?: string;
  /**
  * Similar to a chroot for local filesystem. Example: "/somedir/subdir".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#prefix Group#prefix}
  */
  readonly prefix: string;
  /**
  * Plain text private key. If you set a string in SFTPGo secret format, SFTPGo will keep the current secret on updates while the Terraform plan will save your value. Don't do this unless you are sure the values match (e.g because you imported an existing resource).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#private_key Group#private_key}
  */
  readonly privateKey?: string;
  /**
  * Plain text SOCKS password. If you set a string in SFTPGo secret format, SFTPGo will keep the current secret on updates while the Terraform plan will save your value. Don't do this unless you are sure the values match (e.g because you imported an existing resource). Available in the Enterprise edition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#socks_password Group#socks_password}
  */
  readonly socksPassword?: string;
  /**
  * The address of the SOCKS proxy server, including schema, host, and port. Examples: socks5://127.0.0.1:1080, socks4://127.0.0.1:1080, socks4a://127.0.0.1:1080. Available in the Enterprise edition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#socks_proxy Group#socks_proxy}
  */
  readonly socksProxy?: string;
  /**
  * The optional SOCKS username. Available in the Enterprise edition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#socks_username Group#socks_username}
  */
  readonly socksUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#username Group#username}
  */
  readonly username: string;
}

export function groupUserSettingsFilesystemSftpconfigToTerraform(struct?: GroupUserSettingsFilesystemSftpconfig | cdktf.IResolvable): any {
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


export function groupUserSettingsFilesystemSftpconfigToHclTerraform(struct?: GroupUserSettingsFilesystemSftpconfig | cdktf.IResolvable): any {
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

export class GroupUserSettingsFilesystemSftpconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupUserSettingsFilesystemSftpconfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GroupUserSettingsFilesystemSftpconfig | cdktf.IResolvable | undefined) {
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

  // buffer_size - computed: true, optional: true, required: false
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

  // disable_concurrent_reads - computed: true, optional: true, required: false
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

  // endpoint - computed: true, optional: false, required: true
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

  // equality_check_mode - computed: true, optional: true, required: false
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

  // fingerprints - computed: true, optional: true, required: false
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

  // key_passphrase - computed: true, optional: true, required: false
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

  // password - computed: true, optional: true, required: false
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

  // prefix - computed: true, optional: false, required: true
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

  // private_key - computed: true, optional: true, required: false
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

  // socks_password - computed: true, optional: true, required: false
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

  // socks_proxy - computed: true, optional: true, required: false
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

  // socks_username - computed: true, optional: true, required: false
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

  // username - computed: true, optional: false, required: true
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
export interface GroupUserSettingsFilesystem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#azblobconfig Group#azblobconfig}
  */
  readonly azblobconfig?: GroupUserSettingsFilesystemAzblobconfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#cryptconfig Group#cryptconfig}
  */
  readonly cryptconfig?: GroupUserSettingsFilesystemCryptconfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#gcsconfig Group#gcsconfig}
  */
  readonly gcsconfig?: GroupUserSettingsFilesystemGcsconfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#httpconfig Group#httpconfig}
  */
  readonly httpconfig?: GroupUserSettingsFilesystemHttpconfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#osconfig Group#osconfig}
  */
  readonly osconfig?: GroupUserSettingsFilesystemOsconfig;
  /**
  * Provider. 0 = local filesystem, 1 = S3 Compatible, 2 = Google Cloud, 3 = Azure Blob, 4 = Local encrypted, 5 = SFTP, 6 = HTTP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#provider Group#provider}
  */
  readonly provider: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#s3config Group#s3config}
  */
  readonly s3Config?: GroupUserSettingsFilesystemS3Config;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#sftpconfig Group#sftpconfig}
  */
  readonly sftpconfig?: GroupUserSettingsFilesystemSftpconfig;
}

export function groupUserSettingsFilesystemToTerraform(struct?: GroupUserSettingsFilesystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azblobconfig: groupUserSettingsFilesystemAzblobconfigToTerraform(struct!.azblobconfig),
    cryptconfig: groupUserSettingsFilesystemCryptconfigToTerraform(struct!.cryptconfig),
    gcsconfig: groupUserSettingsFilesystemGcsconfigToTerraform(struct!.gcsconfig),
    httpconfig: groupUserSettingsFilesystemHttpconfigToTerraform(struct!.httpconfig),
    osconfig: groupUserSettingsFilesystemOsconfigToTerraform(struct!.osconfig),
    provider: cdktf.numberToTerraform(struct!.provider),
    s3config: groupUserSettingsFilesystemS3ConfigToTerraform(struct!.s3Config),
    sftpconfig: groupUserSettingsFilesystemSftpconfigToTerraform(struct!.sftpconfig),
  }
}


export function groupUserSettingsFilesystemToHclTerraform(struct?: GroupUserSettingsFilesystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azblobconfig: {
      value: groupUserSettingsFilesystemAzblobconfigToHclTerraform(struct!.azblobconfig),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupUserSettingsFilesystemAzblobconfig",
    },
    cryptconfig: {
      value: groupUserSettingsFilesystemCryptconfigToHclTerraform(struct!.cryptconfig),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupUserSettingsFilesystemCryptconfig",
    },
    gcsconfig: {
      value: groupUserSettingsFilesystemGcsconfigToHclTerraform(struct!.gcsconfig),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupUserSettingsFilesystemGcsconfig",
    },
    httpconfig: {
      value: groupUserSettingsFilesystemHttpconfigToHclTerraform(struct!.httpconfig),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupUserSettingsFilesystemHttpconfig",
    },
    osconfig: {
      value: groupUserSettingsFilesystemOsconfigToHclTerraform(struct!.osconfig),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupUserSettingsFilesystemOsconfig",
    },
    provider: {
      value: cdktf.numberToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    s3config: {
      value: groupUserSettingsFilesystemS3ConfigToHclTerraform(struct!.s3Config),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupUserSettingsFilesystemS3Config",
    },
    sftpconfig: {
      value: groupUserSettingsFilesystemSftpconfigToHclTerraform(struct!.sftpconfig),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupUserSettingsFilesystemSftpconfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupUserSettingsFilesystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupUserSettingsFilesystem | undefined {
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

  public set internalValue(value: GroupUserSettingsFilesystem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._azblobconfig.internalValue = undefined;
      this._cryptconfig.internalValue = undefined;
      this._gcsconfig.internalValue = undefined;
      this._httpconfig.internalValue = undefined;
      this._osconfig.internalValue = undefined;
      this._provider = undefined;
      this._s3Config.internalValue = undefined;
      this._sftpconfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._azblobconfig.internalValue = value.azblobconfig;
      this._cryptconfig.internalValue = value.cryptconfig;
      this._gcsconfig.internalValue = value.gcsconfig;
      this._httpconfig.internalValue = value.httpconfig;
      this._osconfig.internalValue = value.osconfig;
      this._provider = value.provider;
      this._s3Config.internalValue = value.s3Config;
      this._sftpconfig.internalValue = value.sftpconfig;
    }
  }

  // azblobconfig - computed: true, optional: true, required: false
  private _azblobconfig = new GroupUserSettingsFilesystemAzblobconfigOutputReference(this, "azblobconfig");
  public get azblobconfig() {
    return this._azblobconfig;
  }
  public putAzblobconfig(value: GroupUserSettingsFilesystemAzblobconfig) {
    this._azblobconfig.internalValue = value;
  }
  public resetAzblobconfig() {
    this._azblobconfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azblobconfigInput() {
    return this._azblobconfig.internalValue;
  }

  // cryptconfig - computed: true, optional: true, required: false
  private _cryptconfig = new GroupUserSettingsFilesystemCryptconfigOutputReference(this, "cryptconfig");
  public get cryptconfig() {
    return this._cryptconfig;
  }
  public putCryptconfig(value: GroupUserSettingsFilesystemCryptconfig) {
    this._cryptconfig.internalValue = value;
  }
  public resetCryptconfig() {
    this._cryptconfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptconfigInput() {
    return this._cryptconfig.internalValue;
  }

  // gcsconfig - computed: true, optional: true, required: false
  private _gcsconfig = new GroupUserSettingsFilesystemGcsconfigOutputReference(this, "gcsconfig");
  public get gcsconfig() {
    return this._gcsconfig;
  }
  public putGcsconfig(value: GroupUserSettingsFilesystemGcsconfig) {
    this._gcsconfig.internalValue = value;
  }
  public resetGcsconfig() {
    this._gcsconfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsconfigInput() {
    return this._gcsconfig.internalValue;
  }

  // httpconfig - computed: true, optional: true, required: false
  private _httpconfig = new GroupUserSettingsFilesystemHttpconfigOutputReference(this, "httpconfig");
  public get httpconfig() {
    return this._httpconfig;
  }
  public putHttpconfig(value: GroupUserSettingsFilesystemHttpconfig) {
    this._httpconfig.internalValue = value;
  }
  public resetHttpconfig() {
    this._httpconfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpconfigInput() {
    return this._httpconfig.internalValue;
  }

  // osconfig - computed: true, optional: true, required: false
  private _osconfig = new GroupUserSettingsFilesystemOsconfigOutputReference(this, "osconfig");
  public get osconfig() {
    return this._osconfig;
  }
  public putOsconfig(value: GroupUserSettingsFilesystemOsconfig) {
    this._osconfig.internalValue = value;
  }
  public resetOsconfig() {
    this._osconfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osconfigInput() {
    return this._osconfig.internalValue;
  }

  // provider - computed: true, optional: false, required: true
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

  // s3config - computed: true, optional: true, required: false
  private _s3Config = new GroupUserSettingsFilesystemS3ConfigOutputReference(this, "s3config");
  public get s3Config() {
    return this._s3Config;
  }
  public putS3Config(value: GroupUserSettingsFilesystemS3Config) {
    this._s3Config.internalValue = value;
  }
  public resetS3Config() {
    this._s3Config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ConfigInput() {
    return this._s3Config.internalValue;
  }

  // sftpconfig - computed: true, optional: true, required: false
  private _sftpconfig = new GroupUserSettingsFilesystemSftpconfigOutputReference(this, "sftpconfig");
  public get sftpconfig() {
    return this._sftpconfig;
  }
  public putSftpconfig(value: GroupUserSettingsFilesystemSftpconfig) {
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
export interface GroupUserSettingsFiltersAccessTime {
  /**
  * Day of week, 0 Sunday, 6 Saturday
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#day_of_week Group#day_of_week}
  */
  readonly dayOfWeek: number;
  /**
  * Start time in HH:MM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#from Group#from}
  */
  readonly from: string;
  /**
  * End time in HH:MM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#to Group#to}
  */
  readonly to: string;
}

export function groupUserSettingsFiltersAccessTimeToTerraform(struct?: GroupUserSettingsFiltersAccessTime | cdktf.IResolvable): any {
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


export function groupUserSettingsFiltersAccessTimeToHclTerraform(struct?: GroupUserSettingsFiltersAccessTime | cdktf.IResolvable): any {
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

export class GroupUserSettingsFiltersAccessTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupUserSettingsFiltersAccessTime | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GroupUserSettingsFiltersAccessTime | cdktf.IResolvable | undefined) {
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

export class GroupUserSettingsFiltersAccessTimeList extends cdktf.ComplexList {
  public internalValue? : GroupUserSettingsFiltersAccessTime[] | cdktf.IResolvable

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
  public get(index: number): GroupUserSettingsFiltersAccessTimeOutputReference {
    return new GroupUserSettingsFiltersAccessTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupUserSettingsFiltersBandwidthLimits {
  /**
  * Maximum download bandwidth as KB/s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#download_bandwidth Group#download_bandwidth}
  */
  readonly downloadBandwidth?: number;
  /**
  * Source networks in CIDR notation as defined in RFC 4632 and RFC 4291 for example "192.0.2.0/24" or "2001:db8::/32". The limit applies if the defined networks contain the client IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#sources Group#sources}
  */
  readonly sources: string[];
  /**
  * Maximum upload bandwidth as KB/s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#upload_bandwidth Group#upload_bandwidth}
  */
  readonly uploadBandwidth?: number;
}

export function groupUserSettingsFiltersBandwidthLimitsToTerraform(struct?: GroupUserSettingsFiltersBandwidthLimits | cdktf.IResolvable): any {
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


export function groupUserSettingsFiltersBandwidthLimitsToHclTerraform(struct?: GroupUserSettingsFiltersBandwidthLimits | cdktf.IResolvable): any {
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

export class GroupUserSettingsFiltersBandwidthLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupUserSettingsFiltersBandwidthLimits | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GroupUserSettingsFiltersBandwidthLimits | cdktf.IResolvable | undefined) {
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

export class GroupUserSettingsFiltersBandwidthLimitsList extends cdktf.ComplexList {
  public internalValue? : GroupUserSettingsFiltersBandwidthLimits[] | cdktf.IResolvable

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
  public get(index: number): GroupUserSettingsFiltersBandwidthLimitsOutputReference {
    return new GroupUserSettingsFiltersBandwidthLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupUserSettingsFiltersFilePatterns {
  /**
  * Files/directories with these, case insensitive, patterns are allowed. Allowed file patterns are evaluated before the denied ones.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#allowed_patterns Group#allowed_patterns}
  */
  readonly allowedPatterns?: string[];
  /**
  * Files/directories with these, case insensitive, patterns are not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#denied_patterns Group#denied_patterns}
  */
  readonly deniedPatterns?: string[];
  /**
  * Set to 1 to hide denied files/directories in directory listing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#deny_policy Group#deny_policy}
  */
  readonly denyPolicy?: number;
  /**
  * Virtual path, if no other specific filter is defined, the filter applies for sub directories too.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#path Group#path}
  */
  readonly path: string;
}

export function groupUserSettingsFiltersFilePatternsToTerraform(struct?: GroupUserSettingsFiltersFilePatterns | cdktf.IResolvable): any {
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


export function groupUserSettingsFiltersFilePatternsToHclTerraform(struct?: GroupUserSettingsFiltersFilePatterns | cdktf.IResolvable): any {
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

export class GroupUserSettingsFiltersFilePatternsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupUserSettingsFiltersFilePatterns | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GroupUserSettingsFiltersFilePatterns | cdktf.IResolvable | undefined) {
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

export class GroupUserSettingsFiltersFilePatternsList extends cdktf.ComplexList {
  public internalValue? : GroupUserSettingsFiltersFilePatterns[] | cdktf.IResolvable

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
  public get(index: number): GroupUserSettingsFiltersFilePatternsOutputReference {
    return new GroupUserSettingsFiltersFilePatternsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupUserSettingsFilters {
  /**
  * Time periods in which access is allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#access_time Group#access_time}
  */
  readonly accessTime?: GroupUserSettingsFiltersAccessTime[] | cdktf.IResolvable;
  /**
  * If set, API Key authentication is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#allow_api_key_auth Group#allow_api_key_auth}
  */
  readonly allowApiKeyAuth?: boolean | cdktf.IResolvable;
  /**
  * Only connections from these IP/Mask are allowed. IP/Mask must be in CIDR notation as defined in RFC 4632 and RFC 4291 for example "192.0.2.0/24" or "2001:db8::/32"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#allowed_ip Group#allowed_ip}
  */
  readonly allowedIp?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#bandwidth_limits Group#bandwidth_limits}
  */
  readonly bandwidthLimits?: GroupUserSettingsFiltersBandwidthLimits[] | cdktf.IResolvable;
  /**
  * If set, check password hook will not be executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#check_password_disabled Group#check_password_disabled}
  */
  readonly checkPasswordDisabled?: boolean | cdktf.IResolvable;
  /**
  * Default expiration for newly created shares as number of days. Not set means no default expiration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#default_shares_expiration Group#default_shares_expiration}
  */
  readonly defaultSharesExpiration?: number;
  /**
  * Connections from these IP/Mask are allowed. Denied rules will be evaluated before allowed ones.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#denied_ip Group#denied_ip}
  */
  readonly deniedIp?: string[];
  /**
  * Disabled login methods. Valid values: "publickey", "password", "password-over-SSH", "keyboard-interactive", "publickey+password", "publickey+keyboard-interactive", "TLSCertificate", "TLSCertificate+password"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#denied_login_methods Group#denied_login_methods}
  */
  readonly deniedLoginMethods?: string[];
  /**
  * Disabled protocols. Valid values: SSH, FTP, DAV, HTTP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#denied_protocols Group#denied_protocols}
  */
  readonly deniedProtocols?: string[];
  /**
  * Disable checks for existence and automatic creation of home directory and virtual folders after user login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#disable_fs_checks Group#disable_fs_checks}
  */
  readonly disableFsChecks?: boolean | cdktf.IResolvable;
  /**
  * If enabled, only secure algorithms are allowed. This setting is currently enforced for SSH/SFTP. Available in the Enterprise edition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#enforce_secure_algorithms Group#enforce_secure_algorithms}
  */
  readonly enforceSecureAlgorithms?: boolean | cdktf.IResolvable;
  /**
  * Defines the cache time, in seconds, for users authenticated using an external auth hook. Not set means no cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#external_auth_cache_time Group#external_auth_cache_time}
  */
  readonly externalAuthCacheTime?: number;
  /**
  * If set, external auth hook will not be executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#external_auth_disabled Group#external_auth_disabled}
  */
  readonly externalAuthDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#file_patterns Group#file_patterns}
  */
  readonly filePatterns?: GroupUserSettingsFiltersFilePatterns[] | cdktf.IResolvable;
  /**
  * FTP security mode. Set to 1 to require TLS for both data and control connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#ftp_security Group#ftp_security}
  */
  readonly ftpSecurity?: number;
  /**
  * If enabled the user can login with any password or no password at all. Anonymous users are supported for FTP and WebDAV protocols and permissions will be automatically set to "list" and "download" (read only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#is_anonymous Group#is_anonymous}
  */
  readonly isAnonymous?: boolean | cdktf.IResolvable;
  /**
  * Maximum allowed expiration, as a number of days, when a user creates or updates a share. Not set means that non-expiring shares are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#max_shares_expiration Group#max_shares_expiration}
  */
  readonly maxSharesExpiration?: number;
  /**
  * Max size allowed for a single upload. Unset means no limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#max_upload_file_size Group#max_upload_file_size}
  */
  readonly maxUploadFileSize?: number;
  /**
  * The password expires after the defined number of days. Not set means no expiration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#password_expiration Group#password_expiration}
  */
  readonly passwordExpiration?: number;
  /**
  * Minimum password strength. Not set means disabled, any password will be accepted. Values in the 50-70 range are suggested for common use cases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#password_strength Group#password_strength}
  */
  readonly passwordStrength?: number;
  /**
  * If set, external pre-login hook will not be executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#pre_login_disabled Group#pre_login_disabled}
  */
  readonly preLoginDisabled?: boolean | cdktf.IResolvable;
  /**
  * Alternate starting directory. If not set, the default is "/". This option is supported for SFTP/SCP, FTP and HTTP (WebClient/REST API) protocols. Relative paths will use this directory as base.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#start_directory Group#start_directory}
  */
  readonly startDirectory?: string;
  /**
  * TLS certificate attribute to use as username. For FTP clients it must match the name provided using the "USER" command. For WebDAV, if no username is provided, the CN will be used as username. For WebDAV clients it must match the implicit or provided username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#tls_username Group#tls_username}
  */
  readonly tlsUsername?: string;
  /**
  * Defines protocols that require two factor authentication. Valid values: SSH, FTP, HTTP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#two_factor_protocols Group#two_factor_protocols}
  */
  readonly twoFactorProtocols?: string[];
  /**
  * Hint for authentication plugins. Valid values: LDAPUser, OSUser
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#user_type Group#user_type}
  */
  readonly userType?: string;
  /**
  * Web Client/user REST API restrictions. Valid values: write-disabled, password-change-disabled, password-reset-disabled, publickey-change-disabled, tls-cert-change-disabled, mfa-disabled, api-key-auth-change-disabled, info-change-disabled, shares-disabled, shares-without-password-disabled, shares-require-email-auth, wopi-disabled, rest-api-disabled. Only available in the Enterprise version: shares-require-email-auth, wopi-disabled, rest-api-disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#web_client Group#web_client}
  */
  readonly webClient?: string[];
}

export function groupUserSettingsFiltersToTerraform(struct?: GroupUserSettingsFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_time: cdktf.listMapper(groupUserSettingsFiltersAccessTimeToTerraform, false)(struct!.accessTime),
    allow_api_key_auth: cdktf.booleanToTerraform(struct!.allowApiKeyAuth),
    allowed_ip: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedIp),
    bandwidth_limits: cdktf.listMapper(groupUserSettingsFiltersBandwidthLimitsToTerraform, false)(struct!.bandwidthLimits),
    check_password_disabled: cdktf.booleanToTerraform(struct!.checkPasswordDisabled),
    default_shares_expiration: cdktf.numberToTerraform(struct!.defaultSharesExpiration),
    denied_ip: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deniedIp),
    denied_login_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deniedLoginMethods),
    denied_protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deniedProtocols),
    disable_fs_checks: cdktf.booleanToTerraform(struct!.disableFsChecks),
    enforce_secure_algorithms: cdktf.booleanToTerraform(struct!.enforceSecureAlgorithms),
    external_auth_cache_time: cdktf.numberToTerraform(struct!.externalAuthCacheTime),
    external_auth_disabled: cdktf.booleanToTerraform(struct!.externalAuthDisabled),
    file_patterns: cdktf.listMapper(groupUserSettingsFiltersFilePatternsToTerraform, false)(struct!.filePatterns),
    ftp_security: cdktf.numberToTerraform(struct!.ftpSecurity),
    is_anonymous: cdktf.booleanToTerraform(struct!.isAnonymous),
    max_shares_expiration: cdktf.numberToTerraform(struct!.maxSharesExpiration),
    max_upload_file_size: cdktf.numberToTerraform(struct!.maxUploadFileSize),
    password_expiration: cdktf.numberToTerraform(struct!.passwordExpiration),
    password_strength: cdktf.numberToTerraform(struct!.passwordStrength),
    pre_login_disabled: cdktf.booleanToTerraform(struct!.preLoginDisabled),
    start_directory: cdktf.stringToTerraform(struct!.startDirectory),
    tls_username: cdktf.stringToTerraform(struct!.tlsUsername),
    two_factor_protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.twoFactorProtocols),
    user_type: cdktf.stringToTerraform(struct!.userType),
    web_client: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.webClient),
  }
}


export function groupUserSettingsFiltersToHclTerraform(struct?: GroupUserSettingsFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_time: {
      value: cdktf.listMapperHcl(groupUserSettingsFiltersAccessTimeToHclTerraform, false)(struct!.accessTime),
      isBlock: true,
      type: "list",
      storageClassType: "GroupUserSettingsFiltersAccessTimeList",
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
      value: cdktf.listMapperHcl(groupUserSettingsFiltersBandwidthLimitsToHclTerraform, false)(struct!.bandwidthLimits),
      isBlock: true,
      type: "list",
      storageClassType: "GroupUserSettingsFiltersBandwidthLimitsList",
    },
    check_password_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.checkPasswordDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
      value: cdktf.listMapperHcl(groupUserSettingsFiltersFilePatternsToHclTerraform, false)(struct!.filePatterns),
      isBlock: true,
      type: "list",
      storageClassType: "GroupUserSettingsFiltersFilePatternsList",
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
    start_directory: {
      value: cdktf.stringToHclTerraform(struct!.startDirectory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class GroupUserSettingsFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupUserSettingsFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTime = this._accessTime?.internalValue;
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
    if (this._passwordStrength !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordStrength = this._passwordStrength;
    }
    if (this._preLoginDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.preLoginDisabled = this._preLoginDisabled;
    }
    if (this._startDirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDirectory = this._startDirectory;
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

  public set internalValue(value: GroupUserSettingsFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessTime.internalValue = undefined;
      this._allowApiKeyAuth = undefined;
      this._allowedIp = undefined;
      this._bandwidthLimits.internalValue = undefined;
      this._checkPasswordDisabled = undefined;
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
      this._passwordStrength = undefined;
      this._preLoginDisabled = undefined;
      this._startDirectory = undefined;
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
      this._allowApiKeyAuth = value.allowApiKeyAuth;
      this._allowedIp = value.allowedIp;
      this._bandwidthLimits.internalValue = value.bandwidthLimits;
      this._checkPasswordDisabled = value.checkPasswordDisabled;
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
      this._passwordStrength = value.passwordStrength;
      this._preLoginDisabled = value.preLoginDisabled;
      this._startDirectory = value.startDirectory;
      this._tlsUsername = value.tlsUsername;
      this._twoFactorProtocols = value.twoFactorProtocols;
      this._userType = value.userType;
      this._webClient = value.webClient;
    }
  }

  // access_time - computed: true, optional: true, required: false
  private _accessTime = new GroupUserSettingsFiltersAccessTimeList(this, "access_time", false);
  public get accessTime() {
    return this._accessTime;
  }
  public putAccessTime(value: GroupUserSettingsFiltersAccessTime[] | cdktf.IResolvable) {
    this._accessTime.internalValue = value;
  }
  public resetAccessTime() {
    this._accessTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTimeInput() {
    return this._accessTime.internalValue;
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
  private _bandwidthLimits = new GroupUserSettingsFiltersBandwidthLimitsList(this, "bandwidth_limits", false);
  public get bandwidthLimits() {
    return this._bandwidthLimits;
  }
  public putBandwidthLimits(value: GroupUserSettingsFiltersBandwidthLimits[] | cdktf.IResolvable) {
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
  private _filePatterns = new GroupUserSettingsFiltersFilePatternsList(this, "file_patterns", false);
  public get filePatterns() {
    return this._filePatterns;
  }
  public putFilePatterns(value: GroupUserSettingsFiltersFilePatterns[] | cdktf.IResolvable) {
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
export interface GroupUserSettings {
  /**
  * Maximum download bandwidth as KB/s. This is the default if no per-source limit match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#download_bandwidth Group#download_bandwidth}
  */
  readonly downloadBandwidth?: number;
  /**
  * Maximum data transfer allowed for downloads as MB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#download_data_transfer Group#download_data_transfer}
  */
  readonly downloadDataTransfer?: number;
  /**
  * Defines account expiration in number of days from creation. Not set means no expiration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#expires_in Group#expires_in}
  */
  readonly expiresIn?: number;
  /**
  * Filesystem configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#filesystem Group#filesystem}
  */
  readonly filesystem: GroupUserSettingsFilesystem;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#filters Group#filters}
  */
  readonly filters?: GroupUserSettingsFilters;
  /**
  * If not set and the filesystem provider is local (0), the root filesystem will not be overridden.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#home_dir Group#home_dir}
  */
  readonly homeDir?: string;
  /**
  * Maximum concurrent sessions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#max_sessions Group#max_sessions}
  */
  readonly maxSessions?: number;
  /**
  * Comma separated, per-directory, permissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#permissions Group#permissions}
  */
  readonly permissions?: { [key: string]: string };
  /**
  * Maximum number of files allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#quota_files Group#quota_files}
  */
  readonly quotaFiles?: number;
  /**
  * Maximum size allowed as bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#quota_size Group#quota_size}
  */
  readonly quotaSize?: number;
  /**
  * Maximum total data transfer as MB. You can set a total data transfer instead of the individual values for uploads and downloads.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#total_data_transfer Group#total_data_transfer}
  */
  readonly totalDataTransfer?: number;
  /**
  * Maximum upload bandwidth as KB/s. This is the default if no per-source limit match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#upload_bandwidth Group#upload_bandwidth}
  */
  readonly uploadBandwidth?: number;
  /**
  * Maximum data transfer allowed for uploads as MB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#upload_data_transfer Group#upload_data_transfer}
  */
  readonly uploadDataTransfer?: number;
}

export function groupUserSettingsToTerraform(struct?: GroupUserSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    download_bandwidth: cdktf.numberToTerraform(struct!.downloadBandwidth),
    download_data_transfer: cdktf.numberToTerraform(struct!.downloadDataTransfer),
    expires_in: cdktf.numberToTerraform(struct!.expiresIn),
    filesystem: groupUserSettingsFilesystemToTerraform(struct!.filesystem),
    filters: groupUserSettingsFiltersToTerraform(struct!.filters),
    home_dir: cdktf.stringToTerraform(struct!.homeDir),
    max_sessions: cdktf.numberToTerraform(struct!.maxSessions),
    permissions: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.permissions),
    quota_files: cdktf.numberToTerraform(struct!.quotaFiles),
    quota_size: cdktf.numberToTerraform(struct!.quotaSize),
    total_data_transfer: cdktf.numberToTerraform(struct!.totalDataTransfer),
    upload_bandwidth: cdktf.numberToTerraform(struct!.uploadBandwidth),
    upload_data_transfer: cdktf.numberToTerraform(struct!.uploadDataTransfer),
  }
}


export function groupUserSettingsToHclTerraform(struct?: GroupUserSettings | cdktf.IResolvable): any {
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
    download_data_transfer: {
      value: cdktf.numberToHclTerraform(struct!.downloadDataTransfer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    expires_in: {
      value: cdktf.numberToHclTerraform(struct!.expiresIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filesystem: {
      value: groupUserSettingsFilesystemToHclTerraform(struct!.filesystem),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupUserSettingsFilesystem",
    },
    filters: {
      value: groupUserSettingsFiltersToHclTerraform(struct!.filters),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupUserSettingsFilters",
    },
    home_dir: {
      value: cdktf.stringToHclTerraform(struct!.homeDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_sessions: {
      value: cdktf.numberToHclTerraform(struct!.maxSessions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    permissions: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.permissions),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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
    total_data_transfer: {
      value: cdktf.numberToHclTerraform(struct!.totalDataTransfer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    upload_bandwidth: {
      value: cdktf.numberToHclTerraform(struct!.uploadBandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    upload_data_transfer: {
      value: cdktf.numberToHclTerraform(struct!.uploadDataTransfer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupUserSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupUserSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._downloadBandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.downloadBandwidth = this._downloadBandwidth;
    }
    if (this._downloadDataTransfer !== undefined) {
      hasAnyValues = true;
      internalValueResult.downloadDataTransfer = this._downloadDataTransfer;
    }
    if (this._expiresIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiresIn = this._expiresIn;
    }
    if (this._filesystem?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filesystem = this._filesystem?.internalValue;
    }
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    if (this._homeDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.homeDir = this._homeDir;
    }
    if (this._maxSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSessions = this._maxSessions;
    }
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    if (this._quotaFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.quotaFiles = this._quotaFiles;
    }
    if (this._quotaSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.quotaSize = this._quotaSize;
    }
    if (this._totalDataTransfer !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalDataTransfer = this._totalDataTransfer;
    }
    if (this._uploadBandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.uploadBandwidth = this._uploadBandwidth;
    }
    if (this._uploadDataTransfer !== undefined) {
      hasAnyValues = true;
      internalValueResult.uploadDataTransfer = this._uploadDataTransfer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupUserSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._downloadBandwidth = undefined;
      this._downloadDataTransfer = undefined;
      this._expiresIn = undefined;
      this._filesystem.internalValue = undefined;
      this._filters.internalValue = undefined;
      this._homeDir = undefined;
      this._maxSessions = undefined;
      this._permissions = undefined;
      this._quotaFiles = undefined;
      this._quotaSize = undefined;
      this._totalDataTransfer = undefined;
      this._uploadBandwidth = undefined;
      this._uploadDataTransfer = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._downloadBandwidth = value.downloadBandwidth;
      this._downloadDataTransfer = value.downloadDataTransfer;
      this._expiresIn = value.expiresIn;
      this._filesystem.internalValue = value.filesystem;
      this._filters.internalValue = value.filters;
      this._homeDir = value.homeDir;
      this._maxSessions = value.maxSessions;
      this._permissions = value.permissions;
      this._quotaFiles = value.quotaFiles;
      this._quotaSize = value.quotaSize;
      this._totalDataTransfer = value.totalDataTransfer;
      this._uploadBandwidth = value.uploadBandwidth;
      this._uploadDataTransfer = value.uploadDataTransfer;
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

  // download_data_transfer - computed: true, optional: true, required: false
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

  // expires_in - computed: true, optional: true, required: false
  private _expiresIn?: number; 
  public get expiresIn() {
    return this.getNumberAttribute('expires_in');
  }
  public set expiresIn(value: number) {
    this._expiresIn = value;
  }
  public resetExpiresIn() {
    this._expiresIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresInInput() {
    return this._expiresIn;
  }

  // filesystem - computed: true, optional: false, required: true
  private _filesystem = new GroupUserSettingsFilesystemOutputReference(this, "filesystem");
  public get filesystem() {
    return this._filesystem;
  }
  public putFilesystem(value: GroupUserSettingsFilesystem) {
    this._filesystem.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filesystemInput() {
    return this._filesystem.internalValue;
  }

  // filters - computed: true, optional: true, required: false
  private _filters = new GroupUserSettingsFiltersOutputReference(this, "filters");
  public get filters() {
    return this._filters;
  }
  public putFilters(value: GroupUserSettingsFilters) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // home_dir - computed: true, optional: true, required: false
  private _homeDir?: string; 
  public get homeDir() {
    return this.getStringAttribute('home_dir');
  }
  public set homeDir(value: string) {
    this._homeDir = value;
  }
  public resetHomeDir() {
    this._homeDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homeDirInput() {
    return this._homeDir;
  }

  // max_sessions - computed: true, optional: true, required: false
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

  // permissions - computed: true, optional: true, required: false
  private _permissions?: { [key: string]: string }; 
  public get permissions() {
    return this.getStringMapAttribute('permissions');
  }
  public set permissions(value: { [key: string]: string }) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // quota_files - computed: true, optional: true, required: false
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

  // quota_size - computed: true, optional: true, required: false
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

  // total_data_transfer - computed: true, optional: true, required: false
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

  // upload_data_transfer - computed: true, optional: true, required: false
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
}
export interface GroupVirtualFoldersFilesystemAzblobconfig {
}

export function groupVirtualFoldersFilesystemAzblobconfigToTerraform(struct?: GroupVirtualFoldersFilesystemAzblobconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupVirtualFoldersFilesystemAzblobconfigToHclTerraform(struct?: GroupVirtualFoldersFilesystemAzblobconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupVirtualFoldersFilesystemAzblobconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupVirtualFoldersFilesystemAzblobconfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupVirtualFoldersFilesystemAzblobconfig | undefined) {
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
export interface GroupVirtualFoldersFilesystemCryptconfig {
}

export function groupVirtualFoldersFilesystemCryptconfigToTerraform(struct?: GroupVirtualFoldersFilesystemCryptconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupVirtualFoldersFilesystemCryptconfigToHclTerraform(struct?: GroupVirtualFoldersFilesystemCryptconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupVirtualFoldersFilesystemCryptconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupVirtualFoldersFilesystemCryptconfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupVirtualFoldersFilesystemCryptconfig | undefined) {
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
export interface GroupVirtualFoldersFilesystemGcsconfig {
}

export function groupVirtualFoldersFilesystemGcsconfigToTerraform(struct?: GroupVirtualFoldersFilesystemGcsconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupVirtualFoldersFilesystemGcsconfigToHclTerraform(struct?: GroupVirtualFoldersFilesystemGcsconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupVirtualFoldersFilesystemGcsconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupVirtualFoldersFilesystemGcsconfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupVirtualFoldersFilesystemGcsconfig | undefined) {
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
export interface GroupVirtualFoldersFilesystemHttpconfig {
}

export function groupVirtualFoldersFilesystemHttpconfigToTerraform(struct?: GroupVirtualFoldersFilesystemHttpconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupVirtualFoldersFilesystemHttpconfigToHclTerraform(struct?: GroupVirtualFoldersFilesystemHttpconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupVirtualFoldersFilesystemHttpconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupVirtualFoldersFilesystemHttpconfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupVirtualFoldersFilesystemHttpconfig | undefined) {
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
export interface GroupVirtualFoldersFilesystemOsconfig {
}

export function groupVirtualFoldersFilesystemOsconfigToTerraform(struct?: GroupVirtualFoldersFilesystemOsconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupVirtualFoldersFilesystemOsconfigToHclTerraform(struct?: GroupVirtualFoldersFilesystemOsconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupVirtualFoldersFilesystemOsconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupVirtualFoldersFilesystemOsconfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupVirtualFoldersFilesystemOsconfig | undefined) {
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
export interface GroupVirtualFoldersFilesystemS3Config {
}

export function groupVirtualFoldersFilesystemS3ConfigToTerraform(struct?: GroupVirtualFoldersFilesystemS3Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupVirtualFoldersFilesystemS3ConfigToHclTerraform(struct?: GroupVirtualFoldersFilesystemS3Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupVirtualFoldersFilesystemS3ConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupVirtualFoldersFilesystemS3Config | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupVirtualFoldersFilesystemS3Config | undefined) {
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
export interface GroupVirtualFoldersFilesystemSftpconfig {
}

export function groupVirtualFoldersFilesystemSftpconfigToTerraform(struct?: GroupVirtualFoldersFilesystemSftpconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupVirtualFoldersFilesystemSftpconfigToHclTerraform(struct?: GroupVirtualFoldersFilesystemSftpconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupVirtualFoldersFilesystemSftpconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupVirtualFoldersFilesystemSftpconfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupVirtualFoldersFilesystemSftpconfig | undefined) {
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
export interface GroupVirtualFoldersFilesystem {
}

export function groupVirtualFoldersFilesystemToTerraform(struct?: GroupVirtualFoldersFilesystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupVirtualFoldersFilesystemToHclTerraform(struct?: GroupVirtualFoldersFilesystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupVirtualFoldersFilesystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupVirtualFoldersFilesystem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupVirtualFoldersFilesystem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // azblobconfig - computed: true, optional: false, required: false
  private _azblobconfig = new GroupVirtualFoldersFilesystemAzblobconfigOutputReference(this, "azblobconfig");
  public get azblobconfig() {
    return this._azblobconfig;
  }

  // cryptconfig - computed: true, optional: false, required: false
  private _cryptconfig = new GroupVirtualFoldersFilesystemCryptconfigOutputReference(this, "cryptconfig");
  public get cryptconfig() {
    return this._cryptconfig;
  }

  // gcsconfig - computed: true, optional: false, required: false
  private _gcsconfig = new GroupVirtualFoldersFilesystemGcsconfigOutputReference(this, "gcsconfig");
  public get gcsconfig() {
    return this._gcsconfig;
  }

  // httpconfig - computed: true, optional: false, required: false
  private _httpconfig = new GroupVirtualFoldersFilesystemHttpconfigOutputReference(this, "httpconfig");
  public get httpconfig() {
    return this._httpconfig;
  }

  // osconfig - computed: true, optional: false, required: false
  private _osconfig = new GroupVirtualFoldersFilesystemOsconfigOutputReference(this, "osconfig");
  public get osconfig() {
    return this._osconfig;
  }

  // provider - computed: true, optional: false, required: false
  public get provider() {
    return this.getNumberAttribute('provider');
  }

  // s3config - computed: true, optional: false, required: false
  private _s3Config = new GroupVirtualFoldersFilesystemS3ConfigOutputReference(this, "s3config");
  public get s3Config() {
    return this._s3Config;
  }

  // sftpconfig - computed: true, optional: false, required: false
  private _sftpconfig = new GroupVirtualFoldersFilesystemSftpconfigOutputReference(this, "sftpconfig");
  public get sftpconfig() {
    return this._sftpconfig;
  }
}
export interface GroupVirtualFolders {
  /**
  * Optional description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#description Group#description}
  */
  readonly description?: string;
  /**
  * Last quota update as unix timestamp in milliseconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#last_quota_update Group#last_quota_update}
  */
  readonly lastQuotaUpdate?: number;
  /**
  * Absolute path to a local directory. This is the folder root path for local storage provider. For non-local filesystems it will store temporary files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#mapped_path Group#mapped_path}
  */
  readonly mappedPath?: string;
  /**
  * Unique folder name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Maximum number of files allowed. Not set means unlimited, -1 included in user quota
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#quota_files Group#quota_files}
  */
  readonly quotaFiles: number;
  /**
  * Maximum size allowed as bytes. Not set means unlimited, -1 included in user quota
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#quota_size Group#quota_size}
  */
  readonly quotaSize: number;
  /**
  * Used quota as number of files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#used_quota_files Group#used_quota_files}
  */
  readonly usedQuotaFiles?: number;
  /**
  * Used quota as bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#used_quota_size Group#used_quota_size}
  */
  readonly usedQuotaSize?: number;
  /**
  * The folder will be available on this path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#virtual_path Group#virtual_path}
  */
  readonly virtualPath: string;
}

export function groupVirtualFoldersToTerraform(struct?: GroupVirtualFolders | cdktf.IResolvable): any {
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


export function groupVirtualFoldersToHclTerraform(struct?: GroupVirtualFolders | cdktf.IResolvable): any {
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

export class GroupVirtualFoldersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupVirtualFolders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GroupVirtualFolders | cdktf.IResolvable | undefined) {
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
  private _filesystem = new GroupVirtualFoldersFilesystemOutputReference(this, "filesystem");
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

export class GroupVirtualFoldersList extends cdktf.ComplexList {
  public internalValue? : GroupVirtualFolders[] | cdktf.IResolvable

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
  public get(index: number): GroupVirtualFoldersOutputReference {
    return new GroupVirtualFoldersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group sftpgo_group}
*/
export class Group extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sftpgo_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Group resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Group to import
  * @param importFromId The id of the existing Group that should be imported. Refer to the {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Group to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sftpgo_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/group sftpgo_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupConfig
  */
  public constructor(scope: Construct, id: string, config: GroupConfig) {
    super(scope, id, {
      terraformResourceType: 'sftpgo_group',
      terraformGeneratorMetadata: {
        providerName: 'sftpgo',
        providerVersion: '0.0.18'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._name = config.name;
    this._userSettings.internalValue = config.userSettings;
    this._virtualFolders.internalValue = config.virtualFolders;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getNumberAttribute('updated_at');
  }

  // user_settings - computed: true, optional: true, required: false
  private _userSettings = new GroupUserSettingsOutputReference(this, "user_settings");
  public get userSettings() {
    return this._userSettings;
  }
  public putUserSettings(value: GroupUserSettings) {
    this._userSettings.internalValue = value;
  }
  public resetUserSettings() {
    this._userSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSettingsInput() {
    return this._userSettings.internalValue;
  }

  // virtual_folders - computed: false, optional: true, required: false
  private _virtualFolders = new GroupVirtualFoldersList(this, "virtual_folders", false);
  public get virtualFolders() {
    return this._virtualFolders;
  }
  public putVirtualFolders(value: GroupVirtualFolders[] | cdktf.IResolvable) {
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
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      user_settings: groupUserSettingsToTerraform(this._userSettings.internalValue),
      virtual_folders: cdktf.listMapper(groupVirtualFoldersToTerraform, false)(this._virtualFolders.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      user_settings: {
        value: groupUserSettingsToHclTerraform(this._userSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GroupUserSettings",
      },
      virtual_folders: {
        value: cdktf.listMapperHcl(groupVirtualFoldersToHclTerraform, false)(this._virtualFolders.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GroupVirtualFoldersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
