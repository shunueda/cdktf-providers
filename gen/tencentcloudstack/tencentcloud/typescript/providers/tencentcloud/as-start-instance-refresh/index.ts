// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/as_start_instance_refresh
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AsStartInstanceRefreshConfig extends cdktf.TerraformMetaArguments {
  /**
  * Scaling group ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/as_start_instance_refresh#auto_scaling_group_id AsStartInstanceRefresh#auto_scaling_group_id}
  */
  readonly autoScalingGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/as_start_instance_refresh#id AsStartInstanceRefresh#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Refresh mode. Value range: ROLLING_UPDATE_RESET: Reinstall the system for rolling update; ROLLING_UPDATE_REPLACE: Create a new instance for rolling update. This mode does not support the rollback interface yet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/as_start_instance_refresh#refresh_mode AsStartInstanceRefresh#refresh_mode}
  */
  readonly refreshMode?: string;
  /**
  * refresh_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/as_start_instance_refresh#refresh_settings AsStartInstanceRefresh#refresh_settings}
  */
  readonly refreshSettings: AsStartInstanceRefreshRefreshSettings;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/as_start_instance_refresh#timeouts AsStartInstanceRefresh#timeouts}
  */
  readonly timeouts?: AsStartInstanceRefreshTimeouts;
}
export interface AsStartInstanceRefreshRefreshSettingsRollingUpdateSettings {
  /**
  * Batch quantity. The batch quantity should be a positive integer greater than 0, but cannot exceed the total number of instances pending refresh.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/as_start_instance_refresh#batch_number AsStartInstanceRefresh#batch_number}
  */
  readonly batchNumber: number;
  /**
  * Pause policy between batches. Default value: Automatic. Valid values: <br><li>FIRST_BATCH_PAUSE: Pause after the first batch update completes.</li> <li>BATCH_INTERVAL_PAUSE: Pause between each batch update.</li> <li>AUTOMATIC: No pauses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/as_start_instance_refresh#batch_pause AsStartInstanceRefresh#batch_pause}
  */
  readonly batchPause?: string;
  /**
  * Failure Handling Policy. The default value is `AUTO_PAUSE`. The values are as follows, `AUTO_PAUSE`: Pause after refresh fails; `AUTO_ROLLBACK`: Roll back after refresh fails; `AUTO_CANCEL`: Cancel after refresh fails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/as_start_instance_refresh#fail_process AsStartInstanceRefresh#fail_process}
  */
  readonly failProcess?: string;
  /**
  * Maximum Extra Quantity. After setting this parameter, a batch of pay-as-you-go extra instances will be created according to the launch configuration before the rolling update starts, and the extra instances will be destroyed after the rolling update is completed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/as_start_instance_refresh#max_surge AsStartInstanceRefresh#max_surge}
  */
  readonly maxSurge?: number;
}

export function asStartInstanceRefreshRefreshSettingsRollingUpdateSettingsToTerraform(struct?: AsStartInstanceRefreshRefreshSettingsRollingUpdateSettingsOutputReference | AsStartInstanceRefreshRefreshSettingsRollingUpdateSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_number: cdktf.numberToTerraform(struct!.batchNumber),
    batch_pause: cdktf.stringToTerraform(struct!.batchPause),
    fail_process: cdktf.stringToTerraform(struct!.failProcess),
    max_surge: cdktf.numberToTerraform(struct!.maxSurge),
  }
}


