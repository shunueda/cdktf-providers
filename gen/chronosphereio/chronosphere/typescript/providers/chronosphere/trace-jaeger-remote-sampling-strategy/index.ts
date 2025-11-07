// https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/trace_jaeger_remote_sampling_strategy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TraceJaegerRemoteSamplingStrategyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/trace_jaeger_remote_sampling_strategy#id TraceJaegerRemoteSamplingStrategy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/trace_jaeger_remote_sampling_strategy#name TraceJaegerRemoteSamplingStrategy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/trace_jaeger_remote_sampling_strategy#service_name TraceJaegerRemoteSamplingStrategy#service_name}
  */
  readonly serviceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/trace_jaeger_remote_sampling_strategy#slug TraceJaegerRemoteSamplingStrategy#slug}
  */
  readonly slug?: string;
  /**
  * applied_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/trace_jaeger_remote_sampling_strategy#applied_strategy TraceJaegerRemoteSamplingStrategy#applied_strategy}
  */
  readonly appliedStrategy: TraceJaegerRemoteSamplingStrategyAppliedStrategy;
}
export interface TraceJaegerRemoteSamplingStrategyAppliedStrategyPerOperationStrategiesPerOperationStrategiesProbabilisticStrategy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/trace_jaeger_remote_sampling_strategy#sampling_rate TraceJaegerRemoteSamplingStrategy#sampling_rate}
  */
  readonly samplingRate: number;
}

export function traceJaegerRemoteSamplingStrategyAppliedStrategyPerOperationStrategiesPerOperationStrategiesProbabilisticStrategyToTerraform(struct?: TraceJaegerRemoteSamplingStrategyAppliedStrategyPerOperationStrategiesPerOperationStrategiesProbabilisticStrategyOutputReference | TraceJaegerRemoteSamplingStrategyAppliedStrategyPerOperationStrategiesPerOperationStrategiesProbabilisticStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sampling_rate: cdktf.numberToTerraform(struct!.samplingRate),
  }
}


export function traceJaegerRemoteSamplingStrategyAppliedStrategyPerOperationStrategiesPerOperationStrategiesProbabilisticStrategyToHclTerraform(struct?: TraceJaegerRemoteSamplingStrategyAppliedStrategyPerOperationStrategiesPerOperationStrategiesProbabilisticStrategyOutputReference | TraceJaegerRemoteSamplingStrategyAppliedStrategyPerOperationStrategiesPerOperationStrategiesProbabilisticStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sampling_rate: {
      value: cdktf.numberToHclTerraform(struct!.samplingRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TraceJaegerRemoteSamplingStrategyAppliedStrategyPerOperationStrategiesPerOperationStrategiesProbabilisticStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TraceJaegerRemoteSamplingStrategyAppliedStrategyPerOperationStrategiesPerOperationStrategiesProbabilisticStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._samplingRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingRate = this._samplingRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TraceJaegerRemoteSamplingStrategyAppliedStrategyPerOperationStrategiesPerOperationStrategiesProbabilisticStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._samplingRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._samplingRate = value.samplingRate;
    }
  }

  // sampling_rate - computed: false, optional: false, required: true
  private _samplingRate?: number; 
  public get samplingRate() {
    return this.getNumberAttribute('sampling_rate');
  }
  public set samplingRate(value: number) {
    this._samplingRate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingRateInput() {
    return this._samplingRate;
  }
}
export interface TraceJaegerRemoteSamplingStrategyAppliedStrategyPerOperationStrategiesPerOperationStrategies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/trace_jaeger_remote_sampling_strategy#operation TraceJaegerRemoteSamplingStrategy#operation}
  */
  readonly operation: string;
  /**
  * probabilistic_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/trace_jaeger_remote_sampling_strategy#probabilistic_strategy TraceJaegerRemoteSamplingStrategy#probabilistic_strategy}
  */
  readonly probabilisticStrategy: TraceJaegerRemoteSamplingStrategyAppliedStrategyPerOperationStrategiesPerOperationStrategiesProbabilisticStrategy;
}

export function traceJaegerRemoteSamplingStrategyAppliedStrategyPerOperationStrategiesPerOperationStrategiesToTerraform(struct?: TraceJaegerRemoteSamplingStrategyAppliedStrategyPerOperationStrategiesPerOperationStrategies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.stringToTerraform(struct!.operation),
    probabilistic_strategy: traceJaegerRemoteSamplingStrategyAppliedStrategyPerOperationStrategiesPerOperationStrategiesProbabilisticStrategyToTerraform(struct!.probabilisticStrategy),
  }
}


