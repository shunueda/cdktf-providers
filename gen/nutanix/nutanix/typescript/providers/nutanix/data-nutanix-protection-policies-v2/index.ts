// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/protection_policies_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNutanixProtectionPoliciesV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/protection_policies_v2#filter DataNutanixProtectionPoliciesV2#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/protection_policies_v2#id DataNutanixProtectionPoliciesV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/protection_policies_v2#limit DataNutanixProtectionPoliciesV2#limit}
  */
  readonly limit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/protection_policies_v2#order_by DataNutanixProtectionPoliciesV2#order_by}
  */
  readonly orderBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/protection_policies_v2#page DataNutanixProtectionPoliciesV2#page}
  */
  readonly page?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/protection_policies_v2#select DataNutanixProtectionPoliciesV2#select}
  */
  readonly select?: string;
}
export interface DataNutanixProtectionPoliciesV2ProtectionPoliciesLinks {
}

export function dataNutanixProtectionPoliciesV2ProtectionPoliciesLinksToTerraform(struct?: DataNutanixProtectionPoliciesV2ProtectionPoliciesLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixProtectionPoliciesV2ProtectionPoliciesLinksToHclTerraform(struct?: DataNutanixProtectionPoliciesV2ProtectionPoliciesLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixProtectionPoliciesV2ProtectionPoliciesLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixProtectionPoliciesV2ProtectionPoliciesLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixProtectionPoliciesV2ProtectionPoliciesLinks | undefined) {
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

export class DataNutanixProtectionPoliciesV2ProtectionPoliciesLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixProtectionPoliciesV2ProtectionPoliciesLinksOutputReference {
    return new DataNutanixProtectionPoliciesV2ProtectionPoliciesLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetentionAutoRollupRetentionLocal {
}

export function dataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetentionAutoRollupRetentionLocalToTerraform(struct?: DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetentionAutoRollupRetentionLocal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetentionAutoRollupRetentionLocalToHclTerraform(struct?: DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetentionAutoRollupRetentionLocal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetentionAutoRollupRetentionLocalOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetentionAutoRollupRetentionLocal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetentionAutoRollupRetentionLocal | undefined) {
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

export class DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetentionAutoRollupRetentionLocalList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetentionAutoRollupRetentionLocalOutputReference {
    return new DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetentionAutoRollupRetentionLocalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetentionAutoRollupRetentionRemote {
}

export function dataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetentionAutoRollupRetentionRemoteToTerraform(struct?: DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetentionAutoRollupRetentionRemote): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetentionAutoRollupRetentionRemoteToHclTerraform(struct?: DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetentionAutoRollupRetentionRemote): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetentionAutoRollupRetentionRemoteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetentionAutoRollupRetentionRemote | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetentionAutoRollupRetentionRemote | undefined) {
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

export class DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetentionAutoRollupRetentionRemoteList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetentionAutoRollupRetentionRemoteOutputReference {
    return new DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetentionAutoRollupRetentionRemoteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetentionAutoRollupRetention {
}

export function dataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetentionAutoRollupRetentionToTerraform(struct?: DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetentionAutoRollupRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetentionAutoRollupRetentionToHclTerraform(struct?: DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetentionAutoRollupRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetentionAutoRollupRetentionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetentionAutoRollupRetention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetentionAutoRollupRetention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // local - computed: true, optional: false, required: false
  private _local = new DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetentionAutoRollupRetentionLocalList(this, "local", false);
  public get local() {
    return this._local;
  }

  // remote - computed: true, optional: false, required: false
  private _remote = new DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetentionAutoRollupRetentionRemoteList(this, "remote", false);
  public get remote() {
    return this._remote;
  }
}

export class DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetentionAutoRollupRetentionList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetentionAutoRollupRetentionOutputReference {
    return new DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetentionAutoRollupRetentionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetentionLinearRetention {
}

export function dataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetentionLinearRetentionToTerraform(struct?: DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetentionLinearRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetentionLinearRetentionToHclTerraform(struct?: DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetentionLinearRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetentionLinearRetentionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetentionLinearRetention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetentionLinearRetention | undefined) {
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

export class DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetentionLinearRetentionList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetentionLinearRetentionOutputReference {
    return new DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetentionLinearRetentionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetention {
}

export function dataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetentionToTerraform(struct?: DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetentionToHclTerraform(struct?: DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetentionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_rollup_retention - computed: true, optional: false, required: false
  private _autoRollupRetention = new DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetentionAutoRollupRetentionList(this, "auto_rollup_retention", false);
  public get autoRollupRetention() {
    return this._autoRollupRetention;
  }

  // linear_retention - computed: true, optional: false, required: false
  private _linearRetention = new DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetentionLinearRetentionList(this, "linear_retention", false);
  public get linearRetention() {
    return this._linearRetention;
  }
}

export class DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetentionList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetentionOutputReference {
    return new DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetentionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsSchedule {
}

export function dataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleToTerraform(struct?: DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleToHclTerraform(struct?: DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsSchedule | undefined) {
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
  private _retention = new DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleRetentionList(this, "retention", false);
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

export class DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleOutputReference {
    return new DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurations {
}

export function dataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsToTerraform(struct?: DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsToHclTerraform(struct?: DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurations | undefined) {
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
  private _schedule = new DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsScheduleList(this, "schedule", false);
  public get schedule() {
    return this._schedule;
  }

  // source_location_label - computed: true, optional: false, required: false
  public get sourceLocationLabel() {
    return this.getStringAttribute('source_location_label');
  }
}

export class DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsOutputReference {
    return new DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationLocationsReplicationSubLocationClusterExtIds {
}

export function dataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationLocationsReplicationSubLocationClusterExtIdsToTerraform(struct?: DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationLocationsReplicationSubLocationClusterExtIds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationLocationsReplicationSubLocationClusterExtIdsToHclTerraform(struct?: DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationLocationsReplicationSubLocationClusterExtIds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationLocationsReplicationSubLocationClusterExtIdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationLocationsReplicationSubLocationClusterExtIds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationLocationsReplicationSubLocationClusterExtIds | undefined) {
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

export class DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationLocationsReplicationSubLocationClusterExtIdsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationLocationsReplicationSubLocationClusterExtIdsOutputReference {
    return new DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationLocationsReplicationSubLocationClusterExtIdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationLocationsReplicationSubLocation {
}

export function dataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationLocationsReplicationSubLocationToTerraform(struct?: DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationLocationsReplicationSubLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationLocationsReplicationSubLocationToHclTerraform(struct?: DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationLocationsReplicationSubLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationLocationsReplicationSubLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationLocationsReplicationSubLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationLocationsReplicationSubLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_ext_ids - computed: true, optional: false, required: false
  private _clusterExtIds = new DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationLocationsReplicationSubLocationClusterExtIdsList(this, "cluster_ext_ids", false);
  public get clusterExtIds() {
    return this._clusterExtIds;
  }
}

export class DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationLocationsReplicationSubLocationList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationLocationsReplicationSubLocationOutputReference {
    return new DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationLocationsReplicationSubLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationLocations {
}

export function dataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationLocationsToTerraform(struct?: DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationLocationsToHclTerraform(struct?: DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationLocationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationLocations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationLocations | undefined) {
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
  private _replicationSubLocation = new DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationLocationsReplicationSubLocationList(this, "replication_sub_location", false);
  public get replicationSubLocation() {
    return this._replicationSubLocation;
  }
}

export class DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationLocationsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationLocationsOutputReference {
    return new DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationLocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixProtectionPoliciesV2ProtectionPolicies {
}

export function dataNutanixProtectionPoliciesV2ProtectionPoliciesToTerraform(struct?: DataNutanixProtectionPoliciesV2ProtectionPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixProtectionPoliciesV2ProtectionPoliciesToHclTerraform(struct?: DataNutanixProtectionPoliciesV2ProtectionPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixProtectionPoliciesV2ProtectionPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixProtectionPoliciesV2ProtectionPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixProtectionPoliciesV2ProtectionPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category_ids - computed: true, optional: false, required: false
  public get categoryIds() {
    return this.getListAttribute('category_ids');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }

  // is_approval_policy_needed - computed: true, optional: false, required: false
  public get isApprovalPolicyNeeded() {
    return this.getBooleanAttribute('is_approval_policy_needed');
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataNutanixProtectionPoliciesV2ProtectionPoliciesLinksList(this, "links", false);
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
  private _replicationConfigurations = new DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationConfigurationsList(this, "replication_configurations", false);
  public get replicationConfigurations() {
    return this._replicationConfigurations;
  }

  // replication_locations - computed: true, optional: false, required: false
  private _replicationLocations = new DataNutanixProtectionPoliciesV2ProtectionPoliciesReplicationLocationsList(this, "replication_locations", false);
  public get replicationLocations() {
    return this._replicationLocations;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
}

export class DataNutanixProtectionPoliciesV2ProtectionPoliciesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixProtectionPoliciesV2ProtectionPoliciesOutputReference {
    return new DataNutanixProtectionPoliciesV2ProtectionPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/protection_policies_v2 nutanix_protection_policies_v2}
*/
export class DataNutanixProtectionPoliciesV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_protection_policies_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNutanixProtectionPoliciesV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNutanixProtectionPoliciesV2 to import
  * @param importFromId The id of the existing DataNutanixProtectionPoliciesV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/protection_policies_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNutanixProtectionPoliciesV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_protection_policies_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/protection_policies_v2 nutanix_protection_policies_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNutanixProtectionPoliciesV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataNutanixProtectionPoliciesV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'nutanix_protection_policies_v2',
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
    this._filter = config.filter;
    this._id = config.id;
    this._limit = config.limit;
    this._orderBy = config.orderBy;
    this._page = config.page;
    this._select = config.select;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // order_by - computed: false, optional: true, required: false
  private _orderBy?: string; 
  public get orderBy() {
    return this.getStringAttribute('order_by');
  }
  public set orderBy(value: string) {
    this._orderBy = value;
  }
  public resetOrderBy() {
    this._orderBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderByInput() {
    return this._orderBy;
  }

  // page - computed: false, optional: true, required: false
  private _page?: number; 
  public get page() {
    return this.getNumberAttribute('page');
  }
  public set page(value: number) {
    this._page = value;
  }
  public resetPage() {
    this._page = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageInput() {
    return this._page;
  }

  // protection_policies - computed: true, optional: false, required: false
  private _protectionPolicies = new DataNutanixProtectionPoliciesV2ProtectionPoliciesList(this, "protection_policies", false);
  public get protectionPolicies() {
    return this._protectionPolicies;
  }

  // select - computed: false, optional: true, required: false
  private _select?: string; 
  public get select() {
    return this.getStringAttribute('select');
  }
  public set select(value: string) {
    this._select = value;
  }
  public resetSelect() {
    this._select = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectInput() {
    return this._select;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: cdktf.stringToTerraform(this._filter),
      id: cdktf.stringToTerraform(this._id),
      limit: cdktf.numberToTerraform(this._limit),
      order_by: cdktf.stringToTerraform(this._orderBy),
      page: cdktf.numberToTerraform(this._page),
      select: cdktf.stringToTerraform(this._select),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
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
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      order_by: {
        value: cdktf.stringToHclTerraform(this._orderBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      page: {
        value: cdktf.numberToHclTerraform(this._page),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      select: {
        value: cdktf.stringToHclTerraform(this._select),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
