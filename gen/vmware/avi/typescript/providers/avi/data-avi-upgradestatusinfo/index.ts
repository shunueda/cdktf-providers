// https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/data-sources/upgradestatusinfo
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAviUpgradestatusinfoConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/data-sources/upgradestatusinfo#id DataAviUpgradestatusinfo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/data-sources/upgradestatusinfo#name DataAviUpgradestatusinfo#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/data-sources/upgradestatusinfo#tenant_ref DataAviUpgradestatusinfo#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/data-sources/upgradestatusinfo#uuid DataAviUpgradestatusinfo#uuid}
  */
  readonly uuid?: string;
}
export interface DataAviUpgradestatusinfoHistorySeUpgradeEvents {
}

export function dataAviUpgradestatusinfoHistorySeUpgradeEventsToTerraform(struct?: DataAviUpgradestatusinfoHistorySeUpgradeEvents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviUpgradestatusinfoHistorySeUpgradeEventsToHclTerraform(struct?: DataAviUpgradestatusinfoHistorySeUpgradeEvents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviUpgradestatusinfoHistorySeUpgradeEventsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviUpgradestatusinfoHistorySeUpgradeEvents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviUpgradestatusinfoHistorySeUpgradeEvents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // from_se_ref - computed: true, optional: false, required: false
  public get fromSeRef() {
    return this.getStringAttribute('from_se_ref');
  }

  // num_se - computed: true, optional: false, required: false
  public get numSe() {
    return this.getStringAttribute('num_se');
  }

  // num_se_group - computed: true, optional: false, required: false
  public get numSeGroup() {
    return this.getStringAttribute('num_se_group');
  }

  // num_vs - computed: true, optional: false, required: false
  public get numVs() {
    return this.getStringAttribute('num_vs');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getListAttribute('reason');
  }

  // se_group_ha_mode - computed: true, optional: false, required: false
  public get seGroupHaMode() {
    return this.getStringAttribute('se_group_ha_mode');
  }

  // se_group_ref - computed: true, optional: false, required: false
  public get seGroupRef() {
    return this.getStringAttribute('se_group_ref');
  }

  // se_ref - computed: true, optional: false, required: false
  public get seRef() {
    return this.getStringAttribute('se_ref');
  }

  // sub_tasks - computed: true, optional: false, required: false
  public get subTasks() {
    return this.getListAttribute('sub_tasks');
  }

  // task - computed: true, optional: false, required: false
  public get task() {
    return this.getStringAttribute('task');
  }

  // to_se_ref - computed: true, optional: false, required: false
  public get toSeRef() {
    return this.getStringAttribute('to_se_ref');
  }

  // traffic_status - computed: true, optional: false, required: false
  public get trafficStatus() {
    return this.getStringAttribute('traffic_status');
  }

  // vs_ref - computed: true, optional: false, required: false
  public get vsRef() {
    return this.getStringAttribute('vs_ref');
  }
}

export class DataAviUpgradestatusinfoHistorySeUpgradeEventsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviUpgradestatusinfoHistorySeUpgradeEventsOutputReference {
    return new DataAviUpgradestatusinfoHistorySeUpgradeEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviUpgradestatusinfoHistorySegStatusSeUpgradeErrors {
}

export function dataAviUpgradestatusinfoHistorySegStatusSeUpgradeErrorsToTerraform(struct?: DataAviUpgradestatusinfoHistorySegStatusSeUpgradeErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviUpgradestatusinfoHistorySegStatusSeUpgradeErrorsToHclTerraform(struct?: DataAviUpgradestatusinfoHistorySegStatusSeUpgradeErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviUpgradestatusinfoHistorySegStatusSeUpgradeErrorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviUpgradestatusinfoHistorySegStatusSeUpgradeErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviUpgradestatusinfoHistorySegStatusSeUpgradeErrors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // from_se_ref - computed: true, optional: false, required: false
  public get fromSeRef() {
    return this.getStringAttribute('from_se_ref');
  }

  // num_se - computed: true, optional: false, required: false
  public get numSe() {
    return this.getStringAttribute('num_se');
  }

  // num_se_group - computed: true, optional: false, required: false
  public get numSeGroup() {
    return this.getStringAttribute('num_se_group');
  }

  // num_vs - computed: true, optional: false, required: false
  public get numVs() {
    return this.getStringAttribute('num_vs');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getListAttribute('reason');
  }

  // se_group_ha_mode - computed: true, optional: false, required: false
  public get seGroupHaMode() {
    return this.getStringAttribute('se_group_ha_mode');
  }

  // se_group_ref - computed: true, optional: false, required: false
  public get seGroupRef() {
    return this.getStringAttribute('se_group_ref');
  }

  // se_ref - computed: true, optional: false, required: false
  public get seRef() {
    return this.getStringAttribute('se_ref');
  }

  // sub_tasks - computed: true, optional: false, required: false
  public get subTasks() {
    return this.getListAttribute('sub_tasks');
  }

  // task - computed: true, optional: false, required: false
  public get task() {
    return this.getStringAttribute('task');
  }

  // to_se_ref - computed: true, optional: false, required: false
  public get toSeRef() {
    return this.getStringAttribute('to_se_ref');
  }

  // traffic_status - computed: true, optional: false, required: false
  public get trafficStatus() {
    return this.getStringAttribute('traffic_status');
  }

  // vs_ref - computed: true, optional: false, required: false
  public get vsRef() {
    return this.getStringAttribute('vs_ref');
  }
}

export class DataAviUpgradestatusinfoHistorySegStatusSeUpgradeErrorsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviUpgradestatusinfoHistorySegStatusSeUpgradeErrorsOutputReference {
    return new DataAviUpgradestatusinfoHistorySegStatusSeUpgradeErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviUpgradestatusinfoHistorySegStatusVsErrorsEventTimestamp {
}

export function dataAviUpgradestatusinfoHistorySegStatusVsErrorsEventTimestampToTerraform(struct?: DataAviUpgradestatusinfoHistorySegStatusVsErrorsEventTimestamp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviUpgradestatusinfoHistorySegStatusVsErrorsEventTimestampToHclTerraform(struct?: DataAviUpgradestatusinfoHistorySegStatusVsErrorsEventTimestamp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviUpgradestatusinfoHistorySegStatusVsErrorsEventTimestampOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviUpgradestatusinfoHistorySegStatusVsErrorsEventTimestamp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviUpgradestatusinfoHistorySegStatusVsErrorsEventTimestamp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // secs - computed: true, optional: false, required: false
  public get secs() {
    return this.getStringAttribute('secs');
  }

  // usecs - computed: true, optional: false, required: false
  public get usecs() {
    return this.getStringAttribute('usecs');
  }
}

export class DataAviUpgradestatusinfoHistorySegStatusVsErrorsEventTimestampList extends cdktf.ComplexList {

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
  public get(index: number): DataAviUpgradestatusinfoHistorySegStatusVsErrorsEventTimestampOutputReference {
    return new DataAviUpgradestatusinfoHistorySegStatusVsErrorsEventTimestampOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviUpgradestatusinfoHistorySegStatusVsErrors {
}

export function dataAviUpgradestatusinfoHistorySegStatusVsErrorsToTerraform(struct?: DataAviUpgradestatusinfoHistorySegStatusVsErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviUpgradestatusinfoHistorySegStatusVsErrorsToHclTerraform(struct?: DataAviUpgradestatusinfoHistorySegStatusVsErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviUpgradestatusinfoHistorySegStatusVsErrorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviUpgradestatusinfoHistorySegStatusVsErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviUpgradestatusinfoHistorySegStatusVsErrors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // event_timestamp - computed: true, optional: false, required: false
  private _eventTimestamp = new DataAviUpgradestatusinfoHistorySegStatusVsErrorsEventTimestampList(this, "event_timestamp", true);
  public get eventTimestamp() {
    return this._eventTimestamp;
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getListAttribute('reason');
  }

  // se_group_ha_mode - computed: true, optional: false, required: false
  public get seGroupHaMode() {
    return this.getStringAttribute('se_group_ha_mode');
  }

  // se_group_ref - computed: true, optional: false, required: false
  public get seGroupRef() {
    return this.getStringAttribute('se_group_ref');
  }

  // se_ref - computed: true, optional: false, required: false
  public get seRef() {
    return this.getStringAttribute('se_ref');
  }

  // tenant_ref - computed: true, optional: false, required: false
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }

  // traffic_status - computed: true, optional: false, required: false
  public get trafficStatus() {
    return this.getStringAttribute('traffic_status');
  }

  // vip_id - computed: true, optional: false, required: false
  public get vipId() {
    return this.getStringAttribute('vip_id');
  }

  // vs_ref - computed: true, optional: false, required: false
  public get vsRef() {
    return this.getStringAttribute('vs_ref');
  }
}

export class DataAviUpgradestatusinfoHistorySegStatusVsErrorsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviUpgradestatusinfoHistorySegStatusVsErrorsOutputReference {
    return new DataAviUpgradestatusinfoHistorySegStatusVsErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviUpgradestatusinfoHistorySegStatus {
}

export function dataAviUpgradestatusinfoHistorySegStatusToTerraform(struct?: DataAviUpgradestatusinfoHistorySegStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviUpgradestatusinfoHistorySegStatusToHclTerraform(struct?: DataAviUpgradestatusinfoHistorySegStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviUpgradestatusinfoHistorySegStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviUpgradestatusinfoHistorySegStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviUpgradestatusinfoHistorySegStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // controller_version - computed: true, optional: false, required: false
  public get controllerVersion() {
    return this.getStringAttribute('controller_version');
  }

  // disrupted_vs_ref - computed: true, optional: false, required: false
  public get disruptedVsRef() {
    return this.getListAttribute('disrupted_vs_ref');
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getStringAttribute('duration');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // enqueue_time - computed: true, optional: false, required: false
  public get enqueueTime() {
    return this.getStringAttribute('enqueue_time');
  }

  // ha_mode - computed: true, optional: false, required: false
  public get haMode() {
    return this.getStringAttribute('ha_mode');
  }

  // in_progress - computed: true, optional: false, required: false
  public get inProgress() {
    return this.getStringAttribute('in_progress');
  }

  // notes - computed: true, optional: false, required: false
  public get notes() {
    return this.getListAttribute('notes');
  }

  // num_se - computed: true, optional: false, required: false
  public get numSe() {
    return this.getStringAttribute('num_se');
  }

  // num_se_with_no_vs - computed: true, optional: false, required: false
  public get numSeWithNoVs() {
    return this.getStringAttribute('num_se_with_no_vs');
  }

  // num_se_with_vs_not_scaledout - computed: true, optional: false, required: false
  public get numSeWithVsNotScaledout() {
    return this.getStringAttribute('num_se_with_vs_not_scaledout');
  }

  // num_se_with_vs_scaledout - computed: true, optional: false, required: false
  public get numSeWithVsScaledout() {
    return this.getStringAttribute('num_se_with_vs_scaledout');
  }

  // num_vs - computed: true, optional: false, required: false
  public get numVs() {
    return this.getStringAttribute('num_vs');
  }

  // num_vs_disrupted - computed: true, optional: false, required: false
  public get numVsDisrupted() {
    return this.getStringAttribute('num_vs_disrupted');
  }

  // progress - computed: true, optional: false, required: false
  public get progress() {
    return this.getStringAttribute('progress');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getListAttribute('reason');
  }

  // request_time - computed: true, optional: false, required: false
  public get requestTime() {
    return this.getStringAttribute('request_time');
  }

  // se_already_upgraded_at_start - computed: true, optional: false, required: false
  public get seAlreadyUpgradedAtStart() {
    return this.getListAttribute('se_already_upgraded_at_start');
  }

  // se_disconnected_at_start - computed: true, optional: false, required: false
  public get seDisconnectedAtStart() {
    return this.getListAttribute('se_disconnected_at_start');
  }

  // se_group_name - computed: true, optional: false, required: false
  public get seGroupName() {
    return this.getStringAttribute('se_group_name');
  }

  // se_group_uuid - computed: true, optional: false, required: false
  public get seGroupUuid() {
    return this.getStringAttribute('se_group_uuid');
  }

  // se_ip_missing_at_start - computed: true, optional: false, required: false
  public get seIpMissingAtStart() {
    return this.getListAttribute('se_ip_missing_at_start');
  }

  // se_poweredoff_at_start - computed: true, optional: false, required: false
  public get sePoweredoffAtStart() {
    return this.getListAttribute('se_poweredoff_at_start');
  }

  // se_reboot_in_progress_ref - computed: true, optional: false, required: false
  public get seRebootInProgressRef() {
    return this.getStringAttribute('se_reboot_in_progress_ref');
  }

  // se_upgrade_completed - computed: true, optional: false, required: false
  public get seUpgradeCompleted() {
    return this.getListAttribute('se_upgrade_completed');
  }

  // se_upgrade_errors - computed: true, optional: false, required: false
  private _seUpgradeErrors = new DataAviUpgradestatusinfoHistorySegStatusSeUpgradeErrorsList(this, "se_upgrade_errors", false);
  public get seUpgradeErrors() {
    return this._seUpgradeErrors;
  }

  // se_upgrade_failed - computed: true, optional: false, required: false
  public get seUpgradeFailed() {
    return this.getListAttribute('se_upgrade_failed');
  }

  // se_upgrade_in_progress - computed: true, optional: false, required: false
  public get seUpgradeInProgress() {
    return this.getListAttribute('se_upgrade_in_progress');
  }

  // se_upgrade_not_started - computed: true, optional: false, required: false
  public get seUpgradeNotStarted() {
    return this.getListAttribute('se_upgrade_not_started');
  }

  // se_upgrade_skip_suspended - computed: true, optional: false, required: false
  public get seUpgradeSkipSuspended() {
    return this.getListAttribute('se_upgrade_skip_suspended');
  }

  // se_upgrade_suspended - computed: true, optional: false, required: false
  public get seUpgradeSuspended() {
    return this.getListAttribute('se_upgrade_suspended');
  }

  // se_with_no_vs - computed: true, optional: false, required: false
  public get seWithNoVs() {
    return this.getListAttribute('se_with_no_vs');
  }

  // se_with_vs_not_scaledout - computed: true, optional: false, required: false
  public get seWithVsNotScaledout() {
    return this.getListAttribute('se_with_vs_not_scaledout');
  }

  // se_with_vs_scaledout - computed: true, optional: false, required: false
  public get seWithVsScaledout() {
    return this.getListAttribute('se_with_vs_scaledout');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tenant_ref - computed: true, optional: false, required: false
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }

  // thread - computed: true, optional: false, required: false
  public get thread() {
    return this.getStringAttribute('thread');
  }

  // traffic_status - computed: true, optional: false, required: false
  public get trafficStatus() {
    return this.getStringAttribute('traffic_status');
  }

  // vs_errors - computed: true, optional: false, required: false
  private _vsErrors = new DataAviUpgradestatusinfoHistorySegStatusVsErrorsList(this, "vs_errors", false);
  public get vsErrors() {
    return this._vsErrors;
  }

  // vs_migrate_in_progress_ref - computed: true, optional: false, required: false
  public get vsMigrateInProgressRef() {
    return this.getListAttribute('vs_migrate_in_progress_ref');
  }

  // vs_scalein_in_progress_ref - computed: true, optional: false, required: false
  public get vsScaleinInProgressRef() {
    return this.getListAttribute('vs_scalein_in_progress_ref');
  }

  // vs_scaleout_in_progress_ref - computed: true, optional: false, required: false
  public get vsScaleoutInProgressRef() {
    return this.getListAttribute('vs_scaleout_in_progress_ref');
  }

  // worker - computed: true, optional: false, required: false
  public get worker() {
    return this.getStringAttribute('worker');
  }
}

export class DataAviUpgradestatusinfoHistorySegStatusList extends cdktf.ComplexList {

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
  public get(index: number): DataAviUpgradestatusinfoHistorySegStatusOutputReference {
    return new DataAviUpgradestatusinfoHistorySegStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviUpgradestatusinfoHistoryStateLastChangedTime {
}

export function dataAviUpgradestatusinfoHistoryStateLastChangedTimeToTerraform(struct?: DataAviUpgradestatusinfoHistoryStateLastChangedTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviUpgradestatusinfoHistoryStateLastChangedTimeToHclTerraform(struct?: DataAviUpgradestatusinfoHistoryStateLastChangedTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviUpgradestatusinfoHistoryStateLastChangedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviUpgradestatusinfoHistoryStateLastChangedTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviUpgradestatusinfoHistoryStateLastChangedTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // secs - computed: true, optional: false, required: false
  public get secs() {
    return this.getStringAttribute('secs');
  }

  // usecs - computed: true, optional: false, required: false
  public get usecs() {
    return this.getStringAttribute('usecs');
  }
}

export class DataAviUpgradestatusinfoHistoryStateLastChangedTimeList extends cdktf.ComplexList {

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
  public get(index: number): DataAviUpgradestatusinfoHistoryStateLastChangedTimeOutputReference {
    return new DataAviUpgradestatusinfoHistoryStateLastChangedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviUpgradestatusinfoHistoryState {
}

export function dataAviUpgradestatusinfoHistoryStateToTerraform(struct?: DataAviUpgradestatusinfoHistoryState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviUpgradestatusinfoHistoryStateToHclTerraform(struct?: DataAviUpgradestatusinfoHistoryState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviUpgradestatusinfoHistoryStateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviUpgradestatusinfoHistoryState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviUpgradestatusinfoHistoryState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_changed_time - computed: true, optional: false, required: false
  private _lastChangedTime = new DataAviUpgradestatusinfoHistoryStateLastChangedTimeList(this, "last_changed_time", true);
  public get lastChangedTime() {
    return this._lastChangedTime;
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }

  // rebooted - computed: true, optional: false, required: false
  public get rebooted() {
    return this.getStringAttribute('rebooted');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class DataAviUpgradestatusinfoHistoryStateList extends cdktf.ComplexList {

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
  public get(index: number): DataAviUpgradestatusinfoHistoryStateOutputReference {
    return new DataAviUpgradestatusinfoHistoryStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviUpgradestatusinfoHistoryUpgradeEventsNodesEventsIp {
}

export function dataAviUpgradestatusinfoHistoryUpgradeEventsNodesEventsIpToTerraform(struct?: DataAviUpgradestatusinfoHistoryUpgradeEventsNodesEventsIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviUpgradestatusinfoHistoryUpgradeEventsNodesEventsIpToHclTerraform(struct?: DataAviUpgradestatusinfoHistoryUpgradeEventsNodesEventsIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviUpgradestatusinfoHistoryUpgradeEventsNodesEventsIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviUpgradestatusinfoHistoryUpgradeEventsNodesEventsIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviUpgradestatusinfoHistoryUpgradeEventsNodesEventsIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addr - computed: true, optional: false, required: false
  public get addr() {
    return this.getStringAttribute('addr');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviUpgradestatusinfoHistoryUpgradeEventsNodesEventsIpList extends cdktf.ComplexList {

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
  public get(index: number): DataAviUpgradestatusinfoHistoryUpgradeEventsNodesEventsIpOutputReference {
    return new DataAviUpgradestatusinfoHistoryUpgradeEventsNodesEventsIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviUpgradestatusinfoHistoryUpgradeEventsNodesEvents {
}

export function dataAviUpgradestatusinfoHistoryUpgradeEventsNodesEventsToTerraform(struct?: DataAviUpgradestatusinfoHistoryUpgradeEventsNodesEvents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviUpgradestatusinfoHistoryUpgradeEventsNodesEventsToHclTerraform(struct?: DataAviUpgradestatusinfoHistoryUpgradeEventsNodesEvents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviUpgradestatusinfoHistoryUpgradeEventsNodesEventsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviUpgradestatusinfoHistoryUpgradeEventsNodesEvents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviUpgradestatusinfoHistoryUpgradeEventsNodesEvents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getStringAttribute('duration');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // ip - computed: true, optional: false, required: false
  private _ip = new DataAviUpgradestatusinfoHistoryUpgradeEventsNodesEventsIpList(this, "ip", true);
  public get ip() {
    return this._ip;
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // sub_tasks - computed: true, optional: false, required: false
  public get subTasks() {
    return this.getListAttribute('sub_tasks');
  }
}

export class DataAviUpgradestatusinfoHistoryUpgradeEventsNodesEventsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviUpgradestatusinfoHistoryUpgradeEventsNodesEventsOutputReference {
    return new DataAviUpgradestatusinfoHistoryUpgradeEventsNodesEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviUpgradestatusinfoHistoryUpgradeEventsSubEventsIp {
}

export function dataAviUpgradestatusinfoHistoryUpgradeEventsSubEventsIpToTerraform(struct?: DataAviUpgradestatusinfoHistoryUpgradeEventsSubEventsIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviUpgradestatusinfoHistoryUpgradeEventsSubEventsIpToHclTerraform(struct?: DataAviUpgradestatusinfoHistoryUpgradeEventsSubEventsIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviUpgradestatusinfoHistoryUpgradeEventsSubEventsIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviUpgradestatusinfoHistoryUpgradeEventsSubEventsIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviUpgradestatusinfoHistoryUpgradeEventsSubEventsIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addr - computed: true, optional: false, required: false
  public get addr() {
    return this.getStringAttribute('addr');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviUpgradestatusinfoHistoryUpgradeEventsSubEventsIpList extends cdktf.ComplexList {

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
  public get(index: number): DataAviUpgradestatusinfoHistoryUpgradeEventsSubEventsIpOutputReference {
    return new DataAviUpgradestatusinfoHistoryUpgradeEventsSubEventsIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviUpgradestatusinfoHistoryUpgradeEventsSubEvents {
}

export function dataAviUpgradestatusinfoHistoryUpgradeEventsSubEventsToTerraform(struct?: DataAviUpgradestatusinfoHistoryUpgradeEventsSubEvents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviUpgradestatusinfoHistoryUpgradeEventsSubEventsToHclTerraform(struct?: DataAviUpgradestatusinfoHistoryUpgradeEventsSubEvents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviUpgradestatusinfoHistoryUpgradeEventsSubEventsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviUpgradestatusinfoHistoryUpgradeEventsSubEvents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviUpgradestatusinfoHistoryUpgradeEventsSubEvents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getStringAttribute('duration');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // ip - computed: true, optional: false, required: false
  private _ip = new DataAviUpgradestatusinfoHistoryUpgradeEventsSubEventsIpList(this, "ip", true);
  public get ip() {
    return this._ip;
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // sub_tasks - computed: true, optional: false, required: false
  public get subTasks() {
    return this.getListAttribute('sub_tasks');
  }
}

export class DataAviUpgradestatusinfoHistoryUpgradeEventsSubEventsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviUpgradestatusinfoHistoryUpgradeEventsSubEventsOutputReference {
    return new DataAviUpgradestatusinfoHistoryUpgradeEventsSubEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviUpgradestatusinfoHistoryUpgradeEvents {
}

export function dataAviUpgradestatusinfoHistoryUpgradeEventsToTerraform(struct?: DataAviUpgradestatusinfoHistoryUpgradeEvents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviUpgradestatusinfoHistoryUpgradeEventsToHclTerraform(struct?: DataAviUpgradestatusinfoHistoryUpgradeEvents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviUpgradestatusinfoHistoryUpgradeEventsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviUpgradestatusinfoHistoryUpgradeEvents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviUpgradestatusinfoHistoryUpgradeEvents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // nodes_events - computed: true, optional: false, required: false
  private _nodesEvents = new DataAviUpgradestatusinfoHistoryUpgradeEventsNodesEventsList(this, "nodes_events", false);
  public get nodesEvents() {
    return this._nodesEvents;
  }

  // sub_events - computed: true, optional: false, required: false
  private _subEvents = new DataAviUpgradestatusinfoHistoryUpgradeEventsSubEventsList(this, "sub_events", false);
  public get subEvents() {
    return this._subEvents;
  }

  // task - computed: true, optional: false, required: false
  public get task() {
    return this.getStringAttribute('task');
  }

  // task_name - computed: true, optional: false, required: false
  public get taskName() {
    return this.getStringAttribute('task_name');
  }
}

export class DataAviUpgradestatusinfoHistoryUpgradeEventsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviUpgradestatusinfoHistoryUpgradeEventsOutputReference {
    return new DataAviUpgradestatusinfoHistoryUpgradeEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviUpgradestatusinfoHistory {
}

export function dataAviUpgradestatusinfoHistoryToTerraform(struct?: DataAviUpgradestatusinfoHistory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviUpgradestatusinfoHistoryToHclTerraform(struct?: DataAviUpgradestatusinfoHistory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviUpgradestatusinfoHistoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviUpgradestatusinfoHistory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviUpgradestatusinfoHistory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getStringAttribute('duration');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // ops - computed: true, optional: false, required: false
  public get ops() {
    return this.getStringAttribute('ops');
  }

  // patch_version - computed: true, optional: false, required: false
  public get patchVersion() {
    return this.getStringAttribute('patch_version');
  }

  // se_upgrade_events - computed: true, optional: false, required: false
  private _seUpgradeEvents = new DataAviUpgradestatusinfoHistorySeUpgradeEventsList(this, "se_upgrade_events", false);
  public get seUpgradeEvents() {
    return this._seUpgradeEvents;
  }

  // seg_status - computed: true, optional: false, required: false
  private _segStatus = new DataAviUpgradestatusinfoHistorySegStatusList(this, "seg_status", true);
  public get segStatus() {
    return this._segStatus;
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // state - computed: true, optional: false, required: false
  private _state = new DataAviUpgradestatusinfoHistoryStateList(this, "state", true);
  public get state() {
    return this._state;
  }

  // statediff_ref - computed: true, optional: false, required: false
  public get statediffRef() {
    return this.getStringAttribute('statediff_ref');
  }

  // upgrade_events - computed: true, optional: false, required: false
  private _upgradeEvents = new DataAviUpgradestatusinfoHistoryUpgradeEventsList(this, "upgrade_events", false);
  public get upgradeEvents() {
    return this._upgradeEvents;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataAviUpgradestatusinfoHistoryList extends cdktf.ComplexList {

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
  public get(index: number): DataAviUpgradestatusinfoHistoryOutputReference {
    return new DataAviUpgradestatusinfoHistoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviUpgradestatusinfoParamsSeGroupOptions {
}

export function dataAviUpgradestatusinfoParamsSeGroupOptionsToTerraform(struct?: DataAviUpgradestatusinfoParamsSeGroupOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviUpgradestatusinfoParamsSeGroupOptionsToHclTerraform(struct?: DataAviUpgradestatusinfoParamsSeGroupOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviUpgradestatusinfoParamsSeGroupOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviUpgradestatusinfoParamsSeGroupOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviUpgradestatusinfoParamsSeGroupOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_on_error - computed: true, optional: false, required: false
  public get actionOnError() {
    return this.getStringAttribute('action_on_error');
  }

  // disruptive - computed: true, optional: false, required: false
  public get disruptive() {
    return this.getStringAttribute('disruptive');
  }
}

export class DataAviUpgradestatusinfoParamsSeGroupOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviUpgradestatusinfoParamsSeGroupOptionsOutputReference {
    return new DataAviUpgradestatusinfoParamsSeGroupOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviUpgradestatusinfoParamsSeGroupResumeOptions {
}

export function dataAviUpgradestatusinfoParamsSeGroupResumeOptionsToTerraform(struct?: DataAviUpgradestatusinfoParamsSeGroupResumeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviUpgradestatusinfoParamsSeGroupResumeOptionsToHclTerraform(struct?: DataAviUpgradestatusinfoParamsSeGroupResumeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviUpgradestatusinfoParamsSeGroupResumeOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviUpgradestatusinfoParamsSeGroupResumeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviUpgradestatusinfoParamsSeGroupResumeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_on_error - computed: true, optional: false, required: false
  public get actionOnError() {
    return this.getStringAttribute('action_on_error');
  }

  // disruptive - computed: true, optional: false, required: false
  public get disruptive() {
    return this.getStringAttribute('disruptive');
  }

  // skip_suspended - computed: true, optional: false, required: false
  public get skipSuspended() {
    return this.getStringAttribute('skip_suspended');
  }
}

export class DataAviUpgradestatusinfoParamsSeGroupResumeOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviUpgradestatusinfoParamsSeGroupResumeOptionsOutputReference {
    return new DataAviUpgradestatusinfoParamsSeGroupResumeOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviUpgradestatusinfoParams {
}

export function dataAviUpgradestatusinfoParamsToTerraform(struct?: DataAviUpgradestatusinfoParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviUpgradestatusinfoParamsToHclTerraform(struct?: DataAviUpgradestatusinfoParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviUpgradestatusinfoParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviUpgradestatusinfoParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviUpgradestatusinfoParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // image_ref - computed: true, optional: false, required: false
  public get imageRef() {
    return this.getStringAttribute('image_ref');
  }

  // patch_ref - computed: true, optional: false, required: false
  public get patchRef() {
    return this.getStringAttribute('patch_ref');
  }

  // se_group_options - computed: true, optional: false, required: false
  private _seGroupOptions = new DataAviUpgradestatusinfoParamsSeGroupOptionsList(this, "se_group_options", true);
  public get seGroupOptions() {
    return this._seGroupOptions;
  }

  // se_group_resume_options - computed: true, optional: false, required: false
  private _seGroupResumeOptions = new DataAviUpgradestatusinfoParamsSeGroupResumeOptionsList(this, "se_group_resume_options", true);
  public get seGroupResumeOptions() {
    return this._seGroupResumeOptions;
  }
}

export class DataAviUpgradestatusinfoParamsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviUpgradestatusinfoParamsOutputReference {
    return new DataAviUpgradestatusinfoParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviUpgradestatusinfoPatchListStruct {
}

export function dataAviUpgradestatusinfoPatchListStructToTerraform(struct?: DataAviUpgradestatusinfoPatchListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviUpgradestatusinfoPatchListStructToHclTerraform(struct?: DataAviUpgradestatusinfoPatchListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviUpgradestatusinfoPatchListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviUpgradestatusinfoPatchListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviUpgradestatusinfoPatchListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // patch_image_path - computed: true, optional: false, required: false
  public get patchImagePath() {
    return this.getStringAttribute('patch_image_path');
  }

  // patch_image_ref - computed: true, optional: false, required: false
  public get patchImageRef() {
    return this.getStringAttribute('patch_image_ref');
  }

  // patch_version - computed: true, optional: false, required: false
  public get patchVersion() {
    return this.getStringAttribute('patch_version');
  }
}

export class DataAviUpgradestatusinfoPatchListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataAviUpgradestatusinfoPatchListStructOutputReference {
    return new DataAviUpgradestatusinfoPatchListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviUpgradestatusinfoPreviousPatchListStruct {
}

export function dataAviUpgradestatusinfoPreviousPatchListStructToTerraform(struct?: DataAviUpgradestatusinfoPreviousPatchListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviUpgradestatusinfoPreviousPatchListStructToHclTerraform(struct?: DataAviUpgradestatusinfoPreviousPatchListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviUpgradestatusinfoPreviousPatchListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviUpgradestatusinfoPreviousPatchListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviUpgradestatusinfoPreviousPatchListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // patch_image_path - computed: true, optional: false, required: false
  public get patchImagePath() {
    return this.getStringAttribute('patch_image_path');
  }

  // patch_image_ref - computed: true, optional: false, required: false
  public get patchImageRef() {
    return this.getStringAttribute('patch_image_ref');
  }

  // patch_version - computed: true, optional: false, required: false
  public get patchVersion() {
    return this.getStringAttribute('patch_version');
  }
}

export class DataAviUpgradestatusinfoPreviousPatchListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataAviUpgradestatusinfoPreviousPatchListStructOutputReference {
    return new DataAviUpgradestatusinfoPreviousPatchListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviUpgradestatusinfoSeUpgradeEvents {
}

export function dataAviUpgradestatusinfoSeUpgradeEventsToTerraform(struct?: DataAviUpgradestatusinfoSeUpgradeEvents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviUpgradestatusinfoSeUpgradeEventsToHclTerraform(struct?: DataAviUpgradestatusinfoSeUpgradeEvents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviUpgradestatusinfoSeUpgradeEventsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviUpgradestatusinfoSeUpgradeEvents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviUpgradestatusinfoSeUpgradeEvents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // from_se_ref - computed: true, optional: false, required: false
  public get fromSeRef() {
    return this.getStringAttribute('from_se_ref');
  }

  // num_se - computed: true, optional: false, required: false
  public get numSe() {
    return this.getStringAttribute('num_se');
  }

  // num_se_group - computed: true, optional: false, required: false
  public get numSeGroup() {
    return this.getStringAttribute('num_se_group');
  }

  // num_vs - computed: true, optional: false, required: false
  public get numVs() {
    return this.getStringAttribute('num_vs');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getListAttribute('reason');
  }

  // se_group_ha_mode - computed: true, optional: false, required: false
  public get seGroupHaMode() {
    return this.getStringAttribute('se_group_ha_mode');
  }

  // se_group_ref - computed: true, optional: false, required: false
  public get seGroupRef() {
    return this.getStringAttribute('se_group_ref');
  }

  // se_ref - computed: true, optional: false, required: false
  public get seRef() {
    return this.getStringAttribute('se_ref');
  }

  // sub_tasks - computed: true, optional: false, required: false
  public get subTasks() {
    return this.getListAttribute('sub_tasks');
  }

  // task - computed: true, optional: false, required: false
  public get task() {
    return this.getStringAttribute('task');
  }

  // to_se_ref - computed: true, optional: false, required: false
  public get toSeRef() {
    return this.getStringAttribute('to_se_ref');
  }

  // traffic_status - computed: true, optional: false, required: false
  public get trafficStatus() {
    return this.getStringAttribute('traffic_status');
  }

  // vs_ref - computed: true, optional: false, required: false
  public get vsRef() {
    return this.getStringAttribute('vs_ref');
  }
}

export class DataAviUpgradestatusinfoSeUpgradeEventsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviUpgradestatusinfoSeUpgradeEventsOutputReference {
    return new DataAviUpgradestatusinfoSeUpgradeEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviUpgradestatusinfoSegParamsSeGroupOptions {
}

export function dataAviUpgradestatusinfoSegParamsSeGroupOptionsToTerraform(struct?: DataAviUpgradestatusinfoSegParamsSeGroupOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviUpgradestatusinfoSegParamsSeGroupOptionsToHclTerraform(struct?: DataAviUpgradestatusinfoSegParamsSeGroupOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviUpgradestatusinfoSegParamsSeGroupOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviUpgradestatusinfoSegParamsSeGroupOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviUpgradestatusinfoSegParamsSeGroupOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_on_error - computed: true, optional: false, required: false
  public get actionOnError() {
    return this.getStringAttribute('action_on_error');
  }

  // disruptive - computed: true, optional: false, required: false
  public get disruptive() {
    return this.getStringAttribute('disruptive');
  }
}

export class DataAviUpgradestatusinfoSegParamsSeGroupOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviUpgradestatusinfoSegParamsSeGroupOptionsOutputReference {
    return new DataAviUpgradestatusinfoSegParamsSeGroupOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviUpgradestatusinfoSegParamsSeGroupResumeOptions {
}

export function dataAviUpgradestatusinfoSegParamsSeGroupResumeOptionsToTerraform(struct?: DataAviUpgradestatusinfoSegParamsSeGroupResumeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviUpgradestatusinfoSegParamsSeGroupResumeOptionsToHclTerraform(struct?: DataAviUpgradestatusinfoSegParamsSeGroupResumeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviUpgradestatusinfoSegParamsSeGroupResumeOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviUpgradestatusinfoSegParamsSeGroupResumeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviUpgradestatusinfoSegParamsSeGroupResumeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_on_error - computed: true, optional: false, required: false
  public get actionOnError() {
    return this.getStringAttribute('action_on_error');
  }

  // disruptive - computed: true, optional: false, required: false
  public get disruptive() {
    return this.getStringAttribute('disruptive');
  }

  // skip_suspended - computed: true, optional: false, required: false
  public get skipSuspended() {
    return this.getStringAttribute('skip_suspended');
  }
}

export class DataAviUpgradestatusinfoSegParamsSeGroupResumeOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviUpgradestatusinfoSegParamsSeGroupResumeOptionsOutputReference {
    return new DataAviUpgradestatusinfoSegParamsSeGroupResumeOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviUpgradestatusinfoSegParams {
}

export function dataAviUpgradestatusinfoSegParamsToTerraform(struct?: DataAviUpgradestatusinfoSegParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviUpgradestatusinfoSegParamsToHclTerraform(struct?: DataAviUpgradestatusinfoSegParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviUpgradestatusinfoSegParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviUpgradestatusinfoSegParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviUpgradestatusinfoSegParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // image_ref - computed: true, optional: false, required: false
  public get imageRef() {
    return this.getStringAttribute('image_ref');
  }

  // patch_ref - computed: true, optional: false, required: false
  public get patchRef() {
    return this.getStringAttribute('patch_ref');
  }

  // se_group_options - computed: true, optional: false, required: false
  private _seGroupOptions = new DataAviUpgradestatusinfoSegParamsSeGroupOptionsList(this, "se_group_options", true);
  public get seGroupOptions() {
    return this._seGroupOptions;
  }

  // se_group_resume_options - computed: true, optional: false, required: false
  private _seGroupResumeOptions = new DataAviUpgradestatusinfoSegParamsSeGroupResumeOptionsList(this, "se_group_resume_options", true);
  public get seGroupResumeOptions() {
    return this._seGroupResumeOptions;
  }
}

export class DataAviUpgradestatusinfoSegParamsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviUpgradestatusinfoSegParamsOutputReference {
    return new DataAviUpgradestatusinfoSegParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviUpgradestatusinfoSegStatusSeUpgradeErrors {
}

export function dataAviUpgradestatusinfoSegStatusSeUpgradeErrorsToTerraform(struct?: DataAviUpgradestatusinfoSegStatusSeUpgradeErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviUpgradestatusinfoSegStatusSeUpgradeErrorsToHclTerraform(struct?: DataAviUpgradestatusinfoSegStatusSeUpgradeErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviUpgradestatusinfoSegStatusSeUpgradeErrorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviUpgradestatusinfoSegStatusSeUpgradeErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviUpgradestatusinfoSegStatusSeUpgradeErrors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // from_se_ref - computed: true, optional: false, required: false
  public get fromSeRef() {
    return this.getStringAttribute('from_se_ref');
  }

  // num_se - computed: true, optional: false, required: false
  public get numSe() {
    return this.getStringAttribute('num_se');
  }

  // num_se_group - computed: true, optional: false, required: false
  public get numSeGroup() {
    return this.getStringAttribute('num_se_group');
  }

  // num_vs - computed: true, optional: false, required: false
  public get numVs() {
    return this.getStringAttribute('num_vs');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getListAttribute('reason');
  }

  // se_group_ha_mode - computed: true, optional: false, required: false
  public get seGroupHaMode() {
    return this.getStringAttribute('se_group_ha_mode');
  }

  // se_group_ref - computed: true, optional: false, required: false
  public get seGroupRef() {
    return this.getStringAttribute('se_group_ref');
  }

  // se_ref - computed: true, optional: false, required: false
  public get seRef() {
    return this.getStringAttribute('se_ref');
  }

  // sub_tasks - computed: true, optional: false, required: false
  public get subTasks() {
    return this.getListAttribute('sub_tasks');
  }

  // task - computed: true, optional: false, required: false
  public get task() {
    return this.getStringAttribute('task');
  }

  // to_se_ref - computed: true, optional: false, required: false
  public get toSeRef() {
    return this.getStringAttribute('to_se_ref');
  }

  // traffic_status - computed: true, optional: false, required: false
  public get trafficStatus() {
    return this.getStringAttribute('traffic_status');
  }

  // vs_ref - computed: true, optional: false, required: false
  public get vsRef() {
    return this.getStringAttribute('vs_ref');
  }
}

export class DataAviUpgradestatusinfoSegStatusSeUpgradeErrorsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviUpgradestatusinfoSegStatusSeUpgradeErrorsOutputReference {
    return new DataAviUpgradestatusinfoSegStatusSeUpgradeErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviUpgradestatusinfoSegStatusVsErrorsEventTimestamp {
}

export function dataAviUpgradestatusinfoSegStatusVsErrorsEventTimestampToTerraform(struct?: DataAviUpgradestatusinfoSegStatusVsErrorsEventTimestamp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviUpgradestatusinfoSegStatusVsErrorsEventTimestampToHclTerraform(struct?: DataAviUpgradestatusinfoSegStatusVsErrorsEventTimestamp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviUpgradestatusinfoSegStatusVsErrorsEventTimestampOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviUpgradestatusinfoSegStatusVsErrorsEventTimestamp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviUpgradestatusinfoSegStatusVsErrorsEventTimestamp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // secs - computed: true, optional: false, required: false
  public get secs() {
    return this.getStringAttribute('secs');
  }

  // usecs - computed: true, optional: false, required: false
  public get usecs() {
    return this.getStringAttribute('usecs');
  }
}

export class DataAviUpgradestatusinfoSegStatusVsErrorsEventTimestampList extends cdktf.ComplexList {

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
  public get(index: number): DataAviUpgradestatusinfoSegStatusVsErrorsEventTimestampOutputReference {
    return new DataAviUpgradestatusinfoSegStatusVsErrorsEventTimestampOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviUpgradestatusinfoSegStatusVsErrors {
}

export function dataAviUpgradestatusinfoSegStatusVsErrorsToTerraform(struct?: DataAviUpgradestatusinfoSegStatusVsErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviUpgradestatusinfoSegStatusVsErrorsToHclTerraform(struct?: DataAviUpgradestatusinfoSegStatusVsErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviUpgradestatusinfoSegStatusVsErrorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviUpgradestatusinfoSegStatusVsErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviUpgradestatusinfoSegStatusVsErrors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // event_timestamp - computed: true, optional: false, required: false
  private _eventTimestamp = new DataAviUpgradestatusinfoSegStatusVsErrorsEventTimestampList(this, "event_timestamp", true);
  public get eventTimestamp() {
    return this._eventTimestamp;
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getListAttribute('reason');
  }

  // se_group_ha_mode - computed: true, optional: false, required: false
  public get seGroupHaMode() {
    return this.getStringAttribute('se_group_ha_mode');
  }

  // se_group_ref - computed: true, optional: false, required: false
  public get seGroupRef() {
    return this.getStringAttribute('se_group_ref');
  }

  // se_ref - computed: true, optional: false, required: false
  public get seRef() {
    return this.getStringAttribute('se_ref');
  }

  // tenant_ref - computed: true, optional: false, required: false
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }

  // traffic_status - computed: true, optional: false, required: false
  public get trafficStatus() {
    return this.getStringAttribute('traffic_status');
  }

  // vip_id - computed: true, optional: false, required: false
  public get vipId() {
    return this.getStringAttribute('vip_id');
  }

  // vs_ref - computed: true, optional: false, required: false
  public get vsRef() {
    return this.getStringAttribute('vs_ref');
  }
}

export class DataAviUpgradestatusinfoSegStatusVsErrorsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviUpgradestatusinfoSegStatusVsErrorsOutputReference {
    return new DataAviUpgradestatusinfoSegStatusVsErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviUpgradestatusinfoSegStatus {
}

export function dataAviUpgradestatusinfoSegStatusToTerraform(struct?: DataAviUpgradestatusinfoSegStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviUpgradestatusinfoSegStatusToHclTerraform(struct?: DataAviUpgradestatusinfoSegStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviUpgradestatusinfoSegStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviUpgradestatusinfoSegStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviUpgradestatusinfoSegStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // controller_version - computed: true, optional: false, required: false
  public get controllerVersion() {
    return this.getStringAttribute('controller_version');
  }

  // disrupted_vs_ref - computed: true, optional: false, required: false
  public get disruptedVsRef() {
    return this.getListAttribute('disrupted_vs_ref');
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getStringAttribute('duration');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // enqueue_time - computed: true, optional: false, required: false
  public get enqueueTime() {
    return this.getStringAttribute('enqueue_time');
  }

  // ha_mode - computed: true, optional: false, required: false
  public get haMode() {
    return this.getStringAttribute('ha_mode');
  }

  // in_progress - computed: true, optional: false, required: false
  public get inProgress() {
    return this.getStringAttribute('in_progress');
  }

  // notes - computed: true, optional: false, required: false
  public get notes() {
    return this.getListAttribute('notes');
  }

  // num_se - computed: true, optional: false, required: false
  public get numSe() {
    return this.getStringAttribute('num_se');
  }

  // num_se_with_no_vs - computed: true, optional: false, required: false
  public get numSeWithNoVs() {
    return this.getStringAttribute('num_se_with_no_vs');
  }

  // num_se_with_vs_not_scaledout - computed: true, optional: false, required: false
  public get numSeWithVsNotScaledout() {
    return this.getStringAttribute('num_se_with_vs_not_scaledout');
  }

  // num_se_with_vs_scaledout - computed: true, optional: false, required: false
  public get numSeWithVsScaledout() {
    return this.getStringAttribute('num_se_with_vs_scaledout');
  }

  // num_vs - computed: true, optional: false, required: false
  public get numVs() {
    return this.getStringAttribute('num_vs');
  }

  // num_vs_disrupted - computed: true, optional: false, required: false
  public get numVsDisrupted() {
    return this.getStringAttribute('num_vs_disrupted');
  }

  // progress - computed: true, optional: false, required: false
  public get progress() {
    return this.getStringAttribute('progress');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getListAttribute('reason');
  }

  // request_time - computed: true, optional: false, required: false
  public get requestTime() {
    return this.getStringAttribute('request_time');
  }

  // se_already_upgraded_at_start - computed: true, optional: false, required: false
  public get seAlreadyUpgradedAtStart() {
    return this.getListAttribute('se_already_upgraded_at_start');
  }

  // se_disconnected_at_start - computed: true, optional: false, required: false
  public get seDisconnectedAtStart() {
    return this.getListAttribute('se_disconnected_at_start');
  }

  // se_group_name - computed: true, optional: false, required: false
  public get seGroupName() {
    return this.getStringAttribute('se_group_name');
  }

  // se_group_uuid - computed: true, optional: false, required: false
  public get seGroupUuid() {
    return this.getStringAttribute('se_group_uuid');
  }

  // se_ip_missing_at_start - computed: true, optional: false, required: false
  public get seIpMissingAtStart() {
    return this.getListAttribute('se_ip_missing_at_start');
  }

  // se_poweredoff_at_start - computed: true, optional: false, required: false
  public get sePoweredoffAtStart() {
    return this.getListAttribute('se_poweredoff_at_start');
  }

  // se_reboot_in_progress_ref - computed: true, optional: false, required: false
  public get seRebootInProgressRef() {
    return this.getStringAttribute('se_reboot_in_progress_ref');
  }

  // se_upgrade_completed - computed: true, optional: false, required: false
  public get seUpgradeCompleted() {
    return this.getListAttribute('se_upgrade_completed');
  }

  // se_upgrade_errors - computed: true, optional: false, required: false
  private _seUpgradeErrors = new DataAviUpgradestatusinfoSegStatusSeUpgradeErrorsList(this, "se_upgrade_errors", false);
  public get seUpgradeErrors() {
    return this._seUpgradeErrors;
  }

  // se_upgrade_failed - computed: true, optional: false, required: false
  public get seUpgradeFailed() {
    return this.getListAttribute('se_upgrade_failed');
  }

  // se_upgrade_in_progress - computed: true, optional: false, required: false
  public get seUpgradeInProgress() {
    return this.getListAttribute('se_upgrade_in_progress');
  }

  // se_upgrade_not_started - computed: true, optional: false, required: false
  public get seUpgradeNotStarted() {
    return this.getListAttribute('se_upgrade_not_started');
  }

  // se_upgrade_skip_suspended - computed: true, optional: false, required: false
  public get seUpgradeSkipSuspended() {
    return this.getListAttribute('se_upgrade_skip_suspended');
  }

  // se_upgrade_suspended - computed: true, optional: false, required: false
  public get seUpgradeSuspended() {
    return this.getListAttribute('se_upgrade_suspended');
  }

  // se_with_no_vs - computed: true, optional: false, required: false
  public get seWithNoVs() {
    return this.getListAttribute('se_with_no_vs');
  }

  // se_with_vs_not_scaledout - computed: true, optional: false, required: false
  public get seWithVsNotScaledout() {
    return this.getListAttribute('se_with_vs_not_scaledout');
  }

  // se_with_vs_scaledout - computed: true, optional: false, required: false
  public get seWithVsScaledout() {
    return this.getListAttribute('se_with_vs_scaledout');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tenant_ref - computed: true, optional: false, required: false
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }

  // thread - computed: true, optional: false, required: false
  public get thread() {
    return this.getStringAttribute('thread');
  }

  // traffic_status - computed: true, optional: false, required: false
  public get trafficStatus() {
    return this.getStringAttribute('traffic_status');
  }

  // vs_errors - computed: true, optional: false, required: false
  private _vsErrors = new DataAviUpgradestatusinfoSegStatusVsErrorsList(this, "vs_errors", false);
  public get vsErrors() {
    return this._vsErrors;
  }

  // vs_migrate_in_progress_ref - computed: true, optional: false, required: false
  public get vsMigrateInProgressRef() {
    return this.getListAttribute('vs_migrate_in_progress_ref');
  }

  // vs_scalein_in_progress_ref - computed: true, optional: false, required: false
  public get vsScaleinInProgressRef() {
    return this.getListAttribute('vs_scalein_in_progress_ref');
  }

  // vs_scaleout_in_progress_ref - computed: true, optional: false, required: false
  public get vsScaleoutInProgressRef() {
    return this.getListAttribute('vs_scaleout_in_progress_ref');
  }

  // worker - computed: true, optional: false, required: false
  public get worker() {
    return this.getStringAttribute('worker');
  }
}

export class DataAviUpgradestatusinfoSegStatusList extends cdktf.ComplexList {

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
  public get(index: number): DataAviUpgradestatusinfoSegStatusOutputReference {
    return new DataAviUpgradestatusinfoSegStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviUpgradestatusinfoStateLastChangedTime {
}

export function dataAviUpgradestatusinfoStateLastChangedTimeToTerraform(struct?: DataAviUpgradestatusinfoStateLastChangedTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviUpgradestatusinfoStateLastChangedTimeToHclTerraform(struct?: DataAviUpgradestatusinfoStateLastChangedTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviUpgradestatusinfoStateLastChangedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviUpgradestatusinfoStateLastChangedTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviUpgradestatusinfoStateLastChangedTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // secs - computed: true, optional: false, required: false
  public get secs() {
    return this.getStringAttribute('secs');
  }

  // usecs - computed: true, optional: false, required: false
  public get usecs() {
    return this.getStringAttribute('usecs');
  }
}

export class DataAviUpgradestatusinfoStateLastChangedTimeList extends cdktf.ComplexList {

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
  public get(index: number): DataAviUpgradestatusinfoStateLastChangedTimeOutputReference {
    return new DataAviUpgradestatusinfoStateLastChangedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviUpgradestatusinfoState {
}

export function dataAviUpgradestatusinfoStateToTerraform(struct?: DataAviUpgradestatusinfoState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviUpgradestatusinfoStateToHclTerraform(struct?: DataAviUpgradestatusinfoState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviUpgradestatusinfoStateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviUpgradestatusinfoState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviUpgradestatusinfoState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_changed_time - computed: true, optional: false, required: false
  private _lastChangedTime = new DataAviUpgradestatusinfoStateLastChangedTimeList(this, "last_changed_time", true);
  public get lastChangedTime() {
    return this._lastChangedTime;
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }

  // rebooted - computed: true, optional: false, required: false
  public get rebooted() {
    return this.getStringAttribute('rebooted');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class DataAviUpgradestatusinfoStateList extends cdktf.ComplexList {

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
  public get(index: number): DataAviUpgradestatusinfoStateOutputReference {
    return new DataAviUpgradestatusinfoStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviUpgradestatusinfoUpgradeEventsNodesEventsIp {
}

export function dataAviUpgradestatusinfoUpgradeEventsNodesEventsIpToTerraform(struct?: DataAviUpgradestatusinfoUpgradeEventsNodesEventsIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviUpgradestatusinfoUpgradeEventsNodesEventsIpToHclTerraform(struct?: DataAviUpgradestatusinfoUpgradeEventsNodesEventsIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviUpgradestatusinfoUpgradeEventsNodesEventsIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviUpgradestatusinfoUpgradeEventsNodesEventsIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviUpgradestatusinfoUpgradeEventsNodesEventsIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addr - computed: true, optional: false, required: false
  public get addr() {
    return this.getStringAttribute('addr');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviUpgradestatusinfoUpgradeEventsNodesEventsIpList extends cdktf.ComplexList {

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
  public get(index: number): DataAviUpgradestatusinfoUpgradeEventsNodesEventsIpOutputReference {
    return new DataAviUpgradestatusinfoUpgradeEventsNodesEventsIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviUpgradestatusinfoUpgradeEventsNodesEvents {
}

export function dataAviUpgradestatusinfoUpgradeEventsNodesEventsToTerraform(struct?: DataAviUpgradestatusinfoUpgradeEventsNodesEvents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviUpgradestatusinfoUpgradeEventsNodesEventsToHclTerraform(struct?: DataAviUpgradestatusinfoUpgradeEventsNodesEvents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviUpgradestatusinfoUpgradeEventsNodesEventsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviUpgradestatusinfoUpgradeEventsNodesEvents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviUpgradestatusinfoUpgradeEventsNodesEvents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getStringAttribute('duration');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // ip - computed: true, optional: false, required: false
  private _ip = new DataAviUpgradestatusinfoUpgradeEventsNodesEventsIpList(this, "ip", true);
  public get ip() {
    return this._ip;
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // sub_tasks - computed: true, optional: false, required: false
  public get subTasks() {
    return this.getListAttribute('sub_tasks');
  }
}

export class DataAviUpgradestatusinfoUpgradeEventsNodesEventsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviUpgradestatusinfoUpgradeEventsNodesEventsOutputReference {
    return new DataAviUpgradestatusinfoUpgradeEventsNodesEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviUpgradestatusinfoUpgradeEventsSubEventsIp {
}

export function dataAviUpgradestatusinfoUpgradeEventsSubEventsIpToTerraform(struct?: DataAviUpgradestatusinfoUpgradeEventsSubEventsIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviUpgradestatusinfoUpgradeEventsSubEventsIpToHclTerraform(struct?: DataAviUpgradestatusinfoUpgradeEventsSubEventsIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviUpgradestatusinfoUpgradeEventsSubEventsIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviUpgradestatusinfoUpgradeEventsSubEventsIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviUpgradestatusinfoUpgradeEventsSubEventsIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addr - computed: true, optional: false, required: false
  public get addr() {
    return this.getStringAttribute('addr');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviUpgradestatusinfoUpgradeEventsSubEventsIpList extends cdktf.ComplexList {

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
  public get(index: number): DataAviUpgradestatusinfoUpgradeEventsSubEventsIpOutputReference {
    return new DataAviUpgradestatusinfoUpgradeEventsSubEventsIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviUpgradestatusinfoUpgradeEventsSubEvents {
}

export function dataAviUpgradestatusinfoUpgradeEventsSubEventsToTerraform(struct?: DataAviUpgradestatusinfoUpgradeEventsSubEvents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviUpgradestatusinfoUpgradeEventsSubEventsToHclTerraform(struct?: DataAviUpgradestatusinfoUpgradeEventsSubEvents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviUpgradestatusinfoUpgradeEventsSubEventsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviUpgradestatusinfoUpgradeEventsSubEvents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviUpgradestatusinfoUpgradeEventsSubEvents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getStringAttribute('duration');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // ip - computed: true, optional: false, required: false
  private _ip = new DataAviUpgradestatusinfoUpgradeEventsSubEventsIpList(this, "ip", true);
  public get ip() {
    return this._ip;
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // sub_tasks - computed: true, optional: false, required: false
  public get subTasks() {
    return this.getListAttribute('sub_tasks');
  }
}

export class DataAviUpgradestatusinfoUpgradeEventsSubEventsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviUpgradestatusinfoUpgradeEventsSubEventsOutputReference {
    return new DataAviUpgradestatusinfoUpgradeEventsSubEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviUpgradestatusinfoUpgradeEvents {
}

export function dataAviUpgradestatusinfoUpgradeEventsToTerraform(struct?: DataAviUpgradestatusinfoUpgradeEvents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviUpgradestatusinfoUpgradeEventsToHclTerraform(struct?: DataAviUpgradestatusinfoUpgradeEvents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviUpgradestatusinfoUpgradeEventsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviUpgradestatusinfoUpgradeEvents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviUpgradestatusinfoUpgradeEvents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // nodes_events - computed: true, optional: false, required: false
  private _nodesEvents = new DataAviUpgradestatusinfoUpgradeEventsNodesEventsList(this, "nodes_events", false);
  public get nodesEvents() {
    return this._nodesEvents;
  }

  // sub_events - computed: true, optional: false, required: false
  private _subEvents = new DataAviUpgradestatusinfoUpgradeEventsSubEventsList(this, "sub_events", false);
  public get subEvents() {
    return this._subEvents;
  }

  // task - computed: true, optional: false, required: false
  public get task() {
    return this.getStringAttribute('task');
  }

  // task_name - computed: true, optional: false, required: false
  public get taskName() {
    return this.getStringAttribute('task_name');
  }
}

export class DataAviUpgradestatusinfoUpgradeEventsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviUpgradestatusinfoUpgradeEventsOutputReference {
    return new DataAviUpgradestatusinfoUpgradeEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviUpgradestatusinfoUpgradeReadinessChecks {
}

export function dataAviUpgradestatusinfoUpgradeReadinessChecksToTerraform(struct?: DataAviUpgradestatusinfoUpgradeReadinessChecks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviUpgradestatusinfoUpgradeReadinessChecksToHclTerraform(struct?: DataAviUpgradestatusinfoUpgradeReadinessChecks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviUpgradestatusinfoUpgradeReadinessChecksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviUpgradestatusinfoUpgradeReadinessChecks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviUpgradestatusinfoUpgradeReadinessChecks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // check_code - computed: true, optional: false, required: false
  public get checkCode() {
    return this.getStringAttribute('check_code');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // details - computed: true, optional: false, required: false
  public get details() {
    return this.getListAttribute('details');
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getStringAttribute('duration');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // error_details - computed: true, optional: false, required: false
  public get errorDetails() {
    return this.getListAttribute('error_details');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class DataAviUpgradestatusinfoUpgradeReadinessChecksList extends cdktf.ComplexList {

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
  public get(index: number): DataAviUpgradestatusinfoUpgradeReadinessChecksOutputReference {
    return new DataAviUpgradestatusinfoUpgradeReadinessChecksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviUpgradestatusinfoUpgradeReadinessStateLastChangedTime {
}

export function dataAviUpgradestatusinfoUpgradeReadinessStateLastChangedTimeToTerraform(struct?: DataAviUpgradestatusinfoUpgradeReadinessStateLastChangedTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviUpgradestatusinfoUpgradeReadinessStateLastChangedTimeToHclTerraform(struct?: DataAviUpgradestatusinfoUpgradeReadinessStateLastChangedTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviUpgradestatusinfoUpgradeReadinessStateLastChangedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviUpgradestatusinfoUpgradeReadinessStateLastChangedTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviUpgradestatusinfoUpgradeReadinessStateLastChangedTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // secs - computed: true, optional: false, required: false
  public get secs() {
    return this.getStringAttribute('secs');
  }

  // usecs - computed: true, optional: false, required: false
  public get usecs() {
    return this.getStringAttribute('usecs');
  }
}

export class DataAviUpgradestatusinfoUpgradeReadinessStateLastChangedTimeList extends cdktf.ComplexList {

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
  public get(index: number): DataAviUpgradestatusinfoUpgradeReadinessStateLastChangedTimeOutputReference {
    return new DataAviUpgradestatusinfoUpgradeReadinessStateLastChangedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviUpgradestatusinfoUpgradeReadinessState {
}

export function dataAviUpgradestatusinfoUpgradeReadinessStateToTerraform(struct?: DataAviUpgradestatusinfoUpgradeReadinessState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviUpgradestatusinfoUpgradeReadinessStateToHclTerraform(struct?: DataAviUpgradestatusinfoUpgradeReadinessState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviUpgradestatusinfoUpgradeReadinessStateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviUpgradestatusinfoUpgradeReadinessState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviUpgradestatusinfoUpgradeReadinessState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_changed_time - computed: true, optional: false, required: false
  private _lastChangedTime = new DataAviUpgradestatusinfoUpgradeReadinessStateLastChangedTimeList(this, "last_changed_time", true);
  public get lastChangedTime() {
    return this._lastChangedTime;
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }

  // rebooted - computed: true, optional: false, required: false
  public get rebooted() {
    return this.getStringAttribute('rebooted');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class DataAviUpgradestatusinfoUpgradeReadinessStateList extends cdktf.ComplexList {

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
  public get(index: number): DataAviUpgradestatusinfoUpgradeReadinessStateOutputReference {
    return new DataAviUpgradestatusinfoUpgradeReadinessStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviUpgradestatusinfoUpgradeReadiness {
}

export function dataAviUpgradestatusinfoUpgradeReadinessToTerraform(struct?: DataAviUpgradestatusinfoUpgradeReadiness): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviUpgradestatusinfoUpgradeReadinessToHclTerraform(struct?: DataAviUpgradestatusinfoUpgradeReadiness): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviUpgradestatusinfoUpgradeReadinessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviUpgradestatusinfoUpgradeReadiness | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviUpgradestatusinfoUpgradeReadiness | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // checks - computed: true, optional: false, required: false
  private _checks = new DataAviUpgradestatusinfoUpgradeReadinessChecksList(this, "checks", false);
  public get checks() {
    return this._checks;
  }

  // checks_completed - computed: true, optional: false, required: false
  public get checksCompleted() {
    return this.getStringAttribute('checks_completed');
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getStringAttribute('duration');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // image_ref - computed: true, optional: false, required: false
  public get imageRef() {
    return this.getStringAttribute('image_ref');
  }

  // patch_image_ref - computed: true, optional: false, required: false
  public get patchImageRef() {
    return this.getStringAttribute('patch_image_ref');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // state - computed: true, optional: false, required: false
  private _state = new DataAviUpgradestatusinfoUpgradeReadinessStateList(this, "state", true);
  public get state() {
    return this._state;
  }

  // total_checks - computed: true, optional: false, required: false
  public get totalChecks() {
    return this.getStringAttribute('total_checks');
  }

  // upgrade_ops - computed: true, optional: false, required: false
  public get upgradeOps() {
    return this.getStringAttribute('upgrade_ops');
  }
}

export class DataAviUpgradestatusinfoUpgradeReadinessList extends cdktf.ComplexList {

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
  public get(index: number): DataAviUpgradestatusinfoUpgradeReadinessOutputReference {
    return new DataAviUpgradestatusinfoUpgradeReadinessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/data-sources/upgradestatusinfo avi_upgradestatusinfo}
*/
export class DataAviUpgradestatusinfo extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_upgradestatusinfo";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAviUpgradestatusinfo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAviUpgradestatusinfo to import
  * @param importFromId The id of the existing DataAviUpgradestatusinfo that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/data-sources/upgradestatusinfo#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAviUpgradestatusinfo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_upgradestatusinfo", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/data-sources/upgradestatusinfo avi_upgradestatusinfo} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAviUpgradestatusinfoConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAviUpgradestatusinfoConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'avi_upgradestatusinfo',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '30.2.6',
        providerVersionConstraint: '30.2.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._tenantRef = config.tenantRef;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // after_reboot_rollback_fnc - computed: true, optional: false, required: false
  public get afterRebootRollbackFnc() {
    return this.getStringAttribute('after_reboot_rollback_fnc');
  }

  // after_reboot_task_name - computed: true, optional: false, required: false
  public get afterRebootTaskName() {
    return this.getStringAttribute('after_reboot_task_name');
  }

  // clean - computed: true, optional: false, required: false
  public get clean() {
    return this.getStringAttribute('clean');
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getStringAttribute('duration');
  }

  // enable_patch_rollback - computed: true, optional: false, required: false
  public get enablePatchRollback() {
    return this.getStringAttribute('enable_patch_rollback');
  }

  // enable_rollback - computed: true, optional: false, required: false
  public get enableRollback() {
    return this.getStringAttribute('enable_rollback');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // enqueue_time - computed: true, optional: false, required: false
  public get enqueueTime() {
    return this.getStringAttribute('enqueue_time');
  }

  // fips_mode - computed: true, optional: false, required: false
  public get fipsMode() {
    return this.getStringAttribute('fips_mode');
  }

  // history - computed: true, optional: false, required: false
  private _history = new DataAviUpgradestatusinfoHistoryList(this, "history", false);
  public get history() {
    return this._history;
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

  // image_path - computed: true, optional: false, required: false
  public get imagePath() {
    return this.getStringAttribute('image_path');
  }

  // image_ref - computed: true, optional: false, required: false
  public get imageRef() {
    return this.getStringAttribute('image_ref');
  }

  // name - computed: true, optional: true, required: false
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

  // node_type - computed: true, optional: false, required: false
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }

  // obj_cloud_ref - computed: true, optional: false, required: false
  public get objCloudRef() {
    return this.getStringAttribute('obj_cloud_ref');
  }

  // params - computed: true, optional: false, required: false
  private _params = new DataAviUpgradestatusinfoParamsList(this, "params", true);
  public get params() {
    return this._params;
  }

  // patch_image_path - computed: true, optional: false, required: false
  public get patchImagePath() {
    return this.getStringAttribute('patch_image_path');
  }

  // patch_image_ref - computed: true, optional: false, required: false
  public get patchImageRef() {
    return this.getStringAttribute('patch_image_ref');
  }

  // patch_list - computed: true, optional: false, required: false
  private _patchList = new DataAviUpgradestatusinfoPatchListStructList(this, "patch_list", false);
  public get patchList() {
    return this._patchList;
  }

  // patch_reboot - computed: true, optional: false, required: false
  public get patchReboot() {
    return this.getStringAttribute('patch_reboot');
  }

  // patch_version - computed: true, optional: false, required: false
  public get patchVersion() {
    return this.getStringAttribute('patch_version');
  }

  // prev_image_path - computed: true, optional: false, required: false
  public get prevImagePath() {
    return this.getStringAttribute('prev_image_path');
  }

  // prev_patch_image_path - computed: true, optional: false, required: false
  public get prevPatchImagePath() {
    return this.getStringAttribute('prev_patch_image_path');
  }

  // prev_remote_image_ref - computed: true, optional: false, required: false
  public get prevRemoteImageRef() {
    return this.getStringAttribute('prev_remote_image_ref');
  }

  // previous_image_ref - computed: true, optional: false, required: false
  public get previousImageRef() {
    return this.getStringAttribute('previous_image_ref');
  }

  // previous_patch_image_ref - computed: true, optional: false, required: false
  public get previousPatchImageRef() {
    return this.getStringAttribute('previous_patch_image_ref');
  }

  // previous_patch_list - computed: true, optional: false, required: false
  private _previousPatchList = new DataAviUpgradestatusinfoPreviousPatchListStructList(this, "previous_patch_list", false);
  public get previousPatchList() {
    return this._previousPatchList;
  }

  // previous_patch_version - computed: true, optional: false, required: false
  public get previousPatchVersion() {
    return this.getStringAttribute('previous_patch_version');
  }

  // previous_version - computed: true, optional: false, required: false
  public get previousVersion() {
    return this.getStringAttribute('previous_version');
  }

  // progress - computed: true, optional: false, required: false
  public get progress() {
    return this.getStringAttribute('progress');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }

  // remote_image_ref - computed: true, optional: false, required: false
  public get remoteImageRef() {
    return this.getStringAttribute('remote_image_ref');
  }

  // se_patch_image_path - computed: true, optional: false, required: false
  public get sePatchImagePath() {
    return this.getStringAttribute('se_patch_image_path');
  }

  // se_patch_image_ref - computed: true, optional: false, required: false
  public get sePatchImageRef() {
    return this.getStringAttribute('se_patch_image_ref');
  }

  // se_upgrade_events - computed: true, optional: false, required: false
  private _seUpgradeEvents = new DataAviUpgradestatusinfoSeUpgradeEventsList(this, "se_upgrade_events", false);
  public get seUpgradeEvents() {
    return this._seUpgradeEvents;
  }

  // seg_params - computed: true, optional: false, required: false
  private _segParams = new DataAviUpgradestatusinfoSegParamsList(this, "seg_params", true);
  public get segParams() {
    return this._segParams;
  }

  // seg_status - computed: true, optional: false, required: false
  private _segStatus = new DataAviUpgradestatusinfoSegStatusList(this, "seg_status", true);
  public get segStatus() {
    return this._segStatus;
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // state - computed: true, optional: false, required: false
  private _state = new DataAviUpgradestatusinfoStateList(this, "state", true);
  public get state() {
    return this._state;
  }

  // statediff_ref - computed: true, optional: false, required: false
  public get statediffRef() {
    return this.getStringAttribute('statediff_ref');
  }

  // system - computed: true, optional: false, required: false
  public get systemAttribute() {
    return this.getStringAttribute('system');
  }

  // system_report_refs - computed: true, optional: false, required: false
  public get systemReportRefs() {
    return this.getListAttribute('system_report_refs');
  }

  // tasks_completed - computed: true, optional: false, required: false
  public get tasksCompleted() {
    return this.getStringAttribute('tasks_completed');
  }

  // tenant_ref - computed: true, optional: true, required: false
  private _tenantRef?: string; 
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
  public set tenantRef(value: string) {
    this._tenantRef = value;
  }
  public resetTenantRef() {
    this._tenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefInput() {
    return this._tenantRef;
  }

  // total_tasks - computed: true, optional: false, required: false
  public get totalTasks() {
    return this.getStringAttribute('total_tasks');
  }

  // upgrade_events - computed: true, optional: false, required: false
  private _upgradeEvents = new DataAviUpgradestatusinfoUpgradeEventsList(this, "upgrade_events", false);
  public get upgradeEvents() {
    return this._upgradeEvents;
  }

  // upgrade_ops - computed: true, optional: false, required: false
  public get upgradeOps() {
    return this.getStringAttribute('upgrade_ops');
  }

  // upgrade_readiness - computed: true, optional: false, required: false
  private _upgradeReadiness = new DataAviUpgradestatusinfoUpgradeReadinessList(this, "upgrade_readiness", true);
  public get upgradeReadiness() {
    return this._upgradeReadiness;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