export function traceJaegerRemoteSamplingStrategyAppliedStrategyPerOperationStrategiesPerOperationStrategiesToHclTerraform(struct?: TraceJaegerRemoteSamplingStrategyAppliedStrategyPerOperationStrategiesPerOperationStrategies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    probabilistic_strategy: {
      value: traceJaegerRemoteSamplingStrategyAppliedStrategyPerOperationStrategiesPerOperationStrategiesProbabilisticStrategyToHclTerraform(struct!.probabilisticStrategy),
      isBlock: true,
      type: "list",
      storageClassType: "TraceJaegerRemoteSamplingStrategyAppliedStrategyPerOperationStrategiesPerOperationStrategiesProbabilisticStrategyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TraceJaegerRemoteSamplingStrategyAppliedStrategyPerOperationStrategiesPerOperationStrategiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TraceJaegerRemoteSamplingStrategyAppliedStrategyPerOperationStrategiesPerOperationStrategies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._probabilisticStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.probabilisticStrategy = this._probabilisticStrategy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TraceJaegerRemoteSamplingStrategyAppliedStrategyPerOperationStrategiesPerOperationStrategies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operation = undefined;
      this._probabilisticStrategy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operation = value.operation;
      this._probabilisticStrategy.internalValue = value.probabilisticStrategy;
    }
  }

  // operation - computed: false, optional: false, required: true
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // probabilistic_strategy - computed: false, optional: false, required: true
  private _probabilisticStrategy = new TraceJaegerRemoteSamplingStrategyAppliedStrategyPerOperationStrategiesPerOperationStrategiesProbabilisticStrategyOutputReference(this, "probabilistic_strategy");
  public get probabilisticStrategy() {
    return this._probabilisticStrategy;
  }
  public putProbabilisticStrategy(value: TraceJaegerRemoteSamplingStrategyAppliedStrategyPerOperationStrategiesPerOperationStrategiesProbabilisticStrategy) {
    this._probabilisticStrategy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get probabilisticStrategyInput() {
    return this._probabilisticStrategy.internalValue;
  }
}

export class TraceJaegerRemoteSamplingStrategyAppliedStrategyPerOperationStrategiesPerOperationStrategiesList extends cdktf.ComplexList {
  public internalValue? : TraceJaegerRemoteSamplingStrategyAppliedStrategyPerOperationStrategiesPerOperationStrategies[] | cdktf.IResolvable

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
  public get(index: number): TraceJaegerRemoteSamplingStrategyAppliedStrategyPerOperationStrategiesPerOperationStrategiesOutputReference {
    return new TraceJaegerRemoteSamplingStrategyAppliedStrategyPerOperationStrategiesPerOperationStrategiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TraceJaegerRemoteSamplingStrategyAppliedStrategyPerOperationStrategies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/trace_jaeger_remote_sampling_strategy#default_lower_bound_traces_per_second TraceJaegerRemoteSamplingStrategy#default_lower_bound_traces_per_second}
  */
  readonly defaultLowerBoundTracesPerSecond?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/trace_jaeger_remote_sampling_strategy#default_sampling_rate TraceJaegerRemoteSamplingStrategy#default_sampling_rate}
  */
  readonly defaultSamplingRate: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/trace_jaeger_remote_sampling_strategy#default_upper_bound_traces_per_second TraceJaegerRemoteSamplingStrategy#default_upper_bound_traces_per_second}
  */
  readonly defaultUpperBoundTracesPerSecond?: number;
  /**
  * per_operation_strategies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/trace_jaeger_remote_sampling_strategy#per_operation_strategies TraceJaegerRemoteSamplingStrategy#per_operation_strategies}
  */
  readonly perOperationStrategies?: TraceJaegerRemoteSamplingStrategyAppliedStrategyPerOperationStrategiesPerOperationStrategies[] | cdktf.IResolvable;
}

export function traceJaegerRemoteSamplingStrategyAppliedStrategyPerOperationStrategiesToTerraform(struct?: TraceJaegerRemoteSamplingStrategyAppliedStrategyPerOperationStrategiesOutputReference | TraceJaegerRemoteSamplingStrategyAppliedStrategyPerOperationStrategies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_lower_bound_traces_per_second: cdktf.numberToTerraform(struct!.defaultLowerBoundTracesPerSecond),
    default_sampling_rate: cdktf.numberToTerraform(struct!.defaultSamplingRate),
    default_upper_bound_traces_per_second: cdktf.numberToTerraform(struct!.defaultUpperBoundTracesPerSecond),
    per_operation_strategies: cdktf.listMapper(traceJaegerRemoteSamplingStrategyAppliedStrategyPerOperationStrategiesPerOperationStrategiesToTerraform, true)(struct!.perOperationStrategies),
  }
}


