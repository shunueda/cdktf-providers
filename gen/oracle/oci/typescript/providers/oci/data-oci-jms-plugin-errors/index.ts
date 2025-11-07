// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/jms_plugin_errors
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciJmsPluginErrorsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/jms_plugin_errors#compartment_id DataOciJmsPluginErrors#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/jms_plugin_errors#compartment_id_in_subtree DataOciJmsPluginErrors#compartment_id_in_subtree}
  */
  readonly compartmentIdInSubtree?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/jms_plugin_errors#id DataOciJmsPluginErrors#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/jms_plugin_errors#managed_instance_id DataOciJmsPluginErrors#managed_instance_id}
  */
  readonly managedInstanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/jms_plugin_errors#time_first_seen_greater_than_or_equal_to DataOciJmsPluginErrors#time_first_seen_greater_than_or_equal_to}
  */
  readonly timeFirstSeenGreaterThanOrEqualTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/jms_plugin_errors#time_first_seen_less_than_or_equal_to DataOciJmsPluginErrors#time_first_seen_less_than_or_equal_to}
  */
  readonly timeFirstSeenLessThanOrEqualTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/jms_plugin_errors#time_last_seen_greater_than_or_equal_to DataOciJmsPluginErrors#time_last_seen_greater_than_or_equal_to}
  */
  readonly timeLastSeenGreaterThanOrEqualTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/jms_plugin_errors#time_last_seen_less_than_or_equal_to DataOciJmsPluginErrors#time_last_seen_less_than_or_equal_to}
  */
  readonly timeLastSeenLessThanOrEqualTo?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/jms_plugin_errors#filter DataOciJmsPluginErrors#filter}
  */
  readonly filter?: DataOciJmsPluginErrorsFilter[] | cdktf.IResolvable;
}
export interface DataOciJmsPluginErrorsPluginErrorCollectionItemsErrors {
}

