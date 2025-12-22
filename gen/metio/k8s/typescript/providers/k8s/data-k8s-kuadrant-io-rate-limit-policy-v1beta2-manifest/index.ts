// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#metadata DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#metadata}
  */
  readonly metadata: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestMetadata;
  /**
  * RateLimitPolicySpec defines the desired state of RateLimitPolicy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#spec DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#spec}
  */
  readonly spec?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpec;
}
export interface DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#annotations DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#labels DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#name DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#namespace DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestMetadataToTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestMetadataToHclTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRates {
  /**
  * Duration defines the time period for which the Limit specified above applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#duration DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#duration}
  */
  readonly duration: number;
  /**
  * Limit defines the max value allowed for a given period of time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#limit DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#limit}
  */
  readonly limit: number;
  /**
  * Duration defines the time uni Possible values are: 'second', 'minute', 'hour', 'day'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#unit DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#unit}
  */
  readonly unit: string;
}

export function dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRatesToTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRates | cdktf.IResolvable): any {
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


export function dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRatesToHclTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRates | cdktf.IResolvable): any {
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

export class DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRates | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRates | cdktf.IResolvable | undefined) {
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

export class DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRatesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRates[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRatesOutputReference {
    return new DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesHeaders {
  /**
  * Name is the name of the HTTP Header to be matched. Name matching MUST be case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2). If multiple entries specify equivalent header names, only the first entry with an equivalent name MUST be considered for a match. Subsequent entries with an equivalent header name MUST be ignored. Due to the case-insensitivity of header names, 'foo' and 'Foo' are considered equivalent. When a header is repeated in an HTTP request, it is implementation-specific behavior as to how this is represented. Generally, proxies should follow the guidance from the RFC: https://www.rfc-editor.org/rfc/rfc7230.html#section-3.2.2 regarding processing a repeated header, with special handling for 'Set-Cookie'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#name DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Type specifies how to match against the value of the header. Support: Core (Exact) Support: Implementation-specific (RegularExpression) Since RegularExpression HeaderMatchType has implementation-specific conformance, implementations can support POSIX, PCRE or any other dialects of regular expressions. Please read the implementation's documentation to determine the supported dialect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#type DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#type}
  */
  readonly type?: string;
  /**
  * Value is the value of HTTP Header to be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#value DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#value}
  */
  readonly value: string;
}

export function dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesHeadersToTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesHeadersToHclTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesHeaders | cdktf.IResolvable): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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

export class DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
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
      this._type = value.type;
      this._value = value.value;
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

  // type - computed: false, optional: true, required: false
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

export class DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesHeadersOutputReference {
    return new DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesPath {
  /**
  * Type specifies how to match against the path Value. Support: Core (Exact, PathPrefix) Support: Implementation-specific (RegularExpression)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#type DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#type}
  */
  readonly type?: string;
  /**
  * Value of the HTTP path to match against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#value DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesPathToTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesPathToHclTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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

export class DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // type - computed: false, optional: true, required: false
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

  // value - computed: false, optional: true, required: false
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
export interface DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesQueryParams {
  /**
  * Name is the name of the HTTP query param to be matched. This must be an exact string match. (See https://tools.ietf.org/html/rfc7230#section-2.7.3). If multiple entries specify equivalent query param names, only the first entry with an equivalent name MUST be considered for a match. Subsequent entries with an equivalent query param name MUST be ignored. If a query param is repeated in an HTTP request, the behavior is purposely left undefined, since different data planes have different capabilities. However, it is *recommended* that implementations should match against the first value of the param if the data plane supports it, as this behavior is expected in other load balancing contexts outside of the Gateway API. Users SHOULD NOT route traffic based on repeated query params to guard themselves against potential differences in the implementations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#name DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Type specifies how to match against the value of the query parameter. Support: Extended (Exact) Support: Implementation-specific (RegularExpression) Since RegularExpression QueryParamMatchType has Implementation-specific conformance, implementations can support POSIX, PCRE or any other dialects of regular expressions. Please read the implementation's documentation to determine the supported dialect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#type DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#type}
  */
  readonly type?: string;
  /**
  * Value is the value of HTTP query param to be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#value DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#value}
  */
  readonly value: string;
}

export function dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesQueryParamsToTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesQueryParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesQueryParamsToHclTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesQueryParams | cdktf.IResolvable): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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

export class DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesQueryParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesQueryParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesQueryParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
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
      this._type = value.type;
      this._value = value.value;
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

  // type - computed: false, optional: true, required: false
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

export class DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesQueryParamsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesQueryParams[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesQueryParamsOutputReference {
    return new DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesQueryParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatches {
  /**
  * Headers specifies HTTP request header matchers. Multiple match values are ANDed together, meaning, a request must match all the specified headers to select the route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#headers DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#headers}
  */
  readonly headers?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesHeaders[] | cdktf.IResolvable;
  /**
  * Method specifies HTTP method matcher. When specified, this route will be matched only if the request has the specified method. Support: Extended
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#method DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#method}
  */
  readonly method?: string;
  /**
  * Path specifies a HTTP request path matcher. If this field is not specified, a default prefix match on the '/' path is provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#path DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#path}
  */
  readonly path?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesPath;
  /**
  * QueryParams specifies HTTP query parameter matchers. Multiple match values are ANDed together, meaning, a request must match all the specified query parameters to select the route. Support: Extended
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#query_params DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#query_params}
  */
  readonly queryParams?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesQueryParams[] | cdktf.IResolvable;
}

export function dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesToTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.listMapper(dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesHeadersToTerraform, false)(struct!.headers),
    method: cdktf.stringToTerraform(struct!.method),
    path: dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesPathToTerraform(struct!.path),
    query_params: cdktf.listMapper(dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesQueryParamsToTerraform, false)(struct!.queryParams),
  }
}


export function dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesToHclTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktf.listMapperHcl(dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesHeadersToHclTerraform, false)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesHeadersList",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesPathToHclTerraform(struct!.path),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesPath",
    },
    query_params: {
      value: cdktf.listMapperHcl(dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesQueryParamsToHclTerraform, false)(struct!.queryParams),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesQueryParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    if (this._queryParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParams = this._queryParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headers.internalValue = undefined;
      this._method = undefined;
      this._path.internalValue = undefined;
      this._queryParams.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headers.internalValue = value.headers;
      this._method = value.method;
      this._path.internalValue = value.path;
      this._queryParams.internalValue = value.queryParams;
    }
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // path - computed: false, optional: true, required: false
  private _path = new DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesPath) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }

  // query_params - computed: false, optional: true, required: false
  private _queryParams = new DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesQueryParamsList(this, "query_params", false);
  public get queryParams() {
    return this._queryParams;
  }
  public putQueryParams(value: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesQueryParams[] | cdktf.IResolvable) {
    this._queryParams.internalValue = value;
  }
  public resetQueryParams() {
    this._queryParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamsInput() {
    return this._queryParams.internalValue;
  }
}

