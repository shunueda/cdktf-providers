// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/fleet_apps_management_provision
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FleetAppsManagementProvisionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/fleet_apps_management_provision#compartment_id FleetAppsManagementProvision#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/fleet_apps_management_provision#config_catalog_item_id FleetAppsManagementProvision#config_catalog_item_id}
  */
  readonly configCatalogItemId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/fleet_apps_management_provision#defined_tags FleetAppsManagementProvision#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/fleet_apps_management_provision#display_name FleetAppsManagementProvision#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/fleet_apps_management_provision#fleet_id FleetAppsManagementProvision#fleet_id}
  */
  readonly fleetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/fleet_apps_management_provision#freeform_tags FleetAppsManagementProvision#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/fleet_apps_management_provision#id FleetAppsManagementProvision#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/fleet_apps_management_provision#package_catalog_item_id FleetAppsManagementProvision#package_catalog_item_id}
  */
  readonly packageCatalogItemId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/fleet_apps_management_provision#provision_description FleetAppsManagementProvision#provision_description}
  */
  readonly provisionDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/fleet_apps_management_provision#tf_variable_compartment_id FleetAppsManagementProvision#tf_variable_compartment_id}
  */
  readonly tfVariableCompartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/fleet_apps_management_provision#tf_variable_current_user_id FleetAppsManagementProvision#tf_variable_current_user_id}
  */
  readonly tfVariableCurrentUserId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/fleet_apps_management_provision#tf_variable_region_id FleetAppsManagementProvision#tf_variable_region_id}
  */
  readonly tfVariableRegionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/fleet_apps_management_provision#tf_variable_tenancy_id FleetAppsManagementProvision#tf_variable_tenancy_id}
  */
  readonly tfVariableTenancyId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/fleet_apps_management_provision#timeouts FleetAppsManagementProvision#timeouts}
  */
  readonly timeouts?: FleetAppsManagementProvisionTimeouts;
}
export interface FleetAppsManagementProvisionDeployedResourcesResourceInstanceListStruct {
}

