// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_victoriametrics_com_vm_rule_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_victoriametrics_com_vm_rule_v1beta1_manifest#metadata DataK8SOperatorVictoriametricsComVmRuleV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestMetadata;
  /**
  * VMRuleSpec defines the desired state of VMRule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_victoriametrics_com_vm_rule_v1beta1_manifest#spec DataK8SOperatorVictoriametricsComVmRuleV1Beta1Manifest#spec}
  */
  readonly spec: DataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestSpec;
}
export interface DataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_victoriametrics_com_vm_rule_v1beta1_manifest#annotations DataK8SOperatorVictoriametricsComVmRuleV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_victoriametrics_com_vm_rule_v1beta1_manifest#labels DataK8SOperatorVictoriametricsComVmRuleV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_victoriametrics_com_vm_rule_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmRuleV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_victoriametrics_com_vm_rule_v1beta1_manifest#namespace DataK8SOperatorVictoriametricsComVmRuleV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestMetadataToTerraform(struct?: DataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestSpecGroupsRules {
  /**
  * Alert is a name for alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_victoriametrics_com_vm_rule_v1beta1_manifest#alert DataK8SOperatorVictoriametricsComVmRuleV1Beta1Manifest#alert}
  */
  readonly alert?: string;
  /**
  * Annotations will be added to rule configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_victoriametrics_com_vm_rule_v1beta1_manifest#annotations DataK8SOperatorVictoriametricsComVmRuleV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Debug enables logging for rule it useful for tracking
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_victoriametrics_com_vm_rule_v1beta1_manifest#debug DataK8SOperatorVictoriametricsComVmRuleV1Beta1Manifest#debug}
  */
  readonly debug?: boolean | cdktf.IResolvable;
  /**
  * Expr is query, that will be evaluated at dataSource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_victoriametrics_com_vm_rule_v1beta1_manifest#expr DataK8SOperatorVictoriametricsComVmRuleV1Beta1Manifest#expr}
  */
  readonly expr?: string;
  /**
  * For evaluation interval in time.Duration format 30s, 1m, 1h or nanoseconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_victoriametrics_com_vm_rule_v1beta1_manifest#for DataK8SOperatorVictoriametricsComVmRuleV1Beta1Manifest#for}
  */
  readonly for?: string;
  /**
  * KeepFiringFor will make alert continue firing for this long even when the alerting expression no longer has results. Use time.Duration format, 30s, 1m, 1h or nanoseconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_victoriametrics_com_vm_rule_v1beta1_manifest#keep_firing_for DataK8SOperatorVictoriametricsComVmRuleV1Beta1Manifest#keep_firing_for}
  */
  readonly keepFiringFor?: string;
  /**
  * Labels will be added to rule configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_victoriametrics_com_vm_rule_v1beta1_manifest#labels DataK8SOperatorVictoriametricsComVmRuleV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Record represents a query, that will be recorded to dataSource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_victoriametrics_com_vm_rule_v1beta1_manifest#record DataK8SOperatorVictoriametricsComVmRuleV1Beta1Manifest#record}
  */
  readonly record?: string;
  /**
  * UpdateEntriesLimit defines max number of rule's state updates stored in memory. Overrides '-rule.updateEntriesLimit' in vmalert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_victoriametrics_com_vm_rule_v1beta1_manifest#update_entries_limit DataK8SOperatorVictoriametricsComVmRuleV1Beta1Manifest#update_entries_limit}
  */
  readonly updateEntriesLimit?: number;
}

export function dataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestSpecGroupsRulesToTerraform(struct?: DataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestSpecGroupsRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert: cdktf.stringToTerraform(struct!.alert),
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    debug: cdktf.booleanToTerraform(struct!.debug),
    expr: cdktf.stringToTerraform(struct!.expr),
    for: cdktf.stringToTerraform(struct!.for),
    keep_firing_for: cdktf.stringToTerraform(struct!.keepFiringFor),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    record: cdktf.stringToTerraform(struct!.record),
    update_entries_limit: cdktf.numberToTerraform(struct!.updateEntriesLimit),
  }
}