export function dataOciJmsPluginErrorsPluginErrorCollectionItemsErrorsToTerraform(struct?: DataOciJmsPluginErrorsPluginErrorCollectionItemsErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsPluginErrorsPluginErrorCollectionItemsErrorsToHclTerraform(struct?: DataOciJmsPluginErrorsPluginErrorCollectionItemsErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsPluginErrorsPluginErrorCollectionItemsErrorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsPluginErrorsPluginErrorCollectionItemsErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsPluginErrorsPluginErrorCollectionItemsErrors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // details - computed: true, optional: false, required: false
  public get details() {
    return this.getStringAttribute('details');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }

  // time_last_seen - computed: true, optional: false, required: false
  public get timeLastSeen() {
    return this.getStringAttribute('time_last_seen');
  }
}

export class DataOciJmsPluginErrorsPluginErrorCollectionItemsErrorsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsPluginErrorsPluginErrorCollectionItemsErrorsOutputReference {
    return new DataOciJmsPluginErrorsPluginErrorCollectionItemsErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsPluginErrorsPluginErrorCollectionItems {
}

export function dataOciJmsPluginErrorsPluginErrorCollectionItemsToTerraform(struct?: DataOciJmsPluginErrorsPluginErrorCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsPluginErrorsPluginErrorCollectionItemsToHclTerraform(struct?: DataOciJmsPluginErrorsPluginErrorCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsPluginErrorsPluginErrorCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsPluginErrorsPluginErrorCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsPluginErrorsPluginErrorCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_type - computed: true, optional: false, required: false
  public get agentType() {
    return this.getStringAttribute('agent_type');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // errors - computed: true, optional: false, required: false
  private _errors = new DataOciJmsPluginErrorsPluginErrorCollectionItemsErrorsList(this, "errors", false);
  public get errors() {
    return this._errors;
  }

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
  }

  // managed_instance_id - computed: true, optional: false, required: false
  public get managedInstanceId() {
    return this.getStringAttribute('managed_instance_id');
  }

  // time_first_seen - computed: true, optional: false, required: false
  public get timeFirstSeen() {
    return this.getStringAttribute('time_first_seen');
  }

  // time_last_seen - computed: true, optional: false, required: false
  public get timeLastSeen() {
    return this.getStringAttribute('time_last_seen');
  }
}

export class DataOciJmsPluginErrorsPluginErrorCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsPluginErrorsPluginErrorCollectionItemsOutputReference {
    return new DataOciJmsPluginErrorsPluginErrorCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsPluginErrorsPluginErrorCollection {
}

export function dataOciJmsPluginErrorsPluginErrorCollectionToTerraform(struct?: DataOciJmsPluginErrorsPluginErrorCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsPluginErrorsPluginErrorCollectionToHclTerraform(struct?: DataOciJmsPluginErrorsPluginErrorCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsPluginErrorsPluginErrorCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsPluginErrorsPluginErrorCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsPluginErrorsPluginErrorCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciJmsPluginErrorsPluginErrorCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciJmsPluginErrorsPluginErrorCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsPluginErrorsPluginErrorCollectionOutputReference {
    return new DataOciJmsPluginErrorsPluginErrorCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsPluginErrorsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/jms_plugin_errors#name DataOciJmsPluginErrors#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/jms_plugin_errors#regex DataOciJmsPluginErrors#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/jms_plugin_errors#values DataOciJmsPluginErrors#values}
  */
  readonly values: string[];
}

export function dataOciJmsPluginErrorsFilterToTerraform(struct?: DataOciJmsPluginErrorsFilter | cdktf.IResolvable): any {
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


export function dataOciJmsPluginErrorsFilterToHclTerraform(struct?: DataOciJmsPluginErrorsFilter | cdktf.IResolvable): any {
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

export class DataOciJmsPluginErrorsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsPluginErrorsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciJmsPluginErrorsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciJmsPluginErrorsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciJmsPluginErrorsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciJmsPluginErrorsFilterOutputReference {
    return new DataOciJmsPluginErrorsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/jms_plugin_errors oci_jms_plugin_errors}
*/
export class DataOciJmsPluginErrors extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_jms_plugin_errors";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciJmsPluginErrors resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciJmsPluginErrors to import
  * @param importFromId The id of the existing DataOciJmsPluginErrors that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/jms_plugin_errors#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciJmsPluginErrors to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_jms_plugin_errors", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/jms_plugin_errors oci_jms_plugin_errors} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciJmsPluginErrorsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOciJmsPluginErrorsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_jms_plugin_errors',
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
    this._compartmentIdInSubtree = config.compartmentIdInSubtree;
    this._id = config.id;
    this._managedInstanceId = config.managedInstanceId;
    this._timeFirstSeenGreaterThanOrEqualTo = config.timeFirstSeenGreaterThanOrEqualTo;
    this._timeFirstSeenLessThanOrEqualTo = config.timeFirstSeenLessThanOrEqualTo;
    this._timeLastSeenGreaterThanOrEqualTo = config.timeLastSeenGreaterThanOrEqualTo;
    this._timeLastSeenLessThanOrEqualTo = config.timeLastSeenLessThanOrEqualTo;
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

  // compartment_id_in_subtree - computed: false, optional: true, required: false
  private _compartmentIdInSubtree?: boolean | cdktf.IResolvable; 
  public get compartmentIdInSubtree() {
    return this.getBooleanAttribute('compartment_id_in_subtree');
  }
  public set compartmentIdInSubtree(value: boolean | cdktf.IResolvable) {
    this._compartmentIdInSubtree = value;
  }
  public resetCompartmentIdInSubtree() {
    this._compartmentIdInSubtree = undefined;
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

  // managed_instance_id - computed: false, optional: true, required: false
  private _managedInstanceId?: string; 
  public get managedInstanceId() {
    return this.getStringAttribute('managed_instance_id');
  }
  public set managedInstanceId(value: string) {
    this._managedInstanceId = value;
  }
  public resetManagedInstanceId() {
    this._managedInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInstanceIdInput() {
    return this._managedInstanceId;
  }

  // plugin_error_collection - computed: true, optional: false, required: false
  private _pluginErrorCollection = new DataOciJmsPluginErrorsPluginErrorCollectionList(this, "plugin_error_collection", false);
  public get pluginErrorCollection() {
    return this._pluginErrorCollection;
  }

  // time_first_seen_greater_than_or_equal_to - computed: false, optional: true, required: false
  private _timeFirstSeenGreaterThanOrEqualTo?: string; 
  public get timeFirstSeenGreaterThanOrEqualTo() {
    return this.getStringAttribute('time_first_seen_greater_than_or_equal_to');
  }
  public set timeFirstSeenGreaterThanOrEqualTo(value: string) {
    this._timeFirstSeenGreaterThanOrEqualTo = value;
  }
  public resetTimeFirstSeenGreaterThanOrEqualTo() {
    this._timeFirstSeenGreaterThanOrEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFirstSeenGreaterThanOrEqualToInput() {
    return this._timeFirstSeenGreaterThanOrEqualTo;
  }

  // time_first_seen_less_than_or_equal_to - computed: false, optional: true, required: false
  private _timeFirstSeenLessThanOrEqualTo?: string; 
  public get timeFirstSeenLessThanOrEqualTo() {
    return this.getStringAttribute('time_first_seen_less_than_or_equal_to');
  }
  public set timeFirstSeenLessThanOrEqualTo(value: string) {
    this._timeFirstSeenLessThanOrEqualTo = value;
  }
  public resetTimeFirstSeenLessThanOrEqualTo() {
    this._timeFirstSeenLessThanOrEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFirstSeenLessThanOrEqualToInput() {
    return this._timeFirstSeenLessThanOrEqualTo;
  }

  // time_last_seen_greater_than_or_equal_to - computed: false, optional: true, required: false
  private _timeLastSeenGreaterThanOrEqualTo?: string; 
  public get timeLastSeenGreaterThanOrEqualTo() {
    return this.getStringAttribute('time_last_seen_greater_than_or_equal_to');
  }
  public set timeLastSeenGreaterThanOrEqualTo(value: string) {
    this._timeLastSeenGreaterThanOrEqualTo = value;
  }
  public resetTimeLastSeenGreaterThanOrEqualTo() {
    this._timeLastSeenGreaterThanOrEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeLastSeenGreaterThanOrEqualToInput() {
    return this._timeLastSeenGreaterThanOrEqualTo;
  }

  // time_last_seen_less_than_or_equal_to - computed: false, optional: true, required: false
  private _timeLastSeenLessThanOrEqualTo?: string; 
  public get timeLastSeenLessThanOrEqualTo() {
    return this.getStringAttribute('time_last_seen_less_than_or_equal_to');
  }
  public set timeLastSeenLessThanOrEqualTo(value: string) {
    this._timeLastSeenLessThanOrEqualTo = value;
  }
  public resetTimeLastSeenLessThanOrEqualTo() {
    this._timeLastSeenLessThanOrEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeLastSeenLessThanOrEqualToInput() {
    return this._timeLastSeenLessThanOrEqualTo;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciJmsPluginErrorsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciJmsPluginErrorsFilter[] | cdktf.IResolvable) {
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
      compartment_id_in_subtree: cdktf.booleanToTerraform(this._compartmentIdInSubtree),
      id: cdktf.stringToTerraform(this._id),
      managed_instance_id: cdktf.stringToTerraform(this._managedInstanceId),
      time_first_seen_greater_than_or_equal_to: cdktf.stringToTerraform(this._timeFirstSeenGreaterThanOrEqualTo),
      time_first_seen_less_than_or_equal_to: cdktf.stringToTerraform(this._timeFirstSeenLessThanOrEqualTo),
      time_last_seen_greater_than_or_equal_to: cdktf.stringToTerraform(this._timeLastSeenGreaterThanOrEqualTo),
      time_last_seen_less_than_or_equal_to: cdktf.stringToTerraform(this._timeLastSeenLessThanOrEqualTo),
      filter: cdktf.listMapper(dataOciJmsPluginErrorsFilterToTerraform, true)(this._filter.internalValue),
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
      managed_instance_id: {
        value: cdktf.stringToHclTerraform(this._managedInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_first_seen_greater_than_or_equal_to: {
        value: cdktf.stringToHclTerraform(this._timeFirstSeenGreaterThanOrEqualTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_first_seen_less_than_or_equal_to: {
        value: cdktf.stringToHclTerraform(this._timeFirstSeenLessThanOrEqualTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_last_seen_greater_than_or_equal_to: {
        value: cdktf.stringToHclTerraform(this._timeLastSeenGreaterThanOrEqualTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_last_seen_less_than_or_equal_to: {
        value: cdktf.stringToHclTerraform(this._timeLastSeenLessThanOrEqualTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciJmsPluginErrorsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciJmsPluginErrorsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
