// https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/hcp_cluster_autoscaler
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HcpClusterAutoscalerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier of the cluster.After the creation of the resource, it is not possible to update the attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/hcp_cluster_autoscaler#cluster HcpClusterAutoscaler#cluster}
  */
  readonly cluster: string;
  /**
  * Maximum time cluster-autoscaler waits for node to be provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/hcp_cluster_autoscaler#max_node_provision_time HcpClusterAutoscaler#max_node_provision_time}
  */
  readonly maxNodeProvisionTime?: string;
  /**
  * Gives pods graceful termination time before scaling down.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/hcp_cluster_autoscaler#max_pod_grace_period HcpClusterAutoscaler#max_pod_grace_period}
  */
  readonly maxPodGracePeriod?: number;
  /**
  * To allow users to schedule 'best-effort' pods, which shouldn't trigger Cluster Autoscaler actions, but only run when there are spare resources available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/hcp_cluster_autoscaler#pod_priority_threshold HcpClusterAutoscaler#pod_priority_threshold}
  */
  readonly podPriorityThreshold?: number;
  /**
  * Constraints of autoscaling resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/hcp_cluster_autoscaler#resource_limits HcpClusterAutoscaler#resource_limits}
  */
  readonly resourceLimits?: HcpClusterAutoscalerResourceLimits;
}
export interface HcpClusterAutoscalerResourceLimits {
  /**
  * Maximum number of nodes in all node groups. Cluster autoscaler will not grow the cluster beyond this number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/hcp_cluster_autoscaler#max_nodes_total HcpClusterAutoscaler#max_nodes_total}
  */
  readonly maxNodesTotal?: number;
}

export function hcpClusterAutoscalerResourceLimitsToTerraform(struct?: HcpClusterAutoscalerResourceLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_nodes_total: cdktf.numberToTerraform(struct!.maxNodesTotal),
  }
}


export function hcpClusterAutoscalerResourceLimitsToHclTerraform(struct?: HcpClusterAutoscalerResourceLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_nodes_total: {
      value: cdktf.numberToHclTerraform(struct!.maxNodesTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HcpClusterAutoscalerResourceLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HcpClusterAutoscalerResourceLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxNodesTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNodesTotal = this._maxNodesTotal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HcpClusterAutoscalerResourceLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxNodesTotal = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxNodesTotal = value.maxNodesTotal;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/hcp_cluster_autoscaler rhcs_hcp_cluster_autoscaler}
*/
export class HcpClusterAutoscaler extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rhcs_hcp_cluster_autoscaler";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HcpClusterAutoscaler resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HcpClusterAutoscaler to import
  * @param importFromId The id of the existing HcpClusterAutoscaler that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/hcp_cluster_autoscaler#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HcpClusterAutoscaler to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rhcs_hcp_cluster_autoscaler", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/resources/hcp_cluster_autoscaler rhcs_hcp_cluster_autoscaler} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HcpClusterAutoscalerConfig
  */
  public constructor(scope: Construct, id: string, config: HcpClusterAutoscalerConfig) {
    super(scope, id, {
      terraformResourceType: 'rhcs_hcp_cluster_autoscaler',
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
    this._cluster = config.cluster;
    this._maxNodeProvisionTime = config.maxNodeProvisionTime;
    this._maxPodGracePeriod = config.maxPodGracePeriod;
    this._podPriorityThreshold = config.podPriorityThreshold;
    this._resourceLimits.internalValue = config.resourceLimits;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  private _resourceLimits = new HcpClusterAutoscalerResourceLimitsOutputReference(this, "resource_limits");
  public get resourceLimits() {
    return this._resourceLimits;
  }
  public putResourceLimits(value: HcpClusterAutoscalerResourceLimits) {
    this._resourceLimits.internalValue = value;
  }
  public resetResourceLimits() {
    this._resourceLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLimitsInput() {
    return this._resourceLimits.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster: cdktf.stringToTerraform(this._cluster),
      max_node_provision_time: cdktf.stringToTerraform(this._maxNodeProvisionTime),
      max_pod_grace_period: cdktf.numberToTerraform(this._maxPodGracePeriod),
      pod_priority_threshold: cdktf.numberToTerraform(this._podPriorityThreshold),
      resource_limits: hcpClusterAutoscalerResourceLimitsToTerraform(this._resourceLimits.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster: {
        value: cdktf.stringToHclTerraform(this._cluster),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
        value: hcpClusterAutoscalerResourceLimitsToHclTerraform(this._resourceLimits.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "HcpClusterAutoscalerResourceLimits",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
