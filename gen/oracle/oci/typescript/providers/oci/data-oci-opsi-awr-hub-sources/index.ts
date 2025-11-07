// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/opsi_awr_hub_sources
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOpsiAwrHubSourcesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/opsi_awr_hub_sources#awr_hub_id DataOciOpsiAwrHubSources#awr_hub_id}
  */
  readonly awrHubId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/opsi_awr_hub_sources#awr_hub_source_id DataOciOpsiAwrHubSources#awr_hub_source_id}
  */
  readonly awrHubSourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/opsi_awr_hub_sources#compartment_id DataOciOpsiAwrHubSources#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/opsi_awr_hub_sources#id DataOciOpsiAwrHubSources#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/opsi_awr_hub_sources#name DataOciOpsiAwrHubSources#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/opsi_awr_hub_sources#source_type DataOciOpsiAwrHubSources#source_type}
  */
  readonly sourceType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/opsi_awr_hub_sources#state DataOciOpsiAwrHubSources#state}
  */
  readonly state?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/opsi_awr_hub_sources#status DataOciOpsiAwrHubSources#status}
  */
  readonly status?: string[];
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/opsi_awr_hub_sources#filter DataOciOpsiAwrHubSources#filter}
  */
  readonly filter?: DataOciOpsiAwrHubSourcesFilter[] | cdktf.IResolvable;
}
export interface DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItems {
}

