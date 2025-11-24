// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_k8s_elastic_co_elasticsearch_autoscaler_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_k8s_elastic_co_elasticsearch_autoscaler_v1alpha1_manifest#metadata DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestMetadata;
  /**
  * ElasticsearchAutoscalerSpec holds the specification of an Elasticsearch autoscaler resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_k8s_elastic_co_elasticsearch_autoscaler_v1alpha1_manifest#spec DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpec;
}
export interface DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_k8s_elastic_co_elasticsearch_autoscaler_v1alpha1_manifest#annotations DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_k8s_elastic_co_elasticsearch_autoscaler_v1alpha1_manifest#labels DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_k8s_elastic_co_elasticsearch_autoscaler_v1alpha1_manifest#name DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_k8s_elastic_co_elasticsearch_autoscaler_v1alpha1_manifest#namespace DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecElasticsearchRef {
  /**
  * Name is the name of the Elasticsearch resource to scale automatically.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_k8s_elastic_co_elasticsearch_autoscaler_v1alpha1_manifest#name DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecElasticsearchRefToTerraform(struct?: DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecElasticsearchRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecElasticsearchRefToHclTerraform(struct?: DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecElasticsearchRef | cdktf.IResolvable): any {
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

export class DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecElasticsearchRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecElasticsearchRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecElasticsearchRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesCpu {
  /**
  * Max represents the upper limit for the resources managed by the autoscaler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_k8s_elastic_co_elasticsearch_autoscaler_v1alpha1_manifest#max DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1Manifest#max}
  */
  readonly max: string;
  /**
  * Min represents the lower limit for the resources managed by the autoscaler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_k8s_elastic_co_elasticsearch_autoscaler_v1alpha1_manifest#min DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1Manifest#min}
  */
  readonly min: string;
  /**
  * RequestsToLimitsRatio allows to customize Kubernetes resource Limit based on the Request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_k8s_elastic_co_elasticsearch_autoscaler_v1alpha1_manifest#requests_to_limits_ratio DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1Manifest#requests_to_limits_ratio}
  */
  readonly requestsToLimitsRatio?: string;
}

export function dataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesCpuToTerraform(struct?: DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.stringToTerraform(struct!.max),
    min: cdktf.stringToTerraform(struct!.min),
    requests_to_limits_ratio: cdktf.stringToTerraform(struct!.requestsToLimitsRatio),
  }
}


