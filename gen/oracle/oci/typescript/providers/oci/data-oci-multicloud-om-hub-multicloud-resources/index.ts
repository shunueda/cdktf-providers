// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/multicloud_om_hub_multicloud_resources
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciMulticloudOmHubMulticloudResourcesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/multicloud_om_hub_multicloud_resources#compartment_id DataOciMulticloudOmHubMulticloudResources#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/multicloud_om_hub_multicloud_resources#external_location DataOciMulticloudOmHubMulticloudResources#external_location}
  */
  readonly externalLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/multicloud_om_hub_multicloud_resources#id DataOciMulticloudOmHubMulticloudResources#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/multicloud_om_hub_multicloud_resources#limit DataOciMulticloudOmHubMulticloudResources#limit}
  */
  readonly limit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/multicloud_om_hub_multicloud_resources#resource_anchor_id DataOciMulticloudOmHubMulticloudResources#resource_anchor_id}
  */
  readonly resourceAnchorId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/multicloud_om_hub_multicloud_resources#subscription_id DataOciMulticloudOmHubMulticloudResources#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/multicloud_om_hub_multicloud_resources#subscription_service_name DataOciMulticloudOmHubMulticloudResources#subscription_service_name}
  */
  readonly subscriptionServiceName: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/multicloud_om_hub_multicloud_resources#filter DataOciMulticloudOmHubMulticloudResources#filter}
  */
  readonly filter?: DataOciMulticloudOmHubMulticloudResourcesFilter[] | cdktf.IResolvable;
}
export interface DataOciMulticloudOmHubMulticloudResourcesMulticloudResourceCollectionItems {
}

