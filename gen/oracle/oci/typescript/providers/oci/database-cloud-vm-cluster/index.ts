// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseCloudVmClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster#backup_network_nsg_ids DatabaseCloudVmCluster#backup_network_nsg_ids}
  */
  readonly backupNetworkNsgIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster#backup_subnet_id DatabaseCloudVmCluster#backup_subnet_id}
  */
  readonly backupSubnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster#cloud_exadata_infrastructure_id DatabaseCloudVmCluster#cloud_exadata_infrastructure_id}
  */
  readonly cloudExadataInfrastructureId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster#cluster_name DatabaseCloudVmCluster#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster#compartment_id DatabaseCloudVmCluster#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster#cpu_core_count DatabaseCloudVmCluster#cpu_core_count}
  */
  readonly cpuCoreCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster#create_async DatabaseCloudVmCluster#create_async}
  */
  readonly createAsync?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster#data_storage_percentage DatabaseCloudVmCluster#data_storage_percentage}
  */
  readonly dataStoragePercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster#data_storage_size_in_tbs DatabaseCloudVmCluster#data_storage_size_in_tbs}
  */
  readonly dataStorageSizeInTbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster#db_node_storage_size_in_gbs DatabaseCloudVmCluster#db_node_storage_size_in_gbs}
  */
  readonly dbNodeStorageSizeInGbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster#db_servers DatabaseCloudVmCluster#db_servers}
  */
  readonly dbServers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster#defined_tags DatabaseCloudVmCluster#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster#display_name DatabaseCloudVmCluster#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster#domain DatabaseCloudVmCluster#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster#exascale_db_storage_vault_id DatabaseCloudVmCluster#exascale_db_storage_vault_id}
  */
  readonly exascaleDbStorageVaultId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster#freeform_tags DatabaseCloudVmCluster#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster#gi_version DatabaseCloudVmCluster#gi_version}
  */
  readonly giVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster#hostname DatabaseCloudVmCluster#hostname}
  */
  readonly hostname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster#id DatabaseCloudVmCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster#is_local_backup_enabled DatabaseCloudVmCluster#is_local_backup_enabled}
  */
  readonly isLocalBackupEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster#is_sparse_diskgroup_enabled DatabaseCloudVmCluster#is_sparse_diskgroup_enabled}
  */
  readonly isSparseDiskgroupEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster#license_model DatabaseCloudVmCluster#license_model}
  */
  readonly licenseModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster#memory_size_in_gbs DatabaseCloudVmCluster#memory_size_in_gbs}
  */
  readonly memorySizeInGbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster#nsg_ids DatabaseCloudVmCluster#nsg_ids}
  */
  readonly nsgIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster#ocpu_count DatabaseCloudVmCluster#ocpu_count}
  */
  readonly ocpuCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster#private_zone_id DatabaseCloudVmCluster#private_zone_id}
  */
  readonly privateZoneId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster#scan_listener_port_tcp DatabaseCloudVmCluster#scan_listener_port_tcp}
  */
  readonly scanListenerPortTcp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster#scan_listener_port_tcp_ssl DatabaseCloudVmCluster#scan_listener_port_tcp_ssl}
  */
  readonly scanListenerPortTcpSsl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster#security_attributes DatabaseCloudVmCluster#security_attributes}
  */
  readonly securityAttributes?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster#ssh_public_keys DatabaseCloudVmCluster#ssh_public_keys}
  */
  readonly sshPublicKeys: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster#subnet_id DatabaseCloudVmCluster#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster#subscription_id DatabaseCloudVmCluster#subscription_id}
  */
  readonly subscriptionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster#system_version DatabaseCloudVmCluster#system_version}
  */
  readonly systemVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster#tde_key_store_type DatabaseCloudVmCluster#tde_key_store_type}
  */
  readonly tdeKeyStoreType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster#time_zone DatabaseCloudVmCluster#time_zone}
  */
  readonly timeZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster#vm_cluster_type DatabaseCloudVmCluster#vm_cluster_type}
  */
  readonly vmClusterType?: string;
  /**
  * cloud_automation_update_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster#cloud_automation_update_details DatabaseCloudVmCluster#cloud_automation_update_details}
  */
  readonly cloudAutomationUpdateDetails?: DatabaseCloudVmClusterCloudAutomationUpdateDetails;
  /**
  * data_collection_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster#data_collection_options DatabaseCloudVmCluster#data_collection_options}
  */
  readonly dataCollectionOptions?: DatabaseCloudVmClusterDataCollectionOptions;
  /**
  * file_system_configuration_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster#file_system_configuration_details DatabaseCloudVmCluster#file_system_configuration_details}
  */
  readonly fileSystemConfigurationDetails?: DatabaseCloudVmClusterFileSystemConfigurationDetails[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster#timeouts DatabaseCloudVmCluster#timeouts}
  */
  readonly timeouts?: DatabaseCloudVmClusterTimeouts;
}
export interface DatabaseCloudVmClusterIormConfigCacheDbPlans {
}

