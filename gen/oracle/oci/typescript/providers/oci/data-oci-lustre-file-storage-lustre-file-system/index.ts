// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/lustre_file_storage_lustre_file_system
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciLustreFileStorageLustreFileSystemConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/lustre_file_storage_lustre_file_system#lustre_file_system_id DataOciLustreFileStorageLustreFileSystem#lustre_file_system_id}
  */
  readonly lustreFileSystemId: string;
}
export interface DataOciLustreFileStorageLustreFileSystemMaintenanceWindow {
}

export function dataOciLustreFileStorageLustreFileSystemMaintenanceWindowToTerraform(struct?: DataOciLustreFileStorageLustreFileSystemMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciLustreFileStorageLustreFileSystemMaintenanceWindowToHclTerraform(struct?: DataOciLustreFileStorageLustreFileSystemMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciLustreFileStorageLustreFileSystemMaintenanceWindowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLustreFileStorageLustreFileSystemMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLustreFileStorageLustreFileSystemMaintenanceWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // day_of_week - computed: true, optional: false, required: false
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }

  // time_start - computed: true, optional: false, required: false
  public get timeStart() {
    return this.getStringAttribute('time_start');
  }
}

export class DataOciLustreFileStorageLustreFileSystemMaintenanceWindowList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLustreFileStorageLustreFileSystemMaintenanceWindowOutputReference {
    return new DataOciLustreFileStorageLustreFileSystemMaintenanceWindowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciLustreFileStorageLustreFileSystemRootSquashConfiguration {
}

export function dataOciLustreFileStorageLustreFileSystemRootSquashConfigurationToTerraform(struct?: DataOciLustreFileStorageLustreFileSystemRootSquashConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciLustreFileStorageLustreFileSystemRootSquashConfigurationToHclTerraform(struct?: DataOciLustreFileStorageLustreFileSystemRootSquashConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciLustreFileStorageLustreFileSystemRootSquashConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLustreFileStorageLustreFileSystemRootSquashConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLustreFileStorageLustreFileSystemRootSquashConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_exceptions - computed: true, optional: false, required: false
  public get clientExceptions() {
    return this.getListAttribute('client_exceptions');
  }

  // identity_squash - computed: true, optional: false, required: false
  public get identitySquash() {
    return this.getStringAttribute('identity_squash');
  }

  // squash_gid - computed: true, optional: false, required: false
  public get squashGid() {
    return this.getStringAttribute('squash_gid');
  }

  // squash_uid - computed: true, optional: false, required: false
  public get squashUid() {
    return this.getStringAttribute('squash_uid');
  }
}

export class DataOciLustreFileStorageLustreFileSystemRootSquashConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLustreFileStorageLustreFileSystemRootSquashConfigurationOutputReference {
    return new DataOciLustreFileStorageLustreFileSystemRootSquashConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/lustre_file_storage_lustre_file_system oci_lustre_file_storage_lustre_file_system}
*/
export class DataOciLustreFileStorageLustreFileSystem extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_lustre_file_storage_lustre_file_system";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciLustreFileStorageLustreFileSystem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciLustreFileStorageLustreFileSystem to import
  * @param importFromId The id of the existing DataOciLustreFileStorageLustreFileSystem that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/lustre_file_storage_lustre_file_system#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciLustreFileStorageLustreFileSystem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_lustre_file_storage_lustre_file_system", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/lustre_file_storage_lustre_file_system oci_lustre_file_storage_lustre_file_system} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciLustreFileStorageLustreFileSystemConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciLustreFileStorageLustreFileSystemConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_lustre_file_storage_lustre_file_system',
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
    this._lustreFileSystemId = config.lustreFileSystemId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // capacity_in_gbs - computed: true, optional: false, required: false
  public get capacityInGbs() {
    return this.getNumberAttribute('capacity_in_gbs');
  }

  // cluster_placement_group_id - computed: true, optional: false, required: false
  public get clusterPlacementGroupId() {
    return this.getStringAttribute('cluster_placement_group_id');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
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

  // file_system_description - computed: true, optional: false, required: false
  public get fileSystemDescription() {
    return this.getStringAttribute('file_system_description');
  }

  // file_system_name - computed: true, optional: false, required: false
  public get fileSystemName() {
    return this.getStringAttribute('file_system_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // lnet - computed: true, optional: false, required: false
  public get lnet() {
    return this.getStringAttribute('lnet');
  }

  // lustre_file_system_id - computed: false, optional: false, required: true
  private _lustreFileSystemId?: string; 
  public get lustreFileSystemId() {
    return this.getStringAttribute('lustre_file_system_id');
  }
  public set lustreFileSystemId(value: string) {
    this._lustreFileSystemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lustreFileSystemIdInput() {
    return this._lustreFileSystemId;
  }

  // maintenance_window - computed: true, optional: false, required: false
  private _maintenanceWindow = new DataOciLustreFileStorageLustreFileSystemMaintenanceWindowList(this, "maintenance_window", false);
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }

  // major_version - computed: true, optional: false, required: false
  public get majorVersion() {
    return this.getStringAttribute('major_version');
  }

  // management_service_address - computed: true, optional: false, required: false
  public get managementServiceAddress() {
    return this.getStringAttribute('management_service_address');
  }

  // nsg_ids - computed: true, optional: false, required: false
  public get nsgIds() {
    return this.getListAttribute('nsg_ids');
  }

  // performance_tier - computed: true, optional: false, required: false
  public get performanceTier() {
    return this.getStringAttribute('performance_tier');
  }

  // root_squash_configuration - computed: true, optional: false, required: false
  private _rootSquashConfiguration = new DataOciLustreFileStorageLustreFileSystemRootSquashConfigurationList(this, "root_squash_configuration", false);
  public get rootSquashConfiguration() {
    return this._rootSquashConfiguration;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_billing_cycle_end - computed: true, optional: false, required: false
  public get timeBillingCycleEnd() {
    return this.getStringAttribute('time_billing_cycle_end');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      lustre_file_system_id: cdktf.stringToTerraform(this._lustreFileSystemId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      lustre_file_system_id: {
        value: cdktf.stringToHclTerraform(this._lustreFileSystemId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
