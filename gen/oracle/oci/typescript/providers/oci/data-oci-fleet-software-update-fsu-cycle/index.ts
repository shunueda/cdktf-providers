// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/fleet_software_update_fsu_cycle
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciFleetSoftwareUpdateFsuCycleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/fleet_software_update_fsu_cycle#fsu_cycle_id DataOciFleetSoftwareUpdateFsuCycle#fsu_cycle_id}
  */
  readonly fsuCycleId: string;
}
export interface DataOciFleetSoftwareUpdateFsuCycleApplyActionSchedule {
}

export function dataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleToTerraform(struct?: DataOciFleetSoftwareUpdateFsuCycleApplyActionSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleToHclTerraform(struct?: DataOciFleetSoftwareUpdateFsuCycleApplyActionSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetSoftwareUpdateFsuCycleApplyActionSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetSoftwareUpdateFsuCycleApplyActionSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // time_to_start - computed: true, optional: false, required: false
  public get timeToStart() {
    return this.getStringAttribute('time_to_start');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference {
    return new DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetSoftwareUpdateFsuCycleBatchingStrategy {
}

export function dataOciFleetSoftwareUpdateFsuCycleBatchingStrategyToTerraform(struct?: DataOciFleetSoftwareUpdateFsuCycleBatchingStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetSoftwareUpdateFsuCycleBatchingStrategyToHclTerraform(struct?: DataOciFleetSoftwareUpdateFsuCycleBatchingStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetSoftwareUpdateFsuCycleBatchingStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetSoftwareUpdateFsuCycleBatchingStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_force_rolling - computed: true, optional: false, required: false
  public get isForceRolling() {
    return this.getBooleanAttribute('is_force_rolling');
  }

  // is_wait_for_batch_resume - computed: true, optional: false, required: false
  public get isWaitForBatchResume() {
    return this.getBooleanAttribute('is_wait_for_batch_resume');
  }

  // percentage - computed: true, optional: false, required: false
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference {
    return new DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollection {
}

export function dataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionToTerraform(struct?: DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionToHclTerraform(struct?: DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // log_collection_mode - computed: true, optional: false, required: false
  public get logCollectionMode() {
    return this.getStringAttribute('log_collection_mode');
  }
}

export class DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference {
    return new DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsComponentsGoalVersionDetails {
}

export function dataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsComponentsGoalVersionDetailsToTerraform(struct?: DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsComponentsGoalVersionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsComponentsGoalVersionDetailsToHclTerraform(struct?: DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsComponentsGoalVersionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsComponentsGoalVersionDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsComponentsGoalVersionDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsComponentsGoalVersionDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // goal_software_image_id - computed: true, optional: false, required: false
  public get goalSoftwareImageId() {
    return this.getStringAttribute('goal_software_image_id');
  }

  // goal_type - computed: true, optional: false, required: false
  public get goalType() {
    return this.getStringAttribute('goal_type');
  }

  // goal_version - computed: true, optional: false, required: false
  public get goalVersion() {
    return this.getStringAttribute('goal_version');
  }
}

export class DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsComponentsGoalVersionDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsComponentsGoalVersionDetailsOutputReference {
    return new DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsComponentsGoalVersionDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsComponents {
}

export function dataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsComponentsToTerraform(struct?: DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsComponentsToHclTerraform(struct?: DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsComponents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // component_type - computed: true, optional: false, required: false
  public get componentType() {
    return this.getStringAttribute('component_type');
  }

  // goal_version_details - computed: true, optional: false, required: false
  private _goalVersionDetails = new DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsComponentsGoalVersionDetailsList(this, "goal_version_details", false);
  public get goalVersionDetails() {
    return this._goalVersionDetails;
  }

  // home_policy - computed: true, optional: false, required: false
  public get homePolicy() {
    return this.getStringAttribute('home_policy');
  }

  // new_home_prefix - computed: true, optional: false, required: false
  public get newHomePrefix() {
    return this.getStringAttribute('new_home_prefix');
  }
}

export class DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsComponentsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsComponentsOutputReference {
    return new DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetails {
}

export function dataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsToTerraform(struct?: DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsToHclTerraform(struct?: DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // components - computed: true, optional: false, required: false
  private _components = new DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsComponentsList(this, "components", false);
  public get components() {
    return this._components;
  }

  // home_policy - computed: true, optional: false, required: false
  public get homePolicy() {
    return this.getStringAttribute('home_policy');
  }

  // new_home_prefix - computed: true, optional: false, required: false
  public get newHomePrefix() {
    return this.getStringAttribute('new_home_prefix');
  }

  // software_image_id - computed: true, optional: false, required: false
  public get softwareImageId() {
    return this.getStringAttribute('software_image_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference {
    return new DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetSoftwareUpdateFsuCycleNextActionToExecute {
}

export function dataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteToTerraform(struct?: DataOciFleetSoftwareUpdateFsuCycleNextActionToExecute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteToHclTerraform(struct?: DataOciFleetSoftwareUpdateFsuCycleNextActionToExecute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetSoftwareUpdateFsuCycleNextActionToExecute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetSoftwareUpdateFsuCycleNextActionToExecute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // time_to_start - computed: true, optional: false, required: false
  public get timeToStart() {
    return this.getStringAttribute('time_to_start');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference {
    return new DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetSoftwareUpdateFsuCycleStageActionSchedule {
}

export function dataOciFleetSoftwareUpdateFsuCycleStageActionScheduleToTerraform(struct?: DataOciFleetSoftwareUpdateFsuCycleStageActionSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetSoftwareUpdateFsuCycleStageActionScheduleToHclTerraform(struct?: DataOciFleetSoftwareUpdateFsuCycleStageActionSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetSoftwareUpdateFsuCycleStageActionSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetSoftwareUpdateFsuCycleStageActionSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // time_to_start - computed: true, optional: false, required: false
  public get timeToStart() {
    return this.getStringAttribute('time_to_start');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference {
    return new DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetSoftwareUpdateFsuCycleUpgradeDetails {
}

export function dataOciFleetSoftwareUpdateFsuCycleUpgradeDetailsToTerraform(struct?: DataOciFleetSoftwareUpdateFsuCycleUpgradeDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetSoftwareUpdateFsuCycleUpgradeDetailsToHclTerraform(struct?: DataOciFleetSoftwareUpdateFsuCycleUpgradeDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetSoftwareUpdateFsuCycleUpgradeDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetSoftwareUpdateFsuCycleUpgradeDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetSoftwareUpdateFsuCycleUpgradeDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // collection_type - computed: true, optional: false, required: false
  public get collectionType() {
    return this.getStringAttribute('collection_type');
  }

  // is_ignore_post_upgrade_errors - computed: true, optional: false, required: false
  public get isIgnorePostUpgradeErrors() {
    return this.getBooleanAttribute('is_ignore_post_upgrade_errors');
  }

  // is_ignore_prerequisites - computed: true, optional: false, required: false
  public get isIgnorePrerequisites() {
    return this.getBooleanAttribute('is_ignore_prerequisites');
  }

  // is_recompile_invalid_objects - computed: true, optional: false, required: false
  public get isRecompileInvalidObjects() {
    return this.getBooleanAttribute('is_recompile_invalid_objects');
  }

  // is_time_zone_upgrade - computed: true, optional: false, required: false
  public get isTimeZoneUpgrade() {
    return this.getBooleanAttribute('is_time_zone_upgrade');
  }

  // max_drain_timeout_in_seconds - computed: true, optional: false, required: false
  public get maxDrainTimeoutInSeconds() {
    return this.getNumberAttribute('max_drain_timeout_in_seconds');
  }
}

export class DataOciFleetSoftwareUpdateFsuCycleUpgradeDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetSoftwareUpdateFsuCycleUpgradeDetailsOutputReference {
    return new DataOciFleetSoftwareUpdateFsuCycleUpgradeDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/fleet_software_update_fsu_cycle oci_fleet_software_update_fsu_cycle}
*/
export class DataOciFleetSoftwareUpdateFsuCycle extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_fleet_software_update_fsu_cycle";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciFleetSoftwareUpdateFsuCycle resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciFleetSoftwareUpdateFsuCycle to import
  * @param importFromId The id of the existing DataOciFleetSoftwareUpdateFsuCycle that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/fleet_software_update_fsu_cycle#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciFleetSoftwareUpdateFsuCycle to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_fleet_software_update_fsu_cycle", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/fleet_software_update_fsu_cycle oci_fleet_software_update_fsu_cycle} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciFleetSoftwareUpdateFsuCycleConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciFleetSoftwareUpdateFsuCycleConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_fleet_software_update_fsu_cycle',
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
    this._fsuCycleId = config.fsuCycleId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apply_action_schedule - computed: true, optional: false, required: false
  private _applyActionSchedule = new DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList(this, "apply_action_schedule", false);
  public get applyActionSchedule() {
    return this._applyActionSchedule;
  }

  // batching_strategy - computed: true, optional: false, required: false
  private _batchingStrategy = new DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList(this, "batching_strategy", false);
  public get batchingStrategy() {
    return this._batchingStrategy;
  }

  // collection_type - computed: true, optional: false, required: false
  public get collectionType() {
    return this.getStringAttribute('collection_type');
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

  // diagnostics_collection - computed: true, optional: false, required: false
  private _diagnosticsCollection = new DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList(this, "diagnostics_collection", false);
  public get diagnosticsCollection() {
    return this._diagnosticsCollection;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // executing_fsu_action_id - computed: true, optional: false, required: false
  public get executingFsuActionId() {
    return this.getStringAttribute('executing_fsu_action_id');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // fsu_collection_id - computed: true, optional: false, required: false
  public get fsuCollectionId() {
    return this.getStringAttribute('fsu_collection_id');
  }

  // fsu_cycle_id - computed: false, optional: false, required: true
  private _fsuCycleId?: string; 
  public get fsuCycleId() {
    return this.getStringAttribute('fsu_cycle_id');
  }
  public set fsuCycleId(value: string) {
    this._fsuCycleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fsuCycleIdInput() {
    return this._fsuCycleId;
  }

  // goal_version_details - computed: true, optional: false, required: false
  private _goalVersionDetails = new DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList(this, "goal_version_details", false);
  public get goalVersionDetails() {
    return this._goalVersionDetails;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_ignore_missing_patches - computed: true, optional: false, required: false
  public get isIgnoreMissingPatches() {
    return this.getListAttribute('is_ignore_missing_patches');
  }

  // is_ignore_patches - computed: true, optional: false, required: false
  public get isIgnorePatches() {
    return this.getBooleanAttribute('is_ignore_patches');
  }

  // is_keep_placement - computed: true, optional: false, required: false
  public get isKeepPlacement() {
    return this.getBooleanAttribute('is_keep_placement');
  }

  // last_completed_action - computed: true, optional: false, required: false
  public get lastCompletedAction() {
    return this.getStringAttribute('last_completed_action');
  }

  // last_completed_action_id - computed: true, optional: false, required: false
  public get lastCompletedActionId() {
    return this.getStringAttribute('last_completed_action_id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // max_drain_timeout_in_seconds - computed: true, optional: false, required: false
  public get maxDrainTimeoutInSeconds() {
    return this.getNumberAttribute('max_drain_timeout_in_seconds');
  }

  // next_action_to_execute - computed: true, optional: false, required: false
  private _nextActionToExecute = new DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList(this, "next_action_to_execute", false);
  public get nextActionToExecute() {
    return this._nextActionToExecute;
  }

  // rollback_cycle_state - computed: true, optional: false, required: false
  public get rollbackCycleState() {
    return this.getStringAttribute('rollback_cycle_state');
  }

  // stage_action_schedule - computed: true, optional: false, required: false
  private _stageActionSchedule = new DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList(this, "stage_action_schedule", false);
  public get stageActionSchedule() {
    return this._stageActionSchedule;
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

  // time_finished - computed: true, optional: false, required: false
  public get timeFinished() {
    return this.getStringAttribute('time_finished');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // upgrade_details - computed: true, optional: false, required: false
  private _upgradeDetails = new DataOciFleetSoftwareUpdateFsuCycleUpgradeDetailsList(this, "upgrade_details", false);
  public get upgradeDetails() {
    return this._upgradeDetails;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fsu_cycle_id: cdktf.stringToTerraform(this._fsuCycleId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fsu_cycle_id: {
        value: cdktf.stringToHclTerraform(this._fsuCycleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
