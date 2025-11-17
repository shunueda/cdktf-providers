// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta3_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta3_manifest#metadata DataK8SKuadrantIoRateLimitPolicyV1Beta3Manifest#metadata}
  */
  readonly metadata: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestMetadata;
  /**
  * RateLimitPolicySpec defines the desired state of RateLimitPolicy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta3_manifest#spec DataK8SKuadrantIoRateLimitPolicyV1Beta3Manifest#spec}
  */
  readonly spec?: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpec;
}
export interface DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta3_manifest#annotations DataK8SKuadrantIoRateLimitPolicyV1Beta3Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta3_manifest#labels DataK8SKuadrantIoRateLimitPolicyV1Beta3Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta3_manifest#name DataK8SKuadrantIoRateLimitPolicyV1Beta3Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta3_manifest#namespace DataK8SKuadrantIoRateLimitPolicyV1Beta3Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestMetadataToTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestMetadataToHclTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._labels = value.labels;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaultsLimitsRates {
  /**
  * Duration defines the time period for which the Limit specified above applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta3_manifest#duration DataK8SKuadrantIoRateLimitPolicyV1Beta3Manifest#duration}
  */
  readonly duration: number;
  /**
  * Limit defines the max value allowed for a given period of time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta3_manifest#limit DataK8SKuadrantIoRateLimitPolicyV1Beta3Manifest#limit}
  */
  readonly limit: number;
  /**
  * Duration defines the time uni Possible values are: 'second', 'minute', 'hour', 'day'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta3_manifest#unit DataK8SKuadrantIoRateLimitPolicyV1Beta3Manifest#unit}
  */
  readonly unit: string;
}

export function dataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaultsLimitsRatesToTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaultsLimitsRates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    limit: cdktf.numberToTerraform(struct!.limit),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function dataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaultsLimitsRatesToHclTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaultsLimitsRates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaultsLimitsRatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaultsLimitsRates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaultsLimitsRates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._limit = undefined;
      this._unit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
      this._limit = value.limit;
      this._unit = value.unit;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // limit - computed: false, optional: false, required: true
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}

