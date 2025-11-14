// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/fleet_software_update_fsu_cycles
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciFleetSoftwareUpdateFsuCyclesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/fleet_software_update_fsu_cycles#collection_type DataOciFleetSoftwareUpdateFsuCycles#collection_type}
  */
  readonly collectionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/fleet_software_update_fsu_cycles#compartment_id DataOciFleetSoftwareUpdateFsuCycles#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/fleet_software_update_fsu_cycles#display_name DataOciFleetSoftwareUpdateFsuCycles#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/fleet_software_update_fsu_cycles#fsu_collection_id DataOciFleetSoftwareUpdateFsuCycles#fsu_collection_id}
  */
  readonly fsuCollectionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/fleet_software_update_fsu_cycles#id DataOciFleetSoftwareUpdateFsuCycles#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/fleet_software_update_fsu_cycles#state DataOciFleetSoftwareUpdateFsuCycles#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/fleet_software_update_fsu_cycles#target_version DataOciFleetSoftwareUpdateFsuCycles#target_version}
  */
  readonly targetVersion?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/fleet_software_update_fsu_cycles#filter DataOciFleetSoftwareUpdateFsuCycles#filter}
  */
  readonly filter?: DataOciFleetSoftwareUpdateFsuCyclesFilter[] | cdktf.IResolvable;
}
export interface DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionSchedule {
}

