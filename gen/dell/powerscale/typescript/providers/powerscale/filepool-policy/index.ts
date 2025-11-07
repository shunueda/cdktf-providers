// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/filepool_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FilepoolPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of actions to be taken for matching files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/filepool_policy#actions FilepoolPolicy#actions}
  */
  readonly actions?: FilepoolPolicyActions[] | cdktf.IResolvable;
  /**
  * The order in which this policy should be applied (relative to other policies).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/filepool_policy#apply_order FilepoolPolicy#apply_order}
  */
  readonly applyOrder?: number;
  /**
  * A description for this File Pool Policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/filepool_policy#description FilepoolPolicy#description}
  */
  readonly description?: string;
  /**
  * Specifies the file matching rules for determining which files will be managed by this policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/filepool_policy#file_matching_pattern FilepoolPolicy#file_matching_pattern}
  */
  readonly fileMatchingPattern?: FilepoolPolicyFileMatchingPattern;
  /**
  * Specifies if the policy is default policy. Default policy applies to all files not selected by higher-priority policies. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/filepool_policy#is_default_policy FilepoolPolicy#is_default_policy}
  */
  readonly isDefaultPolicy?: boolean | cdktf.IResolvable;
  /**
  * A unique name for this policy. If the policy is default policy, its name should be "Default policy".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/filepool_policy#name FilepoolPolicy#name}
  */
  readonly name: string;
}
export interface FilepoolPolicyActionsCloudpoolPolicyActionCache {
  /**
  * Specifies cache expiration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/filepool_policy#expiration FilepoolPolicy#expiration}
  */
  readonly expiration?: number;
  /**
  * Specifies cache read ahead type. Acceptable values: partial, full.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/filepool_policy#read_ahead FilepoolPolicy#read_ahead}
  */
  readonly readAhead?: string;
  /**
  * Specifies cache type. Acceptable values: cached, no-cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/filepool_policy#type FilepoolPolicy#type}
  */
  readonly type?: string;
}