export function dataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsToTerraform(struct?: DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsToHclTerraform(struct?: DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // associated_opsi_id - computed: true, optional: false, required: false
  public get associatedOpsiId() {
    return this.getStringAttribute('associated_opsi_id');
  }

  // associated_resource_id - computed: true, optional: false, required: false
  public get associatedResourceId() {
    return this.getStringAttribute('associated_resource_id');
  }

  // awr_hub_id - computed: true, optional: false, required: false
  public get awrHubId() {
    return this.getStringAttribute('awr_hub_id');
  }

  // awr_hub_opsi_source_id - computed: true, optional: false, required: false
  public get awrHubOpsiSourceId() {
    return this.getStringAttribute('awr_hub_opsi_source_id');
  }

  // awr_source_database_id - computed: true, optional: false, required: false
  public get awrSourceDatabaseId() {
    return this.getStringAttribute('awr_source_database_id');
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

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // hours_since_last_import - computed: true, optional: false, required: false
  public get hoursSinceLastImport() {
    return this.getNumberAttribute('hours_since_last_import');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_registered_with_awr_hub - computed: true, optional: false, required: false
  public get isRegisteredWithAwrHub() {
    return this.getBooleanAttribute('is_registered_with_awr_hub');
  }

  // max_snapshot_identifier - computed: true, optional: false, required: false
  public get maxSnapshotIdentifier() {
    return this.getNumberAttribute('max_snapshot_identifier');
  }

  // min_snapshot_identifier - computed: true, optional: false, required: false
  public get minSnapshotIdentifier() {
    return this.getNumberAttribute('min_snapshot_identifier');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // source_mail_box_url - computed: true, optional: false, required: false
  public get sourceMailBoxUrl() {
    return this.getStringAttribute('source_mail_box_url');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // time_first_snapshot_generated - computed: true, optional: false, required: false
  public get timeFirstSnapshotGenerated() {
    return this.getStringAttribute('time_first_snapshot_generated');
  }

  // time_last_snapshot_generated - computed: true, optional: false, required: false
  public get timeLastSnapshotGenerated() {
    return this.getStringAttribute('time_last_snapshot_generated');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference {
    return new DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollection {
}

export function dataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionToTerraform(struct?: DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionToHclTerraform(struct?: DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference {
    return new DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOpsiAwrHubSourcesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/opsi_awr_hub_sources#name DataOciOpsiAwrHubSources#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/opsi_awr_hub_sources#regex DataOciOpsiAwrHubSources#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/opsi_awr_hub_sources#values DataOciOpsiAwrHubSources#values}
  */
  readonly values: string[];
}

export function dataOciOpsiAwrHubSourcesFilterToTerraform(struct?: DataOciOpsiAwrHubSourcesFilter | cdktf.IResolvable): any {
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


export function dataOciOpsiAwrHubSourcesFilterToHclTerraform(struct?: DataOciOpsiAwrHubSourcesFilter | cdktf.IResolvable): any {
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

export class DataOciOpsiAwrHubSourcesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpsiAwrHubSourcesFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciOpsiAwrHubSourcesFilter | cdktf.IResolvable | undefined) {
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

export class DataOciOpsiAwrHubSourcesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciOpsiAwrHubSourcesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciOpsiAwrHubSourcesFilterOutputReference {
    return new DataOciOpsiAwrHubSourcesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/opsi_awr_hub_sources oci_opsi_awr_hub_sources}
*/
export class DataOciOpsiAwrHubSources extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_opsi_awr_hub_sources";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOpsiAwrHubSources resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOpsiAwrHubSources to import
  * @param importFromId The id of the existing DataOciOpsiAwrHubSources that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/opsi_awr_hub_sources#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOpsiAwrHubSources to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_opsi_awr_hub_sources", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/opsi_awr_hub_sources oci_opsi_awr_hub_sources} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOpsiAwrHubSourcesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOpsiAwrHubSourcesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_opsi_awr_hub_sources',
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
    this._awrHubId = config.awrHubId;
    this._awrHubSourceId = config.awrHubSourceId;
    this._compartmentId = config.compartmentId;
    this._id = config.id;
    this._name = config.name;
    this._sourceType = config.sourceType;
    this._state = config.state;
    this._status = config.status;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // awr_hub_id - computed: false, optional: false, required: true
  private _awrHubId?: string; 
  public get awrHubId() {
    return this.getStringAttribute('awr_hub_id');
  }
  public set awrHubId(value: string) {
    this._awrHubId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awrHubIdInput() {
    return this._awrHubId;
  }

  // awr_hub_source_id - computed: false, optional: true, required: false
  private _awrHubSourceId?: string; 
  public get awrHubSourceId() {
    return this.getStringAttribute('awr_hub_source_id');
  }
  public set awrHubSourceId(value: string) {
    this._awrHubSourceId = value;
  }
  public resetAwrHubSourceId() {
    this._awrHubSourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awrHubSourceIdInput() {
    return this._awrHubSourceId;
  }

  // awr_hub_source_summary_collection - computed: true, optional: false, required: false
  private _awrHubSourceSummaryCollection = new DataOciOpsiAwrHubSourcesAwrHubSourceSummaryCollectionList(this, "awr_hub_source_summary_collection", false);
  public get awrHubSourceSummaryCollection() {
    return this._awrHubSourceSummaryCollection;
  }

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

  // source_type - computed: false, optional: true, required: false
  private _sourceType?: string[]; 
  public get sourceType() {
    return this.getListAttribute('source_type');
  }
  public set sourceType(value: string[]) {
    this._sourceType = value;
  }
  public resetSourceType() {
    this._sourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string[]; 
  public get state() {
    return this.getListAttribute('state');
  }
  public set state(value: string[]) {
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
  private _status?: string[]; 
  public get status() {
    return this.getListAttribute('status');
  }
  public set status(value: string[]) {
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
  private _filter = new DataOciOpsiAwrHubSourcesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciOpsiAwrHubSourcesFilter[] | cdktf.IResolvable) {
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
      awr_hub_id: cdktf.stringToTerraform(this._awrHubId),
      awr_hub_source_id: cdktf.stringToTerraform(this._awrHubSourceId),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      source_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sourceType),
      state: cdktf.listMapper(cdktf.stringToTerraform, false)(this._state),
      status: cdktf.listMapper(cdktf.stringToTerraform, false)(this._status),
      filter: cdktf.listMapper(dataOciOpsiAwrHubSourcesFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      awr_hub_id: {
        value: cdktf.stringToHclTerraform(this._awrHubId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      awr_hub_source_id: {
        value: cdktf.stringToHclTerraform(this._awrHubSourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      source_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sourceType),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      state: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._state),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      status: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._status),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciOpsiAwrHubSourcesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciOpsiAwrHubSourcesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
