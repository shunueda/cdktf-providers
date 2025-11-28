// https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/data-sources/storage_boxes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHcloudStorageBoxesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter results using a [Label Selector](https://docs.hetzner.cloud/reference/cloud#label-selector)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/data-sources/storage_boxes#with_selector DataHcloudStorageBoxes#with_selector}
  */
  readonly withSelector?: string;
}
export interface DataHcloudStorageBoxesStorageBoxesAccessSettings {
}

export function dataHcloudStorageBoxesStorageBoxesAccessSettingsToTerraform(struct?: DataHcloudStorageBoxesStorageBoxesAccessSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHcloudStorageBoxesStorageBoxesAccessSettingsToHclTerraform(struct?: DataHcloudStorageBoxesStorageBoxesAccessSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHcloudStorageBoxesStorageBoxesAccessSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataHcloudStorageBoxesStorageBoxesAccessSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHcloudStorageBoxesStorageBoxesAccessSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // reachable_externally - computed: true, optional: false, required: false
  public get reachableExternally() {
    return this.getBooleanAttribute('reachable_externally');
  }

  // samba_enabled - computed: true, optional: false, required: false
  public get sambaEnabled() {
    return this.getBooleanAttribute('samba_enabled');
  }

  // ssh_enabled - computed: true, optional: false, required: false
  public get sshEnabled() {
    return this.getBooleanAttribute('ssh_enabled');
  }

  // webdav_enabled - computed: true, optional: false, required: false
  public get webdavEnabled() {
    return this.getBooleanAttribute('webdav_enabled');
  }

  // zfs_enabled - computed: true, optional: false, required: false
  public get zfsEnabled() {
    return this.getBooleanAttribute('zfs_enabled');
  }
}
export interface DataHcloudStorageBoxesStorageBoxesSnapshotPlan {
}

export function dataHcloudStorageBoxesStorageBoxesSnapshotPlanToTerraform(struct?: DataHcloudStorageBoxesStorageBoxesSnapshotPlan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHcloudStorageBoxesStorageBoxesSnapshotPlanToHclTerraform(struct?: DataHcloudStorageBoxesStorageBoxesSnapshotPlan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHcloudStorageBoxesStorageBoxesSnapshotPlanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataHcloudStorageBoxesStorageBoxesSnapshotPlan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHcloudStorageBoxesStorageBoxesSnapshotPlan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // day_of_month - computed: true, optional: false, required: false
  public get dayOfMonth() {
    return this.getNumberAttribute('day_of_month');
  }

  // day_of_week - computed: true, optional: false, required: false
  public get dayOfWeek() {
    return this.getNumberAttribute('day_of_week');
  }

  // hour - computed: true, optional: false, required: false
  public get hour() {
    return this.getNumberAttribute('hour');
  }

  // max_snapshots - computed: true, optional: false, required: false
  public get maxSnapshots() {
    return this.getNumberAttribute('max_snapshots');
  }

  // minute - computed: true, optional: false, required: false
  public get minute() {
    return this.getNumberAttribute('minute');
  }
}
export interface DataHcloudStorageBoxesStorageBoxes {
}

export function dataHcloudStorageBoxesStorageBoxesToTerraform(struct?: DataHcloudStorageBoxesStorageBoxes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHcloudStorageBoxesStorageBoxesToHclTerraform(struct?: DataHcloudStorageBoxesStorageBoxes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHcloudStorageBoxesStorageBoxesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHcloudStorageBoxesStorageBoxes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHcloudStorageBoxesStorageBoxes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_settings - computed: true, optional: false, required: false
  private _accessSettings = new DataHcloudStorageBoxesStorageBoxesAccessSettingsOutputReference(this, "access_settings");
  public get accessSettings() {
    return this._accessSettings;
  }

  // delete_protection - computed: true, optional: false, required: false
  public get deleteProtection() {
    return this.getBooleanAttribute('delete_protection');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // server - computed: true, optional: false, required: false
  public get server() {
    return this.getStringAttribute('server');
  }

  // snapshot_plan - computed: true, optional: false, required: false
  private _snapshotPlan = new DataHcloudStorageBoxesStorageBoxesSnapshotPlanOutputReference(this, "snapshot_plan");
  public get snapshotPlan() {
    return this._snapshotPlan;
  }

  // storage_box_type - computed: true, optional: false, required: false
  public get storageBoxType() {
    return this.getStringAttribute('storage_box_type');
  }

  // system - computed: true, optional: false, required: false
  public get systemAttribute() {
    return this.getStringAttribute('system');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataHcloudStorageBoxesStorageBoxesList extends cdktf.ComplexList {

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
  public get(index: number): DataHcloudStorageBoxesStorageBoxesOutputReference {
    return new DataHcloudStorageBoxesStorageBoxesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/data-sources/storage_boxes hcloud_storage_boxes}
*/
export class DataHcloudStorageBoxes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcloud_storage_boxes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHcloudStorageBoxes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHcloudStorageBoxes to import
  * @param importFromId The id of the existing DataHcloudStorageBoxes that should be imported. Refer to the {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/data-sources/storage_boxes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHcloudStorageBoxes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcloud_storage_boxes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/data-sources/storage_boxes hcloud_storage_boxes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHcloudStorageBoxesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataHcloudStorageBoxesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'hcloud_storage_boxes',
      terraformGeneratorMetadata: {
        providerName: 'hcloud',
        providerVersion: '1.57.0',
        providerVersionConstraint: '1.57.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._withSelector = config.withSelector;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // storage_boxes - computed: true, optional: false, required: false
  private _storageBoxes = new DataHcloudStorageBoxesStorageBoxesList(this, "storage_boxes", false);
  public get storageBoxes() {
    return this._storageBoxes;
  }

  // with_selector - computed: false, optional: true, required: false
  private _withSelector?: string; 
  public get withSelector() {
    return this.getStringAttribute('with_selector');
  }
  public set withSelector(value: string) {
    this._withSelector = value;
  }
  public resetWithSelector() {
    this._withSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withSelectorInput() {
    return this._withSelector;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      with_selector: cdktf.stringToTerraform(this._withSelector),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      with_selector: {
        value: cdktf.stringToHclTerraform(this._withSelector),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
