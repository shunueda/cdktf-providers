// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RealtimeComputeJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_job#deployment_id RealtimeComputeJob#deployment_id}
  */
  readonly deploymentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_job#id RealtimeComputeJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_job#namespace RealtimeComputeJob#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_job#resource_id RealtimeComputeJob#resource_id}
  */
  readonly resourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_job#resource_queue_name RealtimeComputeJob#resource_queue_name}
  */
  readonly resourceQueueName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_job#stop_strategy RealtimeComputeJob#stop_strategy}
  */
  readonly stopStrategy?: string;
  /**
  * local_variables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_job#local_variables RealtimeComputeJob#local_variables}
  */
  readonly localVariables?: RealtimeComputeJobLocalVariables[] | cdktf.IResolvable;
  /**
  * restore_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_job#restore_strategy RealtimeComputeJob#restore_strategy}
  */
  readonly restoreStrategy?: RealtimeComputeJobRestoreStrategy;
  /**
  * status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_job#status RealtimeComputeJob#status}
  */
  readonly status?: RealtimeComputeJobStatus;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_job#timeouts RealtimeComputeJob#timeouts}
  */
  readonly timeouts?: RealtimeComputeJobTimeouts;
}
export interface RealtimeComputeJobLocalVariables {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_job#name RealtimeComputeJob#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_job#value RealtimeComputeJob#value}
  */
  readonly value?: string;
}

