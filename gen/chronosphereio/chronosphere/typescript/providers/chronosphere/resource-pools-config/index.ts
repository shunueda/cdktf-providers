// https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourcePoolsConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#id ResourcePoolsConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * default_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#default_pool ResourcePoolsConfig#default_pool}
  */
  readonly defaultPool?: ResourcePoolsConfigDefaultPool;
  /**
  * pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#pool ResourcePoolsConfig#pool}
  */
  readonly pool?: ResourcePoolsConfigPool[] | cdktf.IResolvable;
  /**
  * pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#pools ResourcePoolsConfig#pools}
  */
  readonly pools?: ResourcePoolsConfigPools[] | cdktf.IResolvable;
}
export interface ResourcePoolsConfigDefaultPoolAllocationFixedValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#license ResourcePoolsConfig#license}
  */
  readonly license: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#value ResourcePoolsConfig#value}
  */
  readonly value: number;
}

export function resourcePoolsConfigDefaultPoolAllocationFixedValueToTerraform(struct?: ResourcePoolsConfigDefaultPoolAllocationFixedValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    license: cdktf.stringToTerraform(struct!.license),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function resourcePoolsConfigDefaultPoolAllocationFixedValueToHclTerraform(struct?: ResourcePoolsConfigDefaultPoolAllocationFixedValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    license: {
      value: cdktf.stringToHclTerraform(struct!.license),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourcePoolsConfigDefaultPoolAllocationFixedValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourcePoolsConfigDefaultPoolAllocationFixedValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._license !== undefined) {
      hasAnyValues = true;
      internalValueResult.license = this._license;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourcePoolsConfigDefaultPoolAllocationFixedValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._license = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._license = value.license;
      this._value = value.value;
    }
  }

  // license - computed: false, optional: false, required: true
  private _license?: string; 
  public get license() {
    return this.getStringAttribute('license');
  }
  public set license(value: string) {
    this._license = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseInput() {
    return this._license;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ResourcePoolsConfigDefaultPoolAllocationFixedValueList extends cdktf.ComplexList {
  public internalValue? : ResourcePoolsConfigDefaultPoolAllocationFixedValue[] | cdktf.IResolvable

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
  public get(index: number): ResourcePoolsConfigDefaultPoolAllocationFixedValueOutputReference {
    return new ResourcePoolsConfigDefaultPoolAllocationFixedValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourcePoolsConfigDefaultPoolAllocationPriorityThresholdsAllPriorities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#fixed_value ResourcePoolsConfig#fixed_value}
  */
  readonly fixedValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#percent_of_pool_allocation ResourcePoolsConfig#percent_of_pool_allocation}
  */
  readonly percentOfPoolAllocation?: number;
}

export function resourcePoolsConfigDefaultPoolAllocationPriorityThresholdsAllPrioritiesToTerraform(struct?: ResourcePoolsConfigDefaultPoolAllocationPriorityThresholdsAllPrioritiesOutputReference | ResourcePoolsConfigDefaultPoolAllocationPriorityThresholdsAllPriorities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fixed_value: cdktf.numberToTerraform(struct!.fixedValue),
    percent_of_pool_allocation: cdktf.numberToTerraform(struct!.percentOfPoolAllocation),
  }
}


export function resourcePoolsConfigDefaultPoolAllocationPriorityThresholdsAllPrioritiesToHclTerraform(struct?: ResourcePoolsConfigDefaultPoolAllocationPriorityThresholdsAllPrioritiesOutputReference | ResourcePoolsConfigDefaultPoolAllocationPriorityThresholdsAllPriorities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fixed_value: {
      value: cdktf.numberToHclTerraform(struct!.fixedValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    percent_of_pool_allocation: {
      value: cdktf.numberToHclTerraform(struct!.percentOfPoolAllocation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourcePoolsConfigDefaultPoolAllocationPriorityThresholdsAllPrioritiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourcePoolsConfigDefaultPoolAllocationPriorityThresholdsAllPriorities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fixedValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedValue = this._fixedValue;
    }
    if (this._percentOfPoolAllocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentOfPoolAllocation = this._percentOfPoolAllocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourcePoolsConfigDefaultPoolAllocationPriorityThresholdsAllPriorities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fixedValue = undefined;
      this._percentOfPoolAllocation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fixedValue = value.fixedValue;
      this._percentOfPoolAllocation = value.percentOfPoolAllocation;
    }
  }

  // fixed_value - computed: false, optional: true, required: false
  private _fixedValue?: number; 
  public get fixedValue() {
    return this.getNumberAttribute('fixed_value');
  }
  public set fixedValue(value: number) {
    this._fixedValue = value;
  }
  public resetFixedValue() {
    this._fixedValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedValueInput() {
    return this._fixedValue;
  }

  // percent_of_pool_allocation - computed: false, optional: true, required: false
  private _percentOfPoolAllocation?: number; 
  public get percentOfPoolAllocation() {
    return this.getNumberAttribute('percent_of_pool_allocation');
  }
  public set percentOfPoolAllocation(value: number) {
    this._percentOfPoolAllocation = value;
  }
  public resetPercentOfPoolAllocation() {
    this._percentOfPoolAllocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentOfPoolAllocationInput() {
    return this._percentOfPoolAllocation;
  }
}
export interface ResourcePoolsConfigDefaultPoolAllocationPriorityThresholdsDefaultAndLowPriority {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#fixed_value ResourcePoolsConfig#fixed_value}
  */
  readonly fixedValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#percent_of_pool_allocation ResourcePoolsConfig#percent_of_pool_allocation}
  */
  readonly percentOfPoolAllocation?: number;
}

export function resourcePoolsConfigDefaultPoolAllocationPriorityThresholdsDefaultAndLowPriorityToTerraform(struct?: ResourcePoolsConfigDefaultPoolAllocationPriorityThresholdsDefaultAndLowPriorityOutputReference | ResourcePoolsConfigDefaultPoolAllocationPriorityThresholdsDefaultAndLowPriority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fixed_value: cdktf.numberToTerraform(struct!.fixedValue),
    percent_of_pool_allocation: cdktf.numberToTerraform(struct!.percentOfPoolAllocation),
  }
}


export function resourcePoolsConfigDefaultPoolAllocationPriorityThresholdsDefaultAndLowPriorityToHclTerraform(struct?: ResourcePoolsConfigDefaultPoolAllocationPriorityThresholdsDefaultAndLowPriorityOutputReference | ResourcePoolsConfigDefaultPoolAllocationPriorityThresholdsDefaultAndLowPriority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fixed_value: {
      value: cdktf.numberToHclTerraform(struct!.fixedValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    percent_of_pool_allocation: {
      value: cdktf.numberToHclTerraform(struct!.percentOfPoolAllocation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourcePoolsConfigDefaultPoolAllocationPriorityThresholdsDefaultAndLowPriorityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourcePoolsConfigDefaultPoolAllocationPriorityThresholdsDefaultAndLowPriority | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fixedValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedValue = this._fixedValue;
    }
    if (this._percentOfPoolAllocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentOfPoolAllocation = this._percentOfPoolAllocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourcePoolsConfigDefaultPoolAllocationPriorityThresholdsDefaultAndLowPriority | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fixedValue = undefined;
      this._percentOfPoolAllocation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fixedValue = value.fixedValue;
      this._percentOfPoolAllocation = value.percentOfPoolAllocation;
    }
  }

  // fixed_value - computed: false, optional: true, required: false
  private _fixedValue?: number; 
  public get fixedValue() {
    return this.getNumberAttribute('fixed_value');
  }
  public set fixedValue(value: number) {
    this._fixedValue = value;
  }
  public resetFixedValue() {
    this._fixedValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedValueInput() {
    return this._fixedValue;
  }

  // percent_of_pool_allocation - computed: false, optional: true, required: false
  private _percentOfPoolAllocation?: number; 
  public get percentOfPoolAllocation() {
    return this.getNumberAttribute('percent_of_pool_allocation');
  }
  public set percentOfPoolAllocation(value: number) {
    this._percentOfPoolAllocation = value;
  }
  public resetPercentOfPoolAllocation() {
    this._percentOfPoolAllocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentOfPoolAllocationInput() {
    return this._percentOfPoolAllocation;
  }
}
export interface ResourcePoolsConfigDefaultPoolAllocationPriorityThresholdsLowPriority {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#fixed_value ResourcePoolsConfig#fixed_value}
  */
  readonly fixedValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#percent_of_pool_allocation ResourcePoolsConfig#percent_of_pool_allocation}
  */
  readonly percentOfPoolAllocation?: number;
}

export function resourcePoolsConfigDefaultPoolAllocationPriorityThresholdsLowPriorityToTerraform(struct?: ResourcePoolsConfigDefaultPoolAllocationPriorityThresholdsLowPriorityOutputReference | ResourcePoolsConfigDefaultPoolAllocationPriorityThresholdsLowPriority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fixed_value: cdktf.numberToTerraform(struct!.fixedValue),
    percent_of_pool_allocation: cdktf.numberToTerraform(struct!.percentOfPoolAllocation),
  }
}


export function resourcePoolsConfigDefaultPoolAllocationPriorityThresholdsLowPriorityToHclTerraform(struct?: ResourcePoolsConfigDefaultPoolAllocationPriorityThresholdsLowPriorityOutputReference | ResourcePoolsConfigDefaultPoolAllocationPriorityThresholdsLowPriority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fixed_value: {
      value: cdktf.numberToHclTerraform(struct!.fixedValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    percent_of_pool_allocation: {
      value: cdktf.numberToHclTerraform(struct!.percentOfPoolAllocation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourcePoolsConfigDefaultPoolAllocationPriorityThresholdsLowPriorityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourcePoolsConfigDefaultPoolAllocationPriorityThresholdsLowPriority | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fixedValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedValue = this._fixedValue;
    }
    if (this._percentOfPoolAllocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentOfPoolAllocation = this._percentOfPoolAllocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourcePoolsConfigDefaultPoolAllocationPriorityThresholdsLowPriority | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fixedValue = undefined;
      this._percentOfPoolAllocation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fixedValue = value.fixedValue;
      this._percentOfPoolAllocation = value.percentOfPoolAllocation;
    }
  }

  // fixed_value - computed: false, optional: true, required: false
  private _fixedValue?: number; 
  public get fixedValue() {
    return this.getNumberAttribute('fixed_value');
  }
  public set fixedValue(value: number) {
    this._fixedValue = value;
  }
  public resetFixedValue() {
    this._fixedValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedValueInput() {
    return this._fixedValue;
  }

  // percent_of_pool_allocation - computed: false, optional: true, required: false
  private _percentOfPoolAllocation?: number; 
  public get percentOfPoolAllocation() {
    return this.getNumberAttribute('percent_of_pool_allocation');
  }
  public set percentOfPoolAllocation(value: number) {
    this._percentOfPoolAllocation = value;
  }
  public resetPercentOfPoolAllocation() {
    this._percentOfPoolAllocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentOfPoolAllocationInput() {
    return this._percentOfPoolAllocation;
  }
}
export interface ResourcePoolsConfigDefaultPoolAllocationPriorityThresholds {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#license ResourcePoolsConfig#license}
  */
  readonly license: string;
  /**
  * all_priorities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#all_priorities ResourcePoolsConfig#all_priorities}
  */
  readonly allPriorities?: ResourcePoolsConfigDefaultPoolAllocationPriorityThresholdsAllPriorities;
  /**
  * default_and_low_priority block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#default_and_low_priority ResourcePoolsConfig#default_and_low_priority}
  */
  readonly defaultAndLowPriority?: ResourcePoolsConfigDefaultPoolAllocationPriorityThresholdsDefaultAndLowPriority;
  /**
  * low_priority block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#low_priority ResourcePoolsConfig#low_priority}
  */
  readonly lowPriority?: ResourcePoolsConfigDefaultPoolAllocationPriorityThresholdsLowPriority;
}

export function resourcePoolsConfigDefaultPoolAllocationPriorityThresholdsToTerraform(struct?: ResourcePoolsConfigDefaultPoolAllocationPriorityThresholds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    license: cdktf.stringToTerraform(struct!.license),
    all_priorities: resourcePoolsConfigDefaultPoolAllocationPriorityThresholdsAllPrioritiesToTerraform(struct!.allPriorities),
    default_and_low_priority: resourcePoolsConfigDefaultPoolAllocationPriorityThresholdsDefaultAndLowPriorityToTerraform(struct!.defaultAndLowPriority),
    low_priority: resourcePoolsConfigDefaultPoolAllocationPriorityThresholdsLowPriorityToTerraform(struct!.lowPriority),
  }
}


export function resourcePoolsConfigDefaultPoolAllocationPriorityThresholdsToHclTerraform(struct?: ResourcePoolsConfigDefaultPoolAllocationPriorityThresholds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    license: {
      value: cdktf.stringToHclTerraform(struct!.license),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    all_priorities: {
      value: resourcePoolsConfigDefaultPoolAllocationPriorityThresholdsAllPrioritiesToHclTerraform(struct!.allPriorities),
      isBlock: true,
      type: "list",
      storageClassType: "ResourcePoolsConfigDefaultPoolAllocationPriorityThresholdsAllPrioritiesList",
    },
    default_and_low_priority: {
      value: resourcePoolsConfigDefaultPoolAllocationPriorityThresholdsDefaultAndLowPriorityToHclTerraform(struct!.defaultAndLowPriority),
      isBlock: true,
      type: "list",
      storageClassType: "ResourcePoolsConfigDefaultPoolAllocationPriorityThresholdsDefaultAndLowPriorityList",
    },
    low_priority: {
      value: resourcePoolsConfigDefaultPoolAllocationPriorityThresholdsLowPriorityToHclTerraform(struct!.lowPriority),
      isBlock: true,
      type: "list",
      storageClassType: "ResourcePoolsConfigDefaultPoolAllocationPriorityThresholdsLowPriorityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourcePoolsConfigDefaultPoolAllocationPriorityThresholdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourcePoolsConfigDefaultPoolAllocationPriorityThresholds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._license !== undefined) {
      hasAnyValues = true;
      internalValueResult.license = this._license;
    }
    if (this._allPriorities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allPriorities = this._allPriorities?.internalValue;
    }
    if (this._defaultAndLowPriority?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultAndLowPriority = this._defaultAndLowPriority?.internalValue;
    }
    if (this._lowPriority?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowPriority = this._lowPriority?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourcePoolsConfigDefaultPoolAllocationPriorityThresholds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._license = undefined;
      this._allPriorities.internalValue = undefined;
      this._defaultAndLowPriority.internalValue = undefined;
      this._lowPriority.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._license = value.license;
      this._allPriorities.internalValue = value.allPriorities;
      this._defaultAndLowPriority.internalValue = value.defaultAndLowPriority;
      this._lowPriority.internalValue = value.lowPriority;
    }
  }

  // license - computed: false, optional: false, required: true
  private _license?: string; 
  public get license() {
    return this.getStringAttribute('license');
  }
  public set license(value: string) {
    this._license = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseInput() {
    return this._license;
  }

  // all_priorities - computed: false, optional: true, required: false
  private _allPriorities = new ResourcePoolsConfigDefaultPoolAllocationPriorityThresholdsAllPrioritiesOutputReference(this, "all_priorities");
  public get allPriorities() {
    return this._allPriorities;
  }
  public putAllPriorities(value: ResourcePoolsConfigDefaultPoolAllocationPriorityThresholdsAllPriorities) {
    this._allPriorities.internalValue = value;
  }
  public resetAllPriorities() {
    this._allPriorities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allPrioritiesInput() {
    return this._allPriorities.internalValue;
  }

  // default_and_low_priority - computed: false, optional: true, required: false
  private _defaultAndLowPriority = new ResourcePoolsConfigDefaultPoolAllocationPriorityThresholdsDefaultAndLowPriorityOutputReference(this, "default_and_low_priority");
  public get defaultAndLowPriority() {
    return this._defaultAndLowPriority;
  }
  public putDefaultAndLowPriority(value: ResourcePoolsConfigDefaultPoolAllocationPriorityThresholdsDefaultAndLowPriority) {
    this._defaultAndLowPriority.internalValue = value;
  }
  public resetDefaultAndLowPriority() {
    this._defaultAndLowPriority.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAndLowPriorityInput() {
    return this._defaultAndLowPriority.internalValue;
  }

  // low_priority - computed: false, optional: true, required: false
  private _lowPriority = new ResourcePoolsConfigDefaultPoolAllocationPriorityThresholdsLowPriorityOutputReference(this, "low_priority");
  public get lowPriority() {
    return this._lowPriority;
  }
  public putLowPriority(value: ResourcePoolsConfigDefaultPoolAllocationPriorityThresholdsLowPriority) {
    this._lowPriority.internalValue = value;
  }
  public resetLowPriority() {
    this._lowPriority.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowPriorityInput() {
    return this._lowPriority.internalValue;
  }
}

export class ResourcePoolsConfigDefaultPoolAllocationPriorityThresholdsList extends cdktf.ComplexList {
  public internalValue? : ResourcePoolsConfigDefaultPoolAllocationPriorityThresholds[] | cdktf.IResolvable

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
  public get(index: number): ResourcePoolsConfigDefaultPoolAllocationPriorityThresholdsOutputReference {
    return new ResourcePoolsConfigDefaultPoolAllocationPriorityThresholdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourcePoolsConfigDefaultPoolAllocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#percent_of_license ResourcePoolsConfig#percent_of_license}
  */
  readonly percentOfLicense?: number;
  /**
  * fixed_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#fixed_value ResourcePoolsConfig#fixed_value}
  */
  readonly fixedValue?: ResourcePoolsConfigDefaultPoolAllocationFixedValue[] | cdktf.IResolvable;
  /**
  * priority_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#priority_thresholds ResourcePoolsConfig#priority_thresholds}
  */
  readonly priorityThresholds?: ResourcePoolsConfigDefaultPoolAllocationPriorityThresholds[] | cdktf.IResolvable;
}

export function resourcePoolsConfigDefaultPoolAllocationToTerraform(struct?: ResourcePoolsConfigDefaultPoolAllocationOutputReference | ResourcePoolsConfigDefaultPoolAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percent_of_license: cdktf.numberToTerraform(struct!.percentOfLicense),
    fixed_value: cdktf.listMapper(resourcePoolsConfigDefaultPoolAllocationFixedValueToTerraform, true)(struct!.fixedValue),
    priority_thresholds: cdktf.listMapper(resourcePoolsConfigDefaultPoolAllocationPriorityThresholdsToTerraform, true)(struct!.priorityThresholds),
  }
}


export function resourcePoolsConfigDefaultPoolAllocationToHclTerraform(struct?: ResourcePoolsConfigDefaultPoolAllocationOutputReference | ResourcePoolsConfigDefaultPoolAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    percent_of_license: {
      value: cdktf.numberToHclTerraform(struct!.percentOfLicense),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fixed_value: {
      value: cdktf.listMapperHcl(resourcePoolsConfigDefaultPoolAllocationFixedValueToHclTerraform, true)(struct!.fixedValue),
      isBlock: true,
      type: "list",
      storageClassType: "ResourcePoolsConfigDefaultPoolAllocationFixedValueList",
    },
    priority_thresholds: {
      value: cdktf.listMapperHcl(resourcePoolsConfigDefaultPoolAllocationPriorityThresholdsToHclTerraform, true)(struct!.priorityThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "ResourcePoolsConfigDefaultPoolAllocationPriorityThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourcePoolsConfigDefaultPoolAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourcePoolsConfigDefaultPoolAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentOfLicense !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentOfLicense = this._percentOfLicense;
    }
    if (this._fixedValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedValue = this._fixedValue?.internalValue;
    }
    if (this._priorityThresholds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityThresholds = this._priorityThresholds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourcePoolsConfigDefaultPoolAllocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._percentOfLicense = undefined;
      this._fixedValue.internalValue = undefined;
      this._priorityThresholds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._percentOfLicense = value.percentOfLicense;
      this._fixedValue.internalValue = value.fixedValue;
      this._priorityThresholds.internalValue = value.priorityThresholds;
    }
  }

  // percent_of_license - computed: false, optional: true, required: false
  private _percentOfLicense?: number; 
  public get percentOfLicense() {
    return this.getNumberAttribute('percent_of_license');
  }
  public set percentOfLicense(value: number) {
    this._percentOfLicense = value;
  }
  public resetPercentOfLicense() {
    this._percentOfLicense = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentOfLicenseInput() {
    return this._percentOfLicense;
  }

  // fixed_value - computed: false, optional: true, required: false
  private _fixedValue = new ResourcePoolsConfigDefaultPoolAllocationFixedValueList(this, "fixed_value", false);
  public get fixedValue() {
    return this._fixedValue;
  }
  public putFixedValue(value: ResourcePoolsConfigDefaultPoolAllocationFixedValue[] | cdktf.IResolvable) {
    this._fixedValue.internalValue = value;
  }
  public resetFixedValue() {
    this._fixedValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedValueInput() {
    return this._fixedValue.internalValue;
  }

  // priority_thresholds - computed: false, optional: true, required: false
  private _priorityThresholds = new ResourcePoolsConfigDefaultPoolAllocationPriorityThresholdsList(this, "priority_thresholds", false);
  public get priorityThresholds() {
    return this._priorityThresholds;
  }
  public putPriorityThresholds(value: ResourcePoolsConfigDefaultPoolAllocationPriorityThresholds[] | cdktf.IResolvable) {
    this._priorityThresholds.internalValue = value;
  }
  public resetPriorityThresholds() {
    this._priorityThresholds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityThresholdsInput() {
    return this._priorityThresholds.internalValue;
  }
}
export interface ResourcePoolsConfigDefaultPoolPriorities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#high_priority_match_rules ResourcePoolsConfig#high_priority_match_rules}
  */
  readonly highPriorityMatchRules?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#low_priority_match_rules ResourcePoolsConfig#low_priority_match_rules}
  */
  readonly lowPriorityMatchRules?: string[];
}

export function resourcePoolsConfigDefaultPoolPrioritiesToTerraform(struct?: ResourcePoolsConfigDefaultPoolPrioritiesOutputReference | ResourcePoolsConfigDefaultPoolPriorities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    high_priority_match_rules: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.highPriorityMatchRules),
    low_priority_match_rules: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.lowPriorityMatchRules),
  }
}


export function resourcePoolsConfigDefaultPoolPrioritiesToHclTerraform(struct?: ResourcePoolsConfigDefaultPoolPrioritiesOutputReference | ResourcePoolsConfigDefaultPoolPriorities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    high_priority_match_rules: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.highPriorityMatchRules),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    low_priority_match_rules: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.lowPriorityMatchRules),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourcePoolsConfigDefaultPoolPrioritiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourcePoolsConfigDefaultPoolPriorities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._highPriorityMatchRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.highPriorityMatchRules = this._highPriorityMatchRules;
    }
    if (this._lowPriorityMatchRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowPriorityMatchRules = this._lowPriorityMatchRules;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourcePoolsConfigDefaultPoolPriorities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._highPriorityMatchRules = undefined;
      this._lowPriorityMatchRules = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._highPriorityMatchRules = value.highPriorityMatchRules;
      this._lowPriorityMatchRules = value.lowPriorityMatchRules;
    }
  }

  // high_priority_match_rules - computed: false, optional: true, required: false
  private _highPriorityMatchRules?: string[]; 
  public get highPriorityMatchRules() {
    return this.getListAttribute('high_priority_match_rules');
  }
  public set highPriorityMatchRules(value: string[]) {
    this._highPriorityMatchRules = value;
  }
  public resetHighPriorityMatchRules() {
    this._highPriorityMatchRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highPriorityMatchRulesInput() {
    return this._highPriorityMatchRules;
  }

  // low_priority_match_rules - computed: false, optional: true, required: false
  private _lowPriorityMatchRules?: string[]; 
  public get lowPriorityMatchRules() {
    return this.getListAttribute('low_priority_match_rules');
  }
  public set lowPriorityMatchRules(value: string[]) {
    this._lowPriorityMatchRules = value;
  }
  public resetLowPriorityMatchRules() {
    this._lowPriorityMatchRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowPriorityMatchRulesInput() {
    return this._lowPriorityMatchRules;
  }
}
export interface ResourcePoolsConfigDefaultPoolPriorityThresholdsAllPriorities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#fixed_value ResourcePoolsConfig#fixed_value}
  */
  readonly fixedValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#percent_of_pool_allocation ResourcePoolsConfig#percent_of_pool_allocation}
  */
  readonly percentOfPoolAllocation?: number;
}

export function resourcePoolsConfigDefaultPoolPriorityThresholdsAllPrioritiesToTerraform(struct?: ResourcePoolsConfigDefaultPoolPriorityThresholdsAllPrioritiesOutputReference | ResourcePoolsConfigDefaultPoolPriorityThresholdsAllPriorities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fixed_value: cdktf.numberToTerraform(struct!.fixedValue),
    percent_of_pool_allocation: cdktf.numberToTerraform(struct!.percentOfPoolAllocation),
  }
}


export function resourcePoolsConfigDefaultPoolPriorityThresholdsAllPrioritiesToHclTerraform(struct?: ResourcePoolsConfigDefaultPoolPriorityThresholdsAllPrioritiesOutputReference | ResourcePoolsConfigDefaultPoolPriorityThresholdsAllPriorities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fixed_value: {
      value: cdktf.numberToHclTerraform(struct!.fixedValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    percent_of_pool_allocation: {
      value: cdktf.numberToHclTerraform(struct!.percentOfPoolAllocation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourcePoolsConfigDefaultPoolPriorityThresholdsAllPrioritiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourcePoolsConfigDefaultPoolPriorityThresholdsAllPriorities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fixedValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedValue = this._fixedValue;
    }
    if (this._percentOfPoolAllocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentOfPoolAllocation = this._percentOfPoolAllocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourcePoolsConfigDefaultPoolPriorityThresholdsAllPriorities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fixedValue = undefined;
      this._percentOfPoolAllocation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fixedValue = value.fixedValue;
      this._percentOfPoolAllocation = value.percentOfPoolAllocation;
    }
  }

  // fixed_value - computed: false, optional: true, required: false
  private _fixedValue?: number; 
  public get fixedValue() {
    return this.getNumberAttribute('fixed_value');
  }
  public set fixedValue(value: number) {
    this._fixedValue = value;
  }
  public resetFixedValue() {
    this._fixedValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedValueInput() {
    return this._fixedValue;
  }

  // percent_of_pool_allocation - computed: false, optional: true, required: false
  private _percentOfPoolAllocation?: number; 
  public get percentOfPoolAllocation() {
    return this.getNumberAttribute('percent_of_pool_allocation');
  }
  public set percentOfPoolAllocation(value: number) {
    this._percentOfPoolAllocation = value;
  }
  public resetPercentOfPoolAllocation() {
    this._percentOfPoolAllocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentOfPoolAllocationInput() {
    return this._percentOfPoolAllocation;
  }
}
export interface ResourcePoolsConfigDefaultPoolPriorityThresholdsDefaultAndLowPriority {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#fixed_value ResourcePoolsConfig#fixed_value}
  */
  readonly fixedValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#percent_of_pool_allocation ResourcePoolsConfig#percent_of_pool_allocation}
  */
  readonly percentOfPoolAllocation?: number;
}

export function resourcePoolsConfigDefaultPoolPriorityThresholdsDefaultAndLowPriorityToTerraform(struct?: ResourcePoolsConfigDefaultPoolPriorityThresholdsDefaultAndLowPriorityOutputReference | ResourcePoolsConfigDefaultPoolPriorityThresholdsDefaultAndLowPriority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fixed_value: cdktf.numberToTerraform(struct!.fixedValue),
    percent_of_pool_allocation: cdktf.numberToTerraform(struct!.percentOfPoolAllocation),
  }
}


export function resourcePoolsConfigDefaultPoolPriorityThresholdsDefaultAndLowPriorityToHclTerraform(struct?: ResourcePoolsConfigDefaultPoolPriorityThresholdsDefaultAndLowPriorityOutputReference | ResourcePoolsConfigDefaultPoolPriorityThresholdsDefaultAndLowPriority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fixed_value: {
      value: cdktf.numberToHclTerraform(struct!.fixedValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    percent_of_pool_allocation: {
      value: cdktf.numberToHclTerraform(struct!.percentOfPoolAllocation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourcePoolsConfigDefaultPoolPriorityThresholdsDefaultAndLowPriorityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourcePoolsConfigDefaultPoolPriorityThresholdsDefaultAndLowPriority | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fixedValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedValue = this._fixedValue;
    }
    if (this._percentOfPoolAllocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentOfPoolAllocation = this._percentOfPoolAllocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourcePoolsConfigDefaultPoolPriorityThresholdsDefaultAndLowPriority | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fixedValue = undefined;
      this._percentOfPoolAllocation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fixedValue = value.fixedValue;
      this._percentOfPoolAllocation = value.percentOfPoolAllocation;
    }
  }

  // fixed_value - computed: false, optional: true, required: false
  private _fixedValue?: number; 
  public get fixedValue() {
    return this.getNumberAttribute('fixed_value');
  }
  public set fixedValue(value: number) {
    this._fixedValue = value;
  }
  public resetFixedValue() {
    this._fixedValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedValueInput() {
    return this._fixedValue;
  }

  // percent_of_pool_allocation - computed: false, optional: true, required: false
  private _percentOfPoolAllocation?: number; 
  public get percentOfPoolAllocation() {
    return this.getNumberAttribute('percent_of_pool_allocation');
  }
  public set percentOfPoolAllocation(value: number) {
    this._percentOfPoolAllocation = value;
  }
  public resetPercentOfPoolAllocation() {
    this._percentOfPoolAllocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentOfPoolAllocationInput() {
    return this._percentOfPoolAllocation;
  }
}
export interface ResourcePoolsConfigDefaultPoolPriorityThresholdsLowPriority {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#fixed_value ResourcePoolsConfig#fixed_value}
  */
  readonly fixedValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#percent_of_pool_allocation ResourcePoolsConfig#percent_of_pool_allocation}
  */
  readonly percentOfPoolAllocation?: number;
}

export function resourcePoolsConfigDefaultPoolPriorityThresholdsLowPriorityToTerraform(struct?: ResourcePoolsConfigDefaultPoolPriorityThresholdsLowPriorityOutputReference | ResourcePoolsConfigDefaultPoolPriorityThresholdsLowPriority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fixed_value: cdktf.numberToTerraform(struct!.fixedValue),
    percent_of_pool_allocation: cdktf.numberToTerraform(struct!.percentOfPoolAllocation),
  }
}


export function resourcePoolsConfigDefaultPoolPriorityThresholdsLowPriorityToHclTerraform(struct?: ResourcePoolsConfigDefaultPoolPriorityThresholdsLowPriorityOutputReference | ResourcePoolsConfigDefaultPoolPriorityThresholdsLowPriority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fixed_value: {
      value: cdktf.numberToHclTerraform(struct!.fixedValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    percent_of_pool_allocation: {
      value: cdktf.numberToHclTerraform(struct!.percentOfPoolAllocation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourcePoolsConfigDefaultPoolPriorityThresholdsLowPriorityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourcePoolsConfigDefaultPoolPriorityThresholdsLowPriority | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fixedValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedValue = this._fixedValue;
    }
    if (this._percentOfPoolAllocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentOfPoolAllocation = this._percentOfPoolAllocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourcePoolsConfigDefaultPoolPriorityThresholdsLowPriority | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fixedValue = undefined;
      this._percentOfPoolAllocation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fixedValue = value.fixedValue;
      this._percentOfPoolAllocation = value.percentOfPoolAllocation;
    }
  }

  // fixed_value - computed: false, optional: true, required: false
  private _fixedValue?: number; 
  public get fixedValue() {
    return this.getNumberAttribute('fixed_value');
  }
  public set fixedValue(value: number) {
    this._fixedValue = value;
  }
  public resetFixedValue() {
    this._fixedValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedValueInput() {
    return this._fixedValue;
  }

  // percent_of_pool_allocation - computed: false, optional: true, required: false
  private _percentOfPoolAllocation?: number; 
  public get percentOfPoolAllocation() {
    return this.getNumberAttribute('percent_of_pool_allocation');
  }
  public set percentOfPoolAllocation(value: number) {
    this._percentOfPoolAllocation = value;
  }
  public resetPercentOfPoolAllocation() {
    this._percentOfPoolAllocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentOfPoolAllocationInput() {
    return this._percentOfPoolAllocation;
  }
}
export interface ResourcePoolsConfigDefaultPoolPriorityThresholds {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#license ResourcePoolsConfig#license}
  */
  readonly license: string;
  /**
  * all_priorities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#all_priorities ResourcePoolsConfig#all_priorities}
  */
  readonly allPriorities?: ResourcePoolsConfigDefaultPoolPriorityThresholdsAllPriorities;
  /**
  * default_and_low_priority block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#default_and_low_priority ResourcePoolsConfig#default_and_low_priority}
  */
  readonly defaultAndLowPriority?: ResourcePoolsConfigDefaultPoolPriorityThresholdsDefaultAndLowPriority;
  /**
  * low_priority block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#low_priority ResourcePoolsConfig#low_priority}
  */
  readonly lowPriority?: ResourcePoolsConfigDefaultPoolPriorityThresholdsLowPriority;
}

export function resourcePoolsConfigDefaultPoolPriorityThresholdsToTerraform(struct?: ResourcePoolsConfigDefaultPoolPriorityThresholds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    license: cdktf.stringToTerraform(struct!.license),
    all_priorities: resourcePoolsConfigDefaultPoolPriorityThresholdsAllPrioritiesToTerraform(struct!.allPriorities),
    default_and_low_priority: resourcePoolsConfigDefaultPoolPriorityThresholdsDefaultAndLowPriorityToTerraform(struct!.defaultAndLowPriority),
    low_priority: resourcePoolsConfigDefaultPoolPriorityThresholdsLowPriorityToTerraform(struct!.lowPriority),
  }
}


export function resourcePoolsConfigDefaultPoolPriorityThresholdsToHclTerraform(struct?: ResourcePoolsConfigDefaultPoolPriorityThresholds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    license: {
      value: cdktf.stringToHclTerraform(struct!.license),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    all_priorities: {
      value: resourcePoolsConfigDefaultPoolPriorityThresholdsAllPrioritiesToHclTerraform(struct!.allPriorities),
      isBlock: true,
      type: "list",
      storageClassType: "ResourcePoolsConfigDefaultPoolPriorityThresholdsAllPrioritiesList",
    },
    default_and_low_priority: {
      value: resourcePoolsConfigDefaultPoolPriorityThresholdsDefaultAndLowPriorityToHclTerraform(struct!.defaultAndLowPriority),
      isBlock: true,
      type: "list",
      storageClassType: "ResourcePoolsConfigDefaultPoolPriorityThresholdsDefaultAndLowPriorityList",
    },
    low_priority: {
      value: resourcePoolsConfigDefaultPoolPriorityThresholdsLowPriorityToHclTerraform(struct!.lowPriority),
      isBlock: true,
      type: "list",
      storageClassType: "ResourcePoolsConfigDefaultPoolPriorityThresholdsLowPriorityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourcePoolsConfigDefaultPoolPriorityThresholdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourcePoolsConfigDefaultPoolPriorityThresholds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._license !== undefined) {
      hasAnyValues = true;
      internalValueResult.license = this._license;
    }
    if (this._allPriorities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allPriorities = this._allPriorities?.internalValue;
    }
    if (this._defaultAndLowPriority?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultAndLowPriority = this._defaultAndLowPriority?.internalValue;
    }
    if (this._lowPriority?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowPriority = this._lowPriority?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourcePoolsConfigDefaultPoolPriorityThresholds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._license = undefined;
      this._allPriorities.internalValue = undefined;
      this._defaultAndLowPriority.internalValue = undefined;
      this._lowPriority.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._license = value.license;
      this._allPriorities.internalValue = value.allPriorities;
      this._defaultAndLowPriority.internalValue = value.defaultAndLowPriority;
      this._lowPriority.internalValue = value.lowPriority;
    }
  }

  // license - computed: false, optional: false, required: true
  private _license?: string; 
  public get license() {
    return this.getStringAttribute('license');
  }
  public set license(value: string) {
    this._license = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseInput() {
    return this._license;
  }

  // all_priorities - computed: false, optional: true, required: false
  private _allPriorities = new ResourcePoolsConfigDefaultPoolPriorityThresholdsAllPrioritiesOutputReference(this, "all_priorities");
  public get allPriorities() {
    return this._allPriorities;
  }
  public putAllPriorities(value: ResourcePoolsConfigDefaultPoolPriorityThresholdsAllPriorities) {
    this._allPriorities.internalValue = value;
  }
  public resetAllPriorities() {
    this._allPriorities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allPrioritiesInput() {
    return this._allPriorities.internalValue;
  }

  // default_and_low_priority - computed: false, optional: true, required: false
  private _defaultAndLowPriority = new ResourcePoolsConfigDefaultPoolPriorityThresholdsDefaultAndLowPriorityOutputReference(this, "default_and_low_priority");
  public get defaultAndLowPriority() {
    return this._defaultAndLowPriority;
  }
  public putDefaultAndLowPriority(value: ResourcePoolsConfigDefaultPoolPriorityThresholdsDefaultAndLowPriority) {
    this._defaultAndLowPriority.internalValue = value;
  }
  public resetDefaultAndLowPriority() {
    this._defaultAndLowPriority.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAndLowPriorityInput() {
    return this._defaultAndLowPriority.internalValue;
  }

  // low_priority - computed: false, optional: true, required: false
  private _lowPriority = new ResourcePoolsConfigDefaultPoolPriorityThresholdsLowPriorityOutputReference(this, "low_priority");
  public get lowPriority() {
    return this._lowPriority;
  }
  public putLowPriority(value: ResourcePoolsConfigDefaultPoolPriorityThresholdsLowPriority) {
    this._lowPriority.internalValue = value;
  }
  public resetLowPriority() {
    this._lowPriority.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowPriorityInput() {
    return this._lowPriority.internalValue;
  }
}

export class ResourcePoolsConfigDefaultPoolPriorityThresholdsList extends cdktf.ComplexList {
  public internalValue? : ResourcePoolsConfigDefaultPoolPriorityThresholds[] | cdktf.IResolvable

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
  public get(index: number): ResourcePoolsConfigDefaultPoolPriorityThresholdsOutputReference {
    return new ResourcePoolsConfigDefaultPoolPriorityThresholdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourcePoolsConfigDefaultPool {
  /**
  * allocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#allocation ResourcePoolsConfig#allocation}
  */
  readonly allocation?: ResourcePoolsConfigDefaultPoolAllocation;
  /**
  * priorities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#priorities ResourcePoolsConfig#priorities}
  */
  readonly priorities?: ResourcePoolsConfigDefaultPoolPriorities;
  /**
  * priority_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#priority_thresholds ResourcePoolsConfig#priority_thresholds}
  */
  readonly priorityThresholds?: ResourcePoolsConfigDefaultPoolPriorityThresholds[] | cdktf.IResolvable;
}

export function resourcePoolsConfigDefaultPoolToTerraform(struct?: ResourcePoolsConfigDefaultPoolOutputReference | ResourcePoolsConfigDefaultPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocation: resourcePoolsConfigDefaultPoolAllocationToTerraform(struct!.allocation),
    priorities: resourcePoolsConfigDefaultPoolPrioritiesToTerraform(struct!.priorities),
    priority_thresholds: cdktf.listMapper(resourcePoolsConfigDefaultPoolPriorityThresholdsToTerraform, true)(struct!.priorityThresholds),
  }
}


export function resourcePoolsConfigDefaultPoolToHclTerraform(struct?: ResourcePoolsConfigDefaultPoolOutputReference | ResourcePoolsConfigDefaultPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocation: {
      value: resourcePoolsConfigDefaultPoolAllocationToHclTerraform(struct!.allocation),
      isBlock: true,
      type: "list",
      storageClassType: "ResourcePoolsConfigDefaultPoolAllocationList",
    },
    priorities: {
      value: resourcePoolsConfigDefaultPoolPrioritiesToHclTerraform(struct!.priorities),
      isBlock: true,
      type: "list",
      storageClassType: "ResourcePoolsConfigDefaultPoolPrioritiesList",
    },
    priority_thresholds: {
      value: cdktf.listMapperHcl(resourcePoolsConfigDefaultPoolPriorityThresholdsToHclTerraform, true)(struct!.priorityThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "ResourcePoolsConfigDefaultPoolPriorityThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourcePoolsConfigDefaultPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourcePoolsConfigDefaultPool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocation = this._allocation?.internalValue;
    }
    if (this._priorities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorities = this._priorities?.internalValue;
    }
    if (this._priorityThresholds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityThresholds = this._priorityThresholds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourcePoolsConfigDefaultPool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allocation.internalValue = undefined;
      this._priorities.internalValue = undefined;
      this._priorityThresholds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allocation.internalValue = value.allocation;
      this._priorities.internalValue = value.priorities;
      this._priorityThresholds.internalValue = value.priorityThresholds;
    }
  }

  // allocation - computed: false, optional: true, required: false
  private _allocation = new ResourcePoolsConfigDefaultPoolAllocationOutputReference(this, "allocation");
  public get allocation() {
    return this._allocation;
  }
  public putAllocation(value: ResourcePoolsConfigDefaultPoolAllocation) {
    this._allocation.internalValue = value;
  }
  public resetAllocation() {
    this._allocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationInput() {
    return this._allocation.internalValue;
  }

  // priorities - computed: false, optional: true, required: false
  private _priorities = new ResourcePoolsConfigDefaultPoolPrioritiesOutputReference(this, "priorities");
  public get priorities() {
    return this._priorities;
  }
  public putPriorities(value: ResourcePoolsConfigDefaultPoolPriorities) {
    this._priorities.internalValue = value;
  }
  public resetPriorities() {
    this._priorities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prioritiesInput() {
    return this._priorities.internalValue;
  }

  // priority_thresholds - computed: false, optional: true, required: false
  private _priorityThresholds = new ResourcePoolsConfigDefaultPoolPriorityThresholdsList(this, "priority_thresholds", false);
  public get priorityThresholds() {
    return this._priorityThresholds;
  }
  public putPriorityThresholds(value: ResourcePoolsConfigDefaultPoolPriorityThresholds[] | cdktf.IResolvable) {
    this._priorityThresholds.internalValue = value;
  }
  public resetPriorityThresholds() {
    this._priorityThresholds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityThresholdsInput() {
    return this._priorityThresholds.internalValue;
  }
}
export interface ResourcePoolsConfigPoolAllocationFixedValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#license ResourcePoolsConfig#license}
  */
  readonly license: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#value ResourcePoolsConfig#value}
  */
  readonly value: number;
}

export function resourcePoolsConfigPoolAllocationFixedValueToTerraform(struct?: ResourcePoolsConfigPoolAllocationFixedValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    license: cdktf.stringToTerraform(struct!.license),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function resourcePoolsConfigPoolAllocationFixedValueToHclTerraform(struct?: ResourcePoolsConfigPoolAllocationFixedValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    license: {
      value: cdktf.stringToHclTerraform(struct!.license),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourcePoolsConfigPoolAllocationFixedValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourcePoolsConfigPoolAllocationFixedValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._license !== undefined) {
      hasAnyValues = true;
      internalValueResult.license = this._license;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourcePoolsConfigPoolAllocationFixedValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._license = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._license = value.license;
      this._value = value.value;
    }
  }

  // license - computed: false, optional: false, required: true
  private _license?: string; 
  public get license() {
    return this.getStringAttribute('license');
  }
  public set license(value: string) {
    this._license = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseInput() {
    return this._license;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ResourcePoolsConfigPoolAllocationFixedValueList extends cdktf.ComplexList {
  public internalValue? : ResourcePoolsConfigPoolAllocationFixedValue[] | cdktf.IResolvable

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
  public get(index: number): ResourcePoolsConfigPoolAllocationFixedValueOutputReference {
    return new ResourcePoolsConfigPoolAllocationFixedValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourcePoolsConfigPoolAllocationPriorityThresholdsAllPriorities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#fixed_value ResourcePoolsConfig#fixed_value}
  */
  readonly fixedValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#percent_of_pool_allocation ResourcePoolsConfig#percent_of_pool_allocation}
  */
  readonly percentOfPoolAllocation?: number;
}

export function resourcePoolsConfigPoolAllocationPriorityThresholdsAllPrioritiesToTerraform(struct?: ResourcePoolsConfigPoolAllocationPriorityThresholdsAllPrioritiesOutputReference | ResourcePoolsConfigPoolAllocationPriorityThresholdsAllPriorities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fixed_value: cdktf.numberToTerraform(struct!.fixedValue),
    percent_of_pool_allocation: cdktf.numberToTerraform(struct!.percentOfPoolAllocation),
  }
}


export function resourcePoolsConfigPoolAllocationPriorityThresholdsAllPrioritiesToHclTerraform(struct?: ResourcePoolsConfigPoolAllocationPriorityThresholdsAllPrioritiesOutputReference | ResourcePoolsConfigPoolAllocationPriorityThresholdsAllPriorities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fixed_value: {
      value: cdktf.numberToHclTerraform(struct!.fixedValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    percent_of_pool_allocation: {
      value: cdktf.numberToHclTerraform(struct!.percentOfPoolAllocation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourcePoolsConfigPoolAllocationPriorityThresholdsAllPrioritiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourcePoolsConfigPoolAllocationPriorityThresholdsAllPriorities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fixedValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedValue = this._fixedValue;
    }
    if (this._percentOfPoolAllocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentOfPoolAllocation = this._percentOfPoolAllocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourcePoolsConfigPoolAllocationPriorityThresholdsAllPriorities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fixedValue = undefined;
      this._percentOfPoolAllocation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fixedValue = value.fixedValue;
      this._percentOfPoolAllocation = value.percentOfPoolAllocation;
    }
  }

  // fixed_value - computed: false, optional: true, required: false
  private _fixedValue?: number; 
  public get fixedValue() {
    return this.getNumberAttribute('fixed_value');
  }
  public set fixedValue(value: number) {
    this._fixedValue = value;
  }
  public resetFixedValue() {
    this._fixedValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedValueInput() {
    return this._fixedValue;
  }

  // percent_of_pool_allocation - computed: false, optional: true, required: false
  private _percentOfPoolAllocation?: number; 
  public get percentOfPoolAllocation() {
    return this.getNumberAttribute('percent_of_pool_allocation');
  }
  public set percentOfPoolAllocation(value: number) {
    this._percentOfPoolAllocation = value;
  }
  public resetPercentOfPoolAllocation() {
    this._percentOfPoolAllocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentOfPoolAllocationInput() {
    return this._percentOfPoolAllocation;
  }
}
export interface ResourcePoolsConfigPoolAllocationPriorityThresholdsDefaultAndLowPriority {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#fixed_value ResourcePoolsConfig#fixed_value}
  */
  readonly fixedValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#percent_of_pool_allocation ResourcePoolsConfig#percent_of_pool_allocation}
  */
  readonly percentOfPoolAllocation?: number;
}

export function resourcePoolsConfigPoolAllocationPriorityThresholdsDefaultAndLowPriorityToTerraform(struct?: ResourcePoolsConfigPoolAllocationPriorityThresholdsDefaultAndLowPriorityOutputReference | ResourcePoolsConfigPoolAllocationPriorityThresholdsDefaultAndLowPriority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fixed_value: cdktf.numberToTerraform(struct!.fixedValue),
    percent_of_pool_allocation: cdktf.numberToTerraform(struct!.percentOfPoolAllocation),
  }
}


export function resourcePoolsConfigPoolAllocationPriorityThresholdsDefaultAndLowPriorityToHclTerraform(struct?: ResourcePoolsConfigPoolAllocationPriorityThresholdsDefaultAndLowPriorityOutputReference | ResourcePoolsConfigPoolAllocationPriorityThresholdsDefaultAndLowPriority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fixed_value: {
      value: cdktf.numberToHclTerraform(struct!.fixedValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    percent_of_pool_allocation: {
      value: cdktf.numberToHclTerraform(struct!.percentOfPoolAllocation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourcePoolsConfigPoolAllocationPriorityThresholdsDefaultAndLowPriorityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourcePoolsConfigPoolAllocationPriorityThresholdsDefaultAndLowPriority | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fixedValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedValue = this._fixedValue;
    }
    if (this._percentOfPoolAllocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentOfPoolAllocation = this._percentOfPoolAllocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourcePoolsConfigPoolAllocationPriorityThresholdsDefaultAndLowPriority | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fixedValue = undefined;
      this._percentOfPoolAllocation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fixedValue = value.fixedValue;
      this._percentOfPoolAllocation = value.percentOfPoolAllocation;
    }
  }

  // fixed_value - computed: false, optional: true, required: false
  private _fixedValue?: number; 
  public get fixedValue() {
    return this.getNumberAttribute('fixed_value');
  }
  public set fixedValue(value: number) {
    this._fixedValue = value;
  }
  public resetFixedValue() {
    this._fixedValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedValueInput() {
    return this._fixedValue;
  }

  // percent_of_pool_allocation - computed: false, optional: true, required: false
  private _percentOfPoolAllocation?: number; 
  public get percentOfPoolAllocation() {
    return this.getNumberAttribute('percent_of_pool_allocation');
  }
  public set percentOfPoolAllocation(value: number) {
    this._percentOfPoolAllocation = value;
  }
  public resetPercentOfPoolAllocation() {
    this._percentOfPoolAllocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentOfPoolAllocationInput() {
    return this._percentOfPoolAllocation;
  }
}
export interface ResourcePoolsConfigPoolAllocationPriorityThresholdsLowPriority {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#fixed_value ResourcePoolsConfig#fixed_value}
  */
  readonly fixedValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#percent_of_pool_allocation ResourcePoolsConfig#percent_of_pool_allocation}
  */
  readonly percentOfPoolAllocation?: number;
}

export function resourcePoolsConfigPoolAllocationPriorityThresholdsLowPriorityToTerraform(struct?: ResourcePoolsConfigPoolAllocationPriorityThresholdsLowPriorityOutputReference | ResourcePoolsConfigPoolAllocationPriorityThresholdsLowPriority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fixed_value: cdktf.numberToTerraform(struct!.fixedValue),
    percent_of_pool_allocation: cdktf.numberToTerraform(struct!.percentOfPoolAllocation),
  }
}


export function resourcePoolsConfigPoolAllocationPriorityThresholdsLowPriorityToHclTerraform(struct?: ResourcePoolsConfigPoolAllocationPriorityThresholdsLowPriorityOutputReference | ResourcePoolsConfigPoolAllocationPriorityThresholdsLowPriority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fixed_value: {
      value: cdktf.numberToHclTerraform(struct!.fixedValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    percent_of_pool_allocation: {
      value: cdktf.numberToHclTerraform(struct!.percentOfPoolAllocation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourcePoolsConfigPoolAllocationPriorityThresholdsLowPriorityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourcePoolsConfigPoolAllocationPriorityThresholdsLowPriority | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fixedValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedValue = this._fixedValue;
    }
    if (this._percentOfPoolAllocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentOfPoolAllocation = this._percentOfPoolAllocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourcePoolsConfigPoolAllocationPriorityThresholdsLowPriority | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fixedValue = undefined;
      this._percentOfPoolAllocation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fixedValue = value.fixedValue;
      this._percentOfPoolAllocation = value.percentOfPoolAllocation;
    }
  }

  // fixed_value - computed: false, optional: true, required: false
  private _fixedValue?: number; 
  public get fixedValue() {
    return this.getNumberAttribute('fixed_value');
  }
  public set fixedValue(value: number) {
    this._fixedValue = value;
  }
  public resetFixedValue() {
    this._fixedValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedValueInput() {
    return this._fixedValue;
  }

  // percent_of_pool_allocation - computed: false, optional: true, required: false
  private _percentOfPoolAllocation?: number; 
  public get percentOfPoolAllocation() {
    return this.getNumberAttribute('percent_of_pool_allocation');
  }
  public set percentOfPoolAllocation(value: number) {
    this._percentOfPoolAllocation = value;
  }
  public resetPercentOfPoolAllocation() {
    this._percentOfPoolAllocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentOfPoolAllocationInput() {
    return this._percentOfPoolAllocation;
  }
}
export interface ResourcePoolsConfigPoolAllocationPriorityThresholds {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#license ResourcePoolsConfig#license}
  */
  readonly license: string;
  /**
  * all_priorities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#all_priorities ResourcePoolsConfig#all_priorities}
  */
  readonly allPriorities?: ResourcePoolsConfigPoolAllocationPriorityThresholdsAllPriorities;
  /**
  * default_and_low_priority block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#default_and_low_priority ResourcePoolsConfig#default_and_low_priority}
  */
  readonly defaultAndLowPriority?: ResourcePoolsConfigPoolAllocationPriorityThresholdsDefaultAndLowPriority;
  /**
  * low_priority block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#low_priority ResourcePoolsConfig#low_priority}
  */
  readonly lowPriority?: ResourcePoolsConfigPoolAllocationPriorityThresholdsLowPriority;
}

export function resourcePoolsConfigPoolAllocationPriorityThresholdsToTerraform(struct?: ResourcePoolsConfigPoolAllocationPriorityThresholds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    license: cdktf.stringToTerraform(struct!.license),
    all_priorities: resourcePoolsConfigPoolAllocationPriorityThresholdsAllPrioritiesToTerraform(struct!.allPriorities),
    default_and_low_priority: resourcePoolsConfigPoolAllocationPriorityThresholdsDefaultAndLowPriorityToTerraform(struct!.defaultAndLowPriority),
    low_priority: resourcePoolsConfigPoolAllocationPriorityThresholdsLowPriorityToTerraform(struct!.lowPriority),
  }
}


export function resourcePoolsConfigPoolAllocationPriorityThresholdsToHclTerraform(struct?: ResourcePoolsConfigPoolAllocationPriorityThresholds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    license: {
      value: cdktf.stringToHclTerraform(struct!.license),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    all_priorities: {
      value: resourcePoolsConfigPoolAllocationPriorityThresholdsAllPrioritiesToHclTerraform(struct!.allPriorities),
      isBlock: true,
      type: "list",
      storageClassType: "ResourcePoolsConfigPoolAllocationPriorityThresholdsAllPrioritiesList",
    },
    default_and_low_priority: {
      value: resourcePoolsConfigPoolAllocationPriorityThresholdsDefaultAndLowPriorityToHclTerraform(struct!.defaultAndLowPriority),
      isBlock: true,
      type: "list",
      storageClassType: "ResourcePoolsConfigPoolAllocationPriorityThresholdsDefaultAndLowPriorityList",
    },
    low_priority: {
      value: resourcePoolsConfigPoolAllocationPriorityThresholdsLowPriorityToHclTerraform(struct!.lowPriority),
      isBlock: true,
      type: "list",
      storageClassType: "ResourcePoolsConfigPoolAllocationPriorityThresholdsLowPriorityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourcePoolsConfigPoolAllocationPriorityThresholdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourcePoolsConfigPoolAllocationPriorityThresholds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._license !== undefined) {
      hasAnyValues = true;
      internalValueResult.license = this._license;
    }
    if (this._allPriorities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allPriorities = this._allPriorities?.internalValue;
    }
    if (this._defaultAndLowPriority?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultAndLowPriority = this._defaultAndLowPriority?.internalValue;
    }
    if (this._lowPriority?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowPriority = this._lowPriority?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourcePoolsConfigPoolAllocationPriorityThresholds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._license = undefined;
      this._allPriorities.internalValue = undefined;
      this._defaultAndLowPriority.internalValue = undefined;
      this._lowPriority.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._license = value.license;
      this._allPriorities.internalValue = value.allPriorities;
      this._defaultAndLowPriority.internalValue = value.defaultAndLowPriority;
      this._lowPriority.internalValue = value.lowPriority;
    }
  }

  // license - computed: false, optional: false, required: true
  private _license?: string; 
  public get license() {
    return this.getStringAttribute('license');
  }
  public set license(value: string) {
    this._license = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseInput() {
    return this._license;
  }

  // all_priorities - computed: false, optional: true, required: false
  private _allPriorities = new ResourcePoolsConfigPoolAllocationPriorityThresholdsAllPrioritiesOutputReference(this, "all_priorities");
  public get allPriorities() {
    return this._allPriorities;
  }
  public putAllPriorities(value: ResourcePoolsConfigPoolAllocationPriorityThresholdsAllPriorities) {
    this._allPriorities.internalValue = value;
  }
  public resetAllPriorities() {
    this._allPriorities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allPrioritiesInput() {
    return this._allPriorities.internalValue;
  }

  // default_and_low_priority - computed: false, optional: true, required: false
  private _defaultAndLowPriority = new ResourcePoolsConfigPoolAllocationPriorityThresholdsDefaultAndLowPriorityOutputReference(this, "default_and_low_priority");
  public get defaultAndLowPriority() {
    return this._defaultAndLowPriority;
  }
  public putDefaultAndLowPriority(value: ResourcePoolsConfigPoolAllocationPriorityThresholdsDefaultAndLowPriority) {
    this._defaultAndLowPriority.internalValue = value;
  }
  public resetDefaultAndLowPriority() {
    this._defaultAndLowPriority.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAndLowPriorityInput() {
    return this._defaultAndLowPriority.internalValue;
  }

  // low_priority - computed: false, optional: true, required: false
  private _lowPriority = new ResourcePoolsConfigPoolAllocationPriorityThresholdsLowPriorityOutputReference(this, "low_priority");
  public get lowPriority() {
    return this._lowPriority;
  }
  public putLowPriority(value: ResourcePoolsConfigPoolAllocationPriorityThresholdsLowPriority) {
    this._lowPriority.internalValue = value;
  }
  public resetLowPriority() {
    this._lowPriority.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowPriorityInput() {
    return this._lowPriority.internalValue;
  }
}

export class ResourcePoolsConfigPoolAllocationPriorityThresholdsList extends cdktf.ComplexList {
  public internalValue? : ResourcePoolsConfigPoolAllocationPriorityThresholds[] | cdktf.IResolvable

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
  public get(index: number): ResourcePoolsConfigPoolAllocationPriorityThresholdsOutputReference {
    return new ResourcePoolsConfigPoolAllocationPriorityThresholdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourcePoolsConfigPoolAllocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#percent_of_license ResourcePoolsConfig#percent_of_license}
  */
  readonly percentOfLicense?: number;
  /**
  * fixed_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#fixed_value ResourcePoolsConfig#fixed_value}
  */
  readonly fixedValue?: ResourcePoolsConfigPoolAllocationFixedValue[] | cdktf.IResolvable;
  /**
  * priority_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#priority_thresholds ResourcePoolsConfig#priority_thresholds}
  */
  readonly priorityThresholds?: ResourcePoolsConfigPoolAllocationPriorityThresholds[] | cdktf.IResolvable;
}

export function resourcePoolsConfigPoolAllocationToTerraform(struct?: ResourcePoolsConfigPoolAllocationOutputReference | ResourcePoolsConfigPoolAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percent_of_license: cdktf.numberToTerraform(struct!.percentOfLicense),
    fixed_value: cdktf.listMapper(resourcePoolsConfigPoolAllocationFixedValueToTerraform, true)(struct!.fixedValue),
    priority_thresholds: cdktf.listMapper(resourcePoolsConfigPoolAllocationPriorityThresholdsToTerraform, true)(struct!.priorityThresholds),
  }
}


export function resourcePoolsConfigPoolAllocationToHclTerraform(struct?: ResourcePoolsConfigPoolAllocationOutputReference | ResourcePoolsConfigPoolAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    percent_of_license: {
      value: cdktf.numberToHclTerraform(struct!.percentOfLicense),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fixed_value: {
      value: cdktf.listMapperHcl(resourcePoolsConfigPoolAllocationFixedValueToHclTerraform, true)(struct!.fixedValue),
      isBlock: true,
      type: "list",
      storageClassType: "ResourcePoolsConfigPoolAllocationFixedValueList",
    },
    priority_thresholds: {
      value: cdktf.listMapperHcl(resourcePoolsConfigPoolAllocationPriorityThresholdsToHclTerraform, true)(struct!.priorityThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "ResourcePoolsConfigPoolAllocationPriorityThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourcePoolsConfigPoolAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourcePoolsConfigPoolAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentOfLicense !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentOfLicense = this._percentOfLicense;
    }
    if (this._fixedValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedValue = this._fixedValue?.internalValue;
    }
    if (this._priorityThresholds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityThresholds = this._priorityThresholds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourcePoolsConfigPoolAllocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._percentOfLicense = undefined;
      this._fixedValue.internalValue = undefined;
      this._priorityThresholds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._percentOfLicense = value.percentOfLicense;
      this._fixedValue.internalValue = value.fixedValue;
      this._priorityThresholds.internalValue = value.priorityThresholds;
    }
  }

  // percent_of_license - computed: false, optional: true, required: false
  private _percentOfLicense?: number; 
  public get percentOfLicense() {
    return this.getNumberAttribute('percent_of_license');
  }
  public set percentOfLicense(value: number) {
    this._percentOfLicense = value;
  }
  public resetPercentOfLicense() {
    this._percentOfLicense = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentOfLicenseInput() {
    return this._percentOfLicense;
  }

  // fixed_value - computed: false, optional: true, required: false
  private _fixedValue = new ResourcePoolsConfigPoolAllocationFixedValueList(this, "fixed_value", false);
  public get fixedValue() {
    return this._fixedValue;
  }
  public putFixedValue(value: ResourcePoolsConfigPoolAllocationFixedValue[] | cdktf.IResolvable) {
    this._fixedValue.internalValue = value;
  }
  public resetFixedValue() {
    this._fixedValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedValueInput() {
    return this._fixedValue.internalValue;
  }

  // priority_thresholds - computed: false, optional: true, required: false
  private _priorityThresholds = new ResourcePoolsConfigPoolAllocationPriorityThresholdsList(this, "priority_thresholds", false);
  public get priorityThresholds() {
    return this._priorityThresholds;
  }
  public putPriorityThresholds(value: ResourcePoolsConfigPoolAllocationPriorityThresholds[] | cdktf.IResolvable) {
    this._priorityThresholds.internalValue = value;
  }
  public resetPriorityThresholds() {
    this._priorityThresholds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityThresholdsInput() {
    return this._priorityThresholds.internalValue;
  }
}
export interface ResourcePoolsConfigPoolPriorities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#high_priority_match_rules ResourcePoolsConfig#high_priority_match_rules}
  */
  readonly highPriorityMatchRules?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#low_priority_match_rules ResourcePoolsConfig#low_priority_match_rules}
  */
  readonly lowPriorityMatchRules?: string[];
}

export function resourcePoolsConfigPoolPrioritiesToTerraform(struct?: ResourcePoolsConfigPoolPrioritiesOutputReference | ResourcePoolsConfigPoolPriorities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    high_priority_match_rules: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.highPriorityMatchRules),
    low_priority_match_rules: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.lowPriorityMatchRules),
  }
}


export function resourcePoolsConfigPoolPrioritiesToHclTerraform(struct?: ResourcePoolsConfigPoolPrioritiesOutputReference | ResourcePoolsConfigPoolPriorities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    high_priority_match_rules: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.highPriorityMatchRules),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    low_priority_match_rules: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.lowPriorityMatchRules),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourcePoolsConfigPoolPrioritiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourcePoolsConfigPoolPriorities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._highPriorityMatchRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.highPriorityMatchRules = this._highPriorityMatchRules;
    }
    if (this._lowPriorityMatchRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowPriorityMatchRules = this._lowPriorityMatchRules;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourcePoolsConfigPoolPriorities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._highPriorityMatchRules = undefined;
      this._lowPriorityMatchRules = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._highPriorityMatchRules = value.highPriorityMatchRules;
      this._lowPriorityMatchRules = value.lowPriorityMatchRules;
    }
  }

  // high_priority_match_rules - computed: false, optional: true, required: false
  private _highPriorityMatchRules?: string[]; 
  public get highPriorityMatchRules() {
    return this.getListAttribute('high_priority_match_rules');
  }
  public set highPriorityMatchRules(value: string[]) {
    this._highPriorityMatchRules = value;
  }
  public resetHighPriorityMatchRules() {
    this._highPriorityMatchRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highPriorityMatchRulesInput() {
    return this._highPriorityMatchRules;
  }

  // low_priority_match_rules - computed: false, optional: true, required: false
  private _lowPriorityMatchRules?: string[]; 
  public get lowPriorityMatchRules() {
    return this.getListAttribute('low_priority_match_rules');
  }
  public set lowPriorityMatchRules(value: string[]) {
    this._lowPriorityMatchRules = value;
  }
  public resetLowPriorityMatchRules() {
    this._lowPriorityMatchRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowPriorityMatchRulesInput() {
    return this._lowPriorityMatchRules;
  }
}
export interface ResourcePoolsConfigPool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#match_rule ResourcePoolsConfig#match_rule}
  */
  readonly matchRule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#match_rules ResourcePoolsConfig#match_rules}
  */
  readonly matchRules?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#name ResourcePoolsConfig#name}
  */
  readonly name: string;
  /**
  * allocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#allocation ResourcePoolsConfig#allocation}
  */
  readonly allocation?: ResourcePoolsConfigPoolAllocation;
  /**
  * priorities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#priorities ResourcePoolsConfig#priorities}
  */
  readonly priorities?: ResourcePoolsConfigPoolPriorities;
}

export function resourcePoolsConfigPoolToTerraform(struct?: ResourcePoolsConfigPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_rule: cdktf.stringToTerraform(struct!.matchRule),
    match_rules: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchRules),
    name: cdktf.stringToTerraform(struct!.name),
    allocation: resourcePoolsConfigPoolAllocationToTerraform(struct!.allocation),
    priorities: resourcePoolsConfigPoolPrioritiesToTerraform(struct!.priorities),
  }
}


export function resourcePoolsConfigPoolToHclTerraform(struct?: ResourcePoolsConfigPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_rule: {
      value: cdktf.stringToHclTerraform(struct!.matchRule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_rules: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchRules),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allocation: {
      value: resourcePoolsConfigPoolAllocationToHclTerraform(struct!.allocation),
      isBlock: true,
      type: "list",
      storageClassType: "ResourcePoolsConfigPoolAllocationList",
    },
    priorities: {
      value: resourcePoolsConfigPoolPrioritiesToHclTerraform(struct!.priorities),
      isBlock: true,
      type: "list",
      storageClassType: "ResourcePoolsConfigPoolPrioritiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourcePoolsConfigPoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourcePoolsConfigPool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchRule = this._matchRule;
    }
    if (this._matchRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchRules = this._matchRules;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._allocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocation = this._allocation?.internalValue;
    }
    if (this._priorities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorities = this._priorities?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourcePoolsConfigPool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchRule = undefined;
      this._matchRules = undefined;
      this._name = undefined;
      this._allocation.internalValue = undefined;
      this._priorities.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchRule = value.matchRule;
      this._matchRules = value.matchRules;
      this._name = value.name;
      this._allocation.internalValue = value.allocation;
      this._priorities.internalValue = value.priorities;
    }
  }

  // match_rule - computed: false, optional: true, required: false
  private _matchRule?: string; 
  public get matchRule() {
    return this.getStringAttribute('match_rule');
  }
  public set matchRule(value: string) {
    this._matchRule = value;
  }
  public resetMatchRule() {
    this._matchRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRuleInput() {
    return this._matchRule;
  }

  // match_rules - computed: false, optional: true, required: false
  private _matchRules?: string[]; 
  public get matchRules() {
    return this.getListAttribute('match_rules');
  }
  public set matchRules(value: string[]) {
    this._matchRules = value;
  }
  public resetMatchRules() {
    this._matchRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRulesInput() {
    return this._matchRules;
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

  // allocation - computed: false, optional: true, required: false
  private _allocation = new ResourcePoolsConfigPoolAllocationOutputReference(this, "allocation");
  public get allocation() {
    return this._allocation;
  }
  public putAllocation(value: ResourcePoolsConfigPoolAllocation) {
    this._allocation.internalValue = value;
  }
  public resetAllocation() {
    this._allocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationInput() {
    return this._allocation.internalValue;
  }

  // priorities - computed: false, optional: true, required: false
  private _priorities = new ResourcePoolsConfigPoolPrioritiesOutputReference(this, "priorities");
  public get priorities() {
    return this._priorities;
  }
  public putPriorities(value: ResourcePoolsConfigPoolPriorities) {
    this._priorities.internalValue = value;
  }
  public resetPriorities() {
    this._priorities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prioritiesInput() {
    return this._priorities.internalValue;
  }
}

export class ResourcePoolsConfigPoolList extends cdktf.ComplexList {
  public internalValue? : ResourcePoolsConfigPool[] | cdktf.IResolvable

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
  public get(index: number): ResourcePoolsConfigPoolOutputReference {
    return new ResourcePoolsConfigPoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourcePoolsConfigPoolsAllocationFixedValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#license ResourcePoolsConfig#license}
  */
  readonly license: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#value ResourcePoolsConfig#value}
  */
  readonly value: number;
}

export function resourcePoolsConfigPoolsAllocationFixedValueToTerraform(struct?: ResourcePoolsConfigPoolsAllocationFixedValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    license: cdktf.stringToTerraform(struct!.license),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function resourcePoolsConfigPoolsAllocationFixedValueToHclTerraform(struct?: ResourcePoolsConfigPoolsAllocationFixedValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    license: {
      value: cdktf.stringToHclTerraform(struct!.license),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourcePoolsConfigPoolsAllocationFixedValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourcePoolsConfigPoolsAllocationFixedValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._license !== undefined) {
      hasAnyValues = true;
      internalValueResult.license = this._license;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourcePoolsConfigPoolsAllocationFixedValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._license = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._license = value.license;
      this._value = value.value;
    }
  }

  // license - computed: false, optional: false, required: true
  private _license?: string; 
  public get license() {
    return this.getStringAttribute('license');
  }
  public set license(value: string) {
    this._license = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseInput() {
    return this._license;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ResourcePoolsConfigPoolsAllocationFixedValueList extends cdktf.ComplexList {
  public internalValue? : ResourcePoolsConfigPoolsAllocationFixedValue[] | cdktf.IResolvable

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
  public get(index: number): ResourcePoolsConfigPoolsAllocationFixedValueOutputReference {
    return new ResourcePoolsConfigPoolsAllocationFixedValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourcePoolsConfigPoolsAllocationPriorityThresholdsAllPriorities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#fixed_value ResourcePoolsConfig#fixed_value}
  */
  readonly fixedValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#percent_of_pool_allocation ResourcePoolsConfig#percent_of_pool_allocation}
  */
  readonly percentOfPoolAllocation?: number;
}

export function resourcePoolsConfigPoolsAllocationPriorityThresholdsAllPrioritiesToTerraform(struct?: ResourcePoolsConfigPoolsAllocationPriorityThresholdsAllPrioritiesOutputReference | ResourcePoolsConfigPoolsAllocationPriorityThresholdsAllPriorities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fixed_value: cdktf.numberToTerraform(struct!.fixedValue),
    percent_of_pool_allocation: cdktf.numberToTerraform(struct!.percentOfPoolAllocation),
  }
}


export function resourcePoolsConfigPoolsAllocationPriorityThresholdsAllPrioritiesToHclTerraform(struct?: ResourcePoolsConfigPoolsAllocationPriorityThresholdsAllPrioritiesOutputReference | ResourcePoolsConfigPoolsAllocationPriorityThresholdsAllPriorities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fixed_value: {
      value: cdktf.numberToHclTerraform(struct!.fixedValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    percent_of_pool_allocation: {
      value: cdktf.numberToHclTerraform(struct!.percentOfPoolAllocation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourcePoolsConfigPoolsAllocationPriorityThresholdsAllPrioritiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourcePoolsConfigPoolsAllocationPriorityThresholdsAllPriorities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fixedValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedValue = this._fixedValue;
    }
    if (this._percentOfPoolAllocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentOfPoolAllocation = this._percentOfPoolAllocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourcePoolsConfigPoolsAllocationPriorityThresholdsAllPriorities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fixedValue = undefined;
      this._percentOfPoolAllocation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fixedValue = value.fixedValue;
      this._percentOfPoolAllocation = value.percentOfPoolAllocation;
    }
  }

  // fixed_value - computed: false, optional: true, required: false
  private _fixedValue?: number; 
  public get fixedValue() {
    return this.getNumberAttribute('fixed_value');
  }
  public set fixedValue(value: number) {
    this._fixedValue = value;
  }
  public resetFixedValue() {
    this._fixedValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedValueInput() {
    return this._fixedValue;
  }

  // percent_of_pool_allocation - computed: false, optional: true, required: false
  private _percentOfPoolAllocation?: number; 
  public get percentOfPoolAllocation() {
    return this.getNumberAttribute('percent_of_pool_allocation');
  }
  public set percentOfPoolAllocation(value: number) {
    this._percentOfPoolAllocation = value;
  }
  public resetPercentOfPoolAllocation() {
    this._percentOfPoolAllocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentOfPoolAllocationInput() {
    return this._percentOfPoolAllocation;
  }
}
export interface ResourcePoolsConfigPoolsAllocationPriorityThresholdsDefaultAndLowPriority {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#fixed_value ResourcePoolsConfig#fixed_value}
  */
  readonly fixedValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#percent_of_pool_allocation ResourcePoolsConfig#percent_of_pool_allocation}
  */
  readonly percentOfPoolAllocation?: number;
}

export function resourcePoolsConfigPoolsAllocationPriorityThresholdsDefaultAndLowPriorityToTerraform(struct?: ResourcePoolsConfigPoolsAllocationPriorityThresholdsDefaultAndLowPriorityOutputReference | ResourcePoolsConfigPoolsAllocationPriorityThresholdsDefaultAndLowPriority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fixed_value: cdktf.numberToTerraform(struct!.fixedValue),
    percent_of_pool_allocation: cdktf.numberToTerraform(struct!.percentOfPoolAllocation),
  }
}


export function resourcePoolsConfigPoolsAllocationPriorityThresholdsDefaultAndLowPriorityToHclTerraform(struct?: ResourcePoolsConfigPoolsAllocationPriorityThresholdsDefaultAndLowPriorityOutputReference | ResourcePoolsConfigPoolsAllocationPriorityThresholdsDefaultAndLowPriority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fixed_value: {
      value: cdktf.numberToHclTerraform(struct!.fixedValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    percent_of_pool_allocation: {
      value: cdktf.numberToHclTerraform(struct!.percentOfPoolAllocation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourcePoolsConfigPoolsAllocationPriorityThresholdsDefaultAndLowPriorityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourcePoolsConfigPoolsAllocationPriorityThresholdsDefaultAndLowPriority | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fixedValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedValue = this._fixedValue;
    }
    if (this._percentOfPoolAllocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentOfPoolAllocation = this._percentOfPoolAllocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourcePoolsConfigPoolsAllocationPriorityThresholdsDefaultAndLowPriority | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fixedValue = undefined;
      this._percentOfPoolAllocation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fixedValue = value.fixedValue;
      this._percentOfPoolAllocation = value.percentOfPoolAllocation;
    }
  }

  // fixed_value - computed: false, optional: true, required: false
  private _fixedValue?: number; 
  public get fixedValue() {
    return this.getNumberAttribute('fixed_value');
  }
  public set fixedValue(value: number) {
    this._fixedValue = value;
  }
  public resetFixedValue() {
    this._fixedValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedValueInput() {
    return this._fixedValue;
  }

  // percent_of_pool_allocation - computed: false, optional: true, required: false
  private _percentOfPoolAllocation?: number; 
  public get percentOfPoolAllocation() {
    return this.getNumberAttribute('percent_of_pool_allocation');
  }
  public set percentOfPoolAllocation(value: number) {
    this._percentOfPoolAllocation = value;
  }
  public resetPercentOfPoolAllocation() {
    this._percentOfPoolAllocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentOfPoolAllocationInput() {
    return this._percentOfPoolAllocation;
  }
}
export interface ResourcePoolsConfigPoolsAllocationPriorityThresholdsLowPriority {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#fixed_value ResourcePoolsConfig#fixed_value}
  */
  readonly fixedValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#percent_of_pool_allocation ResourcePoolsConfig#percent_of_pool_allocation}
  */
  readonly percentOfPoolAllocation?: number;
}

export function resourcePoolsConfigPoolsAllocationPriorityThresholdsLowPriorityToTerraform(struct?: ResourcePoolsConfigPoolsAllocationPriorityThresholdsLowPriorityOutputReference | ResourcePoolsConfigPoolsAllocationPriorityThresholdsLowPriority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fixed_value: cdktf.numberToTerraform(struct!.fixedValue),
    percent_of_pool_allocation: cdktf.numberToTerraform(struct!.percentOfPoolAllocation),
  }
}


export function resourcePoolsConfigPoolsAllocationPriorityThresholdsLowPriorityToHclTerraform(struct?: ResourcePoolsConfigPoolsAllocationPriorityThresholdsLowPriorityOutputReference | ResourcePoolsConfigPoolsAllocationPriorityThresholdsLowPriority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fixed_value: {
      value: cdktf.numberToHclTerraform(struct!.fixedValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    percent_of_pool_allocation: {
      value: cdktf.numberToHclTerraform(struct!.percentOfPoolAllocation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourcePoolsConfigPoolsAllocationPriorityThresholdsLowPriorityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourcePoolsConfigPoolsAllocationPriorityThresholdsLowPriority | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fixedValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedValue = this._fixedValue;
    }
    if (this._percentOfPoolAllocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentOfPoolAllocation = this._percentOfPoolAllocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourcePoolsConfigPoolsAllocationPriorityThresholdsLowPriority | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fixedValue = undefined;
      this._percentOfPoolAllocation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fixedValue = value.fixedValue;
      this._percentOfPoolAllocation = value.percentOfPoolAllocation;
    }
  }

  // fixed_value - computed: false, optional: true, required: false
  private _fixedValue?: number; 
  public get fixedValue() {
    return this.getNumberAttribute('fixed_value');
  }
  public set fixedValue(value: number) {
    this._fixedValue = value;
  }
  public resetFixedValue() {
    this._fixedValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedValueInput() {
    return this._fixedValue;
  }

  // percent_of_pool_allocation - computed: false, optional: true, required: false
  private _percentOfPoolAllocation?: number; 
  public get percentOfPoolAllocation() {
    return this.getNumberAttribute('percent_of_pool_allocation');
  }
  public set percentOfPoolAllocation(value: number) {
    this._percentOfPoolAllocation = value;
  }
  public resetPercentOfPoolAllocation() {
    this._percentOfPoolAllocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentOfPoolAllocationInput() {
    return this._percentOfPoolAllocation;
  }
}
export interface ResourcePoolsConfigPoolsAllocationPriorityThresholds {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#license ResourcePoolsConfig#license}
  */
  readonly license: string;
  /**
  * all_priorities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#all_priorities ResourcePoolsConfig#all_priorities}
  */
  readonly allPriorities?: ResourcePoolsConfigPoolsAllocationPriorityThresholdsAllPriorities;
  /**
  * default_and_low_priority block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#default_and_low_priority ResourcePoolsConfig#default_and_low_priority}
  */
  readonly defaultAndLowPriority?: ResourcePoolsConfigPoolsAllocationPriorityThresholdsDefaultAndLowPriority;
  /**
  * low_priority block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#low_priority ResourcePoolsConfig#low_priority}
  */
  readonly lowPriority?: ResourcePoolsConfigPoolsAllocationPriorityThresholdsLowPriority;
}

export function resourcePoolsConfigPoolsAllocationPriorityThresholdsToTerraform(struct?: ResourcePoolsConfigPoolsAllocationPriorityThresholds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    license: cdktf.stringToTerraform(struct!.license),
    all_priorities: resourcePoolsConfigPoolsAllocationPriorityThresholdsAllPrioritiesToTerraform(struct!.allPriorities),
    default_and_low_priority: resourcePoolsConfigPoolsAllocationPriorityThresholdsDefaultAndLowPriorityToTerraform(struct!.defaultAndLowPriority),
    low_priority: resourcePoolsConfigPoolsAllocationPriorityThresholdsLowPriorityToTerraform(struct!.lowPriority),
  }
}


export function resourcePoolsConfigPoolsAllocationPriorityThresholdsToHclTerraform(struct?: ResourcePoolsConfigPoolsAllocationPriorityThresholds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    license: {
      value: cdktf.stringToHclTerraform(struct!.license),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    all_priorities: {
      value: resourcePoolsConfigPoolsAllocationPriorityThresholdsAllPrioritiesToHclTerraform(struct!.allPriorities),
      isBlock: true,
      type: "list",
      storageClassType: "ResourcePoolsConfigPoolsAllocationPriorityThresholdsAllPrioritiesList",
    },
    default_and_low_priority: {
      value: resourcePoolsConfigPoolsAllocationPriorityThresholdsDefaultAndLowPriorityToHclTerraform(struct!.defaultAndLowPriority),
      isBlock: true,
      type: "list",
      storageClassType: "ResourcePoolsConfigPoolsAllocationPriorityThresholdsDefaultAndLowPriorityList",
    },
    low_priority: {
      value: resourcePoolsConfigPoolsAllocationPriorityThresholdsLowPriorityToHclTerraform(struct!.lowPriority),
      isBlock: true,
      type: "list",
      storageClassType: "ResourcePoolsConfigPoolsAllocationPriorityThresholdsLowPriorityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourcePoolsConfigPoolsAllocationPriorityThresholdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourcePoolsConfigPoolsAllocationPriorityThresholds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._license !== undefined) {
      hasAnyValues = true;
      internalValueResult.license = this._license;
    }
    if (this._allPriorities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allPriorities = this._allPriorities?.internalValue;
    }
    if (this._defaultAndLowPriority?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultAndLowPriority = this._defaultAndLowPriority?.internalValue;
    }
    if (this._lowPriority?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowPriority = this._lowPriority?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourcePoolsConfigPoolsAllocationPriorityThresholds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._license = undefined;
      this._allPriorities.internalValue = undefined;
      this._defaultAndLowPriority.internalValue = undefined;
      this._lowPriority.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._license = value.license;
      this._allPriorities.internalValue = value.allPriorities;
      this._defaultAndLowPriority.internalValue = value.defaultAndLowPriority;
      this._lowPriority.internalValue = value.lowPriority;
    }
  }

  // license - computed: false, optional: false, required: true
  private _license?: string; 
  public get license() {
    return this.getStringAttribute('license');
  }
  public set license(value: string) {
    this._license = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseInput() {
    return this._license;
  }

  // all_priorities - computed: false, optional: true, required: false
  private _allPriorities = new ResourcePoolsConfigPoolsAllocationPriorityThresholdsAllPrioritiesOutputReference(this, "all_priorities");
  public get allPriorities() {
    return this._allPriorities;
  }
  public putAllPriorities(value: ResourcePoolsConfigPoolsAllocationPriorityThresholdsAllPriorities) {
    this._allPriorities.internalValue = value;
  }
  public resetAllPriorities() {
    this._allPriorities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allPrioritiesInput() {
    return this._allPriorities.internalValue;
  }

  // default_and_low_priority - computed: false, optional: true, required: false
  private _defaultAndLowPriority = new ResourcePoolsConfigPoolsAllocationPriorityThresholdsDefaultAndLowPriorityOutputReference(this, "default_and_low_priority");
  public get defaultAndLowPriority() {
    return this._defaultAndLowPriority;
  }
  public putDefaultAndLowPriority(value: ResourcePoolsConfigPoolsAllocationPriorityThresholdsDefaultAndLowPriority) {
    this._defaultAndLowPriority.internalValue = value;
  }
  public resetDefaultAndLowPriority() {
    this._defaultAndLowPriority.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAndLowPriorityInput() {
    return this._defaultAndLowPriority.internalValue;
  }

  // low_priority - computed: false, optional: true, required: false
  private _lowPriority = new ResourcePoolsConfigPoolsAllocationPriorityThresholdsLowPriorityOutputReference(this, "low_priority");
  public get lowPriority() {
    return this._lowPriority;
  }
  public putLowPriority(value: ResourcePoolsConfigPoolsAllocationPriorityThresholdsLowPriority) {
    this._lowPriority.internalValue = value;
  }
  public resetLowPriority() {
    this._lowPriority.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowPriorityInput() {
    return this._lowPriority.internalValue;
  }
}

export class ResourcePoolsConfigPoolsAllocationPriorityThresholdsList extends cdktf.ComplexList {
  public internalValue? : ResourcePoolsConfigPoolsAllocationPriorityThresholds[] | cdktf.IResolvable

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
  public get(index: number): ResourcePoolsConfigPoolsAllocationPriorityThresholdsOutputReference {
    return new ResourcePoolsConfigPoolsAllocationPriorityThresholdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourcePoolsConfigPoolsAllocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#percent_of_license ResourcePoolsConfig#percent_of_license}
  */
  readonly percentOfLicense?: number;
  /**
  * fixed_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#fixed_value ResourcePoolsConfig#fixed_value}
  */
  readonly fixedValue?: ResourcePoolsConfigPoolsAllocationFixedValue[] | cdktf.IResolvable;
  /**
  * priority_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#priority_thresholds ResourcePoolsConfig#priority_thresholds}
  */
  readonly priorityThresholds?: ResourcePoolsConfigPoolsAllocationPriorityThresholds[] | cdktf.IResolvable;
}

export function resourcePoolsConfigPoolsAllocationToTerraform(struct?: ResourcePoolsConfigPoolsAllocationOutputReference | ResourcePoolsConfigPoolsAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percent_of_license: cdktf.numberToTerraform(struct!.percentOfLicense),
    fixed_value: cdktf.listMapper(resourcePoolsConfigPoolsAllocationFixedValueToTerraform, true)(struct!.fixedValue),
    priority_thresholds: cdktf.listMapper(resourcePoolsConfigPoolsAllocationPriorityThresholdsToTerraform, true)(struct!.priorityThresholds),
  }
}


export function resourcePoolsConfigPoolsAllocationToHclTerraform(struct?: ResourcePoolsConfigPoolsAllocationOutputReference | ResourcePoolsConfigPoolsAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    percent_of_license: {
      value: cdktf.numberToHclTerraform(struct!.percentOfLicense),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fixed_value: {
      value: cdktf.listMapperHcl(resourcePoolsConfigPoolsAllocationFixedValueToHclTerraform, true)(struct!.fixedValue),
      isBlock: true,
      type: "list",
      storageClassType: "ResourcePoolsConfigPoolsAllocationFixedValueList",
    },
    priority_thresholds: {
      value: cdktf.listMapperHcl(resourcePoolsConfigPoolsAllocationPriorityThresholdsToHclTerraform, true)(struct!.priorityThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "ResourcePoolsConfigPoolsAllocationPriorityThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourcePoolsConfigPoolsAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourcePoolsConfigPoolsAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentOfLicense !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentOfLicense = this._percentOfLicense;
    }
    if (this._fixedValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedValue = this._fixedValue?.internalValue;
    }
    if (this._priorityThresholds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityThresholds = this._priorityThresholds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourcePoolsConfigPoolsAllocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._percentOfLicense = undefined;
      this._fixedValue.internalValue = undefined;
      this._priorityThresholds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._percentOfLicense = value.percentOfLicense;
      this._fixedValue.internalValue = value.fixedValue;
      this._priorityThresholds.internalValue = value.priorityThresholds;
    }
  }

  // percent_of_license - computed: false, optional: true, required: false
  private _percentOfLicense?: number; 
  public get percentOfLicense() {
    return this.getNumberAttribute('percent_of_license');
  }
  public set percentOfLicense(value: number) {
    this._percentOfLicense = value;
  }
  public resetPercentOfLicense() {
    this._percentOfLicense = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentOfLicenseInput() {
    return this._percentOfLicense;
  }

  // fixed_value - computed: false, optional: true, required: false
  private _fixedValue = new ResourcePoolsConfigPoolsAllocationFixedValueList(this, "fixed_value", false);
  public get fixedValue() {
    return this._fixedValue;
  }
  public putFixedValue(value: ResourcePoolsConfigPoolsAllocationFixedValue[] | cdktf.IResolvable) {
    this._fixedValue.internalValue = value;
  }
  public resetFixedValue() {
    this._fixedValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedValueInput() {
    return this._fixedValue.internalValue;
  }

  // priority_thresholds - computed: false, optional: true, required: false
  private _priorityThresholds = new ResourcePoolsConfigPoolsAllocationPriorityThresholdsList(this, "priority_thresholds", false);
  public get priorityThresholds() {
    return this._priorityThresholds;
  }
  public putPriorityThresholds(value: ResourcePoolsConfigPoolsAllocationPriorityThresholds[] | cdktf.IResolvable) {
    this._priorityThresholds.internalValue = value;
  }
  public resetPriorityThresholds() {
    this._priorityThresholds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityThresholdsInput() {
    return this._priorityThresholds.internalValue;
  }
}
export interface ResourcePoolsConfigPoolsPriorities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#high_priority_match_rules ResourcePoolsConfig#high_priority_match_rules}
  */
  readonly highPriorityMatchRules?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#low_priority_match_rules ResourcePoolsConfig#low_priority_match_rules}
  */
  readonly lowPriorityMatchRules?: string[];
}

export function resourcePoolsConfigPoolsPrioritiesToTerraform(struct?: ResourcePoolsConfigPoolsPrioritiesOutputReference | ResourcePoolsConfigPoolsPriorities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    high_priority_match_rules: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.highPriorityMatchRules),
    low_priority_match_rules: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.lowPriorityMatchRules),
  }
}


export function resourcePoolsConfigPoolsPrioritiesToHclTerraform(struct?: ResourcePoolsConfigPoolsPrioritiesOutputReference | ResourcePoolsConfigPoolsPriorities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    high_priority_match_rules: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.highPriorityMatchRules),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    low_priority_match_rules: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.lowPriorityMatchRules),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourcePoolsConfigPoolsPrioritiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourcePoolsConfigPoolsPriorities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._highPriorityMatchRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.highPriorityMatchRules = this._highPriorityMatchRules;
    }
    if (this._lowPriorityMatchRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowPriorityMatchRules = this._lowPriorityMatchRules;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourcePoolsConfigPoolsPriorities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._highPriorityMatchRules = undefined;
      this._lowPriorityMatchRules = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._highPriorityMatchRules = value.highPriorityMatchRules;
      this._lowPriorityMatchRules = value.lowPriorityMatchRules;
    }
  }

  // high_priority_match_rules - computed: false, optional: true, required: false
  private _highPriorityMatchRules?: string[]; 
  public get highPriorityMatchRules() {
    return this.getListAttribute('high_priority_match_rules');
  }
  public set highPriorityMatchRules(value: string[]) {
    this._highPriorityMatchRules = value;
  }
  public resetHighPriorityMatchRules() {
    this._highPriorityMatchRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highPriorityMatchRulesInput() {
    return this._highPriorityMatchRules;
  }

  // low_priority_match_rules - computed: false, optional: true, required: false
  private _lowPriorityMatchRules?: string[]; 
  public get lowPriorityMatchRules() {
    return this.getListAttribute('low_priority_match_rules');
  }
  public set lowPriorityMatchRules(value: string[]) {
    this._lowPriorityMatchRules = value;
  }
  public resetLowPriorityMatchRules() {
    this._lowPriorityMatchRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowPriorityMatchRulesInput() {
    return this._lowPriorityMatchRules;
  }
}
export interface ResourcePoolsConfigPools {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#match_rule ResourcePoolsConfig#match_rule}
  */
  readonly matchRule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#match_rules ResourcePoolsConfig#match_rules}
  */
  readonly matchRules?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#name ResourcePoolsConfig#name}
  */
  readonly name: string;
  /**
  * allocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#allocation ResourcePoolsConfig#allocation}
  */
  readonly allocation?: ResourcePoolsConfigPoolsAllocation;
  /**
  * priorities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#priorities ResourcePoolsConfig#priorities}
  */
  readonly priorities?: ResourcePoolsConfigPoolsPriorities;
}

export function resourcePoolsConfigPoolsToTerraform(struct?: ResourcePoolsConfigPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_rule: cdktf.stringToTerraform(struct!.matchRule),
    match_rules: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchRules),
    name: cdktf.stringToTerraform(struct!.name),
    allocation: resourcePoolsConfigPoolsAllocationToTerraform(struct!.allocation),
    priorities: resourcePoolsConfigPoolsPrioritiesToTerraform(struct!.priorities),
  }
}


export function resourcePoolsConfigPoolsToHclTerraform(struct?: ResourcePoolsConfigPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_rule: {
      value: cdktf.stringToHclTerraform(struct!.matchRule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_rules: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchRules),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allocation: {
      value: resourcePoolsConfigPoolsAllocationToHclTerraform(struct!.allocation),
      isBlock: true,
      type: "list",
      storageClassType: "ResourcePoolsConfigPoolsAllocationList",
    },
    priorities: {
      value: resourcePoolsConfigPoolsPrioritiesToHclTerraform(struct!.priorities),
      isBlock: true,
      type: "list",
      storageClassType: "ResourcePoolsConfigPoolsPrioritiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourcePoolsConfigPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourcePoolsConfigPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchRule = this._matchRule;
    }
    if (this._matchRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchRules = this._matchRules;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._allocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocation = this._allocation?.internalValue;
    }
    if (this._priorities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorities = this._priorities?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourcePoolsConfigPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchRule = undefined;
      this._matchRules = undefined;
      this._name = undefined;
      this._allocation.internalValue = undefined;
      this._priorities.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchRule = value.matchRule;
      this._matchRules = value.matchRules;
      this._name = value.name;
      this._allocation.internalValue = value.allocation;
      this._priorities.internalValue = value.priorities;
    }
  }

  // match_rule - computed: false, optional: true, required: false
  private _matchRule?: string; 
  public get matchRule() {
    return this.getStringAttribute('match_rule');
  }
  public set matchRule(value: string) {
    this._matchRule = value;
  }
  public resetMatchRule() {
    this._matchRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRuleInput() {
    return this._matchRule;
  }

  // match_rules - computed: false, optional: true, required: false
  private _matchRules?: string[]; 
  public get matchRules() {
    return this.getListAttribute('match_rules');
  }
  public set matchRules(value: string[]) {
    this._matchRules = value;
  }
  public resetMatchRules() {
    this._matchRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRulesInput() {
    return this._matchRules;
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

  // allocation - computed: false, optional: true, required: false
  private _allocation = new ResourcePoolsConfigPoolsAllocationOutputReference(this, "allocation");
  public get allocation() {
    return this._allocation;
  }
  public putAllocation(value: ResourcePoolsConfigPoolsAllocation) {
    this._allocation.internalValue = value;
  }
  public resetAllocation() {
    this._allocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationInput() {
    return this._allocation.internalValue;
  }

  // priorities - computed: false, optional: true, required: false
  private _priorities = new ResourcePoolsConfigPoolsPrioritiesOutputReference(this, "priorities");
  public get priorities() {
    return this._priorities;
  }
  public putPriorities(value: ResourcePoolsConfigPoolsPriorities) {
    this._priorities.internalValue = value;
  }
  public resetPriorities() {
    this._priorities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prioritiesInput() {
    return this._priorities.internalValue;
  }
}

export class ResourcePoolsConfigPoolsList extends cdktf.ComplexList {
  public internalValue? : ResourcePoolsConfigPools[] | cdktf.IResolvable

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
  public get(index: number): ResourcePoolsConfigPoolsOutputReference {
    return new ResourcePoolsConfigPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config chronosphere_resource_pools_config}
*/
export class ResourcePoolsConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "chronosphere_resource_pools_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ResourcePoolsConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ResourcePoolsConfig to import
  * @param importFromId The id of the existing ResourcePoolsConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ResourcePoolsConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "chronosphere_resource_pools_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/resource_pools_config chronosphere_resource_pools_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourcePoolsConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ResourcePoolsConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'chronosphere_resource_pools_config',
      terraformGeneratorMetadata: {
        providerName: 'chronosphere',
        providerVersion: '1.18.0',
        providerVersionConstraint: '1.18.0'
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
    this._defaultPool.internalValue = config.defaultPool;
    this._pool.internalValue = config.pool;
    this._pools.internalValue = config.pools;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // default_pool - computed: false, optional: true, required: false
  private _defaultPool = new ResourcePoolsConfigDefaultPoolOutputReference(this, "default_pool");
  public get defaultPool() {
    return this._defaultPool;
  }
  public putDefaultPool(value: ResourcePoolsConfigDefaultPool) {
    this._defaultPool.internalValue = value;
  }
  public resetDefaultPool() {
    this._defaultPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPoolInput() {
    return this._defaultPool.internalValue;
  }

  // pool - computed: false, optional: true, required: false
  private _pool = new ResourcePoolsConfigPoolList(this, "pool", false);
  public get pool() {
    return this._pool;
  }
  public putPool(value: ResourcePoolsConfigPool[] | cdktf.IResolvable) {
    this._pool.internalValue = value;
  }
  public resetPool() {
    this._pool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool.internalValue;
  }

  // pools - computed: false, optional: true, required: false
  private _pools = new ResourcePoolsConfigPoolsList(this, "pools", false);
  public get pools() {
    return this._pools;
  }
  public putPools(value: ResourcePoolsConfigPools[] | cdktf.IResolvable) {
    this._pools.internalValue = value;
  }
  public resetPools() {
    this._pools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolsInput() {
    return this._pools.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      default_pool: resourcePoolsConfigDefaultPoolToTerraform(this._defaultPool.internalValue),
      pool: cdktf.listMapper(resourcePoolsConfigPoolToTerraform, true)(this._pool.internalValue),
      pools: cdktf.listMapper(resourcePoolsConfigPoolsToTerraform, true)(this._pools.internalValue),
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
      default_pool: {
        value: resourcePoolsConfigDefaultPoolToHclTerraform(this._defaultPool.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ResourcePoolsConfigDefaultPoolList",
      },
      pool: {
        value: cdktf.listMapperHcl(resourcePoolsConfigPoolToHclTerraform, true)(this._pool.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ResourcePoolsConfigPoolList",
      },
      pools: {
        value: cdktf.listMapperHcl(resourcePoolsConfigPoolsToHclTerraform, true)(this._pools.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ResourcePoolsConfigPoolsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
