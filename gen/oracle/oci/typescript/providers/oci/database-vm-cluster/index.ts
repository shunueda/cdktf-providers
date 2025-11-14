// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_vm_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseVmClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_vm_cluster#compartment_id DatabaseVmCluster#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_vm_cluster#cpu_core_count DatabaseVmCluster#cpu_core_count}
  */
  readonly cpuCoreCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_vm_cluster#data_storage_size_in_gb DatabaseVmCluster#data_storage_size_in_gb}
  */
  readonly dataStorageSizeInGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_vm_cluster#data_storage_size_in_tbs DatabaseVmCluster#data_storage_size_in_tbs}
  */
  readonly dataStorageSizeInTbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_vm_cluster#db_node_storage_size_in_gbs DatabaseVmCluster#db_node_storage_size_in_gbs}
  */
  readonly dbNodeStorageSizeInGbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_vm_cluster#db_servers DatabaseVmCluster#db_servers}
  */
  readonly dbServers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_vm_cluster#defined_tags DatabaseVmCluster#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_vm_cluster#display_name DatabaseVmCluster#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_vm_cluster#exadata_infrastructure_id DatabaseVmCluster#exadata_infrastructure_id}
  */
  readonly exadataInfrastructureId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_vm_cluster#exascale_db_storage_vault_id DatabaseVmCluster#exascale_db_storage_vault_id}
  */
  readonly exascaleDbStorageVaultId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_vm_cluster#freeform_tags DatabaseVmCluster#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_vm_cluster#gi_version DatabaseVmCluster#gi_version}
  */
  readonly giVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_vm_cluster#id DatabaseVmCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_vm_cluster#is_local_backup_enabled DatabaseVmCluster#is_local_backup_enabled}
  */
  readonly isLocalBackupEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_vm_cluster#is_sparse_diskgroup_enabled DatabaseVmCluster#is_sparse_diskgroup_enabled}
  */
  readonly isSparseDiskgroupEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_vm_cluster#license_model DatabaseVmCluster#license_model}
  */
  readonly licenseModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_vm_cluster#memory_size_in_gbs DatabaseVmCluster#memory_size_in_gbs}
  */
  readonly memorySizeInGbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_vm_cluster#ocpu_count DatabaseVmCluster#ocpu_count}
  */
  readonly ocpuCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_vm_cluster#ssh_public_keys DatabaseVmCluster#ssh_public_keys}
  */
  readonly sshPublicKeys: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_vm_cluster#system_version DatabaseVmCluster#system_version}
  */
  readonly systemVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_vm_cluster#time_zone DatabaseVmCluster#time_zone}
  */
  readonly timeZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_vm_cluster#vm_cluster_network_id DatabaseVmCluster#vm_cluster_network_id}
  */
  readonly vmClusterNetworkId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_vm_cluster#vm_cluster_type DatabaseVmCluster#vm_cluster_type}
  */
  readonly vmClusterType?: string;
  /**
  * cloud_automation_update_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_vm_cluster#cloud_automation_update_details DatabaseVmCluster#cloud_automation_update_details}
  */
  readonly cloudAutomationUpdateDetails?: DatabaseVmClusterCloudAutomationUpdateDetails;
  /**
  * data_collection_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_vm_cluster#data_collection_options DatabaseVmCluster#data_collection_options}
  */
  readonly dataCollectionOptions?: DatabaseVmClusterDataCollectionOptions;
  /**
  * file_system_configuration_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_vm_cluster#file_system_configuration_details DatabaseVmCluster#file_system_configuration_details}
  */
  readonly fileSystemConfigurationDetails?: DatabaseVmClusterFileSystemConfigurationDetails[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_vm_cluster#timeouts DatabaseVmCluster#timeouts}
  */
  readonly timeouts?: DatabaseVmClusterTimeouts;
}
export interface DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_vm_cluster#apply_update_preferred_end_time DatabaseVmCluster#apply_update_preferred_end_time}
  */
  readonly applyUpdatePreferredEndTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_vm_cluster#apply_update_preferred_start_time DatabaseVmCluster#apply_update_preferred_start_time}
  */
  readonly applyUpdatePreferredStartTime?: string;
}

