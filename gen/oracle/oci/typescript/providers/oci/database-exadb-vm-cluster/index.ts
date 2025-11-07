// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exadb_vm_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseExadbVmClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exadb_vm_cluster#availability_domain DatabaseExadbVmCluster#availability_domain}
  */
  readonly availabilityDomain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exadb_vm_cluster#backup_network_nsg_ids DatabaseExadbVmCluster#backup_network_nsg_ids}
  */
  readonly backupNetworkNsgIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exadb_vm_cluster#backup_subnet_id DatabaseExadbVmCluster#backup_subnet_id}
  */
  readonly backupSubnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exadb_vm_cluster#cluster_name DatabaseExadbVmCluster#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exadb_vm_cluster#compartment_id DatabaseExadbVmCluster#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exadb_vm_cluster#defined_tags DatabaseExadbVmCluster#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exadb_vm_cluster#display_name DatabaseExadbVmCluster#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exadb_vm_cluster#domain DatabaseExadbVmCluster#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exadb_vm_cluster#exascale_db_storage_vault_id DatabaseExadbVmCluster#exascale_db_storage_vault_id}
  */
  readonly exascaleDbStorageVaultId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exadb_vm_cluster#freeform_tags DatabaseExadbVmCluster#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exadb_vm_cluster#grid_image_id DatabaseExadbVmCluster#grid_image_id}
  */
  readonly gridImageId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exadb_vm_cluster#hostname DatabaseExadbVmCluster#hostname}
  */
  readonly hostname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exadb_vm_cluster#id DatabaseExadbVmCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exadb_vm_cluster#license_model DatabaseExadbVmCluster#license_model}
  */
  readonly licenseModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exadb_vm_cluster#nsg_ids DatabaseExadbVmCluster#nsg_ids}
  */
  readonly nsgIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exadb_vm_cluster#private_zone_id DatabaseExadbVmCluster#private_zone_id}
  */
  readonly privateZoneId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exadb_vm_cluster#scan_listener_port_tcp DatabaseExadbVmCluster#scan_listener_port_tcp}
  */
  readonly scanListenerPortTcp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exadb_vm_cluster#scan_listener_port_tcp_ssl DatabaseExadbVmCluster#scan_listener_port_tcp_ssl}
  */
  readonly scanListenerPortTcpSsl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exadb_vm_cluster#security_attributes DatabaseExadbVmCluster#security_attributes}
  */
  readonly securityAttributes?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exadb_vm_cluster#shape DatabaseExadbVmCluster#shape}
  */
  readonly shape: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exadb_vm_cluster#shape_attribute DatabaseExadbVmCluster#shape_attribute}
  */
  readonly shapeAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exadb_vm_cluster#ssh_public_keys DatabaseExadbVmCluster#ssh_public_keys}
  */
  readonly sshPublicKeys: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exadb_vm_cluster#subnet_id DatabaseExadbVmCluster#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exadb_vm_cluster#subscription_id DatabaseExadbVmCluster#subscription_id}
  */
  readonly subscriptionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exadb_vm_cluster#system_version DatabaseExadbVmCluster#system_version}
  */
  readonly systemVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exadb_vm_cluster#time_zone DatabaseExadbVmCluster#time_zone}
  */
  readonly timeZone?: string;
  /**
  * data_collection_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exadb_vm_cluster#data_collection_options DatabaseExadbVmCluster#data_collection_options}
  */
  readonly dataCollectionOptions?: DatabaseExadbVmClusterDataCollectionOptions;
  /**
  * node_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exadb_vm_cluster#node_config DatabaseExadbVmCluster#node_config}
  */
  readonly nodeConfig: DatabaseExadbVmClusterNodeConfig;
  /**
  * node_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exadb_vm_cluster#node_resource DatabaseExadbVmCluster#node_resource}
  */
  readonly nodeResource?: DatabaseExadbVmClusterNodeResource[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exadb_vm_cluster#timeouts DatabaseExadbVmCluster#timeouts}
  */
  readonly timeouts?: DatabaseExadbVmClusterTimeouts;
}
export interface DatabaseExadbVmClusterIormConfigCacheDbPlans {
}

