// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/karpenter_sh_node_pool_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SKarpenterShNodePoolV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/karpenter_sh_node_pool_v1_manifest#metadata DataK8SKarpenterShNodePoolV1Manifest#metadata}
  */
  readonly metadata: DataK8SKarpenterShNodePoolV1ManifestMetadata;
  /**
  * NodePoolSpec is the top level nodepool specification. Nodepools launch nodes in response to pods that are unschedulable. A single nodepool is capable of managing a diverse set of nodes. Node properties are determined from a combination of nodepool and pod scheduling constraints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/karpenter_sh_node_pool_v1_manifest#spec DataK8SKarpenterShNodePoolV1Manifest#spec}
  */
  readonly spec: DataK8SKarpenterShNodePoolV1ManifestSpec;
}
export interface DataK8SKarpenterShNodePoolV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/karpenter_sh_node_pool_v1_manifest#annotations DataK8SKarpenterShNodePoolV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/karpenter_sh_node_pool_v1_manifest#labels DataK8SKarpenterShNodePoolV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/karpenter_sh_node_pool_v1_manifest#name DataK8SKarpenterShNodePoolV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKarpenterShNodePoolV1ManifestMetadataToTerraform(struct?: DataK8SKarpenterShNodePoolV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SKarpenterShNodePoolV1ManifestMetadataToHclTerraform(struct?: DataK8SKarpenterShNodePoolV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SKarpenterShNodePoolV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKarpenterShNodePoolV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKarpenterShNodePoolV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKarpenterShNodePoolV1ManifestSpecDisruptionBudgets {
  /**
  * Duration determines how long a Budget is active since each Schedule hit. Only minutes and hours are accepted, as cron does not work in seconds. If omitted, the budget is always active. This is required if Schedule is set. This regex has an optional 0s at the end since the duration.String() always adds a 0s at the end.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/karpenter_sh_node_pool_v1_manifest#duration DataK8SKarpenterShNodePoolV1Manifest#duration}
  */
  readonly duration?: string;
  /**
  * Nodes dictates the maximum number of NodeClaims owned by this NodePool that can be terminating at once. This is calculated by counting nodes that have a deletion timestamp set, or are actively being deleted by Karpenter. This field is required when specifying a budget. This cannot be of type intstr.IntOrString since kubebuilder doesn't support pattern checking for int nodes for IntOrString nodes. Ref: https://github.com/kubernetes-sigs/controller-tools/blob/55efe4be40394a288216dab63156b0a64fb82929/pkg/crd/markers/validation.go#L379-L388
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/karpenter_sh_node_pool_v1_manifest#nodes DataK8SKarpenterShNodePoolV1Manifest#nodes}
  */
  readonly nodes: string;
  /**
  * Reasons is a list of disruption methods that this budget applies to. If Reasons is not set, this budget applies to all methods. Otherwise, this will apply to each reason defined. allowed reasons are Underutilized, Empty, and Drifted and additional CloudProvider-specific reasons.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/karpenter_sh_node_pool_v1_manifest#reasons DataK8SKarpenterShNodePoolV1Manifest#reasons}
  */
  readonly reasons?: string[];
  /**
  * Schedule specifies when a budget begins being active, following the upstream cronjob syntax. If omitted, the budget is always active. Timezones are not supported. This field is required if Duration is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/karpenter_sh_node_pool_v1_manifest#schedule DataK8SKarpenterShNodePoolV1Manifest#schedule}
  */
  readonly schedule?: string;
}

export function dataK8SKarpenterShNodePoolV1ManifestSpecDisruptionBudgetsToTerraform(struct?: DataK8SKarpenterShNodePoolV1ManifestSpecDisruptionBudgets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    nodes: cdktf.stringToTerraform(struct!.nodes),
    reasons: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.reasons),
    schedule: cdktf.stringToTerraform(struct!.schedule),
  }
}


