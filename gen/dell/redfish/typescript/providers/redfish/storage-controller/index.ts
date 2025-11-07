// https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_controller
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageControllerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Apply time of the storage controller attributes. (Update Supported) If server generation is lesser than 17G, accepted values: `Immediate`, `OnReset`, `AtMaintenanceWindowStart`, `InMaintenanceWindowOnReset`. If server generation is 17G and above, accepted values: `Immediate`, `OnReset`. Immediate: allows the user to immediately reboot the host and apply the changes. OnReset: allows the user to apply the changes on the next reboot of the host server. AtMaintenanceWindowStart: allows the user to apply at the start of a maintenance window as specified in `maintenance_window`. InMaintenanceWindowOnReset: allows to apply after a manual reset but within the maintenance window as specified in `maintenance_window`. When updating `controller_mode`, ensure that the `apply_time` is `OnReset`. When updating `security`, ensure that the `apply_time` is `Immediate` or `OnReset`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_controller#apply_time StorageController#apply_time}
  */
  readonly applyTime: string;
  /**
  * ID of the storage controller
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_controller#controller_id StorageController#controller_id}
  */
  readonly controllerId: string;
  /**
  * `job_timeout` is the time in seconds that the provider waits for the resource update job to becompleted before timing out. (Update Supported) Default value is 1200 seconds.`job_timeout` is applicable only when `apply_time` is `Immediate` or `OnReset`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_controller#job_timeout StorageController#job_timeout}
  */
  readonly jobTimeout?: number;
  /**
  * This option allows you to schedule the maintenance window. (Update Supported)This is required when `apply_time` is `AtMaintenanceWindowStart` or `InMaintenanceWindowOnReset` .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_controller#maintenance_window StorageController#maintenance_window}
  */
  readonly maintenanceWindow?: StorageControllerMaintenanceWindow;
  /**
  * Reset Timeout. Default value is 120 seconds. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_controller#reset_timeout StorageController#reset_timeout}
  */
  readonly resetTimeout?: number;
  /**
  * Reset Type. (Update Supported) Accepted values: `ForceRestart`, `GracefulRestart`, `PowerCycle`. Default value is `ForceRestart`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_controller#reset_type StorageController#reset_type}
  */
  readonly resetType?: string;
  /**
  * This consists of the attributes to configure the security of the storage controller. Please update any one out of `security` and `storage_controller` at a time. When updating `security`, ensure that the `apply_time` is `Immediate` or `OnReset`. When updating `controller_mode` to `HBA`, ensure that the security key is not present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_controller#security StorageController#security}
  */
  readonly security?: StorageControllerSecurity;
  /**
  * This consists of the attributes to configure the storage controller. Please update any one out of `storage_controller` and `security` at a time. In 17G, for `PERC H365i Front`, only the following attributes under `storage_controller` are configurable: `consistency_check_rate_percent`, `background_initialization_rate_percent`. In 17G, for `PERC H965i Front`, only the following attributes under `storage_controller` are configurable: `consistency_check_rate_percent`, `background_initialization_rate_percent`, `reconstruct_rate_percent`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_controller#storage_controller StorageController#storage_controller}
  */
  readonly storageController?: StorageControllerStorageController;
  /**
  * ID of the storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_controller#storage_id StorageController#storage_id}
  */
  readonly storageId: string;
  /**
  * ID of the system resource. If the value for system ID is not provided, the resource picks the first system available from the iDRAC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_controller#system_id StorageController#system_id}
  */
  readonly systemId?: string;
  /**
  * redfish_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_controller#redfish_server StorageController#redfish_server}
  */
  readonly redfishServer?: StorageControllerRedfishServer[] | cdktf.IResolvable;
}
export interface StorageControllerMaintenanceWindow {
  /**
  * The duration in seconds for the maintenance window. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_controller#duration StorageController#duration}
  */
  readonly duration: number;
  /**
  * The start time for the maintenance window to be scheduled. (Update Supported)The format is YYYY-MM-DDThh:mm:ss<offset>. <offset> is the time offset from UTC that the current timezone set in iDRAC in the format: +05:30 for IST.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_controller#start_time StorageController#start_time}
  */
  readonly startTime: string;
}

