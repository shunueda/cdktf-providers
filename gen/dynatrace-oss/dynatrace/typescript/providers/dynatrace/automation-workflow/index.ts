// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutomationWorkflowConfig extends cdktf.TerraformMetaArguments {
  /**
  * The user context the executions of the workflow will happen with
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#actor AutomationWorkflow#actor}
  */
  readonly actor?: string;
  /**
  * An optional description for the workflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#description AutomationWorkflow#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#id AutomationWorkflow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the owner of this workflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#owner AutomationWorkflow#owner}
  */
  readonly owner?: string;
  /**
  * Defines whether this workflow is private to the owner or not. Default is `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#private AutomationWorkflow#private}
  */
  readonly private?: boolean | cdktf.IResolvable;
  /**
  * The title / name of the workflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#title AutomationWorkflow#title}
  */
  readonly title: string;
  /**
  * The type of the workflow. Possible values are `STANDARD` and `SIMPLE`. Defaults to `STANDARD`. Workflows of type `SIMPLE` are allowed to contain only one action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#type AutomationWorkflow#type}
  */
  readonly type?: string;
  /**
  * tasks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#tasks AutomationWorkflow#tasks}
  */
  readonly tasks: AutomationWorkflowTasks;
  /**
  * trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#trigger AutomationWorkflow#trigger}
  */
  readonly trigger?: AutomationWorkflowTrigger;
}
export interface AutomationWorkflowTasksTaskConditions {
  /**
  * A custom condition that needs to be met for the current task to get executed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#custom AutomationWorkflow#custom}
  */
  readonly custom?: string;
  /**
  * Possible values are `SKIP` and `STOP`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#else AutomationWorkflow#else}
  */
  readonly else?: string;
  /**
  * key/value pairs where the `key` is the name of another task and the value the status it needs to be for the current task to get executed. Possible values are `SUCCESS`, `ERROR`, `ANY`, `OK` (Success or Skipped) and `NOK` (Error or Cancelled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#states AutomationWorkflow#states}
  */
  readonly states?: { [key: string]: string };
}

export function automationWorkflowTasksTaskConditionsToTerraform(struct?: AutomationWorkflowTasksTaskConditionsOutputReference | AutomationWorkflowTasksTaskConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom: cdktf.stringToTerraform(struct!.custom),
    else: cdktf.stringToTerraform(struct!.else),
    states: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.states),
  }
}


export function automationWorkflowTasksTaskConditionsToHclTerraform(struct?: AutomationWorkflowTasksTaskConditionsOutputReference | AutomationWorkflowTasksTaskConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom: {
      value: cdktf.stringToHclTerraform(struct!.custom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    else: {
      value: cdktf.stringToHclTerraform(struct!.else),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    states: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.states),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationWorkflowTasksTaskConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutomationWorkflowTasksTaskConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._custom !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom;
    }
    if (this._else !== undefined) {
      hasAnyValues = true;
      internalValueResult.else = this._else;
    }
    if (this._states !== undefined) {
      hasAnyValues = true;
      internalValueResult.states = this._states;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationWorkflowTasksTaskConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._custom = undefined;
      this._else = undefined;
      this._states = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._custom = value.custom;
      this._else = value.else;
      this._states = value.states;
    }
  }

  // custom - computed: false, optional: true, required: false
  private _custom?: string; 
  public get custom() {
    return this.getStringAttribute('custom');
  }
  public set custom(value: string) {
    this._custom = value;
  }
  public resetCustom() {
    this._custom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom;
  }

  // else - computed: false, optional: true, required: false
  private _else?: string; 
  public get else() {
    return this.getStringAttribute('else');
  }
  public set else(value: string) {
    this._else = value;
  }
  public resetElse() {
    this._else = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elseInput() {
    return this._else;
  }

  // states - computed: false, optional: true, required: false
  private _states?: { [key: string]: string }; 
  public get states() {
    return this.getStringMapAttribute('states');
  }
  public set states(value: { [key: string]: string }) {
    this._states = value;
  }
  public resetStates() {
    this._states = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statesInput() {
    return this._states;
  }
}
export interface AutomationWorkflowTasksTaskPosition {
  /**
  * x-coordinate for layouting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#x AutomationWorkflow#x}
  */
  readonly x: number;
  /**
  * y-coordinate for layouting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#y AutomationWorkflow#y}
  */
  readonly y: number;
}

export function automationWorkflowTasksTaskPositionToTerraform(struct?: AutomationWorkflowTasksTaskPositionOutputReference | AutomationWorkflowTasksTaskPosition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    x: cdktf.numberToTerraform(struct!.x),
    y: cdktf.numberToTerraform(struct!.y),
  }
}


export function automationWorkflowTasksTaskPositionToHclTerraform(struct?: AutomationWorkflowTasksTaskPositionOutputReference | AutomationWorkflowTasksTaskPosition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    x: {
      value: cdktf.numberToHclTerraform(struct!.x),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y: {
      value: cdktf.numberToHclTerraform(struct!.y),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationWorkflowTasksTaskPositionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutomationWorkflowTasksTaskPosition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._x !== undefined) {
      hasAnyValues = true;
      internalValueResult.x = this._x;
    }
    if (this._y !== undefined) {
      hasAnyValues = true;
      internalValueResult.y = this._y;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationWorkflowTasksTaskPosition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._x = undefined;
      this._y = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._x = value.x;
      this._y = value.y;
    }
  }

  // x - computed: false, optional: false, required: true
  private _x?: number; 
  public get x() {
    return this.getNumberAttribute('x');
  }
  public set x(value: number) {
    this._x = value;
  }
  // Temporarily expose input value. Use with caution.
  public get xInput() {
    return this._x;
  }

  // y - computed: false, optional: false, required: true
  private _y?: number; 
  public get y() {
    return this.getNumberAttribute('y');
  }
  public set y(value: number) {
    this._y = value;
  }
  // Temporarily expose input value. Use with caution.
  public get yInput() {
    return this._y;
  }
}
export interface AutomationWorkflowTasksTaskRetry {
  /**
  * Specifies a maximum number of times that a task can be repeated in case it fails on execution. You can specify either a number between 1 and 99 here or use an expression (`{{}}`). Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#count AutomationWorkflow#count}
  */
  readonly count?: string;
  /**
  * Specifies a delay in seconds between subsequent task retries. You can specify either a number between 1 and 3600 here or an expression (`{{...}}`). Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#delay AutomationWorkflow#delay}
  */
  readonly delay?: string;
  /**
  * Specifies whether retrying the failed iterations or the whole loop. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#failed_loop_iterations_only AutomationWorkflow#failed_loop_iterations_only}
  */
  readonly failedLoopIterationsOnly?: boolean | cdktf.IResolvable;
}

export function automationWorkflowTasksTaskRetryToTerraform(struct?: AutomationWorkflowTasksTaskRetryOutputReference | AutomationWorkflowTasksTaskRetry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.stringToTerraform(struct!.count),
    delay: cdktf.stringToTerraform(struct!.delay),
    failed_loop_iterations_only: cdktf.booleanToTerraform(struct!.failedLoopIterationsOnly),
  }
}


