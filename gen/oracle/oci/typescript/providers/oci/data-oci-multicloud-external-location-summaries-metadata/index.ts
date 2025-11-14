// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/multicloud_external_location_summaries_metadata
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciMulticloudExternalLocationSummariesMetadataConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/multicloud_external_location_summaries_metadata#compartment_id DataOciMulticloudExternalLocationSummariesMetadata#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/multicloud_external_location_summaries_metadata#entity_type DataOciMulticloudExternalLocationSummariesMetadata#entity_type}
  */
  readonly entityType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/multicloud_external_location_summaries_metadata#id DataOciMulticloudExternalLocationSummariesMetadata#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/multicloud_external_location_summaries_metadata#limit DataOciMulticloudExternalLocationSummariesMetadata#limit}
  */
  readonly limit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/multicloud_external_location_summaries_metadata#subscription_id DataOciMulticloudExternalLocationSummariesMetadata#subscription_id}
  */
  readonly subscriptionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/multicloud_external_location_summaries_metadata#subscription_service_name DataOciMulticloudExternalLocationSummariesMetadata#subscription_service_name}
  */
  readonly subscriptionServiceName: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/multicloud_external_location_summaries_metadata#filter DataOciMulticloudExternalLocationSummariesMetadata#filter}
  */
  readonly filter?: DataOciMulticloudExternalLocationSummariesMetadataFilter[] | cdktf.IResolvable;
}
export interface DataOciMulticloudExternalLocationSummariesMetadataExternalLocationSummariesMetadatumSummaryCollectionItemsExternalLocation {
}

