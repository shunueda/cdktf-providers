// https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/resources/mlplatform_spark_k8s
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MlplatformSparkK8SConfig extends cdktf.TerraformMetaArguments {
  /**
  * The availability zone in which to create the resource. Changing this creates a new resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/resources/mlplatform_spark_k8s#availability_zone MlplatformSparkK8S#availability_zone}
  */
  readonly availabilityZone: string;
  /**
  * Cluster Mode. Should be `DEV` or `PROD`. Changing this creates a new resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/resources/mlplatform_spark_k8s#cluster_mode MlplatformSparkK8S#cluster_mode}
  */
  readonly clusterMode: string;
  /**
  * Timeout of cluster inactivity before deletion, in minutes. Changing this creates a new resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/resources/mlplatform_spark_k8s#delete_after_inactive_min MlplatformSparkK8S#delete_after_inactive_min}
  */
  readonly deleteAfterInactiveMin?: number;
  /**
  * Environment variables. Read more about this parameter here: https://cloud.vk.com/docs/en/ml/spark-to-k8s/instructions/create. Changing this creates a new resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/resources/mlplatform_spark_k8s#environment_variables MlplatformSparkK8S#environment_variables}
  */
  readonly environmentVariables?: string;
  /**
  * ID of the ip pool. Changing this creates a new resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/resources/mlplatform_spark_k8s#ip_pool MlplatformSparkK8S#ip_pool}
  */
  readonly ipPool: string;
  /**
  * Cluster name. Changing this creates a new resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/resources/mlplatform_spark_k8s#name MlplatformSparkK8S#name}
  */
  readonly name: string;
  /**
  * ID of the network. Changing this creates a new resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/resources/mlplatform_spark_k8s#network_id MlplatformSparkK8S#network_id}
  */
  readonly networkId: string;
  /**
  * Cluster's node groups configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/resources/mlplatform_spark_k8s#node_groups MlplatformSparkK8S#node_groups}
  */
  readonly nodeGroups: MlplatformSparkK8SNodeGroups[] | cdktf.IResolvable;
  /**
  * The `region` in which ML Platform client is obtained, defaults to the provider's `region`. Changing this creates a new spark_k8s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/resources/mlplatform_spark_k8s#region MlplatformSparkK8S#region}
  */
  readonly region?: string;
  /**
  * ID of the K8S registry to use with cluster. Changing this creates a new resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/resources/mlplatform_spark_k8s#registry_id MlplatformSparkK8S#registry_id}
  */
  readonly registryId: string;
  /**
  * Spark configuration. Read more about this parameter here: https://cloud.vk.com/docs/en/ml/spark-to-k8s/instructions/create. Changing this creates a new resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/resources/mlplatform_spark_k8s#spark_configuration MlplatformSparkK8S#spark_configuration}
  */
  readonly sparkConfiguration?: string;
  /**
  * ID of the subnet. Changing this creates a new resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/resources/mlplatform_spark_k8s#subnet_id MlplatformSparkK8S#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Timeout of cluster inactivity before suspending, in minutes. Changing this creates a new resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/resources/mlplatform_spark_k8s#suspend_after_inactive_min MlplatformSparkK8S#suspend_after_inactive_min}
  */
  readonly suspendAfterInactiveMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/resources/mlplatform_spark_k8s#timeouts MlplatformSparkK8S#timeouts}
  */
  readonly timeouts?: MlplatformSparkK8STimeouts;
}
export interface MlplatformSparkK8SNodeGroups {
  /**
  * Enables autoscaling for node group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/resources/mlplatform_spark_k8s#autoscaling_enabled MlplatformSparkK8S#autoscaling_enabled}
  */
  readonly autoscalingEnabled: boolean | cdktf.IResolvable;
  /**
  * ID of the flavor to be used in nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/resources/mlplatform_spark_k8s#flavor_id MlplatformSparkK8S#flavor_id}
  */
  readonly flavorId: string;
  /**
  * Maximum number of nodes in node group. It is used only when autoscaling is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/resources/mlplatform_spark_k8s#max_nodes MlplatformSparkK8S#max_nodes}
  */
  readonly maxNodes?: number;
  /**
  * Minimum count of nodes in node group. It is used only when autoscaling is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/resources/mlplatform_spark_k8s#min_nodes MlplatformSparkK8S#min_nodes}
  */
  readonly minNodes?: number;
  /**
  * Count of nodes in node group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/resources/mlplatform_spark_k8s#node_count MlplatformSparkK8S#node_count}
  */
  readonly nodeCount?: number;
}