export function dataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesCpuToHclTerraform(struct?: DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.stringToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min: {
      value: cdktf.stringToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    requests_to_limits_ratio: {
      value: cdktf.stringToHclTerraform(struct!.requestsToLimitsRatio),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesCpu | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    if (this._requestsToLimitsRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestsToLimitsRatio = this._requestsToLimitsRatio;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesCpu | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max = undefined;
      this._min = undefined;
      this._requestsToLimitsRatio = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max = value.max;
      this._min = value.min;
      this._requestsToLimitsRatio = value.requestsToLimitsRatio;
    }
  }

  // max - computed: false, optional: false, required: true
  private _max?: string; 
  public get max() {
    return this.getStringAttribute('max');
  }
  public set max(value: string) {
    this._max = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: false, required: true
  private _min?: string; 
  public get min() {
    return this.getStringAttribute('min');
  }
  public set min(value: string) {
    this._min = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }

  // requests_to_limits_ratio - computed: false, optional: true, required: false
  private _requestsToLimitsRatio?: string; 
  public get requestsToLimitsRatio() {
    return this.getStringAttribute('requests_to_limits_ratio');
  }
  public set requestsToLimitsRatio(value: string) {
    this._requestsToLimitsRatio = value;
  }
  public resetRequestsToLimitsRatio() {
    this._requestsToLimitsRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsToLimitsRatioInput() {
    return this._requestsToLimitsRatio;
  }
}
export interface DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesMemory {
  /**
  * Max represents the upper limit for the resources managed by the autoscaler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_k8s_elastic_co_elasticsearch_autoscaler_v1alpha1_manifest#max DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1Manifest#max}
  */
  readonly max: string;
  /**
  * Min represents the lower limit for the resources managed by the autoscaler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_k8s_elastic_co_elasticsearch_autoscaler_v1alpha1_manifest#min DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1Manifest#min}
  */
  readonly min: string;
  /**
  * RequestsToLimitsRatio allows to customize Kubernetes resource Limit based on the Request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_k8s_elastic_co_elasticsearch_autoscaler_v1alpha1_manifest#requests_to_limits_ratio DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1Manifest#requests_to_limits_ratio}
  */
  readonly requestsToLimitsRatio?: string;
}

export function dataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesMemoryToTerraform(struct?: DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.stringToTerraform(struct!.max),
    min: cdktf.stringToTerraform(struct!.min),
    requests_to_limits_ratio: cdktf.stringToTerraform(struct!.requestsToLimitsRatio),
  }
}


export function dataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesMemoryToHclTerraform(struct?: DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.stringToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min: {
      value: cdktf.stringToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    requests_to_limits_ratio: {
      value: cdktf.stringToHclTerraform(struct!.requestsToLimitsRatio),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesMemory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    if (this._requestsToLimitsRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestsToLimitsRatio = this._requestsToLimitsRatio;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesMemory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max = undefined;
      this._min = undefined;
      this._requestsToLimitsRatio = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max = value.max;
      this._min = value.min;
      this._requestsToLimitsRatio = value.requestsToLimitsRatio;
    }
  }

  // max - computed: false, optional: false, required: true
  private _max?: string; 
  public get max() {
    return this.getStringAttribute('max');
  }
  public set max(value: string) {
    this._max = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: false, required: true
  private _min?: string; 
  public get min() {
    return this.getStringAttribute('min');
  }
  public set min(value: string) {
    this._min = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }

  // requests_to_limits_ratio - computed: false, optional: true, required: false
  private _requestsToLimitsRatio?: string; 
  public get requestsToLimitsRatio() {
    return this.getStringAttribute('requests_to_limits_ratio');
  }
  public set requestsToLimitsRatio(value: string) {
    this._requestsToLimitsRatio = value;
  }
  public resetRequestsToLimitsRatio() {
    this._requestsToLimitsRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsToLimitsRatioInput() {
    return this._requestsToLimitsRatio;
  }
}
export interface DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesNodeCount {
  /**
  * Max represents the maximum number of nodes in a tier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_k8s_elastic_co_elasticsearch_autoscaler_v1alpha1_manifest#max DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1Manifest#max}
  */
  readonly max: number;
  /**
  * Min represents the minimum number of nodes in a tier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_k8s_elastic_co_elasticsearch_autoscaler_v1alpha1_manifest#min DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1Manifest#min}
  */
  readonly min: number;
}

export function dataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesNodeCountToTerraform(struct?: DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesNodeCount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function dataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesNodeCountToHclTerraform(struct?: DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesNodeCount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesNodeCountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesNodeCount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesNodeCount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max = undefined;
      this._min = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: false, required: true
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: false, required: true
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesStorage {
  /**
  * Max represents the upper limit for the resources managed by the autoscaler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_k8s_elastic_co_elasticsearch_autoscaler_v1alpha1_manifest#max DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1Manifest#max}
  */
  readonly max: string;
  /**
  * Min represents the lower limit for the resources managed by the autoscaler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_k8s_elastic_co_elasticsearch_autoscaler_v1alpha1_manifest#min DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1Manifest#min}
  */
  readonly min: string;
  /**
  * RequestsToLimitsRatio allows to customize Kubernetes resource Limit based on the Request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_k8s_elastic_co_elasticsearch_autoscaler_v1alpha1_manifest#requests_to_limits_ratio DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1Manifest#requests_to_limits_ratio}
  */
  readonly requestsToLimitsRatio?: string;
}

export function dataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesStorageToTerraform(struct?: DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.stringToTerraform(struct!.max),
    min: cdktf.stringToTerraform(struct!.min),
    requests_to_limits_ratio: cdktf.stringToTerraform(struct!.requestsToLimitsRatio),
  }
}


export function dataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesStorageToHclTerraform(struct?: DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.stringToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min: {
      value: cdktf.stringToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    requests_to_limits_ratio: {
      value: cdktf.stringToHclTerraform(struct!.requestsToLimitsRatio),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    if (this._requestsToLimitsRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestsToLimitsRatio = this._requestsToLimitsRatio;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max = undefined;
      this._min = undefined;
      this._requestsToLimitsRatio = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max = value.max;
      this._min = value.min;
      this._requestsToLimitsRatio = value.requestsToLimitsRatio;
    }
  }

  // max - computed: false, optional: false, required: true
  private _max?: string; 
  public get max() {
    return this.getStringAttribute('max');
  }
  public set max(value: string) {
    this._max = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: false, required: true
  private _min?: string; 
  public get min() {
    return this.getStringAttribute('min');
  }
  public set min(value: string) {
    this._min = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }

  // requests_to_limits_ratio - computed: false, optional: true, required: false
  private _requestsToLimitsRatio?: string; 
  public get requestsToLimitsRatio() {
    return this.getStringAttribute('requests_to_limits_ratio');
  }
  public set requestsToLimitsRatio(value: string) {
    this._requestsToLimitsRatio = value;
  }
  public resetRequestsToLimitsRatio() {
    this._requestsToLimitsRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsToLimitsRatioInput() {
    return this._requestsToLimitsRatio;
  }
}
export interface DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResources {
  /**
  * QuantityRange models a resource limit range for resources which can be expressed with resource.Quantity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_k8s_elastic_co_elasticsearch_autoscaler_v1alpha1_manifest#cpu DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1Manifest#cpu}
  */
  readonly cpu?: DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesCpu;
  /**
  * QuantityRange models a resource limit range for resources which can be expressed with resource.Quantity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_k8s_elastic_co_elasticsearch_autoscaler_v1alpha1_manifest#memory DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1Manifest#memory}
  */
  readonly memory?: DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesMemory;
  /**
  * NodeCountRange is used to model the minimum and the maximum number of nodes over all the NodeSets managed by the same autoscaling policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_k8s_elastic_co_elasticsearch_autoscaler_v1alpha1_manifest#node_count DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1Manifest#node_count}
  */
  readonly nodeCount: DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesNodeCount;
  /**
  * QuantityRange models a resource limit range for resources which can be expressed with resource.Quantity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_k8s_elastic_co_elasticsearch_autoscaler_v1alpha1_manifest#storage DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1Manifest#storage}
  */
  readonly storage?: DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesStorage;
}

export function dataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesToTerraform(struct?: DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: dataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesCpuToTerraform(struct!.cpu),
    memory: dataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesMemoryToTerraform(struct!.memory),
    node_count: dataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesNodeCountToTerraform(struct!.nodeCount),
    storage: dataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesStorageToTerraform(struct!.storage),
  }
}


export function dataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesToHclTerraform(struct?: DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: dataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesCpuToHclTerraform(struct!.cpu),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesCpu",
    },
    memory: {
      value: dataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesMemoryToHclTerraform(struct!.memory),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesMemory",
    },
    node_count: {
      value: dataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesNodeCountToHclTerraform(struct!.nodeCount),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesNodeCount",
    },
    storage: {
      value: dataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesStorageToHclTerraform(struct!.storage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesStorage",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu?.internalValue;
    }
    if (this._memory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory?.internalValue;
    }
    if (this._nodeCount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeCount = this._nodeCount?.internalValue;
    }
    if (this._storage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu.internalValue = undefined;
      this._memory.internalValue = undefined;
      this._nodeCount.internalValue = undefined;
      this._storage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpu.internalValue = value.cpu;
      this._memory.internalValue = value.memory;
      this._nodeCount.internalValue = value.nodeCount;
      this._storage.internalValue = value.storage;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu = new DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesCpu) {
    this._cpu.internalValue = value;
  }
  public resetCpu() {
    this._cpu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu.internalValue;
  }

  // memory - computed: false, optional: true, required: false
  private _memory = new DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }
  public putMemory(value: DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesMemory) {
    this._memory.internalValue = value;
  }
  public resetMemory() {
    this._memory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory.internalValue;
  }

  // node_count - computed: false, optional: false, required: true
  private _nodeCount = new DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesNodeCountOutputReference(this, "node_count");
  public get nodeCount() {
    return this._nodeCount;
  }
  public putNodeCount(value: DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesNodeCount) {
    this._nodeCount.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount.internalValue;
  }

  // storage - computed: false, optional: true, required: false
  private _storage = new DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesStorage) {
    this._storage.internalValue = value;
  }
  public resetStorage() {
    this._storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }
}
export interface DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPolicies {
  /**
  * Deciders allow the user to override default settings for autoscaling deciders.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_k8s_elastic_co_elasticsearch_autoscaler_v1alpha1_manifest#deciders DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1Manifest#deciders}
  */
  readonly deciders?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable;
  /**
  * Name identifies the autoscaling policy in the autoscaling specification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_k8s_elastic_co_elasticsearch_autoscaler_v1alpha1_manifest#name DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * AutoscalingResources model the limits, submitted by the user, for the supported resources in an autoscaling policy. Only the node count range is mandatory. For other resources, a limit range is required only if the Elasticsearch autoscaling capacity API returns a requirement for a given resource. For example, the memory limit range is only required if the autoscaling API response contains a memory requirement. If there is no limit range for a resource, and if that resource is not mandatory, then the resources in the NodeSets managed by the autoscaling policy are left untouched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_k8s_elastic_co_elasticsearch_autoscaler_v1alpha1_manifest#resources DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1Manifest#resources}
  */
  readonly resources: DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResources;
  /**
  * An autoscaling policy must target a unique set of roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_k8s_elastic_co_elasticsearch_autoscaler_v1alpha1_manifest#roles DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1Manifest#roles}
  */
  readonly roles?: string[];
}

export function dataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesToTerraform(struct?: DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deciders: cdktf.hashMapper(cdktf.hashMapper(cdktf.stringToTerraform))(struct!.deciders),
    name: cdktf.stringToTerraform(struct!.name),
    resources: dataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesToTerraform(struct!.resources),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
  }
}


export function dataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesToHclTerraform(struct?: DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deciders: {
      value: cdktf.hashMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform))(struct!.deciders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMapMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources: {
      value: dataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResources",
    },
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deciders !== undefined) {
      hasAnyValues = true;
      internalValueResult.deciders = this._deciders;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deciders = undefined;
      this._name = undefined;
      this._resources.internalValue = undefined;
      this._roles = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deciders = value.deciders;
      this._name = value.name;
      this._resources.internalValue = value.resources;
      this._roles = value.roles;
    }
  }

  // deciders - computed: false, optional: true, required: false
  private _deciders?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable; 
  public get deciders() {
    return this.interpolationForAttribute('deciders');
  }
  public set deciders(value: { [key: string]: { [key: string]: string } } | cdktf.IResolvable) {
    this._deciders = value;
  }
  public resetDeciders() {
    this._deciders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decidersInput() {
    return this._deciders;
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

  // resources - computed: false, optional: false, required: true
  private _resources = new DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesResources) {
    this._resources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // roles - computed: false, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }
}

export class DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPolicies[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesOutputReference {
    return new DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpec {
  /**
  * ElasticsearchRef is a reference to an Elasticsearch cluster that exists in the same namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_k8s_elastic_co_elasticsearch_autoscaler_v1alpha1_manifest#elasticsearch_ref DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1Manifest#elasticsearch_ref}
  */
  readonly elasticsearchRef: DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecElasticsearchRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_k8s_elastic_co_elasticsearch_autoscaler_v1alpha1_manifest#policies DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1Manifest#policies}
  */
  readonly policies: DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPolicies[] | cdktf.IResolvable;
  /**
  * PollingPeriod is the period at which to synchronize with the Elasticsearch autoscaling API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_k8s_elastic_co_elasticsearch_autoscaler_v1alpha1_manifest#polling_period DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1Manifest#polling_period}
  */
  readonly pollingPeriod?: string;
}

export function dataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecToTerraform(struct?: DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    elasticsearch_ref: dataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecElasticsearchRefToTerraform(struct!.elasticsearchRef),
    policies: cdktf.listMapper(dataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesToTerraform, false)(struct!.policies),
    polling_period: cdktf.stringToTerraform(struct!.pollingPeriod),
  }
}


export function dataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    elasticsearch_ref: {
      value: dataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecElasticsearchRefToHclTerraform(struct!.elasticsearchRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecElasticsearchRef",
    },
    policies: {
      value: cdktf.listMapperHcl(dataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesToHclTerraform, false)(struct!.policies),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesList",
    },
    polling_period: {
      value: cdktf.stringToHclTerraform(struct!.pollingPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._elasticsearchRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticsearchRef = this._elasticsearchRef?.internalValue;
    }
    if (this._policies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies?.internalValue;
    }
    if (this._pollingPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.pollingPeriod = this._pollingPeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._elasticsearchRef.internalValue = undefined;
      this._policies.internalValue = undefined;
      this._pollingPeriod = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._elasticsearchRef.internalValue = value.elasticsearchRef;
      this._policies.internalValue = value.policies;
      this._pollingPeriod = value.pollingPeriod;
    }
  }

  // elasticsearch_ref - computed: false, optional: false, required: true
  private _elasticsearchRef = new DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecElasticsearchRefOutputReference(this, "elasticsearch_ref");
  public get elasticsearchRef() {
    return this._elasticsearchRef;
  }
  public putElasticsearchRef(value: DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecElasticsearchRef) {
    this._elasticsearchRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchRefInput() {
    return this._elasticsearchRef.internalValue;
  }

  // policies - computed: false, optional: false, required: true
  private _policies = new DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecPolicies[] | cdktf.IResolvable) {
    this._policies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }

  // polling_period - computed: false, optional: true, required: false
  private _pollingPeriod?: string; 
  public get pollingPeriod() {
    return this.getStringAttribute('polling_period');
  }
  public set pollingPeriod(value: string) {
    this._pollingPeriod = value;
  }
  public resetPollingPeriod() {
    this._pollingPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingPeriodInput() {
    return this._pollingPeriod;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_k8s_elastic_co_elasticsearch_autoscaler_v1alpha1_manifest k8s_autoscaling_k8s_elastic_co_elasticsearch_autoscaler_v1alpha1_manifest}
*/
export class DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_autoscaling_k8s_elastic_co_elasticsearch_autoscaler_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_k8s_elastic_co_elasticsearch_autoscaler_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_autoscaling_k8s_elastic_co_elasticsearch_autoscaler_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/autoscaling_k8s_elastic_co_elasticsearch_autoscaler_v1alpha1_manifest k8s_autoscaling_k8s_elastic_co_elasticsearch_autoscaler_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_autoscaling_k8s_elastic_co_elasticsearch_autoscaler_v1alpha1_manifest',
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
  private _metadata = new DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpec) {
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
      metadata: dataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAutoscalingK8SElasticCoElasticsearchAutoscalerV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
