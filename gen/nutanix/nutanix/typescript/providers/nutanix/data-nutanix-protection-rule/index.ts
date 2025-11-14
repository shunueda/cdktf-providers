// https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/protection_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNutanixProtectionRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/protection_rule#id DataNutanixProtectionRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/protection_rule#protection_rule_id DataNutanixProtectionRule#protection_rule_id}
  */
  readonly protectionRuleId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/protection_rule#protection_rule_name DataNutanixProtectionRule#protection_rule_name}
  */
  readonly protectionRuleName?: string;
  /**
  * categories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/protection_rule#categories DataNutanixProtectionRule#categories}
  */
  readonly categories?: DataNutanixProtectionRuleCategories[] | cdktf.IResolvable;
}
export interface DataNutanixProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListLocalSnapshotRetentionPolicy {
}

export function dataNutanixProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListLocalSnapshotRetentionPolicyToTerraform(struct?: DataNutanixProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListLocalSnapshotRetentionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListLocalSnapshotRetentionPolicyToHclTerraform(struct?: DataNutanixProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListLocalSnapshotRetentionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListLocalSnapshotRetentionPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListLocalSnapshotRetentionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListLocalSnapshotRetentionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // num_snapshots - computed: true, optional: false, required: false
  public get numSnapshots() {
    return this.getNumberAttribute('num_snapshots');
  }

  // rollup_retention_policy_multiple - computed: true, optional: false, required: false
  public get rollupRetentionPolicyMultiple() {
    return this.getNumberAttribute('rollup_retention_policy_multiple');
  }

  // rollup_retention_policy_snapshot_interval_type - computed: true, optional: false, required: false
  public get rollupRetentionPolicySnapshotIntervalType() {
    return this.getStringAttribute('rollup_retention_policy_snapshot_interval_type');
  }
}

export class DataNutanixProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListLocalSnapshotRetentionPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListLocalSnapshotRetentionPolicyOutputReference {
    return new DataNutanixProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListLocalSnapshotRetentionPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListRemoteSnapshotRetentionPolicy {
}

export function dataNutanixProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListRemoteSnapshotRetentionPolicyToTerraform(struct?: DataNutanixProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListRemoteSnapshotRetentionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListRemoteSnapshotRetentionPolicyToHclTerraform(struct?: DataNutanixProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListRemoteSnapshotRetentionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListRemoteSnapshotRetentionPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListRemoteSnapshotRetentionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListRemoteSnapshotRetentionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // num_snapshots - computed: true, optional: false, required: false
  public get numSnapshots() {
    return this.getNumberAttribute('num_snapshots');
  }

  // rollup_retention_policy_multiple - computed: true, optional: false, required: false
  public get rollupRetentionPolicyMultiple() {
    return this.getNumberAttribute('rollup_retention_policy_multiple');
  }

  // rollup_retention_policy_snapshot_interval_type - computed: true, optional: false, required: false
  public get rollupRetentionPolicySnapshotIntervalType() {
    return this.getStringAttribute('rollup_retention_policy_snapshot_interval_type');
  }
}

export class DataNutanixProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListRemoteSnapshotRetentionPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListRemoteSnapshotRetentionPolicyOutputReference {
    return new DataNutanixProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListRemoteSnapshotRetentionPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListStruct {
}

export function dataNutanixProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListStructToTerraform(struct?: DataNutanixProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListStructToHclTerraform(struct?: DataNutanixProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_suspend_timeout_secs - computed: true, optional: false, required: false
  public get autoSuspendTimeoutSecs() {
    return this.getNumberAttribute('auto_suspend_timeout_secs');
  }

  // local_snapshot_retention_policy - computed: true, optional: false, required: false
  private _localSnapshotRetentionPolicy = new DataNutanixProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListLocalSnapshotRetentionPolicyList(this, "local_snapshot_retention_policy", false);
  public get localSnapshotRetentionPolicy() {
    return this._localSnapshotRetentionPolicy;
  }

  // recovery_point_objective_secs - computed: true, optional: false, required: false
  public get recoveryPointObjectiveSecs() {
    return this.getNumberAttribute('recovery_point_objective_secs');
  }

  // remote_snapshot_retention_policy - computed: true, optional: false, required: false
  private _remoteSnapshotRetentionPolicy = new DataNutanixProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListRemoteSnapshotRetentionPolicyList(this, "remote_snapshot_retention_policy", false);
  public get remoteSnapshotRetentionPolicy() {
    return this._remoteSnapshotRetentionPolicy;
  }

  // snapshot_type - computed: true, optional: false, required: false
  public get snapshotType() {
    return this.getStringAttribute('snapshot_type');
  }
}

export class DataNutanixProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListStructOutputReference {
    return new DataNutanixProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixProtectionRuleAvailabilityZoneConnectivityListStruct {
}

export function dataNutanixProtectionRuleAvailabilityZoneConnectivityListStructToTerraform(struct?: DataNutanixProtectionRuleAvailabilityZoneConnectivityListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixProtectionRuleAvailabilityZoneConnectivityListStructToHclTerraform(struct?: DataNutanixProtectionRuleAvailabilityZoneConnectivityListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixProtectionRuleAvailabilityZoneConnectivityListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixProtectionRuleAvailabilityZoneConnectivityListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixProtectionRuleAvailabilityZoneConnectivityListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_availability_zone_index - computed: true, optional: false, required: false
  public get destinationAvailabilityZoneIndex() {
    return this.getNumberAttribute('destination_availability_zone_index');
  }

  // snapshot_schedule_list - computed: true, optional: false, required: false
  private _snapshotScheduleList = new DataNutanixProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListStructList(this, "snapshot_schedule_list", false);
  public get snapshotScheduleList() {
    return this._snapshotScheduleList;
  }

  // source_availability_zone_index - computed: true, optional: false, required: false
  public get sourceAvailabilityZoneIndex() {
    return this.getNumberAttribute('source_availability_zone_index');
  }
}

export class DataNutanixProtectionRuleAvailabilityZoneConnectivityListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixProtectionRuleAvailabilityZoneConnectivityListStructOutputReference {
    return new DataNutanixProtectionRuleAvailabilityZoneConnectivityListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixProtectionRuleCategoryFilterParams {
}

export function dataNutanixProtectionRuleCategoryFilterParamsToTerraform(struct?: DataNutanixProtectionRuleCategoryFilterParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixProtectionRuleCategoryFilterParamsToHclTerraform(struct?: DataNutanixProtectionRuleCategoryFilterParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixProtectionRuleCategoryFilterParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixProtectionRuleCategoryFilterParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixProtectionRuleCategoryFilterParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataNutanixProtectionRuleCategoryFilterParamsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixProtectionRuleCategoryFilterParamsOutputReference {
    return new DataNutanixProtectionRuleCategoryFilterParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixProtectionRuleCategoryFilter {
}

export function dataNutanixProtectionRuleCategoryFilterToTerraform(struct?: DataNutanixProtectionRuleCategoryFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixProtectionRuleCategoryFilterToHclTerraform(struct?: DataNutanixProtectionRuleCategoryFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixProtectionRuleCategoryFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixProtectionRuleCategoryFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixProtectionRuleCategoryFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kind_list - computed: true, optional: false, required: false
  public get kindList() {
    return this.getListAttribute('kind_list');
  }

  // params - computed: true, optional: false, required: false
  private _params = new DataNutanixProtectionRuleCategoryFilterParamsList(this, "params", true);
  public get params() {
    return this._params;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataNutanixProtectionRuleCategoryFilterList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixProtectionRuleCategoryFilterOutputReference {
    return new DataNutanixProtectionRuleCategoryFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixProtectionRuleOrderedAvailabilityZoneListStruct {
}

export function dataNutanixProtectionRuleOrderedAvailabilityZoneListStructToTerraform(struct?: DataNutanixProtectionRuleOrderedAvailabilityZoneListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixProtectionRuleOrderedAvailabilityZoneListStructToHclTerraform(struct?: DataNutanixProtectionRuleOrderedAvailabilityZoneListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixProtectionRuleOrderedAvailabilityZoneListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixProtectionRuleOrderedAvailabilityZoneListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixProtectionRuleOrderedAvailabilityZoneListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_zone_url - computed: true, optional: false, required: false
  public get availabilityZoneUrl() {
    return this.getStringAttribute('availability_zone_url');
  }

  // cluster_uuid - computed: true, optional: false, required: false
  public get clusterUuid() {
    return this.getStringAttribute('cluster_uuid');
  }
}

export class DataNutanixProtectionRuleOrderedAvailabilityZoneListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixProtectionRuleOrderedAvailabilityZoneListStructOutputReference {
    return new DataNutanixProtectionRuleOrderedAvailabilityZoneListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixProtectionRuleOwnerReference {
}

export function dataNutanixProtectionRuleOwnerReferenceToTerraform(struct?: DataNutanixProtectionRuleOwnerReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixProtectionRuleOwnerReferenceToHclTerraform(struct?: DataNutanixProtectionRuleOwnerReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixProtectionRuleOwnerReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixProtectionRuleOwnerReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixProtectionRuleOwnerReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataNutanixProtectionRuleOwnerReferenceList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixProtectionRuleOwnerReferenceOutputReference {
    return new DataNutanixProtectionRuleOwnerReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixProtectionRuleProjectReference {
}

export function dataNutanixProtectionRuleProjectReferenceToTerraform(struct?: DataNutanixProtectionRuleProjectReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixProtectionRuleProjectReferenceToHclTerraform(struct?: DataNutanixProtectionRuleProjectReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixProtectionRuleProjectReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixProtectionRuleProjectReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixProtectionRuleProjectReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataNutanixProtectionRuleProjectReferenceList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixProtectionRuleProjectReferenceOutputReference {
    return new DataNutanixProtectionRuleProjectReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixProtectionRuleCategories {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/protection_rule#name DataNutanixProtectionRule#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/protection_rule#value DataNutanixProtectionRule#value}
  */
  readonly value?: string;
}

export function dataNutanixProtectionRuleCategoriesToTerraform(struct?: DataNutanixProtectionRuleCategories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataNutanixProtectionRuleCategoriesToHclTerraform(struct?: DataNutanixProtectionRuleCategories | cdktf.IResolvable): any {
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

export class DataNutanixProtectionRuleCategoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixProtectionRuleCategories | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNutanixProtectionRuleCategories | cdktf.IResolvable | undefined) {
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

  // value - computed: true, optional: true, required: false
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

export class DataNutanixProtectionRuleCategoriesList extends cdktf.ComplexList {
  public internalValue? : DataNutanixProtectionRuleCategories[] | cdktf.IResolvable

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
  public get(index: number): DataNutanixProtectionRuleCategoriesOutputReference {
    return new DataNutanixProtectionRuleCategoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/protection_rule nutanix_protection_rule}
*/
export class DataNutanixProtectionRule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_protection_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNutanixProtectionRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNutanixProtectionRule to import
  * @param importFromId The id of the existing DataNutanixProtectionRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/protection_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNutanixProtectionRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_protection_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/protection_rule nutanix_protection_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNutanixProtectionRuleConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNutanixProtectionRuleConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nutanix_protection_rule',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.4',
        providerVersionConstraint: '2.3.4'
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
    this._protectionRuleId = config.protectionRuleId;
    this._protectionRuleName = config.protectionRuleName;
    this._categories.internalValue = config.categories;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_version - computed: true, optional: false, required: false
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }

  // availability_zone_connectivity_list - computed: true, optional: false, required: false
  private _availabilityZoneConnectivityList = new DataNutanixProtectionRuleAvailabilityZoneConnectivityListStructList(this, "availability_zone_connectivity_list", false);
  public get availabilityZoneConnectivityList() {
    return this._availabilityZoneConnectivityList;
  }

  // category_filter - computed: true, optional: false, required: false
  private _categoryFilter = new DataNutanixProtectionRuleCategoryFilterList(this, "category_filter", false);
  public get categoryFilter() {
    return this._categoryFilter;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktf.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // ordered_availability_zone_list - computed: true, optional: false, required: false
  private _orderedAvailabilityZoneList = new DataNutanixProtectionRuleOrderedAvailabilityZoneListStructList(this, "ordered_availability_zone_list", false);
  public get orderedAvailabilityZoneList() {
    return this._orderedAvailabilityZoneList;
  }

  // owner_reference - computed: true, optional: false, required: false
  private _ownerReference = new DataNutanixProtectionRuleOwnerReferenceList(this, "owner_reference", false);
  public get ownerReference() {
    return this._ownerReference;
  }

  // project_reference - computed: true, optional: false, required: false
  private _projectReference = new DataNutanixProtectionRuleProjectReferenceList(this, "project_reference", false);
  public get projectReference() {
    return this._projectReference;
  }

  // protection_rule_id - computed: false, optional: true, required: false
  private _protectionRuleId?: string; 
  public get protectionRuleId() {
    return this.getStringAttribute('protection_rule_id');
  }
  public set protectionRuleId(value: string) {
    this._protectionRuleId = value;
  }
  public resetProtectionRuleId() {
    this._protectionRuleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionRuleIdInput() {
    return this._protectionRuleId;
  }

  // protection_rule_name - computed: false, optional: true, required: false
  private _protectionRuleName?: string; 
  public get protectionRuleName() {
    return this.getStringAttribute('protection_rule_name');
  }
  public set protectionRuleName(value: string) {
    this._protectionRuleName = value;
  }
  public resetProtectionRuleName() {
    this._protectionRuleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionRuleNameInput() {
    return this._protectionRuleName;
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // categories - computed: false, optional: true, required: false
  private _categories = new DataNutanixProtectionRuleCategoriesList(this, "categories", true);
  public get categories() {
    return this._categories;
  }
  public putCategories(value: DataNutanixProtectionRuleCategories[] | cdktf.IResolvable) {
    this._categories.internalValue = value;
  }
  public resetCategories() {
    this._categories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      protection_rule_id: cdktf.stringToTerraform(this._protectionRuleId),
      protection_rule_name: cdktf.stringToTerraform(this._protectionRuleName),
      categories: cdktf.listMapper(dataNutanixProtectionRuleCategoriesToTerraform, true)(this._categories.internalValue),
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
      protection_rule_id: {
        value: cdktf.stringToHclTerraform(this._protectionRuleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protection_rule_name: {
        value: cdktf.stringToHclTerraform(this._protectionRuleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      categories: {
        value: cdktf.listMapperHcl(dataNutanixProtectionRuleCategoriesToHclTerraform, true)(this._categories.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataNutanixProtectionRuleCategoriesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
