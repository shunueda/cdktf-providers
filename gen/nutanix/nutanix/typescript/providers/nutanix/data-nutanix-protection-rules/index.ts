// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/protection_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNutanixProtectionRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/protection_rules#id DataNutanixProtectionRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataNutanixProtectionRulesEntitiesAvailabilityZoneConnectivityListSnapshotScheduleListLocalSnapshotRetentionPolicy {
}

export function dataNutanixProtectionRulesEntitiesAvailabilityZoneConnectivityListSnapshotScheduleListLocalSnapshotRetentionPolicyToTerraform(struct?: DataNutanixProtectionRulesEntitiesAvailabilityZoneConnectivityListSnapshotScheduleListLocalSnapshotRetentionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixProtectionRulesEntitiesAvailabilityZoneConnectivityListSnapshotScheduleListLocalSnapshotRetentionPolicyToHclTerraform(struct?: DataNutanixProtectionRulesEntitiesAvailabilityZoneConnectivityListSnapshotScheduleListLocalSnapshotRetentionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixProtectionRulesEntitiesAvailabilityZoneConnectivityListSnapshotScheduleListLocalSnapshotRetentionPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixProtectionRulesEntitiesAvailabilityZoneConnectivityListSnapshotScheduleListLocalSnapshotRetentionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixProtectionRulesEntitiesAvailabilityZoneConnectivityListSnapshotScheduleListLocalSnapshotRetentionPolicy | undefined) {
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

export class DataNutanixProtectionRulesEntitiesAvailabilityZoneConnectivityListSnapshotScheduleListLocalSnapshotRetentionPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixProtectionRulesEntitiesAvailabilityZoneConnectivityListSnapshotScheduleListLocalSnapshotRetentionPolicyOutputReference {
    return new DataNutanixProtectionRulesEntitiesAvailabilityZoneConnectivityListSnapshotScheduleListLocalSnapshotRetentionPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixProtectionRulesEntitiesAvailabilityZoneConnectivityListSnapshotScheduleListRemoteSnapshotRetentionPolicy {
}

export function dataNutanixProtectionRulesEntitiesAvailabilityZoneConnectivityListSnapshotScheduleListRemoteSnapshotRetentionPolicyToTerraform(struct?: DataNutanixProtectionRulesEntitiesAvailabilityZoneConnectivityListSnapshotScheduleListRemoteSnapshotRetentionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixProtectionRulesEntitiesAvailabilityZoneConnectivityListSnapshotScheduleListRemoteSnapshotRetentionPolicyToHclTerraform(struct?: DataNutanixProtectionRulesEntitiesAvailabilityZoneConnectivityListSnapshotScheduleListRemoteSnapshotRetentionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixProtectionRulesEntitiesAvailabilityZoneConnectivityListSnapshotScheduleListRemoteSnapshotRetentionPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixProtectionRulesEntitiesAvailabilityZoneConnectivityListSnapshotScheduleListRemoteSnapshotRetentionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixProtectionRulesEntitiesAvailabilityZoneConnectivityListSnapshotScheduleListRemoteSnapshotRetentionPolicy | undefined) {
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

export class DataNutanixProtectionRulesEntitiesAvailabilityZoneConnectivityListSnapshotScheduleListRemoteSnapshotRetentionPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixProtectionRulesEntitiesAvailabilityZoneConnectivityListSnapshotScheduleListRemoteSnapshotRetentionPolicyOutputReference {
    return new DataNutanixProtectionRulesEntitiesAvailabilityZoneConnectivityListSnapshotScheduleListRemoteSnapshotRetentionPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixProtectionRulesEntitiesAvailabilityZoneConnectivityListSnapshotScheduleListStruct {
}

export function dataNutanixProtectionRulesEntitiesAvailabilityZoneConnectivityListSnapshotScheduleListStructToTerraform(struct?: DataNutanixProtectionRulesEntitiesAvailabilityZoneConnectivityListSnapshotScheduleListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixProtectionRulesEntitiesAvailabilityZoneConnectivityListSnapshotScheduleListStructToHclTerraform(struct?: DataNutanixProtectionRulesEntitiesAvailabilityZoneConnectivityListSnapshotScheduleListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixProtectionRulesEntitiesAvailabilityZoneConnectivityListSnapshotScheduleListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixProtectionRulesEntitiesAvailabilityZoneConnectivityListSnapshotScheduleListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixProtectionRulesEntitiesAvailabilityZoneConnectivityListSnapshotScheduleListStruct | undefined) {
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
  private _localSnapshotRetentionPolicy = new DataNutanixProtectionRulesEntitiesAvailabilityZoneConnectivityListSnapshotScheduleListLocalSnapshotRetentionPolicyList(this, "local_snapshot_retention_policy", false);
  public get localSnapshotRetentionPolicy() {
    return this._localSnapshotRetentionPolicy;
  }

  // recovery_point_objective_secs - computed: true, optional: false, required: false
  public get recoveryPointObjectiveSecs() {
    return this.getNumberAttribute('recovery_point_objective_secs');
  }

  // remote_snapshot_retention_policy - computed: true, optional: false, required: false
  private _remoteSnapshotRetentionPolicy = new DataNutanixProtectionRulesEntitiesAvailabilityZoneConnectivityListSnapshotScheduleListRemoteSnapshotRetentionPolicyList(this, "remote_snapshot_retention_policy", false);
  public get remoteSnapshotRetentionPolicy() {
    return this._remoteSnapshotRetentionPolicy;
  }

  // snapshot_type - computed: true, optional: false, required: false
  public get snapshotType() {
    return this.getStringAttribute('snapshot_type');
  }
}

export class DataNutanixProtectionRulesEntitiesAvailabilityZoneConnectivityListSnapshotScheduleListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixProtectionRulesEntitiesAvailabilityZoneConnectivityListSnapshotScheduleListStructOutputReference {
    return new DataNutanixProtectionRulesEntitiesAvailabilityZoneConnectivityListSnapshotScheduleListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixProtectionRulesEntitiesAvailabilityZoneConnectivityListStruct {
}

export function dataNutanixProtectionRulesEntitiesAvailabilityZoneConnectivityListStructToTerraform(struct?: DataNutanixProtectionRulesEntitiesAvailabilityZoneConnectivityListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixProtectionRulesEntitiesAvailabilityZoneConnectivityListStructToHclTerraform(struct?: DataNutanixProtectionRulesEntitiesAvailabilityZoneConnectivityListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixProtectionRulesEntitiesAvailabilityZoneConnectivityListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixProtectionRulesEntitiesAvailabilityZoneConnectivityListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixProtectionRulesEntitiesAvailabilityZoneConnectivityListStruct | undefined) {
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
  private _snapshotScheduleList = new DataNutanixProtectionRulesEntitiesAvailabilityZoneConnectivityListSnapshotScheduleListStructList(this, "snapshot_schedule_list", false);
  public get snapshotScheduleList() {
    return this._snapshotScheduleList;
  }

  // source_availability_zone_index - computed: true, optional: false, required: false
  public get sourceAvailabilityZoneIndex() {
    return this.getNumberAttribute('source_availability_zone_index');
  }
}

export class DataNutanixProtectionRulesEntitiesAvailabilityZoneConnectivityListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixProtectionRulesEntitiesAvailabilityZoneConnectivityListStructOutputReference {
    return new DataNutanixProtectionRulesEntitiesAvailabilityZoneConnectivityListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixProtectionRulesEntitiesCategories {
}

export function dataNutanixProtectionRulesEntitiesCategoriesToTerraform(struct?: DataNutanixProtectionRulesEntitiesCategories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixProtectionRulesEntitiesCategoriesToHclTerraform(struct?: DataNutanixProtectionRulesEntitiesCategories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixProtectionRulesEntitiesCategoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixProtectionRulesEntitiesCategories | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixProtectionRulesEntitiesCategories | undefined) {
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixProtectionRulesEntitiesCategoriesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixProtectionRulesEntitiesCategoriesOutputReference {
    return new DataNutanixProtectionRulesEntitiesCategoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixProtectionRulesEntitiesCategoryFilterParams {
}

export function dataNutanixProtectionRulesEntitiesCategoryFilterParamsToTerraform(struct?: DataNutanixProtectionRulesEntitiesCategoryFilterParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixProtectionRulesEntitiesCategoryFilterParamsToHclTerraform(struct?: DataNutanixProtectionRulesEntitiesCategoryFilterParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixProtectionRulesEntitiesCategoryFilterParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixProtectionRulesEntitiesCategoryFilterParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixProtectionRulesEntitiesCategoryFilterParams | undefined) {
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

export class DataNutanixProtectionRulesEntitiesCategoryFilterParamsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixProtectionRulesEntitiesCategoryFilterParamsOutputReference {
    return new DataNutanixProtectionRulesEntitiesCategoryFilterParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixProtectionRulesEntitiesCategoryFilter {
}

export function dataNutanixProtectionRulesEntitiesCategoryFilterToTerraform(struct?: DataNutanixProtectionRulesEntitiesCategoryFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixProtectionRulesEntitiesCategoryFilterToHclTerraform(struct?: DataNutanixProtectionRulesEntitiesCategoryFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixProtectionRulesEntitiesCategoryFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixProtectionRulesEntitiesCategoryFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixProtectionRulesEntitiesCategoryFilter | undefined) {
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
  private _params = new DataNutanixProtectionRulesEntitiesCategoryFilterParamsList(this, "params", true);
  public get params() {
    return this._params;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataNutanixProtectionRulesEntitiesCategoryFilterList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixProtectionRulesEntitiesCategoryFilterOutputReference {
    return new DataNutanixProtectionRulesEntitiesCategoryFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixProtectionRulesEntitiesOrderedAvailabilityZoneListStruct {
}

export function dataNutanixProtectionRulesEntitiesOrderedAvailabilityZoneListStructToTerraform(struct?: DataNutanixProtectionRulesEntitiesOrderedAvailabilityZoneListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixProtectionRulesEntitiesOrderedAvailabilityZoneListStructToHclTerraform(struct?: DataNutanixProtectionRulesEntitiesOrderedAvailabilityZoneListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixProtectionRulesEntitiesOrderedAvailabilityZoneListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixProtectionRulesEntitiesOrderedAvailabilityZoneListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixProtectionRulesEntitiesOrderedAvailabilityZoneListStruct | undefined) {
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

export class DataNutanixProtectionRulesEntitiesOrderedAvailabilityZoneListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixProtectionRulesEntitiesOrderedAvailabilityZoneListStructOutputReference {
    return new DataNutanixProtectionRulesEntitiesOrderedAvailabilityZoneListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixProtectionRulesEntitiesOwnerReference {
}

export function dataNutanixProtectionRulesEntitiesOwnerReferenceToTerraform(struct?: DataNutanixProtectionRulesEntitiesOwnerReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixProtectionRulesEntitiesOwnerReferenceToHclTerraform(struct?: DataNutanixProtectionRulesEntitiesOwnerReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixProtectionRulesEntitiesOwnerReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixProtectionRulesEntitiesOwnerReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixProtectionRulesEntitiesOwnerReference | undefined) {
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

export class DataNutanixProtectionRulesEntitiesOwnerReferenceList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixProtectionRulesEntitiesOwnerReferenceOutputReference {
    return new DataNutanixProtectionRulesEntitiesOwnerReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixProtectionRulesEntitiesProjectReference {
}

export function dataNutanixProtectionRulesEntitiesProjectReferenceToTerraform(struct?: DataNutanixProtectionRulesEntitiesProjectReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixProtectionRulesEntitiesProjectReferenceToHclTerraform(struct?: DataNutanixProtectionRulesEntitiesProjectReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixProtectionRulesEntitiesProjectReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixProtectionRulesEntitiesProjectReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixProtectionRulesEntitiesProjectReference | undefined) {
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

export class DataNutanixProtectionRulesEntitiesProjectReferenceList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixProtectionRulesEntitiesProjectReferenceOutputReference {
    return new DataNutanixProtectionRulesEntitiesProjectReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixProtectionRulesEntities {
}

export function dataNutanixProtectionRulesEntitiesToTerraform(struct?: DataNutanixProtectionRulesEntities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixProtectionRulesEntitiesToHclTerraform(struct?: DataNutanixProtectionRulesEntities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixProtectionRulesEntitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixProtectionRulesEntities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixProtectionRulesEntities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_version - computed: true, optional: false, required: false
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }

  // availability_zone_connectivity_list - computed: true, optional: false, required: false
  private _availabilityZoneConnectivityList = new DataNutanixProtectionRulesEntitiesAvailabilityZoneConnectivityListStructList(this, "availability_zone_connectivity_list", false);
  public get availabilityZoneConnectivityList() {
    return this._availabilityZoneConnectivityList;
  }

  // categories - computed: true, optional: false, required: false
  private _categories = new DataNutanixProtectionRulesEntitiesCategoriesList(this, "categories", true);
  public get categories() {
    return this._categories;
  }

  // category_filter - computed: true, optional: false, required: false
  private _categoryFilter = new DataNutanixProtectionRulesEntitiesCategoryFilterList(this, "category_filter", false);
  public get categoryFilter() {
    return this._categoryFilter;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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
  private _orderedAvailabilityZoneList = new DataNutanixProtectionRulesEntitiesOrderedAvailabilityZoneListStructList(this, "ordered_availability_zone_list", false);
  public get orderedAvailabilityZoneList() {
    return this._orderedAvailabilityZoneList;
  }

  // owner_reference - computed: true, optional: false, required: false
  private _ownerReference = new DataNutanixProtectionRulesEntitiesOwnerReferenceList(this, "owner_reference", false);
  public get ownerReference() {
    return this._ownerReference;
  }

  // project_reference - computed: true, optional: false, required: false
  private _projectReference = new DataNutanixProtectionRulesEntitiesProjectReferenceList(this, "project_reference", false);
  public get projectReference() {
    return this._projectReference;
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

export class DataNutanixProtectionRulesEntitiesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixProtectionRulesEntitiesOutputReference {
    return new DataNutanixProtectionRulesEntitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/protection_rules nutanix_protection_rules}
*/
export class DataNutanixProtectionRules extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_protection_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNutanixProtectionRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNutanixProtectionRules to import
  * @param importFromId The id of the existing DataNutanixProtectionRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/protection_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNutanixProtectionRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_protection_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/protection_rules nutanix_protection_rules} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNutanixProtectionRulesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNutanixProtectionRulesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nutanix_protection_rules',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.3'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_version - computed: true, optional: false, required: false
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }

  // entities - computed: true, optional: false, required: false
  private _entities = new DataNutanixProtectionRulesEntitiesList(this, "entities", false);
  public get entities() {
    return this._entities;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
