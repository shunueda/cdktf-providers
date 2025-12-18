// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/optimizer_resource_actions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOptimizerResourceActionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/optimizer_resource_actions#child_tenancy_ids DataOciOptimizerResourceActions#child_tenancy_ids}
  */
  readonly childTenancyIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/optimizer_resource_actions#compartment_id DataOciOptimizerResourceActions#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/optimizer_resource_actions#compartment_id_in_subtree DataOciOptimizerResourceActions#compartment_id_in_subtree}
  */
  readonly compartmentIdInSubtree: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/optimizer_resource_actions#id DataOciOptimizerResourceActions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/optimizer_resource_actions#include_organization DataOciOptimizerResourceActions#include_organization}
  */
  readonly includeOrganization?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/optimizer_resource_actions#include_resource_metadata DataOciOptimizerResourceActions#include_resource_metadata}
  */
  readonly includeResourceMetadata?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/optimizer_resource_actions#name DataOciOptimizerResourceActions#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/optimizer_resource_actions#recommendation_id DataOciOptimizerResourceActions#recommendation_id}
  */
  readonly recommendationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/optimizer_resource_actions#recommendation_name DataOciOptimizerResourceActions#recommendation_name}
  */
  readonly recommendationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/optimizer_resource_actions#resource_type DataOciOptimizerResourceActions#resource_type}
  */
  readonly resourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/optimizer_resource_actions#state DataOciOptimizerResourceActions#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/optimizer_resource_actions#status DataOciOptimizerResourceActions#status}
  */
  readonly status?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/optimizer_resource_actions#filter DataOciOptimizerResourceActions#filter}
  */
  readonly filter?: DataOciOptimizerResourceActionsFilter[] | cdktf.IResolvable;
}
export interface DataOciOptimizerResourceActionsResourceActionCollectionItemsAction {
}

