// https://registry.terraform.io/providers/fivetran/fivetran/1.9.18/docs/resources/transformation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TransformationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The field indicating whether the transformation will be set into the paused state. By default, the value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.18/docs/resources/transformation#paused Transformation#paused}
  */
  readonly paused?: boolean | cdktf.IResolvable;
  /**
  * Transformation type. The following values are supported: DBT_CORE, QUICKSTART.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.18/docs/resources/transformation#type Transformation#type}
  */
  readonly type?: string;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.18/docs/resources/transformation#schedule Transformation#schedule}
  */
  readonly schedule?: TransformationSchedule;
  /**
  * transformation_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.18/docs/resources/transformation#transformation_config Transformation#transformation_config}
  */
  readonly transformationConfig?: TransformationTransformationConfig;
}
export interface TransformationSchedule {
  /**
  * The list of the connection identifiers to be used for the integrated schedule. Not expected for QUICKSTART transformations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.18/docs/resources/transformation#connection_ids Transformation#connection_ids}
  */
  readonly connectionIds?: string[];
  /**
  * Cron schedule: list of CRON strings. Used for for CRON schedule type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.18/docs/resources/transformation#cron Transformation#cron}
  */
  readonly cron?: string[];
  /**
  * The set of the days of the week the transformation should be launched on. The following values are supported: MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY. Used for for INTEGRATED schedule type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.18/docs/resources/transformation#days_of_week Transformation#days_of_week}
  */
  readonly daysOfWeek?: string[];
  /**
  * The time interval in minutes between subsequent transformation runs. Used for for INTERVAL schedule type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.18/docs/resources/transformation#interval Transformation#interval}
  */
  readonly interval?: number;
  /**
  * The type of the schedule to run the Transformation on. The following values are supported: INTEGRATED, TIME_OF_DAY, INTERVAL, CRON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.18/docs/resources/transformation#schedule_type Transformation#schedule_type}
  */
  readonly scheduleType?: string;
  /**
  * The boolean flag that enables the Smart Syncing schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.18/docs/resources/transformation#smart_syncing Transformation#smart_syncing}
  */
  readonly smartSyncing?: boolean | cdktf.IResolvable;
  /**
  * The time of the day the transformation should be launched at. Supported values are: "00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00". Used for for TIME_OF_DAY schedule type 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.18/docs/resources/transformation#time_of_day Transformation#time_of_day}
  */
  readonly timeOfDay?: string;
}

export function transformationScheduleToTerraform(struct?: TransformationSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.connectionIds),
    cron: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cron),
    days_of_week: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.daysOfWeek),
    interval: cdktf.numberToTerraform(struct!.interval),
    schedule_type: cdktf.stringToTerraform(struct!.scheduleType),
    smart_syncing: cdktf.booleanToTerraform(struct!.smartSyncing),
    time_of_day: cdktf.stringToTerraform(struct!.timeOfDay),
  }
}