export class DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaultsLimitsRatesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaultsLimitsRates[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaultsLimitsRatesOutputReference {
    return new DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaultsLimitsRatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaultsLimitsWhen {
  /**
  * The binary operator to be applied to the content fetched from the selector Possible values are: 'eq' (equal to), 'neq' (not equal to)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta3_manifest#operator DataK8SKuadrantIoRateLimitPolicyV1Beta3Manifest#operator}
  */
  readonly operator: string;
  /**
  * Selector defines one item from the well known selectors TODO Document properly 'Well-known selector' https://github.com/Kuadrant/architecture/blob/main/rfcs/0001-rlp-v2.md#well-known-selectors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta3_manifest#selector DataK8SKuadrantIoRateLimitPolicyV1Beta3Manifest#selector}
  */
  readonly selector: string;
  /**
  * The value of reference for the comparison.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta3_manifest#value DataK8SKuadrantIoRateLimitPolicyV1Beta3Manifest#value}
  */
  readonly value: string;
}

export function dataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaultsLimitsWhenToTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaultsLimitsWhen | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    selector: cdktf.stringToTerraform(struct!.selector),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaultsLimitsWhenToHclTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaultsLimitsWhen | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
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

export class DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaultsLimitsWhenOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaultsLimitsWhen | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaultsLimitsWhen | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._selector = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._selector = value.selector;
      this._value = value.value;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // selector - computed: false, optional: false, required: true
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaultsLimitsWhenList extends cdktf.ComplexList {
  public internalValue? : DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaultsLimitsWhen[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaultsLimitsWhenOutputReference {
    return new DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaultsLimitsWhenOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaultsLimits {
  /**
  * Counters defines additional rate limit counters based on context qualifiers and well known selectors TODO Document properly 'Well-known selector' https://github.com/Kuadrant/architecture/blob/main/rfcs/0001-rlp-v2.md#well-known-selectors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta3_manifest#counters DataK8SKuadrantIoRateLimitPolicyV1Beta3Manifest#counters}
  */
  readonly counters?: string[];
  /**
  * Rates holds the list of limit rates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta3_manifest#rates DataK8SKuadrantIoRateLimitPolicyV1Beta3Manifest#rates}
  */
  readonly rates?: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaultsLimitsRates[] | cdktf.IResolvable;
  /**
  * When holds the list of conditions for the policy to be enforced. Called also 'soft' conditions as route selectors must also match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta3_manifest#when DataK8SKuadrantIoRateLimitPolicyV1Beta3Manifest#when}
  */
  readonly when?: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaultsLimitsWhen[] | cdktf.IResolvable;
}

export function dataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaultsLimitsToTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaultsLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.counters),
    rates: cdktf.listMapper(dataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaultsLimitsRatesToTerraform, false)(struct!.rates),
    when: cdktf.listMapper(dataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaultsLimitsWhenToTerraform, false)(struct!.when),
  }
}


export function dataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaultsLimitsToHclTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaultsLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.counters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    rates: {
      value: cdktf.listMapperHcl(dataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaultsLimitsRatesToHclTerraform, false)(struct!.rates),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaultsLimitsRatesList",
    },
    when: {
      value: cdktf.listMapperHcl(dataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaultsLimitsWhenToHclTerraform, false)(struct!.when),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaultsLimitsWhenList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaultsLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaultsLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters = this._counters;
    }
    if (this._rates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rates = this._rates?.internalValue;
    }
    if (this._when?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.when = this._when?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaultsLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters = undefined;
      this._rates.internalValue = undefined;
      this._when.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters = value.counters;
      this._rates.internalValue = value.rates;
      this._when.internalValue = value.when;
    }
  }

  // counters - computed: false, optional: true, required: false
  private _counters?: string[]; 
  public get counters() {
    return this.getListAttribute('counters');
  }
  public set counters(value: string[]) {
    this._counters = value;
  }
  public resetCounters() {
    this._counters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countersInput() {
    return this._counters;
  }

  // rates - computed: false, optional: true, required: false
  private _rates = new DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaultsLimitsRatesList(this, "rates", false);
  public get rates() {
    return this._rates;
  }
  public putRates(value: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaultsLimitsRates[] | cdktf.IResolvable) {
    this._rates.internalValue = value;
  }
  public resetRates() {
    this._rates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratesInput() {
    return this._rates.internalValue;
  }

  // when - computed: false, optional: true, required: false
  private _when = new DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaultsLimitsWhenList(this, "when", false);
  public get when() {
    return this._when;
  }
  public putWhen(value: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaultsLimitsWhen[] | cdktf.IResolvable) {
    this._when.internalValue = value;
  }
  public resetWhen() {
    this._when.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenInput() {
    return this._when.internalValue;
  }
}
export interface DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaults {
  /**
  * Limits holds the struct of limits indexed by a unique name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta3_manifest#limits DataK8SKuadrantIoRateLimitPolicyV1Beta3Manifest#limits}
  */
  readonly limits?: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaultsLimits;
}

export function dataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaultsToTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaults | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: dataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaultsLimitsToTerraform(struct!.limits),
  }
}


export function dataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaultsToHclTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaults | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: dataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaultsLimitsToHclTerraform(struct!.limits),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaultsLimits",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaults | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaults | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limits.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limits.internalValue = value.limits;
    }
  }

  // limits - computed: false, optional: true, required: false
  private _limits = new DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaultsLimitsOutputReference(this, "limits");
  public get limits() {
    return this._limits;
  }
  public putLimits(value: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaultsLimits) {
    this._limits.internalValue = value;
  }
  public resetLimits() {
    this._limits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits.internalValue;
  }
}
export interface DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecLimitsRates {
  /**
  * Duration defines the time period for which the Limit specified above applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta3_manifest#duration DataK8SKuadrantIoRateLimitPolicyV1Beta3Manifest#duration}
  */
  readonly duration: number;
  /**
  * Limit defines the max value allowed for a given period of time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta3_manifest#limit DataK8SKuadrantIoRateLimitPolicyV1Beta3Manifest#limit}
  */
  readonly limit: number;
  /**
  * Duration defines the time uni Possible values are: 'second', 'minute', 'hour', 'day'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta3_manifest#unit DataK8SKuadrantIoRateLimitPolicyV1Beta3Manifest#unit}
  */
  readonly unit: string;
}

