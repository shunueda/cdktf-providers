// https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/backup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BackupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/backup#bucket_id Backup#bucket_id}
  */
  readonly bucketId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/backup#cluster_id Backup#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/backup#organization_id Backup#organization_id}
  */
  readonly organizationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/backup#project_id Backup#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/backup#restore Backup#restore}
  */
  readonly restore?: BackupRestore;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/backup#restore_before Backup#restore_before}
  */
  readonly restoreBefore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/backup#restore_times Backup#restore_times}
  */
  readonly restoreTimes?: number;
}
export interface BackupBackupStats {
}

export function backupBackupStatsToTerraform(struct?: BackupBackupStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function backupBackupStatsToHclTerraform(struct?: BackupBackupStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BackupBackupStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BackupBackupStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupBackupStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cbas - computed: true, optional: false, required: false
  public get cbas() {
    return this.getNumberAttribute('cbas');
  }

  // event - computed: true, optional: false, required: false
  public get event() {
    return this.getNumberAttribute('event');
  }

  // fts - computed: true, optional: false, required: false
  public get fts() {
    return this.getNumberAttribute('fts');
  }

  // gsi - computed: true, optional: false, required: false
  public get gsi() {
    return this.getNumberAttribute('gsi');
  }

  // items - computed: true, optional: false, required: false
  public get items() {
    return this.getNumberAttribute('items');
  }

  // mutations - computed: true, optional: false, required: false
  public get mutations() {
    return this.getNumberAttribute('mutations');
  }

  // size_in_mb - computed: true, optional: false, required: false
  public get sizeInMb() {
    return this.getNumberAttribute('size_in_mb');
  }

  // tombstones - computed: true, optional: false, required: false
  public get tombstones() {
    return this.getNumberAttribute('tombstones');
  }
}
export interface BackupRestore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/backup#auto_remove_collections Backup#auto_remove_collections}
  */
  readonly autoRemoveCollections?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/backup#exclude_data Backup#exclude_data}
  */
  readonly excludeData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/backup#filter_keys Backup#filter_keys}
  */
  readonly filterKeys?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/backup#filter_values Backup#filter_values}
  */
  readonly filterValues?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/backup#force_updates Backup#force_updates}
  */
  readonly forceUpdates?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/backup#include_data Backup#include_data}
  */
  readonly includeData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/backup#map_data Backup#map_data}
  */
  readonly mapData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/backup#replace_ttl Backup#replace_ttl}
  */
  readonly replaceTtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/backup#replace_ttl_with Backup#replace_ttl_with}
  */
  readonly replaceTtlWith?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/backup#services Backup#services}
  */
  readonly services: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/backup#source_cluster_id Backup#source_cluster_id}
  */
  readonly sourceClusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/backup#target_cluster_id Backup#target_cluster_id}
  */
  readonly targetClusterId: string;
}

export function backupRestoreToTerraform(struct?: BackupRestore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_remove_collections: cdktf.booleanToTerraform(struct!.autoRemoveCollections),
    exclude_data: cdktf.stringToTerraform(struct!.excludeData),
    filter_keys: cdktf.stringToTerraform(struct!.filterKeys),
    filter_values: cdktf.stringToTerraform(struct!.filterValues),
    force_updates: cdktf.booleanToTerraform(struct!.forceUpdates),
    include_data: cdktf.stringToTerraform(struct!.includeData),
    map_data: cdktf.stringToTerraform(struct!.mapData),
    replace_ttl: cdktf.stringToTerraform(struct!.replaceTtl),
    replace_ttl_with: cdktf.stringToTerraform(struct!.replaceTtlWith),
    services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.services),
    source_cluster_id: cdktf.stringToTerraform(struct!.sourceClusterId),
    target_cluster_id: cdktf.stringToTerraform(struct!.targetClusterId),
  }
}


