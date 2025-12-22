// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_prometheus_rule_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SMonitoringCoreosComPrometheusRuleV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_prometheus_rule_v1_manifest#metadata DataK8SMonitoringCoreosComPrometheusRuleV1Manifest#metadata}
  */
  readonly metadata: DataK8SMonitoringCoreosComPrometheusRuleV1ManifestMetadata;
  /**
  * Specification of desired alerting rule definitions for Prometheus.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_prometheus_rule_v1_manifest#spec DataK8SMonitoringCoreosComPrometheusRuleV1Manifest#spec}
  */
  readonly spec: DataK8SMonitoringCoreosComPrometheusRuleV1ManifestSpec;
}
export interface DataK8SMonitoringCoreosComPrometheusRuleV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_prometheus_rule_v1_manifest#annotations DataK8SMonitoringCoreosComPrometheusRuleV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_prometheus_rule_v1_manifest#labels DataK8SMonitoringCoreosComPrometheusRuleV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_prometheus_rule_v1_manifest#name DataK8SMonitoringCoreosComPrometheusRuleV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_prometheus_rule_v1_manifest#namespace DataK8SMonitoringCoreosComPrometheusRuleV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SMonitoringCoreosComPrometheusRuleV1ManifestMetadataToTerraform(struct?: DataK8SMonitoringCoreosComPrometheusRuleV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SMonitoringCoreosComPrometheusRuleV1ManifestMetadataToHclTerraform(struct?: DataK8SMonitoringCoreosComPrometheusRuleV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SMonitoringCoreosComPrometheusRuleV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComPrometheusRuleV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMonitoringCoreosComPrometheusRuleV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SMonitoringCoreosComPrometheusRuleV1ManifestSpecGroupsRules {
  /**
  * Name of the alert. Must be a valid label value. Only one of 'record' and 'alert' must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_prometheus_rule_v1_manifest#alert DataK8SMonitoringCoreosComPrometheusRuleV1Manifest#alert}
  */
  readonly alert?: string;
  /**
  * Annotations to add to each alert. Only valid for alerting rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_prometheus_rule_v1_manifest#annotations DataK8SMonitoringCoreosComPrometheusRuleV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * PromQL expression to evaluate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_prometheus_rule_v1_manifest#expr DataK8SMonitoringCoreosComPrometheusRuleV1Manifest#expr}
  */
  readonly expr: string;
  /**
  * Alerts are considered firing once they have been returned for this long.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_prometheus_rule_v1_manifest#for DataK8SMonitoringCoreosComPrometheusRuleV1Manifest#for}
  */
  readonly for?: string;
  /**
  * KeepFiringFor defines how long an alert will continue firing after the condition that triggered it has cleared.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_prometheus_rule_v1_manifest#keep_firing_for DataK8SMonitoringCoreosComPrometheusRuleV1Manifest#keep_firing_for}
  */
  readonly keepFiringFor?: string;
  /**
  * Labels to add or overwrite.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_prometheus_rule_v1_manifest#labels DataK8SMonitoringCoreosComPrometheusRuleV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the time series to output to. Must be a valid metric name. Only one of 'record' and 'alert' must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_prometheus_rule_v1_manifest#record DataK8SMonitoringCoreosComPrometheusRuleV1Manifest#record}
  */
  readonly record?: string;
}

export function dataK8SMonitoringCoreosComPrometheusRuleV1ManifestSpecGroupsRulesToTerraform(struct?: DataK8SMonitoringCoreosComPrometheusRuleV1ManifestSpecGroupsRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert: cdktf.stringToTerraform(struct!.alert),
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    expr: cdktf.stringToTerraform(struct!.expr),
    for: cdktf.stringToTerraform(struct!.for),
    keep_firing_for: cdktf.stringToTerraform(struct!.keepFiringFor),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    record: cdktf.stringToTerraform(struct!.record),
  }
}


