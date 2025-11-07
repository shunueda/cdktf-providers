// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/multicloud_external_location_mapping_metadata
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciMulticloudExternalLocationMappingMetadataConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/multicloud_external_location_mapping_metadata#compartment_id DataOciMulticloudExternalLocationMappingMetadata#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/multicloud_external_location_mapping_metadata#id DataOciMulticloudExternalLocationMappingMetadata#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/multicloud_external_location_mapping_metadata#limit DataOciMulticloudExternalLocationMappingMetadata#limit}
  */
  readonly limit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/multicloud_external_location_mapping_metadata#subscription_id DataOciMulticloudExternalLocationMappingMetadata#subscription_id}
  */
  readonly subscriptionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/multicloud_external_location_mapping_metadata#subscription_service_name DataOciMulticloudExternalLocationMappingMetadata#subscription_service_name}
  */
  readonly subscriptionServiceName: string[];
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/multicloud_external_location_mapping_metadata#filter DataOciMulticloudExternalLocationMappingMetadata#filter}
  */
  readonly filter?: DataOciMulticloudExternalLocationMappingMetadataFilter[] | cdktf.IResolvable;
}
export interface DataOciMulticloudExternalLocationMappingMetadataExternalLocationMappingMetadatumSummaryCollectionItemsExternalLocation {
}

