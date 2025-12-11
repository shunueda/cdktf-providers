// https://registry.terraform.io/providers/platacard/temporal/0.15.0/docs/resources/schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Action to execute on schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.15.0/docs/resources/schedule#action Schedule#action}
  */
  readonly action: ScheduleAction;
  /**
  * Non-indexed key-value pairs for metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.15.0/docs/resources/schedule#memo Schedule#memo}
  */
  readonly memo?: { [key: string]: string };
  /**
  * Namespace where the schedule resides
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.15.0/docs/resources/schedule#namespace Schedule#namespace}
  */
  readonly namespace: string;
  /**
  * Schedule policy configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.15.0/docs/resources/schedule#policy_config Schedule#policy_config}
  */
  readonly policyConfig: SchedulePolicyConfig;
  /**
  * Unique identifier for the schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.15.0/docs/resources/schedule#schedule_id Schedule#schedule_id}
  */
  readonly scheduleId: string;
  /**
  * Schedule specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.15.0/docs/resources/schedule#spec Schedule#spec}
  */
  readonly spec: ScheduleSpec;
  /**
  * Schedule state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.15.0/docs/resources/schedule#state Schedule#state}
  */
  readonly state: ScheduleState;
}
export interface ScheduleActionWorkflow {
  /**
  * Execution timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.15.0/docs/resources/schedule#execution_timeout Schedule#execution_timeout}
  */
  readonly executionTimeout?: string;
  /**
  * Workflow input (JSON)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.15.0/docs/resources/schedule#input Schedule#input}
  */
  readonly input?: string;
  /**
  * Run timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.15.0/docs/resources/schedule#run_timeout Schedule#run_timeout}
  */
  readonly runTimeout?: string;
  /**
  * Task Queue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.15.0/docs/resources/schedule#task_queue Schedule#task_queue}
  */
  readonly taskQueue: string;
  /**
  * Task timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.15.0/docs/resources/schedule#task_timeout Schedule#task_timeout}
  */
  readonly taskTimeout?: string;
  /**
  * Workflow ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.15.0/docs/resources/schedule#workflow_id Schedule#workflow_id}
  */
  readonly workflowId: string;
  /**
  * Workflow Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.15.0/docs/resources/schedule#workflow_type Schedule#workflow_type}
  */
  readonly workflowType: string;
}

export function scheduleActionWorkflowToTerraform(struct?: ScheduleActionWorkflow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    execution_timeout: cdktf.stringToTerraform(struct!.executionTimeout),
    input: cdktf.stringToTerraform(struct!.input),
    run_timeout: cdktf.stringToTerraform(struct!.runTimeout),
    task_queue: cdktf.stringToTerraform(struct!.taskQueue),
    task_timeout: cdktf.stringToTerraform(struct!.taskTimeout),
    workflow_id: cdktf.stringToTerraform(struct!.workflowId),
    workflow_type: cdktf.stringToTerraform(struct!.workflowType),
  }
}


