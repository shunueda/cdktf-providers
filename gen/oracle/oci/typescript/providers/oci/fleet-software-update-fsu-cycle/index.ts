// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_software_update_fsu_cycle
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FleetSoftwareUpdateFsuCycleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_software_update_fsu_cycle#compartment_id FleetSoftwareUpdateFsuCycle#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_software_update_fsu_cycle#defined_tags FleetSoftwareUpdateFsuCycle#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_software_update_fsu_cycle#display_name FleetSoftwareUpdateFsuCycle#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_software_update_fsu_cycle#freeform_tags FleetSoftwareUpdateFsuCycle#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_software_update_fsu_cycle#fsu_collection_id FleetSoftwareUpdateFsuCycle#fsu_collection_id}
  */
  readonly fsuCollectionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_software_update_fsu_cycle#id FleetSoftwareUpdateFsuCycle#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_software_update_fsu_cycle#is_ignore_missing_patches FleetSoftwareUpdateFsuCycle#is_ignore_missing_patches}
  */
  readonly isIgnoreMissingPatches?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_software_update_fsu_cycle#is_ignore_patches FleetSoftwareUpdateFsuCycle#is_ignore_patches}
  */
  readonly isIgnorePatches?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_software_update_fsu_cycle#is_keep_placement FleetSoftwareUpdateFsuCycle#is_keep_placement}
  */
  readonly isKeepPlacement?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_software_update_fsu_cycle#max_drain_timeout_in_seconds FleetSoftwareUpdateFsuCycle#max_drain_timeout_in_seconds}
  */
  readonly maxDrainTimeoutInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_software_update_fsu_cycle#type FleetSoftwareUpdateFsuCycle#type}
  */
  readonly type: string;
  /**
  * apply_action_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_software_update_fsu_cycle#apply_action_schedule FleetSoftwareUpdateFsuCycle#apply_action_schedule}
  */
  readonly applyActionSchedule?: FleetSoftwareUpdateFsuCycleApplyActionSchedule;
  /**
  * batching_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_software_update_fsu_cycle#batching_strategy FleetSoftwareUpdateFsuCycle#batching_strategy}
  */
  readonly batchingStrategy?: FleetSoftwareUpdateFsuCycleBatchingStrategy;
  /**
  * diagnostics_collection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_software_update_fsu_cycle#diagnostics_collection FleetSoftwareUpdateFsuCycle#diagnostics_collection}
  */
  readonly diagnosticsCollection?: FleetSoftwareUpdateFsuCycleDiagnosticsCollection;
  /**
  * goal_version_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_software_update_fsu_cycle#goal_version_details FleetSoftwareUpdateFsuCycle#goal_version_details}
  */
  readonly goalVersionDetails: FleetSoftwareUpdateFsuCycleGoalVersionDetails;
  /**
  * stage_action_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_software_update_fsu_cycle#stage_action_schedule FleetSoftwareUpdateFsuCycle#stage_action_schedule}
  */
  readonly stageActionSchedule?: FleetSoftwareUpdateFsuCycleStageActionSchedule;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_software_update_fsu_cycle#timeouts FleetSoftwareUpdateFsuCycle#timeouts}
  */
  readonly timeouts?: FleetSoftwareUpdateFsuCycleTimeouts;
  /**
  * upgrade_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_software_update_fsu_cycle#upgrade_details FleetSoftwareUpdateFsuCycle#upgrade_details}
  */
  readonly upgradeDetails?: FleetSoftwareUpdateFsuCycleUpgradeDetails;
}
export interface FleetSoftwareUpdateFsuCycleNextActionToExecute {
}

