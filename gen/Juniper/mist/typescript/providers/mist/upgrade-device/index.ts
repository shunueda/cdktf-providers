// https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/upgrade_device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UpgradeDeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/upgrade_device#device_id UpgradeDevice#device_id}
  */
  readonly deviceId: string;
  /**
  * For Switches and Gateways only (APs are automatically rebooted). Reboot device immediately after upgrade is completed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/upgrade_device#reboot UpgradeDevice#reboot}
  */
  readonly reboot?: boolean | cdktf.IResolvable;
  /**
  * For Switches and Gateways only and if `reboot`==`true`. Reboot start time in epoch seconds, default is `start_time`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/upgrade_device#reboot_at UpgradeDevice#reboot_at}
  */
  readonly rebootAt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/upgrade_device#site_id UpgradeDevice#site_id}
  */
  readonly siteId: string;
  /**
  * For Junos devices only. Perform recovery snapshot after device is rebooted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/upgrade_device#snapshot UpgradeDevice#snapshot}
  */
  readonly snapshot?: boolean | cdktf.IResolvable;
  /**
  * Firmware download start time in epoch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/upgrade_device#start_time UpgradeDevice#start_time}
  */
  readonly startTime?: number;
  /**
  * if set to `false`, the provider will just trigger the upgrade and not wait for the end of the upgrade process. Default is `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/upgrade_device#sync_upgrade UpgradeDevice#sync_upgrade}
  */
  readonly syncUpgrade?: boolean | cdktf.IResolvable;
  /**
  * if set to `sync_upgrade`==`true`, how long to wait between each refresh of the upgrade status, in seconds. Default is 30, minimum is 15
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/upgrade_device#sync_upgrade_refresh_interval UpgradeDevice#sync_upgrade_refresh_interval}
  */
  readonly syncUpgradeRefreshInterval?: number;
  /**
  * if set to `sync_upgrade`==`true`, how long to wait for the upgrade to start before raising an error, in seconds. Default is 60, minimum is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/upgrade_device#sync_upgrade_start_timeout UpgradeDevice#sync_upgrade_start_timeout}
  */
  readonly syncUpgradeStartTimeout?: number;
  /**
  * if set to `sync_upgrade`==`true`, how long to wait for the upgrade to end before raising an error, in seconds. Default is 1800
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/upgrade_device#sync_upgrade_timeout UpgradeDevice#sync_upgrade_timeout}
  */
  readonly syncUpgradeTimeout?: number;
  /**
  * firmware version to deploy to the device. Use the `mist_device_versions` datasource to get the list of available firmware versions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/upgrade_device#target_version UpgradeDevice#target_version}
  */
  readonly targetVersion: string;
}
export interface UpgradeDeviceAutoUpgradeStat {
}

