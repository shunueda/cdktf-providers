// https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/data-sources/snapshots
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOutscaleSnapshotsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/data-sources/snapshots#account_id DataOutscaleSnapshots#account_id}
  */
  readonly accountId?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/data-sources/snapshots#id DataOutscaleSnapshots#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/data-sources/snapshots#permission_to_create_volume DataOutscaleSnapshots#permission_to_create_volume}
  */
  readonly permissionToCreateVolume?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/data-sources/snapshots#snapshot_id DataOutscaleSnapshots#snapshot_id}
  */
  readonly snapshotId?: string[];
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/data-sources/snapshots#filter DataOutscaleSnapshots#filter}
  */
  readonly filter?: DataOutscaleSnapshotsFilter[] | cdktf.IResolvable;
}
export interface DataOutscaleSnapshotsSnapshotsPermissionsToCreateVolume {
}

export function dataOutscaleSnapshotsSnapshotsPermissionsToCreateVolumeToTerraform(struct?: DataOutscaleSnapshotsSnapshotsPermissionsToCreateVolume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOutscaleSnapshotsSnapshotsPermissionsToCreateVolumeToHclTerraform(struct?: DataOutscaleSnapshotsSnapshotsPermissionsToCreateVolume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOutscaleSnapshotsSnapshotsPermissionsToCreateVolumeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOutscaleSnapshotsSnapshotsPermissionsToCreateVolume | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOutscaleSnapshotsSnapshotsPermissionsToCreateVolume | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_ids - computed: true, optional: false, required: false
  public get accountIds() {
    return this.getListAttribute('account_ids');
  }

  // global_permission - computed: true, optional: false, required: false
  public get globalPermission() {
    return this.getBooleanAttribute('global_permission');
  }
}

export class DataOutscaleSnapshotsSnapshotsPermissionsToCreateVolumeList extends cdktf.ComplexList {

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
  public get(index: number): DataOutscaleSnapshotsSnapshotsPermissionsToCreateVolumeOutputReference {
    return new DataOutscaleSnapshotsSnapshotsPermissionsToCreateVolumeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOutscaleSnapshotsSnapshotsTags {
}

export function dataOutscaleSnapshotsSnapshotsTagsToTerraform(struct?: DataOutscaleSnapshotsSnapshotsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOutscaleSnapshotsSnapshotsTagsToHclTerraform(struct?: DataOutscaleSnapshotsSnapshotsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOutscaleSnapshotsSnapshotsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOutscaleSnapshotsSnapshotsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOutscaleSnapshotsSnapshotsTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOutscaleSnapshotsSnapshotsTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataOutscaleSnapshotsSnapshotsTagsOutputReference {
    return new DataOutscaleSnapshotsSnapshotsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOutscaleSnapshotsSnapshots {
}

export function dataOutscaleSnapshotsSnapshotsToTerraform(struct?: DataOutscaleSnapshotsSnapshots): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOutscaleSnapshotsSnapshotsToHclTerraform(struct?: DataOutscaleSnapshotsSnapshots): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOutscaleSnapshotsSnapshotsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOutscaleSnapshotsSnapshots | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOutscaleSnapshotsSnapshots | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_alias - computed: true, optional: false, required: false
  public get accountAlias() {
    return this.getStringAttribute('account_alias');
  }

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // permissions_to_create_volume - computed: true, optional: false, required: false
  private _permissionsToCreateVolume = new DataOutscaleSnapshotsSnapshotsPermissionsToCreateVolumeList(this, "permissions_to_create_volume", false);
  public get permissionsToCreateVolume() {
    return this._permissionsToCreateVolume;
  }

  // progress - computed: true, optional: false, required: false
  public get progress() {
    return this.getNumberAttribute('progress');
  }

  // snapshot_id - computed: true, optional: false, required: false
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataOutscaleSnapshotsSnapshotsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // volume_id - computed: true, optional: false, required: false
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }

  // volume_size - computed: true, optional: false, required: false
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }
}

export class DataOutscaleSnapshotsSnapshotsList extends cdktf.ComplexList {

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
  public get(index: number): DataOutscaleSnapshotsSnapshotsOutputReference {
    return new DataOutscaleSnapshotsSnapshotsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOutscaleSnapshotsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/data-sources/snapshots#name DataOutscaleSnapshots#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/data-sources/snapshots#values DataOutscaleSnapshots#values}
  */
  readonly values: string[];
}

export function dataOutscaleSnapshotsFilterToTerraform(struct?: DataOutscaleSnapshotsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOutscaleSnapshotsFilterToHclTerraform(struct?: DataOutscaleSnapshotsFilter | cdktf.IResolvable): any {
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

export class DataOutscaleSnapshotsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOutscaleSnapshotsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOutscaleSnapshotsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
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

export class DataOutscaleSnapshotsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOutscaleSnapshotsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOutscaleSnapshotsFilterOutputReference {
    return new DataOutscaleSnapshotsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/data-sources/snapshots outscale_snapshots}
*/
export class DataOutscaleSnapshots extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "outscale_snapshots";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOutscaleSnapshots resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOutscaleSnapshots to import
  * @param importFromId The id of the existing DataOutscaleSnapshots that should be imported. Refer to the {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/data-sources/snapshots#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOutscaleSnapshots to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "outscale_snapshots", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/data-sources/snapshots outscale_snapshots} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOutscaleSnapshotsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOutscaleSnapshotsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'outscale_snapshots',
      terraformGeneratorMetadata: {
        providerName: 'outscale',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._id = config.id;
    this._permissionToCreateVolume = config.permissionToCreateVolume;
    this._snapshotId = config.snapshotId;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string[]; 
  public get accountId() {
    return this.getListAttribute('account_id');
  }
  public set accountId(value: string[]) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
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

  // permission_to_create_volume - computed: false, optional: true, required: false
  private _permissionToCreateVolume?: string[]; 
  public get permissionToCreateVolume() {
    return this.getListAttribute('permission_to_create_volume');
  }
  public set permissionToCreateVolume(value: string[]) {
    this._permissionToCreateVolume = value;
  }
  public resetPermissionToCreateVolume() {
    this._permissionToCreateVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionToCreateVolumeInput() {
    return this._permissionToCreateVolume;
  }

  // request_id - computed: true, optional: false, required: false
  public get requestId() {
    return this.getStringAttribute('request_id');
  }

  // snapshot_id - computed: false, optional: true, required: false
  private _snapshotId?: string[]; 
  public get snapshotId() {
    return this.getListAttribute('snapshot_id');
  }
  public set snapshotId(value: string[]) {
    this._snapshotId = value;
  }
  public resetSnapshotId() {
    this._snapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdInput() {
    return this._snapshotId;
  }

  // snapshots - computed: true, optional: false, required: false
  private _snapshots = new DataOutscaleSnapshotsSnapshotsList(this, "snapshots", false);
  public get snapshots() {
    return this._snapshots;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOutscaleSnapshotsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOutscaleSnapshotsFilter[] | cdktf.IResolvable) {
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
      account_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._accountId),
      id: cdktf.stringToTerraform(this._id),
      permission_to_create_volume: cdktf.listMapper(cdktf.stringToTerraform, false)(this._permissionToCreateVolume),
      snapshot_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._snapshotId),
      filter: cdktf.listMapper(dataOutscaleSnapshotsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._accountId),
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
      permission_to_create_volume: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._permissionToCreateVolume),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      snapshot_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._snapshotId),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOutscaleSnapshotsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOutscaleSnapshotsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
