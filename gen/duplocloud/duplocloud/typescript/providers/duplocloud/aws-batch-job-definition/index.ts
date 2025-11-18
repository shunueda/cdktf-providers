// https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/aws_batch_job_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsBatchJobDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * A valid container properties provided as a single valid JSON document. This parameter is required if the type parameter is `container`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/aws_batch_job_definition#container_properties AwsBatchJobDefinition#container_properties}
  */
  readonly containerProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/aws_batch_job_definition#id AwsBatchJobDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the name of the Job Definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/aws_batch_job_definition#name AwsBatchJobDefinition#name}
  */
  readonly name: string;
  /**
  * Specifies the parameter substitution placeholders to set in the job definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/aws_batch_job_definition#parameters AwsBatchJobDefinition#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * The platform capabilities required by the job definition. If no value is specified, it defaults to `EC2`. To run the job on Fargate resources, specify `FARGATE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/aws_batch_job_definition#platform_capabilities AwsBatchJobDefinition#platform_capabilities}
  */
  readonly platformCapabilities?: string[];
  /**
  * Key-value map of resource tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/aws_batch_job_definition#tags AwsBatchJobDefinition#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * The GUID of the tenant that the aws batch Job Definition will be created in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/aws_batch_job_definition#tenant_id AwsBatchJobDefinition#tenant_id}
  */
  readonly tenantId: string;
  /**
  * The `type` of job definition. Must be `container`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/aws_batch_job_definition#type AwsBatchJobDefinition#type}
  */
  readonly type: string;
  /**
  * retry_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/aws_batch_job_definition#retry_strategy AwsBatchJobDefinition#retry_strategy}
  */
  readonly retryStrategy?: AwsBatchJobDefinitionRetryStrategy;
  /**
  * timeout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/aws_batch_job_definition#timeout AwsBatchJobDefinition#timeout}
  */
  readonly timeout?: AwsBatchJobDefinitionTimeout;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/aws_batch_job_definition#timeouts AwsBatchJobDefinition#timeouts}
  */
  readonly timeouts?: AwsBatchJobDefinitionTimeouts;
}
export interface AwsBatchJobDefinitionRetryStrategyEvaluateOnExit {
  /**
  * Specifies the action to take if all of the specified conditions are met. The values are not case sensitive. Valid values: `RETRY`, `EXIT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/aws_batch_job_definition#action AwsBatchJobDefinition#action}
  */
  readonly action: string;
  /**
  * A glob pattern to match against the decimal representation of the exit code returned for a job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/aws_batch_job_definition#on_exit_code AwsBatchJobDefinition#on_exit_code}
  */
  readonly onExitCode?: string;
  /**
  * A glob pattern to match against the reason returned for a job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/aws_batch_job_definition#on_reason AwsBatchJobDefinition#on_reason}
  */
  readonly onReason?: string;
  /**
  * A glob pattern to match against the status reason returned for a job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/aws_batch_job_definition#on_status_reason AwsBatchJobDefinition#on_status_reason}
  */
  readonly onStatusReason?: string;
}

export function awsBatchJobDefinitionRetryStrategyEvaluateOnExitToTerraform(struct?: AwsBatchJobDefinitionRetryStrategyEvaluateOnExit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    on_exit_code: cdktf.stringToTerraform(struct!.onExitCode),
    on_reason: cdktf.stringToTerraform(struct!.onReason),
    on_status_reason: cdktf.stringToTerraform(struct!.onStatusReason),
  }
}