export function dataOciMulticloudExternalLocationMappingMetadataExternalLocationMappingMetadatumSummaryCollectionItemsExternalLocationToTerraform(struct?: DataOciMulticloudExternalLocationMappingMetadataExternalLocationMappingMetadatumSummaryCollectionItemsExternalLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciMulticloudExternalLocationMappingMetadataExternalLocationMappingMetadatumSummaryCollectionItemsExternalLocationToHclTerraform(struct?: DataOciMulticloudExternalLocationMappingMetadataExternalLocationMappingMetadatumSummaryCollectionItemsExternalLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciMulticloudExternalLocationMappingMetadataExternalLocationMappingMetadatumSummaryCollectionItemsExternalLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciMulticloudExternalLocationMappingMetadataExternalLocationMappingMetadatumSummaryCollectionItemsExternalLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciMulticloudExternalLocationMappingMetadataExternalLocationMappingMetadatumSummaryCollectionItemsExternalLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // csp_physical_az - computed: true, optional: false, required: false
  public get cspPhysicalAz() {
    return this.getStringAttribute('csp_physical_az');
  }

  // csp_physical_az_display_name - computed: true, optional: false, required: false
  public get cspPhysicalAzDisplayName() {
    return this.getStringAttribute('csp_physical_az_display_name');
  }

  // csp_region - computed: true, optional: false, required: false
  public get cspRegion() {
    return this.getStringAttribute('csp_region');
  }

  // csp_region_display_name - computed: true, optional: false, required: false
  public get cspRegionDisplayName() {
    return this.getStringAttribute('csp_region_display_name');
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
}

export class DataOciMulticloudExternalLocationMappingMetadataExternalLocationMappingMetadatumSummaryCollectionItemsExternalLocationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciMulticloudExternalLocationMappingMetadataExternalLocationMappingMetadatumSummaryCollectionItemsExternalLocationOutputReference {
    return new DataOciMulticloudExternalLocationMappingMetadataExternalLocationMappingMetadatumSummaryCollectionItemsExternalLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciMulticloudExternalLocationMappingMetadataExternalLocationMappingMetadatumSummaryCollectionItems {
}

export function dataOciMulticloudExternalLocationMappingMetadataExternalLocationMappingMetadatumSummaryCollectionItemsToTerraform(struct?: DataOciMulticloudExternalLocationMappingMetadataExternalLocationMappingMetadatumSummaryCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciMulticloudExternalLocationMappingMetadataExternalLocationMappingMetadatumSummaryCollectionItemsToHclTerraform(struct?: DataOciMulticloudExternalLocationMappingMetadataExternalLocationMappingMetadatumSummaryCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciMulticloudExternalLocationMappingMetadataExternalLocationMappingMetadatumSummaryCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciMulticloudExternalLocationMappingMetadataExternalLocationMappingMetadatumSummaryCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciMulticloudExternalLocationMappingMetadataExternalLocationMappingMetadatumSummaryCollectionItems | undefined) {
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
  private _externalLocation = new DataOciMulticloudExternalLocationMappingMetadataExternalLocationMappingMetadatumSummaryCollectionItemsExternalLocationList(this, "external_location", false);
  public get externalLocation() {
    return this._externalLocation;
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // oci_logical_ad - computed: true, optional: false, required: false
  public get ociLogicalAd() {
    return this.getStringAttribute('oci_logical_ad');
  }

  // oci_physical_ad - computed: true, optional: false, required: false
  public get ociPhysicalAd() {
    return this.getStringAttribute('oci_physical_ad');
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

export class DataOciMulticloudExternalLocationMappingMetadataExternalLocationMappingMetadatumSummaryCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciMulticloudExternalLocationMappingMetadataExternalLocationMappingMetadatumSummaryCollectionItemsOutputReference {
    return new DataOciMulticloudExternalLocationMappingMetadataExternalLocationMappingMetadatumSummaryCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciMulticloudExternalLocationMappingMetadataExternalLocationMappingMetadatumSummaryCollection {
}

export function dataOciMulticloudExternalLocationMappingMetadataExternalLocationMappingMetadatumSummaryCollectionToTerraform(struct?: DataOciMulticloudExternalLocationMappingMetadataExternalLocationMappingMetadatumSummaryCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciMulticloudExternalLocationMappingMetadataExternalLocationMappingMetadatumSummaryCollectionToHclTerraform(struct?: DataOciMulticloudExternalLocationMappingMetadataExternalLocationMappingMetadatumSummaryCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciMulticloudExternalLocationMappingMetadataExternalLocationMappingMetadatumSummaryCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciMulticloudExternalLocationMappingMetadataExternalLocationMappingMetadatumSummaryCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciMulticloudExternalLocationMappingMetadataExternalLocationMappingMetadatumSummaryCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciMulticloudExternalLocationMappingMetadataExternalLocationMappingMetadatumSummaryCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciMulticloudExternalLocationMappingMetadataExternalLocationMappingMetadatumSummaryCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciMulticloudExternalLocationMappingMetadataExternalLocationMappingMetadatumSummaryCollectionOutputReference {
    return new DataOciMulticloudExternalLocationMappingMetadataExternalLocationMappingMetadatumSummaryCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciMulticloudExternalLocationMappingMetadataFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/multicloud_external_location_mapping_metadata#name DataOciMulticloudExternalLocationMappingMetadata#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/multicloud_external_location_mapping_metadata#regex DataOciMulticloudExternalLocationMappingMetadata#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/multicloud_external_location_mapping_metadata#values DataOciMulticloudExternalLocationMappingMetadata#values}
  */
  readonly values: string[];
}

export function dataOciMulticloudExternalLocationMappingMetadataFilterToTerraform(struct?: DataOciMulticloudExternalLocationMappingMetadataFilter | cdktf.IResolvable): any {
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


export function dataOciMulticloudExternalLocationMappingMetadataFilterToHclTerraform(struct?: DataOciMulticloudExternalLocationMappingMetadataFilter | cdktf.IResolvable): any {
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

export class DataOciMulticloudExternalLocationMappingMetadataFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciMulticloudExternalLocationMappingMetadataFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciMulticloudExternalLocationMappingMetadataFilter | cdktf.IResolvable | undefined) {
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

export class DataOciMulticloudExternalLocationMappingMetadataFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciMulticloudExternalLocationMappingMetadataFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciMulticloudExternalLocationMappingMetadataFilterOutputReference {
    return new DataOciMulticloudExternalLocationMappingMetadataFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/multicloud_external_location_mapping_metadata oci_multicloud_external_location_mapping_metadata}
*/
export class DataOciMulticloudExternalLocationMappingMetadata extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_multicloud_external_location_mapping_metadata";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciMulticloudExternalLocationMappingMetadata resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciMulticloudExternalLocationMappingMetadata to import
  * @param importFromId The id of the existing DataOciMulticloudExternalLocationMappingMetadata that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/multicloud_external_location_mapping_metadata#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciMulticloudExternalLocationMappingMetadata to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_multicloud_external_location_mapping_metadata", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/multicloud_external_location_mapping_metadata oci_multicloud_external_location_mapping_metadata} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciMulticloudExternalLocationMappingMetadataConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciMulticloudExternalLocationMappingMetadataConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_multicloud_external_location_mapping_metadata',
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

  // external_location_mapping_metadatum_summary_collection - computed: true, optional: false, required: false
  private _externalLocationMappingMetadatumSummaryCollection = new DataOciMulticloudExternalLocationMappingMetadataExternalLocationMappingMetadatumSummaryCollectionList(this, "external_location_mapping_metadatum_summary_collection", false);
  public get externalLocationMappingMetadatumSummaryCollection() {
    return this._externalLocationMappingMetadatumSummaryCollection;
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
  private _subscriptionServiceName?: string[]; 
  public get subscriptionServiceName() {
    return this.getListAttribute('subscription_service_name');
  }
  public set subscriptionServiceName(value: string[]) {
    this._subscriptionServiceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionServiceNameInput() {
    return this._subscriptionServiceName;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciMulticloudExternalLocationMappingMetadataFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciMulticloudExternalLocationMappingMetadataFilter[] | cdktf.IResolvable) {
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
      limit: cdktf.numberToTerraform(this._limit),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      subscription_service_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subscriptionServiceName),
      filter: cdktf.listMapper(dataOciMulticloudExternalLocationMappingMetadataFilterToTerraform, true)(this._filter.internalValue),
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
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subscriptionServiceName),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciMulticloudExternalLocationMappingMetadataFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciMulticloudExternalLocationMappingMetadataFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