export function backupRestoreToHclTerraform(struct?: BackupRestore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_remove_collections: {
      value: cdktf.booleanToHclTerraform(struct!.autoRemoveCollections),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclude_data: {
      value: cdktf.stringToHclTerraform(struct!.excludeData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_keys: {
      value: cdktf.stringToHclTerraform(struct!.filterKeys),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_values: {
      value: cdktf.stringToHclTerraform(struct!.filterValues),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    force_updates: {
      value: cdktf.booleanToHclTerraform(struct!.forceUpdates),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_data: {
      value: cdktf.stringToHclTerraform(struct!.includeData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    map_data: {
      value: cdktf.stringToHclTerraform(struct!.mapData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace_ttl: {
      value: cdktf.stringToHclTerraform(struct!.replaceTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace_ttl_with: {
      value: cdktf.stringToHclTerraform(struct!.replaceTtlWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.services),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.targetClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupRestoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BackupRestore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoRemoveCollections !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRemoveCollections = this._autoRemoveCollections;
    }
    if (this._excludeData !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeData = this._excludeData;
    }
    if (this._filterKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterKeys = this._filterKeys;
    }
    if (this._filterValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterValues = this._filterValues;
    }
    if (this._forceUpdates !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceUpdates = this._forceUpdates;
    }
    if (this._includeData !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeData = this._includeData;
    }
    if (this._mapData !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapData = this._mapData;
    }
    if (this._replaceTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceTtl = this._replaceTtl;
    }
    if (this._replaceTtlWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceTtlWith = this._replaceTtlWith;
    }
    if (this._services !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services;
    }
    if (this._sourceClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceClusterId = this._sourceClusterId;
    }
    if (this._targetClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetClusterId = this._targetClusterId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupRestore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoRemoveCollections = undefined;
      this._excludeData = undefined;
      this._filterKeys = undefined;
      this._filterValues = undefined;
      this._forceUpdates = undefined;
      this._includeData = undefined;
      this._mapData = undefined;
      this._replaceTtl = undefined;
      this._replaceTtlWith = undefined;
      this._services = undefined;
      this._sourceClusterId = undefined;
      this._targetClusterId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoRemoveCollections = value.autoRemoveCollections;
      this._excludeData = value.excludeData;
      this._filterKeys = value.filterKeys;
      this._filterValues = value.filterValues;
      this._forceUpdates = value.forceUpdates;
      this._includeData = value.includeData;
      this._mapData = value.mapData;
      this._replaceTtl = value.replaceTtl;
      this._replaceTtlWith = value.replaceTtlWith;
      this._services = value.services;
      this._sourceClusterId = value.sourceClusterId;
      this._targetClusterId = value.targetClusterId;
    }
  }

  // auto_remove_collections - computed: false, optional: true, required: false
  private _autoRemoveCollections?: boolean | cdktf.IResolvable; 
  public get autoRemoveCollections() {
    return this.getBooleanAttribute('auto_remove_collections');
  }
  public set autoRemoveCollections(value: boolean | cdktf.IResolvable) {
    this._autoRemoveCollections = value;
  }
  public resetAutoRemoveCollections() {
    this._autoRemoveCollections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRemoveCollectionsInput() {
    return this._autoRemoveCollections;
  }

  // exclude_data - computed: false, optional: true, required: false
  private _excludeData?: string; 
  public get excludeData() {
    return this.getStringAttribute('exclude_data');
  }
  public set excludeData(value: string) {
    this._excludeData = value;
  }
  public resetExcludeData() {
    this._excludeData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeDataInput() {
    return this._excludeData;
  }

  // filter_keys - computed: false, optional: true, required: false
  private _filterKeys?: string; 
  public get filterKeys() {
    return this.getStringAttribute('filter_keys');
  }
  public set filterKeys(value: string) {
    this._filterKeys = value;
  }
  public resetFilterKeys() {
    this._filterKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterKeysInput() {
    return this._filterKeys;
  }

  // filter_values - computed: false, optional: true, required: false
  private _filterValues?: string; 
  public get filterValues() {
    return this.getStringAttribute('filter_values');
  }
  public set filterValues(value: string) {
    this._filterValues = value;
  }
  public resetFilterValues() {
    this._filterValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterValuesInput() {
    return this._filterValues;
  }

  // force_updates - computed: false, optional: true, required: false
  private _forceUpdates?: boolean | cdktf.IResolvable; 
  public get forceUpdates() {
    return this.getBooleanAttribute('force_updates');
  }
  public set forceUpdates(value: boolean | cdktf.IResolvable) {
    this._forceUpdates = value;
  }
  public resetForceUpdates() {
    this._forceUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceUpdatesInput() {
    return this._forceUpdates;
  }

  // include_data - computed: false, optional: true, required: false
  private _includeData?: string; 
  public get includeData() {
    return this.getStringAttribute('include_data');
  }
  public set includeData(value: string) {
    this._includeData = value;
  }
  public resetIncludeData() {
    this._includeData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDataInput() {
    return this._includeData;
  }

  // map_data - computed: false, optional: true, required: false
  private _mapData?: string; 
  public get mapData() {
    return this.getStringAttribute('map_data');
  }
  public set mapData(value: string) {
    this._mapData = value;
  }
  public resetMapData() {
    this._mapData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapDataInput() {
    return this._mapData;
  }

  // replace_ttl - computed: false, optional: true, required: false
  private _replaceTtl?: string; 
  public get replaceTtl() {
    return this.getStringAttribute('replace_ttl');
  }
  public set replaceTtl(value: string) {
    this._replaceTtl = value;
  }
  public resetReplaceTtl() {
    this._replaceTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceTtlInput() {
    return this._replaceTtl;
  }

  // replace_ttl_with - computed: false, optional: true, required: false
  private _replaceTtlWith?: string; 
  public get replaceTtlWith() {
    return this.getStringAttribute('replace_ttl_with');
  }
  public set replaceTtlWith(value: string) {
    this._replaceTtlWith = value;
  }
  public resetReplaceTtlWith() {
    this._replaceTtlWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceTtlWithInput() {
    return this._replaceTtlWith;
  }

  // services - computed: false, optional: false, required: true
  private _services?: string[]; 
  public get services() {
    return this.getListAttribute('services');
  }
  public set services(value: string[]) {
    this._services = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }

  // source_cluster_id - computed: false, optional: false, required: true
  private _sourceClusterId?: string; 
  public get sourceClusterId() {
    return this.getStringAttribute('source_cluster_id');
  }
  public set sourceClusterId(value: string) {
    this._sourceClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceClusterIdInput() {
    return this._sourceClusterId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // target_cluster_id - computed: false, optional: false, required: true
  private _targetClusterId?: string; 
  public get targetClusterId() {
    return this.getStringAttribute('target_cluster_id');
  }
  public set targetClusterId(value: string) {
    this._targetClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetClusterIdInput() {
    return this._targetClusterId;
  }
}
export interface BackupScheduleInfo {
}

export function backupScheduleInfoToTerraform(struct?: BackupScheduleInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function backupScheduleInfoToHclTerraform(struct?: BackupScheduleInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BackupScheduleInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BackupScheduleInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupScheduleInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_time - computed: true, optional: false, required: false
  public get backupTime() {
    return this.getStringAttribute('backup_time');
  }

  // backup_type - computed: true, optional: false, required: false
  public get backupType() {
    return this.getStringAttribute('backup_type');
  }

  // increment - computed: true, optional: false, required: false
  public get increment() {
    return this.getNumberAttribute('increment');
  }

  // retention - computed: true, optional: false, required: false
  public get retention() {
    return this.getStringAttribute('retention');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/backup couchbase-capella_backup}
*/
export class Backup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "couchbase-capella_backup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Backup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Backup to import
  * @param importFromId The id of the existing Backup that should be imported. Refer to the {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/backup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Backup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "couchbase-capella_backup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/backup couchbase-capella_backup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BackupConfig
  */
  public constructor(scope: Construct, id: string, config: BackupConfig) {
    super(scope, id, {
      terraformResourceType: 'couchbase-capella_backup',
      terraformGeneratorMetadata: {
        providerName: 'couchbase-capella',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bucketId = config.bucketId;
    this._clusterId = config.clusterId;
    this._organizationId = config.organizationId;
    this._projectId = config.projectId;
    this._restore.internalValue = config.restore;
    this._restoreBefore = config.restoreBefore;
    this._restoreTimes = config.restoreTimes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_stats - computed: true, optional: false, required: false
  private _backupStats = new BackupBackupStatsOutputReference(this, "backup_stats");
  public get backupStats() {
    return this._backupStats;
  }

  // bucket_id - computed: false, optional: false, required: true
  private _bucketId?: string; 
  public get bucketId() {
    return this.getStringAttribute('bucket_id');
  }
  public set bucketId(value: string) {
    this._bucketId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketIdInput() {
    return this._bucketId;
  }

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // cloud_provider - computed: true, optional: false, required: false
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // cycle_id - computed: true, optional: false, required: false
  public get cycleId() {
    return this.getStringAttribute('cycle_id');
  }

  // date - computed: true, optional: false, required: false
  public get date() {
    return this.getStringAttribute('date');
  }

  // elapsed_time_in_seconds - computed: true, optional: false, required: false
  public get elapsedTimeInSeconds() {
    return this.getNumberAttribute('elapsed_time_in_seconds');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // method - computed: true, optional: false, required: false
  public get method() {
    return this.getStringAttribute('method');
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // restore - computed: false, optional: true, required: false
  private _restore = new BackupRestoreOutputReference(this, "restore");
  public get restore() {
    return this._restore;
  }
  public putRestore(value: BackupRestore) {
    this._restore.internalValue = value;
  }
  public resetRestore() {
    this._restore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreInput() {
    return this._restore.internalValue;
  }

  // restore_before - computed: true, optional: true, required: false
  private _restoreBefore?: string; 
  public get restoreBefore() {
    return this.getStringAttribute('restore_before');
  }
  public set restoreBefore(value: string) {
    this._restoreBefore = value;
  }
  public resetRestoreBefore() {
    this._restoreBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreBeforeInput() {
    return this._restoreBefore;
  }

  // restore_times - computed: false, optional: true, required: false
  private _restoreTimes?: number; 
  public get restoreTimes() {
    return this.getNumberAttribute('restore_times');
  }
  public set restoreTimes(value: number) {
    this._restoreTimes = value;
  }
  public resetRestoreTimes() {
    this._restoreTimes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreTimesInput() {
    return this._restoreTimes;
  }

  // schedule_info - computed: true, optional: false, required: false
  private _scheduleInfo = new BackupScheduleInfoOutputReference(this, "schedule_info");
  public get scheduleInfo() {
    return this._scheduleInfo;
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket_id: cdktf.stringToTerraform(this._bucketId),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      project_id: cdktf.stringToTerraform(this._projectId),
      restore: backupRestoreToTerraform(this._restore.internalValue),
      restore_before: cdktf.stringToTerraform(this._restoreBefore),
      restore_times: cdktf.numberToTerraform(this._restoreTimes),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket_id: {
        value: cdktf.stringToHclTerraform(this._bucketId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
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
      restore: {
        value: backupRestoreToHclTerraform(this._restore.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BackupRestore",
      },
      restore_before: {
        value: cdktf.stringToHclTerraform(this._restoreBefore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restore_times: {
        value: cdktf.numberToHclTerraform(this._restoreTimes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
