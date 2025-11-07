// https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_autoscaler
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterAutoscalerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Automatically identify node groups with the same instance type and the same set of labels and try to keep the respective sizes of those node groups balanced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_autoscaler#balance_similar_node_groups ClusterAutoscaler#balance_similar_node_groups}
  */
  readonly balanceSimilarNodeGroups?: boolean | cdktf.IResolvable;
  /**
  * This option specifies labels that cluster autoscaler should ignore when considering node group similarity. For example, if you have nodes with 'topology.ebs.csi.aws.com/zone' label, you can add name of this label here to prevent cluster autoscaler from splitting nodes into different node groups based on its value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_autoscaler#balancing_ignored_labels ClusterAutoscaler#balancing_ignored_labels}
  */
  readonly balancingIgnoredLabels?: string[];
  /**
  * Identifier of the cluster.After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_autoscaler#cluster ClusterAutoscaler#cluster}
  */
  readonly cluster: string;
  /**
  * Should cluster-autoscaler ignore DaemonSet pods when calculating resource utilization for scaling down. false by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_autoscaler#ignore_daemonsets_utilization ClusterAutoscaler#ignore_daemonsets_utilization}
  */
  readonly ignoreDaemonsetsUtilization?: boolean | cdktf.IResolvable;
  /**
  * Sets the autoscaler log level. Default value is 1, level 4 is recommended for DEBUGGING and level 6 will enable almost everything.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_autoscaler#log_verbosity ClusterAutoscaler#log_verbosity}
  */
  readonly logVerbosity?: number;
  /**
  * Maximum time cluster-autoscaler waits for node to be provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_autoscaler#max_node_provision_time ClusterAutoscaler#max_node_provision_time}
  */
  readonly maxNodeProvisionTime?: string;
  /**
  * Gives pods graceful termination time before scaling down.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_autoscaler#max_pod_grace_period ClusterAutoscaler#max_pod_grace_period}
  */
  readonly maxPodGracePeriod?: number;
  /**
  * To allow users to schedule 'best-effort' pods, which shouldn't trigger Cluster Autoscaler actions, but only run when there are spare resources available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_autoscaler#pod_priority_threshold ClusterAutoscaler#pod_priority_threshold}
  */
  readonly podPriorityThreshold?: number;
  /**
  * Constraints of autoscaling resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_autoscaler#resource_limits ClusterAutoscaler#resource_limits}
  */
  readonly resourceLimits?: ClusterAutoscalerResourceLimits;
  /**
  * Configuration of scale down operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_autoscaler#scale_down ClusterAutoscaler#scale_down}
  */
  readonly scaleDown?: ClusterAutoscalerScaleDown;
  /**
  * If true cluster autoscaler will never delete nodes with pods with local storage, e.g. EmptyDir or HostPath. true by default at autoscaler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_autoscaler#skip_nodes_with_local_storage ClusterAutoscaler#skip_nodes_with_local_storage}
  */
  readonly skipNodesWithLocalStorage?: boolean | cdktf.IResolvable;
}
export interface ClusterAutoscalerResourceLimitsCores {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_autoscaler#max ClusterAutoscaler#max}
  */
  readonly max: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_autoscaler#min ClusterAutoscaler#min}
  */
  readonly min: number;
}

