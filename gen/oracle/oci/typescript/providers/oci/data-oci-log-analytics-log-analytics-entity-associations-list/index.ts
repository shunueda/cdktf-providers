// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/log_analytics_log_analytics_entity_associations_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciLogAnalyticsLogAnalyticsEntityAssociationsListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/log_analytics_log_analytics_entity_associations_list#direct_or_all_associations DataOciLogAnalyticsLogAnalyticsEntityAssociationsList#direct_or_all_associations}
  */
  readonly directOrAllAssociations?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/log_analytics_log_analytics_entity_associations_list#id DataOciLogAnalyticsLogAnalyticsEntityAssociationsList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/log_analytics_log_analytics_entity_associations_list#log_analytics_entity_id DataOciLogAnalyticsLogAnalyticsEntityAssociationsList#log_analytics_entity_id}
  */
  readonly logAnalyticsEntityId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/log_analytics_log_analytics_entity_associations_list#namespace DataOciLogAnalyticsLogAnalyticsEntityAssociationsList#namespace}
  */
  readonly namespace: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/log_analytics_log_analytics_entity_associations_list#filter DataOciLogAnalyticsLogAnalyticsEntityAssociationsList#filter}
  */
  readonly filter?: DataOciLogAnalyticsLogAnalyticsEntityAssociationsListFilter[] | cdktf.IResolvable;
}
export interface DataOciLogAnalyticsLogAnalyticsEntityAssociationsListLogAnalyticsEntityCollectionItemsMetadataItems {
}

