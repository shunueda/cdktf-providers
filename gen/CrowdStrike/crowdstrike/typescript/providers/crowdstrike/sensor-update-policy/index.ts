// https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/sensor_update_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SensorUpdatePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Sensor build to use for the sensor update policy. Use an empty string to turn off sensor version updates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/sensor_update_policy#build SensorUpdatePolicy#build}
  */
  readonly buildAttribute: string;
  /**
  * Sensor arm64 build to use for the sensor update policy (Linux only). Required if platform_name is Linux. Use an empty string to turn off sensor version updates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/sensor_update_policy#build_arm64 SensorUpdatePolicy#build_arm64}
  */
  readonly buildArm64?: string;
  /**
  * Description of the sensor update policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/sensor_update_policy#description SensorUpdatePolicy#description}
  */
  readonly description?: string;
  /**
  * Enable the sensor update policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/sensor_update_policy#enabled SensorUpdatePolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Host Group ids to attach to the sensor update policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/sensor_update_policy#host_groups SensorUpdatePolicy#host_groups}
  */
  readonly hostGroups?: string[];
  /**
  * Name of the sensor update policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/sensor_update_policy#name SensorUpdatePolicy#name}
  */
  readonly name: string;
  /**
  * Platform for the sensor update policy to manage. (Windows, Mac, Linux). Changing this value will require replacing the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/sensor_update_policy#platform_name SensorUpdatePolicy#platform_name}
  */
  readonly platformName: string;
  /**
  * Prohibit sensor updates during a set of time blocks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/sensor_update_policy#schedule SensorUpdatePolicy#schedule}
  */
  readonly schedule: SensorUpdatePolicySchedule;
  /**
  * Enable uninstall protection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/sensor_update_policy#uninstall_protection SensorUpdatePolicy#uninstall_protection}
  */
  readonly uninstallProtection?: boolean | cdktf.IResolvable;
}
export interface SensorUpdatePolicyScheduleTimeBlocks {
  /**
  * The days of the week the time block should be active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/sensor_update_policy#days SensorUpdatePolicy#days}
  */
  readonly days: string[];
  /**
  * The end time for the time block in 24HR format. Must be atleast 1 hour more than start_time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/sensor_update_policy#end_time SensorUpdatePolicy#end_time}
  */
  readonly endTime: string;
  /**
  * The start time for the time block in 24HR format. Must be atleast 1 hour before end_time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/sensor_update_policy#start_time SensorUpdatePolicy#start_time}
  */
  readonly startTime: string;
}

