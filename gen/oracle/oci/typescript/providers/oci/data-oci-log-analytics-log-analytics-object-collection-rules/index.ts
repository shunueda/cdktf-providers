// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#compartment_id DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#id DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#name DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#namespace DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#state DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#state}
  */
  readonly state?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#filter DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#filter}
  */
  readonly filter?: DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter[] | cdktf.IResolvable;
}
export interface DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverrides {
}

export function dataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesToTerraform(struct?: DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesToHclTerraform(struct?: DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // match_type - computed: true, optional: false, required: false
  public get matchType() {
    return this.getStringAttribute('match_type');
  }

  // match_value - computed: true, optional: false, required: false
  public get matchValue() {
    return this.getStringAttribute('match_value');
  }

  // property_name - computed: true, optional: false, required: false
  public get propertyName() {
    return this.getStringAttribute('property_name');
  }

  // property_value - computed: true, optional: false, required: false
  public get propertyValue() {
    return this.getStringAttribute('property_value');
  }
}

export class DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference {
    return new DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItems {
}

export function dataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsToTerraform(struct?: DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsToHclTerraform(struct?: DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // char_encoding - computed: true, optional: false, required: false
  public get charEncoding() {
    return this.getStringAttribute('char_encoding');
  }

  // collection_type - computed: true, optional: false, required: false
  public get collectionType() {
    return this.getStringAttribute('collection_type');
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // entity_id - computed: true, optional: false, required: false
  public get entityId() {
    return this.getStringAttribute('entity_id');
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

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // is_force_historic_collection - computed: true, optional: false, required: false
  public get isForceHistoricCollection() {
    return this.getBooleanAttribute('is_force_historic_collection');
  }

  // last_collected_object - computed: true, optional: false, required: false
  public get lastCollectedObject() {
    return this.getStringAttribute('last_collected_object');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // log_group_id - computed: true, optional: false, required: false
  public get logGroupId() {
    return this.getStringAttribute('log_group_id');
  }

  // log_set - computed: true, optional: false, required: false
  public get logSet() {
    return this.getStringAttribute('log_set');
  }

  // log_set_ext_regex - computed: true, optional: false, required: false
  public get logSetExtRegex() {
    return this.getStringAttribute('log_set_ext_regex');
  }

  // log_set_key - computed: true, optional: false, required: false
  public get logSetKey() {
    return this.getStringAttribute('log_set_key');
  }

  // log_source_name - computed: true, optional: false, required: false
  public get logSourceName() {
    return this.getStringAttribute('log_source_name');
  }

  // log_type - computed: true, optional: false, required: false
  public get logType() {
    return this.getStringAttribute('log_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // object_name_filters - computed: true, optional: false, required: false
  public get objectNameFilters() {
    return this.getListAttribute('object_name_filters');
  }

  // os_bucket_name - computed: true, optional: false, required: false
  public get osBucketName() {
    return this.getStringAttribute('os_bucket_name');
  }

  // os_namespace - computed: true, optional: false, required: false
  public get osNamespace() {
    return this.getStringAttribute('os_namespace');
  }

  // overrides - computed: true, optional: false, required: false
  private _overrides = new DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList(this, "overrides", false);
  public get overrides() {
    return this._overrides;
  }

  // poll_since - computed: true, optional: false, required: false
  public get pollSince() {
    return this.getStringAttribute('poll_since');
  }

  // poll_till - computed: true, optional: false, required: false
  public get pollTill() {
    return this.getStringAttribute('poll_till');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // stream_cursor_time - computed: true, optional: false, required: false
  public get streamCursorTime() {
    return this.getStringAttribute('stream_cursor_time');
  }

  // stream_cursor_type - computed: true, optional: false, required: false
  public get streamCursorType() {
    return this.getStringAttribute('stream_cursor_type');
  }

  // stream_id - computed: true, optional: false, required: false
  public get streamId() {
    return this.getStringAttribute('stream_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
}

export class DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference {
    return new DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollection {
}

export function dataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionToTerraform(struct?: DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionToHclTerraform(struct?: DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference {
    return new DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#name DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#regex DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#values DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#values}
  */
  readonly values: string[];
}

export function dataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterToTerraform(struct?: DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter | cdktf.IResolvable): any {
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


export function dataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterToHclTerraform(struct?: DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter | cdktf.IResolvable): any {
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

export class DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter | cdktf.IResolvable | undefined) {
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

export class DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference {
    return new DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules oci_log_analytics_log_analytics_object_collection_rules}
*/
export class DataOciLogAnalyticsLogAnalyticsObjectCollectionRules extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_log_analytics_log_analytics_object_collection_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciLogAnalyticsLogAnalyticsObjectCollectionRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciLogAnalyticsLogAnalyticsObjectCollectionRules to import
  * @param importFromId The id of the existing DataOciLogAnalyticsLogAnalyticsObjectCollectionRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciLogAnalyticsLogAnalyticsObjectCollectionRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_log_analytics_log_analytics_object_collection_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules oci_log_analytics_log_analytics_object_collection_rules} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_log_analytics_log_analytics_object_collection_rules',
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
    this._id = config.id;
    this._name = config.name;
    this._namespace = config.namespace;
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

  // log_analytics_object_collection_rule_collection - computed: true, optional: false, required: false
  private _logAnalyticsObjectCollectionRuleCollection = new DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList(this, "log_analytics_object_collection_rule_collection", false);
  public get logAnalyticsObjectCollectionRuleCollection() {
    return this._logAnalyticsObjectCollectionRuleCollection;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
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
  private _filter = new DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter[] | cdktf.IResolvable) {
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      state: cdktf.stringToTerraform(this._state),
      filter: cdktf.listMapper(dataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterToTerraform, true)(this._filter.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
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
        value: cdktf.listMapperHcl(dataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