export function dataOciLogAnalyticsLogAnalyticsEntityAssociationsListLogAnalyticsEntityCollectionItemsMetadataItemsToTerraform(struct?: DataOciLogAnalyticsLogAnalyticsEntityAssociationsListLogAnalyticsEntityCollectionItemsMetadataItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciLogAnalyticsLogAnalyticsEntityAssociationsListLogAnalyticsEntityCollectionItemsMetadataItemsToHclTerraform(struct?: DataOciLogAnalyticsLogAnalyticsEntityAssociationsListLogAnalyticsEntityCollectionItemsMetadataItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciLogAnalyticsLogAnalyticsEntityAssociationsListLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLogAnalyticsLogAnalyticsEntityAssociationsListLogAnalyticsEntityCollectionItemsMetadataItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLogAnalyticsLogAnalyticsEntityAssociationsListLogAnalyticsEntityCollectionItemsMetadataItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciLogAnalyticsLogAnalyticsEntityAssociationsListLogAnalyticsEntityCollectionItemsMetadataItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLogAnalyticsLogAnalyticsEntityAssociationsListLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference {
    return new DataOciLogAnalyticsLogAnalyticsEntityAssociationsListLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciLogAnalyticsLogAnalyticsEntityAssociationsListLogAnalyticsEntityCollectionItemsMetadata {
}

export function dataOciLogAnalyticsLogAnalyticsEntityAssociationsListLogAnalyticsEntityCollectionItemsMetadataToTerraform(struct?: DataOciLogAnalyticsLogAnalyticsEntityAssociationsListLogAnalyticsEntityCollectionItemsMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciLogAnalyticsLogAnalyticsEntityAssociationsListLogAnalyticsEntityCollectionItemsMetadataToHclTerraform(struct?: DataOciLogAnalyticsLogAnalyticsEntityAssociationsListLogAnalyticsEntityCollectionItemsMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciLogAnalyticsLogAnalyticsEntityAssociationsListLogAnalyticsEntityCollectionItemsMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLogAnalyticsLogAnalyticsEntityAssociationsListLogAnalyticsEntityCollectionItemsMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLogAnalyticsLogAnalyticsEntityAssociationsListLogAnalyticsEntityCollectionItemsMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciLogAnalyticsLogAnalyticsEntityAssociationsListLogAnalyticsEntityCollectionItemsMetadataItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciLogAnalyticsLogAnalyticsEntityAssociationsListLogAnalyticsEntityCollectionItemsMetadataList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLogAnalyticsLogAnalyticsEntityAssociationsListLogAnalyticsEntityCollectionItemsMetadataOutputReference {
    return new DataOciLogAnalyticsLogAnalyticsEntityAssociationsListLogAnalyticsEntityCollectionItemsMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciLogAnalyticsLogAnalyticsEntityAssociationsListLogAnalyticsEntityCollectionItems {
}

export function dataOciLogAnalyticsLogAnalyticsEntityAssociationsListLogAnalyticsEntityCollectionItemsToTerraform(struct?: DataOciLogAnalyticsLogAnalyticsEntityAssociationsListLogAnalyticsEntityCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciLogAnalyticsLogAnalyticsEntityAssociationsListLogAnalyticsEntityCollectionItemsToHclTerraform(struct?: DataOciLogAnalyticsLogAnalyticsEntityAssociationsListLogAnalyticsEntityCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciLogAnalyticsLogAnalyticsEntityAssociationsListLogAnalyticsEntityCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLogAnalyticsLogAnalyticsEntityAssociationsListLogAnalyticsEntityCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLogAnalyticsLogAnalyticsEntityAssociationsListLogAnalyticsEntityCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // are_logs_collected - computed: true, optional: false, required: false
  public get areLogsCollected() {
    return this.getBooleanAttribute('are_logs_collected');
  }

  // associated_sources_count - computed: true, optional: false, required: false
  public get associatedSourcesCount() {
    return this.getNumberAttribute('associated_sources_count');
  }

  // cloud_resource_id - computed: true, optional: false, required: false
  public get cloudResourceId() {
    return this.getStringAttribute('cloud_resource_id');
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

  // entity_type_internal_name - computed: true, optional: false, required: false
  public get entityTypeInternalName() {
    return this.getStringAttribute('entity_type_internal_name');
  }

  // entity_type_name - computed: true, optional: false, required: false
  public get entityTypeName() {
    return this.getStringAttribute('entity_type_name');
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

  // management_agent_id - computed: true, optional: false, required: false
  public get managementAgentId() {
    return this.getStringAttribute('management_agent_id');
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new DataOciLogAnalyticsLogAnalyticsEntityAssociationsListLogAnalyticsEntityCollectionItemsMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // source_id - computed: true, optional: false, required: false
  public get sourceId() {
    return this.getStringAttribute('source_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_last_discovered - computed: true, optional: false, required: false
  public get timeLastDiscovered() {
    return this.getStringAttribute('time_last_discovered');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // timezone_region - computed: true, optional: false, required: false
  public get timezoneRegion() {
    return this.getStringAttribute('timezone_region');
  }
}

export class DataOciLogAnalyticsLogAnalyticsEntityAssociationsListLogAnalyticsEntityCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLogAnalyticsLogAnalyticsEntityAssociationsListLogAnalyticsEntityCollectionItemsOutputReference {
    return new DataOciLogAnalyticsLogAnalyticsEntityAssociationsListLogAnalyticsEntityCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciLogAnalyticsLogAnalyticsEntityAssociationsListLogAnalyticsEntityCollection {
}

export function dataOciLogAnalyticsLogAnalyticsEntityAssociationsListLogAnalyticsEntityCollectionToTerraform(struct?: DataOciLogAnalyticsLogAnalyticsEntityAssociationsListLogAnalyticsEntityCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciLogAnalyticsLogAnalyticsEntityAssociationsListLogAnalyticsEntityCollectionToHclTerraform(struct?: DataOciLogAnalyticsLogAnalyticsEntityAssociationsListLogAnalyticsEntityCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciLogAnalyticsLogAnalyticsEntityAssociationsListLogAnalyticsEntityCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLogAnalyticsLogAnalyticsEntityAssociationsListLogAnalyticsEntityCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLogAnalyticsLogAnalyticsEntityAssociationsListLogAnalyticsEntityCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciLogAnalyticsLogAnalyticsEntityAssociationsListLogAnalyticsEntityCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciLogAnalyticsLogAnalyticsEntityAssociationsListLogAnalyticsEntityCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLogAnalyticsLogAnalyticsEntityAssociationsListLogAnalyticsEntityCollectionOutputReference {
    return new DataOciLogAnalyticsLogAnalyticsEntityAssociationsListLogAnalyticsEntityCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciLogAnalyticsLogAnalyticsEntityAssociationsListFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/log_analytics_log_analytics_entity_associations_list#name DataOciLogAnalyticsLogAnalyticsEntityAssociationsList#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/log_analytics_log_analytics_entity_associations_list#regex DataOciLogAnalyticsLogAnalyticsEntityAssociationsList#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/log_analytics_log_analytics_entity_associations_list#values DataOciLogAnalyticsLogAnalyticsEntityAssociationsList#values}
  */
  readonly values: string[];
}

export function dataOciLogAnalyticsLogAnalyticsEntityAssociationsListFilterToTerraform(struct?: DataOciLogAnalyticsLogAnalyticsEntityAssociationsListFilter | cdktf.IResolvable): any {
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


export function dataOciLogAnalyticsLogAnalyticsEntityAssociationsListFilterToHclTerraform(struct?: DataOciLogAnalyticsLogAnalyticsEntityAssociationsListFilter | cdktf.IResolvable): any {
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

export class DataOciLogAnalyticsLogAnalyticsEntityAssociationsListFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLogAnalyticsLogAnalyticsEntityAssociationsListFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciLogAnalyticsLogAnalyticsEntityAssociationsListFilter | cdktf.IResolvable | undefined) {
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

export class DataOciLogAnalyticsLogAnalyticsEntityAssociationsListFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciLogAnalyticsLogAnalyticsEntityAssociationsListFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciLogAnalyticsLogAnalyticsEntityAssociationsListFilterOutputReference {
    return new DataOciLogAnalyticsLogAnalyticsEntityAssociationsListFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/log_analytics_log_analytics_entity_associations_list oci_log_analytics_log_analytics_entity_associations_list}
*/
export class DataOciLogAnalyticsLogAnalyticsEntityAssociationsList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_log_analytics_log_analytics_entity_associations_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciLogAnalyticsLogAnalyticsEntityAssociationsList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciLogAnalyticsLogAnalyticsEntityAssociationsList to import
  * @param importFromId The id of the existing DataOciLogAnalyticsLogAnalyticsEntityAssociationsList that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/log_analytics_log_analytics_entity_associations_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciLogAnalyticsLogAnalyticsEntityAssociationsList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_log_analytics_log_analytics_entity_associations_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/log_analytics_log_analytics_entity_associations_list oci_log_analytics_log_analytics_entity_associations_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciLogAnalyticsLogAnalyticsEntityAssociationsListConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciLogAnalyticsLogAnalyticsEntityAssociationsListConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_log_analytics_log_analytics_entity_associations_list',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._directOrAllAssociations = config.directOrAllAssociations;
    this._id = config.id;
    this._logAnalyticsEntityId = config.logAnalyticsEntityId;
    this._namespace = config.namespace;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // direct_or_all_associations - computed: false, optional: true, required: false
  private _directOrAllAssociations?: string; 
  public get directOrAllAssociations() {
    return this.getStringAttribute('direct_or_all_associations');
  }
  public set directOrAllAssociations(value: string) {
    this._directOrAllAssociations = value;
  }
  public resetDirectOrAllAssociations() {
    this._directOrAllAssociations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directOrAllAssociationsInput() {
    return this._directOrAllAssociations;
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

  // log_analytics_entity_collection - computed: true, optional: false, required: false
  private _logAnalyticsEntityCollection = new DataOciLogAnalyticsLogAnalyticsEntityAssociationsListLogAnalyticsEntityCollectionList(this, "log_analytics_entity_collection", false);
  public get logAnalyticsEntityCollection() {
    return this._logAnalyticsEntityCollection;
  }

  // log_analytics_entity_id - computed: false, optional: false, required: true
  private _logAnalyticsEntityId?: string; 
  public get logAnalyticsEntityId() {
    return this.getStringAttribute('log_analytics_entity_id');
  }
  public set logAnalyticsEntityId(value: string) {
    this._logAnalyticsEntityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsEntityIdInput() {
    return this._logAnalyticsEntityId;
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

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciLogAnalyticsLogAnalyticsEntityAssociationsListFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciLogAnalyticsLogAnalyticsEntityAssociationsListFilter[] | cdktf.IResolvable) {
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
      direct_or_all_associations: cdktf.stringToTerraform(this._directOrAllAssociations),
      id: cdktf.stringToTerraform(this._id),
      log_analytics_entity_id: cdktf.stringToTerraform(this._logAnalyticsEntityId),
      namespace: cdktf.stringToTerraform(this._namespace),
      filter: cdktf.listMapper(dataOciLogAnalyticsLogAnalyticsEntityAssociationsListFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      direct_or_all_associations: {
        value: cdktf.stringToHclTerraform(this._directOrAllAssociations),
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
      log_analytics_entity_id: {
        value: cdktf.stringToHclTerraform(this._logAnalyticsEntityId),
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
      filter: {
        value: cdktf.listMapperHcl(dataOciLogAnalyticsLogAnalyticsEntityAssociationsListFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciLogAnalyticsLogAnalyticsEntityAssociationsListFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
