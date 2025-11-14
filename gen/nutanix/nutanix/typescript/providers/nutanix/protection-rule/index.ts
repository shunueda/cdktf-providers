// https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/protection_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProtectionRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/protection_rule#description ProtectionRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/protection_rule#id ProtectionRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/protection_rule#name ProtectionRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/protection_rule#start_time ProtectionRule#start_time}
  */
  readonly startTime?: string;
  /**
  * availability_zone_connectivity_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/protection_rule#availability_zone_connectivity_list ProtectionRule#availability_zone_connectivity_list}
  */
  readonly availabilityZoneConnectivityList: ProtectionRuleAvailabilityZoneConnectivityListStruct[] | cdktf.IResolvable;
  /**
  * categories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/protection_rule#categories ProtectionRule#categories}
  */
  readonly categories?: ProtectionRuleCategories[] | cdktf.IResolvable;
  /**
  * category_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/protection_rule#category_filter ProtectionRule#category_filter}
  */
  readonly categoryFilter?: ProtectionRuleCategoryFilter;
  /**
  * ordered_availability_zone_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/protection_rule#ordered_availability_zone_list ProtectionRule#ordered_availability_zone_list}
  */
  readonly orderedAvailabilityZoneList: ProtectionRuleOrderedAvailabilityZoneListStruct[] | cdktf.IResolvable;
  /**
  * owner_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/protection_rule#owner_reference ProtectionRule#owner_reference}
  */
  readonly ownerReference?: ProtectionRuleOwnerReference;
  /**
  * project_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/protection_rule#project_reference ProtectionRule#project_reference}
  */
  readonly projectReference?: ProtectionRuleProjectReference;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/protection_rule#timeouts ProtectionRule#timeouts}
  */
  readonly timeouts?: ProtectionRuleTimeouts;
}
export interface ProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListLocalSnapshotRetentionPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/protection_rule#num_snapshots ProtectionRule#num_snapshots}
  */
  readonly numSnapshots?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/protection_rule#rollup_retention_policy_multiple ProtectionRule#rollup_retention_policy_multiple}
  */
  readonly rollupRetentionPolicyMultiple?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/protection_rule#rollup_retention_policy_snapshot_interval_type ProtectionRule#rollup_retention_policy_snapshot_interval_type}
  */
  readonly rollupRetentionPolicySnapshotIntervalType?: string;
}

export function protectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListLocalSnapshotRetentionPolicyToTerraform(struct?: ProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListLocalSnapshotRetentionPolicyOutputReference | ProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListLocalSnapshotRetentionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    num_snapshots: cdktf.numberToTerraform(struct!.numSnapshots),
    rollup_retention_policy_multiple: cdktf.numberToTerraform(struct!.rollupRetentionPolicyMultiple),
    rollup_retention_policy_snapshot_interval_type: cdktf.stringToTerraform(struct!.rollupRetentionPolicySnapshotIntervalType),
  }
}


