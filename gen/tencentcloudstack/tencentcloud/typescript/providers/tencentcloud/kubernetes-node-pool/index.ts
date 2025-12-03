// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubernetesNodePoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Automatically update instance tags. The default value is false. After configuration, if the scaling group tags are updated, the tags of the running instances in the scaling group will be updated synchronously (synchronous updates only support adding and modifying tags, and do not support deleting tags for the time being). Synchronous updates do not take effect immediately and there is a certain delay.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#auto_update_instance_tags KubernetesNodePool#auto_update_instance_tags}
  */
  readonly autoUpdateInstanceTags?: boolean | cdktf.IResolvable;
  /**
  * ID of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#cluster_id KubernetesNodePool#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Seconds of scaling group cool down. Default value is `300`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#default_cooldown KubernetesNodePool#default_cooldown}
  */
  readonly defaultCooldown?: number;
  /**
  * Indicate to keep the CVM instance when delete the node pool. Default is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#delete_keep_instance KubernetesNodePool#delete_keep_instance}
  */
  readonly deleteKeepInstance?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the node pool deletion protection is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#deletion_protection KubernetesNodePool#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * Desired capacity of the node. If `enable_auto_scale` is set `true`, this will be a computed parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#desired_capacity KubernetesNodePool#desired_capacity}
  */
  readonly desiredCapacity?: number;
  /**
  * Indicate whether to enable auto scaling or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#enable_auto_scale KubernetesNodePool#enable_auto_scale}
  */
  readonly enableAutoScale?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#id KubernetesNodePool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Labels of kubernetes node pool created nodes. The label key name does not exceed 63 characters, only supports English, numbers,'/','-', and does not allow beginning with ('/').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#labels KubernetesNodePool#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Maximum number of node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#max_size KubernetesNodePool#max_size}
  */
  readonly maxSize: number;
  /**
  * Minimum number of node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#min_size KubernetesNodePool#min_size}
  */
  readonly minSize: number;
  /**
  * Multi-availability zone/subnet policy. Valid values: PRIORITY and EQUALITY. Default value: PRIORITY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#multi_zone_subnet_policy KubernetesNodePool#multi_zone_subnet_policy}
  */
  readonly multiZoneSubnetPolicy?: string;
  /**
  * Name of the node pool. The name does not exceed 25 characters, and only supports Chinese, English, numbers, underscores, separators (`-`) and decimal points.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#name KubernetesNodePool#name}
  */
  readonly name: string;
  /**
  * Node pool operating system (enter the image ID for a custom image, and enter the OS name for a public image). If custom image, please refer to [TencentCloud Documentation](https://www.tencentcloud.com/document/product/457/46750?lang=en&pg=#list-of-public-images-supported-by-tke) for available values. Default is 'tlinux2.4x86_64'. This parameter will only affect new nodes, not including the existing nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#node_os KubernetesNodePool#node_os}
  */
  readonly nodeOs?: string;
  /**
  * The image version of the node. Valida values are `DOCKER_CUSTOMIZE` and `GENERAL`. Default is `GENERAL`. This parameter will only affect new nodes, not including the existing nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#node_os_type KubernetesNodePool#node_os_type}
  */
  readonly nodeOsType?: string;
  /**
  * Available values for retry policies include `IMMEDIATE_RETRY` and `INCREMENTAL_INTERVALS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#retry_policy KubernetesNodePool#retry_policy}
  */
  readonly retryPolicy?: string;
  /**
  * Control how many expectations(`desired_capacity`) can be tolerated successfully. Unit is percentage, Default is `100`. Only can be set if `wait_node_ready` is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#scale_tolerance KubernetesNodePool#scale_tolerance}
  */
  readonly scaleTolerance?: number;
  /**
  * Name of relative scaling group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#scaling_group_name KubernetesNodePool#scaling_group_name}
  */
  readonly scalingGroupName?: string;
  /**
  * Project ID the scaling group belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#scaling_group_project_id KubernetesNodePool#scaling_group_project_id}
  */
  readonly scalingGroupProjectId?: number;
  /**
  * Auto scaling mode. Valid values are `CLASSIC_SCALING`(scaling by create/destroy instances), `WAKE_UP_STOPPED_SCALING`(Boot priority for expansion. When expanding the capacity, the shutdown operation is given priority to the shutdown of the instance. If the number of instances is still lower than the expected number of instances after the startup, the instance will be created, and the method of destroying the instance will still be used for shrinking).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#scaling_mode KubernetesNodePool#scaling_mode}
  */
  readonly scalingMode?: string;
  /**
  * ID list of subnet, and for VPC it is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#subnet_ids KubernetesNodePool#subnet_ids}
  */
  readonly subnetIds?: string[];
  /**
  * Node pool tag specifications, will passthroughs to the scaling instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#tags KubernetesNodePool#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Policy of scaling group termination. Available values: `["OLDEST_INSTANCE"]`, `["NEWEST_INSTANCE"]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#termination_policies KubernetesNodePool#termination_policies}
  */
  readonly terminationPolicies?: string[];
  /**
  * Sets whether the joining node participates in the schedule. Default is '0'. Participate in scheduling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#unschedulable KubernetesNodePool#unschedulable}
  */
  readonly unschedulable?: number;
  /**
  * ID of VPC network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#vpc_id KubernetesNodePool#vpc_id}
  */
  readonly vpcId: string;
  /**
  * Whether to wait for all desired nodes to be ready. Default is false. Only can be set if `enable_auto_scale` is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#wait_node_ready KubernetesNodePool#wait_node_ready}
  */
  readonly waitNodeReady?: boolean | cdktf.IResolvable;
  /**
  * List of auto scaling group available zones, for Basic network it is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#zones KubernetesNodePool#zones}
  */
  readonly zones?: string[];
  /**
  * annotations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#annotations KubernetesNodePool#annotations}
  */
  readonly annotations?: KubernetesNodePoolAnnotations[] | cdktf.IResolvable;
  /**
  * auto_scaling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#auto_scaling_config KubernetesNodePool#auto_scaling_config}
  */
  readonly autoScalingConfig: KubernetesNodePoolAutoScalingConfig;
  /**
  * node_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#node_config KubernetesNodePool#node_config}
  */
  readonly nodeConfig?: KubernetesNodePoolNodeConfig;
  /**
  * taints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#taints KubernetesNodePool#taints}
  */
  readonly taints?: KubernetesNodePoolTaints[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#timeouts KubernetesNodePool#timeouts}
  */
  readonly timeouts?: KubernetesNodePoolTimeouts;
}
export interface KubernetesNodePoolAnnotations {
  /**
  * Name in the map table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#name KubernetesNodePool#name}
  */
  readonly name: string;
  /**
  * Value in the map table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#value KubernetesNodePool#value}
  */
  readonly value: string;
}

