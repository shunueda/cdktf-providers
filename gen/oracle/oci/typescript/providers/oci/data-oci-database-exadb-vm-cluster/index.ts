// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_exadb_vm_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseExadbVmClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_exadb_vm_cluster#exadb_vm_cluster_id DataOciDatabaseExadbVmCluster#exadb_vm_cluster_id}
  */
  readonly exadbVmClusterId: string;
}
export interface DataOciDatabaseExadbVmClusterDataCollectionOptions {
}

export function dataOciDatabaseExadbVmClusterDataCollectionOptionsToTerraform(struct?: DataOciDatabaseExadbVmClusterDataCollectionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseExadbVmClusterDataCollectionOptionsToHclTerraform(struct?: DataOciDatabaseExadbVmClusterDataCollectionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseExadbVmClusterDataCollectionOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseExadbVmClusterDataCollectionOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseExadbVmClusterDataCollectionOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_diagnostics_events_enabled - computed: true, optional: false, required: false
  public get isDiagnosticsEventsEnabled() {
    return this.getBooleanAttribute('is_diagnostics_events_enabled');
  }

  // is_health_monitoring_enabled - computed: true, optional: false, required: false
  public get isHealthMonitoringEnabled() {
    return this.getBooleanAttribute('is_health_monitoring_enabled');
  }

  // is_incident_logs_enabled - computed: true, optional: false, required: false
  public get isIncidentLogsEnabled() {
    return this.getBooleanAttribute('is_incident_logs_enabled');
  }
}

export class DataOciDatabaseExadbVmClusterDataCollectionOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseExadbVmClusterDataCollectionOptionsOutputReference {
    return new DataOciDatabaseExadbVmClusterDataCollectionOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseExadbVmClusterIormConfigCacheDbPlans {
}

export function dataOciDatabaseExadbVmClusterIormConfigCacheDbPlansToTerraform(struct?: DataOciDatabaseExadbVmClusterIormConfigCacheDbPlans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseExadbVmClusterIormConfigCacheDbPlansToHclTerraform(struct?: DataOciDatabaseExadbVmClusterIormConfigCacheDbPlans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseExadbVmClusterIormConfigCacheDbPlans | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseExadbVmClusterIormConfigCacheDbPlans | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // db_name - computed: true, optional: false, required: false
  public get dbName() {
    return this.getStringAttribute('db_name');
  }

  // flash_cache_limit - computed: true, optional: false, required: false
  public get flashCacheLimit() {
    return this.getStringAttribute('flash_cache_limit');
  }

  // share - computed: true, optional: false, required: false
  public get share() {
    return this.getNumberAttribute('share');
  }
}

export class DataOciDatabaseExadbVmClusterIormConfigCacheDbPlansList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference {
    return new DataOciDatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseExadbVmClusterIormConfigCache {
}

export function dataOciDatabaseExadbVmClusterIormConfigCacheToTerraform(struct?: DataOciDatabaseExadbVmClusterIormConfigCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseExadbVmClusterIormConfigCacheToHclTerraform(struct?: DataOciDatabaseExadbVmClusterIormConfigCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseExadbVmClusterIormConfigCacheOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseExadbVmClusterIormConfigCache | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseExadbVmClusterIormConfigCache | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // db_plans - computed: true, optional: false, required: false
  private _dbPlans = new DataOciDatabaseExadbVmClusterIormConfigCacheDbPlansList(this, "db_plans", false);
  public get dbPlans() {
    return this._dbPlans;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // objective - computed: true, optional: false, required: false
  public get objective() {
    return this.getStringAttribute('objective');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class DataOciDatabaseExadbVmClusterIormConfigCacheList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseExadbVmClusterIormConfigCacheOutputReference {
    return new DataOciDatabaseExadbVmClusterIormConfigCacheOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseExadbVmClusterNodeConfig {
}

export function dataOciDatabaseExadbVmClusterNodeConfigToTerraform(struct?: DataOciDatabaseExadbVmClusterNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseExadbVmClusterNodeConfigToHclTerraform(struct?: DataOciDatabaseExadbVmClusterNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseExadbVmClusterNodeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseExadbVmClusterNodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseExadbVmClusterNodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled_ecpu_count_per_node - computed: true, optional: false, required: false
  public get enabledEcpuCountPerNode() {
    return this.getNumberAttribute('enabled_ecpu_count_per_node');
  }

  // memory_size_in_gbs_per_node - computed: true, optional: false, required: false
  public get memorySizeInGbsPerNode() {
    return this.getNumberAttribute('memory_size_in_gbs_per_node');
  }

  // snapshot_file_system_storage_size_gbs_per_node - computed: true, optional: false, required: false
  public get snapshotFileSystemStorageSizeGbsPerNode() {
    return this.getNumberAttribute('snapshot_file_system_storage_size_gbs_per_node');
  }

  // total_ecpu_count_per_node - computed: true, optional: false, required: false
  public get totalEcpuCountPerNode() {
    return this.getNumberAttribute('total_ecpu_count_per_node');
  }

  // total_file_system_storage_size_gbs_per_node - computed: true, optional: false, required: false
  public get totalFileSystemStorageSizeGbsPerNode() {
    return this.getNumberAttribute('total_file_system_storage_size_gbs_per_node');
  }

  // vm_file_system_storage_size_gbs_per_node - computed: true, optional: false, required: false
  public get vmFileSystemStorageSizeGbsPerNode() {
    return this.getNumberAttribute('vm_file_system_storage_size_gbs_per_node');
  }
}

export class DataOciDatabaseExadbVmClusterNodeConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseExadbVmClusterNodeConfigOutputReference {
    return new DataOciDatabaseExadbVmClusterNodeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseExadbVmClusterNodeResource {
}

export function dataOciDatabaseExadbVmClusterNodeResourceToTerraform(struct?: DataOciDatabaseExadbVmClusterNodeResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseExadbVmClusterNodeResourceToHclTerraform(struct?: DataOciDatabaseExadbVmClusterNodeResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseExadbVmClusterNodeResourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseExadbVmClusterNodeResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseExadbVmClusterNodeResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // node_hostname - computed: true, optional: false, required: false
  public get nodeHostname() {
    return this.getStringAttribute('node_hostname');
  }

  // node_id - computed: true, optional: false, required: false
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }

  // node_name - computed: true, optional: false, required: false
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class DataOciDatabaseExadbVmClusterNodeResourceList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseExadbVmClusterNodeResourceOutputReference {
    return new DataOciDatabaseExadbVmClusterNodeResourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_exadb_vm_cluster oci_database_exadb_vm_cluster}
*/
export class DataOciDatabaseExadbVmCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_exadb_vm_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseExadbVmCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseExadbVmCluster to import
  * @param importFromId The id of the existing DataOciDatabaseExadbVmCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_exadb_vm_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseExadbVmCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_exadb_vm_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_exadb_vm_cluster oci_database_exadb_vm_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseExadbVmClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseExadbVmClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_exadb_vm_cluster',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._exadbVmClusterId = config.exadbVmClusterId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // backup_network_nsg_ids - computed: true, optional: false, required: false
  public get backupNetworkNsgIds() {
    return this.getListAttribute('backup_network_nsg_ids');
  }

  // backup_subnet_id - computed: true, optional: false, required: false
  public get backupSubnetId() {
    return this.getStringAttribute('backup_subnet_id');
  }

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // cluster_placement_group_id - computed: true, optional: false, required: false
  public get clusterPlacementGroupId() {
    return this.getStringAttribute('cluster_placement_group_id');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // data_collection_options - computed: true, optional: false, required: false
  private _dataCollectionOptions = new DataOciDatabaseExadbVmClusterDataCollectionOptionsList(this, "data_collection_options", false);
  public get dataCollectionOptions() {
    return this._dataCollectionOptions;
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // exadb_vm_cluster_id - computed: false, optional: false, required: true
  private _exadbVmClusterId?: string; 
  public get exadbVmClusterId() {
    return this.getStringAttribute('exadb_vm_cluster_id');
  }
  public set exadbVmClusterId(value: string) {
    this._exadbVmClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exadbVmClusterIdInput() {
    return this._exadbVmClusterId;
  }

  // exascale_db_storage_vault_id - computed: true, optional: false, required: false
  public get exascaleDbStorageVaultId() {
    return this.getStringAttribute('exascale_db_storage_vault_id');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // gi_version - computed: true, optional: false, required: false
  public get giVersion() {
    return this.getStringAttribute('gi_version');
  }

  // grid_image_id - computed: true, optional: false, required: false
  public get gridImageId() {
    return this.getStringAttribute('grid_image_id');
  }

  // grid_image_type - computed: true, optional: false, required: false
  public get gridImageType() {
    return this.getStringAttribute('grid_image_type');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // iorm_config_cache - computed: true, optional: false, required: false
  private _iormConfigCache = new DataOciDatabaseExadbVmClusterIormConfigCacheList(this, "iorm_config_cache", false);
  public get iormConfigCache() {
    return this._iormConfigCache;
  }

  // last_update_history_entry_id - computed: true, optional: false, required: false
  public get lastUpdateHistoryEntryId() {
    return this.getStringAttribute('last_update_history_entry_id');
  }

  // license_model - computed: true, optional: false, required: false
  public get licenseModel() {
    return this.getStringAttribute('license_model');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // listener_port - computed: true, optional: false, required: false
  public get listenerPort() {
    return this.getStringAttribute('listener_port');
  }

  // node_config - computed: true, optional: false, required: false
  private _nodeConfig = new DataOciDatabaseExadbVmClusterNodeConfigList(this, "node_config", false);
  public get nodeConfig() {
    return this._nodeConfig;
  }

  // node_resource - computed: true, optional: false, required: false
  private _nodeResource = new DataOciDatabaseExadbVmClusterNodeResourceList(this, "node_resource", false);
  public get nodeResource() {
    return this._nodeResource;
  }

  // nsg_ids - computed: true, optional: false, required: false
  public get nsgIds() {
    return this.getListAttribute('nsg_ids');
  }

  // private_zone_id - computed: true, optional: false, required: false
  public get privateZoneId() {
    return this.getStringAttribute('private_zone_id');
  }

  // scan_dns_name - computed: true, optional: false, required: false
  public get scanDnsName() {
    return this.getStringAttribute('scan_dns_name');
  }

  // scan_dns_record_id - computed: true, optional: false, required: false
  public get scanDnsRecordId() {
    return this.getStringAttribute('scan_dns_record_id');
  }

  // scan_ip_ids - computed: true, optional: false, required: false
  public get scanIpIds() {
    return this.getListAttribute('scan_ip_ids');
  }

  // scan_listener_port_tcp - computed: true, optional: false, required: false
  public get scanListenerPortTcp() {
    return this.getNumberAttribute('scan_listener_port_tcp');
  }

  // scan_listener_port_tcp_ssl - computed: true, optional: false, required: false
  public get scanListenerPortTcpSsl() {
    return this.getNumberAttribute('scan_listener_port_tcp_ssl');
  }

  // security_attributes - computed: true, optional: false, required: false
  private _securityAttributes = new cdktf.StringMap(this, "security_attributes");
  public get securityAttributes() {
    return this._securityAttributes;
  }

  // shape - computed: true, optional: false, required: false
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // shape_attribute - computed: true, optional: false, required: false
  public get shapeAttribute() {
    return this.getStringAttribute('shape_attribute');
  }

  // ssh_public_keys - computed: true, optional: false, required: false
  public get sshPublicKeys() {
    return this.getListAttribute('ssh_public_keys');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // subscription_id - computed: true, optional: false, required: false
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // system_version - computed: true, optional: false, required: false
  public get systemVersion() {
    return this.getStringAttribute('system_version');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_zone - computed: true, optional: false, required: false
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }

  // vip_ids - computed: true, optional: false, required: false
  public get vipIds() {
    return this.getListAttribute('vip_ids');
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      exadb_vm_cluster_id: cdktf.stringToTerraform(this._exadbVmClusterId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      exadb_vm_cluster_id: {
        value: cdktf.stringToHclTerraform(this._exadbVmClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