export function traceJaegerRemoteSamplingStrategyAppliedStrategyPerOperationStrategiesToHclTerraform(struct?: TraceJaegerRemoteSamplingStrategyAppliedStrategyPerOperationStrategiesOutputReference | TraceJaegerRemoteSamplingStrategyAppliedStrategyPerOperationStrategies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_lower_bound_traces_per_second: {
      value: cdktf.numberToHclTerraform(struct!.defaultLowerBoundTracesPerSecond),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_sampling_rate: {
      value: cdktf.numberToHclTerraform(struct!.defaultSamplingRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_upper_bound_traces_per_second: {
      value: cdktf.numberToHclTerraform(struct!.defaultUpperBoundTracesPerSecond),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_operation_strategies: {
      value: cdktf.listMapperHcl(traceJaegerRemoteSamplingStrategyAppliedStrategyPerOperationStrategiesPerOperationStrategiesToHclTerraform, true)(struct!.perOperationStrategies),
      isBlock: true,
      type: "list",
      storageClassType: "TraceJaegerRemoteSamplingStrategyAppliedStrategyPerOperationStrategiesPerOperationStrategiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TraceJaegerRemoteSamplingStrategyAppliedStrategyPerOperationStrategiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TraceJaegerRemoteSamplingStrategyAppliedStrategyPerOperationStrategies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultLowerBoundTracesPerSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultLowerBoundTracesPerSecond = this._defaultLowerBoundTracesPerSecond;
    }
    if (this._defaultSamplingRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSamplingRate = this._defaultSamplingRate;
    }
    if (this._defaultUpperBoundTracesPerSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultUpperBoundTracesPerSecond = this._defaultUpperBoundTracesPerSecond;
    }
    if (this._perOperationStrategies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.perOperationStrategies = this._perOperationStrategies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TraceJaegerRemoteSamplingStrategyAppliedStrategyPerOperationStrategies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultLowerBoundTracesPerSecond = undefined;
      this._defaultSamplingRate = undefined;
      this._defaultUpperBoundTracesPerSecond = undefined;
      this._perOperationStrategies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultLowerBoundTracesPerSecond = value.defaultLowerBoundTracesPerSecond;
      this._defaultSamplingRate = value.defaultSamplingRate;
      this._defaultUpperBoundTracesPerSecond = value.defaultUpperBoundTracesPerSecond;
      this._perOperationStrategies.internalValue = value.perOperationStrategies;
    }
  }

  // default_lower_bound_traces_per_second - computed: false, optional: true, required: false
  private _defaultLowerBoundTracesPerSecond?: number; 
  public get defaultLowerBoundTracesPerSecond() {
    return this.getNumberAttribute('default_lower_bound_traces_per_second');
  }
  public set defaultLowerBoundTracesPerSecond(value: number) {
    this._defaultLowerBoundTracesPerSecond = value;
  }
  public resetDefaultLowerBoundTracesPerSecond() {
    this._defaultLowerBoundTracesPerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLowerBoundTracesPerSecondInput() {
    return this._defaultLowerBoundTracesPerSecond;
  }

  // default_sampling_rate - computed: false, optional: false, required: true
  private _defaultSamplingRate?: number; 
  public get defaultSamplingRate() {
    return this.getNumberAttribute('default_sampling_rate');
  }
  public set defaultSamplingRate(value: number) {
    this._defaultSamplingRate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSamplingRateInput() {
    return this._defaultSamplingRate;
  }

  // default_upper_bound_traces_per_second - computed: false, optional: true, required: false
  private _defaultUpperBoundTracesPerSecond?: number; 
  public get defaultUpperBoundTracesPerSecond() {
    return this.getNumberAttribute('default_upper_bound_traces_per_second');
  }
  public set defaultUpperBoundTracesPerSecond(value: number) {
    this._defaultUpperBoundTracesPerSecond = value;
  }
  public resetDefaultUpperBoundTracesPerSecond() {
    this._defaultUpperBoundTracesPerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultUpperBoundTracesPerSecondInput() {
    return this._defaultUpperBoundTracesPerSecond;
  }

  // per_operation_strategies - computed: false, optional: true, required: false
  private _perOperationStrategies = new TraceJaegerRemoteSamplingStrategyAppliedStrategyPerOperationStrategiesPerOperationStrategiesList(this, "per_operation_strategies", false);
  public get perOperationStrategies() {
    return this._perOperationStrategies;
  }
  public putPerOperationStrategies(value: TraceJaegerRemoteSamplingStrategyAppliedStrategyPerOperationStrategiesPerOperationStrategies[] | cdktf.IResolvable) {
    this._perOperationStrategies.internalValue = value;
  }
  public resetPerOperationStrategies() {
    this._perOperationStrategies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perOperationStrategiesInput() {
    return this._perOperationStrategies.internalValue;
  }
}
export interface TraceJaegerRemoteSamplingStrategyAppliedStrategyProbabilisticStrategy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/trace_jaeger_remote_sampling_strategy#sampling_rate TraceJaegerRemoteSamplingStrategy#sampling_rate}
  */
  readonly samplingRate: number;
}

export function traceJaegerRemoteSamplingStrategyAppliedStrategyProbabilisticStrategyToTerraform(struct?: TraceJaegerRemoteSamplingStrategyAppliedStrategyProbabilisticStrategyOutputReference | TraceJaegerRemoteSamplingStrategyAppliedStrategyProbabilisticStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sampling_rate: cdktf.numberToTerraform(struct!.samplingRate),
  }
}


export function traceJaegerRemoteSamplingStrategyAppliedStrategyProbabilisticStrategyToHclTerraform(struct?: TraceJaegerRemoteSamplingStrategyAppliedStrategyProbabilisticStrategyOutputReference | TraceJaegerRemoteSamplingStrategyAppliedStrategyProbabilisticStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sampling_rate: {
      value: cdktf.numberToHclTerraform(struct!.samplingRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TraceJaegerRemoteSamplingStrategyAppliedStrategyProbabilisticStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TraceJaegerRemoteSamplingStrategyAppliedStrategyProbabilisticStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._samplingRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingRate = this._samplingRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TraceJaegerRemoteSamplingStrategyAppliedStrategyProbabilisticStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._samplingRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._samplingRate = value.samplingRate;
    }
  }

  // sampling_rate - computed: false, optional: false, required: true
  private _samplingRate?: number; 
  public get samplingRate() {
    return this.getNumberAttribute('sampling_rate');
  }
  public set samplingRate(value: number) {
    this._samplingRate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingRateInput() {
    return this._samplingRate;
  }
}
export interface TraceJaegerRemoteSamplingStrategyAppliedStrategyRateLimitingStrategy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/trace_jaeger_remote_sampling_strategy#max_traces_per_second TraceJaegerRemoteSamplingStrategy#max_traces_per_second}
  */
  readonly maxTracesPerSecond: number;
}

export function traceJaegerRemoteSamplingStrategyAppliedStrategyRateLimitingStrategyToTerraform(struct?: TraceJaegerRemoteSamplingStrategyAppliedStrategyRateLimitingStrategyOutputReference | TraceJaegerRemoteSamplingStrategyAppliedStrategyRateLimitingStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_traces_per_second: cdktf.numberToTerraform(struct!.maxTracesPerSecond),
  }
}


export function traceJaegerRemoteSamplingStrategyAppliedStrategyRateLimitingStrategyToHclTerraform(struct?: TraceJaegerRemoteSamplingStrategyAppliedStrategyRateLimitingStrategyOutputReference | TraceJaegerRemoteSamplingStrategyAppliedStrategyRateLimitingStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_traces_per_second: {
      value: cdktf.numberToHclTerraform(struct!.maxTracesPerSecond),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TraceJaegerRemoteSamplingStrategyAppliedStrategyRateLimitingStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TraceJaegerRemoteSamplingStrategyAppliedStrategyRateLimitingStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxTracesPerSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTracesPerSecond = this._maxTracesPerSecond;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TraceJaegerRemoteSamplingStrategyAppliedStrategyRateLimitingStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxTracesPerSecond = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxTracesPerSecond = value.maxTracesPerSecond;
    }
  }

  // max_traces_per_second - computed: false, optional: false, required: true
  private _maxTracesPerSecond?: number; 
  public get maxTracesPerSecond() {
    return this.getNumberAttribute('max_traces_per_second');
  }
  public set maxTracesPerSecond(value: number) {
    this._maxTracesPerSecond = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTracesPerSecondInput() {
    return this._maxTracesPerSecond;
  }
}
export interface TraceJaegerRemoteSamplingStrategyAppliedStrategy {
  /**
  * per_operation_strategies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/trace_jaeger_remote_sampling_strategy#per_operation_strategies TraceJaegerRemoteSamplingStrategy#per_operation_strategies}
  */
  readonly perOperationStrategies?: TraceJaegerRemoteSamplingStrategyAppliedStrategyPerOperationStrategies;
  /**
  * probabilistic_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/trace_jaeger_remote_sampling_strategy#probabilistic_strategy TraceJaegerRemoteSamplingStrategy#probabilistic_strategy}
  */
  readonly probabilisticStrategy?: TraceJaegerRemoteSamplingStrategyAppliedStrategyProbabilisticStrategy;
  /**
  * rate_limiting_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/trace_jaeger_remote_sampling_strategy#rate_limiting_strategy TraceJaegerRemoteSamplingStrategy#rate_limiting_strategy}
  */
  readonly rateLimitingStrategy?: TraceJaegerRemoteSamplingStrategyAppliedStrategyRateLimitingStrategy;
}

export function traceJaegerRemoteSamplingStrategyAppliedStrategyToTerraform(struct?: TraceJaegerRemoteSamplingStrategyAppliedStrategyOutputReference | TraceJaegerRemoteSamplingStrategyAppliedStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    per_operation_strategies: traceJaegerRemoteSamplingStrategyAppliedStrategyPerOperationStrategiesToTerraform(struct!.perOperationStrategies),
    probabilistic_strategy: traceJaegerRemoteSamplingStrategyAppliedStrategyProbabilisticStrategyToTerraform(struct!.probabilisticStrategy),
    rate_limiting_strategy: traceJaegerRemoteSamplingStrategyAppliedStrategyRateLimitingStrategyToTerraform(struct!.rateLimitingStrategy),
  }
}


export function traceJaegerRemoteSamplingStrategyAppliedStrategyToHclTerraform(struct?: TraceJaegerRemoteSamplingStrategyAppliedStrategyOutputReference | TraceJaegerRemoteSamplingStrategyAppliedStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    per_operation_strategies: {
      value: traceJaegerRemoteSamplingStrategyAppliedStrategyPerOperationStrategiesToHclTerraform(struct!.perOperationStrategies),
      isBlock: true,
      type: "list",
      storageClassType: "TraceJaegerRemoteSamplingStrategyAppliedStrategyPerOperationStrategiesList",
    },
    probabilistic_strategy: {
      value: traceJaegerRemoteSamplingStrategyAppliedStrategyProbabilisticStrategyToHclTerraform(struct!.probabilisticStrategy),
      isBlock: true,
      type: "list",
      storageClassType: "TraceJaegerRemoteSamplingStrategyAppliedStrategyProbabilisticStrategyList",
    },
    rate_limiting_strategy: {
      value: traceJaegerRemoteSamplingStrategyAppliedStrategyRateLimitingStrategyToHclTerraform(struct!.rateLimitingStrategy),
      isBlock: true,
      type: "list",
      storageClassType: "TraceJaegerRemoteSamplingStrategyAppliedStrategyRateLimitingStrategyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TraceJaegerRemoteSamplingStrategyAppliedStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TraceJaegerRemoteSamplingStrategyAppliedStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._perOperationStrategies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.perOperationStrategies = this._perOperationStrategies?.internalValue;
    }
    if (this._probabilisticStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.probabilisticStrategy = this._probabilisticStrategy?.internalValue;
    }
    if (this._rateLimitingStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimitingStrategy = this._rateLimitingStrategy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TraceJaegerRemoteSamplingStrategyAppliedStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._perOperationStrategies.internalValue = undefined;
      this._probabilisticStrategy.internalValue = undefined;
      this._rateLimitingStrategy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._perOperationStrategies.internalValue = value.perOperationStrategies;
      this._probabilisticStrategy.internalValue = value.probabilisticStrategy;
      this._rateLimitingStrategy.internalValue = value.rateLimitingStrategy;
    }
  }

  // per_operation_strategies - computed: false, optional: true, required: false
  private _perOperationStrategies = new TraceJaegerRemoteSamplingStrategyAppliedStrategyPerOperationStrategiesOutputReference(this, "per_operation_strategies");
  public get perOperationStrategies() {
    return this._perOperationStrategies;
  }
  public putPerOperationStrategies(value: TraceJaegerRemoteSamplingStrategyAppliedStrategyPerOperationStrategies) {
    this._perOperationStrategies.internalValue = value;
  }
  public resetPerOperationStrategies() {
    this._perOperationStrategies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perOperationStrategiesInput() {
    return this._perOperationStrategies.internalValue;
  }

  // probabilistic_strategy - computed: false, optional: true, required: false
  private _probabilisticStrategy = new TraceJaegerRemoteSamplingStrategyAppliedStrategyProbabilisticStrategyOutputReference(this, "probabilistic_strategy");
  public get probabilisticStrategy() {
    return this._probabilisticStrategy;
  }
  public putProbabilisticStrategy(value: TraceJaegerRemoteSamplingStrategyAppliedStrategyProbabilisticStrategy) {
    this._probabilisticStrategy.internalValue = value;
  }
  public resetProbabilisticStrategy() {
    this._probabilisticStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probabilisticStrategyInput() {
    return this._probabilisticStrategy.internalValue;
  }

  // rate_limiting_strategy - computed: false, optional: true, required: false
  private _rateLimitingStrategy = new TraceJaegerRemoteSamplingStrategyAppliedStrategyRateLimitingStrategyOutputReference(this, "rate_limiting_strategy");
  public get rateLimitingStrategy() {
    return this._rateLimitingStrategy;
  }
  public putRateLimitingStrategy(value: TraceJaegerRemoteSamplingStrategyAppliedStrategyRateLimitingStrategy) {
    this._rateLimitingStrategy.internalValue = value;
  }
  public resetRateLimitingStrategy() {
    this._rateLimitingStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitingStrategyInput() {
    return this._rateLimitingStrategy.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/trace_jaeger_remote_sampling_strategy chronosphere_trace_jaeger_remote_sampling_strategy}
*/
export class TraceJaegerRemoteSamplingStrategy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "chronosphere_trace_jaeger_remote_sampling_strategy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TraceJaegerRemoteSamplingStrategy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TraceJaegerRemoteSamplingStrategy to import
  * @param importFromId The id of the existing TraceJaegerRemoteSamplingStrategy that should be imported. Refer to the {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/trace_jaeger_remote_sampling_strategy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TraceJaegerRemoteSamplingStrategy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "chronosphere_trace_jaeger_remote_sampling_strategy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/trace_jaeger_remote_sampling_strategy chronosphere_trace_jaeger_remote_sampling_strategy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TraceJaegerRemoteSamplingStrategyConfig
  */
  public constructor(scope: Construct, id: string, config: TraceJaegerRemoteSamplingStrategyConfig) {
    super(scope, id, {
      terraformResourceType: 'chronosphere_trace_jaeger_remote_sampling_strategy',
      terraformGeneratorMetadata: {
        providerName: 'chronosphere',
        providerVersion: '1.17.0'
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
    this._serviceName = config.serviceName;
    this._slug = config.slug;
    this._appliedStrategy.internalValue = config.appliedStrategy;
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

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // slug - computed: true, optional: true, required: false
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  public resetSlug() {
    this._slug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // applied_strategy - computed: false, optional: false, required: true
  private _appliedStrategy = new TraceJaegerRemoteSamplingStrategyAppliedStrategyOutputReference(this, "applied_strategy");
  public get appliedStrategy() {
    return this._appliedStrategy;
  }
  public putAppliedStrategy(value: TraceJaegerRemoteSamplingStrategyAppliedStrategy) {
    this._appliedStrategy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appliedStrategyInput() {
    return this._appliedStrategy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      service_name: cdktf.stringToTerraform(this._serviceName),
      slug: cdktf.stringToTerraform(this._slug),
      applied_strategy: traceJaegerRemoteSamplingStrategyAppliedStrategyToTerraform(this._appliedStrategy.internalValue),
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
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      applied_strategy: {
        value: traceJaegerRemoteSamplingStrategyAppliedStrategyToHclTerraform(this._appliedStrategy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TraceJaegerRemoteSamplingStrategyAppliedStrategyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
