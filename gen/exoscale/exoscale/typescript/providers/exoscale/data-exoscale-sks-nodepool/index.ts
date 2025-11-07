// https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_nodepool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataExoscaleSksNodepoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of [exoscale_anti_affinity_group](./anti_affinity_group.md) (IDs) to be attached to the managed instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_nodepool#anti_affinity_group_ids DataExoscaleSksNodepool#anti_affinity_group_ids}
  */
  readonly antiAffinityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_nodepool#cluster_id DataExoscaleSksNodepool#cluster_id}
  */
  readonly clusterId: string;
  /**
  * The pool creation date.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_nodepool#created_at DataExoscaleSksNodepool#created_at}
  */
  readonly createdAt?: string;
  /**
  * A deploy target ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_nodepool#deploy_target_id DataExoscaleSksNodepool#deploy_target_id}
  */
  readonly deployTargetId?: string;
  /**
  * A free-form text describing the pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_nodepool#description DataExoscaleSksNodepool#description}
  */
  readonly description?: string;
  /**
  * The managed instances disk size (GiB; default: `50`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_nodepool#disk_size DataExoscaleSksNodepool#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_nodepool#id DataExoscaleSksNodepool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The underlying [exoscale_instance_pool](./instance_pool.md) ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_nodepool#instance_pool_id DataExoscaleSksNodepool#instance_pool_id}
  */
  readonly instancePoolId?: string;
  /**
  * The string used to prefix the managed instances name (default `pool`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_nodepool#instance_prefix DataExoscaleSksNodepool#instance_prefix}
  */
  readonly instancePrefix?: string;
  /**
  * The managed compute instances type (`<family>.<size>`, e.g. `standard.medium`; use the [Exoscale CLI](https://github.com/exoscale/cli/) - `exo compute instance-type list` - for the list of available types).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_nodepool#instance_type DataExoscaleSksNodepool#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Enable IPV6 for the nodepool nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_nodepool#ipv6 DataExoscaleSksNodepool#ipv6}
  */
  readonly ipv6?: boolean | cdktf.IResolvable;
  /**
  * A map of key/value labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_nodepool#labels DataExoscaleSksNodepool#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_nodepool#name DataExoscaleSksNodepool#name}
  */
  readonly name?: string;
  /**
  * A list of [exoscale_private_network](./private_network.md) (IDs) to be attached to the managed instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_nodepool#private_network_ids DataExoscaleSksNodepool#private_network_ids}
  */
  readonly privateNetworkIds?: string[];
  /**
  * A list of [exoscale_security_group](./security_group.md) (IDs) to be attached to the managed instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_nodepool#security_group_ids DataExoscaleSksNodepool#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_nodepool#size DataExoscaleSksNodepool#size}
  */
  readonly size?: number;
  /**
  * The current pool state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_nodepool#state DataExoscaleSksNodepool#state}
  */
  readonly state?: string;
  /**
  * Create nodes with non-standard partitioning for persistent storage (requires min 100G of disk space) (may only be set at creation time).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_nodepool#storage_lvm DataExoscaleSksNodepool#storage_lvm}
  */
  readonly storageLvm?: boolean | cdktf.IResolvable;
  /**
  * A map of key/value Kubernetes [taints](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/) ('taints = { <key> = "<value>:<effect>" }').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_nodepool#taints DataExoscaleSksNodepool#taints}
  */
  readonly taints?: { [key: string]: string };
  /**
  * The managed instances template ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_nodepool#template_id DataExoscaleSksNodepool#template_id}
  */
  readonly templateId?: string;
  /**
  * The managed instances version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_nodepool#version DataExoscaleSksNodepool#version}
  */
  readonly version?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_nodepool#zone DataExoscaleSksNodepool#zone}
  */
  readonly zone: string;
  /**
  * kubelet_image_gc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_nodepool#kubelet_image_gc DataExoscaleSksNodepool#kubelet_image_gc}
  */
  readonly kubeletImageGc?: DataExoscaleSksNodepoolKubeletImageGc[] | cdktf.IResolvable;
}
export interface DataExoscaleSksNodepoolKubeletImageGc {
  /**
  * The percent of disk usage after which image garbage collection is always run
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_nodepool#high_threshold DataExoscaleSksNodepool#high_threshold}
  */
  readonly highThreshold?: number;
  /**
  * The percent of disk usage before which image garbage collection is never run
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_nodepool#low_threshold DataExoscaleSksNodepool#low_threshold}
  */
  readonly lowThreshold?: number;
  /**
  * The minimum age for an unused image before it is garbage collected (k8s duration format, eg. 1h)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_nodepool#min_age DataExoscaleSksNodepool#min_age}
  */
  readonly minAge?: string;
}