export function fleetAppsManagementProvisionDeployedResourcesResourceInstanceListStructToTerraform(struct?: FleetAppsManagementProvisionDeployedResourcesResourceInstanceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function fleetAppsManagementProvisionDeployedResourcesResourceInstanceListStructToHclTerraform(struct?: FleetAppsManagementProvisionDeployedResourcesResourceInstanceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FleetAppsManagementProvisionDeployedResourcesResourceInstanceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetAppsManagementProvisionDeployedResourcesResourceInstanceListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementProvisionDeployedResourcesResourceInstanceListStruct | undefined) {
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

export class FleetAppsManagementProvisionDeployedResourcesResourceInstanceListStructList extends cdktf.ComplexList {

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
  public get(index: number): FleetAppsManagementProvisionDeployedResourcesResourceInstanceListStructOutputReference {
    return new FleetAppsManagementProvisionDeployedResourcesResourceInstanceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetAppsManagementProvisionDeployedResources {
}

export function fleetAppsManagementProvisionDeployedResourcesToTerraform(struct?: FleetAppsManagementProvisionDeployedResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function fleetAppsManagementProvisionDeployedResourcesToHclTerraform(struct?: FleetAppsManagementProvisionDeployedResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FleetAppsManagementProvisionDeployedResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetAppsManagementProvisionDeployedResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementProvisionDeployedResources | undefined) {
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
  private _resourceInstanceList = new FleetAppsManagementProvisionDeployedResourcesResourceInstanceListStructList(this, "resource_instance_list", false);
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

export class FleetAppsManagementProvisionDeployedResourcesList extends cdktf.ComplexList {

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
  public get(index: number): FleetAppsManagementProvisionDeployedResourcesOutputReference {
    return new FleetAppsManagementProvisionDeployedResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetAppsManagementProvisionTfOutputs {
}

export function fleetAppsManagementProvisionTfOutputsToTerraform(struct?: FleetAppsManagementProvisionTfOutputs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function fleetAppsManagementProvisionTfOutputsToHclTerraform(struct?: FleetAppsManagementProvisionTfOutputs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FleetAppsManagementProvisionTfOutputsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetAppsManagementProvisionTfOutputs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementProvisionTfOutputs | undefined) {
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

export class FleetAppsManagementProvisionTfOutputsList extends cdktf.ComplexList {

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
  public get(index: number): FleetAppsManagementProvisionTfOutputsOutputReference {
    return new FleetAppsManagementProvisionTfOutputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetAppsManagementProvisionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/fleet_apps_management_provision#create FleetAppsManagementProvision#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/fleet_apps_management_provision#delete FleetAppsManagementProvision#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/fleet_apps_management_provision#update FleetAppsManagementProvision#update}
  */
  readonly update?: string;
}

export function fleetAppsManagementProvisionTimeoutsToTerraform(struct?: FleetAppsManagementProvisionTimeouts | cdktf.IResolvable): any {
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


export function fleetAppsManagementProvisionTimeoutsToHclTerraform(struct?: FleetAppsManagementProvisionTimeouts | cdktf.IResolvable): any {
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

export class FleetAppsManagementProvisionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FleetAppsManagementProvisionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FleetAppsManagementProvisionTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/fleet_apps_management_provision oci_fleet_apps_management_provision}
*/
export class FleetAppsManagementProvision extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_fleet_apps_management_provision";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FleetAppsManagementProvision resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FleetAppsManagementProvision to import
  * @param importFromId The id of the existing FleetAppsManagementProvision that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/fleet_apps_management_provision#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FleetAppsManagementProvision to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_fleet_apps_management_provision", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/fleet_apps_management_provision oci_fleet_apps_management_provision} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FleetAppsManagementProvisionConfig
  */
  public constructor(scope: Construct, id: string, config: FleetAppsManagementProvisionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_fleet_apps_management_provision',
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
    this._compartmentId = config.compartmentId;
    this._configCatalogItemId = config.configCatalogItemId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._fleetId = config.fleetId;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._packageCatalogItemId = config.packageCatalogItemId;
    this._provisionDescription = config.provisionDescription;
    this._tfVariableCompartmentId = config.tfVariableCompartmentId;
    this._tfVariableCurrentUserId = config.tfVariableCurrentUserId;
    this._tfVariableRegionId = config.tfVariableRegionId;
    this._tfVariableTenancyId = config.tfVariableTenancyId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // config_catalog_item_display_name - computed: true, optional: false, required: false
  public get configCatalogItemDisplayName() {
    return this.getStringAttribute('config_catalog_item_display_name');
  }

  // config_catalog_item_id - computed: false, optional: false, required: true
  private _configCatalogItemId?: string; 
  public get configCatalogItemId() {
    return this.getStringAttribute('config_catalog_item_id');
  }
  public set configCatalogItemId(value: string) {
    this._configCatalogItemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configCatalogItemIdInput() {
    return this._configCatalogItemId;
  }

  // config_catalog_item_listing_id - computed: true, optional: false, required: false
  public get configCatalogItemListingId() {
    return this.getStringAttribute('config_catalog_item_listing_id');
  }

  // config_catalog_item_listing_version - computed: true, optional: false, required: false
  public get configCatalogItemListingVersion() {
    return this.getStringAttribute('config_catalog_item_listing_version');
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

  // deployed_resources - computed: true, optional: false, required: false
  private _deployedResources = new FleetAppsManagementProvisionDeployedResourcesList(this, "deployed_resources", false);
  public get deployedResources() {
    return this._deployedResources;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // fleet_id - computed: false, optional: false, required: true
  private _fleetId?: string; 
  public get fleetId() {
    return this.getStringAttribute('fleet_id');
  }
  public set fleetId(value: string) {
    this._fleetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetIdInput() {
    return this._fleetId;
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // package_catalog_item_display_name - computed: true, optional: false, required: false
  public get packageCatalogItemDisplayName() {
    return this.getStringAttribute('package_catalog_item_display_name');
  }

  // package_catalog_item_id - computed: false, optional: false, required: true
  private _packageCatalogItemId?: string; 
  public get packageCatalogItemId() {
    return this.getStringAttribute('package_catalog_item_id');
  }
  public set packageCatalogItemId(value: string) {
    this._packageCatalogItemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageCatalogItemIdInput() {
    return this._packageCatalogItemId;
  }

  // package_catalog_item_listing_id - computed: true, optional: false, required: false
  public get packageCatalogItemListingId() {
    return this.getStringAttribute('package_catalog_item_listing_id');
  }

  // package_catalog_item_listing_version - computed: true, optional: false, required: false
  public get packageCatalogItemListingVersion() {
    return this.getStringAttribute('package_catalog_item_listing_version');
  }

  // provision_description - computed: true, optional: true, required: false
  private _provisionDescription?: string; 
  public get provisionDescription() {
    return this.getStringAttribute('provision_description');
  }
  public set provisionDescription(value: string) {
    this._provisionDescription = value;
  }
  public resetProvisionDescription() {
    this._provisionDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionDescriptionInput() {
    return this._provisionDescription;
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
  private _tfOutputs = new FleetAppsManagementProvisionTfOutputsList(this, "tf_outputs", false);
  public get tfOutputs() {
    return this._tfOutputs;
  }

  // tf_variable_compartment_id - computed: true, optional: true, required: false
  private _tfVariableCompartmentId?: string; 
  public get tfVariableCompartmentId() {
    return this.getStringAttribute('tf_variable_compartment_id');
  }
  public set tfVariableCompartmentId(value: string) {
    this._tfVariableCompartmentId = value;
  }
  public resetTfVariableCompartmentId() {
    this._tfVariableCompartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tfVariableCompartmentIdInput() {
    return this._tfVariableCompartmentId;
  }

  // tf_variable_current_user_id - computed: true, optional: true, required: false
  private _tfVariableCurrentUserId?: string; 
  public get tfVariableCurrentUserId() {
    return this.getStringAttribute('tf_variable_current_user_id');
  }
  public set tfVariableCurrentUserId(value: string) {
    this._tfVariableCurrentUserId = value;
  }
  public resetTfVariableCurrentUserId() {
    this._tfVariableCurrentUserId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tfVariableCurrentUserIdInput() {
    return this._tfVariableCurrentUserId;
  }

  // tf_variable_region_id - computed: false, optional: false, required: true
  private _tfVariableRegionId?: string; 
  public get tfVariableRegionId() {
    return this.getStringAttribute('tf_variable_region_id');
  }
  public set tfVariableRegionId(value: string) {
    this._tfVariableRegionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tfVariableRegionIdInput() {
    return this._tfVariableRegionId;
  }

  // tf_variable_tenancy_id - computed: false, optional: false, required: true
  private _tfVariableTenancyId?: string; 
  public get tfVariableTenancyId() {
    return this.getStringAttribute('tf_variable_tenancy_id');
  }
  public set tfVariableTenancyId(value: string) {
    this._tfVariableTenancyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tfVariableTenancyIdInput() {
    return this._tfVariableTenancyId;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FleetAppsManagementProvisionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FleetAppsManagementProvisionTimeouts) {
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
      config_catalog_item_id: cdktf.stringToTerraform(this._configCatalogItemId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      fleet_id: cdktf.stringToTerraform(this._fleetId),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      package_catalog_item_id: cdktf.stringToTerraform(this._packageCatalogItemId),
      provision_description: cdktf.stringToTerraform(this._provisionDescription),
      tf_variable_compartment_id: cdktf.stringToTerraform(this._tfVariableCompartmentId),
      tf_variable_current_user_id: cdktf.stringToTerraform(this._tfVariableCurrentUserId),
      tf_variable_region_id: cdktf.stringToTerraform(this._tfVariableRegionId),
      tf_variable_tenancy_id: cdktf.stringToTerraform(this._tfVariableTenancyId),
      timeouts: fleetAppsManagementProvisionTimeoutsToTerraform(this._timeouts.internalValue),
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
      config_catalog_item_id: {
        value: cdktf.stringToHclTerraform(this._configCatalogItemId),
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
      fleet_id: {
        value: cdktf.stringToHclTerraform(this._fleetId),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package_catalog_item_id: {
        value: cdktf.stringToHclTerraform(this._packageCatalogItemId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provision_description: {
        value: cdktf.stringToHclTerraform(this._provisionDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tf_variable_compartment_id: {
        value: cdktf.stringToHclTerraform(this._tfVariableCompartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tf_variable_current_user_id: {
        value: cdktf.stringToHclTerraform(this._tfVariableCurrentUserId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tf_variable_region_id: {
        value: cdktf.stringToHclTerraform(this._tfVariableRegionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tf_variable_tenancy_id: {
        value: cdktf.stringToHclTerraform(this._tfVariableTenancyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: fleetAppsManagementProvisionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FleetAppsManagementProvisionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
