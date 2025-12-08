// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/lifecycle
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LifecycleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of this lifecycle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/lifecycle#description Lifecycle#description}
  */
  readonly description?: string;
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/lifecycle#name Lifecycle#name}
  */
  readonly name: string;
  /**
  * The space ID associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/lifecycle#space_id Lifecycle#space_id}
  */
  readonly spaceId?: string;
  /**
  * phase block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/lifecycle#phase Lifecycle#phase}
  */
  readonly phase?: LifecyclePhase[] | cdktf.IResolvable;
  /**
  * release_retention_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/lifecycle#release_retention_policy Lifecycle#release_retention_policy}
  */
  readonly releaseRetentionPolicy?: LifecycleReleaseRetentionPolicy[] | cdktf.IResolvable;
  /**
  * release_retention_with_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/lifecycle#release_retention_with_strategy Lifecycle#release_retention_with_strategy}
  */
  readonly releaseRetentionWithStrategy?: LifecycleReleaseRetentionWithStrategy[] | cdktf.IResolvable;
  /**
  * tentacle_retention_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/lifecycle#tentacle_retention_policy Lifecycle#tentacle_retention_policy}
  */
  readonly tentacleRetentionPolicy?: LifecycleTentacleRetentionPolicy[] | cdktf.IResolvable;
  /**
  * tentacle_retention_with_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/lifecycle#tentacle_retention_with_strategy Lifecycle#tentacle_retention_with_strategy}
  */
  readonly tentacleRetentionWithStrategy?: LifecycleTentacleRetentionWithStrategy[] | cdktf.IResolvable;
}
export interface LifecyclePhaseReleaseRetentionPolicy {
  /**
  * The number of days/releases to keep. The default value is 30. If 0 then all are kept.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/lifecycle#quantity_to_keep Lifecycle#quantity_to_keep}
  */
  readonly quantityToKeep?: number;
  /**
  * Indicates if items should never be deleted. The default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/lifecycle#should_keep_forever Lifecycle#should_keep_forever}
  */
  readonly shouldKeepForever?: boolean | cdktf.IResolvable;
  /**
  * The unit of quantity to keep. Valid units are Days or Items. The default value is Days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/lifecycle#unit Lifecycle#unit}
  */
  readonly unit?: string;
}

