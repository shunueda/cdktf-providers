// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_pool_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SKarpenterShNodePoolV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_pool_v1beta1_manifest#metadata DataK8SKarpenterShNodePoolV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SKarpenterShNodePoolV1Beta1ManifestMetadata;
  /**
  * NodePoolSpec is the top level nodepool specification. Nodepools launch nodes in response to pods that are unschedulable. A single nodepool is capable of managing a diverse set of nodes. Node properties are determined from a combination of nodepool and pod scheduling constraints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_pool_v1beta1_manifest#spec DataK8SKarpenterShNodePoolV1Beta1Manifest#spec}
  */
  readonly spec: DataK8SKarpenterShNodePoolV1Beta1ManifestSpec;
}
export interface DataK8SKarpenterShNodePoolV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_pool_v1beta1_manifest#annotations DataK8SKarpenterShNodePoolV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_pool_v1beta1_manifest#labels DataK8SKarpenterShNodePoolV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_pool_v1beta1_manifest#name DataK8SKarpenterShNodePoolV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKarpenterShNodePoolV1Beta1ManifestMetadataToTerraform(struct?: DataK8SKarpenterShNodePoolV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SKarpenterShNodePoolV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SKarpenterShNodePoolV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SKarpenterShNodePoolV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKarpenterShNodePoolV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKarpenterShNodePoolV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKarpenterShNodePoolV1Beta1ManifestSpecDisruptionBudgets {
  /**
  * Duration determines how long a Budget is active since each Schedule hit. Only minutes and hours are accepted, as cron does not work in seconds. If omitted, the budget is always active. This is required if Schedule is set. This regex has an optional 0s at the end since the duration.String() always adds a 0s at the end.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_pool_v1beta1_manifest#duration DataK8SKarpenterShNodePoolV1Beta1Manifest#duration}
  */
  readonly duration?: string;
  /**
  * Nodes dictates the maximum number of NodeClaims owned by this NodePool that can be terminating at once. This is calculated by counting nodes that have a deletion timestamp set, or are actively being deleted by Karpenter. This field is required when specifying a budget. This cannot be of type intstr.IntOrString since kubebuilder doesn't support pattern checking for int nodes for IntOrString nodes. Ref: https://github.com/kubernetes-sigs/controller-tools/blob/55efe4be40394a288216dab63156b0a64fb82929/pkg/crd/markers/validation.go#L379-L388
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_pool_v1beta1_manifest#nodes DataK8SKarpenterShNodePoolV1Beta1Manifest#nodes}
  */
  readonly nodes: string;
  /**
  * Schedule specifies when a budget begins being active, following the upstream cronjob syntax. If omitted, the budget is always active. Timezones are not supported. This field is required if Duration is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_pool_v1beta1_manifest#schedule DataK8SKarpenterShNodePoolV1Beta1Manifest#schedule}
  */
  readonly schedule?: string;
}

export function dataK8SKarpenterShNodePoolV1Beta1ManifestSpecDisruptionBudgetsToTerraform(struct?: DataK8SKarpenterShNodePoolV1Beta1ManifestSpecDisruptionBudgets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    nodes: cdktf.stringToTerraform(struct!.nodes),
    schedule: cdktf.stringToTerraform(struct!.schedule),
  }
}