export function scheduleActionWorkflowToHclTerraform(struct?: ScheduleActionWorkflow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    execution_timeout: {
      value: cdktf.stringToHclTerraform(struct!.executionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input: {
      value: cdktf.stringToHclTerraform(struct!.input),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_timeout: {
      value: cdktf.stringToHclTerraform(struct!.runTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_queue: {
      value: cdktf.stringToHclTerraform(struct!.taskQueue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_timeout: {
      value: cdktf.stringToHclTerraform(struct!.taskTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workflow_id: {
      value: cdktf.stringToHclTerraform(struct!.workflowId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workflow_type: {
      value: cdktf.stringToHclTerraform(struct!.workflowType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScheduleActionWorkflowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ScheduleActionWorkflow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._executionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionTimeout = this._executionTimeout;
    }
    if (this._input !== undefined) {
      hasAnyValues = true;
      internalValueResult.input = this._input;
    }
    if (this._runTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.runTimeout = this._runTimeout;
    }
    if (this._taskQueue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskQueue = this._taskQueue;
    }
    if (this._taskTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskTimeout = this._taskTimeout;
    }
    if (this._workflowId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflowId = this._workflowId;
    }
    if (this._workflowType !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflowType = this._workflowType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScheduleActionWorkflow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._executionTimeout = undefined;
      this._input = undefined;
      this._runTimeout = undefined;
      this._taskQueue = undefined;
      this._taskTimeout = undefined;
      this._workflowId = undefined;
      this._workflowType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._executionTimeout = value.executionTimeout;
      this._input = value.input;
      this._runTimeout = value.runTimeout;
      this._taskQueue = value.taskQueue;
      this._taskTimeout = value.taskTimeout;
      this._workflowId = value.workflowId;
      this._workflowType = value.workflowType;
    }
  }

  // execution_timeout - computed: false, optional: true, required: false
  private _executionTimeout?: string; 
  public get executionTimeout() {
    return this.getStringAttribute('execution_timeout');
  }
  public set executionTimeout(value: string) {
    this._executionTimeout = value;
  }
  public resetExecutionTimeout() {
    this._executionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionTimeoutInput() {
    return this._executionTimeout;
  }

  // input - computed: false, optional: true, required: false
  private _input?: string; 
  public get input() {
    return this.getStringAttribute('input');
  }
  public set input(value: string) {
    this._input = value;
  }
  public resetInput() {
    this._input = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input;
  }

  // run_timeout - computed: false, optional: true, required: false
  private _runTimeout?: string; 
  public get runTimeout() {
    return this.getStringAttribute('run_timeout');
  }
  public set runTimeout(value: string) {
    this._runTimeout = value;
  }
  public resetRunTimeout() {
    this._runTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runTimeoutInput() {
    return this._runTimeout;
  }

  // task_queue - computed: false, optional: false, required: true
  private _taskQueue?: string; 
  public get taskQueue() {
    return this.getStringAttribute('task_queue');
  }
  public set taskQueue(value: string) {
    this._taskQueue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskQueueInput() {
    return this._taskQueue;
  }

  // task_timeout - computed: false, optional: true, required: false
  private _taskTimeout?: string; 
  public get taskTimeout() {
    return this.getStringAttribute('task_timeout');
  }
  public set taskTimeout(value: string) {
    this._taskTimeout = value;
  }
  public resetTaskTimeout() {
    this._taskTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTimeoutInput() {
    return this._taskTimeout;
  }

  // workflow_id - computed: false, optional: false, required: true
  private _workflowId?: string; 
  public get workflowId() {
    return this.getStringAttribute('workflow_id');
  }
  public set workflowId(value: string) {
    this._workflowId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowIdInput() {
    return this._workflowId;
  }

  // workflow_type - computed: false, optional: false, required: true
  private _workflowType?: string; 
  public get workflowType() {
    return this.getStringAttribute('workflow_type');
  }
  public set workflowType(value: string) {
    this._workflowType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowTypeInput() {
    return this._workflowType;
  }
}
export interface ScheduleAction {
  /**
  * Workflow action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.15.0/docs/resources/schedule#workflow Schedule#workflow}
  */
  readonly workflow: ScheduleActionWorkflow;
}

export function scheduleActionToTerraform(struct?: ScheduleAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workflow: scheduleActionWorkflowToTerraform(struct!.workflow),
  }
}


export function scheduleActionToHclTerraform(struct?: ScheduleAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    workflow: {
      value: scheduleActionWorkflowToHclTerraform(struct!.workflow),
      isBlock: true,
      type: "struct",
      storageClassType: "ScheduleActionWorkflow",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScheduleActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ScheduleAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workflow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflow = this._workflow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScheduleAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._workflow.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._workflow.internalValue = value.workflow;
    }
  }

  // workflow - computed: false, optional: false, required: true
  private _workflow = new ScheduleActionWorkflowOutputReference(this, "workflow");
  public get workflow() {
    return this._workflow;
  }
  public putWorkflow(value: ScheduleActionWorkflow) {
    this._workflow.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowInput() {
    return this._workflow.internalValue;
  }
}
export interface SchedulePolicyConfig {
  /**
  * Maximum catch-up time for when the Service is unavailable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.15.0/docs/resources/schedule#catchup_window Schedule#catchup_window}
  */
  readonly catchupWindow?: string;
  /**
  * Policy for handling overlapping Workflow Executions. Accepted values: Skip, BufferOne, BufferAll, CancelOther, TerminateOther, AllowAll
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.15.0/docs/resources/schedule#overlap_policy Schedule#overlap_policy}
  */
  readonly overlapPolicy?: string;
  /**
  * Pause the schedule on action failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.15.0/docs/resources/schedule#pause_on_failure Schedule#pause_on_failure}
  */
  readonly pauseOnFailure?: boolean | cdktf.IResolvable;
}

export function schedulePolicyConfigToTerraform(struct?: SchedulePolicyConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catchup_window: cdktf.stringToTerraform(struct!.catchupWindow),
    overlap_policy: cdktf.stringToTerraform(struct!.overlapPolicy),
    pause_on_failure: cdktf.booleanToTerraform(struct!.pauseOnFailure),
  }
}


export function schedulePolicyConfigToHclTerraform(struct?: SchedulePolicyConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catchup_window: {
      value: cdktf.stringToHclTerraform(struct!.catchupWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overlap_policy: {
      value: cdktf.stringToHclTerraform(struct!.overlapPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pause_on_failure: {
      value: cdktf.booleanToHclTerraform(struct!.pauseOnFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SchedulePolicyConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SchedulePolicyConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catchupWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.catchupWindow = this._catchupWindow;
    }
    if (this._overlapPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.overlapPolicy = this._overlapPolicy;
    }
    if (this._pauseOnFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.pauseOnFailure = this._pauseOnFailure;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchedulePolicyConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catchupWindow = undefined;
      this._overlapPolicy = undefined;
      this._pauseOnFailure = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catchupWindow = value.catchupWindow;
      this._overlapPolicy = value.overlapPolicy;
      this._pauseOnFailure = value.pauseOnFailure;
    }
  }

  // catchup_window - computed: true, optional: true, required: false
  private _catchupWindow?: string; 
  public get catchupWindow() {
    return this.getStringAttribute('catchup_window');
  }
  public set catchupWindow(value: string) {
    this._catchupWindow = value;
  }
  public resetCatchupWindow() {
    this._catchupWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catchupWindowInput() {
    return this._catchupWindow;
  }

  // overlap_policy - computed: true, optional: true, required: false
  private _overlapPolicy?: string; 
  public get overlapPolicy() {
    return this.getStringAttribute('overlap_policy');
  }
  public set overlapPolicy(value: string) {
    this._overlapPolicy = value;
  }
  public resetOverlapPolicy() {
    this._overlapPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overlapPolicyInput() {
    return this._overlapPolicy;
  }

  // pause_on_failure - computed: true, optional: true, required: false
  private _pauseOnFailure?: boolean | cdktf.IResolvable; 
  public get pauseOnFailure() {
    return this.getBooleanAttribute('pause_on_failure');
  }
  public set pauseOnFailure(value: boolean | cdktf.IResolvable) {
    this._pauseOnFailure = value;
  }
  public resetPauseOnFailure() {
    this._pauseOnFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseOnFailureInput() {
    return this._pauseOnFailure;
  }
}
export interface ScheduleSpecCalendarItems {
  /**
  * Optional comment describing this calendar entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.15.0/docs/resources/schedule#comment Schedule#comment}
  */
  readonly comment?: string;
  /**
  * Day of month specification (e.g., '1', '1,15', '1-31')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.15.0/docs/resources/schedule#day_of_month Schedule#day_of_month}
  */
  readonly dayOfMonth?: string;
  /**
  * Day of week specification in numeric format (e.g., '1', '1-6', '1,3,5')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.15.0/docs/resources/schedule#day_of_week Schedule#day_of_week}
  */
  readonly dayOfWeek?: string;
  /**
  * Hour specification (e.g., '9', '9-17', '11-14')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.15.0/docs/resources/schedule#hour Schedule#hour}
  */
  readonly hour?: string;
  /**
  * Minute specification (e.g., '0', '0,30', '* /15', '*')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.15.0/docs/resources/schedule#minute Schedule#minute}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly minute?: string;
  /**
  * Month specification in numeric format (e.g., '1', '1,2,9', '1-12')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.15.0/docs/resources/schedule#month Schedule#month}
  */
  readonly month?: string;
  /**
  * Second specification (e.g., '0', '0,30', '*')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.15.0/docs/resources/schedule#second Schedule#second}
  */
  readonly second?: string;
  /**
  * Year specification (e.g., '2022', '2022-2025')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.15.0/docs/resources/schedule#year Schedule#year}
  */
  readonly year?: string;
}

export function scheduleSpecCalendarItemsToTerraform(struct?: ScheduleSpecCalendarItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    day_of_month: cdktf.stringToTerraform(struct!.dayOfMonth),
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
    hour: cdktf.stringToTerraform(struct!.hour),
    minute: cdktf.stringToTerraform(struct!.minute),
    month: cdktf.stringToTerraform(struct!.month),
    second: cdktf.stringToTerraform(struct!.second),
    year: cdktf.stringToTerraform(struct!.year),
  }
}


export function scheduleSpecCalendarItemsToHclTerraform(struct?: ScheduleSpecCalendarItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    day_of_month: {
      value: cdktf.stringToHclTerraform(struct!.dayOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    day_of_week: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hour: {
      value: cdktf.stringToHclTerraform(struct!.hour),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minute: {
      value: cdktf.stringToHclTerraform(struct!.minute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    month: {
      value: cdktf.stringToHclTerraform(struct!.month),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    second: {
      value: cdktf.stringToHclTerraform(struct!.second),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    year: {
      value: cdktf.stringToHclTerraform(struct!.year),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScheduleSpecCalendarItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScheduleSpecCalendarItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
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
    if (this._minute !== undefined) {
      hasAnyValues = true;
      internalValueResult.minute = this._minute;
    }
    if (this._month !== undefined) {
      hasAnyValues = true;
      internalValueResult.month = this._month;
    }
    if (this._second !== undefined) {
      hasAnyValues = true;
      internalValueResult.second = this._second;
    }
    if (this._year !== undefined) {
      hasAnyValues = true;
      internalValueResult.year = this._year;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScheduleSpecCalendarItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._dayOfMonth = undefined;
      this._dayOfWeek = undefined;
      this._hour = undefined;
      this._minute = undefined;
      this._month = undefined;
      this._second = undefined;
      this._year = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._dayOfMonth = value.dayOfMonth;
      this._dayOfWeek = value.dayOfWeek;
      this._hour = value.hour;
      this._minute = value.minute;
      this._month = value.month;
      this._second = value.second;
      this._year = value.year;
    }
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // day_of_month - computed: true, optional: true, required: false
  private _dayOfMonth?: string; 
  public get dayOfMonth() {
    return this.getStringAttribute('day_of_month');
  }
  public set dayOfMonth(value: string) {
    this._dayOfMonth = value;
  }
  public resetDayOfMonth() {
    this._dayOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfMonthInput() {
    return this._dayOfMonth;
  }

  // day_of_week - computed: true, optional: true, required: false
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  public resetDayOfWeek() {
    this._dayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // hour - computed: true, optional: true, required: false
  private _hour?: string; 
  public get hour() {
    return this.getStringAttribute('hour');
  }
  public set hour(value: string) {
    this._hour = value;
  }
  public resetHour() {
    this._hour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourInput() {
    return this._hour;
  }

  // minute - computed: true, optional: true, required: false
  private _minute?: string; 
  public get minute() {
    return this.getStringAttribute('minute');
  }
  public set minute(value: string) {
    this._minute = value;
  }
  public resetMinute() {
    this._minute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minuteInput() {
    return this._minute;
  }

  // month - computed: true, optional: true, required: false
  private _month?: string; 
  public get month() {
    return this.getStringAttribute('month');
  }
  public set month(value: string) {
    this._month = value;
  }
  public resetMonth() {
    this._month = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthInput() {
    return this._month;
  }

  // second - computed: true, optional: true, required: false
  private _second?: string; 
  public get second() {
    return this.getStringAttribute('second');
  }
  public set second(value: string) {
    this._second = value;
  }
  public resetSecond() {
    this._second = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondInput() {
    return this._second;
  }

  // year - computed: true, optional: true, required: false
  private _year?: string; 
  public get year() {
    return this.getStringAttribute('year');
  }
  public set year(value: string) {
    this._year = value;
  }
  public resetYear() {
    this._year = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearInput() {
    return this._year;
  }
}

export class ScheduleSpecCalendarItemsList extends cdktf.ComplexList {
  public internalValue? : ScheduleSpecCalendarItems[] | cdktf.IResolvable

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
  public get(index: number): ScheduleSpecCalendarItemsOutputReference {
    return new ScheduleSpecCalendarItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScheduleSpecIntervals {
  /**
  * Duration of the interval (e.g., '24h', '7d')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.15.0/docs/resources/schedule#every Schedule#every}
  */
  readonly every: string;
  /**
  * Offset from the interval (e.g., '1h')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.15.0/docs/resources/schedule#offset Schedule#offset}
  */
  readonly offset?: string;
}

export function scheduleSpecIntervalsToTerraform(struct?: ScheduleSpecIntervals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    every: cdktf.stringToTerraform(struct!.every),
    offset: cdktf.stringToTerraform(struct!.offset),
  }
}


export function scheduleSpecIntervalsToHclTerraform(struct?: ScheduleSpecIntervals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    every: {
      value: cdktf.stringToHclTerraform(struct!.every),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    offset: {
      value: cdktf.stringToHclTerraform(struct!.offset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScheduleSpecIntervalsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScheduleSpecIntervals | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._every !== undefined) {
      hasAnyValues = true;
      internalValueResult.every = this._every;
    }
    if (this._offset !== undefined) {
      hasAnyValues = true;
      internalValueResult.offset = this._offset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScheduleSpecIntervals | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._every = undefined;
      this._offset = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._every = value.every;
      this._offset = value.offset;
    }
  }

  // every - computed: false, optional: false, required: true
  private _every?: string; 
  public get every() {
    return this.getStringAttribute('every');
  }
  public set every(value: string) {
    this._every = value;
  }
  // Temporarily expose input value. Use with caution.
  public get everyInput() {
    return this._every;
  }

  // offset - computed: false, optional: true, required: false
  private _offset?: string; 
  public get offset() {
    return this.getStringAttribute('offset');
  }
  public set offset(value: string) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }
}

export class ScheduleSpecIntervalsList extends cdktf.ComplexList {
  public internalValue? : ScheduleSpecIntervals[] | cdktf.IResolvable

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
  public get(index: number): ScheduleSpecIntervalsOutputReference {
    return new ScheduleSpecIntervalsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScheduleSpec {
  /**
  * Calendar expressions for schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.15.0/docs/resources/schedule#calendar_items Schedule#calendar_items}
  */
  readonly calendarItems?: ScheduleSpecCalendarItems[] | cdktf.IResolvable;
  /**
  * Traditional cron expressions (e.g. '15 8 * * *')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.15.0/docs/resources/schedule#cron_items Schedule#cron_items}
  */
  readonly cronItems?: string[];
  /**
  * End time of the schedule (RFC3339)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.15.0/docs/resources/schedule#end_time Schedule#end_time}
  */
  readonly endTime?: string;
  /**
  * Time intervals for schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.15.0/docs/resources/schedule#intervals Schedule#intervals}
  */
  readonly intervals?: ScheduleSpecIntervals[] | cdktf.IResolvable;
  /**
  * Jitter duration to add randomness to scheduled times
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.15.0/docs/resources/schedule#jitter Schedule#jitter}
  */
  readonly jitter?: string;
  /**
  * Start time of the schedule (RFC3339)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.15.0/docs/resources/schedule#start_time Schedule#start_time}
  */
  readonly startTime?: string;
  /**
  * Time zone for the schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.15.0/docs/resources/schedule#time_zone Schedule#time_zone}
  */
  readonly timeZone?: string;
}

export function scheduleSpecToTerraform(struct?: ScheduleSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    calendar_items: cdktf.listMapper(scheduleSpecCalendarItemsToTerraform, false)(struct!.calendarItems),
    cron_items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cronItems),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    intervals: cdktf.listMapper(scheduleSpecIntervalsToTerraform, false)(struct!.intervals),
    jitter: cdktf.stringToTerraform(struct!.jitter),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
  }
}


export function scheduleSpecToHclTerraform(struct?: ScheduleSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    calendar_items: {
      value: cdktf.listMapperHcl(scheduleSpecCalendarItemsToHclTerraform, false)(struct!.calendarItems),
      isBlock: true,
      type: "list",
      storageClassType: "ScheduleSpecCalendarItemsList",
    },
    cron_items: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cronItems),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    intervals: {
      value: cdktf.listMapperHcl(scheduleSpecIntervalsToHclTerraform, false)(struct!.intervals),
      isBlock: true,
      type: "list",
      storageClassType: "ScheduleSpecIntervalsList",
    },
    jitter: {
      value: cdktf.stringToHclTerraform(struct!.jitter),
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
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScheduleSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ScheduleSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._calendarItems?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.calendarItems = this._calendarItems?.internalValue;
    }
    if (this._cronItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronItems = this._cronItems;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._intervals?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervals = this._intervals?.internalValue;
    }
    if (this._jitter !== undefined) {
      hasAnyValues = true;
      internalValueResult.jitter = this._jitter;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScheduleSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._calendarItems.internalValue = undefined;
      this._cronItems = undefined;
      this._endTime = undefined;
      this._intervals.internalValue = undefined;
      this._jitter = undefined;
      this._startTime = undefined;
      this._timeZone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._calendarItems.internalValue = value.calendarItems;
      this._cronItems = value.cronItems;
      this._endTime = value.endTime;
      this._intervals.internalValue = value.intervals;
      this._jitter = value.jitter;
      this._startTime = value.startTime;
      this._timeZone = value.timeZone;
    }
  }

  // calendar_items - computed: false, optional: true, required: false
  private _calendarItems = new ScheduleSpecCalendarItemsList(this, "calendar_items", false);
  public get calendarItems() {
    return this._calendarItems;
  }
  public putCalendarItems(value: ScheduleSpecCalendarItems[] | cdktf.IResolvable) {
    this._calendarItems.internalValue = value;
  }
  public resetCalendarItems() {
    this._calendarItems.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calendarItemsInput() {
    return this._calendarItems.internalValue;
  }

  // cron_items - computed: false, optional: true, required: false
  private _cronItems?: string[]; 
  public get cronItems() {
    return this.getListAttribute('cron_items');
  }
  public set cronItems(value: string[]) {
    this._cronItems = value;
  }
  public resetCronItems() {
    this._cronItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronItemsInput() {
    return this._cronItems;
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // intervals - computed: false, optional: true, required: false
  private _intervals = new ScheduleSpecIntervalsList(this, "intervals", false);
  public get intervals() {
    return this._intervals;
  }
  public putIntervals(value: ScheduleSpecIntervals[] | cdktf.IResolvable) {
    this._intervals.internalValue = value;
  }
  public resetIntervals() {
    this._intervals.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalsInput() {
    return this._intervals.internalValue;
  }

  // jitter - computed: false, optional: true, required: false
  private _jitter?: string; 
  public get jitter() {
    return this.getStringAttribute('jitter');
  }
  public set jitter(value: string) {
    this._jitter = value;
  }
  public resetJitter() {
    this._jitter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jitterInput() {
    return this._jitter;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // time_zone - computed: true, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }
}
export interface ScheduleState {
  /**
  * Whether the schedule is limited to a specific number of actions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.15.0/docs/resources/schedule#limited_actions Schedule#limited_actions}
  */
  readonly limitedActions?: boolean | cdktf.IResolvable;
  /**
  * Initial notes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.15.0/docs/resources/schedule#notes Schedule#notes}
  */
  readonly notes?: string;
  /**
  * Pause the Schedule immediately on creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.15.0/docs/resources/schedule#paused Schedule#paused}
  */
  readonly paused?: boolean | cdktf.IResolvable;
  /**
  * Total allowed actions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.15.0/docs/resources/schedule#remaining_actions Schedule#remaining_actions}
  */
  readonly remainingActions?: number;
}

export function scheduleStateToTerraform(struct?: ScheduleState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limited_actions: cdktf.booleanToTerraform(struct!.limitedActions),
    notes: cdktf.stringToTerraform(struct!.notes),
    paused: cdktf.booleanToTerraform(struct!.paused),
    remaining_actions: cdktf.numberToTerraform(struct!.remainingActions),
  }
}


export function scheduleStateToHclTerraform(struct?: ScheduleState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limited_actions: {
      value: cdktf.booleanToHclTerraform(struct!.limitedActions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notes: {
      value: cdktf.stringToHclTerraform(struct!.notes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    paused: {
      value: cdktf.booleanToHclTerraform(struct!.paused),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remaining_actions: {
      value: cdktf.numberToHclTerraform(struct!.remainingActions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScheduleStateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ScheduleState | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limitedActions !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitedActions = this._limitedActions;
    }
    if (this._notes !== undefined) {
      hasAnyValues = true;
      internalValueResult.notes = this._notes;
    }
    if (this._paused !== undefined) {
      hasAnyValues = true;
      internalValueResult.paused = this._paused;
    }
    if (this._remainingActions !== undefined) {
      hasAnyValues = true;
      internalValueResult.remainingActions = this._remainingActions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScheduleState | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limitedActions = undefined;
      this._notes = undefined;
      this._paused = undefined;
      this._remainingActions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limitedActions = value.limitedActions;
      this._notes = value.notes;
      this._paused = value.paused;
      this._remainingActions = value.remainingActions;
    }
  }

  // limited_actions - computed: true, optional: true, required: false
  private _limitedActions?: boolean | cdktf.IResolvable; 
  public get limitedActions() {
    return this.getBooleanAttribute('limited_actions');
  }
  public set limitedActions(value: boolean | cdktf.IResolvable) {
    this._limitedActions = value;
  }
  public resetLimitedActions() {
    this._limitedActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitedActionsInput() {
    return this._limitedActions;
  }

  // notes - computed: true, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
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

  // remaining_actions - computed: true, optional: true, required: false
  private _remainingActions?: number; 
  public get remainingActions() {
    return this.getNumberAttribute('remaining_actions');
  }
  public set remainingActions(value: number) {
    this._remainingActions = value;
  }
  public resetRemainingActions() {
    this._remainingActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remainingActionsInput() {
    return this._remainingActions;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/platacard/temporal/0.15.0/docs/resources/schedule temporal_schedule}
*/
export class Schedule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "temporal_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Schedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Schedule to import
  * @param importFromId The id of the existing Schedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/platacard/temporal/0.15.0/docs/resources/schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Schedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "temporal_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/platacard/temporal/0.15.0/docs/resources/schedule temporal_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: ScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'temporal_schedule',
      terraformGeneratorMetadata: {
        providerName: 'temporal',
        providerVersion: '0.15.0',
        providerVersionConstraint: '0.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action.internalValue = config.action;
    this._memo = config.memo;
    this._namespace = config.namespace;
    this._policyConfig.internalValue = config.policyConfig;
    this._scheduleId = config.scheduleId;
    this._spec.internalValue = config.spec;
    this._state.internalValue = config.state;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action = new ScheduleActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: ScheduleAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // memo - computed: false, optional: true, required: false
  private _memo?: { [key: string]: string }; 
  public get memo() {
    return this.getStringMapAttribute('memo');
  }
  public set memo(value: { [key: string]: string }) {
    this._memo = value;
  }
  public resetMemo() {
    this._memo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoInput() {
    return this._memo;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // policy_config - computed: false, optional: false, required: true
  private _policyConfig = new SchedulePolicyConfigOutputReference(this, "policy_config");
  public get policyConfig() {
    return this._policyConfig;
  }
  public putPolicyConfig(value: SchedulePolicyConfig) {
    this._policyConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyConfigInput() {
    return this._policyConfig.internalValue;
  }

  // schedule_id - computed: false, optional: false, required: true
  private _scheduleId?: string; 
  public get scheduleId() {
    return this.getStringAttribute('schedule_id');
  }
  public set scheduleId(value: string) {
    this._scheduleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleIdInput() {
    return this._scheduleId;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new ScheduleSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: ScheduleSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // state - computed: false, optional: false, required: true
  private _state = new ScheduleStateOutputReference(this, "state");
  public get state() {
    return this._state;
  }
  public putState(value: ScheduleState) {
    this._state.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: scheduleActionToTerraform(this._action.internalValue),
      memo: cdktf.hashMapper(cdktf.stringToTerraform)(this._memo),
      namespace: cdktf.stringToTerraform(this._namespace),
      policy_config: schedulePolicyConfigToTerraform(this._policyConfig.internalValue),
      schedule_id: cdktf.stringToTerraform(this._scheduleId),
      spec: scheduleSpecToTerraform(this._spec.internalValue),
      state: scheduleStateToTerraform(this._state.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: scheduleActionToHclTerraform(this._action.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ScheduleAction",
      },
      memo: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._memo),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_config: {
        value: schedulePolicyConfigToHclTerraform(this._policyConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SchedulePolicyConfig",
      },
      schedule_id: {
        value: cdktf.stringToHclTerraform(this._scheduleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spec: {
        value: scheduleSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ScheduleSpec",
      },
      state: {
        value: scheduleStateToHclTerraform(this._state.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ScheduleState",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
