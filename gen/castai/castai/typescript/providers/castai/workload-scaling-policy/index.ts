// https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkloadScalingPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Recommendation apply type.
  * 	- IMMEDIATE - pods are restarted immediately when new recommendation is generated.
  * 	- DEFERRED - pods are not restarted and recommendation values are applied during natural restarts only (new deployment, etc.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#apply_type WorkloadScalingPolicy#apply_type}
  */
  readonly applyType: string;
  /**
  * CAST AI cluster id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#cluster_id WorkloadScalingPolicy#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#id WorkloadScalingPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Defines possible options for workload management.
  * 	- READ_ONLY - workload watched (metrics collected), but no actions performed by CAST AI.
  * 	- MANAGED - workload watched (metrics collected), CAST AI may perform actions on the workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#management_option WorkloadScalingPolicy#management_option}
  */
  readonly managementOption: string;
  /**
  * Scaling policy name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#name WorkloadScalingPolicy#name}
  */
  readonly name: string;
  /**
  * anti_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#anti_affinity WorkloadScalingPolicy#anti_affinity}
  */
  readonly antiAffinity?: WorkloadScalingPolicyAntiAffinity;
  /**
  * assignment_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#assignment_rules WorkloadScalingPolicy#assignment_rules}
  */
  readonly assignmentRules?: WorkloadScalingPolicyAssignmentRules[] | cdktf.IResolvable;
  /**
  * confidence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#confidence WorkloadScalingPolicy#confidence}
  */
  readonly confidence?: WorkloadScalingPolicyConfidence;
  /**
  * cpu block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#cpu WorkloadScalingPolicy#cpu}
  */
  readonly cpu: WorkloadScalingPolicyCpu;
  /**
  * downscaling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#downscaling WorkloadScalingPolicy#downscaling}
  */
  readonly downscaling?: WorkloadScalingPolicyDownscaling;
  /**
  * memory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#memory WorkloadScalingPolicy#memory}
  */
  readonly memory: WorkloadScalingPolicyMemory;
  /**
  * memory_event block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#memory_event WorkloadScalingPolicy#memory_event}
  */
  readonly memoryEvent?: WorkloadScalingPolicyMemoryEvent;
  /**
  * predictive_scaling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#predictive_scaling WorkloadScalingPolicy#predictive_scaling}
  */
  readonly predictiveScaling?: WorkloadScalingPolicyPredictiveScaling;
  /**
  * rollout_behavior block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#rollout_behavior WorkloadScalingPolicy#rollout_behavior}
  */
  readonly rolloutBehavior?: WorkloadScalingPolicyRolloutBehavior;
  /**
  * startup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#startup WorkloadScalingPolicy#startup}
  */
  readonly startup?: WorkloadScalingPolicyStartup;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#timeouts WorkloadScalingPolicy#timeouts}
  */
  readonly timeouts?: WorkloadScalingPolicyTimeouts;
}
export interface WorkloadScalingPolicyAntiAffinity {
  /**
  * Defines if anti-affinity should be considered when scaling the workload.
  * 	If enabled, requiring host ports, or having anti-affinity on hostname will force all recommendations to be deferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#consider_anti_affinity WorkloadScalingPolicy#consider_anti_affinity}
  */
  readonly considerAntiAffinity?: boolean | cdktf.IResolvable;
}

export function workloadScalingPolicyAntiAffinityToTerraform(struct?: WorkloadScalingPolicyAntiAffinityOutputReference | WorkloadScalingPolicyAntiAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consider_anti_affinity: cdktf.booleanToTerraform(struct!.considerAntiAffinity),
  }
}


export function workloadScalingPolicyAntiAffinityToHclTerraform(struct?: WorkloadScalingPolicyAntiAffinityOutputReference | WorkloadScalingPolicyAntiAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consider_anti_affinity: {
      value: cdktf.booleanToHclTerraform(struct!.considerAntiAffinity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadScalingPolicyAntiAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkloadScalingPolicyAntiAffinity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._considerAntiAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.considerAntiAffinity = this._considerAntiAffinity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadScalingPolicyAntiAffinity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._considerAntiAffinity = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._considerAntiAffinity = value.considerAntiAffinity;
    }
  }

  // consider_anti_affinity - computed: false, optional: true, required: false
  private _considerAntiAffinity?: boolean | cdktf.IResolvable; 
  public get considerAntiAffinity() {
    return this.getBooleanAttribute('consider_anti_affinity');
  }
  public set considerAntiAffinity(value: boolean | cdktf.IResolvable) {
    this._considerAntiAffinity = value;
  }
  public resetConsiderAntiAffinity() {
    this._considerAntiAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get considerAntiAffinityInput() {
    return this._considerAntiAffinity;
  }
}
export interface WorkloadScalingPolicyAssignmentRulesRulesNamespace {
  /**
  * Defines matching by namespace names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#names WorkloadScalingPolicy#names}
  */
  readonly names?: string[];
}

export function workloadScalingPolicyAssignmentRulesRulesNamespaceToTerraform(struct?: WorkloadScalingPolicyAssignmentRulesRulesNamespaceOutputReference | WorkloadScalingPolicyAssignmentRulesRulesNamespace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.names),
  }
}


export function workloadScalingPolicyAssignmentRulesRulesNamespaceToHclTerraform(struct?: WorkloadScalingPolicyAssignmentRulesRulesNamespaceOutputReference | WorkloadScalingPolicyAssignmentRulesRulesNamespace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.names),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadScalingPolicyAssignmentRulesRulesNamespaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkloadScalingPolicyAssignmentRulesRulesNamespace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._names !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadScalingPolicyAssignmentRulesRulesNamespace | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._names = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._names = value.names;
    }
  }

  // names - computed: false, optional: true, required: false
  private _names?: string[]; 
  public get names() {
    return this.getListAttribute('names');
  }
  public set names(value: string[]) {
    this._names = value;
  }
  public resetNames() {
    this._names = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
  }
}
export interface WorkloadScalingPolicyAssignmentRulesRulesWorkloadLabelsExpressions {
  /**
  * The label key to match. Required for all operators except `Regex` and `Contains`. If not specified, it will search through all labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#key WorkloadScalingPolicy#key}
  */
  readonly key?: string;
  /**
  * The operator to use for matching the label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#operator WorkloadScalingPolicy#operator}
  */
  readonly operator: string;
  /**
  * A list of values to match against the label key. It is required for `In`, `NotIn`, `Regex`, and `Contains` operators.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#values WorkloadScalingPolicy#values}
  */
  readonly values?: string[];
}