export function dataK8SKarpenterShNodePoolV1Beta1ManifestSpecDisruptionBudgetsToHclTerraform(struct?: DataK8SKarpenterShNodePoolV1Beta1ManifestSpecDisruptionBudgets | cdktf.IResolvable): any {
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

export class DataK8SKarpenterShNodePoolV1Beta1ManifestSpecDisruptionBudgetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKarpenterShNodePoolV1Beta1ManifestSpecDisruptionBudgets | cdktf.IResolvable | undefined {
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
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKarpenterShNodePoolV1Beta1ManifestSpecDisruptionBudgets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._nodes = undefined;
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

export class DataK8SKarpenterShNodePoolV1Beta1ManifestSpecDisruptionBudgetsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKarpenterShNodePoolV1Beta1ManifestSpecDisruptionBudgets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKarpenterShNodePoolV1Beta1ManifestSpecDisruptionBudgetsOutputReference {
    return new DataK8SKarpenterShNodePoolV1Beta1ManifestSpecDisruptionBudgetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKarpenterShNodePoolV1Beta1ManifestSpecDisruption {
  /**
  * Budgets is a list of Budgets. If there are multiple active budgets, Karpenter uses the most restrictive value. If left undefined, this will default to one budget with a value to 10%.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_pool_v1beta1_manifest#budgets DataK8SKarpenterShNodePoolV1Beta1Manifest#budgets}
  */
  readonly budgets?: DataK8SKarpenterShNodePoolV1Beta1ManifestSpecDisruptionBudgets[] | cdktf.IResolvable;
  /**
  * ConsolidateAfter is the duration the controller will wait before attempting to terminate nodes that are underutilized. Refer to ConsolidationPolicy for how underutilization is considered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_pool_v1beta1_manifest#consolidate_after DataK8SKarpenterShNodePoolV1Beta1Manifest#consolidate_after}
  */
  readonly consolidateAfter?: string;
  /**
  * ConsolidationPolicy describes which nodes Karpenter can disrupt through its consolidation algorithm. This policy defaults to 'WhenUnderutilized' if not specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_pool_v1beta1_manifest#consolidation_policy DataK8SKarpenterShNodePoolV1Beta1Manifest#consolidation_policy}
  */
  readonly consolidationPolicy?: string;
  /**
  * ExpireAfter is the duration the controller will wait before terminating a node, measured from when the node is created. This is useful to implement features like eventually consistent node upgrade, memory leak protection, and disruption testing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_pool_v1beta1_manifest#expire_after DataK8SKarpenterShNodePoolV1Beta1Manifest#expire_after}
  */
  readonly expireAfter?: string;
}

export function dataK8SKarpenterShNodePoolV1Beta1ManifestSpecDisruptionToTerraform(struct?: DataK8SKarpenterShNodePoolV1Beta1ManifestSpecDisruption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    budgets: cdktf.listMapper(dataK8SKarpenterShNodePoolV1Beta1ManifestSpecDisruptionBudgetsToTerraform, false)(struct!.budgets),
    consolidate_after: cdktf.stringToTerraform(struct!.consolidateAfter),
    consolidation_policy: cdktf.stringToTerraform(struct!.consolidationPolicy),
    expire_after: cdktf.stringToTerraform(struct!.expireAfter),
  }
}


export function dataK8SKarpenterShNodePoolV1Beta1ManifestSpecDisruptionToHclTerraform(struct?: DataK8SKarpenterShNodePoolV1Beta1ManifestSpecDisruption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    budgets: {
      value: cdktf.listMapperHcl(dataK8SKarpenterShNodePoolV1Beta1ManifestSpecDisruptionBudgetsToHclTerraform, false)(struct!.budgets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKarpenterShNodePoolV1Beta1ManifestSpecDisruptionBudgetsList",
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
    expire_after: {
      value: cdktf.stringToHclTerraform(struct!.expireAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKarpenterShNodePoolV1Beta1ManifestSpecDisruptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKarpenterShNodePoolV1Beta1ManifestSpecDisruption | cdktf.IResolvable | undefined {
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
    if (this._expireAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.expireAfter = this._expireAfter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKarpenterShNodePoolV1Beta1ManifestSpecDisruption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._budgets.internalValue = undefined;
      this._consolidateAfter = undefined;
      this._consolidationPolicy = undefined;
      this._expireAfter = undefined;
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
      this._expireAfter = value.expireAfter;
    }
  }

  // budgets - computed: false, optional: true, required: false
  private _budgets = new DataK8SKarpenterShNodePoolV1Beta1ManifestSpecDisruptionBudgetsList(this, "budgets", false);
  public get budgets() {
    return this._budgets;
  }
  public putBudgets(value: DataK8SKarpenterShNodePoolV1Beta1ManifestSpecDisruptionBudgets[] | cdktf.IResolvable) {
    this._budgets.internalValue = value;
  }
  public resetBudgets() {
    this._budgets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get budgetsInput() {
    return this._budgets.internalValue;
  }

  // consolidate_after - computed: false, optional: true, required: false
  private _consolidateAfter?: string; 
  public get consolidateAfter() {
    return this.getStringAttribute('consolidate_after');
  }
  public set consolidateAfter(value: string) {
    this._consolidateAfter = value;
  }
  public resetConsolidateAfter() {
    this._consolidateAfter = undefined;
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
}
export interface DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateMetadata {
  /**
  * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_pool_v1beta1_manifest#annotations DataK8SKarpenterShNodePoolV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_pool_v1beta1_manifest#labels DataK8SKarpenterShNodePoolV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateMetadataToTerraform(struct?: DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateMetadataToHclTerraform(struct?: DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateMetadata | cdktf.IResolvable): any {
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

export class DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecKubelet {
  /**
  * clusterDNS is a list of IP addresses for the cluster DNS server. Note that not all providers may use all addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_pool_v1beta1_manifest#cluster_dns DataK8SKarpenterShNodePoolV1Beta1Manifest#cluster_dns}
  */
  readonly clusterDns?: string[];
  /**
  * CPUCFSQuota enables CPU CFS quota enforcement for containers that specify CPU limits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_pool_v1beta1_manifest#cpu_cfs_quota DataK8SKarpenterShNodePoolV1Beta1Manifest#cpu_cfs_quota}
  */
  readonly cpuCfsQuota?: boolean | cdktf.IResolvable;
  /**
  * EvictionHard is the map of signal names to quantities that define hard eviction thresholds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_pool_v1beta1_manifest#eviction_hard DataK8SKarpenterShNodePoolV1Beta1Manifest#eviction_hard}
  */
  readonly evictionHard?: { [key: string]: string };
  /**
  * EvictionMaxPodGracePeriod is the maximum allowed grace period (in seconds) to use when terminating pods in response to soft eviction thresholds being met.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_pool_v1beta1_manifest#eviction_max_pod_grace_period DataK8SKarpenterShNodePoolV1Beta1Manifest#eviction_max_pod_grace_period}
  */
  readonly evictionMaxPodGracePeriod?: number;
  /**
  * EvictionSoft is the map of signal names to quantities that define soft eviction thresholds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_pool_v1beta1_manifest#eviction_soft DataK8SKarpenterShNodePoolV1Beta1Manifest#eviction_soft}
  */
  readonly evictionSoft?: { [key: string]: string };
  /**
  * EvictionSoftGracePeriod is the map of signal names to quantities that define grace periods for each eviction signal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_pool_v1beta1_manifest#eviction_soft_grace_period DataK8SKarpenterShNodePoolV1Beta1Manifest#eviction_soft_grace_period}
  */
  readonly evictionSoftGracePeriod?: { [key: string]: string };
  /**
  * ImageGCHighThresholdPercent is the percent of disk usage after which image garbage collection is always run. The percent is calculated by dividing this field value by 100, so this field must be between 0 and 100, inclusive. When specified, the value must be greater than ImageGCLowThresholdPercent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_pool_v1beta1_manifest#image_gc_high_threshold_percent DataK8SKarpenterShNodePoolV1Beta1Manifest#image_gc_high_threshold_percent}
  */
  readonly imageGcHighThresholdPercent?: number;
  /**
  * ImageGCLowThresholdPercent is the percent of disk usage before which image garbage collection is never run. Lowest disk usage to garbage collect to. The percent is calculated by dividing this field value by 100, so the field value must be between 0 and 100, inclusive. When specified, the value must be less than imageGCHighThresholdPercent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_pool_v1beta1_manifest#image_gc_low_threshold_percent DataK8SKarpenterShNodePoolV1Beta1Manifest#image_gc_low_threshold_percent}
  */
  readonly imageGcLowThresholdPercent?: number;
  /**
  * KubeReserved contains resources reserved for Kubernetes system components.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_pool_v1beta1_manifest#kube_reserved DataK8SKarpenterShNodePoolV1Beta1Manifest#kube_reserved}
  */
  readonly kubeReserved?: { [key: string]: string };
  /**
  * MaxPods is an override for the maximum number of pods that can run on a worker node instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_pool_v1beta1_manifest#max_pods DataK8SKarpenterShNodePoolV1Beta1Manifest#max_pods}
  */
  readonly maxPods?: number;
  /**
  * PodsPerCore is an override for the number of pods that can run on a worker node instance based on the number of cpu cores. This value cannot exceed MaxPods, so, if MaxPods is a lower value, that value will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_pool_v1beta1_manifest#pods_per_core DataK8SKarpenterShNodePoolV1Beta1Manifest#pods_per_core}
  */
  readonly podsPerCore?: number;
  /**
  * SystemReserved contains resources reserved for OS system daemons and kernel memory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_pool_v1beta1_manifest#system_reserved DataK8SKarpenterShNodePoolV1Beta1Manifest#system_reserved}
  */
  readonly systemReserved?: { [key: string]: string };
}

export function dataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecKubeletToTerraform(struct?: DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecKubelet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_dns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clusterDns),
    cpu_cfs_quota: cdktf.booleanToTerraform(struct!.cpuCfsQuota),
    eviction_hard: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.evictionHard),
    eviction_max_pod_grace_period: cdktf.numberToTerraform(struct!.evictionMaxPodGracePeriod),
    eviction_soft: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.evictionSoft),
    eviction_soft_grace_period: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.evictionSoftGracePeriod),
    image_gc_high_threshold_percent: cdktf.numberToTerraform(struct!.imageGcHighThresholdPercent),
    image_gc_low_threshold_percent: cdktf.numberToTerraform(struct!.imageGcLowThresholdPercent),
    kube_reserved: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.kubeReserved),
    max_pods: cdktf.numberToTerraform(struct!.maxPods),
    pods_per_core: cdktf.numberToTerraform(struct!.podsPerCore),
    system_reserved: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.systemReserved),
  }
}


export function dataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecKubeletToHclTerraform(struct?: DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecKubelet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_dns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clusterDns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cpu_cfs_quota: {
      value: cdktf.booleanToHclTerraform(struct!.cpuCfsQuota),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    eviction_hard: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.evictionHard),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    eviction_max_pod_grace_period: {
      value: cdktf.numberToHclTerraform(struct!.evictionMaxPodGracePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    eviction_soft: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.evictionSoft),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    eviction_soft_grace_period: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.evictionSoftGracePeriod),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image_gc_high_threshold_percent: {
      value: cdktf.numberToHclTerraform(struct!.imageGcHighThresholdPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    image_gc_low_threshold_percent: {
      value: cdktf.numberToHclTerraform(struct!.imageGcLowThresholdPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kube_reserved: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.kubeReserved),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    max_pods: {
      value: cdktf.numberToHclTerraform(struct!.maxPods),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pods_per_core: {
      value: cdktf.numberToHclTerraform(struct!.podsPerCore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    system_reserved: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.systemReserved),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecKubeletOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecKubelet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterDns = this._clusterDns;
    }
    if (this._cpuCfsQuota !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCfsQuota = this._cpuCfsQuota;
    }
    if (this._evictionHard !== undefined) {
      hasAnyValues = true;
      internalValueResult.evictionHard = this._evictionHard;
    }
    if (this._evictionMaxPodGracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.evictionMaxPodGracePeriod = this._evictionMaxPodGracePeriod;
    }
    if (this._evictionSoft !== undefined) {
      hasAnyValues = true;
      internalValueResult.evictionSoft = this._evictionSoft;
    }
    if (this._evictionSoftGracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.evictionSoftGracePeriod = this._evictionSoftGracePeriod;
    }
    if (this._imageGcHighThresholdPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageGcHighThresholdPercent = this._imageGcHighThresholdPercent;
    }
    if (this._imageGcLowThresholdPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageGcLowThresholdPercent = this._imageGcLowThresholdPercent;
    }
    if (this._kubeReserved !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeReserved = this._kubeReserved;
    }
    if (this._maxPods !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPods = this._maxPods;
    }
    if (this._podsPerCore !== undefined) {
      hasAnyValues = true;
      internalValueResult.podsPerCore = this._podsPerCore;
    }
    if (this._systemReserved !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemReserved = this._systemReserved;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecKubelet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterDns = undefined;
      this._cpuCfsQuota = undefined;
      this._evictionHard = undefined;
      this._evictionMaxPodGracePeriod = undefined;
      this._evictionSoft = undefined;
      this._evictionSoftGracePeriod = undefined;
      this._imageGcHighThresholdPercent = undefined;
      this._imageGcLowThresholdPercent = undefined;
      this._kubeReserved = undefined;
      this._maxPods = undefined;
      this._podsPerCore = undefined;
      this._systemReserved = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterDns = value.clusterDns;
      this._cpuCfsQuota = value.cpuCfsQuota;
      this._evictionHard = value.evictionHard;
      this._evictionMaxPodGracePeriod = value.evictionMaxPodGracePeriod;
      this._evictionSoft = value.evictionSoft;
      this._evictionSoftGracePeriod = value.evictionSoftGracePeriod;
      this._imageGcHighThresholdPercent = value.imageGcHighThresholdPercent;
      this._imageGcLowThresholdPercent = value.imageGcLowThresholdPercent;
      this._kubeReserved = value.kubeReserved;
      this._maxPods = value.maxPods;
      this._podsPerCore = value.podsPerCore;
      this._systemReserved = value.systemReserved;
    }
  }

  // cluster_dns - computed: false, optional: true, required: false
  private _clusterDns?: string[]; 
  public get clusterDns() {
    return this.getListAttribute('cluster_dns');
  }
  public set clusterDns(value: string[]) {
    this._clusterDns = value;
  }
  public resetClusterDns() {
    this._clusterDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDnsInput() {
    return this._clusterDns;
  }

  // cpu_cfs_quota - computed: false, optional: true, required: false
  private _cpuCfsQuota?: boolean | cdktf.IResolvable; 
  public get cpuCfsQuota() {
    return this.getBooleanAttribute('cpu_cfs_quota');
  }
  public set cpuCfsQuota(value: boolean | cdktf.IResolvable) {
    this._cpuCfsQuota = value;
  }
  public resetCpuCfsQuota() {
    this._cpuCfsQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCfsQuotaInput() {
    return this._cpuCfsQuota;
  }

  // eviction_hard - computed: false, optional: true, required: false
  private _evictionHard?: { [key: string]: string }; 
  public get evictionHard() {
    return this.getStringMapAttribute('eviction_hard');
  }
  public set evictionHard(value: { [key: string]: string }) {
    this._evictionHard = value;
  }
  public resetEvictionHard() {
    this._evictionHard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionHardInput() {
    return this._evictionHard;
  }

  // eviction_max_pod_grace_period - computed: false, optional: true, required: false
  private _evictionMaxPodGracePeriod?: number; 
  public get evictionMaxPodGracePeriod() {
    return this.getNumberAttribute('eviction_max_pod_grace_period');
  }
  public set evictionMaxPodGracePeriod(value: number) {
    this._evictionMaxPodGracePeriod = value;
  }
  public resetEvictionMaxPodGracePeriod() {
    this._evictionMaxPodGracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionMaxPodGracePeriodInput() {
    return this._evictionMaxPodGracePeriod;
  }

  // eviction_soft - computed: false, optional: true, required: false
  private _evictionSoft?: { [key: string]: string }; 
  public get evictionSoft() {
    return this.getStringMapAttribute('eviction_soft');
  }
  public set evictionSoft(value: { [key: string]: string }) {
    this._evictionSoft = value;
  }
  public resetEvictionSoft() {
    this._evictionSoft = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionSoftInput() {
    return this._evictionSoft;
  }

  // eviction_soft_grace_period - computed: false, optional: true, required: false
  private _evictionSoftGracePeriod?: { [key: string]: string }; 
  public get evictionSoftGracePeriod() {
    return this.getStringMapAttribute('eviction_soft_grace_period');
  }
  public set evictionSoftGracePeriod(value: { [key: string]: string }) {
    this._evictionSoftGracePeriod = value;
  }
  public resetEvictionSoftGracePeriod() {
    this._evictionSoftGracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionSoftGracePeriodInput() {
    return this._evictionSoftGracePeriod;
  }

  // image_gc_high_threshold_percent - computed: false, optional: true, required: false
  private _imageGcHighThresholdPercent?: number; 
  public get imageGcHighThresholdPercent() {
    return this.getNumberAttribute('image_gc_high_threshold_percent');
  }
  public set imageGcHighThresholdPercent(value: number) {
    this._imageGcHighThresholdPercent = value;
  }
  public resetImageGcHighThresholdPercent() {
    this._imageGcHighThresholdPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageGcHighThresholdPercentInput() {
    return this._imageGcHighThresholdPercent;
  }

  // image_gc_low_threshold_percent - computed: false, optional: true, required: false
  private _imageGcLowThresholdPercent?: number; 
  public get imageGcLowThresholdPercent() {
    return this.getNumberAttribute('image_gc_low_threshold_percent');
  }
  public set imageGcLowThresholdPercent(value: number) {
    this._imageGcLowThresholdPercent = value;
  }
  public resetImageGcLowThresholdPercent() {
    this._imageGcLowThresholdPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageGcLowThresholdPercentInput() {
    return this._imageGcLowThresholdPercent;
  }

  // kube_reserved - computed: false, optional: true, required: false
  private _kubeReserved?: { [key: string]: string }; 
  public get kubeReserved() {
    return this.getStringMapAttribute('kube_reserved');
  }
  public set kubeReserved(value: { [key: string]: string }) {
    this._kubeReserved = value;
  }
  public resetKubeReserved() {
    this._kubeReserved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeReservedInput() {
    return this._kubeReserved;
  }

  // max_pods - computed: false, optional: true, required: false
  private _maxPods?: number; 
  public get maxPods() {
    return this.getNumberAttribute('max_pods');
  }
  public set maxPods(value: number) {
    this._maxPods = value;
  }
  public resetMaxPods() {
    this._maxPods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPodsInput() {
    return this._maxPods;
  }

  // pods_per_core - computed: false, optional: true, required: false
  private _podsPerCore?: number; 
  public get podsPerCore() {
    return this.getNumberAttribute('pods_per_core');
  }
  public set podsPerCore(value: number) {
    this._podsPerCore = value;
  }
  public resetPodsPerCore() {
    this._podsPerCore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podsPerCoreInput() {
    return this._podsPerCore;
  }

  // system_reserved - computed: false, optional: true, required: false
  private _systemReserved?: { [key: string]: string }; 
  public get systemReserved() {
    return this.getStringMapAttribute('system_reserved');
  }
  public set systemReserved(value: { [key: string]: string }) {
    this._systemReserved = value;
  }
  public resetSystemReserved() {
    this._systemReserved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemReservedInput() {
    return this._systemReserved;
  }
}
export interface DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecNodeClassRef {
  /**
  * API version of the referent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_pool_v1beta1_manifest#api_version DataK8SKarpenterShNodePoolV1Beta1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Kind of the referent; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_pool_v1beta1_manifest#kind DataK8SKarpenterShNodePoolV1Beta1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the referent; More info: http://kubernetes.io/docs/user-guide/identifiers#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_pool_v1beta1_manifest#name DataK8SKarpenterShNodePoolV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecNodeClassRefToTerraform(struct?: DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecNodeClassRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecNodeClassRefToHclTerraform(struct?: DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecNodeClassRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
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

export class DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecNodeClassRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecNodeClassRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
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

  public set internalValue(value: DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecNodeClassRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
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
      this._apiVersion = value.apiVersion;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
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
export interface DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecRequirements {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_pool_v1beta1_manifest#key DataK8SKarpenterShNodePoolV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * This field is ALPHA and can be dropped or replaced at any time MinValues is the minimum number of unique values required to define the flexibility of the specific requirement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_pool_v1beta1_manifest#min_values DataK8SKarpenterShNodePoolV1Beta1Manifest#min_values}
  */
  readonly minValues?: number;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_pool_v1beta1_manifest#operator DataK8SKarpenterShNodePoolV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_pool_v1beta1_manifest#values DataK8SKarpenterShNodePoolV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecRequirementsToTerraform(struct?: DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecRequirements | cdktf.IResolvable): any {
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


export function dataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecRequirementsToHclTerraform(struct?: DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecRequirements | cdktf.IResolvable): any {
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

export class DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecRequirementsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecRequirements | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecRequirements | cdktf.IResolvable | undefined) {
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

export class DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecRequirementsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecRequirements[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecRequirementsOutputReference {
    return new DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecRequirementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecResources {
  /**
  * Requests describes the minimum required resources for the NodeClaim to launch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_pool_v1beta1_manifest#requests DataK8SKarpenterShNodePoolV1Beta1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecResourcesToTerraform(struct?: DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecResourcesToHclTerraform(struct?: DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._requests = value.requests;
    }
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecStartupTaints {
  /**
  * Required. The effect of the taint on pods that do not tolerate the taint. Valid effects are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_pool_v1beta1_manifest#effect DataK8SKarpenterShNodePoolV1Beta1Manifest#effect}
  */
  readonly effect: string;
  /**
  * Required. The taint key to be applied to a node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_pool_v1beta1_manifest#key DataK8SKarpenterShNodePoolV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * TimeAdded represents the time at which the taint was added. It is only written for NoExecute taints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_pool_v1beta1_manifest#time_added DataK8SKarpenterShNodePoolV1Beta1Manifest#time_added}
  */
  readonly timeAdded?: string;
  /**
  * The taint value corresponding to the taint key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_pool_v1beta1_manifest#value DataK8SKarpenterShNodePoolV1Beta1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecStartupTaintsToTerraform(struct?: DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecStartupTaints | cdktf.IResolvable): any {
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


export function dataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecStartupTaintsToHclTerraform(struct?: DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecStartupTaints | cdktf.IResolvable): any {
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

export class DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecStartupTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecStartupTaints | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecStartupTaints | cdktf.IResolvable | undefined) {
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

export class DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecStartupTaintsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecStartupTaints[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecStartupTaintsOutputReference {
    return new DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecStartupTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecTaints {
  /**
  * Required. The effect of the taint on pods that do not tolerate the taint. Valid effects are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_pool_v1beta1_manifest#effect DataK8SKarpenterShNodePoolV1Beta1Manifest#effect}
  */
  readonly effect: string;
  /**
  * Required. The taint key to be applied to a node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_pool_v1beta1_manifest#key DataK8SKarpenterShNodePoolV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * TimeAdded represents the time at which the taint was added. It is only written for NoExecute taints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_pool_v1beta1_manifest#time_added DataK8SKarpenterShNodePoolV1Beta1Manifest#time_added}
  */
  readonly timeAdded?: string;
  /**
  * The taint value corresponding to the taint key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_pool_v1beta1_manifest#value DataK8SKarpenterShNodePoolV1Beta1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecTaintsToTerraform(struct?: DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecTaints | cdktf.IResolvable): any {
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


export function dataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecTaintsToHclTerraform(struct?: DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecTaints | cdktf.IResolvable): any {
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

export class DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecTaints | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecTaints | cdktf.IResolvable | undefined) {
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

export class DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecTaintsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecTaints[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecTaintsOutputReference {
    return new DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpec {
  /**
  * Kubelet defines args to be used when configuring kubelet on provisioned nodes. They are a subset of the upstream types, recognizing not all options may be supported. Wherever possible, the types and names should reflect the upstream kubelet types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_pool_v1beta1_manifest#kubelet DataK8SKarpenterShNodePoolV1Beta1Manifest#kubelet}
  */
  readonly kubelet?: DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecKubelet;
  /**
  * NodeClassRef is a reference to an object that defines provider specific configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_pool_v1beta1_manifest#node_class_ref DataK8SKarpenterShNodePoolV1Beta1Manifest#node_class_ref}
  */
  readonly nodeClassRef: DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecNodeClassRef;
  /**
  * Requirements are layered with GetLabels and applied to every node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_pool_v1beta1_manifest#requirements DataK8SKarpenterShNodePoolV1Beta1Manifest#requirements}
  */
  readonly requirements: DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecRequirements[] | cdktf.IResolvable;
  /**
  * Resources models the resource requirements for the NodeClaim to launch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_pool_v1beta1_manifest#resources DataK8SKarpenterShNodePoolV1Beta1Manifest#resources}
  */
  readonly resources?: DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecResources;
  /**
  * StartupTaints are taints that are applied to nodes upon startup which are expected to be removed automatically within a short period of time, typically by a DaemonSet that tolerates the taint. These are commonly used by daemonsets to allow initialization and enforce startup ordering. StartupTaints are ignored for provisioning purposes in that pods are not required to tolerate a StartupTaint in order to have nodes provisioned for them.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_pool_v1beta1_manifest#startup_taints DataK8SKarpenterShNodePoolV1Beta1Manifest#startup_taints}
  */
  readonly startupTaints?: DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecStartupTaints[] | cdktf.IResolvable;
  /**
  * Taints will be applied to the NodeClaim's node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_pool_v1beta1_manifest#taints DataK8SKarpenterShNodePoolV1Beta1Manifest#taints}
  */
  readonly taints?: DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecTaints[] | cdktf.IResolvable;
}

export function dataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecToTerraform(struct?: DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kubelet: dataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecKubeletToTerraform(struct!.kubelet),
    node_class_ref: dataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecNodeClassRefToTerraform(struct!.nodeClassRef),
    requirements: cdktf.listMapper(dataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecRequirementsToTerraform, false)(struct!.requirements),
    resources: dataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecResourcesToTerraform(struct!.resources),
    startup_taints: cdktf.listMapper(dataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecStartupTaintsToTerraform, false)(struct!.startupTaints),
    taints: cdktf.listMapper(dataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecTaintsToTerraform, false)(struct!.taints),
  }
}


export function dataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecToHclTerraform(struct?: DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kubelet: {
      value: dataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecKubeletToHclTerraform(struct!.kubelet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecKubelet",
    },
    node_class_ref: {
      value: dataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecNodeClassRefToHclTerraform(struct!.nodeClassRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecNodeClassRef",
    },
    requirements: {
      value: cdktf.listMapperHcl(dataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecRequirementsToHclTerraform, false)(struct!.requirements),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecRequirementsList",
    },
    resources: {
      value: dataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecResources",
    },
    startup_taints: {
      value: cdktf.listMapperHcl(dataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecStartupTaintsToHclTerraform, false)(struct!.startupTaints),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecStartupTaintsList",
    },
    taints: {
      value: cdktf.listMapperHcl(dataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecTaintsToHclTerraform, false)(struct!.taints),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecTaintsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kubelet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubelet = this._kubelet?.internalValue;
    }
    if (this._nodeClassRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeClassRef = this._nodeClassRef?.internalValue;
    }
    if (this._requirements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requirements = this._requirements?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._startupTaints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startupTaints = this._startupTaints?.internalValue;
    }
    if (this._taints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taints = this._taints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kubelet.internalValue = undefined;
      this._nodeClassRef.internalValue = undefined;
      this._requirements.internalValue = undefined;
      this._resources.internalValue = undefined;
      this._startupTaints.internalValue = undefined;
      this._taints.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kubelet.internalValue = value.kubelet;
      this._nodeClassRef.internalValue = value.nodeClassRef;
      this._requirements.internalValue = value.requirements;
      this._resources.internalValue = value.resources;
      this._startupTaints.internalValue = value.startupTaints;
      this._taints.internalValue = value.taints;
    }
  }

  // kubelet - computed: false, optional: true, required: false
  private _kubelet = new DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecKubeletOutputReference(this, "kubelet");
  public get kubelet() {
    return this._kubelet;
  }
  public putKubelet(value: DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecKubelet) {
    this._kubelet.internalValue = value;
  }
  public resetKubelet() {
    this._kubelet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletInput() {
    return this._kubelet.internalValue;
  }

  // node_class_ref - computed: false, optional: false, required: true
  private _nodeClassRef = new DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecNodeClassRefOutputReference(this, "node_class_ref");
  public get nodeClassRef() {
    return this._nodeClassRef;
  }
  public putNodeClassRef(value: DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecNodeClassRef) {
    this._nodeClassRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeClassRefInput() {
    return this._nodeClassRef.internalValue;
  }

  // requirements - computed: false, optional: false, required: true
  private _requirements = new DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecRequirementsList(this, "requirements", false);
  public get requirements() {
    return this._requirements;
  }
  public putRequirements(value: DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecRequirements[] | cdktf.IResolvable) {
    this._requirements.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requirementsInput() {
    return this._requirements.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // startup_taints - computed: false, optional: true, required: false
  private _startupTaints = new DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecStartupTaintsList(this, "startup_taints", false);
  public get startupTaints() {
    return this._startupTaints;
  }
  public putStartupTaints(value: DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecStartupTaints[] | cdktf.IResolvable) {
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
  private _taints = new DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecTaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }
  public putTaints(value: DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecTaints[] | cdktf.IResolvable) {
    this._taints.internalValue = value;
  }
  public resetTaints() {
    this._taints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintsInput() {
    return this._taints.internalValue;
  }
}
export interface DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_pool_v1beta1_manifest#metadata DataK8SKarpenterShNodePoolV1Beta1Manifest#metadata}
  */
  readonly metadata?: DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateMetadata;
  /**
  * NodeClaimSpec describes the desired state of the NodeClaim
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_pool_v1beta1_manifest#spec DataK8SKarpenterShNodePoolV1Beta1Manifest#spec}
  */
  readonly spec: DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpec;
}

export function dataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateToTerraform(struct?: DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: dataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateMetadataToTerraform(struct!.metadata),
    spec: dataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecToTerraform(struct!.spec),
  }
}


export function dataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateToHclTerraform(struct?: DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: dataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateMetadata",
    },
    spec: {
      value: dataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplate | cdktf.IResolvable | undefined) {
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
  private _metadata = new DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateMetadata) {
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
  private _spec = new DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface DataK8SKarpenterShNodePoolV1Beta1ManifestSpec {
  /**
  * Disruption contains the parameters that relate to Karpenter's disruption logic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_pool_v1beta1_manifest#disruption DataK8SKarpenterShNodePoolV1Beta1Manifest#disruption}
  */
  readonly disruption?: DataK8SKarpenterShNodePoolV1Beta1ManifestSpecDisruption;
  /**
  * Limits define a set of bounds for provisioning capacity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_pool_v1beta1_manifest#limits DataK8SKarpenterShNodePoolV1Beta1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Template contains the template of possibilities for the provisioning logic to launch a NodeClaim with. NodeClaims launched from this NodePool will often be further constrained than the template specifies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_pool_v1beta1_manifest#template DataK8SKarpenterShNodePoolV1Beta1Manifest#template}
  */
  readonly template: DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplate;
  /**
  * Weight is the priority given to the nodepool during scheduling. A higher numerical weight indicates that this nodepool will be ordered ahead of other nodepools with lower weights. A nodepool with no weight will be treated as if it is a nodepool with a weight of 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_pool_v1beta1_manifest#weight DataK8SKarpenterShNodePoolV1Beta1Manifest#weight}
  */
  readonly weight?: number;
}

export function dataK8SKarpenterShNodePoolV1Beta1ManifestSpecToTerraform(struct?: DataK8SKarpenterShNodePoolV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disruption: dataK8SKarpenterShNodePoolV1Beta1ManifestSpecDisruptionToTerraform(struct!.disruption),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    template: dataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateToTerraform(struct!.template),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SKarpenterShNodePoolV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SKarpenterShNodePoolV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disruption: {
      value: dataK8SKarpenterShNodePoolV1Beta1ManifestSpecDisruptionToHclTerraform(struct!.disruption),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKarpenterShNodePoolV1Beta1ManifestSpecDisruption",
    },
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    template: {
      value: dataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplate",
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

export class DataK8SKarpenterShNodePoolV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKarpenterShNodePoolV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKarpenterShNodePoolV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
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
  private _disruption = new DataK8SKarpenterShNodePoolV1Beta1ManifestSpecDisruptionOutputReference(this, "disruption");
  public get disruption() {
    return this._disruption;
  }
  public putDisruption(value: DataK8SKarpenterShNodePoolV1Beta1ManifestSpecDisruption) {
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
  private _template = new DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataK8SKarpenterShNodePoolV1Beta1ManifestSpecTemplate) {
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
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_pool_v1beta1_manifest k8s_karpenter_sh_node_pool_v1beta1_manifest}
*/
export class DataK8SKarpenterShNodePoolV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_karpenter_sh_node_pool_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SKarpenterShNodePoolV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SKarpenterShNodePoolV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SKarpenterShNodePoolV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_pool_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SKarpenterShNodePoolV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_karpenter_sh_node_pool_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/karpenter_sh_node_pool_v1beta1_manifest k8s_karpenter_sh_node_pool_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SKarpenterShNodePoolV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SKarpenterShNodePoolV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_karpenter_sh_node_pool_v1beta1_manifest',
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
  private _metadata = new DataK8SKarpenterShNodePoolV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKarpenterShNodePoolV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SKarpenterShNodePoolV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKarpenterShNodePoolV1Beta1ManifestSpec) {
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
      metadata: dataK8SKarpenterShNodePoolV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SKarpenterShNodePoolV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SKarpenterShNodePoolV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKarpenterShNodePoolV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SKarpenterShNodePoolV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKarpenterShNodePoolV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