export function dataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecLimitsRatesToTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecLimitsRates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    limit: cdktf.numberToTerraform(struct!.limit),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function dataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecLimitsRatesToHclTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecLimitsRates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecLimitsRatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecLimitsRates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecLimitsRates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._limit = undefined;
      this._unit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
      this._limit = value.limit;
      this._unit = value.unit;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // limit - computed: false, optional: false, required: true
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}

export class DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecLimitsRatesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecLimitsRates[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecLimitsRatesOutputReference {
    return new DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecLimitsRatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecLimitsWhen {
  /**
  * The binary operator to be applied to the content fetched from the selector Possible values are: 'eq' (equal to), 'neq' (not equal to)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta3_manifest#operator DataK8SKuadrantIoRateLimitPolicyV1Beta3Manifest#operator}
  */
  readonly operator: string;
  /**
  * Selector defines one item from the well known selectors TODO Document properly 'Well-known selector' https://github.com/Kuadrant/architecture/blob/main/rfcs/0001-rlp-v2.md#well-known-selectors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta3_manifest#selector DataK8SKuadrantIoRateLimitPolicyV1Beta3Manifest#selector}
  */
  readonly selector: string;
  /**
  * The value of reference for the comparison.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta3_manifest#value DataK8SKuadrantIoRateLimitPolicyV1Beta3Manifest#value}
  */
  readonly value: string;
}

export function dataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecLimitsWhenToTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecLimitsWhen | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    selector: cdktf.stringToTerraform(struct!.selector),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecLimitsWhenToHclTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecLimitsWhen | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
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

export class DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecLimitsWhenOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecLimitsWhen | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecLimitsWhen | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._selector = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._selector = value.selector;
      this._value = value.value;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // selector - computed: false, optional: false, required: true
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecLimitsWhenList extends cdktf.ComplexList {
  public internalValue? : DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecLimitsWhen[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecLimitsWhenOutputReference {
    return new DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecLimitsWhenOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecLimits {
  /**
  * Counters defines additional rate limit counters based on context qualifiers and well known selectors TODO Document properly 'Well-known selector' https://github.com/Kuadrant/architecture/blob/main/rfcs/0001-rlp-v2.md#well-known-selectors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta3_manifest#counters DataK8SKuadrantIoRateLimitPolicyV1Beta3Manifest#counters}
  */
  readonly counters?: string[];
  /**
  * Rates holds the list of limit rates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta3_manifest#rates DataK8SKuadrantIoRateLimitPolicyV1Beta3Manifest#rates}
  */
  readonly rates?: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecLimitsRates[] | cdktf.IResolvable;
  /**
  * When holds the list of conditions for the policy to be enforced. Called also 'soft' conditions as route selectors must also match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta3_manifest#when DataK8SKuadrantIoRateLimitPolicyV1Beta3Manifest#when}
  */
  readonly when?: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecLimitsWhen[] | cdktf.IResolvable;
}

export function dataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecLimitsToTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.counters),
    rates: cdktf.listMapper(dataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecLimitsRatesToTerraform, false)(struct!.rates),
    when: cdktf.listMapper(dataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecLimitsWhenToTerraform, false)(struct!.when),
  }
}


export function dataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecLimitsToHclTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.counters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    rates: {
      value: cdktf.listMapperHcl(dataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecLimitsRatesToHclTerraform, false)(struct!.rates),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecLimitsRatesList",
    },
    when: {
      value: cdktf.listMapperHcl(dataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecLimitsWhenToHclTerraform, false)(struct!.when),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecLimitsWhenList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters = this._counters;
    }
    if (this._rates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rates = this._rates?.internalValue;
    }
    if (this._when?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.when = this._when?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters = undefined;
      this._rates.internalValue = undefined;
      this._when.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters = value.counters;
      this._rates.internalValue = value.rates;
      this._when.internalValue = value.when;
    }
  }

  // counters - computed: false, optional: true, required: false
  private _counters?: string[]; 
  public get counters() {
    return this.getListAttribute('counters');
  }
  public set counters(value: string[]) {
    this._counters = value;
  }
  public resetCounters() {
    this._counters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countersInput() {
    return this._counters;
  }

  // rates - computed: false, optional: true, required: false
  private _rates = new DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecLimitsRatesList(this, "rates", false);
  public get rates() {
    return this._rates;
  }
  public putRates(value: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecLimitsRates[] | cdktf.IResolvable) {
    this._rates.internalValue = value;
  }
  public resetRates() {
    this._rates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratesInput() {
    return this._rates.internalValue;
  }

  // when - computed: false, optional: true, required: false
  private _when = new DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecLimitsWhenList(this, "when", false);
  public get when() {
    return this._when;
  }
  public putWhen(value: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecLimitsWhen[] | cdktf.IResolvable) {
    this._when.internalValue = value;
  }
  public resetWhen() {
    this._when.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenInput() {
    return this._when.internalValue;
  }
}
export interface DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverridesLimitsRates {
  /**
  * Duration defines the time period for which the Limit specified above applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta3_manifest#duration DataK8SKuadrantIoRateLimitPolicyV1Beta3Manifest#duration}
  */
  readonly duration: number;
  /**
  * Limit defines the max value allowed for a given period of time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta3_manifest#limit DataK8SKuadrantIoRateLimitPolicyV1Beta3Manifest#limit}
  */
  readonly limit: number;
  /**
  * Duration defines the time uni Possible values are: 'second', 'minute', 'hour', 'day'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta3_manifest#unit DataK8SKuadrantIoRateLimitPolicyV1Beta3Manifest#unit}
  */
  readonly unit: string;
}

export function dataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverridesLimitsRatesToTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverridesLimitsRates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    limit: cdktf.numberToTerraform(struct!.limit),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function dataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverridesLimitsRatesToHclTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverridesLimitsRates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverridesLimitsRatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverridesLimitsRates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverridesLimitsRates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._limit = undefined;
      this._unit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
      this._limit = value.limit;
      this._unit = value.unit;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // limit - computed: false, optional: false, required: true
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}

export class DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverridesLimitsRatesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverridesLimitsRates[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverridesLimitsRatesOutputReference {
    return new DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverridesLimitsRatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverridesLimitsWhen {
  /**
  * The binary operator to be applied to the content fetched from the selector Possible values are: 'eq' (equal to), 'neq' (not equal to)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta3_manifest#operator DataK8SKuadrantIoRateLimitPolicyV1Beta3Manifest#operator}
  */
  readonly operator: string;
  /**
  * Selector defines one item from the well known selectors TODO Document properly 'Well-known selector' https://github.com/Kuadrant/architecture/blob/main/rfcs/0001-rlp-v2.md#well-known-selectors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta3_manifest#selector DataK8SKuadrantIoRateLimitPolicyV1Beta3Manifest#selector}
  */
  readonly selector: string;
  /**
  * The value of reference for the comparison.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta3_manifest#value DataK8SKuadrantIoRateLimitPolicyV1Beta3Manifest#value}
  */
  readonly value: string;
}

export function dataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverridesLimitsWhenToTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverridesLimitsWhen | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    selector: cdktf.stringToTerraform(struct!.selector),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverridesLimitsWhenToHclTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverridesLimitsWhen | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
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

export class DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverridesLimitsWhenOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverridesLimitsWhen | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverridesLimitsWhen | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._selector = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._selector = value.selector;
      this._value = value.value;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // selector - computed: false, optional: false, required: true
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverridesLimitsWhenList extends cdktf.ComplexList {
  public internalValue? : DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverridesLimitsWhen[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverridesLimitsWhenOutputReference {
    return new DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverridesLimitsWhenOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverridesLimits {
  /**
  * Counters defines additional rate limit counters based on context qualifiers and well known selectors TODO Document properly 'Well-known selector' https://github.com/Kuadrant/architecture/blob/main/rfcs/0001-rlp-v2.md#well-known-selectors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta3_manifest#counters DataK8SKuadrantIoRateLimitPolicyV1Beta3Manifest#counters}
  */
  readonly counters?: string[];
  /**
  * Rates holds the list of limit rates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta3_manifest#rates DataK8SKuadrantIoRateLimitPolicyV1Beta3Manifest#rates}
  */
  readonly rates?: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverridesLimitsRates[] | cdktf.IResolvable;
  /**
  * When holds the list of conditions for the policy to be enforced. Called also 'soft' conditions as route selectors must also match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta3_manifest#when DataK8SKuadrantIoRateLimitPolicyV1Beta3Manifest#when}
  */
  readonly when?: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverridesLimitsWhen[] | cdktf.IResolvable;
}

export function dataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverridesLimitsToTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverridesLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.counters),
    rates: cdktf.listMapper(dataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverridesLimitsRatesToTerraform, false)(struct!.rates),
    when: cdktf.listMapper(dataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverridesLimitsWhenToTerraform, false)(struct!.when),
  }
}


export function dataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverridesLimitsToHclTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverridesLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.counters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    rates: {
      value: cdktf.listMapperHcl(dataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverridesLimitsRatesToHclTerraform, false)(struct!.rates),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverridesLimitsRatesList",
    },
    when: {
      value: cdktf.listMapperHcl(dataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverridesLimitsWhenToHclTerraform, false)(struct!.when),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverridesLimitsWhenList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverridesLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverridesLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters = this._counters;
    }
    if (this._rates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rates = this._rates?.internalValue;
    }
    if (this._when?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.when = this._when?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverridesLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters = undefined;
      this._rates.internalValue = undefined;
      this._when.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters = value.counters;
      this._rates.internalValue = value.rates;
      this._when.internalValue = value.when;
    }
  }

  // counters - computed: false, optional: true, required: false
  private _counters?: string[]; 
  public get counters() {
    return this.getListAttribute('counters');
  }
  public set counters(value: string[]) {
    this._counters = value;
  }
  public resetCounters() {
    this._counters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countersInput() {
    return this._counters;
  }

  // rates - computed: false, optional: true, required: false
  private _rates = new DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverridesLimitsRatesList(this, "rates", false);
  public get rates() {
    return this._rates;
  }
  public putRates(value: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverridesLimitsRates[] | cdktf.IResolvable) {
    this._rates.internalValue = value;
  }
  public resetRates() {
    this._rates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratesInput() {
    return this._rates.internalValue;
  }

  // when - computed: false, optional: true, required: false
  private _when = new DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverridesLimitsWhenList(this, "when", false);
  public get when() {
    return this._when;
  }
  public putWhen(value: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverridesLimitsWhen[] | cdktf.IResolvable) {
    this._when.internalValue = value;
  }
  public resetWhen() {
    this._when.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenInput() {
    return this._when.internalValue;
  }
}
export interface DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverrides {
  /**
  * Limits holds the struct of limits indexed by a unique name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta3_manifest#limits DataK8SKuadrantIoRateLimitPolicyV1Beta3Manifest#limits}
  */
  readonly limits?: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverridesLimits;
}

export function dataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverridesToTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: dataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverridesLimitsToTerraform(struct!.limits),
  }
}


export function dataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverridesToHclTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: dataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverridesLimitsToHclTerraform(struct!.limits),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverridesLimits",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limits.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limits.internalValue = value.limits;
    }
  }

  // limits - computed: false, optional: true, required: false
  private _limits = new DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverridesLimitsOutputReference(this, "limits");
  public get limits() {
    return this._limits;
  }
  public putLimits(value: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverridesLimits) {
    this._limits.internalValue = value;
  }
  public resetLimits() {
    this._limits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits.internalValue;
  }
}
export interface DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecTargetRef {
  /**
  * Group is the group of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta3_manifest#group DataK8SKuadrantIoRateLimitPolicyV1Beta3Manifest#group}
  */
  readonly group: string;
  /**
  * Kind is kind of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta3_manifest#kind DataK8SKuadrantIoRateLimitPolicyV1Beta3Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta3_manifest#name DataK8SKuadrantIoRateLimitPolicyV1Beta3Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecTargetRefToTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecTargetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecTargetRefToHclTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecTargetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecTargetRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecTargetRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecTargetRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
}
export interface DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpec {
  /**
  * Defaults define explicit default values for this policy and for policies inheriting this policy. Defaults are mutually exclusive with implicit defaults defined by RateLimitPolicyCommonSpec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta3_manifest#defaults DataK8SKuadrantIoRateLimitPolicyV1Beta3Manifest#defaults}
  */
  readonly defaults?: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaults;
  /**
  * Limits holds the struct of limits indexed by a unique name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta3_manifest#limits DataK8SKuadrantIoRateLimitPolicyV1Beta3Manifest#limits}
  */
  readonly limits?: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecLimits;
  /**
  * Overrides define override values for this policy and for policies inheriting this policy. Overrides are mutually exclusive with implicit defaults and explicit Defaults defined by RateLimitPolicyCommonSpec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta3_manifest#overrides DataK8SKuadrantIoRateLimitPolicyV1Beta3Manifest#overrides}
  */
  readonly overrides?: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverrides;
  /**
  * TargetRef identifies an API object to apply policy to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta3_manifest#target_ref DataK8SKuadrantIoRateLimitPolicyV1Beta3Manifest#target_ref}
  */
  readonly targetRef: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecTargetRef;
}