export function storageControllerMaintenanceWindowToTerraform(struct?: StorageControllerMaintenanceWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function storageControllerMaintenanceWindowToHclTerraform(struct?: StorageControllerMaintenanceWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageControllerMaintenanceWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StorageControllerMaintenanceWindow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageControllerMaintenanceWindow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._startTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
      this._startTime = value.startTime;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}
export interface StorageControllerSecurity {
  /**
  * Action to create/change/delete the security key, if server generation is lesser than 17G. Accepted values: `SetControllerKey`, `ReKey`, `RemoveControllerKey`. Action to enable/disable the security, if server generation is 17G and above. Accepted values: `EnableSecurity`, `DisableSecurity`. Note: In 17G and above, before enabling security ensure that the SEKM license is imported and SEKM/iLKM is configured. In lesser than 17G, the `SetControllerKey` action is used to set the key on controllers and set the controller in Local key Management (LKM) to encrypt the drives. In lesser than 17G, the `ReKey` action resets the key on the controller that support encryption of the of drives. In lesser than 17G, the `RemoveControllerKey` method erases the encryption key on controller. CAUTION: All encrypted drives shall be erased. In 17G and above, the `EnableSecurity` action is used to enable the security. In 17G and above, the `DisableSecurity` action is used to disable the security.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_controller#action StorageController#action}
  */
  readonly action?: string;
  /**
  * New controller key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_controller#key StorageController#key}
  */
  readonly key?: string;
  /**
  * Key Identifier that describes the key. The Key ID shall be maximum of 32 characters in length and should not have any spaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_controller#key_id StorageController#key_id}
  */
  readonly keyId?: string;
  /**
  * Encryption mode of the controller: Local Key Management(LKM)/Secure Enterprise Key Manager(SEKM), if server generation is lesser than 17G. If server generation is lesser than 17G, the accepted values are: `LKM`, `SEKM`. Encryption mode of the controller: Enabled/Disabled, if server generation is 17G and above. If server generation is 17G and above, it will be set to `Enabled`, if SEKM license is imported, SEKM/iLKM is configured and `EnableSecurity` action has been performed successfully. It will be set to `Disabled`, if SEKM license is not imported or SEKM/iLKM is not configured or `EnableSecurity` action has not yet been performed or `DisableSecurity` action has been performed successfully.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_controller#mode StorageController#mode}
  */
  readonly mode?: string;
  /**
  * Old controller key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_controller#old_key StorageController#old_key}
  */
  readonly oldKey?: string;
}

export function storageControllerSecurityToTerraform(struct?: StorageControllerSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    key: cdktf.stringToTerraform(struct!.key),
    key_id: cdktf.stringToTerraform(struct!.keyId),
    mode: cdktf.stringToTerraform(struct!.mode),
    old_key: cdktf.stringToTerraform(struct!.oldKey),
  }
}


