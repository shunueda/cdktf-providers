// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_workflow
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WedataWorkflowConfig extends cdktf.TerraformMetaArguments {
  /**
  * Bundle Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_workflow#bundle_id WedataWorkflow#bundle_id}
  */
  readonly bundleId?: string;
  /**
  * Bundle Information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_workflow#bundle_info WedataWorkflow#bundle_info}
  */
  readonly bundleInfo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_workflow#id WedataWorkflow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Workflow Owner ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_workflow#owner_uin WedataWorkflow#owner_uin}
  */
  readonly ownerUin?: string;
  /**
  * Parent folder path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_workflow#parent_folder_path WedataWorkflow#parent_folder_path}
  */
  readonly parentFolderPath: string;
  /**
  * Project id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_workflow#project_id WedataWorkflow#project_id}
  */
  readonly projectId: string;
  /**
  * Workflow description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_workflow#workflow_desc WedataWorkflow#workflow_desc}
  */
  readonly workflowDesc?: string;
  /**
  * Workflow name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_workflow#workflow_name WedataWorkflow#workflow_name}
  */
  readonly workflowName: string;
  /**
  * Workflow type, value example: cycle cycle workflow;manual manual workflow, passed in cycle by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_workflow#workflow_type WedataWorkflow#workflow_type}
  */
  readonly workflowType?: string;
  /**
  * workflow_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_workflow#workflow_params WedataWorkflow#workflow_params}
  */
  readonly workflowParams?: WedataWorkflowWorkflowParams[] | cdktf.IResolvable;
  /**
  * workflow_scheduler_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_workflow#workflow_scheduler_configuration WedataWorkflow#workflow_scheduler_configuration}
  */
  readonly workflowSchedulerConfiguration?: WedataWorkflowWorkflowSchedulerConfiguration;
}
export interface WedataWorkflowWorkflowParams {
  /**
  * Parameter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_workflow#param_key WedataWorkflow#param_key}
  */
  readonly paramKey: string;
  /**
  * Parameter value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_workflow#param_value WedataWorkflow#param_value}
  */
  readonly paramValue: string;
}

export function wedataWorkflowWorkflowParamsToTerraform(struct?: WedataWorkflowWorkflowParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    param_key: cdktf.stringToTerraform(struct!.paramKey),
    param_value: cdktf.stringToTerraform(struct!.paramValue),
  }
}


