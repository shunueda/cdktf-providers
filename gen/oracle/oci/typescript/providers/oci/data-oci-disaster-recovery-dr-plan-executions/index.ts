// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/disaster_recovery_dr_plan_executions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDisasterRecoveryDrPlanExecutionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/disaster_recovery_dr_plan_executions#display_name DataOciDisasterRecoveryDrPlanExecutions#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/disaster_recovery_dr_plan_executions#dr_plan_execution_id DataOciDisasterRecoveryDrPlanExecutions#dr_plan_execution_id}
  */
  readonly drPlanExecutionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/disaster_recovery_dr_plan_executions#dr_protection_group_id DataOciDisasterRecoveryDrPlanExecutions#dr_protection_group_id}
  */
  readonly drProtectionGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/disaster_recovery_dr_plan_executions#id DataOciDisasterRecoveryDrPlanExecutions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/disaster_recovery_dr_plan_executions#state DataOciDisasterRecoveryDrPlanExecutions#state}
  */
  readonly state?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/disaster_recovery_dr_plan_executions#filter DataOciDisasterRecoveryDrPlanExecutions#filter}
  */
  readonly filter?: DataOciDisasterRecoveryDrPlanExecutionsFilter[] | cdktf.IResolvable;
}
export interface DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsAutomaticExecutionDetails {
}