export function dataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestSpecGroupsRulesToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestSpecGroupsRules | cdktf.IResolvable): any {
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
    debug: {
      value: cdktf.booleanToHclTerraform(struct!.debug),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    update_entries_limit: {
      value: cdktf.numberToHclTerraform(struct!.updateEntriesLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestSpecGroupsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestSpecGroupsRules | cdktf.IResolvable | undefined {
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
    if (this._debug !== undefined) {
      hasAnyValues = true;
      internalValueResult.debug = this._debug;
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
    if (this._updateEntriesLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateEntriesLimit = this._updateEntriesLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestSpecGroupsRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alert = undefined;
      this._annotations = undefined;
      this._debug = undefined;
      this._expr = undefined;
      this._for = undefined;
      this._keepFiringFor = undefined;
      this._labels = undefined;
      this._record = undefined;
      this._updateEntriesLimit = undefined;
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
      this._debug = value.debug;
      this._expr = value.expr;
      this._for = value.for;
      this._keepFiringFor = value.keepFiringFor;
      this._labels = value.labels;
      this._record = value.record;
      this._updateEntriesLimit = value.updateEntriesLimit;
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

  // debug - computed: false, optional: true, required: false
  private _debug?: boolean | cdktf.IResolvable; 
  public get debug() {
    return this.getBooleanAttribute('debug');
  }
  public set debug(value: boolean | cdktf.IResolvable) {
    this._debug = value;
  }
  public resetDebug() {
    this._debug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug;
  }

  // expr - computed: false, optional: true, required: false
  private _expr?: string; 
  public get expr() {
    return this.getStringAttribute('expr');
  }
  public set expr(value: string) {
    this._expr = value;
  }
  public resetExpr() {
    this._expr = undefined;
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

  // update_entries_limit - computed: false, optional: true, required: false
  private _updateEntriesLimit?: number; 
  public get updateEntriesLimit() {
    return this.getNumberAttribute('update_entries_limit');
  }
  public set updateEntriesLimit(value: number) {
    this._updateEntriesLimit = value;
  }
  public resetUpdateEntriesLimit() {
    this._updateEntriesLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateEntriesLimitInput() {
    return this._updateEntriesLimit;
  }
}

export class DataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestSpecGroupsRulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestSpecGroupsRules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestSpecGroupsRulesOutputReference {
    return new DataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestSpecGroupsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestSpecGroups {
  /**
  * Concurrency defines how many rules execute at once.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_victoriametrics_com_vm_rule_v1beta1_manifest#concurrency DataK8SOperatorVictoriametricsComVmRuleV1Beta1Manifest#concurrency}
  */
  readonly concurrency?: number;
  /**
  * Optional The evaluation timestamp will be aligned with group's interval, instead of using the actual timestamp that evaluation happens at. It is enabled by default to get more predictable results and to visually align with graphs plotted via Grafana or vmui.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_victoriametrics_com_vm_rule_v1beta1_manifest#eval_alignment DataK8SOperatorVictoriametricsComVmRuleV1Beta1Manifest#eval_alignment}
  */
  readonly evalAlignment?: boolean | cdktf.IResolvable;
  /**
  * Optional Adjust the 'time' parameter of group evaluation requests to compensate intentional query delay from the datasource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_victoriametrics_com_vm_rule_v1beta1_manifest#eval_delay DataK8SOperatorVictoriametricsComVmRuleV1Beta1Manifest#eval_delay}
  */
  readonly evalDelay?: string;
  /**
  * Optional Group will be evaluated at the exact offset in the range of [0...interval].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_victoriametrics_com_vm_rule_v1beta1_manifest#eval_offset DataK8SOperatorVictoriametricsComVmRuleV1Beta1Manifest#eval_offset}
  */
  readonly evalOffset?: string;
  /**
  * ExtraFilterLabels optional list of label filters applied to every rule's request within a group. Is compatible only with VM datasource. See more details [here](https://docs.victoriametrics.com/#prometheus-querying-api-enhancements) Deprecated, use params instead
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_victoriametrics_com_vm_rule_v1beta1_manifest#extra_filter_labels DataK8SOperatorVictoriametricsComVmRuleV1Beta1Manifest#extra_filter_labels}
  */
  readonly extraFilterLabels?: { [key: string]: string };
  /**
  * Headers contains optional HTTP headers added to each rule request Must be in form 'header-name: value' For example: headers: - 'CustomHeader: foo' - 'CustomHeader2: bar'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_victoriametrics_com_vm_rule_v1beta1_manifest#headers DataK8SOperatorVictoriametricsComVmRuleV1Beta1Manifest#headers}
  */
  readonly headers?: string[];
  /**
  * evaluation interval for group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_victoriametrics_com_vm_rule_v1beta1_manifest#interval DataK8SOperatorVictoriametricsComVmRuleV1Beta1Manifest#interval}
  */
  readonly interval?: string;
  /**
  * Labels optional list of labels added to every rule within a group. It has priority over the external labels. Labels are commonly used for adding environment or tenant-specific tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_victoriametrics_com_vm_rule_v1beta1_manifest#labels DataK8SOperatorVictoriametricsComVmRuleV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Limit the number of alerts an alerting rule and series a recording rule can produce
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_victoriametrics_com_vm_rule_v1beta1_manifest#limit DataK8SOperatorVictoriametricsComVmRuleV1Beta1Manifest#limit}
  */
  readonly limit?: number;
  /**
  * Name of group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_victoriametrics_com_vm_rule_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmRuleV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * NotifierHeaders contains optional HTTP headers added to each alert request which will send to notifier Must be in form 'header-name: value' For example: headers: - 'CustomHeader: foo' - 'CustomHeader2: bar'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_victoriametrics_com_vm_rule_v1beta1_manifest#notifier_headers DataK8SOperatorVictoriametricsComVmRuleV1Beta1Manifest#notifier_headers}
  */
  readonly notifierHeaders?: string[];
  /**
  * Params optional HTTP URL parameters added to each rule request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_victoriametrics_com_vm_rule_v1beta1_manifest#params DataK8SOperatorVictoriametricsComVmRuleV1Beta1Manifest#params}
  */
  readonly params?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * Rules list of alert rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_victoriametrics_com_vm_rule_v1beta1_manifest#rules DataK8SOperatorVictoriametricsComVmRuleV1Beta1Manifest#rules}
  */
  readonly rules: DataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestSpecGroupsRules[] | cdktf.IResolvable;
  /**
  * Tenant id for group, can be used only with enterprise version of vmalert. See more details [here](https://docs.victoriametrics.com/vmalert#multitenancy).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_victoriametrics_com_vm_rule_v1beta1_manifest#tenant DataK8SOperatorVictoriametricsComVmRuleV1Beta1Manifest#tenant}
  */
  readonly tenant?: string;
  /**
  * Type defines datasource type for enterprise version of vmalert possible values - prometheus,graphite
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_victoriametrics_com_vm_rule_v1beta1_manifest#type DataK8SOperatorVictoriametricsComVmRuleV1Beta1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestSpecGroupsToTerraform(struct?: DataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestSpecGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    concurrency: cdktf.numberToTerraform(struct!.concurrency),
    eval_alignment: cdktf.booleanToTerraform(struct!.evalAlignment),
    eval_delay: cdktf.stringToTerraform(struct!.evalDelay),
    eval_offset: cdktf.stringToTerraform(struct!.evalOffset),
    extra_filter_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extraFilterLabels),
    headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headers),
    interval: cdktf.stringToTerraform(struct!.interval),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    limit: cdktf.numberToTerraform(struct!.limit),
    name: cdktf.stringToTerraform(struct!.name),
    notifier_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notifierHeaders),
    params: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.params),
    rules: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestSpecGroupsRulesToTerraform, false)(struct!.rules),
    tenant: cdktf.stringToTerraform(struct!.tenant),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestSpecGroupsToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestSpecGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    concurrency: {
      value: cdktf.numberToHclTerraform(struct!.concurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    eval_alignment: {
      value: cdktf.booleanToHclTerraform(struct!.evalAlignment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    eval_delay: {
      value: cdktf.stringToHclTerraform(struct!.evalDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eval_offset: {
      value: cdktf.stringToHclTerraform(struct!.evalOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extra_filter_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.extraFilterLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.headers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
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
    notifier_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notifierHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    params: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.params),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
    rules: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestSpecGroupsRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestSpecGroupsRulesList",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestSpecGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestSpecGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._concurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrency = this._concurrency;
    }
    if (this._evalAlignment !== undefined) {
      hasAnyValues = true;
      internalValueResult.evalAlignment = this._evalAlignment;
    }
    if (this._evalDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.evalDelay = this._evalDelay;
    }
    if (this._evalOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.evalOffset = this._evalOffset;
    }
    if (this._extraFilterLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraFilterLabels = this._extraFilterLabels;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._notifierHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifierHeaders = this._notifierHeaders;
    }
    if (this._params !== undefined) {
      hasAnyValues = true;
      internalValueResult.params = this._params;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestSpecGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._concurrency = undefined;
      this._evalAlignment = undefined;
      this._evalDelay = undefined;
      this._evalOffset = undefined;
      this._extraFilterLabels = undefined;
      this._headers = undefined;
      this._interval = undefined;
      this._labels = undefined;
      this._limit = undefined;
      this._name = undefined;
      this._notifierHeaders = undefined;
      this._params = undefined;
      this._rules.internalValue = undefined;
      this._tenant = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._concurrency = value.concurrency;
      this._evalAlignment = value.evalAlignment;
      this._evalDelay = value.evalDelay;
      this._evalOffset = value.evalOffset;
      this._extraFilterLabels = value.extraFilterLabels;
      this._headers = value.headers;
      this._interval = value.interval;
      this._labels = value.labels;
      this._limit = value.limit;
      this._name = value.name;
      this._notifierHeaders = value.notifierHeaders;
      this._params = value.params;
      this._rules.internalValue = value.rules;
      this._tenant = value.tenant;
      this._type = value.type;
    }
  }

  // concurrency - computed: false, optional: true, required: false
  private _concurrency?: number; 
  public get concurrency() {
    return this.getNumberAttribute('concurrency');
  }
  public set concurrency(value: number) {
    this._concurrency = value;
  }
  public resetConcurrency() {
    this._concurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrencyInput() {
    return this._concurrency;
  }

  // eval_alignment - computed: false, optional: true, required: false
  private _evalAlignment?: boolean | cdktf.IResolvable; 
  public get evalAlignment() {
    return this.getBooleanAttribute('eval_alignment');
  }
  public set evalAlignment(value: boolean | cdktf.IResolvable) {
    this._evalAlignment = value;
  }
  public resetEvalAlignment() {
    this._evalAlignment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evalAlignmentInput() {
    return this._evalAlignment;
  }

  // eval_delay - computed: false, optional: true, required: false
  private _evalDelay?: string; 
  public get evalDelay() {
    return this.getStringAttribute('eval_delay');
  }
  public set evalDelay(value: string) {
    this._evalDelay = value;
  }
  public resetEvalDelay() {
    this._evalDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evalDelayInput() {
    return this._evalDelay;
  }

  // eval_offset - computed: false, optional: true, required: false
  private _evalOffset?: string; 
  public get evalOffset() {
    return this.getStringAttribute('eval_offset');
  }
  public set evalOffset(value: string) {
    this._evalOffset = value;
  }
  public resetEvalOffset() {
    this._evalOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evalOffsetInput() {
    return this._evalOffset;
  }

  // extra_filter_labels - computed: false, optional: true, required: false
  private _extraFilterLabels?: { [key: string]: string }; 
  public get extraFilterLabels() {
    return this.getStringMapAttribute('extra_filter_labels');
  }
  public set extraFilterLabels(value: { [key: string]: string }) {
    this._extraFilterLabels = value;
  }
  public resetExtraFilterLabels() {
    this._extraFilterLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraFilterLabelsInput() {
    return this._extraFilterLabels;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: string[]; 
  public get headers() {
    return this.getListAttribute('headers');
  }
  public set headers(value: string[]) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
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

  // notifier_headers - computed: false, optional: true, required: false
  private _notifierHeaders?: string[]; 
  public get notifierHeaders() {
    return this.getListAttribute('notifier_headers');
  }
  public set notifierHeaders(value: string[]) {
    this._notifierHeaders = value;
  }
  public resetNotifierHeaders() {
    this._notifierHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifierHeadersInput() {
    return this._notifierHeaders;
  }

  // params - computed: false, optional: true, required: false
  private _params?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get params() {
    return this.interpolationForAttribute('params');
  }
  public set params(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._params = value;
  }
  public resetParams() {
    this._params = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new DataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestSpecGroupsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestSpecGroupsRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
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
}

export class DataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestSpecGroupsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestSpecGroups[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestSpecGroupsOutputReference {
    return new DataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestSpecGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestSpec {
  /**
  * Groups list of group rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_victoriametrics_com_vm_rule_v1beta1_manifest#groups DataK8SOperatorVictoriametricsComVmRuleV1Beta1Manifest#groups}
  */
  readonly groups: DataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestSpecGroups[] | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestSpecToTerraform(struct?: DataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    groups: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestSpecGroupsToTerraform, false)(struct!.groups),
  }
}


export function dataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    groups: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestSpecGroupsToHclTerraform, false)(struct!.groups),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestSpecGroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
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

  // groups - computed: false, optional: false, required: true
  private _groups = new DataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestSpecGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
  public putGroups(value: DataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestSpecGroups[] | cdktf.IResolvable) {
    this._groups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_victoriametrics_com_vm_rule_v1beta1_manifest k8s_operator_victoriametrics_com_vm_rule_v1beta1_manifest}
*/
export class DataK8SOperatorVictoriametricsComVmRuleV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_operator_victoriametrics_com_vm_rule_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SOperatorVictoriametricsComVmRuleV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SOperatorVictoriametricsComVmRuleV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SOperatorVictoriametricsComVmRuleV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_victoriametrics_com_vm_rule_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SOperatorVictoriametricsComVmRuleV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_operator_victoriametrics_com_vm_rule_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_victoriametrics_com_vm_rule_v1beta1_manifest k8s_operator_victoriametrics_com_vm_rule_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_operator_victoriametrics_com_vm_rule_v1beta1_manifest',
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
  private _metadata = new DataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestSpec) {
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
      metadata: dataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOperatorVictoriametricsComVmRuleV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
