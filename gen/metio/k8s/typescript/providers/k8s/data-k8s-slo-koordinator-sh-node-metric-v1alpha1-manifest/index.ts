// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_metric_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSloKoordinatorShNodeMetricV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_metric_v1alpha1_manifest#metadata DataK8SSloKoordinatorShNodeMetricV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SSloKoordinatorShNodeMetricV1Alpha1ManifestMetadata;
  /**
  * NodeMetricSpec defines the desired state of NodeMetric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_metric_v1alpha1_manifest#spec DataK8SSloKoordinatorShNodeMetricV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SSloKoordinatorShNodeMetricV1Alpha1ManifestSpec;
}
export interface DataK8SSloKoordinatorShNodeMetricV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_metric_v1alpha1_manifest#annotations DataK8SSloKoordinatorShNodeMetricV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_metric_v1alpha1_manifest#labels DataK8SSloKoordinatorShNodeMetricV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_metric_v1alpha1_manifest#name DataK8SSloKoordinatorShNodeMetricV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SSloKoordinatorShNodeMetricV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SSloKoordinatorShNodeMetricV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SSloKoordinatorShNodeMetricV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SSloKoordinatorShNodeMetricV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSloKoordinatorShNodeMetricV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSloKoordinatorShNodeMetricV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSloKoordinatorShNodeMetricV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
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
}
export interface DataK8SSloKoordinatorShNodeMetricV1Alpha1ManifestSpecMetricCollectPolicyNodeAggregatePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_metric_v1alpha1_manifest#durations DataK8SSloKoordinatorShNodeMetricV1Alpha1Manifest#durations}
  */
  readonly durations?: string[];
}

export function dataK8SSloKoordinatorShNodeMetricV1Alpha1ManifestSpecMetricCollectPolicyNodeAggregatePolicyToTerraform(struct?: DataK8SSloKoordinatorShNodeMetricV1Alpha1ManifestSpecMetricCollectPolicyNodeAggregatePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    durations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.durations),
  }
}


export function dataK8SSloKoordinatorShNodeMetricV1Alpha1ManifestSpecMetricCollectPolicyNodeAggregatePolicyToHclTerraform(struct?: DataK8SSloKoordinatorShNodeMetricV1Alpha1ManifestSpecMetricCollectPolicyNodeAggregatePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    durations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.durations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSloKoordinatorShNodeMetricV1Alpha1ManifestSpecMetricCollectPolicyNodeAggregatePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSloKoordinatorShNodeMetricV1Alpha1ManifestSpecMetricCollectPolicyNodeAggregatePolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._durations !== undefined) {
      hasAnyValues = true;
      internalValueResult.durations = this._durations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSloKoordinatorShNodeMetricV1Alpha1ManifestSpecMetricCollectPolicyNodeAggregatePolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._durations = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._durations = value.durations;
    }
  }

  // durations - computed: false, optional: true, required: false
  private _durations?: string[]; 
  public get durations() {
    return this.getListAttribute('durations');
  }
  public set durations(value: string[]) {
    this._durations = value;
  }
  public resetDurations() {
    this._durations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationsInput() {
    return this._durations;
  }
}
export interface DataK8SSloKoordinatorShNodeMetricV1Alpha1ManifestSpecMetricCollectPolicy {
  /**
  * AggregateDurationSeconds represents the aggregation period in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_metric_v1alpha1_manifest#aggregate_duration_seconds DataK8SSloKoordinatorShNodeMetricV1Alpha1Manifest#aggregate_duration_seconds}
  */
  readonly aggregateDurationSeconds?: number;
  /**
  * NodeAggregatePolicy represents the target grain of node aggregated usage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_metric_v1alpha1_manifest#node_aggregate_policy DataK8SSloKoordinatorShNodeMetricV1Alpha1Manifest#node_aggregate_policy}
  */
  readonly nodeAggregatePolicy?: DataK8SSloKoordinatorShNodeMetricV1Alpha1ManifestSpecMetricCollectPolicyNodeAggregatePolicy;
  /**
  * NodeMemoryPolicy represents apply which method collect memory info
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_metric_v1alpha1_manifest#node_memory_collect_policy DataK8SSloKoordinatorShNodeMetricV1Alpha1Manifest#node_memory_collect_policy}
  */
  readonly nodeMemoryCollectPolicy?: string;
  /**
  * ReportIntervalSeconds represents the report period in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_metric_v1alpha1_manifest#report_interval_seconds DataK8SSloKoordinatorShNodeMetricV1Alpha1Manifest#report_interval_seconds}
  */
  readonly reportIntervalSeconds?: number;
}