export function automationWorkflowTasksTaskRetryToHclTerraform(struct?: AutomationWorkflowTasksTaskRetryOutputReference | AutomationWorkflowTasksTaskRetry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.stringToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delay: {
      value: cdktf.stringToHclTerraform(struct!.delay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    failed_loop_iterations_only: {
      value: cdktf.booleanToHclTerraform(struct!.failedLoopIterationsOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationWorkflowTasksTaskRetryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutomationWorkflowTasksTaskRetry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._delay !== undefined) {
      hasAnyValues = true;
      internalValueResult.delay = this._delay;
    }
    if (this._failedLoopIterationsOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.failedLoopIterationsOnly = this._failedLoopIterationsOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationWorkflowTasksTaskRetry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._delay = undefined;
      this._failedLoopIterationsOnly = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._delay = value.delay;
      this._failedLoopIterationsOnly = value.failedLoopIterationsOnly;
    }
  }

  // count - computed: false, optional: true, required: false
  private _count?: string; 
  public get count() {
    return this.getStringAttribute('count');
  }
  public set count(value: string) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // delay - computed: false, optional: true, required: false
  private _delay?: string; 
  public get delay() {
    return this.getStringAttribute('delay');
  }
  public set delay(value: string) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay;
  }

  // failed_loop_iterations_only - computed: false, optional: true, required: false
  private _failedLoopIterationsOnly?: boolean | cdktf.IResolvable; 
  public get failedLoopIterationsOnly() {
    return this.getBooleanAttribute('failed_loop_iterations_only');
  }
  public set failedLoopIterationsOnly(value: boolean | cdktf.IResolvable) {
    this._failedLoopIterationsOnly = value;
  }
  public resetFailedLoopIterationsOnly() {
    this._failedLoopIterationsOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedLoopIterationsOnlyInput() {
    return this._failedLoopIterationsOnly;
  }
}
export interface AutomationWorkflowTasksTask {
  /**
  * Specifies the action type for the task. Examples include `dynatrace.automations:http-function`, `dynatrace.automations:run-javascript`, and `dynatrace.automations:execute-dql-query`. Additional action types are also supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#action AutomationWorkflow#action}
  */
  readonly action: string;
  /**
  * Specifies whether a task should be skipped as a no operation or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#active AutomationWorkflow#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Required if `with_items` is specified. By default loops execute sequentially with concurrency set to 1. You can increase how often it runs in parallel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#concurrency AutomationWorkflow#concurrency}
  */
  readonly concurrency?: string;
  /**
  * A description for this task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#description AutomationWorkflow#description}
  */
  readonly description?: string;
  /**
  * Parameters and values for this task as JSON code. Contents depend on the kind of task - determined by the attribute `action`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#input AutomationWorkflow#input}
  */
  readonly input?: string;
  /**
  * The name of the task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#name AutomationWorkflow#name}
  */
  readonly name: string;
  /**
  * Specifies a default task timeout in seconds. 15 * 60 (15min) is used when not set. Minimum 1. Maximum 604800
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#timeout AutomationWorkflow#timeout}
  */
  readonly timeout?: string;
  /**
  * Specifies a default task wait before in seconds. 0 is used when not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#wait_before AutomationWorkflow#wait_before}
  */
  readonly waitBefore?: string;
  /**
  * Iterates over items in a list, allowing actions to be executed repeatedly. Example: Specifying `item in [1, 2, 3]` here will execute the task three times for the numbers 1, 2 and 3 - with the current number available for scripting using the expression `{{ _.item }}`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#with_items AutomationWorkflow#with_items}
  */
  readonly withItems?: string;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#conditions AutomationWorkflow#conditions}
  */
  readonly conditions?: AutomationWorkflowTasksTaskConditions;
  /**
  * position block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#position AutomationWorkflow#position}
  */
  readonly position?: AutomationWorkflowTasksTaskPosition;
  /**
  * retry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#retry AutomationWorkflow#retry}
  */
  readonly retry?: AutomationWorkflowTasksTaskRetry;
}

export function automationWorkflowTasksTaskToTerraform(struct?: AutomationWorkflowTasksTask | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    active: cdktf.booleanToTerraform(struct!.active),
    concurrency: cdktf.stringToTerraform(struct!.concurrency),
    description: cdktf.stringToTerraform(struct!.description),
    input: cdktf.stringToTerraform(struct!.input),
    name: cdktf.stringToTerraform(struct!.name),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    wait_before: cdktf.stringToTerraform(struct!.waitBefore),
    with_items: cdktf.stringToTerraform(struct!.withItems),
    conditions: automationWorkflowTasksTaskConditionsToTerraform(struct!.conditions),
    position: automationWorkflowTasksTaskPositionToTerraform(struct!.position),
    retry: automationWorkflowTasksTaskRetryToTerraform(struct!.retry),
  }
}


export function automationWorkflowTasksTaskToHclTerraform(struct?: AutomationWorkflowTasksTask | cdktf.IResolvable): any {
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
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    concurrency: {
      value: cdktf.stringToHclTerraform(struct!.concurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wait_before: {
      value: cdktf.stringToHclTerraform(struct!.waitBefore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    with_items: {
      value: cdktf.stringToHclTerraform(struct!.withItems),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conditions: {
      value: automationWorkflowTasksTaskConditionsToHclTerraform(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "AutomationWorkflowTasksTaskConditionsList",
    },
    position: {
      value: automationWorkflowTasksTaskPositionToHclTerraform(struct!.position),
      isBlock: true,
      type: "list",
      storageClassType: "AutomationWorkflowTasksTaskPositionList",
    },
    retry: {
      value: automationWorkflowTasksTaskRetryToHclTerraform(struct!.retry),
      isBlock: true,
      type: "list",
      storageClassType: "AutomationWorkflowTasksTaskRetryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationWorkflowTasksTaskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AutomationWorkflowTasksTask | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._concurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrency = this._concurrency;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._input !== undefined) {
      hasAnyValues = true;
      internalValueResult.input = this._input;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._waitBefore !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitBefore = this._waitBefore;
    }
    if (this._withItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.withItems = this._withItems;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    if (this._position?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position?.internalValue;
    }
    if (this._retry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retry = this._retry?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationWorkflowTasksTask | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._active = undefined;
      this._concurrency = undefined;
      this._description = undefined;
      this._input = undefined;
      this._name = undefined;
      this._timeout = undefined;
      this._waitBefore = undefined;
      this._withItems = undefined;
      this._conditions.internalValue = undefined;
      this._position.internalValue = undefined;
      this._retry.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._active = value.active;
      this._concurrency = value.concurrency;
      this._description = value.description;
      this._input = value.input;
      this._name = value.name;
      this._timeout = value.timeout;
      this._waitBefore = value.waitBefore;
      this._withItems = value.withItems;
      this._conditions.internalValue = value.conditions;
      this._position.internalValue = value.position;
      this._retry.internalValue = value.retry;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // concurrency - computed: false, optional: true, required: false
  private _concurrency?: string; 
  public get concurrency() {
    return this.getStringAttribute('concurrency');
  }
  public set concurrency(value: string) {
    this._concurrency = value;
  }
  public resetConcurrency() {
    this._concurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrencyInput() {
    return this._concurrency;
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

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // wait_before - computed: false, optional: true, required: false
  private _waitBefore?: string; 
  public get waitBefore() {
    return this.getStringAttribute('wait_before');
  }
  public set waitBefore(value: string) {
    this._waitBefore = value;
  }
  public resetWaitBefore() {
    this._waitBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitBeforeInput() {
    return this._waitBefore;
  }

  // with_items - computed: false, optional: true, required: false
  private _withItems?: string; 
  public get withItems() {
    return this.getStringAttribute('with_items');
  }
  public set withItems(value: string) {
    this._withItems = value;
  }
  public resetWithItems() {
    this._withItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withItemsInput() {
    return this._withItems;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new AutomationWorkflowTasksTaskConditionsOutputReference(this, "conditions");
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: AutomationWorkflowTasksTaskConditions) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // position - computed: false, optional: true, required: false
  private _position = new AutomationWorkflowTasksTaskPositionOutputReference(this, "position");
  public get position() {
    return this._position;
  }
  public putPosition(value: AutomationWorkflowTasksTaskPosition) {
    this._position.internalValue = value;
  }
  public resetPosition() {
    this._position.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position.internalValue;
  }

  // retry - computed: false, optional: true, required: false
  private _retry = new AutomationWorkflowTasksTaskRetryOutputReference(this, "retry");
  public get retry() {
    return this._retry;
  }
  public putRetry(value: AutomationWorkflowTasksTaskRetry) {
    this._retry.internalValue = value;
  }
  public resetRetry() {
    this._retry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry.internalValue;
  }
}

export class AutomationWorkflowTasksTaskList extends cdktf.ComplexList {
  public internalValue? : AutomationWorkflowTasksTask[] | cdktf.IResolvable

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
  public get(index: number): AutomationWorkflowTasksTaskOutputReference {
    return new AutomationWorkflowTasksTaskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutomationWorkflowTasks {
  /**
  * task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#task AutomationWorkflow#task}
  */
  readonly task?: AutomationWorkflowTasksTask[] | cdktf.IResolvable;
}

export function automationWorkflowTasksToTerraform(struct?: AutomationWorkflowTasksOutputReference | AutomationWorkflowTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    task: cdktf.listMapper(automationWorkflowTasksTaskToTerraform, true)(struct!.task),
  }
}


export function automationWorkflowTasksToHclTerraform(struct?: AutomationWorkflowTasksOutputReference | AutomationWorkflowTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    task: {
      value: cdktf.listMapperHcl(automationWorkflowTasksTaskToHclTerraform, true)(struct!.task),
      isBlock: true,
      type: "set",
      storageClassType: "AutomationWorkflowTasksTaskList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationWorkflowTasksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutomationWorkflowTasks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._task?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.task = this._task?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationWorkflowTasks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._task.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._task.internalValue = value.task;
    }
  }

  // task - computed: false, optional: true, required: false
  private _task = new AutomationWorkflowTasksTaskList(this, "task", true);
  public get task() {
    return this._task;
  }
  public putTask(value: AutomationWorkflowTasksTask[] | cdktf.IResolvable) {
    this._task.internalValue = value;
  }
  public resetTask() {
    this._task.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskInput() {
    return this._task.internalValue;
  }
}
export interface AutomationWorkflowTriggerEventConfigDavisEventNamesName {
  /**
  * Possible values: `equals` and `contains`. The Davis event name must equal or contain the string provided in attribute `name`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#match AutomationWorkflow#match}
  */
  readonly match: string;
  /**
  * The event name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#name AutomationWorkflow#name}
  */
  readonly name: string;
}

export function automationWorkflowTriggerEventConfigDavisEventNamesNameToTerraform(struct?: AutomationWorkflowTriggerEventConfigDavisEventNamesName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match: cdktf.stringToTerraform(struct!.match),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function automationWorkflowTriggerEventConfigDavisEventNamesNameToHclTerraform(struct?: AutomationWorkflowTriggerEventConfigDavisEventNamesName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
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

export class AutomationWorkflowTriggerEventConfigDavisEventNamesNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AutomationWorkflowTriggerEventConfigDavisEventNamesName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationWorkflowTriggerEventConfigDavisEventNamesName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._match = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._match = value.match;
      this._name = value.name;
    }
  }

  // match - computed: false, optional: false, required: true
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
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
}

export class AutomationWorkflowTriggerEventConfigDavisEventNamesNameList extends cdktf.ComplexList {
  public internalValue? : AutomationWorkflowTriggerEventConfigDavisEventNamesName[] | cdktf.IResolvable

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
  public get(index: number): AutomationWorkflowTriggerEventConfigDavisEventNamesNameOutputReference {
    return new AutomationWorkflowTriggerEventConfigDavisEventNamesNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutomationWorkflowTriggerEventConfigDavisEventNames {
  /**
  * name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#name AutomationWorkflow#name}
  */
  readonly name?: AutomationWorkflowTriggerEventConfigDavisEventNamesName[] | cdktf.IResolvable;
}

export function automationWorkflowTriggerEventConfigDavisEventNamesToTerraform(struct?: AutomationWorkflowTriggerEventConfigDavisEventNamesOutputReference | AutomationWorkflowTriggerEventConfigDavisEventNames): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.listMapper(automationWorkflowTriggerEventConfigDavisEventNamesNameToTerraform, true)(struct!.name),
  }
}


export function automationWorkflowTriggerEventConfigDavisEventNamesToHclTerraform(struct?: AutomationWorkflowTriggerEventConfigDavisEventNamesOutputReference | AutomationWorkflowTriggerEventConfigDavisEventNames): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.listMapperHcl(automationWorkflowTriggerEventConfigDavisEventNamesNameToHclTerraform, true)(struct!.name),
      isBlock: true,
      type: "list",
      storageClassType: "AutomationWorkflowTriggerEventConfigDavisEventNamesNameList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationWorkflowTriggerEventConfigDavisEventNamesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutomationWorkflowTriggerEventConfigDavisEventNames | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationWorkflowTriggerEventConfigDavisEventNames | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name.internalValue = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name = new AutomationWorkflowTriggerEventConfigDavisEventNamesNameList(this, "name", false);
  public get name() {
    return this._name;
  }
  public putName(value: AutomationWorkflowTriggerEventConfigDavisEventNamesName[] | cdktf.IResolvable) {
    this._name.internalValue = value;
  }
  public resetName() {
    this._name.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name.internalValue;
  }
}
export interface AutomationWorkflowTriggerEventConfigDavisEvent {
  /**
  * key/value pairs for entity tags to match for. For tags that don't require a value, just specify an empty string as value. Multiple values can be provided separated by whitespace (e.g. "val1 val2") and will be parsed as multiple tag values. Omit this attribute if all entities should match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#entity_tags AutomationWorkflow#entity_tags}
  */
  readonly entityTags?: { [key: string]: string };
  /**
  * Specifies whether all or just any of the configured entity tags need to match. Possible values: `all` and `any`. Omit this attribute if all entities should match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#entity_tags_match AutomationWorkflow#entity_tags_match}
  */
  readonly entityTagsMatch?: string;
  /**
  * If set to `true` closing a problem also is considered an event that triggers the execution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#on_problem_close AutomationWorkflow#on_problem_close}
  */
  readonly onProblemClose?: boolean | cdktf.IResolvable;
  /**
  * The types of davis events to trigger an execution. Possible values are `CUSTOM_ANNOTATION`, `APPLICATION_UNEXPECTED_HIGH_LOAD`, `APPLICATION_UNEXPECTED_LOW_LOAD`, `APPLICATION_OVERLOAD_PREVENTION`, `APPLICATION_SLOWDOWN`, `AVAILABILITY_EVENT`, `LOG_AVAILABILITY`, `EC2_HIGH_CPU`, `RDS_BACKUP_COMPLETED`, `RDS_BACKUP_STARTED`, `SYNTHETIC_GLOBAL_OUTAGE`, `SYNTHETIC_LOCAL_OUTAGE`, `SYNTHETIC_TEST_LOCATION_SLOWDOWN`, `CUSTOM_CONFIGURATION`, `PROCESS_NA_HIGH_CONN_FAIL_RATE`, `OSI_HIGH_CPU`, `CUSTOM_ALERT`, `CUSTOM_APP_CRASH_RATE_INCREASED`, `CUSTOM_APPLICATION_ERROR_RATE_INCREASED`, `CUSTOM_APPLICATION_UNEXPECTED_HIGH_LOAD`, `CUSTOM_APPLICATION_UNEXPECTED_LOW_LOAD`, `CUSTOM_APPLICATION_OVERLOAD_PREVENTION`, `CUSTOM_APPLICATION_SLOWDOWN`, `PGI_CUSTOM_AVAILABILITY`, `PGI_CUSTOM_ERROR`, `CUSTOM_INFO`, `PGI_CUSTOM_PERFORMANCE`, `CUSTOM_DEPLOYMENT`, `DEPLOYMENT_CHANGED_CHANGE`, `DEPLOYMENT_CHANGED_NEW`, `DEPLOYMENT_CHANGED_REMOVED`, `EBS_VOLUME_HIGH_LATENCY`, `ERROR_EVENT`, `LOG_ERROR`, `ESXI_HOST_CONNECTION_FAILED`, `ESXI_HOST_CONNECTION_LOST`, `ESXI_GUEST_CPU_LIMIT_REACHED`, `ESXI_GUEST_ACTIVE_SWAP_WAIT`, `ESXI_HOST_CPU_SATURATION`, `ESXI_HOST_MEMORY_SATURATION`, `ESXI_HOST_MAINTENANCE`, `ESXI_HOST_NETWORK_PROBLEMS`, `ESXI_HOST_NO_CONNECTION`, `ESXI_HOST_SHUTDOWN`, `ESXI_HOST_DISK_SLOW`, `ESXI_HOST_UP`, `ESXI_HOST_TIMEOUT`, `ESXI_VM_IMPACT_HOST_CPU_SATURATION`, `ESXI_VM_IMPACT_HOST_MEMORY_SATURATION`, `DATABASE_CONNECTION_FAILURE`, `RDS_AZ_FAILOVER_COMPLETED`, `RDS_AZ_FAILOVER_STARTED`, `SERVICE_ERROR_RATE_INCREASED`, `RDS_HIGH_LATENCY`, `OSI_NIC_UTILIZATION_HIGH`, `OSI_NIC_ERRORS_HIGH`, `PGI_HAPROXY_QUEUED_REQUESTS_HIGH`, `PGI_RMQ_HIGH_FILE_DESC_USAGE`, `PGI_RMQ_HIGH_MEM_USAGE`, `PGI_RMQ_HIGH_PROCESS_USAGE`, `PGI_RMQ_HIGH_SOCKETS_USAGE`, `OSI_NIC_DROPPED_PACKETS_HIGH`, `PGI_MYSQL_SLOW_QUERIES_RATE_HIGH`, `PGI_KEYSTONE_SLOW`, `PGI_HAPROXY_SESSION_USAGE_HIGH`, `HOST_LOG_AVAILABILITY`, `HOST_LOG_ERROR`, `OSI_GRACEFULLY_SHUTDOWN`, `HOST_LOG_MATCHED`, `OSI_UNEXPECTEDLY_UNAVAILABLE`, `HOST_LOG_PERFORMANCE`, `HOST_OF_SERVICE_UNAVAILABLE`, `HTTP_CHECK_GLOBAL_OUTAGE`, `HTTP_CHECK_LOCAL_OUTAGE`, `HTTP_CHECK_TEST_LOCATION_SLOWDOWN`, `ESXI_HOST_DISK_QUEUE_SLOW`, `LOG_MATCHED`, `APPLICATION_ERROR_RATE_INCREASED`, `APPLICATION_JS_FRAMEWORK_DETECTED`, `AWS_LAMBDA_HIGH_ERROR_RATE`, `ELB_HIGH_BACKEND_ERROR_RATE`, `ELB_HIGH_FRONTEND_ERROR_RATE`, `ELB_HIGH_UNHEALTHY_HOST_RATE`, `PROCESS_HIGH_GC_ACTIVITY`, `ESXI_HOST_DATASTORE_LOW_DISK_SPACE`, `OSI_DOCKER_DEVICEMAPPER_LOW_DATA_SPACE`, `OSI_LOW_DISK_SPACE`, `OSI_DOCKER_DEVICEMAPPER_LOW_METADATA_SPACE`, `OSI_DISK_LOW_INODES`, `PGI_RMQ_LOW_DISK_SPACE`, `RDS_LOW_STORAGE_SPACE`, `MARKED_FOR_TERMINATION`, `PROCESS_MEMORY_RESOURCE_EXHAUSTED`, `OSI_HIGH_MEMORY`, `MOBILE_APP_CRASH_RATE_INCREASED`, `MOBILE_APPLICATION_ERROR_RATE_INCREASED`, `MOBILE_APPLICATION_OVERLOAD_PREVENTION`, `MOBILE_APPLICATION_SLOWDOWN`, `MOBILE_APPLICATION_UNEXPECTED_HIGH_LOAD`, `MOBILE_APPLICATION_UNEXPECTED_LOW_LOAD`, `MONITORING_UNAVAILABLE`, `PROCESS_NA_HIGH_LOSS_RATE`, `PGI_KEYSTONE_UNHEALTHY`, `ESXI_HOST_OVERLOADED_STORAGE`, `PERFORMANCE_EVENT`, `LOG_PERFORMANCE`, `PGI_LOG_AVAILABILITY`, `PGI_CRASHED_INFO`, `PROCESS_CRASHED`, `PGI_LOG_ERROR`, `PG_LOW_INSTANCE_COUNT`, `PGI_LOG_MATCHED`, `PGI_MEMDUMP`, `PGI_LOG_PERFORMANCE`, `PROCESS_RESTART`, `PGI_UNAVAILABLE`, `RDS_HIGH_CPU`, `RDS_LOW_MEMORY`, `RDS_OF_SERVICE_UNAVAILABLE`, `RESOURCE_CONTENTION_EVENT`, `SERVICE_SLOWDOWN`, `RDS_RESTART`, `RDS_RESTART_SEQUENCE`, `PGI_OF_SERVICE_UNAVAILABLE`, `OSI_SLOW_DISK`, `SYNTHETIC_NODE_OUTAGE`, `SYNTHETIC_PRIVATE_LOCATION_OUTAGE`, `EXTERNAL_SYNTHETIC_TEST_OUTAGE`, `EXTERNAL_SYNTHETIC_TEST_SLOWDOWN`, `PROCESS_THREADS_RESOURCE_EXHAUSTED`, `SERVICE_UNEXPECTED_HIGH_LOAD`, `SERVICE_UNEXPECTED_LOW_LOAD`, `ESXI_VM_DISCONNECTED`, `OPENSTACK_VM_LAUNCH_FAILED`, `ESXI_HOST_VM_MOTION_LEFT`, `ESXI_HOST_VM_MOTION_ARRIVED`, `ESXI_VM_MOTION`, `OPENSTACK_VM_MOTION`, `ESXI_VM_POWER_OFF`, `ESXI_VM_SHUTDOWN`, `OPENSTACK_HOST_VM_SHUTDOWN`, `ESXI_VM_START`, `ESXI_HOST_VM_STARTED`, `OPENSTACK_HOST_VM_STARTED`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#types AutomationWorkflow#types}
  */
  readonly types?: string[];
  /**
  * names block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#names AutomationWorkflow#names}
  */
  readonly names?: AutomationWorkflowTriggerEventConfigDavisEventNames;
}

export function automationWorkflowTriggerEventConfigDavisEventToTerraform(struct?: AutomationWorkflowTriggerEventConfigDavisEventOutputReference | AutomationWorkflowTriggerEventConfigDavisEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.entityTags),
    entity_tags_match: cdktf.stringToTerraform(struct!.entityTagsMatch),
    on_problem_close: cdktf.booleanToTerraform(struct!.onProblemClose),
    types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.types),
    names: automationWorkflowTriggerEventConfigDavisEventNamesToTerraform(struct!.names),
  }
}


export function automationWorkflowTriggerEventConfigDavisEventToHclTerraform(struct?: AutomationWorkflowTriggerEventConfigDavisEventOutputReference | AutomationWorkflowTriggerEventConfigDavisEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entity_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.entityTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    entity_tags_match: {
      value: cdktf.stringToHclTerraform(struct!.entityTagsMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_problem_close: {
      value: cdktf.booleanToHclTerraform(struct!.onProblemClose),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.types),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    names: {
      value: automationWorkflowTriggerEventConfigDavisEventNamesToHclTerraform(struct!.names),
      isBlock: true,
      type: "list",
      storageClassType: "AutomationWorkflowTriggerEventConfigDavisEventNamesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationWorkflowTriggerEventConfigDavisEventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutomationWorkflowTriggerEventConfigDavisEvent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityTags = this._entityTags;
    }
    if (this._entityTagsMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityTagsMatch = this._entityTagsMatch;
    }
    if (this._onProblemClose !== undefined) {
      hasAnyValues = true;
      internalValueResult.onProblemClose = this._onProblemClose;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    if (this._names?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationWorkflowTriggerEventConfigDavisEvent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entityTags = undefined;
      this._entityTagsMatch = undefined;
      this._onProblemClose = undefined;
      this._types = undefined;
      this._names.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entityTags = value.entityTags;
      this._entityTagsMatch = value.entityTagsMatch;
      this._onProblemClose = value.onProblemClose;
      this._types = value.types;
      this._names.internalValue = value.names;
    }
  }

  // entity_tags - computed: false, optional: true, required: false
  private _entityTags?: { [key: string]: string }; 
  public get entityTags() {
    return this.getStringMapAttribute('entity_tags');
  }
  public set entityTags(value: { [key: string]: string }) {
    this._entityTags = value;
  }
  public resetEntityTags() {
    this._entityTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTagsInput() {
    return this._entityTags;
  }

  // entity_tags_match - computed: false, optional: true, required: false
  private _entityTagsMatch?: string; 
  public get entityTagsMatch() {
    return this.getStringAttribute('entity_tags_match');
  }
  public set entityTagsMatch(value: string) {
    this._entityTagsMatch = value;
  }
  public resetEntityTagsMatch() {
    this._entityTagsMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTagsMatchInput() {
    return this._entityTagsMatch;
  }

  // on_problem_close - computed: false, optional: true, required: false
  private _onProblemClose?: boolean | cdktf.IResolvable; 
  public get onProblemClose() {
    return this.getBooleanAttribute('on_problem_close');
  }
  public set onProblemClose(value: boolean | cdktf.IResolvable) {
    this._onProblemClose = value;
  }
  public resetOnProblemClose() {
    this._onProblemClose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onProblemCloseInput() {
    return this._onProblemClose;
  }

  // types - computed: false, optional: true, required: false
  private _types?: string[]; 
  public get types() {
    return cdktf.Fn.tolist(this.getListAttribute('types'));
  }
  public set types(value: string[]) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }

  // names - computed: false, optional: true, required: false
  private _names = new AutomationWorkflowTriggerEventConfigDavisEventNamesOutputReference(this, "names");
  public get names() {
    return this._names;
  }
  public putNames(value: AutomationWorkflowTriggerEventConfigDavisEventNames) {
    this._names.internalValue = value;
  }
  public resetNames() {
    this._names.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names.internalValue;
  }
}
export interface AutomationWorkflowTriggerEventConfigDavisProblemCategories {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#availability AutomationWorkflow#availability}
  */
  readonly availability?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#custom AutomationWorkflow#custom}
  */
  readonly custom?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#error AutomationWorkflow#error}
  */
  readonly error?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#info AutomationWorkflow#info}
  */
  readonly info?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#monitoring_unavailable AutomationWorkflow#monitoring_unavailable}
  */
  readonly monitoringUnavailable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#resource AutomationWorkflow#resource}
  */
  readonly resource?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#slowdown AutomationWorkflow#slowdown}
  */
  readonly slowdown?: boolean | cdktf.IResolvable;
}

export function automationWorkflowTriggerEventConfigDavisProblemCategoriesToTerraform(struct?: AutomationWorkflowTriggerEventConfigDavisProblemCategories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability: cdktf.booleanToTerraform(struct!.availability),
    custom: cdktf.booleanToTerraform(struct!.custom),
    error: cdktf.booleanToTerraform(struct!.error),
    info: cdktf.booleanToTerraform(struct!.info),
    monitoring_unavailable: cdktf.booleanToTerraform(struct!.monitoringUnavailable),
    resource: cdktf.booleanToTerraform(struct!.resource),
    slowdown: cdktf.booleanToTerraform(struct!.slowdown),
  }
}


export function automationWorkflowTriggerEventConfigDavisProblemCategoriesToHclTerraform(struct?: AutomationWorkflowTriggerEventConfigDavisProblemCategories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability: {
      value: cdktf.booleanToHclTerraform(struct!.availability),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom: {
      value: cdktf.booleanToHclTerraform(struct!.custom),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    error: {
      value: cdktf.booleanToHclTerraform(struct!.error),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    info: {
      value: cdktf.booleanToHclTerraform(struct!.info),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    monitoring_unavailable: {
      value: cdktf.booleanToHclTerraform(struct!.monitoringUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resource: {
      value: cdktf.booleanToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    slowdown: {
      value: cdktf.booleanToHclTerraform(struct!.slowdown),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationWorkflowTriggerEventConfigDavisProblemCategoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AutomationWorkflowTriggerEventConfigDavisProblemCategories | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availability !== undefined) {
      hasAnyValues = true;
      internalValueResult.availability = this._availability;
    }
    if (this._custom !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom;
    }
    if (this._error !== undefined) {
      hasAnyValues = true;
      internalValueResult.error = this._error;
    }
    if (this._info !== undefined) {
      hasAnyValues = true;
      internalValueResult.info = this._info;
    }
    if (this._monitoringUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringUnavailable = this._monitoringUnavailable;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._slowdown !== undefined) {
      hasAnyValues = true;
      internalValueResult.slowdown = this._slowdown;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationWorkflowTriggerEventConfigDavisProblemCategories | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availability = undefined;
      this._custom = undefined;
      this._error = undefined;
      this._info = undefined;
      this._monitoringUnavailable = undefined;
      this._resource = undefined;
      this._slowdown = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availability = value.availability;
      this._custom = value.custom;
      this._error = value.error;
      this._info = value.info;
      this._monitoringUnavailable = value.monitoringUnavailable;
      this._resource = value.resource;
      this._slowdown = value.slowdown;
    }
  }

  // availability - computed: false, optional: true, required: false
  private _availability?: boolean | cdktf.IResolvable; 
  public get availability() {
    return this.getBooleanAttribute('availability');
  }
  public set availability(value: boolean | cdktf.IResolvable) {
    this._availability = value;
  }
  public resetAvailability() {
    this._availability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityInput() {
    return this._availability;
  }

  // custom - computed: false, optional: true, required: false
  private _custom?: boolean | cdktf.IResolvable; 
  public get custom() {
    return this.getBooleanAttribute('custom');
  }
  public set custom(value: boolean | cdktf.IResolvable) {
    this._custom = value;
  }
  public resetCustom() {
    this._custom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom;
  }

  // error - computed: false, optional: true, required: false
  private _error?: boolean | cdktf.IResolvable; 
  public get error() {
    return this.getBooleanAttribute('error');
  }
  public set error(value: boolean | cdktf.IResolvable) {
    this._error = value;
  }
  public resetError() {
    this._error = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInput() {
    return this._error;
  }

  // info - computed: false, optional: true, required: false
  private _info?: boolean | cdktf.IResolvable; 
  public get info() {
    return this.getBooleanAttribute('info');
  }
  public set info(value: boolean | cdktf.IResolvable) {
    this._info = value;
  }
  public resetInfo() {
    this._info = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoInput() {
    return this._info;
  }

  // monitoring_unavailable - computed: false, optional: true, required: false
  private _monitoringUnavailable?: boolean | cdktf.IResolvable; 
  public get monitoringUnavailable() {
    return this.getBooleanAttribute('monitoring_unavailable');
  }
  public set monitoringUnavailable(value: boolean | cdktf.IResolvable) {
    this._monitoringUnavailable = value;
  }
  public resetMonitoringUnavailable() {
    this._monitoringUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringUnavailableInput() {
    return this._monitoringUnavailable;
  }

  // resource - computed: false, optional: true, required: false
  private _resource?: boolean | cdktf.IResolvable; 
  public get resource() {
    return this.getBooleanAttribute('resource');
  }
  public set resource(value: boolean | cdktf.IResolvable) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // slowdown - computed: false, optional: true, required: false
  private _slowdown?: boolean | cdktf.IResolvable; 
  public get slowdown() {
    return this.getBooleanAttribute('slowdown');
  }
  public set slowdown(value: boolean | cdktf.IResolvable) {
    this._slowdown = value;
  }
  public resetSlowdown() {
    this._slowdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slowdownInput() {
    return this._slowdown;
  }
}

export class AutomationWorkflowTriggerEventConfigDavisProblemCategoriesList extends cdktf.ComplexList {
  public internalValue? : AutomationWorkflowTriggerEventConfigDavisProblemCategories[] | cdktf.IResolvable

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
  public get(index: number): AutomationWorkflowTriggerEventConfigDavisProblemCategoriesOutputReference {
    return new AutomationWorkflowTriggerEventConfigDavisProblemCategoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutomationWorkflowTriggerEventConfigDavisProblem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#custom_filter AutomationWorkflow#custom_filter}
  */
  readonly customFilter?: string;
  /**
  * key/value pairs for entity tags to match for. For tags that don't require a value, just specify an empty string as value. Multiple values can be provided separated by whitespace (e.g. "val1 val2") and will be parsed as multiple tag values. Omit this attribute if all entities should match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#entity_tags AutomationWorkflow#entity_tags}
  */
  readonly entityTags?: { [key: string]: string };
  /**
  * Specifies whether all or just any of the configured entity tags need to match. Possible values: `all` and `any`. Omit this attribute if all entities should match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#entity_tags_match AutomationWorkflow#entity_tags_match}
  */
  readonly entityTagsMatch?: string;
  /**
  * If set to `true` closing a problem also is considered an event that triggers the execution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#on_problem_close AutomationWorkflow#on_problem_close}
  */
  readonly onProblemClose?: boolean | cdktf.IResolvable;
  /**
  * categories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#categories AutomationWorkflow#categories}
  */
  readonly categories: AutomationWorkflowTriggerEventConfigDavisProblemCategories[] | cdktf.IResolvable;
}

export function automationWorkflowTriggerEventConfigDavisProblemToTerraform(struct?: AutomationWorkflowTriggerEventConfigDavisProblemOutputReference | AutomationWorkflowTriggerEventConfigDavisProblem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_filter: cdktf.stringToTerraform(struct!.customFilter),
    entity_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.entityTags),
    entity_tags_match: cdktf.stringToTerraform(struct!.entityTagsMatch),
    on_problem_close: cdktf.booleanToTerraform(struct!.onProblemClose),
    categories: cdktf.listMapper(automationWorkflowTriggerEventConfigDavisProblemCategoriesToTerraform, true)(struct!.categories),
  }
}


export function automationWorkflowTriggerEventConfigDavisProblemToHclTerraform(struct?: AutomationWorkflowTriggerEventConfigDavisProblemOutputReference | AutomationWorkflowTriggerEventConfigDavisProblem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_filter: {
      value: cdktf.stringToHclTerraform(struct!.customFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entity_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.entityTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    entity_tags_match: {
      value: cdktf.stringToHclTerraform(struct!.entityTagsMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_problem_close: {
      value: cdktf.booleanToHclTerraform(struct!.onProblemClose),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    categories: {
      value: cdktf.listMapperHcl(automationWorkflowTriggerEventConfigDavisProblemCategoriesToHclTerraform, true)(struct!.categories),
      isBlock: true,
      type: "list",
      storageClassType: "AutomationWorkflowTriggerEventConfigDavisProblemCategoriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationWorkflowTriggerEventConfigDavisProblemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutomationWorkflowTriggerEventConfigDavisProblem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFilter = this._customFilter;
    }
    if (this._entityTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityTags = this._entityTags;
    }
    if (this._entityTagsMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityTagsMatch = this._entityTagsMatch;
    }
    if (this._onProblemClose !== undefined) {
      hasAnyValues = true;
      internalValueResult.onProblemClose = this._onProblemClose;
    }
    if (this._categories?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.categories = this._categories?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationWorkflowTriggerEventConfigDavisProblem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customFilter = undefined;
      this._entityTags = undefined;
      this._entityTagsMatch = undefined;
      this._onProblemClose = undefined;
      this._categories.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customFilter = value.customFilter;
      this._entityTags = value.entityTags;
      this._entityTagsMatch = value.entityTagsMatch;
      this._onProblemClose = value.onProblemClose;
      this._categories.internalValue = value.categories;
    }
  }

  // custom_filter - computed: false, optional: true, required: false
  private _customFilter?: string; 
  public get customFilter() {
    return this.getStringAttribute('custom_filter');
  }
  public set customFilter(value: string) {
    this._customFilter = value;
  }
  public resetCustomFilter() {
    this._customFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFilterInput() {
    return this._customFilter;
  }

  // entity_tags - computed: false, optional: true, required: false
  private _entityTags?: { [key: string]: string }; 
  public get entityTags() {
    return this.getStringMapAttribute('entity_tags');
  }
  public set entityTags(value: { [key: string]: string }) {
    this._entityTags = value;
  }
  public resetEntityTags() {
    this._entityTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTagsInput() {
    return this._entityTags;
  }

  // entity_tags_match - computed: false, optional: true, required: false
  private _entityTagsMatch?: string; 
  public get entityTagsMatch() {
    return this.getStringAttribute('entity_tags_match');
  }
  public set entityTagsMatch(value: string) {
    this._entityTagsMatch = value;
  }
  public resetEntityTagsMatch() {
    this._entityTagsMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTagsMatchInput() {
    return this._entityTagsMatch;
  }

  // on_problem_close - computed: false, optional: true, required: false
  private _onProblemClose?: boolean | cdktf.IResolvable; 
  public get onProblemClose() {
    return this.getBooleanAttribute('on_problem_close');
  }
  public set onProblemClose(value: boolean | cdktf.IResolvable) {
    this._onProblemClose = value;
  }
  public resetOnProblemClose() {
    this._onProblemClose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onProblemCloseInput() {
    return this._onProblemClose;
  }

  // categories - computed: false, optional: false, required: true
  private _categories = new AutomationWorkflowTriggerEventConfigDavisProblemCategoriesList(this, "categories", false);
  public get categories() {
    return this._categories;
  }
  public putCategories(value: AutomationWorkflowTriggerEventConfigDavisProblemCategories[] | cdktf.IResolvable) {
    this._categories.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories.internalValue;
  }
}
export interface AutomationWorkflowTriggerEventConfigEvent {
  /**
  * Possible values: `events` or `bizevents`. Default: `events`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#event_type AutomationWorkflow#event_type}
  */
  readonly eventType?: string;
  /**
  * A query based on DQL for events that trigger executions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#query AutomationWorkflow#query}
  */
  readonly query: string;
}

export function automationWorkflowTriggerEventConfigEventToTerraform(struct?: AutomationWorkflowTriggerEventConfigEventOutputReference | AutomationWorkflowTriggerEventConfigEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_type: cdktf.stringToTerraform(struct!.eventType),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function automationWorkflowTriggerEventConfigEventToHclTerraform(struct?: AutomationWorkflowTriggerEventConfigEventOutputReference | AutomationWorkflowTriggerEventConfigEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_type: {
      value: cdktf.stringToHclTerraform(struct!.eventType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationWorkflowTriggerEventConfigEventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutomationWorkflowTriggerEventConfigEvent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventType !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventType = this._eventType;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationWorkflowTriggerEventConfigEvent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eventType = undefined;
      this._query = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eventType = value.eventType;
      this._query = value.query;
    }
  }

  // event_type - computed: false, optional: true, required: false
  private _eventType?: string; 
  public get eventType() {
    return this.getStringAttribute('event_type');
  }
  public set eventType(value: string) {
    this._eventType = value;
  }
  public resetEventType() {
    this._eventType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}
export interface AutomationWorkflowTriggerEventConfig {
  /**
  * The type of the trigger configuration to expect within attribute `value`. Only required if `config` is set. Must not be set if `davis_event`, `davis_problem` or `event` are present
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#type AutomationWorkflow#type}
  */
  readonly type?: string;
  /**
  * Contains JSON encoded trigger configuration if the trigger type is neither `davis_event`, `davis_problem` or `event`. It requires the attribute `type` to be set in combination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#value AutomationWorkflow#value}
  */
  readonly value?: string;
  /**
  * davis_event block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#davis_event AutomationWorkflow#davis_event}
  */
  readonly davisEvent?: AutomationWorkflowTriggerEventConfigDavisEvent;
  /**
  * davis_problem block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#davis_problem AutomationWorkflow#davis_problem}
  */
  readonly davisProblem?: AutomationWorkflowTriggerEventConfigDavisProblem;
  /**
  * event block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#event AutomationWorkflow#event}
  */
  readonly event?: AutomationWorkflowTriggerEventConfigEvent;
}

export function automationWorkflowTriggerEventConfigToTerraform(struct?: AutomationWorkflowTriggerEventConfigOutputReference | AutomationWorkflowTriggerEventConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
    davis_event: automationWorkflowTriggerEventConfigDavisEventToTerraform(struct!.davisEvent),
    davis_problem: automationWorkflowTriggerEventConfigDavisProblemToTerraform(struct!.davisProblem),
    event: automationWorkflowTriggerEventConfigEventToTerraform(struct!.event),
  }
}


export function automationWorkflowTriggerEventConfigToHclTerraform(struct?: AutomationWorkflowTriggerEventConfigOutputReference | AutomationWorkflowTriggerEventConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    davis_event: {
      value: automationWorkflowTriggerEventConfigDavisEventToHclTerraform(struct!.davisEvent),
      isBlock: true,
      type: "list",
      storageClassType: "AutomationWorkflowTriggerEventConfigDavisEventList",
    },
    davis_problem: {
      value: automationWorkflowTriggerEventConfigDavisProblemToHclTerraform(struct!.davisProblem),
      isBlock: true,
      type: "list",
      storageClassType: "AutomationWorkflowTriggerEventConfigDavisProblemList",
    },
    event: {
      value: automationWorkflowTriggerEventConfigEventToHclTerraform(struct!.event),
      isBlock: true,
      type: "list",
      storageClassType: "AutomationWorkflowTriggerEventConfigEventList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationWorkflowTriggerEventConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutomationWorkflowTriggerEventConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._davisEvent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.davisEvent = this._davisEvent?.internalValue;
    }
    if (this._davisProblem?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.davisProblem = this._davisProblem?.internalValue;
    }
    if (this._event?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.event = this._event?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationWorkflowTriggerEventConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._value = undefined;
      this._davisEvent.internalValue = undefined;
      this._davisProblem.internalValue = undefined;
      this._event.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._value = value.value;
      this._davisEvent.internalValue = value.davisEvent;
      this._davisProblem.internalValue = value.davisProblem;
      this._event.internalValue = value.event;
    }
  }

  // type - computed: false, optional: true, required: false
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // davis_event - computed: false, optional: true, required: false
  private _davisEvent = new AutomationWorkflowTriggerEventConfigDavisEventOutputReference(this, "davis_event");
  public get davisEvent() {
    return this._davisEvent;
  }
  public putDavisEvent(value: AutomationWorkflowTriggerEventConfigDavisEvent) {
    this._davisEvent.internalValue = value;
  }
  public resetDavisEvent() {
    this._davisEvent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get davisEventInput() {
    return this._davisEvent.internalValue;
  }

  // davis_problem - computed: false, optional: true, required: false
  private _davisProblem = new AutomationWorkflowTriggerEventConfigDavisProblemOutputReference(this, "davis_problem");
  public get davisProblem() {
    return this._davisProblem;
  }
  public putDavisProblem(value: AutomationWorkflowTriggerEventConfigDavisProblem) {
    this._davisProblem.internalValue = value;
  }
  public resetDavisProblem() {
    this._davisProblem.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get davisProblemInput() {
    return this._davisProblem.internalValue;
  }

  // event - computed: false, optional: true, required: false
  private _event = new AutomationWorkflowTriggerEventConfigEventOutputReference(this, "event");
  public get event() {
    return this._event;
  }
  public putEvent(value: AutomationWorkflowTriggerEventConfigEvent) {
    this._event.internalValue = value;
  }
  public resetEvent() {
    this._event.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventInput() {
    return this._event.internalValue;
  }
}
export interface AutomationWorkflowTriggerEvent {
  /**
  * If specified the workflow is getting triggered based on a schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#active AutomationWorkflow#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#config AutomationWorkflow#config}
  */
  readonly config?: AutomationWorkflowTriggerEventConfig;
}

export function automationWorkflowTriggerEventToTerraform(struct?: AutomationWorkflowTriggerEventOutputReference | AutomationWorkflowTriggerEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    config: automationWorkflowTriggerEventConfigToTerraform(struct!.config),
  }
}


export function automationWorkflowTriggerEventToHclTerraform(struct?: AutomationWorkflowTriggerEventOutputReference | AutomationWorkflowTriggerEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    config: {
      value: automationWorkflowTriggerEventConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "AutomationWorkflowTriggerEventConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationWorkflowTriggerEventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutomationWorkflowTriggerEvent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationWorkflowTriggerEvent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._active = undefined;
      this._config.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._active = value.active;
      this._config.internalValue = value.config;
    }
  }

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // config - computed: false, optional: true, required: false
  private _config = new AutomationWorkflowTriggerEventConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: AutomationWorkflowTriggerEventConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }
}
export interface AutomationWorkflowTriggerScheduleFilterParameters {
  /**
  * If specified, the schedule will end triggering executions af the given amount of executions. Minimum: 1, Maximum: 10
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#count AutomationWorkflow#count}
  */
  readonly count?: number;
  /**
  * If specified, the schedule won't trigger executions before the given date
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#earliest_start AutomationWorkflow#earliest_start}
  */
  readonly earliestStart?: string;
  /**
  * If specified, the schedule won't trigger executions before the given time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#earliest_start_time AutomationWorkflow#earliest_start_time}
  */
  readonly earliestStartTime?: string;
  /**
  * If specified, the schedule won't trigger exeuctions on the given dates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#exclude_dates AutomationWorkflow#exclude_dates}
  */
  readonly excludeDates?: string[];
  /**
  * If specified, the schedule will trigger executions on the given dates, even if the main configuration prohibits it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#include_dates AutomationWorkflow#include_dates}
  */
  readonly includeDates?: string[];
  /**
  * If specified, the schedule won't trigger executions after the given date
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#until AutomationWorkflow#until}
  */
  readonly until?: string;
}

export function automationWorkflowTriggerScheduleFilterParametersToTerraform(struct?: AutomationWorkflowTriggerScheduleFilterParametersOutputReference | AutomationWorkflowTriggerScheduleFilterParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    earliest_start: cdktf.stringToTerraform(struct!.earliestStart),
    earliest_start_time: cdktf.stringToTerraform(struct!.earliestStartTime),
    exclude_dates: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeDates),
    include_dates: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeDates),
    until: cdktf.stringToTerraform(struct!.until),
  }
}


export function automationWorkflowTriggerScheduleFilterParametersToHclTerraform(struct?: AutomationWorkflowTriggerScheduleFilterParametersOutputReference | AutomationWorkflowTriggerScheduleFilterParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    earliest_start: {
      value: cdktf.stringToHclTerraform(struct!.earliestStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    earliest_start_time: {
      value: cdktf.stringToHclTerraform(struct!.earliestStartTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_dates: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeDates),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    include_dates: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includeDates),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    until: {
      value: cdktf.stringToHclTerraform(struct!.until),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationWorkflowTriggerScheduleFilterParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutomationWorkflowTriggerScheduleFilterParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._earliestStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.earliestStart = this._earliestStart;
    }
    if (this._earliestStartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.earliestStartTime = this._earliestStartTime;
    }
    if (this._excludeDates !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeDates = this._excludeDates;
    }
    if (this._includeDates !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeDates = this._includeDates;
    }
    if (this._until !== undefined) {
      hasAnyValues = true;
      internalValueResult.until = this._until;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationWorkflowTriggerScheduleFilterParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._earliestStart = undefined;
      this._earliestStartTime = undefined;
      this._excludeDates = undefined;
      this._includeDates = undefined;
      this._until = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._earliestStart = value.earliestStart;
      this._earliestStartTime = value.earliestStartTime;
      this._excludeDates = value.excludeDates;
      this._includeDates = value.includeDates;
      this._until = value.until;
    }
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // earliest_start - computed: false, optional: true, required: false
  private _earliestStart?: string; 
  public get earliestStart() {
    return this.getStringAttribute('earliest_start');
  }
  public set earliestStart(value: string) {
    this._earliestStart = value;
  }
  public resetEarliestStart() {
    this._earliestStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get earliestStartInput() {
    return this._earliestStart;
  }

  // earliest_start_time - computed: false, optional: true, required: false
  private _earliestStartTime?: string; 
  public get earliestStartTime() {
    return this.getStringAttribute('earliest_start_time');
  }
  public set earliestStartTime(value: string) {
    this._earliestStartTime = value;
  }
  public resetEarliestStartTime() {
    this._earliestStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get earliestStartTimeInput() {
    return this._earliestStartTime;
  }

  // exclude_dates - computed: false, optional: true, required: false
  private _excludeDates?: string[]; 
  public get excludeDates() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude_dates'));
  }
  public set excludeDates(value: string[]) {
    this._excludeDates = value;
  }
  public resetExcludeDates() {
    this._excludeDates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeDatesInput() {
    return this._excludeDates;
  }

  // include_dates - computed: false, optional: true, required: false
  private _includeDates?: string[]; 
  public get includeDates() {
    return cdktf.Fn.tolist(this.getListAttribute('include_dates'));
  }
  public set includeDates(value: string[]) {
    this._includeDates = value;
  }
  public resetIncludeDates() {
    this._includeDates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDatesInput() {
    return this._includeDates;
  }

  // until - computed: false, optional: true, required: false
  private _until?: string; 
  public get until() {
    return this.getStringAttribute('until');
  }
  public set until(value: string) {
    this._until = value;
  }
  public resetUntil() {
    this._until = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untilInput() {
    return this._until;
  }
}
export interface AutomationWorkflowTriggerScheduleTrigger {
  /**
  * Triggers the schedule every n minutes within a given time frame - specifying the end time on any valid day in 24h format (e.g. 14:22:44). Conflicts with `cron` and `time`. Required with `interval_minutes` and `between_start`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#between_end AutomationWorkflow#between_end}
  */
  readonly betweenEnd?: string;
  /**
  * Triggers the schedule every n minutes within a given time frame - specifying the start time on any valid day in 24h format (e.g. 13:22:44). Conflicts with `cron` and `time`. Required with `interval_minutes` and `between_end`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#between_start AutomationWorkflow#between_start}
  */
  readonly betweenStart?: string;
  /**
  * Configures using cron syntax. Conflicts with `time`, `interval_minutes`, `between_start` and `between_end`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#cron AutomationWorkflow#cron}
  */
  readonly cron?: string;
  /**
  * Triggers the schedule every n minutes within a given time frame. Minimum: 1, Maximum: 720. Required with `between_start` and `between_end`. Conflicts with `cron` and `time`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#interval_minutes AutomationWorkflow#interval_minutes}
  */
  readonly intervalMinutes?: number;
  /**
  * Specifies a fixed time the schedule will trigger at in 24h format (e.g. `14:23:59`). Conflicts with `cron`, `interval_minutes`, `between_start` and `between_end`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#time AutomationWorkflow#time}
  */
  readonly time?: string;
}

export function automationWorkflowTriggerScheduleTriggerToTerraform(struct?: AutomationWorkflowTriggerScheduleTriggerOutputReference | AutomationWorkflowTriggerScheduleTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    between_end: cdktf.stringToTerraform(struct!.betweenEnd),
    between_start: cdktf.stringToTerraform(struct!.betweenStart),
    cron: cdktf.stringToTerraform(struct!.cron),
    interval_minutes: cdktf.numberToTerraform(struct!.intervalMinutes),
    time: cdktf.stringToTerraform(struct!.time),
  }
}


export function automationWorkflowTriggerScheduleTriggerToHclTerraform(struct?: AutomationWorkflowTriggerScheduleTriggerOutputReference | AutomationWorkflowTriggerScheduleTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    between_end: {
      value: cdktf.stringToHclTerraform(struct!.betweenEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    between_start: {
      value: cdktf.stringToHclTerraform(struct!.betweenStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cron: {
      value: cdktf.stringToHclTerraform(struct!.cron),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval_minutes: {
      value: cdktf.numberToHclTerraform(struct!.intervalMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time: {
      value: cdktf.stringToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationWorkflowTriggerScheduleTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutomationWorkflowTriggerScheduleTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._betweenEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.betweenEnd = this._betweenEnd;
    }
    if (this._betweenStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.betweenStart = this._betweenStart;
    }
    if (this._cron !== undefined) {
      hasAnyValues = true;
      internalValueResult.cron = this._cron;
    }
    if (this._intervalMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalMinutes = this._intervalMinutes;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationWorkflowTriggerScheduleTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._betweenEnd = undefined;
      this._betweenStart = undefined;
      this._cron = undefined;
      this._intervalMinutes = undefined;
      this._time = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._betweenEnd = value.betweenEnd;
      this._betweenStart = value.betweenStart;
      this._cron = value.cron;
      this._intervalMinutes = value.intervalMinutes;
      this._time = value.time;
    }
  }

  // between_end - computed: false, optional: true, required: false
  private _betweenEnd?: string; 
  public get betweenEnd() {
    return this.getStringAttribute('between_end');
  }
  public set betweenEnd(value: string) {
    this._betweenEnd = value;
  }
  public resetBetweenEnd() {
    this._betweenEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get betweenEndInput() {
    return this._betweenEnd;
  }

  // between_start - computed: false, optional: true, required: false
  private _betweenStart?: string; 
  public get betweenStart() {
    return this.getStringAttribute('between_start');
  }
  public set betweenStart(value: string) {
    this._betweenStart = value;
  }
  public resetBetweenStart() {
    this._betweenStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get betweenStartInput() {
    return this._betweenStart;
  }

  // cron - computed: false, optional: true, required: false
  private _cron?: string; 
  public get cron() {
    return this.getStringAttribute('cron');
  }
  public set cron(value: string) {
    this._cron = value;
  }
  public resetCron() {
    this._cron = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronInput() {
    return this._cron;
  }

  // interval_minutes - computed: false, optional: true, required: false
  private _intervalMinutes?: number; 
  public get intervalMinutes() {
    return this.getNumberAttribute('interval_minutes');
  }
  public set intervalMinutes(value: number) {
    this._intervalMinutes = value;
  }
  public resetIntervalMinutes() {
    this._intervalMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalMinutesInput() {
    return this._intervalMinutes;
  }

  // time - computed: false, optional: true, required: false
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }
}
export interface AutomationWorkflowTriggerSchedule {
  /**
  * The trigger is enabled (`true`) or not (`false`). Default is `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#active AutomationWorkflow#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Refers to a configured rule that determines at which days the schedule should be active. If not specified it implies that the schedule is valid every day
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#rule AutomationWorkflow#rule}
  */
  readonly rule?: string;
  /**
  * A time zone the scheduled times to align with. If not specified it will be chosen automatically based on the location of the Dynatrace Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#time_zone AutomationWorkflow#time_zone}
  */
  readonly timeZone?: string;
  /**
  * filter_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#filter_parameters AutomationWorkflow#filter_parameters}
  */
  readonly filterParameters?: AutomationWorkflowTriggerScheduleFilterParameters;
  /**
  * trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#trigger AutomationWorkflow#trigger}
  */
  readonly trigger: AutomationWorkflowTriggerScheduleTrigger;
}

export function automationWorkflowTriggerScheduleToTerraform(struct?: AutomationWorkflowTriggerScheduleOutputReference | AutomationWorkflowTriggerSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    rule: cdktf.stringToTerraform(struct!.rule),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
    filter_parameters: automationWorkflowTriggerScheduleFilterParametersToTerraform(struct!.filterParameters),
    trigger: automationWorkflowTriggerScheduleTriggerToTerraform(struct!.trigger),
  }
}


export function automationWorkflowTriggerScheduleToHclTerraform(struct?: AutomationWorkflowTriggerScheduleOutputReference | AutomationWorkflowTriggerSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rule: {
      value: cdktf.stringToHclTerraform(struct!.rule),
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
    filter_parameters: {
      value: automationWorkflowTriggerScheduleFilterParametersToHclTerraform(struct!.filterParameters),
      isBlock: true,
      type: "list",
      storageClassType: "AutomationWorkflowTriggerScheduleFilterParametersList",
    },
    trigger: {
      value: automationWorkflowTriggerScheduleTriggerToHclTerraform(struct!.trigger),
      isBlock: true,
      type: "list",
      storageClassType: "AutomationWorkflowTriggerScheduleTriggerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationWorkflowTriggerScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutomationWorkflowTriggerSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._rule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    if (this._filterParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterParameters = this._filterParameters?.internalValue;
    }
    if (this._trigger?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trigger = this._trigger?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationWorkflowTriggerSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._active = undefined;
      this._rule = undefined;
      this._timeZone = undefined;
      this._filterParameters.internalValue = undefined;
      this._trigger.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._active = value.active;
      this._rule = value.rule;
      this._timeZone = value.timeZone;
      this._filterParameters.internalValue = value.filterParameters;
      this._trigger.internalValue = value.trigger;
    }
  }

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // rule - computed: false, optional: true, required: false
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  public resetRule() {
    this._rule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
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

  // filter_parameters - computed: false, optional: true, required: false
  private _filterParameters = new AutomationWorkflowTriggerScheduleFilterParametersOutputReference(this, "filter_parameters");
  public get filterParameters() {
    return this._filterParameters;
  }
  public putFilterParameters(value: AutomationWorkflowTriggerScheduleFilterParameters) {
    this._filterParameters.internalValue = value;
  }
  public resetFilterParameters() {
    this._filterParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterParametersInput() {
    return this._filterParameters.internalValue;
  }

  // trigger - computed: false, optional: false, required: true
  private _trigger = new AutomationWorkflowTriggerScheduleTriggerOutputReference(this, "trigger");
  public get trigger() {
    return this._trigger;
  }
  public putTrigger(value: AutomationWorkflowTriggerScheduleTrigger) {
    this._trigger.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger.internalValue;
  }
}
export interface AutomationWorkflowTrigger {
  /**
  * event block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#event AutomationWorkflow#event}
  */
  readonly event?: AutomationWorkflowTriggerEvent;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#schedule AutomationWorkflow#schedule}
  */
  readonly schedule?: AutomationWorkflowTriggerSchedule;
}

export function automationWorkflowTriggerToTerraform(struct?: AutomationWorkflowTriggerOutputReference | AutomationWorkflowTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event: automationWorkflowTriggerEventToTerraform(struct!.event),
    schedule: automationWorkflowTriggerScheduleToTerraform(struct!.schedule),
  }
}


export function automationWorkflowTriggerToHclTerraform(struct?: AutomationWorkflowTriggerOutputReference | AutomationWorkflowTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event: {
      value: automationWorkflowTriggerEventToHclTerraform(struct!.event),
      isBlock: true,
      type: "list",
      storageClassType: "AutomationWorkflowTriggerEventList",
    },
    schedule: {
      value: automationWorkflowTriggerScheduleToHclTerraform(struct!.schedule),
      isBlock: true,
      type: "list",
      storageClassType: "AutomationWorkflowTriggerScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationWorkflowTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutomationWorkflowTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._event?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.event = this._event?.internalValue;
    }
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationWorkflowTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._event.internalValue = undefined;
      this._schedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._event.internalValue = value.event;
      this._schedule.internalValue = value.schedule;
    }
  }

  // event - computed: false, optional: true, required: false
  private _event = new AutomationWorkflowTriggerEventOutputReference(this, "event");
  public get event() {
    return this._event;
  }
  public putEvent(value: AutomationWorkflowTriggerEvent) {
    this._event.internalValue = value;
  }
  public resetEvent() {
    this._event.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventInput() {
    return this._event.internalValue;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new AutomationWorkflowTriggerScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: AutomationWorkflowTriggerSchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow dynatrace_automation_workflow}
*/
export class AutomationWorkflow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_automation_workflow";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AutomationWorkflow resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AutomationWorkflow to import
  * @param importFromId The id of the existing AutomationWorkflow that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AutomationWorkflow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_automation_workflow", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/automation_workflow dynatrace_automation_workflow} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutomationWorkflowConfig
  */
  public constructor(scope: Construct, id: string, config: AutomationWorkflowConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_automation_workflow',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actor = config.actor;
    this._description = config.description;
    this._id = config.id;
    this._owner = config.owner;
    this._private = config.private;
    this._title = config.title;
    this._type = config.type;
    this._tasks.internalValue = config.tasks;
    this._trigger.internalValue = config.trigger;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actor - computed: false, optional: true, required: false
  private _actor?: string; 
  public get actor() {
    return this.getStringAttribute('actor');
  }
  public set actor(value: string) {
    this._actor = value;
  }
  public resetActor() {
    this._actor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actorInput() {
    return this._actor;
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

  // owner - computed: false, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // private - computed: false, optional: true, required: false
  private _private?: boolean | cdktf.IResolvable; 
  public get private() {
    return this.getBooleanAttribute('private');
  }
  public set private(value: boolean | cdktf.IResolvable) {
    this._private = value;
  }
  public resetPrivate() {
    this._private = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateInput() {
    return this._private;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // type - computed: false, optional: true, required: false
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

  // tasks - computed: false, optional: false, required: true
  private _tasks = new AutomationWorkflowTasksOutputReference(this, "tasks");
  public get tasks() {
    return this._tasks;
  }
  public putTasks(value: AutomationWorkflowTasks) {
    this._tasks.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tasksInput() {
    return this._tasks.internalValue;
  }

  // trigger - computed: false, optional: true, required: false
  private _trigger = new AutomationWorkflowTriggerOutputReference(this, "trigger");
  public get trigger() {
    return this._trigger;
  }
  public putTrigger(value: AutomationWorkflowTrigger) {
    this._trigger.internalValue = value;
  }
  public resetTrigger() {
    this._trigger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      actor: cdktf.stringToTerraform(this._actor),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      owner: cdktf.stringToTerraform(this._owner),
      private: cdktf.booleanToTerraform(this._private),
      title: cdktf.stringToTerraform(this._title),
      type: cdktf.stringToTerraform(this._type),
      tasks: automationWorkflowTasksToTerraform(this._tasks.internalValue),
      trigger: automationWorkflowTriggerToTerraform(this._trigger.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      actor: {
        value: cdktf.stringToHclTerraform(this._actor),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner: {
        value: cdktf.stringToHclTerraform(this._owner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private: {
        value: cdktf.booleanToHclTerraform(this._private),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tasks: {
        value: automationWorkflowTasksToHclTerraform(this._tasks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AutomationWorkflowTasksList",
      },
      trigger: {
        value: automationWorkflowTriggerToHclTerraform(this._trigger.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AutomationWorkflowTriggerList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