export function mlplatformSparkK8SNodeGroupsToTerraform(struct?: MlplatformSparkK8SNodeGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoscaling_enabled: cdktf.booleanToTerraform(struct!.autoscalingEnabled),
    flavor_id: cdktf.stringToTerraform(struct!.flavorId),
    max_nodes: cdktf.numberToTerraform(struct!.maxNodes),
    min_nodes: cdktf.numberToTerraform(struct!.minNodes),
    node_count: cdktf.numberToTerraform(struct!.nodeCount),
  }
}


export function mlplatformSparkK8SNodeGroupsToHclTerraform(struct?: MlplatformSparkK8SNodeGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autoscaling_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.autoscalingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    flavor_id: {
      value: cdktf.stringToHclTerraform(struct!.flavorId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_nodes: {
      value: cdktf.numberToHclTerraform(struct!.maxNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_nodes: {
      value: cdktf.numberToHclTerraform(struct!.minNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_count: {
      value: cdktf.numberToHclTerraform(struct!.nodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MlplatformSparkK8SNodeGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MlplatformSparkK8SNodeGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoscalingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscalingEnabled = this._autoscalingEnabled;
    }
    if (this._flavorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.flavorId = this._flavorId;
    }
    if (this._maxNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNodes = this._maxNodes;
    }
    if (this._minNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minNodes = this._minNodes;
    }
    if (this._nodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeCount = this._nodeCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MlplatformSparkK8SNodeGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoscalingEnabled = undefined;
      this._flavorId = undefined;
      this._maxNodes = undefined;
      this._minNodes = undefined;
      this._nodeCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoscalingEnabled = value.autoscalingEnabled;
      this._flavorId = value.flavorId;
      this._maxNodes = value.maxNodes;
      this._minNodes = value.minNodes;
      this._nodeCount = value.nodeCount;
    }
  }

  // autoscaling_enabled - computed: false, optional: false, required: true
  private _autoscalingEnabled?: boolean | cdktf.IResolvable; 
  public get autoscalingEnabled() {
    return this.getBooleanAttribute('autoscaling_enabled');
  }
  public set autoscalingEnabled(value: boolean | cdktf.IResolvable) {
    this._autoscalingEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingEnabledInput() {
    return this._autoscalingEnabled;
  }

  // flavor_id - computed: false, optional: false, required: true
  private _flavorId?: string; 
  public get flavorId() {
    return this.getStringAttribute('flavor_id');
  }
  public set flavorId(value: string) {
    this._flavorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorIdInput() {
    return this._flavorId;
  }

  // max_nodes - computed: false, optional: true, required: false
  private _maxNodes?: number; 
  public get maxNodes() {
    return this.getNumberAttribute('max_nodes');
  }
  public set maxNodes(value: number) {
    this._maxNodes = value;
  }
  public resetMaxNodes() {
    this._maxNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNodesInput() {
    return this._maxNodes;
  }

  // min_nodes - computed: false, optional: true, required: false
  private _minNodes?: number; 
  public get minNodes() {
    return this.getNumberAttribute('min_nodes');
  }
  public set minNodes(value: number) {
    this._minNodes = value;
  }
  public resetMinNodes() {
    this._minNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minNodesInput() {
    return this._minNodes;
  }

  // node_count - computed: false, optional: true, required: false
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  public resetNodeCount() {
    this._nodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }
}

export class MlplatformSparkK8SNodeGroupsList extends cdktf.ComplexList {
  public internalValue? : MlplatformSparkK8SNodeGroups[] | cdktf.IResolvable

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
  public get(index: number): MlplatformSparkK8SNodeGroupsOutputReference {
    return new MlplatformSparkK8SNodeGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MlplatformSparkK8STimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/resources/mlplatform_spark_k8s#create MlplatformSparkK8S#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/resources/mlplatform_spark_k8s#delete MlplatformSparkK8S#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/resources/mlplatform_spark_k8s#update MlplatformSparkK8S#update}
  */
  readonly update?: string;
}

export function mlplatformSparkK8STimeoutsToTerraform(struct?: MlplatformSparkK8STimeouts | cdktf.IResolvable): any {
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


export function mlplatformSparkK8STimeoutsToHclTerraform(struct?: MlplatformSparkK8STimeouts | cdktf.IResolvable): any {
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

export class MlplatformSparkK8STimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MlplatformSparkK8STimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MlplatformSparkK8STimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/resources/mlplatform_spark_k8s vkcs_mlplatform_spark_k8s}
*/
export class MlplatformSparkK8S extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vkcs_mlplatform_spark_k8s";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MlplatformSparkK8S resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MlplatformSparkK8S to import
  * @param importFromId The id of the existing MlplatformSparkK8S that should be imported. Refer to the {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/resources/mlplatform_spark_k8s#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MlplatformSparkK8S to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vkcs_mlplatform_spark_k8s", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.1/docs/resources/mlplatform_spark_k8s vkcs_mlplatform_spark_k8s} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MlplatformSparkK8SConfig
  */
  public constructor(scope: Construct, id: string, config: MlplatformSparkK8SConfig) {
    super(scope, id, {
      terraformResourceType: 'vkcs_mlplatform_spark_k8s',
      terraformGeneratorMetadata: {
        providerName: 'vkcs',
        providerVersion: '0.13.1',
        providerVersionConstraint: '0.13.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityZone = config.availabilityZone;
    this._clusterMode = config.clusterMode;
    this._deleteAfterInactiveMin = config.deleteAfterInactiveMin;
    this._environmentVariables = config.environmentVariables;
    this._ipPool = config.ipPool;
    this._name = config.name;
    this._networkId = config.networkId;
    this._nodeGroups.internalValue = config.nodeGroups;
    this._region = config.region;
    this._registryId = config.registryId;
    this._sparkConfiguration = config.sparkConfiguration;
    this._subnetId = config.subnetId;
    this._suspendAfterInactiveMin = config.suspendAfterInactiveMin;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zone - computed: false, optional: false, required: true
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // cluster_mode - computed: false, optional: false, required: true
  private _clusterMode?: string; 
  public get clusterMode() {
    return this.getStringAttribute('cluster_mode');
  }
  public set clusterMode(value: string) {
    this._clusterMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterModeInput() {
    return this._clusterMode;
  }

  // control_instance_id - computed: true, optional: false, required: false
  public get controlInstanceId() {
    return this.getStringAttribute('control_instance_id');
  }

  // delete_after_inactive_min - computed: false, optional: true, required: false
  private _deleteAfterInactiveMin?: number; 
  public get deleteAfterInactiveMin() {
    return this.getNumberAttribute('delete_after_inactive_min');
  }
  public set deleteAfterInactiveMin(value: number) {
    this._deleteAfterInactiveMin = value;
  }
  public resetDeleteAfterInactiveMin() {
    this._deleteAfterInactiveMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteAfterInactiveMinInput() {
    return this._deleteAfterInactiveMin;
  }

  // environment_variables - computed: false, optional: true, required: false
  private _environmentVariables?: string; 
  public get environmentVariables() {
    return this.getStringAttribute('environment_variables');
  }
  public set environmentVariables(value: string) {
    this._environmentVariables = value;
  }
  public resetEnvironmentVariables() {
    this._environmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariablesInput() {
    return this._environmentVariables;
  }

  // history_server_url - computed: true, optional: false, required: false
  public get historyServerUrl() {
    return this.getStringAttribute('history_server_url');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inactive_min - computed: true, optional: false, required: false
  public get inactiveMin() {
    return this.getNumberAttribute('inactive_min');
  }

  // ip_pool - computed: false, optional: false, required: true
  private _ipPool?: string; 
  public get ipPool() {
    return this.getStringAttribute('ip_pool');
  }
  public set ipPool(value: string) {
    this._ipPool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPoolInput() {
    return this._ipPool;
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

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // node_groups - computed: false, optional: false, required: true
  private _nodeGroups = new MlplatformSparkK8SNodeGroupsList(this, "node_groups", false);
  public get nodeGroups() {
    return this._nodeGroups;
  }
  public putNodeGroups(value: MlplatformSparkK8SNodeGroups[] | cdktf.IResolvable) {
    this._nodeGroups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGroupsInput() {
    return this._nodeGroups.internalValue;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // registry_id - computed: false, optional: false, required: true
  private _registryId?: string; 
  public get registryId() {
    return this.getStringAttribute('registry_id');
  }
  public set registryId(value: string) {
    this._registryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registryIdInput() {
    return this._registryId;
  }

  // s3_bucket_name - computed: true, optional: false, required: false
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }

  // spark_configuration - computed: false, optional: true, required: false
  private _sparkConfiguration?: string; 
  public get sparkConfiguration() {
    return this.getStringAttribute('spark_configuration');
  }
  public set sparkConfiguration(value: string) {
    this._sparkConfiguration = value;
  }
  public resetSparkConfiguration() {
    this._sparkConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkConfigurationInput() {
    return this._sparkConfiguration;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // suspend_after_inactive_min - computed: false, optional: true, required: false
  private _suspendAfterInactiveMin?: number; 
  public get suspendAfterInactiveMin() {
    return this.getNumberAttribute('suspend_after_inactive_min');
  }
  public set suspendAfterInactiveMin(value: number) {
    this._suspendAfterInactiveMin = value;
  }
  public resetSuspendAfterInactiveMin() {
    this._suspendAfterInactiveMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendAfterInactiveMinInput() {
    return this._suspendAfterInactiveMin;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MlplatformSparkK8STimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MlplatformSparkK8STimeouts) {
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
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      cluster_mode: cdktf.stringToTerraform(this._clusterMode),
      delete_after_inactive_min: cdktf.numberToTerraform(this._deleteAfterInactiveMin),
      environment_variables: cdktf.stringToTerraform(this._environmentVariables),
      ip_pool: cdktf.stringToTerraform(this._ipPool),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      node_groups: cdktf.listMapper(mlplatformSparkK8SNodeGroupsToTerraform, false)(this._nodeGroups.internalValue),
      region: cdktf.stringToTerraform(this._region),
      registry_id: cdktf.stringToTerraform(this._registryId),
      spark_configuration: cdktf.stringToTerraform(this._sparkConfiguration),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      suspend_after_inactive_min: cdktf.numberToTerraform(this._suspendAfterInactiveMin),
      timeouts: mlplatformSparkK8STimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_mode: {
        value: cdktf.stringToHclTerraform(this._clusterMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_after_inactive_min: {
        value: cdktf.numberToHclTerraform(this._deleteAfterInactiveMin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      environment_variables: {
        value: cdktf.stringToHclTerraform(this._environmentVariables),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_pool: {
        value: cdktf.stringToHclTerraform(this._ipPool),
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
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_groups: {
        value: cdktf.listMapperHcl(mlplatformSparkK8SNodeGroupsToHclTerraform, false)(this._nodeGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MlplatformSparkK8SNodeGroupsList",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      registry_id: {
        value: cdktf.stringToHclTerraform(this._registryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spark_configuration: {
        value: cdktf.stringToHclTerraform(this._sparkConfiguration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      suspend_after_inactive_min: {
        value: cdktf.numberToHclTerraform(this._suspendAfterInactiveMin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: mlplatformSparkK8STimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MlplatformSparkK8STimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