export class DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatches[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesOutputReference {
    return new DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectors {
  /**
  * Hostnames defines a set of hostname that should match against the HTTP Host header to select a HTTPRoute to process the request https://gateway-api.sigs.k8s.io/reference/spec/#gateway.networking.k8s.io/v1.HTTPRouteSpec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#hostnames DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#hostnames}
  */
  readonly hostnames?: string[];
  /**
  * Matches define conditions used for matching the rule against incoming HTTP requests. https://gateway-api.sigs.k8s.io/reference/spec/#gateway.networking.k8s.io/v1.HTTPRouteSpec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#matches DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#matches}
  */
  readonly matches?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatches[] | cdktf.IResolvable;
}

export function dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsToTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostnames: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hostnames),
    matches: cdktf.listMapper(dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesToTerraform, false)(struct!.matches),
  }
}


export function dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsToHclTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostnames: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hostnames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    matches: {
      value: cdktf.listMapperHcl(dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesToHclTerraform, false)(struct!.matches),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostnames !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnames = this._hostnames;
    }
    if (this._matches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matches = this._matches?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostnames = undefined;
      this._matches.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostnames = value.hostnames;
      this._matches.internalValue = value.matches;
    }
  }

  // hostnames - computed: false, optional: true, required: false
  private _hostnames?: string[]; 
  public get hostnames() {
    return this.getListAttribute('hostnames');
  }
  public set hostnames(value: string[]) {
    this._hostnames = value;
  }
  public resetHostnames() {
    this._hostnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnamesInput() {
    return this._hostnames;
  }

  // matches - computed: false, optional: true, required: false
  private _matches = new DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatchesList(this, "matches", false);
  public get matches() {
    return this._matches;
  }
  public putMatches(value: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsMatches[] | cdktf.IResolvable) {
    this._matches.internalValue = value;
  }
  public resetMatches() {
    this._matches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchesInput() {
    return this._matches.internalValue;
  }
}

export class DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectors[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsOutputReference {
    return new DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsWhen {
  /**
  * The binary operator to be applied to the content fetched from the selector Possible values are: 'eq' (equal to), 'neq' (not equal to)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#operator DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#operator}
  */
  readonly operator: string;
  /**
  * Selector defines one item from the well known selectors TODO Document properly 'Well-known selector' https://github.com/Kuadrant/architecture/blob/main/rfcs/0001-rlp-v2.md#well-known-selectors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#selector DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#selector}
  */
  readonly selector: string;
  /**
  * The value of reference for the comparison.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#value DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#value}
  */
  readonly value: string;
}

export function dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsWhenToTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsWhen | cdktf.IResolvable): any {
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


export function dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsWhenToHclTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsWhen | cdktf.IResolvable): any {
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

export class DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsWhenOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsWhen | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsWhen | cdktf.IResolvable | undefined) {
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

export class DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsWhenList extends cdktf.ComplexList {
  public internalValue? : DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsWhen[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsWhenOutputReference {
    return new DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsWhenOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimits {
  /**
  * Counters defines additional rate limit counters based on context qualifiers and well known selectors TODO Document properly 'Well-known selector' https://github.com/Kuadrant/architecture/blob/main/rfcs/0001-rlp-v2.md#well-known-selectors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#counters DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#counters}
  */
  readonly counters?: string[];
  /**
  * Rates holds the list of limit rates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#rates DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#rates}
  */
  readonly rates?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRates[] | cdktf.IResolvable;
  /**
  * RouteSelectors defines semantics for matching an HTTP request based on conditions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#route_selectors DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#route_selectors}
  */
  readonly routeSelectors?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectors[] | cdktf.IResolvable;
  /**
  * When holds the list of conditions for the policy to be enforced. Called also 'soft' conditions as route selectors must also match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#when DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#when}
  */
  readonly when?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsWhen[] | cdktf.IResolvable;
}

export function dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsToTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.counters),
    rates: cdktf.listMapper(dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRatesToTerraform, false)(struct!.rates),
    route_selectors: cdktf.listMapper(dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsToTerraform, false)(struct!.routeSelectors),
    when: cdktf.listMapper(dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsWhenToTerraform, false)(struct!.when),
  }
}


export function dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsToHclTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimits | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRatesToHclTerraform, false)(struct!.rates),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRatesList",
    },
    route_selectors: {
      value: cdktf.listMapperHcl(dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsToHclTerraform, false)(struct!.routeSelectors),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsList",
    },
    when: {
      value: cdktf.listMapperHcl(dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsWhenToHclTerraform, false)(struct!.when),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsWhenList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimits | cdktf.IResolvable | undefined {
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
    if (this._routeSelectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeSelectors = this._routeSelectors?.internalValue;
    }
    if (this._when?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.when = this._when?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters = undefined;
      this._rates.internalValue = undefined;
      this._routeSelectors.internalValue = undefined;
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
      this._routeSelectors.internalValue = value.routeSelectors;
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
  private _rates = new DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRatesList(this, "rates", false);
  public get rates() {
    return this._rates;
  }
  public putRates(value: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRates[] | cdktf.IResolvable) {
    this._rates.internalValue = value;
  }
  public resetRates() {
    this._rates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratesInput() {
    return this._rates.internalValue;
  }

  // route_selectors - computed: false, optional: true, required: false
  private _routeSelectors = new DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectorsList(this, "route_selectors", false);
  public get routeSelectors() {
    return this._routeSelectors;
  }
  public putRouteSelectors(value: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsRouteSelectors[] | cdktf.IResolvable) {
    this._routeSelectors.internalValue = value;
  }
  public resetRouteSelectors() {
    this._routeSelectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeSelectorsInput() {
    return this._routeSelectors.internalValue;
  }

  // when - computed: false, optional: true, required: false
  private _when = new DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsWhenList(this, "when", false);
  public get when() {
    return this._when;
  }
  public putWhen(value: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsWhen[] | cdktf.IResolvable) {
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
export interface DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaults {
  /**
  * Limits holds the struct of limits indexed by a unique name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#limits DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#limits}
  */
  readonly limits?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimits;
}

export function dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsToTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaults | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsToTerraform(struct!.limits),
  }
}


export function dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsToHclTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaults | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsToHclTerraform(struct!.limits),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimits",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaults | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaults | cdktf.IResolvable | undefined) {
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
  private _limits = new DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimitsOutputReference(this, "limits");
  public get limits() {
    return this._limits;
  }
  public putLimits(value: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsLimits) {
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
export interface DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRates {
  /**
  * Duration defines the time period for which the Limit specified above applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#duration DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#duration}
  */
  readonly duration: number;
  /**
  * Limit defines the max value allowed for a given period of time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#limit DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#limit}
  */
  readonly limit: number;
  /**
  * Duration defines the time uni Possible values are: 'second', 'minute', 'hour', 'day'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#unit DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#unit}
  */
  readonly unit: string;
}

export function dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRatesToTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRates | cdktf.IResolvable): any {
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


export function dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRatesToHclTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRates | cdktf.IResolvable): any {
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

export class DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRates | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRates | cdktf.IResolvable | undefined) {
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

export class DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRatesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRates[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRatesOutputReference {
    return new DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesHeaders {
  /**
  * Name is the name of the HTTP Header to be matched. Name matching MUST be case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2). If multiple entries specify equivalent header names, only the first entry with an equivalent name MUST be considered for a match. Subsequent entries with an equivalent header name MUST be ignored. Due to the case-insensitivity of header names, 'foo' and 'Foo' are considered equivalent. When a header is repeated in an HTTP request, it is implementation-specific behavior as to how this is represented. Generally, proxies should follow the guidance from the RFC: https://www.rfc-editor.org/rfc/rfc7230.html#section-3.2.2 regarding processing a repeated header, with special handling for 'Set-Cookie'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#name DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Type specifies how to match against the value of the header. Support: Core (Exact) Support: Implementation-specific (RegularExpression) Since RegularExpression HeaderMatchType has implementation-specific conformance, implementations can support POSIX, PCRE or any other dialects of regular expressions. Please read the implementation's documentation to determine the supported dialect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#type DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#type}
  */
  readonly type?: string;
  /**
  * Value is the value of HTTP Header to be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#value DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#value}
  */
  readonly value: string;
}

export function dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesHeadersToTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesHeadersToHclTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesHeaders | cdktf.IResolvable): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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

export class DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
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
      this._type = value.type;
      this._value = value.value;
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

  // type - computed: false, optional: true, required: false
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

export class DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesHeadersOutputReference {
    return new DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesPath {
  /**
  * Type specifies how to match against the path Value. Support: Core (Exact, PathPrefix) Support: Implementation-specific (RegularExpression)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#type DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#type}
  */
  readonly type?: string;
  /**
  * Value of the HTTP path to match against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#value DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesPathToTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesPathToHclTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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

export class DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // type - computed: false, optional: true, required: false
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

  // value - computed: false, optional: true, required: false
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
export interface DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesQueryParams {
  /**
  * Name is the name of the HTTP query param to be matched. This must be an exact string match. (See https://tools.ietf.org/html/rfc7230#section-2.7.3). If multiple entries specify equivalent query param names, only the first entry with an equivalent name MUST be considered for a match. Subsequent entries with an equivalent query param name MUST be ignored. If a query param is repeated in an HTTP request, the behavior is purposely left undefined, since different data planes have different capabilities. However, it is *recommended* that implementations should match against the first value of the param if the data plane supports it, as this behavior is expected in other load balancing contexts outside of the Gateway API. Users SHOULD NOT route traffic based on repeated query params to guard themselves against potential differences in the implementations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#name DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Type specifies how to match against the value of the query parameter. Support: Extended (Exact) Support: Implementation-specific (RegularExpression) Since RegularExpression QueryParamMatchType has Implementation-specific conformance, implementations can support POSIX, PCRE or any other dialects of regular expressions. Please read the implementation's documentation to determine the supported dialect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#type DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#type}
  */
  readonly type?: string;
  /**
  * Value is the value of HTTP query param to be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#value DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#value}
  */
  readonly value: string;
}

export function dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesQueryParamsToTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesQueryParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesQueryParamsToHclTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesQueryParams | cdktf.IResolvable): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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

export class DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesQueryParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesQueryParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesQueryParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
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
      this._type = value.type;
      this._value = value.value;
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

  // type - computed: false, optional: true, required: false
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

export class DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesQueryParamsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesQueryParams[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesQueryParamsOutputReference {
    return new DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesQueryParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatches {
  /**
  * Headers specifies HTTP request header matchers. Multiple match values are ANDed together, meaning, a request must match all the specified headers to select the route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#headers DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#headers}
  */
  readonly headers?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesHeaders[] | cdktf.IResolvable;
  /**
  * Method specifies HTTP method matcher. When specified, this route will be matched only if the request has the specified method. Support: Extended
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#method DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#method}
  */
  readonly method?: string;
  /**
  * Path specifies a HTTP request path matcher. If this field is not specified, a default prefix match on the '/' path is provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#path DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#path}
  */
  readonly path?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesPath;
  /**
  * QueryParams specifies HTTP query parameter matchers. Multiple match values are ANDed together, meaning, a request must match all the specified query parameters to select the route. Support: Extended
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#query_params DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#query_params}
  */
  readonly queryParams?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesQueryParams[] | cdktf.IResolvable;
}

export function dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesToTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.listMapper(dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesHeadersToTerraform, false)(struct!.headers),
    method: cdktf.stringToTerraform(struct!.method),
    path: dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesPathToTerraform(struct!.path),
    query_params: cdktf.listMapper(dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesQueryParamsToTerraform, false)(struct!.queryParams),
  }
}


export function dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesToHclTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktf.listMapperHcl(dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesHeadersToHclTerraform, false)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesHeadersList",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesPathToHclTerraform(struct!.path),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesPath",
    },
    query_params: {
      value: cdktf.listMapperHcl(dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesQueryParamsToHclTerraform, false)(struct!.queryParams),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesQueryParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    if (this._queryParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParams = this._queryParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headers.internalValue = undefined;
      this._method = undefined;
      this._path.internalValue = undefined;
      this._queryParams.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headers.internalValue = value.headers;
      this._method = value.method;
      this._path.internalValue = value.path;
      this._queryParams.internalValue = value.queryParams;
    }
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // path - computed: false, optional: true, required: false
  private _path = new DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesPath) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }

  // query_params - computed: false, optional: true, required: false
  private _queryParams = new DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesQueryParamsList(this, "query_params", false);
  public get queryParams() {
    return this._queryParams;
  }
  public putQueryParams(value: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesQueryParams[] | cdktf.IResolvable) {
    this._queryParams.internalValue = value;
  }
  public resetQueryParams() {
    this._queryParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamsInput() {
    return this._queryParams.internalValue;
  }
}

export class DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatches[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesOutputReference {
    return new DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectors {
  /**
  * Hostnames defines a set of hostname that should match against the HTTP Host header to select a HTTPRoute to process the request https://gateway-api.sigs.k8s.io/reference/spec/#gateway.networking.k8s.io/v1.HTTPRouteSpec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#hostnames DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#hostnames}
  */
  readonly hostnames?: string[];
  /**
  * Matches define conditions used for matching the rule against incoming HTTP requests. https://gateway-api.sigs.k8s.io/reference/spec/#gateway.networking.k8s.io/v1.HTTPRouteSpec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#matches DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#matches}
  */
  readonly matches?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatches[] | cdktf.IResolvable;
}

export function dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsToTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostnames: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hostnames),
    matches: cdktf.listMapper(dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesToTerraform, false)(struct!.matches),
  }
}


export function dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsToHclTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostnames: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hostnames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    matches: {
      value: cdktf.listMapperHcl(dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesToHclTerraform, false)(struct!.matches),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostnames !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnames = this._hostnames;
    }
    if (this._matches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matches = this._matches?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostnames = undefined;
      this._matches.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostnames = value.hostnames;
      this._matches.internalValue = value.matches;
    }
  }

  // hostnames - computed: false, optional: true, required: false
  private _hostnames?: string[]; 
  public get hostnames() {
    return this.getListAttribute('hostnames');
  }
  public set hostnames(value: string[]) {
    this._hostnames = value;
  }
  public resetHostnames() {
    this._hostnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnamesInput() {
    return this._hostnames;
  }

  // matches - computed: false, optional: true, required: false
  private _matches = new DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatchesList(this, "matches", false);
  public get matches() {
    return this._matches;
  }
  public putMatches(value: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsMatches[] | cdktf.IResolvable) {
    this._matches.internalValue = value;
  }
  public resetMatches() {
    this._matches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchesInput() {
    return this._matches.internalValue;
  }
}

export class DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectors[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsOutputReference {
    return new DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsWhen {
  /**
  * The binary operator to be applied to the content fetched from the selector Possible values are: 'eq' (equal to), 'neq' (not equal to)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#operator DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#operator}
  */
  readonly operator: string;
  /**
  * Selector defines one item from the well known selectors TODO Document properly 'Well-known selector' https://github.com/Kuadrant/architecture/blob/main/rfcs/0001-rlp-v2.md#well-known-selectors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#selector DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#selector}
  */
  readonly selector: string;
  /**
  * The value of reference for the comparison.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#value DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#value}
  */
  readonly value: string;
}

export function dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsWhenToTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsWhen | cdktf.IResolvable): any {
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


export function dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsWhenToHclTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsWhen | cdktf.IResolvable): any {
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

export class DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsWhenOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsWhen | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsWhen | cdktf.IResolvable | undefined) {
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

export class DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsWhenList extends cdktf.ComplexList {
  public internalValue? : DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsWhen[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsWhenOutputReference {
    return new DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsWhenOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimits {
  /**
  * Counters defines additional rate limit counters based on context qualifiers and well known selectors TODO Document properly 'Well-known selector' https://github.com/Kuadrant/architecture/blob/main/rfcs/0001-rlp-v2.md#well-known-selectors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#counters DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#counters}
  */
  readonly counters?: string[];
  /**
  * Rates holds the list of limit rates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#rates DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#rates}
  */
  readonly rates?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRates[] | cdktf.IResolvable;
  /**
  * RouteSelectors defines semantics for matching an HTTP request based on conditions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#route_selectors DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#route_selectors}
  */
  readonly routeSelectors?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectors[] | cdktf.IResolvable;
  /**
  * When holds the list of conditions for the policy to be enforced. Called also 'soft' conditions as route selectors must also match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#when DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#when}
  */
  readonly when?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsWhen[] | cdktf.IResolvable;
}

export function dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsToTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.counters),
    rates: cdktf.listMapper(dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRatesToTerraform, false)(struct!.rates),
    route_selectors: cdktf.listMapper(dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsToTerraform, false)(struct!.routeSelectors),
    when: cdktf.listMapper(dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsWhenToTerraform, false)(struct!.when),
  }
}


export function dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsToHclTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimits | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRatesToHclTerraform, false)(struct!.rates),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRatesList",
    },
    route_selectors: {
      value: cdktf.listMapperHcl(dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsToHclTerraform, false)(struct!.routeSelectors),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsList",
    },
    when: {
      value: cdktf.listMapperHcl(dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsWhenToHclTerraform, false)(struct!.when),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsWhenList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimits | cdktf.IResolvable | undefined {
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
    if (this._routeSelectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeSelectors = this._routeSelectors?.internalValue;
    }
    if (this._when?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.when = this._when?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters = undefined;
      this._rates.internalValue = undefined;
      this._routeSelectors.internalValue = undefined;
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
      this._routeSelectors.internalValue = value.routeSelectors;
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
  private _rates = new DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRatesList(this, "rates", false);
  public get rates() {
    return this._rates;
  }
  public putRates(value: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRates[] | cdktf.IResolvable) {
    this._rates.internalValue = value;
  }
  public resetRates() {
    this._rates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratesInput() {
    return this._rates.internalValue;
  }

  // route_selectors - computed: false, optional: true, required: false
  private _routeSelectors = new DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectorsList(this, "route_selectors", false);
  public get routeSelectors() {
    return this._routeSelectors;
  }
  public putRouteSelectors(value: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsRouteSelectors[] | cdktf.IResolvable) {
    this._routeSelectors.internalValue = value;
  }
  public resetRouteSelectors() {
    this._routeSelectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeSelectorsInput() {
    return this._routeSelectors.internalValue;
  }

  // when - computed: false, optional: true, required: false
  private _when = new DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsWhenList(this, "when", false);
  public get when() {
    return this._when;
  }
  public putWhen(value: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsWhen[] | cdktf.IResolvable) {
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
export interface DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRates {
  /**
  * Duration defines the time period for which the Limit specified above applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#duration DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#duration}
  */
  readonly duration: number;
  /**
  * Limit defines the max value allowed for a given period of time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#limit DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#limit}
  */
  readonly limit: number;
  /**
  * Duration defines the time uni Possible values are: 'second', 'minute', 'hour', 'day'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#unit DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#unit}
  */
  readonly unit: string;
}

export function dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRatesToTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRates | cdktf.IResolvable): any {
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


export function dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRatesToHclTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRates | cdktf.IResolvable): any {
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

export class DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRates | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRates | cdktf.IResolvable | undefined) {
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

export class DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRatesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRates[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRatesOutputReference {
    return new DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesHeaders {
  /**
  * Name is the name of the HTTP Header to be matched. Name matching MUST be case insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2). If multiple entries specify equivalent header names, only the first entry with an equivalent name MUST be considered for a match. Subsequent entries with an equivalent header name MUST be ignored. Due to the case-insensitivity of header names, 'foo' and 'Foo' are considered equivalent. When a header is repeated in an HTTP request, it is implementation-specific behavior as to how this is represented. Generally, proxies should follow the guidance from the RFC: https://www.rfc-editor.org/rfc/rfc7230.html#section-3.2.2 regarding processing a repeated header, with special handling for 'Set-Cookie'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#name DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Type specifies how to match against the value of the header. Support: Core (Exact) Support: Implementation-specific (RegularExpression) Since RegularExpression HeaderMatchType has implementation-specific conformance, implementations can support POSIX, PCRE or any other dialects of regular expressions. Please read the implementation's documentation to determine the supported dialect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#type DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#type}
  */
  readonly type?: string;
  /**
  * Value is the value of HTTP Header to be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#value DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#value}
  */
  readonly value: string;
}

export function dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesHeadersToTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesHeadersToHclTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesHeaders | cdktf.IResolvable): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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

export class DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
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
      this._type = value.type;
      this._value = value.value;
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

  // type - computed: false, optional: true, required: false
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

export class DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesHeadersOutputReference {
    return new DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesPath {
  /**
  * Type specifies how to match against the path Value. Support: Core (Exact, PathPrefix) Support: Implementation-specific (RegularExpression)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#type DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#type}
  */
  readonly type?: string;
  /**
  * Value of the HTTP path to match against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#value DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesPathToTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesPathToHclTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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

export class DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // type - computed: false, optional: true, required: false
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

  // value - computed: false, optional: true, required: false
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
export interface DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesQueryParams {
  /**
  * Name is the name of the HTTP query param to be matched. This must be an exact string match. (See https://tools.ietf.org/html/rfc7230#section-2.7.3). If multiple entries specify equivalent query param names, only the first entry with an equivalent name MUST be considered for a match. Subsequent entries with an equivalent query param name MUST be ignored. If a query param is repeated in an HTTP request, the behavior is purposely left undefined, since different data planes have different capabilities. However, it is *recommended* that implementations should match against the first value of the param if the data plane supports it, as this behavior is expected in other load balancing contexts outside of the Gateway API. Users SHOULD NOT route traffic based on repeated query params to guard themselves against potential differences in the implementations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#name DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Type specifies how to match against the value of the query parameter. Support: Extended (Exact) Support: Implementation-specific (RegularExpression) Since RegularExpression QueryParamMatchType has Implementation-specific conformance, implementations can support POSIX, PCRE or any other dialects of regular expressions. Please read the implementation's documentation to determine the supported dialect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#type DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#type}
  */
  readonly type?: string;
  /**
  * Value is the value of HTTP query param to be matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#value DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#value}
  */
  readonly value: string;
}

export function dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesQueryParamsToTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesQueryParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesQueryParamsToHclTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesQueryParams | cdktf.IResolvable): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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

export class DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesQueryParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesQueryParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesQueryParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
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
      this._type = value.type;
      this._value = value.value;
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

  // type - computed: false, optional: true, required: false
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

export class DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesQueryParamsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesQueryParams[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesQueryParamsOutputReference {
    return new DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesQueryParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatches {
  /**
  * Headers specifies HTTP request header matchers. Multiple match values are ANDed together, meaning, a request must match all the specified headers to select the route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#headers DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#headers}
  */
  readonly headers?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesHeaders[] | cdktf.IResolvable;
  /**
  * Method specifies HTTP method matcher. When specified, this route will be matched only if the request has the specified method. Support: Extended
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#method DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#method}
  */
  readonly method?: string;
  /**
  * Path specifies a HTTP request path matcher. If this field is not specified, a default prefix match on the '/' path is provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#path DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#path}
  */
  readonly path?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesPath;
  /**
  * QueryParams specifies HTTP query parameter matchers. Multiple match values are ANDed together, meaning, a request must match all the specified query parameters to select the route. Support: Extended
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#query_params DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#query_params}
  */
  readonly queryParams?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesQueryParams[] | cdktf.IResolvable;
}

export function dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesToTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.listMapper(dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesHeadersToTerraform, false)(struct!.headers),
    method: cdktf.stringToTerraform(struct!.method),
    path: dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesPathToTerraform(struct!.path),
    query_params: cdktf.listMapper(dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesQueryParamsToTerraform, false)(struct!.queryParams),
  }
}


export function dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesToHclTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktf.listMapperHcl(dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesHeadersToHclTerraform, false)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesHeadersList",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesPathToHclTerraform(struct!.path),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesPath",
    },
    query_params: {
      value: cdktf.listMapperHcl(dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesQueryParamsToHclTerraform, false)(struct!.queryParams),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesQueryParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    if (this._queryParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParams = this._queryParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headers.internalValue = undefined;
      this._method = undefined;
      this._path.internalValue = undefined;
      this._queryParams.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headers.internalValue = value.headers;
      this._method = value.method;
      this._path.internalValue = value.path;
      this._queryParams.internalValue = value.queryParams;
    }
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // path - computed: false, optional: true, required: false
  private _path = new DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesPath) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }

  // query_params - computed: false, optional: true, required: false
  private _queryParams = new DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesQueryParamsList(this, "query_params", false);
  public get queryParams() {
    return this._queryParams;
  }
  public putQueryParams(value: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesQueryParams[] | cdktf.IResolvable) {
    this._queryParams.internalValue = value;
  }
  public resetQueryParams() {
    this._queryParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamsInput() {
    return this._queryParams.internalValue;
  }
}

export class DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesList extends cdktf.ComplexList {
  public internalValue? : DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatches[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesOutputReference {
    return new DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectors {
  /**
  * Hostnames defines a set of hostname that should match against the HTTP Host header to select a HTTPRoute to process the request https://gateway-api.sigs.k8s.io/reference/spec/#gateway.networking.k8s.io/v1.HTTPRouteSpec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#hostnames DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#hostnames}
  */
  readonly hostnames?: string[];
  /**
  * Matches define conditions used for matching the rule against incoming HTTP requests. https://gateway-api.sigs.k8s.io/reference/spec/#gateway.networking.k8s.io/v1.HTTPRouteSpec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#matches DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#matches}
  */
  readonly matches?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatches[] | cdktf.IResolvable;
}

export function dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsToTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostnames: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hostnames),
    matches: cdktf.listMapper(dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesToTerraform, false)(struct!.matches),
  }
}


export function dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsToHclTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostnames: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hostnames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    matches: {
      value: cdktf.listMapperHcl(dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesToHclTerraform, false)(struct!.matches),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostnames !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnames = this._hostnames;
    }
    if (this._matches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matches = this._matches?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostnames = undefined;
      this._matches.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostnames = value.hostnames;
      this._matches.internalValue = value.matches;
    }
  }

  // hostnames - computed: false, optional: true, required: false
  private _hostnames?: string[]; 
  public get hostnames() {
    return this.getListAttribute('hostnames');
  }
  public set hostnames(value: string[]) {
    this._hostnames = value;
  }
  public resetHostnames() {
    this._hostnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnamesInput() {
    return this._hostnames;
  }

  // matches - computed: false, optional: true, required: false
  private _matches = new DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatchesList(this, "matches", false);
  public get matches() {
    return this._matches;
  }
  public putMatches(value: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsMatches[] | cdktf.IResolvable) {
    this._matches.internalValue = value;
  }
  public resetMatches() {
    this._matches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchesInput() {
    return this._matches.internalValue;
  }
}

export class DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectors[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsOutputReference {
    return new DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsWhen {
  /**
  * The binary operator to be applied to the content fetched from the selector Possible values are: 'eq' (equal to), 'neq' (not equal to)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#operator DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#operator}
  */
  readonly operator: string;
  /**
  * Selector defines one item from the well known selectors TODO Document properly 'Well-known selector' https://github.com/Kuadrant/architecture/blob/main/rfcs/0001-rlp-v2.md#well-known-selectors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#selector DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#selector}
  */
  readonly selector: string;
  /**
  * The value of reference for the comparison.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#value DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#value}
  */
  readonly value: string;
}

export function dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsWhenToTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsWhen | cdktf.IResolvable): any {
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


export function dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsWhenToHclTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsWhen | cdktf.IResolvable): any {
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

export class DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsWhenOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsWhen | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsWhen | cdktf.IResolvable | undefined) {
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

export class DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsWhenList extends cdktf.ComplexList {
  public internalValue? : DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsWhen[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsWhenOutputReference {
    return new DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsWhenOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimits {
  /**
  * Counters defines additional rate limit counters based on context qualifiers and well known selectors TODO Document properly 'Well-known selector' https://github.com/Kuadrant/architecture/blob/main/rfcs/0001-rlp-v2.md#well-known-selectors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#counters DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#counters}
  */
  readonly counters?: string[];
  /**
  * Rates holds the list of limit rates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#rates DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#rates}
  */
  readonly rates?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRates[] | cdktf.IResolvable;
  /**
  * RouteSelectors defines semantics for matching an HTTP request based on conditions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#route_selectors DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#route_selectors}
  */
  readonly routeSelectors?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectors[] | cdktf.IResolvable;
  /**
  * When holds the list of conditions for the policy to be enforced. Called also 'soft' conditions as route selectors must also match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#when DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#when}
  */
  readonly when?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsWhen[] | cdktf.IResolvable;
}

export function dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsToTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.counters),
    rates: cdktf.listMapper(dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRatesToTerraform, false)(struct!.rates),
    route_selectors: cdktf.listMapper(dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsToTerraform, false)(struct!.routeSelectors),
    when: cdktf.listMapper(dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsWhenToTerraform, false)(struct!.when),
  }
}


export function dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsToHclTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimits | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRatesToHclTerraform, false)(struct!.rates),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRatesList",
    },
    route_selectors: {
      value: cdktf.listMapperHcl(dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsToHclTerraform, false)(struct!.routeSelectors),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsList",
    },
    when: {
      value: cdktf.listMapperHcl(dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsWhenToHclTerraform, false)(struct!.when),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsWhenList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimits | cdktf.IResolvable | undefined {
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
    if (this._routeSelectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeSelectors = this._routeSelectors?.internalValue;
    }
    if (this._when?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.when = this._when?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters = undefined;
      this._rates.internalValue = undefined;
      this._routeSelectors.internalValue = undefined;
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
      this._routeSelectors.internalValue = value.routeSelectors;
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
  private _rates = new DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRatesList(this, "rates", false);
  public get rates() {
    return this._rates;
  }
  public putRates(value: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRates[] | cdktf.IResolvable) {
    this._rates.internalValue = value;
  }
  public resetRates() {
    this._rates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratesInput() {
    return this._rates.internalValue;
  }

  // route_selectors - computed: false, optional: true, required: false
  private _routeSelectors = new DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectorsList(this, "route_selectors", false);
  public get routeSelectors() {
    return this._routeSelectors;
  }
  public putRouteSelectors(value: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsRouteSelectors[] | cdktf.IResolvable) {
    this._routeSelectors.internalValue = value;
  }
  public resetRouteSelectors() {
    this._routeSelectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeSelectorsInput() {
    return this._routeSelectors.internalValue;
  }

  // when - computed: false, optional: true, required: false
  private _when = new DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsWhenList(this, "when", false);
  public get when() {
    return this._when;
  }
  public putWhen(value: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsWhen[] | cdktf.IResolvable) {
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
export interface DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverrides {
  /**
  * Limits holds the struct of limits indexed by a unique name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#limits DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#limits}
  */
  readonly limits?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimits;
}

export function dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesToTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsToTerraform(struct!.limits),
  }
}


export function dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesToHclTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsToHclTerraform(struct!.limits),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimits",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverrides | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverrides | cdktf.IResolvable | undefined) {
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
  private _limits = new DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimitsOutputReference(this, "limits");
  public get limits() {
    return this._limits;
  }
  public putLimits(value: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesLimits) {
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
export interface DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecTargetRef {
  /**
  * Group is the group of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#group DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#group}
  */
  readonly group: string;
  /**
  * Kind is kind of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#kind DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#name DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecTargetRefToTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecTargetRef | cdktf.IResolvable): any {
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


export function dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecTargetRefToHclTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecTargetRef | cdktf.IResolvable): any {
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

export class DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecTargetRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecTargetRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecTargetRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpec {
  /**
  * Defaults define explicit default values for this policy and for policies inheriting this policy. Defaults are mutually exclusive with implicit defaults defined by RateLimitPolicyCommonSpec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#defaults DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#defaults}
  */
  readonly defaults?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaults;
  /**
  * Limits holds the struct of limits indexed by a unique name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#limits DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#limits}
  */
  readonly limits?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimits;
  /**
  * Overrides define override values for this policy and for policies inheriting this policy. Overrides are mutually exclusive with implicit defaults and explicit Defaults defined by RateLimitPolicyCommonSpec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#overrides DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#overrides}
  */
  readonly overrides?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverrides;
  /**
  * TargetRef identifies an API object to apply policy to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#target_ref DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest#target_ref}
  */
  readonly targetRef: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecTargetRef;
}

export function dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecToTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    defaults: dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsToTerraform(struct!.defaults),
    limits: dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsToTerraform(struct!.limits),
    overrides: dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesToTerraform(struct!.overrides),
    target_ref: dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecTargetRefToTerraform(struct!.targetRef),
  }
}


export function dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecToHclTerraform(struct?: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    defaults: {
      value: dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsToHclTerraform(struct!.defaults),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaults",
    },
    limits: {
      value: dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsToHclTerraform(struct!.limits),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimits",
    },
    overrides: {
      value: dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesToHclTerraform(struct!.overrides),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverrides",
    },
    target_ref: {
      value: dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecTargetRefToHclTerraform(struct!.targetRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecTargetRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpec | cdktf.IResolvable | undefined) {
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
  private _defaults = new DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaultsOutputReference(this, "defaults");
  public get defaults() {
    return this._defaults;
  }
  public putDefaults(value: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecDefaults) {
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
  private _limits = new DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimitsOutputReference(this, "limits");
  public get limits() {
    return this._limits;
  }
  public putLimits(value: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecLimits) {
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
  private _overrides = new DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverridesOutputReference(this, "overrides");
  public get overrides() {
    return this._overrides;
  }
  public putOverrides(value: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOverrides) {
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
  private _targetRef = new DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecTargetRefOutputReference(this, "target_ref");
  public get targetRef() {
    return this._targetRef;
  }
  public putTargetRef(value: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecTargetRef) {
    this._targetRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRefInput() {
    return this._targetRef.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest k8s_kuadrant_io_rate_limit_policy_v1beta2_manifest}
*/
export class DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_kuadrant_io_rate_limit_policy_v1beta2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest to import
  * @param importFromId The id of the existing DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SKuadrantIoRateLimitPolicyV1Beta2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_kuadrant_io_rate_limit_policy_v1beta2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/kuadrant_io_rate_limit_policy_v1beta2_manifest k8s_kuadrant_io_rate_limit_policy_v1beta2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_kuadrant_io_rate_limit_policy_v1beta2_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.22',
        providerVersionConstraint: '2025.12.22'
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
  private _metadata = new DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpec) {
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
      metadata: dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestMetadata",
      },
      spec: {
        value: dataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKuadrantIoRateLimitPolicyV1Beta2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