export function upgradeDeviceAutoUpgradeStatToTerraform(struct?: UpgradeDeviceAutoUpgradeStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function upgradeDeviceAutoUpgradeStatToHclTerraform(struct?: UpgradeDeviceAutoUpgradeStat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UpgradeDeviceAutoUpgradeStatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UpgradeDeviceAutoUpgradeStat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpgradeDeviceAutoUpgradeStat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lastcheck - computed: true, optional: false, required: false
  public get lastcheck() {
    return this.getNumberAttribute('lastcheck');
  }
}
export interface UpgradeDeviceFwupdate {
}

export function upgradeDeviceFwupdateToTerraform(struct?: UpgradeDeviceFwupdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function upgradeDeviceFwupdateToHclTerraform(struct?: UpgradeDeviceFwupdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UpgradeDeviceFwupdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UpgradeDeviceFwupdate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpgradeDeviceFwupdate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // progress - computed: true, optional: false, required: false
  public get progress() {
    return this.getNumberAttribute('progress');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_id - computed: true, optional: false, required: false
  public get statusId() {
    return this.getNumberAttribute('status_id');
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getNumberAttribute('timestamp');
  }

  // will_retry - computed: true, optional: false, required: false
  public get willRetry() {
    return this.getBooleanAttribute('will_retry');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/upgrade_device mist_upgrade_device}
*/
export class UpgradeDevice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mist_upgrade_device";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UpgradeDevice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UpgradeDevice to import
  * @param importFromId The id of the existing UpgradeDevice that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/upgrade_device#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UpgradeDevice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mist_upgrade_device", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/upgrade_device mist_upgrade_device} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UpgradeDeviceConfig
  */
  public constructor(scope: Construct, id: string, config: UpgradeDeviceConfig) {
    super(scope, id, {
      terraformResourceType: 'mist_upgrade_device',
      terraformGeneratorMetadata: {
        providerName: 'mist',
        providerVersion: '0.6.2',
        providerVersionConstraint: '0.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceId = config.deviceId;
    this._reboot = config.reboot;
    this._rebootAt = config.rebootAt;
    this._siteId = config.siteId;
    this._snapshot = config.snapshot;
    this._startTime = config.startTime;
    this._syncUpgrade = config.syncUpgrade;
    this._syncUpgradeRefreshInterval = config.syncUpgradeRefreshInterval;
    this._syncUpgradeStartTimeout = config.syncUpgradeStartTimeout;
    this._syncUpgradeTimeout = config.syncUpgradeTimeout;
    this._targetVersion = config.targetVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_upgrade_stat - computed: true, optional: false, required: false
  private _autoUpgradeStat = new UpgradeDeviceAutoUpgradeStatOutputReference(this, "auto_upgrade_stat");
  public get autoUpgradeStat() {
    return this._autoUpgradeStat;
  }

  // config_timestamp - computed: true, optional: false, required: false
  public get configTimestamp() {
    return this.getNumberAttribute('config_timestamp');
  }

  // config_version - computed: true, optional: false, required: false
  public get configVersion() {
    return this.getNumberAttribute('config_version');
  }

  // device_id - computed: false, optional: false, required: true
  private _deviceId?: string; 
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }
  public set deviceId(value: string) {
    this._deviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
  }

  // device_version - computed: true, optional: false, required: false
  public get deviceVersion() {
    return this.getStringAttribute('device_version');
  }

  // ext_ip - computed: true, optional: false, required: false
  public get extIp() {
    return this.getStringAttribute('ext_ip');
  }

  // fwupdate - computed: true, optional: false, required: false
  private _fwupdate = new UpgradeDeviceFwupdateOutputReference(this, "fwupdate");
  public get fwupdate() {
    return this._fwupdate;
  }

  // reboot - computed: true, optional: true, required: false
  private _reboot?: boolean | cdktf.IResolvable; 
  public get reboot() {
    return this.getBooleanAttribute('reboot');
  }
  public set reboot(value: boolean | cdktf.IResolvable) {
    this._reboot = value;
  }
  public resetReboot() {
    this._reboot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootInput() {
    return this._reboot;
  }

  // reboot_at - computed: false, optional: true, required: false
  private _rebootAt?: number; 
  public get rebootAt() {
    return this.getNumberAttribute('reboot_at');
  }
  public set rebootAt(value: number) {
    this._rebootAt = value;
  }
  public resetRebootAt() {
    this._rebootAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootAtInput() {
    return this._rebootAt;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // snapshot - computed: true, optional: true, required: false
  private _snapshot?: boolean | cdktf.IResolvable; 
  public get snapshot() {
    return this.getBooleanAttribute('snapshot');
  }
  public set snapshot(value: boolean | cdktf.IResolvable) {
    this._snapshot = value;
  }
  public resetSnapshot() {
    this._snapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotInput() {
    return this._snapshot;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: number; 
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
  public set startTime(value: number) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // sync_upgrade - computed: true, optional: true, required: false
  private _syncUpgrade?: boolean | cdktf.IResolvable; 
  public get syncUpgrade() {
    return this.getBooleanAttribute('sync_upgrade');
  }
  public set syncUpgrade(value: boolean | cdktf.IResolvable) {
    this._syncUpgrade = value;
  }
  public resetSyncUpgrade() {
    this._syncUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncUpgradeInput() {
    return this._syncUpgrade;
  }

  // sync_upgrade_refresh_interval - computed: true, optional: true, required: false
  private _syncUpgradeRefreshInterval?: number; 
  public get syncUpgradeRefreshInterval() {
    return this.getNumberAttribute('sync_upgrade_refresh_interval');
  }
  public set syncUpgradeRefreshInterval(value: number) {
    this._syncUpgradeRefreshInterval = value;
  }
  public resetSyncUpgradeRefreshInterval() {
    this._syncUpgradeRefreshInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncUpgradeRefreshIntervalInput() {
    return this._syncUpgradeRefreshInterval;
  }

  // sync_upgrade_start_timeout - computed: true, optional: true, required: false
  private _syncUpgradeStartTimeout?: number; 
  public get syncUpgradeStartTimeout() {
    return this.getNumberAttribute('sync_upgrade_start_timeout');
  }
  public set syncUpgradeStartTimeout(value: number) {
    this._syncUpgradeStartTimeout = value;
  }
  public resetSyncUpgradeStartTimeout() {
    this._syncUpgradeStartTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncUpgradeStartTimeoutInput() {
    return this._syncUpgradeStartTimeout;
  }

  // sync_upgrade_timeout - computed: true, optional: true, required: false
  private _syncUpgradeTimeout?: number; 
  public get syncUpgradeTimeout() {
    return this.getNumberAttribute('sync_upgrade_timeout');
  }
  public set syncUpgradeTimeout(value: number) {
    this._syncUpgradeTimeout = value;
  }
  public resetSyncUpgradeTimeout() {
    this._syncUpgradeTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncUpgradeTimeoutInput() {
    return this._syncUpgradeTimeout;
  }

  // tag_id - computed: true, optional: false, required: false
  public get tagId() {
    return this.getNumberAttribute('tag_id');
  }

  // tag_uuid - computed: true, optional: false, required: false
  public get tagUuid() {
    return this.getStringAttribute('tag_uuid');
  }

  // target_version - computed: false, optional: false, required: true
  private _targetVersion?: string; 
  public get targetVersion() {
    return this.getStringAttribute('target_version');
  }
  public set targetVersion(value: string) {
    this._targetVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetVersionInput() {
    return this._targetVersion;
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getNumberAttribute('timestamp');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_id: cdktf.stringToTerraform(this._deviceId),
      reboot: cdktf.booleanToTerraform(this._reboot),
      reboot_at: cdktf.numberToTerraform(this._rebootAt),
      site_id: cdktf.stringToTerraform(this._siteId),
      snapshot: cdktf.booleanToTerraform(this._snapshot),
      start_time: cdktf.numberToTerraform(this._startTime),
      sync_upgrade: cdktf.booleanToTerraform(this._syncUpgrade),
      sync_upgrade_refresh_interval: cdktf.numberToTerraform(this._syncUpgradeRefreshInterval),
      sync_upgrade_start_timeout: cdktf.numberToTerraform(this._syncUpgradeStartTimeout),
      sync_upgrade_timeout: cdktf.numberToTerraform(this._syncUpgradeTimeout),
      target_version: cdktf.stringToTerraform(this._targetVersion),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_id: {
        value: cdktf.stringToHclTerraform(this._deviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reboot: {
        value: cdktf.booleanToHclTerraform(this._reboot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      reboot_at: {
        value: cdktf.numberToHclTerraform(this._rebootAt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snapshot: {
        value: cdktf.booleanToHclTerraform(this._snapshot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      start_time: {
        value: cdktf.numberToHclTerraform(this._startTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sync_upgrade: {
        value: cdktf.booleanToHclTerraform(this._syncUpgrade),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sync_upgrade_refresh_interval: {
        value: cdktf.numberToHclTerraform(this._syncUpgradeRefreshInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sync_upgrade_start_timeout: {
        value: cdktf.numberToHclTerraform(this._syncUpgradeStartTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sync_upgrade_timeout: {
        value: cdktf.numberToHclTerraform(this._syncUpgradeTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      target_version: {
        value: cdktf.stringToHclTerraform(this._targetVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
