// https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/protection_policy_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNutanixProtectionPolicyV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/protection_policy_v2#ext_id DataNutanixProtectionPolicyV2#ext_id}
  */
  readonly extId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/protection_policy_v2#id DataNutanixProtectionPolicyV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataNutanixProtectionPolicyV2Links {
}

export function dataNutanixProtectionPolicyV2LinksToTerraform(struct?: DataNutanixProtectionPolicyV2Links): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixProtectionPolicyV2LinksToHclTerraform(struct?: DataNutanixProtectionPolicyV2Links): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixProtectionPolicyV2LinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixProtectionPolicyV2Links | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixProtectionPolicyV2Links | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }
}

export class DataNutanixProtectionPolicyV2LinksList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixProtectionPolicyV2LinksOutputReference {
    return new DataNutanixProtectionPolicyV2LinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionLocal {
}

export function dataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionLocalToTerraform(struct?: DataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionLocal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionLocalToHclTerraform(struct?: DataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionLocal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionLocalOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionLocal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionLocal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // frequency - computed: true, optional: false, required: false
  public get frequency() {
    return this.getNumberAttribute('frequency');
  }

  // snapshot_interval_type - computed: true, optional: false, required: false
  public get snapshotIntervalType() {
    return this.getStringAttribute('snapshot_interval_type');
  }
}

export class DataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionLocalList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionLocalOutputReference {
    return new DataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionLocalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionRemote {
}

export function dataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionRemoteToTerraform(struct?: DataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionRemote): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionRemoteToHclTerraform(struct?: DataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionRemote): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionRemoteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionRemote | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionRemote | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // frequency - computed: true, optional: false, required: false
  public get frequency() {
    return this.getNumberAttribute('frequency');
  }

  // snapshot_interval_type - computed: true, optional: false, required: false
  public get snapshotIntervalType() {
    return this.getStringAttribute('snapshot_interval_type');
  }
}

export class DataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionRemoteList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionRemoteOutputReference {
    return new DataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionRemoteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetention {
}

export function dataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionToTerraform(struct?: DataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionToHclTerraform(struct?: DataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // local - computed: true, optional: false, required: false
  private _local = new DataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionLocalList(this, "local", false);
  public get local() {
    return this._local;
  }

  // remote - computed: true, optional: false, required: false
  private _remote = new DataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionRemoteList(this, "remote", false);
  public get remote() {
    return this._remote;
  }
}

export class DataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionOutputReference {
    return new DataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetentionLinearRetention {
}

export function dataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetentionLinearRetentionToTerraform(struct?: DataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetentionLinearRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetentionLinearRetentionToHclTerraform(struct?: DataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetentionLinearRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetentionLinearRetentionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetentionLinearRetention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetentionLinearRetention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // local - computed: true, optional: false, required: false
  public get local() {
    return this.getNumberAttribute('local');
  }

  // remote - computed: true, optional: false, required: false
  public get remote() {
    return this.getNumberAttribute('remote');
  }
}

export class DataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetentionLinearRetentionList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetentionLinearRetentionOutputReference {
    return new DataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetentionLinearRetentionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetention {
}

export function dataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetentionToTerraform(struct?: DataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetentionToHclTerraform(struct?: DataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetentionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_rollup_retention - computed: true, optional: false, required: false
  private _autoRollupRetention = new DataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionList(this, "auto_rollup_retention", false);
  public get autoRollupRetention() {
    return this._autoRollupRetention;
  }

  // linear_retention - computed: true, optional: false, required: false
  private _linearRetention = new DataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetentionLinearRetentionList(this, "linear_retention", false);
  public get linearRetention() {
    return this._linearRetention;
  }
}

export class DataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetentionList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetentionOutputReference {
    return new DataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetentionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixProtectionPolicyV2ReplicationConfigurationsSchedule {
}

export function dataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleToTerraform(struct?: DataNutanixProtectionPolicyV2ReplicationConfigurationsSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleToHclTerraform(struct?: DataNutanixProtectionPolicyV2ReplicationConfigurationsSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixProtectionPolicyV2ReplicationConfigurationsSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixProtectionPolicyV2ReplicationConfigurationsSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // recovery_point_objective_time_seconds - computed: true, optional: false, required: false
  public get recoveryPointObjectiveTimeSeconds() {
    return this.getNumberAttribute('recovery_point_objective_time_seconds');
  }

  // recovery_point_type - computed: true, optional: false, required: false
  public get recoveryPointType() {
    return this.getStringAttribute('recovery_point_type');
  }

  // retention - computed: true, optional: false, required: false
  private _retention = new DataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleRetentionList(this, "retention", false);
  public get retention() {
    return this._retention;
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // sync_replication_auto_suspend_timeout_seconds - computed: true, optional: false, required: false
  public get syncReplicationAutoSuspendTimeoutSeconds() {
    return this.getNumberAttribute('sync_replication_auto_suspend_timeout_seconds');
  }
}

export class DataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleOutputReference {
    return new DataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixProtectionPolicyV2ReplicationConfigurations {
}

export function dataNutanixProtectionPolicyV2ReplicationConfigurationsToTerraform(struct?: DataNutanixProtectionPolicyV2ReplicationConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixProtectionPolicyV2ReplicationConfigurationsToHclTerraform(struct?: DataNutanixProtectionPolicyV2ReplicationConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixProtectionPolicyV2ReplicationConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixProtectionPolicyV2ReplicationConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixProtectionPolicyV2ReplicationConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // remote_location_label - computed: true, optional: false, required: false
  public get remoteLocationLabel() {
    return this.getStringAttribute('remote_location_label');
  }

  // schedule - computed: true, optional: false, required: false
  private _schedule = new DataNutanixProtectionPolicyV2ReplicationConfigurationsScheduleList(this, "schedule", false);
  public get schedule() {
    return this._schedule;
  }

  // source_location_label - computed: true, optional: false, required: false
  public get sourceLocationLabel() {
    return this.getStringAttribute('source_location_label');
  }
}

export class DataNutanixProtectionPolicyV2ReplicationConfigurationsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixProtectionPolicyV2ReplicationConfigurationsOutputReference {
    return new DataNutanixProtectionPolicyV2ReplicationConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixProtectionPolicyV2ReplicationLocationsReplicationSubLocationClusterExtIds {
}

export function dataNutanixProtectionPolicyV2ReplicationLocationsReplicationSubLocationClusterExtIdsToTerraform(struct?: DataNutanixProtectionPolicyV2ReplicationLocationsReplicationSubLocationClusterExtIds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixProtectionPolicyV2ReplicationLocationsReplicationSubLocationClusterExtIdsToHclTerraform(struct?: DataNutanixProtectionPolicyV2ReplicationLocationsReplicationSubLocationClusterExtIds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixProtectionPolicyV2ReplicationLocationsReplicationSubLocationClusterExtIdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixProtectionPolicyV2ReplicationLocationsReplicationSubLocationClusterExtIds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixProtectionPolicyV2ReplicationLocationsReplicationSubLocationClusterExtIds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_ext_ids - computed: true, optional: false, required: false
  public get clusterExtIds() {
    return this.getListAttribute('cluster_ext_ids');
  }
}

export class DataNutanixProtectionPolicyV2ReplicationLocationsReplicationSubLocationClusterExtIdsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixProtectionPolicyV2ReplicationLocationsReplicationSubLocationClusterExtIdsOutputReference {
    return new DataNutanixProtectionPolicyV2ReplicationLocationsReplicationSubLocationClusterExtIdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixProtectionPolicyV2ReplicationLocationsReplicationSubLocation {
}

export function dataNutanixProtectionPolicyV2ReplicationLocationsReplicationSubLocationToTerraform(struct?: DataNutanixProtectionPolicyV2ReplicationLocationsReplicationSubLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixProtectionPolicyV2ReplicationLocationsReplicationSubLocationToHclTerraform(struct?: DataNutanixProtectionPolicyV2ReplicationLocationsReplicationSubLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixProtectionPolicyV2ReplicationLocationsReplicationSubLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixProtectionPolicyV2ReplicationLocationsReplicationSubLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixProtectionPolicyV2ReplicationLocationsReplicationSubLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_ext_ids - computed: true, optional: false, required: false
  private _clusterExtIds = new DataNutanixProtectionPolicyV2ReplicationLocationsReplicationSubLocationClusterExtIdsList(this, "cluster_ext_ids", false);
  public get clusterExtIds() {
    return this._clusterExtIds;
  }
}

export class DataNutanixProtectionPolicyV2ReplicationLocationsReplicationSubLocationList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixProtectionPolicyV2ReplicationLocationsReplicationSubLocationOutputReference {
    return new DataNutanixProtectionPolicyV2ReplicationLocationsReplicationSubLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixProtectionPolicyV2ReplicationLocations {
}

export function dataNutanixProtectionPolicyV2ReplicationLocationsToTerraform(struct?: DataNutanixProtectionPolicyV2ReplicationLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixProtectionPolicyV2ReplicationLocationsToHclTerraform(struct?: DataNutanixProtectionPolicyV2ReplicationLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixProtectionPolicyV2ReplicationLocationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixProtectionPolicyV2ReplicationLocations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixProtectionPolicyV2ReplicationLocations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain_manager_ext_id - computed: true, optional: false, required: false
  public get domainManagerExtId() {
    return this.getStringAttribute('domain_manager_ext_id');
  }

  // is_primary - computed: true, optional: false, required: false
  public get isPrimary() {
    return this.getBooleanAttribute('is_primary');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // replication_sub_location - computed: true, optional: false, required: false
  private _replicationSubLocation = new DataNutanixProtectionPolicyV2ReplicationLocationsReplicationSubLocationList(this, "replication_sub_location", false);
  public get replicationSubLocation() {
    return this._replicationSubLocation;
  }
}

export class DataNutanixProtectionPolicyV2ReplicationLocationsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixProtectionPolicyV2ReplicationLocationsOutputReference {
    return new DataNutanixProtectionPolicyV2ReplicationLocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/protection_policy_v2 nutanix_protection_policy_v2}
*/
export class DataNutanixProtectionPolicyV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_protection_policy_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNutanixProtectionPolicyV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNutanixProtectionPolicyV2 to import
  * @param importFromId The id of the existing DataNutanixProtectionPolicyV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/protection_policy_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNutanixProtectionPolicyV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_protection_policy_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/protection_policy_v2 nutanix_protection_policy_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNutanixProtectionPolicyV2Config
  */
  public constructor(scope: Construct, id: string, config: DataNutanixProtectionPolicyV2Config) {
    super(scope, id, {
      terraformResourceType: 'nutanix_protection_policy_v2',
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
    this._extId = config.extId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category_ids - computed: true, optional: false, required: false
  public get categoryIds() {
    return this.getListAttribute('category_ids');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // ext_id - computed: false, optional: false, required: true
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
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

  // is_approval_policy_needed - computed: true, optional: false, required: false
  public get isApprovalPolicyNeeded() {
    return this.getBooleanAttribute('is_approval_policy_needed');
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataNutanixProtectionPolicyV2LinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner_ext_id - computed: true, optional: false, required: false
  public get ownerExtId() {
    return this.getStringAttribute('owner_ext_id');
  }

  // replication_configurations - computed: true, optional: false, required: false
  private _replicationConfigurations = new DataNutanixProtectionPolicyV2ReplicationConfigurationsList(this, "replication_configurations", false);
  public get replicationConfigurations() {
    return this._replicationConfigurations;
  }

  // replication_locations - computed: true, optional: false, required: false
  private _replicationLocations = new DataNutanixProtectionPolicyV2ReplicationLocationsList(this, "replication_locations", false);
  public get replicationLocations() {
    return this._replicationLocations;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ext_id: cdktf.stringToTerraform(this._extId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ext_id: {
        value: cdktf.stringToHclTerraform(this._extId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