export function databaseCloudVmClusterIormConfigCacheDbPlansToTerraform(struct?: DatabaseCloudVmClusterIormConfigCacheDbPlans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseCloudVmClusterIormConfigCacheDbPlansToHclTerraform(struct?: DatabaseCloudVmClusterIormConfigCacheDbPlans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseCloudVmClusterIormConfigCacheDbPlans | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseCloudVmClusterIormConfigCacheDbPlans | undefined) {
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

export class DatabaseCloudVmClusterIormConfigCacheDbPlansList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference {
    return new DatabaseCloudVmClusterIormConfigCacheDbPlansOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseCloudVmClusterIormConfigCache {
}

export function databaseCloudVmClusterIormConfigCacheToTerraform(struct?: DatabaseCloudVmClusterIormConfigCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseCloudVmClusterIormConfigCacheToHclTerraform(struct?: DatabaseCloudVmClusterIormConfigCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseCloudVmClusterIormConfigCacheOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseCloudVmClusterIormConfigCache | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseCloudVmClusterIormConfigCache | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // db_plans - computed: true, optional: false, required: false
  private _dbPlans = new DatabaseCloudVmClusterIormConfigCacheDbPlansList(this, "db_plans", false);
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

export class DatabaseCloudVmClusterIormConfigCacheList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseCloudVmClusterIormConfigCacheOutputReference {
    return new DatabaseCloudVmClusterIormConfigCacheOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseCloudVmClusterMultiCloudIdentityConnectorConfigs {
}

export function databaseCloudVmClusterMultiCloudIdentityConnectorConfigsToTerraform(struct?: DatabaseCloudVmClusterMultiCloudIdentityConnectorConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseCloudVmClusterMultiCloudIdentityConnectorConfigsToHclTerraform(struct?: DatabaseCloudVmClusterMultiCloudIdentityConnectorConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseCloudVmClusterMultiCloudIdentityConnectorConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseCloudVmClusterMultiCloudIdentityConnectorConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseCloudVmClusterMultiCloudIdentityConnectorConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloud_provider - computed: true, optional: false, required: false
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DatabaseCloudVmClusterMultiCloudIdentityConnectorConfigsList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseCloudVmClusterMultiCloudIdentityConnectorConfigsOutputReference {
    return new DatabaseCloudVmClusterMultiCloudIdentityConnectorConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster#apply_update_preferred_end_time DatabaseCloudVmCluster#apply_update_preferred_end_time}
  */
  readonly applyUpdatePreferredEndTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster#apply_update_preferred_start_time DatabaseCloudVmCluster#apply_update_preferred_start_time}
  */
  readonly applyUpdatePreferredStartTime?: string;
}

export function databaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceToTerraform(struct?: DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference | DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apply_update_preferred_end_time: cdktf.stringToTerraform(struct!.applyUpdatePreferredEndTime),
    apply_update_preferred_start_time: cdktf.stringToTerraform(struct!.applyUpdatePreferredStartTime),
  }
}


export function databaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceToHclTerraform(struct?: DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference | DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apply_update_preferred_end_time: {
      value: cdktf.stringToHclTerraform(struct!.applyUpdatePreferredEndTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    apply_update_preferred_start_time: {
      value: cdktf.stringToHclTerraform(struct!.applyUpdatePreferredStartTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applyUpdatePreferredEndTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyUpdatePreferredEndTime = this._applyUpdatePreferredEndTime;
    }
    if (this._applyUpdatePreferredStartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyUpdatePreferredStartTime = this._applyUpdatePreferredStartTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applyUpdatePreferredEndTime = undefined;
      this._applyUpdatePreferredStartTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applyUpdatePreferredEndTime = value.applyUpdatePreferredEndTime;
      this._applyUpdatePreferredStartTime = value.applyUpdatePreferredStartTime;
    }
  }

  // apply_update_preferred_end_time - computed: true, optional: true, required: false
  private _applyUpdatePreferredEndTime?: string; 
  public get applyUpdatePreferredEndTime() {
    return this.getStringAttribute('apply_update_preferred_end_time');
  }
  public set applyUpdatePreferredEndTime(value: string) {
    this._applyUpdatePreferredEndTime = value;
  }
  public resetApplyUpdatePreferredEndTime() {
    this._applyUpdatePreferredEndTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyUpdatePreferredEndTimeInput() {
    return this._applyUpdatePreferredEndTime;
  }

  // apply_update_preferred_start_time - computed: true, optional: true, required: false
  private _applyUpdatePreferredStartTime?: string; 
  public get applyUpdatePreferredStartTime() {
    return this.getStringAttribute('apply_update_preferred_start_time');
  }
  public set applyUpdatePreferredStartTime(value: string) {
    this._applyUpdatePreferredStartTime = value;
  }
  public resetApplyUpdatePreferredStartTime() {
    this._applyUpdatePreferredStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyUpdatePreferredStartTimeInput() {
    return this._applyUpdatePreferredStartTime;
  }
}
export interface DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster#freeze_period_end_time DatabaseCloudVmCluster#freeze_period_end_time}
  */
  readonly freezePeriodEndTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster#freeze_period_start_time DatabaseCloudVmCluster#freeze_period_start_time}
  */
  readonly freezePeriodStartTime?: string;
}

export function databaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodToTerraform(struct?: DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference | DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    freeze_period_end_time: cdktf.stringToTerraform(struct!.freezePeriodEndTime),
    freeze_period_start_time: cdktf.stringToTerraform(struct!.freezePeriodStartTime),
  }
}


export function databaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodToHclTerraform(struct?: DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference | DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    freeze_period_end_time: {
      value: cdktf.stringToHclTerraform(struct!.freezePeriodEndTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    freeze_period_start_time: {
      value: cdktf.stringToHclTerraform(struct!.freezePeriodStartTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._freezePeriodEndTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.freezePeriodEndTime = this._freezePeriodEndTime;
    }
    if (this._freezePeriodStartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.freezePeriodStartTime = this._freezePeriodStartTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._freezePeriodEndTime = undefined;
      this._freezePeriodStartTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._freezePeriodEndTime = value.freezePeriodEndTime;
      this._freezePeriodStartTime = value.freezePeriodStartTime;
    }
  }

  // freeze_period_end_time - computed: true, optional: true, required: false
  private _freezePeriodEndTime?: string; 
  public get freezePeriodEndTime() {
    return this.getStringAttribute('freeze_period_end_time');
  }
  public set freezePeriodEndTime(value: string) {
    this._freezePeriodEndTime = value;
  }
  public resetFreezePeriodEndTime() {
    this._freezePeriodEndTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freezePeriodEndTimeInput() {
    return this._freezePeriodEndTime;
  }

  // freeze_period_start_time - computed: true, optional: true, required: false
  private _freezePeriodStartTime?: string; 
  public get freezePeriodStartTime() {
    return this.getStringAttribute('freeze_period_start_time');
  }
  public set freezePeriodStartTime(value: string) {
    this._freezePeriodStartTime = value;
  }
  public resetFreezePeriodStartTime() {
    this._freezePeriodStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freezePeriodStartTimeInput() {
    return this._freezePeriodStartTime;
  }
}
export interface DatabaseCloudVmClusterCloudAutomationUpdateDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster#is_early_adoption_enabled DatabaseCloudVmCluster#is_early_adoption_enabled}
  */
  readonly isEarlyAdoptionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster#is_freeze_period_enabled DatabaseCloudVmCluster#is_freeze_period_enabled}
  */
  readonly isFreezePeriodEnabled?: boolean | cdktf.IResolvable;
  /**
  * apply_update_time_preference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster#apply_update_time_preference DatabaseCloudVmCluster#apply_update_time_preference}
  */
  readonly applyUpdateTimePreference?: DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference;
  /**
  * freeze_period block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster#freeze_period DatabaseCloudVmCluster#freeze_period}
  */
  readonly freezePeriod?: DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod;
}

export function databaseCloudVmClusterCloudAutomationUpdateDetailsToTerraform(struct?: DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference | DatabaseCloudVmClusterCloudAutomationUpdateDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_early_adoption_enabled: cdktf.booleanToTerraform(struct!.isEarlyAdoptionEnabled),
    is_freeze_period_enabled: cdktf.booleanToTerraform(struct!.isFreezePeriodEnabled),
    apply_update_time_preference: databaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceToTerraform(struct!.applyUpdateTimePreference),
    freeze_period: databaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodToTerraform(struct!.freezePeriod),
  }
}


export function databaseCloudVmClusterCloudAutomationUpdateDetailsToHclTerraform(struct?: DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference | DatabaseCloudVmClusterCloudAutomationUpdateDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_early_adoption_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEarlyAdoptionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_freeze_period_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isFreezePeriodEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    apply_update_time_preference: {
      value: databaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceToHclTerraform(struct!.applyUpdateTimePreference),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList",
    },
    freeze_period: {
      value: databaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodToHclTerraform(struct!.freezePeriod),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseCloudVmClusterCloudAutomationUpdateDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEarlyAdoptionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEarlyAdoptionEnabled = this._isEarlyAdoptionEnabled;
    }
    if (this._isFreezePeriodEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isFreezePeriodEnabled = this._isFreezePeriodEnabled;
    }
    if (this._applyUpdateTimePreference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyUpdateTimePreference = this._applyUpdateTimePreference?.internalValue;
    }
    if (this._freezePeriod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.freezePeriod = this._freezePeriod?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseCloudVmClusterCloudAutomationUpdateDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEarlyAdoptionEnabled = undefined;
      this._isFreezePeriodEnabled = undefined;
      this._applyUpdateTimePreference.internalValue = undefined;
      this._freezePeriod.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEarlyAdoptionEnabled = value.isEarlyAdoptionEnabled;
      this._isFreezePeriodEnabled = value.isFreezePeriodEnabled;
      this._applyUpdateTimePreference.internalValue = value.applyUpdateTimePreference;
      this._freezePeriod.internalValue = value.freezePeriod;
    }
  }

  // is_early_adoption_enabled - computed: true, optional: true, required: false
  private _isEarlyAdoptionEnabled?: boolean | cdktf.IResolvable; 
  public get isEarlyAdoptionEnabled() {
    return this.getBooleanAttribute('is_early_adoption_enabled');
  }
  public set isEarlyAdoptionEnabled(value: boolean | cdktf.IResolvable) {
    this._isEarlyAdoptionEnabled = value;
  }
  public resetIsEarlyAdoptionEnabled() {
    this._isEarlyAdoptionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEarlyAdoptionEnabledInput() {
    return this._isEarlyAdoptionEnabled;
  }

  // is_freeze_period_enabled - computed: true, optional: true, required: false
  private _isFreezePeriodEnabled?: boolean | cdktf.IResolvable; 
  public get isFreezePeriodEnabled() {
    return this.getBooleanAttribute('is_freeze_period_enabled');
  }
  public set isFreezePeriodEnabled(value: boolean | cdktf.IResolvable) {
    this._isFreezePeriodEnabled = value;
  }
  public resetIsFreezePeriodEnabled() {
    this._isFreezePeriodEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFreezePeriodEnabledInput() {
    return this._isFreezePeriodEnabled;
  }

  // apply_update_time_preference - computed: false, optional: true, required: false
  private _applyUpdateTimePreference = new DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference(this, "apply_update_time_preference");
  public get applyUpdateTimePreference() {
    return this._applyUpdateTimePreference;
  }
  public putApplyUpdateTimePreference(value: DatabaseCloudVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference) {
    this._applyUpdateTimePreference.internalValue = value;
  }
  public resetApplyUpdateTimePreference() {
    this._applyUpdateTimePreference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyUpdateTimePreferenceInput() {
    return this._applyUpdateTimePreference.internalValue;
  }

  // freeze_period - computed: false, optional: true, required: false
  private _freezePeriod = new DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference(this, "freeze_period");
  public get freezePeriod() {
    return this._freezePeriod;
  }
  public putFreezePeriod(value: DatabaseCloudVmClusterCloudAutomationUpdateDetailsFreezePeriod) {
    this._freezePeriod.internalValue = value;
  }
  public resetFreezePeriod() {
    this._freezePeriod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freezePeriodInput() {
    return this._freezePeriod.internalValue;
  }
}
export interface DatabaseCloudVmClusterDataCollectionOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster#is_diagnostics_events_enabled DatabaseCloudVmCluster#is_diagnostics_events_enabled}
  */
  readonly isDiagnosticsEventsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster#is_health_monitoring_enabled DatabaseCloudVmCluster#is_health_monitoring_enabled}
  */
  readonly isHealthMonitoringEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster#is_incident_logs_enabled DatabaseCloudVmCluster#is_incident_logs_enabled}
  */
  readonly isIncidentLogsEnabled?: boolean | cdktf.IResolvable;
}

export function databaseCloudVmClusterDataCollectionOptionsToTerraform(struct?: DatabaseCloudVmClusterDataCollectionOptionsOutputReference | DatabaseCloudVmClusterDataCollectionOptions): any {
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


export function databaseCloudVmClusterDataCollectionOptionsToHclTerraform(struct?: DatabaseCloudVmClusterDataCollectionOptionsOutputReference | DatabaseCloudVmClusterDataCollectionOptions): any {
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

export class DatabaseCloudVmClusterDataCollectionOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseCloudVmClusterDataCollectionOptions | undefined {
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

  public set internalValue(value: DatabaseCloudVmClusterDataCollectionOptions | undefined) {
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
export interface DatabaseCloudVmClusterFileSystemConfigurationDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster#file_system_size_gb DatabaseCloudVmCluster#file_system_size_gb}
  */
  readonly fileSystemSizeGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster#mount_point DatabaseCloudVmCluster#mount_point}
  */
  readonly mountPoint?: string;
}

export function databaseCloudVmClusterFileSystemConfigurationDetailsToTerraform(struct?: DatabaseCloudVmClusterFileSystemConfigurationDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_system_size_gb: cdktf.numberToTerraform(struct!.fileSystemSizeGb),
    mount_point: cdktf.stringToTerraform(struct!.mountPoint),
  }
}


export function databaseCloudVmClusterFileSystemConfigurationDetailsToHclTerraform(struct?: DatabaseCloudVmClusterFileSystemConfigurationDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_system_size_gb: {
      value: cdktf.numberToHclTerraform(struct!.fileSystemSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mount_point: {
      value: cdktf.stringToHclTerraform(struct!.mountPoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseCloudVmClusterFileSystemConfigurationDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileSystemSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemSizeGb = this._fileSystemSizeGb;
    }
    if (this._mountPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPoint = this._mountPoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseCloudVmClusterFileSystemConfigurationDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileSystemSizeGb = undefined;
      this._mountPoint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileSystemSizeGb = value.fileSystemSizeGb;
      this._mountPoint = value.mountPoint;
    }
  }

  // file_system_size_gb - computed: true, optional: true, required: false
  private _fileSystemSizeGb?: number; 
  public get fileSystemSizeGb() {
    return this.getNumberAttribute('file_system_size_gb');
  }
  public set fileSystemSizeGb(value: number) {
    this._fileSystemSizeGb = value;
  }
  public resetFileSystemSizeGb() {
    this._fileSystemSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemSizeGbInput() {
    return this._fileSystemSizeGb;
  }

  // mount_point - computed: true, optional: true, required: false
  private _mountPoint?: string; 
  public get mountPoint() {
    return this.getStringAttribute('mount_point');
  }
  public set mountPoint(value: string) {
    this._mountPoint = value;
  }
  public resetMountPoint() {
    this._mountPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPointInput() {
    return this._mountPoint;
  }
}

export class DatabaseCloudVmClusterFileSystemConfigurationDetailsList extends cdktf.ComplexList {
  public internalValue? : DatabaseCloudVmClusterFileSystemConfigurationDetails[] | cdktf.IResolvable

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
  public get(index: number): DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference {
    return new DatabaseCloudVmClusterFileSystemConfigurationDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseCloudVmClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster#create DatabaseCloudVmCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster#delete DatabaseCloudVmCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster#update DatabaseCloudVmCluster#update}
  */
  readonly update?: string;
}

export function databaseCloudVmClusterTimeoutsToTerraform(struct?: DatabaseCloudVmClusterTimeouts | cdktf.IResolvable): any {
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


export function databaseCloudVmClusterTimeoutsToHclTerraform(struct?: DatabaseCloudVmClusterTimeouts | cdktf.IResolvable): any {
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

export class DatabaseCloudVmClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseCloudVmClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabaseCloudVmClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster oci_database_cloud_vm_cluster}
*/
export class DatabaseCloudVmCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_cloud_vm_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseCloudVmCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseCloudVmCluster to import
  * @param importFromId The id of the existing DatabaseCloudVmCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseCloudVmCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_cloud_vm_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/database_cloud_vm_cluster oci_database_cloud_vm_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseCloudVmClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseCloudVmClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_cloud_vm_cluster',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupNetworkNsgIds = config.backupNetworkNsgIds;
    this._backupSubnetId = config.backupSubnetId;
    this._cloudExadataInfrastructureId = config.cloudExadataInfrastructureId;
    this._clusterName = config.clusterName;
    this._compartmentId = config.compartmentId;
    this._cpuCoreCount = config.cpuCoreCount;
    this._createAsync = config.createAsync;
    this._dataStoragePercentage = config.dataStoragePercentage;
    this._dataStorageSizeInTbs = config.dataStorageSizeInTbs;
    this._dbNodeStorageSizeInGbs = config.dbNodeStorageSizeInGbs;
    this._dbServers = config.dbServers;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._domain = config.domain;
    this._exascaleDbStorageVaultId = config.exascaleDbStorageVaultId;
    this._freeformTags = config.freeformTags;
    this._giVersion = config.giVersion;
    this._hostname = config.hostname;
    this._id = config.id;
    this._isLocalBackupEnabled = config.isLocalBackupEnabled;
    this._isSparseDiskgroupEnabled = config.isSparseDiskgroupEnabled;
    this._licenseModel = config.licenseModel;
    this._memorySizeInGbs = config.memorySizeInGbs;
    this._nsgIds = config.nsgIds;
    this._ocpuCount = config.ocpuCount;
    this._privateZoneId = config.privateZoneId;
    this._scanListenerPortTcp = config.scanListenerPortTcp;
    this._scanListenerPortTcpSsl = config.scanListenerPortTcpSsl;
    this._securityAttributes = config.securityAttributes;
    this._sshPublicKeys = config.sshPublicKeys;
    this._subnetId = config.subnetId;
    this._subscriptionId = config.subscriptionId;
    this._systemVersion = config.systemVersion;
    this._tdeKeyStoreType = config.tdeKeyStoreType;
    this._timeZone = config.timeZone;
    this._vmClusterType = config.vmClusterType;
    this._cloudAutomationUpdateDetails.internalValue = config.cloudAutomationUpdateDetails;
    this._dataCollectionOptions.internalValue = config.dataCollectionOptions;
    this._fileSystemConfigurationDetails.internalValue = config.fileSystemConfigurationDetails;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
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

  // cloud_exadata_infrastructure_id - computed: false, optional: false, required: true
  private _cloudExadataInfrastructureId?: string; 
  public get cloudExadataInfrastructureId() {
    return this.getStringAttribute('cloud_exadata_infrastructure_id');
  }
  public set cloudExadataInfrastructureId(value: string) {
    this._cloudExadataInfrastructureId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudExadataInfrastructureIdInput() {
    return this._cloudExadataInfrastructureId;
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

  // compute_model - computed: true, optional: false, required: false
  public get computeModel() {
    return this.getStringAttribute('compute_model');
  }

  // cpu_core_count - computed: false, optional: false, required: true
  private _cpuCoreCount?: number; 
  public get cpuCoreCount() {
    return this.getNumberAttribute('cpu_core_count');
  }
  public set cpuCoreCount(value: number) {
    this._cpuCoreCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCoreCountInput() {
    return this._cpuCoreCount;
  }

  // create_async - computed: false, optional: true, required: false
  private _createAsync?: boolean | cdktf.IResolvable; 
  public get createAsync() {
    return this.getBooleanAttribute('create_async');
  }
  public set createAsync(value: boolean | cdktf.IResolvable) {
    this._createAsync = value;
  }
  public resetCreateAsync() {
    this._createAsync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createAsyncInput() {
    return this._createAsync;
  }

  // data_storage_percentage - computed: true, optional: true, required: false
  private _dataStoragePercentage?: number; 
  public get dataStoragePercentage() {
    return this.getNumberAttribute('data_storage_percentage');
  }
  public set dataStoragePercentage(value: number) {
    this._dataStoragePercentage = value;
  }
  public resetDataStoragePercentage() {
    this._dataStoragePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoragePercentageInput() {
    return this._dataStoragePercentage;
  }

  // data_storage_size_in_tbs - computed: true, optional: true, required: false
  private _dataStorageSizeInTbs?: number; 
  public get dataStorageSizeInTbs() {
    return this.getNumberAttribute('data_storage_size_in_tbs');
  }
  public set dataStorageSizeInTbs(value: number) {
    this._dataStorageSizeInTbs = value;
  }
  public resetDataStorageSizeInTbs() {
    this._dataStorageSizeInTbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStorageSizeInTbsInput() {
    return this._dataStorageSizeInTbs;
  }

  // db_node_storage_size_in_gbs - computed: true, optional: true, required: false
  private _dbNodeStorageSizeInGbs?: number; 
  public get dbNodeStorageSizeInGbs() {
    return this.getNumberAttribute('db_node_storage_size_in_gbs');
  }
  public set dbNodeStorageSizeInGbs(value: number) {
    this._dbNodeStorageSizeInGbs = value;
  }
  public resetDbNodeStorageSizeInGbs() {
    this._dbNodeStorageSizeInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNodeStorageSizeInGbsInput() {
    return this._dbNodeStorageSizeInGbs;
  }

  // db_servers - computed: true, optional: true, required: false
  private _dbServers?: string[]; 
  public get dbServers() {
    return this.getListAttribute('db_servers');
  }
  public set dbServers(value: string[]) {
    this._dbServers = value;
  }
  public resetDbServers() {
    this._dbServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbServersInput() {
    return this._dbServers;
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

  // disk_redundancy - computed: true, optional: false, required: false
  public get diskRedundancy() {
    return this.getStringAttribute('disk_redundancy');
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

  // exascale_db_storage_vault_id - computed: true, optional: true, required: false
  private _exascaleDbStorageVaultId?: string; 
  public get exascaleDbStorageVaultId() {
    return this.getStringAttribute('exascale_db_storage_vault_id');
  }
  public set exascaleDbStorageVaultId(value: string) {
    this._exascaleDbStorageVaultId = value;
  }
  public resetExascaleDbStorageVaultId() {
    this._exascaleDbStorageVaultId = undefined;
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

  // gi_version - computed: false, optional: false, required: true
  private _giVersion?: string; 
  public get giVersion() {
    return this.getStringAttribute('gi_version');
  }
  public set giVersion(value: string) {
    this._giVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get giVersionInput() {
    return this._giVersion;
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
  private _iormConfigCache = new DatabaseCloudVmClusterIormConfigCacheList(this, "iorm_config_cache", false);
  public get iormConfigCache() {
    return this._iormConfigCache;
  }

  // is_local_backup_enabled - computed: true, optional: true, required: false
  private _isLocalBackupEnabled?: boolean | cdktf.IResolvable; 
  public get isLocalBackupEnabled() {
    return this.getBooleanAttribute('is_local_backup_enabled');
  }
  public set isLocalBackupEnabled(value: boolean | cdktf.IResolvable) {
    this._isLocalBackupEnabled = value;
  }
  public resetIsLocalBackupEnabled() {
    this._isLocalBackupEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isLocalBackupEnabledInput() {
    return this._isLocalBackupEnabled;
  }

  // is_sparse_diskgroup_enabled - computed: true, optional: true, required: false
  private _isSparseDiskgroupEnabled?: boolean | cdktf.IResolvable; 
  public get isSparseDiskgroupEnabled() {
    return this.getBooleanAttribute('is_sparse_diskgroup_enabled');
  }
  public set isSparseDiskgroupEnabled(value: boolean | cdktf.IResolvable) {
    this._isSparseDiskgroupEnabled = value;
  }
  public resetIsSparseDiskgroupEnabled() {
    this._isSparseDiskgroupEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSparseDiskgroupEnabledInput() {
    return this._isSparseDiskgroupEnabled;
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

  // memory_size_in_gbs - computed: true, optional: true, required: false
  private _memorySizeInGbs?: number; 
  public get memorySizeInGbs() {
    return this.getNumberAttribute('memory_size_in_gbs');
  }
  public set memorySizeInGbs(value: number) {
    this._memorySizeInGbs = value;
  }
  public resetMemorySizeInGbs() {
    this._memorySizeInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memorySizeInGbsInput() {
    return this._memorySizeInGbs;
  }

  // multi_cloud_identity_connector_configs - computed: true, optional: false, required: false
  private _multiCloudIdentityConnectorConfigs = new DatabaseCloudVmClusterMultiCloudIdentityConnectorConfigsList(this, "multi_cloud_identity_connector_configs", false);
  public get multiCloudIdentityConnectorConfigs() {
    return this._multiCloudIdentityConnectorConfigs;
  }

  // node_count - computed: true, optional: false, required: false
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
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

  // ocpu_count - computed: true, optional: true, required: false
  private _ocpuCount?: number; 
  public get ocpuCount() {
    return this.getNumberAttribute('ocpu_count');
  }
  public set ocpuCount(value: number) {
    this._ocpuCount = value;
  }
  public resetOcpuCount() {
    this._ocpuCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocpuCountInput() {
    return this._ocpuCount;
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

  // scan_ipv6ids - computed: true, optional: false, required: false
  public get scanIpv6Ids() {
    return this.getListAttribute('scan_ipv6ids');
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

  // shape - computed: true, optional: false, required: false
  public get shape() {
    return this.getStringAttribute('shape');
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

  // storage_management_type - computed: true, optional: false, required: false
  public get storageManagementType() {
    return this.getStringAttribute('storage_management_type');
  }

  // storage_size_in_gbs - computed: true, optional: false, required: false
  public get storageSizeInGbs() {
    return this.getNumberAttribute('storage_size_in_gbs');
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

  // tde_key_store_type - computed: true, optional: true, required: false
  private _tdeKeyStoreType?: string; 
  public get tdeKeyStoreType() {
    return this.getStringAttribute('tde_key_store_type');
  }
  public set tdeKeyStoreType(value: string) {
    this._tdeKeyStoreType = value;
  }
  public resetTdeKeyStoreType() {
    this._tdeKeyStoreType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tdeKeyStoreTypeInput() {
    return this._tdeKeyStoreType;
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

  // vipv6ids - computed: true, optional: false, required: false
  public get vipv6Ids() {
    return this.getListAttribute('vipv6ids');
  }

  // vm_cluster_type - computed: true, optional: true, required: false
  private _vmClusterType?: string; 
  public get vmClusterType() {
    return this.getStringAttribute('vm_cluster_type');
  }
  public set vmClusterType(value: string) {
    this._vmClusterType = value;
  }
  public resetVmClusterType() {
    this._vmClusterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmClusterTypeInput() {
    return this._vmClusterType;
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }

  // cloud_automation_update_details - computed: false, optional: true, required: false
  private _cloudAutomationUpdateDetails = new DatabaseCloudVmClusterCloudAutomationUpdateDetailsOutputReference(this, "cloud_automation_update_details");
  public get cloudAutomationUpdateDetails() {
    return this._cloudAutomationUpdateDetails;
  }
  public putCloudAutomationUpdateDetails(value: DatabaseCloudVmClusterCloudAutomationUpdateDetails) {
    this._cloudAutomationUpdateDetails.internalValue = value;
  }
  public resetCloudAutomationUpdateDetails() {
    this._cloudAutomationUpdateDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudAutomationUpdateDetailsInput() {
    return this._cloudAutomationUpdateDetails.internalValue;
  }

  // data_collection_options - computed: false, optional: true, required: false
  private _dataCollectionOptions = new DatabaseCloudVmClusterDataCollectionOptionsOutputReference(this, "data_collection_options");
  public get dataCollectionOptions() {
    return this._dataCollectionOptions;
  }
  public putDataCollectionOptions(value: DatabaseCloudVmClusterDataCollectionOptions) {
    this._dataCollectionOptions.internalValue = value;
  }
  public resetDataCollectionOptions() {
    this._dataCollectionOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCollectionOptionsInput() {
    return this._dataCollectionOptions.internalValue;
  }

  // file_system_configuration_details - computed: false, optional: true, required: false
  private _fileSystemConfigurationDetails = new DatabaseCloudVmClusterFileSystemConfigurationDetailsList(this, "file_system_configuration_details", false);
  public get fileSystemConfigurationDetails() {
    return this._fileSystemConfigurationDetails;
  }
  public putFileSystemConfigurationDetails(value: DatabaseCloudVmClusterFileSystemConfigurationDetails[] | cdktf.IResolvable) {
    this._fileSystemConfigurationDetails.internalValue = value;
  }
  public resetFileSystemConfigurationDetails() {
    this._fileSystemConfigurationDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemConfigurationDetailsInput() {
    return this._fileSystemConfigurationDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatabaseCloudVmClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabaseCloudVmClusterTimeouts) {
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
      backup_network_nsg_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._backupNetworkNsgIds),
      backup_subnet_id: cdktf.stringToTerraform(this._backupSubnetId),
      cloud_exadata_infrastructure_id: cdktf.stringToTerraform(this._cloudExadataInfrastructureId),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      cpu_core_count: cdktf.numberToTerraform(this._cpuCoreCount),
      create_async: cdktf.booleanToTerraform(this._createAsync),
      data_storage_percentage: cdktf.numberToTerraform(this._dataStoragePercentage),
      data_storage_size_in_tbs: cdktf.numberToTerraform(this._dataStorageSizeInTbs),
      db_node_storage_size_in_gbs: cdktf.numberToTerraform(this._dbNodeStorageSizeInGbs),
      db_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dbServers),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      domain: cdktf.stringToTerraform(this._domain),
      exascale_db_storage_vault_id: cdktf.stringToTerraform(this._exascaleDbStorageVaultId),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      gi_version: cdktf.stringToTerraform(this._giVersion),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      is_local_backup_enabled: cdktf.booleanToTerraform(this._isLocalBackupEnabled),
      is_sparse_diskgroup_enabled: cdktf.booleanToTerraform(this._isSparseDiskgroupEnabled),
      license_model: cdktf.stringToTerraform(this._licenseModel),
      memory_size_in_gbs: cdktf.numberToTerraform(this._memorySizeInGbs),
      nsg_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nsgIds),
      ocpu_count: cdktf.numberToTerraform(this._ocpuCount),
      private_zone_id: cdktf.stringToTerraform(this._privateZoneId),
      scan_listener_port_tcp: cdktf.numberToTerraform(this._scanListenerPortTcp),
      scan_listener_port_tcp_ssl: cdktf.numberToTerraform(this._scanListenerPortTcpSsl),
      security_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(this._securityAttributes),
      ssh_public_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sshPublicKeys),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      system_version: cdktf.stringToTerraform(this._systemVersion),
      tde_key_store_type: cdktf.stringToTerraform(this._tdeKeyStoreType),
      time_zone: cdktf.stringToTerraform(this._timeZone),
      vm_cluster_type: cdktf.stringToTerraform(this._vmClusterType),
      cloud_automation_update_details: databaseCloudVmClusterCloudAutomationUpdateDetailsToTerraform(this._cloudAutomationUpdateDetails.internalValue),
      data_collection_options: databaseCloudVmClusterDataCollectionOptionsToTerraform(this._dataCollectionOptions.internalValue),
      file_system_configuration_details: cdktf.listMapper(databaseCloudVmClusterFileSystemConfigurationDetailsToTerraform, true)(this._fileSystemConfigurationDetails.internalValue),
      timeouts: databaseCloudVmClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      cloud_exadata_infrastructure_id: {
        value: cdktf.stringToHclTerraform(this._cloudExadataInfrastructureId),
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
      cpu_core_count: {
        value: cdktf.numberToHclTerraform(this._cpuCoreCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      create_async: {
        value: cdktf.booleanToHclTerraform(this._createAsync),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      data_storage_percentage: {
        value: cdktf.numberToHclTerraform(this._dataStoragePercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_storage_size_in_tbs: {
        value: cdktf.numberToHclTerraform(this._dataStorageSizeInTbs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      db_node_storage_size_in_gbs: {
        value: cdktf.numberToHclTerraform(this._dbNodeStorageSizeInGbs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      db_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dbServers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      gi_version: {
        value: cdktf.stringToHclTerraform(this._giVersion),
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
      is_local_backup_enabled: {
        value: cdktf.booleanToHclTerraform(this._isLocalBackupEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_sparse_diskgroup_enabled: {
        value: cdktf.booleanToHclTerraform(this._isSparseDiskgroupEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      license_model: {
        value: cdktf.stringToHclTerraform(this._licenseModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory_size_in_gbs: {
        value: cdktf.numberToHclTerraform(this._memorySizeInGbs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nsg_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nsgIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ocpu_count: {
        value: cdktf.numberToHclTerraform(this._ocpuCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      tde_key_store_type: {
        value: cdktf.stringToHclTerraform(this._tdeKeyStoreType),
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
      vm_cluster_type: {
        value: cdktf.stringToHclTerraform(this._vmClusterType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_automation_update_details: {
        value: databaseCloudVmClusterCloudAutomationUpdateDetailsToHclTerraform(this._cloudAutomationUpdateDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseCloudVmClusterCloudAutomationUpdateDetailsList",
      },
      data_collection_options: {
        value: databaseCloudVmClusterDataCollectionOptionsToHclTerraform(this._dataCollectionOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseCloudVmClusterDataCollectionOptionsList",
      },
      file_system_configuration_details: {
        value: cdktf.listMapperHcl(databaseCloudVmClusterFileSystemConfigurationDetailsToHclTerraform, true)(this._fileSystemConfigurationDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseCloudVmClusterFileSystemConfigurationDetailsList",
      },
      timeouts: {
        value: databaseCloudVmClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabaseCloudVmClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
