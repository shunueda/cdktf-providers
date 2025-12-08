// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/data-sources/lifecycles
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOctopusdeployLifecyclesConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of lifecycle IDs to filter by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/data-sources/lifecycles#ids DataOctopusdeployLifecycles#ids}
  */
  readonly ids?: string[];
  /**
  * A partial name to filter lifecycles by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/data-sources/lifecycles#partial_name DataOctopusdeployLifecycles#partial_name}
  */
  readonly partialName?: string;
  /**
  * A filter to specify the number of items to skip in the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/data-sources/lifecycles#skip DataOctopusdeployLifecycles#skip}
  */
  readonly skip?: number;
  /**
  * The space ID associated with this lifecycle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/data-sources/lifecycles#space_id DataOctopusdeployLifecycles#space_id}
  */
  readonly spaceId?: string;
  /**
  * A filter to specify the number of items to take (or return) in the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/data-sources/lifecycles#take DataOctopusdeployLifecycles#take}
  */
  readonly take?: number;
}
export interface DataOctopusdeployLifecyclesLifecyclesPhaseReleaseRetentionPolicy {
}

export function dataOctopusdeployLifecyclesLifecyclesPhaseReleaseRetentionPolicyToTerraform(struct?: DataOctopusdeployLifecyclesLifecyclesPhaseReleaseRetentionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOctopusdeployLifecyclesLifecyclesPhaseReleaseRetentionPolicyToHclTerraform(struct?: DataOctopusdeployLifecyclesLifecyclesPhaseReleaseRetentionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOctopusdeployLifecyclesLifecyclesPhaseReleaseRetentionPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOctopusdeployLifecyclesLifecyclesPhaseReleaseRetentionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOctopusdeployLifecyclesLifecyclesPhaseReleaseRetentionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // quantity_to_keep - computed: true, optional: false, required: false
  public get quantityToKeep() {
    return this.getNumberAttribute('quantity_to_keep');
  }

  // should_keep_forever - computed: true, optional: false, required: false
  public get shouldKeepForever() {
    return this.getBooleanAttribute('should_keep_forever');
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }
}

export class DataOctopusdeployLifecyclesLifecyclesPhaseReleaseRetentionPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataOctopusdeployLifecyclesLifecyclesPhaseReleaseRetentionPolicyOutputReference {
    return new DataOctopusdeployLifecyclesLifecyclesPhaseReleaseRetentionPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOctopusdeployLifecyclesLifecyclesPhaseReleaseRetentionWithStrategy {
}

export function dataOctopusdeployLifecyclesLifecyclesPhaseReleaseRetentionWithStrategyToTerraform(struct?: DataOctopusdeployLifecyclesLifecyclesPhaseReleaseRetentionWithStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOctopusdeployLifecyclesLifecyclesPhaseReleaseRetentionWithStrategyToHclTerraform(struct?: DataOctopusdeployLifecyclesLifecyclesPhaseReleaseRetentionWithStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOctopusdeployLifecyclesLifecyclesPhaseReleaseRetentionWithStrategyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOctopusdeployLifecyclesLifecyclesPhaseReleaseRetentionWithStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOctopusdeployLifecyclesLifecyclesPhaseReleaseRetentionWithStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // quantity_to_keep - computed: true, optional: false, required: false
  public get quantityToKeep() {
    return this.getNumberAttribute('quantity_to_keep');
  }

  // strategy - computed: true, optional: false, required: false
  public get strategy() {
    return this.getStringAttribute('strategy');
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }
}

export class DataOctopusdeployLifecyclesLifecyclesPhaseReleaseRetentionWithStrategyList extends cdktf.ComplexList {

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
  public get(index: number): DataOctopusdeployLifecyclesLifecyclesPhaseReleaseRetentionWithStrategyOutputReference {
    return new DataOctopusdeployLifecyclesLifecyclesPhaseReleaseRetentionWithStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOctopusdeployLifecyclesLifecyclesPhaseTentacleRetentionPolicy {
}

export function dataOctopusdeployLifecyclesLifecyclesPhaseTentacleRetentionPolicyToTerraform(struct?: DataOctopusdeployLifecyclesLifecyclesPhaseTentacleRetentionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOctopusdeployLifecyclesLifecyclesPhaseTentacleRetentionPolicyToHclTerraform(struct?: DataOctopusdeployLifecyclesLifecyclesPhaseTentacleRetentionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOctopusdeployLifecyclesLifecyclesPhaseTentacleRetentionPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOctopusdeployLifecyclesLifecyclesPhaseTentacleRetentionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOctopusdeployLifecyclesLifecyclesPhaseTentacleRetentionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // quantity_to_keep - computed: true, optional: false, required: false
  public get quantityToKeep() {
    return this.getNumberAttribute('quantity_to_keep');
  }

  // should_keep_forever - computed: true, optional: false, required: false
  public get shouldKeepForever() {
    return this.getBooleanAttribute('should_keep_forever');
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }
}

export class DataOctopusdeployLifecyclesLifecyclesPhaseTentacleRetentionPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataOctopusdeployLifecyclesLifecyclesPhaseTentacleRetentionPolicyOutputReference {
    return new DataOctopusdeployLifecyclesLifecyclesPhaseTentacleRetentionPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOctopusdeployLifecyclesLifecyclesPhaseTentacleRetentionWithStrategy {
}

export function dataOctopusdeployLifecyclesLifecyclesPhaseTentacleRetentionWithStrategyToTerraform(struct?: DataOctopusdeployLifecyclesLifecyclesPhaseTentacleRetentionWithStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOctopusdeployLifecyclesLifecyclesPhaseTentacleRetentionWithStrategyToHclTerraform(struct?: DataOctopusdeployLifecyclesLifecyclesPhaseTentacleRetentionWithStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOctopusdeployLifecyclesLifecyclesPhaseTentacleRetentionWithStrategyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOctopusdeployLifecyclesLifecyclesPhaseTentacleRetentionWithStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOctopusdeployLifecyclesLifecyclesPhaseTentacleRetentionWithStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // quantity_to_keep - computed: true, optional: false, required: false
  public get quantityToKeep() {
    return this.getNumberAttribute('quantity_to_keep');
  }

  // strategy - computed: true, optional: false, required: false
  public get strategy() {
    return this.getStringAttribute('strategy');
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }
}

export class DataOctopusdeployLifecyclesLifecyclesPhaseTentacleRetentionWithStrategyList extends cdktf.ComplexList {

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
  public get(index: number): DataOctopusdeployLifecyclesLifecyclesPhaseTentacleRetentionWithStrategyOutputReference {
    return new DataOctopusdeployLifecyclesLifecyclesPhaseTentacleRetentionWithStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOctopusdeployLifecyclesLifecyclesPhase {
}

export function dataOctopusdeployLifecyclesLifecyclesPhaseToTerraform(struct?: DataOctopusdeployLifecyclesLifecyclesPhase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOctopusdeployLifecyclesLifecyclesPhaseToHclTerraform(struct?: DataOctopusdeployLifecyclesLifecyclesPhase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOctopusdeployLifecyclesLifecyclesPhaseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOctopusdeployLifecyclesLifecyclesPhase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOctopusdeployLifecyclesLifecyclesPhase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // automatic_deployment_targets - computed: true, optional: false, required: false
  public get automaticDeploymentTargets() {
    return this.getListAttribute('automatic_deployment_targets');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_optional_phase - computed: true, optional: false, required: false
  public get isOptionalPhase() {
    return this.getBooleanAttribute('is_optional_phase');
  }

  // is_priority_phase - computed: true, optional: false, required: false
  public get isPriorityPhase() {
    return this.getBooleanAttribute('is_priority_phase');
  }

  // minimum_environments_before_promotion - computed: true, optional: false, required: false
  public get minimumEnvironmentsBeforePromotion() {
    return this.getNumberAttribute('minimum_environments_before_promotion');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // optional_deployment_targets - computed: true, optional: false, required: false
  public get optionalDeploymentTargets() {
    return this.getListAttribute('optional_deployment_targets');
  }

  // release_retention_policy - computed: true, optional: false, required: false
  private _releaseRetentionPolicy = new DataOctopusdeployLifecyclesLifecyclesPhaseReleaseRetentionPolicyList(this, "release_retention_policy", false);
  public get releaseRetentionPolicy() {
    return this._releaseRetentionPolicy;
  }

  // release_retention_with_strategy - computed: true, optional: false, required: false
  private _releaseRetentionWithStrategy = new DataOctopusdeployLifecyclesLifecyclesPhaseReleaseRetentionWithStrategyList(this, "release_retention_with_strategy", false);
  public get releaseRetentionWithStrategy() {
    return this._releaseRetentionWithStrategy;
  }

  // tentacle_retention_policy - computed: true, optional: false, required: false
  private _tentacleRetentionPolicy = new DataOctopusdeployLifecyclesLifecyclesPhaseTentacleRetentionPolicyList(this, "tentacle_retention_policy", false);
  public get tentacleRetentionPolicy() {
    return this._tentacleRetentionPolicy;
  }

  // tentacle_retention_with_strategy - computed: true, optional: false, required: false
  private _tentacleRetentionWithStrategy = new DataOctopusdeployLifecyclesLifecyclesPhaseTentacleRetentionWithStrategyList(this, "tentacle_retention_with_strategy", false);
  public get tentacleRetentionWithStrategy() {
    return this._tentacleRetentionWithStrategy;
  }
}

export class DataOctopusdeployLifecyclesLifecyclesPhaseList extends cdktf.ComplexList {

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
  public get(index: number): DataOctopusdeployLifecyclesLifecyclesPhaseOutputReference {
    return new DataOctopusdeployLifecyclesLifecyclesPhaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOctopusdeployLifecyclesLifecyclesReleaseRetentionPolicy {
}

export function dataOctopusdeployLifecyclesLifecyclesReleaseRetentionPolicyToTerraform(struct?: DataOctopusdeployLifecyclesLifecyclesReleaseRetentionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOctopusdeployLifecyclesLifecyclesReleaseRetentionPolicyToHclTerraform(struct?: DataOctopusdeployLifecyclesLifecyclesReleaseRetentionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOctopusdeployLifecyclesLifecyclesReleaseRetentionPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOctopusdeployLifecyclesLifecyclesReleaseRetentionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOctopusdeployLifecyclesLifecyclesReleaseRetentionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // quantity_to_keep - computed: true, optional: false, required: false
  public get quantityToKeep() {
    return this.getNumberAttribute('quantity_to_keep');
  }

  // should_keep_forever - computed: true, optional: false, required: false
  public get shouldKeepForever() {
    return this.getBooleanAttribute('should_keep_forever');
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }
}

export class DataOctopusdeployLifecyclesLifecyclesReleaseRetentionPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataOctopusdeployLifecyclesLifecyclesReleaseRetentionPolicyOutputReference {
    return new DataOctopusdeployLifecyclesLifecyclesReleaseRetentionPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOctopusdeployLifecyclesLifecyclesReleaseRetentionWithStrategy {
}

export function dataOctopusdeployLifecyclesLifecyclesReleaseRetentionWithStrategyToTerraform(struct?: DataOctopusdeployLifecyclesLifecyclesReleaseRetentionWithStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOctopusdeployLifecyclesLifecyclesReleaseRetentionWithStrategyToHclTerraform(struct?: DataOctopusdeployLifecyclesLifecyclesReleaseRetentionWithStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOctopusdeployLifecyclesLifecyclesReleaseRetentionWithStrategyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOctopusdeployLifecyclesLifecyclesReleaseRetentionWithStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOctopusdeployLifecyclesLifecyclesReleaseRetentionWithStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // quantity_to_keep - computed: true, optional: false, required: false
  public get quantityToKeep() {
    return this.getNumberAttribute('quantity_to_keep');
  }

  // strategy - computed: true, optional: false, required: false
  public get strategy() {
    return this.getStringAttribute('strategy');
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }
}

export class DataOctopusdeployLifecyclesLifecyclesReleaseRetentionWithStrategyList extends cdktf.ComplexList {

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
  public get(index: number): DataOctopusdeployLifecyclesLifecyclesReleaseRetentionWithStrategyOutputReference {
    return new DataOctopusdeployLifecyclesLifecyclesReleaseRetentionWithStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOctopusdeployLifecyclesLifecyclesTentacleRetentionPolicy {
}

export function dataOctopusdeployLifecyclesLifecyclesTentacleRetentionPolicyToTerraform(struct?: DataOctopusdeployLifecyclesLifecyclesTentacleRetentionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOctopusdeployLifecyclesLifecyclesTentacleRetentionPolicyToHclTerraform(struct?: DataOctopusdeployLifecyclesLifecyclesTentacleRetentionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOctopusdeployLifecyclesLifecyclesTentacleRetentionPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOctopusdeployLifecyclesLifecyclesTentacleRetentionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOctopusdeployLifecyclesLifecyclesTentacleRetentionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // quantity_to_keep - computed: true, optional: false, required: false
  public get quantityToKeep() {
    return this.getNumberAttribute('quantity_to_keep');
  }

  // should_keep_forever - computed: true, optional: false, required: false
  public get shouldKeepForever() {
    return this.getBooleanAttribute('should_keep_forever');
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }
}

export class DataOctopusdeployLifecyclesLifecyclesTentacleRetentionPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataOctopusdeployLifecyclesLifecyclesTentacleRetentionPolicyOutputReference {
    return new DataOctopusdeployLifecyclesLifecyclesTentacleRetentionPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOctopusdeployLifecyclesLifecyclesTentacleRetentionWithStrategy {
}

export function dataOctopusdeployLifecyclesLifecyclesTentacleRetentionWithStrategyToTerraform(struct?: DataOctopusdeployLifecyclesLifecyclesTentacleRetentionWithStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOctopusdeployLifecyclesLifecyclesTentacleRetentionWithStrategyToHclTerraform(struct?: DataOctopusdeployLifecyclesLifecyclesTentacleRetentionWithStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOctopusdeployLifecyclesLifecyclesTentacleRetentionWithStrategyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOctopusdeployLifecyclesLifecyclesTentacleRetentionWithStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOctopusdeployLifecyclesLifecyclesTentacleRetentionWithStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // quantity_to_keep - computed: true, optional: false, required: false
  public get quantityToKeep() {
    return this.getNumberAttribute('quantity_to_keep');
  }

  // strategy - computed: true, optional: false, required: false
  public get strategy() {
    return this.getStringAttribute('strategy');
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }
}

export class DataOctopusdeployLifecyclesLifecyclesTentacleRetentionWithStrategyList extends cdktf.ComplexList {

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
  public get(index: number): DataOctopusdeployLifecyclesLifecyclesTentacleRetentionWithStrategyOutputReference {
    return new DataOctopusdeployLifecyclesLifecyclesTentacleRetentionWithStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOctopusdeployLifecyclesLifecycles {
}

export function dataOctopusdeployLifecyclesLifecyclesToTerraform(struct?: DataOctopusdeployLifecyclesLifecycles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOctopusdeployLifecyclesLifecyclesToHclTerraform(struct?: DataOctopusdeployLifecyclesLifecycles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOctopusdeployLifecyclesLifecyclesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOctopusdeployLifecyclesLifecycles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOctopusdeployLifecyclesLifecycles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // phase - computed: true, optional: false, required: false
  private _phase = new DataOctopusdeployLifecyclesLifecyclesPhaseList(this, "phase", false);
  public get phase() {
    return this._phase;
  }

  // release_retention_policy - computed: true, optional: false, required: false
  private _releaseRetentionPolicy = new DataOctopusdeployLifecyclesLifecyclesReleaseRetentionPolicyList(this, "release_retention_policy", false);
  public get releaseRetentionPolicy() {
    return this._releaseRetentionPolicy;
  }

  // release_retention_with_strategy - computed: true, optional: false, required: false
  private _releaseRetentionWithStrategy = new DataOctopusdeployLifecyclesLifecyclesReleaseRetentionWithStrategyList(this, "release_retention_with_strategy", false);
  public get releaseRetentionWithStrategy() {
    return this._releaseRetentionWithStrategy;
  }

  // space_id - computed: true, optional: false, required: false
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }

  // tentacle_retention_policy - computed: true, optional: false, required: false
  private _tentacleRetentionPolicy = new DataOctopusdeployLifecyclesLifecyclesTentacleRetentionPolicyList(this, "tentacle_retention_policy", false);
  public get tentacleRetentionPolicy() {
    return this._tentacleRetentionPolicy;
  }

  // tentacle_retention_with_strategy - computed: true, optional: false, required: false
  private _tentacleRetentionWithStrategy = new DataOctopusdeployLifecyclesLifecyclesTentacleRetentionWithStrategyList(this, "tentacle_retention_with_strategy", false);
  public get tentacleRetentionWithStrategy() {
    return this._tentacleRetentionWithStrategy;
  }
}

export class DataOctopusdeployLifecyclesLifecyclesList extends cdktf.ComplexList {

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
  public get(index: number): DataOctopusdeployLifecyclesLifecyclesOutputReference {
    return new DataOctopusdeployLifecyclesLifecyclesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/data-sources/lifecycles octopusdeploy_lifecycles}
*/
export class DataOctopusdeployLifecycles extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_lifecycles";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOctopusdeployLifecycles resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOctopusdeployLifecycles to import
  * @param importFromId The id of the existing DataOctopusdeployLifecycles that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/data-sources/lifecycles#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOctopusdeployLifecycles to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_lifecycles", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/data-sources/lifecycles octopusdeploy_lifecycles} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOctopusdeployLifecyclesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOctopusdeployLifecyclesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_lifecycles',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '1.6.0',
        providerVersionConstraint: '1.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ids = config.ids;
    this._partialName = config.partialName;
    this._skip = config.skip;
    this._spaceId = config.spaceId;
    this._take = config.take;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ids - computed: false, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // lifecycles - computed: true, optional: false, required: false
  private _lifecycles = new DataOctopusdeployLifecyclesLifecyclesList(this, "lifecycles", false);
  public get lifecycles() {
    return this._lifecycles;
  }

  // partial_name - computed: false, optional: true, required: false
  private _partialName?: string; 
  public get partialName() {
    return this.getStringAttribute('partial_name');
  }
  public set partialName(value: string) {
    this._partialName = value;
  }
  public resetPartialName() {
    this._partialName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partialNameInput() {
    return this._partialName;
  }

  // skip - computed: false, optional: true, required: false
  private _skip?: number; 
  public get skip() {
    return this.getNumberAttribute('skip');
  }
  public set skip(value: number) {
    this._skip = value;
  }
  public resetSkip() {
    this._skip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInput() {
    return this._skip;
  }

  // space_id - computed: false, optional: true, required: false
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  public resetSpaceId() {
    this._spaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // take - computed: false, optional: true, required: false
  private _take?: number; 
  public get take() {
    return this.getNumberAttribute('take');
  }
  public set take(value: number) {
    this._take = value;
  }
  public resetTake() {
    this._take = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get takeInput() {
    return this._take;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      partial_name: cdktf.stringToTerraform(this._partialName),
      skip: cdktf.numberToTerraform(this._skip),
      space_id: cdktf.stringToTerraform(this._spaceId),
      take: cdktf.numberToTerraform(this._take),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      partial_name: {
        value: cdktf.stringToHclTerraform(this._partialName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip: {
        value: cdktf.numberToHclTerraform(this._skip),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      take: {
        value: cdktf.numberToHclTerraform(this._take),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
