// https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/sks_nodepool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SksNodepoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of [exoscale_anti_affinity_group](./anti_affinity_group.md) (IDs) to be attached to the managed instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/sks_nodepool#anti_affinity_group_ids SksNodepool#anti_affinity_group_ids}
  */
  readonly antiAffinityGroupIds?: string[];
  /**
  * ❗ The parent [exoscale_sks_cluster](./sks_cluster.md) ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/sks_nodepool#cluster_id SksNodepool#cluster_id}
  */
  readonly clusterId: string;
  /**
  * A deploy target ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/sks_nodepool#deploy_target_id SksNodepool#deploy_target_id}
  */
  readonly deployTargetId?: string;
  /**
  * A free-form text describing the pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/sks_nodepool#description SksNodepool#description}
  */
  readonly description?: string;
  /**
  * The managed instances disk size (GiB; default: `50`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/sks_nodepool#disk_size SksNodepool#disk_size}
  */
  readonly diskSize?: number;
  /**
  * The string used to prefix the managed instances name (default `pool`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/sks_nodepool#instance_prefix SksNodepool#instance_prefix}
  */
  readonly instancePrefix?: string;
  /**
  * The managed compute instances type (`<family>.<size>`, e.g. `standard.medium`; use the [Exoscale CLI](https://github.com/exoscale/cli/) - `exo compute instance-type list` - for the list of available types).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/sks_nodepool#instance_type SksNodepool#instance_type}
  */
  readonly instanceType: string;
  /**
  * Enable IPV6 for the nodepool nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/sks_nodepool#ipv6 SksNodepool#ipv6}
  */
  readonly ipv6?: boolean | cdktf.IResolvable;
  /**
  * A map of key/value labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/sks_nodepool#labels SksNodepool#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The SKS node pool name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/sks_nodepool#name SksNodepool#name}
  */
  readonly name: string;
  /**
  * A list of [exoscale_private_network](./private_network.md) (IDs) to be attached to the managed instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/sks_nodepool#private_network_ids SksNodepool#private_network_ids}
  */
  readonly privateNetworkIds?: string[];
  /**
  * A list of [exoscale_security_group](./security_group.md) (IDs) to be attached to the managed instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/sks_nodepool#security_group_ids SksNodepool#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/sks_nodepool#size SksNodepool#size}
  */
  readonly size: number;
  /**
  * Create nodes with non-standard partitioning for persistent storage (requires min 100G of disk space) (may only be set at creation time).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/sks_nodepool#storage_lvm SksNodepool#storage_lvm}
  */
  readonly storageLvm?: boolean | cdktf.IResolvable;
  /**
  * A map of key/value Kubernetes [taints](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/) ('taints = { <key> = "<value>:<effect>" }').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/sks_nodepool#taints SksNodepool#taints}
  */
  readonly taints?: { [key: string]: string };
  /**
  * ❗ The Exoscale [Zone](https://www.exoscale.com/datacenters/) name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/sks_nodepool#zone SksNodepool#zone}
  */
  readonly zone: string;
  /**
  * kubelet_image_gc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/sks_nodepool#kubelet_image_gc SksNodepool#kubelet_image_gc}
  */
  readonly kubeletImageGc?: SksNodepoolKubeletImageGc[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/sks_nodepool#timeouts SksNodepool#timeouts}
  */
  readonly timeouts?: SksNodepoolTimeouts;
}
export interface SksNodepoolKubeletImageGc {
  /**
  * The percent of disk usage after which image garbage collection is always run
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/sks_nodepool#high_threshold SksNodepool#high_threshold}
  */
  readonly highThreshold?: number;
  /**
  * The percent of disk usage before which image garbage collection is never run
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/sks_nodepool#low_threshold SksNodepool#low_threshold}
  */
  readonly lowThreshold?: number;
  /**
  * The minimum age for an unused image before it is garbage collected (k8s duration format, eg. 1h)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/sks_nodepool#min_age SksNodepool#min_age}
  */
  readonly minAge?: string;
}

export function sksNodepoolKubeletImageGcToTerraform(struct?: SksNodepoolKubeletImageGc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    high_threshold: cdktf.numberToTerraform(struct!.highThreshold),
    low_threshold: cdktf.numberToTerraform(struct!.lowThreshold),
    min_age: cdktf.stringToTerraform(struct!.minAge),
  }
}


