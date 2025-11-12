// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/protection_policy_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProtectionPolicyV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/protection_policy_v2#category_ids ProtectionPolicyV2#category_ids}
  */
  readonly categoryIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/protection_policy_v2#description ProtectionPolicyV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/protection_policy_v2#id ProtectionPolicyV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/protection_policy_v2#name ProtectionPolicyV2#name}
  */
  readonly name: string;
  /**
  * replication_configurations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/protection_policy_v2#replication_configurations ProtectionPolicyV2#replication_configurations}
  */
  readonly replicationConfigurations: ProtectionPolicyV2ReplicationConfigurations[] | cdktf.IResolvable;
  /**
  * replication_locations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/protection_policy_v2#replication_locations ProtectionPolicyV2#replication_locations}
  */
  readonly replicationLocations: ProtectionPolicyV2ReplicationLocations[] | cdktf.IResolvable;
}
export interface ProtectionPolicyV2Links {
}

export function protectionPolicyV2LinksToTerraform(struct?: ProtectionPolicyV2Links): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function protectionPolicyV2LinksToHclTerraform(struct?: ProtectionPolicyV2Links): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProtectionPolicyV2LinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProtectionPolicyV2Links | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectionPolicyV2Links | undefined) {
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

export class ProtectionPolicyV2LinksList extends cdktf.ComplexList {

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
  public get(index: number): ProtectionPolicyV2LinksOutputReference {
    return new ProtectionPolicyV2LinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionLocal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/protection_policy_v2#frequency ProtectionPolicyV2#frequency}
  */
  readonly frequency: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/protection_policy_v2#snapshot_interval_type ProtectionPolicyV2#snapshot_interval_type}
  */
  readonly snapshotIntervalType?: string;
}

export function protectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionLocalToTerraform(struct?: ProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionLocalOutputReference | ProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionLocal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frequency: cdktf.numberToTerraform(struct!.frequency),
    snapshot_interval_type: cdktf.stringToTerraform(struct!.snapshotIntervalType),
  }
}


export function protectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionLocalToHclTerraform(struct?: ProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionLocalOutputReference | ProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionLocal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    frequency: {
      value: cdktf.numberToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snapshot_interval_type: {
      value: cdktf.stringToHclTerraform(struct!.snapshotIntervalType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionLocalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionLocal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._snapshotIntervalType !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotIntervalType = this._snapshotIntervalType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionLocal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._frequency = undefined;
      this._snapshotIntervalType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._frequency = value.frequency;
      this._snapshotIntervalType = value.snapshotIntervalType;
    }
  }

  // frequency - computed: false, optional: false, required: true
  private _frequency?: number; 
  public get frequency() {
    return this.getNumberAttribute('frequency');
  }
  public set frequency(value: number) {
    this._frequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // snapshot_interval_type - computed: false, optional: true, required: false
  private _snapshotIntervalType?: string; 
  public get snapshotIntervalType() {
    return this.getStringAttribute('snapshot_interval_type');
  }
  public set snapshotIntervalType(value: string) {
    this._snapshotIntervalType = value;
  }
  public resetSnapshotIntervalType() {
    this._snapshotIntervalType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIntervalTypeInput() {
    return this._snapshotIntervalType;
  }
}
export interface ProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionRemote {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/protection_policy_v2#frequency ProtectionPolicyV2#frequency}
  */
  readonly frequency: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/protection_policy_v2#snapshot_interval_type ProtectionPolicyV2#snapshot_interval_type}
  */
  readonly snapshotIntervalType?: string;
}

export function protectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionRemoteToTerraform(struct?: ProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionRemoteOutputReference | ProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionRemote): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frequency: cdktf.numberToTerraform(struct!.frequency),
    snapshot_interval_type: cdktf.stringToTerraform(struct!.snapshotIntervalType),
  }
}


export function protectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionRemoteToHclTerraform(struct?: ProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionRemoteOutputReference | ProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionRemote): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    frequency: {
      value: cdktf.numberToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snapshot_interval_type: {
      value: cdktf.stringToHclTerraform(struct!.snapshotIntervalType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionRemoteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionRemote | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._snapshotIntervalType !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotIntervalType = this._snapshotIntervalType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionRemote | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._frequency = undefined;
      this._snapshotIntervalType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._frequency = value.frequency;
      this._snapshotIntervalType = value.snapshotIntervalType;
    }
  }

  // frequency - computed: false, optional: false, required: true
  private _frequency?: number; 
  public get frequency() {
    return this.getNumberAttribute('frequency');
  }
  public set frequency(value: number) {
    this._frequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // snapshot_interval_type - computed: false, optional: true, required: false
  private _snapshotIntervalType?: string; 
  public get snapshotIntervalType() {
    return this.getStringAttribute('snapshot_interval_type');
  }
  public set snapshotIntervalType(value: string) {
    this._snapshotIntervalType = value;
  }
  public resetSnapshotIntervalType() {
    this._snapshotIntervalType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIntervalTypeInput() {
    return this._snapshotIntervalType;
  }
}
export interface ProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetention {
  /**
  * local block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/protection_policy_v2#local ProtectionPolicyV2#local}
  */
  readonly local: ProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionLocal;
  /**
  * remote block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/protection_policy_v2#remote ProtectionPolicyV2#remote}
  */
  readonly remote?: ProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionRemote;
}

export function protectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionToTerraform(struct?: ProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionOutputReference | ProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local: protectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionLocalToTerraform(struct!.local),
    remote: protectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionRemoteToTerraform(struct!.remote),
  }
}


export function protectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionToHclTerraform(struct?: ProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionOutputReference | ProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local: {
      value: protectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionLocalToHclTerraform(struct!.local),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionLocalList",
    },
    remote: {
      value: protectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionRemoteToHclTerraform(struct!.remote),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionRemoteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._local?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.local = this._local?.internalValue;
    }
    if (this._remote?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remote = this._remote?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._local.internalValue = undefined;
      this._remote.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._local.internalValue = value.local;
      this._remote.internalValue = value.remote;
    }
  }

  // local - computed: false, optional: false, required: true
  private _local = new ProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionLocalOutputReference(this, "local");
  public get local() {
    return this._local;
  }
  public putLocal(value: ProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionLocal) {
    this._local.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localInput() {
    return this._local.internalValue;
  }

  // remote - computed: false, optional: true, required: false
  private _remote = new ProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionRemoteOutputReference(this, "remote");
  public get remote() {
    return this._remote;
  }
  public putRemote(value: ProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionRemote) {
    this._remote.internalValue = value;
  }
  public resetRemote() {
    this._remote.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteInput() {
    return this._remote.internalValue;
  }
}
export interface ProtectionPolicyV2ReplicationConfigurationsScheduleRetentionLinearRetention {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/protection_policy_v2#local ProtectionPolicyV2#local}
  */
  readonly local: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/protection_policy_v2#remote ProtectionPolicyV2#remote}
  */
  readonly remote?: number;
}

export function protectionPolicyV2ReplicationConfigurationsScheduleRetentionLinearRetentionToTerraform(struct?: ProtectionPolicyV2ReplicationConfigurationsScheduleRetentionLinearRetentionOutputReference | ProtectionPolicyV2ReplicationConfigurationsScheduleRetentionLinearRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local: cdktf.numberToTerraform(struct!.local),
    remote: cdktf.numberToTerraform(struct!.remote),
  }
}


export function protectionPolicyV2ReplicationConfigurationsScheduleRetentionLinearRetentionToHclTerraform(struct?: ProtectionPolicyV2ReplicationConfigurationsScheduleRetentionLinearRetentionOutputReference | ProtectionPolicyV2ReplicationConfigurationsScheduleRetentionLinearRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local: {
      value: cdktf.numberToHclTerraform(struct!.local),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remote: {
      value: cdktf.numberToHclTerraform(struct!.remote),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectionPolicyV2ReplicationConfigurationsScheduleRetentionLinearRetentionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectionPolicyV2ReplicationConfigurationsScheduleRetentionLinearRetention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._local !== undefined) {
      hasAnyValues = true;
      internalValueResult.local = this._local;
    }
    if (this._remote !== undefined) {
      hasAnyValues = true;
      internalValueResult.remote = this._remote;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectionPolicyV2ReplicationConfigurationsScheduleRetentionLinearRetention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._local = undefined;
      this._remote = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._local = value.local;
      this._remote = value.remote;
    }
  }

  // local - computed: false, optional: false, required: true
  private _local?: number; 
  public get local() {
    return this.getNumberAttribute('local');
  }
  public set local(value: number) {
    this._local = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localInput() {
    return this._local;
  }

  // remote - computed: false, optional: true, required: false
  private _remote?: number; 
  public get remote() {
    return this.getNumberAttribute('remote');
  }
  public set remote(value: number) {
    this._remote = value;
  }
  public resetRemote() {
    this._remote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteInput() {
    return this._remote;
  }
}
export interface ProtectionPolicyV2ReplicationConfigurationsScheduleRetention {
  /**
  * auto_rollup_retention block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/protection_policy_v2#auto_rollup_retention ProtectionPolicyV2#auto_rollup_retention}
  */
  readonly autoRollupRetention?: ProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetention;
  /**
  * linear_retention block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/protection_policy_v2#linear_retention ProtectionPolicyV2#linear_retention}
  */
  readonly linearRetention?: ProtectionPolicyV2ReplicationConfigurationsScheduleRetentionLinearRetention;
}

export function protectionPolicyV2ReplicationConfigurationsScheduleRetentionToTerraform(struct?: ProtectionPolicyV2ReplicationConfigurationsScheduleRetentionOutputReference | ProtectionPolicyV2ReplicationConfigurationsScheduleRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_rollup_retention: protectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionToTerraform(struct!.autoRollupRetention),
    linear_retention: protectionPolicyV2ReplicationConfigurationsScheduleRetentionLinearRetentionToTerraform(struct!.linearRetention),
  }
}


export function protectionPolicyV2ReplicationConfigurationsScheduleRetentionToHclTerraform(struct?: ProtectionPolicyV2ReplicationConfigurationsScheduleRetentionOutputReference | ProtectionPolicyV2ReplicationConfigurationsScheduleRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_rollup_retention: {
      value: protectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionToHclTerraform(struct!.autoRollupRetention),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionList",
    },
    linear_retention: {
      value: protectionPolicyV2ReplicationConfigurationsScheduleRetentionLinearRetentionToHclTerraform(struct!.linearRetention),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectionPolicyV2ReplicationConfigurationsScheduleRetentionLinearRetentionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectionPolicyV2ReplicationConfigurationsScheduleRetentionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectionPolicyV2ReplicationConfigurationsScheduleRetention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoRollupRetention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRollupRetention = this._autoRollupRetention?.internalValue;
    }
    if (this._linearRetention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linearRetention = this._linearRetention?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectionPolicyV2ReplicationConfigurationsScheduleRetention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoRollupRetention.internalValue = undefined;
      this._linearRetention.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoRollupRetention.internalValue = value.autoRollupRetention;
      this._linearRetention.internalValue = value.linearRetention;
    }
  }

  // auto_rollup_retention - computed: false, optional: true, required: false
  private _autoRollupRetention = new ProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetentionOutputReference(this, "auto_rollup_retention");
  public get autoRollupRetention() {
    return this._autoRollupRetention;
  }
  public putAutoRollupRetention(value: ProtectionPolicyV2ReplicationConfigurationsScheduleRetentionAutoRollupRetention) {
    this._autoRollupRetention.internalValue = value;
  }
  public resetAutoRollupRetention() {
    this._autoRollupRetention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRollupRetentionInput() {
    return this._autoRollupRetention.internalValue;
  }

  // linear_retention - computed: false, optional: true, required: false
  private _linearRetention = new ProtectionPolicyV2ReplicationConfigurationsScheduleRetentionLinearRetentionOutputReference(this, "linear_retention");
  public get linearRetention() {
    return this._linearRetention;
  }
  public putLinearRetention(value: ProtectionPolicyV2ReplicationConfigurationsScheduleRetentionLinearRetention) {
    this._linearRetention.internalValue = value;
  }
  public resetLinearRetention() {
    this._linearRetention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linearRetentionInput() {
    return this._linearRetention.internalValue;
  }
}
export interface ProtectionPolicyV2ReplicationConfigurationsSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/protection_policy_v2#recovery_point_objective_time_seconds ProtectionPolicyV2#recovery_point_objective_time_seconds}
  */
  readonly recoveryPointObjectiveTimeSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/protection_policy_v2#recovery_point_type ProtectionPolicyV2#recovery_point_type}
  */
  readonly recoveryPointType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/protection_policy_v2#start_time ProtectionPolicyV2#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/protection_policy_v2#sync_replication_auto_suspend_timeout_seconds ProtectionPolicyV2#sync_replication_auto_suspend_timeout_seconds}
  */
  readonly syncReplicationAutoSuspendTimeoutSeconds?: number;
  /**
  * retention block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/protection_policy_v2#retention ProtectionPolicyV2#retention}
  */
  readonly retention?: ProtectionPolicyV2ReplicationConfigurationsScheduleRetention;
}

export function protectionPolicyV2ReplicationConfigurationsScheduleToTerraform(struct?: ProtectionPolicyV2ReplicationConfigurationsScheduleOutputReference | ProtectionPolicyV2ReplicationConfigurationsSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recovery_point_objective_time_seconds: cdktf.numberToTerraform(struct!.recoveryPointObjectiveTimeSeconds),
    recovery_point_type: cdktf.stringToTerraform(struct!.recoveryPointType),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    sync_replication_auto_suspend_timeout_seconds: cdktf.numberToTerraform(struct!.syncReplicationAutoSuspendTimeoutSeconds),
    retention: protectionPolicyV2ReplicationConfigurationsScheduleRetentionToTerraform(struct!.retention),
  }
}


export function protectionPolicyV2ReplicationConfigurationsScheduleToHclTerraform(struct?: ProtectionPolicyV2ReplicationConfigurationsScheduleOutputReference | ProtectionPolicyV2ReplicationConfigurationsSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    recovery_point_objective_time_seconds: {
      value: cdktf.numberToHclTerraform(struct!.recoveryPointObjectiveTimeSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recovery_point_type: {
      value: cdktf.stringToHclTerraform(struct!.recoveryPointType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_replication_auto_suspend_timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.syncReplicationAutoSuspendTimeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retention: {
      value: protectionPolicyV2ReplicationConfigurationsScheduleRetentionToHclTerraform(struct!.retention),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectionPolicyV2ReplicationConfigurationsScheduleRetentionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectionPolicyV2ReplicationConfigurationsScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectionPolicyV2ReplicationConfigurationsSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recoveryPointObjectiveTimeSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryPointObjectiveTimeSeconds = this._recoveryPointObjectiveTimeSeconds;
    }
    if (this._recoveryPointType !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryPointType = this._recoveryPointType;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._syncReplicationAutoSuspendTimeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncReplicationAutoSuspendTimeoutSeconds = this._syncReplicationAutoSuspendTimeoutSeconds;
    }
    if (this._retention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retention = this._retention?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectionPolicyV2ReplicationConfigurationsSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recoveryPointObjectiveTimeSeconds = undefined;
      this._recoveryPointType = undefined;
      this._startTime = undefined;
      this._syncReplicationAutoSuspendTimeoutSeconds = undefined;
      this._retention.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recoveryPointObjectiveTimeSeconds = value.recoveryPointObjectiveTimeSeconds;
      this._recoveryPointType = value.recoveryPointType;
      this._startTime = value.startTime;
      this._syncReplicationAutoSuspendTimeoutSeconds = value.syncReplicationAutoSuspendTimeoutSeconds;
      this._retention.internalValue = value.retention;
    }
  }

  // recovery_point_objective_time_seconds - computed: false, optional: true, required: false
  private _recoveryPointObjectiveTimeSeconds?: number; 
  public get recoveryPointObjectiveTimeSeconds() {
    return this.getNumberAttribute('recovery_point_objective_time_seconds');
  }
  public set recoveryPointObjectiveTimeSeconds(value: number) {
    this._recoveryPointObjectiveTimeSeconds = value;
  }
  public resetRecoveryPointObjectiveTimeSeconds() {
    this._recoveryPointObjectiveTimeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryPointObjectiveTimeSecondsInput() {
    return this._recoveryPointObjectiveTimeSeconds;
  }

  // recovery_point_type - computed: false, optional: true, required: false
  private _recoveryPointType?: string; 
  public get recoveryPointType() {
    return this.getStringAttribute('recovery_point_type');
  }
  public set recoveryPointType(value: string) {
    this._recoveryPointType = value;
  }
  public resetRecoveryPointType() {
    this._recoveryPointType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryPointTypeInput() {
    return this._recoveryPointType;
  }

  // start_time - computed: false, optional: true, required: false
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

  // sync_replication_auto_suspend_timeout_seconds - computed: false, optional: true, required: false
  private _syncReplicationAutoSuspendTimeoutSeconds?: number; 
  public get syncReplicationAutoSuspendTimeoutSeconds() {
    return this.getNumberAttribute('sync_replication_auto_suspend_timeout_seconds');
  }
  public set syncReplicationAutoSuspendTimeoutSeconds(value: number) {
    this._syncReplicationAutoSuspendTimeoutSeconds = value;
  }
  public resetSyncReplicationAutoSuspendTimeoutSeconds() {
    this._syncReplicationAutoSuspendTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncReplicationAutoSuspendTimeoutSecondsInput() {
    return this._syncReplicationAutoSuspendTimeoutSeconds;
  }

  // retention - computed: false, optional: true, required: false
  private _retention = new ProtectionPolicyV2ReplicationConfigurationsScheduleRetentionOutputReference(this, "retention");
  public get retention() {
    return this._retention;
  }
  public putRetention(value: ProtectionPolicyV2ReplicationConfigurationsScheduleRetention) {
    this._retention.internalValue = value;
  }
  public resetRetention() {
    this._retention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention.internalValue;
  }
}
export interface ProtectionPolicyV2ReplicationConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/protection_policy_v2#remote_location_label ProtectionPolicyV2#remote_location_label}
  */
  readonly remoteLocationLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/protection_policy_v2#source_location_label ProtectionPolicyV2#source_location_label}
  */
  readonly sourceLocationLabel: string;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/protection_policy_v2#schedule ProtectionPolicyV2#schedule}
  */
  readonly schedule: ProtectionPolicyV2ReplicationConfigurationsSchedule;
}

export function protectionPolicyV2ReplicationConfigurationsToTerraform(struct?: ProtectionPolicyV2ReplicationConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    remote_location_label: cdktf.stringToTerraform(struct!.remoteLocationLabel),
    source_location_label: cdktf.stringToTerraform(struct!.sourceLocationLabel),
    schedule: protectionPolicyV2ReplicationConfigurationsScheduleToTerraform(struct!.schedule),
  }
}


export function protectionPolicyV2ReplicationConfigurationsToHclTerraform(struct?: ProtectionPolicyV2ReplicationConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    remote_location_label: {
      value: cdktf.stringToHclTerraform(struct!.remoteLocationLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_location_label: {
      value: cdktf.stringToHclTerraform(struct!.sourceLocationLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule: {
      value: protectionPolicyV2ReplicationConfigurationsScheduleToHclTerraform(struct!.schedule),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectionPolicyV2ReplicationConfigurationsScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectionPolicyV2ReplicationConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProtectionPolicyV2ReplicationConfigurations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._remoteLocationLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteLocationLabel = this._remoteLocationLabel;
    }
    if (this._sourceLocationLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceLocationLabel = this._sourceLocationLabel;
    }
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectionPolicyV2ReplicationConfigurations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._remoteLocationLabel = undefined;
      this._sourceLocationLabel = undefined;
      this._schedule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._remoteLocationLabel = value.remoteLocationLabel;
      this._sourceLocationLabel = value.sourceLocationLabel;
      this._schedule.internalValue = value.schedule;
    }
  }

  // remote_location_label - computed: false, optional: true, required: false
  private _remoteLocationLabel?: string; 
  public get remoteLocationLabel() {
    return this.getStringAttribute('remote_location_label');
  }
  public set remoteLocationLabel(value: string) {
    this._remoteLocationLabel = value;
  }
  public resetRemoteLocationLabel() {
    this._remoteLocationLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteLocationLabelInput() {
    return this._remoteLocationLabel;
  }

  // source_location_label - computed: false, optional: false, required: true
  private _sourceLocationLabel?: string; 
  public get sourceLocationLabel() {
    return this.getStringAttribute('source_location_label');
  }
  public set sourceLocationLabel(value: string) {
    this._sourceLocationLabel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLocationLabelInput() {
    return this._sourceLocationLabel;
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule = new ProtectionPolicyV2ReplicationConfigurationsScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: ProtectionPolicyV2ReplicationConfigurationsSchedule) {
    this._schedule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }
}

export class ProtectionPolicyV2ReplicationConfigurationsList extends cdktf.ComplexList {
  public internalValue? : ProtectionPolicyV2ReplicationConfigurations[] | cdktf.IResolvable

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
  public get(index: number): ProtectionPolicyV2ReplicationConfigurationsOutputReference {
    return new ProtectionPolicyV2ReplicationConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProtectionPolicyV2ReplicationLocationsReplicationSubLocationClusterExtIds {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/protection_policy_v2#cluster_ext_ids ProtectionPolicyV2#cluster_ext_ids}
  */
  readonly clusterExtIds: string[];
}

export function protectionPolicyV2ReplicationLocationsReplicationSubLocationClusterExtIdsToTerraform(struct?: ProtectionPolicyV2ReplicationLocationsReplicationSubLocationClusterExtIdsOutputReference | ProtectionPolicyV2ReplicationLocationsReplicationSubLocationClusterExtIds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_ext_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clusterExtIds),
  }
}


export function protectionPolicyV2ReplicationLocationsReplicationSubLocationClusterExtIdsToHclTerraform(struct?: ProtectionPolicyV2ReplicationLocationsReplicationSubLocationClusterExtIdsOutputReference | ProtectionPolicyV2ReplicationLocationsReplicationSubLocationClusterExtIds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_ext_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clusterExtIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectionPolicyV2ReplicationLocationsReplicationSubLocationClusterExtIdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectionPolicyV2ReplicationLocationsReplicationSubLocationClusterExtIds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterExtIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterExtIds = this._clusterExtIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectionPolicyV2ReplicationLocationsReplicationSubLocationClusterExtIds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterExtIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterExtIds = value.clusterExtIds;
    }
  }

  // cluster_ext_ids - computed: false, optional: false, required: true
  private _clusterExtIds?: string[]; 
  public get clusterExtIds() {
    return this.getListAttribute('cluster_ext_ids');
  }
  public set clusterExtIds(value: string[]) {
    this._clusterExtIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterExtIdsInput() {
    return this._clusterExtIds;
  }
}
export interface ProtectionPolicyV2ReplicationLocationsReplicationSubLocation {
  /**
  * cluster_ext_ids block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/protection_policy_v2#cluster_ext_ids ProtectionPolicyV2#cluster_ext_ids}
  */
  readonly clusterExtIds: ProtectionPolicyV2ReplicationLocationsReplicationSubLocationClusterExtIds;
}

export function protectionPolicyV2ReplicationLocationsReplicationSubLocationToTerraform(struct?: ProtectionPolicyV2ReplicationLocationsReplicationSubLocationOutputReference | ProtectionPolicyV2ReplicationLocationsReplicationSubLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_ext_ids: protectionPolicyV2ReplicationLocationsReplicationSubLocationClusterExtIdsToTerraform(struct!.clusterExtIds),
  }
}


export function protectionPolicyV2ReplicationLocationsReplicationSubLocationToHclTerraform(struct?: ProtectionPolicyV2ReplicationLocationsReplicationSubLocationOutputReference | ProtectionPolicyV2ReplicationLocationsReplicationSubLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_ext_ids: {
      value: protectionPolicyV2ReplicationLocationsReplicationSubLocationClusterExtIdsToHclTerraform(struct!.clusterExtIds),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectionPolicyV2ReplicationLocationsReplicationSubLocationClusterExtIdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectionPolicyV2ReplicationLocationsReplicationSubLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectionPolicyV2ReplicationLocationsReplicationSubLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterExtIds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterExtIds = this._clusterExtIds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectionPolicyV2ReplicationLocationsReplicationSubLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterExtIds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterExtIds.internalValue = value.clusterExtIds;
    }
  }

  // cluster_ext_ids - computed: false, optional: false, required: true
  private _clusterExtIds = new ProtectionPolicyV2ReplicationLocationsReplicationSubLocationClusterExtIdsOutputReference(this, "cluster_ext_ids");
  public get clusterExtIds() {
    return this._clusterExtIds;
  }
  public putClusterExtIds(value: ProtectionPolicyV2ReplicationLocationsReplicationSubLocationClusterExtIds) {
    this._clusterExtIds.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterExtIdsInput() {
    return this._clusterExtIds.internalValue;
  }
}
export interface ProtectionPolicyV2ReplicationLocations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/protection_policy_v2#domain_manager_ext_id ProtectionPolicyV2#domain_manager_ext_id}
  */
  readonly domainManagerExtId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/protection_policy_v2#is_primary ProtectionPolicyV2#is_primary}
  */
  readonly isPrimary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/protection_policy_v2#label ProtectionPolicyV2#label}
  */
  readonly label: string;
  /**
  * replication_sub_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/protection_policy_v2#replication_sub_location ProtectionPolicyV2#replication_sub_location}
  */
  readonly replicationSubLocation?: ProtectionPolicyV2ReplicationLocationsReplicationSubLocation;
}

export function protectionPolicyV2ReplicationLocationsToTerraform(struct?: ProtectionPolicyV2ReplicationLocations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_manager_ext_id: cdktf.stringToTerraform(struct!.domainManagerExtId),
    is_primary: cdktf.booleanToTerraform(struct!.isPrimary),
    label: cdktf.stringToTerraform(struct!.label),
    replication_sub_location: protectionPolicyV2ReplicationLocationsReplicationSubLocationToTerraform(struct!.replicationSubLocation),
  }
}


export function protectionPolicyV2ReplicationLocationsToHclTerraform(struct?: ProtectionPolicyV2ReplicationLocations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_manager_ext_id: {
      value: cdktf.stringToHclTerraform(struct!.domainManagerExtId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_primary: {
      value: cdktf.booleanToHclTerraform(struct!.isPrimary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replication_sub_location: {
      value: protectionPolicyV2ReplicationLocationsReplicationSubLocationToHclTerraform(struct!.replicationSubLocation),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectionPolicyV2ReplicationLocationsReplicationSubLocationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectionPolicyV2ReplicationLocationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProtectionPolicyV2ReplicationLocations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainManagerExtId !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainManagerExtId = this._domainManagerExtId;
    }
    if (this._isPrimary !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPrimary = this._isPrimary;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._replicationSubLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationSubLocation = this._replicationSubLocation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectionPolicyV2ReplicationLocations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domainManagerExtId = undefined;
      this._isPrimary = undefined;
      this._label = undefined;
      this._replicationSubLocation.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domainManagerExtId = value.domainManagerExtId;
      this._isPrimary = value.isPrimary;
      this._label = value.label;
      this._replicationSubLocation.internalValue = value.replicationSubLocation;
    }
  }

  // domain_manager_ext_id - computed: false, optional: false, required: true
  private _domainManagerExtId?: string; 
  public get domainManagerExtId() {
    return this.getStringAttribute('domain_manager_ext_id');
  }
  public set domainManagerExtId(value: string) {
    this._domainManagerExtId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainManagerExtIdInput() {
    return this._domainManagerExtId;
  }

  // is_primary - computed: false, optional: true, required: false
  private _isPrimary?: boolean | cdktf.IResolvable; 
  public get isPrimary() {
    return this.getBooleanAttribute('is_primary');
  }
  public set isPrimary(value: boolean | cdktf.IResolvable) {
    this._isPrimary = value;
  }
  public resetIsPrimary() {
    this._isPrimary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPrimaryInput() {
    return this._isPrimary;
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // replication_sub_location - computed: false, optional: true, required: false
  private _replicationSubLocation = new ProtectionPolicyV2ReplicationLocationsReplicationSubLocationOutputReference(this, "replication_sub_location");
  public get replicationSubLocation() {
    return this._replicationSubLocation;
  }
  public putReplicationSubLocation(value: ProtectionPolicyV2ReplicationLocationsReplicationSubLocation) {
    this._replicationSubLocation.internalValue = value;
  }
  public resetReplicationSubLocation() {
    this._replicationSubLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationSubLocationInput() {
    return this._replicationSubLocation.internalValue;
  }
}

export class ProtectionPolicyV2ReplicationLocationsList extends cdktf.ComplexList {
  public internalValue? : ProtectionPolicyV2ReplicationLocations[] | cdktf.IResolvable

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
  public get(index: number): ProtectionPolicyV2ReplicationLocationsOutputReference {
    return new ProtectionPolicyV2ReplicationLocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/protection_policy_v2 nutanix_protection_policy_v2}
*/
export class ProtectionPolicyV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_protection_policy_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProtectionPolicyV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProtectionPolicyV2 to import
  * @param importFromId The id of the existing ProtectionPolicyV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/protection_policy_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProtectionPolicyV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_protection_policy_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/protection_policy_v2 nutanix_protection_policy_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProtectionPolicyV2Config
  */
  public constructor(scope: Construct, id: string, config: ProtectionPolicyV2Config) {
    super(scope, id, {
      terraformResourceType: 'nutanix_protection_policy_v2',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.3',
        providerVersionConstraint: '2.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._categoryIds = config.categoryIds;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._replicationConfigurations.internalValue = config.replicationConfigurations;
    this._replicationLocations.internalValue = config.replicationLocations;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category_ids - computed: false, optional: false, required: true
  private _categoryIds?: string[]; 
  public get categoryIds() {
    return this.getListAttribute('category_ids');
  }
  public set categoryIds(value: string[]) {
    this._categoryIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryIdsInput() {
    return this._categoryIds;
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

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
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
  private _links = new ProtectionPolicyV2LinksList(this, "links", false);
  public get links() {
    return this._links;
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

  // owner_ext_id - computed: true, optional: false, required: false
  public get ownerExtId() {
    return this.getStringAttribute('owner_ext_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // replication_configurations - computed: false, optional: false, required: true
  private _replicationConfigurations = new ProtectionPolicyV2ReplicationConfigurationsList(this, "replication_configurations", false);
  public get replicationConfigurations() {
    return this._replicationConfigurations;
  }
  public putReplicationConfigurations(value: ProtectionPolicyV2ReplicationConfigurations[] | cdktf.IResolvable) {
    this._replicationConfigurations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationConfigurationsInput() {
    return this._replicationConfigurations.internalValue;
  }

  // replication_locations - computed: false, optional: false, required: true
  private _replicationLocations = new ProtectionPolicyV2ReplicationLocationsList(this, "replication_locations", false);
  public get replicationLocations() {
    return this._replicationLocations;
  }
  public putReplicationLocations(value: ProtectionPolicyV2ReplicationLocations[] | cdktf.IResolvable) {
    this._replicationLocations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationLocationsInput() {
    return this._replicationLocations.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      category_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._categoryIds),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      replication_configurations: cdktf.listMapper(protectionPolicyV2ReplicationConfigurationsToTerraform, true)(this._replicationConfigurations.internalValue),
      replication_locations: cdktf.listMapper(protectionPolicyV2ReplicationLocationsToTerraform, true)(this._replicationLocations.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      category_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._categoryIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
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
      replication_configurations: {
        value: cdktf.listMapperHcl(protectionPolicyV2ReplicationConfigurationsToHclTerraform, true)(this._replicationConfigurations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProtectionPolicyV2ReplicationConfigurationsList",
      },
      replication_locations: {
        value: cdktf.listMapperHcl(protectionPolicyV2ReplicationLocationsToHclTerraform, true)(this._replicationLocations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProtectionPolicyV2ReplicationLocationsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