export function dataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsAutomaticExecutionDetailsToTerraform(struct?: DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsAutomaticExecutionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsAutomaticExecutionDetailsToHclTerraform(struct?: DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsAutomaticExecutionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsAutomaticExecutionDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsAutomaticExecutionDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsAutomaticExecutionDetails | undefined) {
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

export class DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsAutomaticExecutionDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsAutomaticExecutionDetailsOutputReference {
    return new DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsAutomaticExecutionDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptions {
}

export function dataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsToTerraform(struct?: DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsToHclTerraform(struct?: DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptions | undefined) {
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

export class DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference {
    return new DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocation {
}

export function dataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationToTerraform(struct?: DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationToHclTerraform(struct?: DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocation | undefined) {
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

export class DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference {
    return new DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutions {
}

export function dataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsToTerraform(struct?: DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsToHclTerraform(struct?: DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutions | undefined) {
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
  private _logLocation = new DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsLogLocationList(this, "log_location", false);
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

export class DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference {
    return new DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutions {
}

export function dataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsToTerraform(struct?: DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsToHclTerraform(struct?: DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutions | undefined) {
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
  private _stepExecutions = new DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsStepExecutionsList(this, "step_executions", false);
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

export class DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference {
    return new DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocation {
}

export function dataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationToTerraform(struct?: DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationToHclTerraform(struct?: DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocation | undefined) {
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

export class DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference {
    return new DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItems {
}

export function dataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsToTerraform(struct?: DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsToHclTerraform(struct?: DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // automatic_execution_details - computed: true, optional: false, required: false
  private _automaticExecutionDetails = new DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsAutomaticExecutionDetailsList(this, "automatic_execution_details", false);
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

  // dr_protection_group_id - computed: true, optional: false, required: false
  public get drProtectionGroupId() {
    return this.getStringAttribute('dr_protection_group_id');
  }

  // execution_duration_in_sec - computed: true, optional: false, required: false
  public get executionDurationInSec() {
    return this.getNumberAttribute('execution_duration_in_sec');
  }

  // execution_options - computed: true, optional: false, required: false
  private _executionOptions = new DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsExecutionOptionsList(this, "execution_options", false);
  public get executionOptions() {
    return this._executionOptions;
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // group_executions - computed: true, optional: false, required: false
  private _groupExecutions = new DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsGroupExecutionsList(this, "group_executions", false);
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
  private _logLocation = new DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsLogLocationList(this, "log_location", false);
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
}

export class DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference {
    return new DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollection {
}

export function dataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionToTerraform(struct?: DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionToHclTerraform(struct?: DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference {
    return new DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDisasterRecoveryDrPlanExecutionsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/disaster_recovery_dr_plan_executions#name DataOciDisasterRecoveryDrPlanExecutions#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/disaster_recovery_dr_plan_executions#regex DataOciDisasterRecoveryDrPlanExecutions#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/disaster_recovery_dr_plan_executions#values DataOciDisasterRecoveryDrPlanExecutions#values}
  */
  readonly values: string[];
}

export function dataOciDisasterRecoveryDrPlanExecutionsFilterToTerraform(struct?: DataOciDisasterRecoveryDrPlanExecutionsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciDisasterRecoveryDrPlanExecutionsFilterToHclTerraform(struct?: DataOciDisasterRecoveryDrPlanExecutionsFilter | cdktf.IResolvable): any {
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
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDisasterRecoveryDrPlanExecutionsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDisasterRecoveryDrPlanExecutionsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
    }
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciDisasterRecoveryDrPlanExecutionsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDisasterRecoveryDrPlanExecutionsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference {
    return new DataOciDisasterRecoveryDrPlanExecutionsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/disaster_recovery_dr_plan_executions oci_disaster_recovery_dr_plan_executions}
*/
export class DataOciDisasterRecoveryDrPlanExecutions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_disaster_recovery_dr_plan_executions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDisasterRecoveryDrPlanExecutions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDisasterRecoveryDrPlanExecutions to import
  * @param importFromId The id of the existing DataOciDisasterRecoveryDrPlanExecutions that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/disaster_recovery_dr_plan_executions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDisasterRecoveryDrPlanExecutions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_disaster_recovery_dr_plan_executions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/disaster_recovery_dr_plan_executions oci_disaster_recovery_dr_plan_executions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDisasterRecoveryDrPlanExecutionsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDisasterRecoveryDrPlanExecutionsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_disaster_recovery_dr_plan_executions',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._displayName = config.displayName;
    this._drPlanExecutionId = config.drPlanExecutionId;
    this._drProtectionGroupId = config.drProtectionGroupId;
    this._id = config.id;
    this._state = config.state;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // dr_plan_execution_collection - computed: true, optional: false, required: false
  private _drPlanExecutionCollection = new DataOciDisasterRecoveryDrPlanExecutionsDrPlanExecutionCollectionList(this, "dr_plan_execution_collection", false);
  public get drPlanExecutionCollection() {
    return this._drPlanExecutionCollection;
  }

  // dr_plan_execution_id - computed: false, optional: true, required: false
  private _drPlanExecutionId?: string; 
  public get drPlanExecutionId() {
    return this.getStringAttribute('dr_plan_execution_id');
  }
  public set drPlanExecutionId(value: string) {
    this._drPlanExecutionId = value;
  }
  public resetDrPlanExecutionId() {
    this._drPlanExecutionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drPlanExecutionIdInput() {
    return this._drPlanExecutionId;
  }

  // dr_protection_group_id - computed: false, optional: false, required: true
  private _drProtectionGroupId?: string; 
  public get drProtectionGroupId() {
    return this.getStringAttribute('dr_protection_group_id');
  }
  public set drProtectionGroupId(value: string) {
    this._drProtectionGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get drProtectionGroupIdInput() {
    return this._drProtectionGroupId;
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

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDisasterRecoveryDrPlanExecutionsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDisasterRecoveryDrPlanExecutionsFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      dr_plan_execution_id: cdktf.stringToTerraform(this._drPlanExecutionId),
      dr_protection_group_id: cdktf.stringToTerraform(this._drProtectionGroupId),
      id: cdktf.stringToTerraform(this._id),
      state: cdktf.stringToTerraform(this._state),
      filter: cdktf.listMapper(dataOciDisasterRecoveryDrPlanExecutionsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dr_plan_execution_id: {
        value: cdktf.stringToHclTerraform(this._drPlanExecutionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dr_protection_group_id: {
        value: cdktf.stringToHclTerraform(this._drProtectionGroupId),
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
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciDisasterRecoveryDrPlanExecutionsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDisasterRecoveryDrPlanExecutionsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