export function dataK8SSloKoordinatorShNodeMetricV1Alpha1ManifestSpecMetricCollectPolicyToTerraform(struct?: DataK8SSloKoordinatorShNodeMetricV1Alpha1ManifestSpecMetricCollectPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregate_duration_seconds: cdktf.numberToTerraform(struct!.aggregateDurationSeconds),
    node_aggregate_policy: dataK8SSloKoordinatorShNodeMetricV1Alpha1ManifestSpecMetricCollectPolicyNodeAggregatePolicyToTerraform(struct!.nodeAggregatePolicy),
    node_memory_collect_policy: cdktf.stringToTerraform(struct!.nodeMemoryCollectPolicy),
    report_interval_seconds: cdktf.numberToTerraform(struct!.reportIntervalSeconds),
  }
}


export function dataK8SSloKoordinatorShNodeMetricV1Alpha1ManifestSpecMetricCollectPolicyToHclTerraform(struct?: DataK8SSloKoordinatorShNodeMetricV1Alpha1ManifestSpecMetricCollectPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregate_duration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.aggregateDurationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_aggregate_policy: {
      value: dataK8SSloKoordinatorShNodeMetricV1Alpha1ManifestSpecMetricCollectPolicyNodeAggregatePolicyToHclTerraform(struct!.nodeAggregatePolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSloKoordinatorShNodeMetricV1Alpha1ManifestSpecMetricCollectPolicyNodeAggregatePolicy",
    },
    node_memory_collect_policy: {
      value: cdktf.stringToHclTerraform(struct!.nodeMemoryCollectPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    report_interval_seconds: {
      value: cdktf.numberToHclTerraform(struct!.reportIntervalSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSloKoordinatorShNodeMetricV1Alpha1ManifestSpecMetricCollectPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSloKoordinatorShNodeMetricV1Alpha1ManifestSpecMetricCollectPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregateDurationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregateDurationSeconds = this._aggregateDurationSeconds;
    }
    if (this._nodeAggregatePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAggregatePolicy = this._nodeAggregatePolicy?.internalValue;
    }
    if (this._nodeMemoryCollectPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeMemoryCollectPolicy = this._nodeMemoryCollectPolicy;
    }
    if (this._reportIntervalSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportIntervalSeconds = this._reportIntervalSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSloKoordinatorShNodeMetricV1Alpha1ManifestSpecMetricCollectPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregateDurationSeconds = undefined;
      this._nodeAggregatePolicy.internalValue = undefined;
      this._nodeMemoryCollectPolicy = undefined;
      this._reportIntervalSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregateDurationSeconds = value.aggregateDurationSeconds;
      this._nodeAggregatePolicy.internalValue = value.nodeAggregatePolicy;
      this._nodeMemoryCollectPolicy = value.nodeMemoryCollectPolicy;
      this._reportIntervalSeconds = value.reportIntervalSeconds;
    }
  }

  // aggregate_duration_seconds - computed: false, optional: true, required: false
  private _aggregateDurationSeconds?: number; 
  public get aggregateDurationSeconds() {
    return this.getNumberAttribute('aggregate_duration_seconds');
  }
  public set aggregateDurationSeconds(value: number) {
    this._aggregateDurationSeconds = value;
  }
  public resetAggregateDurationSeconds() {
    this._aggregateDurationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateDurationSecondsInput() {
    return this._aggregateDurationSeconds;
  }

  // node_aggregate_policy - computed: false, optional: true, required: false
  private _nodeAggregatePolicy = new DataK8SSloKoordinatorShNodeMetricV1Alpha1ManifestSpecMetricCollectPolicyNodeAggregatePolicyOutputReference(this, "node_aggregate_policy");
  public get nodeAggregatePolicy() {
    return this._nodeAggregatePolicy;
  }
  public putNodeAggregatePolicy(value: DataK8SSloKoordinatorShNodeMetricV1Alpha1ManifestSpecMetricCollectPolicyNodeAggregatePolicy) {
    this._nodeAggregatePolicy.internalValue = value;
  }
  public resetNodeAggregatePolicy() {
    this._nodeAggregatePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAggregatePolicyInput() {
    return this._nodeAggregatePolicy.internalValue;
  }

  // node_memory_collect_policy - computed: false, optional: true, required: false
  private _nodeMemoryCollectPolicy?: string; 
  public get nodeMemoryCollectPolicy() {
    return this.getStringAttribute('node_memory_collect_policy');
  }
  public set nodeMemoryCollectPolicy(value: string) {
    this._nodeMemoryCollectPolicy = value;
  }
  public resetNodeMemoryCollectPolicy() {
    this._nodeMemoryCollectPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeMemoryCollectPolicyInput() {
    return this._nodeMemoryCollectPolicy;
  }

  // report_interval_seconds - computed: false, optional: true, required: false
  private _reportIntervalSeconds?: number; 
  public get reportIntervalSeconds() {
    return this.getNumberAttribute('report_interval_seconds');
  }
  public set reportIntervalSeconds(value: number) {
    this._reportIntervalSeconds = value;
  }
  public resetReportIntervalSeconds() {
    this._reportIntervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportIntervalSecondsInput() {
    return this._reportIntervalSeconds;
  }
}
export interface DataK8SSloKoordinatorShNodeMetricV1Alpha1ManifestSpec {
  /**
  * CollectPolicy defines the Metric collection policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_metric_v1alpha1_manifest#metric_collect_policy DataK8SSloKoordinatorShNodeMetricV1Alpha1Manifest#metric_collect_policy}
  */
  readonly metricCollectPolicy?: DataK8SSloKoordinatorShNodeMetricV1Alpha1ManifestSpecMetricCollectPolicy;
}

export function dataK8SSloKoordinatorShNodeMetricV1Alpha1ManifestSpecToTerraform(struct?: DataK8SSloKoordinatorShNodeMetricV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_collect_policy: dataK8SSloKoordinatorShNodeMetricV1Alpha1ManifestSpecMetricCollectPolicyToTerraform(struct!.metricCollectPolicy),
  }
}


export function dataK8SSloKoordinatorShNodeMetricV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SSloKoordinatorShNodeMetricV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_collect_policy: {
      value: dataK8SSloKoordinatorShNodeMetricV1Alpha1ManifestSpecMetricCollectPolicyToHclTerraform(struct!.metricCollectPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSloKoordinatorShNodeMetricV1Alpha1ManifestSpecMetricCollectPolicy",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSloKoordinatorShNodeMetricV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSloKoordinatorShNodeMetricV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricCollectPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricCollectPolicy = this._metricCollectPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSloKoordinatorShNodeMetricV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricCollectPolicy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricCollectPolicy.internalValue = value.metricCollectPolicy;
    }
  }

  // metric_collect_policy - computed: false, optional: true, required: false
  private _metricCollectPolicy = new DataK8SSloKoordinatorShNodeMetricV1Alpha1ManifestSpecMetricCollectPolicyOutputReference(this, "metric_collect_policy");
  public get metricCollectPolicy() {
    return this._metricCollectPolicy;
  }
  public putMetricCollectPolicy(value: DataK8SSloKoordinatorShNodeMetricV1Alpha1ManifestSpecMetricCollectPolicy) {
    this._metricCollectPolicy.internalValue = value;
  }
  public resetMetricCollectPolicy() {
    this._metricCollectPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricCollectPolicyInput() {
    return this._metricCollectPolicy.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_metric_v1alpha1_manifest k8s_slo_koordinator_sh_node_metric_v1alpha1_manifest}
*/
export class DataK8SSloKoordinatorShNodeMetricV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_slo_koordinator_sh_node_metric_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSloKoordinatorShNodeMetricV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSloKoordinatorShNodeMetricV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SSloKoordinatorShNodeMetricV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_metric_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSloKoordinatorShNodeMetricV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_slo_koordinator_sh_node_metric_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/slo_koordinator_sh_node_metric_v1alpha1_manifest k8s_slo_koordinator_sh_node_metric_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSloKoordinatorShNodeMetricV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSloKoordinatorShNodeMetricV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_slo_koordinator_sh_node_metric_v1alpha1_manifest',
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
  private _metadata = new DataK8SSloKoordinatorShNodeMetricV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSloKoordinatorShNodeMetricV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSloKoordinatorShNodeMetricV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSloKoordinatorShNodeMetricV1Alpha1ManifestSpec) {
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
      metadata: dataK8SSloKoordinatorShNodeMetricV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSloKoordinatorShNodeMetricV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSloKoordinatorShNodeMetricV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSloKoordinatorShNodeMetricV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SSloKoordinatorShNodeMetricV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSloKoordinatorShNodeMetricV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
