// https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NodeConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * CAST AI cluster id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#cluster_id NodeConfiguration#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Optional container runtime to be used by kubelet. Applicable for EKS only.  Supported values include: `dockerd`, `containerd`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#container_runtime NodeConfiguration#container_runtime}
  */
  readonly containerRuntime?: string;
  /**
  * Disk to CPU ratio. Sets the number of GiBs to be added for every CPU on the node. Defaults to 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#disk_cpu_ratio NodeConfiguration#disk_cpu_ratio}
  */
  readonly diskCpuRatio?: number;
  /**
  * Optional docker daemon configuration properties in JSON format. Provide only properties that you want to override. Applicable for EKS only. [Available values](https://docs.docker.com/engine/reference/commandline/dockerd/#daemon-configuration-file)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#docker_config NodeConfiguration#docker_config}
  */
  readonly dockerConfig?: string;
  /**
  * Timeout in seconds for draining the node. Defaults to 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#drain_timeout_sec NodeConfiguration#drain_timeout_sec}
  */
  readonly drainTimeoutSec?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#id NodeConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Image to be used while provisioning the node. If nothing is provided will be resolved to latest available image based on Image family, Kubernetes version and node architecture if possible. See Cast.ai documentation for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#image NodeConfiguration#image}
  */
  readonly image?: string;
  /**
  * Init script to be run on your instance at launch. Should not contain any sensitive data. Value should be base64 encoded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#init_script NodeConfiguration#init_script}
  */
  readonly initScript?: string;
  /**
  * Optional kubelet configuration properties in JSON format. Provide only properties that you want to override. Applicable for EKS only. [Available values](https://kubernetes.io/docs/reference/config-api/kubelet-config.v1beta1/)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#kubelet_config NodeConfiguration#kubelet_config}
  */
  readonly kubeletConfig?: string;
  /**
  * Minimal disk size in GiB. Defaults to 100, min 30, max 65536
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#min_disk_size NodeConfiguration#min_disk_size}
  */
  readonly minDiskSize?: number;
  /**
  * Name of the node configuration. It must be unique within the cluster. In case of cluster is reonboarded to Terraform, when previously it was onboarded with CAST AI UI, and the name corresponds to previously created node configuration this resource will override existing configuration instead of creating new.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#name NodeConfiguration#name}
  */
  readonly name: string;
  /**
  * SSH public key to be used for provisioned nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#ssh_public_key NodeConfiguration#ssh_public_key}
  */
  readonly sshPublicKey?: string;
  /**
  * Subnet ids to be used for provisioned nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#subnets NodeConfiguration#subnets}
  */
  readonly subnets: string[];
  /**
  * Tags to be added on cloud instances for provisioned nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#tags NodeConfiguration#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * aks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#aks NodeConfiguration#aks}
  */
  readonly aks?: NodeConfigurationAks;
  /**
  * eks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#eks NodeConfiguration#eks}
  */
  readonly eks?: NodeConfigurationEks;
  /**
  * gke block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#gke NodeConfiguration#gke}
  */
  readonly gke?: NodeConfigurationGke;
  /**
  * kops block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#kops NodeConfiguration#kops}
  */
  readonly kops?: NodeConfigurationKops;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#timeouts NodeConfiguration#timeouts}
  */
  readonly timeouts?: NodeConfigurationTimeouts;
}
export interface NodeConfigurationAksEphemeralOsDisk {
  /**
  * Cache type for the ephemeral OS disk. One of: ReadOnly, ReadWrite
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#cache NodeConfiguration#cache}
  */
  readonly cache?: string;
  /**
  * Placement of the ephemeral OS disk. One of: cacheDisk, resourceDisk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#placement NodeConfiguration#placement}
  */
  readonly placement: string;
}

export function nodeConfigurationAksEphemeralOsDiskToTerraform(struct?: NodeConfigurationAksEphemeralOsDiskOutputReference | NodeConfigurationAksEphemeralOsDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache: cdktf.stringToTerraform(struct!.cache),
    placement: cdktf.stringToTerraform(struct!.placement),
  }
}