export function storageControllerSecurityToHclTerraform(struct?: StorageControllerSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_id: {
      value: cdktf.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    old_key: {
      value: cdktf.stringToHclTerraform(struct!.oldKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageControllerSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StorageControllerSecurity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._oldKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.oldKey = this._oldKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageControllerSecurity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._key = undefined;
      this._keyId = undefined;
      this._mode = undefined;
      this._oldKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._key = value.key;
      this._keyId = value.keyId;
      this._mode = value.mode;
      this._oldKey = value.oldKey;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // key_id - computed: true, optional: true, required: false
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // old_key - computed: true, optional: true, required: false
  private _oldKey?: string; 
  public get oldKey() {
    return this.getStringAttribute('old_key');
  }
  public set oldKey(value: string) {
    this._oldKey = value;
  }
  public resetOldKey() {
    this._oldKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oldKeyInput() {
    return this._oldKey;
  }
}
export interface StorageControllerStorageControllerControllerRates {
  /**
  * This property describes the controller rate for consistency check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_controller#consistency_check_rate_percent StorageController#consistency_check_rate_percent}
  */
  readonly consistencyCheckRatePercent?: number;
  /**
  * This property describes the controller rate for volume rebuild
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_controller#rebuild_rate_percent StorageController#rebuild_rate_percent}
  */
  readonly rebuildRatePercent?: number;
}

export function storageControllerStorageControllerControllerRatesToTerraform(struct?: StorageControllerStorageControllerControllerRates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consistency_check_rate_percent: cdktf.numberToTerraform(struct!.consistencyCheckRatePercent),
    rebuild_rate_percent: cdktf.numberToTerraform(struct!.rebuildRatePercent),
  }
}


export function storageControllerStorageControllerControllerRatesToHclTerraform(struct?: StorageControllerStorageControllerControllerRates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consistency_check_rate_percent: {
      value: cdktf.numberToHclTerraform(struct!.consistencyCheckRatePercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rebuild_rate_percent: {
      value: cdktf.numberToHclTerraform(struct!.rebuildRatePercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageControllerStorageControllerControllerRatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StorageControllerStorageControllerControllerRates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consistencyCheckRatePercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.consistencyCheckRatePercent = this._consistencyCheckRatePercent;
    }
    if (this._rebuildRatePercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.rebuildRatePercent = this._rebuildRatePercent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageControllerStorageControllerControllerRates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consistencyCheckRatePercent = undefined;
      this._rebuildRatePercent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consistencyCheckRatePercent = value.consistencyCheckRatePercent;
      this._rebuildRatePercent = value.rebuildRatePercent;
    }
  }

  // consistency_check_rate_percent - computed: true, optional: true, required: false
  private _consistencyCheckRatePercent?: number; 
  public get consistencyCheckRatePercent() {
    return this.getNumberAttribute('consistency_check_rate_percent');
  }
  public set consistencyCheckRatePercent(value: number) {
    this._consistencyCheckRatePercent = value;
  }
  public resetConsistencyCheckRatePercent() {
    this._consistencyCheckRatePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consistencyCheckRatePercentInput() {
    return this._consistencyCheckRatePercent;
  }

  // rebuild_rate_percent - computed: true, optional: true, required: false
  private _rebuildRatePercent?: number; 
  public get rebuildRatePercent() {
    return this.getNumberAttribute('rebuild_rate_percent');
  }
  public set rebuildRatePercent(value: number) {
    this._rebuildRatePercent = value;
  }
  public resetRebuildRatePercent() {
    this._rebuildRatePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebuildRatePercentInput() {
    return this._rebuildRatePercent;
  }
}
export interface StorageControllerStorageControllerOemDellDellStorageController {
  /**
  * Background Initialization Rate Percent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_controller#background_initialization_rate_percent StorageController#background_initialization_rate_percent}
  */
  readonly backgroundInitializationRatePercent?: number;
  /**
  * Check Consistency Mode. Accepted values: `Normal`, `StopOnError`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_controller#check_consistency_mode StorageController#check_consistency_mode}
  */
  readonly checkConsistencyMode?: string;
  /**
  * Controller Mode. Accepted values: `RAID`, `HBA` if server generation is lesser than 17G. If server generation is 17G and above, `EnhancedHBA` is another value it supports. However, in 17G and above, ensure the controller mode attribute is commented. Note: In 17G and above, controller mode is a read-only property that depends upon the controller personality and hence cannot be updated. If server generation is lesser than 17G, when updating `controller_mode`, the `apply_time` should be `OnReset` and no other attributes from `storage_controller` or `security` should be updated. Specifically, when updating `controller_mode` to `HBA`, the `enhanced_auto_import_foreign_configuration_mode` attribute needs to be commented and also ensure that the security key is not present, if present first delete it using `RemoveControllerKey` action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_controller#controller_mode StorageController#controller_mode}
  */
  readonly controllerMode?: string;
  /**
  * Copyback Mode. Accepted values: `On`, `OnWithSMART`, `Off`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_controller#copyback_mode StorageController#copyback_mode}
  */
  readonly copybackMode?: string;
  /**
  * Enhanced Auto Import Foreign Configuration Mode. Accepted values: `Disabled`, `Enabled`. When updating `controller_mode` to `HBA`, this attribute needs to be commented.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_controller#enhanced_auto_import_foreign_configuration_mode StorageController#enhanced_auto_import_foreign_configuration_mode}
  */
  readonly enhancedAutoImportForeignConfigurationMode?: string;
  /**
  * Load Balance Mode. Accepted values: `Automatic`, `Disabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_controller#load_balance_mode StorageController#load_balance_mode}
  */
  readonly loadBalanceMode?: string;
  /**
  * Patrol Read Mode. Accepted values: `Disabled`, `Automatic`, `Manual`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_controller#patrol_read_mode StorageController#patrol_read_mode}
  */
  readonly patrolReadMode?: string;
  /**
  * Patrol Read Unconfigured Area Mode. Accepted values: `Disabled`, `Enabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_controller#patrol_read_unconfigured_area_mode StorageController#patrol_read_unconfigured_area_mode}
  */
  readonly patrolReadUnconfiguredAreaMode?: string;
  /**
  * Reconstruct Rate Percent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_controller#reconstruct_rate_percent StorageController#reconstruct_rate_percent}
  */
  readonly reconstructRatePercent?: number;
}

export function storageControllerStorageControllerOemDellDellStorageControllerToTerraform(struct?: StorageControllerStorageControllerOemDellDellStorageController | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    background_initialization_rate_percent: cdktf.numberToTerraform(struct!.backgroundInitializationRatePercent),
    check_consistency_mode: cdktf.stringToTerraform(struct!.checkConsistencyMode),
    controller_mode: cdktf.stringToTerraform(struct!.controllerMode),
    copyback_mode: cdktf.stringToTerraform(struct!.copybackMode),
    enhanced_auto_import_foreign_configuration_mode: cdktf.stringToTerraform(struct!.enhancedAutoImportForeignConfigurationMode),
    load_balance_mode: cdktf.stringToTerraform(struct!.loadBalanceMode),
    patrol_read_mode: cdktf.stringToTerraform(struct!.patrolReadMode),
    patrol_read_unconfigured_area_mode: cdktf.stringToTerraform(struct!.patrolReadUnconfiguredAreaMode),
    reconstruct_rate_percent: cdktf.numberToTerraform(struct!.reconstructRatePercent),
  }
}


export function storageControllerStorageControllerOemDellDellStorageControllerToHclTerraform(struct?: StorageControllerStorageControllerOemDellDellStorageController | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    background_initialization_rate_percent: {
      value: cdktf.numberToHclTerraform(struct!.backgroundInitializationRatePercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    check_consistency_mode: {
      value: cdktf.stringToHclTerraform(struct!.checkConsistencyMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    controller_mode: {
      value: cdktf.stringToHclTerraform(struct!.controllerMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    copyback_mode: {
      value: cdktf.stringToHclTerraform(struct!.copybackMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enhanced_auto_import_foreign_configuration_mode: {
      value: cdktf.stringToHclTerraform(struct!.enhancedAutoImportForeignConfigurationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_balance_mode: {
      value: cdktf.stringToHclTerraform(struct!.loadBalanceMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    patrol_read_mode: {
      value: cdktf.stringToHclTerraform(struct!.patrolReadMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    patrol_read_unconfigured_area_mode: {
      value: cdktf.stringToHclTerraform(struct!.patrolReadUnconfiguredAreaMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reconstruct_rate_percent: {
      value: cdktf.numberToHclTerraform(struct!.reconstructRatePercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageControllerStorageControllerOemDellDellStorageControllerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StorageControllerStorageControllerOemDellDellStorageController | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backgroundInitializationRatePercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundInitializationRatePercent = this._backgroundInitializationRatePercent;
    }
    if (this._checkConsistencyMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkConsistencyMode = this._checkConsistencyMode;
    }
    if (this._controllerMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerMode = this._controllerMode;
    }
    if (this._copybackMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.copybackMode = this._copybackMode;
    }
    if (this._enhancedAutoImportForeignConfigurationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.enhancedAutoImportForeignConfigurationMode = this._enhancedAutoImportForeignConfigurationMode;
    }
    if (this._loadBalanceMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalanceMode = this._loadBalanceMode;
    }
    if (this._patrolReadMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.patrolReadMode = this._patrolReadMode;
    }
    if (this._patrolReadUnconfiguredAreaMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.patrolReadUnconfiguredAreaMode = this._patrolReadUnconfiguredAreaMode;
    }
    if (this._reconstructRatePercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.reconstructRatePercent = this._reconstructRatePercent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageControllerStorageControllerOemDellDellStorageController | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backgroundInitializationRatePercent = undefined;
      this._checkConsistencyMode = undefined;
      this._controllerMode = undefined;
      this._copybackMode = undefined;
      this._enhancedAutoImportForeignConfigurationMode = undefined;
      this._loadBalanceMode = undefined;
      this._patrolReadMode = undefined;
      this._patrolReadUnconfiguredAreaMode = undefined;
      this._reconstructRatePercent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backgroundInitializationRatePercent = value.backgroundInitializationRatePercent;
      this._checkConsistencyMode = value.checkConsistencyMode;
      this._controllerMode = value.controllerMode;
      this._copybackMode = value.copybackMode;
      this._enhancedAutoImportForeignConfigurationMode = value.enhancedAutoImportForeignConfigurationMode;
      this._loadBalanceMode = value.loadBalanceMode;
      this._patrolReadMode = value.patrolReadMode;
      this._patrolReadUnconfiguredAreaMode = value.patrolReadUnconfiguredAreaMode;
      this._reconstructRatePercent = value.reconstructRatePercent;
    }
  }

  // background_initialization_rate_percent - computed: true, optional: true, required: false
  private _backgroundInitializationRatePercent?: number; 
  public get backgroundInitializationRatePercent() {
    return this.getNumberAttribute('background_initialization_rate_percent');
  }
  public set backgroundInitializationRatePercent(value: number) {
    this._backgroundInitializationRatePercent = value;
  }
  public resetBackgroundInitializationRatePercent() {
    this._backgroundInitializationRatePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundInitializationRatePercentInput() {
    return this._backgroundInitializationRatePercent;
  }

  // check_consistency_mode - computed: true, optional: true, required: false
  private _checkConsistencyMode?: string; 
  public get checkConsistencyMode() {
    return this.getStringAttribute('check_consistency_mode');
  }
  public set checkConsistencyMode(value: string) {
    this._checkConsistencyMode = value;
  }
  public resetCheckConsistencyMode() {
    this._checkConsistencyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkConsistencyModeInput() {
    return this._checkConsistencyMode;
  }

  // controller_mode - computed: true, optional: true, required: false
  private _controllerMode?: string; 
  public get controllerMode() {
    return this.getStringAttribute('controller_mode');
  }
  public set controllerMode(value: string) {
    this._controllerMode = value;
  }
  public resetControllerMode() {
    this._controllerMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerModeInput() {
    return this._controllerMode;
  }

  // copyback_mode - computed: true, optional: true, required: false
  private _copybackMode?: string; 
  public get copybackMode() {
    return this.getStringAttribute('copyback_mode');
  }
  public set copybackMode(value: string) {
    this._copybackMode = value;
  }
  public resetCopybackMode() {
    this._copybackMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copybackModeInput() {
    return this._copybackMode;
  }

  // enhanced_auto_import_foreign_configuration_mode - computed: true, optional: true, required: false
  private _enhancedAutoImportForeignConfigurationMode?: string; 
  public get enhancedAutoImportForeignConfigurationMode() {
    return this.getStringAttribute('enhanced_auto_import_foreign_configuration_mode');
  }
  public set enhancedAutoImportForeignConfigurationMode(value: string) {
    this._enhancedAutoImportForeignConfigurationMode = value;
  }
  public resetEnhancedAutoImportForeignConfigurationMode() {
    this._enhancedAutoImportForeignConfigurationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedAutoImportForeignConfigurationModeInput() {
    return this._enhancedAutoImportForeignConfigurationMode;
  }

  // load_balance_mode - computed: true, optional: true, required: false
  private _loadBalanceMode?: string; 
  public get loadBalanceMode() {
    return this.getStringAttribute('load_balance_mode');
  }
  public set loadBalanceMode(value: string) {
    this._loadBalanceMode = value;
  }
  public resetLoadBalanceMode() {
    this._loadBalanceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalanceModeInput() {
    return this._loadBalanceMode;
  }

  // patrol_read_mode - computed: true, optional: true, required: false
  private _patrolReadMode?: string; 
  public get patrolReadMode() {
    return this.getStringAttribute('patrol_read_mode');
  }
  public set patrolReadMode(value: string) {
    this._patrolReadMode = value;
  }
  public resetPatrolReadMode() {
    this._patrolReadMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patrolReadModeInput() {
    return this._patrolReadMode;
  }

  // patrol_read_unconfigured_area_mode - computed: true, optional: true, required: false
  private _patrolReadUnconfiguredAreaMode?: string; 
  public get patrolReadUnconfiguredAreaMode() {
    return this.getStringAttribute('patrol_read_unconfigured_area_mode');
  }
  public set patrolReadUnconfiguredAreaMode(value: string) {
    this._patrolReadUnconfiguredAreaMode = value;
  }
  public resetPatrolReadUnconfiguredAreaMode() {
    this._patrolReadUnconfiguredAreaMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patrolReadUnconfiguredAreaModeInput() {
    return this._patrolReadUnconfiguredAreaMode;
  }

  // reconstruct_rate_percent - computed: true, optional: true, required: false
  private _reconstructRatePercent?: number; 
  public get reconstructRatePercent() {
    return this.getNumberAttribute('reconstruct_rate_percent');
  }
  public set reconstructRatePercent(value: number) {
    this._reconstructRatePercent = value;
  }
  public resetReconstructRatePercent() {
    this._reconstructRatePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reconstructRatePercentInput() {
    return this._reconstructRatePercent;
  }
}
export interface StorageControllerStorageControllerOemDell {
  /**
  * Dell Storage Controller
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_controller#dell_storage_controller StorageController#dell_storage_controller}
  */
  readonly dellStorageController?: StorageControllerStorageControllerOemDellDellStorageController;
}

export function storageControllerStorageControllerOemDellToTerraform(struct?: StorageControllerStorageControllerOemDell | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dell_storage_controller: storageControllerStorageControllerOemDellDellStorageControllerToTerraform(struct!.dellStorageController),
  }
}


export function storageControllerStorageControllerOemDellToHclTerraform(struct?: StorageControllerStorageControllerOemDell | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dell_storage_controller: {
      value: storageControllerStorageControllerOemDellDellStorageControllerToHclTerraform(struct!.dellStorageController),
      isBlock: true,
      type: "struct",
      storageClassType: "StorageControllerStorageControllerOemDellDellStorageController",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageControllerStorageControllerOemDellOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StorageControllerStorageControllerOemDell | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dellStorageController?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dellStorageController = this._dellStorageController?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageControllerStorageControllerOemDell | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dellStorageController.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dellStorageController.internalValue = value.dellStorageController;
    }
  }

  // dell_storage_controller - computed: true, optional: true, required: false
  private _dellStorageController = new StorageControllerStorageControllerOemDellDellStorageControllerOutputReference(this, "dell_storage_controller");
  public get dellStorageController() {
    return this._dellStorageController;
  }
  public putDellStorageController(value: StorageControllerStorageControllerOemDellDellStorageController) {
    this._dellStorageController.internalValue = value;
  }
  public resetDellStorageController() {
    this._dellStorageController.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dellStorageControllerInput() {
    return this._dellStorageController.internalValue;
  }
}
export interface StorageControllerStorageControllerOem {
  /**
  * Dell
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_controller#dell StorageController#dell}
  */
  readonly dell?: StorageControllerStorageControllerOemDell;
}

export function storageControllerStorageControllerOemToTerraform(struct?: StorageControllerStorageControllerOem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dell: storageControllerStorageControllerOemDellToTerraform(struct!.dell),
  }
}


export function storageControllerStorageControllerOemToHclTerraform(struct?: StorageControllerStorageControllerOem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dell: {
      value: storageControllerStorageControllerOemDellToHclTerraform(struct!.dell),
      isBlock: true,
      type: "struct",
      storageClassType: "StorageControllerStorageControllerOemDell",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageControllerStorageControllerOemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StorageControllerStorageControllerOem | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dell?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dell = this._dell?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageControllerStorageControllerOem | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dell.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dell.internalValue = value.dell;
    }
  }

  // dell - computed: true, optional: true, required: false
  private _dell = new StorageControllerStorageControllerOemDellOutputReference(this, "dell");
  public get dell() {
    return this._dell;
  }
  public putDell(value: StorageControllerStorageControllerOemDell) {
    this._dell.internalValue = value;
  }
  public resetDell() {
    this._dell.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dellInput() {
    return this._dell.internalValue;
  }
}
export interface StorageControllerStorageController {
  /**
  * This type describes the various controller rates used for processes such as volume rebuild or consistency checks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_controller#controller_rates StorageController#controller_rates}
  */
  readonly controllerRates?: StorageControllerStorageControllerControllerRates;
  /**
  * The OEM extension to the StorageController resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_controller#oem StorageController#oem}
  */
  readonly oem?: StorageControllerStorageControllerOem;
}

export function storageControllerStorageControllerToTerraform(struct?: StorageControllerStorageController | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    controller_rates: storageControllerStorageControllerControllerRatesToTerraform(struct!.controllerRates),
    oem: storageControllerStorageControllerOemToTerraform(struct!.oem),
  }
}


export function storageControllerStorageControllerToHclTerraform(struct?: StorageControllerStorageController | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    controller_rates: {
      value: storageControllerStorageControllerControllerRatesToHclTerraform(struct!.controllerRates),
      isBlock: true,
      type: "struct",
      storageClassType: "StorageControllerStorageControllerControllerRates",
    },
    oem: {
      value: storageControllerStorageControllerOemToHclTerraform(struct!.oem),
      isBlock: true,
      type: "struct",
      storageClassType: "StorageControllerStorageControllerOem",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageControllerStorageControllerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StorageControllerStorageController | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controllerRates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerRates = this._controllerRates?.internalValue;
    }
    if (this._oem?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oem = this._oem?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageControllerStorageController | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._controllerRates.internalValue = undefined;
      this._oem.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._controllerRates.internalValue = value.controllerRates;
      this._oem.internalValue = value.oem;
    }
  }

  // controller_rates - computed: true, optional: true, required: false
  private _controllerRates = new StorageControllerStorageControllerControllerRatesOutputReference(this, "controller_rates");
  public get controllerRates() {
    return this._controllerRates;
  }
  public putControllerRates(value: StorageControllerStorageControllerControllerRates) {
    this._controllerRates.internalValue = value;
  }
  public resetControllerRates() {
    this._controllerRates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerRatesInput() {
    return this._controllerRates.internalValue;
  }

  // oem - computed: true, optional: true, required: false
  private _oem = new StorageControllerStorageControllerOemOutputReference(this, "oem");
  public get oem() {
    return this._oem;
  }
  public putOem(value: StorageControllerStorageControllerOem) {
    this._oem.internalValue = value;
  }
  public resetOem() {
    this._oem.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oemInput() {
    return this._oem.internalValue;
  }
}
export interface StorageControllerRedfishServer {
  /**
  * Server BMC IP address or hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_controller#endpoint StorageController#endpoint}
  */
  readonly endpoint?: string;
  /**
  * User password for login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_controller#password StorageController#password}
  */
  readonly password?: string;
  /**
  * Alias name for server BMCs. The key in provider's `redfish_servers` map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_controller#redfish_alias StorageController#redfish_alias}
  */
  readonly redfishAlias?: string;
  /**
  * This field indicates whether the SSL/TLS certificate must be verified or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_controller#ssl_insecure StorageController#ssl_insecure}
  */
  readonly sslInsecure?: boolean | cdktf.IResolvable;
  /**
  * User name for login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_controller#user StorageController#user}
  */
  readonly user?: string;
}

export function storageControllerRedfishServerToTerraform(struct?: StorageControllerRedfishServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    password: cdktf.stringToTerraform(struct!.password),
    redfish_alias: cdktf.stringToTerraform(struct!.redfishAlias),
    ssl_insecure: cdktf.booleanToTerraform(struct!.sslInsecure),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function storageControllerRedfishServerToHclTerraform(struct?: StorageControllerRedfishServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redfish_alias: {
      value: cdktf.stringToHclTerraform(struct!.redfishAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_insecure: {
      value: cdktf.booleanToHclTerraform(struct!.sslInsecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageControllerRedfishServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StorageControllerRedfishServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._redfishAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.redfishAlias = this._redfishAlias;
    }
    if (this._sslInsecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslInsecure = this._sslInsecure;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageControllerRedfishServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoint = undefined;
      this._password = undefined;
      this._redfishAlias = undefined;
      this._sslInsecure = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoint = value.endpoint;
      this._password = value.password;
      this._redfishAlias = value.redfishAlias;
      this._sslInsecure = value.sslInsecure;
      this._user = value.user;
    }
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // redfish_alias - computed: false, optional: true, required: false
  private _redfishAlias?: string; 
  public get redfishAlias() {
    return this.getStringAttribute('redfish_alias');
  }
  public set redfishAlias(value: string) {
    this._redfishAlias = value;
  }
  public resetRedfishAlias() {
    this._redfishAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redfishAliasInput() {
    return this._redfishAlias;
  }

  // ssl_insecure - computed: false, optional: true, required: false
  private _sslInsecure?: boolean | cdktf.IResolvable; 
  public get sslInsecure() {
    return this.getBooleanAttribute('ssl_insecure');
  }
  public set sslInsecure(value: boolean | cdktf.IResolvable) {
    this._sslInsecure = value;
  }
  public resetSslInsecure() {
    this._sslInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInsecureInput() {
    return this._sslInsecure;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}

export class StorageControllerRedfishServerList extends cdktf.ComplexList {
  public internalValue? : StorageControllerRedfishServer[] | cdktf.IResolvable

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
  public get(index: number): StorageControllerRedfishServerOutputReference {
    return new StorageControllerRedfishServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_controller redfish_storage_controller}
*/
export class StorageController extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "redfish_storage_controller";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StorageController resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StorageController to import
  * @param importFromId The id of the existing StorageController that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_controller#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StorageController to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "redfish_storage_controller", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/resources/storage_controller redfish_storage_controller} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageControllerConfig
  */
  public constructor(scope: Construct, id: string, config: StorageControllerConfig) {
    super(scope, id, {
      terraformResourceType: 'redfish_storage_controller',
      terraformGeneratorMetadata: {
        providerName: 'redfish',
        providerVersion: '1.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applyTime = config.applyTime;
    this._controllerId = config.controllerId;
    this._jobTimeout = config.jobTimeout;
    this._maintenanceWindow.internalValue = config.maintenanceWindow;
    this._resetTimeout = config.resetTimeout;
    this._resetType = config.resetType;
    this._security.internalValue = config.security;
    this._storageController.internalValue = config.storageController;
    this._storageId = config.storageId;
    this._systemId = config.systemId;
    this._redfishServer.internalValue = config.redfishServer;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apply_time - computed: false, optional: false, required: true
  private _applyTime?: string; 
  public get applyTime() {
    return this.getStringAttribute('apply_time');
  }
  public set applyTime(value: string) {
    this._applyTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applyTimeInput() {
    return this._applyTime;
  }

  // controller_id - computed: false, optional: false, required: true
  private _controllerId?: string; 
  public get controllerId() {
    return this.getStringAttribute('controller_id');
  }
  public set controllerId(value: string) {
    this._controllerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerIdInput() {
    return this._controllerId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // job_timeout - computed: true, optional: true, required: false
  private _jobTimeout?: number; 
  public get jobTimeout() {
    return this.getNumberAttribute('job_timeout');
  }
  public set jobTimeout(value: number) {
    this._jobTimeout = value;
  }
  public resetJobTimeout() {
    this._jobTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTimeoutInput() {
    return this._jobTimeout;
  }

  // maintenance_window - computed: false, optional: true, required: false
  private _maintenanceWindow = new StorageControllerMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: StorageControllerMaintenanceWindow) {
    this._maintenanceWindow.internalValue = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
  }

  // reset_timeout - computed: true, optional: true, required: false
  private _resetTimeout?: number; 
  public get resetTimeout() {
    return this.getNumberAttribute('reset_timeout');
  }
  public set resetTimeout(value: number) {
    this._resetTimeout = value;
  }
  public resetResetTimeout() {
    this._resetTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetTimeoutInput() {
    return this._resetTimeout;
  }

  // reset_type - computed: true, optional: true, required: false
  private _resetType?: string; 
  public get resetType() {
    return this.getStringAttribute('reset_type');
  }
  public set resetType(value: string) {
    this._resetType = value;
  }
  public resetResetType() {
    this._resetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetTypeInput() {
    return this._resetType;
  }

  // security - computed: true, optional: true, required: false
  private _security = new StorageControllerSecurityOutputReference(this, "security");
  public get security() {
    return this._security;
  }
  public putSecurity(value: StorageControllerSecurity) {
    this._security.internalValue = value;
  }
  public resetSecurity() {
    this._security.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security.internalValue;
  }

  // storage_controller - computed: true, optional: true, required: false
  private _storageController = new StorageControllerStorageControllerOutputReference(this, "storage_controller");
  public get storageController() {
    return this._storageController;
  }
  public putStorageController(value: StorageControllerStorageController) {
    this._storageController.internalValue = value;
  }
  public resetStorageController() {
    this._storageController.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageControllerInput() {
    return this._storageController.internalValue;
  }

  // storage_id - computed: false, optional: false, required: true
  private _storageId?: string; 
  public get storageId() {
    return this.getStringAttribute('storage_id');
  }
  public set storageId(value: string) {
    this._storageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageIdInput() {
    return this._storageId;
  }

  // system_id - computed: true, optional: true, required: false
  private _systemId?: string; 
  public get systemId() {
    return this.getStringAttribute('system_id');
  }
  public set systemId(value: string) {
    this._systemId = value;
  }
  public resetSystemId() {
    this._systemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemIdInput() {
    return this._systemId;
  }

  // redfish_server - computed: false, optional: true, required: false
  private _redfishServer = new StorageControllerRedfishServerList(this, "redfish_server", false);
  public get redfishServer() {
    return this._redfishServer;
  }
  public putRedfishServer(value: StorageControllerRedfishServer[] | cdktf.IResolvable) {
    this._redfishServer.internalValue = value;
  }
  public resetRedfishServer() {
    this._redfishServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redfishServerInput() {
    return this._redfishServer.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apply_time: cdktf.stringToTerraform(this._applyTime),
      controller_id: cdktf.stringToTerraform(this._controllerId),
      job_timeout: cdktf.numberToTerraform(this._jobTimeout),
      maintenance_window: storageControllerMaintenanceWindowToTerraform(this._maintenanceWindow.internalValue),
      reset_timeout: cdktf.numberToTerraform(this._resetTimeout),
      reset_type: cdktf.stringToTerraform(this._resetType),
      security: storageControllerSecurityToTerraform(this._security.internalValue),
      storage_controller: storageControllerStorageControllerToTerraform(this._storageController.internalValue),
      storage_id: cdktf.stringToTerraform(this._storageId),
      system_id: cdktf.stringToTerraform(this._systemId),
      redfish_server: cdktf.listMapper(storageControllerRedfishServerToTerraform, true)(this._redfishServer.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apply_time: {
        value: cdktf.stringToHclTerraform(this._applyTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      controller_id: {
        value: cdktf.stringToHclTerraform(this._controllerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      job_timeout: {
        value: cdktf.numberToHclTerraform(this._jobTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maintenance_window: {
        value: storageControllerMaintenanceWindowToHclTerraform(this._maintenanceWindow.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StorageControllerMaintenanceWindow",
      },
      reset_timeout: {
        value: cdktf.numberToHclTerraform(this._resetTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reset_type: {
        value: cdktf.stringToHclTerraform(this._resetType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security: {
        value: storageControllerSecurityToHclTerraform(this._security.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StorageControllerSecurity",
      },
      storage_controller: {
        value: storageControllerStorageControllerToHclTerraform(this._storageController.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StorageControllerStorageController",
      },
      storage_id: {
        value: cdktf.stringToHclTerraform(this._storageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_id: {
        value: cdktf.stringToHclTerraform(this._systemId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redfish_server: {
        value: cdktf.listMapperHcl(storageControllerRedfishServerToHclTerraform, true)(this._redfishServer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageControllerRedfishServerList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