export function protectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListLocalSnapshotRetentionPolicyToHclTerraform(struct?: ProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListLocalSnapshotRetentionPolicyOutputReference | ProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListLocalSnapshotRetentionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    num_snapshots: {
      value: cdktf.numberToHclTerraform(struct!.numSnapshots),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rollup_retention_policy_multiple: {
      value: cdktf.numberToHclTerraform(struct!.rollupRetentionPolicyMultiple),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rollup_retention_policy_snapshot_interval_type: {
      value: cdktf.stringToHclTerraform(struct!.rollupRetentionPolicySnapshotIntervalType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListLocalSnapshotRetentionPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListLocalSnapshotRetentionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numSnapshots !== undefined) {
      hasAnyValues = true;
      internalValueResult.numSnapshots = this._numSnapshots;
    }
    if (this._rollupRetentionPolicyMultiple !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollupRetentionPolicyMultiple = this._rollupRetentionPolicyMultiple;
    }
    if (this._rollupRetentionPolicySnapshotIntervalType !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollupRetentionPolicySnapshotIntervalType = this._rollupRetentionPolicySnapshotIntervalType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListLocalSnapshotRetentionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._numSnapshots = undefined;
      this._rollupRetentionPolicyMultiple = undefined;
      this._rollupRetentionPolicySnapshotIntervalType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._numSnapshots = value.numSnapshots;
      this._rollupRetentionPolicyMultiple = value.rollupRetentionPolicyMultiple;
      this._rollupRetentionPolicySnapshotIntervalType = value.rollupRetentionPolicySnapshotIntervalType;
    }
  }

  // num_snapshots - computed: true, optional: true, required: false
  private _numSnapshots?: number; 
  public get numSnapshots() {
    return this.getNumberAttribute('num_snapshots');
  }
  public set numSnapshots(value: number) {
    this._numSnapshots = value;
  }
  public resetNumSnapshots() {
    this._numSnapshots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numSnapshotsInput() {
    return this._numSnapshots;
  }

  // rollup_retention_policy_multiple - computed: true, optional: true, required: false
  private _rollupRetentionPolicyMultiple?: number; 
  public get rollupRetentionPolicyMultiple() {
    return this.getNumberAttribute('rollup_retention_policy_multiple');
  }
  public set rollupRetentionPolicyMultiple(value: number) {
    this._rollupRetentionPolicyMultiple = value;
  }
  public resetRollupRetentionPolicyMultiple() {
    this._rollupRetentionPolicyMultiple = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollupRetentionPolicyMultipleInput() {
    return this._rollupRetentionPolicyMultiple;
  }

  // rollup_retention_policy_snapshot_interval_type - computed: true, optional: true, required: false
  private _rollupRetentionPolicySnapshotIntervalType?: string; 
  public get rollupRetentionPolicySnapshotIntervalType() {
    return this.getStringAttribute('rollup_retention_policy_snapshot_interval_type');
  }
  public set rollupRetentionPolicySnapshotIntervalType(value: string) {
    this._rollupRetentionPolicySnapshotIntervalType = value;
  }
  public resetRollupRetentionPolicySnapshotIntervalType() {
    this._rollupRetentionPolicySnapshotIntervalType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollupRetentionPolicySnapshotIntervalTypeInput() {
    return this._rollupRetentionPolicySnapshotIntervalType;
  }
}
export interface ProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListRemoteSnapshotRetentionPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/protection_rule#num_snapshots ProtectionRule#num_snapshots}
  */
  readonly numSnapshots?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/protection_rule#rollup_retention_policy_multiple ProtectionRule#rollup_retention_policy_multiple}
  */
  readonly rollupRetentionPolicyMultiple?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/protection_rule#rollup_retention_policy_snapshot_interval_type ProtectionRule#rollup_retention_policy_snapshot_interval_type}
  */
  readonly rollupRetentionPolicySnapshotIntervalType?: string;
}

export function protectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListRemoteSnapshotRetentionPolicyToTerraform(struct?: ProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListRemoteSnapshotRetentionPolicyOutputReference | ProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListRemoteSnapshotRetentionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    num_snapshots: cdktf.numberToTerraform(struct!.numSnapshots),
    rollup_retention_policy_multiple: cdktf.numberToTerraform(struct!.rollupRetentionPolicyMultiple),
    rollup_retention_policy_snapshot_interval_type: cdktf.stringToTerraform(struct!.rollupRetentionPolicySnapshotIntervalType),
  }
}


export function protectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListRemoteSnapshotRetentionPolicyToHclTerraform(struct?: ProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListRemoteSnapshotRetentionPolicyOutputReference | ProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListRemoteSnapshotRetentionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    num_snapshots: {
      value: cdktf.numberToHclTerraform(struct!.numSnapshots),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rollup_retention_policy_multiple: {
      value: cdktf.numberToHclTerraform(struct!.rollupRetentionPolicyMultiple),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rollup_retention_policy_snapshot_interval_type: {
      value: cdktf.stringToHclTerraform(struct!.rollupRetentionPolicySnapshotIntervalType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListRemoteSnapshotRetentionPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListRemoteSnapshotRetentionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numSnapshots !== undefined) {
      hasAnyValues = true;
      internalValueResult.numSnapshots = this._numSnapshots;
    }
    if (this._rollupRetentionPolicyMultiple !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollupRetentionPolicyMultiple = this._rollupRetentionPolicyMultiple;
    }
    if (this._rollupRetentionPolicySnapshotIntervalType !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollupRetentionPolicySnapshotIntervalType = this._rollupRetentionPolicySnapshotIntervalType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListRemoteSnapshotRetentionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._numSnapshots = undefined;
      this._rollupRetentionPolicyMultiple = undefined;
      this._rollupRetentionPolicySnapshotIntervalType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._numSnapshots = value.numSnapshots;
      this._rollupRetentionPolicyMultiple = value.rollupRetentionPolicyMultiple;
      this._rollupRetentionPolicySnapshotIntervalType = value.rollupRetentionPolicySnapshotIntervalType;
    }
  }

  // num_snapshots - computed: true, optional: true, required: false
  private _numSnapshots?: number; 
  public get numSnapshots() {
    return this.getNumberAttribute('num_snapshots');
  }
  public set numSnapshots(value: number) {
    this._numSnapshots = value;
  }
  public resetNumSnapshots() {
    this._numSnapshots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numSnapshotsInput() {
    return this._numSnapshots;
  }

  // rollup_retention_policy_multiple - computed: true, optional: true, required: false
  private _rollupRetentionPolicyMultiple?: number; 
  public get rollupRetentionPolicyMultiple() {
    return this.getNumberAttribute('rollup_retention_policy_multiple');
  }
  public set rollupRetentionPolicyMultiple(value: number) {
    this._rollupRetentionPolicyMultiple = value;
  }
  public resetRollupRetentionPolicyMultiple() {
    this._rollupRetentionPolicyMultiple = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollupRetentionPolicyMultipleInput() {
    return this._rollupRetentionPolicyMultiple;
  }

  // rollup_retention_policy_snapshot_interval_type - computed: true, optional: true, required: false
  private _rollupRetentionPolicySnapshotIntervalType?: string; 
  public get rollupRetentionPolicySnapshotIntervalType() {
    return this.getStringAttribute('rollup_retention_policy_snapshot_interval_type');
  }
  public set rollupRetentionPolicySnapshotIntervalType(value: string) {
    this._rollupRetentionPolicySnapshotIntervalType = value;
  }
  public resetRollupRetentionPolicySnapshotIntervalType() {
    this._rollupRetentionPolicySnapshotIntervalType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollupRetentionPolicySnapshotIntervalTypeInput() {
    return this._rollupRetentionPolicySnapshotIntervalType;
  }
}
export interface ProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/protection_rule#auto_suspend_timeout_secs ProtectionRule#auto_suspend_timeout_secs}
  */
  readonly autoSuspendTimeoutSecs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/protection_rule#recovery_point_objective_secs ProtectionRule#recovery_point_objective_secs}
  */
  readonly recoveryPointObjectiveSecs: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/protection_rule#snapshot_type ProtectionRule#snapshot_type}
  */
  readonly snapshotType?: string;
  /**
  * local_snapshot_retention_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/protection_rule#local_snapshot_retention_policy ProtectionRule#local_snapshot_retention_policy}
  */
  readonly localSnapshotRetentionPolicy?: ProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListLocalSnapshotRetentionPolicy;
  /**
  * remote_snapshot_retention_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/protection_rule#remote_snapshot_retention_policy ProtectionRule#remote_snapshot_retention_policy}
  */
  readonly remoteSnapshotRetentionPolicy?: ProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListRemoteSnapshotRetentionPolicy;
}

export function protectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListStructToTerraform(struct?: ProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_suspend_timeout_secs: cdktf.numberToTerraform(struct!.autoSuspendTimeoutSecs),
    recovery_point_objective_secs: cdktf.numberToTerraform(struct!.recoveryPointObjectiveSecs),
    snapshot_type: cdktf.stringToTerraform(struct!.snapshotType),
    local_snapshot_retention_policy: protectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListLocalSnapshotRetentionPolicyToTerraform(struct!.localSnapshotRetentionPolicy),
    remote_snapshot_retention_policy: protectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListRemoteSnapshotRetentionPolicyToTerraform(struct!.remoteSnapshotRetentionPolicy),
  }
}


export function protectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListStructToHclTerraform(struct?: ProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_suspend_timeout_secs: {
      value: cdktf.numberToHclTerraform(struct!.autoSuspendTimeoutSecs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recovery_point_objective_secs: {
      value: cdktf.numberToHclTerraform(struct!.recoveryPointObjectiveSecs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snapshot_type: {
      value: cdktf.stringToHclTerraform(struct!.snapshotType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_snapshot_retention_policy: {
      value: protectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListLocalSnapshotRetentionPolicyToHclTerraform(struct!.localSnapshotRetentionPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListLocalSnapshotRetentionPolicyList",
    },
    remote_snapshot_retention_policy: {
      value: protectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListRemoteSnapshotRetentionPolicyToHclTerraform(struct!.remoteSnapshotRetentionPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListRemoteSnapshotRetentionPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoSuspendTimeoutSecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoSuspendTimeoutSecs = this._autoSuspendTimeoutSecs;
    }
    if (this._recoveryPointObjectiveSecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryPointObjectiveSecs = this._recoveryPointObjectiveSecs;
    }
    if (this._snapshotType !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotType = this._snapshotType;
    }
    if (this._localSnapshotRetentionPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSnapshotRetentionPolicy = this._localSnapshotRetentionPolicy?.internalValue;
    }
    if (this._remoteSnapshotRetentionPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteSnapshotRetentionPolicy = this._remoteSnapshotRetentionPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoSuspendTimeoutSecs = undefined;
      this._recoveryPointObjectiveSecs = undefined;
      this._snapshotType = undefined;
      this._localSnapshotRetentionPolicy.internalValue = undefined;
      this._remoteSnapshotRetentionPolicy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoSuspendTimeoutSecs = value.autoSuspendTimeoutSecs;
      this._recoveryPointObjectiveSecs = value.recoveryPointObjectiveSecs;
      this._snapshotType = value.snapshotType;
      this._localSnapshotRetentionPolicy.internalValue = value.localSnapshotRetentionPolicy;
      this._remoteSnapshotRetentionPolicy.internalValue = value.remoteSnapshotRetentionPolicy;
    }
  }

  // auto_suspend_timeout_secs - computed: true, optional: true, required: false
  private _autoSuspendTimeoutSecs?: number; 
  public get autoSuspendTimeoutSecs() {
    return this.getNumberAttribute('auto_suspend_timeout_secs');
  }
  public set autoSuspendTimeoutSecs(value: number) {
    this._autoSuspendTimeoutSecs = value;
  }
  public resetAutoSuspendTimeoutSecs() {
    this._autoSuspendTimeoutSecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSuspendTimeoutSecsInput() {
    return this._autoSuspendTimeoutSecs;
  }

  // recovery_point_objective_secs - computed: false, optional: false, required: true
  private _recoveryPointObjectiveSecs?: number; 
  public get recoveryPointObjectiveSecs() {
    return this.getNumberAttribute('recovery_point_objective_secs');
  }
  public set recoveryPointObjectiveSecs(value: number) {
    this._recoveryPointObjectiveSecs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryPointObjectiveSecsInput() {
    return this._recoveryPointObjectiveSecs;
  }

  // snapshot_type - computed: true, optional: true, required: false
  private _snapshotType?: string; 
  public get snapshotType() {
    return this.getStringAttribute('snapshot_type');
  }
  public set snapshotType(value: string) {
    this._snapshotType = value;
  }
  public resetSnapshotType() {
    this._snapshotType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotTypeInput() {
    return this._snapshotType;
  }

  // local_snapshot_retention_policy - computed: false, optional: true, required: false
  private _localSnapshotRetentionPolicy = new ProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListLocalSnapshotRetentionPolicyOutputReference(this, "local_snapshot_retention_policy");
  public get localSnapshotRetentionPolicy() {
    return this._localSnapshotRetentionPolicy;
  }
  public putLocalSnapshotRetentionPolicy(value: ProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListLocalSnapshotRetentionPolicy) {
    this._localSnapshotRetentionPolicy.internalValue = value;
  }
  public resetLocalSnapshotRetentionPolicy() {
    this._localSnapshotRetentionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSnapshotRetentionPolicyInput() {
    return this._localSnapshotRetentionPolicy.internalValue;
  }

  // remote_snapshot_retention_policy - computed: false, optional: true, required: false
  private _remoteSnapshotRetentionPolicy = new ProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListRemoteSnapshotRetentionPolicyOutputReference(this, "remote_snapshot_retention_policy");
  public get remoteSnapshotRetentionPolicy() {
    return this._remoteSnapshotRetentionPolicy;
  }
  public putRemoteSnapshotRetentionPolicy(value: ProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListRemoteSnapshotRetentionPolicy) {
    this._remoteSnapshotRetentionPolicy.internalValue = value;
  }
  public resetRemoteSnapshotRetentionPolicy() {
    this._remoteSnapshotRetentionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteSnapshotRetentionPolicyInput() {
    return this._remoteSnapshotRetentionPolicy.internalValue;
  }
}

export class ProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListStructList extends cdktf.ComplexList {
  public internalValue? : ProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListStruct[] | cdktf.IResolvable

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
  public get(index: number): ProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListStructOutputReference {
    return new ProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProtectionRuleAvailabilityZoneConnectivityListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/protection_rule#destination_availability_zone_index ProtectionRule#destination_availability_zone_index}
  */
  readonly destinationAvailabilityZoneIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/protection_rule#source_availability_zone_index ProtectionRule#source_availability_zone_index}
  */
  readonly sourceAvailabilityZoneIndex?: number;
  /**
  * snapshot_schedule_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/protection_rule#snapshot_schedule_list ProtectionRule#snapshot_schedule_list}
  */
  readonly snapshotScheduleList?: ProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListStruct[] | cdktf.IResolvable;
}

export function protectionRuleAvailabilityZoneConnectivityListStructToTerraform(struct?: ProtectionRuleAvailabilityZoneConnectivityListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_availability_zone_index: cdktf.numberToTerraform(struct!.destinationAvailabilityZoneIndex),
    source_availability_zone_index: cdktf.numberToTerraform(struct!.sourceAvailabilityZoneIndex),
    snapshot_schedule_list: cdktf.listMapper(protectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListStructToTerraform, true)(struct!.snapshotScheduleList),
  }
}


export function protectionRuleAvailabilityZoneConnectivityListStructToHclTerraform(struct?: ProtectionRuleAvailabilityZoneConnectivityListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_availability_zone_index: {
      value: cdktf.numberToHclTerraform(struct!.destinationAvailabilityZoneIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_availability_zone_index: {
      value: cdktf.numberToHclTerraform(struct!.sourceAvailabilityZoneIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snapshot_schedule_list: {
      value: cdktf.listMapperHcl(protectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListStructToHclTerraform, true)(struct!.snapshotScheduleList),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectionRuleAvailabilityZoneConnectivityListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProtectionRuleAvailabilityZoneConnectivityListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationAvailabilityZoneIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationAvailabilityZoneIndex = this._destinationAvailabilityZoneIndex;
    }
    if (this._sourceAvailabilityZoneIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAvailabilityZoneIndex = this._sourceAvailabilityZoneIndex;
    }
    if (this._snapshotScheduleList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotScheduleList = this._snapshotScheduleList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectionRuleAvailabilityZoneConnectivityListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationAvailabilityZoneIndex = undefined;
      this._sourceAvailabilityZoneIndex = undefined;
      this._snapshotScheduleList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationAvailabilityZoneIndex = value.destinationAvailabilityZoneIndex;
      this._sourceAvailabilityZoneIndex = value.sourceAvailabilityZoneIndex;
      this._snapshotScheduleList.internalValue = value.snapshotScheduleList;
    }
  }

  // destination_availability_zone_index - computed: true, optional: true, required: false
  private _destinationAvailabilityZoneIndex?: number; 
  public get destinationAvailabilityZoneIndex() {
    return this.getNumberAttribute('destination_availability_zone_index');
  }
  public set destinationAvailabilityZoneIndex(value: number) {
    this._destinationAvailabilityZoneIndex = value;
  }
  public resetDestinationAvailabilityZoneIndex() {
    this._destinationAvailabilityZoneIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAvailabilityZoneIndexInput() {
    return this._destinationAvailabilityZoneIndex;
  }

  // source_availability_zone_index - computed: true, optional: true, required: false
  private _sourceAvailabilityZoneIndex?: number; 
  public get sourceAvailabilityZoneIndex() {
    return this.getNumberAttribute('source_availability_zone_index');
  }
  public set sourceAvailabilityZoneIndex(value: number) {
    this._sourceAvailabilityZoneIndex = value;
  }
  public resetSourceAvailabilityZoneIndex() {
    this._sourceAvailabilityZoneIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAvailabilityZoneIndexInput() {
    return this._sourceAvailabilityZoneIndex;
  }

  // snapshot_schedule_list - computed: false, optional: true, required: false
  private _snapshotScheduleList = new ProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListStructList(this, "snapshot_schedule_list", false);
  public get snapshotScheduleList() {
    return this._snapshotScheduleList;
  }
  public putSnapshotScheduleList(value: ProtectionRuleAvailabilityZoneConnectivityListSnapshotScheduleListStruct[] | cdktf.IResolvable) {
    this._snapshotScheduleList.internalValue = value;
  }
  public resetSnapshotScheduleList() {
    this._snapshotScheduleList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotScheduleListInput() {
    return this._snapshotScheduleList.internalValue;
  }
}

export class ProtectionRuleAvailabilityZoneConnectivityListStructList extends cdktf.ComplexList {
  public internalValue? : ProtectionRuleAvailabilityZoneConnectivityListStruct[] | cdktf.IResolvable

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
  public get(index: number): ProtectionRuleAvailabilityZoneConnectivityListStructOutputReference {
    return new ProtectionRuleAvailabilityZoneConnectivityListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProtectionRuleCategories {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/protection_rule#name ProtectionRule#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/protection_rule#value ProtectionRule#value}
  */
  readonly value?: string;
}

export function protectionRuleCategoriesToTerraform(struct?: ProtectionRuleCategories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function protectionRuleCategoriesToHclTerraform(struct?: ProtectionRuleCategories | cdktf.IResolvable): any {
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

export class ProtectionRuleCategoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProtectionRuleCategories | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ProtectionRuleCategories | cdktf.IResolvable | undefined) {
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

export class ProtectionRuleCategoriesList extends cdktf.ComplexList {
  public internalValue? : ProtectionRuleCategories[] | cdktf.IResolvable

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
  public get(index: number): ProtectionRuleCategoriesOutputReference {
    return new ProtectionRuleCategoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProtectionRuleCategoryFilterParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/protection_rule#name ProtectionRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/protection_rule#values ProtectionRule#values}
  */
  readonly values: string[];
}

export function protectionRuleCategoryFilterParamsToTerraform(struct?: ProtectionRuleCategoryFilterParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function protectionRuleCategoryFilterParamsToHclTerraform(struct?: ProtectionRuleCategoryFilterParams | cdktf.IResolvable): any {
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

export class ProtectionRuleCategoryFilterParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProtectionRuleCategoryFilterParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectionRuleCategoryFilterParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
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

export class ProtectionRuleCategoryFilterParamsList extends cdktf.ComplexList {
  public internalValue? : ProtectionRuleCategoryFilterParams[] | cdktf.IResolvable

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
  public get(index: number): ProtectionRuleCategoryFilterParamsOutputReference {
    return new ProtectionRuleCategoryFilterParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProtectionRuleCategoryFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/protection_rule#kind_list ProtectionRule#kind_list}
  */
  readonly kindList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/protection_rule#type ProtectionRule#type}
  */
  readonly type?: string;
  /**
  * params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/protection_rule#params ProtectionRule#params}
  */
  readonly params?: ProtectionRuleCategoryFilterParams[] | cdktf.IResolvable;
}

export function protectionRuleCategoryFilterToTerraform(struct?: ProtectionRuleCategoryFilterOutputReference | ProtectionRuleCategoryFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.kindList),
    type: cdktf.stringToTerraform(struct!.type),
    params: cdktf.listMapper(protectionRuleCategoryFilterParamsToTerraform, true)(struct!.params),
  }
}


export function protectionRuleCategoryFilterToHclTerraform(struct?: ProtectionRuleCategoryFilterOutputReference | ProtectionRuleCategoryFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.kindList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    params: {
      value: cdktf.listMapperHcl(protectionRuleCategoryFilterParamsToHclTerraform, true)(struct!.params),
      isBlock: true,
      type: "set",
      storageClassType: "ProtectionRuleCategoryFilterParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectionRuleCategoryFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectionRuleCategoryFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kindList !== undefined) {
      hasAnyValues = true;
      internalValueResult.kindList = this._kindList;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._params?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.params = this._params?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectionRuleCategoryFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kindList = undefined;
      this._type = undefined;
      this._params.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kindList = value.kindList;
      this._type = value.type;
      this._params.internalValue = value.params;
    }
  }

  // kind_list - computed: true, optional: true, required: false
  private _kindList?: string[]; 
  public get kindList() {
    return this.getListAttribute('kind_list');
  }
  public set kindList(value: string[]) {
    this._kindList = value;
  }
  public resetKindList() {
    this._kindList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindListInput() {
    return this._kindList;
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

  // params - computed: false, optional: true, required: false
  private _params = new ProtectionRuleCategoryFilterParamsList(this, "params", true);
  public get params() {
    return this._params;
  }
  public putParams(value: ProtectionRuleCategoryFilterParams[] | cdktf.IResolvable) {
    this._params.internalValue = value;
  }
  public resetParams() {
    this._params.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params.internalValue;
  }
}
export interface ProtectionRuleOrderedAvailabilityZoneListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/protection_rule#availability_zone_url ProtectionRule#availability_zone_url}
  */
  readonly availabilityZoneUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/protection_rule#cluster_uuid ProtectionRule#cluster_uuid}
  */
  readonly clusterUuid?: string;
}

export function protectionRuleOrderedAvailabilityZoneListStructToTerraform(struct?: ProtectionRuleOrderedAvailabilityZoneListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_zone_url: cdktf.stringToTerraform(struct!.availabilityZoneUrl),
    cluster_uuid: cdktf.stringToTerraform(struct!.clusterUuid),
  }
}


export function protectionRuleOrderedAvailabilityZoneListStructToHclTerraform(struct?: ProtectionRuleOrderedAvailabilityZoneListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_zone_url: {
      value: cdktf.stringToHclTerraform(struct!.availabilityZoneUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_uuid: {
      value: cdktf.stringToHclTerraform(struct!.clusterUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectionRuleOrderedAvailabilityZoneListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProtectionRuleOrderedAvailabilityZoneListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZoneUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZoneUrl = this._availabilityZoneUrl;
    }
    if (this._clusterUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterUuid = this._clusterUuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectionRuleOrderedAvailabilityZoneListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityZoneUrl = undefined;
      this._clusterUuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityZoneUrl = value.availabilityZoneUrl;
      this._clusterUuid = value.clusterUuid;
    }
  }

  // availability_zone_url - computed: true, optional: true, required: false
  private _availabilityZoneUrl?: string; 
  public get availabilityZoneUrl() {
    return this.getStringAttribute('availability_zone_url');
  }
  public set availabilityZoneUrl(value: string) {
    this._availabilityZoneUrl = value;
  }
  public resetAvailabilityZoneUrl() {
    this._availabilityZoneUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneUrlInput() {
    return this._availabilityZoneUrl;
  }

  // cluster_uuid - computed: true, optional: true, required: false
  private _clusterUuid?: string; 
  public get clusterUuid() {
    return this.getStringAttribute('cluster_uuid');
  }
  public set clusterUuid(value: string) {
    this._clusterUuid = value;
  }
  public resetClusterUuid() {
    this._clusterUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterUuidInput() {
    return this._clusterUuid;
  }
}

export class ProtectionRuleOrderedAvailabilityZoneListStructList extends cdktf.ComplexList {
  public internalValue? : ProtectionRuleOrderedAvailabilityZoneListStruct[] | cdktf.IResolvable

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
  public get(index: number): ProtectionRuleOrderedAvailabilityZoneListStructOutputReference {
    return new ProtectionRuleOrderedAvailabilityZoneListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProtectionRuleOwnerReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/protection_rule#kind ProtectionRule#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/protection_rule#name ProtectionRule#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/protection_rule#uuid ProtectionRule#uuid}
  */
  readonly uuid?: string;
}

export function protectionRuleOwnerReferenceToTerraform(struct?: ProtectionRuleOwnerReferenceOutputReference | ProtectionRuleOwnerReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function protectionRuleOwnerReferenceToHclTerraform(struct?: ProtectionRuleOwnerReferenceOutputReference | ProtectionRuleOwnerReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectionRuleOwnerReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectionRuleOwnerReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectionRuleOwnerReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kind = undefined;
      this._name = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kind = value.kind;
      this._name = value.name;
      this._uuid = value.uuid;
    }
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

  // uuid - computed: false, optional: true, required: false
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
}
export interface ProtectionRuleProjectReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/protection_rule#kind ProtectionRule#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/protection_rule#name ProtectionRule#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/protection_rule#uuid ProtectionRule#uuid}
  */
  readonly uuid?: string;
}

export function protectionRuleProjectReferenceToTerraform(struct?: ProtectionRuleProjectReferenceOutputReference | ProtectionRuleProjectReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function protectionRuleProjectReferenceToHclTerraform(struct?: ProtectionRuleProjectReferenceOutputReference | ProtectionRuleProjectReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectionRuleProjectReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectionRuleProjectReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectionRuleProjectReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kind = undefined;
      this._name = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kind = value.kind;
      this._name = value.name;
      this._uuid = value.uuid;
    }
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

  // uuid - computed: false, optional: true, required: false
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
}
export interface ProtectionRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/protection_rule#create ProtectionRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/protection_rule#delete ProtectionRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/protection_rule#update ProtectionRule#update}
  */
  readonly update?: string;
}

export function protectionRuleTimeoutsToTerraform(struct?: ProtectionRuleTimeouts | cdktf.IResolvable): any {
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


export function protectionRuleTimeoutsToHclTerraform(struct?: ProtectionRuleTimeouts | cdktf.IResolvable): any {
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

export class ProtectionRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ProtectionRuleTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ProtectionRuleTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/protection_rule nutanix_protection_rule}
*/
export class ProtectionRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_protection_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProtectionRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProtectionRule to import
  * @param importFromId The id of the existing ProtectionRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/protection_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProtectionRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_protection_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/protection_rule nutanix_protection_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProtectionRuleConfig
  */
  public constructor(scope: Construct, id: string, config: ProtectionRuleConfig) {
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
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._startTime = config.startTime;
    this._availabilityZoneConnectivityList.internalValue = config.availabilityZoneConnectivityList;
    this._categories.internalValue = config.categories;
    this._categoryFilter.internalValue = config.categoryFilter;
    this._orderedAvailabilityZoneList.internalValue = config.orderedAvailabilityZoneList;
    this._ownerReference.internalValue = config.ownerReference;
    this._projectReference.internalValue = config.projectReference;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_version - computed: true, optional: false, required: false
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // availability_zone_connectivity_list - computed: false, optional: false, required: true
  private _availabilityZoneConnectivityList = new ProtectionRuleAvailabilityZoneConnectivityListStructList(this, "availability_zone_connectivity_list", false);
  public get availabilityZoneConnectivityList() {
    return this._availabilityZoneConnectivityList;
  }
  public putAvailabilityZoneConnectivityList(value: ProtectionRuleAvailabilityZoneConnectivityListStruct[] | cdktf.IResolvable) {
    this._availabilityZoneConnectivityList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneConnectivityListInput() {
    return this._availabilityZoneConnectivityList.internalValue;
  }

  // categories - computed: false, optional: true, required: false
  private _categories = new ProtectionRuleCategoriesList(this, "categories", true);
  public get categories() {
    return this._categories;
  }
  public putCategories(value: ProtectionRuleCategories[] | cdktf.IResolvable) {
    this._categories.internalValue = value;
  }
  public resetCategories() {
    this._categories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories.internalValue;
  }

  // category_filter - computed: false, optional: true, required: false
  private _categoryFilter = new ProtectionRuleCategoryFilterOutputReference(this, "category_filter");
  public get categoryFilter() {
    return this._categoryFilter;
  }
  public putCategoryFilter(value: ProtectionRuleCategoryFilter) {
    this._categoryFilter.internalValue = value;
  }
  public resetCategoryFilter() {
    this._categoryFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryFilterInput() {
    return this._categoryFilter.internalValue;
  }

  // ordered_availability_zone_list - computed: false, optional: false, required: true
  private _orderedAvailabilityZoneList = new ProtectionRuleOrderedAvailabilityZoneListStructList(this, "ordered_availability_zone_list", false);
  public get orderedAvailabilityZoneList() {
    return this._orderedAvailabilityZoneList;
  }
  public putOrderedAvailabilityZoneList(value: ProtectionRuleOrderedAvailabilityZoneListStruct[] | cdktf.IResolvable) {
    this._orderedAvailabilityZoneList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderedAvailabilityZoneListInput() {
    return this._orderedAvailabilityZoneList.internalValue;
  }

  // owner_reference - computed: false, optional: true, required: false
  private _ownerReference = new ProtectionRuleOwnerReferenceOutputReference(this, "owner_reference");
  public get ownerReference() {
    return this._ownerReference;
  }
  public putOwnerReference(value: ProtectionRuleOwnerReference) {
    this._ownerReference.internalValue = value;
  }
  public resetOwnerReference() {
    this._ownerReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerReferenceInput() {
    return this._ownerReference.internalValue;
  }

  // project_reference - computed: false, optional: true, required: false
  private _projectReference = new ProtectionRuleProjectReferenceOutputReference(this, "project_reference");
  public get projectReference() {
    return this._projectReference;
  }
  public putProjectReference(value: ProtectionRuleProjectReference) {
    this._projectReference.internalValue = value;
  }
  public resetProjectReference() {
    this._projectReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectReferenceInput() {
    return this._projectReference.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ProtectionRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ProtectionRuleTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      start_time: cdktf.stringToTerraform(this._startTime),
      availability_zone_connectivity_list: cdktf.listMapper(protectionRuleAvailabilityZoneConnectivityListStructToTerraform, true)(this._availabilityZoneConnectivityList.internalValue),
      categories: cdktf.listMapper(protectionRuleCategoriesToTerraform, true)(this._categories.internalValue),
      category_filter: protectionRuleCategoryFilterToTerraform(this._categoryFilter.internalValue),
      ordered_availability_zone_list: cdktf.listMapper(protectionRuleOrderedAvailabilityZoneListStructToTerraform, true)(this._orderedAvailabilityZoneList.internalValue),
      owner_reference: protectionRuleOwnerReferenceToTerraform(this._ownerReference.internalValue),
      project_reference: protectionRuleProjectReferenceToTerraform(this._projectReference.internalValue),
      timeouts: protectionRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_time: {
        value: cdktf.stringToHclTerraform(this._startTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      availability_zone_connectivity_list: {
        value: cdktf.listMapperHcl(protectionRuleAvailabilityZoneConnectivityListStructToHclTerraform, true)(this._availabilityZoneConnectivityList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProtectionRuleAvailabilityZoneConnectivityListStructList",
      },
      categories: {
        value: cdktf.listMapperHcl(protectionRuleCategoriesToHclTerraform, true)(this._categories.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ProtectionRuleCategoriesList",
      },
      category_filter: {
        value: protectionRuleCategoryFilterToHclTerraform(this._categoryFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProtectionRuleCategoryFilterList",
      },
      ordered_availability_zone_list: {
        value: cdktf.listMapperHcl(protectionRuleOrderedAvailabilityZoneListStructToHclTerraform, true)(this._orderedAvailabilityZoneList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProtectionRuleOrderedAvailabilityZoneListStructList",
      },
      owner_reference: {
        value: protectionRuleOwnerReferenceToHclTerraform(this._ownerReference.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProtectionRuleOwnerReferenceList",
      },
      project_reference: {
        value: protectionRuleProjectReferenceToHclTerraform(this._projectReference.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProtectionRuleProjectReferenceList",
      },
      timeouts: {
        value: protectionRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ProtectionRuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
