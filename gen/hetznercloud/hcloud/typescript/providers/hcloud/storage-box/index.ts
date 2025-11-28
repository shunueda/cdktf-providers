// https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/storage_box
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageBoxConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access settings of the Storage Box.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/storage_box#access_settings StorageBox#access_settings}
  */
  readonly accessSettings?: StorageBoxAccessSettings;
  /**
  * Prevent the Storage Box from being accidentally deleted outside of Terraform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/storage_box#delete_protection StorageBox#delete_protection}
  */
  readonly deleteProtection?: boolean | cdktf.IResolvable;
  /**
  * User-defined [labels](https://docs.hetzner.cloud/reference/cloud#labels) (key-value pairs) for the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/storage_box#labels StorageBox#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the Location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/storage_box#location StorageBox#location}
  */
  readonly location: string;
  /**
  * Name of the Storage Box.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/storage_box#name StorageBox#name}
  */
  readonly name: string;
  /**
  * Password of the Storage Box. For more details, see the [Storage Boxes password policy](https://docs.hetzner.cloud/reference/hetzner#storage-boxes-password-policy).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/storage_box#password StorageBox#password}
  */
  readonly password: string;
  /**
  * Details of the active snapshot plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/storage_box#snapshot_plan StorageBox#snapshot_plan}
  */
  readonly snapshotPlan?: StorageBoxSnapshotPlan;
  /**
  * SSH public keys in OpenSSH format to inject into the Storage Box. Any changes to this attribute are ignored, as it is not possible to update the SSH Keys through the API, please add the SSH Keys manually on the Storage Box if you need to change them.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/storage_box#ssh_keys StorageBox#ssh_keys}
  */
  readonly sshKeys?: string[];
  /**
  * Name of the Storage Box Type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/storage_box#storage_box_type StorageBox#storage_box_type}
  */
  readonly storageBoxType: string;
}
export interface StorageBoxAccessSettings {
  /**
  * Whether access from outside the Hetzner network is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/storage_box#reachable_externally StorageBox#reachable_externally}
  */
  readonly reachableExternally?: boolean | cdktf.IResolvable;
  /**
  * Whether the Samba subsystem is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/storage_box#samba_enabled StorageBox#samba_enabled}
  */
  readonly sambaEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether the SSH subsystem is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/storage_box#ssh_enabled StorageBox#ssh_enabled}
  */
  readonly sshEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether the WebDAV subsystem is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/storage_box#webdav_enabled StorageBox#webdav_enabled}
  */
  readonly webdavEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether the ZFS snapshot folder is visible.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/storage_box#zfs_enabled StorageBox#zfs_enabled}
  */
  readonly zfsEnabled?: boolean | cdktf.IResolvable;
}

export function storageBoxAccessSettingsToTerraform(struct?: StorageBoxAccessSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reachable_externally: cdktf.booleanToTerraform(struct!.reachableExternally),
    samba_enabled: cdktf.booleanToTerraform(struct!.sambaEnabled),
    ssh_enabled: cdktf.booleanToTerraform(struct!.sshEnabled),
    webdav_enabled: cdktf.booleanToTerraform(struct!.webdavEnabled),
    zfs_enabled: cdktf.booleanToTerraform(struct!.zfsEnabled),
  }
}