export function dataOciMulticloudExternalLocationSummariesMetadataExternalLocationSummariesMetadatumSummaryCollectionItemsExternalLocationToTerraform(struct?: DataOciMulticloudExternalLocationSummariesMetadataExternalLocationSummariesMetadatumSummaryCollectionItemsExternalLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciMulticloudExternalLocationSummariesMetadataExternalLocationSummariesMetadatumSummaryCollectionItemsExternalLocationToHclTerraform(struct?: DataOciMulticloudExternalLocationSummariesMetadataExternalLocationSummariesMetadatumSummaryCollectionItemsExternalLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciMulticloudExternalLocationSummariesMetadataExternalLocationSummariesMetadatumSummaryCollectionItemsExternalLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciMulticloudExternalLocationSummariesMetadataExternalLocationSummariesMetadatumSummaryCollectionItemsExternalLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciMulticloudExternalLocationSummariesMetadataExternalLocationSummariesMetadatumSummaryCollectionItemsExternalLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // csp_region - computed: true, optional: false, required: false
  public get cspRegion() {
    return this.getStringAttribute('csp_region');
  }

  // csp_region_display_name - computed: true, optional: false, required: false
  public get cspRegionDisplayName() {
    return this.getStringAttribute('csp_region_display_name');
  }
}

export class DataOciMulticloudExternalLocationSummariesMetadataExternalLocationSummariesMetadatumSummaryCollectionItemsExternalLocationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciMulticloudExternalLocationSummariesMetadataExternalLocationSummariesMetadatumSummaryCollectionItemsExternalLocationOutputReference {
    return new DataOciMulticloudExternalLocationSummariesMetadataExternalLocationSummariesMetadatumSummaryCollectionItemsExternalLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciMulticloudExternalLocationSummariesMetadataExternalLocationSummariesMetadatumSummaryCollectionItems {
}

export function dataOciMulticloudExternalLocationSummariesMetadataExternalLocationSummariesMetadatumSummaryCollectionItemsToTerraform(struct?: DataOciMulticloudExternalLocationSummariesMetadataExternalLocationSummariesMetadatumSummaryCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciMulticloudExternalLocationSummariesMetadataExternalLocationSummariesMetadatumSummaryCollectionItemsToHclTerraform(struct?: DataOciMulticloudExternalLocationSummariesMetadataExternalLocationSummariesMetadatumSummaryCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciMulticloudExternalLocationSummariesMetadataExternalLocationSummariesMetadatumSummaryCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciMulticloudExternalLocationSummariesMetadataExternalLocationSummariesMetadatumSummaryCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciMulticloudExternalLocationSummariesMetadataExternalLocationSummariesMetadatumSummaryCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // external_location - computed: true, optional: false, required: false
  private _externalLocation = new DataOciMulticloudExternalLocationSummariesMetadataExternalLocationSummariesMetadatumSummaryCollectionItemsExternalLocationList(this, "external_location", false);
  public get externalLocation() {
    return this._externalLocation;
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // oci_region - computed: true, optional: false, required: false
  public get ociRegion() {
    return this.getStringAttribute('oci_region');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }
}

export class DataOciMulticloudExternalLocationSummariesMetadataExternalLocationSummariesMetadatumSummaryCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciMulticloudExternalLocationSummariesMetadataExternalLocationSummariesMetadatumSummaryCollectionItemsOutputReference {
    return new DataOciMulticloudExternalLocationSummariesMetadataExternalLocationSummariesMetadatumSummaryCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciMulticloudExternalLocationSummariesMetadataExternalLocationSummariesMetadatumSummaryCollection {
}

export function dataOciMulticloudExternalLocationSummariesMetadataExternalLocationSummariesMetadatumSummaryCollectionToTerraform(struct?: DataOciMulticloudExternalLocationSummariesMetadataExternalLocationSummariesMetadatumSummaryCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciMulticloudExternalLocationSummariesMetadataExternalLocationSummariesMetadatumSummaryCollectionToHclTerraform(struct?: DataOciMulticloudExternalLocationSummariesMetadataExternalLocationSummariesMetadatumSummaryCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciMulticloudExternalLocationSummariesMetadataExternalLocationSummariesMetadatumSummaryCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciMulticloudExternalLocationSummariesMetadataExternalLocationSummariesMetadatumSummaryCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciMulticloudExternalLocationSummariesMetadataExternalLocationSummariesMetadatumSummaryCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciMulticloudExternalLocationSummariesMetadataExternalLocationSummariesMetadatumSummaryCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciMulticloudExternalLocationSummariesMetadataExternalLocationSummariesMetadatumSummaryCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciMulticloudExternalLocationSummariesMetadataExternalLocationSummariesMetadatumSummaryCollectionOutputReference {
    return new DataOciMulticloudExternalLocationSummariesMetadataExternalLocationSummariesMetadatumSummaryCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciMulticloudExternalLocationSummariesMetadataFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/multicloud_external_location_summaries_metadata#name DataOciMulticloudExternalLocationSummariesMetadata#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/multicloud_external_location_summaries_metadata#regex DataOciMulticloudExternalLocationSummariesMetadata#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/multicloud_external_location_summaries_metadata#values DataOciMulticloudExternalLocationSummariesMetadata#values}
  */
  readonly values: string[];
}

export function dataOciMulticloudExternalLocationSummariesMetadataFilterToTerraform(struct?: DataOciMulticloudExternalLocationSummariesMetadataFilter | cdktf.IResolvable): any {
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


export function dataOciMulticloudExternalLocationSummariesMetadataFilterToHclTerraform(struct?: DataOciMulticloudExternalLocationSummariesMetadataFilter | cdktf.IResolvable): any {
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

export class DataOciMulticloudExternalLocationSummariesMetadataFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciMulticloudExternalLocationSummariesMetadataFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciMulticloudExternalLocationSummariesMetadataFilter | cdktf.IResolvable | undefined) {
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

export class DataOciMulticloudExternalLocationSummariesMetadataFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciMulticloudExternalLocationSummariesMetadataFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciMulticloudExternalLocationSummariesMetadataFilterOutputReference {
    return new DataOciMulticloudExternalLocationSummariesMetadataFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/multicloud_external_location_summaries_metadata oci_multicloud_external_location_summaries_metadata}
*/
export class DataOciMulticloudExternalLocationSummariesMetadata extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_multicloud_external_location_summaries_metadata";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciMulticloudExternalLocationSummariesMetadata resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciMulticloudExternalLocationSummariesMetadata to import
  * @param importFromId The id of the existing DataOciMulticloudExternalLocationSummariesMetadata that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/multicloud_external_location_summaries_metadata#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciMulticloudExternalLocationSummariesMetadata to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_multicloud_external_location_summaries_metadata", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/multicloud_external_location_summaries_metadata oci_multicloud_external_location_summaries_metadata} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciMulticloudExternalLocationSummariesMetadataConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciMulticloudExternalLocationSummariesMetadataConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_multicloud_external_location_summaries_metadata',
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
    this._entityType = config.entityType;
    this._id = config.id;
    this._limit = config.limit;
    this._subscriptionId = config.subscriptionId;
    this._subscriptionServiceName = config.subscriptionServiceName;
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

  // entity_type - computed: false, optional: true, required: false
  private _entityType?: string; 
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }
  public set entityType(value: string) {
    this._entityType = value;
  }
  public resetEntityType() {
    this._entityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypeInput() {
    return this._entityType;
  }

  // external_location_summaries_metadatum_summary_collection - computed: true, optional: false, required: false
  private _externalLocationSummariesMetadatumSummaryCollection = new DataOciMulticloudExternalLocationSummariesMetadataExternalLocationSummariesMetadatumSummaryCollectionList(this, "external_location_summaries_metadatum_summary_collection", false);
  public get externalLocationSummariesMetadatumSummaryCollection() {
    return this._externalLocationSummariesMetadatumSummaryCollection;
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

  // subscription_id - computed: false, optional: true, required: false
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  public resetSubscriptionId() {
    this._subscriptionId = undefined;
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
  private _filter = new DataOciMulticloudExternalLocationSummariesMetadataFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciMulticloudExternalLocationSummariesMetadataFilter[] | cdktf.IResolvable) {
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
      entity_type: cdktf.stringToTerraform(this._entityType),
      id: cdktf.stringToTerraform(this._id),
      limit: cdktf.numberToTerraform(this._limit),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      subscription_service_name: cdktf.stringToTerraform(this._subscriptionServiceName),
      filter: cdktf.listMapper(dataOciMulticloudExternalLocationSummariesMetadataFilterToTerraform, true)(this._filter.internalValue),
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
      entity_type: {
        value: cdktf.stringToHclTerraform(this._entityType),
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
        value: cdktf.listMapperHcl(dataOciMulticloudExternalLocationSummariesMetadataFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciMulticloudExternalLocationSummariesMetadataFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