export function workloadScalingPolicyAssignmentRulesRulesWorkloadLabelsExpressionsToTerraform(struct?: WorkloadScalingPolicyAssignmentRulesRulesWorkloadLabelsExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function workloadScalingPolicyAssignmentRulesRulesWorkloadLabelsExpressionsToHclTerraform(struct?: WorkloadScalingPolicyAssignmentRulesRulesWorkloadLabelsExpressions | cdktf.IResolvable): any {
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

export class WorkloadScalingPolicyAssignmentRulesRulesWorkloadLabelsExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadScalingPolicyAssignmentRulesRulesWorkloadLabelsExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: WorkloadScalingPolicyAssignmentRulesRulesWorkloadLabelsExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

export class WorkloadScalingPolicyAssignmentRulesRulesWorkloadLabelsExpressionsList extends cdktf.ComplexList {
  public internalValue? : WorkloadScalingPolicyAssignmentRulesRulesWorkloadLabelsExpressions[] | cdktf.IResolvable

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
  public get(index: number): WorkloadScalingPolicyAssignmentRulesRulesWorkloadLabelsExpressionsOutputReference {
    return new WorkloadScalingPolicyAssignmentRulesRulesWorkloadLabelsExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadScalingPolicyAssignmentRulesRulesWorkload {
  /**
  * Group, version, and kind for Kubernetes resources. Format: kind[.version][.group].
  * It can be either:
  *  - only kind, e.g. "Deployment"
  *  - group and kind: e.g."Deployment.apps"
  *  - group, version and kind: e.g."Deployment.v1.apps"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#gvk WorkloadScalingPolicy#gvk}
  */
  readonly gvk?: string[];
  /**
  * labels_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#labels_expressions WorkloadScalingPolicy#labels_expressions}
  */
  readonly labelsExpressions?: WorkloadScalingPolicyAssignmentRulesRulesWorkloadLabelsExpressions[] | cdktf.IResolvable;
}

export function workloadScalingPolicyAssignmentRulesRulesWorkloadToTerraform(struct?: WorkloadScalingPolicyAssignmentRulesRulesWorkloadOutputReference | WorkloadScalingPolicyAssignmentRulesRulesWorkload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gvk: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.gvk),
    labels_expressions: cdktf.listMapper(workloadScalingPolicyAssignmentRulesRulesWorkloadLabelsExpressionsToTerraform, true)(struct!.labelsExpressions),
  }
}


export function workloadScalingPolicyAssignmentRulesRulesWorkloadToHclTerraform(struct?: WorkloadScalingPolicyAssignmentRulesRulesWorkloadOutputReference | WorkloadScalingPolicyAssignmentRulesRulesWorkload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gvk: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.gvk),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    labels_expressions: {
      value: cdktf.listMapperHcl(workloadScalingPolicyAssignmentRulesRulesWorkloadLabelsExpressionsToHclTerraform, true)(struct!.labelsExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadScalingPolicyAssignmentRulesRulesWorkloadLabelsExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadScalingPolicyAssignmentRulesRulesWorkloadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkloadScalingPolicyAssignmentRulesRulesWorkload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gvk !== undefined) {
      hasAnyValues = true;
      internalValueResult.gvk = this._gvk;
    }
    if (this._labelsExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelsExpressions = this._labelsExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadScalingPolicyAssignmentRulesRulesWorkload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gvk = undefined;
      this._labelsExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gvk = value.gvk;
      this._labelsExpressions.internalValue = value.labelsExpressions;
    }
  }

  // gvk - computed: false, optional: true, required: false
  private _gvk?: string[]; 
  public get gvk() {
    return this.getListAttribute('gvk');
  }
  public set gvk(value: string[]) {
    this._gvk = value;
  }
  public resetGvk() {
    this._gvk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gvkInput() {
    return this._gvk;
  }

  // labels_expressions - computed: false, optional: true, required: false
  private _labelsExpressions = new WorkloadScalingPolicyAssignmentRulesRulesWorkloadLabelsExpressionsList(this, "labels_expressions", false);
  public get labelsExpressions() {
    return this._labelsExpressions;
  }
  public putLabelsExpressions(value: WorkloadScalingPolicyAssignmentRulesRulesWorkloadLabelsExpressions[] | cdktf.IResolvable) {
    this._labelsExpressions.internalValue = value;
  }
  public resetLabelsExpressions() {
    this._labelsExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsExpressionsInput() {
    return this._labelsExpressions.internalValue;
  }
}
export interface WorkloadScalingPolicyAssignmentRulesRules {
  /**
  * namespace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#namespace WorkloadScalingPolicy#namespace}
  */
  readonly namespace?: WorkloadScalingPolicyAssignmentRulesRulesNamespace;
  /**
  * workload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#workload WorkloadScalingPolicy#workload}
  */
  readonly workload?: WorkloadScalingPolicyAssignmentRulesRulesWorkload;
}

export function workloadScalingPolicyAssignmentRulesRulesToTerraform(struct?: WorkloadScalingPolicyAssignmentRulesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: workloadScalingPolicyAssignmentRulesRulesNamespaceToTerraform(struct!.namespace),
    workload: workloadScalingPolicyAssignmentRulesRulesWorkloadToTerraform(struct!.workload),
  }
}


export function workloadScalingPolicyAssignmentRulesRulesToHclTerraform(struct?: WorkloadScalingPolicyAssignmentRulesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace: {
      value: workloadScalingPolicyAssignmentRulesRulesNamespaceToHclTerraform(struct!.namespace),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadScalingPolicyAssignmentRulesRulesNamespaceList",
    },
    workload: {
      value: workloadScalingPolicyAssignmentRulesRulesWorkloadToHclTerraform(struct!.workload),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadScalingPolicyAssignmentRulesRulesWorkloadList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadScalingPolicyAssignmentRulesRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadScalingPolicyAssignmentRulesRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace?.internalValue;
    }
    if (this._workload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workload = this._workload?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadScalingPolicyAssignmentRulesRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespace.internalValue = undefined;
      this._workload.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespace.internalValue = value.namespace;
      this._workload.internalValue = value.workload;
    }
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace = new WorkloadScalingPolicyAssignmentRulesRulesNamespaceOutputReference(this, "namespace");
  public get namespace() {
    return this._namespace;
  }
  public putNamespace(value: WorkloadScalingPolicyAssignmentRulesRulesNamespace) {
    this._namespace.internalValue = value;
  }
  public resetNamespace() {
    this._namespace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace.internalValue;
  }

  // workload - computed: false, optional: true, required: false
  private _workload = new WorkloadScalingPolicyAssignmentRulesRulesWorkloadOutputReference(this, "workload");
  public get workload() {
    return this._workload;
  }
  public putWorkload(value: WorkloadScalingPolicyAssignmentRulesRulesWorkload) {
    this._workload.internalValue = value;
  }
  public resetWorkload() {
    this._workload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadInput() {
    return this._workload.internalValue;
  }
}

export class WorkloadScalingPolicyAssignmentRulesRulesList extends cdktf.ComplexList {
  public internalValue? : WorkloadScalingPolicyAssignmentRulesRules[] | cdktf.IResolvable

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
  public get(index: number): WorkloadScalingPolicyAssignmentRulesRulesOutputReference {
    return new WorkloadScalingPolicyAssignmentRulesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadScalingPolicyAssignmentRules {
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#rules WorkloadScalingPolicy#rules}
  */
  readonly rules: WorkloadScalingPolicyAssignmentRulesRules[] | cdktf.IResolvable;
}

export function workloadScalingPolicyAssignmentRulesToTerraform(struct?: WorkloadScalingPolicyAssignmentRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rules: cdktf.listMapper(workloadScalingPolicyAssignmentRulesRulesToTerraform, true)(struct!.rules),
  }
}


export function workloadScalingPolicyAssignmentRulesToHclTerraform(struct?: WorkloadScalingPolicyAssignmentRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rules: {
      value: cdktf.listMapperHcl(workloadScalingPolicyAssignmentRulesRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadScalingPolicyAssignmentRulesRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadScalingPolicyAssignmentRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadScalingPolicyAssignmentRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadScalingPolicyAssignmentRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rules.internalValue = value.rules;
    }
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new WorkloadScalingPolicyAssignmentRulesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: WorkloadScalingPolicyAssignmentRulesRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}

export class WorkloadScalingPolicyAssignmentRulesList extends cdktf.ComplexList {
  public internalValue? : WorkloadScalingPolicyAssignmentRules[] | cdktf.IResolvable

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
  public get(index: number): WorkloadScalingPolicyAssignmentRulesOutputReference {
    return new WorkloadScalingPolicyAssignmentRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadScalingPolicyConfidence {
  /**
  * Defines the confidence threshold for applying recommendations. The smaller number indicates that we require fewer metrics data points to apply recommendations - changing this value can cause applying less precise recommendations. Do not change the default unless you want to optimize with fewer data points (e.g., short-lived workloads).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#threshold WorkloadScalingPolicy#threshold}
  */
  readonly threshold?: number;
}

export function workloadScalingPolicyConfidenceToTerraform(struct?: WorkloadScalingPolicyConfidenceOutputReference | WorkloadScalingPolicyConfidence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function workloadScalingPolicyConfidenceToHclTerraform(struct?: WorkloadScalingPolicyConfidenceOutputReference | WorkloadScalingPolicyConfidence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadScalingPolicyConfidenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkloadScalingPolicyConfidence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadScalingPolicyConfidence | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._threshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._threshold = value.threshold;
    }
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}
export interface WorkloadScalingPolicyCpuApplyThresholdStrategy {
  /**
  * If denominator is close or equal to 0, the threshold will be much bigger for small values.For example when numerator, exponent is 1 and denominator is 0 the threshold for 0.5 req. CPU will be 200%.It must be defined for the CUSTOM_ADAPTIVE strategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#denominator WorkloadScalingPolicy#denominator}
  */
  readonly denominator?: string;
  /**
  * The exponent changes how fast the curve is going down. The smaller value will cause that we won’t pick extremely small number for big resources, for example:
  * 	- if numerator is 0, denominator is 1, and exponent is 1, for 50 CPU we will pick 2% threshold
  * 	- if numerator is 0, denominator is 1, and exponent is 0.8, for 50 CPU we will pick 4.3% threshold
  * 	It must be defined for the CUSTOM_ADAPTIVE strategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#exponent WorkloadScalingPolicy#exponent}
  */
  readonly exponent?: number;
  /**
  * The numerator affects vertical stretch of function used in adaptive threshold - smaller number will create smaller threshold.It must be defined for the CUSTOM_ADAPTIVE strategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#numerator WorkloadScalingPolicy#numerator}
  */
  readonly numerator?: number;
  /**
  * Percentage of a how much difference should there be between the current pod requests and the new recommendation. It must be defined for the PERCENTAGE strategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#percentage WorkloadScalingPolicy#percentage}
  */
  readonly percentage?: number;
  /**
  * Defines apply theshold strategy type.
  * 	- PERCENTAGE - recommendation will be applied when diff of current requests and new recommendation is greater than set value
  *     - DEFAULT_ADAPTIVE - will pick larger threshold percentage for small workloads and smaller percentage for large workloads.
  *     - CUSTOM_ADAPTIVE - works in same way as DEFAULT_ADAPTIVE, but it allows to tweak parameters of adaptive threshold formula: percentage = numerator/(currentRequest + denominator)^exponent. This strategy is for advance use cases, we recommend to use DEFAULT_ADAPTIVE strategy.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#type WorkloadScalingPolicy#type}
  */
  readonly type: string;
}

export function workloadScalingPolicyCpuApplyThresholdStrategyToTerraform(struct?: WorkloadScalingPolicyCpuApplyThresholdStrategyOutputReference | WorkloadScalingPolicyCpuApplyThresholdStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    denominator: cdktf.stringToTerraform(struct!.denominator),
    exponent: cdktf.numberToTerraform(struct!.exponent),
    numerator: cdktf.numberToTerraform(struct!.numerator),
    percentage: cdktf.numberToTerraform(struct!.percentage),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function workloadScalingPolicyCpuApplyThresholdStrategyToHclTerraform(struct?: WorkloadScalingPolicyCpuApplyThresholdStrategyOutputReference | WorkloadScalingPolicyCpuApplyThresholdStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    denominator: {
      value: cdktf.stringToHclTerraform(struct!.denominator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exponent: {
      value: cdktf.numberToHclTerraform(struct!.exponent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    numerator: {
      value: cdktf.numberToHclTerraform(struct!.numerator),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    percentage: {
      value: cdktf.numberToHclTerraform(struct!.percentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class WorkloadScalingPolicyCpuApplyThresholdStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkloadScalingPolicyCpuApplyThresholdStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._denominator !== undefined) {
      hasAnyValues = true;
      internalValueResult.denominator = this._denominator;
    }
    if (this._exponent !== undefined) {
      hasAnyValues = true;
      internalValueResult.exponent = this._exponent;
    }
    if (this._numerator !== undefined) {
      hasAnyValues = true;
      internalValueResult.numerator = this._numerator;
    }
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadScalingPolicyCpuApplyThresholdStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._denominator = undefined;
      this._exponent = undefined;
      this._numerator = undefined;
      this._percentage = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._denominator = value.denominator;
      this._exponent = value.exponent;
      this._numerator = value.numerator;
      this._percentage = value.percentage;
      this._type = value.type;
    }
  }

  // denominator - computed: false, optional: true, required: false
  private _denominator?: string; 
  public get denominator() {
    return this.getStringAttribute('denominator');
  }
  public set denominator(value: string) {
    this._denominator = value;
  }
  public resetDenominator() {
    this._denominator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denominatorInput() {
    return this._denominator;
  }

  // exponent - computed: false, optional: true, required: false
  private _exponent?: number; 
  public get exponent() {
    return this.getNumberAttribute('exponent');
  }
  public set exponent(value: number) {
    this._exponent = value;
  }
  public resetExponent() {
    this._exponent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exponentInput() {
    return this._exponent;
  }

  // numerator - computed: false, optional: true, required: false
  private _numerator?: number; 
  public get numerator() {
    return this.getNumberAttribute('numerator');
  }
  public set numerator(value: number) {
    this._numerator = value;
  }
  public resetNumerator() {
    this._numerator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numeratorInput() {
    return this._numerator;
  }

  // percentage - computed: false, optional: true, required: false
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  public resetPercentage() {
    this._percentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface WorkloadScalingPolicyCpuLimit {
  /**
  * Multiplier used to calculate the resource limit. It must be defined for the MULTIPLIER strategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#multiplier WorkloadScalingPolicy#multiplier}
  */
  readonly multiplier?: number;
  /**
  * Apply the strategy only when the original resource has limits defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#only_if_original_exist WorkloadScalingPolicy#only_if_original_exist}
  */
  readonly onlyIfOriginalExist?: boolean | cdktf.IResolvable;
  /**
  * Use the original resource limits if they are higher than recommended values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#only_if_original_lower WorkloadScalingPolicy#only_if_original_lower}
  */
  readonly onlyIfOriginalLower?: boolean | cdktf.IResolvable;
  /**
  * Defines limit strategy type.
  * 	- NO_LIMIT - removes the resource limit even if it was specified in the workload spec.
  * 	- KEEP_LIMITS - keep existing resource limits. While limits provide stability predictability, they may restrict workloads that need to temporarily burst beyond their allocation.
  * 	- MULTIPLIER - used to calculate the resource limit. The final value is determined by multiplying the resource request by the specified factor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#type WorkloadScalingPolicy#type}
  */
  readonly type: string;
}

export function workloadScalingPolicyCpuLimitToTerraform(struct?: WorkloadScalingPolicyCpuLimitOutputReference | WorkloadScalingPolicyCpuLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    multiplier: cdktf.numberToTerraform(struct!.multiplier),
    only_if_original_exist: cdktf.booleanToTerraform(struct!.onlyIfOriginalExist),
    only_if_original_lower: cdktf.booleanToTerraform(struct!.onlyIfOriginalLower),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function workloadScalingPolicyCpuLimitToHclTerraform(struct?: WorkloadScalingPolicyCpuLimitOutputReference | WorkloadScalingPolicyCpuLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    multiplier: {
      value: cdktf.numberToHclTerraform(struct!.multiplier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    only_if_original_exist: {
      value: cdktf.booleanToHclTerraform(struct!.onlyIfOriginalExist),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    only_if_original_lower: {
      value: cdktf.booleanToHclTerraform(struct!.onlyIfOriginalLower),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class WorkloadScalingPolicyCpuLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkloadScalingPolicyCpuLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._multiplier !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiplier = this._multiplier;
    }
    if (this._onlyIfOriginalExist !== undefined) {
      hasAnyValues = true;
      internalValueResult.onlyIfOriginalExist = this._onlyIfOriginalExist;
    }
    if (this._onlyIfOriginalLower !== undefined) {
      hasAnyValues = true;
      internalValueResult.onlyIfOriginalLower = this._onlyIfOriginalLower;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadScalingPolicyCpuLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._multiplier = undefined;
      this._onlyIfOriginalExist = undefined;
      this._onlyIfOriginalLower = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._multiplier = value.multiplier;
      this._onlyIfOriginalExist = value.onlyIfOriginalExist;
      this._onlyIfOriginalLower = value.onlyIfOriginalLower;
      this._type = value.type;
    }
  }

  // multiplier - computed: false, optional: true, required: false
  private _multiplier?: number; 
  public get multiplier() {
    return this.getNumberAttribute('multiplier');
  }
  public set multiplier(value: number) {
    this._multiplier = value;
  }
  public resetMultiplier() {
    this._multiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiplierInput() {
    return this._multiplier;
  }

  // only_if_original_exist - computed: false, optional: true, required: false
  private _onlyIfOriginalExist?: boolean | cdktf.IResolvable; 
  public get onlyIfOriginalExist() {
    return this.getBooleanAttribute('only_if_original_exist');
  }
  public set onlyIfOriginalExist(value: boolean | cdktf.IResolvable) {
    this._onlyIfOriginalExist = value;
  }
  public resetOnlyIfOriginalExist() {
    this._onlyIfOriginalExist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyIfOriginalExistInput() {
    return this._onlyIfOriginalExist;
  }

  // only_if_original_lower - computed: false, optional: true, required: false
  private _onlyIfOriginalLower?: boolean | cdktf.IResolvable; 
  public get onlyIfOriginalLower() {
    return this.getBooleanAttribute('only_if_original_lower');
  }
  public set onlyIfOriginalLower(value: boolean | cdktf.IResolvable) {
    this._onlyIfOriginalLower = value;
  }
  public resetOnlyIfOriginalLower() {
    this._onlyIfOriginalLower = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyIfOriginalLowerInput() {
    return this._onlyIfOriginalLower;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface WorkloadScalingPolicyCpu {
  /**
  * The threshold of when to apply the recommendation. Recommendation will be applied when diff of current requests and new recommendation is greater than set value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#apply_threshold WorkloadScalingPolicy#apply_threshold}
  */
  readonly applyThreshold?: number;
  /**
  * The arguments for the function - i.e. for `QUANTILE` this should be a [0, 1] float. `MAX` doesn't accept any args
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#args WorkloadScalingPolicy#args}
  */
  readonly args?: string[];
  /**
  * The function used to calculate the resource recommendation. Supported values: `QUANTILE`, `MAX`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#function WorkloadScalingPolicy#function}
  */
  readonly function?: string;
  /**
  * The look back period in seconds for the recommendation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#look_back_period_seconds WorkloadScalingPolicy#look_back_period_seconds}
  */
  readonly lookBackPeriodSeconds?: number;
  /**
  * Disables management for a single resource when set to `READ_ONLY`. The resource will use its original workload template requests and limits. Supported value: `READ_ONLY`. Minimum required workload-autoscaler version: `v0.23.1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#management_option WorkloadScalingPolicy#management_option}
  */
  readonly managementOption?: string;
  /**
  * Max values for the recommendation, applies to every container. For memory - this is in MiB, for CPU - this is in cores.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#max WorkloadScalingPolicy#max}
  */
  readonly max?: number;
  /**
  * Min values for the recommendation, applies to every container. For memory - this is in MiB, for CPU - this is in cores.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#min WorkloadScalingPolicy#min}
  */
  readonly min?: number;
  /**
  * Overhead for the recommendation, e.g. `0.1` will result in 10% higher recommendation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#overhead WorkloadScalingPolicy#overhead}
  */
  readonly overhead?: number;
  /**
  * apply_threshold_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#apply_threshold_strategy WorkloadScalingPolicy#apply_threshold_strategy}
  */
  readonly applyThresholdStrategy?: WorkloadScalingPolicyCpuApplyThresholdStrategy;
  /**
  * limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#limit WorkloadScalingPolicy#limit}
  */
  readonly limit?: WorkloadScalingPolicyCpuLimit;
}

export function workloadScalingPolicyCpuToTerraform(struct?: WorkloadScalingPolicyCpuOutputReference | WorkloadScalingPolicyCpu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apply_threshold: cdktf.numberToTerraform(struct!.applyThreshold),
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    function: cdktf.stringToTerraform(struct!.function),
    look_back_period_seconds: cdktf.numberToTerraform(struct!.lookBackPeriodSeconds),
    management_option: cdktf.stringToTerraform(struct!.managementOption),
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
    overhead: cdktf.numberToTerraform(struct!.overhead),
    apply_threshold_strategy: workloadScalingPolicyCpuApplyThresholdStrategyToTerraform(struct!.applyThresholdStrategy),
    limit: workloadScalingPolicyCpuLimitToTerraform(struct!.limit),
  }
}


export function workloadScalingPolicyCpuToHclTerraform(struct?: WorkloadScalingPolicyCpuOutputReference | WorkloadScalingPolicyCpu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apply_threshold: {
      value: cdktf.numberToHclTerraform(struct!.applyThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    function: {
      value: cdktf.stringToHclTerraform(struct!.function),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    look_back_period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.lookBackPeriodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    management_option: {
      value: cdktf.stringToHclTerraform(struct!.managementOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    overhead: {
      value: cdktf.numberToHclTerraform(struct!.overhead),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    apply_threshold_strategy: {
      value: workloadScalingPolicyCpuApplyThresholdStrategyToHclTerraform(struct!.applyThresholdStrategy),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadScalingPolicyCpuApplyThresholdStrategyList",
    },
    limit: {
      value: workloadScalingPolicyCpuLimitToHclTerraform(struct!.limit),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadScalingPolicyCpuLimitList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadScalingPolicyCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkloadScalingPolicyCpu | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyThreshold = this._applyThreshold;
    }
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._function !== undefined) {
      hasAnyValues = true;
      internalValueResult.function = this._function;
    }
    if (this._lookBackPeriodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookBackPeriodSeconds = this._lookBackPeriodSeconds;
    }
    if (this._managementOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementOption = this._managementOption;
    }
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    if (this._overhead !== undefined) {
      hasAnyValues = true;
      internalValueResult.overhead = this._overhead;
    }
    if (this._applyThresholdStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyThresholdStrategy = this._applyThresholdStrategy?.internalValue;
    }
    if (this._limit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadScalingPolicyCpu | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applyThreshold = undefined;
      this._args = undefined;
      this._function = undefined;
      this._lookBackPeriodSeconds = undefined;
      this._managementOption = undefined;
      this._max = undefined;
      this._min = undefined;
      this._overhead = undefined;
      this._applyThresholdStrategy.internalValue = undefined;
      this._limit.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applyThreshold = value.applyThreshold;
      this._args = value.args;
      this._function = value.function;
      this._lookBackPeriodSeconds = value.lookBackPeriodSeconds;
      this._managementOption = value.managementOption;
      this._max = value.max;
      this._min = value.min;
      this._overhead = value.overhead;
      this._applyThresholdStrategy.internalValue = value.applyThresholdStrategy;
      this._limit.internalValue = value.limit;
    }
  }

  // apply_threshold - computed: false, optional: true, required: false
  private _applyThreshold?: number; 
  public get applyThreshold() {
    return this.getNumberAttribute('apply_threshold');
  }
  public set applyThreshold(value: number) {
    this._applyThreshold = value;
  }
  public resetApplyThreshold() {
    this._applyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyThresholdInput() {
    return this._applyThreshold;
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // function - computed: false, optional: true, required: false
  private _function?: string; 
  public get function() {
    return this.getStringAttribute('function');
  }
  public set function(value: string) {
    this._function = value;
  }
  public resetFunction() {
    this._function = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionInput() {
    return this._function;
  }

  // look_back_period_seconds - computed: false, optional: true, required: false
  private _lookBackPeriodSeconds?: number; 
  public get lookBackPeriodSeconds() {
    return this.getNumberAttribute('look_back_period_seconds');
  }
  public set lookBackPeriodSeconds(value: number) {
    this._lookBackPeriodSeconds = value;
  }
  public resetLookBackPeriodSeconds() {
    this._lookBackPeriodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookBackPeriodSecondsInput() {
    return this._lookBackPeriodSeconds;
  }

  // management_option - computed: false, optional: true, required: false
  private _managementOption?: string; 
  public get managementOption() {
    return this.getStringAttribute('management_option');
  }
  public set managementOption(value: string) {
    this._managementOption = value;
  }
  public resetManagementOption() {
    this._managementOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementOptionInput() {
    return this._managementOption;
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }

  // overhead - computed: false, optional: true, required: false
  private _overhead?: number; 
  public get overhead() {
    return this.getNumberAttribute('overhead');
  }
  public set overhead(value: number) {
    this._overhead = value;
  }
  public resetOverhead() {
    this._overhead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overheadInput() {
    return this._overhead;
  }

  // apply_threshold_strategy - computed: false, optional: true, required: false
  private _applyThresholdStrategy = new WorkloadScalingPolicyCpuApplyThresholdStrategyOutputReference(this, "apply_threshold_strategy");
  public get applyThresholdStrategy() {
    return this._applyThresholdStrategy;
  }
  public putApplyThresholdStrategy(value: WorkloadScalingPolicyCpuApplyThresholdStrategy) {
    this._applyThresholdStrategy.internalValue = value;
  }
  public resetApplyThresholdStrategy() {
    this._applyThresholdStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyThresholdStrategyInput() {
    return this._applyThresholdStrategy.internalValue;
  }

  // limit - computed: false, optional: true, required: false
  private _limit = new WorkloadScalingPolicyCpuLimitOutputReference(this, "limit");
  public get limit() {
    return this._limit;
  }
  public putLimit(value: WorkloadScalingPolicyCpuLimit) {
    this._limit.internalValue = value;
  }
  public resetLimit() {
    this._limit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit.internalValue;
  }
}
export interface WorkloadScalingPolicyDownscaling {
  /**
  * Defines the apply type to be used when downscaling.
  * 	- IMMEDIATE - pods are restarted immediately when new recommendation is generated.
  * 	- DEFERRED - pods are not restarted and recommendation values are applied during natural restarts only (new deployment, etc.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#apply_type WorkloadScalingPolicy#apply_type}
  */
  readonly applyType?: string;
}

export function workloadScalingPolicyDownscalingToTerraform(struct?: WorkloadScalingPolicyDownscalingOutputReference | WorkloadScalingPolicyDownscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apply_type: cdktf.stringToTerraform(struct!.applyType),
  }
}


export function workloadScalingPolicyDownscalingToHclTerraform(struct?: WorkloadScalingPolicyDownscalingOutputReference | WorkloadScalingPolicyDownscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apply_type: {
      value: cdktf.stringToHclTerraform(struct!.applyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadScalingPolicyDownscalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkloadScalingPolicyDownscaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyType = this._applyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadScalingPolicyDownscaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applyType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applyType = value.applyType;
    }
  }

  // apply_type - computed: false, optional: true, required: false
  private _applyType?: string; 
  public get applyType() {
    return this.getStringAttribute('apply_type');
  }
  public set applyType(value: string) {
    this._applyType = value;
  }
  public resetApplyType() {
    this._applyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyTypeInput() {
    return this._applyType;
  }
}
export interface WorkloadScalingPolicyMemoryApplyThresholdStrategy {
  /**
  * If denominator is close or equal to 0, the threshold will be much bigger for small values.For example when numerator, exponent is 1 and denominator is 0 the threshold for 0.5 req. CPU will be 200%.It must be defined for the CUSTOM_ADAPTIVE strategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#denominator WorkloadScalingPolicy#denominator}
  */
  readonly denominator?: string;
  /**
  * The exponent changes how fast the curve is going down. The smaller value will cause that we won’t pick extremely small number for big resources, for example:
  * 	- if numerator is 0, denominator is 1, and exponent is 1, for 50 CPU we will pick 2% threshold
  * 	- if numerator is 0, denominator is 1, and exponent is 0.8, for 50 CPU we will pick 4.3% threshold
  * 	It must be defined for the CUSTOM_ADAPTIVE strategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#exponent WorkloadScalingPolicy#exponent}
  */
  readonly exponent?: number;
  /**
  * The numerator affects vertical stretch of function used in adaptive threshold - smaller number will create smaller threshold.It must be defined for the CUSTOM_ADAPTIVE strategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#numerator WorkloadScalingPolicy#numerator}
  */
  readonly numerator?: number;
  /**
  * Percentage of a how much difference should there be between the current pod requests and the new recommendation. It must be defined for the PERCENTAGE strategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#percentage WorkloadScalingPolicy#percentage}
  */
  readonly percentage?: number;
  /**
  * Defines apply theshold strategy type.
  * 	- PERCENTAGE - recommendation will be applied when diff of current requests and new recommendation is greater than set value
  *     - DEFAULT_ADAPTIVE - will pick larger threshold percentage for small workloads and smaller percentage for large workloads.
  *     - CUSTOM_ADAPTIVE - works in same way as DEFAULT_ADAPTIVE, but it allows to tweak parameters of adaptive threshold formula: percentage = numerator/(currentRequest + denominator)^exponent. This strategy is for advance use cases, we recommend to use DEFAULT_ADAPTIVE strategy.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#type WorkloadScalingPolicy#type}
  */
  readonly type: string;
}

export function workloadScalingPolicyMemoryApplyThresholdStrategyToTerraform(struct?: WorkloadScalingPolicyMemoryApplyThresholdStrategyOutputReference | WorkloadScalingPolicyMemoryApplyThresholdStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    denominator: cdktf.stringToTerraform(struct!.denominator),
    exponent: cdktf.numberToTerraform(struct!.exponent),
    numerator: cdktf.numberToTerraform(struct!.numerator),
    percentage: cdktf.numberToTerraform(struct!.percentage),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function workloadScalingPolicyMemoryApplyThresholdStrategyToHclTerraform(struct?: WorkloadScalingPolicyMemoryApplyThresholdStrategyOutputReference | WorkloadScalingPolicyMemoryApplyThresholdStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    denominator: {
      value: cdktf.stringToHclTerraform(struct!.denominator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exponent: {
      value: cdktf.numberToHclTerraform(struct!.exponent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    numerator: {
      value: cdktf.numberToHclTerraform(struct!.numerator),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    percentage: {
      value: cdktf.numberToHclTerraform(struct!.percentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class WorkloadScalingPolicyMemoryApplyThresholdStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkloadScalingPolicyMemoryApplyThresholdStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._denominator !== undefined) {
      hasAnyValues = true;
      internalValueResult.denominator = this._denominator;
    }
    if (this._exponent !== undefined) {
      hasAnyValues = true;
      internalValueResult.exponent = this._exponent;
    }
    if (this._numerator !== undefined) {
      hasAnyValues = true;
      internalValueResult.numerator = this._numerator;
    }
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadScalingPolicyMemoryApplyThresholdStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._denominator = undefined;
      this._exponent = undefined;
      this._numerator = undefined;
      this._percentage = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._denominator = value.denominator;
      this._exponent = value.exponent;
      this._numerator = value.numerator;
      this._percentage = value.percentage;
      this._type = value.type;
    }
  }

  // denominator - computed: false, optional: true, required: false
  private _denominator?: string; 
  public get denominator() {
    return this.getStringAttribute('denominator');
  }
  public set denominator(value: string) {
    this._denominator = value;
  }
  public resetDenominator() {
    this._denominator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denominatorInput() {
    return this._denominator;
  }

  // exponent - computed: false, optional: true, required: false
  private _exponent?: number; 
  public get exponent() {
    return this.getNumberAttribute('exponent');
  }
  public set exponent(value: number) {
    this._exponent = value;
  }
  public resetExponent() {
    this._exponent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exponentInput() {
    return this._exponent;
  }

  // numerator - computed: false, optional: true, required: false
  private _numerator?: number; 
  public get numerator() {
    return this.getNumberAttribute('numerator');
  }
  public set numerator(value: number) {
    this._numerator = value;
  }
  public resetNumerator() {
    this._numerator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numeratorInput() {
    return this._numerator;
  }

  // percentage - computed: false, optional: true, required: false
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  public resetPercentage() {
    this._percentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface WorkloadScalingPolicyMemoryLimit {
  /**
  * Multiplier used to calculate the resource limit. It must be defined for the MULTIPLIER strategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#multiplier WorkloadScalingPolicy#multiplier}
  */
  readonly multiplier?: number;
  /**
  * Apply the strategy only when the original resource has limits defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#only_if_original_exist WorkloadScalingPolicy#only_if_original_exist}
  */
  readonly onlyIfOriginalExist?: boolean | cdktf.IResolvable;
  /**
  * Use the original resource limits if they are higher than recommended values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#only_if_original_lower WorkloadScalingPolicy#only_if_original_lower}
  */
  readonly onlyIfOriginalLower?: boolean | cdktf.IResolvable;
  /**
  * Defines limit strategy type.
  * 	- NO_LIMIT - removes the resource limit even if it was specified in the workload spec.
  * 	- KEEP_LIMITS - keep existing resource limits. While limits provide stability predictability, they may restrict workloads that need to temporarily burst beyond their allocation.
  * 	- MULTIPLIER - used to calculate the resource limit. The final value is determined by multiplying the resource request by the specified factor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#type WorkloadScalingPolicy#type}
  */
  readonly type: string;
}

export function workloadScalingPolicyMemoryLimitToTerraform(struct?: WorkloadScalingPolicyMemoryLimitOutputReference | WorkloadScalingPolicyMemoryLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    multiplier: cdktf.numberToTerraform(struct!.multiplier),
    only_if_original_exist: cdktf.booleanToTerraform(struct!.onlyIfOriginalExist),
    only_if_original_lower: cdktf.booleanToTerraform(struct!.onlyIfOriginalLower),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function workloadScalingPolicyMemoryLimitToHclTerraform(struct?: WorkloadScalingPolicyMemoryLimitOutputReference | WorkloadScalingPolicyMemoryLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    multiplier: {
      value: cdktf.numberToHclTerraform(struct!.multiplier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    only_if_original_exist: {
      value: cdktf.booleanToHclTerraform(struct!.onlyIfOriginalExist),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    only_if_original_lower: {
      value: cdktf.booleanToHclTerraform(struct!.onlyIfOriginalLower),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class WorkloadScalingPolicyMemoryLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkloadScalingPolicyMemoryLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._multiplier !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiplier = this._multiplier;
    }
    if (this._onlyIfOriginalExist !== undefined) {
      hasAnyValues = true;
      internalValueResult.onlyIfOriginalExist = this._onlyIfOriginalExist;
    }
    if (this._onlyIfOriginalLower !== undefined) {
      hasAnyValues = true;
      internalValueResult.onlyIfOriginalLower = this._onlyIfOriginalLower;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadScalingPolicyMemoryLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._multiplier = undefined;
      this._onlyIfOriginalExist = undefined;
      this._onlyIfOriginalLower = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._multiplier = value.multiplier;
      this._onlyIfOriginalExist = value.onlyIfOriginalExist;
      this._onlyIfOriginalLower = value.onlyIfOriginalLower;
      this._type = value.type;
    }
  }

  // multiplier - computed: false, optional: true, required: false
  private _multiplier?: number; 
  public get multiplier() {
    return this.getNumberAttribute('multiplier');
  }
  public set multiplier(value: number) {
    this._multiplier = value;
  }
  public resetMultiplier() {
    this._multiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiplierInput() {
    return this._multiplier;
  }

  // only_if_original_exist - computed: false, optional: true, required: false
  private _onlyIfOriginalExist?: boolean | cdktf.IResolvable; 
  public get onlyIfOriginalExist() {
    return this.getBooleanAttribute('only_if_original_exist');
  }
  public set onlyIfOriginalExist(value: boolean | cdktf.IResolvable) {
    this._onlyIfOriginalExist = value;
  }
  public resetOnlyIfOriginalExist() {
    this._onlyIfOriginalExist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyIfOriginalExistInput() {
    return this._onlyIfOriginalExist;
  }

  // only_if_original_lower - computed: false, optional: true, required: false
  private _onlyIfOriginalLower?: boolean | cdktf.IResolvable; 
  public get onlyIfOriginalLower() {
    return this.getBooleanAttribute('only_if_original_lower');
  }
  public set onlyIfOriginalLower(value: boolean | cdktf.IResolvable) {
    this._onlyIfOriginalLower = value;
  }
  public resetOnlyIfOriginalLower() {
    this._onlyIfOriginalLower = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyIfOriginalLowerInput() {
    return this._onlyIfOriginalLower;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface WorkloadScalingPolicyMemory {
  /**
  * The threshold of when to apply the recommendation. Recommendation will be applied when diff of current requests and new recommendation is greater than set value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#apply_threshold WorkloadScalingPolicy#apply_threshold}
  */
  readonly applyThreshold?: number;
  /**
  * The arguments for the function - i.e. for `QUANTILE` this should be a [0, 1] float. `MAX` doesn't accept any args
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#args WorkloadScalingPolicy#args}
  */
  readonly args?: string[];
  /**
  * The function used to calculate the resource recommendation. Supported values: `QUANTILE`, `MAX`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#function WorkloadScalingPolicy#function}
  */
  readonly function?: string;
  /**
  * The look back period in seconds for the recommendation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#look_back_period_seconds WorkloadScalingPolicy#look_back_period_seconds}
  */
  readonly lookBackPeriodSeconds?: number;
  /**
  * Disables management for a single resource when set to `READ_ONLY`. The resource will use its original workload template requests and limits. Supported value: `READ_ONLY`. Minimum required workload-autoscaler version: `v0.23.1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#management_option WorkloadScalingPolicy#management_option}
  */
  readonly managementOption?: string;
  /**
  * Max values for the recommendation, applies to every container. For memory - this is in MiB, for CPU - this is in cores.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#max WorkloadScalingPolicy#max}
  */
  readonly max?: number;
  /**
  * Min values for the recommendation, applies to every container. For memory - this is in MiB, for CPU - this is in cores.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#min WorkloadScalingPolicy#min}
  */
  readonly min?: number;
  /**
  * Overhead for the recommendation, e.g. `0.1` will result in 10% higher recommendation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#overhead WorkloadScalingPolicy#overhead}
  */
  readonly overhead?: number;
  /**
  * apply_threshold_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#apply_threshold_strategy WorkloadScalingPolicy#apply_threshold_strategy}
  */
  readonly applyThresholdStrategy?: WorkloadScalingPolicyMemoryApplyThresholdStrategy;
  /**
  * limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#limit WorkloadScalingPolicy#limit}
  */
  readonly limit?: WorkloadScalingPolicyMemoryLimit;
}

export function workloadScalingPolicyMemoryToTerraform(struct?: WorkloadScalingPolicyMemoryOutputReference | WorkloadScalingPolicyMemory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apply_threshold: cdktf.numberToTerraform(struct!.applyThreshold),
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    function: cdktf.stringToTerraform(struct!.function),
    look_back_period_seconds: cdktf.numberToTerraform(struct!.lookBackPeriodSeconds),
    management_option: cdktf.stringToTerraform(struct!.managementOption),
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
    overhead: cdktf.numberToTerraform(struct!.overhead),
    apply_threshold_strategy: workloadScalingPolicyMemoryApplyThresholdStrategyToTerraform(struct!.applyThresholdStrategy),
    limit: workloadScalingPolicyMemoryLimitToTerraform(struct!.limit),
  }
}


export function workloadScalingPolicyMemoryToHclTerraform(struct?: WorkloadScalingPolicyMemoryOutputReference | WorkloadScalingPolicyMemory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apply_threshold: {
      value: cdktf.numberToHclTerraform(struct!.applyThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    function: {
      value: cdktf.stringToHclTerraform(struct!.function),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    look_back_period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.lookBackPeriodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    management_option: {
      value: cdktf.stringToHclTerraform(struct!.managementOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    overhead: {
      value: cdktf.numberToHclTerraform(struct!.overhead),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    apply_threshold_strategy: {
      value: workloadScalingPolicyMemoryApplyThresholdStrategyToHclTerraform(struct!.applyThresholdStrategy),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadScalingPolicyMemoryApplyThresholdStrategyList",
    },
    limit: {
      value: workloadScalingPolicyMemoryLimitToHclTerraform(struct!.limit),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadScalingPolicyMemoryLimitList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadScalingPolicyMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkloadScalingPolicyMemory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyThreshold = this._applyThreshold;
    }
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._function !== undefined) {
      hasAnyValues = true;
      internalValueResult.function = this._function;
    }
    if (this._lookBackPeriodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookBackPeriodSeconds = this._lookBackPeriodSeconds;
    }
    if (this._managementOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementOption = this._managementOption;
    }
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    if (this._overhead !== undefined) {
      hasAnyValues = true;
      internalValueResult.overhead = this._overhead;
    }
    if (this._applyThresholdStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyThresholdStrategy = this._applyThresholdStrategy?.internalValue;
    }
    if (this._limit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadScalingPolicyMemory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applyThreshold = undefined;
      this._args = undefined;
      this._function = undefined;
      this._lookBackPeriodSeconds = undefined;
      this._managementOption = undefined;
      this._max = undefined;
      this._min = undefined;
      this._overhead = undefined;
      this._applyThresholdStrategy.internalValue = undefined;
      this._limit.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applyThreshold = value.applyThreshold;
      this._args = value.args;
      this._function = value.function;
      this._lookBackPeriodSeconds = value.lookBackPeriodSeconds;
      this._managementOption = value.managementOption;
      this._max = value.max;
      this._min = value.min;
      this._overhead = value.overhead;
      this._applyThresholdStrategy.internalValue = value.applyThresholdStrategy;
      this._limit.internalValue = value.limit;
    }
  }

  // apply_threshold - computed: false, optional: true, required: false
  private _applyThreshold?: number; 
  public get applyThreshold() {
    return this.getNumberAttribute('apply_threshold');
  }
  public set applyThreshold(value: number) {
    this._applyThreshold = value;
  }
  public resetApplyThreshold() {
    this._applyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyThresholdInput() {
    return this._applyThreshold;
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // function - computed: false, optional: true, required: false
  private _function?: string; 
  public get function() {
    return this.getStringAttribute('function');
  }
  public set function(value: string) {
    this._function = value;
  }
  public resetFunction() {
    this._function = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionInput() {
    return this._function;
  }

  // look_back_period_seconds - computed: false, optional: true, required: false
  private _lookBackPeriodSeconds?: number; 
  public get lookBackPeriodSeconds() {
    return this.getNumberAttribute('look_back_period_seconds');
  }
  public set lookBackPeriodSeconds(value: number) {
    this._lookBackPeriodSeconds = value;
  }
  public resetLookBackPeriodSeconds() {
    this._lookBackPeriodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookBackPeriodSecondsInput() {
    return this._lookBackPeriodSeconds;
  }

  // management_option - computed: false, optional: true, required: false
  private _managementOption?: string; 
  public get managementOption() {
    return this.getStringAttribute('management_option');
  }
  public set managementOption(value: string) {
    this._managementOption = value;
  }
  public resetManagementOption() {
    this._managementOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementOptionInput() {
    return this._managementOption;
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }

  // overhead - computed: false, optional: true, required: false
  private _overhead?: number; 
  public get overhead() {
    return this.getNumberAttribute('overhead');
  }
  public set overhead(value: number) {
    this._overhead = value;
  }
  public resetOverhead() {
    this._overhead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overheadInput() {
    return this._overhead;
  }

  // apply_threshold_strategy - computed: false, optional: true, required: false
  private _applyThresholdStrategy = new WorkloadScalingPolicyMemoryApplyThresholdStrategyOutputReference(this, "apply_threshold_strategy");
  public get applyThresholdStrategy() {
    return this._applyThresholdStrategy;
  }
  public putApplyThresholdStrategy(value: WorkloadScalingPolicyMemoryApplyThresholdStrategy) {
    this._applyThresholdStrategy.internalValue = value;
  }
  public resetApplyThresholdStrategy() {
    this._applyThresholdStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyThresholdStrategyInput() {
    return this._applyThresholdStrategy.internalValue;
  }

  // limit - computed: false, optional: true, required: false
  private _limit = new WorkloadScalingPolicyMemoryLimitOutputReference(this, "limit");
  public get limit() {
    return this._limit;
  }
  public putLimit(value: WorkloadScalingPolicyMemoryLimit) {
    this._limit.internalValue = value;
  }
  public resetLimit() {
    this._limit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit.internalValue;
  }
}
export interface WorkloadScalingPolicyMemoryEvent {
  /**
  * Defines the apply type to be used when applying recommendation for memory related event.
  * 	- IMMEDIATE - pods are restarted immediately when new recommendation is generated.
  * 	- DEFERRED - pods are not restarted and recommendation values are applied during natural restarts only (new deployment, etc.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#apply_type WorkloadScalingPolicy#apply_type}
  */
  readonly applyType?: string;
}

export function workloadScalingPolicyMemoryEventToTerraform(struct?: WorkloadScalingPolicyMemoryEventOutputReference | WorkloadScalingPolicyMemoryEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apply_type: cdktf.stringToTerraform(struct!.applyType),
  }
}


export function workloadScalingPolicyMemoryEventToHclTerraform(struct?: WorkloadScalingPolicyMemoryEventOutputReference | WorkloadScalingPolicyMemoryEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apply_type: {
      value: cdktf.stringToHclTerraform(struct!.applyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadScalingPolicyMemoryEventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkloadScalingPolicyMemoryEvent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyType = this._applyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadScalingPolicyMemoryEvent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applyType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applyType = value.applyType;
    }
  }

  // apply_type - computed: false, optional: true, required: false
  private _applyType?: string; 
  public get applyType() {
    return this.getStringAttribute('apply_type');
  }
  public set applyType(value: string) {
    this._applyType = value;
  }
  public resetApplyType() {
    this._applyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyTypeInput() {
    return this._applyType;
  }
}
export interface WorkloadScalingPolicyPredictiveScalingCpu {
  /**
  * Defines if predictive scaling is enabled for resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#enabled WorkloadScalingPolicy#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function workloadScalingPolicyPredictiveScalingCpuToTerraform(struct?: WorkloadScalingPolicyPredictiveScalingCpuOutputReference | WorkloadScalingPolicyPredictiveScalingCpu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function workloadScalingPolicyPredictiveScalingCpuToHclTerraform(struct?: WorkloadScalingPolicyPredictiveScalingCpuOutputReference | WorkloadScalingPolicyPredictiveScalingCpu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadScalingPolicyPredictiveScalingCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkloadScalingPolicyPredictiveScalingCpu | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadScalingPolicyPredictiveScalingCpu | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
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
}
export interface WorkloadScalingPolicyPredictiveScaling {
  /**
  * cpu block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#cpu WorkloadScalingPolicy#cpu}
  */
  readonly cpu?: WorkloadScalingPolicyPredictiveScalingCpu;
}

export function workloadScalingPolicyPredictiveScalingToTerraform(struct?: WorkloadScalingPolicyPredictiveScalingOutputReference | WorkloadScalingPolicyPredictiveScaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: workloadScalingPolicyPredictiveScalingCpuToTerraform(struct!.cpu),
  }
}


export function workloadScalingPolicyPredictiveScalingToHclTerraform(struct?: WorkloadScalingPolicyPredictiveScalingOutputReference | WorkloadScalingPolicyPredictiveScaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: workloadScalingPolicyPredictiveScalingCpuToHclTerraform(struct!.cpu),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadScalingPolicyPredictiveScalingCpuList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadScalingPolicyPredictiveScalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkloadScalingPolicyPredictiveScaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadScalingPolicyPredictiveScaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu.internalValue = value.cpu;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu = new WorkloadScalingPolicyPredictiveScalingCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: WorkloadScalingPolicyPredictiveScalingCpu) {
    this._cpu.internalValue = value;
  }
  public resetCpu() {
    this._cpu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu.internalValue;
  }
}
export interface WorkloadScalingPolicyRolloutBehavior {
  /**
  * Defines if pods should be restarted one by one to avoid service disruption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#prefer_one_by_one WorkloadScalingPolicy#prefer_one_by_one}
  */
  readonly preferOneByOne?: boolean | cdktf.IResolvable;
  /**
  * Defines the rollout type to be used when applying recommendations.
  * 	- NO_DISRUPTION - pods are restarted without causing service disruption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#type WorkloadScalingPolicy#type}
  */
  readonly type?: string;
}

export function workloadScalingPolicyRolloutBehaviorToTerraform(struct?: WorkloadScalingPolicyRolloutBehaviorOutputReference | WorkloadScalingPolicyRolloutBehavior): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefer_one_by_one: cdktf.booleanToTerraform(struct!.preferOneByOne),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function workloadScalingPolicyRolloutBehaviorToHclTerraform(struct?: WorkloadScalingPolicyRolloutBehaviorOutputReference | WorkloadScalingPolicyRolloutBehavior): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefer_one_by_one: {
      value: cdktf.booleanToHclTerraform(struct!.preferOneByOne),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class WorkloadScalingPolicyRolloutBehaviorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkloadScalingPolicyRolloutBehavior | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferOneByOne !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferOneByOne = this._preferOneByOne;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadScalingPolicyRolloutBehavior | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preferOneByOne = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._preferOneByOne = value.preferOneByOne;
      this._type = value.type;
    }
  }

  // prefer_one_by_one - computed: false, optional: true, required: false
  private _preferOneByOne?: boolean | cdktf.IResolvable; 
  public get preferOneByOne() {
    return this.getBooleanAttribute('prefer_one_by_one');
  }
  public set preferOneByOne(value: boolean | cdktf.IResolvable) {
    this._preferOneByOne = value;
  }
  public resetPreferOneByOne() {
    this._preferOneByOne = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferOneByOneInput() {
    return this._preferOneByOne;
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
export interface WorkloadScalingPolicyStartup {
  /**
  * Defines the duration (in seconds) during which elevated resource usage is expected at startup.
  * When set, recommendations will be adjusted to disregard resource spikes within this period.
  * If not specified, the workload will receive standard recommendations without startup considerations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#period_seconds WorkloadScalingPolicy#period_seconds}
  */
  readonly periodSeconds?: number;
}

export function workloadScalingPolicyStartupToTerraform(struct?: WorkloadScalingPolicyStartupOutputReference | WorkloadScalingPolicyStartup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
  }
}


export function workloadScalingPolicyStartupToHclTerraform(struct?: WorkloadScalingPolicyStartupOutputReference | WorkloadScalingPolicyStartup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.periodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadScalingPolicyStartupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkloadScalingPolicyStartup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadScalingPolicyStartup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._periodSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._periodSeconds = value.periodSeconds;
    }
  }

  // period_seconds - computed: false, optional: true, required: false
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
  }
}
export interface WorkloadScalingPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#create WorkloadScalingPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#delete WorkloadScalingPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#read WorkloadScalingPolicy#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#update WorkloadScalingPolicy#update}
  */
  readonly update?: string;
}

export function workloadScalingPolicyTimeoutsToTerraform(struct?: WorkloadScalingPolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function workloadScalingPolicyTimeoutsToHclTerraform(struct?: WorkloadScalingPolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadScalingPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkloadScalingPolicyTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadScalingPolicyTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy castai_workload_scaling_policy}
*/
export class WorkloadScalingPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "castai_workload_scaling_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkloadScalingPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkloadScalingPolicy to import
  * @param importFromId The id of the existing WorkloadScalingPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkloadScalingPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "castai_workload_scaling_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/castai/castai/8.2.1/docs/resources/workload_scaling_policy castai_workload_scaling_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkloadScalingPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: WorkloadScalingPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'castai_workload_scaling_policy',
      terraformGeneratorMetadata: {
        providerName: 'castai',
        providerVersion: '8.2.1',
        providerVersionConstraint: '8.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applyType = config.applyType;
    this._clusterId = config.clusterId;
    this._id = config.id;
    this._managementOption = config.managementOption;
    this._name = config.name;
    this._antiAffinity.internalValue = config.antiAffinity;
    this._assignmentRules.internalValue = config.assignmentRules;
    this._confidence.internalValue = config.confidence;
    this._cpu.internalValue = config.cpu;
    this._downscaling.internalValue = config.downscaling;
    this._memory.internalValue = config.memory;
    this._memoryEvent.internalValue = config.memoryEvent;
    this._predictiveScaling.internalValue = config.predictiveScaling;
    this._rolloutBehavior.internalValue = config.rolloutBehavior;
    this._startup.internalValue = config.startup;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apply_type - computed: false, optional: false, required: true
  private _applyType?: string; 
  public get applyType() {
    return this.getStringAttribute('apply_type');
  }
  public set applyType(value: string) {
    this._applyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applyTypeInput() {
    return this._applyType;
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // management_option - computed: false, optional: false, required: true
  private _managementOption?: string; 
  public get managementOption() {
    return this.getStringAttribute('management_option');
  }
  public set managementOption(value: string) {
    this._managementOption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementOptionInput() {
    return this._managementOption;
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

  // anti_affinity - computed: false, optional: true, required: false
  private _antiAffinity = new WorkloadScalingPolicyAntiAffinityOutputReference(this, "anti_affinity");
  public get antiAffinity() {
    return this._antiAffinity;
  }
  public putAntiAffinity(value: WorkloadScalingPolicyAntiAffinity) {
    this._antiAffinity.internalValue = value;
  }
  public resetAntiAffinity() {
    this._antiAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiAffinityInput() {
    return this._antiAffinity.internalValue;
  }

  // assignment_rules - computed: false, optional: true, required: false
  private _assignmentRules = new WorkloadScalingPolicyAssignmentRulesList(this, "assignment_rules", false);
  public get assignmentRules() {
    return this._assignmentRules;
  }
  public putAssignmentRules(value: WorkloadScalingPolicyAssignmentRules[] | cdktf.IResolvable) {
    this._assignmentRules.internalValue = value;
  }
  public resetAssignmentRules() {
    this._assignmentRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignmentRulesInput() {
    return this._assignmentRules.internalValue;
  }

  // confidence - computed: false, optional: true, required: false
  private _confidence = new WorkloadScalingPolicyConfidenceOutputReference(this, "confidence");
  public get confidence() {
    return this._confidence;
  }
  public putConfidence(value: WorkloadScalingPolicyConfidence) {
    this._confidence.internalValue = value;
  }
  public resetConfidence() {
    this._confidence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidenceInput() {
    return this._confidence.internalValue;
  }

  // cpu - computed: false, optional: false, required: true
  private _cpu = new WorkloadScalingPolicyCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: WorkloadScalingPolicyCpu) {
    this._cpu.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu.internalValue;
  }

  // downscaling - computed: false, optional: true, required: false
  private _downscaling = new WorkloadScalingPolicyDownscalingOutputReference(this, "downscaling");
  public get downscaling() {
    return this._downscaling;
  }
  public putDownscaling(value: WorkloadScalingPolicyDownscaling) {
    this._downscaling.internalValue = value;
  }
  public resetDownscaling() {
    this._downscaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downscalingInput() {
    return this._downscaling.internalValue;
  }

  // memory - computed: false, optional: false, required: true
  private _memory = new WorkloadScalingPolicyMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }
  public putMemory(value: WorkloadScalingPolicyMemory) {
    this._memory.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory.internalValue;
  }

  // memory_event - computed: false, optional: true, required: false
  private _memoryEvent = new WorkloadScalingPolicyMemoryEventOutputReference(this, "memory_event");
  public get memoryEvent() {
    return this._memoryEvent;
  }
  public putMemoryEvent(value: WorkloadScalingPolicyMemoryEvent) {
    this._memoryEvent.internalValue = value;
  }
  public resetMemoryEvent() {
    this._memoryEvent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryEventInput() {
    return this._memoryEvent.internalValue;
  }

  // predictive_scaling - computed: false, optional: true, required: false
  private _predictiveScaling = new WorkloadScalingPolicyPredictiveScalingOutputReference(this, "predictive_scaling");
  public get predictiveScaling() {
    return this._predictiveScaling;
  }
  public putPredictiveScaling(value: WorkloadScalingPolicyPredictiveScaling) {
    this._predictiveScaling.internalValue = value;
  }
  public resetPredictiveScaling() {
    this._predictiveScaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predictiveScalingInput() {
    return this._predictiveScaling.internalValue;
  }

  // rollout_behavior - computed: false, optional: true, required: false
  private _rolloutBehavior = new WorkloadScalingPolicyRolloutBehaviorOutputReference(this, "rollout_behavior");
  public get rolloutBehavior() {
    return this._rolloutBehavior;
  }
  public putRolloutBehavior(value: WorkloadScalingPolicyRolloutBehavior) {
    this._rolloutBehavior.internalValue = value;
  }
  public resetRolloutBehavior() {
    this._rolloutBehavior.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolloutBehaviorInput() {
    return this._rolloutBehavior.internalValue;
  }

  // startup - computed: false, optional: true, required: false
  private _startup = new WorkloadScalingPolicyStartupOutputReference(this, "startup");
  public get startup() {
    return this._startup;
  }
  public putStartup(value: WorkloadScalingPolicyStartup) {
    this._startup.internalValue = value;
  }
  public resetStartup() {
    this._startup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupInput() {
    return this._startup.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new WorkloadScalingPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: WorkloadScalingPolicyTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apply_type: cdktf.stringToTerraform(this._applyType),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      management_option: cdktf.stringToTerraform(this._managementOption),
      name: cdktf.stringToTerraform(this._name),
      anti_affinity: workloadScalingPolicyAntiAffinityToTerraform(this._antiAffinity.internalValue),
      assignment_rules: cdktf.listMapper(workloadScalingPolicyAssignmentRulesToTerraform, true)(this._assignmentRules.internalValue),
      confidence: workloadScalingPolicyConfidenceToTerraform(this._confidence.internalValue),
      cpu: workloadScalingPolicyCpuToTerraform(this._cpu.internalValue),
      downscaling: workloadScalingPolicyDownscalingToTerraform(this._downscaling.internalValue),
      memory: workloadScalingPolicyMemoryToTerraform(this._memory.internalValue),
      memory_event: workloadScalingPolicyMemoryEventToTerraform(this._memoryEvent.internalValue),
      predictive_scaling: workloadScalingPolicyPredictiveScalingToTerraform(this._predictiveScaling.internalValue),
      rollout_behavior: workloadScalingPolicyRolloutBehaviorToTerraform(this._rolloutBehavior.internalValue),
      startup: workloadScalingPolicyStartupToTerraform(this._startup.internalValue),
      timeouts: workloadScalingPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apply_type: {
        value: cdktf.stringToHclTerraform(this._applyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      management_option: {
        value: cdktf.stringToHclTerraform(this._managementOption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      anti_affinity: {
        value: workloadScalingPolicyAntiAffinityToHclTerraform(this._antiAffinity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkloadScalingPolicyAntiAffinityList",
      },
      assignment_rules: {
        value: cdktf.listMapperHcl(workloadScalingPolicyAssignmentRulesToHclTerraform, true)(this._assignmentRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkloadScalingPolicyAssignmentRulesList",
      },
      confidence: {
        value: workloadScalingPolicyConfidenceToHclTerraform(this._confidence.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkloadScalingPolicyConfidenceList",
      },
      cpu: {
        value: workloadScalingPolicyCpuToHclTerraform(this._cpu.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkloadScalingPolicyCpuList",
      },
      downscaling: {
        value: workloadScalingPolicyDownscalingToHclTerraform(this._downscaling.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkloadScalingPolicyDownscalingList",
      },
      memory: {
        value: workloadScalingPolicyMemoryToHclTerraform(this._memory.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkloadScalingPolicyMemoryList",
      },
      memory_event: {
        value: workloadScalingPolicyMemoryEventToHclTerraform(this._memoryEvent.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkloadScalingPolicyMemoryEventList",
      },
      predictive_scaling: {
        value: workloadScalingPolicyPredictiveScalingToHclTerraform(this._predictiveScaling.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkloadScalingPolicyPredictiveScalingList",
      },
      rollout_behavior: {
        value: workloadScalingPolicyRolloutBehaviorToHclTerraform(this._rolloutBehavior.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkloadScalingPolicyRolloutBehaviorList",
      },
      startup: {
        value: workloadScalingPolicyStartupToHclTerraform(this._startup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkloadScalingPolicyStartupList",
      },
      timeouts: {
        value: workloadScalingPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkloadScalingPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