export function storageBoxAccessSettingsToHclTerraform(struct?: StorageBoxAccessSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reachable_externally: {
      value: cdktf.booleanToHclTerraform(struct!.reachableExternally),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    samba_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.sambaEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssh_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.sshEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    webdav_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.webdavEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    zfs_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.zfsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageBoxAccessSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StorageBoxAccessSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reachableExternally !== undefined) {
      hasAnyValues = true;
      internalValueResult.reachableExternally = this._reachableExternally;
    }
    if (this._sambaEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sambaEnabled = this._sambaEnabled;
    }
    if (this._sshEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshEnabled = this._sshEnabled;
    }
    if (this._webdavEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.webdavEnabled = this._webdavEnabled;
    }
    if (this._zfsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.zfsEnabled = this._zfsEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageBoxAccessSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reachableExternally = undefined;
      this._sambaEnabled = undefined;
      this._sshEnabled = undefined;
      this._webdavEnabled = undefined;
      this._zfsEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._reachableExternally = value.reachableExternally;
      this._sambaEnabled = value.sambaEnabled;
      this._sshEnabled = value.sshEnabled;
      this._webdavEnabled = value.webdavEnabled;
      this._zfsEnabled = value.zfsEnabled;
    }
  }

  // reachable_externally - computed: true, optional: true, required: false
  private _reachableExternally?: boolean | cdktf.IResolvable; 
  public get reachableExternally() {
    return this.getBooleanAttribute('reachable_externally');
  }
  public set reachableExternally(value: boolean | cdktf.IResolvable) {
    this._reachableExternally = value;
  }
  public resetReachableExternally() {
    this._reachableExternally = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reachableExternallyInput() {
    return this._reachableExternally;
  }

  // samba_enabled - computed: true, optional: true, required: false
  private _sambaEnabled?: boolean | cdktf.IResolvable; 
  public get sambaEnabled() {
    return this.getBooleanAttribute('samba_enabled');
  }
  public set sambaEnabled(value: boolean | cdktf.IResolvable) {
    this._sambaEnabled = value;
  }
  public resetSambaEnabled() {
    this._sambaEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sambaEnabledInput() {
    return this._sambaEnabled;
  }

  // ssh_enabled - computed: true, optional: true, required: false
  private _sshEnabled?: boolean | cdktf.IResolvable; 
  public get sshEnabled() {
    return this.getBooleanAttribute('ssh_enabled');
  }
  public set sshEnabled(value: boolean | cdktf.IResolvable) {
    this._sshEnabled = value;
  }
  public resetSshEnabled() {
    this._sshEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshEnabledInput() {
    return this._sshEnabled;
  }

  // webdav_enabled - computed: true, optional: true, required: false
  private _webdavEnabled?: boolean | cdktf.IResolvable; 
  public get webdavEnabled() {
    return this.getBooleanAttribute('webdav_enabled');
  }
  public set webdavEnabled(value: boolean | cdktf.IResolvable) {
    this._webdavEnabled = value;
  }
  public resetWebdavEnabled() {
    this._webdavEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webdavEnabledInput() {
    return this._webdavEnabled;
  }

  // zfs_enabled - computed: true, optional: true, required: false
  private _zfsEnabled?: boolean | cdktf.IResolvable; 
  public get zfsEnabled() {
    return this.getBooleanAttribute('zfs_enabled');
  }
  public set zfsEnabled(value: boolean | cdktf.IResolvable) {
    this._zfsEnabled = value;
  }
  public resetZfsEnabled() {
    this._zfsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zfsEnabledInput() {
    return this._zfsEnabled;
  }
}
export interface StorageBoxSnapshotPlan {
  /**
  * Day of the month when the Snapshot Plan is executed. Null means every day.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/storage_box#day_of_month StorageBox#day_of_month}
  */
  readonly dayOfMonth?: number;
  /**
  * Day of the week when the Snapshot Plan is executed. Starts at 0 for Sunday til 6 for Saturday. Note that this differs from the API, which uses 1 (Monday) through 7 (Sunday). Null means every day.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/storage_box#day_of_week StorageBox#day_of_week}
  */
  readonly dayOfWeek?: number;
  /**
  * Hour when the Snapshot Plan is executed (UTC).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/storage_box#hour StorageBox#hour}
  */
  readonly hour: number;
  /**
  * Maximum amount of Snapshots that will be created by this Snapshot Plan. Older Snapshots will be deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/storage_box#max_snapshots StorageBox#max_snapshots}
  */
  readonly maxSnapshots: number;
  /**
  * Minute when the Snapshot Plan is executed (UTC).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/storage_box#minute StorageBox#minute}
  */
  readonly minute: number;
}

export function storageBoxSnapshotPlanToTerraform(struct?: StorageBoxSnapshotPlan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_month: cdktf.numberToTerraform(struct!.dayOfMonth),
    day_of_week: cdktf.numberToTerraform(struct!.dayOfWeek),
    hour: cdktf.numberToTerraform(struct!.hour),
    max_snapshots: cdktf.numberToTerraform(struct!.maxSnapshots),
    minute: cdktf.numberToTerraform(struct!.minute),
  }
}


export function storageBoxSnapshotPlanToHclTerraform(struct?: StorageBoxSnapshotPlan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_month: {
      value: cdktf.numberToHclTerraform(struct!.dayOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    day_of_week: {
      value: cdktf.numberToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hour: {
      value: cdktf.numberToHclTerraform(struct!.hour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_snapshots: {
      value: cdktf.numberToHclTerraform(struct!.maxSnapshots),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minute: {
      value: cdktf.numberToHclTerraform(struct!.minute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageBoxSnapshotPlanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StorageBoxSnapshotPlan | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfMonth = this._dayOfMonth;
    }
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._hour !== undefined) {
      hasAnyValues = true;
      internalValueResult.hour = this._hour;
    }
    if (this._maxSnapshots !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSnapshots = this._maxSnapshots;
    }
    if (this._minute !== undefined) {
      hasAnyValues = true;
      internalValueResult.minute = this._minute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageBoxSnapshotPlan | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dayOfMonth = undefined;
      this._dayOfWeek = undefined;
      this._hour = undefined;
      this._maxSnapshots = undefined;
      this._minute = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dayOfMonth = value.dayOfMonth;
      this._dayOfWeek = value.dayOfWeek;
      this._hour = value.hour;
      this._maxSnapshots = value.maxSnapshots;
      this._minute = value.minute;
    }
  }

  // day_of_month - computed: false, optional: true, required: false
  private _dayOfMonth?: number; 
  public get dayOfMonth() {
    return this.getNumberAttribute('day_of_month');
  }
  public set dayOfMonth(value: number) {
    this._dayOfMonth = value;
  }
  public resetDayOfMonth() {
    this._dayOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfMonthInput() {
    return this._dayOfMonth;
  }

  // day_of_week - computed: false, optional: true, required: false
  private _dayOfWeek?: number; 
  public get dayOfWeek() {
    return this.getNumberAttribute('day_of_week');
  }
  public set dayOfWeek(value: number) {
    this._dayOfWeek = value;
  }
  public resetDayOfWeek() {
    this._dayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // hour - computed: false, optional: false, required: true
  private _hour?: number; 
  public get hour() {
    return this.getNumberAttribute('hour');
  }
  public set hour(value: number) {
    this._hour = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hourInput() {
    return this._hour;
  }

  // max_snapshots - computed: false, optional: false, required: true
  private _maxSnapshots?: number; 
  public get maxSnapshots() {
    return this.getNumberAttribute('max_snapshots');
  }
  public set maxSnapshots(value: number) {
    this._maxSnapshots = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSnapshotsInput() {
    return this._maxSnapshots;
  }

  // minute - computed: false, optional: false, required: true
  private _minute?: number; 
  public get minute() {
    return this.getNumberAttribute('minute');
  }
  public set minute(value: number) {
    this._minute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minuteInput() {
    return this._minute;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/storage_box hcloud_storage_box}
*/
export class StorageBox extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcloud_storage_box";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StorageBox resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StorageBox to import
  * @param importFromId The id of the existing StorageBox that should be imported. Refer to the {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/storage_box#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StorageBox to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcloud_storage_box", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/resources/storage_box hcloud_storage_box} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageBoxConfig
  */
  public constructor(scope: Construct, id: string, config: StorageBoxConfig) {
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
    this._accessSettings.internalValue = config.accessSettings;
    this._deleteProtection = config.deleteProtection;
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._password = config.password;
    this._snapshotPlan.internalValue = config.snapshotPlan;
    this._sshKeys = config.sshKeys;
    this._storageBoxType = config.storageBoxType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_settings - computed: true, optional: true, required: false
  private _accessSettings = new StorageBoxAccessSettingsOutputReference(this, "access_settings");
  public get accessSettings() {
    return this._accessSettings;
  }
  public putAccessSettings(value: StorageBoxAccessSettings) {
    this._accessSettings.internalValue = value;
  }
  public resetAccessSettings() {
    this._accessSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessSettingsInput() {
    return this._accessSettings.internalValue;
  }

  // delete_protection - computed: true, optional: true, required: false
  private _deleteProtection?: boolean | cdktf.IResolvable; 
  public get deleteProtection() {
    return this.getBooleanAttribute('delete_protection');
  }
  public set deleteProtection(value: boolean | cdktf.IResolvable) {
    this._deleteProtection = value;
  }
  public resetDeleteProtection() {
    this._deleteProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteProtectionInput() {
    return this._deleteProtection;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // labels - computed: true, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // server - computed: true, optional: false, required: false
  public get server() {
    return this.getStringAttribute('server');
  }

  // snapshot_plan - computed: false, optional: true, required: false
  private _snapshotPlan = new StorageBoxSnapshotPlanOutputReference(this, "snapshot_plan");
  public get snapshotPlan() {
    return this._snapshotPlan;
  }
  public putSnapshotPlan(value: StorageBoxSnapshotPlan) {
    this._snapshotPlan.internalValue = value;
  }
  public resetSnapshotPlan() {
    this._snapshotPlan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotPlanInput() {
    return this._snapshotPlan.internalValue;
  }

  // ssh_keys - computed: true, optional: true, required: false
  private _sshKeys?: string[]; 
  public get sshKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('ssh_keys'));
  }
  public set sshKeys(value: string[]) {
    this._sshKeys = value;
  }
  public resetSshKeys() {
    this._sshKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeysInput() {
    return this._sshKeys;
  }

  // storage_box_type - computed: false, optional: false, required: true
  private _storageBoxType?: string; 
  public get storageBoxType() {
    return this.getStringAttribute('storage_box_type');
  }
  public set storageBoxType(value: string) {
    this._storageBoxType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageBoxTypeInput() {
    return this._storageBoxType;
  }

  // system - computed: true, optional: false, required: false
  public get systemAttribute() {
    return this.getStringAttribute('system');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_settings: storageBoxAccessSettingsToTerraform(this._accessSettings.internalValue),
      delete_protection: cdktf.booleanToTerraform(this._deleteProtection),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      snapshot_plan: storageBoxSnapshotPlanToTerraform(this._snapshotPlan.internalValue),
      ssh_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sshKeys),
      storage_box_type: cdktf.stringToTerraform(this._storageBoxType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_settings: {
        value: storageBoxAccessSettingsToHclTerraform(this._accessSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StorageBoxAccessSettings",
      },
      delete_protection: {
        value: cdktf.booleanToHclTerraform(this._deleteProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snapshot_plan: {
        value: storageBoxSnapshotPlanToHclTerraform(this._snapshotPlan.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StorageBoxSnapshotPlan",
      },
      ssh_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sshKeys),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      storage_box_type: {
        value: cdktf.stringToHclTerraform(this._storageBoxType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
