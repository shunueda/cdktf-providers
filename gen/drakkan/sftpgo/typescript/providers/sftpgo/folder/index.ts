// https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FolderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#description Folder#description}
  */
  readonly description?: string;
  /**
  * Filesystem configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#filesystem Folder#filesystem}
  */
  readonly filesystem: FolderFilesystem;
  /**
  * Absolute path to a local directory. This is the folder root path for local storage provider. For non-local filesystems it will store temporary files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#mapped_path Folder#mapped_path}
  */
  readonly mappedPath?: string;
  /**
  * Unique name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#name Folder#name}
  */
  readonly name: string;
}
export interface FolderFilesystemAzblobconfig {
  /**
  * Blob Access Tier. Not set means the container default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#access_tier Folder#access_tier}
  */
  readonly accessTier?: string;
  /**
  * Plain text account key. If you set a string in SFTPGo secret format, SFTPGo will keep the current secret on updates while the Terraform plan will save your value. Don't do this unless you are sure the values match (e.g because you imported an existing resource).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#account_key Folder#account_key}
  */
  readonly accountKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#account_name Folder#account_name}
  */
  readonly accountName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#container Folder#container}
  */
  readonly container?: string;
  /**
  * How many parts are downloaded in parallel. Default: 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#download_concurrency Folder#download_concurrency}
  */
  readonly downloadConcurrency?: number;
  /**
  * The buffer size (in MB) to use for multipart downloads. If this value is not set, the default value (5MB) will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#download_part_size Folder#download_part_size}
  */
  readonly downloadPartSize?: number;
  /**
  * Optional endpoint. Default is "blob.core.windows.net". If you use the emulator the endpoint must include the protocol, for example "http://127.0.0.1:10000".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#endpoint Folder#endpoint}
  */
  readonly endpoint?: string;
  /**
  * If specified then the SFTPGo user will be restricted to objects starting with the specified prefix. The prefix must not start with "/" and must end with "/"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#key_prefix Folder#key_prefix}
  */
  readonly keyPrefix?: string;
  /**
  * Plain text SAS URL. If you set a string in SFTPGo secret format, SFTPGo will keep the current secret on updates while the Terraform plan will save your value. Don't do this unless you are sure the values match (e.g because you imported an existing resource).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#sas_url Folder#sas_url}
  */
  readonly sasUrl?: string;
  /**
  * How many parts are uploaded in parallel. Default: 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#upload_concurrency Folder#upload_concurrency}
  */
  readonly uploadConcurrency?: number;
  /**
  * The buffer size (in MB) to use for multipart uploads. If this value is not set, the default value (5MB) will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#upload_part_size Folder#upload_part_size}
  */
  readonly uploadPartSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#use_emulator Folder#use_emulator}
  */
  readonly useEmulator?: boolean | cdktf.IResolvable;
}