export function sksNodepoolKubeletImageGcToHclTerraform(struct?: SksNodepoolKubeletImageGc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    high_threshold: {
      value: cdktf.numberToHclTerraform(struct!.highThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    low_threshold: {
      value: cdktf.numberToHclTerraform(struct!.lowThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_age: {
      value: cdktf.stringToHclTerraform(struct!.minAge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SksNodepoolKubeletImageGcOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SksNodepoolKubeletImageGc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._highThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.highThreshold = this._highThreshold;
    }
    if (this._lowThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowThreshold = this._lowThreshold;
    }
    if (this._minAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.minAge = this._minAge;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SksNodepoolKubeletImageGc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._highThreshold = undefined;
      this._lowThreshold = undefined;
      this._minAge = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._highThreshold = value.highThreshold;
      this._lowThreshold = value.lowThreshold;
      this._minAge = value.minAge;
    }
  }

  // high_threshold - computed: false, optional: true, required: false
  private _highThreshold?: number; 
  public get highThreshold() {
    return this.getNumberAttribute('high_threshold');
  }
  public set highThreshold(value: number) {
    this._highThreshold = value;
  }
  public resetHighThreshold() {
    this._highThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highThresholdInput() {
    return this._highThreshold;
  }

  // low_threshold - computed: false, optional: true, required: false
  private _lowThreshold?: number; 
  public get lowThreshold() {
    return this.getNumberAttribute('low_threshold');
  }
  public set lowThreshold(value: number) {
    this._lowThreshold = value;
  }
  public resetLowThreshold() {
    this._lowThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowThresholdInput() {
    return this._lowThreshold;
  }

  // min_age - computed: false, optional: true, required: false
  private _minAge?: string; 
  public get minAge() {
    return this.getStringAttribute('min_age');
  }
  public set minAge(value: string) {
    this._minAge = value;
  }
  public resetMinAge() {
    this._minAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minAgeInput() {
    return this._minAge;
  }
}

export class SksNodepoolKubeletImageGcList extends cdktf.ComplexList {
  public internalValue? : SksNodepoolKubeletImageGc[] | cdktf.IResolvable

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
  public get(index: number): SksNodepoolKubeletImageGcOutputReference {
    return new SksNodepoolKubeletImageGcOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SksNodepoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/sks_nodepool#create SksNodepool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/sks_nodepool#delete SksNodepool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/sks_nodepool#read SksNodepool#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/sks_nodepool#update SksNodepool#update}
  */
  readonly update?: string;
}

export function sksNodepoolTimeoutsToTerraform(struct?: SksNodepoolTimeouts | cdktf.IResolvable): any {
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


export function sksNodepoolTimeoutsToHclTerraform(struct?: SksNodepoolTimeouts | cdktf.IResolvable): any {
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

export class SksNodepoolTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SksNodepoolTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SksNodepoolTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/sks_nodepool exoscale_sks_nodepool}
*/
export class SksNodepool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "exoscale_sks_nodepool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SksNodepool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SksNodepool to import
  * @param importFromId The id of the existing SksNodepool that should be imported. Refer to the {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/sks_nodepool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SksNodepool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "exoscale_sks_nodepool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/resources/sks_nodepool exoscale_sks_nodepool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SksNodepoolConfig
  */
  public constructor(scope: Construct, id: string, config: SksNodepoolConfig) {
    super(scope, id, {
      terraformResourceType: 'exoscale_sks_nodepool',
      terraformGeneratorMetadata: {
        providerName: 'exoscale',
        providerVersion: '0.66.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._antiAffinityGroupIds = config.antiAffinityGroupIds;
    this._clusterId = config.clusterId;
    this._deployTargetId = config.deployTargetId;
    this._description = config.description;
    this._diskSize = config.diskSize;
    this._instancePrefix = config.instancePrefix;
    this._instanceType = config.instanceType;
    this._ipv6 = config.ipv6;
    this._labels = config.labels;
    this._name = config.name;
    this._privateNetworkIds = config.privateNetworkIds;
    this._securityGroupIds = config.securityGroupIds;
    this._size = config.size;
    this._storageLvm = config.storageLvm;
    this._taints = config.taints;
    this._zone = config.zone;
    this._kubeletImageGc.internalValue = config.kubeletImageGc;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anti_affinity_group_ids - computed: false, optional: true, required: false
  private _antiAffinityGroupIds?: string[]; 
  public get antiAffinityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('anti_affinity_group_ids'));
  }
  public set antiAffinityGroupIds(value: string[]) {
    this._antiAffinityGroupIds = value;
  }
  public resetAntiAffinityGroupIds() {
    this._antiAffinityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiAffinityGroupIdsInput() {
    return this._antiAffinityGroupIds;
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

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // deploy_target_id - computed: false, optional: true, required: false
  private _deployTargetId?: string; 
  public get deployTargetId() {
    return this.getStringAttribute('deploy_target_id');
  }
  public set deployTargetId(value: string) {
    this._deployTargetId = value;
  }
  public resetDeployTargetId() {
    this._deployTargetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployTargetIdInput() {
    return this._deployTargetId;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_pool_id - computed: true, optional: false, required: false
  public get instancePoolId() {
    return this.getStringAttribute('instance_pool_id');
  }

  // instance_prefix - computed: false, optional: true, required: false
  private _instancePrefix?: string; 
  public get instancePrefix() {
    return this.getStringAttribute('instance_prefix');
  }
  public set instancePrefix(value: string) {
    this._instancePrefix = value;
  }
  public resetInstancePrefix() {
    this._instancePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancePrefixInput() {
    return this._instancePrefix;
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

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: boolean | cdktf.IResolvable; 
  public get ipv6() {
    return this.getBooleanAttribute('ipv6');
  }
  public set ipv6(value: boolean | cdktf.IResolvable) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
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

  // private_network_ids - computed: false, optional: true, required: false
  private _privateNetworkIds?: string[]; 
  public get privateNetworkIds() {
    return cdktf.Fn.tolist(this.getListAttribute('private_network_ids'));
  }
  public set privateNetworkIds(value: string[]) {
    this._privateNetworkIds = value;
  }
  public resetPrivateNetworkIds() {
    this._privateNetworkIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateNetworkIdsInput() {
    return this._privateNetworkIds;
  }

  // security_group_ids - computed: false, optional: true, required: false
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

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // storage_lvm - computed: false, optional: true, required: false
  private _storageLvm?: boolean | cdktf.IResolvable; 
  public get storageLvm() {
    return this.getBooleanAttribute('storage_lvm');
  }
  public set storageLvm(value: boolean | cdktf.IResolvable) {
    this._storageLvm = value;
  }
  public resetStorageLvm() {
    this._storageLvm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageLvmInput() {
    return this._storageLvm;
  }

  // taints - computed: false, optional: true, required: false
  private _taints?: { [key: string]: string }; 
  public get taints() {
    return this.getStringMapAttribute('taints');
  }
  public set taints(value: { [key: string]: string }) {
    this._taints = value;
  }
  public resetTaints() {
    this._taints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintsInput() {
    return this._taints;
  }

  // template_id - computed: true, optional: false, required: false
  public get templateId() {
    return this.getStringAttribute('template_id');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
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

  // kubelet_image_gc - computed: false, optional: true, required: false
  private _kubeletImageGc = new SksNodepoolKubeletImageGcList(this, "kubelet_image_gc", true);
  public get kubeletImageGc() {
    return this._kubeletImageGc;
  }
  public putKubeletImageGc(value: SksNodepoolKubeletImageGc[] | cdktf.IResolvable) {
    this._kubeletImageGc.internalValue = value;
  }
  public resetKubeletImageGc() {
    this._kubeletImageGc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletImageGcInput() {
    return this._kubeletImageGc.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SksNodepoolTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SksNodepoolTimeouts) {
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
      anti_affinity_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._antiAffinityGroupIds),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      deploy_target_id: cdktf.stringToTerraform(this._deployTargetId),
      description: cdktf.stringToTerraform(this._description),
      disk_size: cdktf.numberToTerraform(this._diskSize),
      instance_prefix: cdktf.stringToTerraform(this._instancePrefix),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      ipv6: cdktf.booleanToTerraform(this._ipv6),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      private_network_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._privateNetworkIds),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      size: cdktf.numberToTerraform(this._size),
      storage_lvm: cdktf.booleanToTerraform(this._storageLvm),
      taints: cdktf.hashMapper(cdktf.stringToTerraform)(this._taints),
      zone: cdktf.stringToTerraform(this._zone),
      kubelet_image_gc: cdktf.listMapper(sksNodepoolKubeletImageGcToTerraform, true)(this._kubeletImageGc.internalValue),
      timeouts: sksNodepoolTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      anti_affinity_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._antiAffinityGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deploy_target_id: {
        value: cdktf.stringToHclTerraform(this._deployTargetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_size: {
        value: cdktf.numberToHclTerraform(this._diskSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      instance_prefix: {
        value: cdktf.stringToHclTerraform(this._instancePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_type: {
        value: cdktf.stringToHclTerraform(this._instanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6: {
        value: cdktf.booleanToHclTerraform(this._ipv6),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_network_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._privateNetworkIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      size: {
        value: cdktf.numberToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      storage_lvm: {
        value: cdktf.booleanToHclTerraform(this._storageLvm),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      taints: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._taints),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kubelet_image_gc: {
        value: cdktf.listMapperHcl(sksNodepoolKubeletImageGcToHclTerraform, true)(this._kubeletImageGc.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SksNodepoolKubeletImageGcList",
      },
      timeouts: {
        value: sksNodepoolTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SksNodepoolTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