export function realtimeComputeJobLocalVariablesToTerraform(struct?: RealtimeComputeJobLocalVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function realtimeComputeJobLocalVariablesToHclTerraform(struct?: RealtimeComputeJobLocalVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RealtimeComputeJobLocalVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RealtimeComputeJobLocalVariables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RealtimeComputeJobLocalVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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
}

export class RealtimeComputeJobLocalVariablesList extends cdktf.ComplexList {
  public internalValue? : RealtimeComputeJobLocalVariables[] | cdktf.IResolvable

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
  public get(index: number): RealtimeComputeJobLocalVariablesOutputReference {
    return new RealtimeComputeJobLocalVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RealtimeComputeJobRestoreStrategy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_job#allow_non_restored_state RealtimeComputeJob#allow_non_restored_state}
  */
  readonly allowNonRestoredState?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_job#job_start_time_in_ms RealtimeComputeJob#job_start_time_in_ms}
  */
  readonly jobStartTimeInMs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_job#kind RealtimeComputeJob#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_job#savepoint_id RealtimeComputeJob#savepoint_id}
  */
  readonly savepointId?: string;
}

export function realtimeComputeJobRestoreStrategyToTerraform(struct?: RealtimeComputeJobRestoreStrategyOutputReference | RealtimeComputeJobRestoreStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_non_restored_state: cdktf.booleanToTerraform(struct!.allowNonRestoredState),
    job_start_time_in_ms: cdktf.numberToTerraform(struct!.jobStartTimeInMs),
    kind: cdktf.stringToTerraform(struct!.kind),
    savepoint_id: cdktf.stringToTerraform(struct!.savepointId),
  }
}


export function realtimeComputeJobRestoreStrategyToHclTerraform(struct?: RealtimeComputeJobRestoreStrategyOutputReference | RealtimeComputeJobRestoreStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_non_restored_state: {
      value: cdktf.booleanToHclTerraform(struct!.allowNonRestoredState),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    job_start_time_in_ms: {
      value: cdktf.numberToHclTerraform(struct!.jobStartTimeInMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    savepoint_id: {
      value: cdktf.stringToHclTerraform(struct!.savepointId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RealtimeComputeJobRestoreStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RealtimeComputeJobRestoreStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowNonRestoredState !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowNonRestoredState = this._allowNonRestoredState;
    }
    if (this._jobStartTimeInMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobStartTimeInMs = this._jobStartTimeInMs;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._savepointId !== undefined) {
      hasAnyValues = true;
      internalValueResult.savepointId = this._savepointId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RealtimeComputeJobRestoreStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowNonRestoredState = undefined;
      this._jobStartTimeInMs = undefined;
      this._kind = undefined;
      this._savepointId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowNonRestoredState = value.allowNonRestoredState;
      this._jobStartTimeInMs = value.jobStartTimeInMs;
      this._kind = value.kind;
      this._savepointId = value.savepointId;
    }
  }

  // allow_non_restored_state - computed: false, optional: true, required: false
  private _allowNonRestoredState?: boolean | cdktf.IResolvable; 
  public get allowNonRestoredState() {
    return this.getBooleanAttribute('allow_non_restored_state');
  }
  public set allowNonRestoredState(value: boolean | cdktf.IResolvable) {
    this._allowNonRestoredState = value;
  }
  public resetAllowNonRestoredState() {
    this._allowNonRestoredState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowNonRestoredStateInput() {
    return this._allowNonRestoredState;
  }

  // job_start_time_in_ms - computed: false, optional: true, required: false
  private _jobStartTimeInMs?: number; 
  public get jobStartTimeInMs() {
    return this.getNumberAttribute('job_start_time_in_ms');
  }
  public set jobStartTimeInMs(value: number) {
    this._jobStartTimeInMs = value;
  }
  public resetJobStartTimeInMs() {
    this._jobStartTimeInMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobStartTimeInMsInput() {
    return this._jobStartTimeInMs;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // savepoint_id - computed: false, optional: true, required: false
  private _savepointId?: string; 
  public get savepointId() {
    return this.getStringAttribute('savepoint_id');
  }
  public set savepointId(value: string) {
    this._savepointId = value;
  }
  public resetSavepointId() {
    this._savepointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get savepointIdInput() {
    return this._savepointId;
  }
}
export interface RealtimeComputeJobStatusFailure {
}

export function realtimeComputeJobStatusFailureToTerraform(struct?: RealtimeComputeJobStatusFailure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function realtimeComputeJobStatusFailureToHclTerraform(struct?: RealtimeComputeJobStatusFailure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class RealtimeComputeJobStatusFailureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): RealtimeComputeJobStatusFailure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RealtimeComputeJobStatusFailure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // failed_at - computed: true, optional: false, required: false
  public get failedAt() {
    return this.getNumberAttribute('failed_at');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }
}

export class RealtimeComputeJobStatusFailureList extends cdktf.ComplexList {

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
  public get(index: number): RealtimeComputeJobStatusFailureOutputReference {
    return new RealtimeComputeJobStatusFailureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RealtimeComputeJobStatusRunning {
}

export function realtimeComputeJobStatusRunningToTerraform(struct?: RealtimeComputeJobStatusRunning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function realtimeComputeJobStatusRunningToHclTerraform(struct?: RealtimeComputeJobStatusRunning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class RealtimeComputeJobStatusRunningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): RealtimeComputeJobStatusRunning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RealtimeComputeJobStatusRunning | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // observed_flink_job_restarts - computed: true, optional: false, required: false
  public get observedFlinkJobRestarts() {
    return this.getNumberAttribute('observed_flink_job_restarts');
  }

  // observed_flink_job_status - computed: true, optional: false, required: false
  public get observedFlinkJobStatus() {
    return this.getStringAttribute('observed_flink_job_status');
  }
}

export class RealtimeComputeJobStatusRunningList extends cdktf.ComplexList {

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
  public get(index: number): RealtimeComputeJobStatusRunningOutputReference {
    return new RealtimeComputeJobStatusRunningOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RealtimeComputeJobStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_job#current_job_status RealtimeComputeJob#current_job_status}
  */
  readonly currentJobStatus?: string;
}

export function realtimeComputeJobStatusToTerraform(struct?: RealtimeComputeJobStatusOutputReference | RealtimeComputeJobStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    current_job_status: cdktf.stringToTerraform(struct!.currentJobStatus),
  }
}


export function realtimeComputeJobStatusToHclTerraform(struct?: RealtimeComputeJobStatusOutputReference | RealtimeComputeJobStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    current_job_status: {
      value: cdktf.stringToHclTerraform(struct!.currentJobStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RealtimeComputeJobStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RealtimeComputeJobStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._currentJobStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentJobStatus = this._currentJobStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RealtimeComputeJobStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._currentJobStatus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._currentJobStatus = value.currentJobStatus;
    }
  }

  // current_job_status - computed: true, optional: true, required: false
  private _currentJobStatus?: string; 
  public get currentJobStatus() {
    return this.getStringAttribute('current_job_status');
  }
  public set currentJobStatus(value: string) {
    this._currentJobStatus = value;
  }
  public resetCurrentJobStatus() {
    this._currentJobStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentJobStatusInput() {
    return this._currentJobStatus;
  }

  // failure - computed: true, optional: false, required: false
  private _failure = new RealtimeComputeJobStatusFailureList(this, "failure", false);
  public get failure() {
    return this._failure;
  }

  // health_score - computed: true, optional: false, required: false
  public get healthScore() {
    return this.getNumberAttribute('health_score');
  }

  // risk_level - computed: true, optional: false, required: false
  public get riskLevel() {
    return this.getStringAttribute('risk_level');
  }

  // running - computed: true, optional: false, required: false
  private _running = new RealtimeComputeJobStatusRunningList(this, "running", false);
  public get running() {
    return this._running;
  }
}
export interface RealtimeComputeJobTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_job#create RealtimeComputeJob#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_job#delete RealtimeComputeJob#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_job#update RealtimeComputeJob#update}
  */
  readonly update?: string;
}

export function realtimeComputeJobTimeoutsToTerraform(struct?: RealtimeComputeJobTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function realtimeComputeJobTimeoutsToHclTerraform(struct?: RealtimeComputeJobTimeouts | cdktf.IResolvable): any {
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
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RealtimeComputeJobTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RealtimeComputeJobTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RealtimeComputeJobTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
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
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_job alicloud_realtime_compute_job}
*/
export class RealtimeComputeJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_realtime_compute_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RealtimeComputeJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RealtimeComputeJob to import
  * @param importFromId The id of the existing RealtimeComputeJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RealtimeComputeJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_realtime_compute_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/realtime_compute_job alicloud_realtime_compute_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RealtimeComputeJobConfig
  */
  public constructor(scope: Construct, id: string, config: RealtimeComputeJobConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_realtime_compute_job',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deploymentId = config.deploymentId;
    this._id = config.id;
    this._namespace = config.namespace;
    this._resourceId = config.resourceId;
    this._resourceQueueName = config.resourceQueueName;
    this._stopStrategy = config.stopStrategy;
    this._localVariables.internalValue = config.localVariables;
    this._restoreStrategy.internalValue = config.restoreStrategy;
    this._status.internalValue = config.status;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deployment_id - computed: false, optional: true, required: false
  private _deploymentId?: string; 
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }
  public set deploymentId(value: string) {
    this._deploymentId = value;
  }
  public resetDeploymentId() {
    this._deploymentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentIdInput() {
    return this._deploymentId;
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

  // job_id - computed: true, optional: false, required: false
  public get jobId() {
    return this.getStringAttribute('job_id');
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

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // resource_queue_name - computed: false, optional: true, required: false
  private _resourceQueueName?: string; 
  public get resourceQueueName() {
    return this.getStringAttribute('resource_queue_name');
  }
  public set resourceQueueName(value: string) {
    this._resourceQueueName = value;
  }
  public resetResourceQueueName() {
    this._resourceQueueName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceQueueNameInput() {
    return this._resourceQueueName;
  }

  // stop_strategy - computed: false, optional: true, required: false
  private _stopStrategy?: string; 
  public get stopStrategy() {
    return this.getStringAttribute('stop_strategy');
  }
  public set stopStrategy(value: string) {
    this._stopStrategy = value;
  }
  public resetStopStrategy() {
    this._stopStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopStrategyInput() {
    return this._stopStrategy;
  }

  // local_variables - computed: false, optional: true, required: false
  private _localVariables = new RealtimeComputeJobLocalVariablesList(this, "local_variables", false);
  public get localVariables() {
    return this._localVariables;
  }
  public putLocalVariables(value: RealtimeComputeJobLocalVariables[] | cdktf.IResolvable) {
    this._localVariables.internalValue = value;
  }
  public resetLocalVariables() {
    this._localVariables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localVariablesInput() {
    return this._localVariables.internalValue;
  }

  // restore_strategy - computed: false, optional: true, required: false
  private _restoreStrategy = new RealtimeComputeJobRestoreStrategyOutputReference(this, "restore_strategy");
  public get restoreStrategy() {
    return this._restoreStrategy;
  }
  public putRestoreStrategy(value: RealtimeComputeJobRestoreStrategy) {
    this._restoreStrategy.internalValue = value;
  }
  public resetRestoreStrategy() {
    this._restoreStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreStrategyInput() {
    return this._restoreStrategy.internalValue;
  }

  // status - computed: false, optional: true, required: false
  private _status = new RealtimeComputeJobStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }
  public putStatus(value: RealtimeComputeJobStatus) {
    this._status.internalValue = value;
  }
  public resetStatus() {
    this._status.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new RealtimeComputeJobTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RealtimeComputeJobTimeouts) {
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
      deployment_id: cdktf.stringToTerraform(this._deploymentId),
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      resource_queue_name: cdktf.stringToTerraform(this._resourceQueueName),
      stop_strategy: cdktf.stringToTerraform(this._stopStrategy),
      local_variables: cdktf.listMapper(realtimeComputeJobLocalVariablesToTerraform, true)(this._localVariables.internalValue),
      restore_strategy: realtimeComputeJobRestoreStrategyToTerraform(this._restoreStrategy.internalValue),
      status: realtimeComputeJobStatusToTerraform(this._status.internalValue),
      timeouts: realtimeComputeJobTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deployment_id: {
        value: cdktf.stringToHclTerraform(this._deploymentId),
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
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_queue_name: {
        value: cdktf.stringToHclTerraform(this._resourceQueueName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stop_strategy: {
        value: cdktf.stringToHclTerraform(this._stopStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_variables: {
        value: cdktf.listMapperHcl(realtimeComputeJobLocalVariablesToHclTerraform, true)(this._localVariables.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RealtimeComputeJobLocalVariablesList",
      },
      restore_strategy: {
        value: realtimeComputeJobRestoreStrategyToHclTerraform(this._restoreStrategy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RealtimeComputeJobRestoreStrategyList",
      },
      status: {
        value: realtimeComputeJobStatusToHclTerraform(this._status.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RealtimeComputeJobStatusList",
      },
      timeouts: {
        value: realtimeComputeJobTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RealtimeComputeJobTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