export function nodeConfigurationAksEphemeralOsDiskToHclTerraform(struct?: NodeConfigurationAksEphemeralOsDiskOutputReference | NodeConfigurationAksEphemeralOsDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache: {
      value: cdktf.stringToHclTerraform(struct!.cache),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    placement: {
      value: cdktf.stringToHclTerraform(struct!.placement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NodeConfigurationAksEphemeralOsDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NodeConfigurationAksEphemeralOsDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cache !== undefined) {
      hasAnyValues = true;
      internalValueResult.cache = this._cache;
    }
    if (this._placement !== undefined) {
      hasAnyValues = true;
      internalValueResult.placement = this._placement;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NodeConfigurationAksEphemeralOsDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cache = undefined;
      this._placement = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cache = value.cache;
      this._placement = value.placement;
    }
  }

  // cache - computed: false, optional: true, required: false
  private _cache?: string; 
  public get cache() {
    return this.getStringAttribute('cache');
  }
  public set cache(value: string) {
    this._cache = value;
  }
  public resetCache() {
    this._cache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheInput() {
    return this._cache;
  }

  // placement - computed: false, optional: false, required: true
  private _placement?: string; 
  public get placement() {
    return this.getStringAttribute('placement');
  }
  public set placement(value: string) {
    this._placement = value;
  }
  // Temporarily expose input value. Use with caution.
  public get placementInput() {
    return this._placement;
  }
}
export interface NodeConfigurationAksLoadbalancersIpBasedBackendPools {
  /**
  * Name of the ip based backend pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#name NodeConfiguration#name}
  */
  readonly name: string;
}

export function nodeConfigurationAksLoadbalancersIpBasedBackendPoolsToTerraform(struct?: NodeConfigurationAksLoadbalancersIpBasedBackendPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function nodeConfigurationAksLoadbalancersIpBasedBackendPoolsToHclTerraform(struct?: NodeConfigurationAksLoadbalancersIpBasedBackendPools | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NodeConfigurationAksLoadbalancersIpBasedBackendPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NodeConfigurationAksLoadbalancersIpBasedBackendPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NodeConfigurationAksLoadbalancersIpBasedBackendPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class NodeConfigurationAksLoadbalancersIpBasedBackendPoolsList extends cdktf.ComplexList {
  public internalValue? : NodeConfigurationAksLoadbalancersIpBasedBackendPools[] | cdktf.IResolvable

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
  public get(index: number): NodeConfigurationAksLoadbalancersIpBasedBackendPoolsOutputReference {
    return new NodeConfigurationAksLoadbalancersIpBasedBackendPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NodeConfigurationAksLoadbalancersNicBasedBackendPools {
  /**
  * Name of the NIC based backend pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#name NodeConfiguration#name}
  */
  readonly name: string;
}

export function nodeConfigurationAksLoadbalancersNicBasedBackendPoolsToTerraform(struct?: NodeConfigurationAksLoadbalancersNicBasedBackendPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function nodeConfigurationAksLoadbalancersNicBasedBackendPoolsToHclTerraform(struct?: NodeConfigurationAksLoadbalancersNicBasedBackendPools | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NodeConfigurationAksLoadbalancersNicBasedBackendPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NodeConfigurationAksLoadbalancersNicBasedBackendPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NodeConfigurationAksLoadbalancersNicBasedBackendPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class NodeConfigurationAksLoadbalancersNicBasedBackendPoolsList extends cdktf.ComplexList {
  public internalValue? : NodeConfigurationAksLoadbalancersNicBasedBackendPools[] | cdktf.IResolvable

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
  public get(index: number): NodeConfigurationAksLoadbalancersNicBasedBackendPoolsOutputReference {
    return new NodeConfigurationAksLoadbalancersNicBasedBackendPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NodeConfigurationAksLoadbalancers {
  /**
  * The full ID of the load balancer in azure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#id NodeConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of load balancer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#name NodeConfiguration#name}
  */
  readonly name?: string;
  /**
  * ip_based_backend_pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#ip_based_backend_pools NodeConfiguration#ip_based_backend_pools}
  */
  readonly ipBasedBackendPools?: NodeConfigurationAksLoadbalancersIpBasedBackendPools[] | cdktf.IResolvable;
  /**
  * nic_based_backend_pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#nic_based_backend_pools NodeConfiguration#nic_based_backend_pools}
  */
  readonly nicBasedBackendPools?: NodeConfigurationAksLoadbalancersNicBasedBackendPools[] | cdktf.IResolvable;
}

export function nodeConfigurationAksLoadbalancersToTerraform(struct?: NodeConfigurationAksLoadbalancers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    ip_based_backend_pools: cdktf.listMapper(nodeConfigurationAksLoadbalancersIpBasedBackendPoolsToTerraform, true)(struct!.ipBasedBackendPools),
    nic_based_backend_pools: cdktf.listMapper(nodeConfigurationAksLoadbalancersNicBasedBackendPoolsToTerraform, true)(struct!.nicBasedBackendPools),
  }
}


export function nodeConfigurationAksLoadbalancersToHclTerraform(struct?: NodeConfigurationAksLoadbalancers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    ip_based_backend_pools: {
      value: cdktf.listMapperHcl(nodeConfigurationAksLoadbalancersIpBasedBackendPoolsToHclTerraform, true)(struct!.ipBasedBackendPools),
      isBlock: true,
      type: "list",
      storageClassType: "NodeConfigurationAksLoadbalancersIpBasedBackendPoolsList",
    },
    nic_based_backend_pools: {
      value: cdktf.listMapperHcl(nodeConfigurationAksLoadbalancersNicBasedBackendPoolsToHclTerraform, true)(struct!.nicBasedBackendPools),
      isBlock: true,
      type: "list",
      storageClassType: "NodeConfigurationAksLoadbalancersNicBasedBackendPoolsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NodeConfigurationAksLoadbalancersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NodeConfigurationAksLoadbalancers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ipBasedBackendPools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipBasedBackendPools = this._ipBasedBackendPools?.internalValue;
    }
    if (this._nicBasedBackendPools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nicBasedBackendPools = this._nicBasedBackendPools?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NodeConfigurationAksLoadbalancers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._ipBasedBackendPools.internalValue = undefined;
      this._nicBasedBackendPools.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._ipBasedBackendPools.internalValue = value.ipBasedBackendPools;
      this._nicBasedBackendPools.internalValue = value.nicBasedBackendPools;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // ip_based_backend_pools - computed: false, optional: true, required: false
  private _ipBasedBackendPools = new NodeConfigurationAksLoadbalancersIpBasedBackendPoolsList(this, "ip_based_backend_pools", false);
  public get ipBasedBackendPools() {
    return this._ipBasedBackendPools;
  }
  public putIpBasedBackendPools(value: NodeConfigurationAksLoadbalancersIpBasedBackendPools[] | cdktf.IResolvable) {
    this._ipBasedBackendPools.internalValue = value;
  }
  public resetIpBasedBackendPools() {
    this._ipBasedBackendPools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipBasedBackendPoolsInput() {
    return this._ipBasedBackendPools.internalValue;
  }

  // nic_based_backend_pools - computed: false, optional: true, required: false
  private _nicBasedBackendPools = new NodeConfigurationAksLoadbalancersNicBasedBackendPoolsList(this, "nic_based_backend_pools", false);
  public get nicBasedBackendPools() {
    return this._nicBasedBackendPools;
  }
  public putNicBasedBackendPools(value: NodeConfigurationAksLoadbalancersNicBasedBackendPools[] | cdktf.IResolvable) {
    this._nicBasedBackendPools.internalValue = value;
  }
  public resetNicBasedBackendPools() {
    this._nicBasedBackendPools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nicBasedBackendPoolsInput() {
    return this._nicBasedBackendPools.internalValue;
  }
}

export class NodeConfigurationAksLoadbalancersList extends cdktf.ComplexList {
  public internalValue? : NodeConfigurationAksLoadbalancers[] | cdktf.IResolvable

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
  public get(index: number): NodeConfigurationAksLoadbalancersOutputReference {
    return new NodeConfigurationAksLoadbalancersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NodeConfigurationAksPublicIp {
  /**
  * Idle timeout in minutes for public IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#idle_timeout_in_minutes NodeConfiguration#idle_timeout_in_minutes}
  */
  readonly idleTimeoutInMinutes?: number;
  /**
  * Public IP prefix to be used for provisioned nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#public_ip_prefix NodeConfiguration#public_ip_prefix}
  */
  readonly publicIpPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#tags NodeConfiguration#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function nodeConfigurationAksPublicIpToTerraform(struct?: NodeConfigurationAksPublicIpOutputReference | NodeConfigurationAksPublicIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idle_timeout_in_minutes: cdktf.numberToTerraform(struct!.idleTimeoutInMinutes),
    public_ip_prefix: cdktf.stringToTerraform(struct!.publicIpPrefix),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function nodeConfigurationAksPublicIpToHclTerraform(struct?: NodeConfigurationAksPublicIpOutputReference | NodeConfigurationAksPublicIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    idle_timeout_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.idleTimeoutInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    public_ip_prefix: {
      value: cdktf.stringToHclTerraform(struct!.publicIpPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NodeConfigurationAksPublicIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NodeConfigurationAksPublicIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idleTimeoutInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeoutInMinutes = this._idleTimeoutInMinutes;
    }
    if (this._publicIpPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIpPrefix = this._publicIpPrefix;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NodeConfigurationAksPublicIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._idleTimeoutInMinutes = undefined;
      this._publicIpPrefix = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._idleTimeoutInMinutes = value.idleTimeoutInMinutes;
      this._publicIpPrefix = value.publicIpPrefix;
      this._tags = value.tags;
    }
  }

  // idle_timeout_in_minutes - computed: false, optional: true, required: false
  private _idleTimeoutInMinutes?: number; 
  public get idleTimeoutInMinutes() {
    return this.getNumberAttribute('idle_timeout_in_minutes');
  }
  public set idleTimeoutInMinutes(value: number) {
    this._idleTimeoutInMinutes = value;
  }
  public resetIdleTimeoutInMinutes() {
    this._idleTimeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInMinutesInput() {
    return this._idleTimeoutInMinutes;
  }

  // public_ip_prefix - computed: false, optional: true, required: false
  private _publicIpPrefix?: string; 
  public get publicIpPrefix() {
    return this.getStringAttribute('public_ip_prefix');
  }
  public set publicIpPrefix(value: string) {
    this._publicIpPrefix = value;
  }
  public resetPublicIpPrefix() {
    this._publicIpPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpPrefixInput() {
    return this._publicIpPrefix;
  }

  // tags - computed: false, optional: true, required: false
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
}
export interface NodeConfigurationAks {
  /**
  * Image OS Family to use when provisioning node in AKS. If both image and family are provided, the system will use provided image and provisioning logic for given family. If only image family is provided, the system will attempt to resolve the latest image from that family based on kubernetes version and node architecture. If image family is omitted, a default family (based on cloud provider) will be used. See Cast.ai documentation for details. Possible values: (ubuntu,azure-linux,windows2019,windows2022)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#aks_image_family NodeConfiguration#aks_image_family}
  */
  readonly aksImageFamily?: string;
  /**
  * Application security groups to be used for provisioned nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#application_security_groups NodeConfiguration#application_security_groups}
  */
  readonly applicationSecurityGroups?: string[];
  /**
  * Maximum number of pods that can be run on a node, which affects how many IP addresses you will need for each node. Defaults to 30
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#max_pods_per_node NodeConfiguration#max_pods_per_node}
  */
  readonly maxPodsPerNode?: number;
  /**
  * Network security group to be used for provisioned nodes, if not provided default security group from `castpool` will be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#network_security_group NodeConfiguration#network_security_group}
  */
  readonly networkSecurityGroup?: string;
  /**
  * Type of managed os disk attached to the node. (See [disk types](https://learn.microsoft.com/en-us/azure/virtual-machines/disks-types)). One of: standard, standard-ssd, premium-ssd (ultra and premium-ssd-v2 are not supported for os disk)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#os_disk_type NodeConfiguration#os_disk_type}
  */
  readonly osDiskType?: string;
  /**
  * ID of pod subnet to be used for provisioned nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#pod_subnet_id NodeConfiguration#pod_subnet_id}
  */
  readonly podSubnetId?: string;
  /**
  * ephemeral_os_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#ephemeral_os_disk NodeConfiguration#ephemeral_os_disk}
  */
  readonly ephemeralOsDisk?: NodeConfigurationAksEphemeralOsDisk;
  /**
  * loadbalancers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#loadbalancers NodeConfiguration#loadbalancers}
  */
  readonly loadbalancers?: NodeConfigurationAksLoadbalancers[] | cdktf.IResolvable;
  /**
  * public_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#public_ip NodeConfiguration#public_ip}
  */
  readonly publicIp?: NodeConfigurationAksPublicIp;
}

export function nodeConfigurationAksToTerraform(struct?: NodeConfigurationAksOutputReference | NodeConfigurationAks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aks_image_family: cdktf.stringToTerraform(struct!.aksImageFamily),
    application_security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.applicationSecurityGroups),
    max_pods_per_node: cdktf.numberToTerraform(struct!.maxPodsPerNode),
    network_security_group: cdktf.stringToTerraform(struct!.networkSecurityGroup),
    os_disk_type: cdktf.stringToTerraform(struct!.osDiskType),
    pod_subnet_id: cdktf.stringToTerraform(struct!.podSubnetId),
    ephemeral_os_disk: nodeConfigurationAksEphemeralOsDiskToTerraform(struct!.ephemeralOsDisk),
    loadbalancers: cdktf.listMapper(nodeConfigurationAksLoadbalancersToTerraform, true)(struct!.loadbalancers),
    public_ip: nodeConfigurationAksPublicIpToTerraform(struct!.publicIp),
  }
}


export function nodeConfigurationAksToHclTerraform(struct?: NodeConfigurationAksOutputReference | NodeConfigurationAks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aks_image_family: {
      value: cdktf.stringToHclTerraform(struct!.aksImageFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_security_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.applicationSecurityGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_pods_per_node: {
      value: cdktf.numberToHclTerraform(struct!.maxPodsPerNode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    network_security_group: {
      value: cdktf.stringToHclTerraform(struct!.networkSecurityGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os_disk_type: {
      value: cdktf.stringToHclTerraform(struct!.osDiskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.podSubnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ephemeral_os_disk: {
      value: nodeConfigurationAksEphemeralOsDiskToHclTerraform(struct!.ephemeralOsDisk),
      isBlock: true,
      type: "list",
      storageClassType: "NodeConfigurationAksEphemeralOsDiskList",
    },
    loadbalancers: {
      value: cdktf.listMapperHcl(nodeConfigurationAksLoadbalancersToHclTerraform, true)(struct!.loadbalancers),
      isBlock: true,
      type: "list",
      storageClassType: "NodeConfigurationAksLoadbalancersList",
    },
    public_ip: {
      value: nodeConfigurationAksPublicIpToHclTerraform(struct!.publicIp),
      isBlock: true,
      type: "list",
      storageClassType: "NodeConfigurationAksPublicIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NodeConfigurationAksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NodeConfigurationAks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aksImageFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.aksImageFamily = this._aksImageFamily;
    }
    if (this._applicationSecurityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationSecurityGroups = this._applicationSecurityGroups;
    }
    if (this._maxPodsPerNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPodsPerNode = this._maxPodsPerNode;
    }
    if (this._networkSecurityGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkSecurityGroup = this._networkSecurityGroup;
    }
    if (this._osDiskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.osDiskType = this._osDiskType;
    }
    if (this._podSubnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSubnetId = this._podSubnetId;
    }
    if (this._ephemeralOsDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ephemeralOsDisk = this._ephemeralOsDisk?.internalValue;
    }
    if (this._loadbalancers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadbalancers = this._loadbalancers?.internalValue;
    }
    if (this._publicIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIp = this._publicIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NodeConfigurationAks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aksImageFamily = undefined;
      this._applicationSecurityGroups = undefined;
      this._maxPodsPerNode = undefined;
      this._networkSecurityGroup = undefined;
      this._osDiskType = undefined;
      this._podSubnetId = undefined;
      this._ephemeralOsDisk.internalValue = undefined;
      this._loadbalancers.internalValue = undefined;
      this._publicIp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aksImageFamily = value.aksImageFamily;
      this._applicationSecurityGroups = value.applicationSecurityGroups;
      this._maxPodsPerNode = value.maxPodsPerNode;
      this._networkSecurityGroup = value.networkSecurityGroup;
      this._osDiskType = value.osDiskType;
      this._podSubnetId = value.podSubnetId;
      this._ephemeralOsDisk.internalValue = value.ephemeralOsDisk;
      this._loadbalancers.internalValue = value.loadbalancers;
      this._publicIp.internalValue = value.publicIp;
    }
  }

  // aks_image_family - computed: false, optional: true, required: false
  private _aksImageFamily?: string; 
  public get aksImageFamily() {
    return this.getStringAttribute('aks_image_family');
  }
  public set aksImageFamily(value: string) {
    this._aksImageFamily = value;
  }
  public resetAksImageFamily() {
    this._aksImageFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aksImageFamilyInput() {
    return this._aksImageFamily;
  }

  // application_security_groups - computed: false, optional: true, required: false
  private _applicationSecurityGroups?: string[]; 
  public get applicationSecurityGroups() {
    return this.getListAttribute('application_security_groups');
  }
  public set applicationSecurityGroups(value: string[]) {
    this._applicationSecurityGroups = value;
  }
  public resetApplicationSecurityGroups() {
    this._applicationSecurityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationSecurityGroupsInput() {
    return this._applicationSecurityGroups;
  }

  // max_pods_per_node - computed: false, optional: true, required: false
  private _maxPodsPerNode?: number; 
  public get maxPodsPerNode() {
    return this.getNumberAttribute('max_pods_per_node');
  }
  public set maxPodsPerNode(value: number) {
    this._maxPodsPerNode = value;
  }
  public resetMaxPodsPerNode() {
    this._maxPodsPerNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPodsPerNodeInput() {
    return this._maxPodsPerNode;
  }

  // network_security_group - computed: false, optional: true, required: false
  private _networkSecurityGroup?: string; 
  public get networkSecurityGroup() {
    return this.getStringAttribute('network_security_group');
  }
  public set networkSecurityGroup(value: string) {
    this._networkSecurityGroup = value;
  }
  public resetNetworkSecurityGroup() {
    this._networkSecurityGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSecurityGroupInput() {
    return this._networkSecurityGroup;
  }

  // os_disk_type - computed: false, optional: true, required: false
  private _osDiskType?: string; 
  public get osDiskType() {
    return this.getStringAttribute('os_disk_type');
  }
  public set osDiskType(value: string) {
    this._osDiskType = value;
  }
  public resetOsDiskType() {
    this._osDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osDiskTypeInput() {
    return this._osDiskType;
  }

  // pod_subnet_id - computed: false, optional: true, required: false
  private _podSubnetId?: string; 
  public get podSubnetId() {
    return this.getStringAttribute('pod_subnet_id');
  }
  public set podSubnetId(value: string) {
    this._podSubnetId = value;
  }
  public resetPodSubnetId() {
    this._podSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSubnetIdInput() {
    return this._podSubnetId;
  }

  // ephemeral_os_disk - computed: false, optional: true, required: false
  private _ephemeralOsDisk = new NodeConfigurationAksEphemeralOsDiskOutputReference(this, "ephemeral_os_disk");
  public get ephemeralOsDisk() {
    return this._ephemeralOsDisk;
  }
  public putEphemeralOsDisk(value: NodeConfigurationAksEphemeralOsDisk) {
    this._ephemeralOsDisk.internalValue = value;
  }
  public resetEphemeralOsDisk() {
    this._ephemeralOsDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralOsDiskInput() {
    return this._ephemeralOsDisk.internalValue;
  }

  // loadbalancers - computed: false, optional: true, required: false
  private _loadbalancers = new NodeConfigurationAksLoadbalancersList(this, "loadbalancers", false);
  public get loadbalancers() {
    return this._loadbalancers;
  }
  public putLoadbalancers(value: NodeConfigurationAksLoadbalancers[] | cdktf.IResolvable) {
    this._loadbalancers.internalValue = value;
  }
  public resetLoadbalancers() {
    this._loadbalancers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadbalancersInput() {
    return this._loadbalancers.internalValue;
  }

  // public_ip - computed: false, optional: true, required: false
  private _publicIp = new NodeConfigurationAksPublicIpOutputReference(this, "public_ip");
  public get publicIp() {
    return this._publicIp;
  }
  public putPublicIp(value: NodeConfigurationAksPublicIp) {
    this._publicIp.internalValue = value;
  }
  public resetPublicIp() {
    this._publicIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpInput() {
    return this._publicIp.internalValue;
  }
}
export interface NodeConfigurationEksTargetGroup {
  /**
  * AWS target group ARN for CAST provisioned nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#arn NodeConfiguration#arn}
  */
  readonly arn: string;
  /**
  * Port for AWS target group for CAST provisioned nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#port NodeConfiguration#port}
  */
  readonly port?: number;
}

export function nodeConfigurationEksTargetGroupToTerraform(struct?: NodeConfigurationEksTargetGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function nodeConfigurationEksTargetGroupToHclTerraform(struct?: NodeConfigurationEksTargetGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arn: {
      value: cdktf.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NodeConfigurationEksTargetGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NodeConfigurationEksTargetGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NodeConfigurationEksTargetGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
      this._port = value.port;
    }
  }

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}

export class NodeConfigurationEksTargetGroupList extends cdktf.ComplexList {
  public internalValue? : NodeConfigurationEksTargetGroup[] | cdktf.IResolvable

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
  public get(index: number): NodeConfigurationEksTargetGroupOutputReference {
    return new NodeConfigurationEksTargetGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NodeConfigurationEks {
  /**
  * IP address to use for DNS queries within the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#dns_cluster_ip NodeConfiguration#dns_cluster_ip}
  */
  readonly dnsClusterIp?: string;
  /**
  * Image OS Family to use when provisioning node in EKS. If both image and family are provided, the system will use provided image and provisioning logic for given family. If only image family is provided, the system will attempt to resolve the latest image from that family based on kubernetes version and node architecture. If image family is omitted, a default family (based on cloud provider) will be used. See Cast.ai documentation for details. Possible values: (al2,al2023,bottlerocket)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#eks_image_family NodeConfiguration#eks_image_family}
  */
  readonly eksImageFamily?: string;
  /**
  * Allow configure the IMDSv2 hop limit, the default is 2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#imds_hop_limit NodeConfiguration#imds_hop_limit}
  */
  readonly imdsHopLimit?: number;
  /**
  * When the value is true both IMDSv1 and IMDSv2 are enabled. Setting the value to false disables permanently IMDSv1 and might affect legacy workloads running on the node created with this configuration. The default is true if the flag isn't provided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#imds_v1 NodeConfiguration#imds_v1}
  */
  readonly imdsV1?: boolean | cdktf.IResolvable;
  /**
  * Cluster's instance profile ARN used for CAST provisioned nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#instance_profile_arn NodeConfiguration#instance_profile_arn}
  */
  readonly instanceProfileArn: string;
  /**
  * Number of IPs per prefix to be used for calculating max pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#ips_per_prefix NodeConfiguration#ips_per_prefix}
  */
  readonly ipsPerPrefix?: number;
  /**
  * AWS key pair ID to be used for CAST provisioned nodes. Has priority over ssh_public_key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#key_pair_id NodeConfiguration#key_pair_id}
  */
  readonly keyPairId?: string;
  /**
  * Formula to calculate the maximum number of pods that can be run on a node. The following list of variables will be bound to a number before evaluating and can be used in the formula: NUM_MAX_NET_INTERFACES, NUM_IP_PER_INTERFACE, NUM_IP_PER_PREFIX, NUM_CPU, NUM_RAM_GB .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#max_pods_per_node_formula NodeConfiguration#max_pods_per_node_formula}
  */
  readonly maxPodsPerNodeFormula?: string;
  /**
  * Cluster's node group ARN used for CAST provisioned node pools. Required for hibernate/resume functionality
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#node_group_arn NodeConfiguration#node_group_arn}
  */
  readonly nodeGroupArn?: string;
  /**
  * Cluster's security groups configuration for CAST provisioned nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#security_groups NodeConfiguration#security_groups}
  */
  readonly securityGroups: string[];
  /**
  * Number of threads per core.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#threads_per_cpu NodeConfiguration#threads_per_cpu}
  */
  readonly threadsPerCpu?: number;
  /**
  * AWS EBS volume IOPS to be used for CAST provisioned nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#volume_iops NodeConfiguration#volume_iops}
  */
  readonly volumeIops?: number;
  /**
  * AWS KMS key ARN for encrypting EBS volume attached to the node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#volume_kms_key_arn NodeConfiguration#volume_kms_key_arn}
  */
  readonly volumeKmsKeyArn?: string;
  /**
  * AWS EBS volume throughput in MiB/s to be used for CAST provisioned nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#volume_throughput NodeConfiguration#volume_throughput}
  */
  readonly volumeThroughput?: number;
  /**
  * AWS EBS volume type to be used for CAST provisioned nodes. One of: gp3, gp2, io1, io2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#volume_type NodeConfiguration#volume_type}
  */
  readonly volumeType?: string;
  /**
  * target_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#target_group NodeConfiguration#target_group}
  */
  readonly targetGroup?: NodeConfigurationEksTargetGroup[] | cdktf.IResolvable;
}

export function nodeConfigurationEksToTerraform(struct?: NodeConfigurationEksOutputReference | NodeConfigurationEks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_cluster_ip: cdktf.stringToTerraform(struct!.dnsClusterIp),
    eks_image_family: cdktf.stringToTerraform(struct!.eksImageFamily),
    imds_hop_limit: cdktf.numberToTerraform(struct!.imdsHopLimit),
    imds_v1: cdktf.booleanToTerraform(struct!.imdsV1),
    instance_profile_arn: cdktf.stringToTerraform(struct!.instanceProfileArn),
    ips_per_prefix: cdktf.numberToTerraform(struct!.ipsPerPrefix),
    key_pair_id: cdktf.stringToTerraform(struct!.keyPairId),
    max_pods_per_node_formula: cdktf.stringToTerraform(struct!.maxPodsPerNodeFormula),
    node_group_arn: cdktf.stringToTerraform(struct!.nodeGroupArn),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroups),
    threads_per_cpu: cdktf.numberToTerraform(struct!.threadsPerCpu),
    volume_iops: cdktf.numberToTerraform(struct!.volumeIops),
    volume_kms_key_arn: cdktf.stringToTerraform(struct!.volumeKmsKeyArn),
    volume_throughput: cdktf.numberToTerraform(struct!.volumeThroughput),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
    target_group: cdktf.listMapper(nodeConfigurationEksTargetGroupToTerraform, true)(struct!.targetGroup),
  }
}


export function nodeConfigurationEksToHclTerraform(struct?: NodeConfigurationEksOutputReference | NodeConfigurationEks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_cluster_ip: {
      value: cdktf.stringToHclTerraform(struct!.dnsClusterIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eks_image_family: {
      value: cdktf.stringToHclTerraform(struct!.eksImageFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    imds_hop_limit: {
      value: cdktf.numberToHclTerraform(struct!.imdsHopLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    imds_v1: {
      value: cdktf.booleanToHclTerraform(struct!.imdsV1),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    instance_profile_arn: {
      value: cdktf.stringToHclTerraform(struct!.instanceProfileArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ips_per_prefix: {
      value: cdktf.numberToHclTerraform(struct!.ipsPerPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key_pair_id: {
      value: cdktf.stringToHclTerraform(struct!.keyPairId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_pods_per_node_formula: {
      value: cdktf.stringToHclTerraform(struct!.maxPodsPerNodeFormula),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_group_arn: {
      value: cdktf.stringToHclTerraform(struct!.nodeGroupArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    threads_per_cpu: {
      value: cdktf.numberToHclTerraform(struct!.threadsPerCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_iops: {
      value: cdktf.numberToHclTerraform(struct!.volumeIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_kms_key_arn: {
      value: cdktf.stringToHclTerraform(struct!.volumeKmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_throughput: {
      value: cdktf.numberToHclTerraform(struct!.volumeThroughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_type: {
      value: cdktf.stringToHclTerraform(struct!.volumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_group: {
      value: cdktf.listMapperHcl(nodeConfigurationEksTargetGroupToHclTerraform, true)(struct!.targetGroup),
      isBlock: true,
      type: "list",
      storageClassType: "NodeConfigurationEksTargetGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NodeConfigurationEksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NodeConfigurationEks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsClusterIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsClusterIp = this._dnsClusterIp;
    }
    if (this._eksImageFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.eksImageFamily = this._eksImageFamily;
    }
    if (this._imdsHopLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.imdsHopLimit = this._imdsHopLimit;
    }
    if (this._imdsV1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.imdsV1 = this._imdsV1;
    }
    if (this._instanceProfileArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceProfileArn = this._instanceProfileArn;
    }
    if (this._ipsPerPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsPerPrefix = this._ipsPerPrefix;
    }
    if (this._keyPairId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPairId = this._keyPairId;
    }
    if (this._maxPodsPerNodeFormula !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPodsPerNodeFormula = this._maxPodsPerNodeFormula;
    }
    if (this._nodeGroupArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeGroupArn = this._nodeGroupArn;
    }
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._threadsPerCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.threadsPerCpu = this._threadsPerCpu;
    }
    if (this._volumeIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeIops = this._volumeIops;
    }
    if (this._volumeKmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeKmsKeyArn = this._volumeKmsKeyArn;
    }
    if (this._volumeThroughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeThroughput = this._volumeThroughput;
    }
    if (this._volumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeType = this._volumeType;
    }
    if (this._targetGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetGroup = this._targetGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NodeConfigurationEks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsClusterIp = undefined;
      this._eksImageFamily = undefined;
      this._imdsHopLimit = undefined;
      this._imdsV1 = undefined;
      this._instanceProfileArn = undefined;
      this._ipsPerPrefix = undefined;
      this._keyPairId = undefined;
      this._maxPodsPerNodeFormula = undefined;
      this._nodeGroupArn = undefined;
      this._securityGroups = undefined;
      this._threadsPerCpu = undefined;
      this._volumeIops = undefined;
      this._volumeKmsKeyArn = undefined;
      this._volumeThroughput = undefined;
      this._volumeType = undefined;
      this._targetGroup.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsClusterIp = value.dnsClusterIp;
      this._eksImageFamily = value.eksImageFamily;
      this._imdsHopLimit = value.imdsHopLimit;
      this._imdsV1 = value.imdsV1;
      this._instanceProfileArn = value.instanceProfileArn;
      this._ipsPerPrefix = value.ipsPerPrefix;
      this._keyPairId = value.keyPairId;
      this._maxPodsPerNodeFormula = value.maxPodsPerNodeFormula;
      this._nodeGroupArn = value.nodeGroupArn;
      this._securityGroups = value.securityGroups;
      this._threadsPerCpu = value.threadsPerCpu;
      this._volumeIops = value.volumeIops;
      this._volumeKmsKeyArn = value.volumeKmsKeyArn;
      this._volumeThroughput = value.volumeThroughput;
      this._volumeType = value.volumeType;
      this._targetGroup.internalValue = value.targetGroup;
    }
  }

  // dns_cluster_ip - computed: false, optional: true, required: false
  private _dnsClusterIp?: string; 
  public get dnsClusterIp() {
    return this.getStringAttribute('dns_cluster_ip');
  }
  public set dnsClusterIp(value: string) {
    this._dnsClusterIp = value;
  }
  public resetDnsClusterIp() {
    this._dnsClusterIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsClusterIpInput() {
    return this._dnsClusterIp;
  }

  // eks_image_family - computed: false, optional: true, required: false
  private _eksImageFamily?: string; 
  public get eksImageFamily() {
    return this.getStringAttribute('eks_image_family');
  }
  public set eksImageFamily(value: string) {
    this._eksImageFamily = value;
  }
  public resetEksImageFamily() {
    this._eksImageFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eksImageFamilyInput() {
    return this._eksImageFamily;
  }

  // imds_hop_limit - computed: false, optional: true, required: false
  private _imdsHopLimit?: number; 
  public get imdsHopLimit() {
    return this.getNumberAttribute('imds_hop_limit');
  }
  public set imdsHopLimit(value: number) {
    this._imdsHopLimit = value;
  }
  public resetImdsHopLimit() {
    this._imdsHopLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imdsHopLimitInput() {
    return this._imdsHopLimit;
  }

  // imds_v1 - computed: false, optional: true, required: false
  private _imdsV1?: boolean | cdktf.IResolvable; 
  public get imdsV1() {
    return this.getBooleanAttribute('imds_v1');
  }
  public set imdsV1(value: boolean | cdktf.IResolvable) {
    this._imdsV1 = value;
  }
  public resetImdsV1() {
    this._imdsV1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imdsV1Input() {
    return this._imdsV1;
  }

  // instance_profile_arn - computed: false, optional: false, required: true
  private _instanceProfileArn?: string; 
  public get instanceProfileArn() {
    return this.getStringAttribute('instance_profile_arn');
  }
  public set instanceProfileArn(value: string) {
    this._instanceProfileArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceProfileArnInput() {
    return this._instanceProfileArn;
  }

  // ips_per_prefix - computed: false, optional: true, required: false
  private _ipsPerPrefix?: number; 
  public get ipsPerPrefix() {
    return this.getNumberAttribute('ips_per_prefix');
  }
  public set ipsPerPrefix(value: number) {
    this._ipsPerPrefix = value;
  }
  public resetIpsPerPrefix() {
    this._ipsPerPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsPerPrefixInput() {
    return this._ipsPerPrefix;
  }

  // key_pair_id - computed: false, optional: true, required: false
  private _keyPairId?: string; 
  public get keyPairId() {
    return this.getStringAttribute('key_pair_id');
  }
  public set keyPairId(value: string) {
    this._keyPairId = value;
  }
  public resetKeyPairId() {
    this._keyPairId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPairIdInput() {
    return this._keyPairId;
  }

  // max_pods_per_node_formula - computed: false, optional: true, required: false
  private _maxPodsPerNodeFormula?: string; 
  public get maxPodsPerNodeFormula() {
    return this.getStringAttribute('max_pods_per_node_formula');
  }
  public set maxPodsPerNodeFormula(value: string) {
    this._maxPodsPerNodeFormula = value;
  }
  public resetMaxPodsPerNodeFormula() {
    this._maxPodsPerNodeFormula = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPodsPerNodeFormulaInput() {
    return this._maxPodsPerNodeFormula;
  }

  // node_group_arn - computed: false, optional: true, required: false
  private _nodeGroupArn?: string; 
  public get nodeGroupArn() {
    return this.getStringAttribute('node_group_arn');
  }
  public set nodeGroupArn(value: string) {
    this._nodeGroupArn = value;
  }
  public resetNodeGroupArn() {
    this._nodeGroupArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGroupArnInput() {
    return this._nodeGroupArn;
  }

  // security_groups - computed: false, optional: false, required: true
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // threads_per_cpu - computed: false, optional: true, required: false
  private _threadsPerCpu?: number; 
  public get threadsPerCpu() {
    return this.getNumberAttribute('threads_per_cpu');
  }
  public set threadsPerCpu(value: number) {
    this._threadsPerCpu = value;
  }
  public resetThreadsPerCpu() {
    this._threadsPerCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadsPerCpuInput() {
    return this._threadsPerCpu;
  }

  // volume_iops - computed: false, optional: true, required: false
  private _volumeIops?: number; 
  public get volumeIops() {
    return this.getNumberAttribute('volume_iops');
  }
  public set volumeIops(value: number) {
    this._volumeIops = value;
  }
  public resetVolumeIops() {
    this._volumeIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIopsInput() {
    return this._volumeIops;
  }

  // volume_kms_key_arn - computed: false, optional: true, required: false
  private _volumeKmsKeyArn?: string; 
  public get volumeKmsKeyArn() {
    return this.getStringAttribute('volume_kms_key_arn');
  }
  public set volumeKmsKeyArn(value: string) {
    this._volumeKmsKeyArn = value;
  }
  public resetVolumeKmsKeyArn() {
    this._volumeKmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeKmsKeyArnInput() {
    return this._volumeKmsKeyArn;
  }

  // volume_throughput - computed: false, optional: true, required: false
  private _volumeThroughput?: number; 
  public get volumeThroughput() {
    return this.getNumberAttribute('volume_throughput');
  }
  public set volumeThroughput(value: number) {
    this._volumeThroughput = value;
  }
  public resetVolumeThroughput() {
    this._volumeThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeThroughputInput() {
    return this._volumeThroughput;
  }

  // volume_type - computed: false, optional: true, required: false
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  public resetVolumeType() {
    this._volumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }

  // target_group - computed: false, optional: true, required: false
  private _targetGroup = new NodeConfigurationEksTargetGroupList(this, "target_group", false);
  public get targetGroup() {
    return this._targetGroup;
  }
  public putTargetGroup(value: NodeConfigurationEksTargetGroup[] | cdktf.IResolvable) {
    this._targetGroup.internalValue = value;
  }
  public resetTargetGroup() {
    this._targetGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupInput() {
    return this._targetGroup.internalValue;
  }
}
export interface NodeConfigurationGkeLoadbalancersTargetBackendPools {
  /**
  * Name of the target group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#name NodeConfiguration#name}
  */
  readonly name: string;
}

export function nodeConfigurationGkeLoadbalancersTargetBackendPoolsToTerraform(struct?: NodeConfigurationGkeLoadbalancersTargetBackendPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function nodeConfigurationGkeLoadbalancersTargetBackendPoolsToHclTerraform(struct?: NodeConfigurationGkeLoadbalancersTargetBackendPools | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NodeConfigurationGkeLoadbalancersTargetBackendPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NodeConfigurationGkeLoadbalancersTargetBackendPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NodeConfigurationGkeLoadbalancersTargetBackendPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class NodeConfigurationGkeLoadbalancersTargetBackendPoolsList extends cdktf.ComplexList {
  public internalValue? : NodeConfigurationGkeLoadbalancersTargetBackendPools[] | cdktf.IResolvable

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
  public get(index: number): NodeConfigurationGkeLoadbalancersTargetBackendPoolsOutputReference {
    return new NodeConfigurationGkeLoadbalancersTargetBackendPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NodeConfigurationGkeLoadbalancersUnmanagedInstanceGroups {
  /**
  * Name of the instance group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#name NodeConfiguration#name}
  */
  readonly name: string;
  /**
  * Zone of the instance group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#zone NodeConfiguration#zone}
  */
  readonly zone: string;
}

export function nodeConfigurationGkeLoadbalancersUnmanagedInstanceGroupsToTerraform(struct?: NodeConfigurationGkeLoadbalancersUnmanagedInstanceGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function nodeConfigurationGkeLoadbalancersUnmanagedInstanceGroupsToHclTerraform(struct?: NodeConfigurationGkeLoadbalancersUnmanagedInstanceGroups | cdktf.IResolvable): any {
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
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NodeConfigurationGkeLoadbalancersUnmanagedInstanceGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NodeConfigurationGkeLoadbalancersUnmanagedInstanceGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NodeConfigurationGkeLoadbalancersUnmanagedInstanceGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._zone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._zone = value.zone;
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

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}

export class NodeConfigurationGkeLoadbalancersUnmanagedInstanceGroupsList extends cdktf.ComplexList {
  public internalValue? : NodeConfigurationGkeLoadbalancersUnmanagedInstanceGroups[] | cdktf.IResolvable

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
  public get(index: number): NodeConfigurationGkeLoadbalancersUnmanagedInstanceGroupsOutputReference {
    return new NodeConfigurationGkeLoadbalancersUnmanagedInstanceGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NodeConfigurationGkeLoadbalancers {
  /**
  * target_backend_pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#target_backend_pools NodeConfiguration#target_backend_pools}
  */
  readonly targetBackendPools?: NodeConfigurationGkeLoadbalancersTargetBackendPools[] | cdktf.IResolvable;
  /**
  * unmanaged_instance_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#unmanaged_instance_groups NodeConfiguration#unmanaged_instance_groups}
  */
  readonly unmanagedInstanceGroups?: NodeConfigurationGkeLoadbalancersUnmanagedInstanceGroups[] | cdktf.IResolvable;
}

export function nodeConfigurationGkeLoadbalancersToTerraform(struct?: NodeConfigurationGkeLoadbalancers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_backend_pools: cdktf.listMapper(nodeConfigurationGkeLoadbalancersTargetBackendPoolsToTerraform, true)(struct!.targetBackendPools),
    unmanaged_instance_groups: cdktf.listMapper(nodeConfigurationGkeLoadbalancersUnmanagedInstanceGroupsToTerraform, true)(struct!.unmanagedInstanceGroups),
  }
}


export function nodeConfigurationGkeLoadbalancersToHclTerraform(struct?: NodeConfigurationGkeLoadbalancers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_backend_pools: {
      value: cdktf.listMapperHcl(nodeConfigurationGkeLoadbalancersTargetBackendPoolsToHclTerraform, true)(struct!.targetBackendPools),
      isBlock: true,
      type: "list",
      storageClassType: "NodeConfigurationGkeLoadbalancersTargetBackendPoolsList",
    },
    unmanaged_instance_groups: {
      value: cdktf.listMapperHcl(nodeConfigurationGkeLoadbalancersUnmanagedInstanceGroupsToHclTerraform, true)(struct!.unmanagedInstanceGroups),
      isBlock: true,
      type: "list",
      storageClassType: "NodeConfigurationGkeLoadbalancersUnmanagedInstanceGroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NodeConfigurationGkeLoadbalancersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NodeConfigurationGkeLoadbalancers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetBackendPools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetBackendPools = this._targetBackendPools?.internalValue;
    }
    if (this._unmanagedInstanceGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unmanagedInstanceGroups = this._unmanagedInstanceGroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NodeConfigurationGkeLoadbalancers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targetBackendPools.internalValue = undefined;
      this._unmanagedInstanceGroups.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targetBackendPools.internalValue = value.targetBackendPools;
      this._unmanagedInstanceGroups.internalValue = value.unmanagedInstanceGroups;
    }
  }

  // target_backend_pools - computed: false, optional: true, required: false
  private _targetBackendPools = new NodeConfigurationGkeLoadbalancersTargetBackendPoolsList(this, "target_backend_pools", false);
  public get targetBackendPools() {
    return this._targetBackendPools;
  }
  public putTargetBackendPools(value: NodeConfigurationGkeLoadbalancersTargetBackendPools[] | cdktf.IResolvable) {
    this._targetBackendPools.internalValue = value;
  }
  public resetTargetBackendPools() {
    this._targetBackendPools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetBackendPoolsInput() {
    return this._targetBackendPools.internalValue;
  }

  // unmanaged_instance_groups - computed: false, optional: true, required: false
  private _unmanagedInstanceGroups = new NodeConfigurationGkeLoadbalancersUnmanagedInstanceGroupsList(this, "unmanaged_instance_groups", false);
  public get unmanagedInstanceGroups() {
    return this._unmanagedInstanceGroups;
  }
  public putUnmanagedInstanceGroups(value: NodeConfigurationGkeLoadbalancersUnmanagedInstanceGroups[] | cdktf.IResolvable) {
    this._unmanagedInstanceGroups.internalValue = value;
  }
  public resetUnmanagedInstanceGroups() {
    this._unmanagedInstanceGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unmanagedInstanceGroupsInput() {
    return this._unmanagedInstanceGroups.internalValue;
  }
}

export class NodeConfigurationGkeLoadbalancersList extends cdktf.ComplexList {
  public internalValue? : NodeConfigurationGkeLoadbalancers[] | cdktf.IResolvable

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
  public get(index: number): NodeConfigurationGkeLoadbalancersOutputReference {
    return new NodeConfigurationGkeLoadbalancersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NodeConfigurationGkeSecondaryIpRange {
  /**
  * Name of the secondary IP range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#range_name NodeConfiguration#range_name}
  */
  readonly rangeName: string;
}

export function nodeConfigurationGkeSecondaryIpRangeToTerraform(struct?: NodeConfigurationGkeSecondaryIpRangeOutputReference | NodeConfigurationGkeSecondaryIpRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range_name: cdktf.stringToTerraform(struct!.rangeName),
  }
}


export function nodeConfigurationGkeSecondaryIpRangeToHclTerraform(struct?: NodeConfigurationGkeSecondaryIpRangeOutputReference | NodeConfigurationGkeSecondaryIpRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    range_name: {
      value: cdktf.stringToHclTerraform(struct!.rangeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NodeConfigurationGkeSecondaryIpRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NodeConfigurationGkeSecondaryIpRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rangeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeName = this._rangeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NodeConfigurationGkeSecondaryIpRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rangeName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rangeName = value.rangeName;
    }
  }

  // range_name - computed: false, optional: false, required: true
  private _rangeName?: string; 
  public get rangeName() {
    return this.getStringAttribute('range_name');
  }
  public set rangeName(value: string) {
    this._rangeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeNameInput() {
    return this._rangeName;
  }
}
export interface NodeConfigurationGke {
  /**
  * Type of boot disk attached to the node. (See [disk types](https://cloud.google.com/compute/docs/disks#pdspecs)). One of: pd-standard, pd-balanced, pd-ssd, pd-extreme 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#disk_type NodeConfiguration#disk_type}
  */
  readonly diskType?: string;
  /**
  * Maximum number of pods that can be run on a node, which affects how many IP addresses you will need for each node. Defaults to 110
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#max_pods_per_node NodeConfiguration#max_pods_per_node}
  */
  readonly maxPodsPerNode?: number;
  /**
  * This is an advanced configuration field. In general, we recommend using max_pods_per_node instead.
  * This field accepts a formula to calculate the maximum number of pods that can run on a node. This will affect the pod CIDR range that the node reserves. The following variables are available for use in the formula and will be bound to numeric values before evaluation:
  * 
  *     * NUM_CPU - Number of CPUs available on the node
  *     * NUM_RAM_GB - Amount of RAM in gigabytes available on the node.
  * 
  * If you want the smallest value between 5 times the CPUs, 5 times the RAM, or a cap of 110, your formula would be math.least(110, 5 \* NUM_CPU, 5 \* NUM_RAM_GB).
  * For a node with 8 CPUs and 16 GB RAM, this calculates to 40 (5×8), 80 (5×16), and 110, then picks the smallest value: 40 pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#max_pods_per_node_formula NodeConfiguration#max_pods_per_node_formula}
  */
  readonly maxPodsPerNodeFormula?: string;
  /**
  * Network tags to be added on a VM. (See [network tags](https://cloud.google.com/vpc/docs/add-remove-network-tags))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#network_tags NodeConfiguration#network_tags}
  */
  readonly networkTags?: string[];
  /**
  * Maintenance behavior of the instances. If not set, the default value for spot nodes is terminate, and for non-spot nodes, it is migrate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#on_host_maintenance NodeConfiguration#on_host_maintenance}
  */
  readonly onHostMaintenance?: string;
  /**
  * Use ephemeral storage local SSD. Defaults to false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#use_ephemeral_storage_local_ssd NodeConfiguration#use_ephemeral_storage_local_ssd}
  */
  readonly useEphemeralStorageLocalSsd?: boolean | cdktf.IResolvable;
  /**
  * List of preferred availability zones to choose from when provisioning new nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#zones NodeConfiguration#zones}
  */
  readonly zones?: string[];
  /**
  * loadbalancers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#loadbalancers NodeConfiguration#loadbalancers}
  */
  readonly loadbalancers?: NodeConfigurationGkeLoadbalancers[] | cdktf.IResolvable;
  /**
  * secondary_ip_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#secondary_ip_range NodeConfiguration#secondary_ip_range}
  */
  readonly secondaryIpRange?: NodeConfigurationGkeSecondaryIpRange;
}

export function nodeConfigurationGkeToTerraform(struct?: NodeConfigurationGkeOutputReference | NodeConfigurationGke): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    max_pods_per_node: cdktf.numberToTerraform(struct!.maxPodsPerNode),
    max_pods_per_node_formula: cdktf.stringToTerraform(struct!.maxPodsPerNodeFormula),
    network_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.networkTags),
    on_host_maintenance: cdktf.stringToTerraform(struct!.onHostMaintenance),
    use_ephemeral_storage_local_ssd: cdktf.booleanToTerraform(struct!.useEphemeralStorageLocalSsd),
    zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.zones),
    loadbalancers: cdktf.listMapper(nodeConfigurationGkeLoadbalancersToTerraform, true)(struct!.loadbalancers),
    secondary_ip_range: nodeConfigurationGkeSecondaryIpRangeToTerraform(struct!.secondaryIpRange),
  }
}


export function nodeConfigurationGkeToHclTerraform(struct?: NodeConfigurationGkeOutputReference | NodeConfigurationGke): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_pods_per_node: {
      value: cdktf.numberToHclTerraform(struct!.maxPodsPerNode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_pods_per_node_formula: {
      value: cdktf.stringToHclTerraform(struct!.maxPodsPerNodeFormula),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.networkTags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    on_host_maintenance: {
      value: cdktf.stringToHclTerraform(struct!.onHostMaintenance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_ephemeral_storage_local_ssd: {
      value: cdktf.booleanToHclTerraform(struct!.useEphemeralStorageLocalSsd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    zones: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.zones),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    loadbalancers: {
      value: cdktf.listMapperHcl(nodeConfigurationGkeLoadbalancersToHclTerraform, true)(struct!.loadbalancers),
      isBlock: true,
      type: "list",
      storageClassType: "NodeConfigurationGkeLoadbalancersList",
    },
    secondary_ip_range: {
      value: nodeConfigurationGkeSecondaryIpRangeToHclTerraform(struct!.secondaryIpRange),
      isBlock: true,
      type: "list",
      storageClassType: "NodeConfigurationGkeSecondaryIpRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NodeConfigurationGkeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NodeConfigurationGke | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._maxPodsPerNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPodsPerNode = this._maxPodsPerNode;
    }
    if (this._maxPodsPerNodeFormula !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPodsPerNodeFormula = this._maxPodsPerNodeFormula;
    }
    if (this._networkTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkTags = this._networkTags;
    }
    if (this._onHostMaintenance !== undefined) {
      hasAnyValues = true;
      internalValueResult.onHostMaintenance = this._onHostMaintenance;
    }
    if (this._useEphemeralStorageLocalSsd !== undefined) {
      hasAnyValues = true;
      internalValueResult.useEphemeralStorageLocalSsd = this._useEphemeralStorageLocalSsd;
    }
    if (this._zones !== undefined) {
      hasAnyValues = true;
      internalValueResult.zones = this._zones;
    }
    if (this._loadbalancers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadbalancers = this._loadbalancers?.internalValue;
    }
    if (this._secondaryIpRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryIpRange = this._secondaryIpRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NodeConfigurationGke | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskType = undefined;
      this._maxPodsPerNode = undefined;
      this._maxPodsPerNodeFormula = undefined;
      this._networkTags = undefined;
      this._onHostMaintenance = undefined;
      this._useEphemeralStorageLocalSsd = undefined;
      this._zones = undefined;
      this._loadbalancers.internalValue = undefined;
      this._secondaryIpRange.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskType = value.diskType;
      this._maxPodsPerNode = value.maxPodsPerNode;
      this._maxPodsPerNodeFormula = value.maxPodsPerNodeFormula;
      this._networkTags = value.networkTags;
      this._onHostMaintenance = value.onHostMaintenance;
      this._useEphemeralStorageLocalSsd = value.useEphemeralStorageLocalSsd;
      this._zones = value.zones;
      this._loadbalancers.internalValue = value.loadbalancers;
      this._secondaryIpRange.internalValue = value.secondaryIpRange;
    }
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

  // max_pods_per_node - computed: false, optional: true, required: false
  private _maxPodsPerNode?: number; 
  public get maxPodsPerNode() {
    return this.getNumberAttribute('max_pods_per_node');
  }
  public set maxPodsPerNode(value: number) {
    this._maxPodsPerNode = value;
  }
  public resetMaxPodsPerNode() {
    this._maxPodsPerNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPodsPerNodeInput() {
    return this._maxPodsPerNode;
  }

  // max_pods_per_node_formula - computed: false, optional: true, required: false
  private _maxPodsPerNodeFormula?: string; 
  public get maxPodsPerNodeFormula() {
    return this.getStringAttribute('max_pods_per_node_formula');
  }
  public set maxPodsPerNodeFormula(value: string) {
    this._maxPodsPerNodeFormula = value;
  }
  public resetMaxPodsPerNodeFormula() {
    this._maxPodsPerNodeFormula = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPodsPerNodeFormulaInput() {
    return this._maxPodsPerNodeFormula;
  }

  // network_tags - computed: false, optional: true, required: false
  private _networkTags?: string[]; 
  public get networkTags() {
    return this.getListAttribute('network_tags');
  }
  public set networkTags(value: string[]) {
    this._networkTags = value;
  }
  public resetNetworkTags() {
    this._networkTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTagsInput() {
    return this._networkTags;
  }

  // on_host_maintenance - computed: false, optional: true, required: false
  private _onHostMaintenance?: string; 
  public get onHostMaintenance() {
    return this.getStringAttribute('on_host_maintenance');
  }
  public set onHostMaintenance(value: string) {
    this._onHostMaintenance = value;
  }
  public resetOnHostMaintenance() {
    this._onHostMaintenance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onHostMaintenanceInput() {
    return this._onHostMaintenance;
  }

  // use_ephemeral_storage_local_ssd - computed: false, optional: true, required: false
  private _useEphemeralStorageLocalSsd?: boolean | cdktf.IResolvable; 
  public get useEphemeralStorageLocalSsd() {
    return this.getBooleanAttribute('use_ephemeral_storage_local_ssd');
  }
  public set useEphemeralStorageLocalSsd(value: boolean | cdktf.IResolvable) {
    this._useEphemeralStorageLocalSsd = value;
  }
  public resetUseEphemeralStorageLocalSsd() {
    this._useEphemeralStorageLocalSsd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useEphemeralStorageLocalSsdInput() {
    return this._useEphemeralStorageLocalSsd;
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

  // loadbalancers - computed: false, optional: true, required: false
  private _loadbalancers = new NodeConfigurationGkeLoadbalancersList(this, "loadbalancers", false);
  public get loadbalancers() {
    return this._loadbalancers;
  }
  public putLoadbalancers(value: NodeConfigurationGkeLoadbalancers[] | cdktf.IResolvable) {
    this._loadbalancers.internalValue = value;
  }
  public resetLoadbalancers() {
    this._loadbalancers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadbalancersInput() {
    return this._loadbalancers.internalValue;
  }

  // secondary_ip_range - computed: false, optional: true, required: false
  private _secondaryIpRange = new NodeConfigurationGkeSecondaryIpRangeOutputReference(this, "secondary_ip_range");
  public get secondaryIpRange() {
    return this._secondaryIpRange;
  }
  public putSecondaryIpRange(value: NodeConfigurationGkeSecondaryIpRange) {
    this._secondaryIpRange.internalValue = value;
  }
  public resetSecondaryIpRange() {
    this._secondaryIpRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryIpRangeInput() {
    return this._secondaryIpRange.internalValue;
  }
}
export interface NodeConfigurationKops {
  /**
  * AWS key pair ID to be used for provisioned nodes. Has priority over sshPublicKey
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#key_pair_id NodeConfiguration#key_pair_id}
  */
  readonly keyPairId?: string;
}

export function nodeConfigurationKopsToTerraform(struct?: NodeConfigurationKopsOutputReference | NodeConfigurationKops): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_pair_id: cdktf.stringToTerraform(struct!.keyPairId),
  }
}


export function nodeConfigurationKopsToHclTerraform(struct?: NodeConfigurationKopsOutputReference | NodeConfigurationKops): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_pair_id: {
      value: cdktf.stringToHclTerraform(struct!.keyPairId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NodeConfigurationKopsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NodeConfigurationKops | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyPairId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPairId = this._keyPairId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NodeConfigurationKops | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyPairId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyPairId = value.keyPairId;
    }
  }

  // key_pair_id - computed: false, optional: true, required: false
  private _keyPairId?: string; 
  public get keyPairId() {
    return this.getStringAttribute('key_pair_id');
  }
  public set keyPairId(value: string) {
    this._keyPairId = value;
  }
  public resetKeyPairId() {
    this._keyPairId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPairIdInput() {
    return this._keyPairId;
  }
}
export interface NodeConfigurationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#create NodeConfiguration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#delete NodeConfiguration#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#read NodeConfiguration#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#update NodeConfiguration#update}
  */
  readonly update?: string;
}

export function nodeConfigurationTimeoutsToTerraform(struct?: NodeConfigurationTimeouts | cdktf.IResolvable): any {
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


export function nodeConfigurationTimeoutsToHclTerraform(struct?: NodeConfigurationTimeouts | cdktf.IResolvable): any {
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

export class NodeConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NodeConfigurationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NodeConfigurationTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration castai_node_configuration}
*/
export class NodeConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "castai_node_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NodeConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NodeConfiguration to import
  * @param importFromId The id of the existing NodeConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NodeConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "castai_node_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/node_configuration castai_node_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NodeConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: NodeConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'castai_node_configuration',
      terraformGeneratorMetadata: {
        providerName: 'castai',
        providerVersion: '8.4.0',
        providerVersionConstraint: '8.4.0'
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
    this._containerRuntime = config.containerRuntime;
    this._diskCpuRatio = config.diskCpuRatio;
    this._dockerConfig = config.dockerConfig;
    this._drainTimeoutSec = config.drainTimeoutSec;
    this._id = config.id;
    this._image = config.image;
    this._initScript = config.initScript;
    this._kubeletConfig = config.kubeletConfig;
    this._minDiskSize = config.minDiskSize;
    this._name = config.name;
    this._sshPublicKey = config.sshPublicKey;
    this._subnets = config.subnets;
    this._tags = config.tags;
    this._aks.internalValue = config.aks;
    this._eks.internalValue = config.eks;
    this._gke.internalValue = config.gke;
    this._kops.internalValue = config.kops;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // container_runtime - computed: false, optional: true, required: false
  private _containerRuntime?: string; 
  public get containerRuntime() {
    return this.getStringAttribute('container_runtime');
  }
  public set containerRuntime(value: string) {
    this._containerRuntime = value;
  }
  public resetContainerRuntime() {
    this._containerRuntime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerRuntimeInput() {
    return this._containerRuntime;
  }

  // disk_cpu_ratio - computed: false, optional: true, required: false
  private _diskCpuRatio?: number; 
  public get diskCpuRatio() {
    return this.getNumberAttribute('disk_cpu_ratio');
  }
  public set diskCpuRatio(value: number) {
    this._diskCpuRatio = value;
  }
  public resetDiskCpuRatio() {
    this._diskCpuRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskCpuRatioInput() {
    return this._diskCpuRatio;
  }

  // docker_config - computed: false, optional: true, required: false
  private _dockerConfig?: string; 
  public get dockerConfig() {
    return this.getStringAttribute('docker_config');
  }
  public set dockerConfig(value: string) {
    this._dockerConfig = value;
  }
  public resetDockerConfig() {
    this._dockerConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerConfigInput() {
    return this._dockerConfig;
  }

  // drain_timeout_sec - computed: false, optional: true, required: false
  private _drainTimeoutSec?: number; 
  public get drainTimeoutSec() {
    return this.getNumberAttribute('drain_timeout_sec');
  }
  public set drainTimeoutSec(value: number) {
    this._drainTimeoutSec = value;
  }
  public resetDrainTimeoutSec() {
    this._drainTimeoutSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drainTimeoutSecInput() {
    return this._drainTimeoutSec;
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

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // init_script - computed: false, optional: true, required: false
  private _initScript?: string; 
  public get initScript() {
    return this.getStringAttribute('init_script');
  }
  public set initScript(value: string) {
    this._initScript = value;
  }
  public resetInitScript() {
    this._initScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initScriptInput() {
    return this._initScript;
  }

  // kubelet_config - computed: false, optional: true, required: false
  private _kubeletConfig?: string; 
  public get kubeletConfig() {
    return this.getStringAttribute('kubelet_config');
  }
  public set kubeletConfig(value: string) {
    this._kubeletConfig = value;
  }
  public resetKubeletConfig() {
    this._kubeletConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletConfigInput() {
    return this._kubeletConfig;
  }

  // min_disk_size - computed: false, optional: true, required: false
  private _minDiskSize?: number; 
  public get minDiskSize() {
    return this.getNumberAttribute('min_disk_size');
  }
  public set minDiskSize(value: number) {
    this._minDiskSize = value;
  }
  public resetMinDiskSize() {
    this._minDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minDiskSizeInput() {
    return this._minDiskSize;
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

  // ssh_public_key - computed: false, optional: true, required: false
  private _sshPublicKey?: string; 
  public get sshPublicKey() {
    return this.getStringAttribute('ssh_public_key');
  }
  public set sshPublicKey(value: string) {
    this._sshPublicKey = value;
  }
  public resetSshPublicKey() {
    this._sshPublicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKeyInput() {
    return this._sshPublicKey;
  }

  // subnets - computed: false, optional: false, required: true
  private _subnets?: string[]; 
  public get subnets() {
    return this.getListAttribute('subnets');
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }

  // tags - computed: false, optional: true, required: false
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

  // aks - computed: false, optional: true, required: false
  private _aks = new NodeConfigurationAksOutputReference(this, "aks");
  public get aks() {
    return this._aks;
  }
  public putAks(value: NodeConfigurationAks) {
    this._aks.internalValue = value;
  }
  public resetAks() {
    this._aks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aksInput() {
    return this._aks.internalValue;
  }

  // eks - computed: false, optional: true, required: false
  private _eks = new NodeConfigurationEksOutputReference(this, "eks");
  public get eks() {
    return this._eks;
  }
  public putEks(value: NodeConfigurationEks) {
    this._eks.internalValue = value;
  }
  public resetEks() {
    this._eks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eksInput() {
    return this._eks.internalValue;
  }

  // gke - computed: false, optional: true, required: false
  private _gke = new NodeConfigurationGkeOutputReference(this, "gke");
  public get gke() {
    return this._gke;
  }
  public putGke(value: NodeConfigurationGke) {
    this._gke.internalValue = value;
  }
  public resetGke() {
    this._gke.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gkeInput() {
    return this._gke.internalValue;
  }

  // kops - computed: false, optional: true, required: false
  private _kops = new NodeConfigurationKopsOutputReference(this, "kops");
  public get kops() {
    return this._kops;
  }
  public putKops(value: NodeConfigurationKops) {
    this._kops.internalValue = value;
  }
  public resetKops() {
    this._kops.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kopsInput() {
    return this._kops.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NodeConfigurationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NodeConfigurationTimeouts) {
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
      container_runtime: cdktf.stringToTerraform(this._containerRuntime),
      disk_cpu_ratio: cdktf.numberToTerraform(this._diskCpuRatio),
      docker_config: cdktf.stringToTerraform(this._dockerConfig),
      drain_timeout_sec: cdktf.numberToTerraform(this._drainTimeoutSec),
      id: cdktf.stringToTerraform(this._id),
      image: cdktf.stringToTerraform(this._image),
      init_script: cdktf.stringToTerraform(this._initScript),
      kubelet_config: cdktf.stringToTerraform(this._kubeletConfig),
      min_disk_size: cdktf.numberToTerraform(this._minDiskSize),
      name: cdktf.stringToTerraform(this._name),
      ssh_public_key: cdktf.stringToTerraform(this._sshPublicKey),
      subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subnets),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      aks: nodeConfigurationAksToTerraform(this._aks.internalValue),
      eks: nodeConfigurationEksToTerraform(this._eks.internalValue),
      gke: nodeConfigurationGkeToTerraform(this._gke.internalValue),
      kops: nodeConfigurationKopsToTerraform(this._kops.internalValue),
      timeouts: nodeConfigurationTimeoutsToTerraform(this._timeouts.internalValue),
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
      container_runtime: {
        value: cdktf.stringToHclTerraform(this._containerRuntime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_cpu_ratio: {
        value: cdktf.numberToHclTerraform(this._diskCpuRatio),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      docker_config: {
        value: cdktf.stringToHclTerraform(this._dockerConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      drain_timeout_sec: {
        value: cdktf.numberToHclTerraform(this._drainTimeoutSec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image: {
        value: cdktf.stringToHclTerraform(this._image),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      init_script: {
        value: cdktf.stringToHclTerraform(this._initScript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kubelet_config: {
        value: cdktf.stringToHclTerraform(this._kubeletConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_disk_size: {
        value: cdktf.numberToHclTerraform(this._minDiskSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_public_key: {
        value: cdktf.stringToHclTerraform(this._sshPublicKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subnets),
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
      aks: {
        value: nodeConfigurationAksToHclTerraform(this._aks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NodeConfigurationAksList",
      },
      eks: {
        value: nodeConfigurationEksToHclTerraform(this._eks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NodeConfigurationEksList",
      },
      gke: {
        value: nodeConfigurationGkeToHclTerraform(this._gke.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NodeConfigurationGkeList",
      },
      kops: {
        value: nodeConfigurationKopsToHclTerraform(this._kops.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NodeConfigurationKopsList",
      },
      timeouts: {
        value: nodeConfigurationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NodeConfigurationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
