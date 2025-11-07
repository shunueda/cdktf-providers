// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/fleet_apps_management_inventory_resources
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciFleetAppsManagementInventoryResourcesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/fleet_apps_management_inventory_resources#compartment_id DataOciFleetAppsManagementInventoryResources#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/fleet_apps_management_inventory_resources#defined_tag_equals DataOciFleetAppsManagementInventoryResources#defined_tag_equals}
  */
  readonly definedTagEquals?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/fleet_apps_management_inventory_resources#display_name DataOciFleetAppsManagementInventoryResources#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/fleet_apps_management_inventory_resources#freeform_tag_equals DataOciFleetAppsManagementInventoryResources#freeform_tag_equals}
  */
  readonly freeformTagEquals?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/fleet_apps_management_inventory_resources#id DataOciFleetAppsManagementInventoryResources#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/fleet_apps_management_inventory_resources#inventory_properties DataOciFleetAppsManagementInventoryResources#inventory_properties}
  */
  readonly inventoryProperties?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/fleet_apps_management_inventory_resources#matching_criteria DataOciFleetAppsManagementInventoryResources#matching_criteria}
  */
  readonly matchingCriteria?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/fleet_apps_management_inventory_resources#resource_compartment_id DataOciFleetAppsManagementInventoryResources#resource_compartment_id}
  */
  readonly resourceCompartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/fleet_apps_management_inventory_resources#resource_region DataOciFleetAppsManagementInventoryResources#resource_region}
  */
  readonly resourceRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/fleet_apps_management_inventory_resources#state DataOciFleetAppsManagementInventoryResources#state}
  */
  readonly state?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/fleet_apps_management_inventory_resources#filter DataOciFleetAppsManagementInventoryResources#filter}
  */
  readonly filter?: DataOciFleetAppsManagementInventoryResourcesFilter[] | cdktf.IResolvable;
}
export interface DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItems {
}