export function transformationScheduleToHclTerraform(struct?: TransformationSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.connectionIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    cron: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cron),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    days_of_week: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.daysOfWeek),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    schedule_type: {
      value: cdktf.stringToHclTerraform(struct!.scheduleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    smart_syncing: {
      value: cdktf.booleanToHclTerraform(struct!.smartSyncing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    time_of_day: {
      value: cdktf.stringToHclTerraform(struct!.timeOfDay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransformationScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TransformationSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionIds = this._connectionIds;
    }
    if (this._cron !== undefined) {
      hasAnyValues = true;
      internalValueResult.cron = this._cron;
    }
    if (this._daysOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysOfWeek = this._daysOfWeek;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._scheduleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleType = this._scheduleType;
    }
    if (this._smartSyncing !== undefined) {
      hasAnyValues = true;
      internalValueResult.smartSyncing = this._smartSyncing;
    }
    if (this._timeOfDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeOfDay = this._timeOfDay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransformationSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionIds = undefined;
      this._cron = undefined;
      this._daysOfWeek = undefined;
      this._interval = undefined;
      this._scheduleType = undefined;
      this._smartSyncing = undefined;
      this._timeOfDay = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionIds = value.connectionIds;
      this._cron = value.cron;
      this._daysOfWeek = value.daysOfWeek;
      this._interval = value.interval;
      this._scheduleType = value.scheduleType;
      this._smartSyncing = value.smartSyncing;
      this._timeOfDay = value.timeOfDay;
    }
  }

  // connection_ids - computed: false, optional: true, required: false
  private _connectionIds?: string[]; 
  public get connectionIds() {
    return cdktf.Fn.tolist(this.getListAttribute('connection_ids'));
  }
  public set connectionIds(value: string[]) {
    this._connectionIds = value;
  }
  public resetConnectionIds() {
    this._connectionIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdsInput() {
    return this._connectionIds;
  }

  // cron - computed: false, optional: true, required: false
  private _cron?: string[]; 
  public get cron() {
    return cdktf.Fn.tolist(this.getListAttribute('cron'));
  }
  public set cron(value: string[]) {
    this._cron = value;
  }
  public resetCron() {
    this._cron = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronInput() {
    return this._cron;
  }

  // days_of_week - computed: false, optional: true, required: false
  private _daysOfWeek?: string[]; 
  public get daysOfWeek() {
    return cdktf.Fn.tolist(this.getListAttribute('days_of_week'));
  }
  public set daysOfWeek(value: string[]) {
    this._daysOfWeek = value;
  }
  public resetDaysOfWeek() {
    this._daysOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysOfWeekInput() {
    return this._daysOfWeek;
  }

  // interval - computed: true, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // schedule_type - computed: true, optional: true, required: false
  private _scheduleType?: string; 
  public get scheduleType() {
    return this.getStringAttribute('schedule_type');
  }
  public set scheduleType(value: string) {
    this._scheduleType = value;
  }
  public resetScheduleType() {
    this._scheduleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleTypeInput() {
    return this._scheduleType;
  }

  // smart_syncing - computed: true, optional: true, required: false
  private _smartSyncing?: boolean | cdktf.IResolvable; 
  public get smartSyncing() {
    return this.getBooleanAttribute('smart_syncing');
  }
  public set smartSyncing(value: boolean | cdktf.IResolvable) {
    this._smartSyncing = value;
  }
  public resetSmartSyncing() {
    this._smartSyncing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartSyncingInput() {
    return this._smartSyncing;
  }

  // time_of_day - computed: false, optional: true, required: false
  private _timeOfDay?: string; 
  public get timeOfDay() {
    return this.getStringAttribute('time_of_day');
  }
  public set timeOfDay(value: string) {
    this._timeOfDay = value;
  }
  public resetTimeOfDay() {
    this._timeOfDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeOfDayInput() {
    return this._timeOfDay;
  }
}
export interface TransformationTransformationConfigSteps {
  /**
  * The dbt command in the transformation step
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.18/docs/resources/transformation#command Transformation#command}
  */
  readonly command?: string;
  /**
  * The step name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.18/docs/resources/transformation#name Transformation#name}
  */
  readonly name?: string;
}

export function transformationTransformationConfigStepsToTerraform(struct?: TransformationTransformationConfigSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.stringToTerraform(struct!.command),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function transformationTransformationConfigStepsToHclTerraform(struct?: TransformationTransformationConfigSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.stringToHclTerraform(struct!.command),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransformationTransformationConfigStepsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransformationTransformationConfigSteps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransformationTransformationConfigSteps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
      this._name = value.name;
    }
  }

  // command - computed: false, optional: true, required: false
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
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
}

export class TransformationTransformationConfigStepsList extends cdktf.ComplexList {
  public internalValue? : TransformationTransformationConfigSteps[] | cdktf.IResolvable

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
  public get(index: number): TransformationTransformationConfigStepsOutputReference {
    return new TransformationTransformationConfigStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransformationTransformationConfig {
  /**
  * The list of the connection identifiers to be used for the integrated schedule. Also used to identify package_name automatically if package_name was not specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.18/docs/resources/transformation#connection_ids Transformation#connection_ids}
  */
  readonly connectionIds?: string[];
  /**
  * The list of excluded output model names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.18/docs/resources/transformation#excluded_models Transformation#excluded_models}
  */
  readonly excludedModels?: string[];
  /**
  * The transformation name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.18/docs/resources/transformation#name Transformation#name}
  */
  readonly name?: string;
  /**
  * The Quickstart transformation package name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.18/docs/resources/transformation#package_name Transformation#package_name}
  */
  readonly packageName?: string;
  /**
  * The unique identifier for the dbt Core project within the Fivetran system
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.18/docs/resources/transformation#project_id Transformation#project_id}
  */
  readonly projectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.18/docs/resources/transformation#steps Transformation#steps}
  */
  readonly steps?: TransformationTransformationConfigSteps[] | cdktf.IResolvable;
  /**
  * The boolean flag indicating that a newer version is available for the transformation package
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.18/docs/resources/transformation#upgrade_available Transformation#upgrade_available}
  */
  readonly upgradeAvailable?: boolean | cdktf.IResolvable;
}

export function transformationTransformationConfigToTerraform(struct?: TransformationTransformationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.connectionIds),
    excluded_models: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedModels),
    name: cdktf.stringToTerraform(struct!.name),
    package_name: cdktf.stringToTerraform(struct!.packageName),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    steps: cdktf.listMapper(transformationTransformationConfigStepsToTerraform, false)(struct!.steps),
    upgrade_available: cdktf.booleanToTerraform(struct!.upgradeAvailable),
  }
}


export function transformationTransformationConfigToHclTerraform(struct?: TransformationTransformationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.connectionIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    excluded_models: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedModels),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    package_name: {
      value: cdktf.stringToHclTerraform(struct!.packageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    steps: {
      value: cdktf.listMapperHcl(transformationTransformationConfigStepsToHclTerraform, false)(struct!.steps),
      isBlock: true,
      type: "list",
      storageClassType: "TransformationTransformationConfigStepsList",
    },
    upgrade_available: {
      value: cdktf.booleanToHclTerraform(struct!.upgradeAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransformationTransformationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TransformationTransformationConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionIds = this._connectionIds;
    }
    if (this._excludedModels !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedModels = this._excludedModels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._packageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageName = this._packageName;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._steps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.steps = this._steps?.internalValue;
    }
    if (this._upgradeAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeAvailable = this._upgradeAvailable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransformationTransformationConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionIds = undefined;
      this._excludedModels = undefined;
      this._name = undefined;
      this._packageName = undefined;
      this._projectId = undefined;
      this._steps.internalValue = undefined;
      this._upgradeAvailable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionIds = value.connectionIds;
      this._excludedModels = value.excludedModels;
      this._name = value.name;
      this._packageName = value.packageName;
      this._projectId = value.projectId;
      this._steps.internalValue = value.steps;
      this._upgradeAvailable = value.upgradeAvailable;
    }
  }

  // connection_ids - computed: false, optional: true, required: false
  private _connectionIds?: string[]; 
  public get connectionIds() {
    return cdktf.Fn.tolist(this.getListAttribute('connection_ids'));
  }
  public set connectionIds(value: string[]) {
    this._connectionIds = value;
  }
  public resetConnectionIds() {
    this._connectionIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdsInput() {
    return this._connectionIds;
  }

  // excluded_models - computed: false, optional: true, required: false
  private _excludedModels?: string[]; 
  public get excludedModels() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_models'));
  }
  public set excludedModels(value: string[]) {
    this._excludedModels = value;
  }
  public resetExcludedModels() {
    this._excludedModels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedModelsInput() {
    return this._excludedModels;
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

  // package_name - computed: false, optional: true, required: false
  private _packageName?: string; 
  public get packageName() {
    return this.getStringAttribute('package_name');
  }
  public set packageName(value: string) {
    this._packageName = value;
  }
  public resetPackageName() {
    this._packageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageNameInput() {
    return this._packageName;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // steps - computed: false, optional: true, required: false
  private _steps = new TransformationTransformationConfigStepsList(this, "steps", false);
  public get steps() {
    return this._steps;
  }
  public putSteps(value: TransformationTransformationConfigSteps[] | cdktf.IResolvable) {
    this._steps.internalValue = value;
  }
  public resetSteps() {
    this._steps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepsInput() {
    return this._steps.internalValue;
  }

  // upgrade_available - computed: true, optional: true, required: false
  private _upgradeAvailable?: boolean | cdktf.IResolvable; 
  public get upgradeAvailable() {
    return this.getBooleanAttribute('upgrade_available');
  }
  public set upgradeAvailable(value: boolean | cdktf.IResolvable) {
    this._upgradeAvailable = value;
  }
  public resetUpgradeAvailable() {
    this._upgradeAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeAvailableInput() {
    return this._upgradeAvailable;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.18/docs/resources/transformation fivetran_transformation}
*/
export class Transformation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fivetran_transformation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Transformation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Transformation to import
  * @param importFromId The id of the existing Transformation that should be imported. Refer to the {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.18/docs/resources/transformation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Transformation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fivetran_transformation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.18/docs/resources/transformation fivetran_transformation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TransformationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: TransformationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fivetran_transformation',
      terraformGeneratorMetadata: {
        providerName: 'fivetran',
        providerVersion: '1.9.18',
        providerVersionConstraint: '1.9.18'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._paused = config.paused;
    this._type = config.type;
    this._schedule.internalValue = config.schedule;
    this._transformationConfig.internalValue = config.transformationConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by_id - computed: true, optional: false, required: false
  public get createdById() {
    return this.getStringAttribute('created_by_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // output_model_names - computed: true, optional: false, required: false
  public get outputModelNames() {
    return cdktf.Fn.tolist(this.getListAttribute('output_model_names'));
  }

  // paused - computed: true, optional: true, required: false
  private _paused?: boolean | cdktf.IResolvable; 
  public get paused() {
    return this.getBooleanAttribute('paused');
  }
  public set paused(value: boolean | cdktf.IResolvable) {
    this._paused = value;
  }
  public resetPaused() {
    this._paused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pausedInput() {
    return this._paused;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new TransformationScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: TransformationSchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // transformation_config - computed: false, optional: true, required: false
  private _transformationConfig = new TransformationTransformationConfigOutputReference(this, "transformation_config");
  public get transformationConfig() {
    return this._transformationConfig;
  }
  public putTransformationConfig(value: TransformationTransformationConfig) {
    this._transformationConfig.internalValue = value;
  }
  public resetTransformationConfig() {
    this._transformationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationConfigInput() {
    return this._transformationConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      paused: cdktf.booleanToTerraform(this._paused),
      type: cdktf.stringToTerraform(this._type),
      schedule: transformationScheduleToTerraform(this._schedule.internalValue),
      transformation_config: transformationTransformationConfigToTerraform(this._transformationConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      paused: {
        value: cdktf.booleanToHclTerraform(this._paused),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule: {
        value: transformationScheduleToHclTerraform(this._schedule.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TransformationSchedule",
      },
      transformation_config: {
        value: transformationTransformationConfigToHclTerraform(this._transformationConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TransformationTransformationConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