export function lifecyclePhaseReleaseRetentionPolicyToTerraform(struct?: LifecyclePhaseReleaseRetentionPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    quantity_to_keep: cdktf.numberToTerraform(struct!.quantityToKeep),
    should_keep_forever: cdktf.booleanToTerraform(struct!.shouldKeepForever),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function lifecyclePhaseReleaseRetentionPolicyToHclTerraform(struct?: LifecyclePhaseReleaseRetentionPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    quantity_to_keep: {
      value: cdktf.numberToHclTerraform(struct!.quantityToKeep),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    should_keep_forever: {
      value: cdktf.booleanToHclTerraform(struct!.shouldKeepForever),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LifecyclePhaseReleaseRetentionPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LifecyclePhaseReleaseRetentionPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._quantityToKeep !== undefined) {
      hasAnyValues = true;
      internalValueResult.quantityToKeep = this._quantityToKeep;
    }
    if (this._shouldKeepForever !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldKeepForever = this._shouldKeepForever;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LifecyclePhaseReleaseRetentionPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._quantityToKeep = undefined;
      this._shouldKeepForever = undefined;
      this._unit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._quantityToKeep = value.quantityToKeep;
      this._shouldKeepForever = value.shouldKeepForever;
      this._unit = value.unit;
    }
  }

  // quantity_to_keep - computed: true, optional: true, required: false
  private _quantityToKeep?: number; 
  public get quantityToKeep() {
    return this.getNumberAttribute('quantity_to_keep');
  }
  public set quantityToKeep(value: number) {
    this._quantityToKeep = value;
  }
  public resetQuantityToKeep() {
    this._quantityToKeep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quantityToKeepInput() {
    return this._quantityToKeep;
  }

  // should_keep_forever - computed: true, optional: true, required: false
  private _shouldKeepForever?: boolean | cdktf.IResolvable; 
  public get shouldKeepForever() {
    return this.getBooleanAttribute('should_keep_forever');
  }
  public set shouldKeepForever(value: boolean | cdktf.IResolvable) {
    this._shouldKeepForever = value;
  }
  public resetShouldKeepForever() {
    this._shouldKeepForever = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldKeepForeverInput() {
    return this._shouldKeepForever;
  }

  // unit - computed: true, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}

export class LifecyclePhaseReleaseRetentionPolicyList extends cdktf.ComplexList {
  public internalValue? : LifecyclePhaseReleaseRetentionPolicy[] | cdktf.IResolvable

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
  public get(index: number): LifecyclePhaseReleaseRetentionPolicyOutputReference {
    return new LifecyclePhaseReleaseRetentionPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LifecyclePhaseReleaseRetentionWithStrategy {
  /**
  * The number of days/releases to keep.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/lifecycle#quantity_to_keep Lifecycle#quantity_to_keep}
  */
  readonly quantityToKeep?: number;
  /**
  * How retention will be set. Valid strategies are `Default`, `Forever`, and `Count`. The default value is `Default`.
  *   - `strategy = "Default"`, is used if the retention is set by the space-wide default lifecycle retention policy. When `Default` is used, no other attributes can be set since the specific retention policy is no longer defined within this lifecycle.
  *   - `strategy = "Forever"`, is used if items within this lifecycle should never be deleted.
  *   - `strategy = "Count"`, is used if a specific number of days/releases should be kept.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/lifecycle#strategy Lifecycle#strategy}
  */
  readonly strategy: string;
  /**
  * The unit of quantity to keep. Valid units are Days or Items.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/lifecycle#unit Lifecycle#unit}
  */
  readonly unit?: string;
}

export function lifecyclePhaseReleaseRetentionWithStrategyToTerraform(struct?: LifecyclePhaseReleaseRetentionWithStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    quantity_to_keep: cdktf.numberToTerraform(struct!.quantityToKeep),
    strategy: cdktf.stringToTerraform(struct!.strategy),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function lifecyclePhaseReleaseRetentionWithStrategyToHclTerraform(struct?: LifecyclePhaseReleaseRetentionWithStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    quantity_to_keep: {
      value: cdktf.numberToHclTerraform(struct!.quantityToKeep),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LifecyclePhaseReleaseRetentionWithStrategyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LifecyclePhaseReleaseRetentionWithStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._quantityToKeep !== undefined) {
      hasAnyValues = true;
      internalValueResult.quantityToKeep = this._quantityToKeep;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LifecyclePhaseReleaseRetentionWithStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._quantityToKeep = undefined;
      this._strategy = undefined;
      this._unit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._quantityToKeep = value.quantityToKeep;
      this._strategy = value.strategy;
      this._unit = value.unit;
    }
  }

  // quantity_to_keep - computed: true, optional: true, required: false
  private _quantityToKeep?: number; 
  public get quantityToKeep() {
    return this.getNumberAttribute('quantity_to_keep');
  }
  public set quantityToKeep(value: number) {
    this._quantityToKeep = value;
  }
  public resetQuantityToKeep() {
    this._quantityToKeep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quantityToKeepInput() {
    return this._quantityToKeep;
  }

  // strategy - computed: false, optional: false, required: true
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }

  // unit - computed: true, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}

export class LifecyclePhaseReleaseRetentionWithStrategyList extends cdktf.ComplexList {
  public internalValue? : LifecyclePhaseReleaseRetentionWithStrategy[] | cdktf.IResolvable

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
  public get(index: number): LifecyclePhaseReleaseRetentionWithStrategyOutputReference {
    return new LifecyclePhaseReleaseRetentionWithStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LifecyclePhaseTentacleRetentionPolicy {
  /**
  * The number of days/releases to keep. The default value is 30. If 0 then all are kept.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/lifecycle#quantity_to_keep Lifecycle#quantity_to_keep}
  */
  readonly quantityToKeep?: number;
  /**
  * Indicates if items should never be deleted. The default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/lifecycle#should_keep_forever Lifecycle#should_keep_forever}
  */
  readonly shouldKeepForever?: boolean | cdktf.IResolvable;
  /**
  * The unit of quantity to keep. Valid units are Days or Items. The default value is Days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/lifecycle#unit Lifecycle#unit}
  */
  readonly unit?: string;
}

export function lifecyclePhaseTentacleRetentionPolicyToTerraform(struct?: LifecyclePhaseTentacleRetentionPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    quantity_to_keep: cdktf.numberToTerraform(struct!.quantityToKeep),
    should_keep_forever: cdktf.booleanToTerraform(struct!.shouldKeepForever),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function lifecyclePhaseTentacleRetentionPolicyToHclTerraform(struct?: LifecyclePhaseTentacleRetentionPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    quantity_to_keep: {
      value: cdktf.numberToHclTerraform(struct!.quantityToKeep),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    should_keep_forever: {
      value: cdktf.booleanToHclTerraform(struct!.shouldKeepForever),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LifecyclePhaseTentacleRetentionPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LifecyclePhaseTentacleRetentionPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._quantityToKeep !== undefined) {
      hasAnyValues = true;
      internalValueResult.quantityToKeep = this._quantityToKeep;
    }
    if (this._shouldKeepForever !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldKeepForever = this._shouldKeepForever;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LifecyclePhaseTentacleRetentionPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._quantityToKeep = undefined;
      this._shouldKeepForever = undefined;
      this._unit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._quantityToKeep = value.quantityToKeep;
      this._shouldKeepForever = value.shouldKeepForever;
      this._unit = value.unit;
    }
  }

  // quantity_to_keep - computed: true, optional: true, required: false
  private _quantityToKeep?: number; 
  public get quantityToKeep() {
    return this.getNumberAttribute('quantity_to_keep');
  }
  public set quantityToKeep(value: number) {
    this._quantityToKeep = value;
  }
  public resetQuantityToKeep() {
    this._quantityToKeep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quantityToKeepInput() {
    return this._quantityToKeep;
  }

  // should_keep_forever - computed: true, optional: true, required: false
  private _shouldKeepForever?: boolean | cdktf.IResolvable; 
  public get shouldKeepForever() {
    return this.getBooleanAttribute('should_keep_forever');
  }
  public set shouldKeepForever(value: boolean | cdktf.IResolvable) {
    this._shouldKeepForever = value;
  }
  public resetShouldKeepForever() {
    this._shouldKeepForever = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldKeepForeverInput() {
    return this._shouldKeepForever;
  }

  // unit - computed: true, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}

export class LifecyclePhaseTentacleRetentionPolicyList extends cdktf.ComplexList {
  public internalValue? : LifecyclePhaseTentacleRetentionPolicy[] | cdktf.IResolvable

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
  public get(index: number): LifecyclePhaseTentacleRetentionPolicyOutputReference {
    return new LifecyclePhaseTentacleRetentionPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LifecyclePhaseTentacleRetentionWithStrategy {
  /**
  * The number of days/releases to keep.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/lifecycle#quantity_to_keep Lifecycle#quantity_to_keep}
  */
  readonly quantityToKeep?: number;
  /**
  * How retention will be set. Valid strategies are `Default`, `Forever`, and `Count`. The default value is `Default`.
  *   - `strategy = "Default"`, is used if the retention is set by the space-wide default lifecycle retention policy. When `Default` is used, no other attributes can be set since the specific retention policy is no longer defined within this lifecycle.
  *   - `strategy = "Forever"`, is used if items within this lifecycle should never be deleted.
  *   - `strategy = "Count"`, is used if a specific number of days/releases should be kept.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/lifecycle#strategy Lifecycle#strategy}
  */
  readonly strategy: string;
  /**
  * The unit of quantity to keep. Valid units are Days or Items.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/lifecycle#unit Lifecycle#unit}
  */
  readonly unit?: string;
}

export function lifecyclePhaseTentacleRetentionWithStrategyToTerraform(struct?: LifecyclePhaseTentacleRetentionWithStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    quantity_to_keep: cdktf.numberToTerraform(struct!.quantityToKeep),
    strategy: cdktf.stringToTerraform(struct!.strategy),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function lifecyclePhaseTentacleRetentionWithStrategyToHclTerraform(struct?: LifecyclePhaseTentacleRetentionWithStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    quantity_to_keep: {
      value: cdktf.numberToHclTerraform(struct!.quantityToKeep),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LifecyclePhaseTentacleRetentionWithStrategyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LifecyclePhaseTentacleRetentionWithStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._quantityToKeep !== undefined) {
      hasAnyValues = true;
      internalValueResult.quantityToKeep = this._quantityToKeep;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LifecyclePhaseTentacleRetentionWithStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._quantityToKeep = undefined;
      this._strategy = undefined;
      this._unit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._quantityToKeep = value.quantityToKeep;
      this._strategy = value.strategy;
      this._unit = value.unit;
    }
  }

  // quantity_to_keep - computed: true, optional: true, required: false
  private _quantityToKeep?: number; 
  public get quantityToKeep() {
    return this.getNumberAttribute('quantity_to_keep');
  }
  public set quantityToKeep(value: number) {
    this._quantityToKeep = value;
  }
  public resetQuantityToKeep() {
    this._quantityToKeep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quantityToKeepInput() {
    return this._quantityToKeep;
  }

  // strategy - computed: false, optional: false, required: true
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }

  // unit - computed: true, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}

export class LifecyclePhaseTentacleRetentionWithStrategyList extends cdktf.ComplexList {
  public internalValue? : LifecyclePhaseTentacleRetentionWithStrategy[] | cdktf.IResolvable

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
  public get(index: number): LifecyclePhaseTentacleRetentionWithStrategyOutputReference {
    return new LifecyclePhaseTentacleRetentionWithStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LifecyclePhase {
  /**
  * Environment IDs in this phase that a release is automatically deployed to when it is eligible for this phase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/lifecycle#automatic_deployment_targets Lifecycle#automatic_deployment_targets}
  */
  readonly automaticDeploymentTargets?: string[];
  /**
  * The unique ID for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/lifecycle#id Lifecycle#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If false a release must be deployed to this phase before it can be deployed to the next phase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/lifecycle#is_optional_phase Lifecycle#is_optional_phase}
  */
  readonly isOptionalPhase?: boolean | cdktf.IResolvable;
  /**
  * Deployments will be prioritized in this phase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/lifecycle#is_priority_phase Lifecycle#is_priority_phase}
  */
  readonly isPriorityPhase?: boolean | cdktf.IResolvable;
  /**
  * The number of units required before a release can enter the next phase. If 0, all environments are required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/lifecycle#minimum_environments_before_promotion Lifecycle#minimum_environments_before_promotion}
  */
  readonly minimumEnvironmentsBeforePromotion?: number;
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/lifecycle#name Lifecycle#name}
  */
  readonly name: string;
  /**
  * Environment IDs in this phase that a release can be deployed to, but is not automatically deployed to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/lifecycle#optional_deployment_targets Lifecycle#optional_deployment_targets}
  */
  readonly optionalDeploymentTargets?: string[];
  /**
  * release_retention_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/lifecycle#release_retention_policy Lifecycle#release_retention_policy}
  */
  readonly releaseRetentionPolicy?: LifecyclePhaseReleaseRetentionPolicy[] | cdktf.IResolvable;
  /**
  * release_retention_with_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/lifecycle#release_retention_with_strategy Lifecycle#release_retention_with_strategy}
  */
  readonly releaseRetentionWithStrategy?: LifecyclePhaseReleaseRetentionWithStrategy[] | cdktf.IResolvable;
  /**
  * tentacle_retention_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/lifecycle#tentacle_retention_policy Lifecycle#tentacle_retention_policy}
  */
  readonly tentacleRetentionPolicy?: LifecyclePhaseTentacleRetentionPolicy[] | cdktf.IResolvable;
  /**
  * tentacle_retention_with_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/lifecycle#tentacle_retention_with_strategy Lifecycle#tentacle_retention_with_strategy}
  */
  readonly tentacleRetentionWithStrategy?: LifecyclePhaseTentacleRetentionWithStrategy[] | cdktf.IResolvable;
}

export function lifecyclePhaseToTerraform(struct?: LifecyclePhase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automatic_deployment_targets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.automaticDeploymentTargets),
    id: cdktf.stringToTerraform(struct!.id),
    is_optional_phase: cdktf.booleanToTerraform(struct!.isOptionalPhase),
    is_priority_phase: cdktf.booleanToTerraform(struct!.isPriorityPhase),
    minimum_environments_before_promotion: cdktf.numberToTerraform(struct!.minimumEnvironmentsBeforePromotion),
    name: cdktf.stringToTerraform(struct!.name),
    optional_deployment_targets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.optionalDeploymentTargets),
    release_retention_policy: cdktf.listMapper(lifecyclePhaseReleaseRetentionPolicyToTerraform, true)(struct!.releaseRetentionPolicy),
    release_retention_with_strategy: cdktf.listMapper(lifecyclePhaseReleaseRetentionWithStrategyToTerraform, true)(struct!.releaseRetentionWithStrategy),
    tentacle_retention_policy: cdktf.listMapper(lifecyclePhaseTentacleRetentionPolicyToTerraform, true)(struct!.tentacleRetentionPolicy),
    tentacle_retention_with_strategy: cdktf.listMapper(lifecyclePhaseTentacleRetentionWithStrategyToTerraform, true)(struct!.tentacleRetentionWithStrategy),
  }
}


export function lifecyclePhaseToHclTerraform(struct?: LifecyclePhase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    automatic_deployment_targets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.automaticDeploymentTargets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_optional_phase: {
      value: cdktf.booleanToHclTerraform(struct!.isOptionalPhase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_priority_phase: {
      value: cdktf.booleanToHclTerraform(struct!.isPriorityPhase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    minimum_environments_before_promotion: {
      value: cdktf.numberToHclTerraform(struct!.minimumEnvironmentsBeforePromotion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional_deployment_targets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.optionalDeploymentTargets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    release_retention_policy: {
      value: cdktf.listMapperHcl(lifecyclePhaseReleaseRetentionPolicyToHclTerraform, true)(struct!.releaseRetentionPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "LifecyclePhaseReleaseRetentionPolicyList",
    },
    release_retention_with_strategy: {
      value: cdktf.listMapperHcl(lifecyclePhaseReleaseRetentionWithStrategyToHclTerraform, true)(struct!.releaseRetentionWithStrategy),
      isBlock: true,
      type: "list",
      storageClassType: "LifecyclePhaseReleaseRetentionWithStrategyList",
    },
    tentacle_retention_policy: {
      value: cdktf.listMapperHcl(lifecyclePhaseTentacleRetentionPolicyToHclTerraform, true)(struct!.tentacleRetentionPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "LifecyclePhaseTentacleRetentionPolicyList",
    },
    tentacle_retention_with_strategy: {
      value: cdktf.listMapperHcl(lifecyclePhaseTentacleRetentionWithStrategyToHclTerraform, true)(struct!.tentacleRetentionWithStrategy),
      isBlock: true,
      type: "list",
      storageClassType: "LifecyclePhaseTentacleRetentionWithStrategyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LifecyclePhaseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LifecyclePhase | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automaticDeploymentTargets !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticDeploymentTargets = this._automaticDeploymentTargets;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._isOptionalPhase !== undefined) {
      hasAnyValues = true;
      internalValueResult.isOptionalPhase = this._isOptionalPhase;
    }
    if (this._isPriorityPhase !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPriorityPhase = this._isPriorityPhase;
    }
    if (this._minimumEnvironmentsBeforePromotion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumEnvironmentsBeforePromotion = this._minimumEnvironmentsBeforePromotion;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optionalDeploymentTargets !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionalDeploymentTargets = this._optionalDeploymentTargets;
    }
    if (this._releaseRetentionPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.releaseRetentionPolicy = this._releaseRetentionPolicy?.internalValue;
    }
    if (this._releaseRetentionWithStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.releaseRetentionWithStrategy = this._releaseRetentionWithStrategy?.internalValue;
    }
    if (this._tentacleRetentionPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tentacleRetentionPolicy = this._tentacleRetentionPolicy?.internalValue;
    }
    if (this._tentacleRetentionWithStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tentacleRetentionWithStrategy = this._tentacleRetentionWithStrategy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LifecyclePhase | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._automaticDeploymentTargets = undefined;
      this._id = undefined;
      this._isOptionalPhase = undefined;
      this._isPriorityPhase = undefined;
      this._minimumEnvironmentsBeforePromotion = undefined;
      this._name = undefined;
      this._optionalDeploymentTargets = undefined;
      this._releaseRetentionPolicy.internalValue = undefined;
      this._releaseRetentionWithStrategy.internalValue = undefined;
      this._tentacleRetentionPolicy.internalValue = undefined;
      this._tentacleRetentionWithStrategy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._automaticDeploymentTargets = value.automaticDeploymentTargets;
      this._id = value.id;
      this._isOptionalPhase = value.isOptionalPhase;
      this._isPriorityPhase = value.isPriorityPhase;
      this._minimumEnvironmentsBeforePromotion = value.minimumEnvironmentsBeforePromotion;
      this._name = value.name;
      this._optionalDeploymentTargets = value.optionalDeploymentTargets;
      this._releaseRetentionPolicy.internalValue = value.releaseRetentionPolicy;
      this._releaseRetentionWithStrategy.internalValue = value.releaseRetentionWithStrategy;
      this._tentacleRetentionPolicy.internalValue = value.tentacleRetentionPolicy;
      this._tentacleRetentionWithStrategy.internalValue = value.tentacleRetentionWithStrategy;
    }
  }

  // automatic_deployment_targets - computed: true, optional: true, required: false
  private _automaticDeploymentTargets?: string[]; 
  public get automaticDeploymentTargets() {
    return this.getListAttribute('automatic_deployment_targets');
  }
  public set automaticDeploymentTargets(value: string[]) {
    this._automaticDeploymentTargets = value;
  }
  public resetAutomaticDeploymentTargets() {
    this._automaticDeploymentTargets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticDeploymentTargetsInput() {
    return this._automaticDeploymentTargets;
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

  // is_optional_phase - computed: true, optional: true, required: false
  private _isOptionalPhase?: boolean | cdktf.IResolvable; 
  public get isOptionalPhase() {
    return this.getBooleanAttribute('is_optional_phase');
  }
  public set isOptionalPhase(value: boolean | cdktf.IResolvable) {
    this._isOptionalPhase = value;
  }
  public resetIsOptionalPhase() {
    this._isOptionalPhase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isOptionalPhaseInput() {
    return this._isOptionalPhase;
  }

  // is_priority_phase - computed: true, optional: true, required: false
  private _isPriorityPhase?: boolean | cdktf.IResolvable; 
  public get isPriorityPhase() {
    return this.getBooleanAttribute('is_priority_phase');
  }
  public set isPriorityPhase(value: boolean | cdktf.IResolvable) {
    this._isPriorityPhase = value;
  }
  public resetIsPriorityPhase() {
    this._isPriorityPhase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPriorityPhaseInput() {
    return this._isPriorityPhase;
  }

  // minimum_environments_before_promotion - computed: true, optional: true, required: false
  private _minimumEnvironmentsBeforePromotion?: number; 
  public get minimumEnvironmentsBeforePromotion() {
    return this.getNumberAttribute('minimum_environments_before_promotion');
  }
  public set minimumEnvironmentsBeforePromotion(value: number) {
    this._minimumEnvironmentsBeforePromotion = value;
  }
  public resetMinimumEnvironmentsBeforePromotion() {
    this._minimumEnvironmentsBeforePromotion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumEnvironmentsBeforePromotionInput() {
    return this._minimumEnvironmentsBeforePromotion;
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

  // optional_deployment_targets - computed: true, optional: true, required: false
  private _optionalDeploymentTargets?: string[]; 
  public get optionalDeploymentTargets() {
    return this.getListAttribute('optional_deployment_targets');
  }
  public set optionalDeploymentTargets(value: string[]) {
    this._optionalDeploymentTargets = value;
  }
  public resetOptionalDeploymentTargets() {
    this._optionalDeploymentTargets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalDeploymentTargetsInput() {
    return this._optionalDeploymentTargets;
  }

  // release_retention_policy - computed: false, optional: true, required: false
  private _releaseRetentionPolicy = new LifecyclePhaseReleaseRetentionPolicyList(this, "release_retention_policy", false);
  public get releaseRetentionPolicy() {
    return this._releaseRetentionPolicy;
  }
  public putReleaseRetentionPolicy(value: LifecyclePhaseReleaseRetentionPolicy[] | cdktf.IResolvable) {
    this._releaseRetentionPolicy.internalValue = value;
  }
  public resetReleaseRetentionPolicy() {
    this._releaseRetentionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseRetentionPolicyInput() {
    return this._releaseRetentionPolicy.internalValue;
  }

  // release_retention_with_strategy - computed: false, optional: true, required: false
  private _releaseRetentionWithStrategy = new LifecyclePhaseReleaseRetentionWithStrategyList(this, "release_retention_with_strategy", false);
  public get releaseRetentionWithStrategy() {
    return this._releaseRetentionWithStrategy;
  }
  public putReleaseRetentionWithStrategy(value: LifecyclePhaseReleaseRetentionWithStrategy[] | cdktf.IResolvable) {
    this._releaseRetentionWithStrategy.internalValue = value;
  }
  public resetReleaseRetentionWithStrategy() {
    this._releaseRetentionWithStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseRetentionWithStrategyInput() {
    return this._releaseRetentionWithStrategy.internalValue;
  }

  // tentacle_retention_policy - computed: false, optional: true, required: false
  private _tentacleRetentionPolicy = new LifecyclePhaseTentacleRetentionPolicyList(this, "tentacle_retention_policy", false);
  public get tentacleRetentionPolicy() {
    return this._tentacleRetentionPolicy;
  }
  public putTentacleRetentionPolicy(value: LifecyclePhaseTentacleRetentionPolicy[] | cdktf.IResolvable) {
    this._tentacleRetentionPolicy.internalValue = value;
  }
  public resetTentacleRetentionPolicy() {
    this._tentacleRetentionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tentacleRetentionPolicyInput() {
    return this._tentacleRetentionPolicy.internalValue;
  }

  // tentacle_retention_with_strategy - computed: false, optional: true, required: false
  private _tentacleRetentionWithStrategy = new LifecyclePhaseTentacleRetentionWithStrategyList(this, "tentacle_retention_with_strategy", false);
  public get tentacleRetentionWithStrategy() {
    return this._tentacleRetentionWithStrategy;
  }
  public putTentacleRetentionWithStrategy(value: LifecyclePhaseTentacleRetentionWithStrategy[] | cdktf.IResolvable) {
    this._tentacleRetentionWithStrategy.internalValue = value;
  }
  public resetTentacleRetentionWithStrategy() {
    this._tentacleRetentionWithStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tentacleRetentionWithStrategyInput() {
    return this._tentacleRetentionWithStrategy.internalValue;
  }
}

export class LifecyclePhaseList extends cdktf.ComplexList {
  public internalValue? : LifecyclePhase[] | cdktf.IResolvable

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
  public get(index: number): LifecyclePhaseOutputReference {
    return new LifecyclePhaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LifecycleReleaseRetentionPolicy {
  /**
  * The number of days/releases to keep. The default value is 30. If 0 then all are kept.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/lifecycle#quantity_to_keep Lifecycle#quantity_to_keep}
  */
  readonly quantityToKeep?: number;
  /**
  * Indicates if items should never be deleted. The default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/lifecycle#should_keep_forever Lifecycle#should_keep_forever}
  */
  readonly shouldKeepForever?: boolean | cdktf.IResolvable;
  /**
  * The unit of quantity to keep. Valid units are Days or Items. The default value is Days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/lifecycle#unit Lifecycle#unit}
  */
  readonly unit?: string;
}

export function lifecycleReleaseRetentionPolicyToTerraform(struct?: LifecycleReleaseRetentionPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    quantity_to_keep: cdktf.numberToTerraform(struct!.quantityToKeep),
    should_keep_forever: cdktf.booleanToTerraform(struct!.shouldKeepForever),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function lifecycleReleaseRetentionPolicyToHclTerraform(struct?: LifecycleReleaseRetentionPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    quantity_to_keep: {
      value: cdktf.numberToHclTerraform(struct!.quantityToKeep),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    should_keep_forever: {
      value: cdktf.booleanToHclTerraform(struct!.shouldKeepForever),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LifecycleReleaseRetentionPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LifecycleReleaseRetentionPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._quantityToKeep !== undefined) {
      hasAnyValues = true;
      internalValueResult.quantityToKeep = this._quantityToKeep;
    }
    if (this._shouldKeepForever !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldKeepForever = this._shouldKeepForever;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LifecycleReleaseRetentionPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._quantityToKeep = undefined;
      this._shouldKeepForever = undefined;
      this._unit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._quantityToKeep = value.quantityToKeep;
      this._shouldKeepForever = value.shouldKeepForever;
      this._unit = value.unit;
    }
  }

  // quantity_to_keep - computed: true, optional: true, required: false
  private _quantityToKeep?: number; 
  public get quantityToKeep() {
    return this.getNumberAttribute('quantity_to_keep');
  }
  public set quantityToKeep(value: number) {
    this._quantityToKeep = value;
  }
  public resetQuantityToKeep() {
    this._quantityToKeep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quantityToKeepInput() {
    return this._quantityToKeep;
  }

  // should_keep_forever - computed: true, optional: true, required: false
  private _shouldKeepForever?: boolean | cdktf.IResolvable; 
  public get shouldKeepForever() {
    return this.getBooleanAttribute('should_keep_forever');
  }
  public set shouldKeepForever(value: boolean | cdktf.IResolvable) {
    this._shouldKeepForever = value;
  }
  public resetShouldKeepForever() {
    this._shouldKeepForever = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldKeepForeverInput() {
    return this._shouldKeepForever;
  }

  // unit - computed: true, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}

export class LifecycleReleaseRetentionPolicyList extends cdktf.ComplexList {
  public internalValue? : LifecycleReleaseRetentionPolicy[] | cdktf.IResolvable

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
  public get(index: number): LifecycleReleaseRetentionPolicyOutputReference {
    return new LifecycleReleaseRetentionPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LifecycleReleaseRetentionWithStrategy {
  /**
  * The number of days/releases to keep.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/lifecycle#quantity_to_keep Lifecycle#quantity_to_keep}
  */
  readonly quantityToKeep?: number;
  /**
  * How retention will be set. Valid strategies are `Default`, `Forever`, and `Count`. The default value is `Default`.
  *   - `strategy = "Default"`, is used if the retention is set by the space-wide default lifecycle retention policy. When `Default` is used, no other attributes can be set since the specific retention policy is no longer defined within this lifecycle.
  *   - `strategy = "Forever"`, is used if items within this lifecycle should never be deleted.
  *   - `strategy = "Count"`, is used if a specific number of days/releases should be kept.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/lifecycle#strategy Lifecycle#strategy}
  */
  readonly strategy: string;
  /**
  * The unit of quantity to keep. Valid units are Days or Items.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/lifecycle#unit Lifecycle#unit}
  */
  readonly unit?: string;
}

export function lifecycleReleaseRetentionWithStrategyToTerraform(struct?: LifecycleReleaseRetentionWithStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    quantity_to_keep: cdktf.numberToTerraform(struct!.quantityToKeep),
    strategy: cdktf.stringToTerraform(struct!.strategy),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function lifecycleReleaseRetentionWithStrategyToHclTerraform(struct?: LifecycleReleaseRetentionWithStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    quantity_to_keep: {
      value: cdktf.numberToHclTerraform(struct!.quantityToKeep),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LifecycleReleaseRetentionWithStrategyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LifecycleReleaseRetentionWithStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._quantityToKeep !== undefined) {
      hasAnyValues = true;
      internalValueResult.quantityToKeep = this._quantityToKeep;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LifecycleReleaseRetentionWithStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._quantityToKeep = undefined;
      this._strategy = undefined;
      this._unit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._quantityToKeep = value.quantityToKeep;
      this._strategy = value.strategy;
      this._unit = value.unit;
    }
  }

  // quantity_to_keep - computed: true, optional: true, required: false
  private _quantityToKeep?: number; 
  public get quantityToKeep() {
    return this.getNumberAttribute('quantity_to_keep');
  }
  public set quantityToKeep(value: number) {
    this._quantityToKeep = value;
  }
  public resetQuantityToKeep() {
    this._quantityToKeep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quantityToKeepInput() {
    return this._quantityToKeep;
  }

  // strategy - computed: false, optional: false, required: true
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }

  // unit - computed: true, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}

export class LifecycleReleaseRetentionWithStrategyList extends cdktf.ComplexList {
  public internalValue? : LifecycleReleaseRetentionWithStrategy[] | cdktf.IResolvable

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
  public get(index: number): LifecycleReleaseRetentionWithStrategyOutputReference {
    return new LifecycleReleaseRetentionWithStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LifecycleTentacleRetentionPolicy {
  /**
  * The number of days/releases to keep. The default value is 30. If 0 then all are kept.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/lifecycle#quantity_to_keep Lifecycle#quantity_to_keep}
  */
  readonly quantityToKeep?: number;
  /**
  * Indicates if items should never be deleted. The default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/lifecycle#should_keep_forever Lifecycle#should_keep_forever}
  */
  readonly shouldKeepForever?: boolean | cdktf.IResolvable;
  /**
  * The unit of quantity to keep. Valid units are Days or Items. The default value is Days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/lifecycle#unit Lifecycle#unit}
  */
  readonly unit?: string;
}

export function lifecycleTentacleRetentionPolicyToTerraform(struct?: LifecycleTentacleRetentionPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    quantity_to_keep: cdktf.numberToTerraform(struct!.quantityToKeep),
    should_keep_forever: cdktf.booleanToTerraform(struct!.shouldKeepForever),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function lifecycleTentacleRetentionPolicyToHclTerraform(struct?: LifecycleTentacleRetentionPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    quantity_to_keep: {
      value: cdktf.numberToHclTerraform(struct!.quantityToKeep),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    should_keep_forever: {
      value: cdktf.booleanToHclTerraform(struct!.shouldKeepForever),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LifecycleTentacleRetentionPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LifecycleTentacleRetentionPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._quantityToKeep !== undefined) {
      hasAnyValues = true;
      internalValueResult.quantityToKeep = this._quantityToKeep;
    }
    if (this._shouldKeepForever !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldKeepForever = this._shouldKeepForever;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LifecycleTentacleRetentionPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._quantityToKeep = undefined;
      this._shouldKeepForever = undefined;
      this._unit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._quantityToKeep = value.quantityToKeep;
      this._shouldKeepForever = value.shouldKeepForever;
      this._unit = value.unit;
    }
  }

  // quantity_to_keep - computed: true, optional: true, required: false
  private _quantityToKeep?: number; 
  public get quantityToKeep() {
    return this.getNumberAttribute('quantity_to_keep');
  }
  public set quantityToKeep(value: number) {
    this._quantityToKeep = value;
  }
  public resetQuantityToKeep() {
    this._quantityToKeep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quantityToKeepInput() {
    return this._quantityToKeep;
  }

  // should_keep_forever - computed: true, optional: true, required: false
  private _shouldKeepForever?: boolean | cdktf.IResolvable; 
  public get shouldKeepForever() {
    return this.getBooleanAttribute('should_keep_forever');
  }
  public set shouldKeepForever(value: boolean | cdktf.IResolvable) {
    this._shouldKeepForever = value;
  }
  public resetShouldKeepForever() {
    this._shouldKeepForever = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldKeepForeverInput() {
    return this._shouldKeepForever;
  }

  // unit - computed: true, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}

export class LifecycleTentacleRetentionPolicyList extends cdktf.ComplexList {
  public internalValue? : LifecycleTentacleRetentionPolicy[] | cdktf.IResolvable

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
  public get(index: number): LifecycleTentacleRetentionPolicyOutputReference {
    return new LifecycleTentacleRetentionPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LifecycleTentacleRetentionWithStrategy {
  /**
  * The number of days/releases to keep.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/lifecycle#quantity_to_keep Lifecycle#quantity_to_keep}
  */
  readonly quantityToKeep?: number;
  /**
  * How retention will be set. Valid strategies are `Default`, `Forever`, and `Count`. The default value is `Default`.
  *   - `strategy = "Default"`, is used if the retention is set by the space-wide default lifecycle retention policy. When `Default` is used, no other attributes can be set since the specific retention policy is no longer defined within this lifecycle.
  *   - `strategy = "Forever"`, is used if items within this lifecycle should never be deleted.
  *   - `strategy = "Count"`, is used if a specific number of days/releases should be kept.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/lifecycle#strategy Lifecycle#strategy}
  */
  readonly strategy: string;
  /**
  * The unit of quantity to keep. Valid units are Days or Items.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/lifecycle#unit Lifecycle#unit}
  */
  readonly unit?: string;
}

export function lifecycleTentacleRetentionWithStrategyToTerraform(struct?: LifecycleTentacleRetentionWithStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    quantity_to_keep: cdktf.numberToTerraform(struct!.quantityToKeep),
    strategy: cdktf.stringToTerraform(struct!.strategy),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function lifecycleTentacleRetentionWithStrategyToHclTerraform(struct?: LifecycleTentacleRetentionWithStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    quantity_to_keep: {
      value: cdktf.numberToHclTerraform(struct!.quantityToKeep),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LifecycleTentacleRetentionWithStrategyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LifecycleTentacleRetentionWithStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._quantityToKeep !== undefined) {
      hasAnyValues = true;
      internalValueResult.quantityToKeep = this._quantityToKeep;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LifecycleTentacleRetentionWithStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._quantityToKeep = undefined;
      this._strategy = undefined;
      this._unit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._quantityToKeep = value.quantityToKeep;
      this._strategy = value.strategy;
      this._unit = value.unit;
    }
  }

  // quantity_to_keep - computed: true, optional: true, required: false
  private _quantityToKeep?: number; 
  public get quantityToKeep() {
    return this.getNumberAttribute('quantity_to_keep');
  }
  public set quantityToKeep(value: number) {
    this._quantityToKeep = value;
  }
  public resetQuantityToKeep() {
    this._quantityToKeep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quantityToKeepInput() {
    return this._quantityToKeep;
  }

  // strategy - computed: false, optional: false, required: true
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }

  // unit - computed: true, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}

export class LifecycleTentacleRetentionWithStrategyList extends cdktf.ComplexList {
  public internalValue? : LifecycleTentacleRetentionWithStrategy[] | cdktf.IResolvable

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
  public get(index: number): LifecycleTentacleRetentionWithStrategyOutputReference {
    return new LifecycleTentacleRetentionWithStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/lifecycle octopusdeploy_lifecycle}
*/
export class Lifecycle extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_lifecycle";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Lifecycle resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Lifecycle to import
  * @param importFromId The id of the existing Lifecycle that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/lifecycle#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Lifecycle to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_lifecycle", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/lifecycle octopusdeploy_lifecycle} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LifecycleConfig
  */
  public constructor(scope: Construct, id: string, config: LifecycleConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_lifecycle',
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
    this._description = config.description;
    this._name = config.name;
    this._spaceId = config.spaceId;
    this._phase.internalValue = config.phase;
    this._releaseRetentionPolicy.internalValue = config.releaseRetentionPolicy;
    this._releaseRetentionWithStrategy.internalValue = config.releaseRetentionWithStrategy;
    this._tentacleRetentionPolicy.internalValue = config.tentacleRetentionPolicy;
    this._tentacleRetentionWithStrategy.internalValue = config.tentacleRetentionWithStrategy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // space_id - computed: true, optional: true, required: false
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

  // phase - computed: false, optional: true, required: false
  private _phase = new LifecyclePhaseList(this, "phase", false);
  public get phase() {
    return this._phase;
  }
  public putPhase(value: LifecyclePhase[] | cdktf.IResolvable) {
    this._phase.internalValue = value;
  }
  public resetPhase() {
    this._phase.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phaseInput() {
    return this._phase.internalValue;
  }

  // release_retention_policy - computed: false, optional: true, required: false
  private _releaseRetentionPolicy = new LifecycleReleaseRetentionPolicyList(this, "release_retention_policy", false);
  public get releaseRetentionPolicy() {
    return this._releaseRetentionPolicy;
  }
  public putReleaseRetentionPolicy(value: LifecycleReleaseRetentionPolicy[] | cdktf.IResolvable) {
    this._releaseRetentionPolicy.internalValue = value;
  }
  public resetReleaseRetentionPolicy() {
    this._releaseRetentionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseRetentionPolicyInput() {
    return this._releaseRetentionPolicy.internalValue;
  }

  // release_retention_with_strategy - computed: false, optional: true, required: false
  private _releaseRetentionWithStrategy = new LifecycleReleaseRetentionWithStrategyList(this, "release_retention_with_strategy", false);
  public get releaseRetentionWithStrategy() {
    return this._releaseRetentionWithStrategy;
  }
  public putReleaseRetentionWithStrategy(value: LifecycleReleaseRetentionWithStrategy[] | cdktf.IResolvable) {
    this._releaseRetentionWithStrategy.internalValue = value;
  }
  public resetReleaseRetentionWithStrategy() {
    this._releaseRetentionWithStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseRetentionWithStrategyInput() {
    return this._releaseRetentionWithStrategy.internalValue;
  }

  // tentacle_retention_policy - computed: false, optional: true, required: false
  private _tentacleRetentionPolicy = new LifecycleTentacleRetentionPolicyList(this, "tentacle_retention_policy", false);
  public get tentacleRetentionPolicy() {
    return this._tentacleRetentionPolicy;
  }
  public putTentacleRetentionPolicy(value: LifecycleTentacleRetentionPolicy[] | cdktf.IResolvable) {
    this._tentacleRetentionPolicy.internalValue = value;
  }
  public resetTentacleRetentionPolicy() {
    this._tentacleRetentionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tentacleRetentionPolicyInput() {
    return this._tentacleRetentionPolicy.internalValue;
  }

  // tentacle_retention_with_strategy - computed: false, optional: true, required: false
  private _tentacleRetentionWithStrategy = new LifecycleTentacleRetentionWithStrategyList(this, "tentacle_retention_with_strategy", false);
  public get tentacleRetentionWithStrategy() {
    return this._tentacleRetentionWithStrategy;
  }
  public putTentacleRetentionWithStrategy(value: LifecycleTentacleRetentionWithStrategy[] | cdktf.IResolvable) {
    this._tentacleRetentionWithStrategy.internalValue = value;
  }
  public resetTentacleRetentionWithStrategy() {
    this._tentacleRetentionWithStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tentacleRetentionWithStrategyInput() {
    return this._tentacleRetentionWithStrategy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      space_id: cdktf.stringToTerraform(this._spaceId),
      phase: cdktf.listMapper(lifecyclePhaseToTerraform, true)(this._phase.internalValue),
      release_retention_policy: cdktf.listMapper(lifecycleReleaseRetentionPolicyToTerraform, true)(this._releaseRetentionPolicy.internalValue),
      release_retention_with_strategy: cdktf.listMapper(lifecycleReleaseRetentionWithStrategyToTerraform, true)(this._releaseRetentionWithStrategy.internalValue),
      tentacle_retention_policy: cdktf.listMapper(lifecycleTentacleRetentionPolicyToTerraform, true)(this._tentacleRetentionPolicy.internalValue),
      tentacle_retention_with_strategy: cdktf.listMapper(lifecycleTentacleRetentionWithStrategyToTerraform, true)(this._tentacleRetentionWithStrategy.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      phase: {
        value: cdktf.listMapperHcl(lifecyclePhaseToHclTerraform, true)(this._phase.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LifecyclePhaseList",
      },
      release_retention_policy: {
        value: cdktf.listMapperHcl(lifecycleReleaseRetentionPolicyToHclTerraform, true)(this._releaseRetentionPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LifecycleReleaseRetentionPolicyList",
      },
      release_retention_with_strategy: {
        value: cdktf.listMapperHcl(lifecycleReleaseRetentionWithStrategyToHclTerraform, true)(this._releaseRetentionWithStrategy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LifecycleReleaseRetentionWithStrategyList",
      },
      tentacle_retention_policy: {
        value: cdktf.listMapperHcl(lifecycleTentacleRetentionPolicyToHclTerraform, true)(this._tentacleRetentionPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LifecycleTentacleRetentionPolicyList",
      },
      tentacle_retention_with_strategy: {
        value: cdktf.listMapperHcl(lifecycleTentacleRetentionWithStrategyToHclTerraform, true)(this._tentacleRetentionWithStrategy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LifecycleTentacleRetentionWithStrategyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