export function dataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsToTerraform(struct?: DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsToHclTerraform(struct?: DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
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

  // resource_compartment_id - computed: true, optional: false, required: false
  public get resourceCompartmentId() {
    return this.getStringAttribute('resource_compartment_id');
  }

  // resource_region - computed: true, optional: false, required: false
  public get resourceRegion() {
    return this.getStringAttribute('resource_region');
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference {
    return new DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollection {
}

export function dataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionToTerraform(struct?: DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionToHclTerraform(struct?: DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference {
    return new DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementInventoryResourcesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/fleet_apps_management_inventory_resources#name DataOciFleetAppsManagementInventoryResources#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/fleet_apps_management_inventory_resources#regex DataOciFleetAppsManagementInventoryResources#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/fleet_apps_management_inventory_resources#values DataOciFleetAppsManagementInventoryResources#values}
  */
  readonly values: string[];
}

export function dataOciFleetAppsManagementInventoryResourcesFilterToTerraform(struct?: DataOciFleetAppsManagementInventoryResourcesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciFleetAppsManagementInventoryResourcesFilterToHclTerraform(struct?: DataOciFleetAppsManagementInventoryResourcesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciFleetAppsManagementInventoryResourcesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementInventoryResourcesFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementInventoryResourcesFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
    }
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciFleetAppsManagementInventoryResourcesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciFleetAppsManagementInventoryResourcesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciFleetAppsManagementInventoryResourcesFilterOutputReference {
    return new DataOciFleetAppsManagementInventoryResourcesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/fleet_apps_management_inventory_resources oci_fleet_apps_management_inventory_resources}
*/
export class DataOciFleetAppsManagementInventoryResources extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_fleet_apps_management_inventory_resources";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciFleetAppsManagementInventoryResources resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciFleetAppsManagementInventoryResources to import
  * @param importFromId The id of the existing DataOciFleetAppsManagementInventoryResources that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/fleet_apps_management_inventory_resources#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciFleetAppsManagementInventoryResources to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_fleet_apps_management_inventory_resources", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/fleet_apps_management_inventory_resources oci_fleet_apps_management_inventory_resources} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciFleetAppsManagementInventoryResourcesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciFleetAppsManagementInventoryResourcesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_fleet_apps_management_inventory_resources',
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
    this._compartmentId = config.compartmentId;
    this._definedTagEquals = config.definedTagEquals;
    this._displayName = config.displayName;
    this._freeformTagEquals = config.freeformTagEquals;
    this._id = config.id;
    this._inventoryProperties = config.inventoryProperties;
    this._matchingCriteria = config.matchingCriteria;
    this._resourceCompartmentId = config.resourceCompartmentId;
    this._resourceRegion = config.resourceRegion;
    this._state = config.state;
    this._filter.internalValue = config.filter;
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

  // defined_tag_equals - computed: false, optional: true, required: false
  private _definedTagEquals?: string[]; 
  public get definedTagEquals() {
    return this.getListAttribute('defined_tag_equals');
  }
  public set definedTagEquals(value: string[]) {
    this._definedTagEquals = value;
  }
  public resetDefinedTagEquals() {
    this._definedTagEquals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagEqualsInput() {
    return this._definedTagEquals;
  }

  // display_name - computed: false, optional: true, required: false
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

  // freeform_tag_equals - computed: false, optional: true, required: false
  private _freeformTagEquals?: string[]; 
  public get freeformTagEquals() {
    return this.getListAttribute('freeform_tag_equals');
  }
  public set freeformTagEquals(value: string[]) {
    this._freeformTagEquals = value;
  }
  public resetFreeformTagEquals() {
    this._freeformTagEquals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagEqualsInput() {
    return this._freeformTagEquals;
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

  // inventory_properties - computed: false, optional: true, required: false
  private _inventoryProperties?: string[]; 
  public get inventoryProperties() {
    return this.getListAttribute('inventory_properties');
  }
  public set inventoryProperties(value: string[]) {
    this._inventoryProperties = value;
  }
  public resetInventoryProperties() {
    this._inventoryProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inventoryPropertiesInput() {
    return this._inventoryProperties;
  }

  // inventory_resource_collection - computed: true, optional: false, required: false
  private _inventoryResourceCollection = new DataOciFleetAppsManagementInventoryResourcesInventoryResourceCollectionList(this, "inventory_resource_collection", false);
  public get inventoryResourceCollection() {
    return this._inventoryResourceCollection;
  }

  // matching_criteria - computed: false, optional: true, required: false
  private _matchingCriteria?: string; 
  public get matchingCriteria() {
    return this.getStringAttribute('matching_criteria');
  }
  public set matchingCriteria(value: string) {
    this._matchingCriteria = value;
  }
  public resetMatchingCriteria() {
    this._matchingCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingCriteriaInput() {
    return this._matchingCriteria;
  }

  // resource_compartment_id - computed: false, optional: false, required: true
  private _resourceCompartmentId?: string; 
  public get resourceCompartmentId() {
    return this.getStringAttribute('resource_compartment_id');
  }
  public set resourceCompartmentId(value: string) {
    this._resourceCompartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceCompartmentIdInput() {
    return this._resourceCompartmentId;
  }

  // resource_region - computed: false, optional: true, required: false
  private _resourceRegion?: string; 
  public get resourceRegion() {
    return this.getStringAttribute('resource_region');
  }
  public set resourceRegion(value: string) {
    this._resourceRegion = value;
  }
  public resetResourceRegion() {
    this._resourceRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceRegionInput() {
    return this._resourceRegion;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciFleetAppsManagementInventoryResourcesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciFleetAppsManagementInventoryResourcesFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tag_equals: cdktf.listMapper(cdktf.stringToTerraform, false)(this._definedTagEquals),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tag_equals: cdktf.listMapper(cdktf.stringToTerraform, false)(this._freeformTagEquals),
      id: cdktf.stringToTerraform(this._id),
      inventory_properties: cdktf.listMapper(cdktf.stringToTerraform, false)(this._inventoryProperties),
      matching_criteria: cdktf.stringToTerraform(this._matchingCriteria),
      resource_compartment_id: cdktf.stringToTerraform(this._resourceCompartmentId),
      resource_region: cdktf.stringToTerraform(this._resourceRegion),
      state: cdktf.stringToTerraform(this._state),
      filter: cdktf.listMapper(dataOciFleetAppsManagementInventoryResourcesFilterToTerraform, true)(this._filter.internalValue),
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
      defined_tag_equals: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._definedTagEquals),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tag_equals: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._freeformTagEquals),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inventory_properties: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._inventoryProperties),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      matching_criteria: {
        value: cdktf.stringToHclTerraform(this._matchingCriteria),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_compartment_id: {
        value: cdktf.stringToHclTerraform(this._resourceCompartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_region: {
        value: cdktf.stringToHclTerraform(this._resourceRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciFleetAppsManagementInventoryResourcesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciFleetAppsManagementInventoryResourcesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
