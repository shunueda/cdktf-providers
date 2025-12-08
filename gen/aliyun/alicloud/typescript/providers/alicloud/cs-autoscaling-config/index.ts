// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cs_autoscaling_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CsAutoscalingConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cs_autoscaling_config#cluster_id CsAutoscalingConfig#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cs_autoscaling_config#cool_down_duration CsAutoscalingConfig#cool_down_duration}
  */
  readonly coolDownDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cs_autoscaling_config#daemonset_eviction_for_nodes CsAutoscalingConfig#daemonset_eviction_for_nodes}
  */
  readonly daemonsetEvictionForNodes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cs_autoscaling_config#expander CsAutoscalingConfig#expander}
  */
  readonly expander?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cs_autoscaling_config#gpu_utilization_threshold CsAutoscalingConfig#gpu_utilization_threshold}
  */
  readonly gpuUtilizationThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cs_autoscaling_config#id CsAutoscalingConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cs_autoscaling_config#max_graceful_termination_sec CsAutoscalingConfig#max_graceful_termination_sec}
  */
  readonly maxGracefulTerminationSec?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cs_autoscaling_config#min_replica_count CsAutoscalingConfig#min_replica_count}
  */
  readonly minReplicaCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cs_autoscaling_config#priorities CsAutoscalingConfig#priorities}
  */
  readonly priorities?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cs_autoscaling_config#recycle_node_deletion_enabled CsAutoscalingConfig#recycle_node_deletion_enabled}
  */
  readonly recycleNodeDeletionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cs_autoscaling_config#scale_down_enabled CsAutoscalingConfig#scale_down_enabled}
  */
  readonly scaleDownEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cs_autoscaling_config#scale_up_from_zero CsAutoscalingConfig#scale_up_from_zero}
  */
  readonly scaleUpFromZero?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cs_autoscaling_config#scaler_type CsAutoscalingConfig#scaler_type}
  */
  readonly scalerType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cs_autoscaling_config#scan_interval CsAutoscalingConfig#scan_interval}
  */
  readonly scanInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cs_autoscaling_config#skip_nodes_with_local_storage CsAutoscalingConfig#skip_nodes_with_local_storage}
  */
  readonly skipNodesWithLocalStorage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cs_autoscaling_config#skip_nodes_with_system_pods CsAutoscalingConfig#skip_nodes_with_system_pods}
  */
  readonly skipNodesWithSystemPods?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cs_autoscaling_config#unneeded_duration CsAutoscalingConfig#unneeded_duration}
  */
  readonly unneededDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cs_autoscaling_config#utilization_threshold CsAutoscalingConfig#utilization_threshold}
  */
  readonly utilizationThreshold?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cs_autoscaling_config#timeouts CsAutoscalingConfig#timeouts}
  */
  readonly timeouts?: CsAutoscalingConfigTimeouts;
}
export interface CsAutoscalingConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cs_autoscaling_config#create CsAutoscalingConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cs_autoscaling_config#delete CsAutoscalingConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cs_autoscaling_config#update CsAutoscalingConfig#update}
  */
  readonly update?: string;
}