export function awsBatchJobDefinitionRetryStrategyEvaluateOnExitToHclTerraform(struct?: AwsBatchJobDefinitionRetryStrategyEvaluateOnExit | cdktf.IResolvable): any {
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
    on_exit_code: {
      value: cdktf.stringToHclTerraform(struct!.onExitCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_reason: {
      value: cdktf.stringToHclTerraform(struct!.onReason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_status_reason: {
      value: cdktf.stringToHclTerraform(struct!.onStatusReason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsBatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsBatchJobDefinitionRetryStrategyEvaluateOnExit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._onExitCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.onExitCode = this._onExitCode;
    }
    if (this._onReason !== undefined) {
      hasAnyValues = true;
      internalValueResult.onReason = this._onReason;
    }
    if (this._onStatusReason !== undefined) {
      hasAnyValues = true;
      internalValueResult.onStatusReason = this._onStatusReason;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsBatchJobDefinitionRetryStrategyEvaluateOnExit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._onExitCode = undefined;
      this._onReason = undefined;
      this._onStatusReason = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._onExitCode = value.onExitCode;
      this._onReason = value.onReason;
      this._onStatusReason = value.onStatusReason;
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

  // on_exit_code - computed: false, optional: true, required: false
  private _onExitCode?: string; 
  public get onExitCode() {
    return this.getStringAttribute('on_exit_code');
  }
  public set onExitCode(value: string) {
    this._onExitCode = value;
  }
  public resetOnExitCode() {
    this._onExitCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onExitCodeInput() {
    return this._onExitCode;
  }

  // on_reason - computed: false, optional: true, required: false
  private _onReason?: string; 
  public get onReason() {
    return this.getStringAttribute('on_reason');
  }
  public set onReason(value: string) {
    this._onReason = value;
  }
  public resetOnReason() {
    this._onReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onReasonInput() {
    return this._onReason;
  }

  // on_status_reason - computed: false, optional: true, required: false
  private _onStatusReason?: string; 
  public get onStatusReason() {
    return this.getStringAttribute('on_status_reason');
  }
  public set onStatusReason(value: string) {
    this._onStatusReason = value;
  }
  public resetOnStatusReason() {
    this._onStatusReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onStatusReasonInput() {
    return this._onStatusReason;
  }
}

export class AwsBatchJobDefinitionRetryStrategyEvaluateOnExitList extends cdktf.ComplexList {
  public internalValue? : AwsBatchJobDefinitionRetryStrategyEvaluateOnExit[] | cdktf.IResolvable

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
  public get(index: number): AwsBatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference {
    return new AwsBatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsBatchJobDefinitionRetryStrategy {
  /**
  * The number of times to move a job to the RUNNABLE status. You may specify between `1` and `10` attempts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/aws_batch_job_definition#attempts AwsBatchJobDefinition#attempts}
  */
  readonly attempts?: number;
  /**
  * evaluate_on_exit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/aws_batch_job_definition#evaluate_on_exit AwsBatchJobDefinition#evaluate_on_exit}
  */
  readonly evaluateOnExit?: AwsBatchJobDefinitionRetryStrategyEvaluateOnExit[] | cdktf.IResolvable;
}

export function awsBatchJobDefinitionRetryStrategyToTerraform(struct?: AwsBatchJobDefinitionRetryStrategyOutputReference | AwsBatchJobDefinitionRetryStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attempts: cdktf.numberToTerraform(struct!.attempts),
    evaluate_on_exit: cdktf.listMapper(awsBatchJobDefinitionRetryStrategyEvaluateOnExitToTerraform, true)(struct!.evaluateOnExit),
  }
}


export function awsBatchJobDefinitionRetryStrategyToHclTerraform(struct?: AwsBatchJobDefinitionRetryStrategyOutputReference | AwsBatchJobDefinitionRetryStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attempts: {
      value: cdktf.numberToHclTerraform(struct!.attempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    evaluate_on_exit: {
      value: cdktf.listMapperHcl(awsBatchJobDefinitionRetryStrategyEvaluateOnExitToHclTerraform, true)(struct!.evaluateOnExit),
      isBlock: true,
      type: "list",
      storageClassType: "AwsBatchJobDefinitionRetryStrategyEvaluateOnExitList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsBatchJobDefinitionRetryStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsBatchJobDefinitionRetryStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.attempts = this._attempts;
    }
    if (this._evaluateOnExit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluateOnExit = this._evaluateOnExit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsBatchJobDefinitionRetryStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attempts = undefined;
      this._evaluateOnExit.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attempts = value.attempts;
      this._evaluateOnExit.internalValue = value.evaluateOnExit;
    }
  }

  // attempts - computed: false, optional: true, required: false
  private _attempts?: number; 
  public get attempts() {
    return this.getNumberAttribute('attempts');
  }
  public set attempts(value: number) {
    this._attempts = value;
  }
  public resetAttempts() {
    this._attempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attemptsInput() {
    return this._attempts;
  }

  // evaluate_on_exit - computed: false, optional: true, required: false
  private _evaluateOnExit = new AwsBatchJobDefinitionRetryStrategyEvaluateOnExitList(this, "evaluate_on_exit", false);
  public get evaluateOnExit() {
    return this._evaluateOnExit;
  }
  public putEvaluateOnExit(value: AwsBatchJobDefinitionRetryStrategyEvaluateOnExit[] | cdktf.IResolvable) {
    this._evaluateOnExit.internalValue = value;
  }
  public resetEvaluateOnExit() {
    this._evaluateOnExit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateOnExitInput() {
    return this._evaluateOnExit.internalValue;
  }
}
export interface AwsBatchJobDefinitionTimeout {
  /**
  * The time duration in seconds after which AWS Batch terminates your jobs if they have not finished. The minimum value for the timeout is `60`seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/aws_batch_job_definition#attempt_duration_seconds AwsBatchJobDefinition#attempt_duration_seconds}
  */
  readonly attemptDurationSeconds?: number;
}

export function awsBatchJobDefinitionTimeoutToTerraform(struct?: AwsBatchJobDefinitionTimeoutOutputReference | AwsBatchJobDefinitionTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attempt_duration_seconds: cdktf.numberToTerraform(struct!.attemptDurationSeconds),
  }
}


export function awsBatchJobDefinitionTimeoutToHclTerraform(struct?: AwsBatchJobDefinitionTimeoutOutputReference | AwsBatchJobDefinitionTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attempt_duration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.attemptDurationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsBatchJobDefinitionTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsBatchJobDefinitionTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attemptDurationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.attemptDurationSeconds = this._attemptDurationSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsBatchJobDefinitionTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attemptDurationSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attemptDurationSeconds = value.attemptDurationSeconds;
    }
  }

  // attempt_duration_seconds - computed: false, optional: true, required: false
  private _attemptDurationSeconds?: number; 
  public get attemptDurationSeconds() {
    return this.getNumberAttribute('attempt_duration_seconds');
  }
  public set attemptDurationSeconds(value: number) {
    this._attemptDurationSeconds = value;
  }
  public resetAttemptDurationSeconds() {
    this._attemptDurationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attemptDurationSecondsInput() {
    return this._attemptDurationSeconds;
  }
}
export interface AwsBatchJobDefinitionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/aws_batch_job_definition#create AwsBatchJobDefinition#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/aws_batch_job_definition#delete AwsBatchJobDefinition#delete}
  */
  readonly delete?: string;
}

export function awsBatchJobDefinitionTimeoutsToTerraform(struct?: AwsBatchJobDefinitionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function awsBatchJobDefinitionTimeoutsToHclTerraform(struct?: AwsBatchJobDefinitionTimeouts | cdktf.IResolvable): any {
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
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsBatchJobDefinitionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AwsBatchJobDefinitionTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsBatchJobDefinitionTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
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

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/aws_batch_job_definition duplocloud_aws_batch_job_definition}
*/
export class AwsBatchJobDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "duplocloud_aws_batch_job_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsBatchJobDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsBatchJobDefinition to import
  * @param importFromId The id of the existing AwsBatchJobDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/aws_batch_job_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsBatchJobDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "duplocloud_aws_batch_job_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/aws_batch_job_definition duplocloud_aws_batch_job_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsBatchJobDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: AwsBatchJobDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'duplocloud_aws_batch_job_definition',
      terraformGeneratorMetadata: {
        providerName: 'duplocloud',
        providerVersion: '0.11.29',
        providerVersionConstraint: '0.11.29'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._containerProperties = config.containerProperties;
    this._id = config.id;
    this._name = config.name;
    this._parameters = config.parameters;
    this._platformCapabilities = config.platformCapabilities;
    this._tags = config.tags;
    this._tenantId = config.tenantId;
    this._type = config.type;
    this._retryStrategy.internalValue = config.retryStrategy;
    this._timeout.internalValue = config.timeout;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // container_properties - computed: true, optional: true, required: false
  private _containerProperties?: string; 
  public get containerProperties() {
    return this.getStringAttribute('container_properties');
  }
  public set containerProperties(value: string) {
    this._containerProperties = value;
  }
  public resetContainerProperties() {
    this._containerProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerPropertiesInput() {
    return this._containerProperties;
  }

  // fullname - computed: true, optional: false, required: false
  public get fullname() {
    return this.getStringAttribute('fullname');
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

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // platform_capabilities - computed: false, optional: true, required: false
  private _platformCapabilities?: string[]; 
  public get platformCapabilities() {
    return cdktf.Fn.tolist(this.getListAttribute('platform_capabilities'));
  }
  public set platformCapabilities(value: string[]) {
    this._platformCapabilities = value;
  }
  public resetPlatformCapabilities() {
    this._platformCapabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformCapabilitiesInput() {
    return this._platformCapabilities;
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // retry_strategy - computed: false, optional: true, required: false
  private _retryStrategy = new AwsBatchJobDefinitionRetryStrategyOutputReference(this, "retry_strategy");
  public get retryStrategy() {
    return this._retryStrategy;
  }
  public putRetryStrategy(value: AwsBatchJobDefinitionRetryStrategy) {
    this._retryStrategy.internalValue = value;
  }
  public resetRetryStrategy() {
    this._retryStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryStrategyInput() {
    return this._retryStrategy.internalValue;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout = new AwsBatchJobDefinitionTimeoutOutputReference(this, "timeout");
  public get timeout() {
    return this._timeout;
  }
  public putTimeout(value: AwsBatchJobDefinitionTimeout) {
    this._timeout.internalValue = value;
  }
  public resetTimeout() {
    this._timeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsBatchJobDefinitionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsBatchJobDefinitionTimeouts) {
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
      container_properties: cdktf.stringToTerraform(this._containerProperties),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      parameters: cdktf.hashMapper(cdktf.stringToTerraform)(this._parameters),
      platform_capabilities: cdktf.listMapper(cdktf.stringToTerraform, false)(this._platformCapabilities),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      type: cdktf.stringToTerraform(this._type),
      retry_strategy: awsBatchJobDefinitionRetryStrategyToTerraform(this._retryStrategy.internalValue),
      timeout: awsBatchJobDefinitionTimeoutToTerraform(this._timeout.internalValue),
      timeouts: awsBatchJobDefinitionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      container_properties: {
        value: cdktf.stringToHclTerraform(this._containerProperties),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._parameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      platform_capabilities: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._platformCapabilities),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
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
      retry_strategy: {
        value: awsBatchJobDefinitionRetryStrategyToHclTerraform(this._retryStrategy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsBatchJobDefinitionRetryStrategyList",
      },
      timeout: {
        value: awsBatchJobDefinitionTimeoutToHclTerraform(this._timeout.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsBatchJobDefinitionTimeoutList",
      },
      timeouts: {
        value: awsBatchJobDefinitionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsBatchJobDefinitionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