export function dataOciOptimizerResourceActionsResourceActionCollectionItemsActionToTerraform(struct?: DataOciOptimizerResourceActionsResourceActionCollectionItemsAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOptimizerResourceActionsResourceActionCollectionItemsActionToHclTerraform(struct?: DataOciOptimizerResourceActionsResourceActionCollectionItemsAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOptimizerResourceActionsResourceActionCollectionItemsAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOptimizerResourceActionsResourceActionCollectionItemsAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataOciOptimizerResourceActionsResourceActionCollectionItemsActionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference {
    return new DataOciOptimizerResourceActionsResourceActionCollectionItemsActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOptimizerResourceActionsResourceActionCollectionItems {
}

export function dataOciOptimizerResourceActionsResourceActionCollectionItemsToTerraform(struct?: DataOciOptimizerResourceActionsResourceActionCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOptimizerResourceActionsResourceActionCollectionItemsToHclTerraform(struct?: DataOciOptimizerResourceActionsResourceActionCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOptimizerResourceActionsResourceActionCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOptimizerResourceActionsResourceActionCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  private _action = new DataOciOptimizerResourceActionsResourceActionCollectionItemsActionList(this, "action", false);
  public get action() {
    return this._action;
  }

  // category_id - computed: true, optional: false, required: false
  public get categoryId() {
    return this.getStringAttribute('category_id');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // compartment_name - computed: true, optional: false, required: false
  public get compartmentName() {
    return this.getStringAttribute('compartment_name');
  }

  // estimated_cost_saving - computed: true, optional: false, required: false
  public get estimatedCostSaving() {
    return this.getNumberAttribute('estimated_cost_saving');
  }

  // extended_metadata - computed: true, optional: false, required: false
  private _extendedMetadata = new cdktf.StringMap(this, "extended_metadata");
  public get extendedMetadata() {
    return this._extendedMetadata;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktf.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // recommendation_id - computed: true, optional: false, required: false
  public get recommendationId() {
    return this.getStringAttribute('recommendation_id');
  }

  // resource_action_id - computed: true, optional: false, required: false
  public get resourceActionId() {
    return this.getStringAttribute('resource_action_id');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_status_begin - computed: true, optional: false, required: false
  public get timeStatusBegin() {
    return this.getStringAttribute('time_status_begin');
  }

  // time_status_end - computed: true, optional: false, required: false
  public get timeStatusEnd() {
    return this.getStringAttribute('time_status_end');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }
}

export class DataOciOptimizerResourceActionsResourceActionCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference {
    return new DataOciOptimizerResourceActionsResourceActionCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOptimizerResourceActionsResourceActionCollection {
}

export function dataOciOptimizerResourceActionsResourceActionCollectionToTerraform(struct?: DataOciOptimizerResourceActionsResourceActionCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOptimizerResourceActionsResourceActionCollectionToHclTerraform(struct?: DataOciOptimizerResourceActionsResourceActionCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOptimizerResourceActionsResourceActionCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOptimizerResourceActionsResourceActionCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOptimizerResourceActionsResourceActionCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciOptimizerResourceActionsResourceActionCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciOptimizerResourceActionsResourceActionCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOptimizerResourceActionsResourceActionCollectionOutputReference {
    return new DataOciOptimizerResourceActionsResourceActionCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOptimizerResourceActionsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/optimizer_resource_actions#name DataOciOptimizerResourceActions#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/optimizer_resource_actions#regex DataOciOptimizerResourceActions#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/optimizer_resource_actions#values DataOciOptimizerResourceActions#values}
  */
  readonly values: string[];
}

export function dataOciOptimizerResourceActionsFilterToTerraform(struct?: DataOciOptimizerResourceActionsFilter | cdktf.IResolvable): any {
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


export function dataOciOptimizerResourceActionsFilterToHclTerraform(struct?: DataOciOptimizerResourceActionsFilter | cdktf.IResolvable): any {
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

export class DataOciOptimizerResourceActionsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOptimizerResourceActionsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciOptimizerResourceActionsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciOptimizerResourceActionsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciOptimizerResourceActionsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciOptimizerResourceActionsFilterOutputReference {
    return new DataOciOptimizerResourceActionsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/optimizer_resource_actions oci_optimizer_resource_actions}
*/
export class DataOciOptimizerResourceActions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_optimizer_resource_actions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOptimizerResourceActions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOptimizerResourceActions to import
  * @param importFromId The id of the existing DataOciOptimizerResourceActions that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/optimizer_resource_actions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOptimizerResourceActions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_optimizer_resource_actions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/optimizer_resource_actions oci_optimizer_resource_actions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOptimizerResourceActionsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOptimizerResourceActionsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_optimizer_resource_actions',
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
    this._childTenancyIds = config.childTenancyIds;
    this._compartmentId = config.compartmentId;
    this._compartmentIdInSubtree = config.compartmentIdInSubtree;
    this._id = config.id;
    this._includeOrganization = config.includeOrganization;
    this._includeResourceMetadata = config.includeResourceMetadata;
    this._name = config.name;
    this._recommendationId = config.recommendationId;
    this._recommendationName = config.recommendationName;
    this._resourceType = config.resourceType;
    this._state = config.state;
    this._status = config.status;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // child_tenancy_ids - computed: false, optional: true, required: false
  private _childTenancyIds?: string[]; 
  public get childTenancyIds() {
    return this.getListAttribute('child_tenancy_ids');
  }
  public set childTenancyIds(value: string[]) {
    this._childTenancyIds = value;
  }
  public resetChildTenancyIds() {
    this._childTenancyIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childTenancyIdsInput() {
    return this._childTenancyIds;
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

  // compartment_id_in_subtree - computed: false, optional: false, required: true
  private _compartmentIdInSubtree?: boolean | cdktf.IResolvable; 
  public get compartmentIdInSubtree() {
    return this.getBooleanAttribute('compartment_id_in_subtree');
  }
  public set compartmentIdInSubtree(value: boolean | cdktf.IResolvable) {
    this._compartmentIdInSubtree = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInSubtreeInput() {
    return this._compartmentIdInSubtree;
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

  // include_organization - computed: false, optional: true, required: false
  private _includeOrganization?: boolean | cdktf.IResolvable; 
  public get includeOrganization() {
    return this.getBooleanAttribute('include_organization');
  }
  public set includeOrganization(value: boolean | cdktf.IResolvable) {
    this._includeOrganization = value;
  }
  public resetIncludeOrganization() {
    this._includeOrganization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeOrganizationInput() {
    return this._includeOrganization;
  }

  // include_resource_metadata - computed: false, optional: true, required: false
  private _includeResourceMetadata?: boolean | cdktf.IResolvable; 
  public get includeResourceMetadata() {
    return this.getBooleanAttribute('include_resource_metadata');
  }
  public set includeResourceMetadata(value: boolean | cdktf.IResolvable) {
    this._includeResourceMetadata = value;
  }
  public resetIncludeResourceMetadata() {
    this._includeResourceMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeResourceMetadataInput() {
    return this._includeResourceMetadata;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // recommendation_id - computed: false, optional: true, required: false
  private _recommendationId?: string; 
  public get recommendationId() {
    return this.getStringAttribute('recommendation_id');
  }
  public set recommendationId(value: string) {
    this._recommendationId = value;
  }
  public resetRecommendationId() {
    this._recommendationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recommendationIdInput() {
    return this._recommendationId;
  }

  // recommendation_name - computed: false, optional: true, required: false
  private _recommendationName?: string; 
  public get recommendationName() {
    return this.getStringAttribute('recommendation_name');
  }
  public set recommendationName(value: string) {
    this._recommendationName = value;
  }
  public resetRecommendationName() {
    this._recommendationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recommendationNameInput() {
    return this._recommendationName;
  }

  // resource_action_collection - computed: true, optional: false, required: false
  private _resourceActionCollection = new DataOciOptimizerResourceActionsResourceActionCollectionList(this, "resource_action_collection", false);
  public get resourceActionCollection() {
    return this._resourceActionCollection;
  }

  // resource_type - computed: false, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
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

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciOptimizerResourceActionsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciOptimizerResourceActionsFilter[] | cdktf.IResolvable) {
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
      child_tenancy_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._childTenancyIds),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      compartment_id_in_subtree: cdktf.booleanToTerraform(this._compartmentIdInSubtree),
      id: cdktf.stringToTerraform(this._id),
      include_organization: cdktf.booleanToTerraform(this._includeOrganization),
      include_resource_metadata: cdktf.booleanToTerraform(this._includeResourceMetadata),
      name: cdktf.stringToTerraform(this._name),
      recommendation_id: cdktf.stringToTerraform(this._recommendationId),
      recommendation_name: cdktf.stringToTerraform(this._recommendationName),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      state: cdktf.stringToTerraform(this._state),
      status: cdktf.stringToTerraform(this._status),
      filter: cdktf.listMapper(dataOciOptimizerResourceActionsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      child_tenancy_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._childTenancyIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id_in_subtree: {
        value: cdktf.booleanToHclTerraform(this._compartmentIdInSubtree),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_organization: {
        value: cdktf.booleanToHclTerraform(this._includeOrganization),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_resource_metadata: {
        value: cdktf.booleanToHclTerraform(this._includeResourceMetadata),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recommendation_id: {
        value: cdktf.stringToHclTerraform(this._recommendationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recommendation_name: {
        value: cdktf.stringToHclTerraform(this._recommendationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
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
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciOptimizerResourceActionsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciOptimizerResourceActionsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
