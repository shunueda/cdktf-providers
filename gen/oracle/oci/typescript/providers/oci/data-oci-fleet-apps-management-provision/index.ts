// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/fleet_apps_management_provision
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciFleetAppsManagementProvisionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/fleet_apps_management_provision#provision_id DataOciFleetAppsManagementProvision#provision_id}
  */
  readonly provisionId: string;
}
export interface DataOciFleetAppsManagementProvisionDeployedResourcesResourceInstanceListStruct {
}

export function dataOciFleetAppsManagementProvisionDeployedResourcesResourceInstanceListStructToTerraform(struct?: DataOciFleetAppsManagementProvisionDeployedResourcesResourceInstanceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementProvisionDeployedResourcesResourceInstanceListStructToHclTerraform(struct?: DataOciFleetAppsManagementProvisionDeployedResourcesResourceInstanceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementProvisionDeployedResourcesResourceInstanceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementProvisionDeployedResourcesResourceInstanceListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementProvisionDeployedResourcesResourceInstanceListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class DataOciFleetAppsManagementProvisionDeployedResourcesResourceInstanceListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementProvisionDeployedResourcesResourceInstanceListStructOutputReference {
    return new DataOciFleetAppsManagementProvisionDeployedResourcesResourceInstanceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementProvisionDeployedResources {
}

export function dataOciFleetAppsManagementProvisionDeployedResourcesToTerraform(struct?: DataOciFleetAppsManagementProvisionDeployedResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementProvisionDeployedResourcesToHclTerraform(struct?: DataOciFleetAppsManagementProvisionDeployedResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementProvisionDeployedResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementProvisionDeployedResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementProvisionDeployedResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // resource_instance_list - computed: true, optional: false, required: false
  private _resourceInstanceList = new DataOciFleetAppsManagementProvisionDeployedResourcesResourceInstanceListStructList(this, "resource_instance_list", false);
  public get resourceInstanceList() {
    return this._resourceInstanceList;
  }

  // resource_name - computed: true, optional: false, required: false
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }

  // resource_provider - computed: true, optional: false, required: false
  public get resourceProvider() {
    return this.getStringAttribute('resource_provider');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
}

export class DataOciFleetAppsManagementProvisionDeployedResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementProvisionDeployedResourcesOutputReference {
    return new DataOciFleetAppsManagementProvisionDeployedResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementProvisionTfOutputs {
}

export function dataOciFleetAppsManagementProvisionTfOutputsToTerraform(struct?: DataOciFleetAppsManagementProvisionTfOutputs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementProvisionTfOutputsToHclTerraform(struct?: DataOciFleetAppsManagementProvisionTfOutputs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementProvisionTfOutputsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementProvisionTfOutputs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementProvisionTfOutputs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_sensitive - computed: true, optional: false, required: false
  public get isSensitive() {
    return this.getBooleanAttribute('is_sensitive');
  }

  // output_description - computed: true, optional: false, required: false
  public get outputDescription() {
    return this.getStringAttribute('output_description');
  }

  // output_name - computed: true, optional: false, required: false
  public get outputName() {
    return this.getStringAttribute('output_name');
  }

  // output_type - computed: true, optional: false, required: false
  public get outputType() {
    return this.getStringAttribute('output_type');
  }

  // output_value - computed: true, optional: false, required: false
  public get outputValue() {
    return this.getStringAttribute('output_value');
  }
}

export class DataOciFleetAppsManagementProvisionTfOutputsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementProvisionTfOutputsOutputReference {
    return new DataOciFleetAppsManagementProvisionTfOutputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/fleet_apps_management_provision oci_fleet_apps_management_provision}
*/
export class DataOciFleetAppsManagementProvision extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_fleet_apps_management_provision";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciFleetAppsManagementProvision resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciFleetAppsManagementProvision to import
  * @param importFromId The id of the existing DataOciFleetAppsManagementProvision that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/fleet_apps_management_provision#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciFleetAppsManagementProvision to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_fleet_apps_management_provision", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/fleet_apps_management_provision oci_fleet_apps_management_provision} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciFleetAppsManagementProvisionConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciFleetAppsManagementProvisionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_fleet_apps_management_provision',
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
    this._provisionId = config.provisionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // config_catalog_item_display_name - computed: true, optional: false, required: false
  public get configCatalogItemDisplayName() {
    return this.getStringAttribute('config_catalog_item_display_name');
  }

  // config_catalog_item_id - computed: true, optional: false, required: false
  public get configCatalogItemId() {
    return this.getStringAttribute('config_catalog_item_id');
  }

  // config_catalog_item_listing_id - computed: true, optional: false, required: false
  public get configCatalogItemListingId() {
    return this.getStringAttribute('config_catalog_item_listing_id');
  }

  // config_catalog_item_listing_version - computed: true, optional: false, required: false
  public get configCatalogItemListingVersion() {
    return this.getStringAttribute('config_catalog_item_listing_version');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // deployed_resources - computed: true, optional: false, required: false
  private _deployedResources = new DataOciFleetAppsManagementProvisionDeployedResourcesList(this, "deployed_resources", false);
  public get deployedResources() {
    return this._deployedResources;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // fleet_id - computed: true, optional: false, required: false
  public get fleetId() {
    return this.getStringAttribute('fleet_id');
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // package_catalog_item_display_name - computed: true, optional: false, required: false
  public get packageCatalogItemDisplayName() {
    return this.getStringAttribute('package_catalog_item_display_name');
  }

  // package_catalog_item_id - computed: true, optional: false, required: false
  public get packageCatalogItemId() {
    return this.getStringAttribute('package_catalog_item_id');
  }

  // package_catalog_item_listing_id - computed: true, optional: false, required: false
  public get packageCatalogItemListingId() {
    return this.getStringAttribute('package_catalog_item_listing_id');
  }

  // package_catalog_item_listing_version - computed: true, optional: false, required: false
  public get packageCatalogItemListingVersion() {
    return this.getStringAttribute('package_catalog_item_listing_version');
  }

  // provision_description - computed: true, optional: false, required: false
  public get provisionDescription() {
    return this.getStringAttribute('provision_description');
  }

  // provision_id - computed: false, optional: false, required: true
  private _provisionId?: string; 
  public get provisionId() {
    return this.getStringAttribute('provision_id');
  }
  public set provisionId(value: string) {
    this._provisionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionIdInput() {
    return this._provisionId;
  }

  // rms_apply_job_id - computed: true, optional: false, required: false
  public get rmsApplyJobId() {
    return this.getStringAttribute('rms_apply_job_id');
  }

  // stack_id - computed: true, optional: false, required: false
  public get stackId() {
    return this.getStringAttribute('stack_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // tf_outputs - computed: true, optional: false, required: false
  private _tfOutputs = new DataOciFleetAppsManagementProvisionTfOutputsList(this, "tf_outputs", false);
  public get tfOutputs() {
    return this._tfOutputs;
  }

  // tf_variable_compartment_id - computed: true, optional: false, required: false
  public get tfVariableCompartmentId() {
    return this.getStringAttribute('tf_variable_compartment_id');
  }

  // tf_variable_current_user_id - computed: true, optional: false, required: false
  public get tfVariableCurrentUserId() {
    return this.getStringAttribute('tf_variable_current_user_id');
  }

  // tf_variable_region_id - computed: true, optional: false, required: false
  public get tfVariableRegionId() {
    return this.getStringAttribute('tf_variable_region_id');
  }

  // tf_variable_tenancy_id - computed: true, optional: false, required: false
  public get tfVariableTenancyId() {
    return this.getStringAttribute('tf_variable_tenancy_id');
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
      provision_id: cdktf.stringToTerraform(this._provisionId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      provision_id: {
        value: cdktf.stringToHclTerraform(this._provisionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