export function dataK8SMonitoringCoreosComPrometheusRuleV1ManifestSpecGroupsRulesToHclTerraform(struct?: DataK8SMonitoringCoreosComPrometheusRuleV1ManifestSpecGroupsRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert: {
      value: cdktf.stringToHclTerraform(struct!.alert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    expr: {
      value: cdktf.stringToHclTerraform(struct!.expr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    for: {
      value: cdktf.stringToHclTerraform(struct!.for),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keep_firing_for: {
      value: cdktf.stringToHclTerraform(struct!.keepFiringFor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    record: {
      value: cdktf.stringToHclTerraform(struct!.record),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComPrometheusRuleV1ManifestSpecGroupsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMonitoringCoreosComPrometheusRuleV1ManifestSpecGroupsRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alert !== undefined) {
      hasAnyValues = true;
      internalValueResult.alert = this._alert;
    }
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._expr !== undefined) {
      hasAnyValues = true;
      internalValueResult.expr = this._expr;
    }
    if (this._for !== undefined) {
      hasAnyValues = true;
      internalValueResult.for = this._for;
    }
    if (this._keepFiringFor !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepFiringFor = this._keepFiringFor;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._record !== undefined) {
      hasAnyValues = true;
      internalValueResult.record = this._record;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComPrometheusRuleV1ManifestSpecGroupsRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alert = undefined;
      this._annotations = undefined;
      this._expr = undefined;
      this._for = undefined;
      this._keepFiringFor = undefined;
      this._labels = undefined;
      this._record = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alert = value.alert;
      this._annotations = value.annotations;
      this._expr = value.expr;
      this._for = value.for;
      this._keepFiringFor = value.keepFiringFor;
      this._labels = value.labels;
      this._record = value.record;
    }
  }

  // alert - computed: false, optional: true, required: false
  private _alert?: string; 
  public get alert() {
    return this.getStringAttribute('alert');
  }
  public set alert(value: string) {
    this._alert = value;
  }
  public resetAlert() {
    this._alert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertInput() {
    return this._alert;
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

  // expr - computed: false, optional: false, required: true
  private _expr?: string; 
  public get expr() {
    return this.getStringAttribute('expr');
  }
  public set expr(value: string) {
    this._expr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exprInput() {
    return this._expr;
  }

  // for - computed: false, optional: true, required: false
  private _for?: string; 
  public get for() {
    return this.getStringAttribute('for');
  }
  public set for(value: string) {
    this._for = value;
  }
  public resetFor() {
    this._for = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forInput() {
    return this._for;
  }

  // keep_firing_for - computed: false, optional: true, required: false
  private _keepFiringFor?: string; 
  public get keepFiringFor() {
    return this.getStringAttribute('keep_firing_for');
  }
  public set keepFiringFor(value: string) {
    this._keepFiringFor = value;
  }
  public resetKeepFiringFor() {
    this._keepFiringFor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepFiringForInput() {
    return this._keepFiringFor;
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

  // record - computed: false, optional: true, required: false
  private _record?: string; 
  public get record() {
    return this.getStringAttribute('record');
  }
  public set record(value: string) {
    this._record = value;
  }
  public resetRecord() {
    this._record = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordInput() {
    return this._record;
  }
}

export class DataK8SMonitoringCoreosComPrometheusRuleV1ManifestSpecGroupsRulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SMonitoringCoreosComPrometheusRuleV1ManifestSpecGroupsRules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMonitoringCoreosComPrometheusRuleV1ManifestSpecGroupsRulesOutputReference {
    return new DataK8SMonitoringCoreosComPrometheusRuleV1ManifestSpecGroupsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMonitoringCoreosComPrometheusRuleV1ManifestSpecGroups {
  /**
  * Interval determines how often rules in the group are evaluated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_prometheus_rule_v1_manifest#interval DataK8SMonitoringCoreosComPrometheusRuleV1Manifest#interval}
  */
  readonly interval?: string;
  /**
  * Limit the number of alerts an alerting rule and series a recording rule can produce. Limit is supported starting with Prometheus >= 2.31 and Thanos Ruler >= 0.24.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_prometheus_rule_v1_manifest#limit DataK8SMonitoringCoreosComPrometheusRuleV1Manifest#limit}
  */
  readonly limit?: number;
  /**
  * Name of the rule group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_prometheus_rule_v1_manifest#name DataK8SMonitoringCoreosComPrometheusRuleV1Manifest#name}
  */
  readonly name: string;
  /**
  * PartialResponseStrategy is only used by ThanosRuler and will be ignored by Prometheus instances. More info: https://github.com/thanos-io/thanos/blob/main/docs/components/rule.md#partial-response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_prometheus_rule_v1_manifest#partial_response_strategy DataK8SMonitoringCoreosComPrometheusRuleV1Manifest#partial_response_strategy}
  */
  readonly partialResponseStrategy?: string;
  /**
  * Defines the offset the rule evaluation timestamp of this particular group by the specified duration into the past. It requires Prometheus >= v2.53.0. It is not supported for ThanosRuler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_prometheus_rule_v1_manifest#query_offset DataK8SMonitoringCoreosComPrometheusRuleV1Manifest#query_offset}
  */
  readonly queryOffset?: string;
  /**
  * List of alerting and recording rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_prometheus_rule_v1_manifest#rules DataK8SMonitoringCoreosComPrometheusRuleV1Manifest#rules}
  */
  readonly rules?: DataK8SMonitoringCoreosComPrometheusRuleV1ManifestSpecGroupsRules[] | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComPrometheusRuleV1ManifestSpecGroupsToTerraform(struct?: DataK8SMonitoringCoreosComPrometheusRuleV1ManifestSpecGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.stringToTerraform(struct!.interval),
    limit: cdktf.numberToTerraform(struct!.limit),
    name: cdktf.stringToTerraform(struct!.name),
    partial_response_strategy: cdktf.stringToTerraform(struct!.partialResponseStrategy),
    query_offset: cdktf.stringToTerraform(struct!.queryOffset),
    rules: cdktf.listMapper(dataK8SMonitoringCoreosComPrometheusRuleV1ManifestSpecGroupsRulesToTerraform, false)(struct!.rules),
  }
}


export function dataK8SMonitoringCoreosComPrometheusRuleV1ManifestSpecGroupsToHclTerraform(struct?: DataK8SMonitoringCoreosComPrometheusRuleV1ManifestSpecGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
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
    partial_response_strategy: {
      value: cdktf.stringToHclTerraform(struct!.partialResponseStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_offset: {
      value: cdktf.stringToHclTerraform(struct!.queryOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rules: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComPrometheusRuleV1ManifestSpecGroupsRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusRuleV1ManifestSpecGroupsRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComPrometheusRuleV1ManifestSpecGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SMonitoringCoreosComPrometheusRuleV1ManifestSpecGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._partialResponseStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.partialResponseStrategy = this._partialResponseStrategy;
    }
    if (this._queryOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryOffset = this._queryOffset;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComPrometheusRuleV1ManifestSpecGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interval = undefined;
      this._limit = undefined;
      this._name = undefined;
      this._partialResponseStrategy = undefined;
      this._queryOffset = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interval = value.interval;
      this._limit = value.limit;
      this._name = value.name;
      this._partialResponseStrategy = value.partialResponseStrategy;
      this._queryOffset = value.queryOffset;
      this._rules.internalValue = value.rules;
    }
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
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

  // partial_response_strategy - computed: false, optional: true, required: false
  private _partialResponseStrategy?: string; 
  public get partialResponseStrategy() {
    return this.getStringAttribute('partial_response_strategy');
  }
  public set partialResponseStrategy(value: string) {
    this._partialResponseStrategy = value;
  }
  public resetPartialResponseStrategy() {
    this._partialResponseStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partialResponseStrategyInput() {
    return this._partialResponseStrategy;
  }

  // query_offset - computed: false, optional: true, required: false
  private _queryOffset?: string; 
  public get queryOffset() {
    return this.getStringAttribute('query_offset');
  }
  public set queryOffset(value: string) {
    this._queryOffset = value;
  }
  public resetQueryOffset() {
    this._queryOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryOffsetInput() {
    return this._queryOffset;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new DataK8SMonitoringCoreosComPrometheusRuleV1ManifestSpecGroupsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataK8SMonitoringCoreosComPrometheusRuleV1ManifestSpecGroupsRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}

export class DataK8SMonitoringCoreosComPrometheusRuleV1ManifestSpecGroupsList extends cdktf.ComplexList {
  public internalValue? : DataK8SMonitoringCoreosComPrometheusRuleV1ManifestSpecGroups[] | cdktf.IResolvable

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
  public get(index: number): DataK8SMonitoringCoreosComPrometheusRuleV1ManifestSpecGroupsOutputReference {
    return new DataK8SMonitoringCoreosComPrometheusRuleV1ManifestSpecGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SMonitoringCoreosComPrometheusRuleV1ManifestSpec {
  /**
  * Content of Prometheus rule file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_prometheus_rule_v1_manifest#groups DataK8SMonitoringCoreosComPrometheusRuleV1Manifest#groups}
  */
  readonly groups?: DataK8SMonitoringCoreosComPrometheusRuleV1ManifestSpecGroups[] | cdktf.IResolvable;
}

export function dataK8SMonitoringCoreosComPrometheusRuleV1ManifestSpecToTerraform(struct?: DataK8SMonitoringCoreosComPrometheusRuleV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    groups: cdktf.listMapper(dataK8SMonitoringCoreosComPrometheusRuleV1ManifestSpecGroupsToTerraform, false)(struct!.groups),
  }
}


export function dataK8SMonitoringCoreosComPrometheusRuleV1ManifestSpecToHclTerraform(struct?: DataK8SMonitoringCoreosComPrometheusRuleV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    groups: {
      value: cdktf.listMapperHcl(dataK8SMonitoringCoreosComPrometheusRuleV1ManifestSpecGroupsToHclTerraform, false)(struct!.groups),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SMonitoringCoreosComPrometheusRuleV1ManifestSpecGroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonitoringCoreosComPrometheusRuleV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonitoringCoreosComPrometheusRuleV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonitoringCoreosComPrometheusRuleV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groups.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groups.internalValue = value.groups;
    }
  }

  // groups - computed: false, optional: true, required: false
  private _groups = new DataK8SMonitoringCoreosComPrometheusRuleV1ManifestSpecGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
  public putGroups(value: DataK8SMonitoringCoreosComPrometheusRuleV1ManifestSpecGroups[] | cdktf.IResolvable) {
    this._groups.internalValue = value;
  }
  public resetGroups() {
    this._groups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_prometheus_rule_v1_manifest k8s_monitoring_coreos_com_prometheus_rule_v1_manifest}
*/
export class DataK8SMonitoringCoreosComPrometheusRuleV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_monitoring_coreos_com_prometheus_rule_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SMonitoringCoreosComPrometheusRuleV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SMonitoringCoreosComPrometheusRuleV1Manifest to import
  * @param importFromId The id of the existing DataK8SMonitoringCoreosComPrometheusRuleV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_prometheus_rule_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SMonitoringCoreosComPrometheusRuleV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_monitoring_coreos_com_prometheus_rule_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/monitoring_coreos_com_prometheus_rule_v1_manifest k8s_monitoring_coreos_com_prometheus_rule_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SMonitoringCoreosComPrometheusRuleV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SMonitoringCoreosComPrometheusRuleV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_monitoring_coreos_com_prometheus_rule_v1_manifest',
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
  private _metadata = new DataK8SMonitoringCoreosComPrometheusRuleV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SMonitoringCoreosComPrometheusRuleV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SMonitoringCoreosComPrometheusRuleV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SMonitoringCoreosComPrometheusRuleV1ManifestSpec) {
    this._spec.internalValue = value;
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
      metadata: dataK8SMonitoringCoreosComPrometheusRuleV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SMonitoringCoreosComPrometheusRuleV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SMonitoringCoreosComPrometheusRuleV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SMonitoringCoreosComPrometheusRuleV1ManifestMetadata",
      },
      spec: {
        value: dataK8SMonitoringCoreosComPrometheusRuleV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SMonitoringCoreosComPrometheusRuleV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