export function dataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecToTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    defaults: dataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaultsToTerraform(struct!.defaults),
    limits: dataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecLimitsToTerraform(struct!.limits),
    overrides: dataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverridesToTerraform(struct!.overrides),
    target_ref: dataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecTargetRefToTerraform(struct!.targetRef),
  }
}


export function dataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecToHclTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    defaults: {
      value: dataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaultsToHclTerraform(struct!.defaults),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaults",
    },
    limits: {
      value: dataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecLimitsToHclTerraform(struct!.limits),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecLimits",
    },
    overrides: {
      value: dataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverridesToHclTerraform(struct!.overrides),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverrides",
    },
    target_ref: {
      value: dataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecTargetRefToHclTerraform(struct!.targetRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecTargetRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaults?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaults = this._defaults?.internalValue;
    }
    if (this._limits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits?.internalValue;
    }
    if (this._overrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrides = this._overrides?.internalValue;
    }
    if (this._targetRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRef = this._targetRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaults.internalValue = undefined;
      this._limits.internalValue = undefined;
      this._overrides.internalValue = undefined;
      this._targetRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaults.internalValue = value.defaults;
      this._limits.internalValue = value.limits;
      this._overrides.internalValue = value.overrides;
      this._targetRef.internalValue = value.targetRef;
    }
  }

  // defaults - computed: false, optional: true, required: false
  private _defaults = new DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaultsOutputReference(this, "defaults");
  public get defaults() {
    return this._defaults;
  }
  public putDefaults(value: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecDefaults) {
    this._defaults.internalValue = value;
  }
  public resetDefaults() {
    this._defaults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultsInput() {
    return this._defaults.internalValue;
  }

  // limits - computed: false, optional: true, required: false
  private _limits = new DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecLimitsOutputReference(this, "limits");
  public get limits() {
    return this._limits;
  }
  public putLimits(value: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecLimits) {
    this._limits.internalValue = value;
  }
  public resetLimits() {
    this._limits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits.internalValue;
  }

  // overrides - computed: false, optional: true, required: false
  private _overrides = new DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverridesOutputReference(this, "overrides");
  public get overrides() {
    return this._overrides;
  }
  public putOverrides(value: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOverrides) {
    this._overrides.internalValue = value;
  }
  public resetOverrides() {
    this._overrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridesInput() {
    return this._overrides.internalValue;
  }

  // target_ref - computed: false, optional: false, required: true
  private _targetRef = new DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecTargetRefOutputReference(this, "target_ref");
  public get targetRef() {
    return this._targetRef;
  }
  public putTargetRef(value: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecTargetRef) {
    this._targetRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRefInput() {
    return this._targetRef.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta3_manifest k8s_kuadrant_io_rate_limit_policy_v1beta3_manifest}
*/
export class DataK8SKuadrantIoRateLimitPolicyV1Beta3Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_kuadrant_io_rate_limit_policy_v1beta3_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SKuadrantIoRateLimitPolicyV1Beta3Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SKuadrantIoRateLimitPolicyV1Beta3Manifest to import
  * @param importFromId The id of the existing DataK8SKuadrantIoRateLimitPolicyV1Beta3Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta3_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SKuadrantIoRateLimitPolicyV1Beta3Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_kuadrant_io_rate_limit_policy_v1beta3_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta3_manifest k8s_kuadrant_io_rate_limit_policy_v1beta3_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_kuadrant_io_rate_limit_policy_v1beta3_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.17',
        providerVersionConstraint: '2025.11.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // yaml - computed: true, optional: false, required: false
  public get yaml() {
    return this.getStringAttribute('yaml');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: dataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestMetadata",
      },
      spec: {
        value: dataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKuadrantIoRateLimitPolicyV1Beta3ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