export function dataOciMulticloudOmHubMulticloudResourcesMulticloudResourceCollectionItemsToTerraform(struct?: DataOciMulticloudOmHubMulticloudResourcesMulticloudResourceCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciMulticloudOmHubMulticloudResourcesMulticloudResourceCollectionItemsToHclTerraform(struct?: DataOciMulticloudOmHubMulticloudResourcesMulticloudResourceCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciMulticloudOmHubMulticloudResourcesMulticloudResourceCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciMulticloudOmHubMulticloudResourcesMulticloudResourceCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciMulticloudOmHubMulticloudResourcesMulticloudResourceCollectionItems | undefined) {
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

  // compartment_name - computed: true, optional: false, required: false
  public get compartmentName() {
    return this.getStringAttribute('compartment_name');
  }

  // csp_additional_properties - computed: true, optional: false, required: false
  private _cspAdditionalProperties = new cdktf.StringMap(this, "csp_additional_properties");
  public get cspAdditionalProperties() {
    return this._cspAdditionalProperties;
  }

  // csp_resource_id - computed: true, optional: false, required: false
  public get cspResourceId() {
    return this.getStringAttribute('csp_resource_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // lifecycle_state - computed: true, optional: false, required: false
  public get lifecycleState() {
    return this.getStringAttribute('lifecycle_state');
  }

  // network_anchor_id - computed: true, optional: false, required: false
  public get networkAnchorId() {
    return this.getStringAttribute('network_anchor_id');
  }

  // network_anchor_name - computed: true, optional: false, required: false
  public get networkAnchorName() {
    return this.getStringAttribute('network_anchor_name');
  }

  // resource_display_name - computed: true, optional: false, required: false
  public get resourceDisplayName() {
    return this.getStringAttribute('resource_display_name');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // vcn_id - computed: true, optional: false, required: false
  public get vcnId() {
    return this.getStringAttribute('vcn_id');
  }

  // vcn_name - computed: true, optional: false, required: false
  public get vcnName() {
    return this.getStringAttribute('vcn_name');
  }
}

export class DataOciMulticloudOmHubMulticloudResourcesMulticloudResourceCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciMulticloudOmHubMulticloudResourcesMulticloudResourceCollectionItemsOutputReference {
    return new DataOciMulticloudOmHubMulticloudResourcesMulticloudResourceCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciMulticloudOmHubMulticloudResourcesMulticloudResourceCollection {
}

export function dataOciMulticloudOmHubMulticloudResourcesMulticloudResourceCollectionToTerraform(struct?: DataOciMulticloudOmHubMulticloudResourcesMulticloudResourceCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciMulticloudOmHubMulticloudResourcesMulticloudResourceCollectionToHclTerraform(struct?: DataOciMulticloudOmHubMulticloudResourcesMulticloudResourceCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciMulticloudOmHubMulticloudResourcesMulticloudResourceCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciMulticloudOmHubMulticloudResourcesMulticloudResourceCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciMulticloudOmHubMulticloudResourcesMulticloudResourceCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciMulticloudOmHubMulticloudResourcesMulticloudResourceCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciMulticloudOmHubMulticloudResourcesMulticloudResourceCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciMulticloudOmHubMulticloudResourcesMulticloudResourceCollectionOutputReference {
    return new DataOciMulticloudOmHubMulticloudResourcesMulticloudResourceCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciMulticloudOmHubMulticloudResourcesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/multicloud_om_hub_multicloud_resources#name DataOciMulticloudOmHubMulticloudResources#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/multicloud_om_hub_multicloud_resources#regex DataOciMulticloudOmHubMulticloudResources#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/multicloud_om_hub_multicloud_resources#values DataOciMulticloudOmHubMulticloudResources#values}
  */
  readonly values: string[];
}

export function dataOciMulticloudOmHubMulticloudResourcesFilterToTerraform(struct?: DataOciMulticloudOmHubMulticloudResourcesFilter | cdktf.IResolvable): any {
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


export function dataOciMulticloudOmHubMulticloudResourcesFilterToHclTerraform(struct?: DataOciMulticloudOmHubMulticloudResourcesFilter | cdktf.IResolvable): any {
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

export class DataOciMulticloudOmHubMulticloudResourcesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciMulticloudOmHubMulticloudResourcesFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciMulticloudOmHubMulticloudResourcesFilter | cdktf.IResolvable | undefined) {
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

export class DataOciMulticloudOmHubMulticloudResourcesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciMulticloudOmHubMulticloudResourcesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciMulticloudOmHubMulticloudResourcesFilterOutputReference {
    return new DataOciMulticloudOmHubMulticloudResourcesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/multicloud_om_hub_multicloud_resources oci_multicloud_om_hub_multicloud_resources}
*/
export class DataOciMulticloudOmHubMulticloudResources extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_multicloud_om_hub_multicloud_resources";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciMulticloudOmHubMulticloudResources resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciMulticloudOmHubMulticloudResources to import
  * @param importFromId The id of the existing DataOciMulticloudOmHubMulticloudResources that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/multicloud_om_hub_multicloud_resources#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciMulticloudOmHubMulticloudResources to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_multicloud_om_hub_multicloud_resources", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/multicloud_om_hub_multicloud_resources oci_multicloud_om_hub_multicloud_resources} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciMulticloudOmHubMulticloudResourcesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciMulticloudOmHubMulticloudResourcesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_multicloud_om_hub_multicloud_resources',
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
    this._compartmentId = config.compartmentId;
    this._externalLocation = config.externalLocation;
    this._id = config.id;
    this._limit = config.limit;
    this._resourceAnchorId = config.resourceAnchorId;
    this._subscriptionId = config.subscriptionId;
    this._subscriptionServiceName = config.subscriptionServiceName;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // external_location - computed: false, optional: true, required: false
  private _externalLocation?: string; 
  public get externalLocation() {
    return this.getStringAttribute('external_location');
  }
  public set externalLocation(value: string) {
    this._externalLocation = value;
  }
  public resetExternalLocation() {
    this._externalLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalLocationInput() {
    return this._externalLocation;
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

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // multicloud_resource_collection - computed: true, optional: false, required: false
  private _multicloudResourceCollection = new DataOciMulticloudOmHubMulticloudResourcesMulticloudResourceCollectionList(this, "multicloud_resource_collection", false);
  public get multicloudResourceCollection() {
    return this._multicloudResourceCollection;
  }

  // resource_anchor_id - computed: false, optional: true, required: false
  private _resourceAnchorId?: string; 
  public get resourceAnchorId() {
    return this.getStringAttribute('resource_anchor_id');
  }
  public set resourceAnchorId(value: string) {
    this._resourceAnchorId = value;
  }
  public resetResourceAnchorId() {
    this._resourceAnchorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAnchorIdInput() {
    return this._resourceAnchorId;
  }

  // subscription_id - computed: false, optional: false, required: true
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // subscription_service_name - computed: false, optional: false, required: true
  private _subscriptionServiceName?: string; 
  public get subscriptionServiceName() {
    return this.getStringAttribute('subscription_service_name');
  }
  public set subscriptionServiceName(value: string) {
    this._subscriptionServiceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionServiceNameInput() {
    return this._subscriptionServiceName;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciMulticloudOmHubMulticloudResourcesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciMulticloudOmHubMulticloudResourcesFilter[] | cdktf.IResolvable) {
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
      external_location: cdktf.stringToTerraform(this._externalLocation),
      id: cdktf.stringToTerraform(this._id),
      limit: cdktf.numberToTerraform(this._limit),
      resource_anchor_id: cdktf.stringToTerraform(this._resourceAnchorId),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      subscription_service_name: cdktf.stringToTerraform(this._subscriptionServiceName),
      filter: cdktf.listMapper(dataOciMulticloudOmHubMulticloudResourcesFilterToTerraform, true)(this._filter.internalValue),
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
      external_location: {
        value: cdktf.stringToHclTerraform(this._externalLocation),
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
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resource_anchor_id: {
        value: cdktf.stringToHclTerraform(this._resourceAnchorId),
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
      subscription_service_name: {
        value: cdktf.stringToHclTerraform(this._subscriptionServiceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciMulticloudOmHubMulticloudResourcesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciMulticloudOmHubMulticloudResourcesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