export function dataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleToTerraform(struct?: DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleToHclTerraform(struct?: DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionSchedule | undefined) {
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

export class DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference {
    return new DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategy {
}

export function dataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyToTerraform(struct?: DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyToHclTerraform(struct?: DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategy | undefined) {
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

export class DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference {
    return new DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollection {
}

export function dataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionToTerraform(struct?: DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionToHclTerraform(struct?: DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollection | undefined) {
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

export class DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference {
    return new DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsComponentsGoalVersionDetails {
}

export function dataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsComponentsGoalVersionDetailsToTerraform(struct?: DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsComponentsGoalVersionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsComponentsGoalVersionDetailsToHclTerraform(struct?: DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsComponentsGoalVersionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsComponentsGoalVersionDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsComponentsGoalVersionDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsComponentsGoalVersionDetails | undefined) {
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

export class DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsComponentsGoalVersionDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsComponentsGoalVersionDetailsOutputReference {
    return new DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsComponentsGoalVersionDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsComponents {
}

export function dataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsComponentsToTerraform(struct?: DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsComponentsToHclTerraform(struct?: DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsComponents | undefined) {
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
  private _goalVersionDetails = new DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsComponentsGoalVersionDetailsList(this, "goal_version_details", false);
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

export class DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsComponentsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsComponentsOutputReference {
    return new DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetails {
}

export function dataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsToTerraform(struct?: DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsToHclTerraform(struct?: DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // components - computed: true, optional: false, required: false
  private _components = new DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsComponentsList(this, "components", false);
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

export class DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference {
    return new DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecute {
}

export function dataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteToTerraform(struct?: DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteToHclTerraform(struct?: DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecute | undefined) {
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

export class DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference {
    return new DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionSchedule {
}

export function dataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleToTerraform(struct?: DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleToHclTerraform(struct?: DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionSchedule | undefined) {
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

export class DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference {
    return new DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsUpgradeDetails {
}

export function dataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsUpgradeDetailsToTerraform(struct?: DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsUpgradeDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsUpgradeDetailsToHclTerraform(struct?: DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsUpgradeDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsUpgradeDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsUpgradeDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsUpgradeDetails | undefined) {
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

export class DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsUpgradeDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsUpgradeDetailsOutputReference {
    return new DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsUpgradeDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItems {
}

export function dataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsToTerraform(struct?: DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsToHclTerraform(struct?: DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // apply_action_schedule - computed: true, optional: false, required: false
  private _applyActionSchedule = new DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList(this, "apply_action_schedule", false);
  public get applyActionSchedule() {
    return this._applyActionSchedule;
  }

  // batching_strategy - computed: true, optional: false, required: false
  private _batchingStrategy = new DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList(this, "batching_strategy", false);
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
  private _diagnosticsCollection = new DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList(this, "diagnostics_collection", false);
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

  // goal_version_details - computed: true, optional: false, required: false
  private _goalVersionDetails = new DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList(this, "goal_version_details", false);
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
  private _nextActionToExecute = new DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList(this, "next_action_to_execute", false);
  public get nextActionToExecute() {
    return this._nextActionToExecute;
  }

  // rollback_cycle_state - computed: true, optional: false, required: false
  public get rollbackCycleState() {
    return this.getStringAttribute('rollback_cycle_state');
  }

  // stage_action_schedule - computed: true, optional: false, required: false
  private _stageActionSchedule = new DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList(this, "stage_action_schedule", false);
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
  private _upgradeDetails = new DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsUpgradeDetailsList(this, "upgrade_details", false);
  public get upgradeDetails() {
    return this._upgradeDetails;
  }
}

export class DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference {
    return new DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollection {
}

export function dataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionToTerraform(struct?: DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionToHclTerraform(struct?: DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference {
    return new DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetSoftwareUpdateFsuCyclesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/fleet_software_update_fsu_cycles#name DataOciFleetSoftwareUpdateFsuCycles#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/fleet_software_update_fsu_cycles#regex DataOciFleetSoftwareUpdateFsuCycles#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/fleet_software_update_fsu_cycles#values DataOciFleetSoftwareUpdateFsuCycles#values}
  */
  readonly values: string[];
}

export function dataOciFleetSoftwareUpdateFsuCyclesFilterToTerraform(struct?: DataOciFleetSoftwareUpdateFsuCyclesFilter | cdktf.IResolvable): any {
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


export function dataOciFleetSoftwareUpdateFsuCyclesFilterToHclTerraform(struct?: DataOciFleetSoftwareUpdateFsuCyclesFilter | cdktf.IResolvable): any {
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

export class DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetSoftwareUpdateFsuCyclesFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciFleetSoftwareUpdateFsuCyclesFilter | cdktf.IResolvable | undefined) {
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

export class DataOciFleetSoftwareUpdateFsuCyclesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciFleetSoftwareUpdateFsuCyclesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference {
    return new DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/fleet_software_update_fsu_cycles oci_fleet_software_update_fsu_cycles}
*/
export class DataOciFleetSoftwareUpdateFsuCycles extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_fleet_software_update_fsu_cycles";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciFleetSoftwareUpdateFsuCycles resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciFleetSoftwareUpdateFsuCycles to import
  * @param importFromId The id of the existing DataOciFleetSoftwareUpdateFsuCycles that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/fleet_software_update_fsu_cycles#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciFleetSoftwareUpdateFsuCycles to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_fleet_software_update_fsu_cycles", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/fleet_software_update_fsu_cycles oci_fleet_software_update_fsu_cycles} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciFleetSoftwareUpdateFsuCyclesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciFleetSoftwareUpdateFsuCyclesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_fleet_software_update_fsu_cycles',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._collectionType = config.collectionType;
    this._compartmentId = config.compartmentId;
    this._displayName = config.displayName;
    this._fsuCollectionId = config.fsuCollectionId;
    this._id = config.id;
    this._state = config.state;
    this._targetVersion = config.targetVersion;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // collection_type - computed: false, optional: true, required: false
  private _collectionType?: string; 
  public get collectionType() {
    return this.getStringAttribute('collection_type');
  }
  public set collectionType(value: string) {
    this._collectionType = value;
  }
  public resetCollectionType() {
    this._collectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionTypeInput() {
    return this._collectionType;
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

  // fsu_collection_id - computed: false, optional: true, required: false
  private _fsuCollectionId?: string; 
  public get fsuCollectionId() {
    return this.getStringAttribute('fsu_collection_id');
  }
  public set fsuCollectionId(value: string) {
    this._fsuCollectionId = value;
  }
  public resetFsuCollectionId() {
    this._fsuCollectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsuCollectionIdInput() {
    return this._fsuCollectionId;
  }

  // fsu_cycle_summary_collection - computed: true, optional: false, required: false
  private _fsuCycleSummaryCollection = new DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList(this, "fsu_cycle_summary_collection", false);
  public get fsuCycleSummaryCollection() {
    return this._fsuCycleSummaryCollection;
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

  // target_version - computed: false, optional: true, required: false
  private _targetVersion?: string; 
  public get targetVersion() {
    return this.getStringAttribute('target_version');
  }
  public set targetVersion(value: string) {
    this._targetVersion = value;
  }
  public resetTargetVersion() {
    this._targetVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetVersionInput() {
    return this._targetVersion;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciFleetSoftwareUpdateFsuCyclesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciFleetSoftwareUpdateFsuCyclesFilter[] | cdktf.IResolvable) {
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
      collection_type: cdktf.stringToTerraform(this._collectionType),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      display_name: cdktf.stringToTerraform(this._displayName),
      fsu_collection_id: cdktf.stringToTerraform(this._fsuCollectionId),
      id: cdktf.stringToTerraform(this._id),
      state: cdktf.stringToTerraform(this._state),
      target_version: cdktf.stringToTerraform(this._targetVersion),
      filter: cdktf.listMapper(dataOciFleetSoftwareUpdateFsuCyclesFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      collection_type: {
        value: cdktf.stringToHclTerraform(this._collectionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_version: {
        value: cdktf.stringToHclTerraform(this._targetVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciFleetSoftwareUpdateFsuCyclesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciFleetSoftwareUpdateFsuCyclesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