export function sensorUpdatePolicyScheduleTimeBlocksToTerraform(struct?: SensorUpdatePolicyScheduleTimeBlocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.days),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function sensorUpdatePolicyScheduleTimeBlocksToHclTerraform(struct?: SensorUpdatePolicyScheduleTimeBlocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.days),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class SensorUpdatePolicyScheduleTimeBlocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SensorUpdatePolicyScheduleTimeBlocks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SensorUpdatePolicyScheduleTimeBlocks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._days = undefined;
      this._endTime = undefined;
      this._startTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._days = value.days;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
    }
  }

  // days - computed: false, optional: false, required: true
  private _days?: string[]; 
  public get days() {
    return cdktf.Fn.tolist(this.getListAttribute('days'));
  }
  public set days(value: string[]) {
    this._days = value;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // end_time - computed: false, optional: false, required: true
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
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

export class SensorUpdatePolicyScheduleTimeBlocksList extends cdktf.ComplexList {
  public internalValue? : SensorUpdatePolicyScheduleTimeBlocks[] | cdktf.IResolvable

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
  public get(index: number): SensorUpdatePolicyScheduleTimeBlocksOutputReference {
    return new SensorUpdatePolicyScheduleTimeBlocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SensorUpdatePolicySchedule {
  /**
  * Enable the scheduler for sensor update policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/sensor_update_policy#enabled SensorUpdatePolicy#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The time block to prevent sensor updates. Only set when enabled is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/sensor_update_policy#time_blocks SensorUpdatePolicy#time_blocks}
  */
  readonly timeBlocks?: SensorUpdatePolicyScheduleTimeBlocks[] | cdktf.IResolvable;
  /**
  * The time zones that will be used for the time blocks. Only set when enabled is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/sensor_update_policy#timezone SensorUpdatePolicy#timezone}
  */
  readonly timezone?: string;
}

export function sensorUpdatePolicyScheduleToTerraform(struct?: SensorUpdatePolicySchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    time_blocks: cdktf.listMapper(sensorUpdatePolicyScheduleTimeBlocksToTerraform, false)(struct!.timeBlocks),
    timezone: cdktf.stringToTerraform(struct!.timezone),
  }
}


export function sensorUpdatePolicyScheduleToHclTerraform(struct?: SensorUpdatePolicySchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    time_blocks: {
      value: cdktf.listMapperHcl(sensorUpdatePolicyScheduleTimeBlocksToHclTerraform, false)(struct!.timeBlocks),
      isBlock: true,
      type: "set",
      storageClassType: "SensorUpdatePolicyScheduleTimeBlocksList",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SensorUpdatePolicyScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SensorUpdatePolicySchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._timeBlocks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeBlocks = this._timeBlocks?.internalValue;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SensorUpdatePolicySchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._timeBlocks.internalValue = undefined;
      this._timezone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._timeBlocks.internalValue = value.timeBlocks;
      this._timezone = value.timezone;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // time_blocks - computed: false, optional: true, required: false
  private _timeBlocks = new SensorUpdatePolicyScheduleTimeBlocksList(this, "time_blocks", true);
  public get timeBlocks() {
    return this._timeBlocks;
  }
  public putTimeBlocks(value: SensorUpdatePolicyScheduleTimeBlocks[] | cdktf.IResolvable) {
    this._timeBlocks.internalValue = value;
  }
  public resetTimeBlocks() {
    this._timeBlocks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeBlocksInput() {
    return this._timeBlocks.internalValue;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/sensor_update_policy crowdstrike_sensor_update_policy}
*/
export class SensorUpdatePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "crowdstrike_sensor_update_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SensorUpdatePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SensorUpdatePolicy to import
  * @param importFromId The id of the existing SensorUpdatePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/sensor_update_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SensorUpdatePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "crowdstrike_sensor_update_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.51/docs/resources/sensor_update_policy crowdstrike_sensor_update_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SensorUpdatePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: SensorUpdatePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'crowdstrike_sensor_update_policy',
      terraformGeneratorMetadata: {
        providerName: 'crowdstrike',
        providerVersion: '0.0.51',
        providerVersionConstraint: '0.0.51'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._build = config.buildAttribute;
    this._buildArm64 = config.buildArm64;
    this._description = config.description;
    this._enabled = config.enabled;
    this._hostGroups = config.hostGroups;
    this._name = config.name;
    this._platformName = config.platformName;
    this._schedule.internalValue = config.schedule;
    this._uninstallProtection = config.uninstallProtection;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // build - computed: false, optional: false, required: true
  private _build?: string; 
  public get buildAttribute() {
    return this.getStringAttribute('build');
  }
  public set buildAttribute(value: string) {
    this._build = value;
  }
  // Temporarily expose input value. Use with caution.
  public get buildAttributeInput() {
    return this._build;
  }

  // build_arm64 - computed: false, optional: true, required: false
  private _buildArm64?: string; 
  public get buildArm64() {
    return this.getStringAttribute('build_arm64');
  }
  public set buildArm64(value: string) {
    this._buildArm64 = value;
  }
  public resetBuildArm64() {
    this._buildArm64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildArm64Input() {
    return this._buildArm64;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // host_groups - computed: false, optional: true, required: false
  private _hostGroups?: string[]; 
  public get hostGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('host_groups'));
  }
  public set hostGroups(value: string[]) {
    this._hostGroups = value;
  }
  public resetHostGroups() {
    this._hostGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostGroupsInput() {
    return this._hostGroups;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
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

  // platform_name - computed: false, optional: false, required: true
  private _platformName?: string; 
  public get platformName() {
    return this.getStringAttribute('platform_name');
  }
  public set platformName(value: string) {
    this._platformName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get platformNameInput() {
    return this._platformName;
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule = new SensorUpdatePolicyScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: SensorUpdatePolicySchedule) {
    this._schedule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // uninstall_protection - computed: true, optional: true, required: false
  private _uninstallProtection?: boolean | cdktf.IResolvable; 
  public get uninstallProtection() {
    return this.getBooleanAttribute('uninstall_protection');
  }
  public set uninstallProtection(value: boolean | cdktf.IResolvable) {
    this._uninstallProtection = value;
  }
  public resetUninstallProtection() {
    this._uninstallProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uninstallProtectionInput() {
    return this._uninstallProtection;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      build: cdktf.stringToTerraform(this._build),
      build_arm64: cdktf.stringToTerraform(this._buildArm64),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      host_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hostGroups),
      name: cdktf.stringToTerraform(this._name),
      platform_name: cdktf.stringToTerraform(this._platformName),
      schedule: sensorUpdatePolicyScheduleToTerraform(this._schedule.internalValue),
      uninstall_protection: cdktf.booleanToTerraform(this._uninstallProtection),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      build: {
        value: cdktf.stringToHclTerraform(this._build),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      build_arm64: {
        value: cdktf.stringToHclTerraform(this._buildArm64),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hostGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      platform_name: {
        value: cdktf.stringToHclTerraform(this._platformName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule: {
        value: sensorUpdatePolicyScheduleToHclTerraform(this._schedule.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SensorUpdatePolicySchedule",
      },
      uninstall_protection: {
        value: cdktf.booleanToHclTerraform(this._uninstallProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
