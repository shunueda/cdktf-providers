// https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/data-sources/storage_box
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHcloudStorageBoxConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the Storage Box.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/data-sources/storage_box#id DataHcloudStorageBox#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Name of the Storage Box.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/data-sources/storage_box#name DataHcloudStorageBox#name}
  */
  readonly name?: string;
  /**
  * Filter results using a [Label Selector](https://docs.hetzner.cloud/reference/hetzner#label-selector).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/data-sources/storage_box#with_selector DataHcloudStorageBox#with_selector}
  */
  readonly withSelector?: string;
}
export interface DataHcloudStorageBoxAccessSettings {
}

export function dataHcloudStorageBoxAccessSettingsToTerraform(struct?: DataHcloudStorageBoxAccessSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHcloudStorageBoxAccessSettingsToHclTerraform(struct?: DataHcloudStorageBoxAccessSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHcloudStorageBoxAccessSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataHcloudStorageBoxAccessSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHcloudStorageBoxAccessSettings | undefined) {
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
export interface DataHcloudStorageBoxSnapshotPlan {
}

export function dataHcloudStorageBoxSnapshotPlanToTerraform(struct?: DataHcloudStorageBoxSnapshotPlan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHcloudStorageBoxSnapshotPlanToHclTerraform(struct?: DataHcloudStorageBoxSnapshotPlan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHcloudStorageBoxSnapshotPlanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataHcloudStorageBoxSnapshotPlan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHcloudStorageBoxSnapshotPlan | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/data-sources/storage_box hcloud_storage_box}
*/
export class DataHcloudStorageBox extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcloud_storage_box";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHcloudStorageBox resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHcloudStorageBox to import
  * @param importFromId The id of the existing DataHcloudStorageBox that should be imported. Refer to the {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/data-sources/storage_box#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHcloudStorageBox to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcloud_storage_box", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/data-sources/storage_box hcloud_storage_box} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHcloudStorageBoxConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataHcloudStorageBoxConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'hcloud_storage_box',
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
    this._id = config.id;
    this._name = config.name;
    this._withSelector = config.withSelector;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_settings - computed: true, optional: false, required: false
  private _accessSettings = new DataHcloudStorageBoxAccessSettingsOutputReference(this, "access_settings");
  public get accessSettings() {
    return this._accessSettings;
  }

  // delete_protection - computed: true, optional: false, required: false
  public get deleteProtection() {
    return this.getBooleanAttribute('delete_protection');
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // server - computed: true, optional: false, required: false
  public get server() {
    return this.getStringAttribute('server');
  }

  // snapshot_plan - computed: true, optional: false, required: false
  private _snapshotPlan = new DataHcloudStorageBoxSnapshotPlanOutputReference(this, "snapshot_plan");
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
      id: cdktf.numberToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      with_selector: cdktf.stringToTerraform(this._withSelector),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