export function wedataWorkflowWorkflowParamsToHclTerraform(struct?: WedataWorkflowWorkflowParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    param_key: {
      value: cdktf.stringToHclTerraform(struct!.paramKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    param_value: {
      value: cdktf.stringToHclTerraform(struct!.paramValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataWorkflowWorkflowParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WedataWorkflowWorkflowParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._paramKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramKey = this._paramKey;
    }
    if (this._paramValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramValue = this._paramValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataWorkflowWorkflowParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._paramKey = undefined;
      this._paramValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._paramKey = value.paramKey;
      this._paramValue = value.paramValue;
    }
  }

  // param_key - computed: false, optional: false, required: true
  private _paramKey?: string; 
  public get paramKey() {
    return this.getStringAttribute('param_key');
  }
  public set paramKey(value: string) {
    this._paramKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paramKeyInput() {
    return this._paramKey;
  }

  // param_value - computed: false, optional: false, required: true
  private _paramValue?: string; 
  public get paramValue() {
    return this.getStringAttribute('param_value');
  }
  public set paramValue(value: string) {
    this._paramValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paramValueInput() {
    return this._paramValue;
  }
}

export class WedataWorkflowWorkflowParamsList extends cdktf.ComplexList {
  public internalValue? : WedataWorkflowWorkflowParams[] | cdktf.IResolvable

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
  public get(index: number): WedataWorkflowWorkflowParamsOutputReference {
    return new WedataWorkflowWorkflowParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WedataWorkflowWorkflowSchedulerConfiguration {
  /**
  * calendar id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_workflow#calendar_id WedataWorkflow#calendar_id}
  */
  readonly calendarId?: string;
  /**
  * Do you want to turn on calendar scheduling 1 on 0 off.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_workflow#calendar_open WedataWorkflow#calendar_open}
  */
  readonly calendarOpen?: string;
  /**
  * Workflows have cross-workflow dependencies and are scheduled using cron expressions. If you save unified scheduling, unsupported dependencies will be broken.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_workflow#clear_link WedataWorkflow#clear_link}
  */
  readonly clearLink?: boolean | cdktf.IResolvable;
  /**
  * Crontab expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_workflow#crontab_expression WedataWorkflow#crontab_expression}
  */
  readonly crontabExpression: string;
  /**
  * Cycle type: Supported types are
  * ONEOFF_CYCLE: One-time
  * YEAR_CYCLE: Year
  * MONTH_CYCLE: Month
  * WEEK_CYCLE: Week
  * DAY_CYCLE: Day
  * HOUR_CYCLE: Hour
  * MINUTE_CYCLE: Minute
  * CRONTAB_CYCLE: crontab expression type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_workflow#cycle_type WedataWorkflow#cycle_type}
  */
  readonly cycleType: string;
  /**
  * Workflow dependence, yes or no.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_workflow#dependency_workflow WedataWorkflow#dependency_workflow}
  */
  readonly dependencyWorkflow?: string;
  /**
  * End time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_workflow#end_time WedataWorkflow#end_time}
  */
  readonly endTime: string;
  /**
  * Execution time right-closed interval, example: 23:59, only if the cycle type is MINUTE_CYCLE needs to be filled in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_workflow#execution_end_time WedataWorkflow#execution_end_time}
  */
  readonly executionEndTime?: string;
  /**
  * Execution time left-closed interval, example: 00:00, only if the cycle type is MINUTE_CYCLE needs to be filled in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_workflow#execution_start_time WedataWorkflow#execution_start_time}
  */
  readonly executionStartTime?: string;
  /**
  * Effective when ModifyCycleValue is 1, indicating the default modified upstream dependence-time dimension. The value is: 
  * * CRONTAB
  * * DAY
  * * HOUR
  * * LIST_DAY
  * * LIST_HOUR
  *  * LIST_MINUTE
  *  * MONTH
  * * RANGE_DAY
  *  * RANGE_HOUR
  *  * RANGE_MINUTE
  * * WEEK
  * * YEAR
  * 
  * https://capi.woa.com/object/detail? product=wedata&env=api_dev&version=2025-08-06&name=WorkflowSchedulerConfigurationInfo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_workflow#main_cyclic_config WedataWorkflow#main_cyclic_config}
  */
  readonly mainCyclicConfig?: string;
  /**
  * 0: Do not modify 1: Change the upstream dependency configuration of the task to the default value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_workflow#modify_cycle_value WedataWorkflow#modify_cycle_value}
  */
  readonly modifyCycleValue?: string;
  /**
  * time zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_workflow#schedule_time_zone WedataWorkflow#schedule_time_zone}
  */
  readonly scheduleTimeZone: string;
  /**
  * Self-dependence, default value serial, values are: parallel, serial, orderly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_workflow#self_depend WedataWorkflow#self_depend}
  */
  readonly selfDepend: string;
  /**
  * Start time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_workflow#start_time WedataWorkflow#start_time}
  */
  readonly startTime: string;
  /**
  * Effective when ModifyCycleValue is 1, which means that the default modified upstream dependency-instance range
  *  value is: 
  * * ALL_DAY_OF_YEAR
  * * ALL_MONTH_OF_YEAR
  * * CURRENT
  * * CURRENT_DAY
  * * CURRENT_HOUR
  * * CURRENT_MINUTE
  * * CURRENT_MONTH
  * * CURRENT_WEEK
  * * CURRENT_YEAR
  * * PREVIOUS_BEGIN_OF_MONTH
  * * PREVIOUS_DAY
  * * PREVIOUS_DAY_LATER_OFFSET_HOUR
  * * PREVIOUS_DAY_LATER_OFFSET_MINUTE
  * * PREVIOUS_END_OF_MONTH
  * * PREVIOUS_FRIDAY
  * * PREVIOUS_HOUR
  * * PREVIOUS_HOUR_CYCLE
  * * PREVIOUS_HOUR_LATER_OFFSET_MINUTE
  * * PREVIOUS_MINUTE_CYCLE
  * * PREVIOUS_MONTH
  * * PREVIOUS_WEEK
  * * PREVIOUS_WEEKEND
  * * RECENT_DATE
  * 
  * https://capi.woa.com/object/detail? product=wedata&env=api_dev&version=2025-08-06&name=WorkflowSchedulerConfigurationInfo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_workflow#subordinate_cyclic_config WedataWorkflow#subordinate_cyclic_config}
  */
  readonly subordinateCyclicConfig?: string;
}

export function wedataWorkflowWorkflowSchedulerConfigurationToTerraform(struct?: WedataWorkflowWorkflowSchedulerConfigurationOutputReference | WedataWorkflowWorkflowSchedulerConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    calendar_id: cdktf.stringToTerraform(struct!.calendarId),
    calendar_open: cdktf.stringToTerraform(struct!.calendarOpen),
    clear_link: cdktf.booleanToTerraform(struct!.clearLink),
    crontab_expression: cdktf.stringToTerraform(struct!.crontabExpression),
    cycle_type: cdktf.stringToTerraform(struct!.cycleType),
    dependency_workflow: cdktf.stringToTerraform(struct!.dependencyWorkflow),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    execution_end_time: cdktf.stringToTerraform(struct!.executionEndTime),
    execution_start_time: cdktf.stringToTerraform(struct!.executionStartTime),
    main_cyclic_config: cdktf.stringToTerraform(struct!.mainCyclicConfig),
    modify_cycle_value: cdktf.stringToTerraform(struct!.modifyCycleValue),
    schedule_time_zone: cdktf.stringToTerraform(struct!.scheduleTimeZone),
    self_depend: cdktf.stringToTerraform(struct!.selfDepend),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    subordinate_cyclic_config: cdktf.stringToTerraform(struct!.subordinateCyclicConfig),
  }
}


export function wedataWorkflowWorkflowSchedulerConfigurationToHclTerraform(struct?: WedataWorkflowWorkflowSchedulerConfigurationOutputReference | WedataWorkflowWorkflowSchedulerConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    calendar_id: {
      value: cdktf.stringToHclTerraform(struct!.calendarId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    calendar_open: {
      value: cdktf.stringToHclTerraform(struct!.calendarOpen),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clear_link: {
      value: cdktf.booleanToHclTerraform(struct!.clearLink),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    crontab_expression: {
      value: cdktf.stringToHclTerraform(struct!.crontabExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cycle_type: {
      value: cdktf.stringToHclTerraform(struct!.cycleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dependency_workflow: {
      value: cdktf.stringToHclTerraform(struct!.dependencyWorkflow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execution_end_time: {
      value: cdktf.stringToHclTerraform(struct!.executionEndTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execution_start_time: {
      value: cdktf.stringToHclTerraform(struct!.executionStartTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    main_cyclic_config: {
      value: cdktf.stringToHclTerraform(struct!.mainCyclicConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    modify_cycle_value: {
      value: cdktf.stringToHclTerraform(struct!.modifyCycleValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule_time_zone: {
      value: cdktf.stringToHclTerraform(struct!.scheduleTimeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    self_depend: {
      value: cdktf.stringToHclTerraform(struct!.selfDepend),
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
    subordinate_cyclic_config: {
      value: cdktf.stringToHclTerraform(struct!.subordinateCyclicConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataWorkflowWorkflowSchedulerConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WedataWorkflowWorkflowSchedulerConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._calendarId !== undefined) {
      hasAnyValues = true;
      internalValueResult.calendarId = this._calendarId;
    }
    if (this._calendarOpen !== undefined) {
      hasAnyValues = true;
      internalValueResult.calendarOpen = this._calendarOpen;
    }
    if (this._clearLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearLink = this._clearLink;
    }
    if (this._crontabExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.crontabExpression = this._crontabExpression;
    }
    if (this._cycleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.cycleType = this._cycleType;
    }
    if (this._dependencyWorkflow !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependencyWorkflow = this._dependencyWorkflow;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._executionEndTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionEndTime = this._executionEndTime;
    }
    if (this._executionStartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionStartTime = this._executionStartTime;
    }
    if (this._mainCyclicConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.mainCyclicConfig = this._mainCyclicConfig;
    }
    if (this._modifyCycleValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modifyCycleValue = this._modifyCycleValue;
    }
    if (this._scheduleTimeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleTimeZone = this._scheduleTimeZone;
    }
    if (this._selfDepend !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfDepend = this._selfDepend;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._subordinateCyclicConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.subordinateCyclicConfig = this._subordinateCyclicConfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataWorkflowWorkflowSchedulerConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._calendarId = undefined;
      this._calendarOpen = undefined;
      this._clearLink = undefined;
      this._crontabExpression = undefined;
      this._cycleType = undefined;
      this._dependencyWorkflow = undefined;
      this._endTime = undefined;
      this._executionEndTime = undefined;
      this._executionStartTime = undefined;
      this._mainCyclicConfig = undefined;
      this._modifyCycleValue = undefined;
      this._scheduleTimeZone = undefined;
      this._selfDepend = undefined;
      this._startTime = undefined;
      this._subordinateCyclicConfig = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._calendarId = value.calendarId;
      this._calendarOpen = value.calendarOpen;
      this._clearLink = value.clearLink;
      this._crontabExpression = value.crontabExpression;
      this._cycleType = value.cycleType;
      this._dependencyWorkflow = value.dependencyWorkflow;
      this._endTime = value.endTime;
      this._executionEndTime = value.executionEndTime;
      this._executionStartTime = value.executionStartTime;
      this._mainCyclicConfig = value.mainCyclicConfig;
      this._modifyCycleValue = value.modifyCycleValue;
      this._scheduleTimeZone = value.scheduleTimeZone;
      this._selfDepend = value.selfDepend;
      this._startTime = value.startTime;
      this._subordinateCyclicConfig = value.subordinateCyclicConfig;
    }
  }

  // calendar_id - computed: false, optional: true, required: false
  private _calendarId?: string; 
  public get calendarId() {
    return this.getStringAttribute('calendar_id');
  }
  public set calendarId(value: string) {
    this._calendarId = value;
  }
  public resetCalendarId() {
    this._calendarId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calendarIdInput() {
    return this._calendarId;
  }

  // calendar_open - computed: false, optional: true, required: false
  private _calendarOpen?: string; 
  public get calendarOpen() {
    return this.getStringAttribute('calendar_open');
  }
  public set calendarOpen(value: string) {
    this._calendarOpen = value;
  }
  public resetCalendarOpen() {
    this._calendarOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calendarOpenInput() {
    return this._calendarOpen;
  }

  // clear_link - computed: false, optional: true, required: false
  private _clearLink?: boolean | cdktf.IResolvable; 
  public get clearLink() {
    return this.getBooleanAttribute('clear_link');
  }
  public set clearLink(value: boolean | cdktf.IResolvable) {
    this._clearLink = value;
  }
  public resetClearLink() {
    this._clearLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearLinkInput() {
    return this._clearLink;
  }

  // crontab_expression - computed: false, optional: false, required: true
  private _crontabExpression?: string; 
  public get crontabExpression() {
    return this.getStringAttribute('crontab_expression');
  }
  public set crontabExpression(value: string) {
    this._crontabExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get crontabExpressionInput() {
    return this._crontabExpression;
  }

  // cycle_type - computed: false, optional: false, required: true
  private _cycleType?: string; 
  public get cycleType() {
    return this.getStringAttribute('cycle_type');
  }
  public set cycleType(value: string) {
    this._cycleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cycleTypeInput() {
    return this._cycleType;
  }

  // dependency_workflow - computed: false, optional: true, required: false
  private _dependencyWorkflow?: string; 
  public get dependencyWorkflow() {
    return this.getStringAttribute('dependency_workflow');
  }
  public set dependencyWorkflow(value: string) {
    this._dependencyWorkflow = value;
  }
  public resetDependencyWorkflow() {
    this._dependencyWorkflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependencyWorkflowInput() {
    return this._dependencyWorkflow;
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

  // execution_end_time - computed: false, optional: true, required: false
  private _executionEndTime?: string; 
  public get executionEndTime() {
    return this.getStringAttribute('execution_end_time');
  }
  public set executionEndTime(value: string) {
    this._executionEndTime = value;
  }
  public resetExecutionEndTime() {
    this._executionEndTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionEndTimeInput() {
    return this._executionEndTime;
  }

  // execution_start_time - computed: false, optional: true, required: false
  private _executionStartTime?: string; 
  public get executionStartTime() {
    return this.getStringAttribute('execution_start_time');
  }
  public set executionStartTime(value: string) {
    this._executionStartTime = value;
  }
  public resetExecutionStartTime() {
    this._executionStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionStartTimeInput() {
    return this._executionStartTime;
  }

  // main_cyclic_config - computed: false, optional: true, required: false
  private _mainCyclicConfig?: string; 
  public get mainCyclicConfig() {
    return this.getStringAttribute('main_cyclic_config');
  }
  public set mainCyclicConfig(value: string) {
    this._mainCyclicConfig = value;
  }
  public resetMainCyclicConfig() {
    this._mainCyclicConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainCyclicConfigInput() {
    return this._mainCyclicConfig;
  }

  // modify_cycle_value - computed: false, optional: true, required: false
  private _modifyCycleValue?: string; 
  public get modifyCycleValue() {
    return this.getStringAttribute('modify_cycle_value');
  }
  public set modifyCycleValue(value: string) {
    this._modifyCycleValue = value;
  }
  public resetModifyCycleValue() {
    this._modifyCycleValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyCycleValueInput() {
    return this._modifyCycleValue;
  }

  // schedule_time_zone - computed: false, optional: false, required: true
  private _scheduleTimeZone?: string; 
  public get scheduleTimeZone() {
    return this.getStringAttribute('schedule_time_zone');
  }
  public set scheduleTimeZone(value: string) {
    this._scheduleTimeZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleTimeZoneInput() {
    return this._scheduleTimeZone;
  }

  // self_depend - computed: false, optional: false, required: true
  private _selfDepend?: string; 
  public get selfDepend() {
    return this.getStringAttribute('self_depend');
  }
  public set selfDepend(value: string) {
    this._selfDepend = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selfDependInput() {
    return this._selfDepend;
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

  // subordinate_cyclic_config - computed: false, optional: true, required: false
  private _subordinateCyclicConfig?: string; 
  public get subordinateCyclicConfig() {
    return this.getStringAttribute('subordinate_cyclic_config');
  }
  public set subordinateCyclicConfig(value: string) {
    this._subordinateCyclicConfig = value;
  }
  public resetSubordinateCyclicConfig() {
    this._subordinateCyclicConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subordinateCyclicConfigInput() {
    return this._subordinateCyclicConfig;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_workflow tencentcloud_wedata_workflow}
*/
export class WedataWorkflow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_wedata_workflow";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WedataWorkflow resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WedataWorkflow to import
  * @param importFromId The id of the existing WedataWorkflow that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_workflow#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WedataWorkflow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_wedata_workflow", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_workflow tencentcloud_wedata_workflow} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WedataWorkflowConfig
  */
  public constructor(scope: Construct, id: string, config: WedataWorkflowConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_wedata_workflow',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.48',
        providerVersionConstraint: '1.82.48'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bundleId = config.bundleId;
    this._bundleInfo = config.bundleInfo;
    this._id = config.id;
    this._ownerUin = config.ownerUin;
    this._parentFolderPath = config.parentFolderPath;
    this._projectId = config.projectId;
    this._workflowDesc = config.workflowDesc;
    this._workflowName = config.workflowName;
    this._workflowType = config.workflowType;
    this._workflowParams.internalValue = config.workflowParams;
    this._workflowSchedulerConfiguration.internalValue = config.workflowSchedulerConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bundle_id - computed: false, optional: true, required: false
  private _bundleId?: string; 
  public get bundleId() {
    return this.getStringAttribute('bundle_id');
  }
  public set bundleId(value: string) {
    this._bundleId = value;
  }
  public resetBundleId() {
    this._bundleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleIdInput() {
    return this._bundleId;
  }

  // bundle_info - computed: false, optional: true, required: false
  private _bundleInfo?: string; 
  public get bundleInfo() {
    return this.getStringAttribute('bundle_info');
  }
  public set bundleInfo(value: string) {
    this._bundleInfo = value;
  }
  public resetBundleInfo() {
    this._bundleInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleInfoInput() {
    return this._bundleInfo;
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

  // owner_uin - computed: true, optional: true, required: false
  private _ownerUin?: string; 
  public get ownerUin() {
    return this.getStringAttribute('owner_uin');
  }
  public set ownerUin(value: string) {
    this._ownerUin = value;
  }
  public resetOwnerUin() {
    this._ownerUin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerUinInput() {
    return this._ownerUin;
  }

  // parent_folder_path - computed: false, optional: false, required: true
  private _parentFolderPath?: string; 
  public get parentFolderPath() {
    return this.getStringAttribute('parent_folder_path');
  }
  public set parentFolderPath(value: string) {
    this._parentFolderPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentFolderPathInput() {
    return this._parentFolderPath;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // workflow_desc - computed: false, optional: true, required: false
  private _workflowDesc?: string; 
  public get workflowDesc() {
    return this.getStringAttribute('workflow_desc');
  }
  public set workflowDesc(value: string) {
    this._workflowDesc = value;
  }
  public resetWorkflowDesc() {
    this._workflowDesc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowDescInput() {
    return this._workflowDesc;
  }

  // workflow_id - computed: true, optional: false, required: false
  public get workflowId() {
    return this.getStringAttribute('workflow_id');
  }

  // workflow_name - computed: false, optional: false, required: true
  private _workflowName?: string; 
  public get workflowName() {
    return this.getStringAttribute('workflow_name');
  }
  public set workflowName(value: string) {
    this._workflowName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowNameInput() {
    return this._workflowName;
  }

  // workflow_type - computed: false, optional: true, required: false
  private _workflowType?: string; 
  public get workflowType() {
    return this.getStringAttribute('workflow_type');
  }
  public set workflowType(value: string) {
    this._workflowType = value;
  }
  public resetWorkflowType() {
    this._workflowType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowTypeInput() {
    return this._workflowType;
  }

  // workflow_params - computed: false, optional: true, required: false
  private _workflowParams = new WedataWorkflowWorkflowParamsList(this, "workflow_params", true);
  public get workflowParams() {
    return this._workflowParams;
  }
  public putWorkflowParams(value: WedataWorkflowWorkflowParams[] | cdktf.IResolvable) {
    this._workflowParams.internalValue = value;
  }
  public resetWorkflowParams() {
    this._workflowParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowParamsInput() {
    return this._workflowParams.internalValue;
  }

  // workflow_scheduler_configuration - computed: false, optional: true, required: false
  private _workflowSchedulerConfiguration = new WedataWorkflowWorkflowSchedulerConfigurationOutputReference(this, "workflow_scheduler_configuration");
  public get workflowSchedulerConfiguration() {
    return this._workflowSchedulerConfiguration;
  }
  public putWorkflowSchedulerConfiguration(value: WedataWorkflowWorkflowSchedulerConfiguration) {
    this._workflowSchedulerConfiguration.internalValue = value;
  }
  public resetWorkflowSchedulerConfiguration() {
    this._workflowSchedulerConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowSchedulerConfigurationInput() {
    return this._workflowSchedulerConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bundle_id: cdktf.stringToTerraform(this._bundleId),
      bundle_info: cdktf.stringToTerraform(this._bundleInfo),
      id: cdktf.stringToTerraform(this._id),
      owner_uin: cdktf.stringToTerraform(this._ownerUin),
      parent_folder_path: cdktf.stringToTerraform(this._parentFolderPath),
      project_id: cdktf.stringToTerraform(this._projectId),
      workflow_desc: cdktf.stringToTerraform(this._workflowDesc),
      workflow_name: cdktf.stringToTerraform(this._workflowName),
      workflow_type: cdktf.stringToTerraform(this._workflowType),
      workflow_params: cdktf.listMapper(wedataWorkflowWorkflowParamsToTerraform, true)(this._workflowParams.internalValue),
      workflow_scheduler_configuration: wedataWorkflowWorkflowSchedulerConfigurationToTerraform(this._workflowSchedulerConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bundle_id: {
        value: cdktf.stringToHclTerraform(this._bundleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bundle_info: {
        value: cdktf.stringToHclTerraform(this._bundleInfo),
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
      owner_uin: {
        value: cdktf.stringToHclTerraform(this._ownerUin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_folder_path: {
        value: cdktf.stringToHclTerraform(this._parentFolderPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workflow_desc: {
        value: cdktf.stringToHclTerraform(this._workflowDesc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workflow_name: {
        value: cdktf.stringToHclTerraform(this._workflowName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workflow_type: {
        value: cdktf.stringToHclTerraform(this._workflowType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workflow_params: {
        value: cdktf.listMapperHcl(wedataWorkflowWorkflowParamsToHclTerraform, true)(this._workflowParams.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WedataWorkflowWorkflowParamsList",
      },
      workflow_scheduler_configuration: {
        value: wedataWorkflowWorkflowSchedulerConfigurationToHclTerraform(this._workflowSchedulerConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WedataWorkflowWorkflowSchedulerConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