export function clusterAutoscalerResourceLimitsCoresToTerraform(struct?: ClusterAutoscalerResourceLimitsCores | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function clusterAutoscalerResourceLimitsCoresToHclTerraform(struct?: ClusterAutoscalerResourceLimitsCores | cdktf.IResolvable): any {
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

export class ClusterAutoscalerResourceLimitsCoresOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterAutoscalerResourceLimitsCores | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterAutoscalerResourceLimitsCores | cdktf.IResolvable | undefined) {
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
export interface ClusterAutoscalerResourceLimitsGpusRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_autoscaler#max ClusterAutoscaler#max}
  */
  readonly max: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_autoscaler#min ClusterAutoscaler#min}
  */
  readonly min: number;
}

export function clusterAutoscalerResourceLimitsGpusRangeToTerraform(struct?: ClusterAutoscalerResourceLimitsGpusRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function clusterAutoscalerResourceLimitsGpusRangeToHclTerraform(struct?: ClusterAutoscalerResourceLimitsGpusRange | cdktf.IResolvable): any {
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

export class ClusterAutoscalerResourceLimitsGpusRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterAutoscalerResourceLimitsGpusRange | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterAutoscalerResourceLimitsGpusRange | cdktf.IResolvable | undefined) {
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
export interface ClusterAutoscalerResourceLimitsGpus {
  /**
  * limit number of GPU type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_autoscaler#range ClusterAutoscaler#range}
  */
  readonly range: ClusterAutoscalerResourceLimitsGpusRange;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_autoscaler#type ClusterAutoscaler#type}
  */
  readonly type: string;
}

export function clusterAutoscalerResourceLimitsGpusToTerraform(struct?: ClusterAutoscalerResourceLimitsGpus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range: clusterAutoscalerResourceLimitsGpusRangeToTerraform(struct!.range),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function clusterAutoscalerResourceLimitsGpusToHclTerraform(struct?: ClusterAutoscalerResourceLimitsGpus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    range: {
      value: clusterAutoscalerResourceLimitsGpusRangeToHclTerraform(struct!.range),
      isBlock: true,
      type: "struct",
      storageClassType: "ClusterAutoscalerResourceLimitsGpusRange",
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

export class ClusterAutoscalerResourceLimitsGpusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterAutoscalerResourceLimitsGpus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._range?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterAutoscalerResourceLimitsGpus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._range.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._range.internalValue = value.range;
      this._type = value.type;
    }
  }

  // range - computed: false, optional: false, required: true
  private _range = new ClusterAutoscalerResourceLimitsGpusRangeOutputReference(this, "range");
  public get range() {
    return this._range;
  }
  public putRange(value: ClusterAutoscalerResourceLimitsGpusRange) {
    this._range.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range.internalValue;
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

export class ClusterAutoscalerResourceLimitsGpusList extends cdktf.ComplexList {
  public internalValue? : ClusterAutoscalerResourceLimitsGpus[] | cdktf.IResolvable

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
  public get(index: number): ClusterAutoscalerResourceLimitsGpusOutputReference {
    return new ClusterAutoscalerResourceLimitsGpusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterAutoscalerResourceLimitsMemory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_autoscaler#max ClusterAutoscaler#max}
  */
  readonly max: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_autoscaler#min ClusterAutoscaler#min}
  */
  readonly min: number;
}

export function clusterAutoscalerResourceLimitsMemoryToTerraform(struct?: ClusterAutoscalerResourceLimitsMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function clusterAutoscalerResourceLimitsMemoryToHclTerraform(struct?: ClusterAutoscalerResourceLimitsMemory | cdktf.IResolvable): any {
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

export class ClusterAutoscalerResourceLimitsMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterAutoscalerResourceLimitsMemory | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterAutoscalerResourceLimitsMemory | cdktf.IResolvable | undefined) {
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
export interface ClusterAutoscalerResourceLimits {
  /**
  * Minimum and maximum number of cores in cluster, in the format <min>:<max>. Cluster autoscaler will not scale the cluster beyond these numbers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_autoscaler#cores ClusterAutoscaler#cores}
  */
  readonly cores?: ClusterAutoscalerResourceLimitsCores;
  /**
  * Minimum and maximum number of different GPUs in cluster, in the format <gpu_type>:<min>:<max>. Cluster autoscaler will not scale the cluster beyond these numbers. Can be passed multiple times.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_autoscaler#gpus ClusterAutoscaler#gpus}
  */
  readonly gpus?: ClusterAutoscalerResourceLimitsGpus[] | cdktf.IResolvable;
  /**
  * Maximum number of nodes in all node groups. Cluster autoscaler will not grow the cluster beyond this number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_autoscaler#max_nodes_total ClusterAutoscaler#max_nodes_total}
  */
  readonly maxNodesTotal?: number;
  /**
  * Minimum and maximum number of gigabytes of memory in cluster, in the format <min>:<max>. Cluster autoscaler will not scale the cluster beyond these numbers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_autoscaler#memory ClusterAutoscaler#memory}
  */
  readonly memory?: ClusterAutoscalerResourceLimitsMemory;
}

export function clusterAutoscalerResourceLimitsToTerraform(struct?: ClusterAutoscalerResourceLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cores: clusterAutoscalerResourceLimitsCoresToTerraform(struct!.cores),
    gpus: cdktf.listMapper(clusterAutoscalerResourceLimitsGpusToTerraform, false)(struct!.gpus),
    max_nodes_total: cdktf.numberToTerraform(struct!.maxNodesTotal),
    memory: clusterAutoscalerResourceLimitsMemoryToTerraform(struct!.memory),
  }
}


export function clusterAutoscalerResourceLimitsToHclTerraform(struct?: ClusterAutoscalerResourceLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cores: {
      value: clusterAutoscalerResourceLimitsCoresToHclTerraform(struct!.cores),
      isBlock: true,
      type: "struct",
      storageClassType: "ClusterAutoscalerResourceLimitsCores",
    },
    gpus: {
      value: cdktf.listMapperHcl(clusterAutoscalerResourceLimitsGpusToHclTerraform, false)(struct!.gpus),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterAutoscalerResourceLimitsGpusList",
    },
    max_nodes_total: {
      value: cdktf.numberToHclTerraform(struct!.maxNodesTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory: {
      value: clusterAutoscalerResourceLimitsMemoryToHclTerraform(struct!.memory),
      isBlock: true,
      type: "struct",
      storageClassType: "ClusterAutoscalerResourceLimitsMemory",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterAutoscalerResourceLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterAutoscalerResourceLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cores?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cores = this._cores?.internalValue;
    }
    if (this._gpus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpus = this._gpus?.internalValue;
    }
    if (this._maxNodesTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNodesTotal = this._maxNodesTotal;
    }
    if (this._memory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterAutoscalerResourceLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cores.internalValue = undefined;
      this._gpus.internalValue = undefined;
      this._maxNodesTotal = undefined;
      this._memory.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cores.internalValue = value.cores;
      this._gpus.internalValue = value.gpus;
      this._maxNodesTotal = value.maxNodesTotal;
      this._memory.internalValue = value.memory;
    }
  }

  // cores - computed: false, optional: true, required: false
  private _cores = new ClusterAutoscalerResourceLimitsCoresOutputReference(this, "cores");
  public get cores() {
    return this._cores;
  }
  public putCores(value: ClusterAutoscalerResourceLimitsCores) {
    this._cores.internalValue = value;
  }
  public resetCores() {
    this._cores.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coresInput() {
    return this._cores.internalValue;
  }

  // gpus - computed: false, optional: true, required: false
  private _gpus = new ClusterAutoscalerResourceLimitsGpusList(this, "gpus", false);
  public get gpus() {
    return this._gpus;
  }
  public putGpus(value: ClusterAutoscalerResourceLimitsGpus[] | cdktf.IResolvable) {
    this._gpus.internalValue = value;
  }
  public resetGpus() {
    this._gpus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpusInput() {
    return this._gpus.internalValue;
  }

  // max_nodes_total - computed: false, optional: true, required: false
  private _maxNodesTotal?: number; 
  public get maxNodesTotal() {
    return this.getNumberAttribute('max_nodes_total');
  }
  public set maxNodesTotal(value: number) {
    this._maxNodesTotal = value;
  }
  public resetMaxNodesTotal() {
    this._maxNodesTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNodesTotalInput() {
    return this._maxNodesTotal;
  }

  // memory - computed: false, optional: true, required: false
  private _memory = new ClusterAutoscalerResourceLimitsMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }
  public putMemory(value: ClusterAutoscalerResourceLimitsMemory) {
    this._memory.internalValue = value;
  }
  public resetMemory() {
    this._memory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory.internalValue;
  }
}
export interface ClusterAutoscalerScaleDown {
  /**
  * How long after scale up that scale down evaluation resumes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_autoscaler#delay_after_add ClusterAutoscaler#delay_after_add}
  */
  readonly delayAfterAdd?: string;
  /**
  * How long after node deletion that scale down evaluation resumes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_autoscaler#delay_after_delete ClusterAutoscaler#delay_after_delete}
  */
  readonly delayAfterDelete?: string;
  /**
  * How long after scale down failure that scale down evaluation resumes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_autoscaler#delay_after_failure ClusterAutoscaler#delay_after_failure}
  */
  readonly delayAfterFailure?: string;
  /**
  * Should cluster-autoscaler scale down the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_autoscaler#enabled ClusterAutoscaler#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * How long a node should be unneeded before it is eligible for scale down.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_autoscaler#unneeded_time ClusterAutoscaler#unneeded_time}
  */
  readonly unneededTime?: string;
  /**
  * Node utilization level, defined as sum of requested resources divided by capacity, below which a node can be considered for scale down.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_autoscaler#utilization_threshold ClusterAutoscaler#utilization_threshold}
  */
  readonly utilizationThreshold?: string;
}

export function clusterAutoscalerScaleDownToTerraform(struct?: ClusterAutoscalerScaleDown | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delay_after_add: cdktf.stringToTerraform(struct!.delayAfterAdd),
    delay_after_delete: cdktf.stringToTerraform(struct!.delayAfterDelete),
    delay_after_failure: cdktf.stringToTerraform(struct!.delayAfterFailure),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    unneeded_time: cdktf.stringToTerraform(struct!.unneededTime),
    utilization_threshold: cdktf.stringToTerraform(struct!.utilizationThreshold),
  }
}


export function clusterAutoscalerScaleDownToHclTerraform(struct?: ClusterAutoscalerScaleDown | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delay_after_add: {
      value: cdktf.stringToHclTerraform(struct!.delayAfterAdd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delay_after_delete: {
      value: cdktf.stringToHclTerraform(struct!.delayAfterDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delay_after_failure: {
      value: cdktf.stringToHclTerraform(struct!.delayAfterFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unneeded_time: {
      value: cdktf.stringToHclTerraform(struct!.unneededTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    utilization_threshold: {
      value: cdktf.stringToHclTerraform(struct!.utilizationThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterAutoscalerScaleDownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterAutoscalerScaleDown | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delayAfterAdd !== undefined) {
      hasAnyValues = true;
      internalValueResult.delayAfterAdd = this._delayAfterAdd;
    }
    if (this._delayAfterDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delayAfterDelete = this._delayAfterDelete;
    }
    if (this._delayAfterFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.delayAfterFailure = this._delayAfterFailure;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._unneededTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.unneededTime = this._unneededTime;
    }
    if (this._utilizationThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.utilizationThreshold = this._utilizationThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterAutoscalerScaleDown | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delayAfterAdd = undefined;
      this._delayAfterDelete = undefined;
      this._delayAfterFailure = undefined;
      this._enabled = undefined;
      this._unneededTime = undefined;
      this._utilizationThreshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delayAfterAdd = value.delayAfterAdd;
      this._delayAfterDelete = value.delayAfterDelete;
      this._delayAfterFailure = value.delayAfterFailure;
      this._enabled = value.enabled;
      this._unneededTime = value.unneededTime;
      this._utilizationThreshold = value.utilizationThreshold;
    }
  }

  // delay_after_add - computed: false, optional: true, required: false
  private _delayAfterAdd?: string; 
  public get delayAfterAdd() {
    return this.getStringAttribute('delay_after_add');
  }
  public set delayAfterAdd(value: string) {
    this._delayAfterAdd = value;
  }
  public resetDelayAfterAdd() {
    this._delayAfterAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayAfterAddInput() {
    return this._delayAfterAdd;
  }

  // delay_after_delete - computed: false, optional: true, required: false
  private _delayAfterDelete?: string; 
  public get delayAfterDelete() {
    return this.getStringAttribute('delay_after_delete');
  }
  public set delayAfterDelete(value: string) {
    this._delayAfterDelete = value;
  }
  public resetDelayAfterDelete() {
    this._delayAfterDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayAfterDeleteInput() {
    return this._delayAfterDelete;
  }

  // delay_after_failure - computed: false, optional: true, required: false
  private _delayAfterFailure?: string; 
  public get delayAfterFailure() {
    return this.getStringAttribute('delay_after_failure');
  }
  public set delayAfterFailure(value: string) {
    this._delayAfterFailure = value;
  }
  public resetDelayAfterFailure() {
    this._delayAfterFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayAfterFailureInput() {
    return this._delayAfterFailure;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // unneeded_time - computed: false, optional: true, required: false
  private _unneededTime?: string; 
  public get unneededTime() {
    return this.getStringAttribute('unneeded_time');
  }
  public set unneededTime(value: string) {
    this._unneededTime = value;
  }
  public resetUnneededTime() {
    this._unneededTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unneededTimeInput() {
    return this._unneededTime;
  }

  // utilization_threshold - computed: false, optional: true, required: false
  private _utilizationThreshold?: string; 
  public get utilizationThreshold() {
    return this.getStringAttribute('utilization_threshold');
  }
  public set utilizationThreshold(value: string) {
    this._utilizationThreshold = value;
  }
  public resetUtilizationThreshold() {
    this._utilizationThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utilizationThresholdInput() {
    return this._utilizationThreshold;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_autoscaler rhcs_cluster_autoscaler}
*/
export class ClusterAutoscaler extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rhcs_cluster_autoscaler";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClusterAutoscaler resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClusterAutoscaler to import
  * @param importFromId The id of the existing ClusterAutoscaler that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_autoscaler#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClusterAutoscaler to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rhcs_cluster_autoscaler", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/cluster_autoscaler rhcs_cluster_autoscaler} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterAutoscalerConfig
  */
  public constructor(scope: Construct, id: string, config: ClusterAutoscalerConfig) {
    super(scope, id, {
      terraformResourceType: 'rhcs_cluster_autoscaler',
      terraformGeneratorMetadata: {
        providerName: 'rhcs',
        providerVersion: '1.7.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._balanceSimilarNodeGroups = config.balanceSimilarNodeGroups;
    this._balancingIgnoredLabels = config.balancingIgnoredLabels;
    this._cluster = config.cluster;
    this._ignoreDaemonsetsUtilization = config.ignoreDaemonsetsUtilization;
    this._logVerbosity = config.logVerbosity;
    this._maxNodeProvisionTime = config.maxNodeProvisionTime;
    this._maxPodGracePeriod = config.maxPodGracePeriod;
    this._podPriorityThreshold = config.podPriorityThreshold;
    this._resourceLimits.internalValue = config.resourceLimits;
    this._scaleDown.internalValue = config.scaleDown;
    this._skipNodesWithLocalStorage = config.skipNodesWithLocalStorage;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // balance_similar_node_groups - computed: false, optional: true, required: false
  private _balanceSimilarNodeGroups?: boolean | cdktf.IResolvable; 
  public get balanceSimilarNodeGroups() {
    return this.getBooleanAttribute('balance_similar_node_groups');
  }
  public set balanceSimilarNodeGroups(value: boolean | cdktf.IResolvable) {
    this._balanceSimilarNodeGroups = value;
  }
  public resetBalanceSimilarNodeGroups() {
    this._balanceSimilarNodeGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get balanceSimilarNodeGroupsInput() {
    return this._balanceSimilarNodeGroups;
  }

  // balancing_ignored_labels - computed: false, optional: true, required: false
  private _balancingIgnoredLabels?: string[]; 
  public get balancingIgnoredLabels() {
    return this.getListAttribute('balancing_ignored_labels');
  }
  public set balancingIgnoredLabels(value: string[]) {
    this._balancingIgnoredLabels = value;
  }
  public resetBalancingIgnoredLabels() {
    this._balancingIgnoredLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get balancingIgnoredLabelsInput() {
    return this._balancingIgnoredLabels;
  }

  // cluster - computed: false, optional: false, required: true
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // ignore_daemonsets_utilization - computed: false, optional: true, required: false
  private _ignoreDaemonsetsUtilization?: boolean | cdktf.IResolvable; 
  public get ignoreDaemonsetsUtilization() {
    return this.getBooleanAttribute('ignore_daemonsets_utilization');
  }
  public set ignoreDaemonsetsUtilization(value: boolean | cdktf.IResolvable) {
    this._ignoreDaemonsetsUtilization = value;
  }
  public resetIgnoreDaemonsetsUtilization() {
    this._ignoreDaemonsetsUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreDaemonsetsUtilizationInput() {
    return this._ignoreDaemonsetsUtilization;
  }

  // log_verbosity - computed: false, optional: true, required: false
  private _logVerbosity?: number; 
  public get logVerbosity() {
    return this.getNumberAttribute('log_verbosity');
  }
  public set logVerbosity(value: number) {
    this._logVerbosity = value;
  }
  public resetLogVerbosity() {
    this._logVerbosity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logVerbosityInput() {
    return this._logVerbosity;
  }

  // max_node_provision_time - computed: false, optional: true, required: false
  private _maxNodeProvisionTime?: string; 
  public get maxNodeProvisionTime() {
    return this.getStringAttribute('max_node_provision_time');
  }
  public set maxNodeProvisionTime(value: string) {
    this._maxNodeProvisionTime = value;
  }
  public resetMaxNodeProvisionTime() {
    this._maxNodeProvisionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNodeProvisionTimeInput() {
    return this._maxNodeProvisionTime;
  }

  // max_pod_grace_period - computed: false, optional: true, required: false
  private _maxPodGracePeriod?: number; 
  public get maxPodGracePeriod() {
    return this.getNumberAttribute('max_pod_grace_period');
  }
  public set maxPodGracePeriod(value: number) {
    this._maxPodGracePeriod = value;
  }
  public resetMaxPodGracePeriod() {
    this._maxPodGracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPodGracePeriodInput() {
    return this._maxPodGracePeriod;
  }

  // pod_priority_threshold - computed: false, optional: true, required: false
  private _podPriorityThreshold?: number; 
  public get podPriorityThreshold() {
    return this.getNumberAttribute('pod_priority_threshold');
  }
  public set podPriorityThreshold(value: number) {
    this._podPriorityThreshold = value;
  }
  public resetPodPriorityThreshold() {
    this._podPriorityThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podPriorityThresholdInput() {
    return this._podPriorityThreshold;
  }

  // resource_limits - computed: false, optional: true, required: false
  private _resourceLimits = new ClusterAutoscalerResourceLimitsOutputReference(this, "resource_limits");
  public get resourceLimits() {
    return this._resourceLimits;
  }
  public putResourceLimits(value: ClusterAutoscalerResourceLimits) {
    this._resourceLimits.internalValue = value;
  }
  public resetResourceLimits() {
    this._resourceLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLimitsInput() {
    return this._resourceLimits.internalValue;
  }

  // scale_down - computed: false, optional: true, required: false
  private _scaleDown = new ClusterAutoscalerScaleDownOutputReference(this, "scale_down");
  public get scaleDown() {
    return this._scaleDown;
  }
  public putScaleDown(value: ClusterAutoscalerScaleDown) {
    this._scaleDown.internalValue = value;
  }
  public resetScaleDown() {
    this._scaleDown.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDownInput() {
    return this._scaleDown.internalValue;
  }

  // skip_nodes_with_local_storage - computed: false, optional: true, required: false
  private _skipNodesWithLocalStorage?: boolean | cdktf.IResolvable; 
  public get skipNodesWithLocalStorage() {
    return this.getBooleanAttribute('skip_nodes_with_local_storage');
  }
  public set skipNodesWithLocalStorage(value: boolean | cdktf.IResolvable) {
    this._skipNodesWithLocalStorage = value;
  }
  public resetSkipNodesWithLocalStorage() {
    this._skipNodesWithLocalStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipNodesWithLocalStorageInput() {
    return this._skipNodesWithLocalStorage;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      balance_similar_node_groups: cdktf.booleanToTerraform(this._balanceSimilarNodeGroups),
      balancing_ignored_labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._balancingIgnoredLabels),
      cluster: cdktf.stringToTerraform(this._cluster),
      ignore_daemonsets_utilization: cdktf.booleanToTerraform(this._ignoreDaemonsetsUtilization),
      log_verbosity: cdktf.numberToTerraform(this._logVerbosity),
      max_node_provision_time: cdktf.stringToTerraform(this._maxNodeProvisionTime),
      max_pod_grace_period: cdktf.numberToTerraform(this._maxPodGracePeriod),
      pod_priority_threshold: cdktf.numberToTerraform(this._podPriorityThreshold),
      resource_limits: clusterAutoscalerResourceLimitsToTerraform(this._resourceLimits.internalValue),
      scale_down: clusterAutoscalerScaleDownToTerraform(this._scaleDown.internalValue),
      skip_nodes_with_local_storage: cdktf.booleanToTerraform(this._skipNodesWithLocalStorage),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      balance_similar_node_groups: {
        value: cdktf.booleanToHclTerraform(this._balanceSimilarNodeGroups),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      balancing_ignored_labels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._balancingIgnoredLabels),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      cluster: {
        value: cdktf.stringToHclTerraform(this._cluster),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_daemonsets_utilization: {
        value: cdktf.booleanToHclTerraform(this._ignoreDaemonsetsUtilization),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_verbosity: {
        value: cdktf.numberToHclTerraform(this._logVerbosity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_node_provision_time: {
        value: cdktf.stringToHclTerraform(this._maxNodeProvisionTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_pod_grace_period: {
        value: cdktf.numberToHclTerraform(this._maxPodGracePeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pod_priority_threshold: {
        value: cdktf.numberToHclTerraform(this._podPriorityThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resource_limits: {
        value: clusterAutoscalerResourceLimitsToHclTerraform(this._resourceLimits.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClusterAutoscalerResourceLimits",
      },
      scale_down: {
        value: clusterAutoscalerScaleDownToHclTerraform(this._scaleDown.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClusterAutoscalerScaleDown",
      },
      skip_nodes_with_local_storage: {
        value: cdktf.booleanToHclTerraform(this._skipNodesWithLocalStorage),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