export function dataExoscaleSksNodepoolKubeletImageGcToTerraform(struct?: DataExoscaleSksNodepoolKubeletImageGc | cdktf.IResolvable): any {
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


export function dataExoscaleSksNodepoolKubeletImageGcToHclTerraform(struct?: DataExoscaleSksNodepoolKubeletImageGc | cdktf.IResolvable): any {
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

export class DataExoscaleSksNodepoolKubeletImageGcOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataExoscaleSksNodepoolKubeletImageGc | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataExoscaleSksNodepoolKubeletImageGc | cdktf.IResolvable | undefined) {
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

export class DataExoscaleSksNodepoolKubeletImageGcList extends cdktf.ComplexList {
  public internalValue? : DataExoscaleSksNodepoolKubeletImageGc[] | cdktf.IResolvable

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
  public get(index: number): DataExoscaleSksNodepoolKubeletImageGcOutputReference {
    return new DataExoscaleSksNodepoolKubeletImageGcOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_nodepool exoscale_sks_nodepool}
*/
export class DataExoscaleSksNodepool extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "exoscale_sks_nodepool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataExoscaleSksNodepool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataExoscaleSksNodepool to import
  * @param importFromId The id of the existing DataExoscaleSksNodepool that should be imported. Refer to the {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_nodepool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataExoscaleSksNodepool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "exoscale_sks_nodepool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/sks_nodepool exoscale_sks_nodepool} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataExoscaleSksNodepoolConfig
  */
  public constructor(scope: Construct, id: string, config: DataExoscaleSksNodepoolConfig) {
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
    this._createdAt = config.createdAt;
    this._deployTargetId = config.deployTargetId;
    this._description = config.description;
    this._diskSize = config.diskSize;
    this._id = config.id;
    this._instancePoolId = config.instancePoolId;
    this._instancePrefix = config.instancePrefix;
    this._instanceType = config.instanceType;
    this._ipv6 = config.ipv6;
    this._labels = config.labels;
    this._name = config.name;
    this._privateNetworkIds = config.privateNetworkIds;
    this._securityGroupIds = config.securityGroupIds;
    this._size = config.size;
    this._state = config.state;
    this._storageLvm = config.storageLvm;
    this._taints = config.taints;
    this._templateId = config.templateId;
    this._version = config.version;
    this._zone = config.zone;
    this._kubeletImageGc.internalValue = config.kubeletImageGc;
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

  // created_at - computed: true, optional: true, required: false
  private _createdAt?: string; 
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }
  public set createdAt(value: string) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
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

  // instance_pool_id - computed: true, optional: true, required: false
  private _instancePoolId?: string; 
  public get instancePoolId() {
    return this.getStringAttribute('instance_pool_id');
  }
  public set instancePoolId(value: string) {
    this._instancePoolId = value;
  }
  public resetInstancePoolId() {
    this._instancePoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancePoolIdInput() {
    return this._instancePoolId;
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

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
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

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
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

  // template_id - computed: true, optional: true, required: false
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  public resetTemplateId() {
    this._templateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
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
  private _kubeletImageGc = new DataExoscaleSksNodepoolKubeletImageGcList(this, "kubelet_image_gc", true);
  public get kubeletImageGc() {
    return this._kubeletImageGc;
  }
  public putKubeletImageGc(value: DataExoscaleSksNodepoolKubeletImageGc[] | cdktf.IResolvable) {
    this._kubeletImageGc.internalValue = value;
  }
  public resetKubeletImageGc() {
    this._kubeletImageGc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletImageGcInput() {
    return this._kubeletImageGc.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      anti_affinity_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._antiAffinityGroupIds),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      created_at: cdktf.stringToTerraform(this._createdAt),
      deploy_target_id: cdktf.stringToTerraform(this._deployTargetId),
      description: cdktf.stringToTerraform(this._description),
      disk_size: cdktf.numberToTerraform(this._diskSize),
      id: cdktf.stringToTerraform(this._id),
      instance_pool_id: cdktf.stringToTerraform(this._instancePoolId),
      instance_prefix: cdktf.stringToTerraform(this._instancePrefix),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      ipv6: cdktf.booleanToTerraform(this._ipv6),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      private_network_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._privateNetworkIds),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      size: cdktf.numberToTerraform(this._size),
      state: cdktf.stringToTerraform(this._state),
      storage_lvm: cdktf.booleanToTerraform(this._storageLvm),
      taints: cdktf.hashMapper(cdktf.stringToTerraform)(this._taints),
      template_id: cdktf.stringToTerraform(this._templateId),
      version: cdktf.stringToTerraform(this._version),
      zone: cdktf.stringToTerraform(this._zone),
      kubelet_image_gc: cdktf.listMapper(dataExoscaleSksNodepoolKubeletImageGcToTerraform, true)(this._kubeletImageGc.internalValue),
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
      created_at: {
        value: cdktf.stringToHclTerraform(this._createdAt),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_pool_id: {
        value: cdktf.stringToHclTerraform(this._instancePoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      template_id: {
        value: cdktf.stringToHclTerraform(this._templateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kubelet_image_gc: {
        value: cdktf.listMapperHcl(dataExoscaleSksNodepoolKubeletImageGcToHclTerraform, true)(this._kubeletImageGc.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataExoscaleSksNodepoolKubeletImageGcList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