export function filepoolPolicyActionsCloudpoolPolicyActionCacheToTerraform(struct?: FilepoolPolicyActionsCloudpoolPolicyActionCache | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expiration: cdktf.numberToTerraform(struct!.expiration),
    read_ahead: cdktf.stringToTerraform(struct!.readAhead),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function filepoolPolicyActionsCloudpoolPolicyActionCacheToHclTerraform(struct?: FilepoolPolicyActionsCloudpoolPolicyActionCache | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expiration: {
      value: cdktf.numberToHclTerraform(struct!.expiration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_ahead: {
      value: cdktf.stringToHclTerraform(struct!.readAhead),
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

export class FilepoolPolicyActionsCloudpoolPolicyActionCacheOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FilepoolPolicyActionsCloudpoolPolicyActionCache | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expiration !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiration = this._expiration;
    }
    if (this._readAhead !== undefined) {
      hasAnyValues = true;
      internalValueResult.readAhead = this._readAhead;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilepoolPolicyActionsCloudpoolPolicyActionCache | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expiration = undefined;
      this._readAhead = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expiration = value.expiration;
      this._readAhead = value.readAhead;
      this._type = value.type;
    }
  }

  // expiration - computed: true, optional: true, required: false
  private _expiration?: number; 
  public get expiration() {
    return this.getNumberAttribute('expiration');
  }
  public set expiration(value: number) {
    this._expiration = value;
  }
  public resetExpiration() {
    this._expiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationInput() {
    return this._expiration;
  }

  // read_ahead - computed: true, optional: true, required: false
  private _readAhead?: string; 
  public get readAhead() {
    return this.getStringAttribute('read_ahead');
  }
  public set readAhead(value: string) {
    this._readAhead = value;
  }
  public resetReadAhead() {
    this._readAhead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readAheadInput() {
    return this._readAhead;
  }

  // type - computed: true, optional: true, required: false
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
export interface FilepoolPolicyActionsCloudpoolPolicyAction {
  /**
  * Specifies if files with snapshots should be archived.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/filepool_policy#archive_snapshot_files FilepoolPolicy#archive_snapshot_files}
  */
  readonly archiveSnapshotFiles?: boolean | cdktf.IResolvable;
  /**
  * Specifies default cloudpool cache settings for new filepool policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/filepool_policy#cache FilepoolPolicy#cache}
  */
  readonly cache?: FilepoolPolicyActionsCloudpoolPolicyActionCache;
  /**
  * Specifies if files should be compressed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/filepool_policy#compression FilepoolPolicy#compression}
  */
  readonly compression?: boolean | cdktf.IResolvable;
  /**
  * Specifies the minimum amount of time archived data will be retained in the cloud after deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/filepool_policy#data_retention FilepoolPolicy#data_retention}
  */
  readonly dataRetention?: number;
  /**
  * Specifies if files should be encrypted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/filepool_policy#encryption FilepoolPolicy#encryption}
  */
  readonly encryption?: boolean | cdktf.IResolvable;
  /**
  * The minimum amount of time cloud files will be retained after the creation of a full NDMP backup. (Used with NDMP backups only.  Not applicable to SyncIQ.) 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/filepool_policy#full_backup_retention FilepoolPolicy#full_backup_retention}
  */
  readonly fullBackupRetention?: number;
  /**
  * The minimum amount of time cloud files will be retained after the creation of a SyncIQ backup or an incremental NDMP backup. (Used with SyncIQ and NDMP backups.) 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/filepool_policy#incremental_backup_retention FilepoolPolicy#incremental_backup_retention}
  */
  readonly incrementalBackupRetention?: number;
  /**
  * Specifies the cloudPool storage target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/filepool_policy#pool FilepoolPolicy#pool}
  */
  readonly pool: string;
  /**
  * The minimum amount of time to wait before updating cloud data with local changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/filepool_policy#writeback_frequency FilepoolPolicy#writeback_frequency}
  */
  readonly writebackFrequency?: number;
}

export function filepoolPolicyActionsCloudpoolPolicyActionToTerraform(struct?: FilepoolPolicyActionsCloudpoolPolicyAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_snapshot_files: cdktf.booleanToTerraform(struct!.archiveSnapshotFiles),
    cache: filepoolPolicyActionsCloudpoolPolicyActionCacheToTerraform(struct!.cache),
    compression: cdktf.booleanToTerraform(struct!.compression),
    data_retention: cdktf.numberToTerraform(struct!.dataRetention),
    encryption: cdktf.booleanToTerraform(struct!.encryption),
    full_backup_retention: cdktf.numberToTerraform(struct!.fullBackupRetention),
    incremental_backup_retention: cdktf.numberToTerraform(struct!.incrementalBackupRetention),
    pool: cdktf.stringToTerraform(struct!.pool),
    writeback_frequency: cdktf.numberToTerraform(struct!.writebackFrequency),
  }
}


export function filepoolPolicyActionsCloudpoolPolicyActionToHclTerraform(struct?: FilepoolPolicyActionsCloudpoolPolicyAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archive_snapshot_files: {
      value: cdktf.booleanToHclTerraform(struct!.archiveSnapshotFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cache: {
      value: filepoolPolicyActionsCloudpoolPolicyActionCacheToHclTerraform(struct!.cache),
      isBlock: true,
      type: "struct",
      storageClassType: "FilepoolPolicyActionsCloudpoolPolicyActionCache",
    },
    compression: {
      value: cdktf.booleanToHclTerraform(struct!.compression),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    data_retention: {
      value: cdktf.numberToHclTerraform(struct!.dataRetention),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    encryption: {
      value: cdktf.booleanToHclTerraform(struct!.encryption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    full_backup_retention: {
      value: cdktf.numberToHclTerraform(struct!.fullBackupRetention),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    incremental_backup_retention: {
      value: cdktf.numberToHclTerraform(struct!.incrementalBackupRetention),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pool: {
      value: cdktf.stringToHclTerraform(struct!.pool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    writeback_frequency: {
      value: cdktf.numberToHclTerraform(struct!.writebackFrequency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FilepoolPolicyActionsCloudpoolPolicyActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FilepoolPolicyActionsCloudpoolPolicyAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archiveSnapshotFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveSnapshotFiles = this._archiveSnapshotFiles;
    }
    if (this._cache?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cache = this._cache?.internalValue;
    }
    if (this._compression !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression;
    }
    if (this._dataRetention !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataRetention = this._dataRetention;
    }
    if (this._encryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption;
    }
    if (this._fullBackupRetention !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullBackupRetention = this._fullBackupRetention;
    }
    if (this._incrementalBackupRetention !== undefined) {
      hasAnyValues = true;
      internalValueResult.incrementalBackupRetention = this._incrementalBackupRetention;
    }
    if (this._pool !== undefined) {
      hasAnyValues = true;
      internalValueResult.pool = this._pool;
    }
    if (this._writebackFrequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.writebackFrequency = this._writebackFrequency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilepoolPolicyActionsCloudpoolPolicyAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._archiveSnapshotFiles = undefined;
      this._cache.internalValue = undefined;
      this._compression = undefined;
      this._dataRetention = undefined;
      this._encryption = undefined;
      this._fullBackupRetention = undefined;
      this._incrementalBackupRetention = undefined;
      this._pool = undefined;
      this._writebackFrequency = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._archiveSnapshotFiles = value.archiveSnapshotFiles;
      this._cache.internalValue = value.cache;
      this._compression = value.compression;
      this._dataRetention = value.dataRetention;
      this._encryption = value.encryption;
      this._fullBackupRetention = value.fullBackupRetention;
      this._incrementalBackupRetention = value.incrementalBackupRetention;
      this._pool = value.pool;
      this._writebackFrequency = value.writebackFrequency;
    }
  }

  // archive_snapshot_files - computed: true, optional: true, required: false
  private _archiveSnapshotFiles?: boolean | cdktf.IResolvable; 
  public get archiveSnapshotFiles() {
    return this.getBooleanAttribute('archive_snapshot_files');
  }
  public set archiveSnapshotFiles(value: boolean | cdktf.IResolvable) {
    this._archiveSnapshotFiles = value;
  }
  public resetArchiveSnapshotFiles() {
    this._archiveSnapshotFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveSnapshotFilesInput() {
    return this._archiveSnapshotFiles;
  }

  // cache - computed: true, optional: true, required: false
  private _cache = new FilepoolPolicyActionsCloudpoolPolicyActionCacheOutputReference(this, "cache");
  public get cache() {
    return this._cache;
  }
  public putCache(value: FilepoolPolicyActionsCloudpoolPolicyActionCache) {
    this._cache.internalValue = value;
  }
  public resetCache() {
    this._cache.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheInput() {
    return this._cache.internalValue;
  }

  // compression - computed: true, optional: true, required: false
  private _compression?: boolean | cdktf.IResolvable; 
  public get compression() {
    return this.getBooleanAttribute('compression');
  }
  public set compression(value: boolean | cdktf.IResolvable) {
    this._compression = value;
  }
  public resetCompression() {
    this._compression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression;
  }

  // data_retention - computed: true, optional: true, required: false
  private _dataRetention?: number; 
  public get dataRetention() {
    return this.getNumberAttribute('data_retention');
  }
  public set dataRetention(value: number) {
    this._dataRetention = value;
  }
  public resetDataRetention() {
    this._dataRetention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataRetentionInput() {
    return this._dataRetention;
  }

  // encryption - computed: true, optional: true, required: false
  private _encryption?: boolean | cdktf.IResolvable; 
  public get encryption() {
    return this.getBooleanAttribute('encryption');
  }
  public set encryption(value: boolean | cdktf.IResolvable) {
    this._encryption = value;
  }
  public resetEncryption() {
    this._encryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption;
  }

  // full_backup_retention - computed: true, optional: true, required: false
  private _fullBackupRetention?: number; 
  public get fullBackupRetention() {
    return this.getNumberAttribute('full_backup_retention');
  }
  public set fullBackupRetention(value: number) {
    this._fullBackupRetention = value;
  }
  public resetFullBackupRetention() {
    this._fullBackupRetention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullBackupRetentionInput() {
    return this._fullBackupRetention;
  }

  // incremental_backup_retention - computed: true, optional: true, required: false
  private _incrementalBackupRetention?: number; 
  public get incrementalBackupRetention() {
    return this.getNumberAttribute('incremental_backup_retention');
  }
  public set incrementalBackupRetention(value: number) {
    this._incrementalBackupRetention = value;
  }
  public resetIncrementalBackupRetention() {
    this._incrementalBackupRetention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incrementalBackupRetentionInput() {
    return this._incrementalBackupRetention;
  }

  // pool - computed: false, optional: false, required: true
  private _pool?: string; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string) {
    this._pool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
  }

  // writeback_frequency - computed: true, optional: true, required: false
  private _writebackFrequency?: number; 
  public get writebackFrequency() {
    return this.getNumberAttribute('writeback_frequency');
  }
  public set writebackFrequency(value: number) {
    this._writebackFrequency = value;
  }
  public resetWritebackFrequency() {
    this._writebackFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writebackFrequencyInput() {
    return this._writebackFrequency;
  }
}
export interface FilepoolPolicyActionsDataStoragePolicyAction {
  /**
  * Specifies the SSD strategy. Acceptable values: metadata, metadata-write, data, avoid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/filepool_policy#ssd_strategy FilepoolPolicy#ssd_strategy}
  */
  readonly ssdStrategy: string;
  /**
  * Specifies the storage target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/filepool_policy#storagepool FilepoolPolicy#storagepool}
  */
  readonly storagepool: string;
}

export function filepoolPolicyActionsDataStoragePolicyActionToTerraform(struct?: FilepoolPolicyActionsDataStoragePolicyAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssd_strategy: cdktf.stringToTerraform(struct!.ssdStrategy),
    storagepool: cdktf.stringToTerraform(struct!.storagepool),
  }
}


export function filepoolPolicyActionsDataStoragePolicyActionToHclTerraform(struct?: FilepoolPolicyActionsDataStoragePolicyAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ssd_strategy: {
      value: cdktf.stringToHclTerraform(struct!.ssdStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storagepool: {
      value: cdktf.stringToHclTerraform(struct!.storagepool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FilepoolPolicyActionsDataStoragePolicyActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FilepoolPolicyActionsDataStoragePolicyAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ssdStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssdStrategy = this._ssdStrategy;
    }
    if (this._storagepool !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagepool = this._storagepool;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilepoolPolicyActionsDataStoragePolicyAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ssdStrategy = undefined;
      this._storagepool = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ssdStrategy = value.ssdStrategy;
      this._storagepool = value.storagepool;
    }
  }

  // ssd_strategy - computed: false, optional: false, required: true
  private _ssdStrategy?: string; 
  public get ssdStrategy() {
    return this.getStringAttribute('ssd_strategy');
  }
  public set ssdStrategy(value: string) {
    this._ssdStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ssdStrategyInput() {
    return this._ssdStrategy;
  }

  // storagepool - computed: false, optional: false, required: true
  private _storagepool?: string; 
  public get storagepool() {
    return this.getStringAttribute('storagepool');
  }
  public set storagepool(value: string) {
    this._storagepool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storagepoolInput() {
    return this._storagepool;
  }
}
export interface FilepoolPolicyActionsSnapshotStoragePolicyAction {
  /**
  * Specifies the SSD strategy. Acceptable values: metadata, metadata-write, data, avoid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/filepool_policy#ssd_strategy FilepoolPolicy#ssd_strategy}
  */
  readonly ssdStrategy: string;
  /**
  * Specifies the snapshot storage target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/filepool_policy#storagepool FilepoolPolicy#storagepool}
  */
  readonly storagepool: string;
}

export function filepoolPolicyActionsSnapshotStoragePolicyActionToTerraform(struct?: FilepoolPolicyActionsSnapshotStoragePolicyAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssd_strategy: cdktf.stringToTerraform(struct!.ssdStrategy),
    storagepool: cdktf.stringToTerraform(struct!.storagepool),
  }
}


export function filepoolPolicyActionsSnapshotStoragePolicyActionToHclTerraform(struct?: FilepoolPolicyActionsSnapshotStoragePolicyAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ssd_strategy: {
      value: cdktf.stringToHclTerraform(struct!.ssdStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storagepool: {
      value: cdktf.stringToHclTerraform(struct!.storagepool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FilepoolPolicyActionsSnapshotStoragePolicyActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FilepoolPolicyActionsSnapshotStoragePolicyAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ssdStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssdStrategy = this._ssdStrategy;
    }
    if (this._storagepool !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagepool = this._storagepool;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilepoolPolicyActionsSnapshotStoragePolicyAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ssdStrategy = undefined;
      this._storagepool = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ssdStrategy = value.ssdStrategy;
      this._storagepool = value.storagepool;
    }
  }

  // ssd_strategy - computed: false, optional: false, required: true
  private _ssdStrategy?: string; 
  public get ssdStrategy() {
    return this.getStringAttribute('ssd_strategy');
  }
  public set ssdStrategy(value: string) {
    this._ssdStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ssdStrategyInput() {
    return this._ssdStrategy;
  }

  // storagepool - computed: false, optional: false, required: true
  private _storagepool?: string; 
  public get storagepool() {
    return this.getStringAttribute('storagepool');
  }
  public set storagepool(value: string) {
    this._storagepool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storagepoolInput() {
    return this._storagepool;
  }
}
export interface FilepoolPolicyActions {
  /**
  * action_type Acceptable values: set_requested_protection, set_data_access_pattern, enable_coalescer, apply_data_storage_policy, apply_snapshot_storage_policy, set_cloudpool_policy, enable_packing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/filepool_policy#action_type FilepoolPolicy#action_type}
  */
  readonly actionType: string;
  /**
  * Action for set_cloudpool_policy type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/filepool_policy#cloudpool_policy_action FilepoolPolicy#cloudpool_policy_action}
  */
  readonly cloudpoolPolicyAction?: FilepoolPolicyActionsCloudpoolPolicyAction;
  /**
  * Action for set_data_access_pattern type. Set data access pattern optimization. Acceptable values: random, concurrency, streaming.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/filepool_policy#data_access_pattern_action FilepoolPolicy#data_access_pattern_action}
  */
  readonly dataAccessPatternAction?: string;
  /**
  * Action for apply_data_storage_policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/filepool_policy#data_storage_policy_action FilepoolPolicy#data_storage_policy_action}
  */
  readonly dataStoragePolicyAction?: FilepoolPolicyActionsDataStoragePolicyAction;
  /**
  * Action for enable_coalescer type. Set write performance optimization. True to enable SmartCache action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/filepool_policy#enable_coalescer_action FilepoolPolicy#enable_coalescer_action}
  */
  readonly enableCoalescerAction?: boolean | cdktf.IResolvable;
  /**
  * Action for enable_packing type. True to enable enable_packing action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/filepool_policy#enable_packing_action FilepoolPolicy#enable_packing_action}
  */
  readonly enablePackingAction?: boolean | cdktf.IResolvable;
  /**
  * Action for set_requested_protection type. Acceptable values: default, +1n, +2d:1n, +2n, +3d:1n, +3d:1n1d, +3n, +4d:1n, +4d:2n, +4n, 2x, 3x, 4x, 5x, 6x, 7x, 8x.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/filepool_policy#requested_protection_action FilepoolPolicy#requested_protection_action}
  */
  readonly requestedProtectionAction?: string;
  /**
  * Action for apply_snapshot_storage_policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/filepool_policy#snapshot_storage_policy_action FilepoolPolicy#snapshot_storage_policy_action}
  */
  readonly snapshotStoragePolicyAction?: FilepoolPolicyActionsSnapshotStoragePolicyAction;
}

export function filepoolPolicyActionsToTerraform(struct?: FilepoolPolicyActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_type: cdktf.stringToTerraform(struct!.actionType),
    cloudpool_policy_action: filepoolPolicyActionsCloudpoolPolicyActionToTerraform(struct!.cloudpoolPolicyAction),
    data_access_pattern_action: cdktf.stringToTerraform(struct!.dataAccessPatternAction),
    data_storage_policy_action: filepoolPolicyActionsDataStoragePolicyActionToTerraform(struct!.dataStoragePolicyAction),
    enable_coalescer_action: cdktf.booleanToTerraform(struct!.enableCoalescerAction),
    enable_packing_action: cdktf.booleanToTerraform(struct!.enablePackingAction),
    requested_protection_action: cdktf.stringToTerraform(struct!.requestedProtectionAction),
    snapshot_storage_policy_action: filepoolPolicyActionsSnapshotStoragePolicyActionToTerraform(struct!.snapshotStoragePolicyAction),
  }
}


export function filepoolPolicyActionsToHclTerraform(struct?: FilepoolPolicyActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_type: {
      value: cdktf.stringToHclTerraform(struct!.actionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudpool_policy_action: {
      value: filepoolPolicyActionsCloudpoolPolicyActionToHclTerraform(struct!.cloudpoolPolicyAction),
      isBlock: true,
      type: "struct",
      storageClassType: "FilepoolPolicyActionsCloudpoolPolicyAction",
    },
    data_access_pattern_action: {
      value: cdktf.stringToHclTerraform(struct!.dataAccessPatternAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_storage_policy_action: {
      value: filepoolPolicyActionsDataStoragePolicyActionToHclTerraform(struct!.dataStoragePolicyAction),
      isBlock: true,
      type: "struct",
      storageClassType: "FilepoolPolicyActionsDataStoragePolicyAction",
    },
    enable_coalescer_action: {
      value: cdktf.booleanToHclTerraform(struct!.enableCoalescerAction),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_packing_action: {
      value: cdktf.booleanToHclTerraform(struct!.enablePackingAction),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    requested_protection_action: {
      value: cdktf.stringToHclTerraform(struct!.requestedProtectionAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot_storage_policy_action: {
      value: filepoolPolicyActionsSnapshotStoragePolicyActionToHclTerraform(struct!.snapshotStoragePolicyAction),
      isBlock: true,
      type: "struct",
      storageClassType: "FilepoolPolicyActionsSnapshotStoragePolicyAction",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FilepoolPolicyActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FilepoolPolicyActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionType = this._actionType;
    }
    if (this._cloudpoolPolicyAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudpoolPolicyAction = this._cloudpoolPolicyAction?.internalValue;
    }
    if (this._dataAccessPatternAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataAccessPatternAction = this._dataAccessPatternAction;
    }
    if (this._dataStoragePolicyAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStoragePolicyAction = this._dataStoragePolicyAction?.internalValue;
    }
    if (this._enableCoalescerAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCoalescerAction = this._enableCoalescerAction;
    }
    if (this._enablePackingAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePackingAction = this._enablePackingAction;
    }
    if (this._requestedProtectionAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestedProtectionAction = this._requestedProtectionAction;
    }
    if (this._snapshotStoragePolicyAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotStoragePolicyAction = this._snapshotStoragePolicyAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilepoolPolicyActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionType = undefined;
      this._cloudpoolPolicyAction.internalValue = undefined;
      this._dataAccessPatternAction = undefined;
      this._dataStoragePolicyAction.internalValue = undefined;
      this._enableCoalescerAction = undefined;
      this._enablePackingAction = undefined;
      this._requestedProtectionAction = undefined;
      this._snapshotStoragePolicyAction.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionType = value.actionType;
      this._cloudpoolPolicyAction.internalValue = value.cloudpoolPolicyAction;
      this._dataAccessPatternAction = value.dataAccessPatternAction;
      this._dataStoragePolicyAction.internalValue = value.dataStoragePolicyAction;
      this._enableCoalescerAction = value.enableCoalescerAction;
      this._enablePackingAction = value.enablePackingAction;
      this._requestedProtectionAction = value.requestedProtectionAction;
      this._snapshotStoragePolicyAction.internalValue = value.snapshotStoragePolicyAction;
    }
  }

  // action_type - computed: false, optional: false, required: true
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // cloudpool_policy_action - computed: false, optional: true, required: false
  private _cloudpoolPolicyAction = new FilepoolPolicyActionsCloudpoolPolicyActionOutputReference(this, "cloudpool_policy_action");
  public get cloudpoolPolicyAction() {
    return this._cloudpoolPolicyAction;
  }
  public putCloudpoolPolicyAction(value: FilepoolPolicyActionsCloudpoolPolicyAction) {
    this._cloudpoolPolicyAction.internalValue = value;
  }
  public resetCloudpoolPolicyAction() {
    this._cloudpoolPolicyAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudpoolPolicyActionInput() {
    return this._cloudpoolPolicyAction.internalValue;
  }

  // data_access_pattern_action - computed: false, optional: true, required: false
  private _dataAccessPatternAction?: string; 
  public get dataAccessPatternAction() {
    return this.getStringAttribute('data_access_pattern_action');
  }
  public set dataAccessPatternAction(value: string) {
    this._dataAccessPatternAction = value;
  }
  public resetDataAccessPatternAction() {
    this._dataAccessPatternAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataAccessPatternActionInput() {
    return this._dataAccessPatternAction;
  }

  // data_storage_policy_action - computed: false, optional: true, required: false
  private _dataStoragePolicyAction = new FilepoolPolicyActionsDataStoragePolicyActionOutputReference(this, "data_storage_policy_action");
  public get dataStoragePolicyAction() {
    return this._dataStoragePolicyAction;
  }
  public putDataStoragePolicyAction(value: FilepoolPolicyActionsDataStoragePolicyAction) {
    this._dataStoragePolicyAction.internalValue = value;
  }
  public resetDataStoragePolicyAction() {
    this._dataStoragePolicyAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoragePolicyActionInput() {
    return this._dataStoragePolicyAction.internalValue;
  }

  // enable_coalescer_action - computed: false, optional: true, required: false
  private _enableCoalescerAction?: boolean | cdktf.IResolvable; 
  public get enableCoalescerAction() {
    return this.getBooleanAttribute('enable_coalescer_action');
  }
  public set enableCoalescerAction(value: boolean | cdktf.IResolvable) {
    this._enableCoalescerAction = value;
  }
  public resetEnableCoalescerAction() {
    this._enableCoalescerAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCoalescerActionInput() {
    return this._enableCoalescerAction;
  }

  // enable_packing_action - computed: false, optional: true, required: false
  private _enablePackingAction?: boolean | cdktf.IResolvable; 
  public get enablePackingAction() {
    return this.getBooleanAttribute('enable_packing_action');
  }
  public set enablePackingAction(value: boolean | cdktf.IResolvable) {
    this._enablePackingAction = value;
  }
  public resetEnablePackingAction() {
    this._enablePackingAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePackingActionInput() {
    return this._enablePackingAction;
  }

  // requested_protection_action - computed: false, optional: true, required: false
  private _requestedProtectionAction?: string; 
  public get requestedProtectionAction() {
    return this.getStringAttribute('requested_protection_action');
  }
  public set requestedProtectionAction(value: string) {
    this._requestedProtectionAction = value;
  }
  public resetRequestedProtectionAction() {
    this._requestedProtectionAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestedProtectionActionInput() {
    return this._requestedProtectionAction;
  }

  // snapshot_storage_policy_action - computed: false, optional: true, required: false
  private _snapshotStoragePolicyAction = new FilepoolPolicyActionsSnapshotStoragePolicyActionOutputReference(this, "snapshot_storage_policy_action");
  public get snapshotStoragePolicyAction() {
    return this._snapshotStoragePolicyAction;
  }
  public putSnapshotStoragePolicyAction(value: FilepoolPolicyActionsSnapshotStoragePolicyAction) {
    this._snapshotStoragePolicyAction.internalValue = value;
  }
  public resetSnapshotStoragePolicyAction() {
    this._snapshotStoragePolicyAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotStoragePolicyActionInput() {
    return this._snapshotStoragePolicyAction.internalValue;
  }
}

export class FilepoolPolicyActionsList extends cdktf.ComplexList {
  public internalValue? : FilepoolPolicyActions[] | cdktf.IResolvable

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
  public get(index: number): FilepoolPolicyActionsOutputReference {
    return new FilepoolPolicyActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FilepoolPolicyFileMatchingPatternOrCriteriaAndCriteria {
  /**
  * Indicates whether the existence of an attribute indicates a match (valid only with 'type' = 'custom_attribute').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/filepool_policy#attribute_exists FilepoolPolicy#attribute_exists}
  */
  readonly attributeExists?: boolean | cdktf.IResolvable;
  /**
  * True to match the path exactly, False to match any subtree. (valid only with 'type' = 'path').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/filepool_policy#begins_with FilepoolPolicy#begins_with}
  */
  readonly beginsWith?: boolean | cdktf.IResolvable;
  /**
  * True to indicate case sensitivity when comparing file attributes (valid only with 'type' = 'name' or 'type' = 'path').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/filepool_policy#case_sensitive FilepoolPolicy#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * File attribute field name to be compared in a custom comparison (valid only with 'type' = 'custom_attribute').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/filepool_policy#field FilepoolPolicy#field}
  */
  readonly field?: string;
  /**
  * The comparison operator to use while comparing an attribute with its value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/filepool_policy#operator FilepoolPolicy#operator}
  */
  readonly operator?: string;
  /**
  * The file attribute to be compared to a given value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/filepool_policy#type FilepoolPolicy#type}
  */
  readonly type: string;
  /**
  * Size unit value. One of 'B','KB','MB','GB','TB','PB','EB' (valid only with 'type' = 'size').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/filepool_policy#units FilepoolPolicy#units}
  */
  readonly units?: string;
  /**
  * Whether time units refer to a calendar date and time (e.g., Jun 3, 2009) or a relative duration (e.g., 2 weeks) (valid only with 'type' in {accessed_time, birth_time, changed_time or metadata_changed_time}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/filepool_policy#use_relative_time FilepoolPolicy#use_relative_time}
  */
  readonly useRelativeTime?: boolean | cdktf.IResolvable;
  /**
  * The value to be compared against a file attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/filepool_policy#value FilepoolPolicy#value}
  */
  readonly value?: string;
}

export function filepoolPolicyFileMatchingPatternOrCriteriaAndCriteriaToTerraform(struct?: FilepoolPolicyFileMatchingPatternOrCriteriaAndCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_exists: cdktf.booleanToTerraform(struct!.attributeExists),
    begins_with: cdktf.booleanToTerraform(struct!.beginsWith),
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    field: cdktf.stringToTerraform(struct!.field),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    units: cdktf.stringToTerraform(struct!.units),
    use_relative_time: cdktf.booleanToTerraform(struct!.useRelativeTime),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function filepoolPolicyFileMatchingPatternOrCriteriaAndCriteriaToHclTerraform(struct?: FilepoolPolicyFileMatchingPatternOrCriteriaAndCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_exists: {
      value: cdktf.booleanToHclTerraform(struct!.attributeExists),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    begins_with: {
      value: cdktf.booleanToHclTerraform(struct!.beginsWith),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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
    units: {
      value: cdktf.stringToHclTerraform(struct!.units),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_relative_time: {
      value: cdktf.booleanToHclTerraform(struct!.useRelativeTime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class FilepoolPolicyFileMatchingPatternOrCriteriaAndCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FilepoolPolicyFileMatchingPatternOrCriteriaAndCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeExists !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeExists = this._attributeExists;
    }
    if (this._beginsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.beginsWith = this._beginsWith;
    }
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._units !== undefined) {
      hasAnyValues = true;
      internalValueResult.units = this._units;
    }
    if (this._useRelativeTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.useRelativeTime = this._useRelativeTime;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilepoolPolicyFileMatchingPatternOrCriteriaAndCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeExists = undefined;
      this._beginsWith = undefined;
      this._caseSensitive = undefined;
      this._field = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._units = undefined;
      this._useRelativeTime = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeExists = value.attributeExists;
      this._beginsWith = value.beginsWith;
      this._caseSensitive = value.caseSensitive;
      this._field = value.field;
      this._operator = value.operator;
      this._type = value.type;
      this._units = value.units;
      this._useRelativeTime = value.useRelativeTime;
      this._value = value.value;
    }
  }

  // attribute_exists - computed: false, optional: true, required: false
  private _attributeExists?: boolean | cdktf.IResolvable; 
  public get attributeExists() {
    return this.getBooleanAttribute('attribute_exists');
  }
  public set attributeExists(value: boolean | cdktf.IResolvable) {
    this._attributeExists = value;
  }
  public resetAttributeExists() {
    this._attributeExists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeExistsInput() {
    return this._attributeExists;
  }

  // begins_with - computed: false, optional: true, required: false
  private _beginsWith?: boolean | cdktf.IResolvable; 
  public get beginsWith() {
    return this.getBooleanAttribute('begins_with');
  }
  public set beginsWith(value: boolean | cdktf.IResolvable) {
    this._beginsWith = value;
  }
  public resetBeginsWith() {
    this._beginsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beginsWithInput() {
    return this._beginsWith;
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // units - computed: false, optional: true, required: false
  private _units?: string; 
  public get units() {
    return this.getStringAttribute('units');
  }
  public set units(value: string) {
    this._units = value;
  }
  public resetUnits() {
    this._units = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitsInput() {
    return this._units;
  }

  // use_relative_time - computed: false, optional: true, required: false
  private _useRelativeTime?: boolean | cdktf.IResolvable; 
  public get useRelativeTime() {
    return this.getBooleanAttribute('use_relative_time');
  }
  public set useRelativeTime(value: boolean | cdktf.IResolvable) {
    this._useRelativeTime = value;
  }
  public resetUseRelativeTime() {
    this._useRelativeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRelativeTimeInput() {
    return this._useRelativeTime;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class FilepoolPolicyFileMatchingPatternOrCriteriaAndCriteriaList extends cdktf.ComplexList {
  public internalValue? : FilepoolPolicyFileMatchingPatternOrCriteriaAndCriteria[] | cdktf.IResolvable

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
  public get(index: number): FilepoolPolicyFileMatchingPatternOrCriteriaAndCriteriaOutputReference {
    return new FilepoolPolicyFileMatchingPatternOrCriteriaAndCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FilepoolPolicyFileMatchingPatternOrCriteria {
  /**
  * List of and_criteria file matching rules for this policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/filepool_policy#and_criteria FilepoolPolicy#and_criteria}
  */
  readonly andCriteria: FilepoolPolicyFileMatchingPatternOrCriteriaAndCriteria[] | cdktf.IResolvable;
}

export function filepoolPolicyFileMatchingPatternOrCriteriaToTerraform(struct?: FilepoolPolicyFileMatchingPatternOrCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    and_criteria: cdktf.listMapper(filepoolPolicyFileMatchingPatternOrCriteriaAndCriteriaToTerraform, false)(struct!.andCriteria),
  }
}


export function filepoolPolicyFileMatchingPatternOrCriteriaToHclTerraform(struct?: FilepoolPolicyFileMatchingPatternOrCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    and_criteria: {
      value: cdktf.listMapperHcl(filepoolPolicyFileMatchingPatternOrCriteriaAndCriteriaToHclTerraform, false)(struct!.andCriteria),
      isBlock: true,
      type: "list",
      storageClassType: "FilepoolPolicyFileMatchingPatternOrCriteriaAndCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FilepoolPolicyFileMatchingPatternOrCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FilepoolPolicyFileMatchingPatternOrCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._andCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.andCriteria = this._andCriteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilepoolPolicyFileMatchingPatternOrCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._andCriteria.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._andCriteria.internalValue = value.andCriteria;
    }
  }

  // and_criteria - computed: false, optional: false, required: true
  private _andCriteria = new FilepoolPolicyFileMatchingPatternOrCriteriaAndCriteriaList(this, "and_criteria", false);
  public get andCriteria() {
    return this._andCriteria;
  }
  public putAndCriteria(value: FilepoolPolicyFileMatchingPatternOrCriteriaAndCriteria[] | cdktf.IResolvable) {
    this._andCriteria.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get andCriteriaInput() {
    return this._andCriteria.internalValue;
  }
}

export class FilepoolPolicyFileMatchingPatternOrCriteriaList extends cdktf.ComplexList {
  public internalValue? : FilepoolPolicyFileMatchingPatternOrCriteria[] | cdktf.IResolvable

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
  public get(index: number): FilepoolPolicyFileMatchingPatternOrCriteriaOutputReference {
    return new FilepoolPolicyFileMatchingPatternOrCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FilepoolPolicyFileMatchingPattern {
  /**
  * List of or_criteria file matching rules for this policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/filepool_policy#or_criteria FilepoolPolicy#or_criteria}
  */
  readonly orCriteria: FilepoolPolicyFileMatchingPatternOrCriteria[] | cdktf.IResolvable;
}

export function filepoolPolicyFileMatchingPatternToTerraform(struct?: FilepoolPolicyFileMatchingPattern | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    or_criteria: cdktf.listMapper(filepoolPolicyFileMatchingPatternOrCriteriaToTerraform, false)(struct!.orCriteria),
  }
}


export function filepoolPolicyFileMatchingPatternToHclTerraform(struct?: FilepoolPolicyFileMatchingPattern | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    or_criteria: {
      value: cdktf.listMapperHcl(filepoolPolicyFileMatchingPatternOrCriteriaToHclTerraform, false)(struct!.orCriteria),
      isBlock: true,
      type: "list",
      storageClassType: "FilepoolPolicyFileMatchingPatternOrCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FilepoolPolicyFileMatchingPatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FilepoolPolicyFileMatchingPattern | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._orCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.orCriteria = this._orCriteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FilepoolPolicyFileMatchingPattern | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._orCriteria.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._orCriteria.internalValue = value.orCriteria;
    }
  }

  // or_criteria - computed: false, optional: false, required: true
  private _orCriteria = new FilepoolPolicyFileMatchingPatternOrCriteriaList(this, "or_criteria", false);
  public get orCriteria() {
    return this._orCriteria;
  }
  public putOrCriteria(value: FilepoolPolicyFileMatchingPatternOrCriteria[] | cdktf.IResolvable) {
    this._orCriteria.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orCriteriaInput() {
    return this._orCriteria.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/filepool_policy powerscale_filepool_policy}
*/
export class FilepoolPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_filepool_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FilepoolPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FilepoolPolicy to import
  * @param importFromId The id of the existing FilepoolPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/filepool_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FilepoolPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_filepool_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/filepool_policy powerscale_filepool_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FilepoolPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: FilepoolPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'powerscale_filepool_policy',
      terraformGeneratorMetadata: {
        providerName: 'powerscale',
        providerVersion: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actions.internalValue = config.actions;
    this._applyOrder = config.applyOrder;
    this._description = config.description;
    this._fileMatchingPattern.internalValue = config.fileMatchingPattern;
    this._isDefaultPolicy = config.isDefaultPolicy;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actions - computed: false, optional: true, required: false
  private _actions = new FilepoolPolicyActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: FilepoolPolicyActions[] | cdktf.IResolvable) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // apply_order - computed: true, optional: true, required: false
  private _applyOrder?: number; 
  public get applyOrder() {
    return this.getNumberAttribute('apply_order');
  }
  public set applyOrder(value: number) {
    this._applyOrder = value;
  }
  public resetApplyOrder() {
    this._applyOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyOrderInput() {
    return this._applyOrder;
  }

  // birth_cluster_id - computed: true, optional: false, required: false
  public get birthClusterId() {
    return this.getStringAttribute('birth_cluster_id');
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

  // file_matching_pattern - computed: false, optional: true, required: false
  private _fileMatchingPattern = new FilepoolPolicyFileMatchingPatternOutputReference(this, "file_matching_pattern");
  public get fileMatchingPattern() {
    return this._fileMatchingPattern;
  }
  public putFileMatchingPattern(value: FilepoolPolicyFileMatchingPattern) {
    this._fileMatchingPattern.internalValue = value;
  }
  public resetFileMatchingPattern() {
    this._fileMatchingPattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileMatchingPatternInput() {
    return this._fileMatchingPattern.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_default_policy - computed: false, optional: true, required: false
  private _isDefaultPolicy?: boolean | cdktf.IResolvable; 
  public get isDefaultPolicy() {
    return this.getBooleanAttribute('is_default_policy');
  }
  public set isDefaultPolicy(value: boolean | cdktf.IResolvable) {
    this._isDefaultPolicy = value;
  }
  public resetIsDefaultPolicy() {
    this._isDefaultPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultPolicyInput() {
    return this._isDefaultPolicy;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_details - computed: true, optional: false, required: false
  public get stateDetails() {
    return this.getStringAttribute('state_details');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      actions: cdktf.listMapper(filepoolPolicyActionsToTerraform, false)(this._actions.internalValue),
      apply_order: cdktf.numberToTerraform(this._applyOrder),
      description: cdktf.stringToTerraform(this._description),
      file_matching_pattern: filepoolPolicyFileMatchingPatternToTerraform(this._fileMatchingPattern.internalValue),
      is_default_policy: cdktf.booleanToTerraform(this._isDefaultPolicy),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      actions: {
        value: cdktf.listMapperHcl(filepoolPolicyActionsToHclTerraform, false)(this._actions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FilepoolPolicyActionsList",
      },
      apply_order: {
        value: cdktf.numberToHclTerraform(this._applyOrder),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_matching_pattern: {
        value: filepoolPolicyFileMatchingPatternToHclTerraform(this._fileMatchingPattern.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FilepoolPolicyFileMatchingPattern",
      },
      is_default_policy: {
        value: cdktf.booleanToHclTerraform(this._isDefaultPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