export function kubernetesNodePoolAnnotationsToTerraform(struct?: KubernetesNodePoolAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function kubernetesNodePoolAnnotationsToHclTerraform(struct?: KubernetesNodePoolAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class KubernetesNodePoolAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesNodePoolAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesNodePoolAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class KubernetesNodePoolAnnotationsList extends cdktf.ComplexList {
  public internalValue? : KubernetesNodePoolAnnotations[] | cdktf.IResolvable

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
  public get(index: number): KubernetesNodePoolAnnotationsOutputReference {
    return new KubernetesNodePoolAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesNodePoolAutoScalingConfigDataDisk {
  /**
  * Indicates whether the disk remove after instance terminated. Default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#delete_with_instance KubernetesNodePool#delete_with_instance}
  */
  readonly deleteWithInstance?: boolean | cdktf.IResolvable;
  /**
  * Volume of disk in GB. Default is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#disk_size KubernetesNodePool#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Types of disk. Valid value: `LOCAL_BASIC`, `LOCAL_SSD`, `CLOUD_BASIC`, `CLOUD_PREMIUM`, `CLOUD_SSD`, `CLOUD_HSSD`, `CLOUD_TSSD` and `CLOUD_BSSD`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#disk_type KubernetesNodePool#disk_type}
  */
  readonly diskType?: string;
  /**
  * Specify whether to encrypt data disk, default: false. NOTE: Make sure the instance type is offering and the cam role `QcloudKMSAccessForCVMRole` was provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#encrypt KubernetesNodePool#encrypt}
  */
  readonly encrypt?: boolean | cdktf.IResolvable;
  /**
  * Data disk snapshot ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#snapshot_id KubernetesNodePool#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * Add extra performance to the data disk. Only works when disk type is `CLOUD_TSSD` or `CLOUD_HSSD` and `data_size` > 460GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#throughput_performance KubernetesNodePool#throughput_performance}
  */
  readonly throughputPerformance?: number;
}

export function kubernetesNodePoolAutoScalingConfigDataDiskToTerraform(struct?: KubernetesNodePoolAutoScalingConfigDataDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_with_instance: cdktf.booleanToTerraform(struct!.deleteWithInstance),
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    encrypt: cdktf.booleanToTerraform(struct!.encrypt),
    snapshot_id: cdktf.stringToTerraform(struct!.snapshotId),
    throughput_performance: cdktf.numberToTerraform(struct!.throughputPerformance),
  }
}


export function kubernetesNodePoolAutoScalingConfigDataDiskToHclTerraform(struct?: KubernetesNodePoolAutoScalingConfigDataDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_with_instance: {
      value: cdktf.booleanToHclTerraform(struct!.deleteWithInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disk_size: {
      value: cdktf.numberToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encrypt: {
      value: cdktf.booleanToHclTerraform(struct!.encrypt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    snapshot_id: {
      value: cdktf.stringToHclTerraform(struct!.snapshotId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    throughput_performance: {
      value: cdktf.numberToHclTerraform(struct!.throughputPerformance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesNodePoolAutoScalingConfigDataDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesNodePoolAutoScalingConfigDataDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteWithInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteWithInstance = this._deleteWithInstance;
    }
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._encrypt !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypt = this._encrypt;
    }
    if (this._snapshotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotId = this._snapshotId;
    }
    if (this._throughputPerformance !== undefined) {
      hasAnyValues = true;
      internalValueResult.throughputPerformance = this._throughputPerformance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesNodePoolAutoScalingConfigDataDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deleteWithInstance = undefined;
      this._diskSize = undefined;
      this._diskType = undefined;
      this._encrypt = undefined;
      this._snapshotId = undefined;
      this._throughputPerformance = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deleteWithInstance = value.deleteWithInstance;
      this._diskSize = value.diskSize;
      this._diskType = value.diskType;
      this._encrypt = value.encrypt;
      this._snapshotId = value.snapshotId;
      this._throughputPerformance = value.throughputPerformance;
    }
  }

  // delete_with_instance - computed: false, optional: true, required: false
  private _deleteWithInstance?: boolean | cdktf.IResolvable; 
  public get deleteWithInstance() {
    return this.getBooleanAttribute('delete_with_instance');
  }
  public set deleteWithInstance(value: boolean | cdktf.IResolvable) {
    this._deleteWithInstance = value;
  }
  public resetDeleteWithInstance() {
    this._deleteWithInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteWithInstanceInput() {
    return this._deleteWithInstance;
  }

  // disk_size - computed: false, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // disk_type - computed: false, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }

  // encrypt - computed: false, optional: true, required: false
  private _encrypt?: boolean | cdktf.IResolvable; 
  public get encrypt() {
    return this.getBooleanAttribute('encrypt');
  }
  public set encrypt(value: boolean | cdktf.IResolvable) {
    this._encrypt = value;
  }
  public resetEncrypt() {
    this._encrypt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptInput() {
    return this._encrypt;
  }

  // snapshot_id - computed: false, optional: true, required: false
  private _snapshotId?: string; 
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }
  public set snapshotId(value: string) {
    this._snapshotId = value;
  }
  public resetSnapshotId() {
    this._snapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdInput() {
    return this._snapshotId;
  }

  // throughput_performance - computed: false, optional: true, required: false
  private _throughputPerformance?: number; 
  public get throughputPerformance() {
    return this.getNumberAttribute('throughput_performance');
  }
  public set throughputPerformance(value: number) {
    this._throughputPerformance = value;
  }
  public resetThroughputPerformance() {
    this._throughputPerformance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputPerformanceInput() {
    return this._throughputPerformance;
  }
}

export class KubernetesNodePoolAutoScalingConfigDataDiskList extends cdktf.ComplexList {
  public internalValue? : KubernetesNodePoolAutoScalingConfigDataDisk[] | cdktf.IResolvable

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
  public get(index: number): KubernetesNodePoolAutoScalingConfigDataDiskOutputReference {
    return new KubernetesNodePoolAutoScalingConfigDataDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesNodePoolAutoScalingConfig {
  /**
  * Backup CVM instance types if specified instance type sold out or mismatch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#backup_instance_types KubernetesNodePool#backup_instance_types}
  */
  readonly backupInstanceTypes?: string[];
  /**
  * bandwidth package id. if user is standard user, then the bandwidth_package_id is needed, or default has bandwidth_package_id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#bandwidth_package_id KubernetesNodePool#bandwidth_package_id}
  */
  readonly bandwidthPackageId?: string;
  /**
  * Name of cam role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#cam_role_name KubernetesNodePool#cam_role_name}
  */
  readonly camRoleName?: string;
  /**
  * CDC ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#cdc_id KubernetesNodePool#cdc_id}
  */
  readonly cdcId?: string;
  /**
  * To specify whether to enable cloud monitor service. Default is TRUE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#enhanced_monitor_service KubernetesNodePool#enhanced_monitor_service}
  */
  readonly enhancedMonitorService?: boolean | cdktf.IResolvable;
  /**
  * To specify whether to enable cloud security service. Default is TRUE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#enhanced_security_service KubernetesNodePool#enhanced_security_service}
  */
  readonly enhancedSecurityService?: boolean | cdktf.IResolvable;
  /**
  * The hostname of the cloud server, dot (.) and dash (-) cannot be used as the first and last characters of HostName and cannot be used consecutively. Windows instances are not supported. Examples of other types (Linux, etc.): The character length is [2, 40], multiple periods are allowed, and there is a paragraph between the dots, and each paragraph is allowed to consist of letters (unlimited case), numbers and dashes (-). Pure numbers are not allowed. For usage, refer to `HostNameSettings` in https://www.tencentcloud.com/document/product/377/31001.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#host_name KubernetesNodePool#host_name}
  */
  readonly hostName?: string;
  /**
  * The style of the host name of the cloud server, the value range includes ORIGINAL and UNIQUE, and the default is ORIGINAL. For usage, refer to `HostNameSettings` in https://www.tencentcloud.com/document/product/377/31001.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#host_name_style KubernetesNodePool#host_name_style}
  */
  readonly hostNameStyle?: string;
  /**
  * Charge type of instance. Valid values are `PREPAID`, `POSTPAID_BY_HOUR`, `SPOTPAID`, `CDCPAID`. The default is `POSTPAID_BY_HOUR`. NOTE: `SPOTPAID` instance must set `spot_instance_type` and `spot_max_price` at the same time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#instance_charge_type KubernetesNodePool#instance_charge_type}
  */
  readonly instanceChargeType?: string;
  /**
  * The tenancy (in month) of the prepaid instance, NOTE: it only works when instance_charge_type is set to `PREPAID`. Valid values are `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `24`, `36`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#instance_charge_type_prepaid_period KubernetesNodePool#instance_charge_type_prepaid_period}
  */
  readonly instanceChargeTypePrepaidPeriod?: number;
  /**
  * Auto renewal flag. Valid values: `NOTIFY_AND_AUTO_RENEW`: notify upon expiration and renew automatically, `NOTIFY_AND_MANUAL_RENEW`: notify upon expiration but do not renew automatically, `DISABLE_NOTIFY_AND_MANUAL_RENEW`: neither notify upon expiration nor renew automatically. Default value: `NOTIFY_AND_MANUAL_RENEW`. If this parameter is specified as `NOTIFY_AND_AUTO_RENEW`, the instance will be automatically renewed on a monthly basis if the account balance is sufficient. NOTE: it only works when instance_charge_type is set to `PREPAID`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#instance_charge_type_prepaid_renew_flag KubernetesNodePool#instance_charge_type_prepaid_renew_flag}
  */
  readonly instanceChargeTypePrepaidRenewFlag?: string;
  /**
  * Instance name, no more than 60 characters. For usage, refer to `InstanceNameSettings` in https://www.tencentcloud.com/document/product/377/31001.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#instance_name KubernetesNodePool#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Type of CVM instance name. Valid values: `ORIGINAL` and `UNIQUE`. Default value: `ORIGINAL`. For usage, refer to `InstanceNameSettings` in https://www.tencentcloud.com/document/product/377/31001.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#instance_name_style KubernetesNodePool#instance_name_style}
  */
  readonly instanceNameStyle?: string;
  /**
  * Specified types of CVM instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#instance_type KubernetesNodePool#instance_type}
  */
  readonly instanceType: string;
  /**
  * Charge types for network traffic. Valid value: `BANDWIDTH_PREPAID`, `TRAFFIC_POSTPAID_BY_HOUR` and `BANDWIDTH_PACKAGE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#internet_charge_type KubernetesNodePool#internet_charge_type}
  */
  readonly internetChargeType?: string;
  /**
  * Max bandwidth of Internet access in Mbps. Default is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#internet_max_bandwidth_out KubernetesNodePool#internet_max_bandwidth_out}
  */
  readonly internetMaxBandwidthOut?: number;
  /**
  * Type of public IP address. WanIP: Ordinary public IP address; HighQualityEIP: High Quality EIP is supported only in Singapore and Hong Kong; AntiDDoSEIP: Anti-DDoS IP is supported only in specific regions. For details, see EIP Product Overview. Specify the type of public IPv4 address to assign a public IPv4 address to the resource. HighQualityEIP and AntiDDoSEIP features are gradually released in select regions. For usage, submit a ticket for consultation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#ipv4_address_type KubernetesNodePool#ipv4_address_type}
  */
  readonly ipv4AddressType?: string;
  /**
  * ID list of keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#key_ids KubernetesNodePool#key_ids}
  */
  readonly keyIds?: string[];
  /**
  * Ordered security groups to which a CVM instance belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#orderly_security_group_ids KubernetesNodePool#orderly_security_group_ids}
  */
  readonly orderlySecurityGroupIds?: string[];
  /**
  * Password to access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#password KubernetesNodePool#password}
  */
  readonly password?: string;
  /**
  * Specify whether to assign an Internet IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#public_ip_assigned KubernetesNodePool#public_ip_assigned}
  */
  readonly publicIpAssigned?: boolean | cdktf.IResolvable;
  /**
  * Security groups to which a CVM instance belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#security_group_ids KubernetesNodePool#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Type of spot instance, only support `one-time` now. Note: it only works when instance_charge_type is set to `SPOTPAID`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#spot_instance_type KubernetesNodePool#spot_instance_type}
  */
  readonly spotInstanceType?: string;
  /**
  * Max price of a spot instance, is the format of decimal string, for example "0.50". Note: it only works when instance_charge_type is set to `SPOTPAID`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#spot_max_price KubernetesNodePool#spot_max_price}
  */
  readonly spotMaxPrice?: string;
  /**
  * Volume of system disk in GB. Default is `50`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#system_disk_size KubernetesNodePool#system_disk_size}
  */
  readonly systemDiskSize?: number;
  /**
  * Type of a CVM disk. Valid value: `LOCAL_BASIC`, `LOCAL_SSD`, `CLOUD_BASIC`, `CLOUD_PREMIUM`, `CLOUD_SSD`, `CLOUD_HSSD`, `CLOUD_TSSD`, `CLOUD_BSSD` and `LOCAL_NVME`. Default is `CLOUD_PREMIUM`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#system_disk_type KubernetesNodePool#system_disk_type}
  */
  readonly systemDiskType?: string;
  /**
  * data_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#data_disk KubernetesNodePool#data_disk}
  */
  readonly dataDisk?: KubernetesNodePoolAutoScalingConfigDataDisk[] | cdktf.IResolvable;
}

export function kubernetesNodePoolAutoScalingConfigToTerraform(struct?: KubernetesNodePoolAutoScalingConfigOutputReference | KubernetesNodePoolAutoScalingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_instance_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.backupInstanceTypes),
    bandwidth_package_id: cdktf.stringToTerraform(struct!.bandwidthPackageId),
    cam_role_name: cdktf.stringToTerraform(struct!.camRoleName),
    cdc_id: cdktf.stringToTerraform(struct!.cdcId),
    enhanced_monitor_service: cdktf.booleanToTerraform(struct!.enhancedMonitorService),
    enhanced_security_service: cdktf.booleanToTerraform(struct!.enhancedSecurityService),
    host_name: cdktf.stringToTerraform(struct!.hostName),
    host_name_style: cdktf.stringToTerraform(struct!.hostNameStyle),
    instance_charge_type: cdktf.stringToTerraform(struct!.instanceChargeType),
    instance_charge_type_prepaid_period: cdktf.numberToTerraform(struct!.instanceChargeTypePrepaidPeriod),
    instance_charge_type_prepaid_renew_flag: cdktf.stringToTerraform(struct!.instanceChargeTypePrepaidRenewFlag),
    instance_name: cdktf.stringToTerraform(struct!.instanceName),
    instance_name_style: cdktf.stringToTerraform(struct!.instanceNameStyle),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    internet_charge_type: cdktf.stringToTerraform(struct!.internetChargeType),
    internet_max_bandwidth_out: cdktf.numberToTerraform(struct!.internetMaxBandwidthOut),
    ipv4_address_type: cdktf.stringToTerraform(struct!.ipv4AddressType),
    key_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keyIds),
    orderly_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.orderlySecurityGroupIds),
    password: cdktf.stringToTerraform(struct!.password),
    public_ip_assigned: cdktf.booleanToTerraform(struct!.publicIpAssigned),
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIds),
    spot_instance_type: cdktf.stringToTerraform(struct!.spotInstanceType),
    spot_max_price: cdktf.stringToTerraform(struct!.spotMaxPrice),
    system_disk_size: cdktf.numberToTerraform(struct!.systemDiskSize),
    system_disk_type: cdktf.stringToTerraform(struct!.systemDiskType),
    data_disk: cdktf.listMapper(kubernetesNodePoolAutoScalingConfigDataDiskToTerraform, true)(struct!.dataDisk),
  }
}


export function kubernetesNodePoolAutoScalingConfigToHclTerraform(struct?: KubernetesNodePoolAutoScalingConfigOutputReference | KubernetesNodePoolAutoScalingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_instance_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.backupInstanceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    bandwidth_package_id: {
      value: cdktf.stringToHclTerraform(struct!.bandwidthPackageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cam_role_name: {
      value: cdktf.stringToHclTerraform(struct!.camRoleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cdc_id: {
      value: cdktf.stringToHclTerraform(struct!.cdcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enhanced_monitor_service: {
      value: cdktf.booleanToHclTerraform(struct!.enhancedMonitorService),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enhanced_security_service: {
      value: cdktf.booleanToHclTerraform(struct!.enhancedSecurityService),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    host_name: {
      value: cdktf.stringToHclTerraform(struct!.hostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_name_style: {
      value: cdktf.stringToHclTerraform(struct!.hostNameStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_charge_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceChargeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_charge_type_prepaid_period: {
      value: cdktf.numberToHclTerraform(struct!.instanceChargeTypePrepaidPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_charge_type_prepaid_renew_flag: {
      value: cdktf.stringToHclTerraform(struct!.instanceChargeTypePrepaidRenewFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_name: {
      value: cdktf.stringToHclTerraform(struct!.instanceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_name_style: {
      value: cdktf.stringToHclTerraform(struct!.instanceNameStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internet_charge_type: {
      value: cdktf.stringToHclTerraform(struct!.internetChargeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internet_max_bandwidth_out: {
      value: cdktf.numberToHclTerraform(struct!.internetMaxBandwidthOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_address_type: {
      value: cdktf.stringToHclTerraform(struct!.ipv4AddressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keyIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    orderly_security_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.orderlySecurityGroupIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_ip_assigned: {
      value: cdktf.booleanToHclTerraform(struct!.publicIpAssigned),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    security_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    spot_instance_type: {
      value: cdktf.stringToHclTerraform(struct!.spotInstanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spot_max_price: {
      value: cdktf.stringToHclTerraform(struct!.spotMaxPrice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_disk_size: {
      value: cdktf.numberToHclTerraform(struct!.systemDiskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    system_disk_type: {
      value: cdktf.stringToHclTerraform(struct!.systemDiskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_disk: {
      value: cdktf.listMapperHcl(kubernetesNodePoolAutoScalingConfigDataDiskToHclTerraform, true)(struct!.dataDisk),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesNodePoolAutoScalingConfigDataDiskList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesNodePoolAutoScalingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesNodePoolAutoScalingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupInstanceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupInstanceTypes = this._backupInstanceTypes;
    }
    if (this._bandwidthPackageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthPackageId = this._bandwidthPackageId;
    }
    if (this._camRoleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.camRoleName = this._camRoleName;
    }
    if (this._cdcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cdcId = this._cdcId;
    }
    if (this._enhancedMonitorService !== undefined) {
      hasAnyValues = true;
      internalValueResult.enhancedMonitorService = this._enhancedMonitorService;
    }
    if (this._enhancedSecurityService !== undefined) {
      hasAnyValues = true;
      internalValueResult.enhancedSecurityService = this._enhancedSecurityService;
    }
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._hostNameStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostNameStyle = this._hostNameStyle;
    }
    if (this._instanceChargeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceChargeType = this._instanceChargeType;
    }
    if (this._instanceChargeTypePrepaidPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceChargeTypePrepaidPeriod = this._instanceChargeTypePrepaidPeriod;
    }
    if (this._instanceChargeTypePrepaidRenewFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceChargeTypePrepaidRenewFlag = this._instanceChargeTypePrepaidRenewFlag;
    }
    if (this._instanceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceName = this._instanceName;
    }
    if (this._instanceNameStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceNameStyle = this._instanceNameStyle;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._internetChargeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.internetChargeType = this._internetChargeType;
    }
    if (this._internetMaxBandwidthOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.internetMaxBandwidthOut = this._internetMaxBandwidthOut;
    }
    if (this._ipv4AddressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4AddressType = this._ipv4AddressType;
    }
    if (this._keyIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyIds = this._keyIds;
    }
    if (this._orderlySecurityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.orderlySecurityGroupIds = this._orderlySecurityGroupIds;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._publicIpAssigned !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIpAssigned = this._publicIpAssigned;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._spotInstanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotInstanceType = this._spotInstanceType;
    }
    if (this._spotMaxPrice !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotMaxPrice = this._spotMaxPrice;
    }
    if (this._systemDiskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemDiskSize = this._systemDiskSize;
    }
    if (this._systemDiskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemDiskType = this._systemDiskType;
    }
    if (this._dataDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataDisk = this._dataDisk?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesNodePoolAutoScalingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupInstanceTypes = undefined;
      this._bandwidthPackageId = undefined;
      this._camRoleName = undefined;
      this._cdcId = undefined;
      this._enhancedMonitorService = undefined;
      this._enhancedSecurityService = undefined;
      this._hostName = undefined;
      this._hostNameStyle = undefined;
      this._instanceChargeType = undefined;
      this._instanceChargeTypePrepaidPeriod = undefined;
      this._instanceChargeTypePrepaidRenewFlag = undefined;
      this._instanceName = undefined;
      this._instanceNameStyle = undefined;
      this._instanceType = undefined;
      this._internetChargeType = undefined;
      this._internetMaxBandwidthOut = undefined;
      this._ipv4AddressType = undefined;
      this._keyIds = undefined;
      this._orderlySecurityGroupIds = undefined;
      this._password = undefined;
      this._publicIpAssigned = undefined;
      this._securityGroupIds = undefined;
      this._spotInstanceType = undefined;
      this._spotMaxPrice = undefined;
      this._systemDiskSize = undefined;
      this._systemDiskType = undefined;
      this._dataDisk.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backupInstanceTypes = value.backupInstanceTypes;
      this._bandwidthPackageId = value.bandwidthPackageId;
      this._camRoleName = value.camRoleName;
      this._cdcId = value.cdcId;
      this._enhancedMonitorService = value.enhancedMonitorService;
      this._enhancedSecurityService = value.enhancedSecurityService;
      this._hostName = value.hostName;
      this._hostNameStyle = value.hostNameStyle;
      this._instanceChargeType = value.instanceChargeType;
      this._instanceChargeTypePrepaidPeriod = value.instanceChargeTypePrepaidPeriod;
      this._instanceChargeTypePrepaidRenewFlag = value.instanceChargeTypePrepaidRenewFlag;
      this._instanceName = value.instanceName;
      this._instanceNameStyle = value.instanceNameStyle;
      this._instanceType = value.instanceType;
      this._internetChargeType = value.internetChargeType;
      this._internetMaxBandwidthOut = value.internetMaxBandwidthOut;
      this._ipv4AddressType = value.ipv4AddressType;
      this._keyIds = value.keyIds;
      this._orderlySecurityGroupIds = value.orderlySecurityGroupIds;
      this._password = value.password;
      this._publicIpAssigned = value.publicIpAssigned;
      this._securityGroupIds = value.securityGroupIds;
      this._spotInstanceType = value.spotInstanceType;
      this._spotMaxPrice = value.spotMaxPrice;
      this._systemDiskSize = value.systemDiskSize;
      this._systemDiskType = value.systemDiskType;
      this._dataDisk.internalValue = value.dataDisk;
    }
  }

  // backup_instance_types - computed: false, optional: true, required: false
  private _backupInstanceTypes?: string[]; 
  public get backupInstanceTypes() {
    return this.getListAttribute('backup_instance_types');
  }
  public set backupInstanceTypes(value: string[]) {
    this._backupInstanceTypes = value;
  }
  public resetBackupInstanceTypes() {
    this._backupInstanceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupInstanceTypesInput() {
    return this._backupInstanceTypes;
  }

  // bandwidth_package_id - computed: false, optional: true, required: false
  private _bandwidthPackageId?: string; 
  public get bandwidthPackageId() {
    return this.getStringAttribute('bandwidth_package_id');
  }
  public set bandwidthPackageId(value: string) {
    this._bandwidthPackageId = value;
  }
  public resetBandwidthPackageId() {
    this._bandwidthPackageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthPackageIdInput() {
    return this._bandwidthPackageId;
  }

  // cam_role_name - computed: false, optional: true, required: false
  private _camRoleName?: string; 
  public get camRoleName() {
    return this.getStringAttribute('cam_role_name');
  }
  public set camRoleName(value: string) {
    this._camRoleName = value;
  }
  public resetCamRoleName() {
    this._camRoleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get camRoleNameInput() {
    return this._camRoleName;
  }

  // cdc_id - computed: false, optional: true, required: false
  private _cdcId?: string; 
  public get cdcId() {
    return this.getStringAttribute('cdc_id');
  }
  public set cdcId(value: string) {
    this._cdcId = value;
  }
  public resetCdcId() {
    this._cdcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdcIdInput() {
    return this._cdcId;
  }

  // enhanced_monitor_service - computed: false, optional: true, required: false
  private _enhancedMonitorService?: boolean | cdktf.IResolvable; 
  public get enhancedMonitorService() {
    return this.getBooleanAttribute('enhanced_monitor_service');
  }
  public set enhancedMonitorService(value: boolean | cdktf.IResolvable) {
    this._enhancedMonitorService = value;
  }
  public resetEnhancedMonitorService() {
    this._enhancedMonitorService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedMonitorServiceInput() {
    return this._enhancedMonitorService;
  }

  // enhanced_security_service - computed: false, optional: true, required: false
  private _enhancedSecurityService?: boolean | cdktf.IResolvable; 
  public get enhancedSecurityService() {
    return this.getBooleanAttribute('enhanced_security_service');
  }
  public set enhancedSecurityService(value: boolean | cdktf.IResolvable) {
    this._enhancedSecurityService = value;
  }
  public resetEnhancedSecurityService() {
    this._enhancedSecurityService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedSecurityServiceInput() {
    return this._enhancedSecurityService;
  }

  // host_name - computed: true, optional: true, required: false
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // host_name_style - computed: true, optional: true, required: false
  private _hostNameStyle?: string; 
  public get hostNameStyle() {
    return this.getStringAttribute('host_name_style');
  }
  public set hostNameStyle(value: string) {
    this._hostNameStyle = value;
  }
  public resetHostNameStyle() {
    this._hostNameStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameStyleInput() {
    return this._hostNameStyle;
  }

  // instance_charge_type - computed: true, optional: true, required: false
  private _instanceChargeType?: string; 
  public get instanceChargeType() {
    return this.getStringAttribute('instance_charge_type');
  }
  public set instanceChargeType(value: string) {
    this._instanceChargeType = value;
  }
  public resetInstanceChargeType() {
    this._instanceChargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceChargeTypeInput() {
    return this._instanceChargeType;
  }

  // instance_charge_type_prepaid_period - computed: false, optional: true, required: false
  private _instanceChargeTypePrepaidPeriod?: number; 
  public get instanceChargeTypePrepaidPeriod() {
    return this.getNumberAttribute('instance_charge_type_prepaid_period');
  }
  public set instanceChargeTypePrepaidPeriod(value: number) {
    this._instanceChargeTypePrepaidPeriod = value;
  }
  public resetInstanceChargeTypePrepaidPeriod() {
    this._instanceChargeTypePrepaidPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceChargeTypePrepaidPeriodInput() {
    return this._instanceChargeTypePrepaidPeriod;
  }

  // instance_charge_type_prepaid_renew_flag - computed: true, optional: true, required: false
  private _instanceChargeTypePrepaidRenewFlag?: string; 
  public get instanceChargeTypePrepaidRenewFlag() {
    return this.getStringAttribute('instance_charge_type_prepaid_renew_flag');
  }
  public set instanceChargeTypePrepaidRenewFlag(value: string) {
    this._instanceChargeTypePrepaidRenewFlag = value;
  }
  public resetInstanceChargeTypePrepaidRenewFlag() {
    this._instanceChargeTypePrepaidRenewFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceChargeTypePrepaidRenewFlagInput() {
    return this._instanceChargeTypePrepaidRenewFlag;
  }

  // instance_name - computed: true, optional: true, required: false
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // instance_name_style - computed: true, optional: true, required: false
  private _instanceNameStyle?: string; 
  public get instanceNameStyle() {
    return this.getStringAttribute('instance_name_style');
  }
  public set instanceNameStyle(value: string) {
    this._instanceNameStyle = value;
  }
  public resetInstanceNameStyle() {
    this._instanceNameStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameStyleInput() {
    return this._instanceNameStyle;
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // internet_charge_type - computed: false, optional: true, required: false
  private _internetChargeType?: string; 
  public get internetChargeType() {
    return this.getStringAttribute('internet_charge_type');
  }
  public set internetChargeType(value: string) {
    this._internetChargeType = value;
  }
  public resetInternetChargeType() {
    this._internetChargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetChargeTypeInput() {
    return this._internetChargeType;
  }

  // internet_max_bandwidth_out - computed: false, optional: true, required: false
  private _internetMaxBandwidthOut?: number; 
  public get internetMaxBandwidthOut() {
    return this.getNumberAttribute('internet_max_bandwidth_out');
  }
  public set internetMaxBandwidthOut(value: number) {
    this._internetMaxBandwidthOut = value;
  }
  public resetInternetMaxBandwidthOut() {
    this._internetMaxBandwidthOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetMaxBandwidthOutInput() {
    return this._internetMaxBandwidthOut;
  }

  // ipv4_address_type - computed: true, optional: true, required: false
  private _ipv4AddressType?: string; 
  public get ipv4AddressType() {
    return this.getStringAttribute('ipv4_address_type');
  }
  public set ipv4AddressType(value: string) {
    this._ipv4AddressType = value;
  }
  public resetIpv4AddressType() {
    this._ipv4AddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressTypeInput() {
    return this._ipv4AddressType;
  }

  // key_ids - computed: false, optional: true, required: false
  private _keyIds?: string[]; 
  public get keyIds() {
    return this.getListAttribute('key_ids');
  }
  public set keyIds(value: string[]) {
    this._keyIds = value;
  }
  public resetKeyIds() {
    this._keyIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdsInput() {
    return this._keyIds;
  }

  // orderly_security_group_ids - computed: true, optional: true, required: false
  private _orderlySecurityGroupIds?: string[]; 
  public get orderlySecurityGroupIds() {
    return this.getListAttribute('orderly_security_group_ids');
  }
  public set orderlySecurityGroupIds(value: string[]) {
    this._orderlySecurityGroupIds = value;
  }
  public resetOrderlySecurityGroupIds() {
    this._orderlySecurityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderlySecurityGroupIdsInput() {
    return this._orderlySecurityGroupIds;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // public_ip_assigned - computed: false, optional: true, required: false
  private _publicIpAssigned?: boolean | cdktf.IResolvable; 
  public get publicIpAssigned() {
    return this.getBooleanAttribute('public_ip_assigned');
  }
  public set publicIpAssigned(value: boolean | cdktf.IResolvable) {
    this._publicIpAssigned = value;
  }
  public resetPublicIpAssigned() {
    this._publicIpAssigned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpAssignedInput() {
    return this._publicIpAssigned;
  }

  // security_group_ids - computed: true, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // spot_instance_type - computed: false, optional: true, required: false
  private _spotInstanceType?: string; 
  public get spotInstanceType() {
    return this.getStringAttribute('spot_instance_type');
  }
  public set spotInstanceType(value: string) {
    this._spotInstanceType = value;
  }
  public resetSpotInstanceType() {
    this._spotInstanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotInstanceTypeInput() {
    return this._spotInstanceType;
  }

  // spot_max_price - computed: false, optional: true, required: false
  private _spotMaxPrice?: string; 
  public get spotMaxPrice() {
    return this.getStringAttribute('spot_max_price');
  }
  public set spotMaxPrice(value: string) {
    this._spotMaxPrice = value;
  }
  public resetSpotMaxPrice() {
    this._spotMaxPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotMaxPriceInput() {
    return this._spotMaxPrice;
  }

  // system_disk_size - computed: false, optional: true, required: false
  private _systemDiskSize?: number; 
  public get systemDiskSize() {
    return this.getNumberAttribute('system_disk_size');
  }
  public set systemDiskSize(value: number) {
    this._systemDiskSize = value;
  }
  public resetSystemDiskSize() {
    this._systemDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskSizeInput() {
    return this._systemDiskSize;
  }

  // system_disk_type - computed: false, optional: true, required: false
  private _systemDiskType?: string; 
  public get systemDiskType() {
    return this.getStringAttribute('system_disk_type');
  }
  public set systemDiskType(value: string) {
    this._systemDiskType = value;
  }
  public resetSystemDiskType() {
    this._systemDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskTypeInput() {
    return this._systemDiskType;
  }

  // data_disk - computed: false, optional: true, required: false
  private _dataDisk = new KubernetesNodePoolAutoScalingConfigDataDiskList(this, "data_disk", false);
  public get dataDisk() {
    return this._dataDisk;
  }
  public putDataDisk(value: KubernetesNodePoolAutoScalingConfigDataDisk[] | cdktf.IResolvable) {
    this._dataDisk.internalValue = value;
  }
  public resetDataDisk() {
    this._dataDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskInput() {
    return this._dataDisk.internalValue;
  }
}
export interface KubernetesNodePoolNodeConfigDataDisk {
  /**
  * Indicate whether to auto format and mount or not. Default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#auto_format_and_mount KubernetesNodePool#auto_format_and_mount}
  */
  readonly autoFormatAndMount?: boolean | cdktf.IResolvable;
  /**
  * The name of the device or partition to mount. NOTE: this argument doesn't support setting in node pool, or will leads to mount error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#disk_partition KubernetesNodePool#disk_partition}
  */
  readonly diskPartition?: string;
  /**
  * Volume of disk in GB. Default is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#disk_size KubernetesNodePool#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Types of disk. Valid value: `LOCAL_BASIC`, `LOCAL_SSD`, `CLOUD_BASIC`, `CLOUD_PREMIUM`, `CLOUD_SSD`, `CLOUD_HSSD`, `CLOUD_TSSD`, `CLOUD_BSSD` and `LOCAL_NVME`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#disk_type KubernetesNodePool#disk_type}
  */
  readonly diskType?: string;
  /**
  * File system, e.g. `ext3/ext4/xfs`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#file_system KubernetesNodePool#file_system}
  */
  readonly fileSystem?: string;
  /**
  * Mount target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#mount_target KubernetesNodePool#mount_target}
  */
  readonly mountTarget?: string;
}

export function kubernetesNodePoolNodeConfigDataDiskToTerraform(struct?: KubernetesNodePoolNodeConfigDataDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_format_and_mount: cdktf.booleanToTerraform(struct!.autoFormatAndMount),
    disk_partition: cdktf.stringToTerraform(struct!.diskPartition),
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    file_system: cdktf.stringToTerraform(struct!.fileSystem),
    mount_target: cdktf.stringToTerraform(struct!.mountTarget),
  }
}


export function kubernetesNodePoolNodeConfigDataDiskToHclTerraform(struct?: KubernetesNodePoolNodeConfigDataDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_format_and_mount: {
      value: cdktf.booleanToHclTerraform(struct!.autoFormatAndMount),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disk_partition: {
      value: cdktf.stringToHclTerraform(struct!.diskPartition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_size: {
      value: cdktf.numberToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_system: {
      value: cdktf.stringToHclTerraform(struct!.fileSystem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_target: {
      value: cdktf.stringToHclTerraform(struct!.mountTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesNodePoolNodeConfigDataDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesNodePoolNodeConfigDataDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoFormatAndMount !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoFormatAndMount = this._autoFormatAndMount;
    }
    if (this._diskPartition !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskPartition = this._diskPartition;
    }
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._fileSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystem = this._fileSystem;
    }
    if (this._mountTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountTarget = this._mountTarget;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesNodePoolNodeConfigDataDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoFormatAndMount = undefined;
      this._diskPartition = undefined;
      this._diskSize = undefined;
      this._diskType = undefined;
      this._fileSystem = undefined;
      this._mountTarget = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoFormatAndMount = value.autoFormatAndMount;
      this._diskPartition = value.diskPartition;
      this._diskSize = value.diskSize;
      this._diskType = value.diskType;
      this._fileSystem = value.fileSystem;
      this._mountTarget = value.mountTarget;
    }
  }

  // auto_format_and_mount - computed: false, optional: true, required: false
  private _autoFormatAndMount?: boolean | cdktf.IResolvable; 
  public get autoFormatAndMount() {
    return this.getBooleanAttribute('auto_format_and_mount');
  }
  public set autoFormatAndMount(value: boolean | cdktf.IResolvable) {
    this._autoFormatAndMount = value;
  }
  public resetAutoFormatAndMount() {
    this._autoFormatAndMount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoFormatAndMountInput() {
    return this._autoFormatAndMount;
  }

  // disk_partition - computed: false, optional: true, required: false
  private _diskPartition?: string; 
  public get diskPartition() {
    return this.getStringAttribute('disk_partition');
  }
  public set diskPartition(value: string) {
    this._diskPartition = value;
  }
  public resetDiskPartition() {
    this._diskPartition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskPartitionInput() {
    return this._diskPartition;
  }

  // disk_size - computed: false, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // disk_type - computed: false, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }

  // file_system - computed: false, optional: true, required: false
  private _fileSystem?: string; 
  public get fileSystem() {
    return this.getStringAttribute('file_system');
  }
  public set fileSystem(value: string) {
    this._fileSystem = value;
  }
  public resetFileSystem() {
    this._fileSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemInput() {
    return this._fileSystem;
  }

  // mount_target - computed: false, optional: true, required: false
  private _mountTarget?: string; 
  public get mountTarget() {
    return this.getStringAttribute('mount_target');
  }
  public set mountTarget(value: string) {
    this._mountTarget = value;
  }
  public resetMountTarget() {
    this._mountTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountTargetInput() {
    return this._mountTarget;
  }
}

export class KubernetesNodePoolNodeConfigDataDiskList extends cdktf.ComplexList {
  public internalValue? : KubernetesNodePoolNodeConfigDataDisk[] | cdktf.IResolvable

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
  public get(index: number): KubernetesNodePoolNodeConfigDataDiskOutputReference {
    return new KubernetesNodePoolNodeConfigDataDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesNodePoolNodeConfigGpuArgs {
  /**
  * CUDA  version. Format like: `{ version: String, name: String }`. `version`: Version of GPU driver or CUDA; `name`: Name of GPU driver or CUDA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#cuda KubernetesNodePool#cuda}
  */
  readonly cuda?: { [key: string]: string };
  /**
  * cuDNN version. Format like: `{ version: String, name: String, doc_name: String, dev_name: String }`. `version`: cuDNN version; `name`: cuDNN name; `doc_name`: Doc name of cuDNN; `dev_name`: Dev name of cuDNN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#cudnn KubernetesNodePool#cudnn}
  */
  readonly cudnn?: { [key: string]: string };
  /**
  * Custom GPU driver. Format like: `{address: String}`. `address`: URL of custom GPU driver address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#custom_driver KubernetesNodePool#custom_driver}
  */
  readonly customDriver?: { [key: string]: string };
  /**
  * GPU driver version. Format like: `{ version: String, name: String }`. `version`: Version of GPU driver or CUDA; `name`: Name of GPU driver or CUDA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#driver KubernetesNodePool#driver}
  */
  readonly driver?: { [key: string]: string };
  /**
  * Whether to enable MIG.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#mig_enable KubernetesNodePool#mig_enable}
  */
  readonly migEnable?: boolean | cdktf.IResolvable;
}

export function kubernetesNodePoolNodeConfigGpuArgsToTerraform(struct?: KubernetesNodePoolNodeConfigGpuArgsOutputReference | KubernetesNodePoolNodeConfigGpuArgs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cuda: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.cuda),
    cudnn: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.cudnn),
    custom_driver: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.customDriver),
    driver: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.driver),
    mig_enable: cdktf.booleanToTerraform(struct!.migEnable),
  }
}


export function kubernetesNodePoolNodeConfigGpuArgsToHclTerraform(struct?: KubernetesNodePoolNodeConfigGpuArgsOutputReference | KubernetesNodePoolNodeConfigGpuArgs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cuda: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.cuda),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    cudnn: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.cudnn),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    custom_driver: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.customDriver),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    driver: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.driver),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    mig_enable: {
      value: cdktf.booleanToHclTerraform(struct!.migEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesNodePoolNodeConfigGpuArgsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesNodePoolNodeConfigGpuArgs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cuda !== undefined) {
      hasAnyValues = true;
      internalValueResult.cuda = this._cuda;
    }
    if (this._cudnn !== undefined) {
      hasAnyValues = true;
      internalValueResult.cudnn = this._cudnn;
    }
    if (this._customDriver !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDriver = this._customDriver;
    }
    if (this._driver !== undefined) {
      hasAnyValues = true;
      internalValueResult.driver = this._driver;
    }
    if (this._migEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.migEnable = this._migEnable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesNodePoolNodeConfigGpuArgs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cuda = undefined;
      this._cudnn = undefined;
      this._customDriver = undefined;
      this._driver = undefined;
      this._migEnable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cuda = value.cuda;
      this._cudnn = value.cudnn;
      this._customDriver = value.customDriver;
      this._driver = value.driver;
      this._migEnable = value.migEnable;
    }
  }

  // cuda - computed: false, optional: true, required: false
  private _cuda?: { [key: string]: string }; 
  public get cuda() {
    return this.getStringMapAttribute('cuda');
  }
  public set cuda(value: { [key: string]: string }) {
    this._cuda = value;
  }
  public resetCuda() {
    this._cuda = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cudaInput() {
    return this._cuda;
  }

  // cudnn - computed: false, optional: true, required: false
  private _cudnn?: { [key: string]: string }; 
  public get cudnn() {
    return this.getStringMapAttribute('cudnn');
  }
  public set cudnn(value: { [key: string]: string }) {
    this._cudnn = value;
  }
  public resetCudnn() {
    this._cudnn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cudnnInput() {
    return this._cudnn;
  }

  // custom_driver - computed: false, optional: true, required: false
  private _customDriver?: { [key: string]: string }; 
  public get customDriver() {
    return this.getStringMapAttribute('custom_driver');
  }
  public set customDriver(value: { [key: string]: string }) {
    this._customDriver = value;
  }
  public resetCustomDriver() {
    this._customDriver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDriverInput() {
    return this._customDriver;
  }

  // driver - computed: false, optional: true, required: false
  private _driver?: { [key: string]: string }; 
  public get driver() {
    return this.getStringMapAttribute('driver');
  }
  public set driver(value: { [key: string]: string }) {
    this._driver = value;
  }
  public resetDriver() {
    this._driver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverInput() {
    return this._driver;
  }

  // mig_enable - computed: false, optional: true, required: false
  private _migEnable?: boolean | cdktf.IResolvable; 
  public get migEnable() {
    return this.getBooleanAttribute('mig_enable');
  }
  public set migEnable(value: boolean | cdktf.IResolvable) {
    this._migEnable = value;
  }
  public resetMigEnable() {
    this._migEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migEnableInput() {
    return this._migEnable;
  }
}
export interface KubernetesNodePoolNodeConfig {
  /**
  * Indicate to set desired pod number in node. valid when the cluster is podCIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#desired_pod_num KubernetesNodePool#desired_pod_num}
  */
  readonly desiredPodNum?: number;
  /**
  * Docker graph path. Default is `/var/lib/docker`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#docker_graph_path KubernetesNodePool#docker_graph_path}
  */
  readonly dockerGraphPath?: string;
  /**
  * Custom parameter information related to the node. This is a white-list parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#extra_args KubernetesNodePool#extra_args}
  */
  readonly extraArgs?: string[];
  /**
  * Indicate to schedule the adding node or not. Default is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#is_schedule KubernetesNodePool#is_schedule}
  */
  readonly isSchedule?: boolean | cdktf.IResolvable;
  /**
  * Mount target. Default is not mounting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#mount_target KubernetesNodePool#mount_target}
  */
  readonly mountTarget?: string;
  /**
  * Base64-encoded user script, executed before initializing the node, currently only effective for adding existing nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#pre_start_user_script KubernetesNodePool#pre_start_user_script}
  */
  readonly preStartUserScript?: string;
  /**
  * Base64-encoded User Data text, the length limit is 16KB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#user_data KubernetesNodePool#user_data}
  */
  readonly userData?: string;
  /**
  * data_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#data_disk KubernetesNodePool#data_disk}
  */
  readonly dataDisk?: KubernetesNodePoolNodeConfigDataDisk[] | cdktf.IResolvable;
  /**
  * gpu_args block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#gpu_args KubernetesNodePool#gpu_args}
  */
  readonly gpuArgs?: KubernetesNodePoolNodeConfigGpuArgs;
}

export function kubernetesNodePoolNodeConfigToTerraform(struct?: KubernetesNodePoolNodeConfigOutputReference | KubernetesNodePoolNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    desired_pod_num: cdktf.numberToTerraform(struct!.desiredPodNum),
    docker_graph_path: cdktf.stringToTerraform(struct!.dockerGraphPath),
    extra_args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraArgs),
    is_schedule: cdktf.booleanToTerraform(struct!.isSchedule),
    mount_target: cdktf.stringToTerraform(struct!.mountTarget),
    pre_start_user_script: cdktf.stringToTerraform(struct!.preStartUserScript),
    user_data: cdktf.stringToTerraform(struct!.userData),
    data_disk: cdktf.listMapper(kubernetesNodePoolNodeConfigDataDiskToTerraform, true)(struct!.dataDisk),
    gpu_args: kubernetesNodePoolNodeConfigGpuArgsToTerraform(struct!.gpuArgs),
  }
}


export function kubernetesNodePoolNodeConfigToHclTerraform(struct?: KubernetesNodePoolNodeConfigOutputReference | KubernetesNodePoolNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    desired_pod_num: {
      value: cdktf.numberToHclTerraform(struct!.desiredPodNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    docker_graph_path: {
      value: cdktf.stringToHclTerraform(struct!.dockerGraphPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extra_args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraArgs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    is_schedule: {
      value: cdktf.booleanToHclTerraform(struct!.isSchedule),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mount_target: {
      value: cdktf.stringToHclTerraform(struct!.mountTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pre_start_user_script: {
      value: cdktf.stringToHclTerraform(struct!.preStartUserScript),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_data: {
      value: cdktf.stringToHclTerraform(struct!.userData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_disk: {
      value: cdktf.listMapperHcl(kubernetesNodePoolNodeConfigDataDiskToHclTerraform, true)(struct!.dataDisk),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesNodePoolNodeConfigDataDiskList",
    },
    gpu_args: {
      value: kubernetesNodePoolNodeConfigGpuArgsToHclTerraform(struct!.gpuArgs),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesNodePoolNodeConfigGpuArgsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesNodePoolNodeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesNodePoolNodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._desiredPodNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.desiredPodNum = this._desiredPodNum;
    }
    if (this._dockerGraphPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerGraphPath = this._dockerGraphPath;
    }
    if (this._extraArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraArgs = this._extraArgs;
    }
    if (this._isSchedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSchedule = this._isSchedule;
    }
    if (this._mountTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountTarget = this._mountTarget;
    }
    if (this._preStartUserScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.preStartUserScript = this._preStartUserScript;
    }
    if (this._userData !== undefined) {
      hasAnyValues = true;
      internalValueResult.userData = this._userData;
    }
    if (this._dataDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataDisk = this._dataDisk?.internalValue;
    }
    if (this._gpuArgs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuArgs = this._gpuArgs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesNodePoolNodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._desiredPodNum = undefined;
      this._dockerGraphPath = undefined;
      this._extraArgs = undefined;
      this._isSchedule = undefined;
      this._mountTarget = undefined;
      this._preStartUserScript = undefined;
      this._userData = undefined;
      this._dataDisk.internalValue = undefined;
      this._gpuArgs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._desiredPodNum = value.desiredPodNum;
      this._dockerGraphPath = value.dockerGraphPath;
      this._extraArgs = value.extraArgs;
      this._isSchedule = value.isSchedule;
      this._mountTarget = value.mountTarget;
      this._preStartUserScript = value.preStartUserScript;
      this._userData = value.userData;
      this._dataDisk.internalValue = value.dataDisk;
      this._gpuArgs.internalValue = value.gpuArgs;
    }
  }

  // desired_pod_num - computed: false, optional: true, required: false
  private _desiredPodNum?: number; 
  public get desiredPodNum() {
    return this.getNumberAttribute('desired_pod_num');
  }
  public set desiredPodNum(value: number) {
    this._desiredPodNum = value;
  }
  public resetDesiredPodNum() {
    this._desiredPodNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredPodNumInput() {
    return this._desiredPodNum;
  }

  // docker_graph_path - computed: false, optional: true, required: false
  private _dockerGraphPath?: string; 
  public get dockerGraphPath() {
    return this.getStringAttribute('docker_graph_path');
  }
  public set dockerGraphPath(value: string) {
    this._dockerGraphPath = value;
  }
  public resetDockerGraphPath() {
    this._dockerGraphPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerGraphPathInput() {
    return this._dockerGraphPath;
  }

  // extra_args - computed: false, optional: true, required: false
  private _extraArgs?: string[]; 
  public get extraArgs() {
    return this.getListAttribute('extra_args');
  }
  public set extraArgs(value: string[]) {
    this._extraArgs = value;
  }
  public resetExtraArgs() {
    this._extraArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraArgsInput() {
    return this._extraArgs;
  }

  // is_schedule - computed: false, optional: true, required: false
  private _isSchedule?: boolean | cdktf.IResolvable; 
  public get isSchedule() {
    return this.getBooleanAttribute('is_schedule');
  }
  public set isSchedule(value: boolean | cdktf.IResolvable) {
    this._isSchedule = value;
  }
  public resetIsSchedule() {
    this._isSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isScheduleInput() {
    return this._isSchedule;
  }

  // mount_target - computed: false, optional: true, required: false
  private _mountTarget?: string; 
  public get mountTarget() {
    return this.getStringAttribute('mount_target');
  }
  public set mountTarget(value: string) {
    this._mountTarget = value;
  }
  public resetMountTarget() {
    this._mountTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountTargetInput() {
    return this._mountTarget;
  }

  // pre_start_user_script - computed: false, optional: true, required: false
  private _preStartUserScript?: string; 
  public get preStartUserScript() {
    return this.getStringAttribute('pre_start_user_script');
  }
  public set preStartUserScript(value: string) {
    this._preStartUserScript = value;
  }
  public resetPreStartUserScript() {
    this._preStartUserScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preStartUserScriptInput() {
    return this._preStartUserScript;
  }

  // user_data - computed: false, optional: true, required: false
  private _userData?: string; 
  public get userData() {
    return this.getStringAttribute('user_data');
  }
  public set userData(value: string) {
    this._userData = value;
  }
  public resetUserData() {
    this._userData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData;
  }

  // data_disk - computed: false, optional: true, required: false
  private _dataDisk = new KubernetesNodePoolNodeConfigDataDiskList(this, "data_disk", false);
  public get dataDisk() {
    return this._dataDisk;
  }
  public putDataDisk(value: KubernetesNodePoolNodeConfigDataDisk[] | cdktf.IResolvable) {
    this._dataDisk.internalValue = value;
  }
  public resetDataDisk() {
    this._dataDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskInput() {
    return this._dataDisk.internalValue;
  }

  // gpu_args - computed: false, optional: true, required: false
  private _gpuArgs = new KubernetesNodePoolNodeConfigGpuArgsOutputReference(this, "gpu_args");
  public get gpuArgs() {
    return this._gpuArgs;
  }
  public putGpuArgs(value: KubernetesNodePoolNodeConfigGpuArgs) {
    this._gpuArgs.internalValue = value;
  }
  public resetGpuArgs() {
    this._gpuArgs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuArgsInput() {
    return this._gpuArgs.internalValue;
  }
}
export interface KubernetesNodePoolTaints {
  /**
  * Effect of the taint. Valid values are: `NoSchedule`, `PreferNoSchedule`, `NoExecute`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#effect KubernetesNodePool#effect}
  */
  readonly effect: string;
  /**
  * Key of the taint. The taint key name does not exceed 63 characters, only supports English, numbers,'/','-', and does not allow beginning with ('/').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#key KubernetesNodePool#key}
  */
  readonly key: string;
  /**
  * Value of the taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#value KubernetesNodePool#value}
  */
  readonly value: string;
}

export function kubernetesNodePoolTaintsToTerraform(struct?: KubernetesNodePoolTaints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function kubernetesNodePoolTaintsToHclTerraform(struct?: KubernetesNodePoolTaints | cdktf.IResolvable): any {
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

export class KubernetesNodePoolTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesNodePoolTaints | cdktf.IResolvable | undefined {
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
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesNodePoolTaints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class KubernetesNodePoolTaintsList extends cdktf.ComplexList {
  public internalValue? : KubernetesNodePoolTaints[] | cdktf.IResolvable

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
  public get(index: number): KubernetesNodePoolTaintsOutputReference {
    return new KubernetesNodePoolTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesNodePoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#create KubernetesNodePool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#update KubernetesNodePool#update}
  */
  readonly update?: string;
}

export function kubernetesNodePoolTimeoutsToTerraform(struct?: KubernetesNodePoolTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function kubernetesNodePoolTimeoutsToHclTerraform(struct?: KubernetesNodePoolTimeouts | cdktf.IResolvable): any {
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

export class KubernetesNodePoolTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KubernetesNodePoolTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesNodePoolTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool tencentcloud_kubernetes_node_pool}
*/
export class KubernetesNodePool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_kubernetes_node_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KubernetesNodePool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KubernetesNodePool to import
  * @param importFromId The id of the existing KubernetesNodePool that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KubernetesNodePool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_kubernetes_node_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/kubernetes_node_pool tencentcloud_kubernetes_node_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubernetesNodePoolConfig
  */
  public constructor(scope: Construct, id: string, config: KubernetesNodePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_kubernetes_node_pool',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.40',
        providerVersionConstraint: '1.82.40'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoUpdateInstanceTags = config.autoUpdateInstanceTags;
    this._clusterId = config.clusterId;
    this._defaultCooldown = config.defaultCooldown;
    this._deleteKeepInstance = config.deleteKeepInstance;
    this._deletionProtection = config.deletionProtection;
    this._desiredCapacity = config.desiredCapacity;
    this._enableAutoScale = config.enableAutoScale;
    this._id = config.id;
    this._labels = config.labels;
    this._maxSize = config.maxSize;
    this._minSize = config.minSize;
    this._multiZoneSubnetPolicy = config.multiZoneSubnetPolicy;
    this._name = config.name;
    this._nodeOs = config.nodeOs;
    this._nodeOsType = config.nodeOsType;
    this._retryPolicy = config.retryPolicy;
    this._scaleTolerance = config.scaleTolerance;
    this._scalingGroupName = config.scalingGroupName;
    this._scalingGroupProjectId = config.scalingGroupProjectId;
    this._scalingMode = config.scalingMode;
    this._subnetIds = config.subnetIds;
    this._tags = config.tags;
    this._terminationPolicies = config.terminationPolicies;
    this._unschedulable = config.unschedulable;
    this._vpcId = config.vpcId;
    this._waitNodeReady = config.waitNodeReady;
    this._zones = config.zones;
    this._annotations.internalValue = config.annotations;
    this._autoScalingConfig.internalValue = config.autoScalingConfig;
    this._nodeConfig.internalValue = config.nodeConfig;
    this._taints.internalValue = config.taints;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_scaling_group_id - computed: true, optional: false, required: false
  public get autoScalingGroupId() {
    return this.getStringAttribute('auto_scaling_group_id');
  }

  // auto_update_instance_tags - computed: true, optional: true, required: false
  private _autoUpdateInstanceTags?: boolean | cdktf.IResolvable; 
  public get autoUpdateInstanceTags() {
    return this.getBooleanAttribute('auto_update_instance_tags');
  }
  public set autoUpdateInstanceTags(value: boolean | cdktf.IResolvable) {
    this._autoUpdateInstanceTags = value;
  }
  public resetAutoUpdateInstanceTags() {
    this._autoUpdateInstanceTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpdateInstanceTagsInput() {
    return this._autoUpdateInstanceTags;
  }

  // autoscaling_added_total - computed: true, optional: false, required: false
  public get autoscalingAddedTotal() {
    return this.getNumberAttribute('autoscaling_added_total');
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

  // default_cooldown - computed: true, optional: true, required: false
  private _defaultCooldown?: number; 
  public get defaultCooldown() {
    return this.getNumberAttribute('default_cooldown');
  }
  public set defaultCooldown(value: number) {
    this._defaultCooldown = value;
  }
  public resetDefaultCooldown() {
    this._defaultCooldown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCooldownInput() {
    return this._defaultCooldown;
  }

  // delete_keep_instance - computed: false, optional: true, required: false
  private _deleteKeepInstance?: boolean | cdktf.IResolvable; 
  public get deleteKeepInstance() {
    return this.getBooleanAttribute('delete_keep_instance');
  }
  public set deleteKeepInstance(value: boolean | cdktf.IResolvable) {
    this._deleteKeepInstance = value;
  }
  public resetDeleteKeepInstance() {
    this._deleteKeepInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteKeepInstanceInput() {
    return this._deleteKeepInstance;
  }

  // deletion_protection - computed: true, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
  }

  // desired_capacity - computed: true, optional: true, required: false
  private _desiredCapacity?: number; 
  public get desiredCapacity() {
    return this.getNumberAttribute('desired_capacity');
  }
  public set desiredCapacity(value: number) {
    this._desiredCapacity = value;
  }
  public resetDesiredCapacity() {
    this._desiredCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredCapacityInput() {
    return this._desiredCapacity;
  }

  // enable_auto_scale - computed: false, optional: true, required: false
  private _enableAutoScale?: boolean | cdktf.IResolvable; 
  public get enableAutoScale() {
    return this.getBooleanAttribute('enable_auto_scale');
  }
  public set enableAutoScale(value: boolean | cdktf.IResolvable) {
    this._enableAutoScale = value;
  }
  public resetEnableAutoScale() {
    this._enableAutoScale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoScaleInput() {
    return this._enableAutoScale;
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

  // launch_config_id - computed: true, optional: false, required: false
  public get launchConfigId() {
    return this.getStringAttribute('launch_config_id');
  }

  // manually_added_total - computed: true, optional: false, required: false
  public get manuallyAddedTotal() {
    return this.getNumberAttribute('manually_added_total');
  }

  // max_size - computed: false, optional: false, required: true
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // min_size - computed: false, optional: false, required: true
  private _minSize?: number; 
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }
  public set minSize(value: number) {
    this._minSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeInput() {
    return this._minSize;
  }

  // multi_zone_subnet_policy - computed: false, optional: true, required: false
  private _multiZoneSubnetPolicy?: string; 
  public get multiZoneSubnetPolicy() {
    return this.getStringAttribute('multi_zone_subnet_policy');
  }
  public set multiZoneSubnetPolicy(value: string) {
    this._multiZoneSubnetPolicy = value;
  }
  public resetMultiZoneSubnetPolicy() {
    this._multiZoneSubnetPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiZoneSubnetPolicyInput() {
    return this._multiZoneSubnetPolicy;
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

  // node_count - computed: true, optional: false, required: false
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }

  // node_os - computed: false, optional: true, required: false
  private _nodeOs?: string; 
  public get nodeOs() {
    return this.getStringAttribute('node_os');
  }
  public set nodeOs(value: string) {
    this._nodeOs = value;
  }
  public resetNodeOs() {
    this._nodeOs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeOsInput() {
    return this._nodeOs;
  }

  // node_os_type - computed: false, optional: true, required: false
  private _nodeOsType?: string; 
  public get nodeOsType() {
    return this.getStringAttribute('node_os_type');
  }
  public set nodeOsType(value: string) {
    this._nodeOsType = value;
  }
  public resetNodeOsType() {
    this._nodeOsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeOsTypeInput() {
    return this._nodeOsType;
  }

  // retry_policy - computed: false, optional: true, required: false
  private _retryPolicy?: string; 
  public get retryPolicy() {
    return this.getStringAttribute('retry_policy');
  }
  public set retryPolicy(value: string) {
    this._retryPolicy = value;
  }
  public resetRetryPolicy() {
    this._retryPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPolicyInput() {
    return this._retryPolicy;
  }

  // scale_tolerance - computed: false, optional: true, required: false
  private _scaleTolerance?: number; 
  public get scaleTolerance() {
    return this.getNumberAttribute('scale_tolerance');
  }
  public set scaleTolerance(value: number) {
    this._scaleTolerance = value;
  }
  public resetScaleTolerance() {
    this._scaleTolerance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleToleranceInput() {
    return this._scaleTolerance;
  }

  // scaling_group_name - computed: true, optional: true, required: false
  private _scalingGroupName?: string; 
  public get scalingGroupName() {
    return this.getStringAttribute('scaling_group_name');
  }
  public set scalingGroupName(value: string) {
    this._scalingGroupName = value;
  }
  public resetScalingGroupName() {
    this._scalingGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingGroupNameInput() {
    return this._scalingGroupName;
  }

  // scaling_group_project_id - computed: false, optional: true, required: false
  private _scalingGroupProjectId?: number; 
  public get scalingGroupProjectId() {
    return this.getNumberAttribute('scaling_group_project_id');
  }
  public set scalingGroupProjectId(value: number) {
    this._scalingGroupProjectId = value;
  }
  public resetScalingGroupProjectId() {
    this._scalingGroupProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingGroupProjectIdInput() {
    return this._scalingGroupProjectId;
  }

  // scaling_mode - computed: false, optional: true, required: false
  private _scalingMode?: string; 
  public get scalingMode() {
    return this.getStringAttribute('scaling_mode');
  }
  public set scalingMode(value: string) {
    this._scalingMode = value;
  }
  public resetScalingMode() {
    this._scalingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingModeInput() {
    return this._scalingMode;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet_ids - computed: false, optional: true, required: false
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // termination_policies - computed: true, optional: true, required: false
  private _terminationPolicies?: string[]; 
  public get terminationPolicies() {
    return this.getListAttribute('termination_policies');
  }
  public set terminationPolicies(value: string[]) {
    this._terminationPolicies = value;
  }
  public resetTerminationPolicies() {
    this._terminationPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationPoliciesInput() {
    return this._terminationPolicies;
  }

  // unschedulable - computed: false, optional: true, required: false
  private _unschedulable?: number; 
  public get unschedulable() {
    return this.getNumberAttribute('unschedulable');
  }
  public set unschedulable(value: number) {
    this._unschedulable = value;
  }
  public resetUnschedulable() {
    this._unschedulable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unschedulableInput() {
    return this._unschedulable;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // wait_node_ready - computed: false, optional: true, required: false
  private _waitNodeReady?: boolean | cdktf.IResolvable; 
  public get waitNodeReady() {
    return this.getBooleanAttribute('wait_node_ready');
  }
  public set waitNodeReady(value: boolean | cdktf.IResolvable) {
    this._waitNodeReady = value;
  }
  public resetWaitNodeReady() {
    this._waitNodeReady = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitNodeReadyInput() {
    return this._waitNodeReady;
  }

  // zones - computed: false, optional: true, required: false
  private _zones?: string[]; 
  public get zones() {
    return this.getListAttribute('zones');
  }
  public set zones(value: string[]) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones;
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations = new KubernetesNodePoolAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: KubernetesNodePoolAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // auto_scaling_config - computed: false, optional: false, required: true
  private _autoScalingConfig = new KubernetesNodePoolAutoScalingConfigOutputReference(this, "auto_scaling_config");
  public get autoScalingConfig() {
    return this._autoScalingConfig;
  }
  public putAutoScalingConfig(value: KubernetesNodePoolAutoScalingConfig) {
    this._autoScalingConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingConfigInput() {
    return this._autoScalingConfig.internalValue;
  }

  // node_config - computed: false, optional: true, required: false
  private _nodeConfig = new KubernetesNodePoolNodeConfigOutputReference(this, "node_config");
  public get nodeConfig() {
    return this._nodeConfig;
  }
  public putNodeConfig(value: KubernetesNodePoolNodeConfig) {
    this._nodeConfig.internalValue = value;
  }
  public resetNodeConfig() {
    this._nodeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeConfigInput() {
    return this._nodeConfig.internalValue;
  }

  // taints - computed: false, optional: true, required: false
  private _taints = new KubernetesNodePoolTaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }
  public putTaints(value: KubernetesNodePoolTaints[] | cdktf.IResolvable) {
    this._taints.internalValue = value;
  }
  public resetTaints() {
    this._taints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintsInput() {
    return this._taints.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KubernetesNodePoolTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KubernetesNodePoolTimeouts) {
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
      auto_update_instance_tags: cdktf.booleanToTerraform(this._autoUpdateInstanceTags),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      default_cooldown: cdktf.numberToTerraform(this._defaultCooldown),
      delete_keep_instance: cdktf.booleanToTerraform(this._deleteKeepInstance),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      desired_capacity: cdktf.numberToTerraform(this._desiredCapacity),
      enable_auto_scale: cdktf.booleanToTerraform(this._enableAutoScale),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      max_size: cdktf.numberToTerraform(this._maxSize),
      min_size: cdktf.numberToTerraform(this._minSize),
      multi_zone_subnet_policy: cdktf.stringToTerraform(this._multiZoneSubnetPolicy),
      name: cdktf.stringToTerraform(this._name),
      node_os: cdktf.stringToTerraform(this._nodeOs),
      node_os_type: cdktf.stringToTerraform(this._nodeOsType),
      retry_policy: cdktf.stringToTerraform(this._retryPolicy),
      scale_tolerance: cdktf.numberToTerraform(this._scaleTolerance),
      scaling_group_name: cdktf.stringToTerraform(this._scalingGroupName),
      scaling_group_project_id: cdktf.numberToTerraform(this._scalingGroupProjectId),
      scaling_mode: cdktf.stringToTerraform(this._scalingMode),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subnetIds),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      termination_policies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._terminationPolicies),
      unschedulable: cdktf.numberToTerraform(this._unschedulable),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      wait_node_ready: cdktf.booleanToTerraform(this._waitNodeReady),
      zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._zones),
      annotations: cdktf.listMapper(kubernetesNodePoolAnnotationsToTerraform, true)(this._annotations.internalValue),
      auto_scaling_config: kubernetesNodePoolAutoScalingConfigToTerraform(this._autoScalingConfig.internalValue),
      node_config: kubernetesNodePoolNodeConfigToTerraform(this._nodeConfig.internalValue),
      taints: cdktf.listMapper(kubernetesNodePoolTaintsToTerraform, true)(this._taints.internalValue),
      timeouts: kubernetesNodePoolTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_update_instance_tags: {
        value: cdktf.booleanToHclTerraform(this._autoUpdateInstanceTags),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_cooldown: {
        value: cdktf.numberToHclTerraform(this._defaultCooldown),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      delete_keep_instance: {
        value: cdktf.booleanToHclTerraform(this._deleteKeepInstance),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deletion_protection: {
        value: cdktf.booleanToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      desired_capacity: {
        value: cdktf.numberToHclTerraform(this._desiredCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_auto_scale: {
        value: cdktf.booleanToHclTerraform(this._enableAutoScale),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      max_size: {
        value: cdktf.numberToHclTerraform(this._maxSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_size: {
        value: cdktf.numberToHclTerraform(this._minSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      multi_zone_subnet_policy: {
        value: cdktf.stringToHclTerraform(this._multiZoneSubnetPolicy),
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
      node_os: {
        value: cdktf.stringToHclTerraform(this._nodeOs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_os_type: {
        value: cdktf.stringToHclTerraform(this._nodeOsType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retry_policy: {
        value: cdktf.stringToHclTerraform(this._retryPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scale_tolerance: {
        value: cdktf.numberToHclTerraform(this._scaleTolerance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scaling_group_name: {
        value: cdktf.stringToHclTerraform(this._scalingGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scaling_group_project_id: {
        value: cdktf.numberToHclTerraform(this._scalingGroupProjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scaling_mode: {
        value: cdktf.stringToHclTerraform(this._scalingMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subnetIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      termination_policies: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._terminationPolicies),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      unschedulable: {
        value: cdktf.numberToHclTerraform(this._unschedulable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_node_ready: {
        value: cdktf.booleanToHclTerraform(this._waitNodeReady),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      zones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._zones),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      annotations: {
        value: cdktf.listMapperHcl(kubernetesNodePoolAnnotationsToHclTerraform, true)(this._annotations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "KubernetesNodePoolAnnotationsList",
      },
      auto_scaling_config: {
        value: kubernetesNodePoolAutoScalingConfigToHclTerraform(this._autoScalingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesNodePoolAutoScalingConfigList",
      },
      node_config: {
        value: kubernetesNodePoolNodeConfigToHclTerraform(this._nodeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesNodePoolNodeConfigList",
      },
      taints: {
        value: cdktf.listMapperHcl(kubernetesNodePoolTaintsToHclTerraform, true)(this._taints.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesNodePoolTaintsList",
      },
      timeouts: {
        value: kubernetesNodePoolTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KubernetesNodePoolTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
