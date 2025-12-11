// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/opsi_awr_hub_awr_snapshots
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOpsiAwrHubAwrSnapshotsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/opsi_awr_hub_awr_snapshots#awr_hub_id DataOciOpsiAwrHubAwrSnapshots#awr_hub_id}
  */
  readonly awrHubId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/opsi_awr_hub_awr_snapshots#awr_source_database_identifier DataOciOpsiAwrHubAwrSnapshots#awr_source_database_identifier}
  */
  readonly awrSourceDatabaseIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/opsi_awr_hub_awr_snapshots#id DataOciOpsiAwrHubAwrSnapshots#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/opsi_awr_hub_awr_snapshots#time_greater_than_or_equal_to DataOciOpsiAwrHubAwrSnapshots#time_greater_than_or_equal_to}
  */
  readonly timeGreaterThanOrEqualTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/opsi_awr_hub_awr_snapshots#time_less_than_or_equal_to DataOciOpsiAwrHubAwrSnapshots#time_less_than_or_equal_to}
  */
  readonly timeLessThanOrEqualTo?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/opsi_awr_hub_awr_snapshots#filter DataOciOpsiAwrHubAwrSnapshots#filter}
  */
  readonly filter?: DataOciOpsiAwrHubAwrSnapshotsFilter[] | cdktf.IResolvable;
}
export interface DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItems {
}