export function asStartInstanceRefreshRefreshSettingsRollingUpdateSettingsToHclTerraform(struct?: AsStartInstanceRefreshRefreshSettingsRollingUpdateSettingsOutputReference | AsStartInstanceRefreshRefreshSettingsRollingUpdateSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_number: {
      value: cdktf.numberToHclTerraform(struct!.batchNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    batch_pause: {
      value: cdktf.stringToHclTerraform(struct!.batchPause),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fail_process: {
      value: cdktf.stringToHclTerraform(struct!.failProcess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_surge: {
      value: cdktf.numberToHclTerraform(struct!.maxSurge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AsStartInstanceRefreshRefreshSettingsRollingUpdateSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AsStartInstanceRefreshRefreshSettingsRollingUpdateSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchNumber = this._batchNumber;
    }
    if (this._batchPause !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchPause = this._batchPause;
    }
    if (this._failProcess !== undefined) {
      hasAnyValues = true;
      internalValueResult.failProcess = this._failProcess;
    }
    if (this._maxSurge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSurge = this._maxSurge;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AsStartInstanceRefreshRefreshSettingsRollingUpdateSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batchNumber = undefined;
      this._batchPause = undefined;
      this._failProcess = undefined;
      this._maxSurge = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batchNumber = value.batchNumber;
      this._batchPause = value.batchPause;
      this._failProcess = value.failProcess;
      this._maxSurge = value.maxSurge;
    }
  }

  // batch_number - computed: false, optional: false, required: true
  private _batchNumber?: number; 
  public get batchNumber() {
    return this.getNumberAttribute('batch_number');
  }
  public set batchNumber(value: number) {
    this._batchNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get batchNumberInput() {
    return this._batchNumber;
  }

  // batch_pause - computed: false, optional: true, required: false
  private _batchPause?: string; 
  public get batchPause() {
    return this.getStringAttribute('batch_pause');
  }
  public set batchPause(value: string) {
    this._batchPause = value;
  }
  public resetBatchPause() {
    this._batchPause = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchPauseInput() {
    return this._batchPause;
  }

  // fail_process - computed: false, optional: true, required: false
  private _failProcess?: string; 
  public get failProcess() {
    return this.getStringAttribute('fail_process');
  }
  public set failProcess(value: string) {
    this._failProcess = value;
  }
  public resetFailProcess() {
    this._failProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failProcessInput() {
    return this._failProcess;
  }

  // max_surge - computed: false, optional: true, required: false
  private _maxSurge?: number; 
  public get maxSurge() {
    return this.getNumberAttribute('max_surge');
  }
  public set maxSurge(value: number) {
    this._maxSurge = value;
  }
  public resetMaxSurge() {
    this._maxSurge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSurgeInput() {
    return this._maxSurge;
  }
}
export interface AsStartInstanceRefreshRefreshSettings {
  /**
  * Backend service health check status for instances, defaults to FALSE. This setting takes effect only for scaling groups bound with application load balancers. When enabled, if an instance fails the check after being refreshed, its load balancer port weight remains 0 and is marked as a refresh failure. Valid values: <br><li>TRUE: Enable the check.</li> <li>FALSE: Do not enable the check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/as_start_instance_refresh#check_instance_target_health AsStartInstanceRefresh#check_instance_target_health}
  */
  readonly checkInstanceTargetHealth?: boolean | cdktf.IResolvable;
  /**
  * The timeout period for backend service health status checks, in seconds. The valid range is [60, 7200], with a default value of 1800 seconds. This takes effect only when the CheckInstanceTargetHealth parameter is enabled. If the instance health check times out, it will be marked as a refresh failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/as_start_instance_refresh#check_instance_target_health_timeout AsStartInstanceRefresh#check_instance_target_health_timeout}
  */
  readonly checkInstanceTargetHealthTimeout?: number;
  /**
  * rolling_update_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/as_start_instance_refresh#rolling_update_settings AsStartInstanceRefresh#rolling_update_settings}
  */
  readonly rollingUpdateSettings: AsStartInstanceRefreshRefreshSettingsRollingUpdateSettings;
}

export function asStartInstanceRefreshRefreshSettingsToTerraform(struct?: AsStartInstanceRefreshRefreshSettingsOutputReference | AsStartInstanceRefreshRefreshSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_instance_target_health: cdktf.booleanToTerraform(struct!.checkInstanceTargetHealth),
    check_instance_target_health_timeout: cdktf.numberToTerraform(struct!.checkInstanceTargetHealthTimeout),
    rolling_update_settings: asStartInstanceRefreshRefreshSettingsRollingUpdateSettingsToTerraform(struct!.rollingUpdateSettings),
  }
}


export function asStartInstanceRefreshRefreshSettingsToHclTerraform(struct?: AsStartInstanceRefreshRefreshSettingsOutputReference | AsStartInstanceRefreshRefreshSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_instance_target_health: {
      value: cdktf.booleanToHclTerraform(struct!.checkInstanceTargetHealth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_instance_target_health_timeout: {
      value: cdktf.numberToHclTerraform(struct!.checkInstanceTargetHealthTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rolling_update_settings: {
      value: asStartInstanceRefreshRefreshSettingsRollingUpdateSettingsToHclTerraform(struct!.rollingUpdateSettings),
      isBlock: true,
      type: "list",
      storageClassType: "AsStartInstanceRefreshRefreshSettingsRollingUpdateSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AsStartInstanceRefreshRefreshSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AsStartInstanceRefreshRefreshSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkInstanceTargetHealth !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkInstanceTargetHealth = this._checkInstanceTargetHealth;
    }
    if (this._checkInstanceTargetHealthTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkInstanceTargetHealthTimeout = this._checkInstanceTargetHealthTimeout;
    }
    if (this._rollingUpdateSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollingUpdateSettings = this._rollingUpdateSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AsStartInstanceRefreshRefreshSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._checkInstanceTargetHealth = undefined;
      this._checkInstanceTargetHealthTimeout = undefined;
      this._rollingUpdateSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._checkInstanceTargetHealth = value.checkInstanceTargetHealth;
      this._checkInstanceTargetHealthTimeout = value.checkInstanceTargetHealthTimeout;
      this._rollingUpdateSettings.internalValue = value.rollingUpdateSettings;
    }
  }

  // check_instance_target_health - computed: false, optional: true, required: false
  private _checkInstanceTargetHealth?: boolean | cdktf.IResolvable; 
  public get checkInstanceTargetHealth() {
    return this.getBooleanAttribute('check_instance_target_health');
  }
  public set checkInstanceTargetHealth(value: boolean | cdktf.IResolvable) {
    this._checkInstanceTargetHealth = value;
  }
  public resetCheckInstanceTargetHealth() {
    this._checkInstanceTargetHealth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkInstanceTargetHealthInput() {
    return this._checkInstanceTargetHealth;
  }

  // check_instance_target_health_timeout - computed: false, optional: true, required: false
  private _checkInstanceTargetHealthTimeout?: number; 
  public get checkInstanceTargetHealthTimeout() {
    return this.getNumberAttribute('check_instance_target_health_timeout');
  }
  public set checkInstanceTargetHealthTimeout(value: number) {
    this._checkInstanceTargetHealthTimeout = value;
  }
  public resetCheckInstanceTargetHealthTimeout() {
    this._checkInstanceTargetHealthTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkInstanceTargetHealthTimeoutInput() {
    return this._checkInstanceTargetHealthTimeout;
  }

  // rolling_update_settings - computed: false, optional: false, required: true
  private _rollingUpdateSettings = new AsStartInstanceRefreshRefreshSettingsRollingUpdateSettingsOutputReference(this, "rolling_update_settings");
  public get rollingUpdateSettings() {
    return this._rollingUpdateSettings;
  }
  public putRollingUpdateSettings(value: AsStartInstanceRefreshRefreshSettingsRollingUpdateSettings) {
    this._rollingUpdateSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingUpdateSettingsInput() {
    return this._rollingUpdateSettings.internalValue;
  }
}
export interface AsStartInstanceRefreshTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/as_start_instance_refresh#create AsStartInstanceRefresh#create}
  */
  readonly create?: string;
}

export function asStartInstanceRefreshTimeoutsToTerraform(struct?: AsStartInstanceRefreshTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function asStartInstanceRefreshTimeoutsToHclTerraform(struct?: AsStartInstanceRefreshTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AsStartInstanceRefreshTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AsStartInstanceRefreshTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AsStartInstanceRefreshTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/as_start_instance_refresh tencentcloud_as_start_instance_refresh}
*/
export class AsStartInstanceRefresh extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_as_start_instance_refresh";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AsStartInstanceRefresh resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AsStartInstanceRefresh to import
  * @param importFromId The id of the existing AsStartInstanceRefresh that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/as_start_instance_refresh#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AsStartInstanceRefresh to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_as_start_instance_refresh", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/as_start_instance_refresh tencentcloud_as_start_instance_refresh} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AsStartInstanceRefreshConfig
  */
  public constructor(scope: Construct, id: string, config: AsStartInstanceRefreshConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_as_start_instance_refresh',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.42',
        providerVersionConstraint: '1.82.42'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoScalingGroupId = config.autoScalingGroupId;
    this._id = config.id;
    this._refreshMode = config.refreshMode;
    this._refreshSettings.internalValue = config.refreshSettings;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_scaling_group_id - computed: false, optional: false, required: true
  private _autoScalingGroupId?: string; 
  public get autoScalingGroupId() {
    return this.getStringAttribute('auto_scaling_group_id');
  }
  public set autoScalingGroupId(value: string) {
    this._autoScalingGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingGroupIdInput() {
    return this._autoScalingGroupId;
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

  // refresh_mode - computed: false, optional: true, required: false
  private _refreshMode?: string; 
  public get refreshMode() {
    return this.getStringAttribute('refresh_mode');
  }
  public set refreshMode(value: string) {
    this._refreshMode = value;
  }
  public resetRefreshMode() {
    this._refreshMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshModeInput() {
    return this._refreshMode;
  }

  // refresh_settings - computed: false, optional: false, required: true
  private _refreshSettings = new AsStartInstanceRefreshRefreshSettingsOutputReference(this, "refresh_settings");
  public get refreshSettings() {
    return this._refreshSettings;
  }
  public putRefreshSettings(value: AsStartInstanceRefreshRefreshSettings) {
    this._refreshSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshSettingsInput() {
    return this._refreshSettings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AsStartInstanceRefreshTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AsStartInstanceRefreshTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_scaling_group_id: cdktf.stringToTerraform(this._autoScalingGroupId),
      id: cdktf.stringToTerraform(this._id),
      refresh_mode: cdktf.stringToTerraform(this._refreshMode),
      refresh_settings: asStartInstanceRefreshRefreshSettingsToTerraform(this._refreshSettings.internalValue),
      timeouts: asStartInstanceRefreshTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_scaling_group_id: {
        value: cdktf.stringToHclTerraform(this._autoScalingGroupId),
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
      refresh_mode: {
        value: cdktf.stringToHclTerraform(this._refreshMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      refresh_settings: {
        value: asStartInstanceRefreshRefreshSettingsToHclTerraform(this._refreshSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AsStartInstanceRefreshRefreshSettingsList",
      },
      timeouts: {
        value: asStartInstanceRefreshTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AsStartInstanceRefreshTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