export function csAutoscalingConfigTimeoutsToTerraform(struct?: CsAutoscalingConfigTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function csAutoscalingConfigTimeoutsToHclTerraform(struct?: CsAutoscalingConfigTimeouts | cdktf.IResolvable): any {
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

export class CsAutoscalingConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CsAutoscalingConfigTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsAutoscalingConfigTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cs_autoscaling_config alicloud_cs_autoscaling_config}
*/
export class CsAutoscalingConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cs_autoscaling_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CsAutoscalingConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CsAutoscalingConfig to import
  * @param importFromId The id of the existing CsAutoscalingConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cs_autoscaling_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CsAutoscalingConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cs_autoscaling_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cs_autoscaling_config alicloud_cs_autoscaling_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CsAutoscalingConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CsAutoscalingConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cs_autoscaling_config',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.265.0',
        providerVersionConstraint: '1.265.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._coolDownDuration = config.coolDownDuration;
    this._daemonsetEvictionForNodes = config.daemonsetEvictionForNodes;
    this._expander = config.expander;
    this._gpuUtilizationThreshold = config.gpuUtilizationThreshold;
    this._id = config.id;
    this._maxGracefulTerminationSec = config.maxGracefulTerminationSec;
    this._minReplicaCount = config.minReplicaCount;
    this._priorities = config.priorities;
    this._recycleNodeDeletionEnabled = config.recycleNodeDeletionEnabled;
    this._scaleDownEnabled = config.scaleDownEnabled;
    this._scaleUpFromZero = config.scaleUpFromZero;
    this._scalerType = config.scalerType;
    this._scanInterval = config.scanInterval;
    this._skipNodesWithLocalStorage = config.skipNodesWithLocalStorage;
    this._skipNodesWithSystemPods = config.skipNodesWithSystemPods;
    this._unneededDuration = config.unneededDuration;
    this._utilizationThreshold = config.utilizationThreshold;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // cool_down_duration - computed: false, optional: true, required: false
  private _coolDownDuration?: string; 
  public get coolDownDuration() {
    return this.getStringAttribute('cool_down_duration');
  }
  public set coolDownDuration(value: string) {
    this._coolDownDuration = value;
  }
  public resetCoolDownDuration() {
    this._coolDownDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coolDownDurationInput() {
    return this._coolDownDuration;
  }

  // daemonset_eviction_for_nodes - computed: false, optional: true, required: false
  private _daemonsetEvictionForNodes?: boolean | cdktf.IResolvable; 
  public get daemonsetEvictionForNodes() {
    return this.getBooleanAttribute('daemonset_eviction_for_nodes');
  }
  public set daemonsetEvictionForNodes(value: boolean | cdktf.IResolvable) {
    this._daemonsetEvictionForNodes = value;
  }
  public resetDaemonsetEvictionForNodes() {
    this._daemonsetEvictionForNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daemonsetEvictionForNodesInput() {
    return this._daemonsetEvictionForNodes;
  }

  // expander - computed: false, optional: true, required: false
  private _expander?: string; 
  public get expander() {
    return this.getStringAttribute('expander');
  }
  public set expander(value: string) {
    this._expander = value;
  }
  public resetExpander() {
    this._expander = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expanderInput() {
    return this._expander;
  }

  // gpu_utilization_threshold - computed: false, optional: true, required: false
  private _gpuUtilizationThreshold?: string; 
  public get gpuUtilizationThreshold() {
    return this.getStringAttribute('gpu_utilization_threshold');
  }
  public set gpuUtilizationThreshold(value: string) {
    this._gpuUtilizationThreshold = value;
  }
  public resetGpuUtilizationThreshold() {
    this._gpuUtilizationThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuUtilizationThresholdInput() {
    return this._gpuUtilizationThreshold;
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

  // max_graceful_termination_sec - computed: false, optional: true, required: false
  private _maxGracefulTerminationSec?: number; 
  public get maxGracefulTerminationSec() {
    return this.getNumberAttribute('max_graceful_termination_sec');
  }
  public set maxGracefulTerminationSec(value: number) {
    this._maxGracefulTerminationSec = value;
  }
  public resetMaxGracefulTerminationSec() {
    this._maxGracefulTerminationSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxGracefulTerminationSecInput() {
    return this._maxGracefulTerminationSec;
  }

  // min_replica_count - computed: false, optional: true, required: false
  private _minReplicaCount?: number; 
  public get minReplicaCount() {
    return this.getNumberAttribute('min_replica_count');
  }
  public set minReplicaCount(value: number) {
    this._minReplicaCount = value;
  }
  public resetMinReplicaCount() {
    this._minReplicaCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minReplicaCountInput() {
    return this._minReplicaCount;
  }

  // priorities - computed: false, optional: true, required: false
  private _priorities?: { [key: string]: string }; 
  public get priorities() {
    return this.getStringMapAttribute('priorities');
  }
  public set priorities(value: { [key: string]: string }) {
    this._priorities = value;
  }
  public resetPriorities() {
    this._priorities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prioritiesInput() {
    return this._priorities;
  }

  // recycle_node_deletion_enabled - computed: false, optional: true, required: false
  private _recycleNodeDeletionEnabled?: boolean | cdktf.IResolvable; 
  public get recycleNodeDeletionEnabled() {
    return this.getBooleanAttribute('recycle_node_deletion_enabled');
  }
  public set recycleNodeDeletionEnabled(value: boolean | cdktf.IResolvable) {
    this._recycleNodeDeletionEnabled = value;
  }
  public resetRecycleNodeDeletionEnabled() {
    this._recycleNodeDeletionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recycleNodeDeletionEnabledInput() {
    return this._recycleNodeDeletionEnabled;
  }

  // scale_down_enabled - computed: false, optional: true, required: false
  private _scaleDownEnabled?: boolean | cdktf.IResolvable; 
  public get scaleDownEnabled() {
    return this.getBooleanAttribute('scale_down_enabled');
  }
  public set scaleDownEnabled(value: boolean | cdktf.IResolvable) {
    this._scaleDownEnabled = value;
  }
  public resetScaleDownEnabled() {
    this._scaleDownEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDownEnabledInput() {
    return this._scaleDownEnabled;
  }

  // scale_up_from_zero - computed: false, optional: true, required: false
  private _scaleUpFromZero?: boolean | cdktf.IResolvable; 
  public get scaleUpFromZero() {
    return this.getBooleanAttribute('scale_up_from_zero');
  }
  public set scaleUpFromZero(value: boolean | cdktf.IResolvable) {
    this._scaleUpFromZero = value;
  }
  public resetScaleUpFromZero() {
    this._scaleUpFromZero = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleUpFromZeroInput() {
    return this._scaleUpFromZero;
  }

  // scaler_type - computed: false, optional: true, required: false
  private _scalerType?: string; 
  public get scalerType() {
    return this.getStringAttribute('scaler_type');
  }
  public set scalerType(value: string) {
    this._scalerType = value;
  }
  public resetScalerType() {
    this._scalerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalerTypeInput() {
    return this._scalerType;
  }

  // scan_interval - computed: false, optional: true, required: false
  private _scanInterval?: string; 
  public get scanInterval() {
    return this.getStringAttribute('scan_interval');
  }
  public set scanInterval(value: string) {
    this._scanInterval = value;
  }
  public resetScanInterval() {
    this._scanInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanIntervalInput() {
    return this._scanInterval;
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

  // skip_nodes_with_system_pods - computed: false, optional: true, required: false
  private _skipNodesWithSystemPods?: boolean | cdktf.IResolvable; 
  public get skipNodesWithSystemPods() {
    return this.getBooleanAttribute('skip_nodes_with_system_pods');
  }
  public set skipNodesWithSystemPods(value: boolean | cdktf.IResolvable) {
    this._skipNodesWithSystemPods = value;
  }
  public resetSkipNodesWithSystemPods() {
    this._skipNodesWithSystemPods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipNodesWithSystemPodsInput() {
    return this._skipNodesWithSystemPods;
  }

  // unneeded_duration - computed: false, optional: true, required: false
  private _unneededDuration?: string; 
  public get unneededDuration() {
    return this.getStringAttribute('unneeded_duration');
  }
  public set unneededDuration(value: string) {
    this._unneededDuration = value;
  }
  public resetUnneededDuration() {
    this._unneededDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unneededDurationInput() {
    return this._unneededDuration;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CsAutoscalingConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CsAutoscalingConfigTimeouts) {
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
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      cool_down_duration: cdktf.stringToTerraform(this._coolDownDuration),
      daemonset_eviction_for_nodes: cdktf.booleanToTerraform(this._daemonsetEvictionForNodes),
      expander: cdktf.stringToTerraform(this._expander),
      gpu_utilization_threshold: cdktf.stringToTerraform(this._gpuUtilizationThreshold),
      id: cdktf.stringToTerraform(this._id),
      max_graceful_termination_sec: cdktf.numberToTerraform(this._maxGracefulTerminationSec),
      min_replica_count: cdktf.numberToTerraform(this._minReplicaCount),
      priorities: cdktf.hashMapper(cdktf.stringToTerraform)(this._priorities),
      recycle_node_deletion_enabled: cdktf.booleanToTerraform(this._recycleNodeDeletionEnabled),
      scale_down_enabled: cdktf.booleanToTerraform(this._scaleDownEnabled),
      scale_up_from_zero: cdktf.booleanToTerraform(this._scaleUpFromZero),
      scaler_type: cdktf.stringToTerraform(this._scalerType),
      scan_interval: cdktf.stringToTerraform(this._scanInterval),
      skip_nodes_with_local_storage: cdktf.booleanToTerraform(this._skipNodesWithLocalStorage),
      skip_nodes_with_system_pods: cdktf.booleanToTerraform(this._skipNodesWithSystemPods),
      unneeded_duration: cdktf.stringToTerraform(this._unneededDuration),
      utilization_threshold: cdktf.stringToTerraform(this._utilizationThreshold),
      timeouts: csAutoscalingConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cool_down_duration: {
        value: cdktf.stringToHclTerraform(this._coolDownDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      daemonset_eviction_for_nodes: {
        value: cdktf.booleanToHclTerraform(this._daemonsetEvictionForNodes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      expander: {
        value: cdktf.stringToHclTerraform(this._expander),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gpu_utilization_threshold: {
        value: cdktf.stringToHclTerraform(this._gpuUtilizationThreshold),
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
      max_graceful_termination_sec: {
        value: cdktf.numberToHclTerraform(this._maxGracefulTerminationSec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_replica_count: {
        value: cdktf.numberToHclTerraform(this._minReplicaCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      priorities: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._priorities),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      recycle_node_deletion_enabled: {
        value: cdktf.booleanToHclTerraform(this._recycleNodeDeletionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scale_down_enabled: {
        value: cdktf.booleanToHclTerraform(this._scaleDownEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scale_up_from_zero: {
        value: cdktf.booleanToHclTerraform(this._scaleUpFromZero),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scaler_type: {
        value: cdktf.stringToHclTerraform(this._scalerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scan_interval: {
        value: cdktf.stringToHclTerraform(this._scanInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_nodes_with_local_storage: {
        value: cdktf.booleanToHclTerraform(this._skipNodesWithLocalStorage),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      skip_nodes_with_system_pods: {
        value: cdktf.booleanToHclTerraform(this._skipNodesWithSystemPods),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      unneeded_duration: {
        value: cdktf.stringToHclTerraform(this._unneededDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      utilization_threshold: {
        value: cdktf.stringToHclTerraform(this._utilizationThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: csAutoscalingConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CsAutoscalingConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