export function databaseExadbVmClusterIormConfigCacheDbPlansToTerraform(struct?: DatabaseExadbVmClusterIormConfigCacheDbPlans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseExadbVmClusterIormConfigCacheDbPlansToHclTerraform(struct?: DatabaseExadbVmClusterIormConfigCacheDbPlans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseExadbVmClusterIormConfigCacheDbPlans | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseExadbVmClusterIormConfigCacheDbPlans | undefined) {
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

export class DatabaseExadbVmClusterIormConfigCacheDbPlansList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference {
    return new DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseExadbVmClusterIormConfigCache {
}

export function databaseExadbVmClusterIormConfigCacheToTerraform(struct?: DatabaseExadbVmClusterIormConfigCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseExadbVmClusterIormConfigCacheToHclTerraform(struct?: DatabaseExadbVmClusterIormConfigCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseExadbVmClusterIormConfigCacheOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseExadbVmClusterIormConfigCache | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseExadbVmClusterIormConfigCache | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // db_plans - computed: true, optional: false, required: false
  private _dbPlans = new DatabaseExadbVmClusterIormConfigCacheDbPlansList(this, "db_plans", false);
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

export class DatabaseExadbVmClusterIormConfigCacheList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseExadbVmClusterIormConfigCacheOutputReference {
    return new DatabaseExadbVmClusterIormConfigCacheOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseExadbVmClusterDataCollectionOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exadb_vm_cluster#is_diagnostics_events_enabled DatabaseExadbVmCluster#is_diagnostics_events_enabled}
  */
  readonly isDiagnosticsEventsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exadb_vm_cluster#is_health_monitoring_enabled DatabaseExadbVmCluster#is_health_monitoring_enabled}
  */
  readonly isHealthMonitoringEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exadb_vm_cluster#is_incident_logs_enabled DatabaseExadbVmCluster#is_incident_logs_enabled}
  */
  readonly isIncidentLogsEnabled?: boolean | cdktf.IResolvable;
}

export function databaseExadbVmClusterDataCollectionOptionsToTerraform(struct?: DatabaseExadbVmClusterDataCollectionOptionsOutputReference | DatabaseExadbVmClusterDataCollectionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_diagnostics_events_enabled: cdktf.booleanToTerraform(struct!.isDiagnosticsEventsEnabled),
    is_health_monitoring_enabled: cdktf.booleanToTerraform(struct!.isHealthMonitoringEnabled),
    is_incident_logs_enabled: cdktf.booleanToTerraform(struct!.isIncidentLogsEnabled),
  }
}


export function databaseExadbVmClusterDataCollectionOptionsToHclTerraform(struct?: DatabaseExadbVmClusterDataCollectionOptionsOutputReference | DatabaseExadbVmClusterDataCollectionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_diagnostics_events_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isDiagnosticsEventsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_health_monitoring_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isHealthMonitoringEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_incident_logs_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isIncidentLogsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseExadbVmClusterDataCollectionOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseExadbVmClusterDataCollectionOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isDiagnosticsEventsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDiagnosticsEventsEnabled = this._isDiagnosticsEventsEnabled;
    }
    if (this._isHealthMonitoringEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isHealthMonitoringEnabled = this._isHealthMonitoringEnabled;
    }
    if (this._isIncidentLogsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isIncidentLogsEnabled = this._isIncidentLogsEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseExadbVmClusterDataCollectionOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isDiagnosticsEventsEnabled = undefined;
      this._isHealthMonitoringEnabled = undefined;
      this._isIncidentLogsEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isDiagnosticsEventsEnabled = value.isDiagnosticsEventsEnabled;
      this._isHealthMonitoringEnabled = value.isHealthMonitoringEnabled;
      this._isIncidentLogsEnabled = value.isIncidentLogsEnabled;
    }
  }

  // is_diagnostics_events_enabled - computed: true, optional: true, required: false
  private _isDiagnosticsEventsEnabled?: boolean | cdktf.IResolvable; 
  public get isDiagnosticsEventsEnabled() {
    return this.getBooleanAttribute('is_diagnostics_events_enabled');
  }
  public set isDiagnosticsEventsEnabled(value: boolean | cdktf.IResolvable) {
    this._isDiagnosticsEventsEnabled = value;
  }
  public resetIsDiagnosticsEventsEnabled() {
    this._isDiagnosticsEventsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDiagnosticsEventsEnabledInput() {
    return this._isDiagnosticsEventsEnabled;
  }

  // is_health_monitoring_enabled - computed: true, optional: true, required: false
  private _isHealthMonitoringEnabled?: boolean | cdktf.IResolvable; 
  public get isHealthMonitoringEnabled() {
    return this.getBooleanAttribute('is_health_monitoring_enabled');
  }
  public set isHealthMonitoringEnabled(value: boolean | cdktf.IResolvable) {
    this._isHealthMonitoringEnabled = value;
  }
  public resetIsHealthMonitoringEnabled() {
    this._isHealthMonitoringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHealthMonitoringEnabledInput() {
    return this._isHealthMonitoringEnabled;
  }

  // is_incident_logs_enabled - computed: true, optional: true, required: false
  private _isIncidentLogsEnabled?: boolean | cdktf.IResolvable; 
  public get isIncidentLogsEnabled() {
    return this.getBooleanAttribute('is_incident_logs_enabled');
  }
  public set isIncidentLogsEnabled(value: boolean | cdktf.IResolvable) {
    this._isIncidentLogsEnabled = value;
  }
  public resetIsIncidentLogsEnabled() {
    this._isIncidentLogsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isIncidentLogsEnabledInput() {
    return this._isIncidentLogsEnabled;
  }
}
export interface DatabaseExadbVmClusterNodeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exadb_vm_cluster#enabled_ecpu_count_per_node DatabaseExadbVmCluster#enabled_ecpu_count_per_node}
  */
  readonly enabledEcpuCountPerNode: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exadb_vm_cluster#total_ecpu_count_per_node DatabaseExadbVmCluster#total_ecpu_count_per_node}
  */
  readonly totalEcpuCountPerNode: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exadb_vm_cluster#vm_file_system_storage_size_gbs_per_node DatabaseExadbVmCluster#vm_file_system_storage_size_gbs_per_node}
  */
  readonly vmFileSystemStorageSizeGbsPerNode: number;
}

export function databaseExadbVmClusterNodeConfigToTerraform(struct?: DatabaseExadbVmClusterNodeConfigOutputReference | DatabaseExadbVmClusterNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled_ecpu_count_per_node: cdktf.numberToTerraform(struct!.enabledEcpuCountPerNode),
    total_ecpu_count_per_node: cdktf.numberToTerraform(struct!.totalEcpuCountPerNode),
    vm_file_system_storage_size_gbs_per_node: cdktf.numberToTerraform(struct!.vmFileSystemStorageSizeGbsPerNode),
  }
}


export function databaseExadbVmClusterNodeConfigToHclTerraform(struct?: DatabaseExadbVmClusterNodeConfigOutputReference | DatabaseExadbVmClusterNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled_ecpu_count_per_node: {
      value: cdktf.numberToHclTerraform(struct!.enabledEcpuCountPerNode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_ecpu_count_per_node: {
      value: cdktf.numberToHclTerraform(struct!.totalEcpuCountPerNode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vm_file_system_storage_size_gbs_per_node: {
      value: cdktf.numberToHclTerraform(struct!.vmFileSystemStorageSizeGbsPerNode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseExadbVmClusterNodeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseExadbVmClusterNodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabledEcpuCountPerNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledEcpuCountPerNode = this._enabledEcpuCountPerNode;
    }
    if (this._totalEcpuCountPerNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalEcpuCountPerNode = this._totalEcpuCountPerNode;
    }
    if (this._vmFileSystemStorageSizeGbsPerNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmFileSystemStorageSizeGbsPerNode = this._vmFileSystemStorageSizeGbsPerNode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseExadbVmClusterNodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabledEcpuCountPerNode = undefined;
      this._totalEcpuCountPerNode = undefined;
      this._vmFileSystemStorageSizeGbsPerNode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabledEcpuCountPerNode = value.enabledEcpuCountPerNode;
      this._totalEcpuCountPerNode = value.totalEcpuCountPerNode;
      this._vmFileSystemStorageSizeGbsPerNode = value.vmFileSystemStorageSizeGbsPerNode;
    }
  }

  // enabled_ecpu_count_per_node - computed: false, optional: false, required: true
  private _enabledEcpuCountPerNode?: number; 
  public get enabledEcpuCountPerNode() {
    return this.getNumberAttribute('enabled_ecpu_count_per_node');
  }
  public set enabledEcpuCountPerNode(value: number) {
    this._enabledEcpuCountPerNode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledEcpuCountPerNodeInput() {
    return this._enabledEcpuCountPerNode;
  }

  // memory_size_in_gbs_per_node - computed: true, optional: false, required: false
  public get memorySizeInGbsPerNode() {
    return this.getNumberAttribute('memory_size_in_gbs_per_node');
  }

  // snapshot_file_system_storage_size_gbs_per_node - computed: true, optional: false, required: false
  public get snapshotFileSystemStorageSizeGbsPerNode() {
    return this.getNumberAttribute('snapshot_file_system_storage_size_gbs_per_node');
  }

  // total_ecpu_count_per_node - computed: false, optional: false, required: true
  private _totalEcpuCountPerNode?: number; 
  public get totalEcpuCountPerNode() {
    return this.getNumberAttribute('total_ecpu_count_per_node');
  }
  public set totalEcpuCountPerNode(value: number) {
    this._totalEcpuCountPerNode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get totalEcpuCountPerNodeInput() {
    return this._totalEcpuCountPerNode;
  }

  // total_file_system_storage_size_gbs_per_node - computed: true, optional: false, required: false
  public get totalFileSystemStorageSizeGbsPerNode() {
    return this.getNumberAttribute('total_file_system_storage_size_gbs_per_node');
  }

  // vm_file_system_storage_size_gbs_per_node - computed: false, optional: false, required: true
  private _vmFileSystemStorageSizeGbsPerNode?: number; 
  public get vmFileSystemStorageSizeGbsPerNode() {
    return this.getNumberAttribute('vm_file_system_storage_size_gbs_per_node');
  }
  public set vmFileSystemStorageSizeGbsPerNode(value: number) {
    this._vmFileSystemStorageSizeGbsPerNode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmFileSystemStorageSizeGbsPerNodeInput() {
    return this._vmFileSystemStorageSizeGbsPerNode;
  }
}
export interface DatabaseExadbVmClusterNodeResource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exadb_vm_cluster#node_name DatabaseExadbVmCluster#node_name}
  */
  readonly nodeName: string;
}

export function databaseExadbVmClusterNodeResourceToTerraform(struct?: DatabaseExadbVmClusterNodeResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_name: cdktf.stringToTerraform(struct!.nodeName),
  }
}


export function databaseExadbVmClusterNodeResourceToHclTerraform(struct?: DatabaseExadbVmClusterNodeResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_name: {
      value: cdktf.stringToHclTerraform(struct!.nodeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseExadbVmClusterNodeResourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseExadbVmClusterNodeResource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeName = this._nodeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseExadbVmClusterNodeResource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeName = value.nodeName;
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

  // node_name - computed: false, optional: false, required: true
  private _nodeName?: string; 
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
  public set nodeName(value: string) {
    this._nodeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class DatabaseExadbVmClusterNodeResourceList extends cdktf.ComplexList {
  public internalValue? : DatabaseExadbVmClusterNodeResource[] | cdktf.IResolvable

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
  public get(index: number): DatabaseExadbVmClusterNodeResourceOutputReference {
    return new DatabaseExadbVmClusterNodeResourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseExadbVmClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exadb_vm_cluster#create DatabaseExadbVmCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exadb_vm_cluster#delete DatabaseExadbVmCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exadb_vm_cluster#update DatabaseExadbVmCluster#update}
  */
  readonly update?: string;
}

export function databaseExadbVmClusterTimeoutsToTerraform(struct?: DatabaseExadbVmClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function databaseExadbVmClusterTimeoutsToHclTerraform(struct?: DatabaseExadbVmClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseExadbVmClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseExadbVmClusterTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseExadbVmClusterTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exadb_vm_cluster oci_database_exadb_vm_cluster}
*/
export class DatabaseExadbVmCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_exadb_vm_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseExadbVmCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseExadbVmCluster to import
  * @param importFromId The id of the existing DatabaseExadbVmCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exadb_vm_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseExadbVmCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_exadb_vm_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_exadb_vm_cluster oci_database_exadb_vm_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseExadbVmClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseExadbVmClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_exadb_vm_cluster',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityDomain = config.availabilityDomain;
    this._backupNetworkNsgIds = config.backupNetworkNsgIds;
    this._backupSubnetId = config.backupSubnetId;
    this._clusterName = config.clusterName;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._domain = config.domain;
    this._exascaleDbStorageVaultId = config.exascaleDbStorageVaultId;
    this._freeformTags = config.freeformTags;
    this._gridImageId = config.gridImageId;
    this._hostname = config.hostname;
    this._id = config.id;
    this._licenseModel = config.licenseModel;
    this._nsgIds = config.nsgIds;
    this._privateZoneId = config.privateZoneId;
    this._scanListenerPortTcp = config.scanListenerPortTcp;
    this._scanListenerPortTcpSsl = config.scanListenerPortTcpSsl;
    this._securityAttributes = config.securityAttributes;
    this._shape = config.shape;
    this._shapeAttribute = config.shapeAttribute;
    this._sshPublicKeys = config.sshPublicKeys;
    this._subnetId = config.subnetId;
    this._subscriptionId = config.subscriptionId;
    this._systemVersion = config.systemVersion;
    this._timeZone = config.timeZone;
    this._dataCollectionOptions.internalValue = config.dataCollectionOptions;
    this._nodeConfig.internalValue = config.nodeConfig;
    this._nodeResource.internalValue = config.nodeResource;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_domain - computed: false, optional: false, required: true
  private _availabilityDomain?: string; 
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }
  public set availabilityDomain(value: string) {
    this._availabilityDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityDomainInput() {
    return this._availabilityDomain;
  }

  // backup_network_nsg_ids - computed: true, optional: true, required: false
  private _backupNetworkNsgIds?: string[]; 
  public get backupNetworkNsgIds() {
    return cdktf.Fn.tolist(this.getListAttribute('backup_network_nsg_ids'));
  }
  public set backupNetworkNsgIds(value: string[]) {
    this._backupNetworkNsgIds = value;
  }
  public resetBackupNetworkNsgIds() {
    this._backupNetworkNsgIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupNetworkNsgIdsInput() {
    return this._backupNetworkNsgIds;
  }

  // backup_subnet_id - computed: false, optional: false, required: true
  private _backupSubnetId?: string; 
  public get backupSubnetId() {
    return this.getStringAttribute('backup_subnet_id');
  }
  public set backupSubnetId(value: string) {
    this._backupSubnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupSubnetIdInput() {
    return this._backupSubnetId;
  }

  // cluster_name - computed: true, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // cluster_placement_group_id - computed: true, optional: false, required: false
  public get clusterPlacementGroupId() {
    return this.getStringAttribute('cluster_placement_group_id');
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // domain - computed: true, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // exascale_db_storage_vault_id - computed: false, optional: false, required: true
  private _exascaleDbStorageVaultId?: string; 
  public get exascaleDbStorageVaultId() {
    return this.getStringAttribute('exascale_db_storage_vault_id');
  }
  public set exascaleDbStorageVaultId(value: string) {
    this._exascaleDbStorageVaultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exascaleDbStorageVaultIdInput() {
    return this._exascaleDbStorageVaultId;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
  }

  // gi_version - computed: true, optional: false, required: false
  public get giVersion() {
    return this.getStringAttribute('gi_version');
  }

  // grid_image_id - computed: false, optional: false, required: true
  private _gridImageId?: string; 
  public get gridImageId() {
    return this.getStringAttribute('grid_image_id');
  }
  public set gridImageId(value: string) {
    this._gridImageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gridImageIdInput() {
    return this._gridImageId;
  }

  // grid_image_type - computed: true, optional: false, required: false
  public get gridImageType() {
    return this.getStringAttribute('grid_image_type');
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // iorm_config_cache - computed: true, optional: false, required: false
  private _iormConfigCache = new DatabaseExadbVmClusterIormConfigCacheList(this, "iorm_config_cache", false);
  public get iormConfigCache() {
    return this._iormConfigCache;
  }

  // last_update_history_entry_id - computed: true, optional: false, required: false
  public get lastUpdateHistoryEntryId() {
    return this.getStringAttribute('last_update_history_entry_id');
  }

  // license_model - computed: true, optional: true, required: false
  private _licenseModel?: string; 
  public get licenseModel() {
    return this.getStringAttribute('license_model');
  }
  public set licenseModel(value: string) {
    this._licenseModel = value;
  }
  public resetLicenseModel() {
    this._licenseModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseModelInput() {
    return this._licenseModel;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // listener_port - computed: true, optional: false, required: false
  public get listenerPort() {
    return this.getStringAttribute('listener_port');
  }

  // nsg_ids - computed: true, optional: true, required: false
  private _nsgIds?: string[]; 
  public get nsgIds() {
    return cdktf.Fn.tolist(this.getListAttribute('nsg_ids'));
  }
  public set nsgIds(value: string[]) {
    this._nsgIds = value;
  }
  public resetNsgIds() {
    this._nsgIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsgIdsInput() {
    return this._nsgIds;
  }

  // private_zone_id - computed: true, optional: true, required: false
  private _privateZoneId?: string; 
  public get privateZoneId() {
    return this.getStringAttribute('private_zone_id');
  }
  public set privateZoneId(value: string) {
    this._privateZoneId = value;
  }
  public resetPrivateZoneId() {
    this._privateZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateZoneIdInput() {
    return this._privateZoneId;
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

  // scan_listener_port_tcp - computed: true, optional: true, required: false
  private _scanListenerPortTcp?: number; 
  public get scanListenerPortTcp() {
    return this.getNumberAttribute('scan_listener_port_tcp');
  }
  public set scanListenerPortTcp(value: number) {
    this._scanListenerPortTcp = value;
  }
  public resetScanListenerPortTcp() {
    this._scanListenerPortTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanListenerPortTcpInput() {
    return this._scanListenerPortTcp;
  }

  // scan_listener_port_tcp_ssl - computed: true, optional: true, required: false
  private _scanListenerPortTcpSsl?: number; 
  public get scanListenerPortTcpSsl() {
    return this.getNumberAttribute('scan_listener_port_tcp_ssl');
  }
  public set scanListenerPortTcpSsl(value: number) {
    this._scanListenerPortTcpSsl = value;
  }
  public resetScanListenerPortTcpSsl() {
    this._scanListenerPortTcpSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanListenerPortTcpSslInput() {
    return this._scanListenerPortTcpSsl;
  }

  // security_attributes - computed: true, optional: true, required: false
  private _securityAttributes?: { [key: string]: string }; 
  public get securityAttributes() {
    return this.getStringMapAttribute('security_attributes');
  }
  public set securityAttributes(value: { [key: string]: string }) {
    this._securityAttributes = value;
  }
  public resetSecurityAttributes() {
    this._securityAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityAttributesInput() {
    return this._securityAttributes;
  }

  // shape - computed: false, optional: false, required: true
  private _shape?: string; 
  public get shape() {
    return this.getStringAttribute('shape');
  }
  public set shape(value: string) {
    this._shape = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeInput() {
    return this._shape;
  }

  // shape_attribute - computed: true, optional: true, required: false
  private _shapeAttribute?: string; 
  public get shapeAttribute() {
    return this.getStringAttribute('shape_attribute');
  }
  public set shapeAttribute(value: string) {
    this._shapeAttribute = value;
  }
  public resetShapeAttribute() {
    this._shapeAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeAttributeInput() {
    return this._shapeAttribute;
  }

  // ssh_public_keys - computed: false, optional: false, required: true
  private _sshPublicKeys?: string[]; 
  public get sshPublicKeys() {
    return this.getListAttribute('ssh_public_keys');
  }
  public set sshPublicKeys(value: string[]) {
    this._sshPublicKeys = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKeysInput() {
    return this._sshPublicKeys;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // subscription_id - computed: true, optional: true, required: false
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  public resetSubscriptionId() {
    this._subscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // system_version - computed: true, optional: true, required: false
  private _systemVersion?: string; 
  public get systemVersion() {
    return this.getStringAttribute('system_version');
  }
  public set systemVersion(value: string) {
    this._systemVersion = value;
  }
  public resetSystemVersion() {
    this._systemVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemVersionInput() {
    return this._systemVersion;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_zone - computed: true, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // vip_ids - computed: true, optional: false, required: false
  public get vipIds() {
    return this.getListAttribute('vip_ids');
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }

  // data_collection_options - computed: false, optional: true, required: false
  private _dataCollectionOptions = new DatabaseExadbVmClusterDataCollectionOptionsOutputReference(this, "data_collection_options");
  public get dataCollectionOptions() {
    return this._dataCollectionOptions;
  }
  public putDataCollectionOptions(value: DatabaseExadbVmClusterDataCollectionOptions) {
    this._dataCollectionOptions.internalValue = value;
  }
  public resetDataCollectionOptions() {
    this._dataCollectionOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCollectionOptionsInput() {
    return this._dataCollectionOptions.internalValue;
  }

  // node_config - computed: false, optional: false, required: true
  private _nodeConfig = new DatabaseExadbVmClusterNodeConfigOutputReference(this, "node_config");
  public get nodeConfig() {
    return this._nodeConfig;
  }
  public putNodeConfig(value: DatabaseExadbVmClusterNodeConfig) {
    this._nodeConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeConfigInput() {
    return this._nodeConfig.internalValue;
  }

  // node_resource - computed: false, optional: true, required: false
  private _nodeResource = new DatabaseExadbVmClusterNodeResourceList(this, "node_resource", true);
  public get nodeResource() {
    return this._nodeResource;
  }
  public putNodeResource(value: DatabaseExadbVmClusterNodeResource[] | cdktf.IResolvable) {
    this._nodeResource.internalValue = value;
  }
  public resetNodeResource() {
    this._nodeResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeResourceInput() {
    return this._nodeResource.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatabaseExadbVmClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabaseExadbVmClusterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_domain: cdktf.stringToTerraform(this._availabilityDomain),
      backup_network_nsg_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._backupNetworkNsgIds),
      backup_subnet_id: cdktf.stringToTerraform(this._backupSubnetId),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      domain: cdktf.stringToTerraform(this._domain),
      exascale_db_storage_vault_id: cdktf.stringToTerraform(this._exascaleDbStorageVaultId),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      grid_image_id: cdktf.stringToTerraform(this._gridImageId),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      license_model: cdktf.stringToTerraform(this._licenseModel),
      nsg_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nsgIds),
      private_zone_id: cdktf.stringToTerraform(this._privateZoneId),
      scan_listener_port_tcp: cdktf.numberToTerraform(this._scanListenerPortTcp),
      scan_listener_port_tcp_ssl: cdktf.numberToTerraform(this._scanListenerPortTcpSsl),
      security_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(this._securityAttributes),
      shape: cdktf.stringToTerraform(this._shape),
      shape_attribute: cdktf.stringToTerraform(this._shapeAttribute),
      ssh_public_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sshPublicKeys),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      system_version: cdktf.stringToTerraform(this._systemVersion),
      time_zone: cdktf.stringToTerraform(this._timeZone),
      data_collection_options: databaseExadbVmClusterDataCollectionOptionsToTerraform(this._dataCollectionOptions.internalValue),
      node_config: databaseExadbVmClusterNodeConfigToTerraform(this._nodeConfig.internalValue),
      node_resource: cdktf.listMapper(databaseExadbVmClusterNodeResourceToTerraform, true)(this._nodeResource.internalValue),
      timeouts: databaseExadbVmClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_domain: {
        value: cdktf.stringToHclTerraform(this._availabilityDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_network_nsg_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._backupNetworkNsgIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      backup_subnet_id: {
        value: cdktf.stringToHclTerraform(this._backupSubnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exascale_db_storage_vault_id: {
        value: cdktf.stringToHclTerraform(this._exascaleDbStorageVaultId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      grid_image_id: {
        value: cdktf.stringToHclTerraform(this._gridImageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      license_model: {
        value: cdktf.stringToHclTerraform(this._licenseModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nsg_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nsgIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      private_zone_id: {
        value: cdktf.stringToHclTerraform(this._privateZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scan_listener_port_tcp: {
        value: cdktf.numberToHclTerraform(this._scanListenerPortTcp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scan_listener_port_tcp_ssl: {
        value: cdktf.numberToHclTerraform(this._scanListenerPortTcpSsl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      security_attributes: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._securityAttributes),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      shape: {
        value: cdktf.stringToHclTerraform(this._shape),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shape_attribute: {
        value: cdktf.stringToHclTerraform(this._shapeAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_public_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sshPublicKeys),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_id: {
        value: cdktf.stringToHclTerraform(this._subscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_version: {
        value: cdktf.stringToHclTerraform(this._systemVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_zone: {
        value: cdktf.stringToHclTerraform(this._timeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_collection_options: {
        value: databaseExadbVmClusterDataCollectionOptionsToHclTerraform(this._dataCollectionOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseExadbVmClusterDataCollectionOptionsList",
      },
      node_config: {
        value: databaseExadbVmClusterNodeConfigToHclTerraform(this._nodeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseExadbVmClusterNodeConfigList",
      },
      node_resource: {
        value: cdktf.listMapperHcl(databaseExadbVmClusterNodeResourceToHclTerraform, true)(this._nodeResource.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DatabaseExadbVmClusterNodeResourceList",
      },
      timeouts: {
        value: databaseExadbVmClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabaseExadbVmClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