export function dataK8SKarpenterShNodePoolV1ManifestSpecDisruptionBudgetsToHclTerraform(struct?: DataK8SKarpenterShNodePoolV1ManifestSpecDisruptionBudgets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nodes: {
      value: cdktf.stringToHclTerraform(struct!.nodes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reasons: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.reasons),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    schedule: {
      value: cdktf.stringToHclTerraform(struct!.schedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKarpenterShNodePoolV1ManifestSpecDisruptionBudgetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKarpenterShNodePoolV1ManifestSpecDisruptionBudgets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._nodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodes = this._nodes;
    }
    if (this._reasons !== undefined) {
      hasAnyValues = true;
      internalValueResult.reasons = this._reasons;
    }
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKarpenterShNodePoolV1ManifestSpecDisruptionBudgets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._nodes = undefined;
      this._reasons = undefined;
      this._schedule = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
      this._nodes = value.nodes;
      this._reasons = value.reasons;
      this._schedule = value.schedule;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // nodes - computed: false, optional: false, required: true
  private _nodes?: string; 
  public get nodes() {
    return this.getStringAttribute('nodes');
  }
  public set nodes(value: string) {
    this._nodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes;
  }

  // reasons - computed: false, optional: true, required: false
  private _reasons?: string[]; 
  public get reasons() {
    return this.getListAttribute('reasons');
  }
  public set reasons(value: string[]) {
    this._reasons = value;
  }
  public resetReasons() {
    this._reasons = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonsInput() {
    return this._reasons;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }
}

export class DataK8SKarpenterShNodePoolV1ManifestSpecDisruptionBudgetsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKarpenterShNodePoolV1ManifestSpecDisruptionBudgets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKarpenterShNodePoolV1ManifestSpecDisruptionBudgetsOutputReference {
    return new DataK8SKarpenterShNodePoolV1ManifestSpecDisruptionBudgetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKarpenterShNodePoolV1ManifestSpecDisruption {
  /**
  * Budgets is a list of Budgets. If there are multiple active budgets, Karpenter uses the most restrictive value. If left undefined, this will default to one budget with a value to 10%.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/karpenter_sh_node_pool_v1_manifest#budgets DataK8SKarpenterShNodePoolV1Manifest#budgets}
  */
  readonly budgets?: DataK8SKarpenterShNodePoolV1ManifestSpecDisruptionBudgets[] | cdktf.IResolvable;
  /**
  * ConsolidateAfter is the duration the controller will wait before attempting to terminate nodes that are underutilized. Refer to ConsolidationPolicy for how underutilization is considered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/karpenter_sh_node_pool_v1_manifest#consolidate_after DataK8SKarpenterShNodePoolV1Manifest#consolidate_after}
  */
  readonly consolidateAfter: string;
  /**
  * ConsolidationPolicy describes which nodes Karpenter can disrupt through its consolidation algorithm. This policy defaults to 'WhenEmptyOrUnderutilized' if not specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/karpenter_sh_node_pool_v1_manifest#consolidation_policy DataK8SKarpenterShNodePoolV1Manifest#consolidation_policy}
  */
  readonly consolidationPolicy?: string;
}

export function dataK8SKarpenterShNodePoolV1ManifestSpecDisruptionToTerraform(struct?: DataK8SKarpenterShNodePoolV1ManifestSpecDisruption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    budgets: cdktf.listMapper(dataK8SKarpenterShNodePoolV1ManifestSpecDisruptionBudgetsToTerraform, false)(struct!.budgets),
    consolidate_after: cdktf.stringToTerraform(struct!.consolidateAfter),
    consolidation_policy: cdktf.stringToTerraform(struct!.consolidationPolicy),
  }
}


export function dataK8SKarpenterShNodePoolV1ManifestSpecDisruptionToHclTerraform(struct?: DataK8SKarpenterShNodePoolV1ManifestSpecDisruption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    budgets: {
      value: cdktf.listMapperHcl(dataK8SKarpenterShNodePoolV1ManifestSpecDisruptionBudgetsToHclTerraform, false)(struct!.budgets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKarpenterShNodePoolV1ManifestSpecDisruptionBudgetsList",
    },
    consolidate_after: {
      value: cdktf.stringToHclTerraform(struct!.consolidateAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    consolidation_policy: {
      value: cdktf.stringToHclTerraform(struct!.consolidationPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKarpenterShNodePoolV1ManifestSpecDisruptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKarpenterShNodePoolV1ManifestSpecDisruption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._budgets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.budgets = this._budgets?.internalValue;
    }
    if (this._consolidateAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.consolidateAfter = this._consolidateAfter;
    }
    if (this._consolidationPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.consolidationPolicy = this._consolidationPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKarpenterShNodePoolV1ManifestSpecDisruption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._budgets.internalValue = undefined;
      this._consolidateAfter = undefined;
      this._consolidationPolicy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._budgets.internalValue = value.budgets;
      this._consolidateAfter = value.consolidateAfter;
      this._consolidationPolicy = value.consolidationPolicy;
    }
  }

  // budgets - computed: false, optional: true, required: false
  private _budgets = new DataK8SKarpenterShNodePoolV1ManifestSpecDisruptionBudgetsList(this, "budgets", false);
  public get budgets() {
    return this._budgets;
  }
  public putBudgets(value: DataK8SKarpenterShNodePoolV1ManifestSpecDisruptionBudgets[] | cdktf.IResolvable) {
    this._budgets.internalValue = value;
  }
  public resetBudgets() {
    this._budgets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get budgetsInput() {
    return this._budgets.internalValue;
  }

  // consolidate_after - computed: false, optional: false, required: true
  private _consolidateAfter?: string; 
  public get consolidateAfter() {
    return this.getStringAttribute('consolidate_after');
  }
  public set consolidateAfter(value: string) {
    this._consolidateAfter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consolidateAfterInput() {
    return this._consolidateAfter;
  }

  // consolidation_policy - computed: false, optional: true, required: false
  private _consolidationPolicy?: string; 
  public get consolidationPolicy() {
    return this.getStringAttribute('consolidation_policy');
  }
  public set consolidationPolicy(value: string) {
    this._consolidationPolicy = value;
  }
  public resetConsolidationPolicy() {
    this._consolidationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consolidationPolicyInput() {
    return this._consolidationPolicy;
  }
}
export interface DataK8SKarpenterShNodePoolV1ManifestSpecTemplateMetadata {
  /**
  * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/karpenter_sh_node_pool_v1_manifest#annotations DataK8SKarpenterShNodePoolV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/karpenter_sh_node_pool_v1_manifest#labels DataK8SKarpenterShNodePoolV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SKarpenterShNodePoolV1ManifestSpecTemplateMetadataToTerraform(struct?: DataK8SKarpenterShNodePoolV1ManifestSpecTemplateMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SKarpenterShNodePoolV1ManifestSpecTemplateMetadataToHclTerraform(struct?: DataK8SKarpenterShNodePoolV1ManifestSpecTemplateMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKarpenterShNodePoolV1ManifestSpecTemplateMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKarpenterShNodePoolV1ManifestSpecTemplateMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKarpenterShNodePoolV1ManifestSpecTemplateMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
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
}
export interface DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecNodeClassRef {
  /**
  * API version of the referent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/karpenter_sh_node_pool_v1_manifest#group DataK8SKarpenterShNodePoolV1Manifest#group}
  */
  readonly group: string;
  /**
  * Kind of the referent; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/karpenter_sh_node_pool_v1_manifest#kind DataK8SKarpenterShNodePoolV1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of the referent; More info: http://kubernetes.io/docs/user-guide/identifiers#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/karpenter_sh_node_pool_v1_manifest#name DataK8SKarpenterShNodePoolV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecNodeClassRefToTerraform(struct?: DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecNodeClassRef | cdktf.IResolvable): any {
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


export function dataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecNodeClassRefToHclTerraform(struct?: DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecNodeClassRef | cdktf.IResolvable): any {
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

export class DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecNodeClassRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecNodeClassRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecNodeClassRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecRequirements {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/karpenter_sh_node_pool_v1_manifest#key DataK8SKarpenterShNodePoolV1Manifest#key}
  */
  readonly key: string;
  /**
  * This field is ALPHA and can be dropped or replaced at any time MinValues is the minimum number of unique values required to define the flexibility of the specific requirement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/karpenter_sh_node_pool_v1_manifest#min_values DataK8SKarpenterShNodePoolV1Manifest#min_values}
  */
  readonly minValues?: number;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/karpenter_sh_node_pool_v1_manifest#operator DataK8SKarpenterShNodePoolV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/karpenter_sh_node_pool_v1_manifest#values DataK8SKarpenterShNodePoolV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecRequirementsToTerraform(struct?: DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    min_values: cdktf.numberToTerraform(struct!.minValues),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecRequirementsToHclTerraform(struct?: DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_values: {
      value: cdktf.numberToHclTerraform(struct!.minValues),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecRequirementsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecRequirements | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._minValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.minValues = this._minValues;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecRequirements | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._minValues = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._minValues = value.minValues;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // min_values - computed: false, optional: true, required: false
  private _minValues?: number; 
  public get minValues() {
    return this.getNumberAttribute('min_values');
  }
  public set minValues(value: number) {
    this._minValues = value;
  }
  public resetMinValues() {
    this._minValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minValuesInput() {
    return this._minValues;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecRequirementsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecRequirements[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecRequirementsOutputReference {
    return new DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecRequirementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecStartupTaints {
  /**
  * Required. The effect of the taint on pods that do not tolerate the taint. Valid effects are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/karpenter_sh_node_pool_v1_manifest#effect DataK8SKarpenterShNodePoolV1Manifest#effect}
  */
  readonly effect: string;
  /**
  * Required. The taint key to be applied to a node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/karpenter_sh_node_pool_v1_manifest#key DataK8SKarpenterShNodePoolV1Manifest#key}
  */
  readonly key: string;
  /**
  * TimeAdded represents the time at which the taint was added. It is only written for NoExecute taints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/karpenter_sh_node_pool_v1_manifest#time_added DataK8SKarpenterShNodePoolV1Manifest#time_added}
  */
  readonly timeAdded?: string;
  /**
  * The taint value corresponding to the taint key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/karpenter_sh_node_pool_v1_manifest#value DataK8SKarpenterShNodePoolV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecStartupTaintsToTerraform(struct?: DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecStartupTaints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    time_added: cdktf.stringToTerraform(struct!.timeAdded),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecStartupTaintsToHclTerraform(struct?: DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecStartupTaints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_added: {
      value: cdktf.stringToHclTerraform(struct!.timeAdded),
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

export class DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecStartupTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecStartupTaints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._timeAdded !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeAdded = this._timeAdded;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecStartupTaints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._timeAdded = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._timeAdded = value.timeAdded;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: false, required: true
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // time_added - computed: false, optional: true, required: false
  private _timeAdded?: string; 
  public get timeAdded() {
    return this.getStringAttribute('time_added');
  }
  public set timeAdded(value: string) {
    this._timeAdded = value;
  }
  public resetTimeAdded() {
    this._timeAdded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeAddedInput() {
    return this._timeAdded;
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

export class DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecStartupTaintsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecStartupTaints[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecStartupTaintsOutputReference {
    return new DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecStartupTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecTaints {
  /**
  * Required. The effect of the taint on pods that do not tolerate the taint. Valid effects are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/karpenter_sh_node_pool_v1_manifest#effect DataK8SKarpenterShNodePoolV1Manifest#effect}
  */
  readonly effect: string;
  /**
  * Required. The taint key to be applied to a node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/karpenter_sh_node_pool_v1_manifest#key DataK8SKarpenterShNodePoolV1Manifest#key}
  */
  readonly key: string;
  /**
  * TimeAdded represents the time at which the taint was added. It is only written for NoExecute taints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/karpenter_sh_node_pool_v1_manifest#time_added DataK8SKarpenterShNodePoolV1Manifest#time_added}
  */
  readonly timeAdded?: string;
  /**
  * The taint value corresponding to the taint key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/karpenter_sh_node_pool_v1_manifest#value DataK8SKarpenterShNodePoolV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecTaintsToTerraform(struct?: DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecTaints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    time_added: cdktf.stringToTerraform(struct!.timeAdded),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecTaintsToHclTerraform(struct?: DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecTaints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_added: {
      value: cdktf.stringToHclTerraform(struct!.timeAdded),
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

export class DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecTaints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._timeAdded !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeAdded = this._timeAdded;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecTaints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._timeAdded = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._timeAdded = value.timeAdded;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: false, required: true
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // time_added - computed: false, optional: true, required: false
  private _timeAdded?: string; 
  public get timeAdded() {
    return this.getStringAttribute('time_added');
  }
  public set timeAdded(value: string) {
    this._timeAdded = value;
  }
  public resetTimeAdded() {
    this._timeAdded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeAddedInput() {
    return this._timeAdded;
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

export class DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecTaintsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecTaints[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecTaintsOutputReference {
    return new DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpec {
  /**
  * ExpireAfter is the duration the controller will wait before terminating a node, measured from when the node is created. This is useful to implement features like eventually consistent node upgrade, memory leak protection, and disruption testing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/karpenter_sh_node_pool_v1_manifest#expire_after DataK8SKarpenterShNodePoolV1Manifest#expire_after}
  */
  readonly expireAfter?: string;
  /**
  * NodeClassRef is a reference to an object that defines provider specific configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/karpenter_sh_node_pool_v1_manifest#node_class_ref DataK8SKarpenterShNodePoolV1Manifest#node_class_ref}
  */
  readonly nodeClassRef: DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecNodeClassRef;
  /**
  * Requirements are layered with GetLabels and applied to every node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/karpenter_sh_node_pool_v1_manifest#requirements DataK8SKarpenterShNodePoolV1Manifest#requirements}
  */
  readonly requirements: DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecRequirements[] | cdktf.IResolvable;
  /**
  * StartupTaints are taints that are applied to nodes upon startup which are expected to be removed automatically within a short period of time, typically by a DaemonSet that tolerates the taint. These are commonly used by daemonsets to allow initialization and enforce startup ordering. StartupTaints are ignored for provisioning purposes in that pods are not required to tolerate a StartupTaint in order to have nodes provisioned for them.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/karpenter_sh_node_pool_v1_manifest#startup_taints DataK8SKarpenterShNodePoolV1Manifest#startup_taints}
  */
  readonly startupTaints?: DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecStartupTaints[] | cdktf.IResolvable;
  /**
  * Taints will be applied to the NodeClaim's node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/karpenter_sh_node_pool_v1_manifest#taints DataK8SKarpenterShNodePoolV1Manifest#taints}
  */
  readonly taints?: DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecTaints[] | cdktf.IResolvable;
  /**
  * TerminationGracePeriod is the maximum duration the controller will wait before forcefully deleting the pods on a node, measured from when deletion is first initiated. Warning: this feature takes precedence over a Pod's terminationGracePeriodSeconds value, and bypasses any blocked PDBs or the karpenter.sh/do-not-disrupt annotation. This field is intended to be used by cluster administrators to enforce that nodes can be cycled within a given time period. When set, drifted nodes will begin draining even if there are pods blocking eviction. Draining will respect PDBs and the do-not-disrupt annotation until the TGP is reached. Karpenter will preemptively delete pods so their terminationGracePeriodSeconds align with the node's terminationGracePeriod. If a pod would be terminated without being granted its full terminationGracePeriodSeconds prior to the node timeout, that pod will be deleted at T = node timeout - pod terminationGracePeriodSeconds. The feature can also be used to allow maximum time limits for long-running jobs which can delay node termination with preStop hooks. If left undefined, the controller will wait indefinitely for pods to be drained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/karpenter_sh_node_pool_v1_manifest#termination_grace_period DataK8SKarpenterShNodePoolV1Manifest#termination_grace_period}
  */
  readonly terminationGracePeriod?: string;
}

export function dataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecToTerraform(struct?: DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expire_after: cdktf.stringToTerraform(struct!.expireAfter),
    node_class_ref: dataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecNodeClassRefToTerraform(struct!.nodeClassRef),
    requirements: cdktf.listMapper(dataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecRequirementsToTerraform, false)(struct!.requirements),
    startup_taints: cdktf.listMapper(dataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecStartupTaintsToTerraform, false)(struct!.startupTaints),
    taints: cdktf.listMapper(dataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecTaintsToTerraform, false)(struct!.taints),
    termination_grace_period: cdktf.stringToTerraform(struct!.terminationGracePeriod),
  }
}


export function dataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecToHclTerraform(struct?: DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expire_after: {
      value: cdktf.stringToHclTerraform(struct!.expireAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_class_ref: {
      value: dataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecNodeClassRefToHclTerraform(struct!.nodeClassRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecNodeClassRef",
    },
    requirements: {
      value: cdktf.listMapperHcl(dataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecRequirementsToHclTerraform, false)(struct!.requirements),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecRequirementsList",
    },
    startup_taints: {
      value: cdktf.listMapperHcl(dataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecStartupTaintsToHclTerraform, false)(struct!.startupTaints),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecStartupTaintsList",
    },
    taints: {
      value: cdktf.listMapperHcl(dataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecTaintsToHclTerraform, false)(struct!.taints),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecTaintsList",
    },
    termination_grace_period: {
      value: cdktf.stringToHclTerraform(struct!.terminationGracePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expireAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.expireAfter = this._expireAfter;
    }
    if (this._nodeClassRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeClassRef = this._nodeClassRef?.internalValue;
    }
    if (this._requirements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requirements = this._requirements?.internalValue;
    }
    if (this._startupTaints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startupTaints = this._startupTaints?.internalValue;
    }
    if (this._taints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taints = this._taints?.internalValue;
    }
    if (this._terminationGracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminationGracePeriod = this._terminationGracePeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expireAfter = undefined;
      this._nodeClassRef.internalValue = undefined;
      this._requirements.internalValue = undefined;
      this._startupTaints.internalValue = undefined;
      this._taints.internalValue = undefined;
      this._terminationGracePeriod = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expireAfter = value.expireAfter;
      this._nodeClassRef.internalValue = value.nodeClassRef;
      this._requirements.internalValue = value.requirements;
      this._startupTaints.internalValue = value.startupTaints;
      this._taints.internalValue = value.taints;
      this._terminationGracePeriod = value.terminationGracePeriod;
    }
  }

  // expire_after - computed: false, optional: true, required: false
  private _expireAfter?: string; 
  public get expireAfter() {
    return this.getStringAttribute('expire_after');
  }
  public set expireAfter(value: string) {
    this._expireAfter = value;
  }
  public resetExpireAfter() {
    this._expireAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireAfterInput() {
    return this._expireAfter;
  }

  // node_class_ref - computed: false, optional: false, required: true
  private _nodeClassRef = new DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecNodeClassRefOutputReference(this, "node_class_ref");
  public get nodeClassRef() {
    return this._nodeClassRef;
  }
  public putNodeClassRef(value: DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecNodeClassRef) {
    this._nodeClassRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeClassRefInput() {
    return this._nodeClassRef.internalValue;
  }

  // requirements - computed: false, optional: false, required: true
  private _requirements = new DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecRequirementsList(this, "requirements", false);
  public get requirements() {
    return this._requirements;
  }
  public putRequirements(value: DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecRequirements[] | cdktf.IResolvable) {
    this._requirements.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requirementsInput() {
    return this._requirements.internalValue;
  }

  // startup_taints - computed: false, optional: true, required: false
  private _startupTaints = new DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecStartupTaintsList(this, "startup_taints", false);
  public get startupTaints() {
    return this._startupTaints;
  }
  public putStartupTaints(value: DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecStartupTaints[] | cdktf.IResolvable) {
    this._startupTaints.internalValue = value;
  }
  public resetStartupTaints() {
    this._startupTaints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupTaintsInput() {
    return this._startupTaints.internalValue;
  }

  // taints - computed: false, optional: true, required: false
  private _taints = new DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecTaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }
  public putTaints(value: DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecTaints[] | cdktf.IResolvable) {
    this._taints.internalValue = value;
  }
  public resetTaints() {
    this._taints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintsInput() {
    return this._taints.internalValue;
  }

  // termination_grace_period - computed: false, optional: true, required: false
  private _terminationGracePeriod?: string; 
  public get terminationGracePeriod() {
    return this.getStringAttribute('termination_grace_period');
  }
  public set terminationGracePeriod(value: string) {
    this._terminationGracePeriod = value;
  }
  public resetTerminationGracePeriod() {
    this._terminationGracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationGracePeriodInput() {
    return this._terminationGracePeriod;
  }
}
export interface DataK8SKarpenterShNodePoolV1ManifestSpecTemplate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/karpenter_sh_node_pool_v1_manifest#metadata DataK8SKarpenterShNodePoolV1Manifest#metadata}
  */
  readonly metadata?: DataK8SKarpenterShNodePoolV1ManifestSpecTemplateMetadata;
  /**
  * NodeClaimTemplateSpec describes the desired state of the NodeClaim in the Nodepool NodeClaimTemplateSpec is used in the NodePool's NodeClaimTemplate, with the resource requests omitted since users are not able to set resource requests in the NodePool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/karpenter_sh_node_pool_v1_manifest#spec DataK8SKarpenterShNodePoolV1Manifest#spec}
  */
  readonly spec: DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpec;
}

export function dataK8SKarpenterShNodePoolV1ManifestSpecTemplateToTerraform(struct?: DataK8SKarpenterShNodePoolV1ManifestSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: dataK8SKarpenterShNodePoolV1ManifestSpecTemplateMetadataToTerraform(struct!.metadata),
    spec: dataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecToTerraform(struct!.spec),
  }
}


export function dataK8SKarpenterShNodePoolV1ManifestSpecTemplateToHclTerraform(struct?: DataK8SKarpenterShNodePoolV1ManifestSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: dataK8SKarpenterShNodePoolV1ManifestSpecTemplateMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKarpenterShNodePoolV1ManifestSpecTemplateMetadata",
    },
    spec: {
      value: dataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKarpenterShNodePoolV1ManifestSpecTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKarpenterShNodePoolV1ManifestSpecTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKarpenterShNodePoolV1ManifestSpecTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata.internalValue = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata.internalValue = value.metadata;
      this._spec.internalValue = value.spec;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SKarpenterShNodePoolV1ManifestSpecTemplateMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKarpenterShNodePoolV1ManifestSpecTemplateMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKarpenterShNodePoolV1ManifestSpecTemplateSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface DataK8SKarpenterShNodePoolV1ManifestSpec {
  /**
  * Disruption contains the parameters that relate to Karpenter's disruption logic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/karpenter_sh_node_pool_v1_manifest#disruption DataK8SKarpenterShNodePoolV1Manifest#disruption}
  */
  readonly disruption?: DataK8SKarpenterShNodePoolV1ManifestSpecDisruption;
  /**
  * Limits define a set of bounds for provisioning capacity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/karpenter_sh_node_pool_v1_manifest#limits DataK8SKarpenterShNodePoolV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Template contains the template of possibilities for the provisioning logic to launch a NodeClaim with. NodeClaims launched from this NodePool will often be further constrained than the template specifies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/karpenter_sh_node_pool_v1_manifest#template DataK8SKarpenterShNodePoolV1Manifest#template}
  */
  readonly template: DataK8SKarpenterShNodePoolV1ManifestSpecTemplate;
  /**
  * Weight is the priority given to the nodepool during scheduling. A higher numerical weight indicates that this nodepool will be ordered ahead of other nodepools with lower weights. A nodepool with no weight will be treated as if it is a nodepool with a weight of 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/karpenter_sh_node_pool_v1_manifest#weight DataK8SKarpenterShNodePoolV1Manifest#weight}
  */
  readonly weight?: number;
}

export function dataK8SKarpenterShNodePoolV1ManifestSpecToTerraform(struct?: DataK8SKarpenterShNodePoolV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disruption: dataK8SKarpenterShNodePoolV1ManifestSpecDisruptionToTerraform(struct!.disruption),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    template: dataK8SKarpenterShNodePoolV1ManifestSpecTemplateToTerraform(struct!.template),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SKarpenterShNodePoolV1ManifestSpecToHclTerraform(struct?: DataK8SKarpenterShNodePoolV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disruption: {
      value: dataK8SKarpenterShNodePoolV1ManifestSpecDisruptionToHclTerraform(struct!.disruption),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKarpenterShNodePoolV1ManifestSpecDisruption",
    },
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    template: {
      value: dataK8SKarpenterShNodePoolV1ManifestSpecTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKarpenterShNodePoolV1ManifestSpecTemplate",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKarpenterShNodePoolV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKarpenterShNodePoolV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disruption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disruption = this._disruption?.internalValue;
    }
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKarpenterShNodePoolV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disruption.internalValue = undefined;
      this._limits = undefined;
      this._template.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disruption.internalValue = value.disruption;
      this._limits = value.limits;
      this._template.internalValue = value.template;
      this._weight = value.weight;
    }
  }

  // disruption - computed: false, optional: true, required: false
  private _disruption = new DataK8SKarpenterShNodePoolV1ManifestSpecDisruptionOutputReference(this, "disruption");
  public get disruption() {
    return this._disruption;
  }
  public putDisruption(value: DataK8SKarpenterShNodePoolV1ManifestSpecDisruption) {
    this._disruption.internalValue = value;
  }
  public resetDisruption() {
    this._disruption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disruptionInput() {
    return this._disruption.internalValue;
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // template - computed: false, optional: false, required: true
  private _template = new DataK8SKarpenterShNodePoolV1ManifestSpecTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataK8SKarpenterShNodePoolV1ManifestSpecTemplate) {
    this._template.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/karpenter_sh_node_pool_v1_manifest k8s_karpenter_sh_node_pool_v1_manifest}
*/
export class DataK8SKarpenterShNodePoolV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_karpenter_sh_node_pool_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SKarpenterShNodePoolV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SKarpenterShNodePoolV1Manifest to import
  * @param importFromId The id of the existing DataK8SKarpenterShNodePoolV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/karpenter_sh_node_pool_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SKarpenterShNodePoolV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_karpenter_sh_node_pool_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/karpenter_sh_node_pool_v1_manifest k8s_karpenter_sh_node_pool_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SKarpenterShNodePoolV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SKarpenterShNodePoolV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_karpenter_sh_node_pool_v1_manifest',
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
  private _metadata = new DataK8SKarpenterShNodePoolV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKarpenterShNodePoolV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SKarpenterShNodePoolV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKarpenterShNodePoolV1ManifestSpec) {
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
      metadata: dataK8SKarpenterShNodePoolV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SKarpenterShNodePoolV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SKarpenterShNodePoolV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKarpenterShNodePoolV1ManifestMetadata",
      },
      spec: {
        value: dataK8SKarpenterShNodePoolV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKarpenterShNodePoolV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