export function folderFilesystemAzblobconfigToTerraform(struct?: FolderFilesystemAzblobconfig | cdktf.IResolvable): any {
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


export function folderFilesystemAzblobconfigToHclTerraform(struct?: FolderFilesystemAzblobconfig | cdktf.IResolvable): any {
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

export class FolderFilesystemAzblobconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FolderFilesystemAzblobconfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FolderFilesystemAzblobconfig | cdktf.IResolvable | undefined) {
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
export interface FolderFilesystemCryptconfig {
  /**
  * Plain text passphrase. If you set a string in SFTPGo secret format, SFTPGo will keep the current secret on updates while the Terraform plan will save your value. Don't do this unless you are sure the values match (e.g because you imported an existing resource).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#passphrase Folder#passphrase}
  */
  readonly passphrase?: string;
  /**
  * Optional read buffer size, as MB, to use for downloads. Omit to disable buffering, that's fine in most use cases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#read_buffer_size Folder#read_buffer_size}
  */
  readonly readBufferSize?: number;
  /**
  * Optional write buffer size, as MB, to use for uploads. Omit to disable buffering, that's fine in most use cases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#write_buffer_size Folder#write_buffer_size}
  */
  readonly writeBufferSize?: number;
}

export function folderFilesystemCryptconfigToTerraform(struct?: FolderFilesystemCryptconfig | cdktf.IResolvable): any {
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


export function folderFilesystemCryptconfigToHclTerraform(struct?: FolderFilesystemCryptconfig | cdktf.IResolvable): any {
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

export class FolderFilesystemCryptconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FolderFilesystemCryptconfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FolderFilesystemCryptconfig | cdktf.IResolvable | undefined) {
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
export interface FolderFilesystemFtpconfig {
  /**
  * FTP endpoint as host:port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#endpoint Folder#endpoint}
  */
  readonly endpoint: string;
  /**
  * Plain text password. If you set a string in SFTPGo secret format, SFTPGo will keep the current secret on updates while the Terraform plan will save your value. Don't do this unless you are sure the values match (e.g because you imported an existing resource).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#password Folder#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#skip_tls_verify Folder#skip_tls_verify}
  */
  readonly skipTlsVerify?: boolean | cdktf.IResolvable;
  /**
  * 0 disabled, 1 Explicit, 2 Implicit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#tls_mode Folder#tls_mode}
  */
  readonly tlsMode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#username Folder#username}
  */
  readonly username: string;
}

export function folderFilesystemFtpconfigToTerraform(struct?: FolderFilesystemFtpconfig | cdktf.IResolvable): any {
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


export function folderFilesystemFtpconfigToHclTerraform(struct?: FolderFilesystemFtpconfig | cdktf.IResolvable): any {
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

export class FolderFilesystemFtpconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FolderFilesystemFtpconfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FolderFilesystemFtpconfig | cdktf.IResolvable | undefined) {
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
export interface FolderFilesystemGcsconfig {
  /**
  * The ACL to apply to uploaded objects. Not set means the bucket default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#acl Folder#acl}
  */
  readonly acl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#automatic_credentials Folder#automatic_credentials}
  */
  readonly automaticCredentials?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#bucket Folder#bucket}
  */
  readonly bucket: string;
  /**
  * Plain text credentials. If you set a string in SFTPGo secret format, SFTPGo will keep the current secret on updates while the Terraform plan will save your value. Don't do this unless you are sure the values match (e.g because you imported an existing resource).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#credentials Folder#credentials}
  */
  readonly credentials?: string;
  /**
  * Set to 1 if Hierarchical namespace is enabled for the bucket. Available in the Enterprise edition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#hns Folder#hns}
  */
  readonly hns?: number;
  /**
  * If specified then the SFTPGo user will be restricted to objects starting with the specified prefix. The prefix must not start with "/" and must end with "/"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#key_prefix Folder#key_prefix}
  */
  readonly keyPrefix?: string;
  /**
  * The storage class to use when storing objects. Leave not set for default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#storage_class Folder#storage_class}
  */
  readonly storageClass?: string;
  /**
  * The maximum time allowed, in seconds, to upload a single chunk. The default value is 32. Not set means use the default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#upload_part_max_time Folder#upload_part_max_time}
  */
  readonly uploadPartMaxTime?: number;
  /**
  * The buffer size (in MB) to use for multipart uploads. The default value is 16MB. Not set means use the default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#upload_part_size Folder#upload_part_size}
  */
  readonly uploadPartSize?: number;
}

export function folderFilesystemGcsconfigToTerraform(struct?: FolderFilesystemGcsconfig | cdktf.IResolvable): any {
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


export function folderFilesystemGcsconfigToHclTerraform(struct?: FolderFilesystemGcsconfig | cdktf.IResolvable): any {
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

export class FolderFilesystemGcsconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FolderFilesystemGcsconfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FolderFilesystemGcsconfig | cdktf.IResolvable | undefined) {
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
export interface FolderFilesystemHttpconfig {
  /**
  * Plain text API key. If you set a string in SFTPGo secret format, SFTPGo will keep the current secret on updates while the Terraform plan will save your value. Don't do this unless you are sure the values match (e.g because you imported an existing resource).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#api_key Folder#api_key}
  */
  readonly apiKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#endpoint Folder#endpoint}
  */
  readonly endpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#equality_check_mode Folder#equality_check_mode}
  */
  readonly equalityCheckMode?: number;
  /**
  * Plain text password. If you set a string in SFTPGo secret format, SFTPGo will keep the current secret on updates while the Terraform plan will save your value. Don't do this unless you are sure the values match (e.g because you imported an existing resource).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#password Folder#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#skip_tls_verify Folder#skip_tls_verify}
  */
  readonly skipTlsVerify?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#username Folder#username}
  */
  readonly username?: string;
}

export function folderFilesystemHttpconfigToTerraform(struct?: FolderFilesystemHttpconfig | cdktf.IResolvable): any {
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


export function folderFilesystemHttpconfigToHclTerraform(struct?: FolderFilesystemHttpconfig | cdktf.IResolvable): any {
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

export class FolderFilesystemHttpconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FolderFilesystemHttpconfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FolderFilesystemHttpconfig | cdktf.IResolvable | undefined) {
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
export interface FolderFilesystemOsconfig {
  /**
  * Optional read buffer size, as MB, to use for downloads. Omit to disable buffering, that's fine in most use cases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#read_buffer_size Folder#read_buffer_size}
  */
  readonly readBufferSize?: number;
  /**
  * Optional write buffer size, as MB, to use for uploads. Omit to disable no buffering, that's fine in most use cases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#write_buffer_size Folder#write_buffer_size}
  */
  readonly writeBufferSize?: number;
}

export function folderFilesystemOsconfigToTerraform(struct?: FolderFilesystemOsconfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read_buffer_size: cdktf.numberToTerraform(struct!.readBufferSize),
    write_buffer_size: cdktf.numberToTerraform(struct!.writeBufferSize),
  }
}


export function folderFilesystemOsconfigToHclTerraform(struct?: FolderFilesystemOsconfig | cdktf.IResolvable): any {
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

export class FolderFilesystemOsconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FolderFilesystemOsconfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FolderFilesystemOsconfig | cdktf.IResolvable | undefined) {
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
export interface FolderFilesystemS3Config {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#access_key Folder#access_key}
  */
  readonly accessKey?: string;
  /**
  * Plain text access secret. If you set a string in SFTPGo secret format, SFTPGo will keep the current secret on updates while the Terraform plan will save your value. Don't do this unless you are sure the values match (e.g because you imported an existing resource).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#access_secret Folder#access_secret}
  */
  readonly accessSecret?: string;
  /**
  * The canned ACL to apply to uploaded objects. Not set means the bucket default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#acl Folder#acl}
  */
  readonly acl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#bucket Folder#bucket}
  */
  readonly bucket: string;
  /**
  * How many parts are downloaded in parallel. Not set means the default (5). Ignored for partial downloads.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#download_concurrency Folder#download_concurrency}
  */
  readonly downloadConcurrency?: number;
  /**
  * The maximum time allowed, in seconds, to download a single chunk. Not set means no timeout. Ignored for partial downloads.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#download_part_max_time Folder#download_part_max_time}
  */
  readonly downloadPartMaxTime?: number;
  /**
  * The buffer size (in MB) to use for multipart downloads. If this value is not set, the default value (5MB) will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#download_part_size Folder#download_part_size}
  */
  readonly downloadPartSize?: number;
  /**
  * The endpoint is generally required for S3 compatible backends. For AWS S3, leave not set to use the default endpoint for the specified region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#endpoint Folder#endpoint}
  */
  readonly endpoint?: string;
  /**
  * If set path-style addressing is used, i.e. http://s3.amazonaws.com/BUCKET/KEY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#force_path_style Folder#force_path_style}
  */
  readonly forcePathStyle?: boolean | cdktf.IResolvable;
  /**
  * If specified then the SFTPGo user will be restricted to objects starting with the specified prefix. The prefix must not start with "/" and must end with "/"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#key_prefix Folder#key_prefix}
  */
  readonly keyPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#region Folder#region}
  */
  readonly region?: string;
  /**
  * Optional IAM Role ARN to assume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#role_arn Folder#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Optional Session token that is a part of temporary security credentials provisioned by AWS STS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#session_token Folder#session_token}
  */
  readonly sessionToken?: string;
  /**
  * If set the S3 client accepts any TLS certificate presented by the server and any host name in that certificate. In this mode, TLS is susceptible to man-in-the-middle attacks. This should be used only for testing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#skip_tls_verify Folder#skip_tls_verify}
  */
  readonly skipTlsVerify?: boolean | cdktf.IResolvable;
  /**
  * Plain text Server-Side encryption key. If you set a string in SFTPGo secret format, SFTPGo will keep the current secret on updates while the Terraform plan will save your value. Don't do this unless you are sure the values match (e.g because you imported an existing resource).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#sse_customer_key Folder#sse_customer_key}
  */
  readonly sseCustomerKey?: string;
  /**
  * The storage class to use when storing objects. Leave not set for default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#storage_class Folder#storage_class}
  */
  readonly storageClass?: string;
  /**
  * How many parts are uploaded in parallel. Not set means the default (5).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#upload_concurrency Folder#upload_concurrency}
  */
  readonly uploadConcurrency?: number;
  /**
  * The maximum time allowed, in seconds, to upload a single chunk. Not set means no timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#upload_part_max_time Folder#upload_part_max_time}
  */
  readonly uploadPartMaxTime?: number;
  /**
  * The buffer size (in MB) to use for multipart uploads. If this value is not set, the default value (5MB) will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#upload_part_size Folder#upload_part_size}
  */
  readonly uploadPartSize?: number;
}

export function folderFilesystemS3ConfigToTerraform(struct?: FolderFilesystemS3Config | cdktf.IResolvable): any {
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


export function folderFilesystemS3ConfigToHclTerraform(struct?: FolderFilesystemS3Config | cdktf.IResolvable): any {
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

export class FolderFilesystemS3ConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FolderFilesystemS3Config | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FolderFilesystemS3Config | cdktf.IResolvable | undefined) {
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
export interface FolderFilesystemSftpconfig {
  /**
  * The buffer size (in MB) to use for uploads/downloads. Buffering could improve performance for high latency networks. With buffering enabled upload resume is not supported and a file cannot be opened for both reading and writing at the same time. Not set means disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#buffer_size Folder#buffer_size}
  */
  readonly bufferSize?: number;
  /**
  * Concurrent reads are safe to use and disabling them will degrade performance so they are enabled by default. Some servers automatically delete files once they are downloaded. Using concurrent reads is problematic with such servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#disable_concurrent_reads Folder#disable_concurrent_reads}
  */
  readonly disableConcurrentReads?: boolean | cdktf.IResolvable;
  /**
  * SFTP endpoint as host:port. Port is always required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#endpoint Folder#endpoint}
  */
  readonly endpoint: string;
  /**
  * Defines how to check if this config points to the same server as another config. By default both the endpoint and the username must match. 1 means that only the endpoint must match. If different configs point to the same server the renaming between the fs configs is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#equality_check_mode Folder#equality_check_mode}
  */
  readonly equalityCheckMode?: number;
  /**
  * SHA256 fingerprints to validate when connecting to the external SFTP server. If not set any host key will be accepted: this is a security risk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#fingerprints Folder#fingerprints}
  */
  readonly fingerprints?: string[];
  /**
  * Plain text passphrase for the private key. If you set a string in SFTPGo secret format, SFTPGo will keep the current secret on updates while the Terraform plan will save your value. Don't do this unless you are sure the values match (e.g because you imported an existing resource).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#key_passphrase Folder#key_passphrase}
  */
  readonly keyPassphrase?: string;
  /**
  * Plain text password. If you set a string in SFTPGo secret format, SFTPGo will keep the current secret on updates while the Terraform plan will save your value. Don't do this unless you are sure the values match (e.g because you imported an existing resource).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#password Folder#password}
  */
  readonly password?: string;
  /**
  * Similar to a chroot for local filesystem. Example: "/somedir/subdir".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#prefix Folder#prefix}
  */
  readonly prefix: string;
  /**
  * Plain text private key. If you set a string in SFTPGo secret format, SFTPGo will keep the current secret on updates while the Terraform plan will save your value. Don't do this unless you are sure the values match (e.g because you imported an existing resource).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#private_key Folder#private_key}
  */
  readonly privateKey?: string;
  /**
  * Plain text SOCKS password. If you set a string in SFTPGo secret format, SFTPGo will keep the current secret on updates while the Terraform plan will save your value. Don't do this unless you are sure the values match (e.g because you imported an existing resource). Available in the Enterprise edition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#socks_password Folder#socks_password}
  */
  readonly socksPassword?: string;
  /**
  * The address of the SOCKS proxy server, including schema, host, and port. Examples: socks5://127.0.0.1:1080, socks4://127.0.0.1:1080, socks4a://127.0.0.1:1080. Available in the Enterprise edition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#socks_proxy Folder#socks_proxy}
  */
  readonly socksProxy?: string;
  /**
  * The optional SOCKS username. Available in the Enterprise edition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#socks_username Folder#socks_username}
  */
  readonly socksUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#username Folder#username}
  */
  readonly username: string;
}

export function folderFilesystemSftpconfigToTerraform(struct?: FolderFilesystemSftpconfig | cdktf.IResolvable): any {
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


export function folderFilesystemSftpconfigToHclTerraform(struct?: FolderFilesystemSftpconfig | cdktf.IResolvable): any {
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

export class FolderFilesystemSftpconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FolderFilesystemSftpconfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FolderFilesystemSftpconfig | cdktf.IResolvable | undefined) {
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
export interface FolderFilesystem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#azblobconfig Folder#azblobconfig}
  */
  readonly azblobconfig?: FolderFilesystemAzblobconfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#cryptconfig Folder#cryptconfig}
  */
  readonly cryptconfig?: FolderFilesystemCryptconfig;
  /**
  * Available in the Enterprise edition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#ftpconfig Folder#ftpconfig}
  */
  readonly ftpconfig?: FolderFilesystemFtpconfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#gcsconfig Folder#gcsconfig}
  */
  readonly gcsconfig?: FolderFilesystemGcsconfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#httpconfig Folder#httpconfig}
  */
  readonly httpconfig?: FolderFilesystemHttpconfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#osconfig Folder#osconfig}
  */
  readonly osconfig?: FolderFilesystemOsconfig;
  /**
  * Provider. 0 = local filesystem, 1 = S3 Compatible, 2 = Google Cloud, 3 = Azure Blob, 4 = Local encrypted, 5 = SFTP, 6 = HTTP, 7 = FTP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#provider Folder#provider}
  */
  readonly provider: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#s3config Folder#s3config}
  */
  readonly s3Config?: FolderFilesystemS3Config;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#sftpconfig Folder#sftpconfig}
  */
  readonly sftpconfig?: FolderFilesystemSftpconfig;
}

export function folderFilesystemToTerraform(struct?: FolderFilesystem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azblobconfig: folderFilesystemAzblobconfigToTerraform(struct!.azblobconfig),
    cryptconfig: folderFilesystemCryptconfigToTerraform(struct!.cryptconfig),
    ftpconfig: folderFilesystemFtpconfigToTerraform(struct!.ftpconfig),
    gcsconfig: folderFilesystemGcsconfigToTerraform(struct!.gcsconfig),
    httpconfig: folderFilesystemHttpconfigToTerraform(struct!.httpconfig),
    osconfig: folderFilesystemOsconfigToTerraform(struct!.osconfig),
    provider: cdktf.numberToTerraform(struct!.provider),
    s3config: folderFilesystemS3ConfigToTerraform(struct!.s3Config),
    sftpconfig: folderFilesystemSftpconfigToTerraform(struct!.sftpconfig),
  }
}


export function folderFilesystemToHclTerraform(struct?: FolderFilesystem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azblobconfig: {
      value: folderFilesystemAzblobconfigToHclTerraform(struct!.azblobconfig),
      isBlock: true,
      type: "struct",
      storageClassType: "FolderFilesystemAzblobconfig",
    },
    cryptconfig: {
      value: folderFilesystemCryptconfigToHclTerraform(struct!.cryptconfig),
      isBlock: true,
      type: "struct",
      storageClassType: "FolderFilesystemCryptconfig",
    },
    ftpconfig: {
      value: folderFilesystemFtpconfigToHclTerraform(struct!.ftpconfig),
      isBlock: true,
      type: "struct",
      storageClassType: "FolderFilesystemFtpconfig",
    },
    gcsconfig: {
      value: folderFilesystemGcsconfigToHclTerraform(struct!.gcsconfig),
      isBlock: true,
      type: "struct",
      storageClassType: "FolderFilesystemGcsconfig",
    },
    httpconfig: {
      value: folderFilesystemHttpconfigToHclTerraform(struct!.httpconfig),
      isBlock: true,
      type: "struct",
      storageClassType: "FolderFilesystemHttpconfig",
    },
    osconfig: {
      value: folderFilesystemOsconfigToHclTerraform(struct!.osconfig),
      isBlock: true,
      type: "struct",
      storageClassType: "FolderFilesystemOsconfig",
    },
    provider: {
      value: cdktf.numberToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    s3config: {
      value: folderFilesystemS3ConfigToHclTerraform(struct!.s3Config),
      isBlock: true,
      type: "struct",
      storageClassType: "FolderFilesystemS3Config",
    },
    sftpconfig: {
      value: folderFilesystemSftpconfigToHclTerraform(struct!.sftpconfig),
      isBlock: true,
      type: "struct",
      storageClassType: "FolderFilesystemSftpconfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FolderFilesystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FolderFilesystem | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FolderFilesystem | cdktf.IResolvable | undefined) {
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
  private _azblobconfig = new FolderFilesystemAzblobconfigOutputReference(this, "azblobconfig");
  public get azblobconfig() {
    return this._azblobconfig;
  }
  public putAzblobconfig(value: FolderFilesystemAzblobconfig) {
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
  private _cryptconfig = new FolderFilesystemCryptconfigOutputReference(this, "cryptconfig");
  public get cryptconfig() {
    return this._cryptconfig;
  }
  public putCryptconfig(value: FolderFilesystemCryptconfig) {
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
  private _ftpconfig = new FolderFilesystemFtpconfigOutputReference(this, "ftpconfig");
  public get ftpconfig() {
    return this._ftpconfig;
  }
  public putFtpconfig(value: FolderFilesystemFtpconfig) {
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
  private _gcsconfig = new FolderFilesystemGcsconfigOutputReference(this, "gcsconfig");
  public get gcsconfig() {
    return this._gcsconfig;
  }
  public putGcsconfig(value: FolderFilesystemGcsconfig) {
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
  private _httpconfig = new FolderFilesystemHttpconfigOutputReference(this, "httpconfig");
  public get httpconfig() {
    return this._httpconfig;
  }
  public putHttpconfig(value: FolderFilesystemHttpconfig) {
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
  private _osconfig = new FolderFilesystemOsconfigOutputReference(this, "osconfig");
  public get osconfig() {
    return this._osconfig;
  }
  public putOsconfig(value: FolderFilesystemOsconfig) {
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
  private _s3Config = new FolderFilesystemS3ConfigOutputReference(this, "s3config");
  public get s3Config() {
    return this._s3Config;
  }
  public putS3Config(value: FolderFilesystemS3Config) {
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
  private _sftpconfig = new FolderFilesystemSftpconfigOutputReference(this, "sftpconfig");
  public get sftpconfig() {
    return this._sftpconfig;
  }
  public putSftpconfig(value: FolderFilesystemSftpconfig) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder sftpgo_folder}
*/
export class Folder extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sftpgo_folder";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Folder resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Folder to import
  * @param importFromId The id of the existing Folder that should be imported. Refer to the {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Folder to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sftpgo_folder", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/folder sftpgo_folder} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FolderConfig
  */
  public constructor(scope: Construct, id: string, config: FolderConfig) {
    super(scope, id, {
      terraformResourceType: 'sftpgo_folder',
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
    this._description = config.description;
    this._filesystem.internalValue = config.filesystem;
    this._mappedPath = config.mappedPath;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // filesystem - computed: false, optional: false, required: true
  private _filesystem = new FolderFilesystemOutputReference(this, "filesystem");
  public get filesystem() {
    return this._filesystem;
  }
  public putFilesystem(value: FolderFilesystem) {
    this._filesystem.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filesystemInput() {
    return this._filesystem.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_quota_update - computed: true, optional: false, required: false
  public get lastQuotaUpdate() {
    return this.getNumberAttribute('last_quota_update');
  }

  // mapped_path - computed: false, optional: true, required: false
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

  // used_quota_files - computed: true, optional: false, required: false
  public get usedQuotaFiles() {
    return this.getNumberAttribute('used_quota_files');
  }

  // used_quota_size - computed: true, optional: false, required: false
  public get usedQuotaSize() {
    return this.getNumberAttribute('used_quota_size');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      filesystem: folderFilesystemToTerraform(this._filesystem.internalValue),
      mapped_path: cdktf.stringToTerraform(this._mappedPath),
      name: cdktf.stringToTerraform(this._name),
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
      filesystem: {
        value: folderFilesystemToHclTerraform(this._filesystem.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FolderFilesystem",
      },
      mapped_path: {
        value: cdktf.stringToHclTerraform(this._mappedPath),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
