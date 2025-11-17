// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_recording_rule_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_recording_rule_v1beta1_manifest#metadata DataK8SLokiGrafanaComRecordingRuleV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestMetadata;
  /**
  * RecordingRuleSpec defines the desired state of RecordingRule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_recording_rule_v1beta1_manifest#spec DataK8SLokiGrafanaComRecordingRuleV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestSpec;
}
export interface DataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_recording_rule_v1beta1_manifest#annotations DataK8SLokiGrafanaComRecordingRuleV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_recording_rule_v1beta1_manifest#labels DataK8SLokiGrafanaComRecordingRuleV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_recording_rule_v1beta1_manifest#name DataK8SLokiGrafanaComRecordingRuleV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_recording_rule_v1beta1_manifest#namespace DataK8SLokiGrafanaComRecordingRuleV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestMetadataToTerraform(struct?: DataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestSpecGroupsRules {
  /**
  * The LogQL expression to evaluate. Every evaluation cycle this is evaluated at the current time, and all resultant time series become pending/firing alerts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_recording_rule_v1beta1_manifest#expr DataK8SLokiGrafanaComRecordingRuleV1Beta1Manifest#expr}
  */
  readonly expr: string;
  /**
  * The name of the time series to output to. Must be a valid metric name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_recording_rule_v1beta1_manifest#record DataK8SLokiGrafanaComRecordingRuleV1Beta1Manifest#record}
  */
  readonly record?: string;
}

export function dataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestSpecGroupsRulesToTerraform(struct?: DataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestSpecGroupsRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expr: cdktf.stringToTerraform(struct!.expr),
    record: cdktf.stringToTerraform(struct!.record),
  }
}


export function dataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestSpecGroupsRulesToHclTerraform(struct?: DataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestSpecGroupsRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expr: {
      value: cdktf.stringToHclTerraform(struct!.expr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestSpecGroupsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestSpecGroupsRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expr !== undefined) {
      hasAnyValues = true;
      internalValueResult.expr = this._expr;
    }
    if (this._record !== undefined) {
      hasAnyValues = true;
      internalValueResult.record = this._record;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestSpecGroupsRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expr = undefined;
      this._record = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expr = value.expr;
      this._record = value.record;
    }
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

export class DataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestSpecGroupsRulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestSpecGroupsRules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestSpecGroupsRulesOutputReference {
    return new DataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestSpecGroupsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestSpecGroups {
  /**
  * Interval defines the time interval between evaluation of the given recoding rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_recording_rule_v1beta1_manifest#interval DataK8SLokiGrafanaComRecordingRuleV1Beta1Manifest#interval}
  */
  readonly interval?: string;
  /**
  * Limit defines the number of series a recording rule can produce. 0 is no limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_recording_rule_v1beta1_manifest#limit DataK8SLokiGrafanaComRecordingRuleV1Beta1Manifest#limit}
  */
  readonly limit?: number;
  /**
  * Name of the recording rule group. Must be unique within all recording rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_recording_rule_v1beta1_manifest#name DataK8SLokiGrafanaComRecordingRuleV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Rules defines a list of recording rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_recording_rule_v1beta1_manifest#rules DataK8SLokiGrafanaComRecordingRuleV1Beta1Manifest#rules}
  */
  readonly rules: DataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestSpecGroupsRules[] | cdktf.IResolvable;
}

export function dataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestSpecGroupsToTerraform(struct?: DataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestSpecGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.stringToTerraform(struct!.interval),
    limit: cdktf.numberToTerraform(struct!.limit),
    name: cdktf.stringToTerraform(struct!.name),
    rules: cdktf.listMapper(dataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestSpecGroupsRulesToTerraform, false)(struct!.rules),
  }
}


export function dataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestSpecGroupsToHclTerraform(struct?: DataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestSpecGroups | cdktf.IResolvable): any {
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
    rules: {
      value: cdktf.listMapperHcl(dataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestSpecGroupsRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestSpecGroupsRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestSpecGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestSpecGroups | cdktf.IResolvable | undefined {
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
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestSpecGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interval = undefined;
      this._limit = undefined;
      this._name = undefined;
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

  // rules - computed: false, optional: false, required: true
  private _rules = new DataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestSpecGroupsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestSpecGroupsRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}

export class DataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestSpecGroupsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestSpecGroups[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestSpecGroupsOutputReference {
    return new DataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestSpecGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestSpec {
  /**
  * List of groups for recording rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_recording_rule_v1beta1_manifest#groups DataK8SLokiGrafanaComRecordingRuleV1Beta1Manifest#groups}
  */
  readonly groups?: DataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestSpecGroups[] | cdktf.IResolvable;
  /**
  * TenantID of tenant where the recording rules are evaluated in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_recording_rule_v1beta1_manifest#tenant_id DataK8SLokiGrafanaComRecordingRuleV1Beta1Manifest#tenant_id}
  */
  readonly tenantId: string;
}

export function dataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestSpecToTerraform(struct?: DataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    groups: cdktf.listMapper(dataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestSpecGroupsToTerraform, false)(struct!.groups),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function dataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    groups: {
      value: cdktf.listMapperHcl(dataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestSpecGroupsToHclTerraform, false)(struct!.groups),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestSpecGroupsList",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups?.internalValue;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groups.internalValue = undefined;
      this._tenantId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groups.internalValue = value.groups;
      this._tenantId = value.tenantId;
    }
  }

  // groups - computed: false, optional: true, required: false
  private _groups = new DataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestSpecGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
  public putGroups(value: DataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestSpecGroups[] | cdktf.IResolvable) {
    this._groups.internalValue = value;
  }
  public resetGroups() {
    this._groups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups.internalValue;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_recording_rule_v1beta1_manifest k8s_loki_grafana_com_recording_rule_v1beta1_manifest}
*/
export class DataK8SLokiGrafanaComRecordingRuleV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_loki_grafana_com_recording_rule_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SLokiGrafanaComRecordingRuleV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SLokiGrafanaComRecordingRuleV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SLokiGrafanaComRecordingRuleV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_recording_rule_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SLokiGrafanaComRecordingRuleV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_loki_grafana_com_recording_rule_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/loki_grafana_com_recording_rule_v1beta1_manifest k8s_loki_grafana_com_recording_rule_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_loki_grafana_com_recording_rule_v1beta1_manifest',
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
  private _metadata = new DataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestSpec) {
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
      metadata: dataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SLokiGrafanaComRecordingRuleV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