export function databaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceToTerraform(struct?: DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference | DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apply_update_preferred_end_time: cdktf.stringToTerraform(struct!.applyUpdatePreferredEndTime),
    apply_update_preferred_start_time: cdktf.stringToTerraform(struct!.applyUpdatePreferredStartTime),
  }
}


export function databaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceToHclTerraform(struct?: DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference | DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference): any {
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

export class DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference | undefined {
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

  public set internalValue(value: DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference | undefined) {
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
export interface DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_vm_cluster#freeze_period_end_time DatabaseVmCluster#freeze_period_end_time}
  */
  readonly freezePeriodEndTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_vm_cluster#freeze_period_start_time DatabaseVmCluster#freeze_period_start_time}
  */
  readonly freezePeriodStartTime?: string;
}

export function databaseVmClusterCloudAutomationUpdateDetailsFreezePeriodToTerraform(struct?: DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference | DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    freeze_period_end_time: cdktf.stringToTerraform(struct!.freezePeriodEndTime),
    freeze_period_start_time: cdktf.stringToTerraform(struct!.freezePeriodStartTime),
  }
}


export function databaseVmClusterCloudAutomationUpdateDetailsFreezePeriodToHclTerraform(struct?: DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference | DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod): any {
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

export class DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod | undefined {
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

  public set internalValue(value: DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod | undefined) {
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
export interface DatabaseVmClusterCloudAutomationUpdateDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_vm_cluster#is_early_adoption_enabled DatabaseVmCluster#is_early_adoption_enabled}
  */
  readonly isEarlyAdoptionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_vm_cluster#is_freeze_period_enabled DatabaseVmCluster#is_freeze_period_enabled}
  */
  readonly isFreezePeriodEnabled?: boolean | cdktf.IResolvable;
  /**
  * apply_update_time_preference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_vm_cluster#apply_update_time_preference DatabaseVmCluster#apply_update_time_preference}
  */
  readonly applyUpdateTimePreference?: DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference;
  /**
  * freeze_period block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_vm_cluster#freeze_period DatabaseVmCluster#freeze_period}
  */
  readonly freezePeriod?: DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod;
}

export function databaseVmClusterCloudAutomationUpdateDetailsToTerraform(struct?: DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference | DatabaseVmClusterCloudAutomationUpdateDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_early_adoption_enabled: cdktf.booleanToTerraform(struct!.isEarlyAdoptionEnabled),
    is_freeze_period_enabled: cdktf.booleanToTerraform(struct!.isFreezePeriodEnabled),
    apply_update_time_preference: databaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceToTerraform(struct!.applyUpdateTimePreference),
    freeze_period: databaseVmClusterCloudAutomationUpdateDetailsFreezePeriodToTerraform(struct!.freezePeriod),
  }
}


export function databaseVmClusterCloudAutomationUpdateDetailsToHclTerraform(struct?: DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference | DatabaseVmClusterCloudAutomationUpdateDetails): any {
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
      value: databaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceToHclTerraform(struct!.applyUpdateTimePreference),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceList",
    },
    freeze_period: {
      value: databaseVmClusterCloudAutomationUpdateDetailsFreezePeriodToHclTerraform(struct!.freezePeriod),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseVmClusterCloudAutomationUpdateDetails | undefined {
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

  public set internalValue(value: DatabaseVmClusterCloudAutomationUpdateDetails | undefined) {
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
  private _applyUpdateTimePreference = new DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreferenceOutputReference(this, "apply_update_time_preference");
  public get applyUpdateTimePreference() {
    return this._applyUpdateTimePreference;
  }
  public putApplyUpdateTimePreference(value: DatabaseVmClusterCloudAutomationUpdateDetailsApplyUpdateTimePreference) {
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
  private _freezePeriod = new DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriodOutputReference(this, "freeze_period");
  public get freezePeriod() {
    return this._freezePeriod;
  }
  public putFreezePeriod(value: DatabaseVmClusterCloudAutomationUpdateDetailsFreezePeriod) {
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
export interface DatabaseVmClusterDataCollectionOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_vm_cluster#is_diagnostics_events_enabled DatabaseVmCluster#is_diagnostics_events_enabled}
  */
  readonly isDiagnosticsEventsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_vm_cluster#is_health_monitoring_enabled DatabaseVmCluster#is_health_monitoring_enabled}
  */
  readonly isHealthMonitoringEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_vm_cluster#is_incident_logs_enabled DatabaseVmCluster#is_incident_logs_enabled}
  */
  readonly isIncidentLogsEnabled?: boolean | cdktf.IResolvable;
}

export function databaseVmClusterDataCollectionOptionsToTerraform(struct?: DatabaseVmClusterDataCollectionOptionsOutputReference | DatabaseVmClusterDataCollectionOptions): any {
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


export function databaseVmClusterDataCollectionOptionsToHclTerraform(struct?: DatabaseVmClusterDataCollectionOptionsOutputReference | DatabaseVmClusterDataCollectionOptions): any {
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

export class DatabaseVmClusterDataCollectionOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseVmClusterDataCollectionOptions | undefined {
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

  public set internalValue(value: DatabaseVmClusterDataCollectionOptions | undefined) {
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
export interface DatabaseVmClusterFileSystemConfigurationDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_vm_cluster#file_system_size_gb DatabaseVmCluster#file_system_size_gb}
  */
  readonly fileSystemSizeGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_vm_cluster#mount_point DatabaseVmCluster#mount_point}
  */
  readonly mountPoint?: string;
}

export function databaseVmClusterFileSystemConfigurationDetailsToTerraform(struct?: DatabaseVmClusterFileSystemConfigurationDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_system_size_gb: cdktf.numberToTerraform(struct!.fileSystemSizeGb),
    mount_point: cdktf.stringToTerraform(struct!.mountPoint),
  }
}


export function databaseVmClusterFileSystemConfigurationDetailsToHclTerraform(struct?: DatabaseVmClusterFileSystemConfigurationDetails | cdktf.IResolvable): any {
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

export class DatabaseVmClusterFileSystemConfigurationDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseVmClusterFileSystemConfigurationDetails | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabaseVmClusterFileSystemConfigurationDetails | cdktf.IResolvable | undefined) {
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

export class DatabaseVmClusterFileSystemConfigurationDetailsList extends cdktf.ComplexList {
  public internalValue? : DatabaseVmClusterFileSystemConfigurationDetails[] | cdktf.IResolvable

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
  public get(index: number): DatabaseVmClusterFileSystemConfigurationDetailsOutputReference {
    return new DatabaseVmClusterFileSystemConfigurationDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseVmClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_vm_cluster#create DatabaseVmCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_vm_cluster#delete DatabaseVmCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_vm_cluster#update DatabaseVmCluster#update}
  */
  readonly update?: string;
}

export function databaseVmClusterTimeoutsToTerraform(struct?: DatabaseVmClusterTimeouts | cdktf.IResolvable): any {
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


export function databaseVmClusterTimeoutsToHclTerraform(struct?: DatabaseVmClusterTimeouts | cdktf.IResolvable): any {
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

export class DatabaseVmClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseVmClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabaseVmClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_vm_cluster oci_database_vm_cluster}
*/
export class DatabaseVmCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_vm_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseVmCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseVmCluster to import
  * @param importFromId The id of the existing DatabaseVmCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_vm_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseVmCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_vm_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/database_vm_cluster oci_database_vm_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseVmClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseVmClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_vm_cluster',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._cpuCoreCount = config.cpuCoreCount;
    this._dataStorageSizeInGb = config.dataStorageSizeInGb;
    this._dataStorageSizeInTbs = config.dataStorageSizeInTbs;
    this._dbNodeStorageSizeInGbs = config.dbNodeStorageSizeInGbs;
    this._dbServers = config.dbServers;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._exadataInfrastructureId = config.exadataInfrastructureId;
    this._exascaleDbStorageVaultId = config.exascaleDbStorageVaultId;
    this._freeformTags = config.freeformTags;
    this._giVersion = config.giVersion;
    this._id = config.id;
    this._isLocalBackupEnabled = config.isLocalBackupEnabled;
    this._isSparseDiskgroupEnabled = config.isSparseDiskgroupEnabled;
    this._licenseModel = config.licenseModel;
    this._memorySizeInGbs = config.memorySizeInGbs;
    this._ocpuCount = config.ocpuCount;
    this._sshPublicKeys = config.sshPublicKeys;
    this._systemVersion = config.systemVersion;
    this._timeZone = config.timeZone;
    this._vmClusterNetworkId = config.vmClusterNetworkId;
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

  // cpus_enabled - computed: true, optional: false, required: false
  public get cpusEnabled() {
    return this.getNumberAttribute('cpus_enabled');
  }

  // data_storage_size_in_gb - computed: true, optional: true, required: false
  private _dataStorageSizeInGb?: number; 
  public get dataStorageSizeInGb() {
    return this.getNumberAttribute('data_storage_size_in_gb');
  }
  public set dataStorageSizeInGb(value: number) {
    this._dataStorageSizeInGb = value;
  }
  public resetDataStorageSizeInGb() {
    this._dataStorageSizeInGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStorageSizeInGbInput() {
    return this._dataStorageSizeInGb;
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

  // exadata_infrastructure_id - computed: false, optional: false, required: true
  private _exadataInfrastructureId?: string; 
  public get exadataInfrastructureId() {
    return this.getStringAttribute('exadata_infrastructure_id');
  }
  public set exadataInfrastructureId(value: string) {
    this._exadataInfrastructureId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exadataInfrastructureIdInput() {
    return this._exadataInfrastructureId;
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

  // last_patch_history_entry_id - computed: true, optional: false, required: false
  public get lastPatchHistoryEntryId() {
    return this.getStringAttribute('last_patch_history_entry_id');
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

  // ocpus_enabled - computed: true, optional: false, required: false
  public get ocpusEnabled() {
    return this.getNumberAttribute('ocpus_enabled');
  }

  // shape - computed: true, optional: false, required: false
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // ssh_public_keys - computed: false, optional: false, required: true
  private _sshPublicKeys?: string[]; 
  public get sshPublicKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('ssh_public_keys'));
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

  // vm_cluster_network_id - computed: false, optional: false, required: true
  private _vmClusterNetworkId?: string; 
  public get vmClusterNetworkId() {
    return this.getStringAttribute('vm_cluster_network_id');
  }
  public set vmClusterNetworkId(value: string) {
    this._vmClusterNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmClusterNetworkIdInput() {
    return this._vmClusterNetworkId;
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

  // cloud_automation_update_details - computed: false, optional: true, required: false
  private _cloudAutomationUpdateDetails = new DatabaseVmClusterCloudAutomationUpdateDetailsOutputReference(this, "cloud_automation_update_details");
  public get cloudAutomationUpdateDetails() {
    return this._cloudAutomationUpdateDetails;
  }
  public putCloudAutomationUpdateDetails(value: DatabaseVmClusterCloudAutomationUpdateDetails) {
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
  private _dataCollectionOptions = new DatabaseVmClusterDataCollectionOptionsOutputReference(this, "data_collection_options");
  public get dataCollectionOptions() {
    return this._dataCollectionOptions;
  }
  public putDataCollectionOptions(value: DatabaseVmClusterDataCollectionOptions) {
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
  private _fileSystemConfigurationDetails = new DatabaseVmClusterFileSystemConfigurationDetailsList(this, "file_system_configuration_details", false);
  public get fileSystemConfigurationDetails() {
    return this._fileSystemConfigurationDetails;
  }
  public putFileSystemConfigurationDetails(value: DatabaseVmClusterFileSystemConfigurationDetails[] | cdktf.IResolvable) {
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
  private _timeouts = new DatabaseVmClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabaseVmClusterTimeouts) {
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
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      cpu_core_count: cdktf.numberToTerraform(this._cpuCoreCount),
      data_storage_size_in_gb: cdktf.numberToTerraform(this._dataStorageSizeInGb),
      data_storage_size_in_tbs: cdktf.numberToTerraform(this._dataStorageSizeInTbs),
      db_node_storage_size_in_gbs: cdktf.numberToTerraform(this._dbNodeStorageSizeInGbs),
      db_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dbServers),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      exadata_infrastructure_id: cdktf.stringToTerraform(this._exadataInfrastructureId),
      exascale_db_storage_vault_id: cdktf.stringToTerraform(this._exascaleDbStorageVaultId),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      gi_version: cdktf.stringToTerraform(this._giVersion),
      id: cdktf.stringToTerraform(this._id),
      is_local_backup_enabled: cdktf.booleanToTerraform(this._isLocalBackupEnabled),
      is_sparse_diskgroup_enabled: cdktf.booleanToTerraform(this._isSparseDiskgroupEnabled),
      license_model: cdktf.stringToTerraform(this._licenseModel),
      memory_size_in_gbs: cdktf.numberToTerraform(this._memorySizeInGbs),
      ocpu_count: cdktf.numberToTerraform(this._ocpuCount),
      ssh_public_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sshPublicKeys),
      system_version: cdktf.stringToTerraform(this._systemVersion),
      time_zone: cdktf.stringToTerraform(this._timeZone),
      vm_cluster_network_id: cdktf.stringToTerraform(this._vmClusterNetworkId),
      vm_cluster_type: cdktf.stringToTerraform(this._vmClusterType),
      cloud_automation_update_details: databaseVmClusterCloudAutomationUpdateDetailsToTerraform(this._cloudAutomationUpdateDetails.internalValue),
      data_collection_options: databaseVmClusterDataCollectionOptionsToTerraform(this._dataCollectionOptions.internalValue),
      file_system_configuration_details: cdktf.listMapper(databaseVmClusterFileSystemConfigurationDetailsToTerraform, true)(this._fileSystemConfigurationDetails.internalValue),
      timeouts: databaseVmClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      data_storage_size_in_gb: {
        value: cdktf.numberToHclTerraform(this._dataStorageSizeInGb),
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
      exadata_infrastructure_id: {
        value: cdktf.stringToHclTerraform(this._exadataInfrastructureId),
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
      ocpu_count: {
        value: cdktf.numberToHclTerraform(this._ocpuCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssh_public_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sshPublicKeys),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      vm_cluster_network_id: {
        value: cdktf.stringToHclTerraform(this._vmClusterNetworkId),
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
        value: databaseVmClusterCloudAutomationUpdateDetailsToHclTerraform(this._cloudAutomationUpdateDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseVmClusterCloudAutomationUpdateDetailsList",
      },
      data_collection_options: {
        value: databaseVmClusterDataCollectionOptionsToHclTerraform(this._dataCollectionOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseVmClusterDataCollectionOptionsList",
      },
      file_system_configuration_details: {
        value: cdktf.listMapperHcl(databaseVmClusterFileSystemConfigurationDetailsToHclTerraform, true)(this._fileSystemConfigurationDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseVmClusterFileSystemConfigurationDetailsList",
      },
      timeouts: {
        value: databaseVmClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabaseVmClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