export function fleetSoftwareUpdateFsuCycleNextActionToExecuteToTerraform(struct?: FleetSoftwareUpdateFsuCycleNextActionToExecute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function fleetSoftwareUpdateFsuCycleNextActionToExecuteToHclTerraform(struct?: FleetSoftwareUpdateFsuCycleNextActionToExecute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetSoftwareUpdateFsuCycleNextActionToExecute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetSoftwareUpdateFsuCycleNextActionToExecute | undefined) {
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

export class FleetSoftwareUpdateFsuCycleNextActionToExecuteList extends cdktf.ComplexList {

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
  public get(index: number): FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference {
    return new FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetSoftwareUpdateFsuCycleApplyActionSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_software_update_fsu_cycle#time_to_start FleetSoftwareUpdateFsuCycle#time_to_start}
  */
  readonly timeToStart: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_software_update_fsu_cycle#type FleetSoftwareUpdateFsuCycle#type}
  */
  readonly type: string;
}

export function fleetSoftwareUpdateFsuCycleApplyActionScheduleToTerraform(struct?: FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference | FleetSoftwareUpdateFsuCycleApplyActionSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time_to_start: cdktf.stringToTerraform(struct!.timeToStart),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function fleetSoftwareUpdateFsuCycleApplyActionScheduleToHclTerraform(struct?: FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference | FleetSoftwareUpdateFsuCycleApplyActionSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    time_to_start: {
      value: cdktf.stringToHclTerraform(struct!.timeToStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetSoftwareUpdateFsuCycleApplyActionSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeToStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeToStart = this._timeToStart;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetSoftwareUpdateFsuCycleApplyActionSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._timeToStart = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._timeToStart = value.timeToStart;
      this._type = value.type;
    }
  }

  // time_to_start - computed: false, optional: false, required: true
  private _timeToStart?: string; 
  public get timeToStart() {
    return this.getStringAttribute('time_to_start');
  }
  public set timeToStart(value: string) {
    this._timeToStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeToStartInput() {
    return this._timeToStart;
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
}
export interface FleetSoftwareUpdateFsuCycleBatchingStrategy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_software_update_fsu_cycle#is_force_rolling FleetSoftwareUpdateFsuCycle#is_force_rolling}
  */
  readonly isForceRolling?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_software_update_fsu_cycle#is_wait_for_batch_resume FleetSoftwareUpdateFsuCycle#is_wait_for_batch_resume}
  */
  readonly isWaitForBatchResume?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_software_update_fsu_cycle#percentage FleetSoftwareUpdateFsuCycle#percentage}
  */
  readonly percentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_software_update_fsu_cycle#type FleetSoftwareUpdateFsuCycle#type}
  */
  readonly type?: string;
}

export function fleetSoftwareUpdateFsuCycleBatchingStrategyToTerraform(struct?: FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference | FleetSoftwareUpdateFsuCycleBatchingStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_force_rolling: cdktf.booleanToTerraform(struct!.isForceRolling),
    is_wait_for_batch_resume: cdktf.booleanToTerraform(struct!.isWaitForBatchResume),
    percentage: cdktf.numberToTerraform(struct!.percentage),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function fleetSoftwareUpdateFsuCycleBatchingStrategyToHclTerraform(struct?: FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference | FleetSoftwareUpdateFsuCycleBatchingStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_force_rolling: {
      value: cdktf.booleanToHclTerraform(struct!.isForceRolling),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_wait_for_batch_resume: {
      value: cdktf.booleanToHclTerraform(struct!.isWaitForBatchResume),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    percentage: {
      value: cdktf.numberToHclTerraform(struct!.percentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetSoftwareUpdateFsuCycleBatchingStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isForceRolling !== undefined) {
      hasAnyValues = true;
      internalValueResult.isForceRolling = this._isForceRolling;
    }
    if (this._isWaitForBatchResume !== undefined) {
      hasAnyValues = true;
      internalValueResult.isWaitForBatchResume = this._isWaitForBatchResume;
    }
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetSoftwareUpdateFsuCycleBatchingStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isForceRolling = undefined;
      this._isWaitForBatchResume = undefined;
      this._percentage = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isForceRolling = value.isForceRolling;
      this._isWaitForBatchResume = value.isWaitForBatchResume;
      this._percentage = value.percentage;
      this._type = value.type;
    }
  }

  // is_force_rolling - computed: true, optional: true, required: false
  private _isForceRolling?: boolean | cdktf.IResolvable; 
  public get isForceRolling() {
    return this.getBooleanAttribute('is_force_rolling');
  }
  public set isForceRolling(value: boolean | cdktf.IResolvable) {
    this._isForceRolling = value;
  }
  public resetIsForceRolling() {
    this._isForceRolling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isForceRollingInput() {
    return this._isForceRolling;
  }

  // is_wait_for_batch_resume - computed: true, optional: true, required: false
  private _isWaitForBatchResume?: boolean | cdktf.IResolvable; 
  public get isWaitForBatchResume() {
    return this.getBooleanAttribute('is_wait_for_batch_resume');
  }
  public set isWaitForBatchResume(value: boolean | cdktf.IResolvable) {
    this._isWaitForBatchResume = value;
  }
  public resetIsWaitForBatchResume() {
    this._isWaitForBatchResume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isWaitForBatchResumeInput() {
    return this._isWaitForBatchResume;
  }

  // percentage - computed: true, optional: true, required: false
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  public resetPercentage() {
    this._percentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
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
}
export interface FleetSoftwareUpdateFsuCycleDiagnosticsCollection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_software_update_fsu_cycle#log_collection_mode FleetSoftwareUpdateFsuCycle#log_collection_mode}
  */
  readonly logCollectionMode?: string;
}

export function fleetSoftwareUpdateFsuCycleDiagnosticsCollectionToTerraform(struct?: FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference | FleetSoftwareUpdateFsuCycleDiagnosticsCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_collection_mode: cdktf.stringToTerraform(struct!.logCollectionMode),
  }
}


export function fleetSoftwareUpdateFsuCycleDiagnosticsCollectionToHclTerraform(struct?: FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference | FleetSoftwareUpdateFsuCycleDiagnosticsCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_collection_mode: {
      value: cdktf.stringToHclTerraform(struct!.logCollectionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetSoftwareUpdateFsuCycleDiagnosticsCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logCollectionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.logCollectionMode = this._logCollectionMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetSoftwareUpdateFsuCycleDiagnosticsCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logCollectionMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logCollectionMode = value.logCollectionMode;
    }
  }

  // log_collection_mode - computed: true, optional: true, required: false
  private _logCollectionMode?: string; 
  public get logCollectionMode() {
    return this.getStringAttribute('log_collection_mode');
  }
  public set logCollectionMode(value: string) {
    this._logCollectionMode = value;
  }
  public resetLogCollectionMode() {
    this._logCollectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logCollectionModeInput() {
    return this._logCollectionMode;
  }
}
export interface FleetSoftwareUpdateFsuCycleGoalVersionDetailsComponentsGoalVersionDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_software_update_fsu_cycle#goal_software_image_id FleetSoftwareUpdateFsuCycle#goal_software_image_id}
  */
  readonly goalSoftwareImageId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_software_update_fsu_cycle#goal_type FleetSoftwareUpdateFsuCycle#goal_type}
  */
  readonly goalType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_software_update_fsu_cycle#goal_version FleetSoftwareUpdateFsuCycle#goal_version}
  */
  readonly goalVersion?: string;
}

export function fleetSoftwareUpdateFsuCycleGoalVersionDetailsComponentsGoalVersionDetailsToTerraform(struct?: FleetSoftwareUpdateFsuCycleGoalVersionDetailsComponentsGoalVersionDetailsOutputReference | FleetSoftwareUpdateFsuCycleGoalVersionDetailsComponentsGoalVersionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    goal_software_image_id: cdktf.stringToTerraform(struct!.goalSoftwareImageId),
    goal_type: cdktf.stringToTerraform(struct!.goalType),
    goal_version: cdktf.stringToTerraform(struct!.goalVersion),
  }
}


export function fleetSoftwareUpdateFsuCycleGoalVersionDetailsComponentsGoalVersionDetailsToHclTerraform(struct?: FleetSoftwareUpdateFsuCycleGoalVersionDetailsComponentsGoalVersionDetailsOutputReference | FleetSoftwareUpdateFsuCycleGoalVersionDetailsComponentsGoalVersionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    goal_software_image_id: {
      value: cdktf.stringToHclTerraform(struct!.goalSoftwareImageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    goal_type: {
      value: cdktf.stringToHclTerraform(struct!.goalType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    goal_version: {
      value: cdktf.stringToHclTerraform(struct!.goalVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetSoftwareUpdateFsuCycleGoalVersionDetailsComponentsGoalVersionDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetSoftwareUpdateFsuCycleGoalVersionDetailsComponentsGoalVersionDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._goalSoftwareImageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.goalSoftwareImageId = this._goalSoftwareImageId;
    }
    if (this._goalType !== undefined) {
      hasAnyValues = true;
      internalValueResult.goalType = this._goalType;
    }
    if (this._goalVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.goalVersion = this._goalVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetSoftwareUpdateFsuCycleGoalVersionDetailsComponentsGoalVersionDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._goalSoftwareImageId = undefined;
      this._goalType = undefined;
      this._goalVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._goalSoftwareImageId = value.goalSoftwareImageId;
      this._goalType = value.goalType;
      this._goalVersion = value.goalVersion;
    }
  }

  // goal_software_image_id - computed: false, optional: false, required: true
  private _goalSoftwareImageId?: string; 
  public get goalSoftwareImageId() {
    return this.getStringAttribute('goal_software_image_id');
  }
  public set goalSoftwareImageId(value: string) {
    this._goalSoftwareImageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get goalSoftwareImageIdInput() {
    return this._goalSoftwareImageId;
  }

  // goal_type - computed: false, optional: false, required: true
  private _goalType?: string; 
  public get goalType() {
    return this.getStringAttribute('goal_type');
  }
  public set goalType(value: string) {
    this._goalType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get goalTypeInput() {
    return this._goalType;
  }

  // goal_version - computed: true, optional: true, required: false
  private _goalVersion?: string; 
  public get goalVersion() {
    return this.getStringAttribute('goal_version');
  }
  public set goalVersion(value: string) {
    this._goalVersion = value;
  }
  public resetGoalVersion() {
    this._goalVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get goalVersionInput() {
    return this._goalVersion;
  }
}
export interface FleetSoftwareUpdateFsuCycleGoalVersionDetailsComponents {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_software_update_fsu_cycle#component_type FleetSoftwareUpdateFsuCycle#component_type}
  */
  readonly componentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_software_update_fsu_cycle#home_policy FleetSoftwareUpdateFsuCycle#home_policy}
  */
  readonly homePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_software_update_fsu_cycle#new_home_prefix FleetSoftwareUpdateFsuCycle#new_home_prefix}
  */
  readonly newHomePrefix?: string;
  /**
  * goal_version_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_software_update_fsu_cycle#goal_version_details FleetSoftwareUpdateFsuCycle#goal_version_details}
  */
  readonly goalVersionDetails: FleetSoftwareUpdateFsuCycleGoalVersionDetailsComponentsGoalVersionDetails;
}

export function fleetSoftwareUpdateFsuCycleGoalVersionDetailsComponentsToTerraform(struct?: FleetSoftwareUpdateFsuCycleGoalVersionDetailsComponents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    component_type: cdktf.stringToTerraform(struct!.componentType),
    home_policy: cdktf.stringToTerraform(struct!.homePolicy),
    new_home_prefix: cdktf.stringToTerraform(struct!.newHomePrefix),
    goal_version_details: fleetSoftwareUpdateFsuCycleGoalVersionDetailsComponentsGoalVersionDetailsToTerraform(struct!.goalVersionDetails),
  }
}


export function fleetSoftwareUpdateFsuCycleGoalVersionDetailsComponentsToHclTerraform(struct?: FleetSoftwareUpdateFsuCycleGoalVersionDetailsComponents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    component_type: {
      value: cdktf.stringToHclTerraform(struct!.componentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    home_policy: {
      value: cdktf.stringToHclTerraform(struct!.homePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    new_home_prefix: {
      value: cdktf.stringToHclTerraform(struct!.newHomePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    goal_version_details: {
      value: fleetSoftwareUpdateFsuCycleGoalVersionDetailsComponentsGoalVersionDetailsToHclTerraform(struct!.goalVersionDetails),
      isBlock: true,
      type: "list",
      storageClassType: "FleetSoftwareUpdateFsuCycleGoalVersionDetailsComponentsGoalVersionDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetSoftwareUpdateFsuCycleGoalVersionDetailsComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetSoftwareUpdateFsuCycleGoalVersionDetailsComponents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._componentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.componentType = this._componentType;
    }
    if (this._homePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.homePolicy = this._homePolicy;
    }
    if (this._newHomePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.newHomePrefix = this._newHomePrefix;
    }
    if (this._goalVersionDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.goalVersionDetails = this._goalVersionDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetSoftwareUpdateFsuCycleGoalVersionDetailsComponents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._componentType = undefined;
      this._homePolicy = undefined;
      this._newHomePrefix = undefined;
      this._goalVersionDetails.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._componentType = value.componentType;
      this._homePolicy = value.homePolicy;
      this._newHomePrefix = value.newHomePrefix;
      this._goalVersionDetails.internalValue = value.goalVersionDetails;
    }
  }

  // component_type - computed: false, optional: false, required: true
  private _componentType?: string; 
  public get componentType() {
    return this.getStringAttribute('component_type');
  }
  public set componentType(value: string) {
    this._componentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentTypeInput() {
    return this._componentType;
  }

  // home_policy - computed: true, optional: true, required: false
  private _homePolicy?: string; 
  public get homePolicy() {
    return this.getStringAttribute('home_policy');
  }
  public set homePolicy(value: string) {
    this._homePolicy = value;
  }
  public resetHomePolicy() {
    this._homePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homePolicyInput() {
    return this._homePolicy;
  }

  // new_home_prefix - computed: true, optional: true, required: false
  private _newHomePrefix?: string; 
  public get newHomePrefix() {
    return this.getStringAttribute('new_home_prefix');
  }
  public set newHomePrefix(value: string) {
    this._newHomePrefix = value;
  }
  public resetNewHomePrefix() {
    this._newHomePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newHomePrefixInput() {
    return this._newHomePrefix;
  }

  // goal_version_details - computed: false, optional: false, required: true
  private _goalVersionDetails = new FleetSoftwareUpdateFsuCycleGoalVersionDetailsComponentsGoalVersionDetailsOutputReference(this, "goal_version_details");
  public get goalVersionDetails() {
    return this._goalVersionDetails;
  }
  public putGoalVersionDetails(value: FleetSoftwareUpdateFsuCycleGoalVersionDetailsComponentsGoalVersionDetails) {
    this._goalVersionDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get goalVersionDetailsInput() {
    return this._goalVersionDetails.internalValue;
  }
}

export class FleetSoftwareUpdateFsuCycleGoalVersionDetailsComponentsList extends cdktf.ComplexList {
  public internalValue? : FleetSoftwareUpdateFsuCycleGoalVersionDetailsComponents[] | cdktf.IResolvable

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
  public get(index: number): FleetSoftwareUpdateFsuCycleGoalVersionDetailsComponentsOutputReference {
    return new FleetSoftwareUpdateFsuCycleGoalVersionDetailsComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetSoftwareUpdateFsuCycleGoalVersionDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_software_update_fsu_cycle#home_policy FleetSoftwareUpdateFsuCycle#home_policy}
  */
  readonly homePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_software_update_fsu_cycle#new_home_prefix FleetSoftwareUpdateFsuCycle#new_home_prefix}
  */
  readonly newHomePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_software_update_fsu_cycle#software_image_id FleetSoftwareUpdateFsuCycle#software_image_id}
  */
  readonly softwareImageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_software_update_fsu_cycle#type FleetSoftwareUpdateFsuCycle#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_software_update_fsu_cycle#version FleetSoftwareUpdateFsuCycle#version}
  */
  readonly version?: string;
  /**
  * components block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_software_update_fsu_cycle#components FleetSoftwareUpdateFsuCycle#components}
  */
  readonly components?: FleetSoftwareUpdateFsuCycleGoalVersionDetailsComponents[] | cdktf.IResolvable;
}

export function fleetSoftwareUpdateFsuCycleGoalVersionDetailsToTerraform(struct?: FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference | FleetSoftwareUpdateFsuCycleGoalVersionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    home_policy: cdktf.stringToTerraform(struct!.homePolicy),
    new_home_prefix: cdktf.stringToTerraform(struct!.newHomePrefix),
    software_image_id: cdktf.stringToTerraform(struct!.softwareImageId),
    type: cdktf.stringToTerraform(struct!.type),
    version: cdktf.stringToTerraform(struct!.version),
    components: cdktf.listMapper(fleetSoftwareUpdateFsuCycleGoalVersionDetailsComponentsToTerraform, true)(struct!.components),
  }
}


export function fleetSoftwareUpdateFsuCycleGoalVersionDetailsToHclTerraform(struct?: FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference | FleetSoftwareUpdateFsuCycleGoalVersionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    home_policy: {
      value: cdktf.stringToHclTerraform(struct!.homePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    new_home_prefix: {
      value: cdktf.stringToHclTerraform(struct!.newHomePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    software_image_id: {
      value: cdktf.stringToHclTerraform(struct!.softwareImageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    components: {
      value: cdktf.listMapperHcl(fleetSoftwareUpdateFsuCycleGoalVersionDetailsComponentsToHclTerraform, true)(struct!.components),
      isBlock: true,
      type: "list",
      storageClassType: "FleetSoftwareUpdateFsuCycleGoalVersionDetailsComponentsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetSoftwareUpdateFsuCycleGoalVersionDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._homePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.homePolicy = this._homePolicy;
    }
    if (this._newHomePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.newHomePrefix = this._newHomePrefix;
    }
    if (this._softwareImageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.softwareImageId = this._softwareImageId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._components?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.components = this._components?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetSoftwareUpdateFsuCycleGoalVersionDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._homePolicy = undefined;
      this._newHomePrefix = undefined;
      this._softwareImageId = undefined;
      this._type = undefined;
      this._version = undefined;
      this._components.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._homePolicy = value.homePolicy;
      this._newHomePrefix = value.newHomePrefix;
      this._softwareImageId = value.softwareImageId;
      this._type = value.type;
      this._version = value.version;
      this._components.internalValue = value.components;
    }
  }

  // home_policy - computed: true, optional: true, required: false
  private _homePolicy?: string; 
  public get homePolicy() {
    return this.getStringAttribute('home_policy');
  }
  public set homePolicy(value: string) {
    this._homePolicy = value;
  }
  public resetHomePolicy() {
    this._homePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homePolicyInput() {
    return this._homePolicy;
  }

  // new_home_prefix - computed: true, optional: true, required: false
  private _newHomePrefix?: string; 
  public get newHomePrefix() {
    return this.getStringAttribute('new_home_prefix');
  }
  public set newHomePrefix(value: string) {
    this._newHomePrefix = value;
  }
  public resetNewHomePrefix() {
    this._newHomePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newHomePrefixInput() {
    return this._newHomePrefix;
  }

  // software_image_id - computed: true, optional: true, required: false
  private _softwareImageId?: string; 
  public get softwareImageId() {
    return this.getStringAttribute('software_image_id');
  }
  public set softwareImageId(value: string) {
    this._softwareImageId = value;
  }
  public resetSoftwareImageId() {
    this._softwareImageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareImageIdInput() {
    return this._softwareImageId;
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

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // components - computed: false, optional: true, required: false
  private _components = new FleetSoftwareUpdateFsuCycleGoalVersionDetailsComponentsList(this, "components", false);
  public get components() {
    return this._components;
  }
  public putComponents(value: FleetSoftwareUpdateFsuCycleGoalVersionDetailsComponents[] | cdktf.IResolvable) {
    this._components.internalValue = value;
  }
  public resetComponents() {
    this._components.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentsInput() {
    return this._components.internalValue;
  }
}
export interface FleetSoftwareUpdateFsuCycleStageActionSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_software_update_fsu_cycle#time_to_start FleetSoftwareUpdateFsuCycle#time_to_start}
  */
  readonly timeToStart: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_software_update_fsu_cycle#type FleetSoftwareUpdateFsuCycle#type}
  */
  readonly type: string;
}

export function fleetSoftwareUpdateFsuCycleStageActionScheduleToTerraform(struct?: FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference | FleetSoftwareUpdateFsuCycleStageActionSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time_to_start: cdktf.stringToTerraform(struct!.timeToStart),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function fleetSoftwareUpdateFsuCycleStageActionScheduleToHclTerraform(struct?: FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference | FleetSoftwareUpdateFsuCycleStageActionSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    time_to_start: {
      value: cdktf.stringToHclTerraform(struct!.timeToStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetSoftwareUpdateFsuCycleStageActionSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeToStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeToStart = this._timeToStart;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetSoftwareUpdateFsuCycleStageActionSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._timeToStart = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._timeToStart = value.timeToStart;
      this._type = value.type;
    }
  }

  // time_to_start - computed: false, optional: false, required: true
  private _timeToStart?: string; 
  public get timeToStart() {
    return this.getStringAttribute('time_to_start');
  }
  public set timeToStart(value: string) {
    this._timeToStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeToStartInput() {
    return this._timeToStart;
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
}
export interface FleetSoftwareUpdateFsuCycleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_software_update_fsu_cycle#create FleetSoftwareUpdateFsuCycle#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_software_update_fsu_cycle#delete FleetSoftwareUpdateFsuCycle#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_software_update_fsu_cycle#update FleetSoftwareUpdateFsuCycle#update}
  */
  readonly update?: string;
}

export function fleetSoftwareUpdateFsuCycleTimeoutsToTerraform(struct?: FleetSoftwareUpdateFsuCycleTimeouts | cdktf.IResolvable): any {
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


export function fleetSoftwareUpdateFsuCycleTimeoutsToHclTerraform(struct?: FleetSoftwareUpdateFsuCycleTimeouts | cdktf.IResolvable): any {
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

export class FleetSoftwareUpdateFsuCycleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FleetSoftwareUpdateFsuCycleTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FleetSoftwareUpdateFsuCycleTimeouts | cdktf.IResolvable | undefined) {
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
export interface FleetSoftwareUpdateFsuCycleUpgradeDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_software_update_fsu_cycle#collection_type FleetSoftwareUpdateFsuCycle#collection_type}
  */
  readonly collectionType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_software_update_fsu_cycle#is_ignore_post_upgrade_errors FleetSoftwareUpdateFsuCycle#is_ignore_post_upgrade_errors}
  */
  readonly isIgnorePostUpgradeErrors?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_software_update_fsu_cycle#is_ignore_prerequisites FleetSoftwareUpdateFsuCycle#is_ignore_prerequisites}
  */
  readonly isIgnorePrerequisites?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_software_update_fsu_cycle#is_recompile_invalid_objects FleetSoftwareUpdateFsuCycle#is_recompile_invalid_objects}
  */
  readonly isRecompileInvalidObjects?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_software_update_fsu_cycle#is_time_zone_upgrade FleetSoftwareUpdateFsuCycle#is_time_zone_upgrade}
  */
  readonly isTimeZoneUpgrade?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_software_update_fsu_cycle#max_drain_timeout_in_seconds FleetSoftwareUpdateFsuCycle#max_drain_timeout_in_seconds}
  */
  readonly maxDrainTimeoutInSeconds?: number;
}

export function fleetSoftwareUpdateFsuCycleUpgradeDetailsToTerraform(struct?: FleetSoftwareUpdateFsuCycleUpgradeDetailsOutputReference | FleetSoftwareUpdateFsuCycleUpgradeDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collection_type: cdktf.stringToTerraform(struct!.collectionType),
    is_ignore_post_upgrade_errors: cdktf.booleanToTerraform(struct!.isIgnorePostUpgradeErrors),
    is_ignore_prerequisites: cdktf.booleanToTerraform(struct!.isIgnorePrerequisites),
    is_recompile_invalid_objects: cdktf.booleanToTerraform(struct!.isRecompileInvalidObjects),
    is_time_zone_upgrade: cdktf.booleanToTerraform(struct!.isTimeZoneUpgrade),
    max_drain_timeout_in_seconds: cdktf.numberToTerraform(struct!.maxDrainTimeoutInSeconds),
  }
}


export function fleetSoftwareUpdateFsuCycleUpgradeDetailsToHclTerraform(struct?: FleetSoftwareUpdateFsuCycleUpgradeDetailsOutputReference | FleetSoftwareUpdateFsuCycleUpgradeDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collection_type: {
      value: cdktf.stringToHclTerraform(struct!.collectionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_ignore_post_upgrade_errors: {
      value: cdktf.booleanToHclTerraform(struct!.isIgnorePostUpgradeErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_ignore_prerequisites: {
      value: cdktf.booleanToHclTerraform(struct!.isIgnorePrerequisites),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_recompile_invalid_objects: {
      value: cdktf.booleanToHclTerraform(struct!.isRecompileInvalidObjects),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_time_zone_upgrade: {
      value: cdktf.booleanToHclTerraform(struct!.isTimeZoneUpgrade),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_drain_timeout_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maxDrainTimeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetSoftwareUpdateFsuCycleUpgradeDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetSoftwareUpdateFsuCycleUpgradeDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collectionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectionType = this._collectionType;
    }
    if (this._isIgnorePostUpgradeErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.isIgnorePostUpgradeErrors = this._isIgnorePostUpgradeErrors;
    }
    if (this._isIgnorePrerequisites !== undefined) {
      hasAnyValues = true;
      internalValueResult.isIgnorePrerequisites = this._isIgnorePrerequisites;
    }
    if (this._isRecompileInvalidObjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRecompileInvalidObjects = this._isRecompileInvalidObjects;
    }
    if (this._isTimeZoneUpgrade !== undefined) {
      hasAnyValues = true;
      internalValueResult.isTimeZoneUpgrade = this._isTimeZoneUpgrade;
    }
    if (this._maxDrainTimeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDrainTimeoutInSeconds = this._maxDrainTimeoutInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetSoftwareUpdateFsuCycleUpgradeDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._collectionType = undefined;
      this._isIgnorePostUpgradeErrors = undefined;
      this._isIgnorePrerequisites = undefined;
      this._isRecompileInvalidObjects = undefined;
      this._isTimeZoneUpgrade = undefined;
      this._maxDrainTimeoutInSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._collectionType = value.collectionType;
      this._isIgnorePostUpgradeErrors = value.isIgnorePostUpgradeErrors;
      this._isIgnorePrerequisites = value.isIgnorePrerequisites;
      this._isRecompileInvalidObjects = value.isRecompileInvalidObjects;
      this._isTimeZoneUpgrade = value.isTimeZoneUpgrade;
      this._maxDrainTimeoutInSeconds = value.maxDrainTimeoutInSeconds;
    }
  }

  // collection_type - computed: false, optional: false, required: true
  private _collectionType?: string; 
  public get collectionType() {
    return this.getStringAttribute('collection_type');
  }
  public set collectionType(value: string) {
    this._collectionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionTypeInput() {
    return this._collectionType;
  }

  // is_ignore_post_upgrade_errors - computed: true, optional: true, required: false
  private _isIgnorePostUpgradeErrors?: boolean | cdktf.IResolvable; 
  public get isIgnorePostUpgradeErrors() {
    return this.getBooleanAttribute('is_ignore_post_upgrade_errors');
  }
  public set isIgnorePostUpgradeErrors(value: boolean | cdktf.IResolvable) {
    this._isIgnorePostUpgradeErrors = value;
  }
  public resetIsIgnorePostUpgradeErrors() {
    this._isIgnorePostUpgradeErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isIgnorePostUpgradeErrorsInput() {
    return this._isIgnorePostUpgradeErrors;
  }

  // is_ignore_prerequisites - computed: true, optional: true, required: false
  private _isIgnorePrerequisites?: boolean | cdktf.IResolvable; 
  public get isIgnorePrerequisites() {
    return this.getBooleanAttribute('is_ignore_prerequisites');
  }
  public set isIgnorePrerequisites(value: boolean | cdktf.IResolvable) {
    this._isIgnorePrerequisites = value;
  }
  public resetIsIgnorePrerequisites() {
    this._isIgnorePrerequisites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isIgnorePrerequisitesInput() {
    return this._isIgnorePrerequisites;
  }

  // is_recompile_invalid_objects - computed: true, optional: true, required: false
  private _isRecompileInvalidObjects?: boolean | cdktf.IResolvable; 
  public get isRecompileInvalidObjects() {
    return this.getBooleanAttribute('is_recompile_invalid_objects');
  }
  public set isRecompileInvalidObjects(value: boolean | cdktf.IResolvable) {
    this._isRecompileInvalidObjects = value;
  }
  public resetIsRecompileInvalidObjects() {
    this._isRecompileInvalidObjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRecompileInvalidObjectsInput() {
    return this._isRecompileInvalidObjects;
  }

  // is_time_zone_upgrade - computed: true, optional: true, required: false
  private _isTimeZoneUpgrade?: boolean | cdktf.IResolvable; 
  public get isTimeZoneUpgrade() {
    return this.getBooleanAttribute('is_time_zone_upgrade');
  }
  public set isTimeZoneUpgrade(value: boolean | cdktf.IResolvable) {
    this._isTimeZoneUpgrade = value;
  }
  public resetIsTimeZoneUpgrade() {
    this._isTimeZoneUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isTimeZoneUpgradeInput() {
    return this._isTimeZoneUpgrade;
  }

  // max_drain_timeout_in_seconds - computed: true, optional: true, required: false
  private _maxDrainTimeoutInSeconds?: number; 
  public get maxDrainTimeoutInSeconds() {
    return this.getNumberAttribute('max_drain_timeout_in_seconds');
  }
  public set maxDrainTimeoutInSeconds(value: number) {
    this._maxDrainTimeoutInSeconds = value;
  }
  public resetMaxDrainTimeoutInSeconds() {
    this._maxDrainTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDrainTimeoutInSecondsInput() {
    return this._maxDrainTimeoutInSeconds;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_software_update_fsu_cycle oci_fleet_software_update_fsu_cycle}
*/
export class FleetSoftwareUpdateFsuCycle extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_fleet_software_update_fsu_cycle";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FleetSoftwareUpdateFsuCycle resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FleetSoftwareUpdateFsuCycle to import
  * @param importFromId The id of the existing FleetSoftwareUpdateFsuCycle that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_software_update_fsu_cycle#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FleetSoftwareUpdateFsuCycle to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_fleet_software_update_fsu_cycle", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_software_update_fsu_cycle oci_fleet_software_update_fsu_cycle} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FleetSoftwareUpdateFsuCycleConfig
  */
  public constructor(scope: Construct, id: string, config: FleetSoftwareUpdateFsuCycleConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_fleet_software_update_fsu_cycle',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._fsuCollectionId = config.fsuCollectionId;
    this._id = config.id;
    this._isIgnoreMissingPatches = config.isIgnoreMissingPatches;
    this._isIgnorePatches = config.isIgnorePatches;
    this._isKeepPlacement = config.isKeepPlacement;
    this._maxDrainTimeoutInSeconds = config.maxDrainTimeoutInSeconds;
    this._type = config.type;
    this._applyActionSchedule.internalValue = config.applyActionSchedule;
    this._batchingStrategy.internalValue = config.batchingStrategy;
    this._diagnosticsCollection.internalValue = config.diagnosticsCollection;
    this._goalVersionDetails.internalValue = config.goalVersionDetails;
    this._stageActionSchedule.internalValue = config.stageActionSchedule;
    this._timeouts.internalValue = config.timeouts;
    this._upgradeDetails.internalValue = config.upgradeDetails;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // collection_type - computed: true, optional: false, required: false
  public get collectionType() {
    return this.getStringAttribute('collection_type');
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: true, required: false
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

  // executing_fsu_action_id - computed: true, optional: false, required: false
  public get executingFsuActionId() {
    return this.getStringAttribute('executing_fsu_action_id');
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
  }

  // fsu_collection_id - computed: false, optional: false, required: true
  private _fsuCollectionId?: string; 
  public get fsuCollectionId() {
    return this.getStringAttribute('fsu_collection_id');
  }
  public set fsuCollectionId(value: string) {
    this._fsuCollectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fsuCollectionIdInput() {
    return this._fsuCollectionId;
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

  // is_ignore_missing_patches - computed: true, optional: true, required: false
  private _isIgnoreMissingPatches?: string[]; 
  public get isIgnoreMissingPatches() {
    return this.getListAttribute('is_ignore_missing_patches');
  }
  public set isIgnoreMissingPatches(value: string[]) {
    this._isIgnoreMissingPatches = value;
  }
  public resetIsIgnoreMissingPatches() {
    this._isIgnoreMissingPatches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isIgnoreMissingPatchesInput() {
    return this._isIgnoreMissingPatches;
  }

  // is_ignore_patches - computed: true, optional: true, required: false
  private _isIgnorePatches?: boolean | cdktf.IResolvable; 
  public get isIgnorePatches() {
    return this.getBooleanAttribute('is_ignore_patches');
  }
  public set isIgnorePatches(value: boolean | cdktf.IResolvable) {
    this._isIgnorePatches = value;
  }
  public resetIsIgnorePatches() {
    this._isIgnorePatches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isIgnorePatchesInput() {
    return this._isIgnorePatches;
  }

  // is_keep_placement - computed: true, optional: true, required: false
  private _isKeepPlacement?: boolean | cdktf.IResolvable; 
  public get isKeepPlacement() {
    return this.getBooleanAttribute('is_keep_placement');
  }
  public set isKeepPlacement(value: boolean | cdktf.IResolvable) {
    this._isKeepPlacement = value;
  }
  public resetIsKeepPlacement() {
    this._isKeepPlacement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isKeepPlacementInput() {
    return this._isKeepPlacement;
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

  // max_drain_timeout_in_seconds - computed: true, optional: true, required: false
  private _maxDrainTimeoutInSeconds?: number; 
  public get maxDrainTimeoutInSeconds() {
    return this.getNumberAttribute('max_drain_timeout_in_seconds');
  }
  public set maxDrainTimeoutInSeconds(value: number) {
    this._maxDrainTimeoutInSeconds = value;
  }
  public resetMaxDrainTimeoutInSeconds() {
    this._maxDrainTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDrainTimeoutInSecondsInput() {
    return this._maxDrainTimeoutInSeconds;
  }

  // next_action_to_execute - computed: true, optional: false, required: false
  private _nextActionToExecute = new FleetSoftwareUpdateFsuCycleNextActionToExecuteList(this, "next_action_to_execute", false);
  public get nextActionToExecute() {
    return this._nextActionToExecute;
  }

  // rollback_cycle_state - computed: true, optional: false, required: false
  public get rollbackCycleState() {
    return this.getStringAttribute('rollback_cycle_state');
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

  // apply_action_schedule - computed: false, optional: true, required: false
  private _applyActionSchedule = new FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference(this, "apply_action_schedule");
  public get applyActionSchedule() {
    return this._applyActionSchedule;
  }
  public putApplyActionSchedule(value: FleetSoftwareUpdateFsuCycleApplyActionSchedule) {
    this._applyActionSchedule.internalValue = value;
  }
  public resetApplyActionSchedule() {
    this._applyActionSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyActionScheduleInput() {
    return this._applyActionSchedule.internalValue;
  }

  // batching_strategy - computed: false, optional: true, required: false
  private _batchingStrategy = new FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference(this, "batching_strategy");
  public get batchingStrategy() {
    return this._batchingStrategy;
  }
  public putBatchingStrategy(value: FleetSoftwareUpdateFsuCycleBatchingStrategy) {
    this._batchingStrategy.internalValue = value;
  }
  public resetBatchingStrategy() {
    this._batchingStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchingStrategyInput() {
    return this._batchingStrategy.internalValue;
  }

  // diagnostics_collection - computed: false, optional: true, required: false
  private _diagnosticsCollection = new FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference(this, "diagnostics_collection");
  public get diagnosticsCollection() {
    return this._diagnosticsCollection;
  }
  public putDiagnosticsCollection(value: FleetSoftwareUpdateFsuCycleDiagnosticsCollection) {
    this._diagnosticsCollection.internalValue = value;
  }
  public resetDiagnosticsCollection() {
    this._diagnosticsCollection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diagnosticsCollectionInput() {
    return this._diagnosticsCollection.internalValue;
  }

  // goal_version_details - computed: false, optional: false, required: true
  private _goalVersionDetails = new FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference(this, "goal_version_details");
  public get goalVersionDetails() {
    return this._goalVersionDetails;
  }
  public putGoalVersionDetails(value: FleetSoftwareUpdateFsuCycleGoalVersionDetails) {
    this._goalVersionDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get goalVersionDetailsInput() {
    return this._goalVersionDetails.internalValue;
  }

  // stage_action_schedule - computed: false, optional: true, required: false
  private _stageActionSchedule = new FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference(this, "stage_action_schedule");
  public get stageActionSchedule() {
    return this._stageActionSchedule;
  }
  public putStageActionSchedule(value: FleetSoftwareUpdateFsuCycleStageActionSchedule) {
    this._stageActionSchedule.internalValue = value;
  }
  public resetStageActionSchedule() {
    this._stageActionSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stageActionScheduleInput() {
    return this._stageActionSchedule.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FleetSoftwareUpdateFsuCycleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FleetSoftwareUpdateFsuCycleTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // upgrade_details - computed: false, optional: true, required: false
  private _upgradeDetails = new FleetSoftwareUpdateFsuCycleUpgradeDetailsOutputReference(this, "upgrade_details");
  public get upgradeDetails() {
    return this._upgradeDetails;
  }
  public putUpgradeDetails(value: FleetSoftwareUpdateFsuCycleUpgradeDetails) {
    this._upgradeDetails.internalValue = value;
  }
  public resetUpgradeDetails() {
    this._upgradeDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeDetailsInput() {
    return this._upgradeDetails.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      fsu_collection_id: cdktf.stringToTerraform(this._fsuCollectionId),
      id: cdktf.stringToTerraform(this._id),
      is_ignore_missing_patches: cdktf.listMapper(cdktf.stringToTerraform, false)(this._isIgnoreMissingPatches),
      is_ignore_patches: cdktf.booleanToTerraform(this._isIgnorePatches),
      is_keep_placement: cdktf.booleanToTerraform(this._isKeepPlacement),
      max_drain_timeout_in_seconds: cdktf.numberToTerraform(this._maxDrainTimeoutInSeconds),
      type: cdktf.stringToTerraform(this._type),
      apply_action_schedule: fleetSoftwareUpdateFsuCycleApplyActionScheduleToTerraform(this._applyActionSchedule.internalValue),
      batching_strategy: fleetSoftwareUpdateFsuCycleBatchingStrategyToTerraform(this._batchingStrategy.internalValue),
      diagnostics_collection: fleetSoftwareUpdateFsuCycleDiagnosticsCollectionToTerraform(this._diagnosticsCollection.internalValue),
      goal_version_details: fleetSoftwareUpdateFsuCycleGoalVersionDetailsToTerraform(this._goalVersionDetails.internalValue),
      stage_action_schedule: fleetSoftwareUpdateFsuCycleStageActionScheduleToTerraform(this._stageActionSchedule.internalValue),
      timeouts: fleetSoftwareUpdateFsuCycleTimeoutsToTerraform(this._timeouts.internalValue),
      upgrade_details: fleetSoftwareUpdateFsuCycleUpgradeDetailsToTerraform(this._upgradeDetails.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      fsu_collection_id: {
        value: cdktf.stringToHclTerraform(this._fsuCollectionId),
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
      is_ignore_missing_patches: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._isIgnoreMissingPatches),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      is_ignore_patches: {
        value: cdktf.booleanToHclTerraform(this._isIgnorePatches),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_keep_placement: {
        value: cdktf.booleanToHclTerraform(this._isKeepPlacement),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_drain_timeout_in_seconds: {
        value: cdktf.numberToHclTerraform(this._maxDrainTimeoutInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apply_action_schedule: {
        value: fleetSoftwareUpdateFsuCycleApplyActionScheduleToHclTerraform(this._applyActionSchedule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FleetSoftwareUpdateFsuCycleApplyActionScheduleList",
      },
      batching_strategy: {
        value: fleetSoftwareUpdateFsuCycleBatchingStrategyToHclTerraform(this._batchingStrategy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FleetSoftwareUpdateFsuCycleBatchingStrategyList",
      },
      diagnostics_collection: {
        value: fleetSoftwareUpdateFsuCycleDiagnosticsCollectionToHclTerraform(this._diagnosticsCollection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FleetSoftwareUpdateFsuCycleDiagnosticsCollectionList",
      },
      goal_version_details: {
        value: fleetSoftwareUpdateFsuCycleGoalVersionDetailsToHclTerraform(this._goalVersionDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FleetSoftwareUpdateFsuCycleGoalVersionDetailsList",
      },
      stage_action_schedule: {
        value: fleetSoftwareUpdateFsuCycleStageActionScheduleToHclTerraform(this._stageActionSchedule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FleetSoftwareUpdateFsuCycleStageActionScheduleList",
      },
      timeouts: {
        value: fleetSoftwareUpdateFsuCycleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FleetSoftwareUpdateFsuCycleTimeouts",
      },
      upgrade_details: {
        value: fleetSoftwareUpdateFsuCycleUpgradeDetailsToHclTerraform(this._upgradeDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FleetSoftwareUpdateFsuCycleUpgradeDetailsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