export function dataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsToTerraform(struct?: DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsToHclTerraform(struct?: DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // awr_source_database_id - computed: true, optional: false, required: false
  public get awrSourceDatabaseId() {
    return this.getStringAttribute('awr_source_database_id');
  }

  // error_count - computed: true, optional: false, required: false
  public get errorCount() {
    return this.getStringAttribute('error_count');
  }

  // instance_number - computed: true, optional: false, required: false
  public get instanceNumber() {
    return this.getNumberAttribute('instance_number');
  }

  // snapshot_identifier - computed: true, optional: false, required: false
  public get snapshotIdentifier() {
    return this.getNumberAttribute('snapshot_identifier');
  }

  // time_db_startup - computed: true, optional: false, required: false
  public get timeDbStartup() {
    return this.getStringAttribute('time_db_startup');
  }

  // time_snapshot_begin - computed: true, optional: false, required: false
  public get timeSnapshotBegin() {
    return this.getStringAttribute('time_snapshot_begin');
  }

  // time_snapshot_end - computed: true, optional: false, required: false
  public get timeSnapshotEnd() {
    return this.getStringAttribute('time_snapshot_end');
  }
}

export class DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference {
    return new DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItems {
}

export function dataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsToTerraform(struct?: DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsToHclTerraform(struct?: DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference {
    return new DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollection {
}

export function dataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionToTerraform(struct?: DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionToHclTerraform(struct?: DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference {
    return new DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOpsiAwrHubAwrSnapshotsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/opsi_awr_hub_awr_snapshots#name DataOciOpsiAwrHubAwrSnapshots#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/opsi_awr_hub_awr_snapshots#regex DataOciOpsiAwrHubAwrSnapshots#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/opsi_awr_hub_awr_snapshots#values DataOciOpsiAwrHubAwrSnapshots#values}
  */
  readonly values: string[];
}

export function dataOciOpsiAwrHubAwrSnapshotsFilterToTerraform(struct?: DataOciOpsiAwrHubAwrSnapshotsFilter | cdktf.IResolvable): any {
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


export function dataOciOpsiAwrHubAwrSnapshotsFilterToHclTerraform(struct?: DataOciOpsiAwrHubAwrSnapshotsFilter | cdktf.IResolvable): any {
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

export class DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpsiAwrHubAwrSnapshotsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciOpsiAwrHubAwrSnapshotsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciOpsiAwrHubAwrSnapshotsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciOpsiAwrHubAwrSnapshotsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference {
    return new DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/opsi_awr_hub_awr_snapshots oci_opsi_awr_hub_awr_snapshots}
*/
export class DataOciOpsiAwrHubAwrSnapshots extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_opsi_awr_hub_awr_snapshots";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOpsiAwrHubAwrSnapshots resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOpsiAwrHubAwrSnapshots to import
  * @param importFromId The id of the existing DataOciOpsiAwrHubAwrSnapshots that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/opsi_awr_hub_awr_snapshots#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOpsiAwrHubAwrSnapshots to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_opsi_awr_hub_awr_snapshots", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/opsi_awr_hub_awr_snapshots oci_opsi_awr_hub_awr_snapshots} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOpsiAwrHubAwrSnapshotsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOpsiAwrHubAwrSnapshotsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_opsi_awr_hub_awr_snapshots',
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
    this._awrHubId = config.awrHubId;
    this._awrSourceDatabaseIdentifier = config.awrSourceDatabaseIdentifier;
    this._id = config.id;
    this._timeGreaterThanOrEqualTo = config.timeGreaterThanOrEqualTo;
    this._timeLessThanOrEqualTo = config.timeLessThanOrEqualTo;
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

  // awr_snapshot_collection - computed: true, optional: false, required: false
  private _awrSnapshotCollection = new DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList(this, "awr_snapshot_collection", false);
  public get awrSnapshotCollection() {
    return this._awrSnapshotCollection;
  }

  // awr_source_database_identifier - computed: false, optional: false, required: true
  private _awrSourceDatabaseIdentifier?: string; 
  public get awrSourceDatabaseIdentifier() {
    return this.getStringAttribute('awr_source_database_identifier');
  }
  public set awrSourceDatabaseIdentifier(value: string) {
    this._awrSourceDatabaseIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awrSourceDatabaseIdentifierInput() {
    return this._awrSourceDatabaseIdentifier;
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

  // time_greater_than_or_equal_to - computed: false, optional: true, required: false
  private _timeGreaterThanOrEqualTo?: string; 
  public get timeGreaterThanOrEqualTo() {
    return this.getStringAttribute('time_greater_than_or_equal_to');
  }
  public set timeGreaterThanOrEqualTo(value: string) {
    this._timeGreaterThanOrEqualTo = value;
  }
  public resetTimeGreaterThanOrEqualTo() {
    this._timeGreaterThanOrEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeGreaterThanOrEqualToInput() {
    return this._timeGreaterThanOrEqualTo;
  }

  // time_less_than_or_equal_to - computed: false, optional: true, required: false
  private _timeLessThanOrEqualTo?: string; 
  public get timeLessThanOrEqualTo() {
    return this.getStringAttribute('time_less_than_or_equal_to');
  }
  public set timeLessThanOrEqualTo(value: string) {
    this._timeLessThanOrEqualTo = value;
  }
  public resetTimeLessThanOrEqualTo() {
    this._timeLessThanOrEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeLessThanOrEqualToInput() {
    return this._timeLessThanOrEqualTo;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciOpsiAwrHubAwrSnapshotsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciOpsiAwrHubAwrSnapshotsFilter[] | cdktf.IResolvable) {
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
      awr_source_database_identifier: cdktf.stringToTerraform(this._awrSourceDatabaseIdentifier),
      id: cdktf.stringToTerraform(this._id),
      time_greater_than_or_equal_to: cdktf.stringToTerraform(this._timeGreaterThanOrEqualTo),
      time_less_than_or_equal_to: cdktf.stringToTerraform(this._timeLessThanOrEqualTo),
      filter: cdktf.listMapper(dataOciOpsiAwrHubAwrSnapshotsFilterToTerraform, true)(this._filter.internalValue),
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
      awr_source_database_identifier: {
        value: cdktf.stringToHclTerraform(this._awrSourceDatabaseIdentifier),
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
      time_greater_than_or_equal_to: {
        value: cdktf.stringToHclTerraform(this._timeGreaterThanOrEqualTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_less_than_or_equal_to: {
        value: cdktf.stringToHclTerraform(this._timeLessThanOrEqualTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciOpsiAwrHubAwrSnapshotsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciOpsiAwrHubAwrSnapshotsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
