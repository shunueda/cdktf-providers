// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/disaster_recovery_dr_plan_execution
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDisasterRecoveryDrPlanExecutionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/disaster_recovery_dr_plan_execution#dr_plan_execution_id DataOciDisasterRecoveryDrPlanExecution#dr_plan_execution_id}
  */
  readonly drPlanExecutionId: string;
}
export interface DataOciDisasterRecoveryDrPlanExecutionAutomaticExecutionDetails {
}

export function dataOciDisasterRecoveryDrPlanExecutionAutomaticExecutionDetailsToTerraform(struct?: DataOciDisasterRecoveryDrPlanExecutionAutomaticExecutionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrPlanExecutionAutomaticExecutionDetailsToHclTerraform(struct?: DataOciDisasterRecoveryDrPlanExecutionAutomaticExecutionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrPlanExecutionAutomaticExecutionDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrPlanExecutionAutomaticExecutionDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrPlanExecutionAutomaticExecutionDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // event_name - computed: true, optional: false, required: false
  public get eventName() {
    return this.getStringAttribute('event_name');
  }

  // member_id - computed: true, optional: false, required: false
  public get memberId() {
    return this.getStringAttribute('member_id');
  }
}

export class DataOciDisasterRecoveryDrPlanExecutionAutomaticExecutionDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrPlanExecutionAutomaticExecutionDetailsOutputReference {
    return new DataOciDisasterRecoveryDrPlanExecutionAutomaticExecutionDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrPlanExecutionExecutionOptions {
}

export function dataOciDisasterRecoveryDrPlanExecutionExecutionOptionsToTerraform(struct?: DataOciDisasterRecoveryDrPlanExecutionExecutionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrPlanExecutionExecutionOptionsToHclTerraform(struct?: DataOciDisasterRecoveryDrPlanExecutionExecutionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrPlanExecutionExecutionOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrPlanExecutionExecutionOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // are_prechecks_enabled - computed: true, optional: false, required: false
  public get arePrechecksEnabled() {
    return this.getBooleanAttribute('are_prechecks_enabled');
  }

  // are_warnings_ignored - computed: true, optional: false, required: false
  public get areWarningsIgnored() {
    return this.getBooleanAttribute('are_warnings_ignored');
  }

  // plan_execution_type - computed: true, optional: false, required: false
  public get planExecutionType() {
    return this.getStringAttribute('plan_execution_type');
  }
}

export class DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference {
    return new DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocation {
}

export function dataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationToTerraform(struct?: DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationToHclTerraform(struct?: DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }
}

export class DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference {
    return new DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutions {
}

export function dataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsToTerraform(struct?: DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsToHclTerraform(struct?: DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // execution_duration_in_sec - computed: true, optional: false, required: false
  public get executionDurationInSec() {
    return this.getNumberAttribute('execution_duration_in_sec');
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // log_location - computed: true, optional: false, required: false
  private _logLocation = new DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsLogLocationList(this, "log_location", false);
  public get logLocation() {
    return this._logLocation;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_details - computed: true, optional: false, required: false
  public get statusDetails() {
    return this.getStringAttribute('status_details');
  }

  // step_id - computed: true, optional: false, required: false
  public get stepId() {
    return this.getStringAttribute('step_id');
  }

  // time_ended - computed: true, optional: false, required: false
  public get timeEnded() {
    return this.getStringAttribute('time_ended');
  }

  // time_started - computed: true, optional: false, required: false
  public get timeStarted() {
    return this.getStringAttribute('time_started');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // type_display_name - computed: true, optional: false, required: false
  public get typeDisplayName() {
    return this.getStringAttribute('type_display_name');
  }
}

export class DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference {
    return new DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrPlanExecutionGroupExecutions {
}

export function dataOciDisasterRecoveryDrPlanExecutionGroupExecutionsToTerraform(struct?: DataOciDisasterRecoveryDrPlanExecutionGroupExecutions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrPlanExecutionGroupExecutionsToHclTerraform(struct?: DataOciDisasterRecoveryDrPlanExecutionGroupExecutions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrPlanExecutionGroupExecutions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrPlanExecutionGroupExecutions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // execution_duration_in_sec - computed: true, optional: false, required: false
  public get executionDurationInSec() {
    return this.getNumberAttribute('execution_duration_in_sec');
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_details - computed: true, optional: false, required: false
  public get statusDetails() {
    return this.getStringAttribute('status_details');
  }

  // step_executions - computed: true, optional: false, required: false
  private _stepExecutions = new DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsStepExecutionsList(this, "step_executions", false);
  public get stepExecutions() {
    return this._stepExecutions;
  }

  // time_ended - computed: true, optional: false, required: false
  public get timeEnded() {
    return this.getStringAttribute('time_ended');
  }

  // time_started - computed: true, optional: false, required: false
  public get timeStarted() {
    return this.getStringAttribute('time_started');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference {
    return new DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrPlanExecutionLogLocation {
}

export function dataOciDisasterRecoveryDrPlanExecutionLogLocationToTerraform(struct?: DataOciDisasterRecoveryDrPlanExecutionLogLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrPlanExecutionLogLocationToHclTerraform(struct?: DataOciDisasterRecoveryDrPlanExecutionLogLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrPlanExecutionLogLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrPlanExecutionLogLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }
}

export class DataOciDisasterRecoveryDrPlanExecutionLogLocationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference {
    return new DataOciDisasterRecoveryDrPlanExecutionLogLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrPlanExecutionStepStatusCountsFailedSteps {
}

export function dataOciDisasterRecoveryDrPlanExecutionStepStatusCountsFailedStepsToTerraform(struct?: DataOciDisasterRecoveryDrPlanExecutionStepStatusCountsFailedSteps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrPlanExecutionStepStatusCountsFailedStepsToHclTerraform(struct?: DataOciDisasterRecoveryDrPlanExecutionStepStatusCountsFailedSteps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrPlanExecutionStepStatusCountsFailedStepsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrPlanExecutionStepStatusCountsFailedSteps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrPlanExecutionStepStatusCountsFailedSteps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // failed - computed: true, optional: false, required: false
  public get failed() {
    return this.getNumberAttribute('failed');
  }

  // timed_out - computed: true, optional: false, required: false
  public get timedOut() {
    return this.getNumberAttribute('timed_out');
  }

  // total_failed - computed: true, optional: false, required: false
  public get totalFailed() {
    return this.getNumberAttribute('total_failed');
  }
}

export class DataOciDisasterRecoveryDrPlanExecutionStepStatusCountsFailedStepsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrPlanExecutionStepStatusCountsFailedStepsOutputReference {
    return new DataOciDisasterRecoveryDrPlanExecutionStepStatusCountsFailedStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrPlanExecutionStepStatusCountsRemainingSteps {
}

export function dataOciDisasterRecoveryDrPlanExecutionStepStatusCountsRemainingStepsToTerraform(struct?: DataOciDisasterRecoveryDrPlanExecutionStepStatusCountsRemainingSteps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrPlanExecutionStepStatusCountsRemainingStepsToHclTerraform(struct?: DataOciDisasterRecoveryDrPlanExecutionStepStatusCountsRemainingSteps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrPlanExecutionStepStatusCountsRemainingStepsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrPlanExecutionStepStatusCountsRemainingSteps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrPlanExecutionStepStatusCountsRemainingSteps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // in_progress - computed: true, optional: false, required: false
  public get inProgress() {
    return this.getNumberAttribute('in_progress');
  }

  // paused - computed: true, optional: false, required: false
  public get paused() {
    return this.getNumberAttribute('paused');
  }

  // queued - computed: true, optional: false, required: false
  public get queued() {
    return this.getNumberAttribute('queued');
  }

  // total_remaining - computed: true, optional: false, required: false
  public get totalRemaining() {
    return this.getNumberAttribute('total_remaining');
  }
}

export class DataOciDisasterRecoveryDrPlanExecutionStepStatusCountsRemainingStepsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrPlanExecutionStepStatusCountsRemainingStepsOutputReference {
    return new DataOciDisasterRecoveryDrPlanExecutionStepStatusCountsRemainingStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrPlanExecutionStepStatusCountsSkippedSteps {
}

export function dataOciDisasterRecoveryDrPlanExecutionStepStatusCountsSkippedStepsToTerraform(struct?: DataOciDisasterRecoveryDrPlanExecutionStepStatusCountsSkippedSteps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrPlanExecutionStepStatusCountsSkippedStepsToHclTerraform(struct?: DataOciDisasterRecoveryDrPlanExecutionStepStatusCountsSkippedSteps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrPlanExecutionStepStatusCountsSkippedStepsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrPlanExecutionStepStatusCountsSkippedSteps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrPlanExecutionStepStatusCountsSkippedSteps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // canceled - computed: true, optional: false, required: false
  public get canceled() {
    return this.getNumberAttribute('canceled');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getNumberAttribute('disabled');
  }

  // failed_ignored - computed: true, optional: false, required: false
  public get failedIgnored() {
    return this.getNumberAttribute('failed_ignored');
  }

  // timed_out_ignored - computed: true, optional: false, required: false
  public get timedOutIgnored() {
    return this.getNumberAttribute('timed_out_ignored');
  }

  // total_skipped - computed: true, optional: false, required: false
  public get totalSkipped() {
    return this.getNumberAttribute('total_skipped');
  }
}

export class DataOciDisasterRecoveryDrPlanExecutionStepStatusCountsSkippedStepsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrPlanExecutionStepStatusCountsSkippedStepsOutputReference {
    return new DataOciDisasterRecoveryDrPlanExecutionStepStatusCountsSkippedStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrPlanExecutionStepStatusCountsSuccessfulSteps {
}

export function dataOciDisasterRecoveryDrPlanExecutionStepStatusCountsSuccessfulStepsToTerraform(struct?: DataOciDisasterRecoveryDrPlanExecutionStepStatusCountsSuccessfulSteps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrPlanExecutionStepStatusCountsSuccessfulStepsToHclTerraform(struct?: DataOciDisasterRecoveryDrPlanExecutionStepStatusCountsSuccessfulSteps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrPlanExecutionStepStatusCountsSuccessfulStepsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrPlanExecutionStepStatusCountsSuccessfulSteps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrPlanExecutionStepStatusCountsSuccessfulSteps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // succeeded - computed: true, optional: false, required: false
  public get succeeded() {
    return this.getNumberAttribute('succeeded');
  }

  // total_successful - computed: true, optional: false, required: false
  public get totalSuccessful() {
    return this.getNumberAttribute('total_successful');
  }
}

export class DataOciDisasterRecoveryDrPlanExecutionStepStatusCountsSuccessfulStepsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrPlanExecutionStepStatusCountsSuccessfulStepsOutputReference {
    return new DataOciDisasterRecoveryDrPlanExecutionStepStatusCountsSuccessfulStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrPlanExecutionStepStatusCountsWarningSteps {
}

export function dataOciDisasterRecoveryDrPlanExecutionStepStatusCountsWarningStepsToTerraform(struct?: DataOciDisasterRecoveryDrPlanExecutionStepStatusCountsWarningSteps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrPlanExecutionStepStatusCountsWarningStepsToHclTerraform(struct?: DataOciDisasterRecoveryDrPlanExecutionStepStatusCountsWarningSteps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrPlanExecutionStepStatusCountsWarningStepsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrPlanExecutionStepStatusCountsWarningSteps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrPlanExecutionStepStatusCountsWarningSteps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // total_warnings - computed: true, optional: false, required: false
  public get totalWarnings() {
    return this.getNumberAttribute('total_warnings');
  }

  // warnings_ignored - computed: true, optional: false, required: false
  public get warningsIgnored() {
    return this.getNumberAttribute('warnings_ignored');
  }
}

export class DataOciDisasterRecoveryDrPlanExecutionStepStatusCountsWarningStepsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrPlanExecutionStepStatusCountsWarningStepsOutputReference {
    return new DataOciDisasterRecoveryDrPlanExecutionStepStatusCountsWarningStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrPlanExecutionStepStatusCounts {
}

export function dataOciDisasterRecoveryDrPlanExecutionStepStatusCountsToTerraform(struct?: DataOciDisasterRecoveryDrPlanExecutionStepStatusCounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrPlanExecutionStepStatusCountsToHclTerraform(struct?: DataOciDisasterRecoveryDrPlanExecutionStepStatusCounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrPlanExecutionStepStatusCountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrPlanExecutionStepStatusCounts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrPlanExecutionStepStatusCounts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // failed_steps - computed: true, optional: false, required: false
  private _failedSteps = new DataOciDisasterRecoveryDrPlanExecutionStepStatusCountsFailedStepsList(this, "failed_steps", false);
  public get failedSteps() {
    return this._failedSteps;
  }

  // remaining_steps - computed: true, optional: false, required: false
  private _remainingSteps = new DataOciDisasterRecoveryDrPlanExecutionStepStatusCountsRemainingStepsList(this, "remaining_steps", false);
  public get remainingSteps() {
    return this._remainingSteps;
  }

  // skipped_steps - computed: true, optional: false, required: false
  private _skippedSteps = new DataOciDisasterRecoveryDrPlanExecutionStepStatusCountsSkippedStepsList(this, "skipped_steps", false);
  public get skippedSteps() {
    return this._skippedSteps;
  }

  // successful_steps - computed: true, optional: false, required: false
  private _successfulSteps = new DataOciDisasterRecoveryDrPlanExecutionStepStatusCountsSuccessfulStepsList(this, "successful_steps", false);
  public get successfulSteps() {
    return this._successfulSteps;
  }

  // total_steps - computed: true, optional: false, required: false
  public get totalSteps() {
    return this.getNumberAttribute('total_steps');
  }

  // warning_steps - computed: true, optional: false, required: false
  private _warningSteps = new DataOciDisasterRecoveryDrPlanExecutionStepStatusCountsWarningStepsList(this, "warning_steps", false);
  public get warningSteps() {
    return this._warningSteps;
  }
}

export class DataOciDisasterRecoveryDrPlanExecutionStepStatusCountsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrPlanExecutionStepStatusCountsOutputReference {
    return new DataOciDisasterRecoveryDrPlanExecutionStepStatusCountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/disaster_recovery_dr_plan_execution oci_disaster_recovery_dr_plan_execution}
*/
export class DataOciDisasterRecoveryDrPlanExecution extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_disaster_recovery_dr_plan_execution";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDisasterRecoveryDrPlanExecution resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDisasterRecoveryDrPlanExecution to import
  * @param importFromId The id of the existing DataOciDisasterRecoveryDrPlanExecution that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/disaster_recovery_dr_plan_execution#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDisasterRecoveryDrPlanExecution to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_disaster_recovery_dr_plan_execution", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/disaster_recovery_dr_plan_execution oci_disaster_recovery_dr_plan_execution} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDisasterRecoveryDrPlanExecutionConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDisasterRecoveryDrPlanExecutionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_disaster_recovery_dr_plan_execution',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._drPlanExecutionId = config.drPlanExecutionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automatic_execution_details - computed: true, optional: false, required: false
  private _automaticExecutionDetails = new DataOciDisasterRecoveryDrPlanExecutionAutomaticExecutionDetailsList(this, "automatic_execution_details", false);
  public get automaticExecutionDetails() {
    return this._automaticExecutionDetails;
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // dr_plan_execution_id - computed: false, optional: false, required: true
  private _drPlanExecutionId?: string; 
  public get drPlanExecutionId() {
    return this.getStringAttribute('dr_plan_execution_id');
  }
  public set drPlanExecutionId(value: string) {
    this._drPlanExecutionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get drPlanExecutionIdInput() {
    return this._drPlanExecutionId;
  }

  // dr_protection_group_id - computed: true, optional: false, required: false
  public get drProtectionGroupId() {
    return this.getStringAttribute('dr_protection_group_id');
  }

  // execution_duration_in_sec - computed: true, optional: false, required: false
  public get executionDurationInSec() {
    return this.getNumberAttribute('execution_duration_in_sec');
  }

  // execution_options - computed: true, optional: false, required: false
  private _executionOptions = new DataOciDisasterRecoveryDrPlanExecutionExecutionOptionsList(this, "execution_options", false);
  public get executionOptions() {
    return this._executionOptions;
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // group_executions - computed: true, optional: false, required: false
  private _groupExecutions = new DataOciDisasterRecoveryDrPlanExecutionGroupExecutionsList(this, "group_executions", false);
  public get groupExecutions() {
    return this._groupExecutions;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_automatic - computed: true, optional: false, required: false
  public get isAutomatic() {
    return this.getBooleanAttribute('is_automatic');
  }

  // life_cycle_details - computed: true, optional: false, required: false
  public get lifeCycleDetails() {
    return this.getStringAttribute('life_cycle_details');
  }

  // log_location - computed: true, optional: false, required: false
  private _logLocation = new DataOciDisasterRecoveryDrPlanExecutionLogLocationList(this, "log_location", false);
  public get logLocation() {
    return this._logLocation;
  }

  // peer_dr_protection_group_id - computed: true, optional: false, required: false
  public get peerDrProtectionGroupId() {
    return this.getStringAttribute('peer_dr_protection_group_id');
  }

  // peer_region - computed: true, optional: false, required: false
  public get peerRegion() {
    return this.getStringAttribute('peer_region');
  }

  // plan_execution_type - computed: true, optional: false, required: false
  public get planExecutionType() {
    return this.getStringAttribute('plan_execution_type');
  }

  // plan_id - computed: true, optional: false, required: false
  public get planId() {
    return this.getStringAttribute('plan_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // step_status_counts - computed: true, optional: false, required: false
  private _stepStatusCounts = new DataOciDisasterRecoveryDrPlanExecutionStepStatusCountsList(this, "step_status_counts", false);
  public get stepStatusCounts() {
    return this._stepStatusCounts;
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_ended - computed: true, optional: false, required: false
  public get timeEnded() {
    return this.getStringAttribute('time_ended');
  }

  // time_started - computed: true, optional: false, required: false
  public get timeStarted() {
    return this.getStringAttribute('time_started');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dr_plan_execution_id: cdktf.stringToTerraform(this._drPlanExecutionId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dr_plan_execution_id: {
        value: cdktf.stringToHclTerraform(this._drPlanExecutionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
