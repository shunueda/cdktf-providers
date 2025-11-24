// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCapabilities3ScaleNetProductV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#metadata DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestMetadata;
  /**
  * ProductSpec defines the desired state of Product
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#spec DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpec;
}
export interface DataK8SCapabilities3ScaleNetProductV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#annotations DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#labels DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#name DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#namespace DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestMetadataToTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SCapabilities3ScaleNetProductV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetProductV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansLimitsMetricMethodRef {
  /**
  * BackendSystemName identifies uniquely the backend Backend reference must be used by the product
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#backend DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#backend}
  */
  readonly backend?: string;
  /**
  * SystemName identifies uniquely the metric or methods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#system_name DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#system_name}
  */
  readonly systemName: string;
}

export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansLimitsMetricMethodRefToTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansLimitsMetricMethodRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend: cdktf.stringToTerraform(struct!.backend),
    system_name: cdktf.stringToTerraform(struct!.systemName),
  }
}


export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansLimitsMetricMethodRefToHclTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansLimitsMetricMethodRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend: {
      value: cdktf.stringToHclTerraform(struct!.backend),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_name: {
      value: cdktf.stringToHclTerraform(struct!.systemName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansLimitsMetricMethodRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansLimitsMetricMethodRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backend !== undefined) {
      hasAnyValues = true;
      internalValueResult.backend = this._backend;
    }
    if (this._systemName !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemName = this._systemName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansLimitsMetricMethodRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backend = undefined;
      this._systemName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backend = value.backend;
      this._systemName = value.systemName;
    }
  }

  // backend - computed: false, optional: true, required: false
  private _backend?: string; 
  public get backend() {
    return this.getStringAttribute('backend');
  }
  public set backend(value: string) {
    this._backend = value;
  }
  public resetBackend() {
    this._backend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend;
  }

  // system_name - computed: false, optional: false, required: true
  private _systemName?: string; 
  public get systemName() {
    return this.getStringAttribute('system_name');
  }
  public set systemName(value: string) {
    this._systemName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get systemNameInput() {
    return this._systemName;
  }
}
export interface DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansLimits {
  /**
  * Metric or Method Reference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#metric_method_ref DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#metric_method_ref}
  */
  readonly metricMethodRef: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansLimitsMetricMethodRef;
  /**
  * Limit Period
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#period DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#period}
  */
  readonly period: string;
  /**
  * Limit Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#value DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#value}
  */
  readonly value: number;
}

export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansLimitsToTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_method_ref: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansLimitsMetricMethodRefToTerraform(struct!.metricMethodRef),
    period: cdktf.stringToTerraform(struct!.period),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansLimitsToHclTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_method_ref: {
      value: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansLimitsMetricMethodRefToHclTerraform(struct!.metricMethodRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansLimitsMetricMethodRef",
    },
    period: {
      value: cdktf.stringToHclTerraform(struct!.period),
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

export class DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricMethodRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricMethodRef = this._metricMethodRef?.internalValue;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricMethodRef.internalValue = undefined;
      this._period = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricMethodRef.internalValue = value.metricMethodRef;
      this._period = value.period;
      this._value = value.value;
    }
  }

  // metric_method_ref - computed: false, optional: false, required: true
  private _metricMethodRef = new DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansLimitsMetricMethodRefOutputReference(this, "metric_method_ref");
  public get metricMethodRef() {
    return this._metricMethodRef;
  }
  public putMetricMethodRef(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansLimitsMetricMethodRef) {
    this._metricMethodRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricMethodRefInput() {
    return this._metricMethodRef.internalValue;
  }

  // period - computed: false, optional: false, required: true
  private _period?: string; 
  public get period() {
    return this.getStringAttribute('period');
  }
  public set period(value: string) {
    this._period = value;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
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

export class DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansLimitsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansLimits[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansLimitsOutputReference {
    return new DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansPricingRulesMetricMethodRef {
  /**
  * BackendSystemName identifies uniquely the backend Backend reference must be used by the product
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#backend DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#backend}
  */
  readonly backend?: string;
  /**
  * SystemName identifies uniquely the metric or methods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#system_name DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#system_name}
  */
  readonly systemName: string;
}

export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansPricingRulesMetricMethodRefToTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansPricingRulesMetricMethodRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend: cdktf.stringToTerraform(struct!.backend),
    system_name: cdktf.stringToTerraform(struct!.systemName),
  }
}


export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansPricingRulesMetricMethodRefToHclTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansPricingRulesMetricMethodRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend: {
      value: cdktf.stringToHclTerraform(struct!.backend),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_name: {
      value: cdktf.stringToHclTerraform(struct!.systemName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansPricingRulesMetricMethodRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansPricingRulesMetricMethodRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backend !== undefined) {
      hasAnyValues = true;
      internalValueResult.backend = this._backend;
    }
    if (this._systemName !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemName = this._systemName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansPricingRulesMetricMethodRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backend = undefined;
      this._systemName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backend = value.backend;
      this._systemName = value.systemName;
    }
  }

  // backend - computed: false, optional: true, required: false
  private _backend?: string; 
  public get backend() {
    return this.getStringAttribute('backend');
  }
  public set backend(value: string) {
    this._backend = value;
  }
  public resetBackend() {
    this._backend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend;
  }

  // system_name - computed: false, optional: false, required: true
  private _systemName?: string; 
  public get systemName() {
    return this.getStringAttribute('system_name');
  }
  public set systemName(value: string) {
    this._systemName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get systemNameInput() {
    return this._systemName;
  }
}
export interface DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansPricingRules {
  /**
  * Range From
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#from DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#from}
  */
  readonly from: number;
  /**
  * Metric or Method Reference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#metric_method_ref DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#metric_method_ref}
  */
  readonly metricMethodRef: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansPricingRulesMetricMethodRef;
  /**
  * Price per unit (USD)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#price_per_unit DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#price_per_unit}
  */
  readonly pricePerUnit: string;
  /**
  * Range To
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#to DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#to}
  */
  readonly to: number;
}

export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansPricingRulesToTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansPricingRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.numberToTerraform(struct!.from),
    metric_method_ref: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansPricingRulesMetricMethodRefToTerraform(struct!.metricMethodRef),
    price_per_unit: cdktf.stringToTerraform(struct!.pricePerUnit),
    to: cdktf.numberToTerraform(struct!.to),
  }
}


export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansPricingRulesToHclTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansPricingRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.numberToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_method_ref: {
      value: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansPricingRulesMetricMethodRefToHclTerraform(struct!.metricMethodRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansPricingRulesMetricMethodRef",
    },
    price_per_unit: {
      value: cdktf.stringToHclTerraform(struct!.pricePerUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to: {
      value: cdktf.numberToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansPricingRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansPricingRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._metricMethodRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricMethodRef = this._metricMethodRef?.internalValue;
    }
    if (this._pricePerUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.pricePerUnit = this._pricePerUnit;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansPricingRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
      this._metricMethodRef.internalValue = undefined;
      this._pricePerUnit = undefined;
      this._to = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from = value.from;
      this._metricMethodRef.internalValue = value.metricMethodRef;
      this._pricePerUnit = value.pricePerUnit;
      this._to = value.to;
    }
  }

  // from - computed: false, optional: false, required: true
  private _from?: number; 
  public get from() {
    return this.getNumberAttribute('from');
  }
  public set from(value: number) {
    this._from = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // metric_method_ref - computed: false, optional: false, required: true
  private _metricMethodRef = new DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansPricingRulesMetricMethodRefOutputReference(this, "metric_method_ref");
  public get metricMethodRef() {
    return this._metricMethodRef;
  }
  public putMetricMethodRef(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansPricingRulesMetricMethodRef) {
    this._metricMethodRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricMethodRefInput() {
    return this._metricMethodRef.internalValue;
  }

  // price_per_unit - computed: false, optional: false, required: true
  private _pricePerUnit?: string; 
  public get pricePerUnit() {
    return this.getStringAttribute('price_per_unit');
  }
  public set pricePerUnit(value: string) {
    this._pricePerUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pricePerUnitInput() {
    return this._pricePerUnit;
  }

  // to - computed: false, optional: false, required: true
  private _to?: number; 
  public get to() {
    return this.getNumberAttribute('to');
  }
  public set to(value: number) {
    this._to = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}

export class DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansPricingRulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansPricingRules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansPricingRulesOutputReference {
    return new DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansPricingRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlans {
  /**
  * Set whether or not applications can be created on demand or if approval is required from you before they are activated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#apps_require_approval DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#apps_require_approval}
  */
  readonly appsRequireApproval?: boolean | cdktf.IResolvable;
  /**
  * Cost per Month (USD)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#cost_month DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#cost_month}
  */
  readonly costMonth?: string;
  /**
  * Limits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#limits DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#limits}
  */
  readonly limits?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansLimits[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#name DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Pricing Rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#pricing_rules DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#pricing_rules}
  */
  readonly pricingRules?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansPricingRules[] | cdktf.IResolvable;
  /**
  * Controls whether the application plan is published. If not specified it is hidden by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#published DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#published}
  */
  readonly published?: boolean | cdktf.IResolvable;
  /**
  * Setup fee (USD)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#setup_fee DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#setup_fee}
  */
  readonly setupFee?: string;
  /**
  * Trial Period (days)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#trial_period DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#trial_period}
  */
  readonly trialPeriod?: number;
}

export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansToTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlans | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apps_require_approval: cdktf.booleanToTerraform(struct!.appsRequireApproval),
    cost_month: cdktf.stringToTerraform(struct!.costMonth),
    limits: cdktf.listMapper(dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansLimitsToTerraform, false)(struct!.limits),
    name: cdktf.stringToTerraform(struct!.name),
    pricing_rules: cdktf.listMapper(dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansPricingRulesToTerraform, false)(struct!.pricingRules),
    published: cdktf.booleanToTerraform(struct!.published),
    setup_fee: cdktf.stringToTerraform(struct!.setupFee),
    trial_period: cdktf.numberToTerraform(struct!.trialPeriod),
  }
}


export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansToHclTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlans | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apps_require_approval: {
      value: cdktf.booleanToHclTerraform(struct!.appsRequireApproval),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cost_month: {
      value: cdktf.stringToHclTerraform(struct!.costMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limits: {
      value: cdktf.listMapperHcl(dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansLimitsToHclTerraform, false)(struct!.limits),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansLimitsList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pricing_rules: {
      value: cdktf.listMapperHcl(dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansPricingRulesToHclTerraform, false)(struct!.pricingRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansPricingRulesList",
    },
    published: {
      value: cdktf.booleanToHclTerraform(struct!.published),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    setup_fee: {
      value: cdktf.stringToHclTerraform(struct!.setupFee),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trial_period: {
      value: cdktf.numberToHclTerraform(struct!.trialPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlans | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appsRequireApproval !== undefined) {
      hasAnyValues = true;
      internalValueResult.appsRequireApproval = this._appsRequireApproval;
    }
    if (this._costMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.costMonth = this._costMonth;
    }
    if (this._limits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pricingRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pricingRules = this._pricingRules?.internalValue;
    }
    if (this._published !== undefined) {
      hasAnyValues = true;
      internalValueResult.published = this._published;
    }
    if (this._setupFee !== undefined) {
      hasAnyValues = true;
      internalValueResult.setupFee = this._setupFee;
    }
    if (this._trialPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.trialPeriod = this._trialPeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlans | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appsRequireApproval = undefined;
      this._costMonth = undefined;
      this._limits.internalValue = undefined;
      this._name = undefined;
      this._pricingRules.internalValue = undefined;
      this._published = undefined;
      this._setupFee = undefined;
      this._trialPeriod = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appsRequireApproval = value.appsRequireApproval;
      this._costMonth = value.costMonth;
      this._limits.internalValue = value.limits;
      this._name = value.name;
      this._pricingRules.internalValue = value.pricingRules;
      this._published = value.published;
      this._setupFee = value.setupFee;
      this._trialPeriod = value.trialPeriod;
    }
  }

  // apps_require_approval - computed: false, optional: true, required: false
  private _appsRequireApproval?: boolean | cdktf.IResolvable; 
  public get appsRequireApproval() {
    return this.getBooleanAttribute('apps_require_approval');
  }
  public set appsRequireApproval(value: boolean | cdktf.IResolvable) {
    this._appsRequireApproval = value;
  }
  public resetAppsRequireApproval() {
    this._appsRequireApproval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appsRequireApprovalInput() {
    return this._appsRequireApproval;
  }

  // cost_month - computed: false, optional: true, required: false
  private _costMonth?: string; 
  public get costMonth() {
    return this.getStringAttribute('cost_month');
  }
  public set costMonth(value: string) {
    this._costMonth = value;
  }
  public resetCostMonth() {
    this._costMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costMonthInput() {
    return this._costMonth;
  }

  // limits - computed: false, optional: true, required: false
  private _limits = new DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansLimitsList(this, "limits", false);
  public get limits() {
    return this._limits;
  }
  public putLimits(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansLimits[] | cdktf.IResolvable) {
    this._limits.internalValue = value;
  }
  public resetLimits() {
    this._limits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits.internalValue;
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

  // pricing_rules - computed: false, optional: true, required: false
  private _pricingRules = new DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansPricingRulesList(this, "pricing_rules", false);
  public get pricingRules() {
    return this._pricingRules;
  }
  public putPricingRules(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansPricingRules[] | cdktf.IResolvable) {
    this._pricingRules.internalValue = value;
  }
  public resetPricingRules() {
    this._pricingRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pricingRulesInput() {
    return this._pricingRules.internalValue;
  }

  // published - computed: false, optional: true, required: false
  private _published?: boolean | cdktf.IResolvable; 
  public get published() {
    return this.getBooleanAttribute('published');
  }
  public set published(value: boolean | cdktf.IResolvable) {
    this._published = value;
  }
  public resetPublished() {
    this._published = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishedInput() {
    return this._published;
  }

  // setup_fee - computed: false, optional: true, required: false
  private _setupFee?: string; 
  public get setupFee() {
    return this.getStringAttribute('setup_fee');
  }
  public set setupFee(value: string) {
    this._setupFee = value;
  }
  public resetSetupFee() {
    this._setupFee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setupFeeInput() {
    return this._setupFee;
  }

  // trial_period - computed: false, optional: true, required: false
  private _trialPeriod?: number; 
  public get trialPeriod() {
    return this.getNumberAttribute('trial_period');
  }
  public set trialPeriod(value: number) {
    this._trialPeriod = value;
  }
  public resetTrialPeriod() {
    this._trialPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trialPeriodInput() {
    return this._trialPeriod;
  }
}
export interface DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecBackendUsages {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#path DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecBackendUsagesToTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecBackendUsages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecBackendUsagesToHclTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecBackendUsages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecBackendUsagesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecBackendUsages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecBackendUsages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationAppKeyAppIdGatewayResponse {
  /**
  * ErrorAuthFailed specifies the response body when authentication fails
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_auth_failed DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_auth_failed}
  */
  readonly errorAuthFailed?: string;
  /**
  * ErrorAuthMissing specifies the response body when authentication is missing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_auth_missing DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_auth_missing}
  */
  readonly errorAuthMissing?: string;
  /**
  * ErrorHeadersAuthFailed specifies the Content-Type header when authentication fails
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_headers_auth_failed DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_headers_auth_failed}
  */
  readonly errorHeadersAuthFailed?: string;
  /**
  * ErrorHeadersAuthMissing specifies the Content-Type header when authentication is missing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_headers_auth_missing DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_headers_auth_missing}
  */
  readonly errorHeadersAuthMissing?: string;
  /**
  * ErrorHeadersLimitsExceeded specifies the Content-Type header when usage limit exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_headers_limits_exceeded DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_headers_limits_exceeded}
  */
  readonly errorHeadersLimitsExceeded?: string;
  /**
  * ErrorHeadersNoMatch specifies the Content-Type header when no match error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_headers_no_match DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_headers_no_match}
  */
  readonly errorHeadersNoMatch?: string;
  /**
  * ErrorLimitsExceeded specifies the response body when usage limit exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_limits_exceeded DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_limits_exceeded}
  */
  readonly errorLimitsExceeded?: string;
  /**
  * ErrorNoMatch specifies the response body when no match error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_no_match DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_no_match}
  */
  readonly errorNoMatch?: string;
  /**
  * ErrorStatusAuthFailed specifies the response code when authentication fails
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_status_auth_failed DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_status_auth_failed}
  */
  readonly errorStatusAuthFailed?: number;
  /**
  * ErrorStatusAuthMissing specifies the response code when authentication is missing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_status_auth_missing DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_status_auth_missing}
  */
  readonly errorStatusAuthMissing?: number;
  /**
  * ErrorStatusLimitsExceeded specifies the response code when usage limit exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_status_limits_exceeded DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_status_limits_exceeded}
  */
  readonly errorStatusLimitsExceeded?: number;
  /**
  * ErrorStatusNoMatch specifies the response code when no match error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_status_no_match DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_status_no_match}
  */
  readonly errorStatusNoMatch?: number;
}

export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationAppKeyAppIdGatewayResponseToTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationAppKeyAppIdGatewayResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_auth_failed: cdktf.stringToTerraform(struct!.errorAuthFailed),
    error_auth_missing: cdktf.stringToTerraform(struct!.errorAuthMissing),
    error_headers_auth_failed: cdktf.stringToTerraform(struct!.errorHeadersAuthFailed),
    error_headers_auth_missing: cdktf.stringToTerraform(struct!.errorHeadersAuthMissing),
    error_headers_limits_exceeded: cdktf.stringToTerraform(struct!.errorHeadersLimitsExceeded),
    error_headers_no_match: cdktf.stringToTerraform(struct!.errorHeadersNoMatch),
    error_limits_exceeded: cdktf.stringToTerraform(struct!.errorLimitsExceeded),
    error_no_match: cdktf.stringToTerraform(struct!.errorNoMatch),
    error_status_auth_failed: cdktf.numberToTerraform(struct!.errorStatusAuthFailed),
    error_status_auth_missing: cdktf.numberToTerraform(struct!.errorStatusAuthMissing),
    error_status_limits_exceeded: cdktf.numberToTerraform(struct!.errorStatusLimitsExceeded),
    error_status_no_match: cdktf.numberToTerraform(struct!.errorStatusNoMatch),
  }
}


export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationAppKeyAppIdGatewayResponseToHclTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationAppKeyAppIdGatewayResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_auth_failed: {
      value: cdktf.stringToHclTerraform(struct!.errorAuthFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_auth_missing: {
      value: cdktf.stringToHclTerraform(struct!.errorAuthMissing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_headers_auth_failed: {
      value: cdktf.stringToHclTerraform(struct!.errorHeadersAuthFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_headers_auth_missing: {
      value: cdktf.stringToHclTerraform(struct!.errorHeadersAuthMissing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_headers_limits_exceeded: {
      value: cdktf.stringToHclTerraform(struct!.errorHeadersLimitsExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_headers_no_match: {
      value: cdktf.stringToHclTerraform(struct!.errorHeadersNoMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_limits_exceeded: {
      value: cdktf.stringToHclTerraform(struct!.errorLimitsExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_no_match: {
      value: cdktf.stringToHclTerraform(struct!.errorNoMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_status_auth_failed: {
      value: cdktf.numberToHclTerraform(struct!.errorStatusAuthFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_status_auth_missing: {
      value: cdktf.numberToHclTerraform(struct!.errorStatusAuthMissing),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_status_limits_exceeded: {
      value: cdktf.numberToHclTerraform(struct!.errorStatusLimitsExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_status_no_match: {
      value: cdktf.numberToHclTerraform(struct!.errorStatusNoMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationAppKeyAppIdGatewayResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationAppKeyAppIdGatewayResponse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorAuthFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorAuthFailed = this._errorAuthFailed;
    }
    if (this._errorAuthMissing !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorAuthMissing = this._errorAuthMissing;
    }
    if (this._errorHeadersAuthFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorHeadersAuthFailed = this._errorHeadersAuthFailed;
    }
    if (this._errorHeadersAuthMissing !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorHeadersAuthMissing = this._errorHeadersAuthMissing;
    }
    if (this._errorHeadersLimitsExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorHeadersLimitsExceeded = this._errorHeadersLimitsExceeded;
    }
    if (this._errorHeadersNoMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorHeadersNoMatch = this._errorHeadersNoMatch;
    }
    if (this._errorLimitsExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorLimitsExceeded = this._errorLimitsExceeded;
    }
    if (this._errorNoMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorNoMatch = this._errorNoMatch;
    }
    if (this._errorStatusAuthFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorStatusAuthFailed = this._errorStatusAuthFailed;
    }
    if (this._errorStatusAuthMissing !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorStatusAuthMissing = this._errorStatusAuthMissing;
    }
    if (this._errorStatusLimitsExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorStatusLimitsExceeded = this._errorStatusLimitsExceeded;
    }
    if (this._errorStatusNoMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorStatusNoMatch = this._errorStatusNoMatch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationAppKeyAppIdGatewayResponse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._errorAuthFailed = undefined;
      this._errorAuthMissing = undefined;
      this._errorHeadersAuthFailed = undefined;
      this._errorHeadersAuthMissing = undefined;
      this._errorHeadersLimitsExceeded = undefined;
      this._errorHeadersNoMatch = undefined;
      this._errorLimitsExceeded = undefined;
      this._errorNoMatch = undefined;
      this._errorStatusAuthFailed = undefined;
      this._errorStatusAuthMissing = undefined;
      this._errorStatusLimitsExceeded = undefined;
      this._errorStatusNoMatch = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._errorAuthFailed = value.errorAuthFailed;
      this._errorAuthMissing = value.errorAuthMissing;
      this._errorHeadersAuthFailed = value.errorHeadersAuthFailed;
      this._errorHeadersAuthMissing = value.errorHeadersAuthMissing;
      this._errorHeadersLimitsExceeded = value.errorHeadersLimitsExceeded;
      this._errorHeadersNoMatch = value.errorHeadersNoMatch;
      this._errorLimitsExceeded = value.errorLimitsExceeded;
      this._errorNoMatch = value.errorNoMatch;
      this._errorStatusAuthFailed = value.errorStatusAuthFailed;
      this._errorStatusAuthMissing = value.errorStatusAuthMissing;
      this._errorStatusLimitsExceeded = value.errorStatusLimitsExceeded;
      this._errorStatusNoMatch = value.errorStatusNoMatch;
    }
  }

  // error_auth_failed - computed: false, optional: true, required: false
  private _errorAuthFailed?: string; 
  public get errorAuthFailed() {
    return this.getStringAttribute('error_auth_failed');
  }
  public set errorAuthFailed(value: string) {
    this._errorAuthFailed = value;
  }
  public resetErrorAuthFailed() {
    this._errorAuthFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorAuthFailedInput() {
    return this._errorAuthFailed;
  }

  // error_auth_missing - computed: false, optional: true, required: false
  private _errorAuthMissing?: string; 
  public get errorAuthMissing() {
    return this.getStringAttribute('error_auth_missing');
  }
  public set errorAuthMissing(value: string) {
    this._errorAuthMissing = value;
  }
  public resetErrorAuthMissing() {
    this._errorAuthMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorAuthMissingInput() {
    return this._errorAuthMissing;
  }

  // error_headers_auth_failed - computed: false, optional: true, required: false
  private _errorHeadersAuthFailed?: string; 
  public get errorHeadersAuthFailed() {
    return this.getStringAttribute('error_headers_auth_failed');
  }
  public set errorHeadersAuthFailed(value: string) {
    this._errorHeadersAuthFailed = value;
  }
  public resetErrorHeadersAuthFailed() {
    this._errorHeadersAuthFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorHeadersAuthFailedInput() {
    return this._errorHeadersAuthFailed;
  }

  // error_headers_auth_missing - computed: false, optional: true, required: false
  private _errorHeadersAuthMissing?: string; 
  public get errorHeadersAuthMissing() {
    return this.getStringAttribute('error_headers_auth_missing');
  }
  public set errorHeadersAuthMissing(value: string) {
    this._errorHeadersAuthMissing = value;
  }
  public resetErrorHeadersAuthMissing() {
    this._errorHeadersAuthMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorHeadersAuthMissingInput() {
    return this._errorHeadersAuthMissing;
  }

  // error_headers_limits_exceeded - computed: false, optional: true, required: false
  private _errorHeadersLimitsExceeded?: string; 
  public get errorHeadersLimitsExceeded() {
    return this.getStringAttribute('error_headers_limits_exceeded');
  }
  public set errorHeadersLimitsExceeded(value: string) {
    this._errorHeadersLimitsExceeded = value;
  }
  public resetErrorHeadersLimitsExceeded() {
    this._errorHeadersLimitsExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorHeadersLimitsExceededInput() {
    return this._errorHeadersLimitsExceeded;
  }

  // error_headers_no_match - computed: false, optional: true, required: false
  private _errorHeadersNoMatch?: string; 
  public get errorHeadersNoMatch() {
    return this.getStringAttribute('error_headers_no_match');
  }
  public set errorHeadersNoMatch(value: string) {
    this._errorHeadersNoMatch = value;
  }
  public resetErrorHeadersNoMatch() {
    this._errorHeadersNoMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorHeadersNoMatchInput() {
    return this._errorHeadersNoMatch;
  }

  // error_limits_exceeded - computed: false, optional: true, required: false
  private _errorLimitsExceeded?: string; 
  public get errorLimitsExceeded() {
    return this.getStringAttribute('error_limits_exceeded');
  }
  public set errorLimitsExceeded(value: string) {
    this._errorLimitsExceeded = value;
  }
  public resetErrorLimitsExceeded() {
    this._errorLimitsExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorLimitsExceededInput() {
    return this._errorLimitsExceeded;
  }

  // error_no_match - computed: false, optional: true, required: false
  private _errorNoMatch?: string; 
  public get errorNoMatch() {
    return this.getStringAttribute('error_no_match');
  }
  public set errorNoMatch(value: string) {
    this._errorNoMatch = value;
  }
  public resetErrorNoMatch() {
    this._errorNoMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorNoMatchInput() {
    return this._errorNoMatch;
  }

  // error_status_auth_failed - computed: false, optional: true, required: false
  private _errorStatusAuthFailed?: number; 
  public get errorStatusAuthFailed() {
    return this.getNumberAttribute('error_status_auth_failed');
  }
  public set errorStatusAuthFailed(value: number) {
    this._errorStatusAuthFailed = value;
  }
  public resetErrorStatusAuthFailed() {
    this._errorStatusAuthFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorStatusAuthFailedInput() {
    return this._errorStatusAuthFailed;
  }

  // error_status_auth_missing - computed: false, optional: true, required: false
  private _errorStatusAuthMissing?: number; 
  public get errorStatusAuthMissing() {
    return this.getNumberAttribute('error_status_auth_missing');
  }
  public set errorStatusAuthMissing(value: number) {
    this._errorStatusAuthMissing = value;
  }
  public resetErrorStatusAuthMissing() {
    this._errorStatusAuthMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorStatusAuthMissingInput() {
    return this._errorStatusAuthMissing;
  }

  // error_status_limits_exceeded - computed: false, optional: true, required: false
  private _errorStatusLimitsExceeded?: number; 
  public get errorStatusLimitsExceeded() {
    return this.getNumberAttribute('error_status_limits_exceeded');
  }
  public set errorStatusLimitsExceeded(value: number) {
    this._errorStatusLimitsExceeded = value;
  }
  public resetErrorStatusLimitsExceeded() {
    this._errorStatusLimitsExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorStatusLimitsExceededInput() {
    return this._errorStatusLimitsExceeded;
  }

  // error_status_no_match - computed: false, optional: true, required: false
  private _errorStatusNoMatch?: number; 
  public get errorStatusNoMatch() {
    return this.getNumberAttribute('error_status_no_match');
  }
  public set errorStatusNoMatch(value: number) {
    this._errorStatusNoMatch = value;
  }
  public resetErrorStatusNoMatch() {
    this._errorStatusNoMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorStatusNoMatchInput() {
    return this._errorStatusNoMatch;
  }
}
export interface DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationAppKeyAppIdSecurity {
  /**
  * HostHeader Lets you define a custom Host request header. This is needed if your API backend only accepts traffic from a specific host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#host_header DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#host_header}
  */
  readonly hostHeader?: string;
  /**
  * SecretToken Enables you to block any direct developer requests to your API backend; each 3scale API gateway call to your API backend contains a request header called X-3scale-proxy-secret-token. The value of this header can be set by you here. It's up to you ensure your backend only allows calls with this secret header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#secret_token DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#secret_token}
  */
  readonly secretToken?: string;
}

export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationAppKeyAppIdSecurityToTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationAppKeyAppIdSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_header: cdktf.stringToTerraform(struct!.hostHeader),
    secret_token: cdktf.stringToTerraform(struct!.secretToken),
  }
}


export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationAppKeyAppIdSecurityToHclTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationAppKeyAppIdSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_header: {
      value: cdktf.stringToHclTerraform(struct!.hostHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_token: {
      value: cdktf.stringToHclTerraform(struct!.secretToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationAppKeyAppIdSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationAppKeyAppIdSecurity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostHeader = this._hostHeader;
    }
    if (this._secretToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretToken = this._secretToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationAppKeyAppIdSecurity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostHeader = undefined;
      this._secretToken = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostHeader = value.hostHeader;
      this._secretToken = value.secretToken;
    }
  }

  // host_header - computed: false, optional: true, required: false
  private _hostHeader?: string; 
  public get hostHeader() {
    return this.getStringAttribute('host_header');
  }
  public set hostHeader(value: string) {
    this._hostHeader = value;
  }
  public resetHostHeader() {
    this._hostHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostHeaderInput() {
    return this._hostHeader;
  }

  // secret_token - computed: false, optional: true, required: false
  private _secretToken?: string; 
  public get secretToken() {
    return this.getStringAttribute('secret_token');
  }
  public set secretToken(value: string) {
    this._secretToken = value;
  }
  public resetSecretToken() {
    this._secretToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretTokenInput() {
    return this._secretToken;
  }
}
export interface DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationAppKeyAppId {
  /**
  * AppID is the name of the parameter that acts of behalf of app id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#app_id DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#app_id}
  */
  readonly appId?: string;
  /**
  * AppKey is the name of the parameter that acts of behalf of app key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#app_key DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#app_key}
  */
  readonly appKey?: string;
  /**
  * CredentialsLoc available options: headers: As HTTP Headers query: As query parameters (GET) or body parameters (POST/PUT/DELETE) authorization: As HTTP Basic Authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#credentials DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#credentials}
  */
  readonly credentials?: string;
  /**
  * GatewayResponseSpec defines the desired gateway response configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#gateway_response DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#gateway_response}
  */
  readonly gatewayResponse?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationAppKeyAppIdGatewayResponse;
  /**
  * SecuritySpec defines the desired state of Authentication Security
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#security DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#security}
  */
  readonly security?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationAppKeyAppIdSecurity;
}

export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationAppKeyAppIdToTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationAppKeyAppId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_id: cdktf.stringToTerraform(struct!.appId),
    app_key: cdktf.stringToTerraform(struct!.appKey),
    credentials: cdktf.stringToTerraform(struct!.credentials),
    gateway_response: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationAppKeyAppIdGatewayResponseToTerraform(struct!.gatewayResponse),
    security: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationAppKeyAppIdSecurityToTerraform(struct!.security),
  }
}


export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationAppKeyAppIdToHclTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationAppKeyAppId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_id: {
      value: cdktf.stringToHclTerraform(struct!.appId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_key: {
      value: cdktf.stringToHclTerraform(struct!.appKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials: {
      value: cdktf.stringToHclTerraform(struct!.credentials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway_response: {
      value: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationAppKeyAppIdGatewayResponseToHclTerraform(struct!.gatewayResponse),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationAppKeyAppIdGatewayResponse",
    },
    security: {
      value: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationAppKeyAppIdSecurityToHclTerraform(struct!.security),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationAppKeyAppIdSecurity",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationAppKeyAppIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationAppKeyAppId | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appId !== undefined) {
      hasAnyValues = true;
      internalValueResult.appId = this._appId;
    }
    if (this._appKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.appKey = this._appKey;
    }
    if (this._credentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials;
    }
    if (this._gatewayResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayResponse = this._gatewayResponse?.internalValue;
    }
    if (this._security?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.security = this._security?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationAppKeyAppId | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appId = undefined;
      this._appKey = undefined;
      this._credentials = undefined;
      this._gatewayResponse.internalValue = undefined;
      this._security.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appId = value.appId;
      this._appKey = value.appKey;
      this._credentials = value.credentials;
      this._gatewayResponse.internalValue = value.gatewayResponse;
      this._security.internalValue = value.security;
    }
  }

  // app_id - computed: false, optional: true, required: false
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  public resetAppId() {
    this._appId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }

  // app_key - computed: false, optional: true, required: false
  private _appKey?: string; 
  public get appKey() {
    return this.getStringAttribute('app_key');
  }
  public set appKey(value: string) {
    this._appKey = value;
  }
  public resetAppKey() {
    this._appKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appKeyInput() {
    return this._appKey;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials?: string; 
  public get credentials() {
    return this.getStringAttribute('credentials');
  }
  public set credentials(value: string) {
    this._credentials = value;
  }
  public resetCredentials() {
    this._credentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }

  // gateway_response - computed: false, optional: true, required: false
  private _gatewayResponse = new DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationAppKeyAppIdGatewayResponseOutputReference(this, "gateway_response");
  public get gatewayResponse() {
    return this._gatewayResponse;
  }
  public putGatewayResponse(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationAppKeyAppIdGatewayResponse) {
    this._gatewayResponse.internalValue = value;
  }
  public resetGatewayResponse() {
    this._gatewayResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayResponseInput() {
    return this._gatewayResponse.internalValue;
  }

  // security - computed: false, optional: true, required: false
  private _security = new DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationAppKeyAppIdSecurityOutputReference(this, "security");
  public get security() {
    return this._security;
  }
  public putSecurity(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationAppKeyAppIdSecurity) {
    this._security.internalValue = value;
  }
  public resetSecurity() {
    this._security.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security.internalValue;
  }
}
export interface DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcAuthenticationFlow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#direct_access_grants_enabled DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#direct_access_grants_enabled}
  */
  readonly directAccessGrantsEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#implicit_flow_enabled DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#implicit_flow_enabled}
  */
  readonly implicitFlowEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#service_accounts_enabled DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#service_accounts_enabled}
  */
  readonly serviceAccountsEnabled: boolean | cdktf.IResolvable;
  /**
  * OIDCIssuer is the OIDC issuer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#standard_flow_enabled DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#standard_flow_enabled}
  */
  readonly standardFlowEnabled: boolean | cdktf.IResolvable;
}

export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcAuthenticationFlowToTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcAuthenticationFlow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direct_access_grants_enabled: cdktf.booleanToTerraform(struct!.directAccessGrantsEnabled),
    implicit_flow_enabled: cdktf.booleanToTerraform(struct!.implicitFlowEnabled),
    service_accounts_enabled: cdktf.booleanToTerraform(struct!.serviceAccountsEnabled),
    standard_flow_enabled: cdktf.booleanToTerraform(struct!.standardFlowEnabled),
  }
}


export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcAuthenticationFlowToHclTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcAuthenticationFlow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direct_access_grants_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.directAccessGrantsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    implicit_flow_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.implicitFlowEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_accounts_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.serviceAccountsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    standard_flow_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.standardFlowEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcAuthenticationFlowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcAuthenticationFlow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directAccessGrantsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.directAccessGrantsEnabled = this._directAccessGrantsEnabled;
    }
    if (this._implicitFlowEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.implicitFlowEnabled = this._implicitFlowEnabled;
    }
    if (this._serviceAccountsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountsEnabled = this._serviceAccountsEnabled;
    }
    if (this._standardFlowEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.standardFlowEnabled = this._standardFlowEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcAuthenticationFlow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._directAccessGrantsEnabled = undefined;
      this._implicitFlowEnabled = undefined;
      this._serviceAccountsEnabled = undefined;
      this._standardFlowEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._directAccessGrantsEnabled = value.directAccessGrantsEnabled;
      this._implicitFlowEnabled = value.implicitFlowEnabled;
      this._serviceAccountsEnabled = value.serviceAccountsEnabled;
      this._standardFlowEnabled = value.standardFlowEnabled;
    }
  }

  // direct_access_grants_enabled - computed: false, optional: false, required: true
  private _directAccessGrantsEnabled?: boolean | cdktf.IResolvable; 
  public get directAccessGrantsEnabled() {
    return this.getBooleanAttribute('direct_access_grants_enabled');
  }
  public set directAccessGrantsEnabled(value: boolean | cdktf.IResolvable) {
    this._directAccessGrantsEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directAccessGrantsEnabledInput() {
    return this._directAccessGrantsEnabled;
  }

  // implicit_flow_enabled - computed: false, optional: false, required: true
  private _implicitFlowEnabled?: boolean | cdktf.IResolvable; 
  public get implicitFlowEnabled() {
    return this.getBooleanAttribute('implicit_flow_enabled');
  }
  public set implicitFlowEnabled(value: boolean | cdktf.IResolvable) {
    this._implicitFlowEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get implicitFlowEnabledInput() {
    return this._implicitFlowEnabled;
  }

  // service_accounts_enabled - computed: false, optional: false, required: true
  private _serviceAccountsEnabled?: boolean | cdktf.IResolvable; 
  public get serviceAccountsEnabled() {
    return this.getBooleanAttribute('service_accounts_enabled');
  }
  public set serviceAccountsEnabled(value: boolean | cdktf.IResolvable) {
    this._serviceAccountsEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountsEnabledInput() {
    return this._serviceAccountsEnabled;
  }

  // standard_flow_enabled - computed: false, optional: false, required: true
  private _standardFlowEnabled?: boolean | cdktf.IResolvable; 
  public get standardFlowEnabled() {
    return this.getBooleanAttribute('standard_flow_enabled');
  }
  public set standardFlowEnabled(value: boolean | cdktf.IResolvable) {
    this._standardFlowEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get standardFlowEnabledInput() {
    return this._standardFlowEnabled;
  }
}
export interface DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcGatewayResponse {
  /**
  * ErrorAuthFailed specifies the response body when authentication fails
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_auth_failed DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_auth_failed}
  */
  readonly errorAuthFailed?: string;
  /**
  * ErrorAuthMissing specifies the response body when authentication is missing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_auth_missing DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_auth_missing}
  */
  readonly errorAuthMissing?: string;
  /**
  * ErrorHeadersAuthFailed specifies the Content-Type header when authentication fails
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_headers_auth_failed DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_headers_auth_failed}
  */
  readonly errorHeadersAuthFailed?: string;
  /**
  * ErrorHeadersAuthMissing specifies the Content-Type header when authentication is missing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_headers_auth_missing DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_headers_auth_missing}
  */
  readonly errorHeadersAuthMissing?: string;
  /**
  * ErrorHeadersLimitsExceeded specifies the Content-Type header when usage limit exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_headers_limits_exceeded DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_headers_limits_exceeded}
  */
  readonly errorHeadersLimitsExceeded?: string;
  /**
  * ErrorHeadersNoMatch specifies the Content-Type header when no match error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_headers_no_match DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_headers_no_match}
  */
  readonly errorHeadersNoMatch?: string;
  /**
  * ErrorLimitsExceeded specifies the response body when usage limit exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_limits_exceeded DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_limits_exceeded}
  */
  readonly errorLimitsExceeded?: string;
  /**
  * ErrorNoMatch specifies the response body when no match error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_no_match DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_no_match}
  */
  readonly errorNoMatch?: string;
  /**
  * ErrorStatusAuthFailed specifies the response code when authentication fails
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_status_auth_failed DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_status_auth_failed}
  */
  readonly errorStatusAuthFailed?: number;
  /**
  * ErrorStatusAuthMissing specifies the response code when authentication is missing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_status_auth_missing DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_status_auth_missing}
  */
  readonly errorStatusAuthMissing?: number;
  /**
  * ErrorStatusLimitsExceeded specifies the response code when usage limit exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_status_limits_exceeded DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_status_limits_exceeded}
  */
  readonly errorStatusLimitsExceeded?: number;
  /**
  * ErrorStatusNoMatch specifies the response code when no match error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_status_no_match DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_status_no_match}
  */
  readonly errorStatusNoMatch?: number;
}

export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcGatewayResponseToTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcGatewayResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_auth_failed: cdktf.stringToTerraform(struct!.errorAuthFailed),
    error_auth_missing: cdktf.stringToTerraform(struct!.errorAuthMissing),
    error_headers_auth_failed: cdktf.stringToTerraform(struct!.errorHeadersAuthFailed),
    error_headers_auth_missing: cdktf.stringToTerraform(struct!.errorHeadersAuthMissing),
    error_headers_limits_exceeded: cdktf.stringToTerraform(struct!.errorHeadersLimitsExceeded),
    error_headers_no_match: cdktf.stringToTerraform(struct!.errorHeadersNoMatch),
    error_limits_exceeded: cdktf.stringToTerraform(struct!.errorLimitsExceeded),
    error_no_match: cdktf.stringToTerraform(struct!.errorNoMatch),
    error_status_auth_failed: cdktf.numberToTerraform(struct!.errorStatusAuthFailed),
    error_status_auth_missing: cdktf.numberToTerraform(struct!.errorStatusAuthMissing),
    error_status_limits_exceeded: cdktf.numberToTerraform(struct!.errorStatusLimitsExceeded),
    error_status_no_match: cdktf.numberToTerraform(struct!.errorStatusNoMatch),
  }
}


export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcGatewayResponseToHclTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcGatewayResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_auth_failed: {
      value: cdktf.stringToHclTerraform(struct!.errorAuthFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_auth_missing: {
      value: cdktf.stringToHclTerraform(struct!.errorAuthMissing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_headers_auth_failed: {
      value: cdktf.stringToHclTerraform(struct!.errorHeadersAuthFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_headers_auth_missing: {
      value: cdktf.stringToHclTerraform(struct!.errorHeadersAuthMissing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_headers_limits_exceeded: {
      value: cdktf.stringToHclTerraform(struct!.errorHeadersLimitsExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_headers_no_match: {
      value: cdktf.stringToHclTerraform(struct!.errorHeadersNoMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_limits_exceeded: {
      value: cdktf.stringToHclTerraform(struct!.errorLimitsExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_no_match: {
      value: cdktf.stringToHclTerraform(struct!.errorNoMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_status_auth_failed: {
      value: cdktf.numberToHclTerraform(struct!.errorStatusAuthFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_status_auth_missing: {
      value: cdktf.numberToHclTerraform(struct!.errorStatusAuthMissing),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_status_limits_exceeded: {
      value: cdktf.numberToHclTerraform(struct!.errorStatusLimitsExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_status_no_match: {
      value: cdktf.numberToHclTerraform(struct!.errorStatusNoMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcGatewayResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcGatewayResponse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorAuthFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorAuthFailed = this._errorAuthFailed;
    }
    if (this._errorAuthMissing !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorAuthMissing = this._errorAuthMissing;
    }
    if (this._errorHeadersAuthFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorHeadersAuthFailed = this._errorHeadersAuthFailed;
    }
    if (this._errorHeadersAuthMissing !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorHeadersAuthMissing = this._errorHeadersAuthMissing;
    }
    if (this._errorHeadersLimitsExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorHeadersLimitsExceeded = this._errorHeadersLimitsExceeded;
    }
    if (this._errorHeadersNoMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorHeadersNoMatch = this._errorHeadersNoMatch;
    }
    if (this._errorLimitsExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorLimitsExceeded = this._errorLimitsExceeded;
    }
    if (this._errorNoMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorNoMatch = this._errorNoMatch;
    }
    if (this._errorStatusAuthFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorStatusAuthFailed = this._errorStatusAuthFailed;
    }
    if (this._errorStatusAuthMissing !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorStatusAuthMissing = this._errorStatusAuthMissing;
    }
    if (this._errorStatusLimitsExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorStatusLimitsExceeded = this._errorStatusLimitsExceeded;
    }
    if (this._errorStatusNoMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorStatusNoMatch = this._errorStatusNoMatch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcGatewayResponse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._errorAuthFailed = undefined;
      this._errorAuthMissing = undefined;
      this._errorHeadersAuthFailed = undefined;
      this._errorHeadersAuthMissing = undefined;
      this._errorHeadersLimitsExceeded = undefined;
      this._errorHeadersNoMatch = undefined;
      this._errorLimitsExceeded = undefined;
      this._errorNoMatch = undefined;
      this._errorStatusAuthFailed = undefined;
      this._errorStatusAuthMissing = undefined;
      this._errorStatusLimitsExceeded = undefined;
      this._errorStatusNoMatch = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._errorAuthFailed = value.errorAuthFailed;
      this._errorAuthMissing = value.errorAuthMissing;
      this._errorHeadersAuthFailed = value.errorHeadersAuthFailed;
      this._errorHeadersAuthMissing = value.errorHeadersAuthMissing;
      this._errorHeadersLimitsExceeded = value.errorHeadersLimitsExceeded;
      this._errorHeadersNoMatch = value.errorHeadersNoMatch;
      this._errorLimitsExceeded = value.errorLimitsExceeded;
      this._errorNoMatch = value.errorNoMatch;
      this._errorStatusAuthFailed = value.errorStatusAuthFailed;
      this._errorStatusAuthMissing = value.errorStatusAuthMissing;
      this._errorStatusLimitsExceeded = value.errorStatusLimitsExceeded;
      this._errorStatusNoMatch = value.errorStatusNoMatch;
    }
  }

  // error_auth_failed - computed: false, optional: true, required: false
  private _errorAuthFailed?: string; 
  public get errorAuthFailed() {
    return this.getStringAttribute('error_auth_failed');
  }
  public set errorAuthFailed(value: string) {
    this._errorAuthFailed = value;
  }
  public resetErrorAuthFailed() {
    this._errorAuthFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorAuthFailedInput() {
    return this._errorAuthFailed;
  }

  // error_auth_missing - computed: false, optional: true, required: false
  private _errorAuthMissing?: string; 
  public get errorAuthMissing() {
    return this.getStringAttribute('error_auth_missing');
  }
  public set errorAuthMissing(value: string) {
    this._errorAuthMissing = value;
  }
  public resetErrorAuthMissing() {
    this._errorAuthMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorAuthMissingInput() {
    return this._errorAuthMissing;
  }

  // error_headers_auth_failed - computed: false, optional: true, required: false
  private _errorHeadersAuthFailed?: string; 
  public get errorHeadersAuthFailed() {
    return this.getStringAttribute('error_headers_auth_failed');
  }
  public set errorHeadersAuthFailed(value: string) {
    this._errorHeadersAuthFailed = value;
  }
  public resetErrorHeadersAuthFailed() {
    this._errorHeadersAuthFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorHeadersAuthFailedInput() {
    return this._errorHeadersAuthFailed;
  }

  // error_headers_auth_missing - computed: false, optional: true, required: false
  private _errorHeadersAuthMissing?: string; 
  public get errorHeadersAuthMissing() {
    return this.getStringAttribute('error_headers_auth_missing');
  }
  public set errorHeadersAuthMissing(value: string) {
    this._errorHeadersAuthMissing = value;
  }
  public resetErrorHeadersAuthMissing() {
    this._errorHeadersAuthMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorHeadersAuthMissingInput() {
    return this._errorHeadersAuthMissing;
  }

  // error_headers_limits_exceeded - computed: false, optional: true, required: false
  private _errorHeadersLimitsExceeded?: string; 
  public get errorHeadersLimitsExceeded() {
    return this.getStringAttribute('error_headers_limits_exceeded');
  }
  public set errorHeadersLimitsExceeded(value: string) {
    this._errorHeadersLimitsExceeded = value;
  }
  public resetErrorHeadersLimitsExceeded() {
    this._errorHeadersLimitsExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorHeadersLimitsExceededInput() {
    return this._errorHeadersLimitsExceeded;
  }

  // error_headers_no_match - computed: false, optional: true, required: false
  private _errorHeadersNoMatch?: string; 
  public get errorHeadersNoMatch() {
    return this.getStringAttribute('error_headers_no_match');
  }
  public set errorHeadersNoMatch(value: string) {
    this._errorHeadersNoMatch = value;
  }
  public resetErrorHeadersNoMatch() {
    this._errorHeadersNoMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorHeadersNoMatchInput() {
    return this._errorHeadersNoMatch;
  }

  // error_limits_exceeded - computed: false, optional: true, required: false
  private _errorLimitsExceeded?: string; 
  public get errorLimitsExceeded() {
    return this.getStringAttribute('error_limits_exceeded');
  }
  public set errorLimitsExceeded(value: string) {
    this._errorLimitsExceeded = value;
  }
  public resetErrorLimitsExceeded() {
    this._errorLimitsExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorLimitsExceededInput() {
    return this._errorLimitsExceeded;
  }

  // error_no_match - computed: false, optional: true, required: false
  private _errorNoMatch?: string; 
  public get errorNoMatch() {
    return this.getStringAttribute('error_no_match');
  }
  public set errorNoMatch(value: string) {
    this._errorNoMatch = value;
  }
  public resetErrorNoMatch() {
    this._errorNoMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorNoMatchInput() {
    return this._errorNoMatch;
  }

  // error_status_auth_failed - computed: false, optional: true, required: false
  private _errorStatusAuthFailed?: number; 
  public get errorStatusAuthFailed() {
    return this.getNumberAttribute('error_status_auth_failed');
  }
  public set errorStatusAuthFailed(value: number) {
    this._errorStatusAuthFailed = value;
  }
  public resetErrorStatusAuthFailed() {
    this._errorStatusAuthFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorStatusAuthFailedInput() {
    return this._errorStatusAuthFailed;
  }

  // error_status_auth_missing - computed: false, optional: true, required: false
  private _errorStatusAuthMissing?: number; 
  public get errorStatusAuthMissing() {
    return this.getNumberAttribute('error_status_auth_missing');
  }
  public set errorStatusAuthMissing(value: number) {
    this._errorStatusAuthMissing = value;
  }
  public resetErrorStatusAuthMissing() {
    this._errorStatusAuthMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorStatusAuthMissingInput() {
    return this._errorStatusAuthMissing;
  }

  // error_status_limits_exceeded - computed: false, optional: true, required: false
  private _errorStatusLimitsExceeded?: number; 
  public get errorStatusLimitsExceeded() {
    return this.getNumberAttribute('error_status_limits_exceeded');
  }
  public set errorStatusLimitsExceeded(value: number) {
    this._errorStatusLimitsExceeded = value;
  }
  public resetErrorStatusLimitsExceeded() {
    this._errorStatusLimitsExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorStatusLimitsExceededInput() {
    return this._errorStatusLimitsExceeded;
  }

  // error_status_no_match - computed: false, optional: true, required: false
  private _errorStatusNoMatch?: number; 
  public get errorStatusNoMatch() {
    return this.getNumberAttribute('error_status_no_match');
  }
  public set errorStatusNoMatch(value: number) {
    this._errorStatusNoMatch = value;
  }
  public resetErrorStatusNoMatch() {
    this._errorStatusNoMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorStatusNoMatchInput() {
    return this._errorStatusNoMatch;
  }
}
export interface DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcIssuerEndpointRef {
  /**
  * name is unique within a namespace to reference a secret resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#name DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * namespace defines the space within which the secret name must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#namespace DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcIssuerEndpointRefToTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcIssuerEndpointRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcIssuerEndpointRefToHclTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcIssuerEndpointRef | cdktf.IResolvable): any {
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

export class DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcIssuerEndpointRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcIssuerEndpointRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcIssuerEndpointRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._namespace = value.namespace;
    }
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcSecurity {
  /**
  * HostHeader Lets you define a custom Host request header. This is needed if your API backend only accepts traffic from a specific host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#host_header DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#host_header}
  */
  readonly hostHeader?: string;
  /**
  * SecretToken Enables you to block any direct developer requests to your API backend; each 3scale API gateway call to your API backend contains a request header called X-3scale-proxy-secret-token. The value of this header can be set by you here. It's up to you ensure your backend only allows calls with this secret header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#secret_token DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#secret_token}
  */
  readonly secretToken?: string;
}

export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcSecurityToTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_header: cdktf.stringToTerraform(struct!.hostHeader),
    secret_token: cdktf.stringToTerraform(struct!.secretToken),
  }
}


export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcSecurityToHclTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_header: {
      value: cdktf.stringToHclTerraform(struct!.hostHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_token: {
      value: cdktf.stringToHclTerraform(struct!.secretToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcSecurity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostHeader = this._hostHeader;
    }
    if (this._secretToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretToken = this._secretToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcSecurity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostHeader = undefined;
      this._secretToken = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostHeader = value.hostHeader;
      this._secretToken = value.secretToken;
    }
  }

  // host_header - computed: false, optional: true, required: false
  private _hostHeader?: string; 
  public get hostHeader() {
    return this.getStringAttribute('host_header');
  }
  public set hostHeader(value: string) {
    this._hostHeader = value;
  }
  public resetHostHeader() {
    this._hostHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostHeaderInput() {
    return this._hostHeader;
  }

  // secret_token - computed: false, optional: true, required: false
  private _secretToken?: string; 
  public get secretToken() {
    return this.getStringAttribute('secret_token');
  }
  public set secretToken(value: string) {
    this._secretToken = value;
  }
  public resetSecretToken() {
    this._secretToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretTokenInput() {
    return this._secretToken;
  }
}
export interface DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidc {
  /**
  * AuthenticationFlow specifies OAuth2.0 authorization grant type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#authentication_flow DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#authentication_flow}
  */
  readonly authenticationFlow?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcAuthenticationFlow;
  /**
  * Credentials Location available options: headers: As HTTP Headers query: As query parameters (GET) or body parameters (POST/PUT/DELETE) authorization: As HTTP Basic Authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#credentials DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#credentials}
  */
  readonly credentials?: string;
  /**
  * GatewayResponseSpec defines the desired gateway response configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#gateway_response DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#gateway_response}
  */
  readonly gatewayResponse?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcGatewayResponse;
  /**
  * Issuer is the OIDC issuer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#issuer_endpoint DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#issuer_endpoint}
  */
  readonly issuerEndpoint?: string;
  /**
  * IssuerEndpointRef is the reference to OIDC issuer Secret that contains IssuerEndpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#issuer_endpoint_ref DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#issuer_endpoint_ref}
  */
  readonly issuerEndpointRef?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcIssuerEndpointRef;
  /**
  * IssuerType is the type of the OIDC issuer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#issuer_type DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#issuer_type}
  */
  readonly issuerType: string;
  /**
  * JwtClaimWithClientID is the JSON Web Token (JWT) Claim with ClientID that contains the clientID. Defaults to 'azp'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#jwt_claim_with_client_id DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#jwt_claim_with_client_id}
  */
  readonly jwtClaimWithClientId?: string;
  /**
  * JwtClaimWithClientIDType sets to process the ClientID Token Claim value as a string or as a liquid template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#jwt_claim_with_client_id_type DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#jwt_claim_with_client_id_type}
  */
  readonly jwtClaimWithClientIdType?: string;
  /**
  * SecuritySpec defines the desired state of Authentication Security
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#security DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#security}
  */
  readonly security?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcSecurity;
}

export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcToTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_flow: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcAuthenticationFlowToTerraform(struct!.authenticationFlow),
    credentials: cdktf.stringToTerraform(struct!.credentials),
    gateway_response: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcGatewayResponseToTerraform(struct!.gatewayResponse),
    issuer_endpoint: cdktf.stringToTerraform(struct!.issuerEndpoint),
    issuer_endpoint_ref: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcIssuerEndpointRefToTerraform(struct!.issuerEndpointRef),
    issuer_type: cdktf.stringToTerraform(struct!.issuerType),
    jwt_claim_with_client_id: cdktf.stringToTerraform(struct!.jwtClaimWithClientId),
    jwt_claim_with_client_id_type: cdktf.stringToTerraform(struct!.jwtClaimWithClientIdType),
    security: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcSecurityToTerraform(struct!.security),
  }
}


export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcToHclTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_flow: {
      value: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcAuthenticationFlowToHclTerraform(struct!.authenticationFlow),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcAuthenticationFlow",
    },
    credentials: {
      value: cdktf.stringToHclTerraform(struct!.credentials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway_response: {
      value: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcGatewayResponseToHclTerraform(struct!.gatewayResponse),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcGatewayResponse",
    },
    issuer_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.issuerEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer_endpoint_ref: {
      value: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcIssuerEndpointRefToHclTerraform(struct!.issuerEndpointRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcIssuerEndpointRef",
    },
    issuer_type: {
      value: cdktf.stringToHclTerraform(struct!.issuerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwt_claim_with_client_id: {
      value: cdktf.stringToHclTerraform(struct!.jwtClaimWithClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwt_claim_with_client_id_type: {
      value: cdktf.stringToHclTerraform(struct!.jwtClaimWithClientIdType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security: {
      value: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcSecurityToHclTerraform(struct!.security),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcSecurity",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationFlow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationFlow = this._authenticationFlow?.internalValue;
    }
    if (this._credentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials;
    }
    if (this._gatewayResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayResponse = this._gatewayResponse?.internalValue;
    }
    if (this._issuerEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerEndpoint = this._issuerEndpoint;
    }
    if (this._issuerEndpointRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerEndpointRef = this._issuerEndpointRef?.internalValue;
    }
    if (this._issuerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerType = this._issuerType;
    }
    if (this._jwtClaimWithClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtClaimWithClientId = this._jwtClaimWithClientId;
    }
    if (this._jwtClaimWithClientIdType !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtClaimWithClientIdType = this._jwtClaimWithClientIdType;
    }
    if (this._security?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.security = this._security?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationFlow.internalValue = undefined;
      this._credentials = undefined;
      this._gatewayResponse.internalValue = undefined;
      this._issuerEndpoint = undefined;
      this._issuerEndpointRef.internalValue = undefined;
      this._issuerType = undefined;
      this._jwtClaimWithClientId = undefined;
      this._jwtClaimWithClientIdType = undefined;
      this._security.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationFlow.internalValue = value.authenticationFlow;
      this._credentials = value.credentials;
      this._gatewayResponse.internalValue = value.gatewayResponse;
      this._issuerEndpoint = value.issuerEndpoint;
      this._issuerEndpointRef.internalValue = value.issuerEndpointRef;
      this._issuerType = value.issuerType;
      this._jwtClaimWithClientId = value.jwtClaimWithClientId;
      this._jwtClaimWithClientIdType = value.jwtClaimWithClientIdType;
      this._security.internalValue = value.security;
    }
  }

  // authentication_flow - computed: false, optional: true, required: false
  private _authenticationFlow = new DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcAuthenticationFlowOutputReference(this, "authentication_flow");
  public get authenticationFlow() {
    return this._authenticationFlow;
  }
  public putAuthenticationFlow(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcAuthenticationFlow) {
    this._authenticationFlow.internalValue = value;
  }
  public resetAuthenticationFlow() {
    this._authenticationFlow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationFlowInput() {
    return this._authenticationFlow.internalValue;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials?: string; 
  public get credentials() {
    return this.getStringAttribute('credentials');
  }
  public set credentials(value: string) {
    this._credentials = value;
  }
  public resetCredentials() {
    this._credentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }

  // gateway_response - computed: false, optional: true, required: false
  private _gatewayResponse = new DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcGatewayResponseOutputReference(this, "gateway_response");
  public get gatewayResponse() {
    return this._gatewayResponse;
  }
  public putGatewayResponse(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcGatewayResponse) {
    this._gatewayResponse.internalValue = value;
  }
  public resetGatewayResponse() {
    this._gatewayResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayResponseInput() {
    return this._gatewayResponse.internalValue;
  }

  // issuer_endpoint - computed: false, optional: true, required: false
  private _issuerEndpoint?: string; 
  public get issuerEndpoint() {
    return this.getStringAttribute('issuer_endpoint');
  }
  public set issuerEndpoint(value: string) {
    this._issuerEndpoint = value;
  }
  public resetIssuerEndpoint() {
    this._issuerEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerEndpointInput() {
    return this._issuerEndpoint;
  }

  // issuer_endpoint_ref - computed: false, optional: true, required: false
  private _issuerEndpointRef = new DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcIssuerEndpointRefOutputReference(this, "issuer_endpoint_ref");
  public get issuerEndpointRef() {
    return this._issuerEndpointRef;
  }
  public putIssuerEndpointRef(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcIssuerEndpointRef) {
    this._issuerEndpointRef.internalValue = value;
  }
  public resetIssuerEndpointRef() {
    this._issuerEndpointRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerEndpointRefInput() {
    return this._issuerEndpointRef.internalValue;
  }

  // issuer_type - computed: false, optional: false, required: true
  private _issuerType?: string; 
  public get issuerType() {
    return this.getStringAttribute('issuer_type');
  }
  public set issuerType(value: string) {
    this._issuerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerTypeInput() {
    return this._issuerType;
  }

  // jwt_claim_with_client_id - computed: false, optional: true, required: false
  private _jwtClaimWithClientId?: string; 
  public get jwtClaimWithClientId() {
    return this.getStringAttribute('jwt_claim_with_client_id');
  }
  public set jwtClaimWithClientId(value: string) {
    this._jwtClaimWithClientId = value;
  }
  public resetJwtClaimWithClientId() {
    this._jwtClaimWithClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtClaimWithClientIdInput() {
    return this._jwtClaimWithClientId;
  }

  // jwt_claim_with_client_id_type - computed: false, optional: true, required: false
  private _jwtClaimWithClientIdType?: string; 
  public get jwtClaimWithClientIdType() {
    return this.getStringAttribute('jwt_claim_with_client_id_type');
  }
  public set jwtClaimWithClientIdType(value: string) {
    this._jwtClaimWithClientIdType = value;
  }
  public resetJwtClaimWithClientIdType() {
    this._jwtClaimWithClientIdType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtClaimWithClientIdTypeInput() {
    return this._jwtClaimWithClientIdType;
  }

  // security - computed: false, optional: true, required: false
  private _security = new DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcSecurityOutputReference(this, "security");
  public get security() {
    return this._security;
  }
  public putSecurity(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcSecurity) {
    this._security.internalValue = value;
  }
  public resetSecurity() {
    this._security.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security.internalValue;
  }
}
export interface DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationUserkeyGatewayResponse {
  /**
  * ErrorAuthFailed specifies the response body when authentication fails
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_auth_failed DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_auth_failed}
  */
  readonly errorAuthFailed?: string;
  /**
  * ErrorAuthMissing specifies the response body when authentication is missing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_auth_missing DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_auth_missing}
  */
  readonly errorAuthMissing?: string;
  /**
  * ErrorHeadersAuthFailed specifies the Content-Type header when authentication fails
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_headers_auth_failed DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_headers_auth_failed}
  */
  readonly errorHeadersAuthFailed?: string;
  /**
  * ErrorHeadersAuthMissing specifies the Content-Type header when authentication is missing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_headers_auth_missing DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_headers_auth_missing}
  */
  readonly errorHeadersAuthMissing?: string;
  /**
  * ErrorHeadersLimitsExceeded specifies the Content-Type header when usage limit exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_headers_limits_exceeded DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_headers_limits_exceeded}
  */
  readonly errorHeadersLimitsExceeded?: string;
  /**
  * ErrorHeadersNoMatch specifies the Content-Type header when no match error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_headers_no_match DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_headers_no_match}
  */
  readonly errorHeadersNoMatch?: string;
  /**
  * ErrorLimitsExceeded specifies the response body when usage limit exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_limits_exceeded DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_limits_exceeded}
  */
  readonly errorLimitsExceeded?: string;
  /**
  * ErrorNoMatch specifies the response body when no match error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_no_match DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_no_match}
  */
  readonly errorNoMatch?: string;
  /**
  * ErrorStatusAuthFailed specifies the response code when authentication fails
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_status_auth_failed DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_status_auth_failed}
  */
  readonly errorStatusAuthFailed?: number;
  /**
  * ErrorStatusAuthMissing specifies the response code when authentication is missing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_status_auth_missing DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_status_auth_missing}
  */
  readonly errorStatusAuthMissing?: number;
  /**
  * ErrorStatusLimitsExceeded specifies the response code when usage limit exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_status_limits_exceeded DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_status_limits_exceeded}
  */
  readonly errorStatusLimitsExceeded?: number;
  /**
  * ErrorStatusNoMatch specifies the response code when no match error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_status_no_match DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_status_no_match}
  */
  readonly errorStatusNoMatch?: number;
}

export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationUserkeyGatewayResponseToTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationUserkeyGatewayResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_auth_failed: cdktf.stringToTerraform(struct!.errorAuthFailed),
    error_auth_missing: cdktf.stringToTerraform(struct!.errorAuthMissing),
    error_headers_auth_failed: cdktf.stringToTerraform(struct!.errorHeadersAuthFailed),
    error_headers_auth_missing: cdktf.stringToTerraform(struct!.errorHeadersAuthMissing),
    error_headers_limits_exceeded: cdktf.stringToTerraform(struct!.errorHeadersLimitsExceeded),
    error_headers_no_match: cdktf.stringToTerraform(struct!.errorHeadersNoMatch),
    error_limits_exceeded: cdktf.stringToTerraform(struct!.errorLimitsExceeded),
    error_no_match: cdktf.stringToTerraform(struct!.errorNoMatch),
    error_status_auth_failed: cdktf.numberToTerraform(struct!.errorStatusAuthFailed),
    error_status_auth_missing: cdktf.numberToTerraform(struct!.errorStatusAuthMissing),
    error_status_limits_exceeded: cdktf.numberToTerraform(struct!.errorStatusLimitsExceeded),
    error_status_no_match: cdktf.numberToTerraform(struct!.errorStatusNoMatch),
  }
}


export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationUserkeyGatewayResponseToHclTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationUserkeyGatewayResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_auth_failed: {
      value: cdktf.stringToHclTerraform(struct!.errorAuthFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_auth_missing: {
      value: cdktf.stringToHclTerraform(struct!.errorAuthMissing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_headers_auth_failed: {
      value: cdktf.stringToHclTerraform(struct!.errorHeadersAuthFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_headers_auth_missing: {
      value: cdktf.stringToHclTerraform(struct!.errorHeadersAuthMissing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_headers_limits_exceeded: {
      value: cdktf.stringToHclTerraform(struct!.errorHeadersLimitsExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_headers_no_match: {
      value: cdktf.stringToHclTerraform(struct!.errorHeadersNoMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_limits_exceeded: {
      value: cdktf.stringToHclTerraform(struct!.errorLimitsExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_no_match: {
      value: cdktf.stringToHclTerraform(struct!.errorNoMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_status_auth_failed: {
      value: cdktf.numberToHclTerraform(struct!.errorStatusAuthFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_status_auth_missing: {
      value: cdktf.numberToHclTerraform(struct!.errorStatusAuthMissing),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_status_limits_exceeded: {
      value: cdktf.numberToHclTerraform(struct!.errorStatusLimitsExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_status_no_match: {
      value: cdktf.numberToHclTerraform(struct!.errorStatusNoMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationUserkeyGatewayResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationUserkeyGatewayResponse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorAuthFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorAuthFailed = this._errorAuthFailed;
    }
    if (this._errorAuthMissing !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorAuthMissing = this._errorAuthMissing;
    }
    if (this._errorHeadersAuthFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorHeadersAuthFailed = this._errorHeadersAuthFailed;
    }
    if (this._errorHeadersAuthMissing !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorHeadersAuthMissing = this._errorHeadersAuthMissing;
    }
    if (this._errorHeadersLimitsExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorHeadersLimitsExceeded = this._errorHeadersLimitsExceeded;
    }
    if (this._errorHeadersNoMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorHeadersNoMatch = this._errorHeadersNoMatch;
    }
    if (this._errorLimitsExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorLimitsExceeded = this._errorLimitsExceeded;
    }
    if (this._errorNoMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorNoMatch = this._errorNoMatch;
    }
    if (this._errorStatusAuthFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorStatusAuthFailed = this._errorStatusAuthFailed;
    }
    if (this._errorStatusAuthMissing !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorStatusAuthMissing = this._errorStatusAuthMissing;
    }
    if (this._errorStatusLimitsExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorStatusLimitsExceeded = this._errorStatusLimitsExceeded;
    }
    if (this._errorStatusNoMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorStatusNoMatch = this._errorStatusNoMatch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationUserkeyGatewayResponse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._errorAuthFailed = undefined;
      this._errorAuthMissing = undefined;
      this._errorHeadersAuthFailed = undefined;
      this._errorHeadersAuthMissing = undefined;
      this._errorHeadersLimitsExceeded = undefined;
      this._errorHeadersNoMatch = undefined;
      this._errorLimitsExceeded = undefined;
      this._errorNoMatch = undefined;
      this._errorStatusAuthFailed = undefined;
      this._errorStatusAuthMissing = undefined;
      this._errorStatusLimitsExceeded = undefined;
      this._errorStatusNoMatch = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._errorAuthFailed = value.errorAuthFailed;
      this._errorAuthMissing = value.errorAuthMissing;
      this._errorHeadersAuthFailed = value.errorHeadersAuthFailed;
      this._errorHeadersAuthMissing = value.errorHeadersAuthMissing;
      this._errorHeadersLimitsExceeded = value.errorHeadersLimitsExceeded;
      this._errorHeadersNoMatch = value.errorHeadersNoMatch;
      this._errorLimitsExceeded = value.errorLimitsExceeded;
      this._errorNoMatch = value.errorNoMatch;
      this._errorStatusAuthFailed = value.errorStatusAuthFailed;
      this._errorStatusAuthMissing = value.errorStatusAuthMissing;
      this._errorStatusLimitsExceeded = value.errorStatusLimitsExceeded;
      this._errorStatusNoMatch = value.errorStatusNoMatch;
    }
  }

  // error_auth_failed - computed: false, optional: true, required: false
  private _errorAuthFailed?: string; 
  public get errorAuthFailed() {
    return this.getStringAttribute('error_auth_failed');
  }
  public set errorAuthFailed(value: string) {
    this._errorAuthFailed = value;
  }
  public resetErrorAuthFailed() {
    this._errorAuthFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorAuthFailedInput() {
    return this._errorAuthFailed;
  }

  // error_auth_missing - computed: false, optional: true, required: false
  private _errorAuthMissing?: string; 
  public get errorAuthMissing() {
    return this.getStringAttribute('error_auth_missing');
  }
  public set errorAuthMissing(value: string) {
    this._errorAuthMissing = value;
  }
  public resetErrorAuthMissing() {
    this._errorAuthMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorAuthMissingInput() {
    return this._errorAuthMissing;
  }

  // error_headers_auth_failed - computed: false, optional: true, required: false
  private _errorHeadersAuthFailed?: string; 
  public get errorHeadersAuthFailed() {
    return this.getStringAttribute('error_headers_auth_failed');
  }
  public set errorHeadersAuthFailed(value: string) {
    this._errorHeadersAuthFailed = value;
  }
  public resetErrorHeadersAuthFailed() {
    this._errorHeadersAuthFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorHeadersAuthFailedInput() {
    return this._errorHeadersAuthFailed;
  }

  // error_headers_auth_missing - computed: false, optional: true, required: false
  private _errorHeadersAuthMissing?: string; 
  public get errorHeadersAuthMissing() {
    return this.getStringAttribute('error_headers_auth_missing');
  }
  public set errorHeadersAuthMissing(value: string) {
    this._errorHeadersAuthMissing = value;
  }
  public resetErrorHeadersAuthMissing() {
    this._errorHeadersAuthMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorHeadersAuthMissingInput() {
    return this._errorHeadersAuthMissing;
  }

  // error_headers_limits_exceeded - computed: false, optional: true, required: false
  private _errorHeadersLimitsExceeded?: string; 
  public get errorHeadersLimitsExceeded() {
    return this.getStringAttribute('error_headers_limits_exceeded');
  }
  public set errorHeadersLimitsExceeded(value: string) {
    this._errorHeadersLimitsExceeded = value;
  }
  public resetErrorHeadersLimitsExceeded() {
    this._errorHeadersLimitsExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorHeadersLimitsExceededInput() {
    return this._errorHeadersLimitsExceeded;
  }

  // error_headers_no_match - computed: false, optional: true, required: false
  private _errorHeadersNoMatch?: string; 
  public get errorHeadersNoMatch() {
    return this.getStringAttribute('error_headers_no_match');
  }
  public set errorHeadersNoMatch(value: string) {
    this._errorHeadersNoMatch = value;
  }
  public resetErrorHeadersNoMatch() {
    this._errorHeadersNoMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorHeadersNoMatchInput() {
    return this._errorHeadersNoMatch;
  }

  // error_limits_exceeded - computed: false, optional: true, required: false
  private _errorLimitsExceeded?: string; 
  public get errorLimitsExceeded() {
    return this.getStringAttribute('error_limits_exceeded');
  }
  public set errorLimitsExceeded(value: string) {
    this._errorLimitsExceeded = value;
  }
  public resetErrorLimitsExceeded() {
    this._errorLimitsExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorLimitsExceededInput() {
    return this._errorLimitsExceeded;
  }

  // error_no_match - computed: false, optional: true, required: false
  private _errorNoMatch?: string; 
  public get errorNoMatch() {
    return this.getStringAttribute('error_no_match');
  }
  public set errorNoMatch(value: string) {
    this._errorNoMatch = value;
  }
  public resetErrorNoMatch() {
    this._errorNoMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorNoMatchInput() {
    return this._errorNoMatch;
  }

  // error_status_auth_failed - computed: false, optional: true, required: false
  private _errorStatusAuthFailed?: number; 
  public get errorStatusAuthFailed() {
    return this.getNumberAttribute('error_status_auth_failed');
  }
  public set errorStatusAuthFailed(value: number) {
    this._errorStatusAuthFailed = value;
  }
  public resetErrorStatusAuthFailed() {
    this._errorStatusAuthFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorStatusAuthFailedInput() {
    return this._errorStatusAuthFailed;
  }

  // error_status_auth_missing - computed: false, optional: true, required: false
  private _errorStatusAuthMissing?: number; 
  public get errorStatusAuthMissing() {
    return this.getNumberAttribute('error_status_auth_missing');
  }
  public set errorStatusAuthMissing(value: number) {
    this._errorStatusAuthMissing = value;
  }
  public resetErrorStatusAuthMissing() {
    this._errorStatusAuthMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorStatusAuthMissingInput() {
    return this._errorStatusAuthMissing;
  }

  // error_status_limits_exceeded - computed: false, optional: true, required: false
  private _errorStatusLimitsExceeded?: number; 
  public get errorStatusLimitsExceeded() {
    return this.getNumberAttribute('error_status_limits_exceeded');
  }
  public set errorStatusLimitsExceeded(value: number) {
    this._errorStatusLimitsExceeded = value;
  }
  public resetErrorStatusLimitsExceeded() {
    this._errorStatusLimitsExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorStatusLimitsExceededInput() {
    return this._errorStatusLimitsExceeded;
  }

  // error_status_no_match - computed: false, optional: true, required: false
  private _errorStatusNoMatch?: number; 
  public get errorStatusNoMatch() {
    return this.getNumberAttribute('error_status_no_match');
  }
  public set errorStatusNoMatch(value: number) {
    this._errorStatusNoMatch = value;
  }
  public resetErrorStatusNoMatch() {
    this._errorStatusNoMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorStatusNoMatchInput() {
    return this._errorStatusNoMatch;
  }
}
export interface DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationUserkeySecurity {
  /**
  * HostHeader Lets you define a custom Host request header. This is needed if your API backend only accepts traffic from a specific host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#host_header DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#host_header}
  */
  readonly hostHeader?: string;
  /**
  * SecretToken Enables you to block any direct developer requests to your API backend; each 3scale API gateway call to your API backend contains a request header called X-3scale-proxy-secret-token. The value of this header can be set by you here. It's up to you ensure your backend only allows calls with this secret header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#secret_token DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#secret_token}
  */
  readonly secretToken?: string;
}

export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationUserkeySecurityToTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationUserkeySecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_header: cdktf.stringToTerraform(struct!.hostHeader),
    secret_token: cdktf.stringToTerraform(struct!.secretToken),
  }
}


export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationUserkeySecurityToHclTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationUserkeySecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_header: {
      value: cdktf.stringToHclTerraform(struct!.hostHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_token: {
      value: cdktf.stringToHclTerraform(struct!.secretToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationUserkeySecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationUserkeySecurity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostHeader = this._hostHeader;
    }
    if (this._secretToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretToken = this._secretToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationUserkeySecurity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostHeader = undefined;
      this._secretToken = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostHeader = value.hostHeader;
      this._secretToken = value.secretToken;
    }
  }

  // host_header - computed: false, optional: true, required: false
  private _hostHeader?: string; 
  public get hostHeader() {
    return this.getStringAttribute('host_header');
  }
  public set hostHeader(value: string) {
    this._hostHeader = value;
  }
  public resetHostHeader() {
    this._hostHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostHeaderInput() {
    return this._hostHeader;
  }

  // secret_token - computed: false, optional: true, required: false
  private _secretToken?: string; 
  public get secretToken() {
    return this.getStringAttribute('secret_token');
  }
  public set secretToken(value: string) {
    this._secretToken = value;
  }
  public resetSecretToken() {
    this._secretToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretTokenInput() {
    return this._secretToken;
  }
}
export interface DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationUserkey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#auth_user_key DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#auth_user_key}
  */
  readonly authUserKey?: string;
  /**
  * Credentials Location available options: headers: As HTTP Headers query: As query parameters (GET) or body parameters (POST/PUT/DELETE) authorization: As HTTP Basic Authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#credentials DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#credentials}
  */
  readonly credentials?: string;
  /**
  * GatewayResponseSpec defines the desired gateway response configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#gateway_response DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#gateway_response}
  */
  readonly gatewayResponse?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationUserkeyGatewayResponse;
  /**
  * SecuritySpec defines the desired state of Authentication Security
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#security DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#security}
  */
  readonly security?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationUserkeySecurity;
}

export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationUserkeyToTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationUserkey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_user_key: cdktf.stringToTerraform(struct!.authUserKey),
    credentials: cdktf.stringToTerraform(struct!.credentials),
    gateway_response: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationUserkeyGatewayResponseToTerraform(struct!.gatewayResponse),
    security: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationUserkeySecurityToTerraform(struct!.security),
  }
}


export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationUserkeyToHclTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationUserkey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_user_key: {
      value: cdktf.stringToHclTerraform(struct!.authUserKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials: {
      value: cdktf.stringToHclTerraform(struct!.credentials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway_response: {
      value: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationUserkeyGatewayResponseToHclTerraform(struct!.gatewayResponse),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationUserkeyGatewayResponse",
    },
    security: {
      value: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationUserkeySecurityToHclTerraform(struct!.security),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationUserkeySecurity",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationUserkeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationUserkey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authUserKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.authUserKey = this._authUserKey;
    }
    if (this._credentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials;
    }
    if (this._gatewayResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayResponse = this._gatewayResponse?.internalValue;
    }
    if (this._security?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.security = this._security?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationUserkey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authUserKey = undefined;
      this._credentials = undefined;
      this._gatewayResponse.internalValue = undefined;
      this._security.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authUserKey = value.authUserKey;
      this._credentials = value.credentials;
      this._gatewayResponse.internalValue = value.gatewayResponse;
      this._security.internalValue = value.security;
    }
  }

  // auth_user_key - computed: false, optional: true, required: false
  private _authUserKey?: string; 
  public get authUserKey() {
    return this.getStringAttribute('auth_user_key');
  }
  public set authUserKey(value: string) {
    this._authUserKey = value;
  }
  public resetAuthUserKey() {
    this._authUserKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authUserKeyInput() {
    return this._authUserKey;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials?: string; 
  public get credentials() {
    return this.getStringAttribute('credentials');
  }
  public set credentials(value: string) {
    this._credentials = value;
  }
  public resetCredentials() {
    this._credentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }

  // gateway_response - computed: false, optional: true, required: false
  private _gatewayResponse = new DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationUserkeyGatewayResponseOutputReference(this, "gateway_response");
  public get gatewayResponse() {
    return this._gatewayResponse;
  }
  public putGatewayResponse(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationUserkeyGatewayResponse) {
    this._gatewayResponse.internalValue = value;
  }
  public resetGatewayResponse() {
    this._gatewayResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayResponseInput() {
    return this._gatewayResponse.internalValue;
  }

  // security - computed: false, optional: true, required: false
  private _security = new DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationUserkeySecurityOutputReference(this, "security");
  public get security() {
    return this._security;
  }
  public putSecurity(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationUserkeySecurity) {
    this._security.internalValue = value;
  }
  public resetSecurity() {
    this._security.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security.internalValue;
  }
}
export interface DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthentication {
  /**
  * AppKeyAppIDAuthenticationSpec defines the desired state of AppKey&AppId Authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#app_key_app_id DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#app_key_app_id}
  */
  readonly appKeyAppId?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationAppKeyAppId;
  /**
  * OIDCSpec defines the desired configuration of OpenID Connect Authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#oidc DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#oidc}
  */
  readonly oidc?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidc;
  /**
  * UserKeyAuthenticationSpec defines the desired state of User Key Authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#userkey DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#userkey}
  */
  readonly userkey?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationUserkey;
}

export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationToTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_key_app_id: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationAppKeyAppIdToTerraform(struct!.appKeyAppId),
    oidc: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcToTerraform(struct!.oidc),
    userkey: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationUserkeyToTerraform(struct!.userkey),
  }
}


export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationToHclTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_key_app_id: {
      value: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationAppKeyAppIdToHclTerraform(struct!.appKeyAppId),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationAppKeyAppId",
    },
    oidc: {
      value: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcToHclTerraform(struct!.oidc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidc",
    },
    userkey: {
      value: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationUserkeyToHclTerraform(struct!.userkey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationUserkey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appKeyAppId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appKeyAppId = this._appKeyAppId?.internalValue;
    }
    if (this._oidc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidc = this._oidc?.internalValue;
    }
    if (this._userkey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userkey = this._userkey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appKeyAppId.internalValue = undefined;
      this._oidc.internalValue = undefined;
      this._userkey.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appKeyAppId.internalValue = value.appKeyAppId;
      this._oidc.internalValue = value.oidc;
      this._userkey.internalValue = value.userkey;
    }
  }

  // app_key_app_id - computed: false, optional: true, required: false
  private _appKeyAppId = new DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationAppKeyAppIdOutputReference(this, "app_key_app_id");
  public get appKeyAppId() {
    return this._appKeyAppId;
  }
  public putAppKeyAppId(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationAppKeyAppId) {
    this._appKeyAppId.internalValue = value;
  }
  public resetAppKeyAppId() {
    this._appKeyAppId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appKeyAppIdInput() {
    return this._appKeyAppId.internalValue;
  }

  // oidc - computed: false, optional: true, required: false
  private _oidc = new DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidcOutputReference(this, "oidc");
  public get oidc() {
    return this._oidc;
  }
  public putOidc(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOidc) {
    this._oidc.internalValue = value;
  }
  public resetOidc() {
    this._oidc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcInput() {
    return this._oidc.internalValue;
  }

  // userkey - computed: false, optional: true, required: false
  private _userkey = new DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationUserkeyOutputReference(this, "userkey");
  public get userkey() {
    return this._userkey;
  }
  public putUserkey(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationUserkey) {
    this._userkey.internalValue = value;
  }
  public resetUserkey() {
    this._userkey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userkeyInput() {
    return this._userkey.internalValue;
  }
}
export interface DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHosted {
  /**
  * AuthenticationSpec defines the desired state of Product Authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#authentication DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#authentication}
  */
  readonly authentication?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthentication;
}

export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedToTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHosted | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationToTerraform(struct!.authentication),
  }
}


export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedToHclTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHosted | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthentication",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHosted | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHosted | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication.internalValue = value.authentication;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationAppKeyAppIdGatewayResponse {
  /**
  * ErrorAuthFailed specifies the response body when authentication fails
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_auth_failed DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_auth_failed}
  */
  readonly errorAuthFailed?: string;
  /**
  * ErrorAuthMissing specifies the response body when authentication is missing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_auth_missing DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_auth_missing}
  */
  readonly errorAuthMissing?: string;
  /**
  * ErrorHeadersAuthFailed specifies the Content-Type header when authentication fails
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_headers_auth_failed DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_headers_auth_failed}
  */
  readonly errorHeadersAuthFailed?: string;
  /**
  * ErrorHeadersAuthMissing specifies the Content-Type header when authentication is missing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_headers_auth_missing DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_headers_auth_missing}
  */
  readonly errorHeadersAuthMissing?: string;
  /**
  * ErrorHeadersLimitsExceeded specifies the Content-Type header when usage limit exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_headers_limits_exceeded DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_headers_limits_exceeded}
  */
  readonly errorHeadersLimitsExceeded?: string;
  /**
  * ErrorHeadersNoMatch specifies the Content-Type header when no match error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_headers_no_match DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_headers_no_match}
  */
  readonly errorHeadersNoMatch?: string;
  /**
  * ErrorLimitsExceeded specifies the response body when usage limit exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_limits_exceeded DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_limits_exceeded}
  */
  readonly errorLimitsExceeded?: string;
  /**
  * ErrorNoMatch specifies the response body when no match error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_no_match DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_no_match}
  */
  readonly errorNoMatch?: string;
  /**
  * ErrorStatusAuthFailed specifies the response code when authentication fails
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_status_auth_failed DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_status_auth_failed}
  */
  readonly errorStatusAuthFailed?: number;
  /**
  * ErrorStatusAuthMissing specifies the response code when authentication is missing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_status_auth_missing DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_status_auth_missing}
  */
  readonly errorStatusAuthMissing?: number;
  /**
  * ErrorStatusLimitsExceeded specifies the response code when usage limit exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_status_limits_exceeded DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_status_limits_exceeded}
  */
  readonly errorStatusLimitsExceeded?: number;
  /**
  * ErrorStatusNoMatch specifies the response code when no match error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_status_no_match DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_status_no_match}
  */
  readonly errorStatusNoMatch?: number;
}

export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationAppKeyAppIdGatewayResponseToTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationAppKeyAppIdGatewayResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_auth_failed: cdktf.stringToTerraform(struct!.errorAuthFailed),
    error_auth_missing: cdktf.stringToTerraform(struct!.errorAuthMissing),
    error_headers_auth_failed: cdktf.stringToTerraform(struct!.errorHeadersAuthFailed),
    error_headers_auth_missing: cdktf.stringToTerraform(struct!.errorHeadersAuthMissing),
    error_headers_limits_exceeded: cdktf.stringToTerraform(struct!.errorHeadersLimitsExceeded),
    error_headers_no_match: cdktf.stringToTerraform(struct!.errorHeadersNoMatch),
    error_limits_exceeded: cdktf.stringToTerraform(struct!.errorLimitsExceeded),
    error_no_match: cdktf.stringToTerraform(struct!.errorNoMatch),
    error_status_auth_failed: cdktf.numberToTerraform(struct!.errorStatusAuthFailed),
    error_status_auth_missing: cdktf.numberToTerraform(struct!.errorStatusAuthMissing),
    error_status_limits_exceeded: cdktf.numberToTerraform(struct!.errorStatusLimitsExceeded),
    error_status_no_match: cdktf.numberToTerraform(struct!.errorStatusNoMatch),
  }
}


export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationAppKeyAppIdGatewayResponseToHclTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationAppKeyAppIdGatewayResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_auth_failed: {
      value: cdktf.stringToHclTerraform(struct!.errorAuthFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_auth_missing: {
      value: cdktf.stringToHclTerraform(struct!.errorAuthMissing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_headers_auth_failed: {
      value: cdktf.stringToHclTerraform(struct!.errorHeadersAuthFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_headers_auth_missing: {
      value: cdktf.stringToHclTerraform(struct!.errorHeadersAuthMissing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_headers_limits_exceeded: {
      value: cdktf.stringToHclTerraform(struct!.errorHeadersLimitsExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_headers_no_match: {
      value: cdktf.stringToHclTerraform(struct!.errorHeadersNoMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_limits_exceeded: {
      value: cdktf.stringToHclTerraform(struct!.errorLimitsExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_no_match: {
      value: cdktf.stringToHclTerraform(struct!.errorNoMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_status_auth_failed: {
      value: cdktf.numberToHclTerraform(struct!.errorStatusAuthFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_status_auth_missing: {
      value: cdktf.numberToHclTerraform(struct!.errorStatusAuthMissing),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_status_limits_exceeded: {
      value: cdktf.numberToHclTerraform(struct!.errorStatusLimitsExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_status_no_match: {
      value: cdktf.numberToHclTerraform(struct!.errorStatusNoMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationAppKeyAppIdGatewayResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationAppKeyAppIdGatewayResponse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorAuthFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorAuthFailed = this._errorAuthFailed;
    }
    if (this._errorAuthMissing !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorAuthMissing = this._errorAuthMissing;
    }
    if (this._errorHeadersAuthFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorHeadersAuthFailed = this._errorHeadersAuthFailed;
    }
    if (this._errorHeadersAuthMissing !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorHeadersAuthMissing = this._errorHeadersAuthMissing;
    }
    if (this._errorHeadersLimitsExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorHeadersLimitsExceeded = this._errorHeadersLimitsExceeded;
    }
    if (this._errorHeadersNoMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorHeadersNoMatch = this._errorHeadersNoMatch;
    }
    if (this._errorLimitsExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorLimitsExceeded = this._errorLimitsExceeded;
    }
    if (this._errorNoMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorNoMatch = this._errorNoMatch;
    }
    if (this._errorStatusAuthFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorStatusAuthFailed = this._errorStatusAuthFailed;
    }
    if (this._errorStatusAuthMissing !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorStatusAuthMissing = this._errorStatusAuthMissing;
    }
    if (this._errorStatusLimitsExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorStatusLimitsExceeded = this._errorStatusLimitsExceeded;
    }
    if (this._errorStatusNoMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorStatusNoMatch = this._errorStatusNoMatch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationAppKeyAppIdGatewayResponse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._errorAuthFailed = undefined;
      this._errorAuthMissing = undefined;
      this._errorHeadersAuthFailed = undefined;
      this._errorHeadersAuthMissing = undefined;
      this._errorHeadersLimitsExceeded = undefined;
      this._errorHeadersNoMatch = undefined;
      this._errorLimitsExceeded = undefined;
      this._errorNoMatch = undefined;
      this._errorStatusAuthFailed = undefined;
      this._errorStatusAuthMissing = undefined;
      this._errorStatusLimitsExceeded = undefined;
      this._errorStatusNoMatch = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._errorAuthFailed = value.errorAuthFailed;
      this._errorAuthMissing = value.errorAuthMissing;
      this._errorHeadersAuthFailed = value.errorHeadersAuthFailed;
      this._errorHeadersAuthMissing = value.errorHeadersAuthMissing;
      this._errorHeadersLimitsExceeded = value.errorHeadersLimitsExceeded;
      this._errorHeadersNoMatch = value.errorHeadersNoMatch;
      this._errorLimitsExceeded = value.errorLimitsExceeded;
      this._errorNoMatch = value.errorNoMatch;
      this._errorStatusAuthFailed = value.errorStatusAuthFailed;
      this._errorStatusAuthMissing = value.errorStatusAuthMissing;
      this._errorStatusLimitsExceeded = value.errorStatusLimitsExceeded;
      this._errorStatusNoMatch = value.errorStatusNoMatch;
    }
  }

  // error_auth_failed - computed: false, optional: true, required: false
  private _errorAuthFailed?: string; 
  public get errorAuthFailed() {
    return this.getStringAttribute('error_auth_failed');
  }
  public set errorAuthFailed(value: string) {
    this._errorAuthFailed = value;
  }
  public resetErrorAuthFailed() {
    this._errorAuthFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorAuthFailedInput() {
    return this._errorAuthFailed;
  }

  // error_auth_missing - computed: false, optional: true, required: false
  private _errorAuthMissing?: string; 
  public get errorAuthMissing() {
    return this.getStringAttribute('error_auth_missing');
  }
  public set errorAuthMissing(value: string) {
    this._errorAuthMissing = value;
  }
  public resetErrorAuthMissing() {
    this._errorAuthMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorAuthMissingInput() {
    return this._errorAuthMissing;
  }

  // error_headers_auth_failed - computed: false, optional: true, required: false
  private _errorHeadersAuthFailed?: string; 
  public get errorHeadersAuthFailed() {
    return this.getStringAttribute('error_headers_auth_failed');
  }
  public set errorHeadersAuthFailed(value: string) {
    this._errorHeadersAuthFailed = value;
  }
  public resetErrorHeadersAuthFailed() {
    this._errorHeadersAuthFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorHeadersAuthFailedInput() {
    return this._errorHeadersAuthFailed;
  }

  // error_headers_auth_missing - computed: false, optional: true, required: false
  private _errorHeadersAuthMissing?: string; 
  public get errorHeadersAuthMissing() {
    return this.getStringAttribute('error_headers_auth_missing');
  }
  public set errorHeadersAuthMissing(value: string) {
    this._errorHeadersAuthMissing = value;
  }
  public resetErrorHeadersAuthMissing() {
    this._errorHeadersAuthMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorHeadersAuthMissingInput() {
    return this._errorHeadersAuthMissing;
  }

  // error_headers_limits_exceeded - computed: false, optional: true, required: false
  private _errorHeadersLimitsExceeded?: string; 
  public get errorHeadersLimitsExceeded() {
    return this.getStringAttribute('error_headers_limits_exceeded');
  }
  public set errorHeadersLimitsExceeded(value: string) {
    this._errorHeadersLimitsExceeded = value;
  }
  public resetErrorHeadersLimitsExceeded() {
    this._errorHeadersLimitsExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorHeadersLimitsExceededInput() {
    return this._errorHeadersLimitsExceeded;
  }

  // error_headers_no_match - computed: false, optional: true, required: false
  private _errorHeadersNoMatch?: string; 
  public get errorHeadersNoMatch() {
    return this.getStringAttribute('error_headers_no_match');
  }
  public set errorHeadersNoMatch(value: string) {
    this._errorHeadersNoMatch = value;
  }
  public resetErrorHeadersNoMatch() {
    this._errorHeadersNoMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorHeadersNoMatchInput() {
    return this._errorHeadersNoMatch;
  }

  // error_limits_exceeded - computed: false, optional: true, required: false
  private _errorLimitsExceeded?: string; 
  public get errorLimitsExceeded() {
    return this.getStringAttribute('error_limits_exceeded');
  }
  public set errorLimitsExceeded(value: string) {
    this._errorLimitsExceeded = value;
  }
  public resetErrorLimitsExceeded() {
    this._errorLimitsExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorLimitsExceededInput() {
    return this._errorLimitsExceeded;
  }

  // error_no_match - computed: false, optional: true, required: false
  private _errorNoMatch?: string; 
  public get errorNoMatch() {
    return this.getStringAttribute('error_no_match');
  }
  public set errorNoMatch(value: string) {
    this._errorNoMatch = value;
  }
  public resetErrorNoMatch() {
    this._errorNoMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorNoMatchInput() {
    return this._errorNoMatch;
  }

  // error_status_auth_failed - computed: false, optional: true, required: false
  private _errorStatusAuthFailed?: number; 
  public get errorStatusAuthFailed() {
    return this.getNumberAttribute('error_status_auth_failed');
  }
  public set errorStatusAuthFailed(value: number) {
    this._errorStatusAuthFailed = value;
  }
  public resetErrorStatusAuthFailed() {
    this._errorStatusAuthFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorStatusAuthFailedInput() {
    return this._errorStatusAuthFailed;
  }

  // error_status_auth_missing - computed: false, optional: true, required: false
  private _errorStatusAuthMissing?: number; 
  public get errorStatusAuthMissing() {
    return this.getNumberAttribute('error_status_auth_missing');
  }
  public set errorStatusAuthMissing(value: number) {
    this._errorStatusAuthMissing = value;
  }
  public resetErrorStatusAuthMissing() {
    this._errorStatusAuthMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorStatusAuthMissingInput() {
    return this._errorStatusAuthMissing;
  }

  // error_status_limits_exceeded - computed: false, optional: true, required: false
  private _errorStatusLimitsExceeded?: number; 
  public get errorStatusLimitsExceeded() {
    return this.getNumberAttribute('error_status_limits_exceeded');
  }
  public set errorStatusLimitsExceeded(value: number) {
    this._errorStatusLimitsExceeded = value;
  }
  public resetErrorStatusLimitsExceeded() {
    this._errorStatusLimitsExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorStatusLimitsExceededInput() {
    return this._errorStatusLimitsExceeded;
  }

  // error_status_no_match - computed: false, optional: true, required: false
  private _errorStatusNoMatch?: number; 
  public get errorStatusNoMatch() {
    return this.getNumberAttribute('error_status_no_match');
  }
  public set errorStatusNoMatch(value: number) {
    this._errorStatusNoMatch = value;
  }
  public resetErrorStatusNoMatch() {
    this._errorStatusNoMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorStatusNoMatchInput() {
    return this._errorStatusNoMatch;
  }
}
export interface DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationAppKeyAppIdSecurity {
  /**
  * HostHeader Lets you define a custom Host request header. This is needed if your API backend only accepts traffic from a specific host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#host_header DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#host_header}
  */
  readonly hostHeader?: string;
  /**
  * SecretToken Enables you to block any direct developer requests to your API backend; each 3scale API gateway call to your API backend contains a request header called X-3scale-proxy-secret-token. The value of this header can be set by you here. It's up to you ensure your backend only allows calls with this secret header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#secret_token DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#secret_token}
  */
  readonly secretToken?: string;
}

export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationAppKeyAppIdSecurityToTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationAppKeyAppIdSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_header: cdktf.stringToTerraform(struct!.hostHeader),
    secret_token: cdktf.stringToTerraform(struct!.secretToken),
  }
}


export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationAppKeyAppIdSecurityToHclTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationAppKeyAppIdSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_header: {
      value: cdktf.stringToHclTerraform(struct!.hostHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_token: {
      value: cdktf.stringToHclTerraform(struct!.secretToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationAppKeyAppIdSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationAppKeyAppIdSecurity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostHeader = this._hostHeader;
    }
    if (this._secretToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretToken = this._secretToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationAppKeyAppIdSecurity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostHeader = undefined;
      this._secretToken = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostHeader = value.hostHeader;
      this._secretToken = value.secretToken;
    }
  }

  // host_header - computed: false, optional: true, required: false
  private _hostHeader?: string; 
  public get hostHeader() {
    return this.getStringAttribute('host_header');
  }
  public set hostHeader(value: string) {
    this._hostHeader = value;
  }
  public resetHostHeader() {
    this._hostHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostHeaderInput() {
    return this._hostHeader;
  }

  // secret_token - computed: false, optional: true, required: false
  private _secretToken?: string; 
  public get secretToken() {
    return this.getStringAttribute('secret_token');
  }
  public set secretToken(value: string) {
    this._secretToken = value;
  }
  public resetSecretToken() {
    this._secretToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretTokenInput() {
    return this._secretToken;
  }
}
export interface DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationAppKeyAppId {
  /**
  * AppID is the name of the parameter that acts of behalf of app id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#app_id DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#app_id}
  */
  readonly appId?: string;
  /**
  * AppKey is the name of the parameter that acts of behalf of app key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#app_key DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#app_key}
  */
  readonly appKey?: string;
  /**
  * CredentialsLoc available options: headers: As HTTP Headers query: As query parameters (GET) or body parameters (POST/PUT/DELETE) authorization: As HTTP Basic Authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#credentials DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#credentials}
  */
  readonly credentials?: string;
  /**
  * GatewayResponseSpec defines the desired gateway response configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#gateway_response DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#gateway_response}
  */
  readonly gatewayResponse?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationAppKeyAppIdGatewayResponse;
  /**
  * SecuritySpec defines the desired state of Authentication Security
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#security DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#security}
  */
  readonly security?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationAppKeyAppIdSecurity;
}

export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationAppKeyAppIdToTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationAppKeyAppId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_id: cdktf.stringToTerraform(struct!.appId),
    app_key: cdktf.stringToTerraform(struct!.appKey),
    credentials: cdktf.stringToTerraform(struct!.credentials),
    gateway_response: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationAppKeyAppIdGatewayResponseToTerraform(struct!.gatewayResponse),
    security: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationAppKeyAppIdSecurityToTerraform(struct!.security),
  }
}


export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationAppKeyAppIdToHclTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationAppKeyAppId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_id: {
      value: cdktf.stringToHclTerraform(struct!.appId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_key: {
      value: cdktf.stringToHclTerraform(struct!.appKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials: {
      value: cdktf.stringToHclTerraform(struct!.credentials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway_response: {
      value: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationAppKeyAppIdGatewayResponseToHclTerraform(struct!.gatewayResponse),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationAppKeyAppIdGatewayResponse",
    },
    security: {
      value: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationAppKeyAppIdSecurityToHclTerraform(struct!.security),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationAppKeyAppIdSecurity",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationAppKeyAppIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationAppKeyAppId | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appId !== undefined) {
      hasAnyValues = true;
      internalValueResult.appId = this._appId;
    }
    if (this._appKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.appKey = this._appKey;
    }
    if (this._credentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials;
    }
    if (this._gatewayResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayResponse = this._gatewayResponse?.internalValue;
    }
    if (this._security?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.security = this._security?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationAppKeyAppId | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appId = undefined;
      this._appKey = undefined;
      this._credentials = undefined;
      this._gatewayResponse.internalValue = undefined;
      this._security.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appId = value.appId;
      this._appKey = value.appKey;
      this._credentials = value.credentials;
      this._gatewayResponse.internalValue = value.gatewayResponse;
      this._security.internalValue = value.security;
    }
  }

  // app_id - computed: false, optional: true, required: false
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  public resetAppId() {
    this._appId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }

  // app_key - computed: false, optional: true, required: false
  private _appKey?: string; 
  public get appKey() {
    return this.getStringAttribute('app_key');
  }
  public set appKey(value: string) {
    this._appKey = value;
  }
  public resetAppKey() {
    this._appKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appKeyInput() {
    return this._appKey;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials?: string; 
  public get credentials() {
    return this.getStringAttribute('credentials');
  }
  public set credentials(value: string) {
    this._credentials = value;
  }
  public resetCredentials() {
    this._credentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }

  // gateway_response - computed: false, optional: true, required: false
  private _gatewayResponse = new DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationAppKeyAppIdGatewayResponseOutputReference(this, "gateway_response");
  public get gatewayResponse() {
    return this._gatewayResponse;
  }
  public putGatewayResponse(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationAppKeyAppIdGatewayResponse) {
    this._gatewayResponse.internalValue = value;
  }
  public resetGatewayResponse() {
    this._gatewayResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayResponseInput() {
    return this._gatewayResponse.internalValue;
  }

  // security - computed: false, optional: true, required: false
  private _security = new DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationAppKeyAppIdSecurityOutputReference(this, "security");
  public get security() {
    return this._security;
  }
  public putSecurity(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationAppKeyAppIdSecurity) {
    this._security.internalValue = value;
  }
  public resetSecurity() {
    this._security.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security.internalValue;
  }
}
export interface DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcAuthenticationFlow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#direct_access_grants_enabled DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#direct_access_grants_enabled}
  */
  readonly directAccessGrantsEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#implicit_flow_enabled DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#implicit_flow_enabled}
  */
  readonly implicitFlowEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#service_accounts_enabled DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#service_accounts_enabled}
  */
  readonly serviceAccountsEnabled: boolean | cdktf.IResolvable;
  /**
  * OIDCIssuer is the OIDC issuer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#standard_flow_enabled DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#standard_flow_enabled}
  */
  readonly standardFlowEnabled: boolean | cdktf.IResolvable;
}

export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcAuthenticationFlowToTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcAuthenticationFlow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direct_access_grants_enabled: cdktf.booleanToTerraform(struct!.directAccessGrantsEnabled),
    implicit_flow_enabled: cdktf.booleanToTerraform(struct!.implicitFlowEnabled),
    service_accounts_enabled: cdktf.booleanToTerraform(struct!.serviceAccountsEnabled),
    standard_flow_enabled: cdktf.booleanToTerraform(struct!.standardFlowEnabled),
  }
}


export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcAuthenticationFlowToHclTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcAuthenticationFlow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direct_access_grants_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.directAccessGrantsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    implicit_flow_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.implicitFlowEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_accounts_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.serviceAccountsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    standard_flow_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.standardFlowEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcAuthenticationFlowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcAuthenticationFlow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directAccessGrantsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.directAccessGrantsEnabled = this._directAccessGrantsEnabled;
    }
    if (this._implicitFlowEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.implicitFlowEnabled = this._implicitFlowEnabled;
    }
    if (this._serviceAccountsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountsEnabled = this._serviceAccountsEnabled;
    }
    if (this._standardFlowEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.standardFlowEnabled = this._standardFlowEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcAuthenticationFlow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._directAccessGrantsEnabled = undefined;
      this._implicitFlowEnabled = undefined;
      this._serviceAccountsEnabled = undefined;
      this._standardFlowEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._directAccessGrantsEnabled = value.directAccessGrantsEnabled;
      this._implicitFlowEnabled = value.implicitFlowEnabled;
      this._serviceAccountsEnabled = value.serviceAccountsEnabled;
      this._standardFlowEnabled = value.standardFlowEnabled;
    }
  }

  // direct_access_grants_enabled - computed: false, optional: false, required: true
  private _directAccessGrantsEnabled?: boolean | cdktf.IResolvable; 
  public get directAccessGrantsEnabled() {
    return this.getBooleanAttribute('direct_access_grants_enabled');
  }
  public set directAccessGrantsEnabled(value: boolean | cdktf.IResolvable) {
    this._directAccessGrantsEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directAccessGrantsEnabledInput() {
    return this._directAccessGrantsEnabled;
  }

  // implicit_flow_enabled - computed: false, optional: false, required: true
  private _implicitFlowEnabled?: boolean | cdktf.IResolvable; 
  public get implicitFlowEnabled() {
    return this.getBooleanAttribute('implicit_flow_enabled');
  }
  public set implicitFlowEnabled(value: boolean | cdktf.IResolvable) {
    this._implicitFlowEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get implicitFlowEnabledInput() {
    return this._implicitFlowEnabled;
  }

  // service_accounts_enabled - computed: false, optional: false, required: true
  private _serviceAccountsEnabled?: boolean | cdktf.IResolvable; 
  public get serviceAccountsEnabled() {
    return this.getBooleanAttribute('service_accounts_enabled');
  }
  public set serviceAccountsEnabled(value: boolean | cdktf.IResolvable) {
    this._serviceAccountsEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountsEnabledInput() {
    return this._serviceAccountsEnabled;
  }

  // standard_flow_enabled - computed: false, optional: false, required: true
  private _standardFlowEnabled?: boolean | cdktf.IResolvable; 
  public get standardFlowEnabled() {
    return this.getBooleanAttribute('standard_flow_enabled');
  }
  public set standardFlowEnabled(value: boolean | cdktf.IResolvable) {
    this._standardFlowEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get standardFlowEnabledInput() {
    return this._standardFlowEnabled;
  }
}
export interface DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcGatewayResponse {
  /**
  * ErrorAuthFailed specifies the response body when authentication fails
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_auth_failed DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_auth_failed}
  */
  readonly errorAuthFailed?: string;
  /**
  * ErrorAuthMissing specifies the response body when authentication is missing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_auth_missing DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_auth_missing}
  */
  readonly errorAuthMissing?: string;
  /**
  * ErrorHeadersAuthFailed specifies the Content-Type header when authentication fails
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_headers_auth_failed DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_headers_auth_failed}
  */
  readonly errorHeadersAuthFailed?: string;
  /**
  * ErrorHeadersAuthMissing specifies the Content-Type header when authentication is missing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_headers_auth_missing DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_headers_auth_missing}
  */
  readonly errorHeadersAuthMissing?: string;
  /**
  * ErrorHeadersLimitsExceeded specifies the Content-Type header when usage limit exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_headers_limits_exceeded DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_headers_limits_exceeded}
  */
  readonly errorHeadersLimitsExceeded?: string;
  /**
  * ErrorHeadersNoMatch specifies the Content-Type header when no match error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_headers_no_match DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_headers_no_match}
  */
  readonly errorHeadersNoMatch?: string;
  /**
  * ErrorLimitsExceeded specifies the response body when usage limit exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_limits_exceeded DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_limits_exceeded}
  */
  readonly errorLimitsExceeded?: string;
  /**
  * ErrorNoMatch specifies the response body when no match error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_no_match DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_no_match}
  */
  readonly errorNoMatch?: string;
  /**
  * ErrorStatusAuthFailed specifies the response code when authentication fails
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_status_auth_failed DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_status_auth_failed}
  */
  readonly errorStatusAuthFailed?: number;
  /**
  * ErrorStatusAuthMissing specifies the response code when authentication is missing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_status_auth_missing DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_status_auth_missing}
  */
  readonly errorStatusAuthMissing?: number;
  /**
  * ErrorStatusLimitsExceeded specifies the response code when usage limit exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_status_limits_exceeded DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_status_limits_exceeded}
  */
  readonly errorStatusLimitsExceeded?: number;
  /**
  * ErrorStatusNoMatch specifies the response code when no match error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_status_no_match DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_status_no_match}
  */
  readonly errorStatusNoMatch?: number;
}

export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcGatewayResponseToTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcGatewayResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_auth_failed: cdktf.stringToTerraform(struct!.errorAuthFailed),
    error_auth_missing: cdktf.stringToTerraform(struct!.errorAuthMissing),
    error_headers_auth_failed: cdktf.stringToTerraform(struct!.errorHeadersAuthFailed),
    error_headers_auth_missing: cdktf.stringToTerraform(struct!.errorHeadersAuthMissing),
    error_headers_limits_exceeded: cdktf.stringToTerraform(struct!.errorHeadersLimitsExceeded),
    error_headers_no_match: cdktf.stringToTerraform(struct!.errorHeadersNoMatch),
    error_limits_exceeded: cdktf.stringToTerraform(struct!.errorLimitsExceeded),
    error_no_match: cdktf.stringToTerraform(struct!.errorNoMatch),
    error_status_auth_failed: cdktf.numberToTerraform(struct!.errorStatusAuthFailed),
    error_status_auth_missing: cdktf.numberToTerraform(struct!.errorStatusAuthMissing),
    error_status_limits_exceeded: cdktf.numberToTerraform(struct!.errorStatusLimitsExceeded),
    error_status_no_match: cdktf.numberToTerraform(struct!.errorStatusNoMatch),
  }
}


export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcGatewayResponseToHclTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcGatewayResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_auth_failed: {
      value: cdktf.stringToHclTerraform(struct!.errorAuthFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_auth_missing: {
      value: cdktf.stringToHclTerraform(struct!.errorAuthMissing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_headers_auth_failed: {
      value: cdktf.stringToHclTerraform(struct!.errorHeadersAuthFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_headers_auth_missing: {
      value: cdktf.stringToHclTerraform(struct!.errorHeadersAuthMissing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_headers_limits_exceeded: {
      value: cdktf.stringToHclTerraform(struct!.errorHeadersLimitsExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_headers_no_match: {
      value: cdktf.stringToHclTerraform(struct!.errorHeadersNoMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_limits_exceeded: {
      value: cdktf.stringToHclTerraform(struct!.errorLimitsExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_no_match: {
      value: cdktf.stringToHclTerraform(struct!.errorNoMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_status_auth_failed: {
      value: cdktf.numberToHclTerraform(struct!.errorStatusAuthFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_status_auth_missing: {
      value: cdktf.numberToHclTerraform(struct!.errorStatusAuthMissing),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_status_limits_exceeded: {
      value: cdktf.numberToHclTerraform(struct!.errorStatusLimitsExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_status_no_match: {
      value: cdktf.numberToHclTerraform(struct!.errorStatusNoMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcGatewayResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcGatewayResponse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorAuthFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorAuthFailed = this._errorAuthFailed;
    }
    if (this._errorAuthMissing !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorAuthMissing = this._errorAuthMissing;
    }
    if (this._errorHeadersAuthFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorHeadersAuthFailed = this._errorHeadersAuthFailed;
    }
    if (this._errorHeadersAuthMissing !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorHeadersAuthMissing = this._errorHeadersAuthMissing;
    }
    if (this._errorHeadersLimitsExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorHeadersLimitsExceeded = this._errorHeadersLimitsExceeded;
    }
    if (this._errorHeadersNoMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorHeadersNoMatch = this._errorHeadersNoMatch;
    }
    if (this._errorLimitsExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorLimitsExceeded = this._errorLimitsExceeded;
    }
    if (this._errorNoMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorNoMatch = this._errorNoMatch;
    }
    if (this._errorStatusAuthFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorStatusAuthFailed = this._errorStatusAuthFailed;
    }
    if (this._errorStatusAuthMissing !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorStatusAuthMissing = this._errorStatusAuthMissing;
    }
    if (this._errorStatusLimitsExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorStatusLimitsExceeded = this._errorStatusLimitsExceeded;
    }
    if (this._errorStatusNoMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorStatusNoMatch = this._errorStatusNoMatch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcGatewayResponse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._errorAuthFailed = undefined;
      this._errorAuthMissing = undefined;
      this._errorHeadersAuthFailed = undefined;
      this._errorHeadersAuthMissing = undefined;
      this._errorHeadersLimitsExceeded = undefined;
      this._errorHeadersNoMatch = undefined;
      this._errorLimitsExceeded = undefined;
      this._errorNoMatch = undefined;
      this._errorStatusAuthFailed = undefined;
      this._errorStatusAuthMissing = undefined;
      this._errorStatusLimitsExceeded = undefined;
      this._errorStatusNoMatch = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._errorAuthFailed = value.errorAuthFailed;
      this._errorAuthMissing = value.errorAuthMissing;
      this._errorHeadersAuthFailed = value.errorHeadersAuthFailed;
      this._errorHeadersAuthMissing = value.errorHeadersAuthMissing;
      this._errorHeadersLimitsExceeded = value.errorHeadersLimitsExceeded;
      this._errorHeadersNoMatch = value.errorHeadersNoMatch;
      this._errorLimitsExceeded = value.errorLimitsExceeded;
      this._errorNoMatch = value.errorNoMatch;
      this._errorStatusAuthFailed = value.errorStatusAuthFailed;
      this._errorStatusAuthMissing = value.errorStatusAuthMissing;
      this._errorStatusLimitsExceeded = value.errorStatusLimitsExceeded;
      this._errorStatusNoMatch = value.errorStatusNoMatch;
    }
  }

  // error_auth_failed - computed: false, optional: true, required: false
  private _errorAuthFailed?: string; 
  public get errorAuthFailed() {
    return this.getStringAttribute('error_auth_failed');
  }
  public set errorAuthFailed(value: string) {
    this._errorAuthFailed = value;
  }
  public resetErrorAuthFailed() {
    this._errorAuthFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorAuthFailedInput() {
    return this._errorAuthFailed;
  }

  // error_auth_missing - computed: false, optional: true, required: false
  private _errorAuthMissing?: string; 
  public get errorAuthMissing() {
    return this.getStringAttribute('error_auth_missing');
  }
  public set errorAuthMissing(value: string) {
    this._errorAuthMissing = value;
  }
  public resetErrorAuthMissing() {
    this._errorAuthMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorAuthMissingInput() {
    return this._errorAuthMissing;
  }

  // error_headers_auth_failed - computed: false, optional: true, required: false
  private _errorHeadersAuthFailed?: string; 
  public get errorHeadersAuthFailed() {
    return this.getStringAttribute('error_headers_auth_failed');
  }
  public set errorHeadersAuthFailed(value: string) {
    this._errorHeadersAuthFailed = value;
  }
  public resetErrorHeadersAuthFailed() {
    this._errorHeadersAuthFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorHeadersAuthFailedInput() {
    return this._errorHeadersAuthFailed;
  }

  // error_headers_auth_missing - computed: false, optional: true, required: false
  private _errorHeadersAuthMissing?: string; 
  public get errorHeadersAuthMissing() {
    return this.getStringAttribute('error_headers_auth_missing');
  }
  public set errorHeadersAuthMissing(value: string) {
    this._errorHeadersAuthMissing = value;
  }
  public resetErrorHeadersAuthMissing() {
    this._errorHeadersAuthMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorHeadersAuthMissingInput() {
    return this._errorHeadersAuthMissing;
  }

  // error_headers_limits_exceeded - computed: false, optional: true, required: false
  private _errorHeadersLimitsExceeded?: string; 
  public get errorHeadersLimitsExceeded() {
    return this.getStringAttribute('error_headers_limits_exceeded');
  }
  public set errorHeadersLimitsExceeded(value: string) {
    this._errorHeadersLimitsExceeded = value;
  }
  public resetErrorHeadersLimitsExceeded() {
    this._errorHeadersLimitsExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorHeadersLimitsExceededInput() {
    return this._errorHeadersLimitsExceeded;
  }

  // error_headers_no_match - computed: false, optional: true, required: false
  private _errorHeadersNoMatch?: string; 
  public get errorHeadersNoMatch() {
    return this.getStringAttribute('error_headers_no_match');
  }
  public set errorHeadersNoMatch(value: string) {
    this._errorHeadersNoMatch = value;
  }
  public resetErrorHeadersNoMatch() {
    this._errorHeadersNoMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorHeadersNoMatchInput() {
    return this._errorHeadersNoMatch;
  }

  // error_limits_exceeded - computed: false, optional: true, required: false
  private _errorLimitsExceeded?: string; 
  public get errorLimitsExceeded() {
    return this.getStringAttribute('error_limits_exceeded');
  }
  public set errorLimitsExceeded(value: string) {
    this._errorLimitsExceeded = value;
  }
  public resetErrorLimitsExceeded() {
    this._errorLimitsExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorLimitsExceededInput() {
    return this._errorLimitsExceeded;
  }

  // error_no_match - computed: false, optional: true, required: false
  private _errorNoMatch?: string; 
  public get errorNoMatch() {
    return this.getStringAttribute('error_no_match');
  }
  public set errorNoMatch(value: string) {
    this._errorNoMatch = value;
  }
  public resetErrorNoMatch() {
    this._errorNoMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorNoMatchInput() {
    return this._errorNoMatch;
  }

  // error_status_auth_failed - computed: false, optional: true, required: false
  private _errorStatusAuthFailed?: number; 
  public get errorStatusAuthFailed() {
    return this.getNumberAttribute('error_status_auth_failed');
  }
  public set errorStatusAuthFailed(value: number) {
    this._errorStatusAuthFailed = value;
  }
  public resetErrorStatusAuthFailed() {
    this._errorStatusAuthFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorStatusAuthFailedInput() {
    return this._errorStatusAuthFailed;
  }

  // error_status_auth_missing - computed: false, optional: true, required: false
  private _errorStatusAuthMissing?: number; 
  public get errorStatusAuthMissing() {
    return this.getNumberAttribute('error_status_auth_missing');
  }
  public set errorStatusAuthMissing(value: number) {
    this._errorStatusAuthMissing = value;
  }
  public resetErrorStatusAuthMissing() {
    this._errorStatusAuthMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorStatusAuthMissingInput() {
    return this._errorStatusAuthMissing;
  }

  // error_status_limits_exceeded - computed: false, optional: true, required: false
  private _errorStatusLimitsExceeded?: number; 
  public get errorStatusLimitsExceeded() {
    return this.getNumberAttribute('error_status_limits_exceeded');
  }
  public set errorStatusLimitsExceeded(value: number) {
    this._errorStatusLimitsExceeded = value;
  }
  public resetErrorStatusLimitsExceeded() {
    this._errorStatusLimitsExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorStatusLimitsExceededInput() {
    return this._errorStatusLimitsExceeded;
  }

  // error_status_no_match - computed: false, optional: true, required: false
  private _errorStatusNoMatch?: number; 
  public get errorStatusNoMatch() {
    return this.getNumberAttribute('error_status_no_match');
  }
  public set errorStatusNoMatch(value: number) {
    this._errorStatusNoMatch = value;
  }
  public resetErrorStatusNoMatch() {
    this._errorStatusNoMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorStatusNoMatchInput() {
    return this._errorStatusNoMatch;
  }
}
export interface DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcIssuerEndpointRef {
  /**
  * name is unique within a namespace to reference a secret resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#name DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * namespace defines the space within which the secret name must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#namespace DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcIssuerEndpointRefToTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcIssuerEndpointRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcIssuerEndpointRefToHclTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcIssuerEndpointRef | cdktf.IResolvable): any {
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

export class DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcIssuerEndpointRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcIssuerEndpointRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcIssuerEndpointRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._namespace = value.namespace;
    }
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcSecurity {
  /**
  * HostHeader Lets you define a custom Host request header. This is needed if your API backend only accepts traffic from a specific host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#host_header DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#host_header}
  */
  readonly hostHeader?: string;
  /**
  * SecretToken Enables you to block any direct developer requests to your API backend; each 3scale API gateway call to your API backend contains a request header called X-3scale-proxy-secret-token. The value of this header can be set by you here. It's up to you ensure your backend only allows calls with this secret header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#secret_token DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#secret_token}
  */
  readonly secretToken?: string;
}

export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcSecurityToTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_header: cdktf.stringToTerraform(struct!.hostHeader),
    secret_token: cdktf.stringToTerraform(struct!.secretToken),
  }
}


export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcSecurityToHclTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_header: {
      value: cdktf.stringToHclTerraform(struct!.hostHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_token: {
      value: cdktf.stringToHclTerraform(struct!.secretToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcSecurity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostHeader = this._hostHeader;
    }
    if (this._secretToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretToken = this._secretToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcSecurity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostHeader = undefined;
      this._secretToken = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostHeader = value.hostHeader;
      this._secretToken = value.secretToken;
    }
  }

  // host_header - computed: false, optional: true, required: false
  private _hostHeader?: string; 
  public get hostHeader() {
    return this.getStringAttribute('host_header');
  }
  public set hostHeader(value: string) {
    this._hostHeader = value;
  }
  public resetHostHeader() {
    this._hostHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostHeaderInput() {
    return this._hostHeader;
  }

  // secret_token - computed: false, optional: true, required: false
  private _secretToken?: string; 
  public get secretToken() {
    return this.getStringAttribute('secret_token');
  }
  public set secretToken(value: string) {
    this._secretToken = value;
  }
  public resetSecretToken() {
    this._secretToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretTokenInput() {
    return this._secretToken;
  }
}
export interface DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidc {
  /**
  * AuthenticationFlow specifies OAuth2.0 authorization grant type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#authentication_flow DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#authentication_flow}
  */
  readonly authenticationFlow?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcAuthenticationFlow;
  /**
  * Credentials Location available options: headers: As HTTP Headers query: As query parameters (GET) or body parameters (POST/PUT/DELETE) authorization: As HTTP Basic Authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#credentials DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#credentials}
  */
  readonly credentials?: string;
  /**
  * GatewayResponseSpec defines the desired gateway response configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#gateway_response DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#gateway_response}
  */
  readonly gatewayResponse?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcGatewayResponse;
  /**
  * Issuer is the OIDC issuer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#issuer_endpoint DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#issuer_endpoint}
  */
  readonly issuerEndpoint?: string;
  /**
  * IssuerEndpointRef is the reference to OIDC issuer Secret that contains IssuerEndpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#issuer_endpoint_ref DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#issuer_endpoint_ref}
  */
  readonly issuerEndpointRef?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcIssuerEndpointRef;
  /**
  * IssuerType is the type of the OIDC issuer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#issuer_type DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#issuer_type}
  */
  readonly issuerType: string;
  /**
  * JwtClaimWithClientID is the JSON Web Token (JWT) Claim with ClientID that contains the clientID. Defaults to 'azp'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#jwt_claim_with_client_id DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#jwt_claim_with_client_id}
  */
  readonly jwtClaimWithClientId?: string;
  /**
  * JwtClaimWithClientIDType sets to process the ClientID Token Claim value as a string or as a liquid template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#jwt_claim_with_client_id_type DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#jwt_claim_with_client_id_type}
  */
  readonly jwtClaimWithClientIdType?: string;
  /**
  * SecuritySpec defines the desired state of Authentication Security
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#security DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#security}
  */
  readonly security?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcSecurity;
}

export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcToTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_flow: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcAuthenticationFlowToTerraform(struct!.authenticationFlow),
    credentials: cdktf.stringToTerraform(struct!.credentials),
    gateway_response: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcGatewayResponseToTerraform(struct!.gatewayResponse),
    issuer_endpoint: cdktf.stringToTerraform(struct!.issuerEndpoint),
    issuer_endpoint_ref: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcIssuerEndpointRefToTerraform(struct!.issuerEndpointRef),
    issuer_type: cdktf.stringToTerraform(struct!.issuerType),
    jwt_claim_with_client_id: cdktf.stringToTerraform(struct!.jwtClaimWithClientId),
    jwt_claim_with_client_id_type: cdktf.stringToTerraform(struct!.jwtClaimWithClientIdType),
    security: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcSecurityToTerraform(struct!.security),
  }
}


export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcToHclTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_flow: {
      value: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcAuthenticationFlowToHclTerraform(struct!.authenticationFlow),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcAuthenticationFlow",
    },
    credentials: {
      value: cdktf.stringToHclTerraform(struct!.credentials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway_response: {
      value: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcGatewayResponseToHclTerraform(struct!.gatewayResponse),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcGatewayResponse",
    },
    issuer_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.issuerEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer_endpoint_ref: {
      value: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcIssuerEndpointRefToHclTerraform(struct!.issuerEndpointRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcIssuerEndpointRef",
    },
    issuer_type: {
      value: cdktf.stringToHclTerraform(struct!.issuerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwt_claim_with_client_id: {
      value: cdktf.stringToHclTerraform(struct!.jwtClaimWithClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwt_claim_with_client_id_type: {
      value: cdktf.stringToHclTerraform(struct!.jwtClaimWithClientIdType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security: {
      value: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcSecurityToHclTerraform(struct!.security),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcSecurity",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationFlow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationFlow = this._authenticationFlow?.internalValue;
    }
    if (this._credentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials;
    }
    if (this._gatewayResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayResponse = this._gatewayResponse?.internalValue;
    }
    if (this._issuerEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerEndpoint = this._issuerEndpoint;
    }
    if (this._issuerEndpointRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerEndpointRef = this._issuerEndpointRef?.internalValue;
    }
    if (this._issuerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerType = this._issuerType;
    }
    if (this._jwtClaimWithClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtClaimWithClientId = this._jwtClaimWithClientId;
    }
    if (this._jwtClaimWithClientIdType !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtClaimWithClientIdType = this._jwtClaimWithClientIdType;
    }
    if (this._security?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.security = this._security?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationFlow.internalValue = undefined;
      this._credentials = undefined;
      this._gatewayResponse.internalValue = undefined;
      this._issuerEndpoint = undefined;
      this._issuerEndpointRef.internalValue = undefined;
      this._issuerType = undefined;
      this._jwtClaimWithClientId = undefined;
      this._jwtClaimWithClientIdType = undefined;
      this._security.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationFlow.internalValue = value.authenticationFlow;
      this._credentials = value.credentials;
      this._gatewayResponse.internalValue = value.gatewayResponse;
      this._issuerEndpoint = value.issuerEndpoint;
      this._issuerEndpointRef.internalValue = value.issuerEndpointRef;
      this._issuerType = value.issuerType;
      this._jwtClaimWithClientId = value.jwtClaimWithClientId;
      this._jwtClaimWithClientIdType = value.jwtClaimWithClientIdType;
      this._security.internalValue = value.security;
    }
  }

  // authentication_flow - computed: false, optional: true, required: false
  private _authenticationFlow = new DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcAuthenticationFlowOutputReference(this, "authentication_flow");
  public get authenticationFlow() {
    return this._authenticationFlow;
  }
  public putAuthenticationFlow(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcAuthenticationFlow) {
    this._authenticationFlow.internalValue = value;
  }
  public resetAuthenticationFlow() {
    this._authenticationFlow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationFlowInput() {
    return this._authenticationFlow.internalValue;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials?: string; 
  public get credentials() {
    return this.getStringAttribute('credentials');
  }
  public set credentials(value: string) {
    this._credentials = value;
  }
  public resetCredentials() {
    this._credentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }

  // gateway_response - computed: false, optional: true, required: false
  private _gatewayResponse = new DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcGatewayResponseOutputReference(this, "gateway_response");
  public get gatewayResponse() {
    return this._gatewayResponse;
  }
  public putGatewayResponse(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcGatewayResponse) {
    this._gatewayResponse.internalValue = value;
  }
  public resetGatewayResponse() {
    this._gatewayResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayResponseInput() {
    return this._gatewayResponse.internalValue;
  }

  // issuer_endpoint - computed: false, optional: true, required: false
  private _issuerEndpoint?: string; 
  public get issuerEndpoint() {
    return this.getStringAttribute('issuer_endpoint');
  }
  public set issuerEndpoint(value: string) {
    this._issuerEndpoint = value;
  }
  public resetIssuerEndpoint() {
    this._issuerEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerEndpointInput() {
    return this._issuerEndpoint;
  }

  // issuer_endpoint_ref - computed: false, optional: true, required: false
  private _issuerEndpointRef = new DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcIssuerEndpointRefOutputReference(this, "issuer_endpoint_ref");
  public get issuerEndpointRef() {
    return this._issuerEndpointRef;
  }
  public putIssuerEndpointRef(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcIssuerEndpointRef) {
    this._issuerEndpointRef.internalValue = value;
  }
  public resetIssuerEndpointRef() {
    this._issuerEndpointRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerEndpointRefInput() {
    return this._issuerEndpointRef.internalValue;
  }

  // issuer_type - computed: false, optional: false, required: true
  private _issuerType?: string; 
  public get issuerType() {
    return this.getStringAttribute('issuer_type');
  }
  public set issuerType(value: string) {
    this._issuerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerTypeInput() {
    return this._issuerType;
  }

  // jwt_claim_with_client_id - computed: false, optional: true, required: false
  private _jwtClaimWithClientId?: string; 
  public get jwtClaimWithClientId() {
    return this.getStringAttribute('jwt_claim_with_client_id');
  }
  public set jwtClaimWithClientId(value: string) {
    this._jwtClaimWithClientId = value;
  }
  public resetJwtClaimWithClientId() {
    this._jwtClaimWithClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtClaimWithClientIdInput() {
    return this._jwtClaimWithClientId;
  }

  // jwt_claim_with_client_id_type - computed: false, optional: true, required: false
  private _jwtClaimWithClientIdType?: string; 
  public get jwtClaimWithClientIdType() {
    return this.getStringAttribute('jwt_claim_with_client_id_type');
  }
  public set jwtClaimWithClientIdType(value: string) {
    this._jwtClaimWithClientIdType = value;
  }
  public resetJwtClaimWithClientIdType() {
    this._jwtClaimWithClientIdType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtClaimWithClientIdTypeInput() {
    return this._jwtClaimWithClientIdType;
  }

  // security - computed: false, optional: true, required: false
  private _security = new DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcSecurityOutputReference(this, "security");
  public get security() {
    return this._security;
  }
  public putSecurity(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcSecurity) {
    this._security.internalValue = value;
  }
  public resetSecurity() {
    this._security.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security.internalValue;
  }
}
export interface DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationUserkeyGatewayResponse {
  /**
  * ErrorAuthFailed specifies the response body when authentication fails
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_auth_failed DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_auth_failed}
  */
  readonly errorAuthFailed?: string;
  /**
  * ErrorAuthMissing specifies the response body when authentication is missing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_auth_missing DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_auth_missing}
  */
  readonly errorAuthMissing?: string;
  /**
  * ErrorHeadersAuthFailed specifies the Content-Type header when authentication fails
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_headers_auth_failed DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_headers_auth_failed}
  */
  readonly errorHeadersAuthFailed?: string;
  /**
  * ErrorHeadersAuthMissing specifies the Content-Type header when authentication is missing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_headers_auth_missing DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_headers_auth_missing}
  */
  readonly errorHeadersAuthMissing?: string;
  /**
  * ErrorHeadersLimitsExceeded specifies the Content-Type header when usage limit exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_headers_limits_exceeded DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_headers_limits_exceeded}
  */
  readonly errorHeadersLimitsExceeded?: string;
  /**
  * ErrorHeadersNoMatch specifies the Content-Type header when no match error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_headers_no_match DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_headers_no_match}
  */
  readonly errorHeadersNoMatch?: string;
  /**
  * ErrorLimitsExceeded specifies the response body when usage limit exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_limits_exceeded DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_limits_exceeded}
  */
  readonly errorLimitsExceeded?: string;
  /**
  * ErrorNoMatch specifies the response body when no match error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_no_match DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_no_match}
  */
  readonly errorNoMatch?: string;
  /**
  * ErrorStatusAuthFailed specifies the response code when authentication fails
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_status_auth_failed DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_status_auth_failed}
  */
  readonly errorStatusAuthFailed?: number;
  /**
  * ErrorStatusAuthMissing specifies the response code when authentication is missing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_status_auth_missing DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_status_auth_missing}
  */
  readonly errorStatusAuthMissing?: number;
  /**
  * ErrorStatusLimitsExceeded specifies the response code when usage limit exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_status_limits_exceeded DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_status_limits_exceeded}
  */
  readonly errorStatusLimitsExceeded?: number;
  /**
  * ErrorStatusNoMatch specifies the response code when no match error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#error_status_no_match DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#error_status_no_match}
  */
  readonly errorStatusNoMatch?: number;
}

export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationUserkeyGatewayResponseToTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationUserkeyGatewayResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_auth_failed: cdktf.stringToTerraform(struct!.errorAuthFailed),
    error_auth_missing: cdktf.stringToTerraform(struct!.errorAuthMissing),
    error_headers_auth_failed: cdktf.stringToTerraform(struct!.errorHeadersAuthFailed),
    error_headers_auth_missing: cdktf.stringToTerraform(struct!.errorHeadersAuthMissing),
    error_headers_limits_exceeded: cdktf.stringToTerraform(struct!.errorHeadersLimitsExceeded),
    error_headers_no_match: cdktf.stringToTerraform(struct!.errorHeadersNoMatch),
    error_limits_exceeded: cdktf.stringToTerraform(struct!.errorLimitsExceeded),
    error_no_match: cdktf.stringToTerraform(struct!.errorNoMatch),
    error_status_auth_failed: cdktf.numberToTerraform(struct!.errorStatusAuthFailed),
    error_status_auth_missing: cdktf.numberToTerraform(struct!.errorStatusAuthMissing),
    error_status_limits_exceeded: cdktf.numberToTerraform(struct!.errorStatusLimitsExceeded),
    error_status_no_match: cdktf.numberToTerraform(struct!.errorStatusNoMatch),
  }
}


export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationUserkeyGatewayResponseToHclTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationUserkeyGatewayResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_auth_failed: {
      value: cdktf.stringToHclTerraform(struct!.errorAuthFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_auth_missing: {
      value: cdktf.stringToHclTerraform(struct!.errorAuthMissing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_headers_auth_failed: {
      value: cdktf.stringToHclTerraform(struct!.errorHeadersAuthFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_headers_auth_missing: {
      value: cdktf.stringToHclTerraform(struct!.errorHeadersAuthMissing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_headers_limits_exceeded: {
      value: cdktf.stringToHclTerraform(struct!.errorHeadersLimitsExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_headers_no_match: {
      value: cdktf.stringToHclTerraform(struct!.errorHeadersNoMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_limits_exceeded: {
      value: cdktf.stringToHclTerraform(struct!.errorLimitsExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_no_match: {
      value: cdktf.stringToHclTerraform(struct!.errorNoMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_status_auth_failed: {
      value: cdktf.numberToHclTerraform(struct!.errorStatusAuthFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_status_auth_missing: {
      value: cdktf.numberToHclTerraform(struct!.errorStatusAuthMissing),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_status_limits_exceeded: {
      value: cdktf.numberToHclTerraform(struct!.errorStatusLimitsExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_status_no_match: {
      value: cdktf.numberToHclTerraform(struct!.errorStatusNoMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationUserkeyGatewayResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationUserkeyGatewayResponse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorAuthFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorAuthFailed = this._errorAuthFailed;
    }
    if (this._errorAuthMissing !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorAuthMissing = this._errorAuthMissing;
    }
    if (this._errorHeadersAuthFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorHeadersAuthFailed = this._errorHeadersAuthFailed;
    }
    if (this._errorHeadersAuthMissing !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorHeadersAuthMissing = this._errorHeadersAuthMissing;
    }
    if (this._errorHeadersLimitsExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorHeadersLimitsExceeded = this._errorHeadersLimitsExceeded;
    }
    if (this._errorHeadersNoMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorHeadersNoMatch = this._errorHeadersNoMatch;
    }
    if (this._errorLimitsExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorLimitsExceeded = this._errorLimitsExceeded;
    }
    if (this._errorNoMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorNoMatch = this._errorNoMatch;
    }
    if (this._errorStatusAuthFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorStatusAuthFailed = this._errorStatusAuthFailed;
    }
    if (this._errorStatusAuthMissing !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorStatusAuthMissing = this._errorStatusAuthMissing;
    }
    if (this._errorStatusLimitsExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorStatusLimitsExceeded = this._errorStatusLimitsExceeded;
    }
    if (this._errorStatusNoMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorStatusNoMatch = this._errorStatusNoMatch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationUserkeyGatewayResponse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._errorAuthFailed = undefined;
      this._errorAuthMissing = undefined;
      this._errorHeadersAuthFailed = undefined;
      this._errorHeadersAuthMissing = undefined;
      this._errorHeadersLimitsExceeded = undefined;
      this._errorHeadersNoMatch = undefined;
      this._errorLimitsExceeded = undefined;
      this._errorNoMatch = undefined;
      this._errorStatusAuthFailed = undefined;
      this._errorStatusAuthMissing = undefined;
      this._errorStatusLimitsExceeded = undefined;
      this._errorStatusNoMatch = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._errorAuthFailed = value.errorAuthFailed;
      this._errorAuthMissing = value.errorAuthMissing;
      this._errorHeadersAuthFailed = value.errorHeadersAuthFailed;
      this._errorHeadersAuthMissing = value.errorHeadersAuthMissing;
      this._errorHeadersLimitsExceeded = value.errorHeadersLimitsExceeded;
      this._errorHeadersNoMatch = value.errorHeadersNoMatch;
      this._errorLimitsExceeded = value.errorLimitsExceeded;
      this._errorNoMatch = value.errorNoMatch;
      this._errorStatusAuthFailed = value.errorStatusAuthFailed;
      this._errorStatusAuthMissing = value.errorStatusAuthMissing;
      this._errorStatusLimitsExceeded = value.errorStatusLimitsExceeded;
      this._errorStatusNoMatch = value.errorStatusNoMatch;
    }
  }

  // error_auth_failed - computed: false, optional: true, required: false
  private _errorAuthFailed?: string; 
  public get errorAuthFailed() {
    return this.getStringAttribute('error_auth_failed');
  }
  public set errorAuthFailed(value: string) {
    this._errorAuthFailed = value;
  }
  public resetErrorAuthFailed() {
    this._errorAuthFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorAuthFailedInput() {
    return this._errorAuthFailed;
  }

  // error_auth_missing - computed: false, optional: true, required: false
  private _errorAuthMissing?: string; 
  public get errorAuthMissing() {
    return this.getStringAttribute('error_auth_missing');
  }
  public set errorAuthMissing(value: string) {
    this._errorAuthMissing = value;
  }
  public resetErrorAuthMissing() {
    this._errorAuthMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorAuthMissingInput() {
    return this._errorAuthMissing;
  }

  // error_headers_auth_failed - computed: false, optional: true, required: false
  private _errorHeadersAuthFailed?: string; 
  public get errorHeadersAuthFailed() {
    return this.getStringAttribute('error_headers_auth_failed');
  }
  public set errorHeadersAuthFailed(value: string) {
    this._errorHeadersAuthFailed = value;
  }
  public resetErrorHeadersAuthFailed() {
    this._errorHeadersAuthFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorHeadersAuthFailedInput() {
    return this._errorHeadersAuthFailed;
  }

  // error_headers_auth_missing - computed: false, optional: true, required: false
  private _errorHeadersAuthMissing?: string; 
  public get errorHeadersAuthMissing() {
    return this.getStringAttribute('error_headers_auth_missing');
  }
  public set errorHeadersAuthMissing(value: string) {
    this._errorHeadersAuthMissing = value;
  }
  public resetErrorHeadersAuthMissing() {
    this._errorHeadersAuthMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorHeadersAuthMissingInput() {
    return this._errorHeadersAuthMissing;
  }

  // error_headers_limits_exceeded - computed: false, optional: true, required: false
  private _errorHeadersLimitsExceeded?: string; 
  public get errorHeadersLimitsExceeded() {
    return this.getStringAttribute('error_headers_limits_exceeded');
  }
  public set errorHeadersLimitsExceeded(value: string) {
    this._errorHeadersLimitsExceeded = value;
  }
  public resetErrorHeadersLimitsExceeded() {
    this._errorHeadersLimitsExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorHeadersLimitsExceededInput() {
    return this._errorHeadersLimitsExceeded;
  }

  // error_headers_no_match - computed: false, optional: true, required: false
  private _errorHeadersNoMatch?: string; 
  public get errorHeadersNoMatch() {
    return this.getStringAttribute('error_headers_no_match');
  }
  public set errorHeadersNoMatch(value: string) {
    this._errorHeadersNoMatch = value;
  }
  public resetErrorHeadersNoMatch() {
    this._errorHeadersNoMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorHeadersNoMatchInput() {
    return this._errorHeadersNoMatch;
  }

  // error_limits_exceeded - computed: false, optional: true, required: false
  private _errorLimitsExceeded?: string; 
  public get errorLimitsExceeded() {
    return this.getStringAttribute('error_limits_exceeded');
  }
  public set errorLimitsExceeded(value: string) {
    this._errorLimitsExceeded = value;
  }
  public resetErrorLimitsExceeded() {
    this._errorLimitsExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorLimitsExceededInput() {
    return this._errorLimitsExceeded;
  }

  // error_no_match - computed: false, optional: true, required: false
  private _errorNoMatch?: string; 
  public get errorNoMatch() {
    return this.getStringAttribute('error_no_match');
  }
  public set errorNoMatch(value: string) {
    this._errorNoMatch = value;
  }
  public resetErrorNoMatch() {
    this._errorNoMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorNoMatchInput() {
    return this._errorNoMatch;
  }

  // error_status_auth_failed - computed: false, optional: true, required: false
  private _errorStatusAuthFailed?: number; 
  public get errorStatusAuthFailed() {
    return this.getNumberAttribute('error_status_auth_failed');
  }
  public set errorStatusAuthFailed(value: number) {
    this._errorStatusAuthFailed = value;
  }
  public resetErrorStatusAuthFailed() {
    this._errorStatusAuthFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorStatusAuthFailedInput() {
    return this._errorStatusAuthFailed;
  }

  // error_status_auth_missing - computed: false, optional: true, required: false
  private _errorStatusAuthMissing?: number; 
  public get errorStatusAuthMissing() {
    return this.getNumberAttribute('error_status_auth_missing');
  }
  public set errorStatusAuthMissing(value: number) {
    this._errorStatusAuthMissing = value;
  }
  public resetErrorStatusAuthMissing() {
    this._errorStatusAuthMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorStatusAuthMissingInput() {
    return this._errorStatusAuthMissing;
  }

  // error_status_limits_exceeded - computed: false, optional: true, required: false
  private _errorStatusLimitsExceeded?: number; 
  public get errorStatusLimitsExceeded() {
    return this.getNumberAttribute('error_status_limits_exceeded');
  }
  public set errorStatusLimitsExceeded(value: number) {
    this._errorStatusLimitsExceeded = value;
  }
  public resetErrorStatusLimitsExceeded() {
    this._errorStatusLimitsExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorStatusLimitsExceededInput() {
    return this._errorStatusLimitsExceeded;
  }

  // error_status_no_match - computed: false, optional: true, required: false
  private _errorStatusNoMatch?: number; 
  public get errorStatusNoMatch() {
    return this.getNumberAttribute('error_status_no_match');
  }
  public set errorStatusNoMatch(value: number) {
    this._errorStatusNoMatch = value;
  }
  public resetErrorStatusNoMatch() {
    this._errorStatusNoMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorStatusNoMatchInput() {
    return this._errorStatusNoMatch;
  }
}
export interface DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationUserkeySecurity {
  /**
  * HostHeader Lets you define a custom Host request header. This is needed if your API backend only accepts traffic from a specific host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#host_header DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#host_header}
  */
  readonly hostHeader?: string;
  /**
  * SecretToken Enables you to block any direct developer requests to your API backend; each 3scale API gateway call to your API backend contains a request header called X-3scale-proxy-secret-token. The value of this header can be set by you here. It's up to you ensure your backend only allows calls with this secret header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#secret_token DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#secret_token}
  */
  readonly secretToken?: string;
}

export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationUserkeySecurityToTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationUserkeySecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_header: cdktf.stringToTerraform(struct!.hostHeader),
    secret_token: cdktf.stringToTerraform(struct!.secretToken),
  }
}


export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationUserkeySecurityToHclTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationUserkeySecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_header: {
      value: cdktf.stringToHclTerraform(struct!.hostHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_token: {
      value: cdktf.stringToHclTerraform(struct!.secretToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationUserkeySecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationUserkeySecurity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostHeader = this._hostHeader;
    }
    if (this._secretToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretToken = this._secretToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationUserkeySecurity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostHeader = undefined;
      this._secretToken = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostHeader = value.hostHeader;
      this._secretToken = value.secretToken;
    }
  }

  // host_header - computed: false, optional: true, required: false
  private _hostHeader?: string; 
  public get hostHeader() {
    return this.getStringAttribute('host_header');
  }
  public set hostHeader(value: string) {
    this._hostHeader = value;
  }
  public resetHostHeader() {
    this._hostHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostHeaderInput() {
    return this._hostHeader;
  }

  // secret_token - computed: false, optional: true, required: false
  private _secretToken?: string; 
  public get secretToken() {
    return this.getStringAttribute('secret_token');
  }
  public set secretToken(value: string) {
    this._secretToken = value;
  }
  public resetSecretToken() {
    this._secretToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretTokenInput() {
    return this._secretToken;
  }
}
export interface DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationUserkey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#auth_user_key DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#auth_user_key}
  */
  readonly authUserKey?: string;
  /**
  * Credentials Location available options: headers: As HTTP Headers query: As query parameters (GET) or body parameters (POST/PUT/DELETE) authorization: As HTTP Basic Authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#credentials DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#credentials}
  */
  readonly credentials?: string;
  /**
  * GatewayResponseSpec defines the desired gateway response configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#gateway_response DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#gateway_response}
  */
  readonly gatewayResponse?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationUserkeyGatewayResponse;
  /**
  * SecuritySpec defines the desired state of Authentication Security
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#security DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#security}
  */
  readonly security?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationUserkeySecurity;
}

export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationUserkeyToTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationUserkey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_user_key: cdktf.stringToTerraform(struct!.authUserKey),
    credentials: cdktf.stringToTerraform(struct!.credentials),
    gateway_response: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationUserkeyGatewayResponseToTerraform(struct!.gatewayResponse),
    security: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationUserkeySecurityToTerraform(struct!.security),
  }
}


export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationUserkeyToHclTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationUserkey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_user_key: {
      value: cdktf.stringToHclTerraform(struct!.authUserKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials: {
      value: cdktf.stringToHclTerraform(struct!.credentials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway_response: {
      value: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationUserkeyGatewayResponseToHclTerraform(struct!.gatewayResponse),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationUserkeyGatewayResponse",
    },
    security: {
      value: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationUserkeySecurityToHclTerraform(struct!.security),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationUserkeySecurity",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationUserkeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationUserkey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authUserKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.authUserKey = this._authUserKey;
    }
    if (this._credentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials;
    }
    if (this._gatewayResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayResponse = this._gatewayResponse?.internalValue;
    }
    if (this._security?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.security = this._security?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationUserkey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authUserKey = undefined;
      this._credentials = undefined;
      this._gatewayResponse.internalValue = undefined;
      this._security.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authUserKey = value.authUserKey;
      this._credentials = value.credentials;
      this._gatewayResponse.internalValue = value.gatewayResponse;
      this._security.internalValue = value.security;
    }
  }

  // auth_user_key - computed: false, optional: true, required: false
  private _authUserKey?: string; 
  public get authUserKey() {
    return this.getStringAttribute('auth_user_key');
  }
  public set authUserKey(value: string) {
    this._authUserKey = value;
  }
  public resetAuthUserKey() {
    this._authUserKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authUserKeyInput() {
    return this._authUserKey;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials?: string; 
  public get credentials() {
    return this.getStringAttribute('credentials');
  }
  public set credentials(value: string) {
    this._credentials = value;
  }
  public resetCredentials() {
    this._credentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }

  // gateway_response - computed: false, optional: true, required: false
  private _gatewayResponse = new DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationUserkeyGatewayResponseOutputReference(this, "gateway_response");
  public get gatewayResponse() {
    return this._gatewayResponse;
  }
  public putGatewayResponse(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationUserkeyGatewayResponse) {
    this._gatewayResponse.internalValue = value;
  }
  public resetGatewayResponse() {
    this._gatewayResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayResponseInput() {
    return this._gatewayResponse.internalValue;
  }

  // security - computed: false, optional: true, required: false
  private _security = new DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationUserkeySecurityOutputReference(this, "security");
  public get security() {
    return this._security;
  }
  public putSecurity(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationUserkeySecurity) {
    this._security.internalValue = value;
  }
  public resetSecurity() {
    this._security.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security.internalValue;
  }
}
export interface DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthentication {
  /**
  * AppKeyAppIDAuthenticationSpec defines the desired state of AppKey&AppId Authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#app_key_app_id DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#app_key_app_id}
  */
  readonly appKeyAppId?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationAppKeyAppId;
  /**
  * OIDCSpec defines the desired configuration of OpenID Connect Authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#oidc DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#oidc}
  */
  readonly oidc?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidc;
  /**
  * UserKeyAuthenticationSpec defines the desired state of User Key Authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#userkey DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#userkey}
  */
  readonly userkey?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationUserkey;
}

export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationToTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_key_app_id: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationAppKeyAppIdToTerraform(struct!.appKeyAppId),
    oidc: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcToTerraform(struct!.oidc),
    userkey: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationUserkeyToTerraform(struct!.userkey),
  }
}


export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationToHclTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_key_app_id: {
      value: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationAppKeyAppIdToHclTerraform(struct!.appKeyAppId),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationAppKeyAppId",
    },
    oidc: {
      value: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcToHclTerraform(struct!.oidc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidc",
    },
    userkey: {
      value: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationUserkeyToHclTerraform(struct!.userkey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationUserkey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appKeyAppId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appKeyAppId = this._appKeyAppId?.internalValue;
    }
    if (this._oidc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidc = this._oidc?.internalValue;
    }
    if (this._userkey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userkey = this._userkey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appKeyAppId.internalValue = undefined;
      this._oidc.internalValue = undefined;
      this._userkey.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appKeyAppId.internalValue = value.appKeyAppId;
      this._oidc.internalValue = value.oidc;
      this._userkey.internalValue = value.userkey;
    }
  }

  // app_key_app_id - computed: false, optional: true, required: false
  private _appKeyAppId = new DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationAppKeyAppIdOutputReference(this, "app_key_app_id");
  public get appKeyAppId() {
    return this._appKeyAppId;
  }
  public putAppKeyAppId(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationAppKeyAppId) {
    this._appKeyAppId.internalValue = value;
  }
  public resetAppKeyAppId() {
    this._appKeyAppId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appKeyAppIdInput() {
    return this._appKeyAppId.internalValue;
  }

  // oidc - computed: false, optional: true, required: false
  private _oidc = new DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidcOutputReference(this, "oidc");
  public get oidc() {
    return this._oidc;
  }
  public putOidc(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOidc) {
    this._oidc.internalValue = value;
  }
  public resetOidc() {
    this._oidc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcInput() {
    return this._oidc.internalValue;
  }

  // userkey - computed: false, optional: true, required: false
  private _userkey = new DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationUserkeyOutputReference(this, "userkey");
  public get userkey() {
    return this._userkey;
  }
  public putUserkey(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationUserkey) {
    this._userkey.internalValue = value;
  }
  public resetUserkey() {
    this._userkey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userkeyInput() {
    return this._userkey.internalValue;
  }
}
export interface DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManaged {
  /**
  * AuthenticationSpec defines the desired state of Product Authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#authentication DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#authentication}
  */
  readonly authentication?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthentication;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#production_public_base_url DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#production_public_base_url}
  */
  readonly productionPublicBaseUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#staging_public_base_url DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#staging_public_base_url}
  */
  readonly stagingPublicBaseUrl?: string;
}

export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedToTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManaged | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationToTerraform(struct!.authentication),
    production_public_base_url: cdktf.stringToTerraform(struct!.productionPublicBaseUrl),
    staging_public_base_url: cdktf.stringToTerraform(struct!.stagingPublicBaseUrl),
  }
}


export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedToHclTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManaged | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthentication",
    },
    production_public_base_url: {
      value: cdktf.stringToHclTerraform(struct!.productionPublicBaseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    staging_public_base_url: {
      value: cdktf.stringToHclTerraform(struct!.stagingPublicBaseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManaged | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._productionPublicBaseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.productionPublicBaseUrl = this._productionPublicBaseUrl;
    }
    if (this._stagingPublicBaseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.stagingPublicBaseUrl = this._stagingPublicBaseUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManaged | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication.internalValue = undefined;
      this._productionPublicBaseUrl = undefined;
      this._stagingPublicBaseUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication.internalValue = value.authentication;
      this._productionPublicBaseUrl = value.productionPublicBaseUrl;
      this._stagingPublicBaseUrl = value.stagingPublicBaseUrl;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // production_public_base_url - computed: false, optional: true, required: false
  private _productionPublicBaseUrl?: string; 
  public get productionPublicBaseUrl() {
    return this.getStringAttribute('production_public_base_url');
  }
  public set productionPublicBaseUrl(value: string) {
    this._productionPublicBaseUrl = value;
  }
  public resetProductionPublicBaseUrl() {
    this._productionPublicBaseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productionPublicBaseUrlInput() {
    return this._productionPublicBaseUrl;
  }

  // staging_public_base_url - computed: false, optional: true, required: false
  private _stagingPublicBaseUrl?: string; 
  public get stagingPublicBaseUrl() {
    return this.getStringAttribute('staging_public_base_url');
  }
  public set stagingPublicBaseUrl(value: string) {
    this._stagingPublicBaseUrl = value;
  }
  public resetStagingPublicBaseUrl() {
    this._stagingPublicBaseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stagingPublicBaseUrlInput() {
    return this._stagingPublicBaseUrl;
  }
}
export interface DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeployment {
  /**
  * ApicastHostedSpec defines the desired state of Product Apicast Hosted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#apicast_hosted DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#apicast_hosted}
  */
  readonly apicastHosted?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHosted;
  /**
  * ApicastSelfManagedSpec defines the desired state of Product Apicast Self Managed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#apicast_self_managed DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#apicast_self_managed}
  */
  readonly apicastSelfManaged?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManaged;
}

export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentToTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeployment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apicast_hosted: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedToTerraform(struct!.apicastHosted),
    apicast_self_managed: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedToTerraform(struct!.apicastSelfManaged),
  }
}


export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentToHclTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeployment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apicast_hosted: {
      value: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedToHclTerraform(struct!.apicastHosted),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHosted",
    },
    apicast_self_managed: {
      value: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedToHclTerraform(struct!.apicastSelfManaged),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManaged",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeployment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apicastHosted?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apicastHosted = this._apicastHosted?.internalValue;
    }
    if (this._apicastSelfManaged?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apicastSelfManaged = this._apicastSelfManaged?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeployment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apicastHosted.internalValue = undefined;
      this._apicastSelfManaged.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apicastHosted.internalValue = value.apicastHosted;
      this._apicastSelfManaged.internalValue = value.apicastSelfManaged;
    }
  }

  // apicast_hosted - computed: false, optional: true, required: false
  private _apicastHosted = new DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHostedOutputReference(this, "apicast_hosted");
  public get apicastHosted() {
    return this._apicastHosted;
  }
  public putApicastHosted(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastHosted) {
    this._apicastHosted.internalValue = value;
  }
  public resetApicastHosted() {
    this._apicastHosted.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apicastHostedInput() {
    return this._apicastHosted.internalValue;
  }

  // apicast_self_managed - computed: false, optional: true, required: false
  private _apicastSelfManaged = new DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManagedOutputReference(this, "apicast_self_managed");
  public get apicastSelfManaged() {
    return this._apicastSelfManaged;
  }
  public putApicastSelfManaged(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentApicastSelfManaged) {
    this._apicastSelfManaged.internalValue = value;
  }
  public resetApicastSelfManaged() {
    this._apicastSelfManaged.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apicastSelfManagedInput() {
    return this._apicastSelfManaged.internalValue;
  }
}
export interface DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecMappingRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#http_method DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#http_method}
  */
  readonly httpMethod: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#increment DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#increment}
  */
  readonly increment: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#last DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#last}
  */
  readonly last?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#metric_method_ref DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#metric_method_ref}
  */
  readonly metricMethodRef: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#pattern DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#pattern}
  */
  readonly pattern: string;
}

export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecMappingRulesToTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecMappingRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_method: cdktf.stringToTerraform(struct!.httpMethod),
    increment: cdktf.numberToTerraform(struct!.increment),
    last: cdktf.booleanToTerraform(struct!.last),
    metric_method_ref: cdktf.stringToTerraform(struct!.metricMethodRef),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecMappingRulesToHclTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecMappingRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_method: {
      value: cdktf.stringToHclTerraform(struct!.httpMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    increment: {
      value: cdktf.numberToHclTerraform(struct!.increment),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    last: {
      value: cdktf.booleanToHclTerraform(struct!.last),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metric_method_ref: {
      value: cdktf.stringToHclTerraform(struct!.metricMethodRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecMappingRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecMappingRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethod = this._httpMethod;
    }
    if (this._increment !== undefined) {
      hasAnyValues = true;
      internalValueResult.increment = this._increment;
    }
    if (this._last !== undefined) {
      hasAnyValues = true;
      internalValueResult.last = this._last;
    }
    if (this._metricMethodRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricMethodRef = this._metricMethodRef;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecMappingRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpMethod = undefined;
      this._increment = undefined;
      this._last = undefined;
      this._metricMethodRef = undefined;
      this._pattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpMethod = value.httpMethod;
      this._increment = value.increment;
      this._last = value.last;
      this._metricMethodRef = value.metricMethodRef;
      this._pattern = value.pattern;
    }
  }

  // http_method - computed: false, optional: false, required: true
  private _httpMethod?: string; 
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }
  public set httpMethod(value: string) {
    this._httpMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod;
  }

  // increment - computed: false, optional: false, required: true
  private _increment?: number; 
  public get increment() {
    return this.getNumberAttribute('increment');
  }
  public set increment(value: number) {
    this._increment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get incrementInput() {
    return this._increment;
  }

  // last - computed: false, optional: true, required: false
  private _last?: boolean | cdktf.IResolvable; 
  public get last() {
    return this.getBooleanAttribute('last');
  }
  public set last(value: boolean | cdktf.IResolvable) {
    this._last = value;
  }
  public resetLast() {
    this._last = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastInput() {
    return this._last;
  }

  // metric_method_ref - computed: false, optional: false, required: true
  private _metricMethodRef?: string; 
  public get metricMethodRef() {
    return this.getStringAttribute('metric_method_ref');
  }
  public set metricMethodRef(value: string) {
    this._metricMethodRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricMethodRefInput() {
    return this._metricMethodRef;
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}

export class DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecMappingRulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecMappingRules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecMappingRulesOutputReference {
    return new DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecMappingRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecMethods {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#description DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#friendly_name DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#friendly_name}
  */
  readonly friendlyName: string;
}

export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecMethodsToTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecMethods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    friendly_name: cdktf.stringToTerraform(struct!.friendlyName),
  }
}


export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecMethodsToHclTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecMethods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    friendly_name: {
      value: cdktf.stringToHclTerraform(struct!.friendlyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecMethodsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecMethods | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._friendlyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.friendlyName = this._friendlyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecMethods | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._friendlyName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._friendlyName = value.friendlyName;
    }
  }

  // description - computed: false, optional: true, required: false
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

  // friendly_name - computed: false, optional: false, required: true
  private _friendlyName?: string; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string) {
    this._friendlyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get friendlyNameInput() {
    return this._friendlyName;
  }
}
export interface DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecMetrics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#description DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#friendly_name DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#friendly_name}
  */
  readonly friendlyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#unit DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#unit}
  */
  readonly unit: string;
}

export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecMetricsToTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    friendly_name: cdktf.stringToTerraform(struct!.friendlyName),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecMetricsToHclTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    friendly_name: {
      value: cdktf.stringToHclTerraform(struct!.friendlyName),
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

export class DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._friendlyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.friendlyName = this._friendlyName;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._friendlyName = undefined;
      this._unit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._friendlyName = value.friendlyName;
      this._unit = value.unit;
    }
  }

  // description - computed: false, optional: true, required: false
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

  // friendly_name - computed: false, optional: false, required: true
  private _friendlyName?: string; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string) {
    this._friendlyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get friendlyNameInput() {
    return this._friendlyName;
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
export interface DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecPoliciesConfigurationRef {
  /**
  * name is unique within a namespace to reference a secret resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#name DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * namespace defines the space within which the secret name must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#namespace DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecPoliciesConfigurationRefToTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecPoliciesConfigurationRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecPoliciesConfigurationRefToHclTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecPoliciesConfigurationRef | cdktf.IResolvable): any {
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

export class DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecPoliciesConfigurationRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecPoliciesConfigurationRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecPoliciesConfigurationRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._namespace = value.namespace;
    }
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecPolicies {
  /**
  * Configuration defines the policy configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#configuration DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * ConfigurationRef Secret reference containing policy configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#configuration_ref DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#configuration_ref}
  */
  readonly configurationRef?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecPoliciesConfigurationRef;
  /**
  * Enabled defines activation state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#enabled DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Name defines the policy unique name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#name DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Version defines the policy version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#version DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#version}
  */
  readonly version: string;
}

export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecPoliciesToTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configuration),
    configuration_ref: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecPoliciesConfigurationRefToTerraform(struct!.configurationRef),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecPoliciesToHclTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configuration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    configuration_ref: {
      value: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecPoliciesConfigurationRefToHclTerraform(struct!.configurationRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecPoliciesConfigurationRef",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._configurationRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationRef = this._configurationRef?.internalValue;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configuration = undefined;
      this._configurationRef.internalValue = undefined;
      this._enabled = undefined;
      this._name = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configuration = value.configuration;
      this._configurationRef.internalValue = value.configurationRef;
      this._enabled = value.enabled;
      this._name = value.name;
      this._version = value.version;
    }
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }

  // configuration_ref - computed: false, optional: true, required: false
  private _configurationRef = new DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecPoliciesConfigurationRefOutputReference(this, "configuration_ref");
  public get configurationRef() {
    return this._configurationRef;
  }
  public putConfigurationRef(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecPoliciesConfigurationRef) {
    this._configurationRef.internalValue = value;
  }
  public resetConfigurationRef() {
    this._configurationRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationRefInput() {
    return this._configurationRef.internalValue;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecPoliciesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecPolicies[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecPoliciesOutputReference {
    return new DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecProviderAccountRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#name DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecProviderAccountRefToTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecProviderAccountRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecProviderAccountRefToHclTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecProviderAccountRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecProviderAccountRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecProviderAccountRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecProviderAccountRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}
export interface DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpec {
  /**
  * Application Plans Map: system_name -> Application Plan Spec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#application_plans DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#application_plans}
  */
  readonly applicationPlans?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlans;
  /**
  * Backend usage will be a map of Map: system_name -> BackendUsageSpec Having system_name as the index, the structure ensures one backend is not used multiple times.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#backend_usages DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#backend_usages}
  */
  readonly backendUsages?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecBackendUsages;
  /**
  * Deployment defined 3scale product deployment mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#deployment DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#deployment}
  */
  readonly deployment?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeployment;
  /**
  * Description is a human readable text of the product
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#description DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#description}
  */
  readonly description?: string;
  /**
  * Mapping Rules Array: MappingRule Spec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#mapping_rules DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#mapping_rules}
  */
  readonly mappingRules?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecMappingRules[] | cdktf.IResolvable;
  /**
  * Methods Map: system_name -> MethodSpec system_name attr is unique for all metrics AND methods In other words, if metric's system_name is A, there is no metric or method with system_name A.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#methods DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#methods}
  */
  readonly methods?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecMethods;
  /**
  * Metrics Map: system_name -> MetricSpec system_name attr is unique for all metrics AND methods In other words, if metric's system_name is A, there is no metric or method with system_name A.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#metrics DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#metrics}
  */
  readonly metrics?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecMetrics;
  /**
  * Name is human readable name for the product
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#name DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Policies holds the product's policy chain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#policies DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#policies}
  */
  readonly policies?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecPolicies[] | cdktf.IResolvable;
  /**
  * ProviderAccountRef references account provider credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#provider_account_ref DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#provider_account_ref}
  */
  readonly providerAccountRef?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecProviderAccountRef;
  /**
  * SystemName identifies uniquely the product within the account provider Default value will be sanitized Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#system_name DataK8SCapabilities3ScaleNetProductV1Beta1Manifest#system_name}
  */
  readonly systemName?: string;
}

export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecToTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_plans: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansToTerraform(struct!.applicationPlans),
    backend_usages: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecBackendUsagesToTerraform(struct!.backendUsages),
    deployment: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentToTerraform(struct!.deployment),
    description: cdktf.stringToTerraform(struct!.description),
    mapping_rules: cdktf.listMapper(dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecMappingRulesToTerraform, false)(struct!.mappingRules),
    methods: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecMethodsToTerraform(struct!.methods),
    metrics: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecMetricsToTerraform(struct!.metrics),
    name: cdktf.stringToTerraform(struct!.name),
    policies: cdktf.listMapper(dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecPoliciesToTerraform, false)(struct!.policies),
    provider_account_ref: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecProviderAccountRefToTerraform(struct!.providerAccountRef),
    system_name: cdktf.stringToTerraform(struct!.systemName),
  }
}


export function dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_plans: {
      value: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansToHclTerraform(struct!.applicationPlans),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlans",
    },
    backend_usages: {
      value: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecBackendUsagesToHclTerraform(struct!.backendUsages),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecBackendUsages",
    },
    deployment: {
      value: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentToHclTerraform(struct!.deployment),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeployment",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mapping_rules: {
      value: cdktf.listMapperHcl(dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecMappingRulesToHclTerraform, false)(struct!.mappingRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecMappingRulesList",
    },
    methods: {
      value: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecMethodsToHclTerraform(struct!.methods),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecMethods",
    },
    metrics: {
      value: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecMetricsToHclTerraform(struct!.metrics),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecMetrics",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policies: {
      value: cdktf.listMapperHcl(dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecPoliciesToHclTerraform, false)(struct!.policies),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecPoliciesList",
    },
    provider_account_ref: {
      value: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecProviderAccountRefToHclTerraform(struct!.providerAccountRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecProviderAccountRef",
    },
    system_name: {
      value: cdktf.stringToHclTerraform(struct!.systemName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationPlans?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationPlans = this._applicationPlans?.internalValue;
    }
    if (this._backendUsages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendUsages = this._backendUsages?.internalValue;
    }
    if (this._deployment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployment = this._deployment?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._mappingRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappingRules = this._mappingRules?.internalValue;
    }
    if (this._methods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods?.internalValue;
    }
    if (this._metrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._policies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies?.internalValue;
    }
    if (this._providerAccountRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerAccountRef = this._providerAccountRef?.internalValue;
    }
    if (this._systemName !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemName = this._systemName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationPlans.internalValue = undefined;
      this._backendUsages.internalValue = undefined;
      this._deployment.internalValue = undefined;
      this._description = undefined;
      this._mappingRules.internalValue = undefined;
      this._methods.internalValue = undefined;
      this._metrics.internalValue = undefined;
      this._name = undefined;
      this._policies.internalValue = undefined;
      this._providerAccountRef.internalValue = undefined;
      this._systemName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationPlans.internalValue = value.applicationPlans;
      this._backendUsages.internalValue = value.backendUsages;
      this._deployment.internalValue = value.deployment;
      this._description = value.description;
      this._mappingRules.internalValue = value.mappingRules;
      this._methods.internalValue = value.methods;
      this._metrics.internalValue = value.metrics;
      this._name = value.name;
      this._policies.internalValue = value.policies;
      this._providerAccountRef.internalValue = value.providerAccountRef;
      this._systemName = value.systemName;
    }
  }

  // application_plans - computed: false, optional: true, required: false
  private _applicationPlans = new DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlansOutputReference(this, "application_plans");
  public get applicationPlans() {
    return this._applicationPlans;
  }
  public putApplicationPlans(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecApplicationPlans) {
    this._applicationPlans.internalValue = value;
  }
  public resetApplicationPlans() {
    this._applicationPlans.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationPlansInput() {
    return this._applicationPlans.internalValue;
  }

  // backend_usages - computed: false, optional: true, required: false
  private _backendUsages = new DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecBackendUsagesOutputReference(this, "backend_usages");
  public get backendUsages() {
    return this._backendUsages;
  }
  public putBackendUsages(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecBackendUsages) {
    this._backendUsages.internalValue = value;
  }
  public resetBackendUsages() {
    this._backendUsages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendUsagesInput() {
    return this._backendUsages.internalValue;
  }

  // deployment - computed: false, optional: true, required: false
  private _deployment = new DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeploymentOutputReference(this, "deployment");
  public get deployment() {
    return this._deployment;
  }
  public putDeployment(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecDeployment) {
    this._deployment.internalValue = value;
  }
  public resetDeployment() {
    this._deployment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentInput() {
    return this._deployment.internalValue;
  }

  // description - computed: false, optional: true, required: false
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

  // mapping_rules - computed: false, optional: true, required: false
  private _mappingRules = new DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecMappingRulesList(this, "mapping_rules", false);
  public get mappingRules() {
    return this._mappingRules;
  }
  public putMappingRules(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecMappingRules[] | cdktf.IResolvable) {
    this._mappingRules.internalValue = value;
  }
  public resetMappingRules() {
    this._mappingRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingRulesInput() {
    return this._mappingRules.internalValue;
  }

  // methods - computed: false, optional: true, required: false
  private _methods = new DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecMethodsOutputReference(this, "methods");
  public get methods() {
    return this._methods;
  }
  public putMethods(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecMethods) {
    this._methods.internalValue = value;
  }
  public resetMethods() {
    this._methods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods.internalValue;
  }

  // metrics - computed: false, optional: true, required: false
  private _metrics = new DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecMetricsOutputReference(this, "metrics");
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecMetrics) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
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

  // policies - computed: false, optional: true, required: false
  private _policies = new DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecPolicies[] | cdktf.IResolvable) {
    this._policies.internalValue = value;
  }
  public resetPolicies() {
    this._policies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }

  // provider_account_ref - computed: false, optional: true, required: false
  private _providerAccountRef = new DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecProviderAccountRefOutputReference(this, "provider_account_ref");
  public get providerAccountRef() {
    return this._providerAccountRef;
  }
  public putProviderAccountRef(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecProviderAccountRef) {
    this._providerAccountRef.internalValue = value;
  }
  public resetProviderAccountRef() {
    this._providerAccountRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerAccountRefInput() {
    return this._providerAccountRef.internalValue;
  }

  // system_name - computed: false, optional: true, required: false
  private _systemName?: string; 
  public get systemName() {
    return this.getStringAttribute('system_name');
  }
  public set systemName(value: string) {
    this._systemName = value;
  }
  public resetSystemName() {
    this._systemName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemNameInput() {
    return this._systemName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest k8s_capabilities_3scale_net_product_v1beta1_manifest}
*/
export class DataK8SCapabilities3ScaleNetProductV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_capabilities_3scale_net_product_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCapabilities3ScaleNetProductV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCapabilities3ScaleNetProductV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SCapabilities3ScaleNetProductV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCapabilities3ScaleNetProductV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_capabilities_3scale_net_product_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_product_v1beta1_manifest k8s_capabilities_3scale_net_product_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCapabilities3ScaleNetProductV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_capabilities_3scale_net_product_v1beta1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.24',
        providerVersionConstraint: '2025.11.24'
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
  private _metadata = new DataK8SCapabilities3ScaleNetProductV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpec) {
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
      metadata: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCapabilities3ScaleNetProductV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCapabilities3ScaleNetProductV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
